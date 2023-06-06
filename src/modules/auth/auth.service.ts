import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from './Dto/user-login.Dto';
import { SignUpDto } from './Dto/user-signUp.dto';
import { JwtPayload, Tokens } from './types';
import { UserRepository } from '../user/user.repository';
import { HashService } from '../shared/services/hash.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
    private readonly hashService: HashService,
  ) {}

  async logIn(userLogInDto: UserLoginDto) {
    const user = await this.userRepository.findByEmail(userLogInDto.email);
    if (!user) {
      throw new BadRequestException('Credential is not valid');
    }

    const isPasswordValid = await this.hashService.compare(
      userLogInDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Credential is not valid');
    }

    return await this.getTokens({
      sub: user.id,
    });
  }

  async signUp(signUPDto: SignUpDto): Promise<Tokens> {
    await this.validateEmailForSignUp(signUPDto.email);

    const hashedPassword = await this.hashService.hash(signUPDto.password);

    const user = await this.userRepository.create({
      email: signUPDto.email,
      name: signUPDto.name,
      password: hashedPassword,
    });

    return await this.getTokens({
      sub: user.id,
    });
  }

  async getTokens(jwtPayload: JwtPayload): Promise<Tokens> {
    const secretKey = process.env.SECRET_KEY;
    const accessTokenOptions = { expiresIn: '15m' };

    const accessToken = await this.signToken(
      jwtPayload,
      secretKey,
      accessTokenOptions,
    );

    return { access_token: accessToken };
  }

  async signToken(payload: JwtPayload, secretKey: string, options: any) {
    return await this.jwtService.signAsync(payload, {
      secret: secretKey,
      ...options,
    });
  }

  async validateEmailForSignUp(email: string): Promise<boolean | undefined> {
    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new HttpException('Email alerdy exists!', 400);
    }
    return true;
  }
}
