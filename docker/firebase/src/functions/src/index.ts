
exports.posts = require('./posts');
const funcs = {
  helloWorld: './helloWorld',
  posts: './posts'
}
const loadFunctions = (funcsObj) => {
  for(let name in funcsObj){
    if(! process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === name) {
      exports[name] = require(funcsObj[name])
    }
  }
}

loadFunctions(funcs)