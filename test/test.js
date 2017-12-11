const getTree = require('../index');
const assert = require('assert');
describe('test to getTree', () => {
    it('should get a object', () => {
        const res = getTree('../');
        assert(typeof res === 'object');
        assert(Array.isArray(res.test.test1.test2.test3.files));
        assert(res.test.test1.test2.test3.files[0]['index.js']);
        assert(typeof getTree.includeHidden === 'function');
        assert(typeof getTree.excludeHidden === 'function');
    });
});
