/**
 * uniqueBySet
 *
 * Use Set and Map to create a new Array without duplicates
 * - Preserves JavaScript Objects with prop functions
 * - Works on mixed arrays [Object, Array, Number, String]
 * - Works on JSON
 * 
 * @param originalArray Array you want to remove duplicates from
 * 
 * @returns Array with no duplicates
 * */
module.exports.uniqueBySet = function(originalArray) {
  if (!Array.isArray(originalArray)) {
    throw new Error(`first argument must be an Array`)
  }
  const result = []
  const myMap = originalArray.map((obj) => {
    if (typeof obj !== 'string') {
      return JSON.stringify(obj)
    }
    return obj
  })
  new Set(myMap).forEach((s) => {
    let index = myMap.indexOf(s)
    result.push(originalArray[index])
  })
  return result
}


/**
 * `strings` is an Array of Strings
 * remove all duplicate Stings in `strings`
 *
 * @example
 * 
 * let strings = ['a', 'b', 'c', 'c', 'd', 'd', 'a']
 * console.log(uniqueBySet(strings))
 * => [ 'a', 'b', 'c', 'd' ]
 * 
 * */


/**
 * `nums` is an Array of Numbers
 * remove all duplicate Numbers in `nums`
 * 
 * @example
 * 
 * let numbers = [0, 1, 2, 2, 3, 4]
 * console.log(uniqueBySet(numbers))
 * => [ 0, 1, 2, 3, 4 ]
 * 
 * */


/**
 * `arrays` is an Array of Arrays
 * remove all duplicate Arrays in `arrays`
 *
 * @example
 *
 * let arrays = [
 *   [1, 0],
 *   [1, 1],
 *   [1, 2],
 *   [1, 3],
 *   [1, 3],
 *   [1, 4],
 *   [1, 2],
 *   [1, 2],
 * ]
 *
 * console.log(uniqueBySet(arrays))
 *
 * => [
 *   [1, 0],
 *   [1, 1],
 *   [1, 2],
 *   [1, 3],
 *   [1, 4],
 * ]
 *
 * */


/**
 * `users` is an Array of Objects
 * remove all duplicate Objects in `users`
 *
 * @example
 *
 * let users = [
 *    {
 *      id: 0,
 *      email: 'flavio@pachanga.com',
 *      mobile: '111-111-1111',
 *      social: {
 *        instagram: 'salsa_flavio',
 *      },
 *      freq: {
 *        test: [1, 3],
 *      },
 *      get: {
 *        preferences: () => {
 *          return 0
 *        },
 *      },
 *    },
 *    {
 *      id: 0,
 *      email: 'flavio@pachanga.com',
 *      mobile: '111-111-1111',
 *      social: {
 *        instagram: 'salsa_flavio',
 *      },
 *      freq: {
 *        test: [1, 3],
 *      },
 *      get: {
 *        preferences: () => {
 *          return 0
 *        },
 *      },
 *    },
 *    {
 *      id: 1,
 *      email: 'flavio@pachanga.com',
 *      mobile: '222-222-2222',
 *      social: {
 *        instagram: 'salsa_flavio',
 *      },
 *      freq: {
 *        test: [1, 3],
 *      },
 *      get: {
 *        preferences: () => {
 *          return 1
 *        },
 *      },
 *    },
 *    {
 *      id: 2,
 *      email: 'flavio@disco.com',
 *      mobile: '222-222-2222',
 *      social: {
 *        instagram: 'salsa_flavio',
 *      },
 *      freq: {
 *        test: [1, 3],
 *      },
 *      get: {
 *        preferences: () => {
 *          return 2
 *        },
 *      },
 *    },
 *    {
 *      id: 2,
 *      email: 'flavio@disco.com',
 *      mobile: '222-222-2222',
 *      social: {
 *        instagram: 'salsa_flavio',
 *      },
 *      freq: {
 *        test: [1, 3],
 *      },
 *      get: {
 *        preferences: () => {
 *          return 2
 *        },
 *      },
 *    },
 * ]
 *
 * console.log(uniqueBySet(mixed))
 *
 * => [
 *      {
 *        id: 0,
 *        email: 'flavio@pachanga.com',
 *        mobile: '111-111-1111',
 *        social: { instagram: 'salsa_flavio' },
 *        freq: { test: [Object] },
 *        get: { preferences: [(λ: preferences)] },
 *      },
 *      {
 *        id: 1,
 *        email: 'flavio@pachanga.com',
 *        mobile: '222-222-2222',
 *        social: { instagram: 'salsa_flavio' },
 *        freq: { test: [Object] },
 *        get: { preferences: [(λ: preferences)] },
 *      },
 *      {
 *        id: 2,
 *        email: 'flavio@disco.com',
 *        mobile: '222-222-2222',
 *        social: { instagram: 'salsa_flavio' },
 *        freq: { test: [Object] },
 *        get: { preferences: [(λ: preferences)] },
 *      },
 *    ]
 *
 * */

/***
 * `mixed` is an Array of Strings, Numbers and Objects
 * remove all duplicate elements in `mixed`
 *
 * @example
 *
 * let mixed = [
 *    {
 *      id: 111,
 *      name: 'Flavio',
 *      get: {
 *        preferences: (id) => {
 *          return id
 *        },
 *      },
 *    },
 *    {
 *      id: 222,
 *      name: 'Jorge',
 *      get: {
 *        preferences: (id) => {
 *          return id
 *        },
 *      },
 *    },
 *    'Apple',
 *    'Apple',
 *    'Adobe',
 *    'Apple',
 *    'Adobe',
 *    'Flavio is Awesome',
 *    'Jorge is Disco',
 *    {
 *      id: 111,
 *      name: 'Flavio',
 *      get: {
 *        preferences: (id) => {
 *          return id
 *        },
 *      },
 *    },
 * ]
 *
 * console.log(uniqueBySet(mixed))
 *
 * => [
 *      { id: 111,
 *        name: 'Flavio',
 *        get: { preferences: [λ: preferences] }
 *      },
 *      { id: 222,
 *        name: 'Jorge',
 *        get: { preferences: [λ: preferences] }
 *      },
 *      'Apple',
 *      'Adobe',
 *      'Flavio is Awesome',
 *      'Jorge is Disco'
 *    ]
 * */
