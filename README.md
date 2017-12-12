[![Build Status](https://travis-ci.org/Cereceres/get-content-liziajs.svg?branch=master)](https://travis-ci.org/Cereceres/get-content-liziajs)
# get-content-liziajs
get the content from a path given, like lizia.
#Usage

```js
let tree =  = require('get-content-liziajs')
// if we exec this in the root directory we get
tree('./') // => object
// {
//     "files": [
//         {
//             "LICENSE": {
//                 "dev": 2052,
//                 "mode": 33204,
//                 "nlink": 1,
//                 "uid": 1000,
//                 "gid": 1000,
//                 "rdev": 0,
//                 "blksize": 4096,
//                 "ino": 2101706,
//                 "size": 1086,
//                 "blocks": 8,
//                 "atime": "2016-12-18T21:07:59.487Z",
//                 "mtime": "2016-12-18T21:07:49.375Z",
//                 "ctime": "2016-12-18T21:07:49.375Z",
//                 "birthtime": "2016-12-18T21:07:49.375Z"
//             }
//         },
//         {
//             "README.md": {
//                 "dev": 2052,
//                 "mode": 33204,
//                 "nlink": 1,
//                 "uid": 1000,
//                 "gid": 1000,
//                 "rdev": 0,
//                 "blksize": 4096,
//                 "ino": 2101707,
//                 "size": 69,
//                 "blocks": 8,
//                 "atime": "2016-12-18T21:07:59.487Z",
//                 "mtime": "2016-12-18T21:07:49.375Z",
//                 "ctime": "2016-12-18T21:07:49.375Z",
//                 "birthtime": "2016-12-18T21:07:49.375Z"
//             }
//         },
//         {
//             "index.js": {
//                 "dev": 2052,
//                 "mode": 33204,
//                 "nlink": 1,
//                 "uid": 1000,
//                 "gid": 1000,
//                 "rdev": 0,
//                 "blksize": 4096,
//                 "ino": 2101704,
//                 "size": 964,
//                 "blocks": 8,
//                 "atime": "2016-12-19T19:35:04.625Z",
//                 "mtime": "2016-12-19T19:35:04.421Z",
//                 "ctime": "2016-12-19T19:35:04.421Z",
//                 "birthtime": "2016-12-19T19:35:04.421Z"
//             }
//         },
//         {
//             "package.json": {
//                 "dev": 2052,
//                 "mode": 33204,
//                 "nlink": 1,
//                 "uid": 1000,
//                 "gid": 1000,
//                 "rdev": 0,
//                 "blksize": 4096,
//                 "ino": 2101711,
//                 "size": 726,
//                 "blocks": 8,
//                 "atime": "2016-12-19T18:21:16.690Z",
//                 "mtime": "2016-12-19T18:21:16.698Z",
//                 "ctime": "2016-12-19T18:21:16.706Z",
//                 "birthtime": "2016-12-19T18:21:16.706Z"
//             }
//         }
//     ],
//     "test": {
//         "files": [
//             {
//                 "test.js": {
//                     "dev": 2052,
//                     "mode": 33204,
//                     "nlink": 1,
//                     "uid": 1000,
//                     "gid": 1000,
//                     "rdev": 0,
//                     "blksize": 4096,
//                     "ino": 2231916,
//                     "size": 285,
//                     "blocks": 8,
//                     "atime": "2016-12-19T19:37:26.233Z",
//                     "mtime": "2016-12-19T19:37:26.137Z",
//                     "ctime": "2016-12-19T19:37:26.137Z",
//                     "birthtime": "2016-12-19T19:37:26.137Z"
//                 }
//             }
//         ],
//         "test1": {
//             "files": [],
//             "test2": {
//                 "files": [],
//                 "test3": {
//                     "files": [
//                         {
//                             "index.js": {
//                                 "dev": 2052,
//                                 "mode": 33204,
//                                 "nlink": 1,
//                                 "uid": 1000,
//                                 "gid": 1000,
//                                 "rdev": 0,
//                                 "blksize": 4096,
//                                 "ino": 2368982,
//                                 "size": 20,
//                                 "blocks": 8,
//                                 "atime": "2016-12-19T19:31:27.666Z",
//                                 "mtime": "2016-12-19T19:31:27.610Z",
//                                 "ctime": "2016-12-19T19:31:27.610Z",
//                                 "birthtime": "2016-12-19T19:31:27.610Z"
//                             }
//                         }
//                     ]
//                 }
//             }
//         }
//     }
// }
```
#API Reference

## tree([path]) => Object
Tree is a function what receives the path to look every content inside, returns a object where the properties is the name of folder inside, if there is a folder inside looks it recursively, also returns 'files' property in every object that is a array of objects with file's name as property and file's stats as value.  
Default value of path is the current path where the function is called.

## tree.includeHidden() => null
Set to true the include Hidden option, with this every hidden file or folder will be included

## tree.excludeHidden() => null
Set to false the include Hidden option.
