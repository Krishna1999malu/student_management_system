import { createStudent, getAllStudents, updateStudent, removeStudent } from './service.js';
import { failedResponse, goodResponse } from '../helper/response.js';

// Create a new student
const create = async (req, res) => {
  try {
    const user = await createStudent(req.body); // Call the createStudent function with the request body
    res.json(goodResponse({ user }, 'New student created.')); // Send a success response with the created student
  } catch (error) {
    res.json(failedResponse(error.message)); // Send an error response with the error message
  }
};

// Get a list of students
const list = async (req, res) => {
  const data = await getAllStudents(req.query); // Call the getAllStudents function with the query parameters
  return res.status(200).json(goodResponse(data, 'Student fetched successfully')); // Send a success response with the student data
};

// Update a student
const update = async (req, res) => {
  const result = await updateStudent(req.params.id, req.body); // Call the updateStudent function with the student ID and request body
  return res.status(200).json(goodResponse({ result }, 'Student updated successfully')); // Send a success response with the updated student
};

// Remove a student
const remove = async (req, res) => {
  await removeStudent(req.params.id); // Call the removeStudent function with the student ID
  return res.json(goodResponse({}, 'Student deleted successfully')); // Send a success response for the deleted student
};

export { create, list, update, remove }; 
