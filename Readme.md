# Task Management System Backend

This repository contains the backend for a task management system built with Node.js. It provides APIs for user authentication, task management, and category management.

## API Endpoints

### Authentication

- `POST /api/signup` - Register a new user
- `POST /api/login` - Authenticate a user

### Tasks

- `POST /tasks` - Create a new task
- `GET /tasks` - Retrieve all tasks
- `GET /tasks/:id` - Retrieve a specific task by ID
- `PUT /tasks/:id` - Update a specific task by ID
- `DELETE /tasks/:id` - Delete a specific task by ID

### Categories

- `POST /categories` - Create a new category
- `GET /categories` - Retrieve all categories

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
