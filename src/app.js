const express = require('express');
const port = process.env.PORT || 3000;

let app = new express();

app.get('/', (req, res) => {
    res.send({
        name: "Sashko",
        description: "Painted ass"
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: "Yaroslav",
            age: 22
        },
        {
            name: "Anita",
            age: 24
        }
    ]);
});


app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});

module.exports = app;