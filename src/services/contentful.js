const db = require('./db');

module.exports = {
    add: (a, b) => a + b,

    getContentTypesSync: () => {
        return [
            'Blogs',
            'Leading'
        ]
    },

    getContentTypesAsync: (callback) => {
        setTimeout(() => {
            callback([
                'Blogs',
                'Leading'
            ]);
        }, 1000);
    },

    addContentType: (type) => {
        // check if exist

        db.saveContentType(type);

        // send email
    }
};