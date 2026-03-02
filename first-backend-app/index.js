//including express module and initialization an app

const express = require('express');
const app = express();

const port = 3000


app.get('/', (req,res) => {
    res.send("Hello World!")
})


// request > get/put/post/delete
//path - /,/about,/articles,/blog

app.listen(port, () => {
    console.log("Application start ho chuki h")
})