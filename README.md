# unique-by-set

Use Set and Map to create a new Array without duplicates

- Preserves JavaScript Objects with prop functions
- Works on mixed arrays [Object, Array, Number, String]
- Works on JSON

@params `originalArray` Array you want to remove duplicates from

@returns Array with no duplicates

@example

```js
const uniqueBySet = require('unique-by-set')

console.log(uniqueBySet(['a', 'b', 'c', 'c', 'd', 'd', 'a']))
// => [ 'a', 'b', 'c', 'd' ]
```
