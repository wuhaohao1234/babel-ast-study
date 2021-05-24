# babel-ast-study
学习ast语法树

## code

```javascript
const babel = require('@babel/core')
const generate = require('@babel/generator')
const {parse, traverse} = babel
const code = `const n = 1`

const ast = parse(code)

traverse(ast, {
  enter(path) {
    if(path.isIdentifier({name: 'n'})) {
      path.node.name = 'm'
    }
  }
})

const output = generate.default(ast, code)
console.log(output);
```