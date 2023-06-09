import express from 'express';
import { create, list, remove, update } from './controller.js';
import { listValidator, studentValidation, updateValidation } from './validator.js';

// Create a new router instance
const router = express.Router();

// Route for creating a new student
router.post('/student', studentValidation, create);

// Route for listing students
router.get('/student/list', listValidator, list);

// Route for updating a student
router.put('/student/:id', updateValidation, update);

// Route for removing a student
router.delete('/student/:id', remove);

export default router;
