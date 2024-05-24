import { Schema, model, connect } from 'mongoose';
import { Guardina, LocalGuardina, Student, UserName } from './interface.students';

const userNameSchema = new Schema<UserName>(
  {
    firstName:{
      type:String,
      required:true,
    },
    middleName:{
      type:String,
      required:true,
    },
    lastName:{
      type:String,
      required:true,
    },
  },
)

const guardianSchema = new Schema<Guardina>(
  {
    fatherName:String,
    fatherOccapation:String,
    fatherContactNumber:String,
    motherName:String,
    motherContactNumber:String,
    motherContactNUmber:String,
  }
)

const localGuardinSchema = new Schema<LocalGuardina>(
  {
    name:String,
    occupation:String,
    contactNumber:String,
    address:String,
  }
)

const studentSchema = new Schema<Student>({
  id:{type:String},
  name:userNameSchema,
  gender:['male','female'],
  dateOfBirth:{
    type:String,
    required:true,

  },
  email:{
    type:String,
    required:true,
  },
  contactNumber:{
    type:String,
    required:true,
  },
  emergencyContactNumber:{
    type:String,
    required:true
  },
  bloodGroup : ['A+', 'A-','B+', 'B-','AB+', 'AB-', 'O+', 'O-'],
  presentAddress: {
    type:String,
    required:true,
  },
  permanentAddress:{
    type:String,
    required:true
  },
  gurdian:guardianSchema,
  localgurdian:localGuardinSchema,
  profileImg?:String,
  isActive?:['active','inactive']
})



export const StudentModel = model<Student>('student', studentSchema)