'use strict'
const fs = require('fs')
const path = require('path')
/**
* function to get the content in a path given
* @func
* @param {string} - pathToLook the content, default to ./
*/
let get =  function (pathToLook) {
  // set the default value
  pathToLook = pathToLook || './'
  // get the parent path
  let _path = module.parent.id.split('/').slice(0,-1).join('/')
  // resolve the path
  _path = path.resolve(_path, pathToLook)
  // exclude the node_modules
  let regex = 'node_modules|\\.git'
  // check if the hidden file are included
  if(!get._includeHidden) regex = '\\..*|'+regex
  // build the regex
  regex = '^' + regex + '$'
  regex = new RegExp(regex)
  let stats
  let _stats
  // recursive function
  return (function gettting(tree, where) {
    // set the default value to files
    tree.files =   tree.files || []
    // itereate over every content in where
    for (let file of fs.readdirSync(where)) {
      // check for the excluded files
      if(regex.test(file)) continue
      // get the stats of file
      stats = fs.statSync(where + '/'+ file)
      // check if a file
      if ( stats.isFile()){
        // if file push in files property the object with name property
        _stats = {}
        _stats[file] =stats
        tree.files.push(_stats)
        continue
      }
      // if not a file, iterate over the folder
      tree[file] = tree[file] || {}
      // recursivesly  iterate inside of folder
      gettting(tree[file],where +'/'+file)
    }
    return tree
  })({},_path)
}
/**
* @func to include the hidden content
*
*/
get.includeHidden = function () {
  // set the property to true
  get._includeHidden = true
}

get.excludeHidden = function () {
  // set the property to true
  get._includeHidden = false
}
module.exports = get
