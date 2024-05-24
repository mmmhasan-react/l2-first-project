import express from 'express'
import { stucentsController } from './controller.students'


const router = express.Router()


//will call controller function
router.post('/create-student', stucentsController.createStudent)
router.get('/', stucentsController.getAllStudents)
router.get('/:studentId', stucentsController.getSingleStudent)

export const studentRout = router;