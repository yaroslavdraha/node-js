
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

    getContentTypesAsyncWithPromise: () => {
        return new Promise((resolve, reject) => {
            // call to api
            setTimeout(() => {
                resolve(350);
            }, 1500);
        });
    }
};