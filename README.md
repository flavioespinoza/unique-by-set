# unique-by-set

Use Set and Map to create a new Array without duplicates

- Preserves JavaScript Objects with prop functions
- Works on mixed Arrays [Object, Array, Number, String]
- Works on JSON

**params**: `originalArray` Array you want to remove duplicates from

**returns**: a new `Array` with no duplicates

## Install

```bash
yarn add unique-by-set
```

## Implementation

```js
const uniqueBySet = require('unique-by-set')
```

### Strings

`strings` is an Array of Strings

Remove all duplicate Stings in `strings`

```js
let strings = ['a', 'b', 'c', 'c', 'd', 'd', 'a']

let uniqueStings = uniqueBySet(strings)

console.log(uniqueStings)
```

```shell
[ 'a', 'b', 'c', 'd' ]
```

### Numbers

`nums` is an Array of Numbers

remove all duplicate Numbers in `nums`

```js
let numbers = [0, 1, 2, 2, 3, 4]

let uniqueNumbers = uniqueBySet(numbers)

console.log(uniqueNumbers)
```

```shell
[ 0, 1, 2, 3, 4 ]
```

### JavaScript Objects

`users` is an Array of JavaScript Objects

remove all duplicate Objects in `users`

```js
let users = [
  {
    id: 0,
    email: 'flavio@pachanga.com',
    mobile: '111-111-1111',
    social: {
      instagram: 'salsa_flavio',
    },
    get: {
      preferences: () => {
        return 0
      },
    },
  },
  {
    id: 0,
    email: 'flavio@pachanga.com',
    mobile: '111-111-1111',
    social: {
      instagram: 'salsa_flavio',
    },
    get: {
      preferences: () => {
        return 0
      },
    },
  },
  {
    id: 1,
    email: 'flavio@pachanga.com',
    mobile: '222-222-2222',
    social: {
      instagram: 'salsa_flavio',
    },
    get: {
      preferences: () => {
        return 1
      },
    },
  },
  {
    id: 2,
    email: 'flavio@disco.com',
    mobile: '222-222-2222',
    social: {
      instagram: 'salsa_flavio',
    },
    get: {
      preferences: () => {
        return 2
      },
    },
  },
  {
    id: 2,
    email: 'flavio@disco.com',
    mobile: '222-222-2222',
    social: {
      instagram: 'salsa_flavio',
    },
    get: {
      preferences: () => {
        return 2
      },
    },
  },
]

let uniqueUsers = uniqueBySet(users)

console.log(uniqueUsers)
```

```shell
[
  {
    id: 0,
    email: 'flavio@pachanga.com',
    mobile: '111-111-1111',
    social: { instagram: 'salsa_flavio' },
    get: { preferences: [(λ: preferences)] },
  },
  {
    id: 1,
    email: 'flavio@pachanga.com',
    mobile: '222-222-2222',
    social: { instagram: 'salsa_flavio' },
    get: { preferences: [(λ: preferences)] },
  },
  {
    id: 2,
    email: 'flavio@disco.com',
    mobile: '222-222-2222',
    social: { instagram: 'salsa_flavio' },
    get: { preferences: [(λ: preferences)] },
  },
]
```

### Arrays

`arrays` is an Array of Arrays

remove all duplicate Arrays in `arrays`

```js
let arrays = [
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 3],
  [1, 4],
  [1, 2],
  [1, 2],
]

let uniqueArrays = uniqueBySet(arrays)

console.log(uniqueArrays)
```

```shell
[
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
]
```

### Mixed

`mixed` is an Array of Strings, Numbers and JavaScript Objects

remove all duplicate elements in `mixed`

```js
let mixed = [
  {
    id: 111,
    name: 'Flavio',
    get: {
      preferences: (id) => {
        return id
      },
    },
  },
  {
    id: 222,
    name: 'Jorge',
    get: {
      preferences: (id) => {
        return id
      },
    },
  },
  'Apple',
  'Adobe',
  'Flavio is Awesome',
  'Jorge is Disco',
  {
    id: 111,
    name: 'Flavio',
    get: {
      preferences: (id) => {
        return id
      },
    },
  },
  'Apple',
  'Adobe',
]

let uniqueMixed = uniqueBySet(mixed)

console.log(uniqueMixed)
```

```shell
[
  { id: 111,
    name: 'Flavio',
    get: { preferences: [λ: preferences] }
  },
  { id: 222,
    name: 'Jorge',
    get: { preferences: [λ: preferences] }
  },
  'Apple',
  'Adobe',
  'Flavio is Awesome',
  'Jorge is Disco'
]
```
