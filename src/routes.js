const contentful = require('contentful');

let content = require('./services/contentful');

console.log(content.add(1,3));

const SPACE_ID = '9ohq3e1oeptw';
const ACCESS_TOKEN = '26fe209f5088f2dcdfa1c379a65bcae7a5b2428facfdf867f3d9d517e4ebc5e9';

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
});

// function fetchContentTypes () {
//     return client.getContentTypes()
//         .then((response) => {
//             debugger;
//             response.items;
//         })
//         .catch((error) => {
//             console.log(chalk.red('\nError occurred while fetching Content Types:'));
//             console.error(error)
//         })
// }


// Load all entries for a given Content Type from Contentful
function fetchEntriesForContentType(contentType) {
    return client.getEntries({
        content_type: contentType
    })
        .then((response) => response.items)
        .catch((error) => {
        })
}

fetchEntriesForContentType('blogAtricle')
    .then(items => {
        debugger;
    });