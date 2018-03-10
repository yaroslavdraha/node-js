const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unabel to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5aa2e0b8bef0bb28885645aa')},
        {
            $set: {
                name: "Yaroslav 2"
            },
            $inc: {
                aga: 1
            }
        },
        {
            returnOriginal: false
        }
    ).then((res) => {
        console.log(res);
    });

    client.close();
});