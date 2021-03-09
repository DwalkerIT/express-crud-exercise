import express from 'express'
const app = express()
import todosRoutes from './routes/todos.js'
app.use('/api', todosRoutes)
app.listen(3001, () => {
    console.log('running')
})