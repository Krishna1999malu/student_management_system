import BadRequest from '../helper/badRequest.js';
import Student from '../model/student.js';

// Function to create a new student
const createStudent = async (data) => {
    try {
      const newStudent = await Student.create({
        name: data.name,
        age: data.age,
        course: data.course,
        yearOfCompletion: data.yearOfCompletion,
        phone: data.phone
      });
  
      return newStudent;
    } catch (error) {
      throw error;
    }
  };

// Function to get all students
  const getAllStudents = async (data) => {
    const { page, limit, name, sortBy, sortOrder } = data;
    const skip = (page - 1) * limit;
  
    const query = {
    };
  
    if (name) {
        query.$or = [
          { name: { $regex: new RegExp(name, 'i') } },
          { phone: { $regex: new RegExp(name, 'i') } },
        ];
      }
  
    const sortOptions = {};
  
    if (sortBy === 'name') {
      sortOptions.name = sortOrder === 'asc' ? 1 : -1;
    } else {
      sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
    }
  
    const students = await Student.find(query)
    .collation({ locale: 'en', strength: 2 })
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);
  
    return  students

  };
  
  // Function to update a student
  const updateStudent = async (id, data) => {

    try {
        const student = await Student.findByIdAndUpdate(id, data, { new: true });
    
        if (!student) {
            throw new BadRequest('Not found', 'NOT_FOUND');
        }
    
        return student;
      } catch (error) {
        throw error;
      }
  };

  // Function to remove a student
  const removeStudent = async (id) => {
    try {
      const student = await Student.findByIdAndRemove(id);
  
      if (!student) {
        throw new BadRequest('Student not found', 'NOT_FOUND');
      }
  
      return student;
    } catch (error) {
      throw error;
    }
  };
  
export { createStudent, getAllStudents, updateStudent, removeStudent };
