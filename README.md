# Travel API

This is a RESTful API for managing travel-related information, including cities, tourist places, and user authentication. It is built with NestJS and TypeScript.

## Features

- Create a city
- Get a list of all cities
- Search for cities
- Delete a city
- Edit a city
- Add tourist places for a city
- Delete a tourist place
- Edit a tourist place
- User registration
- User login
- Authenticated routes

## Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)
- PostgreSQL (version X.X.X)

## Installation

Clone the repository:

```shell
git clone https://github.com/BaseMax/TravelAPITS.git
```

Install the dependencies:

```shell
cd TravelAPITS
npm install
```

Configure the database:

- Create a PostgreSQL database.
- Update the database configuration in `src/config/database.ts`.

Run database migrations:

```shell
npm run migration:run
```

Start the server:

```shell
npm run start:dev
```

The API server will start running at http://localhost:3000.

## API Endpoints

### Cities

- `POST /cities` - Create a city
- `GET /cities` - Get a list of all cities
- `GET /cities/search?q={query}` - Search for cities (replace {query} with the search term)
- `GET /cities/{id}` - Get details of a specific city
- `PUT /cities/{id}` - Update a specific city
- `DELETE /cities/{id}` - Delete a specific city

### Tourist Places

- `POST /cities/{cityId}/tourist-places` - Add a tourist place for a city
- `GET /cities/{cityId}/tourist-places` - Get tourist places for a city
- `GET /cities/{cityId}/tourist-places/{id}` - Get details of a specific tourist place
- `PUT /cities/{cityId}/tourist-places/{id}` - Update a specific tourist place
- `DELETE /cities/{cityId}/tourist-places/{id}` - Delete a specific tourist place

### Authentication

- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/check` - Check authentication status

## Environment Variables

Make sure to set the following environment variables:

- `PORT` - The port on which the server will run (default: 3000)
- `DATABASE_HOST` - PostgreSQL database host
- `DATABASE_PORT` - PostgreSQL database port
- `DATABASE_USERNAME` - PostgreSQL database username
- `DATABASE_PASSWORD` - PostgreSQL database password
- `DATABASE_NAME` - PostgreSQL database name
- `JWT_SECRET` - Secret key for JSON Web Token generation

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is licensed under the GPL-3.0 License.

Copyright 2023, Max Base
