import { Student } from "./interface.students";
import { StudentModel } from "./model.student";

const createStudentIntoDb = async(student:Student)=>{
const result = await StudentModel.create(student);
return result;
}


const getAllStudentFromDb=async()=>{
  const result = await StudentModel.find()
  return result;
}

const getSingleStudentFromDb=async(id:string)=>{
  const result = await StudentModel.find({id})
  return result;
}


export const studentServices={
  createStudentIntoDb,
  getAllStudentFromDb,
  getSingleStudentFromDb
}