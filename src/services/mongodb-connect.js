const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unabel to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: "Something to do",
        complete: false
    }, mongoCallback);

    db.collection('Users').insertOne({
        name: "Yaroslav",
        aga: 22,
        location: "Zhitomir"
    }, mongoCallback);

    function mongoCallback(error, result) {
        if (error) {
            return console.log(error);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    }

    client.close();
});