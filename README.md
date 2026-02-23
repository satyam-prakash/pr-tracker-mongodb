# PR Tracker - MongoDB Service

A dedicated MongoDB data service for the PR Tracker application that centralizes all database operations and provides RESTful APIs for data management.

## Overview

This microservice handles all MongoDB operations for the PR Tracker application, including:
- User management
- Repository management
- Pull request tracking
- Code review management

## Features

- **Centralized Data Management**: All MongoDB operations in one place
- **RESTful API**: Clean and intuitive endpoints
- **Service Layer Pattern**: Separation of concerns for better maintainability
- **Mongoose ODM**: Schema validation and powerful querying
- **Error Handling**: Comprehensive error handling middleware
- **Security**: Helmet.js for security headers

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Helmet (Security)
- CORS

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pr-tracker-mongodb
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your configuration:
   ```env
   PORT=5003
   MONGODB_URI=mongodb://127.0.0.1:27017/prtracker
   NODE_ENV=development
   ```

4. **Start the service**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Health Check
- `GET /health` - Service health check

### Users
- `POST /api/users` - Create a new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `GET /api/users/github/:githubId` - Get user by GitHub ID
- `PUT /api/users/github/:githubId` - Update user
- `DELETE /api/users/github/:githubId` - Delete user

### Repositories
- `POST /api/repositories` - Create a new repository
- `GET /api/repositories` - Get all repositories
- `GET /api/repositories/:id` - Get repository by ID
- `GET /api/repositories/github/:githubId` - Get repository by GitHub ID
- `GET /api/repositories/owner/:owner` - Get repositories by owner
- `PUT /api/repositories/github/:githubId` - Update repository
- `DELETE /api/repositories/github/:githubId` - Delete repository

### Pull Requests
- `POST /api/pullrequests` - Create a new pull request
- `GET /api/pullrequests` - Get all pull requests
- `GET /api/pullrequests/:id` - Get pull request by ID
- `GET /api/pullrequests/github/:githubId` - Get pull request by GitHub ID
- `GET /api/pullrequests/repository/:repositoryId` - Get pull requests by repository
- `GET /api/pullrequests/state/:state` - Get pull requests by state
- `GET /api/pullrequests/author/:author` - Get pull requests by author
- `PUT /api/pullrequests/github/:githubId` - Update pull request
- `PUT /api/pullrequests/github/:githubId/merge` - Merge pull request
- `PUT /api/pullrequests/github/:githubId/close` - Close pull request
- `DELETE /api/pullrequests/github/:githubId` - Delete pull request

### Reviews
- `POST /api/reviews` - Create a new review
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/:id` - Get review by ID
- `GET /api/reviews/github/:githubId` - Get review by GitHub ID
- `GET /api/reviews/pullrequest/:pullRequestId` - Get reviews by pull request
- `GET /api/reviews/user/:user` - Get reviews by user
- `GET /api/reviews/state/:state` - Get reviews by state
- `PUT /api/reviews/github/:githubId` - Update review
- `DELETE /api/reviews/github/:githubId` - Delete review

## Project Structure

```
pr-tracker-mongodb/
├── src/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── repositoryController.js
│   │   ├── pullRequestController.js
│   │   └── reviewController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Repository.js
│   │   ├── PullRequest.js
│   │   ├── Review.js
│   │   └── index.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── repositoryRoutes.js
│   │   ├── pullRequestRoutes.js
│   │   └── reviewRoutes.js
│   ├── services/
│   │   ├── userService.js
│   │   ├── repositoryService.js
│   │   ├── pullRequestService.js
│   │   ├── reviewService.js
│   │   └── index.js
│   ├── middleware/
│   │   └── errorHandler.js
│   └── index.js                  # Main application file
├── .env.example
├── .gitignore
├── Dockerfile
├── package.json
└── README.md
```

## Docker Support

Build and run with Docker:

```bash
# Build the image
docker build -t pr-tracker-mongodb .

# Run the container
docker run -p 5003:5003 --env-file .env pr-tracker-mongodb
```

## Development

```bash
# Run in development mode with nodemon
npm run dev

# Run tests (when implemented)
npm test
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5003 |
| MONGODB_URI | MongoDB connection string | mongodb://127.0.0.1:27017/prtracker |
| NODE_ENV | Environment (development/production) | development |

## Models

### User Model
- GitHub authentication details
- User profile information
- Associated repositories

### Repository Model
- Repository information from GitHub
- Owner details
- Statistics (stars, forks, issues)
- Associated users

### PullRequest Model
- PR details and metadata
- State management (open, closed, merged)
- Author and reviewers
- Code change statistics

### Review Model
- Review information
- Reviewer details
- Review state (APPROVED, CHANGES_REQUESTED, etc.)
- Associated pull request

## Error Handling

All errors are handled by the global error handler middleware and return JSON responses:

```json
{
  "success": false,
  "error": "Error message here",
  "stack": "Stack trace (development only)"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

ISC
