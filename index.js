// /**
//  * @license
//  * unique-by-set <https://gitlab.com/flavio.espinoza/unique-by-set>
//  */
// (function () {
//   /** Used as the semantic version number. */
//   const __package = require('./package.json');

//   const VERSION = __package.version;

//   /** Detect free variable `global` from Node.js. */
//   const freeGlobal =
//     typeof global == 'object' && global && global.Object === Object && global;

//   /** Detect free variable `self`. */
//   const freeSelf =
//     typeof self == 'object' && self && self.Object === Object && self;

//   /** Used as a reference to the global object. */
//   const root = freeGlobal || freeSelf || Function('return this')();

//   /** Detect free variable `exports`. */
//   const freeExports =
//     typeof exports == 'object' && exports && !exports.nodeType && exports;

//   /** Detect free variable `module`. */
//   const freeModule =
//     freeExports &&
//     typeof module == 'object' &&
//     module &&
//     !module.nodeType &&
//     module;

//   /**
//    * @private
//    * @name _u
//    * @constructor
//    * @category Seq
//    * @param {*} value The value to wrap in a `uniqueBySet` instance
//    * @returns {Object} Returns the new `uniqueBySet` wrapper instance
//    * */
//   function _uniqueBySet() {
//     // No operations preformed.
//     // This allows future methods to be added
//   }

//   /*------------------------------------------------------------------------*/

//   /** Main method */
//   const uniqueBySet = require('./unique-by-set');

//   /*------------------------------------------------------------------------*/
  
//   _uniqueBySet.uniqueBySet = uniqueBySet;

// 	/*------------------------------------------------------------------------*/

// 	/**
// 	 * The semantic version number.
// 	 * @private
// 	 * @static
// 	 * @memberOf _u
// 	 * @type {string}
// 	 */
// 	_uniqueBySet.VERSION = VERSION;

// 	/*--------------------------------------------------------------------------*/

//   if (freeModule) {
//     // Export for Node.js.
//     (freeModule.exports = _uniqueBySet).uniqueBySet = _uniqueBySet;
//     // Export for CommonJS support.
//     freeExports.uniqueBySet = _uniqueBySet;
//   } else {
//     root.uniqueBySet = _uniqueBySet
//   }

// }.call(this));
