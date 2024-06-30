# PS Backend

PS Backend is the backend system for a feedback application, designed to handle and process user feedback efficiently.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Handles user feedback submissions
- Stores feedback data securely
- Provides API endpoints for feedback operations
- Supports CRUD operations

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **NestJS**: Progressive Node.js framework
- **TypeScript**: Typed superset of JavaScript
- **Prisma**: Database ORM for TypeScript and Node.js
- **PostgreSQL**: Relational database management system

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/pdrohrosario/ps-backend.git
    ```
2. Navigate to the project directory:
    ```sh
    cd ps-backend
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run start
    ```
2. Start the server in watch mode:
    ```sh
    npm run start:dev
    ```
3. Start the server in production mode:
    ```sh
    npm run start:prod
    ```

## Project Structure

- `prisma/`: Prisma schema and migrations
- `src/`: Source code
  - `controllers/`: Controllers for handling requests
  - `services/`: Services for business logic
  - `modules/`: Modules for organizing the code
  - `main.ts`: Entry point of the application
- `test/`: Test files
- `.env`: Environment configuration

## Contributing

1. Fork the project.
2. Create a branch for your feature (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
