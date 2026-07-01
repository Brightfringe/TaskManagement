# Task Management System

A full-stack Task Management application built using **Spring Boot**, **React**, and **PostgreSQL**. The application provides secure JWT-based authentication, role-based authorization, and complete CRUD functionality for managing tasks. It follows RESTful API principles, layered architecture, and scalable project design.

---

## Features

### Authentication
- User Registration
- User Login
- JWT Token Authentication
- BCrypt Password Encryption
- Stateless Session Management

### Role-Based Access Control

#### USER
- Register and Login
- Create Tasks
- View Own Tasks
- Update Own Tasks
- Delete Own Tasks

#### ADMIN
- Login
- View All Users' Tasks
- Update Any Task
- Delete Any Task

---

## Task Management

- Create Task
- View Tasks
- Update Task
- Delete Task
- Task Status Management
  - Pending
  - In Progress
  - Completed

---

## Backend Features

- RESTful APIs
- API Versioning (`/api/v1`)
- Spring Security
- JWT Authentication
- BCrypt Password Hashing
- Request Validation
- Global Exception Handling
- PostgreSQL Database
- Spring Data JPA (Hibernate)
- Swagger/OpenAPI Documentation
- CORS Configuration
- Layered Architecture

---

## Frontend Features

- React + Vite
- React Router
- Axios
- Bootstrap 5
- Login & Registration UI
- Responsive Dashboard
- Task CRUD Operations
- Protected API Calls Using JWT

---

# Tech Stack

## Backend

- Java 21
- Spring Boot 3
- Spring Security
- Spring Data JPA
- Hibernate
- JWT
- PostgreSQL
- Maven
- Swagger OpenAPI

## Frontend

- React
- Vite
- Axios
- React Router DOM
- Bootstrap 5

---

# Project Structure

```
task-management-system
│
├── backend
│   ├── src
│   ├── pom.xml
│   └── README.md
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── postman
│   └── TaskManagement.postman_collection.json
│
├── screenshots
│   ├── login.png
│   ├── register.png
│   ├── dashboard.png
│   └── swagger.png
│
└── README.md
```

---

# Database Schema

## Users Table

| Field | Type |
|---------|------|
| id | Long |
| name | String |
| email | String |
| password | String |
| role | USER / ADMIN |

---

## Tasks Table

| Field | Type |
|---------|------|
| id | Long |
| title | String |
| description | String |
| status | PENDING / IN_PROGRESS / COMPLETED |
| createdAt | Timestamp |
| user_id | Foreign Key |

---

# REST API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/auth/register` | Register User |
| POST | `/api/v1/auth/login` | Login User |

---

## Task APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/tasks` | Get Tasks |
| GET | `/api/v1/tasks/{id}` | Get Task By ID |
| POST | `/api/v1/tasks` | Create Task |
| PUT | `/api/v1/tasks/{id}` | Update Task |
| DELETE | `/api/v1/tasks/{id}` | Delete Task |

---

# API Documentation

Swagger UI

```
http://localhost:8080/swagger-ui/index.html
```

---

# Running the Project

## Clone Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/task-management-system.git
```

---

## Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
mvn clean install
```

Run application

```bash
mvn spring-boot:run
```

Backend runs at

```
http://localhost:8080
```

---

## Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run application

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# Authentication Flow

1. User registers with name, email and password.
2. Password is encrypted using BCrypt.
3. User logs in with valid credentials.
4. Backend generates a JWT token.
5. Frontend stores the JWT token.
6. JWT is attached to every protected API request.
7. Spring Security validates the token before processing the request.

---

# Security Features

- JWT Authentication
- BCrypt Password Encryption
- Role-Based Authorization
- Protected REST APIs
- Stateless Authentication
- Input Validation
- Exception Handling
- CORS Configuration

---

# Scalability Considerations

The project follows a layered architecture, making it easy to extend.

Future improvements include:

- Docker Support
- Redis Caching
- Microservices Architecture
- API Gateway
- Load Balancer
- Pagination
- Search & Filtering
- Unit Testing
- Integration Testing
- CI/CD Pipeline
- Cloud Deployment (AWS / Azure / GCP)

---

# Screenshots

## Login Page

![Login](screenshots/login.png)

---

## Registration Page

![Register](screenshots/register.png)

---

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## Swagger Documentation

![Swagger](screenshots/swagger.png)

---

# Postman Collection

The complete API collection is available in the **postman** directory.

```
postman/
└── TaskManagement.postman_collection.json
```

Import this collection into Postman to test all APIs.

---

# Assignment Requirements Covered

| Requirement | Status |
|------------|--------|
| User Registration | Completed |
| User Login | Completed |
| Password Hashing | Completed |
| JWT Authentication | Completed |
| Role-Based Access | Completed |
| CRUD APIs | Completed |
| API Versioning | Completed |
| Validation | Completed |
| Global Exception Handling | Completed |
| Swagger Documentation | Completed |
| PostgreSQL Database | Completed |
| React Frontend | Completed |
| Dashboard | Completed |
| Authentication Integration | Completed |

---

# Future Enhancements

- Email Verification
- Forgot Password
- Task Search
- Task Filtering
- Task Categories
- File Attachments
- Notifications
- Activity Logs
- Docker Deployment
- Redis Integration
- Cloud Deployment

---

# Author

**Shubhangi Sharma**

GitHub

[https://github.com/Brightfringe](https://github.com/Brightfringe)

LinkedIn

www.linkedin.com/in/shubhangi-sharma-a84121212

---

# License

This project was developed as part of a Backend Developer Internship assignment for **Primetrade.ai**. It is intended for educational and evaluation purposes.
