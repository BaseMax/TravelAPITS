import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserLoginDto } from './Dto/user-login.Dto';
import { SignUpDto } from './Dto/user-signUp.dto';
import { Public } from 'src/common/decorators';
import { AtGuard } from './guards/at.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() signUpDto: SignUpDto) {
    const token = await this.authService.signUp(signUpDto);
    return { access_token: token.access_token };
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() userLogInDto: UserLoginDto) {
    const token = await this.authService.logIn(userLogInDto);

    return { access_token: token.access_token };
  }

  @Post('check')
  @UseGuards(AtGuard)
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async check() {
    return true;
  }
}
