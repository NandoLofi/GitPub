const express = require('express');
const app = express();


const port = 3000;


app.get("/", (req, res) => {
    // res.send("99 Bottles of Beer On The Wall")
    res.send(`
    <html>
        <body>
        <h1> 99 Bottles of Beer On The Wall </h1>
            <a href="">Pass It Around</a>
        </body>
    </htmL>
    `)
})


app.get("/:number", (req,res) =>{
    if(req.params.number === "0") {
        res.send(`
    <html>
        <body>
        <a href = "/">Back to home</a>
        </body>    
    </html>`
    )}
})


app.listen(port, () => {
    console.log('we are on port 3000')
});