const babel = require('@babel/core')
const generate = require('@babel/generator')
const {parse, traverse} = babel
const fs = require('fs')

const banner = fs.readFileSync('./example.js')

const code = banner.toString()

const ast = parse(code)

traverse(ast, {
  enter(path) {
    if(path.isIdentifier({name: 'm'})) {
      path.node.name = 'zenan'
    }
  }
})

const output = generate.default(ast, code)
console.log(output.code);

const str = output.code + `\n console.log('田泽楠是个美女') 
\n console.log(zenan);
`

fs.writeFileSync('./example.js',str) 