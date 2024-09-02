# NestJS Products API

## Overview

This project is a RESTful API built with NestJS and MongoDB, designed to manage product data. It offers efficient CRUD operations and leverages MongoDB for data storage.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete products.
- **MongoDB**: Utilizes MongoDB for storing product information.
- **Swagger**: Integrated Swagger UI for API documentation.
- **Nodemon**: Automatically restarts the server when code changes are detected.
- **TypeScript**: Fully written in TypeScript for better development experience.

## Setup and Running

1. **Clone the repository**:
    ```bash
    git clone https://github.com/LuisVasquez23/nestjs-products-api.git
    cd nestjs-products-api
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Configure environment variables**:
    Create a `.env` file in the root directory and add the following variable:
    ```env
    MONGO_URI=mongodb://localhost:27017/nestjs-products
    ```

4. **Run the application in development mode**:
    ```bash
    npm run start:dev
    ```

5. **Build and run the application in production mode**:
    ```bash
    npm run build
    npm run start:prod
    ```

6. **Explore the API**:
    The API can be tested using tools like Postman or through the built-in Swagger UI available at `http://localhost:3000/api-docs`.

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the UNLICENSED license.

## Author

- Luis Enrique Vásquez Aquila
