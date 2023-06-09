# Student Management System

The Student Management System is a web application that allows administrators to manage student records, including creating new students, listing all students, updating student information, and deleting student records.

## Features

- Create a new student with details like name, age, course, year of completion, and phone number.
- List all students with pagination, sorting, and search functionality.
- Update student information.
- Delete student records.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- joi


## Prerequisites

Before running this application, make sure you have the following installed:

Node.js: https://nodejs.org
MongoDB: https://www.mongodb.com

## Getting Started

1. Create a .env file in the project root directory and add the following:
    MONGODB_URI=<your-mongodb-connection-uri>
    PORT=8082

Replace <your-mongodb-connection-uri> with your MongoDB connection URI.

2. Start the application:
    npm start

3. Open your browser and visit http://localhost:8082 to access the URL Shortener application.

## API Endpoints

POST /students: Create a new student.
GET /students: List all students.
PUT /students/:id: Update a specific student by ID.
DELETE /students/:id: Delete a specific student by ID.
