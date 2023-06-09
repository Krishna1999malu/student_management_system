import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
  yearOfCompletion: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
