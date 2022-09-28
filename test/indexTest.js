const assert = require('chai').assert;
const index = require('../index');

//test test
describe('Index ', function(){
    it('app should return hello', function() {
        assert.equal(index(), 'hello');
    })
});