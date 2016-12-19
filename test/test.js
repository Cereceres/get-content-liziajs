'use strict'
const getTree = require('../index')
var assert = require('assert')
describe('test to getTree', () => {
  it('should get a object', function () {
    let res = getTree('../')
    console.log('res',  JSON.stringify(res, null, 4))
    assert(typeof res === 'object')
    assert(Array.isArray(res.test.test1.test2.test3.files))
    assert(typeof getTree.includeHidden === 'function')
    assert(typeof getTree.excludeHidden === 'function')
  })
})
