import express, { Application, Request, Response } from 'express'
import cors from 'cors'
// const port = 3000
const app: Application = express()

//middle
app.use(cors())
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  const a = 10

  res.send(a)
})

export default app
