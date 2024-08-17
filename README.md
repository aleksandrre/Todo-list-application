# Full Stack Book Management Application

## Overview

A full stack application for managing books. It includes a React frontend and an Express backend with MongoDB for storage.

## Project Structure

/project-root
/frontend # React frontend application with Vite
/backend # Express backend application
README.md # This file

# Installation

### Frontend

1. Navigate to the `frontend` directory:

   cd frontend

   Install dependencies:

   npm install

   Start the development server:
   npm start

   Backend

Navigate to the backend directory:
cd backend

Install dependencies:
npm install

Start the development server:
npm start

Configuration
Create a .env file in the backend directory with the following content:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xvb47fa.mongodb.net/?retryWrites=true&w=majority
PORT=5000
Replace <username> and <password> with your MongoDB credentials.

Usage
Frontend: Access the application at http://localhost:3000
Backend: The API is available at http://localhost:5000/books

API Endpoints
GET /books: Retrieve all books
POST /books: Create a new book
GET /books/
: Retrieve a specific book by ID
PUT /books/
: Update a book by ID
DELETE /books/
: Delete a book by ID
DELETE /books: Delete all books

Testing
To run tests for each part:

Frontend:
bash

cd frontend
npm test

Backend:
bash

cd backend
npm test
