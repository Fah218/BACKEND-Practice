const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')
const app = express()


app.use(express.json())


//load env
dotenv.config();



const port = process.env.PORT || 3002

app.use(express.json())

//connect to database
connectDB();



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', productRoutes)



app.listen(port, () => {
  console.log(`Product app listening on port ${port}`)
})
