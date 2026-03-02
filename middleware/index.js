const express = require('express')
const app = express()
const port = 3000

//loading middleware into app

//inbuilt middleware
// app.use(express.json());


// //middleware- loggin,auth,validation


// //creation of a middleware
// const logginMiddleware = function (req, res, next) {
//     console.log("Login krr rha hun")
//     next();
// }
// //loading into appplication 
// app.use(logginMiddleware)



// const authMiddleware = function (req, res, next) {
//     console.log("auth krr rha hun")
//     next();
// }

// app.use(authMiddleware)

// const validationnMiddleware = function (req, res, next) {
//     console.log("validationkrr rha hun")
//     next();
// }

// app.use(validationnMiddleware)





const route=require('./routes/route');
//mounting the route
app.use('/api',route)




app.get('/', (req, res) => {
    console.log("main route handler hun")
    console.log(req.body)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
