import { Schema, model, connect } from 'mongoose';

export type Guardina ={
  fatherName:string;
  fatherOccapation:string;
  fatherContactNumber:string
  motherName:string;
  motherContactNumber:string;
  motherContactNUmber:string
}

export type UserName = {
  firstName:string;
  middleName:string;
  lastName:string;
}

export type LocalGuardina = {
  name:string;
  occupation:string;
  contactNumber:string;
  address:string;
}

export type Student = {
  id:string;
  name:UserName,
  gender:'male'|'female';
  dateOfBirth:string;
  email:string;
  contactNumber:string;
  emergencyContactNumber:string;
  bloodGroup? : 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress:string;
  gurdian:Guardina;
  localgurdian:LocalGuardina;
  profileImg?:string;
  isActive?:'active'|'inactive',
}