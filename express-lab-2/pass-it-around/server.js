const express = require('express');
const app = express();


const port = 3000;


app.get("/", (req, res) => {
    res.send(`
    <html>
        <body>
        <h1> 99 Bottles of Beer On The Wall </h1>
            <a href="">Pass It Around</a>
        </body>
    </htmL>
    `)
})
app.get("/:number", (req,res) => {
    if(req.params.number === "1") {
        res.send(`
    <html>
        <body>
        <p> There are no more bottles left </P>
        <a href = "/">Back to home</a>
        </body>    
    </html>`
    )}
    else {
        res.send(req.params.number - 1 +' Bottles of beer left on the wall')
    }
})

// //If user inputs number, send back text saying number of bottles left and url
// app.get("/:numberofbottles/", (req, res) => {
// res.send(req.params.numberofbottles - 1 +' Bottles of beer left on the wall')
// })

app.listen(port, () => {
    console.log('we are on port 3000')
});