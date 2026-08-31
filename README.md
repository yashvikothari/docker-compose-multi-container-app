# Docker Compose Multi-Container Application

## Project Overview

This project demonstrates how to containerize and deploy a multi-container web application using Docker and Docker Compose.

The application consists of:

* Frontend – Nginx serving HTML
* Backend – Node.js/Express API
* Database – MongoDB
* Docker Network – Custom bridge network
* Docker Volume – Persistent MongoDB storage

## Architecture

```text
Browser
   |
   v
Frontend - Nginx :8080
   |
   v
Backend - Node.js :3000
   |
   v
Database - MongoDB :27017
   |
   v
mongo_data volume
```

## Technologies Used

* Docker
* Docker Compose
* Nginx
* Node.js
* Express.js
* MongoDB
* Git
* GitHub
* Docker Hub

## Project Structure

```text
docker-compose-project/
│
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── index.html
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── docker-compose.yml
└── README.md
```

## Deployment Steps

### 1. Build the application

```bash
docker compose build
```

### 2. Start containers

```bash
docker compose up -d
```

### 3. Verify containers

```bash
docker compose ps
```

### 4. Verify network

```bash
docker network ls
```

### 5. Verify volume

```bash
docker volume ls
```

### 6. Access application

Open:

```text
http://localhost:8080
```

Click the **Check Backend** button.

The application should display:

```text
Frontend → Backend → MongoDB communication successful!
```

## Docker Network

A custom bridge network named `app-network` is configured.

All three services communicate through this network using Docker service names.

For example:

```text
frontend → backend:3000
backend → database:27017
```

## Persistent Storage

MongoDB uses the named Docker volume:

```text
mongo_data
```

This ensures database data persists even when the MongoDB container is recreated.

## Docker Hub

Custom frontend and backend images were built and pushed to Docker Hub.

```text
YOUR_USERNAME/docker-compose-frontend
YOUR_USERNAME/docker-compose-backend
```

## Verification

The deployment was verified by:

* Checking running containers
* Accessing the frontend from a browser
* Testing frontend-to-backend communication
* Testing backend-to-MongoDB communication
* Inspecting the Docker network
* Inspecting the Docker volume
* Verifying images on Docker Hub

## Implementation Summary

The web application was successfully containerized using Dockerfiles for the frontend and backend. Docker Compose was used to deploy the frontend, backend, and MongoDB database as separate containers. A custom Docker bridge network enabled service-to-service communication, while a named Docker volume provided persistent database storage. Custom frontend and backend images were pushed to Docker Hub, and the complete project was uploaded to GitHub for version control and submission.
