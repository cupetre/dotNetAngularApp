# Full-Stack Web Application — Angular + .NET

A full-stack web application built using Angular and .NET, designed to demonstrate modern client-server architecture, API integration, and scalable deployment practices.

## Overview

This project represents a complete end-to-end web system where a frontend client communicates with a backend API to manage and process data.

The focus of the project is on:
- clean separation between frontend and backend
- RESTful API design
- real-world deployment structure
- scalable architecture using containerization

## Architecture

The application follows a typical modern web architecture:

Client (Angular)
↓
REST API (.NET)
↓
Database (PostgreSQL / SQL Server)

In deployment, the system is extended with:

Client (Angular)
↓
Nginx Reverse Proxy
↓
.NET API
↓
Database

This setup allows routing, scaling, and separation of concerns between components.

## Frontend

The frontend is built using Angular and focuses on:

- component-based architecture
- structured routing
- HTTP communication with backend services
- responsive UI design

Key responsibilities:
- rendering data from the API
- handling user interaction
- managing application state on the client side

## Backend

The backend is built using .NET Web API and is responsible for:

- handling HTTP requests
- implementing business logic
- validating data
- interacting with the database

Core backend features:
- RESTful endpoints
- structured controllers and services
- data access layer using Entity Framework
- centralized error handling

## Database

The application uses a relational database for persistent storage.

Responsibilities:
- storing application data
- supporting queries and relationships
- ensuring data consistency

## Features

- full-stack client-server communication
- API-driven data flow
- CRUD operations
- structured routing and navigation
- backend validation and error handling
- scalable deployment-ready structure

## DevOps & Deployment

The project is designed with deployment in mind and includes:

- Docker containerization
- multi-service setup (frontend, backend, database)
- Nginx reverse proxy for routing
- environment-based configuration

This setup allows the application to be deployed on a VPS or cloud environment with minimal changes.

## Project Structure

The system is divided into multiple parts:

- Frontend (Angular)
- Backend (.NET API)
- Database
- Infrastructure (Docker, Nginx)

Each part is independently maintainable and deployable.

## Challenges Solved

- connecting frontend and backend across different environments
- handling CORS configuration properly
- managing environment-based API URLs
- structuring a scalable backend
- deploying multiple services using Docker
- configuring reverse proxy routing

## Security Considerations

- environment variables for configuration
- separation of frontend and backend
- controlled API access
- avoidance of exposing sensitive data in the client

## Future Improvements

- authentication and authorization
- role-based access control
- improved UI/UX
- logging and monitoring
- CI/CD pipeline
- cloud deployment optimization

## What I Learned

- how frontend and backend systems communicate in real-world applications
- how to structure a scalable API
- how to manage cross-origin communication (CORS)
- how to deploy full-stack applications using Docker and Nginx
- how to debug issues across multiple layers of the system

## Note

Some parts of the backend and deployment configuration may be simplified or kept private for security and clarity.

## Author

Built by Hristijan Chupetreski.
