const fs = require('fs');
const path = require('path');

const get = function(pathToLook) {
    pathToLook = pathToLook || './';
    let _path = module.parent.id.split('/').slice(0, -1).join('/');
    _path = path.resolve(_path, pathToLook);
    let regex = 'node_modules|\\.git';
    if(!get._includeHidden) regex = `\\..*|${regex}`;
    regex = `^${ regex }$`;
    regex = new RegExp(regex);
    let stats;
    let _stats;
    return (function gettting(tree, where) {
        tree.files = tree.files || [];
        for (const file of fs.readdirSync(where)) {
            if(regex.test(file)) continue;
            stats = fs.statSync(`${where }/${ file}`);
            if (stats.isFile()) {
                _stats = {};
                _stats[file] = stats;
                tree.files.push(_stats);
                continue;
            }
            tree[file] = tree[file] || {};
            gettting(tree[file], `${where }/${file}`);
        }
        return tree;
    }({}, _path));
};
get.includeHidden = function() {
    get._includeHidden = true;
};

get.excludeHidden = function() {
    get._includeHidden = false;
};
module.exports = get;
