const express = require('express')
require('./db/mongoose.js')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port')
})

const jwt = require('jsonwebtoken')

const myFunction = async () => {
    jwt.sign({ _id: 'abc124'}, 'this is my new project', {expiresIn: '7days'})
    console.log(token)

    const data = jwt.verify(token, 'this is my new project')
    console.log(data)
}

myFunction()