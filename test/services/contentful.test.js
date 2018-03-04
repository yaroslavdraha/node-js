const chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
const sinon = require('sinon');



// const assertArrays = require('chai-arrays');
// chai.use(assertArrays);

const Contentful = require('../../src/services/contentful');

describe('Contentful operations', function () {
    /*it('should add two numbers', () => {
        let result = Contentful.add(100, 200);
        assert.equal(300, result);
        assert.isNumber(result, "The result is not a number motherfucker!");
    });

    it('should fetch content types', () => {
        let contentTypes = Contentful.getContentTypesSync();

        assert.isArray(contentTypes);
        expect(contentTypes).to.be.an('array').that.include('Blogs');
    });

    it('should fetch content types async', function (done) {
        Contentful.getContentTypesAsync((contentTypes) => {
            assert.isArray(contentTypes);
            expect(contentTypes).to.be.an('array').that.include('Blogs');
            done();
        });
    });

    it('should fetch content types async with promise', function (done) {
        // Contentful.getContentTypesAsyncWithPromise()
        //     .then((contentTypesCount) => {
        //         assert.isNumber(contentTypesCount);
        //         assert.equal(351, contentTypesCount);
        //         done();
        //     })
        //     .catch(() => {
                done();
        //     });

    });*/

    it('should add content type', () => {
        let callback = sinon.spy();
        callback();

        assert.equal(callback.called, true);
    });
});



