const express = require('express');

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

app.listen(3000);