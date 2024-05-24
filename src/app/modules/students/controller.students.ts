import { Request, Response } from "express";
import { studentServices } from "./service.students";

const createStudent = async(req:Request, res:Response)=>{

 try{
  const student = req.body.students;
  
  //will call service function to send data
  const result =await studentServices.createStudentIntoDb(student)

  ///send repsponse
  res.status(200).json({
    success:true,
    message:"student create successfully",
    data:result,
  })
 }catch(err){
  console.log(err)
 }
}


export const getAllStudents=async(req:Request, res:Response)=>{
  try{
    const result = await studentServices.getAllStudentFromDb();
    res.status(200).json({
      success:true,
      message:"student data retrive successfully",
      data:result,
    })
  }catch(err){
    console.log(err)
  }
}


export const getSingleStudent=async(req:Request, res:Response)=>{
  try{
    const {studentId} = req.params;
    const result = await studentServices.getSingleStudentFromDb(studentId);
    res.status(200).json({
      success:true,
      message:"signle student data retrive successfully",
      data:result,
    })
  }catch(err){
    console.log(err)
  }
}




export const stucentsController = {
  createStudent,
  getAllStudents,
  getSingleStudent
}