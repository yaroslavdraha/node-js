const express = require('express');
const port = process.env.PORT || 3000;

let app = new express();

app.use((req, res, next) => {
    let now = new Date().toString();
    console.log(now);
    next();
});

app.get('/', (req, res) => {
    res.send({
        test: 1
    });
});

app.get('/users', (req, res) => {
    res.send([
        {
            name: "yaroslav",
            lastname: "draha"
        }
    ]);
});

app.get('/user', (req, res) => {
    res.send(
        {
            name: "yaroslav",
            lastname: "draha"
        }
    );
});

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});