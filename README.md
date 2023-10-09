# Task App Server

This is a Node.js server project for a tasks application, built with TypeScript and MongoDB, following the Hexagonal architecture pattern.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Task App Server is a backend application that provides the core functionality for managing tasks. It is built with Node.js and TypeScript, using MongoDB as the database to store and retrieve task data. The architecture of this server follows the Hexagonal architecture pattern, which promotes separation of concerns and maintainability.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (v14.0.0 or higher)
- npm (Node Package Manager) installed
- MongoDB server running (you can use a local or remote MongoDB instance)
- TypeScript installed globally (`npm install -g typescript`)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/task-app-server.git
   ```

2. Change into the project directory:

   ```bash
   cd task-app-server
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and configure your MongoDB connection URL and other environment variables as needed:

   ```
    PORT=9000

    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.ycel4.mongodb.net
    MONGO_DB_NAME=dbname
   ```

5. Compile TypeScript code:

   ```bash
   npm run build
   ```

6. Start the server:

   ```bash
   npm start
   ```

## Usage

The server will be running at `http://localhost:9000` by default. You can use tools like Postman or cURL to interact with the API endpoints. Please refer to the [API Documentation](#api-documentation) section for detailed information on available endpoints and their usage.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow our [Contributing Guidelines](./CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
