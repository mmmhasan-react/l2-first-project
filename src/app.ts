import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { studentRout } from './app/modules/students/rout.students'
// const port = 3000
const app: Application = express()

//middle
app.use(cors())
app.use(express.json())
app.use('/api/v1/students', studentRout)
app.get('/', (req: Request, res: Response) => {
  const a = 10

  res.send(a)
})

export default app
