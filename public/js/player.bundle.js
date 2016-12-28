/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {(function(){
    //plug-in for viewer
    Mashup.Waveform = $('#sampleWaveform').audioViewer({
        playButton: '#samplePlay',
        zoomInButton: '#sampleZoomIn',
        zoomOutButton: '#sampleZoomOut',
        dropFileBox: '#sampleTrim'
    });
    Mashup.Player = $('.player').audioPlayerGraphical({
               bpm: 100,
               stopButton: '#playerStop',
               saveButton: '#playerSave',
               playButton: '#playerPlay',
               clearButton: '#playerReset'
           });

    $('#waveformSample').draggable({
        revert: 'invalid',
        cursorAt: {
            left: 85
        },
        helper: function (event) {
            var clone = $(this).clone();
            var ndx = $(clone).text().indexOf('(');
            $(clone).text($(clone).text().substr(0, ndx));
            var sampleClone = $("<li />")
                .append(clone)
                .addClass('sampleSelected');
            return sampleClone;
        }
    });
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {﻿/* File Created: March 30, 2012 */
/*!
* jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
* Author: @addyosmani
* Further changes: @peolanha
* Licensed under the MIT license
*/

; (function ($, window, document, undefined) {

    // define your widget under a namespace of your choice
    //  with additional parameters e.g.
    // $.widget( "namespace.widgetname", (optional) - an
    // existing widget prototype to inherit from, an object
    // literal to become the widget's prototype ); 

    $.widget("Mashup.audioControl",$.ui.mouse, {

        //Options to be used as defaults 
        options: {
            sample: null, //this option will be changed a lot as different samples are picked            
            sliderThumbId: null
        },            
        //Setup widget (eg. element creation, apply theming
        // , bind events etc.)
        _create: function () {
            this._mouseInit();
            this.options.sliderThumbId = this.element.attr('id');
            //Check whether control is a horizontal control
            this.vertical = !$(this.element).parent().parent().hasClass('horizontal');
            this.track = this.element.siblings('.slider-track');
            if(this.vertical) {
                this.trackMinTop = this.track.position().top;
                this.trackMaxTop = this.track.height() + this.trackMinTop - this.element.height() / 2;
            }
            else {
                this.trackMinLeft = this.track.position().left;
                this.trackMaxLeft = this.track.width() + this.trackMinLeft - this.element.width()/2;                                
            }
        },

        // need to override the mouse functions
	    _mouseStart: function(e){
		    // keep track of where the mouse started
	        if(this.vertical) {
	            this.originalMousePosition = e.pageY;	        
	            this.originalTop = parseInt(this.element.css('top').replace("px",""));	            
	        }else {
	            this.originalMousePosition = e.pageX;	        
	            this.originalLeft = parseInt(this.element.css('left').replace("px",""));	            	            
	        }
	    },
	    _mouseDrag: function(e){
	        var value;
	        if(this.vertical) {
	            var mouseOffset = this.originalMousePosition - e.pageY;
	            var top = this.originalTop - mouseOffset;
	            if(top <= this.trackMinTop)
	                top = this.trackMinTop;
	            else if(top >= this.trackMaxTop)
	                top = this.trackMaxTop;
	        
	            //check if thumb is higher than track
	            this.element.css('top', top);
	            value = 1 - top / (this.trackMaxTop - this.trackMinTop);
	        }else {
	            var mouseOffset = this.originalMousePosition - e.pageX;
	            var left = this.originalLeft - mouseOffset;
	            if(left <= this.trackMinLeft)
	                left = this.trackMinLeft;
	            else if(left >= this.trackMaxLeft)
	                left = this.trackMaxLeft;
	        
	            //check if thumb is higher than track
	            this.element.css('left', left);	            	            
	            value = 1 - left / (this.trackMaxLeft - this.trackMinLeft);
	        }
	        if(this.options.sample !== null) {
	            this.options.sample.audioSampleGraphical('option', this.options.sliderThumbId, value);
	        }	            
	    },
        // Respond to any changes the user makes to the
        // option method
        _setOption: function (key, value) {
            switch (key) {
                case "someValue":
                    //this.options.someValue = doSomethingWith( value );
                    break;
                default:
                    this.options[key] = value;
                    break;
            }

             this._super( "_setOption", key, value );
        },


        sliderSetPosition: function (value) {                                    
            if (this.vertical) {
                var top = (1 - value) * (this.trackMaxTop - this.trackMinTop);
                this.element.css('top', top);
                //This centers the audio-control appropriately since position is absolute. 28 is width of the image
                var adjustedWidth = ($(this.element).parent().width() - 28) / 2;
                $(this.element).css('left', adjustedWidth);
            } else {
                var left = (1 - value) * (this.trackMaxLeft - this.trackMinLeft);
                this.element.css('left', left);	            	                            
            }
        },

        // Destroy an instantiated plugin and clean up
        // modifications the widget has made to the DOM
        _destroy: function () {
        }


    });

})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {﻿; (function ($, window, document, undefined) {

    // define your widget under a namespace of your choice
    //  with additional parameters e.g.
    // $.widget( "namespace.widgetname", (optional) - an
    // existing widget prototype to inherit from, an object
    // literal to become the widget's prototype );
    $.widget("Mashup.audioPlayer", {

        //Options to be used as defaults
        options: {
            bpm: 115,
            numberOfLoopBeats: 16,
            rhythmIndex: 0,
            beatIncrement: 4, //4 = 16th note, 2 = 8th note, 1 = quarter note, etc.
            tracks: 5
        },

        //HACK (sort of)!!! to avoid re-writing methods b/c of difference between graphical player and audioplayer
        isGraphical: false,
        rhythmIndex: 0,
        isLoaded: false,
        stopped: true,
        //Contains the samples
        _samples: [],
        //To avoid loading the same sample multiple times, we use the loaded samples array to keep track of samples already loaded
        _loadedSamples: [],
        //a beat representation of the tracks, what's filled, etc
        _tracks: [],
        _effects: [],
        _uniqueSampleIdentifier: 1, //Gives a sample a unique id
        _create: function () {
            if (window.AudioContext) {
                this.context = new AudioContext();
            } else {
                //no webaudio api
                throw 'This application requires a Web Audio API enabled browser.  Please download ' +
                    '<a href="http://www.google.com/chrome" title="chrome" target="_blank">Chrome</a> ';
            }
            var finalMixNode;
            if (this.context.createDynamicsCompressor) {
                // Create a dynamics compressor to sweeten the overall mix.
                this.compressor = this.context.createDynamicsCompressor();
                this.compressor.connect(this.context.destination);
                finalMixNode = this.compressor;
            } else {
                // No compressor available in this implementation.
                finalMixNode = this.context.destination;
            }

            // Create master volume.
            this.masterGainNode = this.context.createGain();
            this.masterGainNode.gain.value = 0.7; // reduce overall volume to avoid clipping
            this.masterGainNode.connect(finalMixNode);

            // Create effect volume.
            this.effectLevelNode = this.context.createGain();
            this.effectLevelNode.gain.value = 1.0; // effect level slider controls this
            this.effectLevelNode.connect(this.masterGainNode);

            //Load effects
            //this._loadEffects();
            //if graphical, this is called in the player graphical constructor
            if (!this.isGraphical) {
                this._setupTracks();
            }
            //contains the jquery instance of the binding element
            this.$player = $(this.element[0]);
        },

        //Adds a blank track to the player
        _addTrack: function () {
            var track = [];
            for (var i = 0; i < this.options.numberOfLoopBeats; i++) {
                track.push(0);
            }
            this._tracks.push(track);
        },

        //Adds empty beats to all tracks of the player
        _addBeatsToTracks: function (numberOfBeats) {
            var beatsToAdd = [];
            for (var j = 0; j < numberOfBeats; j++) {
                beatsToAdd.push(0);
            }
            for (var i = 0; i < this._tracks.length; i++) {
                this._tracks[i] = this._tracks[i].concat(beatsToAdd);
            }
        },

        _advanceNote: function () {
            // Advance time by a 16th note...
            var secondsPerBeat = 60.0 / this.options.bpm;

            this.rhythmIndex++;

            if (this.rhythmIndex === this.options.numberOfLoopBeats * this.options.beatIncrement) {
                this.rhythmIndex = 0;
                this._currentBeat = 0;
            }

            this.noteTime += (secondsPerBeat / this.options.beatIncrement);
        },

        _checkSamples: function () {
            var that = this;
            var startSamples = $.grep(this._samples, function (n) {
                var startTime = n.sample('getStartTime');
                //alert(n.sample('getEndTime'));
                return (startTime >= that._timerCounter && startTime < (that._timerCounter + that.options.timerInterval) || (that._timerCounter < n.sample('getEndTime') && n.sample('hasSampleStarted')));
            });
            $.each(startSamples, function (ndx, item) {
                item.sample('option', 'sampleStarted', true);
                item.sample('play');
            });
        },

        _loadEffects: function () {
            var numberOfEffects = $('#effectList option').length;
            var self = this;
            //Skip first as it has no effect
            for (var i = 1; i < numberOfEffects; i++) {
                var $option = $('#effectList option').eq(i);
                var effectOptions = {
                    wetMix: $option.attr('data-wet'),
                    dryMix: $option.attr('data-dry'),
                    url: $option.attr('data-url'),
                    effectType: $option.val(),
                    context: self.context
                };
                this._effects.push($option.effects(effectOptions));
            }
        },
        _playNote: function (sample, panEnabled, x, y, z, effectEnabled, effectType, sendGain, mainGain, playbackRate, noteTime, delay, playDuration) {
            // Create the note
            var source = this.context.createBufferSource();
            source.buffer = this.isGraphical ? sample.audioSampleGraphical('getBuffer') : sample.audioSample('getBuffer');
            source.playbackRate.value = playbackRate;

            //Pass bufferSource back to sample
            this.isGraphical ? sample.audioSampleGraphical('setBufferNode', source) : sample.audioSample('setBufferNode', source);


            // Optionally, connect to a panner
            var sourceNode;
            if (panEnabled) {
                //https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html#AudioPannerNode-section
                //It's not perfect yet but it is getting there
                var panner = this.context.createPanner();
                panner.panningModel = webkitAudioPannerNode.HRTF;
                panner.setPosition(x, y, z);
                panner.setOrientation(-x, y, z);
                panner.coneInnerAngle = 1;
                panner.coneOuterGain = 0;
                source.connect(panner);
                sourceNode = panner;
            } else {
                sourceNode = source;
            }

            //get effects information
            if (!effectEnabled) {
                sourceNode.connect(this.masterGainNode);
            }
            else {
                var effect = this.getEffect(effectType);
                var sampleEffectVal = this.isGraphical ? sample.audioSampleGraphical('option', 'effect') : sample.audioSample('option', 'effect');
                var effectDryMix = effect.effects('option', 'dryMix');
                var effectWetMix = effect.effects('option', 'wetMix');
                var convolver = this.isGraphical ? sample.audioSampleGraphical('getConvolver') : sample.audioSample('getConvolver');
                convolver.connect(this.effectLevelNode);


                // Connect to dry mix
                var dryGainNode = this.context.createGainNode();
                dryGainNode.gain.value = mainGain * effectDryMix;
                sourceNode.connect(dryGainNode);
                dryGainNode.connect(this.masterGainNode);

                // Connect to wet mix
                var wetGainNode = this.context.createGainNode();
                wetGainNode.gain.value = effectWetMix * sampleEffectVal;
                sourceNode.connect(wetGainNode);
                wetGainNode.connect(convolver);
            }
            //source.noteOn(noteTime);
            source.start(noteTime, delay, playDuration);
        },
        //Removes numberOfBeatsToRemove from a track in the player
        _removeBeatsFromTrack: function (currentNumberOfBeats, numberOfBeatsToRemove, trackNdx) {
            var startNdx = currentNumberOfBeats - numberOfBeatsToRemove;
            var beatsToRemove = this._tracks[trackNdx].splice(startNdx, numberOfBeatsToRemove);
            this._removeSamplesFromTrack(beatsToRemove);
        },

        //When passed an array of sampleIds, this will remove the samples from the player
        _removeSamplesFromTrack: function (array) {
            //Get samples from track
            var samples = $.grep(array, function (item) {
                return item != 0;
            });
            while (samples.length > 0) {
                var sampleId = samples[0]; //Values in track array are uniqueId's of the sample
                this.removeSampleById(sampleId);
                //remove sample from samples array
                samples = $.grep(samples, function (item, ndx) {
                    return item != sampleId;
                });
            }
        },

        //Removes the last track of the player
        _removeTrack: function () {
            this._removeTrackAtIndex(0);
        },

        //Removes a track from the player at index index
        _removeTrackAtIndex: function (index) {
            //Remove samples from track
            this._removeSamplesFromTrack(this._tracks[index]);
            //remove track
            this._tracks.splice(index, 1);
        },

        _setupTracks: function(){
            for (var i = 0; i < this.options.tracks; i++) {
                this._addTrack();
            }
        },

        _stopSamples: function () {
            var self = this;
            $.each(this._samples, function (ndx, item) {
                self.isGraphical ? item.audioSampleGraphical('stop', self.noteTime) : item.audioSample('stop', self.noteTime);
            });
        },

        // Respond to any changes the user makes to the
        // option method
        _setOption: function (key, value) {
            switch (key) {
                case "numberOfLoopBeats":
                    this.adjustNumberOfBeats(value);
                    this.options.numberOfLoopBeats = value;
                    break;
                default:
                    this.options[key] = value;
                    break;
            }
             this._super( "_setOption", key, value );
        },
        _waitForSamples: function () {
            this._toggle.text('').append('<i class="icon-refresh icon-white"></i>');
            var self = this;
            var timer = setInterval(function() {
                try {
                    $.each(self._samples, function(ndx, item) {
                        item.audioSample('getBuffer');
                    });
                    Mashup.EndLoading();
                    self.isLoaded = true;
                    self.play();
                    clearInterval(timer);
                } catch(ex) {
                }
            }, 1000);
        },
        addLoadedSample: function (loadedSample) {
            this._loadedSamples.push(loadedSample);
        },
        //Assign sample index of players samples.
        addSample: function (sample) {
            var sampleId = this._uniqueSampleIdentifier++;
            this.isGraphical ? sample.audioSampleGraphical('setUniqueIdentifier', sampleId) : sample.audioSample('setUniqueIdentifier', sampleId);

            //add sample
            this.addOrRemoveSampleToTrack(sample, sampleId);
            this._samples.push(sample);

        },

        addOrRemoveSampleToTrack: function (sample, value) {
            var trackNdx = this.isGraphical ? sample.audioSampleGraphical('option', 'track') : sample.audioSample('option', 'track');
            var startBeat = this.isGraphical ? sample.audioSampleGraphical('getStartBeat') : sample.audioSample('getStartBeat');
            var length = this.isGraphical ? sample.audioSampleGraphical('getNumberOfBeats') : sample.audioSample('getNumberOfBeats');
            var track = this._tracks[trackNdx];
            for (var j = startBeat; j < length + startBeat; j++) {
                track[j] = value;
            }
        },
        adjustNumberOfBeats: function (numberOfBeats) {
            var currNumberOfBeats = this._tracks[0].length;

            //Check if adding or removing measures
            if (numberOfBeats > currNumberOfBeats) {
                //adding
                var beatsToAdd = numberOfBeats - currNumberOfBeats;
                //Adjust track array
                this._addBeatsToTracks(beatsToAdd);

            }
            else {
                //removing
                var beatsToRemove = currNumberOfBeats - numberOfBeats;

                //Trim off beats for each track
                for (var k = 0; k < this.options.tracks + 1; k++) {
                    this._removeBeatsFromTrack(currNumberOfBeats, beatsToRemove, k);
                }
            }
        },
        getContext: function () {
            return this.context;
        },
        getEffect: function (effectType) {
            return $.grep(this._effects, function (item) {
                return item.effects('option', 'effectType') == effectType;
            })[0];
        },
        getLoadedSampleById: function (loadedId) {
            return $.grep(this._loadedSamples, function (item) {
                    return item.id === loadedId;
            })[0];
        },
        getSampleByUniqueId: function (uniqueId) {
            var self = this;
            return $.grep(this._samples, function (item) {
                return self.isGraphical ? item.audioSampleGraphical('getUniqueIdentifier') === uniqueId : item.audioSample('getUniqueIdentifier') === uniqueId;
            })[0];
        },

        getTrackByIndex: function (index) {
            return this._tracks[index];
        },
        loadMix: function (mix) {
            //Setup player options
            var jsonMix = JSON.parse(mix);
            this.options = jsonMix.player;
            this.reset();
            this.isLoaded = false;
            var self = this;
            //Adjust controls outside player
            this.adjustNumberOfBeats(jsonMix.player.numberOfLoopBeats);
            Mashup.StartLoading();
            //Trick to get loading to work during processing call
            setTimeout(function() {
                //Add samples to player
                $.each(jsonMix.samples, function(ndx, item) {
                    //Create sample and add to player
                    var $div = $("<div />").append("&nbsp;");//div needs something otherwise it doesn't appear
                    $('#player').append($div);
                    var sample = $div.audioSample(item);//create sample
                    self.addSample(sample);
                });
            }, 10);
            this.play();
        },
        play: function () {
            if(!this.isLoaded) {
                this._waitForSamples();
            }
            else {
                if(this.stopped) {
                    this.noteTime = 0.0;
                    this.stopped = false;
                }
                this.startTime = this.context.currentTime - this.noteTime + 0.005;
                this._toggle.text('').append('<i class="icon-pause icon-white"></i>');
                this._isPlaying = true;
                this.schedule();
            }
            //add browser tab play
            $('title').text('▶ ' + $('title').text());
        },
        pause: function () {
            //this.noteTime
            this._stopSamples();
            this._toggle.text('').append('<i class="icon-play icon-white"></i>');
            this._isPlaying = false;
            clearTimeout(this.timeoutId);
            $('title').text($('title').text().replace(/▶/g, ''));
        },
        removeSampleById: function (sampleId) {
            //Get sample
            var sample = this.getSampleByUniqueId(sampleId);

            //Set sample on track to zero
            this.addOrRemoveSampleToTrack(sample, 0);
            //Get index of sample
            var ndx = this._samples.indexOf(sample);
            this.removeSampleByIndex(ndx);
        },
        removeSampleByIndex: function (index) {
            var sample = this._samples[index];
            this.isGraphical ? sample.audioSampleGraphical('destroy') : sample.audioSample('destroy');
            this._samples.splice(index, 1);
        },
        reset: function () {
            var self = this;
            self.stop();

            //Important:  always remove tracks from last to first to avoid errors
            for(var k=this.options.tracks-1;k>=0;k--){
                self._removeTrackAtIndex(k);
            };
            this._tracks = [];
            this._setupTracks();
            //make sure mashId is cleared out
            $('#mashId').val('0');
            $('#playerSave').text('Save');
        },
        schedule: function () {
            var currentTime = this.context.currentTime;

            // The sequence starts at startTime, so normalize currentTime so that it's 0 at the start of the sequence.
            currentTime -= this.startTime;

            while (this.noteTime < currentTime + 0.200) {
                // Convert noteTime to context time.
                var contextPlayTime = this.noteTime + this.startTime;

                for (var k = 0; k < this._samples.length; k++) {
                    var sample = this._samples[k];
                    var startIndex = this.isGraphical ? sample.audioSampleGraphical('option', 'rhythmIndex') : sample.audioSample('option', 'rhythmIndex');
                    if (this.rhythmIndex === parseInt(startIndex)) {
                        var sampleOptions = this.isGraphical ? sample.audioSampleGraphical('getOptions') : sample.audioSample('getOptions');
                        var playbackRate = sampleOptions.bpm === 0 ? 1 : this.options.bpm / sampleOptions.bpm;
                        var pan = -5 + 10 * sampleOptions.pan;
                        var panEnabled = pan != 0; //No need to pan if err thang is in the middle
                        var effectNdx = sampleOptions.effectType;
                        var effectEnabled = effectNdx !== -1;
                        var delay = sampleOptions.trimStart;
                        var playDuration = sampleOptions.playDuration - .01; //Subtract the tiniest of bits b/c if playduration exceeds actual sample duration, nothing gets played.
                        var shift = sampleOptions.shiftSample;
                        this._playNote(sample, panEnabled, pan, 0, 0, effectEnabled, effectNdx, 0, 1, playbackRate, contextPlayTime + shift, delay, playDuration);
                    }
                }

                this._advanceNote();
            }

            this.timeoutId = this.isGraphical ? setTimeout("Mashup.Player.audioPlayerGraphical('schedule')",0) : setTimeout("Mashup.Player.audioPlayer('schedule')", 0);

        },
        setToggle: function (toggle) {
            this._toggle = $(toggle);
        },
        stop: function () {
            this.stopped = true;
            this._isPlaying = false;
            this._stopSamples();
            this._toggle.text('').append('<i class="icon-play icon-white"></i>');
            clearTimeout(this.timeoutId);
            this.rhythmIndex = 0;
            this._currentBeat = 0;
            $('title').text($('title').text().replace(/▶/g, ''));
        },
        updateLoadedSample: function (loadedSample) {
            var sample = $.grep(this._loadedSamples, function (item) {
                return item.id === loadedSample.id;
            })[0];

            sample.buffer = loadedSample.buffer;
            //now update all samples buffers that are the same
            if (this.isGraphical) {
                for (var j = 0; j < this._samples.length; j++) {
                    if (this._samples[j].audioSampleGraphical('option', 'id') === loadedSample.id) {
                        this._samples[j].audioSampleGraphical('setBuffer', loadedSample.buffer);
                    }
                }
            } else {
                for (var j = 0; j < this._samples.length; j++) {
                    if (this._samples[j].audioSample('option', 'id') === loadedSample.id) {
                        this._samples[j].audioSample('setBuffer', loadedSample.buffer);
                    }
                }
            }

        },
        // Destroy an instantiated plugin and clean up
        // modifications the widget has made to the DOM
        _destroy: function () {
            this.reset();
            this._samples = null;
            this._tracks = null;
            this._loadedSamples = null;
            this._toggle.unbind('click');
        }
    });

})(jQuery, window, document);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {﻿; (function ($, window, document, undefined) {
    //Contains the audio player used by the audio viewer
    $.widget("Mashup.audioPlayerWaveformViewer",  $.Mashup.audioPlayer,{

        //Options to be used as defaults
        options: {
            waveformStart: 0,
            waveformEnd:0
        },

        _advanceLoop: function () {
            // Advance time by a 16th note...
            this.noteTime += this.duration;
        },
        _create: function () {
            this.isGraphical = false;
            //call base class create
            $.Mashup.audioPlayer.prototype._create.call(this);
        },

        _playNote: function ( noteTime, delay, playDuration) {
            // Create the note
            this.source = this.context.createBufferSource();
            this.buffer.gain = 0.4096;
            this.source.buffer = this.buffer;

            var sourceNode = this.source;
            sourceNode.connect(this.masterGainNode);
            this.source.start(noteTime, delay, playDuration);
        },

        _setOption: function (key, value) {
            switch (key) {
                default:
                    this.options[key] = value;
                    break;
            }
             this._super( "_setOption", key, value );
        },

        addSample: function(buffer) {
            this.buffer = buffer;
        },
        play: function () {
            //Graphical usually doesn't have problem with loading...so set to true
            this.isLoaded = true;
            this.noteTime = 0.0;
            this.startTime = this.context.currentTime - this.noteTime + 0.005;
            this.duration = this.options.waveformEnd - this.options.waveformStart;
            this.schedule();
        },
        schedule: function () {
            var currentTime = this.context.currentTime;

            // The sequence starts at startTime, so normalize currentTime so that it's 0 at the start of the sequence.
            currentTime -= this.startTime;
            if (currentTime < this.noteTime + this.duration && currentTime > this.noteTime) {
                // Convert noteTime to context time.
                var contextPlayTime = this.noteTime + this.startTime;

                var delay = this.options.waveformStart;
                this._playNote(contextPlayTime, delay, this.duration - .01);

                this._advanceLoop();
            }

            this.timeoutId = setTimeout("$('#" + $(this.element[0]).attr('id') + "').audioPlayerWaveformViewer('schedule')", 0);

        },
        stop: function () {
            this.source.stop();
            clearTimeout(this.timeoutId);
        },
        _destroy: function () {
        }
    });

})(jQuery, window, document);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {﻿; (function ($, window, document, undefined) {
    $.widget("Mashup.audioSample", {

        //Options to be used as defaults
        options: {
            loop: false,
            fileName: null,
            sampleName: null,
            artist: null,
            bpm: 88,
            id: 0,
            rhythmIndex: 0,
            track: 0,
            mono: false,
            duration: 0,
            volume: 0.4096,
            pan: 0.5,
            effectType: -1,
            effect: 0.5,
            trimStart: 0,
            shiftSample: 0,
            playDuration: 0
        },
        isGraphical: false,
        _trimEnd: 0,
        sampleUniqueId: 0,

        _create: function () {
            this._calculateStartBeat();
            this._calculateNumberOfBeats();
            this._loadSample();

            //create convolver
            this.convolver = this.isGraphical ? Mashup.Player.audioPlayerGraphical('getContext').createConvolver() :Mashup.Player.audioPlayer('getContext').createConvolver();
        },

        _calculateStartBeat: function () {
            var beatIncrement = this.isGraphical ? Mashup.Player.audioPlayerGraphical('option', 'beatIncrement') :Mashup.Player.audioPlayer('option', 'beatIncrement');
            this.startBeat = Math.round(this.options.rhythmIndex / beatIncrement);
        },

        _calculateNumberOfBeats: function () {
            this.numberOfBeats = Math.round((this.options.bpm / 60) * this.options.playDuration);
            //Some sound effect samples can be short and make numberOfBeats = 0.  At a minimum this should be 1 so it displays appropriately.
            if (this.numberOfBeats === 0)
                this.numberOfBeats = 1;
        },
        //typically this is passed in.  But if an edit is made to the number of beats, we need to calulate the new tempo
        _calculateTempo: function () {
            this.options.bpm = (this.numberOfBeats / this.options.duration) * 60;
        },
        _loadSample: function () {
            //first, check if samples has been loaded before
            var loadedSample = this.isGraphical ? Mashup.Player.audioPlayerGraphical('getLoadedSampleById', this.options.id) : Mashup.Player.audioPlayer('getLoadedSampleById', this.options.id);
            if(typeof loadedSample.buffer != 'undefined') {
                this.buffer = loadedSample.buffer;
                return;
            }
            if(typeof loadedSample.id != 'undefined') {
                return;
            }
            if (this._sampleIsFromViewer()){
                //sample came from waveform viewer.
                var arrayBuffer = Mashup.Waveform.audioViewer('getFinalSampleBuffer');
                this.buffer = arrayBuffer;
                this.buffer.gain = this.options.volume;
                loadedSample = {
                    id: this.options.sampleName,
                    buffer: this.buffer
                };
                this.isGraphical ? Mashup.Player.audioPlayerGraphical('addLoadedSample', loadedSample) : Mashup.Player.audioPlayer('addLoadedSample', loadedSample);
                this.isGraphical ? Mashup.Player.audioPlayerGraphical('updateLoadedSample', loadedSample) : Mashup.Player.audioPlayer('updateLoadedSample', loadedSample);
                return;
            }
            loadedSample = {
                id: this.options.id
            };
            this.isGraphical ? Mashup.Player.audioPlayerGraphical('addLoadedSample', loadedSample) : Mashup.Player.audioPlayer('addLoadedSample', loadedSample);

            var self = this;
            // Load asynchronously
            var url = Mashup.properties.sampleFilePath + this.options.fileName;
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = "arraybuffer";
            request.onload = function () {
                self.buffer = self.isGraphical ? Mashup.Player.audioPlayerGraphical('getContext').createBuffer(request.response, self.options.mono) : Mashup.Player.audioPlayer('getContext').createBuffer(request.response, self.options.mono);

                self.buffer.gain = self.options.volume;
                loadedSample = {
                    id: self.options.id,
                    buffer: self.buffer
                };
                self.isGraphical ? Mashup.Player.audioPlayerGraphical('updateLoadedSample', loadedSample) : Mashup.Player.audioPlayer('updateLoadedSample', loadedSample);
            };
            request.send();
        },
        _sampleIsFromViewer: function(){
            if(!this.options.id || loadedSample.id === 0){
                return true;
            }
            return false;
        },
        // Respond to any changes the user makes to the
        // option method
        _setOption: function (key, value) {
            switch (key) {
                case "volume":
                    //http://www.dr-lex.be/info-stuff/volumecontrols.html#table1 -- doing the recommended x^4
                    value = Math.pow(value, 4);
                    this.options.volume = value;
                    if (this.buffer !== null)
                        this.buffer.gain = value;
                    break;
                default:
                    this.options[key] = value;
                    break;
            }

             this._super( "_setOption", key, value );
        },

        getBuffer: function () {
            return this.buffer;
        },
        getConvolver: function () {
            return this.convolver;
        },
        getNumberOfBeats: function () {
            return this.numberOfBeats;
        },
        getStartBeat: function () {
            return this.startBeat;
        },
        getOptions: function () {
            return this.options;
        },
        getUniqueIdentifier: function () {
            return this.sampleUniqueId;
        },
        setBuffer: function (buffer) {
            this.buffer = buffer;
            this.buffer.gain = this.options.volume;
        },
        setBufferNode: function (bufferNode) {
            this.bufferNode = bufferNode;
        },
        setUniqueIdentifier: function (id) {
            this.sampleUniqueId = id;
        },

        stop: function (noteTime) {
            if (this.bufferNode != null)
                this.bufferNode.stop();
        },

        _destroy: function () {
        }

    });

})(jQuery, window, document);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {﻿/* File Created: March 19, 2012 */
/*!
* jQuery UI Widget factory "bridge" plugin boilerplate
* Author: @erichynds
/*!
* jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
* Author: @addyosmani
* Further changes: @peolanha
* Licensed under the MIT license
https://github.com/addyosmani/jquery-plugin-patterns/blob/master/jquery.widget-factory.plugin-boilerplate.js
*/

; (function ($, window, document, undefined) {

    // define your widget under a namespace of your choice
    //  with additional parameters e.g.
    // $.widget( "namespace.widgetname", (optional) - an
    // existing widget prototype to inherit from, an object
    // literal to become the widget's prototype );

    $.widget("Mashup.audioSampleGraphical",$.Mashup.audioSample, {

        //Options to be used as defaults
        options: {
            fileName: null,
            sampleName: null,
            artist: null,
            bpm: 88,
            id: 0,
            rhythmIndex: 0,
            track: 0,
            mono: false,
            duration: 0, //total duration of track
            volume: 0.4096,
            pan: 0.5,
            effectType: -1,
            effect: 0.5,
            trimStart: 0,
            shiftSample: 0,
            playDuration: 0 //duration of track that will be played. This can differ from duration if track is trimmed from start and/or end
        },

        _initiated: false,
        $sampleContainer: null,
        //Setup widget (eg. element creation, apply theming
        // , bind events etc.)
        _create: function () {
            this.isGraphical = true;
            this._calculateStartBeat();
            this._calculateNumberOfBeats();
            if (!this._animate()) {
                return;
            };
            $.Mashup.audioSample.prototype._create.call(this);
            this._handleEvents();
            this._loadEffect();

            this._initiated = true;
        },

        _animate: function () {
            //If we are unable to make room, we need to forget everything and return
            if (!this._makeTrackRoom()) {
                return false;
            };

            //New HTML
            this.$sampleContainer = $("<div />").append("<span id='" + this.options.id + "'>" + this.options.sampleName + "</span><a class='icon-remove icon-white pull-right'></a>")
                                         .addClass('sample').attr("data-sample-options", JSON.stringify(this.options));
            this.$sampleContainer.draggable(Mashup.properties.draggableDefaultOptions);
            var that = this.$sampleContainer;

            //append to div
            this.element.append(this.$sampleContainer).fadeIn(function () {
                that.animate({ width: '100%', height: '30px' });
            });
            return true;
        },
        _loadEffect: function () {
            //Load effect
            if(this.options.effectType === -1)
                return;
            var effect = Mashup.Player.audioPlayerGraphical('getEffect', this.options.effectType);
            this.convolver.buffer = effect.effects('getBuffer');
        },
        _handleEvents: function () {
            //Hook up close event
            this.$sampleContainer.find('.icon-remove').click(function () {
                Mashup.Player.audioPlayerGraphical('removeSampleById', self.sampleUniqueId);
            });

            //When playerDiv is clicked...give ability to edit
            var self = this;
            this.$sampleContainer.click(function () {
                self.showControls();
            });
        },
        //Calculate number of beats.  Remove that many beats from track and replace element with new adjusted span
        _makeTrackRoom: function () {
            var numberOfTrackBeats = Mashup.Player.audioPlayerGraphical('option', 'numberOfLoopBeats');
            //Check if sample extends track.  If so, extend track automatically
            if ((this.startBeat + this.numberOfBeats) >= numberOfTrackBeats) {
                //We add plus one to automatically extend measures if the sample dropped hits the edge
                var measures = Math.ceil((this.startBeat + this.numberOfBeats + 1) / 4);
                numberOfTrackBeats = measures * 4;
                Mashup.Player.audioPlayerGraphical('option', 'numberOfLoopBeats', numberOfTrackBeats);
            }
            //Check if there are any samples on the same track that would overlap
            var track = Mashup.Player.audioPlayerGraphical('getTrackByIndex', this.options.track);
            for (var j = this.startBeat; j < this.startBeat + this.numberOfBeats; j++) {
                if (track[j] !== 0) {
                    return false;
                }
            }

            //remove the necessary beats ahead and replace with on long numberofBeats span
            for (var i = 0; i < this.numberOfBeats - 1; i++) {
                this.element.next().remove();
            }
            this.element.removeClass('span1');
            this.element.addClass('span' + this.numberOfBeats);
            //manually calculate new span width
            var widthPercentage = this.numberOfBeats / numberOfTrackBeats * 100;
            $('.track .span' + this.numberOfBeats).width(widthPercentage + "%");
            return true;
        },
        //When sample is removed, this sets up the player back appropriately
        _restoreTrackRoom: function () {
            this.element.removeClass('span' + this.numberOfBeats);
            var widthPercentage = 100.0 / Mashup.Player.audioPlayerGraphical('option', 'numberOfLoopBeats');
            this.element.addClass('span1').droppable(Mashup.properties.droppableDefaultOptions).css('width',widthPercentage + '%');
            var beat = "<div class='span1' style='width:" + widthPercentage + "%'></div>";
            var currentBeat = this.startBeat;
            var lastElementAdded = this.element;
            var newElement;
            for (var i = 0; i < this.numberOfBeats - 1; i++) {
                newElement = beat;
                lastElementAdded.after(newElement);
                lastElementAdded = lastElementAdded.next();
            }
            this.element.parent().children('.span1').droppable(Mashup.properties.droppableDefaultOptions);
        },
        //Dragging and dropping relies on updated options of each sample. This updates the options on the webpage for dragging and dropping to happen.
        _updateOptionsOnPlayer: function() {
            var options = JSON.stringify(this.options);
            this.$sampleContainer.attr('data-sample-options', options);
        },
        // Respond to any changes the user makes to the
        // option method
        _setOption: function (key, value) {
            switch (key) {
                case "volume":
                    //http://www.dr-lex.be/info-stuff/volumecontrols.html#table1 -- doing the recommended x^4
                    value = Math.pow(value, 4);
                    this.options.volume = value;
                    if (this.buffer !== null)
                        this.buffer.gain = value;
                    this._updateOptionsOnPlayer();
                    break;
                default:
                    this.options[key] = value;
                    this._updateOptionsOnPlayer();
                    break;
            }

            // For UI 1.9 the _super method can be used instead
             this._super( "_setOption", key, value );
        },

        getInitiated: function () {
            return this._initiated;
        },
        hideControls: function () {
            $('#sampleSugar').slideUp(500); // Hide - slide up.
            Mashup.Player.find('.sample').removeClass('edit');
        },
        play: function (event) {
            this.$sampleContainer.addClass('playing');
        },
        showControls: function () {
            if(this.$sampleContainer.hasClass('edit')) {
                this.hideControls();
                return;
            }
            var sampleSugar = $('#sampleSugar');
            Mashup.Player.find('.sample').removeClass('edit');
            this.$sampleContainer.addClass('edit');

            if (!sampleSugar.is(":visible"))
                sampleSugar.slideDown(500); // Show - slide down.

            //Get purchase link
            $('#purchaseSong').hide();
            $.ajax({
                url: '/api/samples/' + this.options.id + '?format=json',
                success: function(data) {
                    if (data.Sample.BuyLink) {
                        $('#purchaseSong').attr('href', data.Sample.BuyLink);
                        $('#purchaseSong').show();
                    }
                },
                error: Mashup.GenericErrorMessage
            });

            //Update panel
            //Show sample information
            $('#sampleArtist').text(this.options.artist);
            $('#sampleName').text(this.options.sampleName);
            $('#sampleBpm').text(this.options.bpm);
            $('#sampleBeats').text(this.numberOfBeats + ' beats');

            //update controls for this sample
            var controls = sampleSugar.find('.slider-thumb');
            var self = this;
            $.each(controls, function (ndx, item) {
                var controlType = $(item).audioControl('option', 'sliderThumbId');
                if(controlType === 'volume') {
                    $(item).audioControl('sliderSetPosition', Math.pow(self.options[controlType],.25));
                }
                else {
                    $(item).audioControl('sliderSetPosition', self.options[controlType]);
                }
            });

            //Add sample to control
            $('.slider-thumb').audioControl('option', 'sample', self.element);

            //remove previous handlers
            $('#effectList').unbind('change');
            $('#shiftSample').unbind('change');

            //Wire Events
            //Set event dropdown and wire up change event
            $('#effectList').val(self.options.effectType);
            //add handler for this sample
            $('#effectList').change(function () {
                self.options.effectType = parseInt($(this).val());
                self._updateOptionsOnPlayer();
                self._loadEffect();
            });
            var playerBps = Mashup.Player.audioPlayerGraphical('option', 'bpm') / 60;
            $('#shiftSample').val(Math.round(self.options.shiftSample * playerBps * 16));
            $('#shiftSample').change(function () {
                //convert beat to seconds
                self.options.shiftSample = $(this).val() / (playerBps * 16); //16 is the denominator of the shift
                self._updateOptionsOnPlayer();
            });



            //reset form
            if ($('#sampleLengthEdit').length > 0) {
                $('#sampleLengthEdit').remove();
                $('#sampleEdit i').removeClass('icon-file');
                $('#sampleEdit i').addClass('icon-edit');
            }
        },

        // Destroy an instantiated plugin and clean up
        // modifications the widget has made to the DOM
        _destroy: function () {
            if (this._initiated) {
                this.$sampleContainer.draggable('destroy');
                this.$sampleContainer.remove();
                this._restoreTrackRoom();
            } else {
                this.element.droppable(Mashup.properties.droppableDefaultOptions);
            }
        }

    });

})(jQuery, window, document);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// ﻿; (function ($, window, document, undefined) {
    //Contains the audio player used by the audio viewer
    $.widget("Mashup.audioViewer", {

        //Options to be used as defaults
        options: {
            width: null,
            height: null,
            sampleRate: 48000,
            playButton: null,
            zoomInButton: null,
            zoomOutButton: null,
            dropFileBox: null,
        },

        _create: function () {
            var self = this;
            //if not initialized, take element width and height
            this.options.width = this.options.width ? this.options.width : $(this.element[0]).width();
            this.options.height = this.options.height ? this.options.height : $(this.element[0]).height();

            //this.audioPlayer = $('#audioViewerControls').audioPlayerWaveformViewer();
            var $audioPlayerDiv = $('<div/>').attr('id', 'audioViewerPlayer').addClass('hide');
            $('body').append($audioPlayerDiv);
            this.$audioPlayer = $audioPlayerDiv.audioPlayerWaveformViewer();

            //Only add spacebar functionality if it's not already taken by the main player
            //if (!$('.player').length > 0) {
            if (Mashup.Player) {
                $('body').keydown(function (e) {
                    if (e.which === 32) {
                        if (e.target.tagName.toUpperCase() === 'INPUT') return;
                        e.preventDefault();
                        self.togglePlay();
                    }
                });
            }

            //the viewer is going to have it's own web player -
            this.$playBtn = $(this.options.playButton);
            this.$playBtn.click(function () {
                self.togglePlay();
            });

            this.$zoomInBtn = $(this.options.zoomInButton);
            this.$zoomInBtn.click(function () {
                if (!self._isSelected()) {
                    self.processWave.zoomIn();
                }
                else {
                    //Zoom in on selected area
                    self.endWaveform = self._getSelectedWaveformEnd();
                    self.startWaveform = self._getSelectedWaveformStart();
                    self.processWave.zoomInSelected(self.startWaveform, self.endWaveform);
                }
                self._setWaveformData();
                self.processTrim.clear();
            });

            this.$zoomOutBtn = $(this.options.zoomOutButton);
            this.$zoomOutBtn.click(function () {
                var isSelected = self._isSelected();
                self._setViewerData(isSelected);
                self.processWave.zoomOut();
                self._setWaveformData();
                //if selected, put the Trim back on
                if (isSelected) {
                    var xMin = Math.floor((self.playWaveformStart - self.startWaveform) / (self.endWaveform - self.startWaveform) * self.options.width);
                    var xMax = Math.floor((self.playWaveformEnd - self.startWaveform) / (self.endWaveform - self.startWaveform) * self.options.width);
                    self.processTrim.setTrim(xMin, xMax);
                }
            });

            // Setup the drag and drop listeners.
            if (this.options.dropFileBox) {
                //Drop event only works with addEventListener.  Not sure why it doesn't play nice with jquery's bind as the other events work fine with it.
                var noHash = this.options.dropFileBox.replace('#', '');
                this._dropBox = document.getElementById(noHash);
                this._dropBox.addEventListener("drop", function (e) {
                    self.drop(e);
                }, false);
                this._dropBox.addEventListener("dragover", function (e) {
                    self.dragEnter(e);
                }, false);
                this._dropBox.addEventListener("dragleave", function (e) {
                    self.dragLeave(e);
                }, false);
            }
            //processing is not always ready on page load...setInterval to detect when loaded, then set size dynamically
            var tId = setInterval(function () {
                self.processTrim = Processing.getInstanceById('sampleTrim');
                self.processWave = Processing.getInstanceById('sampleWaveform');
                self.processPlay = Processing.getInstanceById('samplePlayIndex');
                if (self.processTrim && self.processWave && self.processPlay) {
                    clearInterval(tId);
                    self.processWave.setSize(self.options.width, self.options.height);
                    self.processTrim.setSize(self.options.width, self.options.height);
                    self.processPlay.setSize(self.options.width, self.options.height);
                }
            }, 500);
        },
        _isSelected: function () {
            return this.processTrim.isSelected();
        },
        _getStartTime: function (forceIsSelected) {
            if (this._isSelected() || forceIsSelected) {
                //current start time of audio as shown in the viewer.
                var currViewerStartTime = this.startWaveform / this.totalWaveformLength * this.duration;
                return (this.processTrim.getMin() / this.options.width) * this.duration * this.waveformFraction + currViewerStartTime;
            }
            return this.startWaveform / this.totalWaveformLength * this.duration;
        },
        _getEndTime: function (forceIsSelected) {
            if (this._isSelected() || forceIsSelected) {
                //current start time of audio as shown in the viewer.
                var currViewerStartTime = this.startWaveform / this.totalWaveformLength * this.duration;
                return (this.processTrim.getMax() / this.options.width) * this.duration * this.waveformFraction + currViewerStartTime;
            }
            return this.endWaveform / this.totalWaveformLength * this.duration;

        },
        _getSelectedWaveformStart: function () {
            return Math.floor(this.totalWaveformLength * (this.processTrim.getMin() / this.options.width) * this.waveformFraction) + this.startWaveform;
        },
        _getSelectedWaveformEnd: function () {
            return Math.floor(this.totalWaveformLength * (this.processTrim.getMax() / this.options.width) * this.waveformFraction) + this.startWaveform;
        },
        _setWaveformData: function () {
            this.startWaveform = this.processWave.getWaveformStart();
            this.endWaveform = this.processWave.getWaveformEnd();
            this.waveformFraction = (this.endWaveform - this.startWaveform) / this.totalWaveformLength;
        },
        _setViewerData: function (waveformSelected) {
            this.viewerWaveformLength = this.endWaveform - this.startWaveform;
            this.playWaveformStart = this.startWaveform;
            this.playWaveformLength = this.viewerWaveformLength;
            this.playWaveformEnd = this.startWaveform + this.viewerWaveformLength;
            if (waveformSelected) {
                this.playWaveformEnd = this._getSelectedWaveformEnd();
                this.playWaveformStart = this._getSelectedWaveformStart();
                this.playWaveformLength = this.playWaveformEnd - this.playWaveformStart;
            }
        },
        // Respond to any changes the user makes to the
        // option method
        _setOption: function (key, value) {
            switch (key) {
                default:
                    this.options[key] = value;
                    break;
            }

            this._super("_setOption", key, value);
        },
        _setupPlayerandPlotWaveform: function (data) {
            var channelData;
            if (typeof (data) == 'undefined')
                channelData = this.buffer.getChannelData(0);
            else {
                channelData = data;
            }
            this.startWaveform = 0;
            this.endWaveform = channelData.length;

            this.$audioPlayer.audioPlayerWaveformViewer('addSample', this.buffer);
            this.$audioPlayer.audioPlayerWaveformViewer('option', 'waveformStart', this.startWaveform);
            this.$audioPlayer.audioPlayerWaveformViewer('option', 'waveformEnd', this.duration);

            this.totalWaveformLength = channelData.length;
            this.waveformFraction = 1;
            this.processWave.addSample(channelData, this.endWaveform);
            this.processTrim.clear();
        },
        calculateBpm: function (numberOfBeats) {
            var sampleDuration = this._getEndTime() - this._getStartTime();
            return numberOfBeats / sampleDuration * 60;
        },
        //clears the waveform from the viewer
        clear: function () {
            this.processWave.clear();
        },
        //drag and drop file
        drop: function (e) {
            e.stopPropagation();
            e.preventDefault();
            Mashup.StartLoading("Loading and drawing song....");
            $(e.target).removeClass('over');
            var files = e.dataTransfer.files;
            var self = this;
            //process upload
            if (files.length > 0) {
                if (window.FormData !== undefined) {
                    var file = files[0];
                    if (file.type !== "audio/mp3" && file.type !== "audio/ogg") {
                        Mashup.ShowMessage("Invalid File Type", "File must be an .mp3 or .ogg file", Mashup.properties.messageType.Error);
                        Mashup.EndLoading();
                        return;
                    }
                    var reader = new FileReader();
                    reader.onloadend = function (e) {
                        Mashup.EndLoading();
                        var sampleOptions = self.getMP3MetaData(e.target.result);
                        self.$audioPlayer.audioPlayerWaveformViewer('getContext').decodeAudioData(e.target.result,function(buffer){
                            self.loadSampleFromArrayBuffer(buffer);
                        })
                    };
                    reader.readAsArrayBuffer(file);
                } else {
                    Mashup.ShowMessage("D'oh!", 'This application requires a File API enabled browser.  Please download ' +
                    '<a href="http://www.google.com/chrome" title="chrome" target="_blank">Chrome</a> '
                            + 'to take part in the fun! (Trust me, its quick, painless and well worth it)');
                    Mashup.EndLoading();
                }
            }
        },
        dragEnter: function (e) {
            e.stopPropagation();
            e.preventDefault();
            //clear previous files if any
            if (e.dataTransfer.files.length > 0)
                e.dataTransfer.dropEffect = 'drop'; // Explicitly show this is a copy.
            $(e.target).addClass('over');
            return false;
        },
        dragLeave: function (e) {
            e.stopPropagation();
            e.preventDefault();
            $(e.target).removeClass('over');
            return false;
        },
        getMP3MetaData: function(result){
            var dv = new jDataView(result);
            if (dv.getString(3, dv.byteLength - 128) == 'TAG') {
                var title = dv.getString(30, dv.tell());
                var artist = dv.getString(30, dv.tell());
                var album = dv.getString(30, dv.tell());
                var year = dv.getString(4, dv.tell());
                var sampleOptions = {
                    fileName: title,
                    sampleName: title,
                    artist: artist,
                    bpm: 88,
                    duration: 2,//
                    trimStart: 0,
                    playDuration: 2
                }

                $(Mashup.properties.iDTags.waveformSample).attr('data-sample-options',JSON.stringify(sampleOptions).replace(/\\u0000/g, ''));
            }
        },
        getSampleBuffer: function () {
            return this.buffer.getChannelData(0);
        },
        getFinalSampleBuffer: function () {
            if (this.buffer === null) {
                throw "You must load a song by dropping song on player";
            }

            this._setViewerData(this._isSelected());

            var startByte = this.playWaveformStart * 4;
            var endByte = this.playWaveformEnd * 4;

            //http://stackoverflow.com/questions/6170421/blobbuilder-ruins-binary-data
            var byteLength = endByte - startByte;
            //Check if time limit on is greater than maxiumum length allowed - (samplerate is 48KHz...)
            if (byteLength > Mashup.properties.maxSampleLength) {
                throw "Sample is too long.  Please keep sample under 90 seconds";
            }

            var equalizedArray = this.normalizeSample();
            var buffer = this.$audioPlayer.audioPlayerWaveformViewer('getContext').createBuffer(1,equalizedArray.length, 44100);
            var data = buffer.getChannelData(0);
            data.set(equalizedArray);
            return buffer;
            // this.$audioPlayer.audioPlayerWaveformViewer('getContext').decodeAudioData(equalizedArray,function(buffer){
            //     callback(buffer);
            //     //self.loadSampleFromArrayBuffer(buffer);
            // })
            // return equalizedArray;
            // var blob = new Blob([equalizedArray], { type: 'text/plain' });
            // return blob;
        },
        isPlaying: function () {
            return !this.$playBtn.children('i').hasClass('icon-play');
        },
        loadSampleFromArrayBuffer: function (buffer) {
            this.buffer = buffer;
            this.duration = this.buffer.duration;
            this._setupPlayerandPlotWaveform();
        },
        loadSampleFromFileUrl: function (fileName, id, duration) {
            this.id = id;
            this.duration = duration;

            //first, check if samples has been loaded before
            var loadedSample = Mashup.Player.audioPlayerGraphical('getLoadedSampleById', this.id);
            if (typeof loadedSample.buffer != 'undefined') {
                this.buffer = loadedSample.buffer;
                this._setupPlayerandPlotWaveform();
                return;
            }

            var self = this;
            // Load asynchronously
            var url = Mashup.properties.sampleFilePath + fileName;
            var request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = "arraybuffer";
            request.onload = function () {
                self.loadSampleFromArrayBuffer(request.response);
            };
            request.send();
        },
        //equalize the signal so max signal is 70%
        normalizeSample: function () {
            var float32Array = new Float32Array(this.buffer.getChannelData(0).buffer),
                resolutionScale = 2500,
                maxVal = 0,//this is a somewhat random number.  Has good performance and decent waveform visualization. Increase for better resolution (and worse performance), decrease for worse resolution
                resolution = Math.floor((this.playWaveformEnd - this.playWaveformStart) / resolutionScale);

            //get max value
            for (var j = this.playWaveformStart; j < this.playWaveformEnd; j = j + resolution) {
                if (float32Array[j] > maxVal)
                    maxVal = float32Array[j];
            }
            var multiplier = 0.7 / maxVal;
            var equalizedBuffer = new Float32Array(this.playWaveformEnd - this.playWaveformStart);
            //multiply signal by multiplier
            for (var k = this.playWaveformStart; k < this.playWaveformEnd; k++) {
                equalizedBuffer[k - this.playWaveformStart] = float32Array[k] * multiplier;
            }
            //return new signal
            return equalizedBuffer;
        },
        movePlayIndicator: function () {
            //even though nothing is selected, we want the player to act that way
            var startTime = this._getStartTime(true);
            var endTime = this._getEndTime(true);
            this.$audioPlayer.audioPlayerWaveformViewer('option', 'waveformStart', startTime);
            this.$audioPlayer.audioPlayerWaveformViewer('option', 'waveformEnd', endTime);

            this._setViewerData(true);
            this.processPlay.setupPlay(this.viewerWaveformLength, this.playWaveformStart - this.startWaveform, this.playWaveformLength, this.options.sampleRate);
        },
        play: function () {
            //TODO: this play button either needs a requirement to use .icon-play/.icon-stop or we need another way around this
            this.$playBtn.children('i').removeClass('icon-play').addClass('icon-stop');
            this.movePlayIndicator();
            this.processPlay.play();
            this.$audioPlayer.audioPlayerWaveformViewer('play');
            this.$zoomInBtn.attr('disabled', 'disabled');
            this.$zoomOutBtn.attr('disabled', 'disabled');
            $('title').text('▶ ' + $('title').text());
        },
        stop: function () {
            this.$playBtn.children('i').removeClass('icon-stop').addClass('icon-play');
            this.processPlay.stop();
            this.$audioPlayer.audioPlayerWaveformViewer('stop');
            this.$zoomInBtn.removeAttr('disabled');
            this.$zoomOutBtn.removeAttr('disabled');
            $('title').text($('title').text().replace(/▶/g, ''));
        },
        togglePlay: function () {
            if (this.isPlaying()) {
                this.stop();
            } else {
                this.play();
            }
        },
        _destroy: function () {
            this.$playBtn.unbind('click');
            this.$zoomInBtn.unbind('click');
            this.$zoomOutBtn.unbind('click');
            this._dropBox.removeEventListener("drop");
            this._dropBox.removeEventListener("dragover");
            this._dropBox.removeEventListener("dragleave");
        }

    });

// })(jQuery, window, document);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {﻿/* File Created: April 3, 2012 */
//an impulse response is used for the effects
/*!
* jQuery UI Widget-factory plugin boilerplate (for 1.8/9+)
* Author: @addyosmani
* Further changes: @peolanha
* Licensed under the MIT license
*/

; (function ($, window, document, undefined) {

    // define your widget under a namespace of your choice
    //  with additional parameters e.g.
    // $.widget( "namespace.widgetname", (optional) - an
    // existing widget prototype to inherit from, an object
    // literal to become the widget's prototype ); 

    $.widget("Mashup.effects", {

        //Options to be used as defaults
        options: {
            //Required
            url:  '',
            context: null,            
            
            //Optional
            startedLoading: false,
            isLoaded:  false,    
            wetMix: 0,
            dryMix: 0
        },
        buffer: null,

        _create: function () {
            if (this.options.startedLoading) {
                return;
            }
    
            this.options.startedLoading = true;
            this.load();
        },

        _setOption: function (key, value) {
            switch (key) {
                case "someValue":
                    //this.options.someValue = doSomethingWith( value );
                    break;
                default:
                    //this.options[ key ] = value;
                    break;
            }

             this._super( "_setOption", key, value );
        },
        getBuffer: function() {
            return this.buffer;  
        },
        load: function () {
            // Load asynchronously
            var request = new XMLHttpRequest();
            request.open("GET", this.options.url, true);
            request.responseType = "arraybuffer";
            this.request = request;
    
            var self = this;

            request.onload = function() {
                self.buffer = self.options.context.createBuffer(request.response, false);
                self.options.isLoaded = true;
            };

            request.send();
        },

        // Destroy an instantiated plugin and clean up
        // modifications the widget has made to the DOM
        _destroy: function () {
        }


    });

})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(_, $) {﻿/// <reference path="jquery-1.7.1-vsdoc.js" />
window.Mashup = window.Mashup || {};

//allows underscore to use mustache {{name}} brackets instead of underscores horrendous conventions
_.templateSettings.interpolate = /\{\{(.+?)\}\}/g;

Mashup.properties = {
    bpmDelta: 2.0,
    draggableDefaultOptions: {
        revert: 'invalid',
        cursorAt: {
            left: 85
        },
        helper: function (event) {
            var clone = $(this).clone();
            clone.children('button').remove();
            clone.removeClass('highlight');
            var sampleClone = $("<li />")
                .append(clone)
                .addClass('sampleSelected');
            return sampleClone;
        }
    },
    droppableDefaultOptions: {
        accept: '.sampleList li, .sample, #waveformSample',
        hoverClass: 'hover',
        drop: function (event, ui) {
            //If we are dragging from sample a sample, we need to get new start and end times.
            var sampleOptions = {};
            if ($(ui.draggable.context).attr('data-waveform')) {
                //configure sampleOptions here
                $('#sampleWaveform').audioViewer('setPlayTimes');
                sampleOptions.trimStart = $('#audioViewerControls').audioPlayerWaveformViewer('option', 'waveformStart');
                sampleOptions.playDuration = $('#audioViewerControls').audioPlayerWaveformViewer('option', 'waveformEnd') - sampleOptions.trimStart;
                Mashup.MoveSampleToPlayer(sampleOptions, $self);
            }
            var options = $(ui.draggable).attr('data-sample-options');
            sampleOptions = JSON.parse(options);
            var $self = $(this);
            sampleOptions.track = Mashup.GetTrack($self);
            sampleOptions.rhythmIndex = Mashup.GetStartBeat($self);
            if(typeof sampleOptions.playDuration === 'undefined')
                sampleOptions.playDuration = sampleOptions.duration;
            Mashup.MoveSampleToPlayer(sampleOptions, $self);
        }
    },
    maxSampleLength: 41000 * 4 * 90,//41kHz * 32bits * number of seconds allowed
    mouseCaptureOffset: 0,
    mouseCapture: null,
    currentSlider: null,
    messageType: {
        Warning: '',
        Success: 'alert-success',
        Error: 'alert-error'
    },
    iDTags:{
        waveformSample: "#waveformSample"
    },
    //sampleFilePath: 'http://mashandmixdev.commondatastorage.googleapis.com/samples/', //development path (has * for cors)
    numberRegEx: /(\d{1,5})/
};

Mashup.Player = { };
//Global Display Error Message
Mashup.ShowMessage = function (title, message, type, prependTo) {
    Mashup.EndLoading();
    type = (typeof type === "undefined") ? Mashup.properties.messageType.Warning : type;
    var messageOptions = {
        Title: title,
        Message: message,
        AlertType: type
    };
    var template = $("#mashup-message-template").html();
    if (typeof prependTo === "undefined") {
        prependTo = '#main-content';
    }

    $(prependTo).prepend(_.template(template,messageOptions));
};
Mashup.GenericErrorMessage = function (jqXHR, textStatus, errorThrown) {
    Mashup.EndLoading();
    //close modals if visible
    $('.modal').modal('hide');
    switch (jqXHR.status) {
        case 400://bad request
            //Should have a response status. Parse into json, display message
            var responseJson = JSON.parse(jqXHR.responseText);
            Mashup.ShowMessage("Not so fast", responseJson.ResponseStatus.Message, Mashup.properties.messageType.Error);
            return false;
        case 401://unauthorized
            Mashup.ShowMessage("Unauthorized", "You must be logged in to complete this action. Log in <a href='/Account/LogOn/' title='Log In' >here</a>", Mashup.properties.messageType.Warning);
            return false;
        default:
            var responseStatus = JSON.parse(jqXHR.responseText);
            if (responseStatus.ResponseStatus.ErrorCode == "BusinessServicesException") {
                Mashup.ShowMessage("Dang!", responseStatus.ResponseStatus.Message, Mashup.properties.messageType.Error);
                return false;
            }
            Mashup.ShowMessage("What the!", "Sorry, we could not process your request.  The error has been logged and we will do our best to correct the error asap.", Mashup.properties.messageType.Error);
            return false;
    }
};
//Use with graphical player
Mashup.MoveSampleToPlayer = function (sampleOptions, $playerDiv) {
    $playerDiv.droppable("destroy");

    var sample = $playerDiv.audioSampleGraphical(sampleOptions);

    //If sample did not initiate due to error, show error and skip adding the sample to player
    if (!sample.audioSampleGraphical('getInitiated')) {
        sample.audioSampleGraphical('destroy');
        Mashup.ShowMessage("Schnikes!", "The sample overlaps another sample on the same track.  Please find a shorter sample or place the sample on a different track.");
    }
    else {
        Mashup.Player.audioPlayerGraphical('addSample', sample);
    }
};

Mashup.GetTrack = function ($playerDiv) {
    var playerTrack = $playerDiv.parent();
    return $('.player').find('.track').index(playerTrack);
};

Mashup.GetStartBeat = function ($playerDiv) {
    //Calculate left position of playerdiv by aggregating beats before it.
    //Get playerTrack. Start at beginning
    var playerTrack = $playerDiv.parent();
    var playerNdx = playerTrack.find('[class*="span"]').index($playerDiv);
    var aggregateWidth = 0;
    var ndx = 0;

    //first span
    var currBeat = playerTrack.find(':first-child');
    //Aggregate widths until we get to our div
    while (ndx != playerNdx) {
        aggregateWidth += currBeat.outerWidth();
        currBeat = currBeat.next();
        ndx++;
    }
    var numOfLoopBeats = Mashup.Player.audioPlayerGraphical('option', 'numberOfLoopBeats');
    var beatIncrement = Mashup.Player.audioPlayerGraphical('option', 'beatIncrement');
    var trackWidth = playerTrack.width();
    return Math.round(aggregateWidth / trackWidth * numOfLoopBeats * beatIncrement);
};

Mashup.GetSamples = function () {
    var url = '/api/samples?format=json', selectedDiv = $('#selectedSampleTags'), bpm = $('#PlayerBpm').val();
    Mashup.StartLoading('Loading samples...');
    //Get artistIds and tagIds
    var artists = selectedDiv.children('.artistId');
    var tags = selectedDiv.children('.tagId');
    var artistIds = [], tagIds = [];
    for (var j = 0; j < artists.length; j++) {
        artistIds.push(artists.eq(j).attr('data-id'));
    }
    for (var k = 0; k < tags.length; k++) {
        tagIds.push(tags.eq(k).attr('data-id'));
    }
    var postData = {
        Bpm: bpm,
        ArtistIds: artistIds,
        TagIds: tagIds,
        PageIndex: $('#pageIndex').val(),
        PageSize: $('#pageSize').val()
    };
    //get updated songs
    $.ajax({
        url: url,
        data: postData,
        type: 'POST',
        traditional: true,
        success: function (data, textStatus, jqXHR) {
            var sampleTemplate = _.template($("#mashup-songlist-template").html());
            var samples = $('#samples');
            samples.empty();
            _.each(data.SampleList, function (sample) {
                samples.append(sampleTemplate(sample));
            });
            $('#samplesAdded').val(data.SamplesAdded);

            //Put Draggable on new objects
            samples.children('li').draggable(Mashup.properties.draggableDefaultOptions);
            Mashup.AdjustPagers();
            Mashup.EndLoading();
            return false;
        },
        error: Mashup.GenericErrorMessage
    });
};
Mashup.AdjustPagers = function () {
    var pageNdx = parseInt($('#pageIndex').val());
    var pageSize = parseInt($('#pageSize').val());
    var samplesAdded = parseInt($('#samplesAdded').val());
    var numSamples = $('#samples li').length;
    if (pageNdx === 0 && samplesAdded > 0) {
        $('.next').hide();
        if (numSamples === pageSize) {
            $('.previous').show();
            return;
        }
        $('.previous').hide();
        return;
    }
    if (pageNdx <= 0 && numSamples < pageSize) {
        $('.previous').hide();
    }
    else {
        $('.previous').show();
    }
    if (pageNdx >= 0 && numSamples < pageSize) {
        $('.next').hide();
    }
    else {
        $('.next').show();
    }

};
Mashup.StartLoading = function(message) {
    var text = "Loading...Please Wait";
    if (typeof (message) !== 'undefined')
        text = message;
    $('#loading span').text(text);
    $('#loading').show();
    $('body').css('cursor', 'wait');
};
Mashup.EndLoading = function() {
    $('#loading').hide();
    $('body').css('cursor', 'default');
};
Mashup.GetParameterByName = function(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)')
        .exec(window.location.search);

    return match && decodeURIComponent(match[1].replace( /\+/g , ' '));
};
// Test for the Web Audio API <http://chromium.googlecode.com/svn/trunk/samples/audio/specification/specification.html>
Mashup.webAudioApi =  function () {
    return !(window.webkitAudioContext || window.AudioContext);
};
Mashup.isFloat = function(n) {
    return n === +n && n !== (n | 0);
};
Mashup.GetFormInput = function (formName) {
    var model = {};
    $.each($('#' + formName).serializeArray(), function (i, field) {
        if (field.name.indexOf(".") >= 0) {
            field.name = field.name.substring(field.name.indexOf(".") + 1, field.name.length);
        }
        model[field.name] = field.value;
    });
    return model;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24), __webpack_require__(0)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {﻿; (function ($, window, document, undefined) {

    $.widget("Mashup.myResizable", $.ui.mouse,{

        //Options to be used as defaults
        options: {
            resizeElement:null
        },
        _create: function () {
            this._mouseInit();
        },

        // need to override the mouse functions
	    _mouseStart: function(e){
		    // keep track of where the mouse started
	        this.originalMousePosition = e.pageY;
	        this.orginalResizeHeight = this.options.resizeElement.height();
	        this.originalTop = parseInt(this.element.css('top').replace("px",""));
	    },
	    _mouseDrag: function(e){
	        var mouseOffset = this.originalMousePosition - e.pageY;
	        this.options.resizeElement.height(this.orginalResizeHeight - mouseOffset);
	        this.element.css('top', this.originalTop - mouseOffset);
	    },

        _setOption: function (key, value) {
            switch (key) {
                case "someValue":
                    //this.options.someValue = doSomethingWith( value );
                    break;
                default:
                    //this.options[ key ] = value;
                    break;
            }

             this._super( "_setOption", key, value );
        },
        _destroy: function () {
        }

    });

})(jQuery, window, document);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function(a,b){function e(b,c){var d,e,g,h=b.nodeName.toLowerCase();return"area"===h?(d=b.parentNode,e=d.name,!b.href||!e||d.nodeName.toLowerCase()!=="map"?!1:(g=a("img[usemap=#"+e+"]")[0],!!g&&f(g))):(/input|select|textarea|button|object/.test(h)?!b.disabled:"a"===h?b.href||c:c)&&f(b)}function f(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return a.css(this,"visibility")==="hidden"}).length}var c=0,d=/^ui-id-\d+$/;a.ui=a.ui||{};if(a.ui.version)return;a.extend(a.ui,{version:"1.10.0",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;return a.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.css(this,"position"))&&/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.css(this,"overflow")+a.css(this,"overflow-y")+a.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++c)})},removeUniqueId:function(){return this.each(function(){d.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return e(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var c=a.attr(b,"tabindex"),d=isNaN(c);return(d||c>=0)&&e(b,!d)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(c,d){function h(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){return c===b?g["inner"+d].call(this):this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){return typeof b!="number"?g["outer"+d].call(this,b):this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.support.selectstart="onselectstart"in document.createElement("div"),a.fn.extend({disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c){var d,e=a.plugins[b];if(!e||!a.element[0].parentNode||a.element[0].parentNode.nodeType===11)return;for(d=0;d<e.length;d++)a.options[e[d][0]]&&e[d][1].apply(a.element,c)}},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)}})})(jQuery),function(a,b){var c=0,d=Array.prototype.slice,e=a.cleanData;a.cleanData=function(b){for(var c=0,d;(d=b[c])!=null;c++)try{a(d).triggerHandler("remove")}catch(f){}e(b)},a.widget=function(b,c,d){var e,f,g,h,i={},j=b.split(".")[0];b=b.split(".")[1],e=j+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e.toLowerCase()]=function(b){return!!a.data(b,e)},a[j]=a[j]||{},f=a[j][b],g=a[j][b]=function(a,b){if(!this._createWidget)return new g(a,b);arguments.length&&this._createWidget(a,b)},a.extend(g,f,{version:d.version,_proto:a.extend({},d),_childConstructors:[]}),h=new c,h.options=a.widget.extend({},h.options),a.each(d,function(b,d){if(!a.isFunction(d)){i[b]=d;return}i[b]=function(){var a=function(){return c.prototype[b].apply(this,arguments)},e=function(a){return c.prototype[b].apply(this,a)};return function(){var b=this._super,c=this._superApply,f;return this._super=a,this._superApply=e,f=d.apply(this,arguments),this._super=b,this._superApply=c,f}}()}),g.prototype=a.widget.extend(h,{widgetEventPrefix:f?h.widgetEventPrefix:b},i,{constructor:g,namespace:j,widgetName:b,widgetFullName:e}),f?(a.each(f._childConstructors,function(b,c){var d=c.prototype;a.widget(d.namespace+"."+d.widgetName,g,c._proto)}),delete f._childConstructors):c._childConstructors.push(g),a.widget.bridge(b,g)},a.widget.extend=function(c){var e=d.call(arguments,1),f=0,g=e.length,h,i;for(;f<g;f++)for(h in e[f])i=e[f][h],e[f].hasOwnProperty(h)&&i!==b&&(a.isPlainObject(i)?c[h]=a.isPlainObject(c[h])?a.widget.extend({},c[h],i):a.widget.extend({},i):c[h]=i);return c},a.widget.bridge=function(c,e){var f=e.prototype.widgetFullName||c;a.fn[c]=function(g){var h=typeof g=="string",i=d.call(arguments,1),j=this;return g=!h&&i.length?a.widget.extend.apply(null,[g].concat(i)):g,h?this.each(function(){var d,e=a.data(this,f);if(!e)return a.error("cannot call methods on "+c+" prior to initialization; "+"attempted to call method '"+g+"'");if(!a.isFunction(e[g])||g.charAt(0)==="_")return a.error("no such method '"+g+"' for "+c+" widget instance");d=e[g].apply(e,i);if(d!==e&&d!==b)return j=d&&d.jquery?j.pushStack(d.get()):d,!1}):this.each(function(){var b=a.data(this,f);b?b.option(g||{})._init():a.data(this,f,new e(g,this))}),j}},a.Widget=function(){},a.Widget._childConstructors=[],a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,d){d=a(d||this.defaultElement||this)[0],this.element=a(d),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=a.widget.extend({},this.options,this._getCreateOptions(),b),this.bindings=a(),this.hoverable=a(),this.focusable=a(),d!==this&&(a.data(d,this.widgetFullName,this),this._on(!0,this.element,{remove:function(a){a.target===d&&this.destroy()}}),this.document=a(d.style?d.ownerDocument:d.document||d),this.window=a(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:a.noop,_getCreateEventData:a.noop,_create:a.noop,_init:a.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:a.noop,widget:function(){return this.element},option:function(c,d){var e=c,f,g,h;if(arguments.length===0)return a.widget.extend({},this.options);if(typeof c=="string"){e={},f=c.split("."),c=f.shift();if(f.length){g=e[c]=a.widget.extend({},this.options[c]);for(h=0;h<f.length-1;h++)g[f[h]]=g[f[h]]||{},g=g[f[h]];c=f.pop();if(d===b)return g[c]===b?null:g[c];g[c]=d}else{if(d===b)return this.options[c]===b?null:this.options[c];e[c]=d}}return this._setOptions(e),this},_setOptions:function(a){var b;for(b in a)this._setOption(b,a[b]);return this},_setOption:function(a,b){return this.options[a]=b,a==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!b).attr("aria-disabled",b),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(b,c,d){var e,f=this;typeof b!="boolean"&&(d=c,c=b,b=!1),d?(c=e=a(c),this.bindings=this.bindings.add(c)):(d=c,c=this.element,e=this.widget()),a.each(d,function(d,g){function h(){if(!b&&(f.options.disabled===!0||a(this).hasClass("ui-state-disabled")))return;return(typeof g=="string"?f[g]:g).apply(f,arguments)}typeof g!="string"&&(h.guid=g.guid=g.guid||h.guid||a.guid++);var i=d.match(/^(\w+)\s*(.*)$/),j=i[1]+f.eventNamespace,k=i[2];k?e.delegate(k,j,h):c.bind(j,h)})},_off:function(a,b){b=(b||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,a.unbind(b).undelegate(b)},_delay:function(a,b){function c(){return(typeof a=="string"?d[a]:a).apply(d,arguments)}var d=this;return setTimeout(c,b||0)},_hoverable:function(b){this.hoverable=this.hoverable.add(b),this._on(b,{mouseenter:function(b){a(b.currentTarget).addClass("ui-state-hover")},mouseleave:function(b){a(b.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(b){this.focusable=this.focusable.add(b),this._on(b,{focusin:function(b){a(b.currentTarget).addClass("ui-state-focus")},focusout:function(b){a(b.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);return this.element.trigger(c,d),!(a.isFunction(g)&&g.apply(this.element[0],[c].concat(d))===!1||c.isDefaultPrevented())}},a.each({show:"fadeIn",hide:"fadeOut"},function(b,c){a.Widget.prototype["_"+b]=function(d,e,f){typeof e=="string"&&(e={effect:e});var g,h=e?e===!0||typeof e=="number"?c:e.effect||c:b;e=e||{},typeof e=="number"&&(e={duration:e}),g=!a.isEmptyObject(e),e.complete=f,e.delay&&d.delay(e.delay),g&&a.effects&&a.effects.effect[h]?d[b](e):h!==b&&d[h]?d[h](e.duration,e.easing,f):d.queue(function(c){a(this)[b](),f&&f.call(d[0]),c()})}})}(jQuery),function(a,b){var c=!1;a(document).mouseup(function(){c=!1}),a.widget("ui.mouse",{version:"1.10.0",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which===1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return a.ui.ie&&(!document.documentMode||document.documentMode<9)&&!b.button?this._mouseUp(b):this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target===this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(a,b){function m(a,b,c){return[parseInt(a[0],10)*(k.test(a[0])?b/100:1),parseInt(a[1],10)*(k.test(a[1])?c/100:1)]}function n(b,c){return parseInt(a.css(b,c),10)||0}function o(b){var c=b[0];return c.nodeType===9?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}a.ui=a.ui||{};var c,d=Math.max,e=Math.abs,f=Math.round,g=/left|center|right/,h=/top|center|bottom/,i=/[\+\-]\d+%?/,j=/^\w+/,k=/%$/,l=a.fn.position;a.position={scrollbarWidth:function(){if(c!==b)return c;var d,e,f=a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),g=f.children()[0];return a("body").append(f),d=g.offsetWidth,f.css("overflow","scroll"),e=g.offsetWidth,d===e&&(e=f[0].clientWidth),f.remove(),c=d-e},getScrollInfo:function(b){var c=b.isWindow?"":b.element.css("overflow-x"),d=b.isWindow?"":b.element.css("overflow-y"),e=c==="scroll"||c==="auto"&&b.width<b.element[0].scrollWidth,f=d==="scroll"||d==="auto"&&b.height<b.element[0].scrollHeight;return{width:e?a.position.scrollbarWidth():0,height:f?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]);return{element:c,isWindow:d,offset:c.offset()||{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:d?c.width():c.outerWidth(),height:d?c.height():c.outerHeight()}}},a.fn.position=function(b){if(!b||!b.of)return l.apply(this,arguments);b=a.extend({},b);var c,k,p,q,r,s,t=a(b.of),u=a.position.getWithinInfo(b.within),v=a.position.getScrollInfo(u),w=(b.collision||"flip").split(" "),x={};return s=o(t),t[0].preventDefault&&(b.at="left top"),k=s.width,p=s.height,q=s.offset,r=a.extend({},q),a.each(["my","at"],function(){var a=(b[this]||"").split(" "),c,d;a.length===1&&(a=g.test(a[0])?a.concat(["center"]):h.test(a[0])?["center"].concat(a):["center","center"]),a[0]=g.test(a[0])?a[0]:"center",a[1]=h.test(a[1])?a[1]:"center",c=i.exec(a[0]),d=i.exec(a[1]),x[this]=[c?c[0]:0,d?d[0]:0],b[this]=[j.exec(a[0])[0],j.exec(a[1])[0]]}),w.length===1&&(w[1]=w[0]),b.at[0]==="right"?r.left+=k:b.at[0]==="center"&&(r.left+=k/2),b.at[1]==="bottom"?r.top+=p:b.at[1]==="center"&&(r.top+=p/2),c=m(x.at,k,p),r.left+=c[0],r.top+=c[1],this.each(function(){var g,h,i=a(this),j=i.outerWidth(),l=i.outerHeight(),o=n(this,"marginLeft"),s=n(this,"marginTop"),y=j+o+n(this,"marginRight")+v.width,z=l+s+n(this,"marginBottom")+v.height,A=a.extend({},r),B=m(x.my,i.outerWidth(),i.outerHeight());b.my[0]==="right"?A.left-=j:b.my[0]==="center"&&(A.left-=j/2),b.my[1]==="bottom"?A.top-=l:b.my[1]==="center"&&(A.top-=l/2),A.left+=B[0],A.top+=B[1],a.support.offsetFractions||(A.left=f(A.left),A.top=f(A.top)),g={marginLeft:o,marginTop:s},a.each(["left","top"],function(d,e){a.ui.position[w[d]]&&a.ui.position[w[d]][e](A,{targetWidth:k,targetHeight:p,elemWidth:j,elemHeight:l,collisionPosition:g,collisionWidth:y,collisionHeight:z,offset:[c[0]+B[0],c[1]+B[1]],my:b.my,at:b.at,within:u,elem:i})}),b.using&&(h=function(a){var c=q.left-A.left,f=c+k-j,g=q.top-A.top,h=g+p-l,m={target:{element:t,left:q.left,top:q.top,width:k,height:p},element:{element:i,left:A.left,top:A.top,width:j,height:l},horizontal:f<0?"left":c>0?"right":"center",vertical:h<0?"top":g>0?"bottom":"middle"};k<j&&e(c+f)<k&&(m.horizontal="center"),p<l&&e(g+h)<p&&(m.vertical="middle"),d(e(c),e(f))>d(e(g),e(h))?m.important="horizontal":m.important="vertical",b.using.call(this,a,m)}),i.offset(a.extend(A,{using:h}))})},a.ui.position={fit:{left:function(a,b){var c=b.within,e=c.isWindow?c.scrollLeft:c.offset.left,f=c.width,g=a.left-b.collisionPosition.marginLeft,h=e-g,i=g+b.collisionWidth-f-e,j;b.collisionWidth>f?h>0&&i<=0?(j=a.left+h+b.collisionWidth-f-e,a.left+=h-j):i>0&&h<=0?a.left=e:h>i?a.left=e+f-b.collisionWidth:a.left=e:h>0?a.left+=h:i>0?a.left-=i:a.left=d(a.left-g,a.left)},top:function(a,b){var c=b.within,e=c.isWindow?c.scrollTop:c.offset.top,f=b.within.height,g=a.top-b.collisionPosition.marginTop,h=e-g,i=g+b.collisionHeight-f-e,j;b.collisionHeight>f?h>0&&i<=0?(j=a.top+h+b.collisionHeight-f-e,a.top+=h-j):i>0&&h<=0?a.top=e:h>i?a.top=e+f-b.collisionHeight:a.top=e:h>0?a.top+=h:i>0?a.top-=i:a.top=d(a.top-g,a.top)}},flip:{left:function(a,b){var c=b.within,d=c.offset.left+c.scrollLeft,f=c.width,g=c.isWindow?c.scrollLeft:c.offset.left,h=a.left-b.collisionPosition.marginLeft,i=h-g,j=h+b.collisionWidth-f-g,k=b.my[0]==="left"?-b.elemWidth:b.my[0]==="right"?b.elemWidth:0,l=b.at[0]==="left"?b.targetWidth:b.at[0]==="right"?-b.targetWidth:0,m=-2*b.offset[0],n,o;if(i<0){n=a.left+k+l+m+b.collisionWidth-f-d;if(n<0||n<e(i))a.left+=k+l+m}else if(j>0){o=a.left-b.collisionPosition.marginLeft+k+l+m-g;if(o>0||e(o)<j)a.left+=k+l+m}},top:function(a,b){var c=b.within,d=c.offset.top+c.scrollTop,f=c.height,g=c.isWindow?c.scrollTop:c.offset.top,h=a.top-b.collisionPosition.marginTop,i=h-g,j=h+b.collisionHeight-f-g,k=b.my[1]==="top",l=k?-b.elemHeight:b.my[1]==="bottom"?b.elemHeight:0,m=b.at[1]==="top"?b.targetHeight:b.at[1]==="bottom"?-b.targetHeight:0,n=-2*b.offset[1],o,p;i<0?(p=a.top+l+m+n+b.collisionHeight-f-d,a.top+l+m+n>i&&(p<0||p<e(i))&&(a.top+=l+m+n)):j>0&&(o=a.top-b.collisionPosition.marginTop+l+m+n-g,a.top+l+m+n>j&&(o>0||e(o)<j)&&(a.top+=l+m+n))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}},function(){var b,c,d,e,f,g=document.getElementsByTagName("body")[0],h=document.createElement("div");b=document.createElement(g?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},g&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(f in d)b.style[f]=d[f];b.appendChild(h),c=g||document.documentElement,c.insertBefore(b,c.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",e=a(h).offset().left,a.support.offsetFractions=e>10&&e<11,b.innerHTML="",c.removeChild(b)}()}(jQuery),function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.0",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(b),this.handle?(a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c,d=this,e=!1,f=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(f=a.ui.ddmanager.drop(this,b)),this.dropped&&(f=this.dropped,this.dropped=!1),c=this.element[0];while(c&&(c=c.parentNode))c===document&&(e=!0);return!e&&this.options.helper==="original"?!1:(this.options.revert==="invalid"&&!f||this.options.revert==="valid"&&f||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,f)?a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){d._trigger("stop",b)!==!1&&d._clear()}):this._trigger("stop",b)!==!1&&this._clear(),!1)},_mouseUp:function(b){return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").addBack().each(function(){this===b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo==="parent"?this.element[0].parentNode:c.appendTo),d[0]!==this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&a.ui.ie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b,c,d,e=this.options;e.containment==="parent"&&(e.containment=this.helper[0].parentNode);if(e.containment==="document"||e.containment==="window")this.containment=[e.containment==="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e.containment==="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(e.containment==="document"?0:a(window).scrollLeft())+a(e.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e.containment==="document"?0:a(window).scrollTop())+(a(e.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(e.containment)&&e.containment.constructor!==Array){c=a(e.containment),d=c[0];if(!d)return;b=a(d).css("overflow")!=="hidden",this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(b?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(b?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else e.containment.constructor===Array&&(this.containment=e.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b==="absolute"?1:-1,e=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,f=/(html|body)/i.test(e[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():f?0:e.scrollTop())*d,left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():f?0:e.scrollLeft())*d}},_generatePosition:function(b){var c,d,e,f,g=this.options,h=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!a.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(h[0].tagName),j=b.pageX,k=b.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(d=this.relative_container.offset(),c=[this.containment[0]+d.left,this.containment[1]+d.top,this.containment[2]+d.left,this.containment[3]+d.top]):c=this.containment,b.pageX-this.offset.click.left<c[0]&&(j=c[0]+this.offset.click.left),b.pageY-this.offset.click.top<c[1]&&(k=c[1]+this.offset.click.top),b.pageX-this.offset.click.left>c[2]&&(j=c[2]+this.offset.click.left),b.pageY-this.offset.click.top>c[3]&&(k=c[3]+this.offset.click.top)),g.grid&&(e=g.grid[1]?this.originalPageY+Math.round((k-this.originalPageY)/g.grid[1])*g.grid[1]:this.originalPageY,k=c?e-this.offset.click.top>=c[1]||e-this.offset.click.top>c[3]?e:e-this.offset.click.top>=c[1]?e-g.grid[1]:e+g.grid[1]:e,f=g.grid[0]?this.originalPageX+Math.round((j-this.originalPageX)/g.grid[0])*g.grid[0]:this.originalPageX,j=c?f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2]?f:f-this.offset.click.left>=c[0]?f-g.grid[0]:f+g.grid[0]:f)),{top:k-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():i?0:h.scrollTop()),left:j-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():i?0:h.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b==="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("ui-draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"ui-sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("ui-draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper==="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("ui-draggable"),e=this;a.each(d.sortables,function(){var f=!1,g=this;this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(f=!0,a.each(d.sortables,function(){return this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this!==g&&this.instance._intersectsWith(this.instance.containerCache)&&a.ui.contains(g.instance.element[0],this.instance.element[0])&&(f=!1),f})),f?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(){var b=a("body"),c=a(this).data("ui-draggable").options;b.css("cursor")&&(c._cursor=b.css("cursor")),b.css("cursor",c.cursor)},stop:function(){var b=a(this).data("ui-draggable").options;b._cursor&&a("body").css("cursor",b._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("ui-draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("ui-draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(){var b=a(this).data("ui-draggable");b.scrollParent[0]!==document&&b.scrollParent[0].tagName!=="HTML"&&(b.overflowOffset=b.scrollParent.offset())},drag:function(b){var c=a(this).data("ui-draggable"),d=c.options,e=!1;if(c.scrollParent[0]!==document&&c.scrollParent[0].tagName!=="HTML"){if(!d.axis||d.axis!=="x")c.overflowOffset.top+c.scrollParent[0].offsetHeight-b.pageY<d.scrollSensitivity?c.scrollParent[0].scrollTop=e=c.scrollParent[0].scrollTop+d.scrollSpeed:b.pageY-c.overflowOffset.top<d.scrollSensitivity&&(c.scrollParent[0].scrollTop=e=c.scrollParent[0].scrollTop-d.scrollSpeed);if(!d.axis||d.axis!=="y")c.overflowOffset.left+c.scrollParent[0].offsetWidth-b.pageX<d.scrollSensitivity?c.scrollParent[0].scrollLeft=e=c.scrollParent[0].scrollLeft+d.scrollSpeed:b.pageX-c.overflowOffset.left<d.scrollSensitivity&&(c.scrollParent[0].scrollLeft=e=c.scrollParent[0].scrollLeft-d.scrollSpeed)}else{if(!d.axis||d.axis!=="x")b.pageY-a(document).scrollTop()<d.scrollSensitivity?e=a(document).scrollTop(a(document).scrollTop()-d.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<d.scrollSensitivity&&(e=a(document).scrollTop(a(document).scrollTop()+d.scrollSpeed));if(!d.axis||d.axis!=="y")b.pageX-a(document).scrollLeft()<d.scrollSensitivity?e=a(document).scrollLeft(a(document).scrollLeft()-d.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<d.scrollSensitivity&&(e=a(document).scrollLeft(a(document).scrollLeft()+d.scrollSpeed))}e!==!1&&a.ui.ddmanager&&!d.dropBehaviour&&a.ui.ddmanager.prepareOffsets(c,b)}}),a.ui.plugin.add("draggable","snap",{start:function(){var b=a(this).data("ui-draggable"),c=b.options;b.snapElements=[],a(c.snap.constructor!==String?c.snap.items||":data(ui-draggable)":c.snap).each(function(){var c=a(this),d=c.offset();this!==b.element[0]&&b.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:d.top,left:d.left})})},drag:function(b,c){var d,e,f,g,h,i,j,k,l,m,n=a(this).data("ui-draggable"),o=n.options,p=o.snapTolerance,q=c.offset.left,r=q+n.helperProportions.width,s=c.offset.top,t=s+n.helperProportions.height;for(l=n.snapElements.length-1;l>=0;l--){h=n.snapElements[l].left,i=h+n.snapElements[l].width,j=n.snapElements[l].top,k=j+n.snapElements[l].height;if(h-p<q&&q<i+p&&j-p<s&&s<k+p||h-p<q&&q<i+p&&j-p<t&&t<k+p||h-p<r&&r<i+p&&j-p<s&&s<k+p||h-p<r&&r<i+p&&j-p<t&&t<k+p)o.snapMode!=="inner"&&(d=Math.abs(j-t)<=p,e=Math.abs(k-s)<=p,f=Math.abs(h-r)<=p,g=Math.abs(i-q)<=p,d&&(c.position.top=n._convertPositionTo("relative",{top:j-n.helperProportions.height,left:0}).top-n.margins.top),e&&(c.position.top=n._convertPositionTo("relative",{top:k,left:0}).top-n.margins.top),f&&(c.position.left=n._convertPositionTo("relative",{top:0,left:h-n.helperProportions.width}).left-n.margins.left),g&&(c.position.left=n._convertPositionTo("relative",{top:0,left:i}).left-n.margins.left)),m=d||e||f||g,o.snapMode!=="outer"&&(d=Math.abs(j-s)<=p,e=Math.abs(k-t)<=p,f=Math.abs(h-q)<=p,g=Math.abs(i-r)<=p,d&&(c.position.top=n._convertPositionTo("relative",{top:j,left:0}).top-n.margins.top),e&&(c.position.top=n._convertPositionTo("relative",{top:k-n.helperProportions.height,left:0}).top-n.margins.top),f&&(c.position.left=n._convertPositionTo("relative",{top:0,left:h}).left-n.margins.left),g&&(c.position.left=n._convertPositionTo("relative",{top:0,left:i-n.helperProportions.width}).left-n.margins.left)),!n.snapElements[l].snapping&&(d||e||f||g||m)&&n.options.snap.snap&&n.options.snap.snap.call(n.element,b,a.extend(n._uiHash(),{snapItem:n.snapElements[l].item})),n.snapElements[l].snapping=d||e||f||g||m;else{n.snapElements[l].snapping&&n.options.snap.release&&n.options.snap.release.call(n.element,b,a.extend(n._uiHash(),{snapItem:n.snapElements[l].item})),n.snapElements[l].snapping=!1;continue}}}}),a.ui.plugin.add("draggable","stack",{start:function(){var b,c=a(this).data("ui-draggable").options,d=a.makeArray(a(c.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!d.length)return;b=parseInt(d[0].style.zIndex,10)||0,a(d).each(function(a){this.style.zIndex=b+a}),this[0].style.zIndex=b+d.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("ui-draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("ui-draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})}(jQuery),function(a,b){function c(a,b,c){return a>b&&a<b+c}a.widget("ui.droppable",{version:"1.10.0",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b=this.options,c=b.accept;this.isover=!1,this.isout=!0,this.accept=a.isFunction(c)?c:function(a){return a.is(c)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},a.ui.ddmanager.droppables[b.scope]=a.ui.ddmanager.droppables[b.scope]||[],a.ui.ddmanager.droppables[b.scope].push(this),b.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var b=0,c=a.ui.ddmanager.droppables[this.options.scope];for(;b<c.length;b++)c[b]===this&&c.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(b,c){b==="accept"&&(this.accept=a.isFunction(c)?c:function(a){return a.is(c)}),a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),c&&this._trigger("activate",b,this.ui(c))},_deactivate:function(b){var c=a.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),c&&this._trigger("deactivate",b,this.ui(c))},_over:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]===this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(c)))},_out:function(b){var c=a.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]===this.element[0])return;this.accept.call(this.element[0],c.currentItem||c.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(c)))},_drop:function(b,c){var d=c||a.ui.ddmanager.current,e=!1;return!d||(d.currentItem||d.element)[0]===this.element[0]?!1:(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var b=a.data(this,"ui-droppable");if(b.options.greedy&&!b.options.disabled&&b.options.scope===d.options.scope&&b.accept.call(b.element[0],d.currentItem||d.element)&&a.ui.intersect(d,a.extend(b,{offset:b.element.offset()}),b.options.tolerance))return e=!0,!1}),e?!1:this.accept.call(this.element[0],d.currentItem||d.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(d)),this.element):!1)},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}}),a.ui.intersect=function(a,b,d){if(!b.offset)return!1;var e,f,g=(a.positionAbs||a.position.absolute).left,h=g+a.helperProportions.width,i=(a.positionAbs||a.position.absolute).top,j=i+a.helperProportions.height,k=b.offset.left,l=k+b.proportions.width,m=b.offset.top,n=m+b.proportions.height;switch(d){case"fit":return k<=g&&h<=l&&m<=i&&j<=n;case"intersect":return k<g+a.helperProportions.width/2&&h-a.helperProportions.width/2<l&&m<i+a.helperProportions.height/2&&j-a.helperProportions.height/2<n;case"pointer":return e=(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,f=(a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,c(f,m,b.proportions.height)&&c(e,k,b.proportions.width);case"touch":return(i>=m&&i<=n||j>=m&&j<=n||i<m&&j>n)&&(g>=k&&g<=l||h>=k&&h<=l||g<k&&h>l);default:return!1}},a.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(b,c){var d,e,f=a.ui.ddmanager.droppables[b.options.scope]||[],g=c?c.type:null,h=(b.currentItem||b.element).find(":data(ui-droppable)").addBack();i:for(d=0;d<f.length;d++){if(f[d].options.disabled||b&&!f[d].accept.call(f[d].element[0],b.currentItem||b.element))continue;for(e=0;e<h.length;e++)if(h[e]===f[d].element[0]){f[d].proportions.height=0;continue i}f[d].visible=f[d].element.css("display")!=="none";if(!f[d].visible)continue;g==="mousedown"&&f[d]._activate.call(f[d],c),f[d].offset=f[d].element.offset(),f[d].proportions={width:f[d].element[0].offsetWidth,height:f[d].element[0].offsetHeight}}},drop:function(b,c){var d=!1;return a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&a.ui.intersect(b,this,this.options.tolerance)&&(d=this._drop.call(this,c)||d),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,c))}),d},dragStart:function(b,c){b.element.parentsUntil("body").bind("scroll.droppable",function(){b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)})},drag:function(b,c){b.options.refreshPositions&&a.ui.ddmanager.prepareOffsets(b,c),a.each(a.ui.ddmanager.droppables[b.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var d,e,f,g=a.ui.intersect(b,this,this.options.tolerance),h=!g&&this.isover?"isout":g&&!this.isover?"isover":null;if(!h)return;this.options.greedy&&(e=this.options.scope,f=this.element.parents(":data(ui-droppable)").filter(function(){return a.data(this,"ui-droppable").options.scope===e}),f.length&&(d=a.data(f[0],"ui-droppable"),d.greedyChild=h==="isover")),d&&h==="isover"&&(d.isover=!1,d.isout=!0,d._out.call(d,c)),this[h]=!0,this[h==="isout"?"isover":"isout"]=!1,this[h==="isover"?"_over":"_out"].call(this,c),d&&h==="isout"&&(d.isout=!1,d.isover=!0,d._over.call(d,c))})},dragStop:function(b,c){b.element.parentsUntil("body").unbind("scroll.droppable"),b.options.refreshPositions||a.ui.ddmanager.prepareOffsets(b,c)}}}(jQuery)
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 20 */
/***/ function(module, exports) {

﻿/***

    P R O C E S S I N G . J S - 1.4.1
    a port of the Processing visualization language

    Processing.js is licensed under the MIT License, see LICENSE.
    For a list of copyright holders, please refer to AUTHORS.

    http://processingjs.org

***/

(function(window, document, Math, undef) {
  var nop = function() {};
  var debug = function() {
    if ("console" in window) return function(msg) {
      window.console.log("Processing.js: " + msg)
    };
    return nop
  }();
  var ajax = function(url) {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url, false);
    if (xhr.overrideMimeType) xhr.overrideMimeType("text/plain");
    xhr.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT");
    xhr.send(null);
    if (xhr.status !== 200 && xhr.status !== 0) throw "XMLHttpRequest failed, status code " + xhr.status;
    return xhr.responseText
  };
  var isDOMPresent = "document" in this && !("fake" in this.document);
  document.head = document.head || document.getElementsByTagName("head")[0];

  function setupTypedArray(name, fallback) {
    if (name in window) return window[name];
    if (typeof window[fallback] === "function") return window[fallback];
    return function(obj) {
      if (obj instanceof Array) return obj;
      if (typeof obj === "number") {
        var arr = [];
        arr.length = obj;
        return arr
      }
    }
  }
  if (document.documentMode >= 9 && !document.doctype) throw "The doctype directive is missing. The recommended doctype in Internet Explorer is the HTML5 doctype: <!DOCTYPE html>";
  var Float32Array = setupTypedArray("Float32Array", "WebGLFloatArray"),
    Int32Array = setupTypedArray("Int32Array", "WebGLIntArray"),
    Uint16Array = setupTypedArray("Uint16Array", "WebGLUnsignedShortArray"),
    Uint8Array = setupTypedArray("Uint8Array", "WebGLUnsignedByteArray");
  var PConstants = {
    X: 0,
    Y: 1,
    Z: 2,
    R: 3,
    G: 4,
    B: 5,
    A: 6,
    U: 7,
    V: 8,
    NX: 9,
    NY: 10,
    NZ: 11,
    EDGE: 12,
    SR: 13,
    SG: 14,
    SB: 15,
    SA: 16,
    SW: 17,
    TX: 18,
    TY: 19,
    TZ: 20,
    VX: 21,
    VY: 22,
    VZ: 23,
    VW: 24,
    AR: 25,
    AG: 26,
    AB: 27,
    DR: 3,
    DG: 4,
    DB: 5,
    DA: 6,
    SPR: 28,
    SPG: 29,
    SPB: 30,
    SHINE: 31,
    ER: 32,
    EG: 33,
    EB: 34,
    BEEN_LIT: 35,
    VERTEX_FIELD_COUNT: 36,
    P2D: 1,
    JAVA2D: 1,
    WEBGL: 2,
    P3D: 2,
    OPENGL: 2,
    PDF: 0,
    DXF: 0,
    OTHER: 0,
    WINDOWS: 1,
    MAXOSX: 2,
    LINUX: 3,
    EPSILON: 1.0E-4,
    MAX_FLOAT: 3.4028235E38,
    MIN_FLOAT: -3.4028235E38,
    MAX_INT: 2147483647,
    MIN_INT: -2147483648,
    PI: Math.PI,
    TWO_PI: 2 * Math.PI,
    HALF_PI: Math.PI / 2,
    THIRD_PI: Math.PI / 3,
    QUARTER_PI: Math.PI / 4,
    DEG_TO_RAD: Math.PI / 180,
    RAD_TO_DEG: 180 / Math.PI,
    WHITESPACE: " \t\n\r\u000c\u00a0",
    RGB: 1,
    ARGB: 2,
    HSB: 3,
    ALPHA: 4,
    CMYK: 5,
    TIFF: 0,
    TARGA: 1,
    JPEG: 2,
    GIF: 3,
    BLUR: 11,
    GRAY: 12,
    INVERT: 13,
    OPAQUE: 14,
    POSTERIZE: 15,
    THRESHOLD: 16,
    ERODE: 17,
    DILATE: 18,
    REPLACE: 0,
    BLEND: 1 << 0,
    ADD: 1 << 1,
    SUBTRACT: 1 << 2,
    LIGHTEST: 1 << 3,
    DARKEST: 1 << 4,
    DIFFERENCE: 1 << 5,
    EXCLUSION: 1 << 6,
    MULTIPLY: 1 << 7,
    SCREEN: 1 << 8,
    OVERLAY: 1 << 9,
    HARD_LIGHT: 1 << 10,
    SOFT_LIGHT: 1 << 11,
    DODGE: 1 << 12,
    BURN: 1 << 13,
    ALPHA_MASK: 4278190080,
    RED_MASK: 16711680,
    GREEN_MASK: 65280,
    BLUE_MASK: 255,
    CUSTOM: 0,
    ORTHOGRAPHIC: 2,
    PERSPECTIVE: 3,
    POINT: 2,
    POINTS: 2,
    LINE: 4,
    LINES: 4,
    TRIANGLE: 8,
    TRIANGLES: 9,
    TRIANGLE_STRIP: 10,
    TRIANGLE_FAN: 11,
    QUAD: 16,
    QUADS: 16,
    QUAD_STRIP: 17,
    POLYGON: 20,
    PATH: 21,
    RECT: 30,
    ELLIPSE: 31,
    ARC: 32,
    SPHERE: 40,
    BOX: 41,
    GROUP: 0,
    PRIMITIVE: 1,
    GEOMETRY: 3,
    VERTEX: 0,
    BEZIER_VERTEX: 1,
    CURVE_VERTEX: 2,
    BREAK: 3,
    CLOSESHAPE: 4,
    OPEN: 1,
    CLOSE: 2,
    CORNER: 0,
    CORNERS: 1,
    RADIUS: 2,
    CENTER_RADIUS: 2,
    CENTER: 3,
    DIAMETER: 3,
    CENTER_DIAMETER: 3,
    BASELINE: 0,
    TOP: 101,
    BOTTOM: 102,
    NORMAL: 1,
    NORMALIZED: 1,
    IMAGE: 2,
    MODEL: 4,
    SHAPE: 5,
    SQUARE: "butt",
    ROUND: "round",
    PROJECT: "square",
    MITER: "miter",
    BEVEL: "bevel",
    AMBIENT: 0,
    DIRECTIONAL: 1,
    SPOT: 3,
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 10,
    RETURN: 13,
    ESC: 27,
    DELETE: 127,
    CODED: 65535,
    SHIFT: 16,
    CONTROL: 17,
    ALT: 18,
    CAPSLK: 20,
    PGUP: 33,
    PGDN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLK: 144,
    META: 157,
    INSERT: 155,
    ARROW: "default",
    CROSS: "crosshair",
    HAND: "pointer",
    MOVE: "move",
    TEXT: "text",
    WAIT: "wait",
    NOCURSOR: "url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",
    DISABLE_OPENGL_2X_SMOOTH: 1,
    ENABLE_OPENGL_2X_SMOOTH: -1,
    ENABLE_OPENGL_4X_SMOOTH: 2,
    ENABLE_NATIVE_FONTS: 3,
    DISABLE_DEPTH_TEST: 4,
    ENABLE_DEPTH_TEST: -4,
    ENABLE_DEPTH_SORT: 5,
    DISABLE_DEPTH_SORT: -5,
    DISABLE_OPENGL_ERROR_REPORT: 6,
    ENABLE_OPENGL_ERROR_REPORT: -6,
    ENABLE_ACCURATE_TEXTURES: 7,
    DISABLE_ACCURATE_TEXTURES: -7,
    HINT_COUNT: 10,
    SINCOS_LENGTH: 720,
    PRECISIONB: 15,
    PRECISIONF: 1 << 15,
    PREC_MAXVAL: (1 << 15) - 1,
    PREC_ALPHA_SHIFT: 24 - 15,
    PREC_RED_SHIFT: 16 - 15,
    NORMAL_MODE_AUTO: 0,
    NORMAL_MODE_SHAPE: 1,
    NORMAL_MODE_VERTEX: 2,
    MAX_LIGHTS: 8
  };

  function virtHashCode(obj) {
    if (typeof obj === "string") {
      var hash = 0;
      for (var i = 0; i < obj.length; ++i) hash = hash * 31 + obj.charCodeAt(i) & 4294967295;
      return hash
    }
    if (typeof obj !== "object") return obj & 4294967295;
    if (obj.hashCode instanceof Function) return obj.hashCode();
    if (obj.$id === undef) obj.$id = Math.floor(Math.random() * 65536) - 32768 << 16 | Math.floor(Math.random() * 65536);
    return obj.$id
  }
  function virtEquals(obj, other) {
    if (obj === null || other === null) return obj === null && other === null;
    if (typeof obj === "string") return obj === other;
    if (typeof obj !== "object") return obj === other;
    if (obj.equals instanceof Function) return obj.equals(other);
    return obj === other
  }
  var ObjectIterator = function(obj) {
    if (obj.iterator instanceof
    Function) return obj.iterator();
    if (obj instanceof Array) {
      var index = -1;
      this.hasNext = function() {
        return ++index < obj.length
      };
      this.next = function() {
        return obj[index]
      }
    } else throw "Unable to iterate: " + obj;
  };
  var ArrayList = function() {
    function Iterator(array) {
      var index = 0;
      this.hasNext = function() {
        return index < array.length
      };
      this.next = function() {
        return array[index++]
      };
      this.remove = function() {
        array.splice(index, 1)
      }
    }
    function ArrayList(a) {
      var array;
      if (a instanceof ArrayList) array = a.toArray();
      else {
        array = [];
        if (typeof a === "number") array.length = a > 0 ? a : 0
      }
      this.get = function(i) {
        return array[i]
      };
      this.contains = function(item) {
        return this.indexOf(item) > -1
      };
      this.indexOf = function(item) {
        for (var i = 0, len = array.length; i < len; ++i) if (virtEquals(item, array[i])) return i;
        return -1
      };
      this.lastIndexOf = function(item) {
        for (var i = array.length - 1; i >= 0; --i) if (virtEquals(item, array[i])) return i;
        return -1
      };
      this.add = function() {
        if (arguments.length === 1) array.push(arguments[0]);
        else if (arguments.length === 2) {
          var arg0 = arguments[0];
          if (typeof arg0 === "number") if (arg0 >= 0 && arg0 <= array.length) array.splice(arg0, 0, arguments[1]);
          else throw arg0 + " is not a valid index";
          else throw typeof arg0 + " is not a number";
        } else throw "Please use the proper number of parameters.";
      };
      this.addAll = function(arg1, arg2) {
        var it;
        if (typeof arg1 === "number") {
          if (arg1 < 0 || arg1 > array.length) throw "Index out of bounds for addAll: " + arg1 + " greater or equal than " + array.length;
          it = new ObjectIterator(arg2);
          while (it.hasNext()) array.splice(arg1++, 0, it.next())
        } else {
          it = new ObjectIterator(arg1);
          while (it.hasNext()) array.push(it.next())
        }
      };
      this.set = function() {
        if (arguments.length === 2) {
          var arg0 = arguments[0];
          if (typeof arg0 === "number") if (arg0 >= 0 && arg0 < array.length) array.splice(arg0, 1, arguments[1]);
          else throw arg0 + " is not a valid index.";
          else throw typeof arg0 + " is not a number";
        } else throw "Please use the proper number of parameters.";
      };
      this.size = function() {
        return array.length
      };
      this.clear = function() {
        array.length = 0
      };
      this.remove = function(item) {
        if (typeof item === "number") return array.splice(item, 1)[0];
        item = this.indexOf(item);
        if (item > -1) {
          array.splice(item, 1);
          return true
        }
        return false
      };
      this.removeAll = function(c) {
        var i, x, item, newList = new ArrayList;
        newList.addAll(this);
        this.clear();
        for (i = 0, x = 0; i < newList.size(); i++) {
          item = newList.get(i);
          if (!c.contains(item)) this.add(x++, item)
        }
        if (this.size() < newList.size()) return true;
        return false
      };
      this.isEmpty = function() {
        return !array.length
      };
      this.clone = function() {
        return new ArrayList(this)
      };
      this.toArray = function() {
        return array.slice(0)
      };
      this.iterator = function() {
        return new Iterator(array)
      }
    }
    return ArrayList
  }();
  var HashMap = function() {
    function HashMap() {
      if (arguments.length === 1 && arguments[0] instanceof HashMap) return arguments[0].clone();
      var initialCapacity = arguments.length > 0 ? arguments[0] : 16;
      var loadFactor = arguments.length > 1 ? arguments[1] : 0.75;
      var buckets = [];
      buckets.length = initialCapacity;
      var count = 0;
      var hashMap = this;

      function getBucketIndex(key) {
        var index = virtHashCode(key) % buckets.length;
        return index < 0 ? buckets.length + index : index
      }
      function ensureLoad() {
        if (count <= loadFactor * buckets.length) return;
        var allEntries = [];
        for (var i = 0; i < buckets.length; ++i) if (buckets[i] !== undef) allEntries = allEntries.concat(buckets[i]);
        var newBucketsLength = buckets.length * 2;
        buckets = [];
        buckets.length = newBucketsLength;
        for (var j = 0; j < allEntries.length; ++j) {
          var index = getBucketIndex(allEntries[j].key);
          var bucket = buckets[index];
          if (bucket === undef) buckets[index] = bucket = [];
          bucket.push(allEntries[j])
        }
      }
      function Iterator(conversion, removeItem) {
        var bucketIndex = 0;
        var itemIndex = -1;
        var endOfBuckets = false;
        var currentItem;

        function findNext() {
          while (!endOfBuckets) {
            ++itemIndex;
            if (bucketIndex >= buckets.length) endOfBuckets = true;
            else if (buckets[bucketIndex] === undef || itemIndex >= buckets[bucketIndex].length) {
              itemIndex = -1;
              ++bucketIndex
            } else return
          }
        }
        this.hasNext = function() {
          return !endOfBuckets
        };
        this.next = function() {
          currentItem = conversion(buckets[bucketIndex][itemIndex]);
          findNext();
          return currentItem
        };
        this.remove = function() {
          if (currentItem !== undef) {
            removeItem(currentItem);
            --itemIndex;
            findNext()
          }
        };
        findNext()
      }
      function Set(conversion, isIn, removeItem) {
        this.clear = function() {
          hashMap.clear()
        };
        this.contains = function(o) {
          return isIn(o)
        };
        this.containsAll = function(o) {
          var it = o.iterator();
          while (it.hasNext()) if (!this.contains(it.next())) return false;
          return true
        };
        this.isEmpty = function() {
          return hashMap.isEmpty()
        };
        this.iterator = function() {
          return new Iterator(conversion, removeItem)
        };
        this.remove = function(o) {
          if (this.contains(o)) {
            removeItem(o);
            return true
          }
          return false
        };
        this.removeAll = function(c) {
          var it = c.iterator();
          var changed = false;
          while (it.hasNext()) {
            var item = it.next();
            if (this.contains(item)) {
              removeItem(item);
              changed = true
            }
          }
          return true
        };
        this.retainAll = function(c) {
          var it = this.iterator();
          var toRemove = [];
          while (it.hasNext()) {
            var entry = it.next();
            if (!c.contains(entry)) toRemove.push(entry)
          }
          for (var i = 0; i < toRemove.length; ++i) removeItem(toRemove[i]);
          return toRemove.length > 0
        };
        this.size = function() {
          return hashMap.size()
        };
        this.toArray = function() {
          var result = [];
          var it = this.iterator();
          while (it.hasNext()) result.push(it.next());
          return result
        }
      }
      function Entry(pair) {
        this._isIn = function(map) {
          return map === hashMap && pair.removed === undef
        };
        this.equals = function(o) {
          return virtEquals(pair.key, o.getKey())
        };
        this.getKey = function() {
          return pair.key
        };
        this.getValue = function() {
          return pair.value
        };
        this.hashCode = function(o) {
          return virtHashCode(pair.key)
        };
        this.setValue = function(value) {
          var old = pair.value;
          pair.value = value;
          return old
        }
      }
      this.clear = function() {
        count = 0;
        buckets = [];
        buckets.length = initialCapacity
      };
      this.clone = function() {
        var map = new HashMap;
        map.putAll(this);
        return map
      };
      this.containsKey = function(key) {
        var index = getBucketIndex(key);
        var bucket = buckets[index];
        if (bucket === undef) return false;
        for (var i = 0; i < bucket.length; ++i) if (virtEquals(bucket[i].key, key)) return true;
        return false
      };
      this.containsValue = function(value) {
        for (var i = 0; i < buckets.length; ++i) {
          var bucket = buckets[i];
          if (bucket === undef) continue;
          for (var j = 0; j < bucket.length; ++j) if (virtEquals(bucket[j].value, value)) return true
        }
        return false
      };
      this.entrySet = function() {
        return new Set(function(pair) {
          return new Entry(pair)
        },


        function(pair) {
          return pair instanceof Entry && pair._isIn(hashMap)
        },


        function(pair) {
          return hashMap.remove(pair.getKey())
        })
      };
      this.get = function(key) {
        var index = getBucketIndex(key);
        var bucket = buckets[index];
        if (bucket === undef) return null;
        for (var i = 0; i < bucket.length; ++i) if (virtEquals(bucket[i].key, key)) return bucket[i].value;
        return null
      };
      this.isEmpty = function() {
        return count === 0
      };
      this.keySet = function() {
        return new Set(function(pair) {
          return pair.key
        },


        function(key) {
          return hashMap.containsKey(key)
        },


        function(key) {
          return hashMap.remove(key)
        })
      };
      this.values = function() {
        return new Set(function(pair) {
          return pair.value
        },


        function(value) {
          return hashMap.containsValue(value)
        },

        function(value) {
          return hashMap.removeByValue(value)
        })
      };
      this.put = function(key, value) {
        var index = getBucketIndex(key);
        var bucket = buckets[index];
        if (bucket === undef) {
          ++count;
          buckets[index] = [{
            key: key,
            value: value
          }];
          ensureLoad();
          return null
        }
        for (var i = 0; i < bucket.length; ++i) if (virtEquals(bucket[i].key, key)) {
          var previous = bucket[i].value;
          bucket[i].value = value;
          return previous
        }++count;
        bucket.push({
          key: key,
          value: value
        });
        ensureLoad();
        return null
      };
      this.putAll = function(m) {
        var it = m.entrySet().iterator();
        while (it.hasNext()) {
          var entry = it.next();
          this.put(entry.getKey(), entry.getValue())
        }
      };
      this.remove = function(key) {
        var index = getBucketIndex(key);
        var bucket = buckets[index];
        if (bucket === undef) return null;
        for (var i = 0; i < bucket.length; ++i) if (virtEquals(bucket[i].key, key)) {
          --count;
          var previous = bucket[i].value;
          bucket[i].removed = true;
          if (bucket.length > 1) bucket.splice(i, 1);
          else buckets[index] = undef;
          return previous
        }
        return null
      };
      this.removeByValue = function(value) {
        var bucket, i, ilen, pair;
        for (bucket in buckets) if (buckets.hasOwnProperty(bucket)) for (i = 0, ilen = buckets[bucket].length; i < ilen; i++) {
          pair = buckets[bucket][i];
          if (pair.value === value) {
            buckets[bucket].splice(i, 1);
            return true
          }
        }
        return false
      };
      this.size = function() {
        return count
      }
    }
    return HashMap
  }();
  var PVector = function() {
    function PVector(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0
    }
    PVector.dist = function(v1, v2) {
      return v1.dist(v2)
    };
    PVector.dot = function(v1, v2) {
      return v1.dot(v2)
    };
    PVector.cross = function(v1, v2) {
      return v1.cross(v2)
    };
    PVector.angleBetween = function(v1, v2) {
      return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()))
    };
    PVector.prototype = {
      set: function(v, y, z) {
        if (arguments.length === 1) this.set(v.x || v[0] || 0, v.y || v[1] || 0, v.z || v[2] || 0);
        else {
          this.x = v;
          this.y = y;
          this.z = z
        }
      },
      get: function() {
        return new PVector(this.x, this.y, this.z)
      },
      mag: function() {
        var x = this.x,
          y = this.y,
          z = this.z;
        return Math.sqrt(x * x + y * y + z * z)
      },
      add: function(v, y, z) {
        if (arguments.length === 1) {
          this.x += v.x;
          this.y += v.y;
          this.z += v.z
        } else {
          this.x += v;
          this.y += y;
          this.z += z
        }
      },
      sub: function(v, y, z) {
        if (arguments.length === 1) {
          this.x -= v.x;
          this.y -= v.y;
          this.z -= v.z
        } else {
          this.x -= v;
          this.y -= y;
          this.z -= z
        }
      },
      mult: function(v) {
        if (typeof v === "number") {
          this.x *= v;
          this.y *= v;
          this.z *= v
        } else {
          this.x *= v.x;
          this.y *= v.y;
          this.z *= v.z
        }
      },
      div: function(v) {
        if (typeof v === "number") {
          this.x /= v;
          this.y /= v;
          this.z /= v
        } else {
          this.x /= v.x;
          this.y /= v.y;
          this.z /= v.z
        }
      },
      dist: function(v) {
        var dx = this.x - v.x,
          dy = this.y - v.y,
          dz = this.z - v.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz)
      },
      dot: function(v, y, z) {
        if (arguments.length === 1) return this.x * v.x + this.y * v.y + this.z * v.z;
        return this.x * v + this.y * y + this.z * z
      },
      cross: function(v) {
        var x = this.x,
          y = this.y,
          z = this.z;
        return new PVector(y * v.z - v.y * z, z * v.x - v.z * x, x * v.y - v.x * y)
      },
      normalize: function() {
        var m = this.mag();
        if (m > 0) this.div(m)
      },
      limit: function(high) {
        if (this.mag() > high) {
          this.normalize();
          this.mult(high)
        }
      },
      heading2D: function() {
        return -Math.atan2(-this.y, this.x)
      },
      toString: function() {
        return "[" + this.x + ", " + this.y + ", " + this.z + "]"
      },
      array: function() {
        return [this.x, this.y, this.z]
      }
    };

    function createPVectorMethod(method) {
      return function(v1, v2) {
        var v = v1.get();
        v[method](v2);
        return v
      }
    }
    for (var method in PVector.prototype) if (PVector.prototype.hasOwnProperty(method) && !PVector.hasOwnProperty(method)) PVector[method] = createPVectorMethod(method);
    return PVector
  }();

  function DefaultScope() {}
  DefaultScope.prototype = PConstants;
  var defaultScope = new DefaultScope;
  defaultScope.ArrayList = ArrayList;
  defaultScope.HashMap = HashMap;
  defaultScope.PVector = PVector;
  defaultScope.ObjectIterator = ObjectIterator;
  defaultScope.PConstants = PConstants;
  defaultScope.defineProperty = function(obj, name, desc) {
    if ("defineProperty" in Object) Object.defineProperty(obj, name, desc);
    else {
      if (desc.hasOwnProperty("get")) obj.__defineGetter__(name, desc.get);
      if (desc.hasOwnProperty("set")) obj.__defineSetter__(name, desc.set)
    }
  };

  function overloadBaseClassFunction(object, name, basefn) {
    if (!object.hasOwnProperty(name) || typeof object[name] !== "function") {
      object[name] = basefn;
      return
    }
    var fn = object[name];
    if ("$overloads" in fn) {
      fn.$defaultOverload = basefn;
      return
    }
    if (! ("$overloads" in basefn) && fn.length === basefn.length) return;
    var overloads, defaultOverload;
    if ("$overloads" in basefn) {
      overloads = basefn.$overloads.slice(0);
      overloads[fn.length] = fn;
      defaultOverload = basefn.$defaultOverload
    } else {
      overloads = [];
      overloads[basefn.length] = basefn;
      overloads[fn.length] = fn;
      defaultOverload = fn
    }
    var hubfn = function() {
      var fn = hubfn.$overloads[arguments.length] || ("$methodArgsIndex" in hubfn && arguments.length > hubfn.$methodArgsIndex ? hubfn.$overloads[hubfn.$methodArgsIndex] : null) || hubfn.$defaultOverload;
      return fn.apply(this, arguments)
    };
    hubfn.$overloads = overloads;
    if ("$methodArgsIndex" in basefn) hubfn.$methodArgsIndex = basefn.$methodArgsIndex;
    hubfn.$defaultOverload = defaultOverload;
    hubfn.name = name;
    object[name] = hubfn
  }
  function extendClass(subClass, baseClass) {
    function extendGetterSetter(propertyName) {
      defaultScope.defineProperty(subClass, propertyName, {
        get: function() {
          return baseClass[propertyName]
        },
        set: function(v) {
          baseClass[propertyName] = v
        },
        enumerable: true
      })
    }
    var properties = [];
    for (var propertyName in baseClass) if (typeof baseClass[propertyName] === "function") overloadBaseClassFunction(subClass, propertyName, baseClass[propertyName]);
    else if (propertyName.charAt(0) !== "$" && !(propertyName in subClass)) properties.push(propertyName);
    while (properties.length > 0) extendGetterSetter(properties.shift());
    subClass.$super = baseClass
  }
  defaultScope.extendClassChain = function(base) {
    var path = [base];
    for (var self = base.$upcast; self; self = self.$upcast) {
      extendClass(self, base);
      path.push(self);
      base = self
    }
    while (path.length > 0) path.pop().$self = base
  };
  defaultScope.extendStaticMembers = function(derived, base) {
    extendClass(derived, base)
  };
  defaultScope.extendInterfaceMembers = function(derived, base) {
    extendClass(derived, base)
  };
  defaultScope.addMethod = function(object, name, fn, hasMethodArgs) {
    var existingfn = object[name];
    if (existingfn || hasMethodArgs) {
      var args = fn.length;
      if ("$overloads" in existingfn) existingfn.$overloads[args] = fn;
      else {
        var hubfn = function() {
          var fn = hubfn.$overloads[arguments.length] || ("$methodArgsIndex" in hubfn && arguments.length > hubfn.$methodArgsIndex ? hubfn.$overloads[hubfn.$methodArgsIndex] : null) || hubfn.$defaultOverload;
          return fn.apply(this, arguments)
        };
        var overloads = [];
        if (existingfn) overloads[existingfn.length] = existingfn;
        overloads[args] = fn;
        hubfn.$overloads = overloads;
        hubfn.$defaultOverload = existingfn || fn;
        if (hasMethodArgs) hubfn.$methodArgsIndex = args;
        hubfn.name = name;
        object[name] = hubfn
      }
    } else object[name] = fn
  };

  function isNumericalJavaType(type) {
    if (typeof type !== "string") return false;
    return ["byte", "int", "char", "color", "float", "long", "double"].indexOf(type) !== -1
  }
  defaultScope.createJavaArray = function(type, bounds) {
    var result = null,
      defaultValue = null;
    if (typeof type === "string") if (type === "boolean") defaultValue = false;
    else if (isNumericalJavaType(type)) defaultValue = 0;
    if (typeof bounds[0] === "number") {
      var itemsCount = 0 | bounds[0];
      if (bounds.length <= 1) {
        result = [];
        result.length = itemsCount;
        for (var i = 0; i < itemsCount; ++i) result[i] = defaultValue
      } else {
        result = [];
        var newBounds = bounds.slice(1);
        for (var j = 0; j < itemsCount; ++j) result.push(defaultScope.createJavaArray(type, newBounds))
      }
    }
    return result
  };
  var colors = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgrey: "#d3d3d3",
    lightgreen: "#90ee90",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  (function(Processing) {
    var unsupportedP5 = ("open() createOutput() createInput() BufferedReader selectFolder() " + "dataPath() createWriter() selectOutput() beginRecord() " + "saveStream() endRecord() selectInput() saveBytes() createReader() " + "beginRaw() endRaw() PrintWriter delay()").split(" "),
      count = unsupportedP5.length,
      prettyName, p5Name;

    function createUnsupportedFunc(n) {
      return function() {
        throw "Processing.js does not support " + n + ".";
      }
    }
    while (count--) {
      prettyName = unsupportedP5[count];
      p5Name = prettyName.replace("()", "");
      Processing[p5Name] = createUnsupportedFunc(prettyName)
    }
  })(defaultScope);
  defaultScope.defineProperty(defaultScope, "screenWidth", {
    get: function() {
      return window.innerWidth
    }
  });
  defaultScope.defineProperty(defaultScope, "screenHeight", {
    get: function() {
      return window.innerHeight
    }
  });
  defaultScope.defineProperty(defaultScope, "online", {
    get: function() {
      return true
    }
  });
  var processingInstances = [];
  var processingInstanceIds = {};
  var removeInstance = function(id) {
    processingInstances.splice(processingInstanceIds[id], 1);
    delete processingInstanceIds[id]
  };
  var addInstance = function(processing) {
    if (processing.externals.canvas.id === undef || !processing.externals.canvas.id.length) processing.externals.canvas.id = "__processing" + processingInstances.length;
    processingInstanceIds[processing.externals.canvas.id] = processingInstances.length;
    processingInstances.push(processing)
  };

  function computeFontMetrics(pfont) {
    var emQuad = 250,
      correctionFactor = pfont.size / emQuad,
      canvas = document.createElement("canvas");
    canvas.width = 2 * emQuad;
    canvas.height = 2 * emQuad;
    canvas.style.opacity = 0;
    var cfmFont = pfont.getCSSDefinition(emQuad + "px", "normal"),
      ctx = canvas.getContext("2d");
    ctx.font = cfmFont;
    var protrusions = "dbflkhyjqpg";
    canvas.width = ctx.measureText(protrusions).width;
    ctx.font = cfmFont;
    var leadDiv = document.createElement("div");
    leadDiv.style.position = "absolute";
    leadDiv.style.opacity = 0;
    leadDiv.style.fontFamily = '"' + pfont.name + '"';
    leadDiv.style.fontSize = emQuad + "px";
    leadDiv.innerHTML = protrusions + "<br/>" + protrusions;
    document.body.appendChild(leadDiv);
    var w = canvas.width,
      h = canvas.height,
      baseline = h / 2;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "black";
    ctx.fillText(protrusions, 0, baseline);
    var pixelData = ctx.getImageData(0, 0, w, h).data;
    var i = 0,
      w4 = w * 4,
      len = pixelData.length;
    while (++i < len && pixelData[i] === 255) nop();
    var ascent = Math.round(i / w4);
    i = len - 1;
    while (--i > 0 && pixelData[i] === 255) nop();
    var descent = Math.round(i / w4);
    pfont.ascent = correctionFactor * (baseline - ascent);
    pfont.descent = correctionFactor * (descent - baseline);
    if (document.defaultView.getComputedStyle) {
      var leadDivHeight = document.defaultView.getComputedStyle(leadDiv, null).getPropertyValue("height");
      leadDivHeight = correctionFactor * leadDivHeight.replace("px", "");
      if (leadDivHeight >= pfont.size * 2) pfont.leading = Math.round(leadDivHeight / 2)
    }
    document.body.removeChild(leadDiv);
    if (pfont.caching) return ctx
  }
  function PFont(name, size) {
    if (name === undef) name = "";
    this.name = name;
    if (size === undef) size = 0;
    this.size = size;
    this.glyph = false;
    this.ascent = 0;
    this.descent = 0;
    this.leading = 1.2 * size;
    var illegalIndicator = name.indexOf(" Italic Bold");
    if (illegalIndicator !== -1) name = name.substring(0, illegalIndicator);
    this.style = "normal";
    var italicsIndicator = name.indexOf(" Italic");
    if (italicsIndicator !== -1) {
      name = name.substring(0, italicsIndicator);
      this.style = "italic"
    }
    this.weight = "normal";
    var boldIndicator = name.indexOf(" Bold");
    if (boldIndicator !== -1) {
      name = name.substring(0, boldIndicator);
      this.weight = "bold"
    }
    this.family = "sans-serif";
    if (name !== undef) switch (name) {
    case "sans-serif":
    case "serif":
    case "monospace":
    case "fantasy":
    case "cursive":
      this.family = name;
      break;
    default:
      this.family = '"' + name + '", sans-serif';
      break
    }
    this.context2d = computeFontMetrics(this);
    this.css = this.getCSSDefinition();
    if (this.context2d) this.context2d.font = this.css
  }
  PFont.prototype.caching = true;
  PFont.prototype.getCSSDefinition = function(fontSize, lineHeight) {
    if (fontSize === undef) fontSize = this.size + "px";
    if (lineHeight === undef) lineHeight = this.leading + "px";
    var components = [this.style, "normal", this.weight, fontSize + "/" + lineHeight, this.family];
    return components.join(" ")
  };
  PFont.prototype.measureTextWidth = function(string) {
    return this.context2d.measureText(string).width
  };
  PFont.prototype.measureTextWidthFallback = function(string) {
    var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
    ctx.font = this.css;
    return ctx.measureText(string).width
  };
  PFont.PFontCache = {
    length: 0
  };
  PFont.get = function(fontName, fontSize) {
    fontSize = (fontSize * 10 + 0.5 | 0) / 10;
    var cache = PFont.PFontCache,
      idx = fontName + "/" + fontSize;
    if (!cache[idx]) {
      cache[idx] = new PFont(fontName, fontSize);
      cache.length++;
      if (cache.length === 50) {
        PFont.prototype.measureTextWidth = PFont.prototype.measureTextWidthFallback;
        PFont.prototype.caching = false;
        var entry;
        for (entry in cache) if (entry !== "length") cache[entry].context2d = null;
        return new PFont(fontName, fontSize)
      }
      if (cache.length === 400) {
        PFont.PFontCache = {};
        PFont.get = PFont.getFallback;
        return new PFont(fontName, fontSize)
      }
    }
    return cache[idx]
  };
  PFont.getFallback = function(fontName, fontSize) {
    return new PFont(fontName, fontSize)
  };
  PFont.list = function() {
    return ["sans-serif", "serif", "monospace", "fantasy", "cursive"]
  };
  PFont.preloading = {
    template: {},
    initialized: false,
    initialize: function() {
      var generateTinyFont = function() {
        var encoded = "#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm" + "7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3" + "AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG" + "9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3" + "#yld0xg32QAB77#E777773B#E3C#I#Q77773E#" + "Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#" + "E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#" + "Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#";
        var expand = function(input) {
          return "AAAAAAAA".substr(~~input ? 7 - input : 6)
        };
        return encoded.replace(/[#237]/g, expand)
      };
      var fontface = document.createElement("style");
      fontface.setAttribute("type", "text/css");
      fontface.innerHTML = "@font-face {\n" + '  font-family: "PjsEmptyFont";' + "\n" + "  src: url('data:application/x-font-ttf;base64," + generateTinyFont() + "')\n" + "       format('truetype');\n" + "}";
      document.head.appendChild(fontface);
      var element = document.createElement("span");
      element.style.cssText = 'position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';
      element.innerHTML = "AAAAAAAA";
      document.body.appendChild(element);
      this.template = element;
      this.initialized = true
    },
    getElementWidth: function(element) {
      return document.defaultView.getComputedStyle(element, "").getPropertyValue("width")
    },
    timeAttempted: 0,
    pending: function(intervallength) {
      if (!this.initialized) this.initialize();
      var element, computedWidthFont, computedWidthRef = this.getElementWidth(this.template);
      for (var i = 0; i < this.fontList.length; i++) {
        element = this.fontList[i];
        computedWidthFont = this.getElementWidth(element);
        if (this.timeAttempted < 4E3 && computedWidthFont === computedWidthRef) {
          this.timeAttempted += intervallength;
          return true
        } else {
          document.body.removeChild(element);
          this.fontList.splice(i--, 1);
          this.timeAttempted = 0
        }
      }
      if (this.fontList.length === 0) return false;
      return true
    },
    fontList: [],
    addedList: {},
    add: function(fontSrc) {
      if (!this.initialized) this.initialize();
      var fontName = typeof fontSrc === "object" ? fontSrc.fontFace : fontSrc,
      fontUrl = typeof fontSrc === "object" ? fontSrc.url : fontSrc;
      if (this.addedList[fontName]) return;
      var style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.innerHTML = "@font-face{\n  font-family: '" + fontName + "';\n  src:  url('" + fontUrl + "');\n}\n";
      document.head.appendChild(style);
      this.addedList[fontName] = true;
      var element = document.createElement("span");
      element.style.cssText = "position: absolute; top: 0; left: 0; opacity: 0;";
      element.style.fontFamily = '"' + fontName + '", "PjsEmptyFont", fantasy';
      element.innerHTML = "AAAAAAAA";
      document.body.appendChild(element);
      this.fontList.push(element)
    }
  };
  defaultScope.PFont = PFont;
  var Processing = this.Processing = function(aCanvas, aCode) {
    if (! (this instanceof
    Processing)) throw "called Processing constructor as if it were a function: missing 'new'.";
    var curElement, pgraphicsMode = aCanvas === undef && aCode === undef;
    if (pgraphicsMode) curElement = document.createElement("canvas");
    else curElement = typeof aCanvas === "string" ? document.getElementById(aCanvas) : aCanvas;
    if (! (curElement instanceof HTMLCanvasElement)) throw "called Processing constructor without passing canvas element reference or id.";

    function unimplemented(s) {
      Processing.debug("Unimplemented - " + s)
    }
    var p = this;
    p.externals = {
      canvas: curElement,
      context: undef,
      sketch: undef
    };
    p.name = "Processing.js Instance";
    p.use3DContext = false;
    p.focused = false;
    p.breakShape = false;
    p.glyphTable = {};
    p.pmouseX = 0;
    p.pmouseY = 0;
    p.mouseX = 0;
    p.mouseY = 0;
    p.mouseButton = 0;
    p.mouseScroll = 0;
    p.mouseClicked = undef;
    p.mouseDragged = undef;
    p.mouseMoved = undef;
    p.mousePressed = undef;
    p.mouseReleased = undef;
    p.mouseScrolled = undef;
    p.mouseOver = undef;
    p.mouseOut = undef;
    p.touchStart = undef;
    p.touchEnd = undef;
    p.touchMove = undef;
    p.touchCancel = undef;
    p.key = undef;
    p.keyCode = undef;
    p.keyPressed = nop;
    p.keyReleased = nop;
    p.keyTyped = nop;
    p.draw = undef;
    p.setup = undef;
    p.__mousePressed = false;
    p.__keyPressed = false;
    p.__frameRate = 60;
    p.frameCount = 0;
    p.width = 100;
    p.height = 100;
    var curContext, curSketch, drawing, online = true,
      doFill = true,
      fillStyle = [1, 1, 1, 1],
      currentFillColor = 4294967295,
      isFillDirty = true,
      doStroke = true,
      strokeStyle = [0, 0, 0, 1],
      currentStrokeColor = 4278190080,
      isStrokeDirty = true,
      lineWidth = 1,
      loopStarted = false,
      renderSmooth = false,
      doLoop = true,
      looping = 0,
      curRectMode = 0,
      curEllipseMode = 3,
      normalX = 0,
      normalY = 0,
      normalZ = 0,
      normalMode = 0,
      curFrameRate = 60,
      curMsPerFrame = 1E3 / curFrameRate,
      curCursor = 'default',
      oldCursor = curElement.style.cursor,
      curShape = 20,
      curShapeCount = 0,
      curvePoints = [],
      curTightness = 0,
      curveDet = 20,
      curveInited = false,
      backgroundObj = -3355444,
      bezDetail = 20,
      colorModeA = 255,
      colorModeX = 255,
      colorModeY = 255,
      colorModeZ = 255,
      pathOpen = false,
      mouseDragging = false,
      pmouseXLastFrame = 0,
      pmouseYLastFrame = 0,
      curColorMode = 1,
      curTint = null,
      curTint3d = null,
      getLoaded = false,
      start = Date.now(),
      timeSinceLastFPS = start,
      framesSinceLastFPS = 0,
      textcanvas, curveBasisMatrix, curveToBezierMatrix, curveDrawMatrix, bezierDrawMatrix, bezierBasisInverse, bezierBasisMatrix, curContextCache = {
      attributes: {},
      locations: {}
    },
      programObject3D, programObject2D, programObjectUnlitShape, boxBuffer, boxNormBuffer, boxOutlineBuffer, rectBuffer, rectNormBuffer, sphereBuffer, lineBuffer, fillBuffer, fillColorBuffer, strokeColorBuffer, pointBuffer, shapeTexVBO, canTex, textTex, curTexture = {
      width: 0,
      height: 0
    },
      curTextureMode = 2,
      usingTexture = false,
      textBuffer, textureBuffer, indexBuffer, horizontalTextAlignment = 37,
      verticalTextAlignment = 0,
      textMode = 4,
      curFontName = "Arial",
      curTextSize = 12,
      curTextAscent = 9,
      curTextDescent = 2,
      curTextLeading = 14,
      curTextFont = PFont.get(curFontName, curTextSize),
      originalContext, proxyContext = null,
      isContextReplaced = false,
      setPixelsCached, maxPixelsCached = 1E3,
      pressedKeysMap = [],
      lastPressedKeyCode = null,
      codedKeys = [16,
      17, 18, 20, 33, 34, 35, 36, 37, 38, 39, 40, 144, 155, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 157];
    var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
    if (document.defaultView && document.defaultView.getComputedStyle) {
      stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(curElement, null)["paddingLeft"], 10) || 0;
      stylePaddingTop = parseInt(document.defaultView.getComputedStyle(curElement, null)["paddingTop"], 10) || 0;
      styleBorderLeft = parseInt(document.defaultView.getComputedStyle(curElement, null)["borderLeftWidth"], 10) || 0;
      styleBorderTop = parseInt(document.defaultView.getComputedStyle(curElement, null)["borderTopWidth"], 10) || 0
    }
    var lightCount = 0;
    var sphereDetailV = 0,
      sphereDetailU = 0,
      sphereX = [],
      sphereY = [],
      sphereZ = [],
      sinLUT = new Float32Array(720),
      cosLUT = new Float32Array(720),
      sphereVerts, sphereNorms;
    var cam, cameraInv, modelView, modelViewInv, userMatrixStack, userReverseMatrixStack, inverseCopy, projection, manipulatingCamera = false,
      frustumMode = false,
      cameraFOV = 60 * (Math.PI / 180),
      cameraX = p.width / 2,
      cameraY = p.height / 2,
      cameraZ = cameraY / Math.tan(cameraFOV / 2),
      cameraNear = cameraZ / 10,
      cameraFar = cameraZ * 10,
      cameraAspect = p.width / p.height;
    var vertArray = [],
      curveVertArray = [],
      curveVertCount = 0,
      isCurve = false,
      isBezier = false,
      firstVert = true;
    var curShapeMode = 0;
    var styleArray = [];
    var boxVerts = new Float32Array([0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, -0.5,
      0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5]);
    var boxOutlineVerts = new Float32Array([0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, -0.5, 0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5]);
    var boxNorms = new Float32Array([0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 1, 0, 0, 1, 0,
      0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0]);
    var rectVerts = new Float32Array([0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0]);
    var rectNorms = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
    var vertexShaderSrcUnlitShape = "varying vec4 vFrontColor;" + "attribute vec3 aVertex;" + "attribute vec4 aColor;" + "uniform mat4 uView;" + "uniform mat4 uProjection;" + "uniform float uPointSize;" + "void main(void) {" + "  vFrontColor = aColor;" + "  gl_PointSize = uPointSize;" + "  gl_Position = uProjection * uView * vec4(aVertex, 1.0);" + "}";
    var fragmentShaderSrcUnlitShape = "#ifdef GL_ES\n" + "precision highp float;\n" + "#endif\n" + "varying vec4 vFrontColor;" + "uniform bool uSmooth;" + "void main(void){" + "  if(uSmooth == true){" + "    float dist = distance(gl_PointCoord, vec2(0.5));" + "    if(dist > 0.5){" + "      discard;" + "    }" + "  }" + "  gl_FragColor = vFrontColor;" + "}";
    var vertexShaderSrc2D = "varying vec4 vFrontColor;" + "attribute vec3 aVertex;" + "attribute vec2 aTextureCoord;" + "uniform vec4 uColor;" + "uniform mat4 uModel;" + "uniform mat4 uView;" + "uniform mat4 uProjection;" + "uniform float uPointSize;" + "varying vec2 vTextureCoord;" + "void main(void) {" + "  gl_PointSize = uPointSize;" + "  vFrontColor = uColor;" + "  gl_Position = uProjection * uView * uModel * vec4(aVertex, 1.0);" + "  vTextureCoord = aTextureCoord;" + "}";
    var fragmentShaderSrc2D = "#ifdef GL_ES\n" + "precision highp float;\n" + "#endif\n" + "varying vec4 vFrontColor;" + "varying vec2 vTextureCoord;" + "uniform sampler2D uSampler;" + "uniform int uIsDrawingText;" + "uniform bool uSmooth;" + "void main(void){" + "  if(uSmooth == true){" + "    float dist = distance(gl_PointCoord, vec2(0.5));" + "    if(dist > 0.5){" + "      discard;" + "    }" + "  }" + "  if(uIsDrawingText == 1){" + "    float alpha = texture2D(uSampler, vTextureCoord).a;" + "    gl_FragColor = vec4(vFrontColor.rgb * alpha, alpha);" + "  }" + "  else{" + "    gl_FragColor = vFrontColor;" + "  }" + "}";
    var webglMaxTempsWorkaround = /Windows/.test(navigator.userAgent);
    var vertexShaderSrc3D = "varying vec4 vFrontColor;" + "attribute vec3 aVertex;" + "attribute vec3 aNormal;" + "attribute vec4 aColor;" + "attribute vec2 aTexture;" + "varying   vec2 vTexture;" + "uniform vec4 uColor;" + "uniform bool uUsingMat;" + "uniform vec3 uSpecular;" + "uniform vec3 uMaterialEmissive;" + "uniform vec3 uMaterialAmbient;" + "uniform vec3 uMaterialSpecular;" + "uniform float uShininess;" + "uniform mat4 uModel;" + "uniform mat4 uView;" + "uniform mat4 uProjection;" + "uniform mat4 uNormalTransform;" + "uniform int uLightCount;" + "uniform vec3 uFalloff;" + "struct Light {" + "  int type;" + "  vec3 color;" + "  vec3 position;" + "  vec3 direction;" + "  float angle;" + "  vec3 halfVector;" + "  float concentration;" + "};" + "uniform Light uLights0;" + "uniform Light uLights1;" + "uniform Light uLights2;" + "uniform Light uLights3;" + "uniform Light uLights4;" + "uniform Light uLights5;" + "uniform Light uLights6;" + "uniform Light uLights7;" + "Light getLight(int index){" + "  if(index == 0) return uLights0;" + "  if(index == 1) return uLights1;" + "  if(index == 2) return uLights2;" + "  if(index == 3) return uLights3;" + "  if(index == 4) return uLights4;" + "  if(index == 5) return uLights5;" + "  if(index == 6) return uLights6;" + "  return uLights7;" + "}" + "void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {" + "  float d = length( light.position - ecPos );" + "  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));" + "  totalAmbient += light.color * attenuation;" + "}" + "void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {" + "  float powerFactor = 0.0;" + "  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));" + "  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));" + "  if( nDotVP != 0.0 ){" + "    powerFactor = pow( nDotVH, uShininess );" + "  }" + "  col += light.color * nDotVP;" + "  spec += uSpecular * powerFactor;" + "}" + "void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {" + "  float powerFactor;" + "   vec3 VP = light.position - ecPos;" + "  float d = length( VP ); " + "  VP = normalize( VP );" + "  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ));" + "  float nDotVP = max( 0.0, dot( vertNormal, VP ));" + "  vec3 halfVector = normalize( VP - normalize(ecPos) );" + "  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));" + "  if( nDotVP == 0.0 ) {" + "    powerFactor = 0.0;" + "  }" + "  else {" + "    powerFactor = pow( nDotHV, uShininess );" + "  }" + "  spec += uSpecular * powerFactor * attenuation;" + "  col += light.color * nDotVP * attenuation;" + "}" + "void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {" + "  float spotAttenuation;" + "  float powerFactor = 0.0;" + "  vec3 VP = light.position - ecPos;" + "  vec3 ldir = normalize( -light.direction );" + "  float d = length( VP );" + "  VP = normalize( VP );" + "  float attenuation = 1.0 / ( uFalloff[0] + ( uFalloff[1] * d ) + ( uFalloff[2] * d * d ) );" + "  float spotDot = dot( VP, ldir );" + (webglMaxTempsWorkaround ? "  spotAttenuation = 1.0; " : "  if( spotDot > cos( light.angle ) ) {" + "    spotAttenuation = pow( spotDot, light.concentration );" + "  }" + "  else{" + "    spotAttenuation = 0.0;" + "  }" + "  attenuation *= spotAttenuation;" + "") + "  float nDotVP = max( 0.0, dot( vertNormal, VP ) );" + "  vec3 halfVector = normalize( VP - normalize(ecPos) );" + "  float nDotHV = max( 0.0, dot( vertNormal, halfVector ) );" + "  if( nDotVP != 0.0 ) {" + "    powerFactor = pow( nDotHV, uShininess );" + "  }" + "  spec += uSpecular * powerFactor * attenuation;" + "  col += light.color * nDotVP * attenuation;" + "}" + "void main(void) {" + "  vec3 finalAmbient = vec3( 0.0 );" + "  vec3 finalDiffuse = vec3( 0.0 );" + "  vec3 finalSpecular = vec3( 0.0 );" + "  vec4 col = uColor;" + "  if ( uColor[0] == -1.0 ){" + "    col = aColor;" + "  }" + "  vec3 norm = normalize(vec3( uNormalTransform * vec4( aNormal, 0.0 ) ));" + "  vec4 ecPos4 = uView * uModel * vec4(aVertex, 1.0);" + "  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;" + "  if( uLightCount == 0 ) {" + "    vFrontColor = col + vec4(uMaterialSpecular, 1.0);" + "  }" + "  else {" + "    for( int i = 0; i < 8; i++ ) {" + "      Light l = getLight(i);" + "      if( i >= uLightCount ){" + "        break;" + "      }" + "      if( l.type == 0 ) {" + "        AmbientLight( finalAmbient, ecPos, l );" + "      }" + "      else if( l.type == 1 ) {" + "        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );" + "      }" + "      else if( l.type == 2 ) {" + "        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );" + "      }" + "      else {" + "        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );" + "      }" + "    }" + "   if( uUsingMat == false ) {" + "     vFrontColor = vec4(" + "       vec3( col ) * finalAmbient +" + "       vec3( col ) * finalDiffuse +" + "       vec3( col ) * finalSpecular," + "       col[3] );" + "   }" + "   else{" + "     vFrontColor = vec4( " + "       uMaterialEmissive + " + "       (vec3(col) * uMaterialAmbient * finalAmbient ) + " + "       (vec3(col) * finalDiffuse) + " + "       (uMaterialSpecular * finalSpecular), " + "       col[3] );" + "    }" + "  }" + "  vTexture.xy = aTexture.xy;" + "  gl_Position = uProjection * uView * uModel * vec4( aVertex, 1.0 );" + "}";
    var fragmentShaderSrc3D = "#ifdef GL_ES\n" + "precision highp float;\n" + "#endif\n" + "varying vec4 vFrontColor;" + "uniform sampler2D uSampler;" + "uniform bool uUsingTexture;" + "varying vec2 vTexture;" + "void main(void){" + "  if( uUsingTexture ){" + "    gl_FragColor = vec4(texture2D(uSampler, vTexture.xy)) * vFrontColor;" + "  }" + "  else{" + "    gl_FragColor = vFrontColor;" + "  }" + "}";

    function uniformf(cacheId, programObj, varName, varValue) {
      var varLocation = curContextCache.locations[cacheId];
      if (varLocation === undef) {
        varLocation = curContext.getUniformLocation(programObj, varName);
        curContextCache.locations[cacheId] = varLocation
      }
      if (varLocation !== null) if (varValue.length === 4) curContext.uniform4fv(varLocation, varValue);
      else if (varValue.length === 3) curContext.uniform3fv(varLocation, varValue);
      else if (varValue.length === 2) curContext.uniform2fv(varLocation, varValue);
      else curContext.uniform1f(varLocation, varValue)
    }
    function uniformi(cacheId, programObj, varName, varValue) {
      var varLocation = curContextCache.locations[cacheId];
      if (varLocation === undef) {
        varLocation = curContext.getUniformLocation(programObj, varName);
        curContextCache.locations[cacheId] = varLocation
      }
      if (varLocation !== null) if (varValue.length === 4) curContext.uniform4iv(varLocation, varValue);
      else if (varValue.length === 3) curContext.uniform3iv(varLocation, varValue);
      else if (varValue.length === 2) curContext.uniform2iv(varLocation, varValue);
      else curContext.uniform1i(varLocation, varValue)
    }
    function uniformMatrix(cacheId, programObj, varName, transpose, matrix) {
      var varLocation = curContextCache.locations[cacheId];
      if (varLocation === undef) {
        varLocation = curContext.getUniformLocation(programObj, varName);
        curContextCache.locations[cacheId] = varLocation
      }
      if (varLocation !== -1) if (matrix.length === 16) curContext.uniformMatrix4fv(varLocation, transpose, matrix);
      else if (matrix.length === 9) curContext.uniformMatrix3fv(varLocation, transpose, matrix);
      else curContext.uniformMatrix2fv(varLocation, transpose, matrix)
    }
    function vertexAttribPointer(cacheId, programObj, varName, size, VBO) {
      var varLocation = curContextCache.attributes[cacheId];
      if (varLocation === undef) {
        varLocation = curContext.getAttribLocation(programObj, varName);
        curContextCache.attributes[cacheId] = varLocation
      }
      if (varLocation !== -1) {
        curContext.bindBuffer(curContext.ARRAY_BUFFER, VBO);
        curContext.vertexAttribPointer(varLocation, size, curContext.FLOAT, false, 0, 0);
        curContext.enableVertexAttribArray(varLocation)
      }
    }
    function disableVertexAttribPointer(cacheId, programObj, varName) {
      var varLocation = curContextCache.attributes[cacheId];
      if (varLocation === undef) {
        varLocation = curContext.getAttribLocation(programObj, varName);
        curContextCache.attributes[cacheId] = varLocation
      }
      if (varLocation !== -1) curContext.disableVertexAttribArray(varLocation)
    }
    var createProgramObject = function(curContext, vetexShaderSource, fragmentShaderSource) {
      var vertexShaderObject = curContext.createShader(curContext.VERTEX_SHADER);
      curContext.shaderSource(vertexShaderObject, vetexShaderSource);
      curContext.compileShader(vertexShaderObject);
      if (!curContext.getShaderParameter(vertexShaderObject, curContext.COMPILE_STATUS)) throw curContext.getShaderInfoLog(vertexShaderObject);
      var fragmentShaderObject = curContext.createShader(curContext.FRAGMENT_SHADER);
      curContext.shaderSource(fragmentShaderObject, fragmentShaderSource);
      curContext.compileShader(fragmentShaderObject);
      if (!curContext.getShaderParameter(fragmentShaderObject, curContext.COMPILE_STATUS)) throw curContext.getShaderInfoLog(fragmentShaderObject);
      var programObject = curContext.createProgram();
      curContext.attachShader(programObject, vertexShaderObject);
      curContext.attachShader(programObject, fragmentShaderObject);
      curContext.linkProgram(programObject);
      if (!curContext.getProgramParameter(programObject, curContext.LINK_STATUS)) throw "Error linking shaders.";
      return programObject
    };
    var imageModeCorner = function(x, y, w, h, whAreSizes) {
      return {
        x: x,
        y: y,
        w: w,
        h: h
      }
    };
    var imageModeConvert = imageModeCorner;
    var imageModeCorners = function(x, y, w, h, whAreSizes) {
      return {
        x: x,
        y: y,
        w: whAreSizes ? w : w - x,
        h: whAreSizes ? h : h - y
      }
    };
    var imageModeCenter = function(x, y, w, h, whAreSizes) {
      return {
        x: x - w / 2,
        y: y - h / 2,
        w: w,
        h: h
      }
    };
    var DrawingShared = function() {};
    var Drawing2D = function() {};
    var Drawing3D = function() {};
    var DrawingPre = function() {};
    Drawing2D.prototype = new DrawingShared;
    Drawing2D.prototype.constructor = Drawing2D;
    Drawing3D.prototype = new DrawingShared;
    Drawing3D.prototype.constructor = Drawing3D;
    DrawingPre.prototype = new DrawingShared;
    DrawingPre.prototype.constructor = DrawingPre;
    DrawingShared.prototype.a3DOnlyFunction = nop;
    var charMap = {};
    var Char = p.Character = function(chr) {
      if (typeof chr === "string" && chr.length === 1) this.code = chr.charCodeAt(0);
      else if (typeof chr === "number") this.code = chr;
      else if (chr instanceof Char) this.code = chr;
      else this.code = NaN;
      return charMap[this.code] === undef ? charMap[this.code] = this : charMap[this.code]
    };
    Char.prototype.toString = function() {
      return String.fromCharCode(this.code)
    };
    Char.prototype.valueOf = function() {
      return this.code
    };
    var PShape = p.PShape = function(family) {
      this.family = family || 0;
      this.visible = true;
      this.style = true;
      this.children = [];
      this.nameTable = [];
      this.params = [];
      this.name = "";
      this.image = null;
      this.matrix = null;
      this.kind = null;
      this.close = null;
      this.width = null;
      this.height = null;
      this.parent = null
    };
    PShape.prototype = {
      isVisible: function() {
        return this.visible
      },
      setVisible: function(visible) {
        this.visible = visible
      },
      disableStyle: function() {
        this.style = false;
        for (var i = 0, j = this.children.length; i < j; i++) this.children[i].disableStyle()
      },
      enableStyle: function() {
        this.style = true;
        for (var i = 0, j = this.children.length; i < j; i++) this.children[i].enableStyle()
      },
      getFamily: function() {
        return this.family
      },
      getWidth: function() {
        return this.width
      },
      getHeight: function() {
        return this.height
      },
      setName: function(name) {
        this.name = name
      },
      getName: function() {
        return this.name
      },
      draw: function(renderContext) {
        renderContext = renderContext || p;
        if (this.visible) {
          this.pre(renderContext);
          this.drawImpl(renderContext);
          this.post(renderContext)
        }
      },
      drawImpl: function(renderContext) {
        if (this.family === 0) this.drawGroup(renderContext);
        else if (this.family === 1) this.drawPrimitive(renderContext);
        else if (this.family === 3) this.drawGeometry(renderContext);
        else if (this.family === 21) this.drawPath(renderContext)
      },
      drawPath: function(renderContext) {
        var i, j;
        if (this.vertices.length === 0) return;
        renderContext.beginShape();
        if (this.vertexCodes.length === 0) if (this.vertices[0].length === 2) for (i = 0, j = this.vertices.length; i < j; i++) renderContext.vertex(this.vertices[i][0], this.vertices[i][1]);
        else for (i = 0, j = this.vertices.length; i < j; i++) renderContext.vertex(this.vertices[i][0], this.vertices[i][1], this.vertices[i][2]);
        else {
          var index = 0;
          if (this.vertices[0].length === 2) for (i = 0, j = this.vertexCodes.length; i < j; i++) if (this.vertexCodes[i] === 0) {
            renderContext.vertex(this.vertices[index][0], this.vertices[index][1], this.vertices[index]["moveTo"]);
            renderContext.breakShape = false;
            index++
          } else if (this.vertexCodes[i] === 1) {
            renderContext.bezierVertex(this.vertices[index + 0][0], this.vertices[index + 0][1], this.vertices[index + 1][0], this.vertices[index + 1][1], this.vertices[index + 2][0], this.vertices[index + 2][1]);
            index += 3
          } else if (this.vertexCodes[i] === 2) {
            renderContext.curveVertex(this.vertices[index][0], this.vertices[index][1]);
            index++
          } else {
            if (this.vertexCodes[i] === 3) renderContext.breakShape = true
          } else for (i = 0, j = this.vertexCodes.length; i < j; i++) if (this.vertexCodes[i] === 0) {
            renderContext.vertex(this.vertices[index][0], this.vertices[index][1], this.vertices[index][2]);
            if (this.vertices[index]["moveTo"] === true) vertArray[vertArray.length - 1]["moveTo"] = true;
            else if (this.vertices[index]["moveTo"] === false) vertArray[vertArray.length - 1]["moveTo"] = false;
            renderContext.breakShape = false
          } else if (this.vertexCodes[i] === 1) {
            renderContext.bezierVertex(this.vertices[index + 0][0], this.vertices[index + 0][1], this.vertices[index + 0][2], this.vertices[index + 1][0], this.vertices[index + 1][1], this.vertices[index + 1][2], this.vertices[index + 2][0], this.vertices[index + 2][1], this.vertices[index + 2][2]);
            index += 3
          } else if (this.vertexCodes[i] === 2) {
            renderContext.curveVertex(this.vertices[index][0], this.vertices[index][1], this.vertices[index][2]);
            index++
          } else if (this.vertexCodes[i] === 3) renderContext.breakShape = true
        }
        renderContext.endShape(this.close ? 2 : 1)
      },
      drawGeometry: function(renderContext) {
        var i, j;
        renderContext.beginShape(this.kind);
        if (this.style) for (i = 0, j = this.vertices.length; i < j; i++) renderContext.vertex(this.vertices[i]);
        else for (i = 0, j = this.vertices.length; i < j; i++) {
          var vert = this.vertices[i];
          if (vert[2] === 0) renderContext.vertex(vert[0], vert[1]);
          else renderContext.vertex(vert[0], vert[1], vert[2])
        }
        renderContext.endShape()
      },
      drawGroup: function(renderContext) {
        for (var i = 0, j = this.children.length; i < j; i++) this.children[i].draw(renderContext)
      },
      drawPrimitive: function(renderContext) {
        if (this.kind === 2) renderContext.point(this.params[0], this.params[1]);
        else if (this.kind === 4) if (this.params.length === 4) renderContext.line(this.params[0], this.params[1], this.params[2], this.params[3]);
        else renderContext.line(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]);
        else if (this.kind === 8) renderContext.triangle(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]);
        else if (this.kind === 16) renderContext.quad(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5], this.params[6], this.params[7]);
        else if (this.kind === 30) if (this.image !== null) {
          var imMode = imageModeConvert;
          renderContext.imageMode(0);
          renderContext.image(this.image, this.params[0], this.params[1], this.params[2], this.params[3]);
          imageModeConvert = imMode
        } else {
          var rcMode = curRectMode;
          renderContext.rectMode(0);
          renderContext.rect(this.params[0], this.params[1], this.params[2], this.params[3]);
          curRectMode = rcMode
        } else if (this.kind === 31) {
          var elMode = curEllipseMode;
          renderContext.ellipseMode(0);
          renderContext.ellipse(this.params[0], this.params[1], this.params[2], this.params[3]);
          curEllipseMode = elMode
        } else if (this.kind === 32) {
          var eMode = curEllipseMode;
          renderContext.ellipseMode(0);
          renderContext.arc(this.params[0], this.params[1], this.params[2], this.params[3], this.params[4], this.params[5]);
          curEllipseMode = eMode
        } else if (this.kind === 41) if (this.params.length === 1) renderContext.box(this.params[0]);
        else renderContext.box(this.params[0], this.params[1], this.params[2]);
        else if (this.kind === 40) renderContext.sphere(this.params[0])
      },
      pre: function(renderContext) {
        if (this.matrix) {
          renderContext.pushMatrix();
          renderContext.transform(this.matrix)
        }
        if (this.style) {
          renderContext.pushStyle();
          this.styles(renderContext)
        }
      },
      post: function(renderContext) {
        if (this.matrix) renderContext.popMatrix();
        if (this.style) renderContext.popStyle()
      },
      styles: function(renderContext) {
        if (this.stroke) {
          renderContext.stroke(this.strokeColor);
          renderContext.strokeWeight(this.strokeWeight);
          renderContext.strokeCap(this.strokeCap);
          renderContext.strokeJoin(this.strokeJoin)
        } else renderContext.noStroke();
        if (this.fill) renderContext.fill(this.fillColor);
        else renderContext.noFill()
      },
      getChild: function(child) {
        var i, j;
        if (typeof child === "number") return this.children[child];
        var found;
        if (child === "" || this.name === child) return this;
        if (this.nameTable.length > 0) {
          for (i = 0, j = this.nameTable.length; i < j || found; i++) if (this.nameTable[i].getName === child) {
            found = this.nameTable[i];
            break
          }
          if (found) return found
        }
        for (i = 0, j = this.children.length; i < j; i++) {
          found = this.children[i].getChild(child);
          if (found) return found
        }
        return null
      },
      getChildCount: function() {
        return this.children.length
      },
      addChild: function(child) {
        this.children.push(child);
        child.parent = this;
        if (child.getName() !== null) this.addName(child.getName(), child)
      },
      addName: function(name, shape) {
        if (this.parent !== null) this.parent.addName(name, shape);
        else this.nameTable.push([name, shape])
      },
      translate: function() {
        if (arguments.length === 2) {
          this.checkMatrix(2);
          this.matrix.translate(arguments[0], arguments[1])
        } else {
          this.checkMatrix(3);
          this.matrix.translate(arguments[0], arguments[1], 0)
        }
      },
      checkMatrix: function(dimensions) {
        if (this.matrix === null) if (dimensions === 2) this.matrix = new p.PMatrix2D;
        else this.matrix = new p.PMatrix3D;
        else if (dimensions === 3 && this.matrix instanceof p.PMatrix2D) this.matrix = new p.PMatrix3D
      },
      rotateX: function(angle) {
        this.rotate(angle, 1, 0, 0)
      },
      rotateY: function(angle) {
        this.rotate(angle, 0, 1, 0)
      },
      rotateZ: function(angle) {
        this.rotate(angle, 0, 0, 1)
      },
      rotate: function() {
        if (arguments.length === 1) {
          this.checkMatrix(2);
          this.matrix.rotate(arguments[0])
        } else {
          this.checkMatrix(3);
          this.matrix.rotate(arguments[0], arguments[1], arguments[2], arguments[3])
        }
      },
      scale: function() {
        if (arguments.length === 2) {
          this.checkMatrix(2);
          this.matrix.scale(arguments[0], arguments[1])
        } else if (arguments.length === 3) {
          this.checkMatrix(2);
          this.matrix.scale(arguments[0], arguments[1], arguments[2])
        } else {
          this.checkMatrix(2);
          this.matrix.scale(arguments[0])
        }
      },
      resetMatrix: function() {
        this.checkMatrix(2);
        this.matrix.reset()
      },
      applyMatrix: function(matrix) {
        if (arguments.length === 1) this.applyMatrix(matrix.elements[0], matrix.elements[1], 0, matrix.elements[2], matrix.elements[3], matrix.elements[4], 0, matrix.elements[5], 0, 0, 1, 0, 0, 0, 0, 1);
        else if (arguments.length === 6) {
          this.checkMatrix(2);
          this.matrix.apply(arguments[0], arguments[1], arguments[2], 0, arguments[3], arguments[4], arguments[5], 0, 0, 0, 1, 0, 0, 0, 0, 1)
        } else if (arguments.length === 16) {
          this.checkMatrix(3);
          this.matrix.apply(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11], arguments[12], arguments[13], arguments[14], arguments[15])
        }
      }
    };
    var PShapeSVG = p.PShapeSVG = function() {
      p.PShape.call(this);
      if (arguments.length === 1) {
        this.element = arguments[0];
        this.vertexCodes = [];
        this.vertices = [];
        this.opacity = 1;
        this.stroke = false;
        this.strokeColor = 4278190080;
        this.strokeWeight = 1;
        this.strokeCap = 'butt';
        this.strokeJoin = 'miter';
        this.strokeGradient = null;
        this.strokeGradientPaint = null;
        this.strokeName = null;
        this.strokeOpacity = 1;
        this.fill = true;
        this.fillColor = 4278190080;
        this.fillGradient = null;
        this.fillGradientPaint = null;
        this.fillName = null;
        this.fillOpacity = 1;
        if (this.element.getName() !== "svg") throw "root is not <svg>, it's <" + this.element.getName() + ">";
      } else if (arguments.length === 2) if (typeof arguments[1] === "string") {
        if (arguments[1].indexOf(".svg") > -1) {
          this.element = new p.XMLElement(p, arguments[1]);
          this.vertexCodes = [];
          this.vertices = [];
          this.opacity = 1;
          this.stroke = false;
          this.strokeColor = 4278190080;
          this.strokeWeight = 1;
          this.strokeCap = 'butt';
          this.strokeJoin = 'miter';
          this.strokeGradient = "";
          this.strokeGradientPaint = "";
          this.strokeName = "";
          this.strokeOpacity = 1;
          this.fill = true;
          this.fillColor = 4278190080;
          this.fillGradient = null;
          this.fillGradientPaint = null;
          this.fillOpacity = 1
        }
      } else if (arguments[0]) {
        this.element = arguments[1];
        this.vertexCodes = arguments[0].vertexCodes.slice();
        this.vertices = arguments[0].vertices.slice();
        this.stroke = arguments[0].stroke;
        this.strokeColor = arguments[0].strokeColor;
        this.strokeWeight = arguments[0].strokeWeight;
        this.strokeCap = arguments[0].strokeCap;
        this.strokeJoin = arguments[0].strokeJoin;
        this.strokeGradient = arguments[0].strokeGradient;
        this.strokeGradientPaint = arguments[0].strokeGradientPaint;
        this.strokeName = arguments[0].strokeName;
        this.fill = arguments[0].fill;
        this.fillColor = arguments[0].fillColor;
        this.fillGradient = arguments[0].fillGradient;
        this.fillGradientPaint = arguments[0].fillGradientPaint;
        this.fillName = arguments[0].fillName;
        this.strokeOpacity = arguments[0].strokeOpacity;
        this.fillOpacity = arguments[0].fillOpacity;
        this.opacity = arguments[0].opacity
      }
      this.name = this.element.getStringAttribute("id");
      var displayStr = this.element.getStringAttribute("display", "inline");
      this.visible = displayStr !== "none";
      var str = this.element.getAttribute("transform");
      if (str) this.matrix = this.parseMatrix(str);
      var viewBoxStr = this.element.getStringAttribute("viewBox");
      if (viewBoxStr !== null) {
        var viewBox = viewBoxStr.split(" ");
        this.width = viewBox[2];
        this.height = viewBox[3]
      }
      var unitWidth = this.element.getStringAttribute("width");
      var unitHeight = this.element.getStringAttribute("height");
      if (unitWidth !== null) {
        this.width = this.parseUnitSize(unitWidth);
        this.height = this.parseUnitSize(unitHeight)
      } else if (this.width === 0 || this.height === 0) {
        this.width = 1;
        this.height = 1;
        throw "The width and/or height is not " + "readable in the <svg> tag of this file.";
      }
      this.parseColors(this.element);
      this.parseChildren(this.element)
    };
    PShapeSVG.prototype = new PShape;
    PShapeSVG.prototype.parseMatrix = function() {
      function getCoords(s) {
        var m = [];
        s.replace(/\((.*?)\)/, function() {
          return function(all, params) {
            m = params.replace(/,+/g, " ").split(/\s+/)
          }
        }());
        return m
      }
      return function(str) {
        this.checkMatrix(2);
        var pieces = [];
        str.replace(/\s*(\w+)\((.*?)\)/g, function(all) {
          pieces.push(p.trim(all))
        });
        if (pieces.length === 0) return null;
        for (var i = 0, j = pieces.length; i < j; i++) {
          var m = getCoords(pieces[i]);
          if (pieces[i].indexOf("matrix") !== -1) this.matrix.set(m[0], m[2], m[4], m[1], m[3], m[5]);
          else if (pieces[i].indexOf("translate") !== -1) {
            var tx = m[0];
            var ty = m.length === 2 ? m[1] : 0;
            this.matrix.translate(tx, ty)
          } else if (pieces[i].indexOf("scale") !== -1) {
            var sx = m[0];
            var sy = m.length === 2 ? m[1] : m[0];
            this.matrix.scale(sx, sy)
          } else if (pieces[i].indexOf("rotate") !== -1) {
            var angle = m[0];
            if (m.length === 1) this.matrix.rotate(p.radians(angle));
            else if (m.length === 3) {
              this.matrix.translate(m[1], m[2]);
              this.matrix.rotate(p.radians(m[0]));
              this.matrix.translate(-m[1], -m[2])
            }
          } else if (pieces[i].indexOf("skewX") !== -1) this.matrix.skewX(parseFloat(m[0]));
          else if (pieces[i].indexOf("skewY") !== -1) this.matrix.skewY(m[0]);
          else if (pieces[i].indexOf("shearX") !== -1) this.matrix.shearX(m[0]);
          else if (pieces[i].indexOf("shearY") !== -1) this.matrix.shearY(m[0])
        }
        return this.matrix
      }
    }();
    PShapeSVG.prototype.parseChildren = function(element) {
      var newelement = element.getChildren();
      var children = new p.PShape;
      for (var i = 0, j = newelement.length; i < j; i++) {
        var kid = this.parseChild(newelement[i]);
        if (kid) children.addChild(kid)
      }
      this.children.push(children)
    };
    PShapeSVG.prototype.getName = function() {
      return this.name
    };
    PShapeSVG.prototype.parseChild = function(elem) {
      var name = elem.getName();
      var shape;
      if (name === "g") shape = new PShapeSVG(this, elem);
      else if (name === "defs") shape = new PShapeSVG(this, elem);
      else if (name === "line") {
        shape = new PShapeSVG(this, elem);
        shape.parseLine()
      } else if (name === "circle") {
        shape = new PShapeSVG(this, elem);
        shape.parseEllipse(true)
      } else if (name === "ellipse") {
        shape = new PShapeSVG(this, elem);
        shape.parseEllipse(false)
      } else if (name === "rect") {
        shape = new PShapeSVG(this, elem);
        shape.parseRect()
      } else if (name === "polygon") {
        shape = new PShapeSVG(this, elem);
        shape.parsePoly(true)
      } else if (name === "polyline") {
        shape = new PShapeSVG(this, elem);
        shape.parsePoly(false)
      } else if (name === "path") {
        shape = new PShapeSVG(this, elem);
        shape.parsePath()
      } else if (name === "radialGradient") unimplemented("PShapeSVG.prototype.parseChild, name = radialGradient");
      else if (name === "linearGradient") unimplemented("PShapeSVG.prototype.parseChild, name = linearGradient");
      else if (name === "text") unimplemented("PShapeSVG.prototype.parseChild, name = text");
      else if (name === "filter") unimplemented("PShapeSVG.prototype.parseChild, name = filter");
      else if (name === "mask") unimplemented("PShapeSVG.prototype.parseChild, name = mask");
      else nop();
      return shape
    };
    PShapeSVG.prototype.parsePath = function() {
      this.family = 21;
      this.kind = 0;
      var pathDataChars = [];
      var c;
      var pathData = p.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g, " "));
      if (pathData === null) return;
      pathData = p.__toCharArray(pathData);
      var cx = 0,
        cy = 0,
        ctrlX = 0,
        ctrlY = 0,
        ctrlX1 = 0,
        ctrlX2 = 0,
        ctrlY1 = 0,
        ctrlY2 = 0,
        endX = 0,
        endY = 0,
        ppx = 0,
        ppy = 0,
        px = 0,
        py = 0,
        i = 0,
        valOf = 0;
      var str = "";
      var tmpArray = [];
      var flag = false;
      var lastInstruction;
      var command;
      var j, k;
      while (i < pathData.length) {
        valOf = pathData[i].valueOf();
        if (valOf >= 65 && valOf <= 90 || valOf >= 97 && valOf <= 122) {
          j = i;
          i++;
          if (i < pathData.length) {
            tmpArray = [];
            valOf = pathData[i].valueOf();
            while (! (valOf >= 65 && valOf <= 90 || valOf >= 97 && valOf <= 100 || valOf >= 102 && valOf <= 122) && flag === false) {
              if (valOf === 32) {
                if (str !== "") {
                  tmpArray.push(parseFloat(str));
                  str = ""
                }
                i++
              } else if (valOf === 45) if (pathData[i - 1].valueOf() === 101) {
                str += pathData[i].toString();
                i++
              } else {
                if (str !== "") tmpArray.push(parseFloat(str));
                str = pathData[i].toString();
                i++
              } else {
                str += pathData[i].toString();
                i++
              }
              if (i === pathData.length) flag = true;
              else valOf = pathData[i].valueOf()
            }
          }
          if (str !== "") {
            tmpArray.push(parseFloat(str));
            str = ""
          }
          command = pathData[j];
          valOf = command.valueOf();
          if (valOf === 77) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) {
              cx = tmpArray[0];
              cy = tmpArray[1];
              this.parsePathMoveto(cx, cy);
              if (tmpArray.length > 2) for (j = 2, k = tmpArray.length; j < k; j += 2) {
                cx = tmpArray[j];
                cy = tmpArray[j + 1];
                this.parsePathLineto(cx, cy)
              }
            }
          } else if (valOf === 109) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) {
              cx += tmpArray[0];
              cy += tmpArray[1];
              this.parsePathMoveto(cx, cy);
              if (tmpArray.length > 2) for (j = 2, k = tmpArray.length; j < k; j += 2) {
                cx += tmpArray[j];
                cy += tmpArray[j + 1];
                this.parsePathLineto(cx, cy)
              }
            }
          } else if (valOf === 76) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) for (j = 0, k = tmpArray.length; j < k; j += 2) {
              cx = tmpArray[j];
              cy = tmpArray[j + 1];
              this.parsePathLineto(cx, cy)
            }
          } else if (valOf === 108) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) for (j = 0, k = tmpArray.length; j < k; j += 2) {
              cx += tmpArray[j];
              cy += tmpArray[j + 1];
              this.parsePathLineto(cx, cy)
            }
          } else if (valOf === 72) for (j = 0, k = tmpArray.length; j < k; j++) {
            cx = tmpArray[j];
            this.parsePathLineto(cx, cy)
          } else if (valOf === 104) for (j = 0, k = tmpArray.length; j < k; j++) {
            cx += tmpArray[j];
            this.parsePathLineto(cx, cy)
          } else if (valOf === 86) for (j = 0, k = tmpArray.length; j < k; j++) {
            cy = tmpArray[j];
            this.parsePathLineto(cx, cy)
          } else if (valOf === 118) for (j = 0, k = tmpArray.length; j < k; j++) {
            cy += tmpArray[j];
            this.parsePathLineto(cx, cy)
          } else if (valOf === 67) {
            if (tmpArray.length >= 6 && tmpArray.length % 6 === 0) for (j = 0, k = tmpArray.length; j < k; j += 6) {
              ctrlX1 = tmpArray[j];
              ctrlY1 = tmpArray[j + 1];
              ctrlX2 = tmpArray[j + 2];
              ctrlY2 = tmpArray[j + 3];
              endX = tmpArray[j + 4];
              endY = tmpArray[j + 5];
              this.parsePathCurveto(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 99) {
            if (tmpArray.length >= 6 && tmpArray.length % 6 === 0) for (j = 0, k = tmpArray.length; j < k; j += 6) {
              ctrlX1 = cx + tmpArray[j];
              ctrlY1 = cy + tmpArray[j + 1];
              ctrlX2 = cx + tmpArray[j + 2];
              ctrlY2 = cy + tmpArray[j + 3];
              endX = cx + tmpArray[j + 4];
              endY = cy + tmpArray[j + 5];
              this.parsePathCurveto(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 83) {
            if (tmpArray.length >= 4 && tmpArray.length % 4 === 0) for (j = 0, k = tmpArray.length; j < k; j += 4) {
              if (lastInstruction.toLowerCase() === "c" || lastInstruction.toLowerCase() === "s") {
                ppx = this.vertices[this.vertices.length - 2][0];
                ppy = this.vertices[this.vertices.length - 2][1];
                px = this.vertices[this.vertices.length - 1][0];
                py = this.vertices[this.vertices.length - 1][1];
                ctrlX1 = px + (px - ppx);
                ctrlY1 = py + (py - ppy)
              } else {
                ctrlX1 = this.vertices[this.vertices.length - 1][0];
                ctrlY1 = this.vertices[this.vertices.length - 1][1]
              }
              ctrlX2 = tmpArray[j];
              ctrlY2 = tmpArray[j + 1];
              endX = tmpArray[j + 2];
              endY = tmpArray[j + 3];
              this.parsePathCurveto(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 115) {
            if (tmpArray.length >= 4 && tmpArray.length % 4 === 0) for (j = 0, k = tmpArray.length; j < k; j += 4) {
              if (lastInstruction.toLowerCase() === "c" || lastInstruction.toLowerCase() === "s") {
                ppx = this.vertices[this.vertices.length - 2][0];
                ppy = this.vertices[this.vertices.length - 2][1];
                px = this.vertices[this.vertices.length - 1][0];
                py = this.vertices[this.vertices.length - 1][1];
                ctrlX1 = px + (px - ppx);
                ctrlY1 = py + (py - ppy)
              } else {
                ctrlX1 = this.vertices[this.vertices.length - 1][0];
                ctrlY1 = this.vertices[this.vertices.length - 1][1]
              }
              ctrlX2 = cx + tmpArray[j];
              ctrlY2 = cy + tmpArray[j + 1];
              endX = cx + tmpArray[j + 2];
              endY = cy + tmpArray[j + 3];
              this.parsePathCurveto(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 81) {
            if (tmpArray.length >= 4 && tmpArray.length % 4 === 0) for (j = 0, k = tmpArray.length; j < k; j += 4) {
              ctrlX = tmpArray[j];
              ctrlY = tmpArray[j + 1];
              endX = tmpArray[j + 2];
              endY = tmpArray[j + 3];
              this.parsePathQuadto(cx, cy, ctrlX, ctrlY, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 113) {
            if (tmpArray.length >= 4 && tmpArray.length % 4 === 0) for (j = 0, k = tmpArray.length; j < k; j += 4) {
              ctrlX = cx + tmpArray[j];
              ctrlY = cy + tmpArray[j + 1];
              endX = cx + tmpArray[j + 2];
              endY = cy + tmpArray[j + 3];
              this.parsePathQuadto(cx, cy, ctrlX, ctrlY, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 84) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) for (j = 0, k = tmpArray.length; j < k; j += 2) {
              if (lastInstruction.toLowerCase() === "q" || lastInstruction.toLowerCase() === "t") {
                ppx = this.vertices[this.vertices.length - 2][0];
                ppy = this.vertices[this.vertices.length - 2][1];
                px = this.vertices[this.vertices.length - 1][0];
                py = this.vertices[this.vertices.length - 1][1];
                ctrlX = px + (px - ppx);
                ctrlY = py + (py - ppy)
              } else {
                ctrlX = cx;
                ctrlY = cy
              }
              endX = tmpArray[j];
              endY = tmpArray[j + 1];
              this.parsePathQuadto(cx, cy, ctrlX, ctrlY, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 116) {
            if (tmpArray.length >= 2 && tmpArray.length % 2 === 0) for (j = 0, k = tmpArray.length; j < k; j += 2) {
              if (lastInstruction.toLowerCase() === "q" || lastInstruction.toLowerCase() === "t") {
                ppx = this.vertices[this.vertices.length - 2][0];
                ppy = this.vertices[this.vertices.length - 2][1];
                px = this.vertices[this.vertices.length - 1][0];
                py = this.vertices[this.vertices.length - 1][1];
                ctrlX = px + (px - ppx);
                ctrlY = py + (py - ppy)
              } else {
                ctrlX = cx;
                ctrlY = cy
              }
              endX = cx + tmpArray[j];
              endY = cy + tmpArray[j + 1];
              this.parsePathQuadto(cx, cy, ctrlX, ctrlY, endX, endY);
              cx = endX;
              cy = endY
            }
          } else if (valOf === 90 || valOf === 122) this.close = true;
          lastInstruction = command.toString()
        } else i++
      }
    };
    PShapeSVG.prototype.parsePathQuadto = function(x1, y1, cx, cy, x2, y2) {
      if (this.vertices.length > 0) {
        this.parsePathCode(1);
        this.parsePathVertex(x1 + (cx - x1) * 2 / 3, y1 + (cy - y1) * 2 / 3);
        this.parsePathVertex(x2 + (cx - x2) * 2 / 3, y2 + (cy - y2) * 2 / 3);
        this.parsePathVertex(x2, y2)
      } else throw "Path must start with M/m";
    };
    PShapeSVG.prototype.parsePathCurveto = function(x1, y1, x2, y2, x3, y3) {
      if (this.vertices.length > 0) {
        this.parsePathCode(1);
        this.parsePathVertex(x1, y1);
        this.parsePathVertex(x2, y2);
        this.parsePathVertex(x3, y3)
      } else throw "Path must start with M/m";
    };
    PShapeSVG.prototype.parsePathLineto = function(px, py) {
      if (this.vertices.length > 0) {
        this.parsePathCode(0);
        this.parsePathVertex(px, py);
        this.vertices[this.vertices.length - 1]["moveTo"] = false
      } else throw "Path must start with M/m";
    };
    PShapeSVG.prototype.parsePathMoveto = function(px, py) {
      if (this.vertices.length > 0) this.parsePathCode(3);
      this.parsePathCode(0);
      this.parsePathVertex(px, py);
      this.vertices[this.vertices.length - 1]["moveTo"] = true
    };
    PShapeSVG.prototype.parsePathVertex = function(x, y) {
      var verts = [];
      verts[0] = x;
      verts[1] = y;
      this.vertices.push(verts)
    };
    PShapeSVG.prototype.parsePathCode = function(what) {
      this.vertexCodes.push(what)
    };
    PShapeSVG.prototype.parsePoly = function(val) {
      this.family = 21;
      this.close = val;
      var pointsAttr = p.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g, " "));
      if (pointsAttr !== null) {
        var pointsBuffer = pointsAttr.split(" ");
        if (pointsBuffer.length % 2 === 0) for (var i = 0, j = pointsBuffer.length; i < j; i++) {
          var verts = [];
          verts[0] = pointsBuffer[i];
          verts[1] = pointsBuffer[++i];
          this.vertices.push(verts)
        } else throw "Error parsing polygon points: odd number of coordinates provided";
      }
    };
    PShapeSVG.prototype.parseRect = function() {
      this.kind = 30;
      this.family = 1;
      this.params = [];
      this.params[0] = this.element.getFloatAttribute("x");
      this.params[1] = this.element.getFloatAttribute("y");
      this.params[2] = this.element.getFloatAttribute("width");
      this.params[3] = this.element.getFloatAttribute("height");
      if (this.params[2] < 0 || this.params[3] < 0) throw "svg error: negative width or height found while parsing <rect>";
    };
    PShapeSVG.prototype.parseEllipse = function(val) {
      this.kind = 31;
      this.family = 1;
      this.params = [];
      this.params[0] = this.element.getFloatAttribute("cx") | 0;
      this.params[1] = this.element.getFloatAttribute("cy") | 0;
      var rx, ry;
      if (val) {
        rx = ry = this.element.getFloatAttribute("r");
        if (rx < 0) throw "svg error: negative radius found while parsing <circle>";
      } else {
        rx = this.element.getFloatAttribute("rx");
        ry = this.element.getFloatAttribute("ry");
        if (rx < 0 || ry < 0) throw "svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>";
      }
      this.params[0] -= rx;
      this.params[1] -= ry;
      this.params[2] = rx * 2;
      this.params[3] = ry * 2
    };
    PShapeSVG.prototype.parseLine = function() {
      this.kind = 4;
      this.family = 1;
      this.params = [];
      this.params[0] = this.element.getFloatAttribute("x1");
      this.params[1] = this.element.getFloatAttribute("y1");
      this.params[2] = this.element.getFloatAttribute("x2");
      this.params[3] = this.element.getFloatAttribute("y2")
    };
    PShapeSVG.prototype.parseColors = function(element) {
      if (element.hasAttribute("opacity")) this.setOpacity(element.getAttribute("opacity"));
      if (element.hasAttribute("stroke")) this.setStroke(element.getAttribute("stroke"));
      if (element.hasAttribute("stroke-width")) this.setStrokeWeight(element.getAttribute("stroke-width"));
      if (element.hasAttribute("stroke-linejoin")) this.setStrokeJoin(element.getAttribute("stroke-linejoin"));
      if (element.hasAttribute("stroke-linecap")) this.setStrokeCap(element.getStringAttribute("stroke-linecap"));
      if (element.hasAttribute("fill")) this.setFill(element.getStringAttribute("fill"));
      if (element.hasAttribute("style")) {
        var styleText = element.getStringAttribute("style");
        var styleTokens = styleText.toString().split(";");
        for (var i = 0, j = styleTokens.length; i < j; i++) {
          var tokens = p.trim(styleTokens[i].split(":"));
          if (tokens[0] === "fill") this.setFill(tokens[1]);
          else if (tokens[0] === "fill-opacity") this.setFillOpacity(tokens[1]);
          else if (tokens[0] === "stroke") this.setStroke(tokens[1]);
          else if (tokens[0] === "stroke-width") this.setStrokeWeight(tokens[1]);
          else if (tokens[0] === "stroke-linecap") this.setStrokeCap(tokens[1]);
          else if (tokens[0] === "stroke-linejoin") this.setStrokeJoin(tokens[1]);
          else if (tokens[0] === "stroke-opacity") this.setStrokeOpacity(tokens[1]);
          else if (tokens[0] === "opacity") this.setOpacity(tokens[1])
        }
      }
    };
    PShapeSVG.prototype.setFillOpacity = function(opacityText) {
      this.fillOpacity = parseFloat(opacityText);
      this.fillColor = this.fillOpacity * 255 << 24 | this.fillColor & 16777215
    };
    PShapeSVG.prototype.setFill = function(fillText) {
      var opacityMask = this.fillColor & 4278190080;
      if (fillText === "none") this.fill = false;
      else if (fillText.indexOf("#") === 0) {
        this.fill = true;
        if (fillText.length === 4) fillText = fillText.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3");
        this.fillColor = opacityMask | parseInt(fillText.substring(1), 16) & 16777215
      } else if (fillText.indexOf("rgb") === 0) {
        this.fill = true;
        this.fillColor = opacityMask | this.parseRGB(fillText)
      } else if (fillText.indexOf("url(#") === 0) this.fillName = fillText.substring(5, fillText.length - 1);
      else if (colors[fillText]) {
        this.fill = true;
        this.fillColor = opacityMask | parseInt(colors[fillText].substring(1), 16) & 16777215
      }
    };
    PShapeSVG.prototype.setOpacity = function(opacity) {
      this.strokeColor = parseFloat(opacity) * 255 << 24 | this.strokeColor & 16777215;
      this.fillColor = parseFloat(opacity) * 255 << 24 | this.fillColor & 16777215
    };
    PShapeSVG.prototype.setStroke = function(strokeText) {
      var opacityMask = this.strokeColor & 4278190080;
      if (strokeText === "none") this.stroke = false;
      else if (strokeText.charAt(0) === "#") {
        this.stroke = true;
        if (strokeText.length === 4) strokeText = strokeText.replace(/#(.)(.)(.)/, "#$1$1$2$2$3$3");
        this.strokeColor = opacityMask | parseInt(strokeText.substring(1), 16) & 16777215
      } else if (strokeText.indexOf("rgb") === 0) {
        this.stroke = true;
        this.strokeColor = opacityMask | this.parseRGB(strokeText)
      } else if (strokeText.indexOf("url(#") === 0) this.strokeName = strokeText.substring(5, strokeText.length - 1);
      else if (colors[strokeText]) {
        this.stroke = true;
        this.strokeColor = opacityMask | parseInt(colors[strokeText].substring(1), 16) & 16777215
      }
    };
    PShapeSVG.prototype.setStrokeWeight = function(weight) {
      this.strokeWeight = this.parseUnitSize(weight)
    };
    PShapeSVG.prototype.setStrokeJoin = function(linejoin) {
      if (linejoin === "miter") this.strokeJoin = 'miter';
      else if (linejoin === "round") this.strokeJoin = 'round';
      else if (linejoin === "bevel") this.strokeJoin = 'bevel'
    };
    PShapeSVG.prototype.setStrokeCap = function(linecap) {
      if (linecap === "butt") this.strokeCap = 'butt';
      else if (linecap === "round") this.strokeCap = 'round';
      else if (linecap === "square") this.strokeCap = 'square'
    };
    PShapeSVG.prototype.setStrokeOpacity = function(opacityText) {
      this.strokeOpacity = parseFloat(opacityText);
      this.strokeColor = this.strokeOpacity * 255 << 24 | this.strokeColor & 16777215
    };
    PShapeSVG.prototype.parseRGB = function(color) {
      var sub = color.substring(color.indexOf("(") + 1, color.indexOf(")"));
      var values = sub.split(", ");
      return values[0] << 16 | values[1] << 8 | values[2]
    };
    PShapeSVG.prototype.parseUnitSize = function(text) {
      var len = text.length - 2;
      if (len < 0) return text;
      if (text.indexOf("pt") === len) return parseFloat(text.substring(0, len)) * 1.25;
      if (text.indexOf("pc") === len) return parseFloat(text.substring(0, len)) * 15;
      if (text.indexOf("mm") === len) return parseFloat(text.substring(0, len)) * 3.543307;
      if (text.indexOf("cm") === len) return parseFloat(text.substring(0, len)) * 35.43307;
      if (text.indexOf("in") === len) return parseFloat(text.substring(0, len)) * 90;
      if (text.indexOf("px") === len) return parseFloat(text.substring(0, len));
      return parseFloat(text)
    };
    p.shape = function(shape, x, y, width, height) {
      if (arguments.length >= 1 && arguments[0] !== null) if (shape.isVisible()) {
        p.pushMatrix();
        if (curShapeMode === 3) if (arguments.length === 5) {
          p.translate(x - width / 2, y - height / 2);
          p.scale(width / shape.getWidth(), height / shape.getHeight())
        } else if (arguments.length === 3) p.translate(x - shape.getWidth() / 2, -shape.getHeight() / 2);
        else p.translate(-shape.getWidth() / 2, -shape.getHeight() / 2);
        else if (curShapeMode === 0) if (arguments.length === 5) {
          p.translate(x, y);
          p.scale(width / shape.getWidth(), height / shape.getHeight())
        } else {
          if (arguments.length === 3) p.translate(x, y)
        } else if (curShapeMode === 1) if (arguments.length === 5) {
          width -= x;
          height -= y;
          p.translate(x, y);
          p.scale(width / shape.getWidth(), height / shape.getHeight())
        } else if (arguments.length === 3) p.translate(x, y);
        shape.draw(p);
        if (arguments.length === 1 && curShapeMode === 3 || arguments.length > 1) p.popMatrix()
      }
    };
    p.shapeMode = function(mode) {
      curShapeMode = mode
    };
    p.loadShape = function(filename) {
      if (arguments.length === 1) if (filename.indexOf(".svg") > -1) return new PShapeSVG(null, filename);
      return null
    };
    var XMLAttribute = function(fname, n, nameSpace, v, t) {
      this.fullName = fname || "";
      this.name = n || "";
      this.namespace = nameSpace || "";
      this.value = v;
      this.type = t
    };
    XMLAttribute.prototype = {
      getName: function() {
        return this.name
      },
      getFullName: function() {
        return this.fullName
      },
      getNamespace: function() {
        return this.namespace
      },
      getValue: function() {
        return this.value
      },
      getType: function() {
        return this.type
      },
      setValue: function(newval) {
        this.value = newval
      }
    };
    var XMLElement = p.XMLElement = function(selector, uri, sysid, line) {
      this.attributes = [];
      this.children = [];
      this.fullName = null;
      this.name = null;
      this.namespace = "";
      this.content = null;
      this.parent = null;
      this.lineNr = "";
      this.systemID = "";
      this.type = "ELEMENT";
      if (selector) if (typeof selector === "string") if (uri === undef && selector.indexOf("<") > -1) this.parse(selector);
      else {
        this.fullName = selector;
        this.namespace = uri;
        this.systemId = sysid;
        this.lineNr = line
      } else this.parse(uri)
    };
    XMLElement.prototype = {
      parse: function(textstring) {
        var xmlDoc;
        try {
          var extension = textstring.substring(textstring.length - 4);
          if (extension === ".xml" || extension === ".svg") textstring = ajax(textstring);
          xmlDoc = (new DOMParser).parseFromString(textstring, "text/xml");
          var elements = xmlDoc.documentElement;
          if (elements) this.parseChildrenRecursive(null, elements);
          else throw "Error loading document";
          return this
        } catch(e) {
          throw e;
        }
      },
      parseChildrenRecursive: function(parent, elementpath) {
        var xmlelement, xmlattribute, tmpattrib, l, m, child;
        if (!parent) {
          this.fullName = elementpath.localName;
          this.name = elementpath.nodeName;
          xmlelement = this
        } else {
          xmlelement = new XMLElement(elementpath.nodeName);
          xmlelement.parent = parent
        }
        if (elementpath.nodeType === 3 && elementpath.textContent !== "") return this.createPCDataElement(elementpath.textContent);
        if (elementpath.nodeType === 4) return this.createCDataElement(elementpath.textContent);
        if (elementpath.attributes) for (l = 0, m = elementpath.attributes.length; l < m; l++) {
          tmpattrib = elementpath.attributes[l];
          xmlattribute = new XMLAttribute(tmpattrib.getname, tmpattrib.nodeName, tmpattrib.namespaceURI, tmpattrib.nodeValue, tmpattrib.nodeType);
          xmlelement.attributes.push(xmlattribute)
        }
        if (elementpath.childNodes) for (l = 0, m = elementpath.childNodes.length; l < m; l++) {
          var node = elementpath.childNodes[l];
          child = xmlelement.parseChildrenRecursive(xmlelement, node);
          if (child !== null) xmlelement.children.push(child)
        }
        return xmlelement
      },
      createElement: function(fullname, namespaceuri, sysid, line) {
        if (sysid === undef) return new XMLElement(fullname, namespaceuri);
        return new XMLElement(fullname, namespaceuri, sysid, line)
      },
      createPCDataElement: function(content, isCDATA) {
        if (content.replace(/^\s+$/g, "") === "") return null;
        var pcdata = new XMLElement;
        pcdata.type = "TEXT";
        pcdata.content = content;
        return pcdata
      },
      createCDataElement: function(content) {
        var cdata = this.createPCDataElement(content);
        if (cdata === null) return null;
        cdata.type = "CDATA";
        var htmlentities = {
          "<": "&lt;",
          ">": "&gt;",
          "'": "&apos;",
          '"': "&quot;"
        },
          entity;
        for (entity in htmlentities) if (!Object.hasOwnProperty(htmlentities, entity)) content = content.replace(new RegExp(entity, "g"), htmlentities[entity]);
        cdata.cdata = content;
        return cdata
      },
      hasAttribute: function() {
        if (arguments.length === 1) return this.getAttribute(arguments[0]) !== null;
        if (arguments.length === 2) return this.getAttribute(arguments[0], arguments[1]) !== null
      },
      equals: function(other) {
        if (! (other instanceof XMLElement)) return false;
        var i, j;
        if (this.fullName !== other.fullName) return false;
        if (this.attributes.length !== other.getAttributeCount()) return false;
        if (this.attributes.length !== other.attributes.length) return false;
        var attr_name, attr_ns, attr_value, attr_type, attr_other;
        for (i = 0, j = this.attributes.length; i < j; i++) {
          attr_name = this.attributes[i].getName();
          attr_ns = this.attributes[i].getNamespace();
          attr_other = other.findAttribute(attr_name, attr_ns);
          if (attr_other === null) return false;
          if (this.attributes[i].getValue() !== attr_other.getValue()) return false;
          if (this.attributes[i].getType() !== attr_other.getType()) return false
        }
        if (this.children.length !== other.getChildCount()) return false;
        if (this.children.length > 0) {
          var child1, child2;
          for (i = 0, j = this.children.length; i < j; i++) {
            child1 = this.getChild(i);
            child2 = other.getChild(i);
            if (!child1.equals(child2)) return false
          }
          return true
        }
        return this.content === other.content
      },
      getContent: function() {
        if (this.type === "TEXT" || this.type === "CDATA") return this.content;
        var children = this.children;
        if (children.length === 1 && (children[0].type === "TEXT" || children[0].type === "CDATA")) return children[0].content;
        return null
      },
      getAttribute: function() {
        var attribute;
        if (arguments.length === 2) {
          attribute = this.findAttribute(arguments[0]);
          if (attribute) return attribute.getValue();
          return arguments[1]
        } else if (arguments.length === 1) {
          attribute = this.findAttribute(arguments[0]);
          if (attribute) return attribute.getValue();
          return null
        } else if (arguments.length === 3) {
          attribute = this.findAttribute(arguments[0], arguments[1]);
          if (attribute) return attribute.getValue();
          return arguments[2]
        }
      },
      getStringAttribute: function() {
        if (arguments.length === 1) return this.getAttribute(arguments[0]);
        if (arguments.length === 2) return this.getAttribute(arguments[0], arguments[1]);
        return this.getAttribute(arguments[0], arguments[1], arguments[2])
      },
      getString: function(attributeName) {
        return this.getStringAttribute(attributeName)
      },
      getFloatAttribute: function() {
        if (arguments.length === 1) return parseFloat(this.getAttribute(arguments[0], 0));
        if (arguments.length === 2) return this.getAttribute(arguments[0], arguments[1]);
        return this.getAttribute(arguments[0], arguments[1], arguments[2])
      },
      getFloat: function(attributeName) {
        return this.getFloatAttribute(attributeName)
      },
      getIntAttribute: function() {
        if (arguments.length === 1) return this.getAttribute(arguments[0], 0);
        if (arguments.length === 2) return this.getAttribute(arguments[0], arguments[1]);
        return this.getAttribute(arguments[0], arguments[1], arguments[2])
      },
      getInt: function(attributeName) {
        return this.getIntAttribute(attributeName)
      },
      hasChildren: function() {
        return this.children.length > 0
      },
      addChild: function(child) {
        if (child !== null) {
          child.parent = this;
          this.children.push(child)
        }
      },
      insertChild: function(child, index) {
        if (child) {
          if (child.getLocalName() === null && !this.hasChildren()) {
            var lastChild = this.children[this.children.length - 1];
            if (lastChild.getLocalName() === null) {
              lastChild.setContent(lastChild.getContent() + child.getContent());
              return
            }
          }
          child.parent = this;
          this.children.splice(index, 0, child)
        }
      },
      getChild: function(selector) {
        if (typeof selector === "number") return this.children[selector];
        if (selector.indexOf("/") !== -1) return this.getChildRecursive(selector.split("/"), 0);
        var kid, kidName;
        for (var i = 0, j = this.getChildCount(); i < j; i++) {
          kid = this.getChild(i);
          kidName = kid.getName();
          if (kidName !== null && kidName === selector) return kid
        }
        return null
      },
      getChildren: function() {
        if (arguments.length === 1) {
          if (typeof arguments[0] === "number") return this.getChild(arguments[0]);
          if (arguments[0].indexOf("/") !== -1) return this.getChildrenRecursive(arguments[0].split("/"), 0);
          var matches = [];
          var kid, kidName;
          for (var i = 0, j = this.getChildCount(); i < j; i++) {
            kid = this.getChild(i);
            kidName = kid.getName();
            if (kidName !== null && kidName === arguments[0]) matches.push(kid)
          }
          return matches
        }
        return this.children
      },
      getChildCount: function() {
        return this.children.length
      },
      getChildRecursive: function(items, offset) {
        if (offset === items.length) return this;
        var kid, kidName, matchName = items[offset];
        for (var i = 0, j = this.getChildCount(); i < j; i++) {
          kid = this.getChild(i);
          kidName = kid.getName();
          if (kidName !== null && kidName === matchName) return kid.getChildRecursive(items, offset + 1)
        }
        return null
      },
      getChildrenRecursive: function(items, offset) {
        if (offset === items.length - 1) return this.getChildren(items[offset]);
        var matches = this.getChildren(items[offset]);
        var kidMatches = [];
        for (var i = 0; i < matches.length; i++) kidMatches = kidMatches.concat(matches[i].getChildrenRecursive(items, offset + 1));
        return kidMatches
      },
      isLeaf: function() {
        return !this.hasChildren()
      },
      listChildren: function() {
        var arr = [];
        for (var i = 0, j = this.children.length; i < j; i++) arr.push(this.getChild(i).getName());
        return arr
      },
      removeAttribute: function(name, namespace) {
        this.namespace = namespace || "";
        for (var i = 0, j = this.attributes.length; i < j; i++) if (this.attributes[i].getName() === name && this.attributes[i].getNamespace() === this.namespace) {
          this.attributes.splice(i, 1);
          break
        }
      },
      removeChild: function(child) {
        if (child) for (var i = 0, j = this.children.length; i < j; i++) if (this.children[i].equals(child)) {
          this.children.splice(i, 1);
          break
        }
      },
      removeChildAtIndex: function(index) {
        if (this.children.length > index) this.children.splice(index, 1)
      },
      findAttribute: function(name, namespace) {
        this.namespace = namespace || "";
        for (var i = 0, j = this.attributes.length; i < j; i++) if (this.attributes[i].getName() === name && this.attributes[i].getNamespace() === this.namespace) return this.attributes[i];
        return null
      },
      setAttribute: function() {
        var attr;
        if (arguments.length === 3) {
          var index = arguments[0].indexOf(":");
          var name = arguments[0].substring(index + 1);
          attr = this.findAttribute(name, arguments[1]);
          if (attr) attr.setValue(arguments[2]);
          else {
            attr = new XMLAttribute(arguments[0], name, arguments[1], arguments[2], "CDATA");
            this.attributes.push(attr)
          }
        } else {
          attr = this.findAttribute(arguments[0]);
          if (attr) attr.setValue(arguments[1]);
          else {
            attr = new XMLAttribute(arguments[0], arguments[0], null, arguments[1], "CDATA");
            this.attributes.push(attr)
          }
        }
      },
      setString: function(attribute, value) {
        this.setAttribute(attribute, value)
      },
      setInt: function(attribute, value) {
        this.setAttribute(attribute, value)
      },
      setFloat: function(attribute, value) {
        this.setAttribute(attribute, value)
      },
      setContent: function(content) {
        if (this.children.length > 0) Processing.debug("Tried to set content for XMLElement with children");
        this.content = content
      },
      setName: function() {
        if (arguments.length === 1) {
          this.name = arguments[0];
          this.fullName = arguments[0];
          this.namespace = null
        } else {
          var index = arguments[0].indexOf(":");
          if (arguments[1] === null || index < 0) this.name = arguments[0];
          else this.name = arguments[0].substring(index + 1);
          this.fullName = arguments[0];
          this.namespace = arguments[1]
        }
      },
      getName: function() {
        return this.fullName
      },
      getLocalName: function() {
        return this.name
      },
      getAttributeCount: function() {
        return this.attributes.length
      },
      toString: function() {
        if (this.type === "TEXT") return this.content;
        if (this.type === "CDATA") return this.cdata;
        var tagstring = this.fullName;
        var xmlstring = "<" + tagstring;
        var a, c;
        for (a = 0; a < this.attributes.length; a++) {
          var attr = this.attributes[a];
          xmlstring += " " + attr.getName() + "=" + '"' + attr.getValue() + '"'
        }
        if (this.children.length === 0) if (this.content === "") xmlstring += "/>";
        else xmlstring += ">" + this.content + "</" + tagstring + ">";
        else {
          xmlstring += ">";
          for (c = 0; c < this.children.length; c++) xmlstring += this.children[c].toString();
          xmlstring += "</" + tagstring + ">"
        }
        return xmlstring
      }
    };
    XMLElement.parse = function(xmlstring) {
      var element = new XMLElement;
      element.parse(xmlstring);
      return element
    };
    var XML = p.XML = p.XMLElement;
    p.loadXML = function(uri) {
      return new XML(p, uri)
    };
    var printMatrixHelper = function(elements) {
      var big = 0;
      for (var i = 0; i < elements.length; i++) if (i !== 0) big = Math.max(big, Math.abs(elements[i]));
      else big = Math.abs(elements[i]);
      var digits = (big + "").indexOf(".");
      if (digits === 0) digits = 1;
      else if (digits === -1) digits = (big + "").length;
      return digits
    };
    var PMatrix2D = p.PMatrix2D = function() {
      if (arguments.length === 0) this.reset();
      else if (arguments.length === 1 && arguments[0] instanceof PMatrix2D) this.set(arguments[0].array());
      else if (arguments.length === 6) this.set(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
    };
    PMatrix2D.prototype = {
      set: function() {
        if (arguments.length === 6) {
          var a = arguments;
          this.set([a[0], a[1], a[2], a[3], a[4], a[5]])
        } else if (arguments.length === 1 && arguments[0] instanceof PMatrix2D) this.elements = arguments[0].array();
        else if (arguments.length === 1 && arguments[0] instanceof Array) this.elements = arguments[0].slice()
      },
      get: function() {
        var outgoing = new PMatrix2D;
        outgoing.set(this.elements);
        return outgoing
      },
      reset: function() {
        this.set([1, 0, 0, 0, 1, 0])
      },
      array: function array() {
        return this.elements.slice()
      },
      translate: function(tx, ty) {
        this.elements[2] = tx * this.elements[0] + ty * this.elements[1] + this.elements[2];
        this.elements[5] = tx * this.elements[3] + ty * this.elements[4] + this.elements[5]
      },
      invTranslate: function(tx, ty) {
        this.translate(-tx, -ty)
      },
      transpose: function() {},
      mult: function(source, target) {
        var x, y;
        if (source instanceof
        PVector) {
          x = source.x;
          y = source.y;
          if (!target) target = new PVector
        } else if (source instanceof Array) {
          x = source[0];
          y = source[1];
          if (!target) target = []
        }
        if (target instanceof Array) {
          target[0] = this.elements[0] * x + this.elements[1] * y + this.elements[2];
          target[1] = this.elements[3] * x + this.elements[4] * y + this.elements[5]
        } else if (target instanceof PVector) {
          target.x = this.elements[0] * x + this.elements[1] * y + this.elements[2];
          target.y = this.elements[3] * x + this.elements[4] * y + this.elements[5];
          target.z = 0
        }
        return target
      },
      multX: function(x, y) {
        return x * this.elements[0] + y * this.elements[1] + this.elements[2]
      },
      multY: function(x, y) {
        return x * this.elements[3] + y * this.elements[4] + this.elements[5]
      },
      skewX: function(angle) {
        this.apply(1, 0, 1, angle, 0, 0)
      },
      skewY: function(angle) {
        this.apply(1, 0, 1, 0, angle, 0)
      },
      shearX: function(angle) {
        this.apply(1, 0, 1, Math.tan(angle), 0, 0)
      },
      shearY: function(angle) {
        this.apply(1, 0, 1, 0, Math.tan(angle), 0)
      },
      determinant: function() {
        return this.elements[0] * this.elements[4] - this.elements[1] * this.elements[3]
      },
      invert: function() {
        var d = this.determinant();
        if (Math.abs(d) > -2147483648) {
          var old00 = this.elements[0];
          var old01 = this.elements[1];
          var old02 = this.elements[2];
          var old10 = this.elements[3];
          var old11 = this.elements[4];
          var old12 = this.elements[5];
          this.elements[0] = old11 / d;
          this.elements[3] = -old10 / d;
          this.elements[1] = -old01 / d;
          this.elements[4] = old00 / d;
          this.elements[2] = (old01 * old12 - old11 * old02) / d;
          this.elements[5] = (old10 * old02 - old00 * old12) / d;
          return true
        }
        return false
      },
      scale: function(sx, sy) {
        if (sx && !sy) sy = sx;
        if (sx && sy) {
          this.elements[0] *= sx;
          this.elements[1] *= sy;
          this.elements[3] *= sx;
          this.elements[4] *= sy
        }
      },
      invScale: function(sx, sy) {
        if (sx && !sy) sy = sx;
        this.scale(1 / sx, 1 / sy)
      },
      apply: function() {
        var source;
        if (arguments.length === 1 && arguments[0] instanceof PMatrix2D) source = arguments[0].array();
        else if (arguments.length === 6) source = Array.prototype.slice.call(arguments);
        else if (arguments.length === 1 && arguments[0] instanceof Array) source = arguments[0];
        var result = [0, 0, this.elements[2], 0, 0, this.elements[5]];
        var e = 0;
        for (var row = 0; row < 2; row++) for (var col = 0; col < 3; col++, e++) result[e] += this.elements[row * 3 + 0] * source[col + 0] + this.elements[row * 3 + 1] * source[col + 3];
        this.elements = result.slice()
      },
      preApply: function() {
        var source;
        if (arguments.length === 1 && arguments[0] instanceof PMatrix2D) source = arguments[0].array();
        else if (arguments.length === 6) source = Array.prototype.slice.call(arguments);
        else if (arguments.length === 1 && arguments[0] instanceof Array) source = arguments[0];
        var result = [0, 0, source[2], 0, 0, source[5]];
        result[2] = source[2] + this.elements[2] * source[0] + this.elements[5] * source[1];
        result[5] = source[5] + this.elements[2] * source[3] + this.elements[5] * source[4];
        result[0] = this.elements[0] * source[0] + this.elements[3] * source[1];
        result[3] = this.elements[0] * source[3] + this.elements[3] * source[4];
        result[1] = this.elements[1] * source[0] + this.elements[4] * source[1];
        result[4] = this.elements[1] * source[3] + this.elements[4] * source[4];
        this.elements = result.slice()
      },
      rotate: function(angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        var temp1 = this.elements[0];
        var temp2 = this.elements[1];
        this.elements[0] = c * temp1 + s * temp2;
        this.elements[1] = -s * temp1 + c * temp2;
        temp1 = this.elements[3];
        temp2 = this.elements[4];
        this.elements[3] = c * temp1 + s * temp2;
        this.elements[4] = -s * temp1 + c * temp2
      },
      rotateZ: function(angle) {
        this.rotate(angle)
      },
      invRotateZ: function(angle) {
        this.rotateZ(angle - Math.PI)
      },
      print: function() {
        var digits = printMatrixHelper(this.elements);
        var output = "" + p.nfs(this.elements[0], digits, 4) + " " + p.nfs(this.elements[1], digits, 4) + " " + p.nfs(this.elements[2], digits, 4) + "\n" + p.nfs(this.elements[3], digits, 4) + " " + p.nfs(this.elements[4], digits, 4) + " " + p.nfs(this.elements[5], digits, 4) + "\n\n";
        p.println(output)
      }
    };
    var PMatrix3D = p.PMatrix3D = function() {
      this.reset()
    };
    PMatrix3D.prototype = {
      set: function() {
        if (arguments.length === 16) this.elements = Array.prototype.slice.call(arguments);
        else if (arguments.length === 1 && arguments[0] instanceof PMatrix3D) this.elements = arguments[0].array();
        else if (arguments.length === 1 && arguments[0] instanceof Array) this.elements = arguments[0].slice()
      },
      get: function() {
        var outgoing = new PMatrix3D;
        outgoing.set(this.elements);
        return outgoing
      },
      reset: function() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      },
      array: function array() {
        return this.elements.slice()
      },
      translate: function(tx, ty, tz) {
        if (tz === undef) tz = 0;
        this.elements[3] += tx * this.elements[0] + ty * this.elements[1] + tz * this.elements[2];
        this.elements[7] += tx * this.elements[4] + ty * this.elements[5] + tz * this.elements[6];
        this.elements[11] += tx * this.elements[8] + ty * this.elements[9] + tz * this.elements[10];
        this.elements[15] += tx * this.elements[12] + ty * this.elements[13] + tz * this.elements[14]
      },
      transpose: function() {
        var temp = this.elements[4];
        this.elements[4] = this.elements[1];
        this.elements[1] = temp;
        temp = this.elements[8];
        this.elements[8] = this.elements[2];
        this.elements[2] = temp;
        temp = this.elements[6];
        this.elements[6] = this.elements[9];
        this.elements[9] = temp;
        temp = this.elements[3];
        this.elements[3] = this.elements[12];
        this.elements[12] = temp;
        temp = this.elements[7];
        this.elements[7] = this.elements[13];
        this.elements[13] = temp;
        temp = this.elements[11];
        this.elements[11] = this.elements[14];
        this.elements[14] = temp
      },
      mult: function(source, target) {
        var x, y, z, w;
        if (source instanceof
        PVector) {
          x = source.x;
          y = source.y;
          z = source.z;
          w = 1;
          if (!target) target = new PVector
        } else if (source instanceof Array) {
          x = source[0];
          y = source[1];
          z = source[2];
          w = source[3] || 1;
          if (!target || target.length !== 3 && target.length !== 4) target = [0, 0, 0]
        }
        if (target instanceof Array) if (target.length === 3) {
          target[0] = this.elements[0] * x + this.elements[1] * y + this.elements[2] * z + this.elements[3];
          target[1] = this.elements[4] * x + this.elements[5] * y + this.elements[6] * z + this.elements[7];
          target[2] = this.elements[8] * x + this.elements[9] * y + this.elements[10] * z + this.elements[11]
        } else if (target.length === 4) {
          target[0] = this.elements[0] * x + this.elements[1] * y + this.elements[2] * z + this.elements[3] * w;
          target[1] = this.elements[4] * x + this.elements[5] * y + this.elements[6] * z + this.elements[7] * w;
          target[2] = this.elements[8] * x + this.elements[9] * y + this.elements[10] * z + this.elements[11] * w;
          target[3] = this.elements[12] * x + this.elements[13] * y + this.elements[14] * z + this.elements[15] * w
        }
        if (target instanceof PVector) {
          target.x = this.elements[0] * x + this.elements[1] * y + this.elements[2] * z + this.elements[3];
          target.y = this.elements[4] * x + this.elements[5] * y + this.elements[6] * z + this.elements[7];
          target.z = this.elements[8] * x + this.elements[9] * y + this.elements[10] * z + this.elements[11]
        }
        return target
      },
      preApply: function() {
        var source;
        if (arguments.length === 1 && arguments[0] instanceof PMatrix3D) source = arguments[0].array();
        else if (arguments.length === 16) source = Array.prototype.slice.call(arguments);
        else if (arguments.length === 1 && arguments[0] instanceof Array) source = arguments[0];
        var result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var e = 0;
        for (var row = 0; row < 4; row++) for (var col = 0; col < 4; col++, e++) result[e] += this.elements[col + 0] * source[row * 4 + 0] + this.elements[col + 4] * source[row * 4 + 1] + this.elements[col + 8] * source[row * 4 + 2] + this.elements[col + 12] * source[row * 4 + 3];
        this.elements = result.slice()
      },
      apply: function() {
        var source;
        if (arguments.length === 1 && arguments[0] instanceof PMatrix3D) source = arguments[0].array();
        else if (arguments.length === 16) source = Array.prototype.slice.call(arguments);
        else if (arguments.length === 1 && arguments[0] instanceof Array) source = arguments[0];
        var result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        var e = 0;
        for (var row = 0; row < 4; row++) for (var col = 0; col < 4; col++, e++) result[e] += this.elements[row * 4 + 0] * source[col + 0] + this.elements[row * 4 + 1] * source[col + 4] + this.elements[row * 4 + 2] * source[col + 8] + this.elements[row * 4 + 3] * source[col + 12];
        this.elements = result.slice()
      },
      rotate: function(angle, v0, v1, v2) {
        if (!v1) this.rotateZ(angle);
        else {
          var c = p.cos(angle);
          var s = p.sin(angle);
          var t = 1 - c;
          this.apply(t * v0 * v0 + c, t * v0 * v1 - s * v2, t * v0 * v2 + s * v1, 0, t * v0 * v1 + s * v2, t * v1 * v1 + c, t * v1 * v2 - s * v0, 0, t * v0 * v2 - s * v1, t * v1 * v2 + s * v0, t * v2 * v2 + c, 0, 0, 0, 0, 1)
        }
      },
      invApply: function() {
        if (inverseCopy === undef) inverseCopy = new PMatrix3D;
        var a = arguments;
        inverseCopy.set(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
        if (!inverseCopy.invert()) return false;
        this.preApply(inverseCopy);
        return true
      },
      rotateX: function(angle) {
        var c = p.cos(angle);
        var s = p.sin(angle);
        this.apply([1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1])
      },
      rotateY: function(angle) {
        var c = p.cos(angle);
        var s = p.sin(angle);
        this.apply([c,
          0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1])
      },
      rotateZ: function(angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        this.apply([c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
      },
      scale: function(sx, sy, sz) {
        if (sx && !sy && !sz) sy = sz = sx;
        else if (sx && sy && !sz) sz = 1;
        if (sx && sy && sz) {
          this.elements[0] *= sx;
          this.elements[1] *= sy;
          this.elements[2] *= sz;
          this.elements[4] *= sx;
          this.elements[5] *= sy;
          this.elements[6] *= sz;
          this.elements[8] *= sx;
          this.elements[9] *= sy;
          this.elements[10] *= sz;
          this.elements[12] *= sx;
          this.elements[13] *= sy;
          this.elements[14] *= sz
        }
      },
      skewX: function(angle) {
        var t = Math.tan(angle);
        this.apply(1, t, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      },
      skewY: function(angle) {
        var t = Math.tan(angle);
        this.apply(1, 0, 0, 0, t, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      },
      shearX: function(angle) {
        var t = Math.tan(angle);
        this.apply(1, t, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      },
      shearY: function(angle) {
        var t = Math.tan(angle);
        this.apply(1, 0, 0, 0, t, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      },
      multX: function(x, y, z, w) {
        if (!z) return this.elements[0] * x + this.elements[1] * y + this.elements[3];
        if (!w) return this.elements[0] * x + this.elements[1] * y + this.elements[2] * z + this.elements[3];
        return this.elements[0] * x + this.elements[1] * y + this.elements[2] * z + this.elements[3] * w
      },
      multY: function(x, y, z, w) {
        if (!z) return this.elements[4] * x + this.elements[5] * y + this.elements[7];
        if (!w) return this.elements[4] * x + this.elements[5] * y + this.elements[6] * z + this.elements[7];
        return this.elements[4] * x + this.elements[5] * y + this.elements[6] * z + this.elements[7] * w
      },
      multZ: function(x, y, z, w) {
        if (!w) return this.elements[8] * x + this.elements[9] * y + this.elements[10] * z + this.elements[11];
        return this.elements[8] * x + this.elements[9] * y + this.elements[10] * z + this.elements[11] * w
      },
      multW: function(x, y, z, w) {
        if (!w) return this.elements[12] * x + this.elements[13] * y + this.elements[14] * z + this.elements[15];
        return this.elements[12] * x + this.elements[13] * y + this.elements[14] * z + this.elements[15] * w
      },
      invert: function() {
        var fA0 = this.elements[0] * this.elements[5] - this.elements[1] * this.elements[4];
        var fA1 = this.elements[0] * this.elements[6] - this.elements[2] * this.elements[4];
        var fA2 = this.elements[0] * this.elements[7] - this.elements[3] * this.elements[4];
        var fA3 = this.elements[1] * this.elements[6] - this.elements[2] * this.elements[5];
        var fA4 = this.elements[1] * this.elements[7] - this.elements[3] * this.elements[5];
        var fA5 = this.elements[2] * this.elements[7] - this.elements[3] * this.elements[6];
        var fB0 = this.elements[8] * this.elements[13] - this.elements[9] * this.elements[12];
        var fB1 = this.elements[8] * this.elements[14] - this.elements[10] * this.elements[12];
        var fB2 = this.elements[8] * this.elements[15] - this.elements[11] * this.elements[12];
        var fB3 = this.elements[9] * this.elements[14] - this.elements[10] * this.elements[13];
        var fB4 = this.elements[9] * this.elements[15] - this.elements[11] * this.elements[13];
        var fB5 = this.elements[10] * this.elements[15] - this.elements[11] * this.elements[14];
        var fDet = fA0 * fB5 - fA1 * fB4 + fA2 * fB3 + fA3 * fB2 - fA4 * fB1 + fA5 * fB0;
        if (Math.abs(fDet) <= 1.0E-9) return false;
        var kInv = [];
        kInv[0] = +this.elements[5] * fB5 - this.elements[6] * fB4 + this.elements[7] * fB3;
        kInv[4] = -this.elements[4] * fB5 + this.elements[6] * fB2 - this.elements[7] * fB1;
        kInv[8] = +this.elements[4] * fB4 - this.elements[5] * fB2 + this.elements[7] * fB0;
        kInv[12] = -this.elements[4] * fB3 + this.elements[5] * fB1 - this.elements[6] * fB0;
        kInv[1] = -this.elements[1] * fB5 + this.elements[2] * fB4 - this.elements[3] * fB3;
        kInv[5] = +this.elements[0] * fB5 - this.elements[2] * fB2 + this.elements[3] * fB1;
        kInv[9] = -this.elements[0] * fB4 + this.elements[1] * fB2 - this.elements[3] * fB0;
        kInv[13] = +this.elements[0] * fB3 - this.elements[1] * fB1 + this.elements[2] * fB0;
        kInv[2] = +this.elements[13] * fA5 - this.elements[14] * fA4 + this.elements[15] * fA3;
        kInv[6] = -this.elements[12] * fA5 + this.elements[14] * fA2 - this.elements[15] * fA1;
        kInv[10] = +this.elements[12] * fA4 - this.elements[13] * fA2 + this.elements[15] * fA0;
        kInv[14] = -this.elements[12] * fA3 + this.elements[13] * fA1 - this.elements[14] * fA0;
        kInv[3] = -this.elements[9] * fA5 + this.elements[10] * fA4 - this.elements[11] * fA3;
        kInv[7] = +this.elements[8] * fA5 - this.elements[10] * fA2 + this.elements[11] * fA1;
        kInv[11] = -this.elements[8] * fA4 + this.elements[9] * fA2 - this.elements[11] * fA0;
        kInv[15] = +this.elements[8] * fA3 - this.elements[9] * fA1 + this.elements[10] * fA0;
        var fInvDet = 1 / fDet;
        kInv[0] *= fInvDet;
        kInv[1] *= fInvDet;
        kInv[2] *= fInvDet;
        kInv[3] *= fInvDet;
        kInv[4] *= fInvDet;
        kInv[5] *= fInvDet;
        kInv[6] *= fInvDet;
        kInv[7] *= fInvDet;
        kInv[8] *= fInvDet;
        kInv[9] *= fInvDet;
        kInv[10] *= fInvDet;
        kInv[11] *= fInvDet;
        kInv[12] *= fInvDet;
        kInv[13] *= fInvDet;
        kInv[14] *= fInvDet;
        kInv[15] *= fInvDet;
        this.elements = kInv.slice();
        return true
      },
      toString: function() {
        var str = "";
        for (var i = 0; i < 15; i++) str += this.elements[i] + ", ";
        str += this.elements[15];
        return str
      },
      print: function() {
        var digits = printMatrixHelper(this.elements);
        var output = "" + p.nfs(this.elements[0], digits, 4) + " " + p.nfs(this.elements[1], digits, 4) + " " + p.nfs(this.elements[2], digits, 4) + " " + p.nfs(this.elements[3], digits, 4) + "\n" + p.nfs(this.elements[4], digits, 4) + " " + p.nfs(this.elements[5], digits, 4) + " " + p.nfs(this.elements[6], digits, 4) + " " + p.nfs(this.elements[7], digits, 4) + "\n" + p.nfs(this.elements[8], digits, 4) + " " + p.nfs(this.elements[9], digits, 4) + " " + p.nfs(this.elements[10], digits, 4) + " " + p.nfs(this.elements[11], digits, 4) + "\n" + p.nfs(this.elements[12], digits, 4) + " " + p.nfs(this.elements[13], digits, 4) + " " + p.nfs(this.elements[14], digits, 4) + " " + p.nfs(this.elements[15], digits, 4) + "\n\n";
        p.println(output)
      },
      invTranslate: function(tx, ty, tz) {
        this.preApply(1, 0, 0, -tx, 0, 1, 0, -ty, 0, 0, 1, -tz, 0, 0, 0, 1)
      },
      invRotateX: function(angle) {
        var c = Math.cos(-angle);
        var s = Math.sin(-angle);
        this.preApply([1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1])
      },
      invRotateY: function(angle) {
        var c = Math.cos(-angle);
        var s = Math.sin(-angle);
        this.preApply([c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1])
      },
      invRotateZ: function(angle) {
        var c = Math.cos(-angle);
        var s = Math.sin(-angle);
        this.preApply([c, -s, 0, 0, s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
      },
      invScale: function(x, y, z) {
        this.preApply([1 / x, 0, 0, 0, 0, 1 / y, 0, 0, 0, 0, 1 / z, 0, 0, 0, 0, 1])
      }
    };
    var PMatrixStack = p.PMatrixStack = function() {
      this.matrixStack = []
    };
    PMatrixStack.prototype.load = function() {
      var tmpMatrix = drawing.$newPMatrix();
      if (arguments.length === 1) tmpMatrix.set(arguments[0]);
      else tmpMatrix.set(arguments);
      this.matrixStack.push(tmpMatrix)
    };
    Drawing2D.prototype.$newPMatrix = function() {
      return new PMatrix2D
    };
    Drawing3D.prototype.$newPMatrix = function() {
      return new PMatrix3D
    };
    PMatrixStack.prototype.push = function() {
      this.matrixStack.push(this.peek())
    };
    PMatrixStack.prototype.pop = function() {
      return this.matrixStack.pop()
    };
    PMatrixStack.prototype.peek = function() {
      var tmpMatrix = drawing.$newPMatrix();
      tmpMatrix.set(this.matrixStack[this.matrixStack.length - 1]);
      return tmpMatrix
    };
    PMatrixStack.prototype.mult = function(matrix) {
      this.matrixStack[this.matrixStack.length - 1].apply(matrix)
    };
    p.split = function(str, delim) {
      return str.split(delim)
    };
    p.splitTokens = function(str, tokens) {
      if (tokens === undef) return str.split(/\s+/g);
      var chars = tokens.split(/()/g),
        buffer = "",
        len = str.length,
        i, c, tokenized = [];
      for (i = 0; i < len; i++) {
        c = str[i];
        if (chars.indexOf(c) > -1) {
          if (buffer !== "") tokenized.push(buffer);
          buffer = ""
        } else buffer += c
      }
      if (buffer !== "") tokenized.push(buffer);
      return tokenized
    };
    p.append = function(array, element) {
      array[array.length] = element;
      return array
    };
    p.concat = function(array1, array2) {
      return array1.concat(array2)
    };
    p.sort = function(array, numElem) {
      var ret = [];
      if (array.length > 0) {
        var elemsToCopy = numElem > 0 ? numElem : array.length;
        for (var i = 0; i < elemsToCopy; i++) ret.push(array[i]);
        if (typeof array[0] === "string") ret.sort();
        else ret.sort(function(a, b) {
          return a - b
        });
        if (numElem > 0) for (var j = ret.length; j < array.length; j++) ret.push(array[j])
      }
      return ret
    };
    p.splice = function(array, value, index) {
      if (value.length === 0) return array;
      if (value instanceof Array) for (var i = 0, j = index; i < value.length; j++, i++) array.splice(j, 0, value[i]);
      else array.splice(index, 0, value);
      return array
    };
    p.subset = function(array, offset, length) {
      var end = length !== undef ? offset + length : array.length;
      return array.slice(offset, end)
    };
    p.join = function(array, seperator) {
      return array.join(seperator)
    };
    p.shorten = function(ary) {
      var newary = [];
      var len = ary.length;
      for (var i = 0; i < len; i++) newary[i] = ary[i];
      newary.pop();
      return newary
    };
    p.expand = function(ary, targetSize) {
      var temp = ary.slice(0),
        newSize = targetSize || ary.length * 2;
      temp.length = newSize;
      return temp
    };
    p.arrayCopy = function() {
      var src, srcPos = 0,
        dest, destPos = 0,
        length;
      if (arguments.length === 2) {
        src = arguments[0];
        dest = arguments[1];
        length = src.length
      } else if (arguments.length === 3) {
        src = arguments[0];
        dest = arguments[1];
        length = arguments[2]
      } else if (arguments.length === 5) {
        src = arguments[0];
        srcPos = arguments[1];
        dest = arguments[2];
        destPos = arguments[3];
        length = arguments[4]
      }
      for (var i = srcPos, j = destPos; i < length + srcPos; i++, j++) if (dest[j] !== undef) dest[j] = src[i];
      else throw "array index out of bounds exception";
    };
    p.reverse = function(array) {
      return array.reverse()
    };
    p.mix = function(a, b, f) {
      return a + ((b - a) * f >> 8)
    };
    p.peg = function(n) {
      return n < 0 ? 0 : n > 255 ? 255 : n
    };
    p.modes = function() {
      var ALPHA_MASK = 4278190080,
        RED_MASK = 16711680,
        GREEN_MASK = 65280,
        BLUE_MASK = 255,
        min = Math.min,
        max = Math.max;

      function applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb) {
        var a = min(((c1 & 4278190080) >>> 24) + f, 255) << 24;
        var r = ar + ((cr - ar) * f >> 8);
        r = (r < 0 ? 0 : r > 255 ? 255 : r) << 16;
        var g = ag + ((cg - ag) * f >> 8);
        g = (g < 0 ? 0 : g > 255 ? 255 : g) << 8;
        var b = ab + ((cb - ab) * f >> 8);
        b = b < 0 ? 0 : b > 255 ? 255 : b;
        return a | r | g | b
      }
      return {
        replace: function(c1, c2) {
          return c2
        },
        blend: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = c1 & RED_MASK,
            ag = c1 & GREEN_MASK,
            ab = c1 & BLUE_MASK,
            br = c2 & RED_MASK,
            bg = c2 & GREEN_MASK,
            bb = c2 & BLUE_MASK;
          return min(((c1 & ALPHA_MASK) >>> 24) + f, 255) << 24 | ar + ((br - ar) * f >> 8) & RED_MASK | ag + ((bg - ag) * f >> 8) & GREEN_MASK | ab + ((bb - ab) * f >> 8) & BLUE_MASK
        },
        add: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24;
          return min(((c1 & ALPHA_MASK) >>> 24) + f, 255) << 24 | min((c1 & RED_MASK) + ((c2 & RED_MASK) >> 8) * f, RED_MASK) & RED_MASK | min((c1 & GREEN_MASK) + ((c2 & GREEN_MASK) >> 8) * f, GREEN_MASK) & GREEN_MASK | min((c1 & BLUE_MASK) + ((c2 & BLUE_MASK) * f >> 8), BLUE_MASK)
        },
        subtract: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24;
          return min(((c1 & ALPHA_MASK) >>> 24) + f, 255) << 24 | max((c1 & RED_MASK) - ((c2 & RED_MASK) >> 8) * f, GREEN_MASK) & RED_MASK | max((c1 & GREEN_MASK) - ((c2 & GREEN_MASK) >> 8) * f, BLUE_MASK) & GREEN_MASK | max((c1 & BLUE_MASK) - ((c2 & BLUE_MASK) * f >> 8), 0)
        },
        lightest: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24;
          return min(((c1 & ALPHA_MASK) >>> 24) + f, 255) << 24 | max(c1 & RED_MASK, ((c2 & RED_MASK) >> 8) * f) & RED_MASK | max(c1 & GREEN_MASK, ((c2 & GREEN_MASK) >> 8) * f) & GREEN_MASK | max(c1 & BLUE_MASK, (c2 & BLUE_MASK) * f >> 8)
        },
        darkest: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = c1 & RED_MASK,
            ag = c1 & GREEN_MASK,
            ab = c1 & BLUE_MASK,
            br = min(c1 & RED_MASK, ((c2 & RED_MASK) >> 8) * f),
            bg = min(c1 & GREEN_MASK, ((c2 & GREEN_MASK) >> 8) * f),
            bb = min(c1 & BLUE_MASK, (c2 & BLUE_MASK) * f >> 8);
          return min(((c1 & ALPHA_MASK) >>> 24) + f, 255) << 24 | ar + ((br - ar) * f >> 8) & RED_MASK | ag + ((bg - ag) * f >> 8) & GREEN_MASK | ab + ((bb - ab) * f >> 8) & BLUE_MASK
        },
        difference: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = ar > br ? ar - br : br - ar,
          cg = ag > bg ? ag - bg : bg - ag,
          cb = ab > bb ? ab - bb : bb - ab;
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        exclusion: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = ar + br - (ar * br >> 7),
            cg = ag + bg - (ag * bg >> 7),
            cb = ab + bb - (ab * bb >> 7);
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        multiply: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = ar * br >> 8,
            cg = ag * bg >> 8,
            cb = ab * bb >> 8;
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        screen: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = 255 - ((255 - ar) * (255 - br) >> 8),
            cg = 255 - ((255 - ag) * (255 - bg) >> 8),
            cb = 255 - ((255 - ab) * (255 - bb) >> 8);
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        hard_light: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = br < 128 ? ar * br >> 7 : 255 - ((255 - ar) * (255 - br) >> 7),
          cg = bg < 128 ? ag * bg >> 7 : 255 - ((255 - ag) * (255 - bg) >> 7),
          cb = bb < 128 ? ab * bb >> 7 : 255 - ((255 - ab) * (255 - bb) >> 7);
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        soft_light: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = (ar * br >> 7) + (ar * ar >> 8) - (ar * ar * br >> 15),
            cg = (ag * bg >> 7) + (ag * ag >> 8) - (ag * ag * bg >> 15),
            cb = (ab * bb >> 7) + (ab * ab >> 8) - (ab * ab * bb >> 15);
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        overlay: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK,
            cr = ar < 128 ? ar * br >> 7 : 255 - ((255 - ar) * (255 - br) >> 7),
          cg = ag < 128 ? ag * bg >> 7 : 255 - ((255 - ag) * (255 - bg) >> 7),
          cb = ab < 128 ? ab * bb >> 7 : 255 - ((255 - ab) * (255 - bb) >> 7);
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        dodge: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK;
          var cr = 255;
          if (br !== 255) {
            cr = (ar << 8) / (255 - br);
            cr = cr < 0 ? 0 : cr > 255 ? 255 : cr
          }
          var cg = 255;
          if (bg !== 255) {
            cg = (ag << 8) / (255 - bg);
            cg = cg < 0 ? 0 : cg > 255 ? 255 : cg
          }
          var cb = 255;
          if (bb !== 255) {
            cb = (ab << 8) / (255 - bb);
            cb = cb < 0 ? 0 : cb > 255 ? 255 : cb
          }
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        },
        burn: function(c1, c2) {
          var f = (c2 & ALPHA_MASK) >>> 24,
            ar = (c1 & RED_MASK) >> 16,
            ag = (c1 & GREEN_MASK) >> 8,
            ab = c1 & BLUE_MASK,
            br = (c2 & RED_MASK) >> 16,
            bg = (c2 & GREEN_MASK) >> 8,
            bb = c2 & BLUE_MASK;
          var cr = 0;
          if (br !== 0) {
            cr = (255 - ar << 8) / br;
            cr = 255 - (cr < 0 ? 0 : cr > 255 ? 255 : cr)
          }
          var cg = 0;
          if (bg !== 0) {
            cg = (255 - ag << 8) / bg;
            cg = 255 - (cg < 0 ? 0 : cg > 255 ? 255 : cg)
          }
          var cb = 0;
          if (bb !== 0) {
            cb = (255 - ab << 8) / bb;
            cb = 255 - (cb < 0 ? 0 : cb > 255 ? 255 : cb)
          }
          return applyMode(c1, f, ar, ag, ab, br, bg, bb, cr, cg, cb)
        }
      }
    }();

    function color$4(aValue1, aValue2, aValue3, aValue4) {
      var r, g, b, a;
      if (curColorMode === 3) {
        var rgb = p.color.toRGB(aValue1, aValue2, aValue3);
        r = rgb[0];
        g = rgb[1];
        b = rgb[2]
      } else {
        r = Math.round(255 * (aValue1 / colorModeX));
        g = Math.round(255 * (aValue2 / colorModeY));
        b = Math.round(255 * (aValue3 / colorModeZ))
      }
      a = Math.round(255 * (aValue4 / colorModeA));
      r = r < 0 ? 0 : r;
      g = g < 0 ? 0 : g;
      b = b < 0 ? 0 : b;
      a = a < 0 ? 0 : a;
      r = r > 255 ? 255 : r;
      g = g > 255 ? 255 : g;
      b = b > 255 ? 255 : b;
      a = a > 255 ? 255 : a;
      return a << 24 & 4278190080 | r << 16 & 16711680 | g << 8 & 65280 | b & 255
    }
    function color$2(aValue1, aValue2) {
      var a;
      if (aValue1 & 4278190080) {
        a = Math.round(255 * (aValue2 / colorModeA));
        a = a > 255 ? 255 : a;
        a = a < 0 ? 0 : a;
        return aValue1 - (aValue1 & 4278190080) + (a << 24 & 4278190080)
      }
      if (curColorMode === 1) return color$4(aValue1, aValue1, aValue1, aValue2);
      if (curColorMode === 3) return color$4(0, 0, aValue1 / colorModeX * colorModeZ, aValue2)
    }
    function color$1(aValue1) {
      if (aValue1 <= colorModeX && aValue1 >= 0) {
        if (curColorMode === 1) return color$4(aValue1, aValue1, aValue1, colorModeA);
        if (curColorMode === 3) return color$4(0, 0, aValue1 / colorModeX * colorModeZ, colorModeA)
      }
      if (aValue1) {
        if (aValue1 > 2147483647) aValue1 -= 4294967296;
        return aValue1
      }
    }
    p.color = function(aValue1, aValue2, aValue3, aValue4) {
      if (aValue1 !== undef && aValue2 !== undef && aValue3 !== undef && aValue4 !== undef) return color$4(aValue1, aValue2, aValue3, aValue4);
      if (aValue1 !== undef && aValue2 !== undef && aValue3 !== undef) return color$4(aValue1, aValue2, aValue3, colorModeA);
      if (aValue1 !== undef && aValue2 !== undef) return color$2(aValue1, aValue2);
      if (typeof aValue1 === "number") return color$1(aValue1);
      return color$4(colorModeX, colorModeY, colorModeZ, colorModeA)
    };
    p.color.toString = function(colorInt) {
      return "rgba(" + ((colorInt >> 16) & 255) + "," + ((colorInt >> 8) & 255) + "," + (colorInt & 255) + "," + ((colorInt >> 24) & 255) / 255 + ")"
    };
    p.color.toInt = function(r, g, b, a) {
      return a << 24 & 4278190080 | r << 16 & 16711680 | g << 8 & 65280 | b & 255
    };
    p.color.toArray = function(colorInt) {
      return [(colorInt >> 16) & 255, (colorInt >> 8) & 255, colorInt & 255, (colorInt >> 24) & 255]
    };
    p.color.toGLArray = function(colorInt) {
      return [((colorInt & 16711680) >>> 16) / 255, ((colorInt >> 8) & 255) / 255, (colorInt & 255) / 255, ((colorInt >> 24) & 255) / 255]
    };
    p.color.toRGB = function(h, s, b) {
      h = h > colorModeX ? colorModeX : h;
      s = s > colorModeY ? colorModeY : s;
      b = b > colorModeZ ? colorModeZ : b;
      h = h / colorModeX * 360;
      s = s / colorModeY * 100;
      b = b / colorModeZ * 100;
      var br = Math.round(b / 100 * 255);
      if (s === 0) return [br, br, br];
      var hue = h % 360;
      var f = hue % 60;
      var p = Math.round(b * (100 - s) / 1E4 * 255);
      var q = Math.round(b * (6E3 - s * f) / 6E5 * 255);
      var t = Math.round(b * (6E3 - s * (60 - f)) / 6E5 * 255);
      switch (Math.floor(hue / 60)) {
      case 0:
        return [br, t, p];
      case 1:
        return [q, br, p];
      case 2:
        return [p, br, t];
      case 3:
        return [p, q, br];
      case 4:
        return [t, p, br];
      case 5:
        return [br, p, q]
      }
    };

    function colorToHSB(colorInt) {
      var red, green, blue;
      red = ((colorInt >> 16) & 255) / 255;
      green = ((colorInt >> 8) & 255) / 255;
      blue = (colorInt & 255) / 255;
      var max = p.max(p.max(red, green), blue),
        min = p.min(p.min(red, green), blue),
        hue, saturation;
      if (min === max) return [0, 0, max * colorModeZ];
      saturation = (max - min) / max;
      if (red === max) hue = (green - blue) / (max - min);
      else if (green === max) hue = 2 + (blue - red) / (max - min);
      else hue = 4 + (red - green) / (max - min);
      hue /= 6;
      if (hue < 0) hue += 1;
      else if (hue > 1) hue -= 1;
      return [hue * colorModeX, saturation * colorModeY, max * colorModeZ]
    }
    p.brightness = function(colInt) {
      return colorToHSB(colInt)[2]
    };
    p.saturation = function(colInt) {
      return colorToHSB(colInt)[1]
    };
    p.hue = function(colInt) {
      return colorToHSB(colInt)[0]
    };
    p.red = function(aColor) {
      return ((aColor >> 16) & 255) / 255 * colorModeX
    };
    p.green = function(aColor) {
      return ((aColor & 65280) >>> 8) / 255 * colorModeY
    };
    p.blue = function(aColor) {
      return (aColor & 255) / 255 * colorModeZ
    };
    p.alpha = function(aColor) {
      return ((aColor >> 24) & 255) / 255 * colorModeA
    };
    p.lerpColor = function(c1, c2, amt) {
      var r, g, b, a, r1, g1, b1, a1, r2, g2, b2, a2;
      var hsb1, hsb2, rgb, h, s;
      var colorBits1 = p.color(c1);
      var colorBits2 = p.color(c2);
      if (curColorMode === 3) {
        hsb1 = colorToHSB(colorBits1);
        a1 = ((colorBits1 >> 24) & 255) / colorModeA;
        hsb2 = colorToHSB(colorBits2);
        a2 = ((colorBits2 & 4278190080) >>> 24) / colorModeA;
        h = p.lerp(hsb1[0], hsb2[0], amt);
        s = p.lerp(hsb1[1], hsb2[1], amt);
        b = p.lerp(hsb1[2], hsb2[2], amt);
        rgb = p.color.toRGB(h, s, b);
        a = p.lerp(a1, a2, amt) * colorModeA;
        return a << 24 & 4278190080 | (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255
      }
      r1 = (colorBits1 >> 16) & 255;
      g1 = (colorBits1 >> 8) & 255;
      b1 = colorBits1 & 255;
      a1 = ((colorBits1 >> 24) & 255) / colorModeA;
      r2 = (colorBits2 & 16711680) >>> 16;
      g2 = (colorBits2 >> 8) & 255;
      b2 = colorBits2 & 255;
      a2 = ((colorBits2 >> 24) & 255) / colorModeA;
      r = p.lerp(r1, r2, amt) | 0;
      g = p.lerp(g1, g2, amt) | 0;
      b = p.lerp(b1, b2, amt) | 0;
      a = p.lerp(a1, a2, amt) * colorModeA;
      return a << 24 & 4278190080 | r << 16 & 16711680 | g << 8 & 65280 | b & 255
    };
    p.colorMode = function() {
      curColorMode = arguments[0];
      if (arguments.length > 1) {
        colorModeX = arguments[1];
        colorModeY = arguments[2] || arguments[1];
        colorModeZ = arguments[3] || arguments[1];
        colorModeA = arguments[4] || arguments[1]
      }
    };
    p.blendColor = function(c1, c2, mode) {
      if (mode === 0) return p.modes.replace(c1, c2);
      else if (mode === 1) return p.modes.blend(c1, c2);
      else if (mode === 2) return p.modes.add(c1, c2);
      else if (mode === 4) return p.modes.subtract(c1, c2);
      else if (mode === 8) return p.modes.lightest(c1, c2);
      else if (mode === 16) return p.modes.darkest(c1, c2);
      else if (mode === 32) return p.modes.difference(c1, c2);
      else if (mode === 64) return p.modes.exclusion(c1, c2);
      else if (mode === 128) return p.modes.multiply(c1, c2);
      else if (mode === 256) return p.modes.screen(c1, c2);
      else if (mode === 1024) return p.modes.hard_light(c1, c2);
      else if (mode === 2048) return p.modes.soft_light(c1, c2);
      else if (mode === 512) return p.modes.overlay(c1, c2);
      else if (mode === 4096) return p.modes.dodge(c1, c2);
      else if (mode === 8192) return p.modes.burn(c1, c2)
    };

    function saveContext() {
      curContext.save()
    }
    function restoreContext() {
      curContext.restore();
      isStrokeDirty = true;
      isFillDirty = true
    }
    p.printMatrix = function() {
      modelView.print()
    };
    Drawing2D.prototype.translate = function(x, y) {
      modelView.translate(x, y);
      modelViewInv.invTranslate(x, y);
      curContext.translate(x, y)
    };
    Drawing3D.prototype.translate = function(x, y, z) {
      modelView.translate(x, y, z);
      modelViewInv.invTranslate(x, y, z)
    };
    Drawing2D.prototype.scale = function(x, y) {
      modelView.scale(x, y);
      modelViewInv.invScale(x, y);
      curContext.scale(x, y || x)
    };
    Drawing3D.prototype.scale = function(x, y, z) {
      modelView.scale(x, y, z);
      modelViewInv.invScale(x, y, z)
    };
    Drawing2D.prototype.transform = function(pmatrix) {
      var e = pmatrix.array();
      curContext.transform(e[0], e[3], e[1], e[4], e[2], e[5])
    };
    Drawing3D.prototype.transformm = function(pmatrix3d) {
      throw "p.transform is currently not supported in 3D mode";
    };
    Drawing2D.prototype.pushMatrix = function() {
      userMatrixStack.load(modelView);
      userReverseMatrixStack.load(modelViewInv);
      saveContext()
    };
    Drawing3D.prototype.pushMatrix = function() {
      userMatrixStack.load(modelView);
      userReverseMatrixStack.load(modelViewInv)
    };
    Drawing2D.prototype.popMatrix = function() {
      modelView.set(userMatrixStack.pop());
      modelViewInv.set(userReverseMatrixStack.pop());
      restoreContext()
    };
    Drawing3D.prototype.popMatrix = function() {
      modelView.set(userMatrixStack.pop());
      modelViewInv.set(userReverseMatrixStack.pop())
    };
    Drawing2D.prototype.resetMatrix = function() {
      modelView.reset();
      modelViewInv.reset();
      curContext.setTransform(1, 0, 0, 1, 0, 0)
    };
    Drawing3D.prototype.resetMatrix = function() {
      modelView.reset();
      modelViewInv.reset()
    };
    DrawingShared.prototype.applyMatrix = function() {
      var a = arguments;
      modelView.apply(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
      modelViewInv.invApply(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15])
    };
    Drawing2D.prototype.applyMatrix = function() {
      var a = arguments;
      for (var cnt = a.length; cnt < 16; cnt++) a[cnt] = 0;
      a[10] = a[15] = 1;
      DrawingShared.prototype.applyMatrix.apply(this, a)
    };
    p.rotateX = function(angleInRadians) {
      modelView.rotateX(angleInRadians);
      modelViewInv.invRotateX(angleInRadians)
    };
    Drawing2D.prototype.rotateZ = function() {
      throw "rotateZ() is not supported in 2D mode. Use rotate(float) instead.";
    };
    Drawing3D.prototype.rotateZ = function(angleInRadians) {
      modelView.rotateZ(angleInRadians);
      modelViewInv.invRotateZ(angleInRadians)
    };
    p.rotateY = function(angleInRadians) {
      modelView.rotateY(angleInRadians);
      modelViewInv.invRotateY(angleInRadians)
    };
    Drawing2D.prototype.rotate = function(angleInRadians) {
      modelView.rotateZ(angleInRadians);
      modelViewInv.invRotateZ(angleInRadians);
      curContext.rotate(angleInRadians)
    };
    Drawing3D.prototype.rotate = function(angleInRadians) {
      p.rotateZ(angleInRadians)
    };
    Drawing2D.prototype.shearX = function(angleInRadians) {
      modelView.shearX(angleInRadians);
      curContext.transform(1, 0, angleInRadians, 1, 0, 0)
    };
    Drawing3D.prototype.shearX = function(angleInRadians) {
      modelView.shearX(angleInRadians)
    };
    Drawing2D.prototype.shearY = function(angleInRadians) {
      modelView.shearY(angleInRadians);
      curContext.transform(1, angleInRadians, 0, 1, 0, 0)
    };
    Drawing3D.prototype.shearY = function(angleInRadians) {
      modelView.shearY(angleInRadians)
    };
    p.pushStyle = function() {
      saveContext();
      p.pushMatrix();
      var newState = {
        "doFill": doFill,
        "currentFillColor": currentFillColor,
        "doStroke": doStroke,
        "currentStrokeColor": currentStrokeColor,
        "curTint": curTint,
        "curRectMode": curRectMode,
        "curColorMode": curColorMode,
        "colorModeX": colorModeX,
        "colorModeZ": colorModeZ,
        "colorModeY": colorModeY,
        "colorModeA": colorModeA,
        "curTextFont": curTextFont,
        "horizontalTextAlignment": horizontalTextAlignment,
        "verticalTextAlignment": verticalTextAlignment,
        "textMode": textMode,
        "curFontName": curFontName,
        "curTextSize": curTextSize,
        "curTextAscent": curTextAscent,
        "curTextDescent": curTextDescent,
        "curTextLeading": curTextLeading
      };
      styleArray.push(newState)
    };
    p.popStyle = function() {
      var oldState = styleArray.pop();
      if (oldState) {
        restoreContext();
        p.popMatrix();
        doFill = oldState.doFill;
        currentFillColor = oldState.currentFillColor;
        doStroke = oldState.doStroke;
        currentStrokeColor = oldState.currentStrokeColor;
        curTint = oldState.curTint;
        curRectMode = oldState.curRectMode;
        curColorMode = oldState.curColorMode;
        colorModeX = oldState.colorModeX;
        colorModeZ = oldState.colorModeZ;
        colorModeY = oldState.colorModeY;
        colorModeA = oldState.colorModeA;
        curTextFont = oldState.curTextFont;
        curFontName = oldState.curFontName;
        curTextSize = oldState.curTextSize;
        horizontalTextAlignment = oldState.horizontalTextAlignment;
        verticalTextAlignment = oldState.verticalTextAlignment;
        textMode = oldState.textMode;
        curTextAscent = oldState.curTextAscent;
        curTextDescent = oldState.curTextDescent;
        curTextLeading = oldState.curTextLeading
      } else throw "Too many popStyle() without enough pushStyle()";
    };
    p.year = function() {
      return (new Date).getFullYear()
    };
    p.month = function() {
      return (new Date).getMonth() + 1
    };
    p.day = function() {
      return (new Date).getDate()
    };
    p.hour = function() {
      return (new Date).getHours()
    };
    p.minute = function() {
      return (new Date).getMinutes()
    };
    p.second = function() {
      return (new Date).getSeconds()
    };
    p.millis = function() {
      return Date.now() - start
    };

    function redrawHelper() {
      var sec = (Date.now() - timeSinceLastFPS) / 1E3;
      framesSinceLastFPS++;
      var fps = framesSinceLastFPS / sec;
      if (sec > 0.5) {
        timeSinceLastFPS = Date.now();
        framesSinceLastFPS = 0;
        p.__frameRate = fps
      }
      p.frameCount++
    }
    Drawing2D.prototype.redraw = function() {
      redrawHelper();
      curContext.lineWidth = lineWidth;
      var pmouseXLastEvent = p.pmouseX,
        pmouseYLastEvent = p.pmouseY;
      p.pmouseX = pmouseXLastFrame;
      p.pmouseY = pmouseYLastFrame;
      saveContext();
      p.draw();
      restoreContext();
      pmouseXLastFrame = p.mouseX;
      pmouseYLastFrame = p.mouseY;
      p.pmouseX = pmouseXLastEvent;
      p.pmouseY = pmouseYLastEvent
    };
    Drawing3D.prototype.redraw = function() {
      redrawHelper();
      var pmouseXLastEvent = p.pmouseX,
        pmouseYLastEvent = p.pmouseY;
      p.pmouseX = pmouseXLastFrame;
      p.pmouseY = pmouseYLastFrame;
      curContext.clear(curContext.DEPTH_BUFFER_BIT);
      curContextCache = {
        attributes: {},
        locations: {}
      };
      p.noLights();
      p.lightFalloff(1, 0, 0);
      p.shininess(1);
      p.ambient(255, 255, 255);
      p.specular(0, 0, 0);
      p.emissive(0, 0, 0);
      p.camera();
      p.draw();
      pmouseXLastFrame = p.mouseX;
      pmouseYLastFrame = p.mouseY;
      p.pmouseX = pmouseXLastEvent;
      p.pmouseY = pmouseYLastEvent
    };
    p.noLoop = function() {
      doLoop = false;
      loopStarted = false;
      clearInterval(looping);
      curSketch.onPause()
    };
    p.loop = function() {
      if (loopStarted) return;
      timeSinceLastFPS = Date.now();
      framesSinceLastFPS = 0;
      looping = window.setInterval(function() {
        try {
          curSketch.onFrameStart();
          p.redraw();
          curSketch.onFrameEnd()
        } catch(e_loop) {
          window.clearInterval(looping);
          throw e_loop;
        }
      },
      curMsPerFrame);
      doLoop = true;
      loopStarted = true;
      curSketch.onLoop()
    };
    p.frameRate = function(aRate) {
      curFrameRate = aRate;
      curMsPerFrame = 1E3 / curFrameRate;
      if (doLoop) {
        p.noLoop();
        p.loop()
      }
    };
    var eventHandlers = [];

    function attachEventHandler(elem, type, fn) {
      if (elem.addEventListener) elem.addEventListener(type, fn, false);
      else elem.attachEvent("on" + type, fn);
      eventHandlers.push({
        elem: elem,
        type: type,
        fn: fn
      })
    }
    function detachEventHandler(eventHandler) {
      var elem = eventHandler.elem,
        type = eventHandler.type,
        fn = eventHandler.fn;
      if (elem.removeEventListener) elem.removeEventListener(type, fn, false);
      else if (elem.detachEvent) elem.detachEvent("on" + type, fn)
    }
    p.exit = function() {
      window.clearInterval(looping);
      removeInstance(p.externals.canvas.id);
      delete curElement.onmousedown;
      for (var lib in Processing.lib) if (Processing.lib.hasOwnProperty(lib)) if (Processing.lib[lib].hasOwnProperty("detach")) Processing.lib[lib].detach(p);
      var i = eventHandlers.length;
      while (i--) detachEventHandler(eventHandlers[i]);
      curSketch.onExit()
    };
    p.cursor = function() {
      if (arguments.length > 1 || arguments.length === 1 && arguments[0] instanceof p.PImage) {
        var image = arguments[0],
          x, y;
        if (arguments.length >= 3) {
          x = arguments[1];
          y = arguments[2];
          if (x < 0 || y < 0 || y >= image.height || x >= image.width) throw "x and y must be non-negative and less than the dimensions of the image";
        } else {
          x = image.width >>> 1;
          y = image.height >>> 1
        }
        var imageDataURL = image.toDataURL();
        var style = 'url("' + imageDataURL + '") ' + x + " " + y + ", default";
        curCursor = curElement.style.cursor = style
      } else if (arguments.length === 1) {
        var mode = arguments[0];
        curCursor = curElement.style.cursor = mode
      } else curCursor = curElement.style.cursor = oldCursor
    };
    p.noCursor = function() {
      curCursor = curElement.style.cursor = PConstants.NOCURSOR
    };
    p.link = function(href, target) {
      if (target !== undef) window.open(href, target);
      else window.location = href
    };
    p.beginDraw = nop;
    p.endDraw = nop;
    Drawing2D.prototype.toImageData = function(x, y, w, h) {
      x = x !== undef ? x : 0;
      y = y !== undef ? y : 0;
      w = w !== undef ? w : p.width;
      h = h !== undef ? h : p.height;
      return curContext.getImageData(x, y, w, h)
    };
    Drawing3D.prototype.toImageData = function(x, y, w, h) {
      x = x !== undef ? x : 0;
      y = y !== undef ? y : 0;
      w = w !== undef ? w : p.width;
      h = h !== undef ? h : p.height;
      var c = document.createElement("canvas"),
        ctx = c.getContext("2d"),
        obj = ctx.createImageData(w, h),
        uBuff = new Uint8Array(w * h * 4);
      curContext.readPixels(x, y, w, h, curContext.RGBA, curContext.UNSIGNED_BYTE, uBuff);
      for (var i = 0, ul = uBuff.length, obj_data = obj.data; i < ul; i++) obj_data[i] = uBuff[(h - 1 - Math.floor(i / 4 / w)) * w * 4 + i % (w * 4)];
      return obj
    };
    p.status = function(text) {
      window.status = text
    };
    p.binary = function(num, numBits) {
      var bit;
      if (numBits > 0) bit = numBits;
      else if (num instanceof Char) {
        bit = 16;
        num |= 0
      } else {
        bit = 32;
        while (bit > 1 && !(num >>> bit - 1 & 1)) bit--
      }
      var result = "";
      while (bit > 0) result += num >>> --bit & 1 ? "1" : "0";
      return result
    };
    p.unbinary = function(binaryString) {
      var i = binaryString.length - 1,
        mask = 1,
        result = 0;
      while (i >= 0) {
        var ch = binaryString[i--];
        if (ch !== "0" && ch !== "1") throw "the value passed into unbinary was not an 8 bit binary number";
        if (ch === "1") result += mask;
        mask <<= 1
      }
      return result
    };

    function nfCoreScalar(value, plus, minus, leftDigits, rightDigits, group) {
      var sign = value < 0 ? minus : plus;
      var autoDetectDecimals = rightDigits === 0;
      var rightDigitsOfDefault = rightDigits === undef || rightDigits < 0 ? 0 : rightDigits;
      var absValue = Math.abs(value);
      if (autoDetectDecimals) {
        rightDigitsOfDefault = 1;
        absValue *= 10;
        while (Math.abs(Math.round(absValue) - absValue) > 1.0E-6 && rightDigitsOfDefault < 7) {
          ++rightDigitsOfDefault;
          absValue *= 10
        }
      } else if (rightDigitsOfDefault !== 0) absValue *= Math.pow(10, rightDigitsOfDefault);
      var number, doubled = absValue * 2;
      if (Math.floor(absValue) === absValue) number = absValue;
      else if (Math.floor(doubled) === doubled) {
        var floored = Math.floor(absValue);
        number = floored + floored % 2
      } else number = Math.round(absValue);
      var buffer = "";
      var totalDigits = leftDigits + rightDigitsOfDefault;
      while (totalDigits > 0 || number > 0) {
        totalDigits--;
        buffer = "" + number % 10 + buffer;
        number = Math.floor(number / 10)
      }
      if (group !== undef) {
        var i = buffer.length - 3 - rightDigitsOfDefault;
        while (i > 0) {
          buffer = buffer.substring(0, i) + group + buffer.substring(i);
          i -= 3
        }
      }
      if (rightDigitsOfDefault > 0) return sign + buffer.substring(0, buffer.length - rightDigitsOfDefault) + "." + buffer.substring(buffer.length - rightDigitsOfDefault, buffer.length);
      return sign + buffer
    }
    function nfCore(value, plus, minus, leftDigits, rightDigits, group) {
      if (value instanceof Array) {
        var arr = [];
        for (var i = 0, len = value.length; i < len; i++) arr.push(nfCoreScalar(value[i], plus, minus, leftDigits, rightDigits, group));
        return arr
      }
      return nfCoreScalar(value, plus, minus, leftDigits, rightDigits, group)
    }
    p.nf = function(value, leftDigits, rightDigits) {
      return nfCore(value, "", "-", leftDigits, rightDigits)
    };
    p.nfs = function(value, leftDigits, rightDigits) {
      return nfCore(value, " ", "-", leftDigits, rightDigits)
    };
    p.nfp = function(value, leftDigits, rightDigits) {
      return nfCore(value, "+", "-", leftDigits, rightDigits)
    };
    p.nfc = function(value, leftDigits, rightDigits) {
      return nfCore(value, "", "-", leftDigits, rightDigits, ",")
    };
    var decimalToHex = function(d, padding) {
      padding = padding === undef || padding === null ? padding = 8 : padding;
      if (d < 0) d = 4294967295 + d + 1;
      var hex = Number(d).toString(16).toUpperCase();
      while (hex.length < padding) hex = "0" + hex;
      if (hex.length >= padding) hex = hex.substring(hex.length - padding, hex.length);
      return hex
    };
    p.hex = function(value, len) {
      if (arguments.length === 1) if (value instanceof Char) len = 4;
      else len = 8;
      return decimalToHex(value, len)
    };

    function unhexScalar(hex) {
      var value = parseInt("0x" + hex, 16);
      if (value > 2147483647) value -= 4294967296;
      return value
    }
    p.unhex = function(hex) {
      if (hex instanceof Array) {
        var arr = [];
        for (var i = 0; i < hex.length; i++) arr.push(unhexScalar(hex[i]));
        return arr
      }
      return unhexScalar(hex)
    };
    p.loadStrings = function(filename) {
      if (localStorage[filename]) return localStorage[filename].split("\n");
      var filecontent = ajax(filename);
      if (typeof filecontent !== "string" || filecontent === "") return [];
      filecontent = filecontent.replace(/(\r\n?)/g, "\n").replace(/\n$/, "");
      return filecontent.split("\n")
    };
    p.saveStrings = function(filename, strings) {
      localStorage[filename] = strings.join("\n")
    };
    p.loadBytes = function(url) {
      var string = ajax(url);
      var ret = [];
      for (var i = 0; i < string.length; i++) ret.push(string.charCodeAt(i));
      return ret
    };

    function removeFirstArgument(args) {
      return Array.prototype.slice.call(args, 1)
    }
    p.matchAll = function(aString, aRegExp) {
      var results = [],
        latest;
      var regexp = new RegExp(aRegExp, "g");
      while ((latest = regexp.exec(aString)) !== null) {
        results.push(latest);
        if (latest[0].length === 0)++regexp.lastIndex
      }
      return results.length > 0 ? results : null
    };
    p.__contains = function(subject, subStr) {
      if (typeof subject !== "string") return subject.contains.apply(subject, removeFirstArgument(arguments));
      return subject !== null && subStr !== null && typeof subStr === "string" && subject.indexOf(subStr) > -1
    };
    p.__replaceAll = function(subject, regex, replacement) {
      if (typeof subject !== "string") return subject.replaceAll.apply(subject, removeFirstArgument(arguments));
      return subject.replace(new RegExp(regex, "g"), replacement)
    };
    p.__replaceFirst = function(subject, regex, replacement) {
      if (typeof subject !== "string") return subject.replaceFirst.apply(subject, removeFirstArgument(arguments));
      return subject.replace(new RegExp(regex, ""), replacement)
    };
    p.__replace = function(subject, what, replacement) {
      if (typeof subject !== "string") return subject.replace.apply(subject, removeFirstArgument(arguments));
      if (what instanceof RegExp) return subject.replace(what, replacement);
      if (typeof what !== "string") what = what.toString();
      if (what === "") return subject;
      var i = subject.indexOf(what);
      if (i < 0) return subject;
      var j = 0,
        result = "";
      do {
        result += subject.substring(j, i) + replacement;
        j = i + what.length
      } while ((i = subject.indexOf(what, j)) >= 0);
      return result + subject.substring(j)
    };
    p.__equals = function(subject, other) {
      if (subject.equals instanceof
      Function) return subject.equals.apply(subject, removeFirstArgument(arguments));
      return subject.valueOf() === other.valueOf()
    };
    p.__equalsIgnoreCase = function(subject, other) {
      if (typeof subject !== "string") return subject.equalsIgnoreCase.apply(subject, removeFirstArgument(arguments));
      return subject.toLowerCase() === other.toLowerCase()
    };
    p.__toCharArray = function(subject) {
      if (typeof subject !== "string") return subject.toCharArray.apply(subject, removeFirstArgument(arguments));
      var chars = [];
      for (var i = 0, len = subject.length; i < len; ++i) chars[i] = new Char(subject.charAt(i));
      return chars
    };
    p.__split = function(subject, regex, limit) {
      if (typeof subject !== "string") return subject.split.apply(subject, removeFirstArgument(arguments));
      var pattern = new RegExp(regex);
      if (limit === undef || limit < 1) return subject.split(pattern);
      var result = [],
        currSubject = subject,
        pos;
      while ((pos = currSubject.search(pattern)) !== -1 && result.length < limit - 1) {
        var match = pattern.exec(currSubject).toString();
        result.push(currSubject.substring(0, pos));
        currSubject = currSubject.substring(pos + match.length)
      }
      if (pos !== -1 || currSubject !== "") result.push(currSubject);
      return result
    };
    p.__codePointAt = function(subject, idx) {
      var code = subject.charCodeAt(idx),
        hi, low;
      if (55296 <= code && code <= 56319) {
        hi = code;
        low = subject.charCodeAt(idx + 1);
        return (hi - 55296) * 1024 + (low - 56320) + 65536
      }
      return code
    };
    p.match = function(str, regexp) {
      return str.match(regexp)
    };
    p.__matches = function(str, regexp) {
      return (new RegExp(regexp)).test(str)
    };
    p.__startsWith = function(subject, prefix, toffset) {
      if (typeof subject !== "string") return subject.startsWith.apply(subject, removeFirstArgument(arguments));
      toffset = toffset || 0;
      if (toffset < 0 || toffset > subject.length) return false;
      return prefix === "" || prefix === subject ? true : subject.indexOf(prefix) === toffset
    };
    p.__endsWith = function(subject, suffix) {
      if (typeof subject !== "string") return subject.endsWith.apply(subject, removeFirstArgument(arguments));
      var suffixLen = suffix ? suffix.length : 0;
      return suffix === "" || suffix === subject ? true : subject.indexOf(suffix) === subject.length - suffixLen
    };
    p.__hashCode = function(subject) {
      if (subject.hashCode instanceof
      Function) return subject.hashCode.apply(subject, removeFirstArgument(arguments));
      return virtHashCode(subject)
    };
    p.__printStackTrace = function(subject) {
      p.println("Exception: " + subject.toString())
    };
    var logBuffer = [];
    p.println = function(message) {
      var bufferLen = logBuffer.length;
      if (bufferLen) {
        Processing.logger.log(logBuffer.join(""));
        logBuffer.length = 0
      }
      if (arguments.length === 0 && bufferLen === 0) Processing.logger.log("");
      else if (arguments.length !== 0) Processing.logger.log(message)
    };
    p.print = function(message) {
      logBuffer.push(message)
    };
    p.str = function(val) {
      if (val instanceof Array) {
        var arr = [];
        for (var i = 0; i < val.length; i++) arr.push(val[i].toString() + "");
        return arr
      }
      return val.toString() + ""
    };
    p.trim = function(str) {
      if (str instanceof Array) {
        var arr = [];
        for (var i = 0; i < str.length; i++) arr.push(str[i].replace(/^\s*/, "").replace(/\s*$/, "").replace(/\r*$/, ""));
        return arr
      }
      return str.replace(/^\s*/, "").replace(/\s*$/, "").replace(/\r*$/, "")
    };

    function booleanScalar(val) {
      if (typeof val === "number") return val !== 0;
      if (typeof val === "boolean") return val;
      if (typeof val === "string") return val.toLowerCase() === "true";
      if (val instanceof Char) return val.code === 49 || val.code === 84 || val.code === 116
    }
    p.parseBoolean = function(val) {
      if (val instanceof Array) {
        var ret = [];
        for (var i = 0; i < val.length; i++) ret.push(booleanScalar(val[i]));
        return ret
      }
      return booleanScalar(val)
    };
    p.parseByte = function(what) {
      if (what instanceof Array) {
        var bytes = [];
        for (var i = 0; i < what.length; i++) bytes.push(0 - (what[i] & 128) | what[i] & 127);
        return bytes
      }
      return 0 - (what & 128) | what & 127
    };
    p.parseChar = function(key) {
      if (typeof key === "number") return new Char(String.fromCharCode(key & 65535));
      if (key instanceof Array) {
        var ret = [];
        for (var i = 0; i < key.length; i++) ret.push(new Char(String.fromCharCode(key[i] & 65535)));
        return ret
      }
      throw "char() may receive only one argument of type int, byte, int[], or byte[].";
    };

    function floatScalar(val) {
      if (typeof val === "number") return val;
      if (typeof val === "boolean") return val ? 1 : 0;
      if (typeof val === "string") return parseFloat(val);
      if (val instanceof Char) return val.code
    }
    p.parseFloat = function(val) {
      if (val instanceof
      Array) {
        var ret = [];
        for (var i = 0; i < val.length; i++) ret.push(floatScalar(val[i]));
        return ret
      }
      return floatScalar(val)
    };

    function intScalar(val, radix) {
      if (typeof val === "number") return val & 4294967295;
      if (typeof val === "boolean") return val ? 1 : 0;
      if (typeof val === "string") {
        var number = parseInt(val, radix || 10);
        return number & 4294967295
      }
      if (val instanceof Char) return val.code
    }
    p.parseInt = function(val, radix) {
      if (val instanceof Array) {
        var ret = [];
        for (var i = 0; i < val.length; i++) if (typeof val[i] === "string" && !/^\s*[+\-]?\d+\s*$/.test(val[i])) ret.push(0);
        else ret.push(intScalar(val[i], radix));
        return ret
      }
      return intScalar(val, radix)
    };
    p.__int_cast = function(val) {
      return 0 | val
    };
    p.__instanceof = function(obj, type) {
      if (typeof type !== "function") throw "Function is expected as type argument for instanceof operator";
      if (typeof obj === "string") return type === Object || type === String;
      if (obj instanceof type) return true;
      if (typeof obj !== "object" || obj === null) return false;
      var objType = obj.constructor;
      if (type.$isInterface) {
        var interfaces = [];
        while (objType) {
          if (objType.$interfaces) interfaces = interfaces.concat(objType.$interfaces);
          objType = objType.$base
        }
        while (interfaces.length > 0) {
          var i = interfaces.shift();
          if (i === type) return true;
          if (i.$interfaces) interfaces = interfaces.concat(i.$interfaces)
        }
        return false
      }
      while (objType.hasOwnProperty("$base")) {
        objType = objType.$base;
        if (objType === type) return true
      }
      return false
    };
    p.abs = Math.abs;
    p.ceil = Math.ceil;
    p.constrain = function(aNumber, aMin, aMax) {
      return aNumber > aMax ? aMax : aNumber < aMin ? aMin : aNumber
    };
    p.dist = function() {
      var dx, dy, dz;
      if (arguments.length === 4) {
        dx = arguments[0] - arguments[2];
        dy = arguments[1] - arguments[3];
        return Math.sqrt(dx * dx + dy * dy)
      }
      if (arguments.length === 6) {
        dx = arguments[0] - arguments[3];
        dy = arguments[1] - arguments[4];
        dz = arguments[2] - arguments[5];
        return Math.sqrt(dx * dx + dy * dy + dz * dz)
      }
    };
    p.exp = Math.exp;
    p.floor = Math.floor;
    p.lerp = function(value1, value2, amt) {
      return (value2 - value1) * amt + value1
    };
    p.log = Math.log;
    p.mag = function(a, b, c) {
      if (c) return Math.sqrt(a * a + b * b + c * c);
      return Math.sqrt(a * a + b * b)
    };
    p.map = function(value, istart, istop, ostart, ostop) {
      return ostart + (ostop - ostart) * ((value - istart) / (istop - istart))
    };
    p.max = function() {
      if (arguments.length === 2) return arguments[0] < arguments[1] ? arguments[1] : arguments[0];
      var numbers = arguments.length === 1 ? arguments[0] : arguments;
      if (! ("length" in numbers && numbers.length > 0)) throw "Non-empty array is expected";
      var max = numbers[0],
        count = numbers.length;
      for (var i = 1; i < count; ++i) if (max < numbers[i]) max = numbers[i];
      return max
    };
    p.min = function() {
      if (arguments.length === 2) return arguments[0] < arguments[1] ? arguments[0] : arguments[1];
      var numbers = arguments.length === 1 ? arguments[0] : arguments;
      if (! ("length" in numbers && numbers.length > 0)) throw "Non-empty array is expected";
      var min = numbers[0],
        count = numbers.length;
      for (var i = 1; i < count; ++i) if (min > numbers[i]) min = numbers[i];
      return min
    };
    p.norm = function(aNumber, low, high) {
      return (aNumber - low) / (high - low)
    };
    p.pow = Math.pow;
    p.round = Math.round;
    p.sq = function(aNumber) {
      return aNumber * aNumber
    };
    p.sqrt = Math.sqrt;
    p.acos = Math.acos;
    p.asin = Math.asin;
    p.atan = Math.atan;
    p.atan2 = Math.atan2;
    p.cos = Math.cos;
    p.degrees = function(aAngle) {
      return aAngle * 180 / Math.PI
    };
    p.radians = function(aAngle) {
      return aAngle / 180 * Math.PI
    };
    p.sin = Math.sin;
    p.tan = Math.tan;
    var currentRandom = Math.random;
    p.random = function() {
      if (arguments.length === 0) return currentRandom();
      if (arguments.length === 1) return currentRandom() * arguments[0];
      var aMin = arguments[0],
        aMax = arguments[1];
      return currentRandom() * (aMax - aMin) + aMin
    };

    function Marsaglia(i1, i2) {
      var z = i1 || 362436069,
        w = i2 || 521288629;
      var nextInt = function() {
        z = 36969 * (z & 65535) + (z >>> 16) & 4294967295;
        w = 18E3 * (w & 65535) + (w >>> 16) & 4294967295;
        return ((z & 65535) << 16 | w & 65535) & 4294967295
      };
      this.nextDouble = function() {
        var i = nextInt() / 4294967296;
        return i < 0 ? 1 + i : i
      };
      this.nextInt = nextInt
    }
    Marsaglia.createRandomized = function() {
      var now = new Date;
      return new Marsaglia(now / 6E4 & 4294967295, now & 4294967295)
    };
    p.randomSeed = function(seed) {
      currentRandom = (new Marsaglia(seed)).nextDouble
    };
    p.Random = function(seed) {
      var haveNextNextGaussian = false,
        nextNextGaussian, random;
      this.nextGaussian = function() {
        if (haveNextNextGaussian) {
          haveNextNextGaussian = false;
          return nextNextGaussian
        }
        var v1, v2, s;
        do {
          v1 = 2 * random() - 1;
          v2 = 2 * random() - 1;
          s = v1 * v1 + v2 * v2
        } while (s >= 1 || s === 0);
        var multiplier = Math.sqrt(-2 * Math.log(s) / s);
        nextNextGaussian = v2 * multiplier;
        haveNextNextGaussian = true;
        return v1 * multiplier
      };
      random = seed === undef ? Math.random : (new Marsaglia(seed)).nextDouble
    };

    function PerlinNoise(seed) {
      var rnd = seed !== undef ? new Marsaglia(seed) : Marsaglia.createRandomized();
      var i, j;
      var perm = new Uint8Array(512);
      for (i = 0; i < 256; ++i) perm[i] = i;
      for (i = 0; i < 256; ++i) {
        var t = perm[j = rnd.nextInt() & 255];
        perm[j] = perm[i];
        perm[i] = t
      }
      for (i = 0; i < 256; ++i) perm[i + 256] = perm[i];

      function grad3d(i, x, y, z) {
        var h = i & 15;
        var u = h < 8 ? x : y,
        v = h < 4 ? y : h === 12 || h === 14 ? x : z;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
      }
      function grad2d(i, x, y) {
        var v = (i & 1) === 0 ? x : y;
        return (i & 2) === 0 ? -v : v
      }
      function grad1d(i, x) {
        return (i & 1) === 0 ? -x : x
      }
      function lerp(t, a, b) {
        return a + t * (b - a)
      }
      this.noise3d = function(x, y, z) {
        var X = Math.floor(x) & 255,
          Y = Math.floor(y) & 255,
          Z = Math.floor(z) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        z -= Math.floor(z);
        var fx = (3 - 2 * x) * x * x,
          fy = (3 - 2 * y) * y * y,
          fz = (3 - 2 * z) * z * z;
        var p0 = perm[X] + Y,
          p00 = perm[p0] + Z,
          p01 = perm[p0 + 1] + Z,
          p1 = perm[X + 1] + Y,
          p10 = perm[p1] + Z,
          p11 = perm[p1 + 1] + Z;
        return lerp(fz, lerp(fy, lerp(fx, grad3d(perm[p00], x, y, z), grad3d(perm[p10], x - 1, y, z)), lerp(fx, grad3d(perm[p01], x, y - 1, z), grad3d(perm[p11], x - 1, y - 1, z))), lerp(fy, lerp(fx, grad3d(perm[p00 + 1], x, y, z - 1), grad3d(perm[p10 + 1], x - 1, y, z - 1)), lerp(fx, grad3d(perm[p01 + 1], x, y - 1, z - 1), grad3d(perm[p11 + 1], x - 1, y - 1, z - 1))))
      };
      this.noise2d = function(x, y) {
        var X = Math.floor(x) & 255,
          Y = Math.floor(y) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        var fx = (3 - 2 * x) * x * x,
          fy = (3 - 2 * y) * y * y;
        var p0 = perm[X] + Y,
          p1 = perm[X + 1] + Y;
        return lerp(fy, lerp(fx, grad2d(perm[p0], x, y), grad2d(perm[p1], x - 1, y)), lerp(fx, grad2d(perm[p0 + 1], x, y - 1), grad2d(perm[p1 + 1], x - 1, y - 1)))
      };
      this.noise1d = function(x) {
        var X = Math.floor(x) & 255;
        x -= Math.floor(x);
        var fx = (3 - 2 * x) * x * x;
        return lerp(fx, grad1d(perm[X], x), grad1d(perm[X + 1], x - 1))
      }
    }
    var noiseProfile = {
      generator: undef,
      octaves: 4,
      fallout: 0.5,
      seed: undef
    };
    p.noise = function(x, y, z) {
      if (noiseProfile.generator === undef) noiseProfile.generator = new PerlinNoise(noiseProfile.seed);
      var generator = noiseProfile.generator;
      var effect = 1,
        k = 1,
        sum = 0;
      for (var i = 0; i < noiseProfile.octaves; ++i) {
        effect *= noiseProfile.fallout;
        switch (arguments.length) {
        case 1:
          sum += effect * (1 + generator.noise1d(k * x)) / 2;
          break;
        case 2:
          sum += effect * (1 + generator.noise2d(k * x, k * y)) / 2;
          break;
        case 3:
          sum += effect * (1 + generator.noise3d(k * x, k * y, k * z)) / 2;
          break
        }
        k *= 2
      }
      return sum
    };
    p.noiseDetail = function(octaves, fallout) {
      noiseProfile.octaves = octaves;
      if (fallout !== undef) noiseProfile.fallout = fallout
    };
    p.noiseSeed = function(seed) {
      noiseProfile.seed = seed;
      noiseProfile.generator = undef
    };
    DrawingShared.prototype.size = function(aWidth, aHeight, aMode) {
      if (doStroke) p.stroke(0);
      if (doFill) p.fill(255);
      var savedProperties = {
        fillStyle: curContext.fillStyle,
        strokeStyle: curContext.strokeStyle,
        lineCap: curContext.lineCap,
        lineJoin: curContext.lineJoin
      };
      if (curElement.style.length > 0) {
        curElement.style.removeProperty("width");
        curElement.style.removeProperty("height")
      }
      curElement.width = p.width = aWidth || 100;
      curElement.height = p.height = aHeight || 100;
      for (var prop in savedProperties) if (savedProperties.hasOwnProperty(prop)) curContext[prop] = savedProperties[prop];
      p.textFont(curTextFont);
      p.background();
      maxPixelsCached = Math.max(1E3, aWidth * aHeight * 0.05);
      p.externals.context = curContext;
      for (var i = 0; i < 720; i++) {
        sinLUT[i] = p.sin(i * (Math.PI / 180) * 0.5);
        cosLUT[i] = p.cos(i * (Math.PI / 180) * 0.5)
      }
    };
    Drawing2D.prototype.size = function(aWidth, aHeight, aMode) {
      if (curContext === undef) {
        curContext = curElement.getContext("2d");
        userMatrixStack = new PMatrixStack;
        userReverseMatrixStack = new PMatrixStack;
        modelView = new PMatrix2D;
        modelViewInv = new PMatrix2D
      }
      DrawingShared.prototype.size.apply(this, arguments)
    };
    Drawing3D.prototype.size = function() {
      var size3DCalled = false;
      return function size(aWidth, aHeight, aMode) {
        if (size3DCalled) throw "Multiple calls to size() for 3D renders are not allowed.";
        size3DCalled = true;

        function getGLContext(canvas) {
          var ctxNames = ["experimental-webgl", "webgl", "webkit-3d"],
            gl;
          for (var i = 0, l = ctxNames.length; i < l; i++) {
            gl = canvas.getContext(ctxNames[i], {
              antialias: false,
              preserveDrawingBuffer: true
            });
            if (gl) break
          }
          return gl
        }
        try {
          curElement.width = p.width = aWidth || 100;
          curElement.height = p.height = aHeight || 100;
          curContext = getGLContext(curElement);
          canTex = curContext.createTexture();
          textTex = curContext.createTexture()
        } catch(e_size) {
          Processing.debug(e_size)
        }
        if (!curContext) throw "WebGL context is not supported on this browser.";
        curContext.viewport(0, 0, curElement.width, curElement.height);
        curContext.enable(curContext.DEPTH_TEST);
        curContext.enable(curContext.BLEND);
        curContext.blendFunc(curContext.SRC_ALPHA, curContext.ONE_MINUS_SRC_ALPHA);
        programObject2D = createProgramObject(curContext, vertexShaderSrc2D, fragmentShaderSrc2D);
        programObjectUnlitShape = createProgramObject(curContext, vertexShaderSrcUnlitShape, fragmentShaderSrcUnlitShape);
        p.strokeWeight(1);
        programObject3D = createProgramObject(curContext, vertexShaderSrc3D, fragmentShaderSrc3D);
        curContext.useProgram(programObject3D);
        uniformi("usingTexture3d", programObject3D, "usingTexture", usingTexture);
        p.lightFalloff(1, 0, 0);
        p.shininess(1);
        p.ambient(255, 255, 255);
        p.specular(0, 0, 0);
        p.emissive(0, 0, 0);
        boxBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, boxBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, boxVerts, curContext.STATIC_DRAW);
        boxNormBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, boxNormBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, boxNorms, curContext.STATIC_DRAW);
        boxOutlineBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, boxOutlineBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, boxOutlineVerts, curContext.STATIC_DRAW);
        rectBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, rectBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, rectVerts, curContext.STATIC_DRAW);
        rectNormBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, rectNormBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, rectNorms, curContext.STATIC_DRAW);
        sphereBuffer = curContext.createBuffer();
        lineBuffer = curContext.createBuffer();
        fillBuffer = curContext.createBuffer();
        fillColorBuffer = curContext.createBuffer();
        strokeColorBuffer = curContext.createBuffer();
        shapeTexVBO = curContext.createBuffer();
        pointBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, pointBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array([0, 0, 0]), curContext.STATIC_DRAW);
        textBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, textBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0]), curContext.STATIC_DRAW);
        textureBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ARRAY_BUFFER, textureBuffer);
        curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), curContext.STATIC_DRAW);
        indexBuffer = curContext.createBuffer();
        curContext.bindBuffer(curContext.ELEMENT_ARRAY_BUFFER, indexBuffer);
        curContext.bufferData(curContext.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 2, 3, 0]), curContext.STATIC_DRAW);
        cam = new PMatrix3D;
        cameraInv = new PMatrix3D;
        modelView = new PMatrix3D;
        modelViewInv = new PMatrix3D;
        projection = new PMatrix3D;
        p.camera();
        p.perspective();
        userMatrixStack = new PMatrixStack;
        userReverseMatrixStack = new PMatrixStack;
        curveBasisMatrix = new PMatrix3D;
        curveToBezierMatrix = new PMatrix3D;
        curveDrawMatrix = new PMatrix3D;
        bezierDrawMatrix = new PMatrix3D;
        bezierBasisInverse = new PMatrix3D;
        bezierBasisMatrix = new PMatrix3D;
        bezierBasisMatrix.set(-1, 3, -3, 1, 3, -6, 3, 0, -3, 3, 0, 0, 1, 0, 0, 0);
        DrawingShared.prototype.size.apply(this, arguments)
      }
    }();
    Drawing2D.prototype.ambientLight = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.ambientLight = function(r, g, b, x, y, z) {
      if (lightCount === 8) throw "can only create " + 8 + " lights";
      var pos = new PVector(x, y, z);
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.mult(pos, pos);
      var col = color$4(r, g, b, 0);
      var normalizedCol = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255];
      curContext.useProgram(programObject3D);
      uniformf("uLights.color.3d." + lightCount, programObject3D, "uLights" + lightCount + ".color", normalizedCol);
      uniformf("uLights.position.3d." + lightCount, programObject3D, "uLights" + lightCount + ".position", pos.array());
      uniformi("uLights.type.3d." + lightCount, programObject3D, "uLights" + lightCount + ".type", 0);
      uniformi("uLightCount3d", programObject3D, "uLightCount", ++lightCount)
    };
    Drawing2D.prototype.directionalLight = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.directionalLight = function(r, g, b, nx, ny, nz) {
      if (lightCount === 8) throw "can only create " + 8 + " lights";
      curContext.useProgram(programObject3D);
      var mvm = new PMatrix3D;
      mvm.scale(1, -1, 1);
      mvm.apply(modelView.array());
      mvm = mvm.array();
      var dir = [mvm[0] * nx + mvm[4] * ny + mvm[8] * nz, mvm[1] * nx + mvm[5] * ny + mvm[9] * nz, mvm[2] * nx + mvm[6] * ny + mvm[10] * nz];
      var col = color$4(r, g, b, 0);
      var normalizedCol = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255];
      uniformf("uLights.color.3d." + lightCount, programObject3D, "uLights" + lightCount + ".color", normalizedCol);
      uniformf("uLights.position.3d." + lightCount, programObject3D, "uLights" + lightCount + ".position", dir);
      uniformi("uLights.type.3d." + lightCount, programObject3D, "uLights" + lightCount + ".type", 1);
      uniformi("uLightCount3d", programObject3D, "uLightCount", ++lightCount)
    };
    Drawing2D.prototype.lightFalloff = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.lightFalloff = function(constant, linear, quadratic) {
      curContext.useProgram(programObject3D);
      uniformf("uFalloff3d", programObject3D, "uFalloff", [constant, linear, quadratic])
    };
    Drawing2D.prototype.lightSpecular = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.lightSpecular = function(r, g, b) {
      var col = color$4(r, g, b, 0);
      var normalizedCol = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255];
      curContext.useProgram(programObject3D);
      uniformf("uSpecular3d", programObject3D, "uSpecular", normalizedCol)
    };
    p.lights = function() {
      p.ambientLight(128, 128, 128);
      p.directionalLight(128, 128, 128, 0, 0, -1);
      p.lightFalloff(1, 0, 0);
      p.lightSpecular(0, 0, 0)
    };
    Drawing2D.prototype.pointLight = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.pointLight = function(r, g, b, x, y, z) {
      if (lightCount === 8) throw "can only create " + 8 + " lights";
      var pos = new PVector(x, y, z);
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.mult(pos, pos);
      var col = color$4(r, g, b, 0);
      var normalizedCol = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255];
      curContext.useProgram(programObject3D);
      uniformf("uLights.color.3d." + lightCount, programObject3D, "uLights" + lightCount + ".color", normalizedCol);
      uniformf("uLights.position.3d." + lightCount, programObject3D, "uLights" + lightCount + ".position", pos.array());
      uniformi("uLights.type.3d." + lightCount, programObject3D, "uLights" + lightCount + ".type", 2);
      uniformi("uLightCount3d", programObject3D, "uLightCount", ++lightCount)
    };
    Drawing2D.prototype.noLights = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.noLights = function() {
      lightCount = 0;
      curContext.useProgram(programObject3D);
      uniformi("uLightCount3d", programObject3D, "uLightCount", lightCount)
    };
    Drawing2D.prototype.spotLight = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.spotLight = function(r, g, b, x, y, z, nx, ny, nz, angle, concentration) {
      if (lightCount === 8) throw "can only create " + 8 + " lights";
      curContext.useProgram(programObject3D);
      var pos = new PVector(x, y, z);
      var mvm = new PMatrix3D;
      mvm.scale(1, -1, 1);
      mvm.apply(modelView.array());
      mvm.mult(pos, pos);
      mvm = mvm.array();
      var dir = [mvm[0] * nx + mvm[4] * ny + mvm[8] * nz, mvm[1] *
        nx + mvm[5] * ny + mvm[9] * nz, mvm[2] * nx + mvm[6] * ny + mvm[10] * nz];
      var col = color$4(r, g, b, 0);
      var normalizedCol = [((col >> 16) & 255) / 255, ((col >> 8) & 255) / 255, (col & 255) / 255];
      uniformf("uLights.color.3d." + lightCount, programObject3D, "uLights" + lightCount + ".color", normalizedCol);
      uniformf("uLights.position.3d." + lightCount, programObject3D, "uLights" + lightCount + ".position", pos.array());
      uniformf("uLights.direction.3d." + lightCount, programObject3D, "uLights" + lightCount + ".direction", dir);
      uniformf("uLights.concentration.3d." + lightCount, programObject3D, "uLights" + lightCount + ".concentration", concentration);
      uniformf("uLights.angle.3d." + lightCount, programObject3D, "uLights" + lightCount + ".angle", angle);
      uniformi("uLights.type.3d." + lightCount, programObject3D, "uLights" + lightCount + ".type", 3);
      uniformi("uLightCount3d", programObject3D, "uLightCount", ++lightCount)
    };
    Drawing2D.prototype.beginCamera = function() {
      throw "beginCamera() is not available in 2D mode";
    };
    Drawing3D.prototype.beginCamera = function() {
      if (manipulatingCamera) throw "You cannot call beginCamera() again before calling endCamera()";
      manipulatingCamera = true;
      modelView = cameraInv;
      modelViewInv = cam
    };
    Drawing2D.prototype.endCamera = function() {
      throw "endCamera() is not available in 2D mode";
    };
    Drawing3D.prototype.endCamera = function() {
      if (!manipulatingCamera) throw "You cannot call endCamera() before calling beginCamera()";
      modelView.set(cam);
      modelViewInv.set(cameraInv);
      manipulatingCamera = false
    };
    p.camera = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
      if (eyeX === undef) {
        cameraX = p.width / 2;
        cameraY = p.height / 2;
        cameraZ = cameraY / Math.tan(cameraFOV / 2);
        eyeX = cameraX;
        eyeY = cameraY;
        eyeZ = cameraZ;
        centerX = cameraX;
        centerY = cameraY;
        centerZ = 0;
        upX = 0;
        upY = 1;
        upZ = 0
      }
      var z = new PVector(eyeX - centerX, eyeY - centerY, eyeZ - centerZ);
      var y = new PVector(upX, upY, upZ);
      z.normalize();
      var x = PVector.cross(y, z);
      y = PVector.cross(z, x);
      x.normalize();
      y.normalize();
      var xX = x.x,
        xY = x.y,
        xZ = x.z;
      var yX = y.x,
        yY = y.y,
        yZ = y.z;
      var zX = z.x,
        zY = z.y,
        zZ = z.z;
      cam.set(xX, xY, xZ, 0, yX, yY, yZ, 0, zX, zY, zZ, 0, 0, 0, 0, 1);
      cam.translate(-eyeX, -eyeY, -eyeZ);
      cameraInv.reset();
      cameraInv.invApply(xX, xY, xZ, 0, yX, yY, yZ, 0, zX, zY, zZ, 0, 0, 0, 0, 1);
      cameraInv.translate(eyeX, eyeY, eyeZ);
      modelView.set(cam);
      modelViewInv.set(cameraInv)
    };
    p.perspective = function(fov, aspect, near, far) {
      if (arguments.length === 0) {
        cameraY = curElement.height / 2;
        cameraZ = cameraY / Math.tan(cameraFOV / 2);
        cameraNear = cameraZ / 10;
        cameraFar = cameraZ * 10;
        cameraAspect = p.width / p.height;
        fov = cameraFOV;
        aspect = cameraAspect;
        near = cameraNear;
        far = cameraFar
      }
      var yMax, yMin, xMax, xMin;
      yMax = near * Math.tan(fov / 2);
      yMin = -yMax;
      xMax = yMax * aspect;
      xMin = yMin * aspect;
      p.frustum(xMin, xMax, yMin, yMax, near, far)
    };
    Drawing2D.prototype.frustum = function() {
      throw "Processing.js: frustum() is not supported in 2D mode";
    };
    Drawing3D.prototype.frustum = function(left, right, bottom, top, near, far) {
      frustumMode = true;
      projection = new PMatrix3D;
      projection.set(2 * near / (right - left), 0, (right + left) / (right - left), 0, 0, 2 * near / (top - bottom), (top + bottom) / (top - bottom), 0, 0, 0, -(far + near) / (far - near), -(2 * far * near) / (far - near), 0, 0, -1, 0);
      var proj = new PMatrix3D;
      proj.set(projection);
      proj.transpose();
      curContext.useProgram(programObject2D);
      uniformMatrix("projection2d", programObject2D, "uProjection", false, proj.array());
      curContext.useProgram(programObject3D);
      uniformMatrix("projection3d", programObject3D, "uProjection", false, proj.array());
      curContext.useProgram(programObjectUnlitShape);
      uniformMatrix("uProjectionUS", programObjectUnlitShape, "uProjection", false, proj.array())
    };
    p.ortho = function(left, right, bottom, top, near, far) {
      if (arguments.length === 0) {
        left = 0;
        right = p.width;
        bottom = 0;
        top = p.height;
        near = -10;
        far = 10
      }
      var x = 2 / (right - left);
      var y = 2 / (top - bottom);
      var z = -2 / (far - near);
      var tx = -(right + left) / (right - left);
      var ty = -(top + bottom) / (top - bottom);
      var tz = -(far + near) / (far - near);
      projection = new PMatrix3D;
      projection.set(x, 0, 0, tx, 0, y, 0, ty, 0, 0, z, tz, 0, 0, 0, 1);
      var proj = new PMatrix3D;
      proj.set(projection);
      proj.transpose();
      curContext.useProgram(programObject2D);
      uniformMatrix("projection2d", programObject2D, "uProjection", false, proj.array());
      curContext.useProgram(programObject3D);
      uniformMatrix("projection3d", programObject3D, "uProjection", false, proj.array());
      curContext.useProgram(programObjectUnlitShape);
      uniformMatrix("uProjectionUS", programObjectUnlitShape, "uProjection", false, proj.array());
      frustumMode = false
    };
    p.printProjection = function() {
      projection.print()
    };
    p.printCamera = function() {
      cam.print()
    };
    Drawing2D.prototype.box = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.box = function(w, h, d) {
      if (!h || !d) h = d = w;
      var model = new PMatrix3D;
      model.scale(w, h, d);
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      if (doFill) {
        curContext.useProgram(programObject3D);
        uniformMatrix("model3d", programObject3D, "uModel", false, model.array());
        uniformMatrix("view3d", programObject3D, "uView", false, view.array());
        curContext.enable(curContext.POLYGON_OFFSET_FILL);
        curContext.polygonOffset(1, 1);
        uniformf("color3d", programObject3D, "uColor", fillStyle);
        if (lightCount > 0) {
          var v = new PMatrix3D;
          v.set(view);
          var m = new PMatrix3D;
          m.set(model);
          v.mult(m);
          var normalMatrix = new PMatrix3D;
          normalMatrix.set(v);
          normalMatrix.invert();
          normalMatrix.transpose();
          uniformMatrix("uNormalTransform3d", programObject3D, "uNormalTransform", false, normalMatrix.array());
          vertexAttribPointer("aNormal3d", programObject3D, "aNormal", 3, boxNormBuffer)
        } else disableVertexAttribPointer("aNormal3d", programObject3D, "aNormal");
        vertexAttribPointer("aVertex3d", programObject3D, "aVertex", 3, boxBuffer);
        disableVertexAttribPointer("aColor3d", programObject3D, "aColor");
        disableVertexAttribPointer("aTexture3d", programObject3D, "aTexture");
        curContext.drawArrays(curContext.TRIANGLES, 0, boxVerts.length / 3);
        curContext.disable(curContext.POLYGON_OFFSET_FILL)
      }
      if (lineWidth > 0 && doStroke) {
        curContext.useProgram(programObject2D);
        uniformMatrix("uModel2d", programObject2D, "uModel", false, model.array());
        uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
        uniformf("uColor2d", programObject2D, "uColor", strokeStyle);
        uniformi("uIsDrawingText2d", programObject2D, "uIsDrawingText", false);
        vertexAttribPointer("vertex2d", programObject2D, "aVertex", 3, boxOutlineBuffer);
        disableVertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord");
        curContext.drawArrays(curContext.LINES, 0, boxOutlineVerts.length / 3)
      }
    };
    var initSphere = function() {
      var i;
      sphereVerts = [];
      for (i = 0; i < sphereDetailU; i++) {
        sphereVerts.push(0);
        sphereVerts.push(-1);
        sphereVerts.push(0);
        sphereVerts.push(sphereX[i]);
        sphereVerts.push(sphereY[i]);
        sphereVerts.push(sphereZ[i])
      }
      sphereVerts.push(0);
      sphereVerts.push(-1);
      sphereVerts.push(0);
      sphereVerts.push(sphereX[0]);
      sphereVerts.push(sphereY[0]);
      sphereVerts.push(sphereZ[0]);
      var v1, v11, v2;
      var voff = 0;
      for (i = 2; i < sphereDetailV; i++) {
        v1 = v11 = voff;
        voff += sphereDetailU;
        v2 = voff;
        for (var j = 0; j < sphereDetailU; j++) {
          sphereVerts.push(sphereX[v1]);
          sphereVerts.push(sphereY[v1]);
          sphereVerts.push(sphereZ[v1++]);
          sphereVerts.push(sphereX[v2]);
          sphereVerts.push(sphereY[v2]);
          sphereVerts.push(sphereZ[v2++])
        }
        v1 = v11;
        v2 = voff;
        sphereVerts.push(sphereX[v1]);
        sphereVerts.push(sphereY[v1]);
        sphereVerts.push(sphereZ[v1]);
        sphereVerts.push(sphereX[v2]);
        sphereVerts.push(sphereY[v2]);
        sphereVerts.push(sphereZ[v2])
      }
      for (i = 0; i < sphereDetailU; i++) {
        v2 = voff + i;
        sphereVerts.push(sphereX[v2]);
        sphereVerts.push(sphereY[v2]);
        sphereVerts.push(sphereZ[v2]);
        sphereVerts.push(0);
        sphereVerts.push(1);
        sphereVerts.push(0)
      }
      sphereVerts.push(sphereX[voff]);
      sphereVerts.push(sphereY[voff]);
      sphereVerts.push(sphereZ[voff]);
      sphereVerts.push(0);
      sphereVerts.push(1);
      sphereVerts.push(0);
      curContext.bindBuffer(curContext.ARRAY_BUFFER, sphereBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(sphereVerts), curContext.STATIC_DRAW)
    };
    p.sphereDetail = function(ures, vres) {
      var i;
      if (arguments.length === 1) ures = vres = arguments[0];
      if (ures < 3) ures = 3;
      if (vres < 2) vres = 2;
      if (ures === sphereDetailU && vres === sphereDetailV) return;
      var delta = 720 / ures;
      var cx = new Float32Array(ures);
      var cz = new Float32Array(ures);
      for (i = 0; i < ures; i++) {
        cx[i] = cosLUT[i * delta % 720 | 0];
        cz[i] = sinLUT[i * delta % 720 | 0]
      }
      var vertCount = ures * (vres - 1) + 2;
      var currVert = 0;
      sphereX = new Float32Array(vertCount);
      sphereY = new Float32Array(vertCount);
      sphereZ = new Float32Array(vertCount);
      var angle_step = 720 * 0.5 / vres;
      var angle = angle_step;
      for (i = 1; i < vres; i++) {
        var curradius = sinLUT[angle % 720 | 0];
        var currY = -cosLUT[angle % 720 | 0];
        for (var j = 0; j < ures; j++) {
          sphereX[currVert] = cx[j] * curradius;
          sphereY[currVert] = currY;
          sphereZ[currVert++] = cz[j] * curradius
        }
        angle += angle_step
      }
      sphereDetailU = ures;
      sphereDetailV = vres;
      initSphere()
    };
    Drawing2D.prototype.sphere = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.sphere = function() {
      var sRad = arguments[0];
      if (sphereDetailU < 3 || sphereDetailV < 2) p.sphereDetail(30);
      var model = new PMatrix3D;
      model.scale(sRad, sRad, sRad);
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      if (doFill) {
        if (lightCount > 0) {
          var v = new PMatrix3D;
          v.set(view);
          var m = new PMatrix3D;
          m.set(model);
          v.mult(m);
          var normalMatrix = new PMatrix3D;
          normalMatrix.set(v);
          normalMatrix.invert();
          normalMatrix.transpose();
          uniformMatrix("uNormalTransform3d", programObject3D, "uNormalTransform", false, normalMatrix.array());
          vertexAttribPointer("aNormal3d", programObject3D, "aNormal", 3, sphereBuffer)
        } else disableVertexAttribPointer("aNormal3d", programObject3D, "aNormal");
        curContext.useProgram(programObject3D);
        disableVertexAttribPointer("aTexture3d", programObject3D, "aTexture");
        uniformMatrix("uModel3d", programObject3D, "uModel", false, model.array());
        uniformMatrix("uView3d", programObject3D, "uView", false, view.array());
        vertexAttribPointer("aVertex3d", programObject3D, "aVertex", 3, sphereBuffer);
        disableVertexAttribPointer("aColor3d", programObject3D, "aColor");
        curContext.enable(curContext.POLYGON_OFFSET_FILL);
        curContext.polygonOffset(1, 1);
        uniformf("uColor3d", programObject3D, "uColor", fillStyle);
        curContext.drawArrays(curContext.TRIANGLE_STRIP, 0, sphereVerts.length / 3);
        curContext.disable(curContext.POLYGON_OFFSET_FILL)
      }
      if (lineWidth > 0 && doStroke) {
        curContext.useProgram(programObject2D);
        uniformMatrix("uModel2d", programObject2D, "uModel", false, model.array());
        uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
        vertexAttribPointer("aVertex2d", programObject2D, "aVertex", 3, sphereBuffer);
        disableVertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord");
        uniformf("uColor2d", programObject2D, "uColor", strokeStyle);
        uniformi("uIsDrawingText", programObject2D, "uIsDrawingText", false);
        curContext.drawArrays(curContext.LINE_STRIP, 0, sphereVerts.length / 3)
      }
    };
    p.modelX = function(x, y, z) {
      var mv = modelView.array();
      var ci = cameraInv.array();
      var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
      var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
      var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
      var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
      var ox = ci[0] * ax + ci[1] * ay + ci[2] * az + ci[3] * aw;
      var ow = ci[12] * ax + ci[13] * ay + ci[14] * az + ci[15] * aw;
      return ow !== 0 ? ox / ow : ox
    };
    p.modelY = function(x, y, z) {
      var mv = modelView.array();
      var ci = cameraInv.array();
      var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
      var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
      var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
      var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
      var oy = ci[4] * ax + ci[5] * ay + ci[6] * az + ci[7] * aw;
      var ow = ci[12] * ax + ci[13] * ay + ci[14] * az + ci[15] * aw;
      return ow !== 0 ? oy / ow : oy
    };
    p.modelZ = function(x, y, z) {
      var mv = modelView.array();
      var ci = cameraInv.array();
      var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
      var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
      var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
      var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
      var oz = ci[8] * ax + ci[9] * ay + ci[10] * az + ci[11] * aw;
      var ow = ci[12] * ax + ci[13] * ay + ci[14] * az + ci[15] * aw;
      return ow !== 0 ? oz / ow : oz
    };
    Drawing2D.prototype.ambient = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.ambient = function(v1, v2, v3) {
      curContext.useProgram(programObject3D);
      uniformi("uUsingMat3d", programObject3D, "uUsingMat", true);
      var col = p.color(v1, v2, v3);
      uniformf("uMaterialAmbient3d", programObject3D, "uMaterialAmbient", p.color.toGLArray(col).slice(0, 3))
    };
    Drawing2D.prototype.emissive = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.emissive = function(v1, v2, v3) {
      curContext.useProgram(programObject3D);
      uniformi("uUsingMat3d", programObject3D, "uUsingMat", true);
      var col = p.color(v1, v2, v3);
      uniformf("uMaterialEmissive3d", programObject3D, "uMaterialEmissive", p.color.toGLArray(col).slice(0, 3))
    };
    Drawing2D.prototype.shininess = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.shininess = function(shine) {
      curContext.useProgram(programObject3D);
      uniformi("uUsingMat3d", programObject3D, "uUsingMat", true);
      uniformf("uShininess3d", programObject3D, "uShininess", shine)
    };
    Drawing2D.prototype.specular = DrawingShared.prototype.a3DOnlyFunction;
    Drawing3D.prototype.specular = function(v1, v2, v3) {
      curContext.useProgram(programObject3D);
      uniformi("uUsingMat3d", programObject3D, "uUsingMat", true);
      var col = p.color(v1, v2, v3);
      uniformf("uMaterialSpecular3d", programObject3D, "uMaterialSpecular", p.color.toGLArray(col).slice(0, 3))
    };
    p.screenX = function(x, y, z) {
      var mv = modelView.array();
      if (mv.length === 16) {
        var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
        var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
        var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
        var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
        var pj = projection.array();
        var ox = pj[0] * ax + pj[1] * ay + pj[2] * az + pj[3] * aw;
        var ow = pj[12] * ax + pj[13] * ay + pj[14] * az + pj[15] * aw;
        if (ow !== 0) ox /= ow;
        return p.width * (1 + ox) / 2
      }
      return modelView.multX(x, y)
    };
    p.screenY = function screenY(x, y, z) {
      var mv = modelView.array();
      if (mv.length === 16) {
        var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
        var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
        var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
        var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
        var pj = projection.array();
        var oy = pj[4] * ax + pj[5] * ay + pj[6] * az + pj[7] * aw;
        var ow = pj[12] * ax + pj[13] * ay + pj[14] * az + pj[15] * aw;
        if (ow !== 0) oy /= ow;
        return p.height * (1 + oy) / 2
      }
      return modelView.multY(x, y)
    };
    p.screenZ = function screenZ(x, y, z) {
      var mv = modelView.array();
      if (mv.length !== 16) return 0;
      var pj = projection.array();
      var ax = mv[0] * x + mv[1] * y + mv[2] * z + mv[3];
      var ay = mv[4] * x + mv[5] * y + mv[6] * z + mv[7];
      var az = mv[8] * x + mv[9] * y + mv[10] * z + mv[11];
      var aw = mv[12] * x + mv[13] * y + mv[14] * z + mv[15];
      var oz = pj[8] * ax + pj[9] * ay + pj[10] * az + pj[11] * aw;
      var ow = pj[12] * ax + pj[13] * ay + pj[14] * az + pj[15] * aw;
      if (ow !== 0) oz /= ow;
      return (oz + 1) / 2
    };
    DrawingShared.prototype.fill = function() {
      var color = p.color(arguments[0], arguments[1], arguments[2], arguments[3]);
      if (color === currentFillColor && doFill) return;
      doFill = true;
      currentFillColor = color
    };
    Drawing2D.prototype.fill = function() {
      DrawingShared.prototype.fill.apply(this, arguments);
      isFillDirty = true
    };
    Drawing3D.prototype.fill = function() {
      DrawingShared.prototype.fill.apply(this, arguments);
      fillStyle = p.color.toGLArray(currentFillColor)
    };

    function executeContextFill() {
      if (doFill) {
        if (isFillDirty) {
          curContext.fillStyle = p.color.toString(currentFillColor);
          isFillDirty = false
        }
        curContext.fill()
      }
    }
    p.noFill = function() {
      doFill = false
    };
    DrawingShared.prototype.stroke = function() {
      var color = p.color(arguments[0], arguments[1], arguments[2], arguments[3]);
      if (color === currentStrokeColor && doStroke) return;
      doStroke = true;
      currentStrokeColor = color
    };
    Drawing2D.prototype.stroke = function() {
      DrawingShared.prototype.stroke.apply(this, arguments);
      isStrokeDirty = true
    };
    Drawing3D.prototype.stroke = function() {
      DrawingShared.prototype.stroke.apply(this, arguments);
      strokeStyle = p.color.toGLArray(currentStrokeColor)
    };

    function executeContextStroke() {
      if (doStroke) {
        if (isStrokeDirty) {
          curContext.strokeStyle = p.color.toString(currentStrokeColor);
          isStrokeDirty = false
        }
        curContext.stroke()
      }
    }
    p.noStroke = function() {
      doStroke = false
    };
    DrawingShared.prototype.strokeWeight = function(w) {
      lineWidth = w
    };
    Drawing2D.prototype.strokeWeight = function(w) {
      DrawingShared.prototype.strokeWeight.apply(this, arguments);
      curContext.lineWidth = w
    };
    Drawing3D.prototype.strokeWeight = function(w) {
      DrawingShared.prototype.strokeWeight.apply(this, arguments);
      curContext.useProgram(programObject2D);
      uniformf("pointSize2d", programObject2D, "uPointSize", w);
      curContext.useProgram(programObjectUnlitShape);
      uniformf("pointSizeUnlitShape", programObjectUnlitShape, "uPointSize", w);
      curContext.lineWidth(w)
    };
    p.strokeCap = function(value) {
      drawing.$ensureContext().lineCap = value
    };
    p.strokeJoin = function(value) {
      drawing.$ensureContext().lineJoin = value
    };
    Drawing2D.prototype.smooth = function() {
      renderSmooth = true;
      var style = curElement.style;
      style.setProperty("image-rendering", "optimizeQuality", "important");
      style.setProperty("-ms-interpolation-mode", "bicubic", "important");
      if (curContext.hasOwnProperty("mozImageSmoothingEnabled")) curContext.mozImageSmoothingEnabled = true
    };
    Drawing3D.prototype.smooth = function() {
      renderSmooth = true
    };
    Drawing2D.prototype.noSmooth = function() {
      renderSmooth = false;
      var style = curElement.style;
      style.setProperty("image-rendering", "optimizeSpeed", "important");
      style.setProperty("image-rendering", "-moz-crisp-edges", "important");
      style.setProperty("image-rendering", "-webkit-optimize-contrast", "important");
      style.setProperty("image-rendering", "optimize-contrast", "important");
      style.setProperty("-ms-interpolation-mode", "nearest-neighbor", "important");
      if (curContext.hasOwnProperty("mozImageSmoothingEnabled")) curContext.mozImageSmoothingEnabled = false
    };
    Drawing3D.prototype.noSmooth = function() {
      renderSmooth = false
    };
    Drawing2D.prototype.point = function(x, y) {
      if (!doStroke) return;
      x = Math.round(x);
      y = Math.round(y);
      curContext.fillStyle = p.color.toString(currentStrokeColor);
      isFillDirty = true;
      if (lineWidth > 1) {
        curContext.beginPath();
        curContext.arc(x, y, lineWidth / 2, 0, 6.283185307179586, false);
        curContext.fill()
      } else curContext.fillRect(x, y, 1, 1)
    };
    Drawing3D.prototype.point = function(x, y, z) {
      var model = new PMatrix3D;
      model.translate(x, y, z || 0);
      model.transpose();
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      curContext.useProgram(programObject2D);
      uniformMatrix("uModel2d", programObject2D, "uModel", false, model.array());
      uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
      if (lineWidth > 0 && doStroke) {
        uniformf("uColor2d", programObject2D, "uColor", strokeStyle);
        uniformi("uIsDrawingText2d", programObject2D, "uIsDrawingText", false);
        uniformi("uSmooth2d", programObject2D, "uSmooth", renderSmooth);
        vertexAttribPointer("aVertex2d", programObject2D, "aVertex", 3, pointBuffer);
        disableVertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord");
        curContext.drawArrays(curContext.POINTS, 0, 1)
      }
    };
    p.beginShape = function(type) {
      curShape = type;
      curvePoints = [];
      vertArray = []
    };
    Drawing2D.prototype.vertex = function(x, y, moveTo) {
      var vert = [];
      if (firstVert) firstVert = false;
      vert["isVert"] = true;
      vert[0] = x;
      vert[1] = y;
      vert[2] = 0;
      vert[3] = 0;
      vert[4] = 0;
      vert[5] = currentFillColor;
      vert[6] = currentStrokeColor;
      vertArray.push(vert);
      if (moveTo) vertArray[vertArray.length - 1]["moveTo"] = moveTo
    };
    Drawing3D.prototype.vertex = function(x, y, z, u, v) {
      var vert = [];
      if (firstVert) firstVert = false;
      vert["isVert"] = true;
      if (v === undef && usingTexture) {
        v = u;
        u = z;
        z = 0
      }
      if (u !== undef && v !== undef) {
        if (curTextureMode === 2) {
          u /= curTexture.width;
          v /= curTexture.height
        }
        u = u > 1 ? 1 : u;
        u = u < 0 ? 0 : u;
        v = v > 1 ? 1 : v;
        v = v < 0 ? 0 : v
      }
      vert[0] = x;
      vert[1] = y;
      vert[2] = z || 0;
      vert[3] = u || 0;
      vert[4] = v || 0;
      vert[5] = fillStyle[0];
      vert[6] = fillStyle[1];
      vert[7] = fillStyle[2];
      vert[8] = fillStyle[3];
      vert[9] = strokeStyle[0];
      vert[10] = strokeStyle[1];
      vert[11] = strokeStyle[2];
      vert[12] = strokeStyle[3];
      vert[13] = normalX;
      vert[14] = normalY;
      vert[15] = normalZ;
      vertArray.push(vert)
    };
    var point3D = function(vArray, cArray) {
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      curContext.useProgram(programObjectUnlitShape);
      uniformMatrix("uViewUS", programObjectUnlitShape, "uView", false, view.array());
      uniformi("uSmoothUS", programObjectUnlitShape, "uSmooth", renderSmooth);
      vertexAttribPointer("aVertexUS", programObjectUnlitShape, "aVertex", 3, pointBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(vArray), curContext.STREAM_DRAW);
      vertexAttribPointer("aColorUS", programObjectUnlitShape, "aColor", 4, fillColorBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(cArray), curContext.STREAM_DRAW);
      curContext.drawArrays(curContext.POINTS, 0, vArray.length / 3)
    };
    var line3D = function(vArray, mode, cArray) {
      var ctxMode;
      if (mode === "LINES") ctxMode = curContext.LINES;
      else if (mode === "LINE_LOOP") ctxMode = curContext.LINE_LOOP;
      else ctxMode = curContext.LINE_STRIP;
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      curContext.useProgram(programObjectUnlitShape);
      uniformMatrix("uViewUS", programObjectUnlitShape, "uView", false, view.array());
      vertexAttribPointer("aVertexUS", programObjectUnlitShape, "aVertex", 3, lineBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(vArray), curContext.STREAM_DRAW);
      vertexAttribPointer("aColorUS", programObjectUnlitShape, "aColor", 4, strokeColorBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(cArray), curContext.STREAM_DRAW);
      curContext.drawArrays(ctxMode, 0, vArray.length / 3)
    };
    var fill3D = function(vArray, mode, cArray, tArray) {
      var ctxMode;
      if (mode === "TRIANGLES") ctxMode = curContext.TRIANGLES;
      else if (mode === "TRIANGLE_FAN") ctxMode = curContext.TRIANGLE_FAN;
      else ctxMode = curContext.TRIANGLE_STRIP;
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      curContext.useProgram(programObject3D);
      uniformMatrix("model3d", programObject3D, "uModel", false, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      uniformMatrix("view3d", programObject3D, "uView", false, view.array());
      curContext.enable(curContext.POLYGON_OFFSET_FILL);
      curContext.polygonOffset(1, 1);
      uniformf("color3d", programObject3D, "uColor", [-1, 0, 0, 0]);
      vertexAttribPointer("vertex3d", programObject3D, "aVertex", 3, fillBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(vArray), curContext.STREAM_DRAW);
      if (usingTexture && curTint !== null) curTint3d(cArray);
      vertexAttribPointer("aColor3d", programObject3D, "aColor", 4, fillColorBuffer);
      curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(cArray), curContext.STREAM_DRAW);
      disableVertexAttribPointer("aNormal3d", programObject3D, "aNormal");
      if (usingTexture) {
        uniformi("uUsingTexture3d", programObject3D, "uUsingTexture", usingTexture);
        vertexAttribPointer("aTexture3d", programObject3D, "aTexture", 2, shapeTexVBO);
        curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(tArray), curContext.STREAM_DRAW)
      }
      curContext.drawArrays(ctxMode, 0, vArray.length / 3);
      curContext.disable(curContext.POLYGON_OFFSET_FILL)
    };

    function fillStrokeClose() {
      executeContextFill();
      executeContextStroke();
      curContext.closePath()
    }
    Drawing2D.prototype.endShape = function(mode) {
      if (vertArray.length === 0) return;
      var closeShape = mode === 2;
      if (closeShape) vertArray.push(vertArray[0]);
      var lineVertArray = [];
      var fillVertArray = [];
      var colorVertArray = [];
      var strokeVertArray = [];
      var texVertArray = [];
      var cachedVertArray;
      firstVert = true;
      var i, j, k;
      var vertArrayLength = vertArray.length;
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 0; j < 3; j++) fillVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 5; j < 9; j++) colorVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 9; j < 13; j++) strokeVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        texVertArray.push(cachedVertArray[3]);
        texVertArray.push(cachedVertArray[4])
      }
      if (isCurve && (curShape === 20 || curShape === undef)) {
        if (vertArrayLength > 3) {
          var b = [],
            s = 1 - curTightness;
          curContext.beginPath();
          curContext.moveTo(vertArray[1][0], vertArray[1][1]);
          for (i = 1; i + 2 < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            b[0] = [cachedVertArray[0], cachedVertArray[1]];
            b[1] = [cachedVertArray[0] + (s * vertArray[i + 1][0] - s * vertArray[i - 1][0]) / 6, cachedVertArray[1] + (s * vertArray[i + 1][1] - s * vertArray[i - 1][1]) / 6];
            b[2] = [vertArray[i + 1][0] + (s * vertArray[i][0] - s * vertArray[i + 2][0]) / 6, vertArray[i + 1][1] + (s * vertArray[i][1] - s * vertArray[i + 2][1]) / 6];
            b[3] = [vertArray[i + 1][0], vertArray[i + 1][1]];
            curContext.bezierCurveTo(b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1])
          }
          fillStrokeClose()
        }
      } else if (isBezier && (curShape === 20 || curShape === undef)) {
        curContext.beginPath();
        for (i = 0; i < vertArrayLength; i++) {
          cachedVertArray = vertArray[i];
          if (vertArray[i]["isVert"]) if (vertArray[i]["moveTo"]) curContext.moveTo(cachedVertArray[0], cachedVertArray[1]);
          else curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
          else curContext.bezierCurveTo(vertArray[i][0], vertArray[i][1], vertArray[i][2], vertArray[i][3], vertArray[i][4], vertArray[i][5])
        }
        fillStrokeClose()
      } else if (curShape === 2) for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        if (doStroke) p.stroke(cachedVertArray[6]);
        p.point(cachedVertArray[0], cachedVertArray[1])
      } else if (curShape === 4) for (i = 0; i + 1 < vertArrayLength; i += 2) {
        cachedVertArray = vertArray[i];
        if (doStroke) p.stroke(vertArray[i + 1][6]);
        p.line(cachedVertArray[0], cachedVertArray[1], vertArray[i + 1][0], vertArray[i + 1][1])
      } else if (curShape === 9) for (i = 0; i + 2 < vertArrayLength; i += 3) {
        cachedVertArray = vertArray[i];
        curContext.beginPath();
        curContext.moveTo(cachedVertArray[0], cachedVertArray[1]);
        curContext.lineTo(vertArray[i + 1][0], vertArray[i + 1][1]);
        curContext.lineTo(vertArray[i + 2][0], vertArray[i + 2][1]);
        curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
        if (doFill) {
          p.fill(vertArray[i + 2][5]);
          executeContextFill()
        }
        if (doStroke) {
          p.stroke(vertArray[i + 2][6]);
          executeContextStroke()
        }
        curContext.closePath()
      } else if (curShape === 10) for (i = 0; i + 1 < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        curContext.beginPath();
        curContext.moveTo(vertArray[i + 1][0], vertArray[i + 1][1]);
        curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
        if (doStroke) p.stroke(vertArray[i + 1][6]);
        if (doFill) p.fill(vertArray[i + 1][5]);
        if (i + 2 < vertArrayLength) {
          curContext.lineTo(vertArray[i + 2][0], vertArray[i + 2][1]);
          if (doStroke) p.stroke(vertArray[i + 2][6]);
          if (doFill) p.fill(vertArray[i + 2][5])
        }
        fillStrokeClose()
      } else if (curShape === 11) {
        if (vertArrayLength > 2) {
          curContext.beginPath();
          curContext.moveTo(vertArray[0][0], vertArray[0][1]);
          curContext.lineTo(vertArray[1][0], vertArray[1][1]);
          curContext.lineTo(vertArray[2][0], vertArray[2][1]);
          if (doFill) {
            p.fill(vertArray[2][5]);
            executeContextFill()
          }
          if (doStroke) {
            p.stroke(vertArray[2][6]);
            executeContextStroke()
          }
          curContext.closePath();
          for (i = 3; i < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            curContext.beginPath();
            curContext.moveTo(vertArray[0][0], vertArray[0][1]);
            curContext.lineTo(vertArray[i - 1][0], vertArray[i - 1][1]);
            curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
            if (doFill) {
              p.fill(cachedVertArray[5]);
              executeContextFill()
            }
            if (doStroke) {
              p.stroke(cachedVertArray[6]);
              executeContextStroke()
            }
            curContext.closePath()
          }
        }
      } else if (curShape === 16) for (i = 0; i + 3 < vertArrayLength; i += 4) {
        cachedVertArray = vertArray[i];
        curContext.beginPath();
        curContext.moveTo(cachedVertArray[0], cachedVertArray[1]);
        for (j = 1; j < 4; j++) curContext.lineTo(vertArray[i + j][0], vertArray[i + j][1]);
        curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
        if (doFill) {
          p.fill(vertArray[i + 3][5]);
          executeContextFill()
        }
        if (doStroke) {
          p.stroke(vertArray[i + 3][6]);
          executeContextStroke()
        }
        curContext.closePath()
      } else if (curShape === 17) {
        if (vertArrayLength > 3) for (i = 0; i + 1 < vertArrayLength; i += 2) {
          cachedVertArray = vertArray[i];
          curContext.beginPath();
          if (i + 3 < vertArrayLength) {
            curContext.moveTo(vertArray[i + 2][0], vertArray[i + 2][1]);
            curContext.lineTo(cachedVertArray[0], cachedVertArray[1]);
            curContext.lineTo(vertArray[i + 1][0], vertArray[i + 1][1]);
            curContext.lineTo(vertArray[i + 3][0], vertArray[i + 3][1]);
            if (doFill) p.fill(vertArray[i + 3][5]);
            if (doStroke) p.stroke(vertArray[i + 3][6])
          } else {
            curContext.moveTo(cachedVertArray[0], cachedVertArray[1]);
            curContext.lineTo(vertArray[i + 1][0], vertArray[i + 1][1])
          }
          fillStrokeClose()
        }
      } else {
        curContext.beginPath();
        curContext.moveTo(vertArray[0][0], vertArray[0][1]);
        for (i = 1; i < vertArrayLength; i++) {
          cachedVertArray = vertArray[i];
          if (cachedVertArray["isVert"]) if (cachedVertArray["moveTo"]) curContext.moveTo(cachedVertArray[0], cachedVertArray[1]);
          else curContext.lineTo(cachedVertArray[0], cachedVertArray[1])
        }
        fillStrokeClose()
      }
      isCurve = false;
      isBezier = false;
      curveVertArray = [];
      curveVertCount = 0;
      if (closeShape) vertArray.pop()
    };
    Drawing3D.prototype.endShape = function(mode) {
      if (vertArray.length === 0) return;
      var closeShape = mode === 2;
      var lineVertArray = [];
      var fillVertArray = [];
      var colorVertArray = [];
      var strokeVertArray = [];
      var texVertArray = [];
      var cachedVertArray;
      firstVert = true;
      var i, j, k;
      var vertArrayLength = vertArray.length;
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 0; j < 3; j++) fillVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 5; j < 9; j++) colorVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        for (j = 9; j < 13; j++) strokeVertArray.push(cachedVertArray[j])
      }
      for (i = 0; i < vertArrayLength; i++) {
        cachedVertArray = vertArray[i];
        texVertArray.push(cachedVertArray[3]);
        texVertArray.push(cachedVertArray[4])
      }
      if (closeShape) {
        fillVertArray.push(vertArray[0][0]);
        fillVertArray.push(vertArray[0][1]);
        fillVertArray.push(vertArray[0][2]);
        for (i = 5; i < 9; i++) colorVertArray.push(vertArray[0][i]);
        for (i = 9; i < 13; i++) strokeVertArray.push(vertArray[0][i]);
        texVertArray.push(vertArray[0][3]);
        texVertArray.push(vertArray[0][4])
      }
      if (isCurve && (curShape === 20 || curShape === undef)) {
        lineVertArray = fillVertArray;
        if (doStroke) line3D(lineVertArray, null, strokeVertArray);
        if (doFill) fill3D(fillVertArray, null, colorVertArray)
      } else if (isBezier && (curShape === 20 || curShape === undef)) {
        lineVertArray = fillVertArray;
        lineVertArray.splice(lineVertArray.length - 3);
        strokeVertArray.splice(strokeVertArray.length - 4);
        if (doStroke) line3D(lineVertArray, null, strokeVertArray);
        if (doFill) fill3D(fillVertArray, "TRIANGLES", colorVertArray)
      } else {
        if (curShape === 2) {
          for (i = 0; i < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            for (j = 0; j < 3; j++) lineVertArray.push(cachedVertArray[j])
          }
          point3D(lineVertArray, strokeVertArray)
        } else if (curShape === 4) {
          for (i = 0; i < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            for (j = 0; j < 3; j++) lineVertArray.push(cachedVertArray[j])
          }
          for (i = 0; i < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            for (j = 5; j < 9; j++) colorVertArray.push(cachedVertArray[j])
          }
          line3D(lineVertArray, "LINES", strokeVertArray)
        } else if (curShape === 9) {
          if (vertArrayLength > 2) for (i = 0; i + 2 < vertArrayLength; i += 3) {
            fillVertArray = [];
            texVertArray = [];
            lineVertArray = [];
            colorVertArray = [];
            strokeVertArray = [];
            for (j = 0; j < 3; j++) for (k = 0; k < 3; k++) {
              lineVertArray.push(vertArray[i + j][k]);
              fillVertArray.push(vertArray[i + j][k])
            }
            for (j = 0; j < 3; j++) for (k = 3; k < 5; k++) texVertArray.push(vertArray[i + j][k]);
            for (j = 0; j < 3; j++) for (k = 5; k < 9; k++) {
              colorVertArray.push(vertArray[i + j][k]);
              strokeVertArray.push(vertArray[i + j][k + 4])
            }
            if (doStroke) line3D(lineVertArray, "LINE_LOOP", strokeVertArray);
            if (doFill || usingTexture) fill3D(fillVertArray, "TRIANGLES", colorVertArray, texVertArray)
          }
        } else if (curShape === 10) {
          if (vertArrayLength > 2) for (i = 0; i + 2 < vertArrayLength; i++) {
            lineVertArray = [];
            fillVertArray = [];
            strokeVertArray = [];
            colorVertArray = [];
            texVertArray = [];
            for (j = 0; j < 3; j++) for (k = 0; k < 3; k++) {
              lineVertArray.push(vertArray[i + j][k]);
              fillVertArray.push(vertArray[i + j][k])
            }
            for (j = 0; j < 3; j++) for (k = 3; k < 5; k++) texVertArray.push(vertArray[i + j][k]);
            for (j = 0; j < 3; j++) for (k = 5; k < 9; k++) {
              strokeVertArray.push(vertArray[i + j][k + 4]);
              colorVertArray.push(vertArray[i + j][k])
            }
            if (doFill || usingTexture) fill3D(fillVertArray, "TRIANGLE_STRIP", colorVertArray, texVertArray);
            if (doStroke) line3D(lineVertArray, "LINE_LOOP", strokeVertArray)
          }
        } else if (curShape === 11) {
          if (vertArrayLength > 2) {
            for (i = 0; i < 3; i++) {
              cachedVertArray = vertArray[i];
              for (j = 0; j < 3; j++) lineVertArray.push(cachedVertArray[j])
            }
            for (i = 0; i < 3; i++) {
              cachedVertArray = vertArray[i];
              for (j = 9; j < 13; j++) strokeVertArray.push(cachedVertArray[j])
            }
            if (doStroke) line3D(lineVertArray, "LINE_LOOP", strokeVertArray);
            for (i = 2; i + 1 < vertArrayLength; i++) {
              lineVertArray = [];
              strokeVertArray = [];
              lineVertArray.push(vertArray[0][0]);
              lineVertArray.push(vertArray[0][1]);
              lineVertArray.push(vertArray[0][2]);
              strokeVertArray.push(vertArray[0][9]);
              strokeVertArray.push(vertArray[0][10]);
              strokeVertArray.push(vertArray[0][11]);
              strokeVertArray.push(vertArray[0][12]);
              for (j = 0; j < 2; j++) for (k = 0; k < 3; k++) lineVertArray.push(vertArray[i + j][k]);
              for (j = 0; j < 2; j++) for (k = 9; k < 13; k++) strokeVertArray.push(vertArray[i + j][k]);
              if (doStroke) line3D(lineVertArray, "LINE_STRIP", strokeVertArray)
            }
            if (doFill || usingTexture) fill3D(fillVertArray, "TRIANGLE_FAN", colorVertArray, texVertArray)
          }
        } else if (curShape === 16) for (i = 0; i + 3 < vertArrayLength; i += 4) {
          lineVertArray = [];
          for (j = 0; j < 4; j++) {
            cachedVertArray = vertArray[i + j];
            for (k = 0; k < 3; k++) lineVertArray.push(cachedVertArray[k])
          }
          if (doStroke) line3D(lineVertArray, "LINE_LOOP", strokeVertArray);
          if (doFill) {
            fillVertArray = [];
            colorVertArray = [];
            texVertArray = [];
            for (j = 0; j < 3; j++) fillVertArray.push(vertArray[i][j]);
            for (j = 5; j < 9; j++) colorVertArray.push(vertArray[i][j]);
            for (j = 0; j < 3; j++) fillVertArray.push(vertArray[i + 1][j]);
            for (j = 5; j < 9; j++) colorVertArray.push(vertArray[i + 1][j]);
            for (j = 0; j < 3; j++) fillVertArray.push(vertArray[i + 3][j]);
            for (j = 5; j < 9; j++) colorVertArray.push(vertArray[i + 3][j]);
            for (j = 0; j < 3; j++) fillVertArray.push(vertArray[i + 2][j]);
            for (j = 5; j < 9; j++) colorVertArray.push(vertArray[i + 2][j]);
            if (usingTexture) {
              texVertArray.push(vertArray[i + 0][3]);
              texVertArray.push(vertArray[i + 0][4]);
              texVertArray.push(vertArray[i + 1][3]);
              texVertArray.push(vertArray[i + 1][4]);
              texVertArray.push(vertArray[i + 3][3]);
              texVertArray.push(vertArray[i + 3][4]);
              texVertArray.push(vertArray[i + 2][3]);
              texVertArray.push(vertArray[i + 2][4])
            }
            fill3D(fillVertArray, "TRIANGLE_STRIP", colorVertArray, texVertArray)
          }
        } else if (curShape === 17) {
          var tempArray = [];
          if (vertArrayLength > 3) {
            for (i = 0; i < 2; i++) {
              cachedVertArray = vertArray[i];
              for (j = 0; j < 3; j++) lineVertArray.push(cachedVertArray[j])
            }
            for (i = 0; i < 2; i++) {
              cachedVertArray = vertArray[i];
              for (j = 9; j < 13; j++) strokeVertArray.push(cachedVertArray[j])
            }
            line3D(lineVertArray, "LINE_STRIP", strokeVertArray);
            if (vertArrayLength > 4 && vertArrayLength % 2 > 0) {
              tempArray = fillVertArray.splice(fillVertArray.length - 3);
              vertArray.pop()
            }
            for (i = 0; i + 3 < vertArrayLength; i += 2) {
              lineVertArray = [];
              strokeVertArray = [];
              for (j = 0; j < 3; j++) lineVertArray.push(vertArray[i + 1][j]);
              for (j = 0; j < 3; j++) lineVertArray.push(vertArray[i + 3][j]);
              for (j = 0; j < 3; j++) lineVertArray.push(vertArray[i + 2][j]);
              for (j = 0; j < 3; j++) lineVertArray.push(vertArray[i + 0][j]);
              for (j = 9; j < 13; j++) strokeVertArray.push(vertArray[i + 1][j]);
              for (j = 9; j < 13; j++) strokeVertArray.push(vertArray[i + 3][j]);
              for (j = 9; j < 13; j++) strokeVertArray.push(vertArray[i + 2][j]);
              for (j = 9; j < 13; j++) strokeVertArray.push(vertArray[i + 0][j]);
              if (doStroke) line3D(lineVertArray, "LINE_STRIP", strokeVertArray)
            }
            if (doFill || usingTexture) fill3D(fillVertArray, "TRIANGLE_LIST", colorVertArray, texVertArray)
          }
        } else if (vertArrayLength === 1) {
          for (j = 0; j < 3; j++) lineVertArray.push(vertArray[0][j]);
          for (j = 9; j < 13; j++) strokeVertArray.push(vertArray[0][j]);
          point3D(lineVertArray, strokeVertArray)
        } else {
          for (i = 0; i < vertArrayLength; i++) {
            cachedVertArray = vertArray[i];
            for (j = 0; j < 3; j++) lineVertArray.push(cachedVertArray[j]);
            for (j = 5; j < 9; j++) strokeVertArray.push(cachedVertArray[j])
          }
          if (doStroke && closeShape) line3D(lineVertArray, "LINE_LOOP", strokeVertArray);
          else if (doStroke && !closeShape) line3D(lineVertArray, "LINE_STRIP", strokeVertArray);
          if (doFill || usingTexture) fill3D(fillVertArray, "TRIANGLE_FAN", colorVertArray, texVertArray)
        }
        usingTexture = false;
        curContext.useProgram(programObject3D);
        uniformi("usingTexture3d", programObject3D, "uUsingTexture", usingTexture)
      }
      isCurve = false;
      isBezier = false;
      curveVertArray = [];
      curveVertCount = 0
    };
    var splineForward = function(segments, matrix) {
      var f = 1 / segments;
      var ff = f * f;
      var fff = ff * f;
      matrix.set(0, 0, 0, 1, fff, ff, f, 0, 6 * fff, 2 * ff, 0, 0, 6 * fff, 0, 0, 0)
    };
    var curveInit = function() {
      if (!curveDrawMatrix) {
        curveBasisMatrix = new PMatrix3D;
        curveDrawMatrix = new PMatrix3D;
        curveInited = true
      }
      var s = curTightness;
      curveBasisMatrix.set((s - 1) / 2, (s + 3) / 2, (-3 - s) / 2, (1 - s) / 2, 1 - s, (-5 - s) / 2, s + 2, (s - 1) / 2, (s - 1) / 2, 0, (1 - s) / 2, 0, 0, 1, 0, 0);
      splineForward(curveDet, curveDrawMatrix);
      if (!bezierBasisInverse) curveToBezierMatrix = new PMatrix3D;
      curveToBezierMatrix.set(curveBasisMatrix);
      curveToBezierMatrix.preApply(bezierBasisInverse);
      curveDrawMatrix.apply(curveBasisMatrix)
    };
    Drawing2D.prototype.bezierVertex = function() {
      isBezier = true;
      var vert = [];
      if (firstVert) throw "vertex() must be used at least once before calling bezierVertex()";
      for (var i = 0; i < arguments.length; i++) vert[i] = arguments[i];
      vertArray.push(vert);
      vertArray[vertArray.length - 1]["isVert"] = false
    };
    Drawing3D.prototype.bezierVertex = function() {
      isBezier = true;
      var vert = [];
      if (firstVert) throw "vertex() must be used at least once before calling bezierVertex()";
      if (arguments.length === 9) {
        if (bezierDrawMatrix === undef) bezierDrawMatrix = new PMatrix3D;
        var lastPoint = vertArray.length - 1;
        splineForward(bezDetail, bezierDrawMatrix);
        bezierDrawMatrix.apply(bezierBasisMatrix);
        var draw = bezierDrawMatrix.array();
        var x1 = vertArray[lastPoint][0],
          y1 = vertArray[lastPoint][1],
          z1 = vertArray[lastPoint][2];
        var xplot1 = draw[4] * x1 + draw[5] * arguments[0] + draw[6] * arguments[3] + draw[7] * arguments[6];
        var xplot2 = draw[8] * x1 + draw[9] * arguments[0] + draw[10] * arguments[3] + draw[11] * arguments[6];
        var xplot3 = draw[12] * x1 + draw[13] * arguments[0] + draw[14] * arguments[3] + draw[15] * arguments[6];
        var yplot1 = draw[4] * y1 + draw[5] * arguments[1] + draw[6] * arguments[4] + draw[7] * arguments[7];
        var yplot2 = draw[8] * y1 + draw[9] * arguments[1] + draw[10] * arguments[4] + draw[11] * arguments[7];
        var yplot3 = draw[12] * y1 + draw[13] * arguments[1] + draw[14] * arguments[4] + draw[15] * arguments[7];
        var zplot1 = draw[4] * z1 + draw[5] * arguments[2] + draw[6] * arguments[5] + draw[7] * arguments[8];
        var zplot2 = draw[8] * z1 + draw[9] * arguments[2] + draw[10] * arguments[5] + draw[11] * arguments[8];
        var zplot3 = draw[12] * z1 + draw[13] * arguments[2] + draw[14] * arguments[5] + draw[15] * arguments[8];
        for (var j = 0; j < bezDetail; j++) {
          x1 += xplot1;
          xplot1 += xplot2;
          xplot2 += xplot3;
          y1 += yplot1;
          yplot1 += yplot2;
          yplot2 += yplot3;
          z1 += zplot1;
          zplot1 += zplot2;
          zplot2 += zplot3;
          p.vertex(x1, y1, z1)
        }
        p.vertex(arguments[6], arguments[7], arguments[8])
      }
    };
    p.texture = function(pimage) {
      var curContext = drawing.$ensureContext();
      if (pimage.__texture) curContext.bindTexture(curContext.TEXTURE_2D, pimage.__texture);
      else if (pimage.localName === "canvas") {
        curContext.bindTexture(curContext.TEXTURE_2D, canTex);
        curContext.texImage2D(curContext.TEXTURE_2D, 0, curContext.RGBA, curContext.RGBA, curContext.UNSIGNED_BYTE, pimage);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MAG_FILTER, curContext.LINEAR);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MIN_FILTER, curContext.LINEAR);
        curContext.generateMipmap(curContext.TEXTURE_2D);
        curTexture.width = pimage.width;
        curTexture.height = pimage.height
      } else {
        var texture = curContext.createTexture(),
          cvs = document.createElement("canvas"),
          cvsTextureCtx = cvs.getContext("2d"),
          pot;
        if (pimage.width & pimage.width - 1 === 0) cvs.width = pimage.width;
        else {
          pot = 1;
          while (pot < pimage.width) pot *= 2;
          cvs.width = pot
        }
        if (pimage.height & pimage.height - 1 === 0) cvs.height = pimage.height;
        else {
          pot = 1;
          while (pot < pimage.height) pot *= 2;
          cvs.height = pot
        }
        cvsTextureCtx.drawImage(pimage.sourceImg, 0, 0, pimage.width, pimage.height, 0, 0, cvs.width, cvs.height);
        curContext.bindTexture(curContext.TEXTURE_2D, texture);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MIN_FILTER, curContext.LINEAR_MIPMAP_LINEAR);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MAG_FILTER, curContext.LINEAR);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_WRAP_T, curContext.CLAMP_TO_EDGE);
        curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_WRAP_S, curContext.CLAMP_TO_EDGE);
        curContext.texImage2D(curContext.TEXTURE_2D, 0, curContext.RGBA, curContext.RGBA, curContext.UNSIGNED_BYTE, cvs);
        curContext.generateMipmap(curContext.TEXTURE_2D);
        pimage.__texture = texture;
        curTexture.width = pimage.width;
        curTexture.height = pimage.height
      }
      usingTexture = true;
      curContext.useProgram(programObject3D);
      uniformi("usingTexture3d", programObject3D, "uUsingTexture", usingTexture)
    };
    p.textureMode = function(mode) {
      curTextureMode = mode
    };
    var curveVertexSegment = function(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) {
      var x0 = x2;
      var y0 = y2;
      var z0 = z2;
      var draw = curveDrawMatrix.array();
      var xplot1 = draw[4] * x1 + draw[5] * x2 + draw[6] * x3 + draw[7] * x4;
      var xplot2 = draw[8] * x1 + draw[9] * x2 + draw[10] * x3 + draw[11] * x4;
      var xplot3 = draw[12] * x1 + draw[13] * x2 + draw[14] * x3 + draw[15] * x4;
      var yplot1 = draw[4] * y1 + draw[5] * y2 + draw[6] * y3 + draw[7] * y4;
      var yplot2 = draw[8] * y1 + draw[9] * y2 + draw[10] * y3 + draw[11] * y4;
      var yplot3 = draw[12] * y1 + draw[13] * y2 + draw[14] * y3 + draw[15] * y4;
      var zplot1 = draw[4] * z1 + draw[5] * z2 + draw[6] * z3 + draw[7] * z4;
      var zplot2 = draw[8] * z1 + draw[9] * z2 + draw[10] * z3 + draw[11] * z4;
      var zplot3 = draw[12] * z1 + draw[13] * z2 + draw[14] * z3 + draw[15] * z4;
      p.vertex(x0, y0, z0);
      for (var j = 0; j < curveDet; j++) {
        x0 += xplot1;
        xplot1 += xplot2;
        xplot2 += xplot3;
        y0 += yplot1;
        yplot1 += yplot2;
        yplot2 += yplot3;
        z0 += zplot1;
        zplot1 += zplot2;
        zplot2 += zplot3;
        p.vertex(x0, y0, z0)
      }
    };
    Drawing2D.prototype.curveVertex = function(x, y) {
      isCurve = true;
      p.vertex(x, y)
    };
    Drawing3D.prototype.curveVertex = function(x, y, z) {
      isCurve = true;
      if (!curveInited) curveInit();
      var vert = [];
      vert[0] = x;
      vert[1] = y;
      vert[2] = z;
      curveVertArray.push(vert);
      curveVertCount++;
      if (curveVertCount > 3) curveVertexSegment(curveVertArray[curveVertCount - 4][0], curveVertArray[curveVertCount - 4][1], curveVertArray[curveVertCount - 4][2], curveVertArray[curveVertCount - 3][0], curveVertArray[curveVertCount - 3][1], curveVertArray[curveVertCount - 3][2], curveVertArray[curveVertCount - 2][0], curveVertArray[curveVertCount - 2][1], curveVertArray[curveVertCount - 2][2], curveVertArray[curveVertCount - 1][0], curveVertArray[curveVertCount - 1][1], curveVertArray[curveVertCount - 1][2])
    };
    Drawing2D.prototype.curve = function(x1, y1, x2, y2, x3, y3, x4, y4) {
      p.beginShape();
      p.curveVertex(x1, y1);
      p.curveVertex(x2, y2);
      p.curveVertex(x3, y3);
      p.curveVertex(x4, y4);
      p.endShape()
    };
    Drawing3D.prototype.curve = function(x1, y1, z1, x2, y2, z2, x3, y3, z3, x4, y4, z4) {
      if (z4 !== undef) {
        p.beginShape();
        p.curveVertex(x1, y1, z1);
        p.curveVertex(x2, y2, z2);
        p.curveVertex(x3, y3, z3);
        p.curveVertex(x4, y4, z4);
        p.endShape();
        return
      }
      p.beginShape();
      p.curveVertex(x1, y1);
      p.curveVertex(z1, x2);
      p.curveVertex(y2, z2);
      p.curveVertex(x3, y3);
      p.endShape()
    };
    p.curveTightness = function(tightness) {
      curTightness = tightness
    };
    p.curveDetail = function(detail) {
      curveDet = detail;
      curveInit()
    };
    p.rectMode = function(aRectMode) {
      curRectMode = aRectMode
    };
    p.imageMode = function(mode) {
      switch (mode) {
      case 0:
        imageModeConvert = imageModeCorner;
        break;
      case 1:
        imageModeConvert = imageModeCorners;
        break;
      case 3:
        imageModeConvert = imageModeCenter;
        break;
      default:
        throw "Invalid imageMode";
      }
    };
    p.ellipseMode = function(aEllipseMode) {
      curEllipseMode = aEllipseMode
    };
    p.arc = function(x, y, width, height, start, stop) {
      if (width <= 0 || stop < start) return;
      if (curEllipseMode === 1) {
        width = width - x;
        height = height - y
      } else if (curEllipseMode === 2) {
        x = x - width;
        y = y - height;
        width = width * 2;
        height = height * 2
      } else if (curEllipseMode === 3) {
        x = x - width / 2;
        y = y - height / 2
      }
      while (start < 0) {
        start += 6.283185307179586;
        stop += 6.283185307179586
      }
      if (stop - start > 6.283185307179586) {
        start = 0;
        stop = 6.283185307179586
      }
      var hr = width / 2,
        vr = height / 2,
        centerX = x + hr,
        centerY = y + vr,
        startLUT = 0 | 0.5 + start * p.RAD_TO_DEG * 2,
        stopLUT = 0 | 0.5 + stop * p.RAD_TO_DEG * 2,
        i, j;
      if (doFill) {
        var savedStroke = doStroke;
        doStroke = false;
        p.beginShape();
        p.vertex(centerX, centerY);
        for (i = startLUT; i <= stopLUT; i++) {
          j = i % 720;
          p.vertex(centerX + cosLUT[j] * hr, centerY + sinLUT[j] * vr)
        }
        p.endShape(2);
        doStroke = savedStroke
      }
      if (doStroke) {
        var savedFill = doFill;
        doFill = false;
        p.beginShape();
        for (i = startLUT; i <= stopLUT; i++) {
          j = i % 720;
          p.vertex(centerX + cosLUT[j] * hr, centerY + sinLUT[j] * vr)
        }
        p.endShape();
        doFill = savedFill
      }
    };
    Drawing2D.prototype.line = function(x1, y1, x2, y2) {
      if (!doStroke) return;
      x1 = Math.round(x1);
      x2 = Math.round(x2);
      y1 = Math.round(y1);
      y2 = Math.round(y2);
      if (x1 === x2 && y1 === y2) {
        p.point(x1, y1);
        return
      }
      var swap = undef,
        lineCap = undef,
        drawCrisp = true,
        currentModelView = modelView.array(),
        identityMatrix = [1, 0, 0, 0, 1, 0];
      for (var i = 0; i < 6 && drawCrisp; i++) drawCrisp = currentModelView[i] === identityMatrix[i];
      if (drawCrisp) {
        if (x1 === x2) {
          if (y1 > y2) {
            swap = y1;
            y1 = y2;
            y2 = swap
          }
          y2++;
          if (lineWidth % 2 === 1) curContext.translate(0.5, 0)
        } else if (y1 === y2) {
          if (x1 > x2) {
            swap = x1;
            x1 = x2;
            x2 = swap
          }
          x2++;
          if (lineWidth % 2 === 1) curContext.translate(0, 0.5)
        }
        if (lineWidth === 1) {
          lineCap = curContext.lineCap;
          curContext.lineCap = "butt"
        }
      }
      curContext.beginPath();
      curContext.moveTo(x1 || 0, y1 || 0);
      curContext.lineTo(x2 || 0, y2 || 0);
      executeContextStroke();
      if (drawCrisp) {
        if (x1 === x2 && lineWidth % 2 === 1) curContext.translate(-0.5, 0);
        else if (y1 === y2 && lineWidth % 2 === 1) curContext.translate(0, -0.5);
        if (lineWidth === 1) curContext.lineCap = lineCap
      }
    };
    Drawing3D.prototype.line = function(x1, y1, z1, x2, y2, z2) {
      if (y2 === undef || z2 === undef) {
        z2 = 0;
        y2 = x2;
        x2 = z1;
        z1 = 0
      }
      if (x1 === x2 && y1 === y2 && z1 === z2) {
        p.point(x1, y1, z1);
        return
      }
      var lineVerts = [x1, y1, z1, x2, y2, z2];
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      if (lineWidth > 0 && doStroke) {
        curContext.useProgram(programObject2D);
        uniformMatrix("uModel2d", programObject2D, "uModel", false, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
        uniformf("uColor2d", programObject2D, "uColor", strokeStyle);
        uniformi("uIsDrawingText", programObject2D, "uIsDrawingText", false);
        vertexAttribPointer("aVertex2d", programObject2D, "aVertex", 3, lineBuffer);
        disableVertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord");
        curContext.bufferData(curContext.ARRAY_BUFFER, new Float32Array(lineVerts), curContext.STREAM_DRAW);
        curContext.drawArrays(curContext.LINES, 0, 2)
      }
    };
    Drawing2D.prototype.bezier = function() {
      if (arguments.length !== 8) throw "You must use 8 parameters for bezier() in 2D mode";
      p.beginShape();
      p.vertex(arguments[0], arguments[1]);
      p.bezierVertex(arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7]);
      p.endShape()
    };
    Drawing3D.prototype.bezier = function() {
      if (arguments.length !== 12) throw "You must use 12 parameters for bezier() in 3D mode";
      p.beginShape();
      p.vertex(arguments[0], arguments[1], arguments[2]);
      p.bezierVertex(arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10], arguments[11]);
      p.endShape()
    };
    p.bezierDetail = function(detail) {
      bezDetail = detail
    };
    p.bezierPoint = function(a, b, c, d, t) {
      return (1 - t) * (1 - t) * (1 - t) * a + 3 * (1 - t) * (1 - t) * t * b + 3 * (1 - t) * t * t * c + t * t * t * d
    };
    p.bezierTangent = function(a, b, c, d, t) {
      return 3 * t * t * (-a + 3 * b - 3 * c + d) + 6 * t * (a - 2 * b + c) + 3 * (-a + b)
    };
    p.curvePoint = function(a, b, c, d, t) {
      return 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t)
    };
    p.curveTangent = function(a, b, c, d, t) {
      return 0.5 * (-a + c + 2 * (2 * a - 5 * b + 4 * c - d) * t + 3 * (-a + 3 * b - 3 * c + d) * t * t)
    };
    p.triangle = function(x1, y1, x2, y2, x3, y3) {
      p.beginShape(9);
      p.vertex(x1, y1, 0);
      p.vertex(x2, y2, 0);
      p.vertex(x3, y3, 0);
      p.endShape()
    };
    p.quad = function(x1, y1, x2, y2, x3, y3, x4, y4) {
      p.beginShape(16);
      p.vertex(x1, y1, 0);
      p.vertex(x2, y2, 0);
      p.vertex(x3, y3, 0);
      p.vertex(x4, y4, 0);
      p.endShape()
    };
    var roundedRect$2d = function(x, y, width, height, tl, tr, br, bl) {
      if (bl === undef) {
        tr = tl;
        br = tl;
        bl = tl
      }
      var halfWidth = width / 2,
        halfHeight = height / 2;
      if (tl > halfWidth || tl > halfHeight) tl = Math.min(halfWidth, halfHeight);
      if (tr > halfWidth || tr > halfHeight) tr = Math.min(halfWidth, halfHeight);
      if (br > halfWidth || br > halfHeight) br = Math.min(halfWidth, halfHeight);
      if (bl > halfWidth || bl > halfHeight) bl = Math.min(halfWidth, halfHeight);
      if (!doFill || doStroke) curContext.translate(0.5, 0.5);
      curContext.beginPath();
      curContext.moveTo(x + tl, y);
      curContext.lineTo(x + width - tr, y);
      curContext.quadraticCurveTo(x + width, y, x + width, y + tr);
      curContext.lineTo(x + width, y + height - br);
      curContext.quadraticCurveTo(x + width, y + height, x + width - br, y + height);
      curContext.lineTo(x + bl, y + height);
      curContext.quadraticCurveTo(x, y + height, x, y + height - bl);
      curContext.lineTo(x, y + tl);
      curContext.quadraticCurveTo(x, y, x + tl, y);
      if (!doFill || doStroke) curContext.translate(-0.5, -0.5);
      executeContextFill();
      executeContextStroke()
    };
    Drawing2D.prototype.rect = function(x, y, width, height, tl, tr, br, bl) {
      if (!width && !height) return;
      if (curRectMode === 1) {
        width -= x;
        height -= y
      } else if (curRectMode === 2) {
        width *= 2;
        height *= 2;
        x -= width / 2;
        y -= height / 2
      } else if (curRectMode === 3) {
        x -= width / 2;
        y -= height / 2
      }
      x = Math.round(x);
      y = Math.round(y);
      width = Math.round(width);
      height = Math.round(height);
      if (tl !== undef) {
        roundedRect$2d(x, y, width, height, tl, tr, br, bl);
        return
      }
      if (doStroke && lineWidth % 2 === 1) curContext.translate(0.5, 0.5);
      curContext.beginPath();
      curContext.rect(x, y, width, height);
      executeContextFill();
      executeContextStroke();
      if (doStroke && lineWidth % 2 === 1) curContext.translate(-0.5, -0.5)
    };
    Drawing3D.prototype.rect = function(x, y, width, height, tl, tr, br, bl) {
      if (tl !== undef) throw "rect() with rounded corners is not supported in 3D mode";
      if (curRectMode === 1) {
        width -= x;
        height -= y
      } else if (curRectMode === 2) {
        width *= 2;
        height *= 2;
        x -= width / 2;
        y -= height / 2
      } else if (curRectMode === 3) {
        x -= width / 2;
        y -= height / 2
      }
      var model = new PMatrix3D;
      model.translate(x, y, 0);
      model.scale(width, height, 1);
      model.transpose();
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      if (lineWidth > 0 && doStroke) {
        curContext.useProgram(programObject2D);
        uniformMatrix("uModel2d", programObject2D, "uModel", false, model.array());
        uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
        uniformf("uColor2d", programObject2D, "uColor", strokeStyle);
        uniformi("uIsDrawingText2d", programObject2D, "uIsDrawingText", false);
        vertexAttribPointer("aVertex2d", programObject2D, "aVertex", 3, rectBuffer);
        disableVertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord");
        curContext.drawArrays(curContext.LINE_LOOP, 0, rectVerts.length / 3)
      }
      if (doFill) {
        curContext.useProgram(programObject3D);
        uniformMatrix("uModel3d", programObject3D, "uModel", false, model.array());
        uniformMatrix("uView3d", programObject3D, "uView", false, view.array());
        curContext.enable(curContext.POLYGON_OFFSET_FILL);
        curContext.polygonOffset(1, 1);
        uniformf("color3d", programObject3D, "uColor", fillStyle);
        if (lightCount > 0) {
          var v = new PMatrix3D;
          v.set(view);
          var m = new PMatrix3D;
          m.set(model);
          v.mult(m);
          var normalMatrix = new PMatrix3D;
          normalMatrix.set(v);
          normalMatrix.invert();
          normalMatrix.transpose();
          uniformMatrix("uNormalTransform3d", programObject3D, "uNormalTransform", false, normalMatrix.array());
          vertexAttribPointer("aNormal3d", programObject3D, "aNormal", 3, rectNormBuffer)
        } else disableVertexAttribPointer("normal3d", programObject3D, "aNormal");
        vertexAttribPointer("vertex3d", programObject3D, "aVertex", 3, rectBuffer);
        curContext.drawArrays(curContext.TRIANGLE_FAN, 0, rectVerts.length / 3);
        curContext.disable(curContext.POLYGON_OFFSET_FILL)
      }
    };
    Drawing2D.prototype.ellipse = function(x, y, width, height) {
      x = x || 0;
      y = y || 0;
      if (width <= 0 && height <= 0) return;
      if (curEllipseMode === 2) {
        width *= 2;
        height *= 2
      } else if (curEllipseMode === 1) {
        width = width - x;
        height = height - y;
        x += width / 2;
        y += height / 2
      } else if (curEllipseMode === 0) {
        x += width / 2;
        y += height / 2
      }
      if (width === height) {
        curContext.beginPath();
        curContext.arc(x, y, width / 2, 0, 6.283185307179586, false);
        executeContextFill();
        executeContextStroke()
      } else {
        var w = width / 2,
          h = height / 2,
          C = 0.5522847498307933,
          c_x = C * w,
          c_y = C * h;
        p.beginShape();
        p.vertex(x + w, y);
        p.bezierVertex(x + w, y - c_y, x + c_x, y - h, x, y - h);
        p.bezierVertex(x - c_x, y - h, x - w, y - c_y, x - w, y);
        p.bezierVertex(x - w, y + c_y, x - c_x, y + h, x, y + h);
        p.bezierVertex(x + c_x, y + h, x + w, y + c_y, x + w, y);
        p.endShape()
      }
    };
    Drawing3D.prototype.ellipse = function(x, y, width, height) {
      x = x || 0;
      y = y || 0;
      if (width <= 0 && height <= 0) return;
      if (curEllipseMode === 2) {
        width *= 2;
        height *= 2
      } else if (curEllipseMode === 1) {
        width = width - x;
        height = height - y;
        x += width / 2;
        y += height / 2
      } else if (curEllipseMode === 0) {
        x += width / 2;
        y += height / 2
      }
      var w = width / 2,
        h = height / 2,
        C = 0.5522847498307933,
        c_x = C * w,
        c_y = C * h;
      p.beginShape();
      p.vertex(x + w, y);
      p.bezierVertex(x + w, y - c_y, 0, x + c_x, y - h, 0, x, y - h, 0);
      p.bezierVertex(x - c_x, y - h, 0, x - w, y - c_y, 0, x - w, y, 0);
      p.bezierVertex(x - w, y + c_y, 0, x - c_x, y + h, 0, x, y + h, 0);
      p.bezierVertex(x + c_x, y + h, 0, x + w, y + c_y, 0, x + w, y, 0);
      p.endShape();
      if (doFill) {
        var xAv = 0,
          yAv = 0,
          i, j;
        for (i = 0; i < vertArray.length; i++) {
          xAv += vertArray[i][0];
          yAv += vertArray[i][1]
        }
        xAv /= vertArray.length;
        yAv /= vertArray.length;
        var vert = [],
          fillVertArray = [],
          colorVertArray = [];
        vert[0] = xAv;
        vert[1] = yAv;
        vert[2] = 0;
        vert[3] = 0;
        vert[4] = 0;
        vert[5] = fillStyle[0];
        vert[6] = fillStyle[1];
        vert[7] = fillStyle[2];
        vert[8] = fillStyle[3];
        vert[9] = strokeStyle[0];
        vert[10] = strokeStyle[1];
        vert[11] = strokeStyle[2];
        vert[12] = strokeStyle[3];
        vert[13] = normalX;
        vert[14] = normalY;
        vert[15] = normalZ;
        vertArray.unshift(vert);
        for (i = 0; i < vertArray.length; i++) {
          for (j = 0; j < 3; j++) fillVertArray.push(vertArray[i][j]);
          for (j = 5; j < 9; j++) colorVertArray.push(vertArray[i][j])
        }
        fill3D(fillVertArray, "TRIANGLE_FAN", colorVertArray)
      }
    };
    p.normal = function(nx, ny, nz) {
      if (arguments.length !== 3 || !(typeof nx === "number" && typeof ny === "number" && typeof nz === "number")) throw "normal() requires three numeric arguments.";
      normalX = nx;
      normalY = ny;
      normalZ = nz;
      if (curShape !== 0) if (normalMode === 0) normalMode = 1;
      else if (normalMode === 1) normalMode = 2
    };
    p.save = function(file, img) {
      if (img !== undef) return window.open(img.toDataURL(), "_blank");
      return window.open(p.externals.canvas.toDataURL(), "_blank")
    };
    var saveNumber = 0;
    p.saveFrame = function(file) {
      if (file === undef) file = "screen-####.png";
      var frameFilename = file.replace(/#+/, function(all) {
        var s = "" + saveNumber++;
        while (s.length < all.length) s = "0" + s;
        return s
      });
      p.save(frameFilename)
    };
    var utilityContext2d = document.createElement("canvas").getContext("2d");
    var canvasDataCache = [undef, undef, undef];

    function getCanvasData(obj, w, h) {
      var canvasData = canvasDataCache.shift();
      if (canvasData === undef) {
        canvasData = {};
        canvasData.canvas = document.createElement("canvas");
        canvasData.context = canvasData.canvas.getContext("2d")
      }
      canvasDataCache.push(canvasData);
      var canvas = canvasData.canvas,
        context = canvasData.context,
        width = w || obj.width,
        height = h || obj.height;
      canvas.width = width;
      canvas.height = height;
      if (!obj) context.clearRect(0, 0, width, height);
      else if ("data" in obj) context.putImageData(obj, 0, 0);
      else {
        context.clearRect(0, 0, width, height);
        context.drawImage(obj, 0, 0, width, height)
      }
      return canvasData
    }
    function buildPixelsObject(pImage) {
      return {
        getLength: function(aImg) {
          return function() {
            if (aImg.isRemote) throw "Image is loaded remotely. Cannot get length.";
            else return aImg.imageData.data.length ? aImg.imageData.data.length / 4 : 0
          }
        }(pImage),
        getPixel: function(aImg) {
          return function(i) {
            var offset = i * 4,
              data = aImg.imageData.data;
            if (aImg.isRemote) throw "Image is loaded remotely. Cannot get pixels.";
            return (data[offset + 3] & 255) << 24 | (data[offset] & 255) << 16 | (data[offset + 1] & 255) << 8 | data[offset + 2] & 255
          }
        }(pImage),
        setPixel: function(aImg) {
          return function(i, c) {
            var offset = i * 4,
              data = aImg.imageData.data;
            if (aImg.isRemote) throw "Image is loaded remotely. Cannot set pixel.";
            data[offset + 0] = (c >> 16) & 255;
            data[offset + 1] = (c >> 8) & 255;
            data[offset + 2] = c & 255;
            data[offset + 3] = (c >> 24) & 255;
            aImg.__isDirty = true
          }
        }(pImage),
        toArray: function(aImg) {
          return function() {
            var arr = [],
              data = aImg.imageData.data,
              length = aImg.width * aImg.height;
            if (aImg.isRemote) throw "Image is loaded remotely. Cannot get pixels.";
            for (var i = 0, offset = 0; i < length; i++, offset += 4) arr.push((data[offset + 3] & 255) << 24 | (data[offset] & 255) << 16 | (data[offset + 1] & 255) << 8 | data[offset + 2] & 255);
            return arr
          }
        }(pImage),
        set: function(aImg) {
          return function(arr) {
            var offset, data, c;
            if (this.isRemote) throw "Image is loaded remotely. Cannot set pixels.";
            data = aImg.imageData.data;
            for (var i = 0, aL = arr.length; i < aL; i++) {
              c = arr[i];
              offset = i * 4;
              data[offset + 0] = (c >> 16) & 255;
              data[offset + 1] = (c >> 8) & 255;
              data[offset + 2] = c & 255;
              data[offset + 3] = (c >> 24) & 255
            }
            aImg.__isDirty = true
          }
        }(pImage)
      }
    }
    var PImage = function(aWidth, aHeight, aFormat) {
      this.__isDirty = false;
      if (aWidth instanceof HTMLImageElement) this.fromHTMLImageData(aWidth);
      else if (aHeight || aFormat) {
        this.width = aWidth || 1;
        this.height = aHeight || 1;
        var canvas = this.sourceImg = document.createElement("canvas");
        canvas.width = this.width;
        canvas.height = this.height;
        var imageData = this.imageData = canvas.getContext("2d").createImageData(this.width, this.height);
        this.format = aFormat === 2 || aFormat === 4 ? aFormat : 1;
        if (this.format === 1) for (var i = 3, data = this.imageData.data, len = data.length; i < len; i += 4) data[i] = 255;
        this.__isDirty = true;
        this.updatePixels()
      } else {
        this.width = 0;
        this.height = 0;
        this.imageData = utilityContext2d.createImageData(1, 1);
        this.format = 2
      }
      this.pixels = buildPixelsObject(this)
    };
    PImage.prototype = {
      __isPImage: true,
      updatePixels: function() {
        var canvas = this.sourceImg;
        if (canvas && canvas instanceof HTMLCanvasElement && this.__isDirty) canvas.getContext("2d").putImageData(this.imageData, 0, 0);
        this.__isDirty = false
      },
      fromHTMLImageData: function(htmlImg) {
        var canvasData = getCanvasData(htmlImg);
        try {
          var imageData = canvasData.context.getImageData(0, 0, htmlImg.width, htmlImg.height);
          this.fromImageData(imageData)
        } catch(e) {
          if (htmlImg.width && htmlImg.height) {
            this.isRemote = true;
            this.width = htmlImg.width;
            this.height = htmlImg.height
          }
        }
        this.sourceImg = htmlImg
      },
      "get": function(x, y, w, h) {
        if (!arguments.length) return p.get(this);
        if (arguments.length === 2) return p.get(x, y, this);
        if (arguments.length === 4) return p.get(x, y, w, h, this)
      },
      "set": function(x, y, c) {
        p.set(x, y, c, this);
        this.__isDirty = true
      },
      blend: function(srcImg, x, y, width, height, dx, dy, dwidth, dheight, MODE) {
        if (arguments.length === 9) p.blend(this, srcImg, x, y, width, height, dx, dy, dwidth, dheight, this);
        else if (arguments.length === 10) p.blend(srcImg, x, y, width, height, dx, dy, dwidth, dheight, MODE, this);
        delete this.sourceImg
      },
      copy: function(srcImg, sx, sy, swidth, sheight, dx, dy, dwidth, dheight) {
        if (arguments.length === 8) p.blend(this, srcImg, sx, sy, swidth, sheight, dx, dy, dwidth, 0, this);
        else if (arguments.length === 9) p.blend(srcImg, sx, sy, swidth, sheight, dx, dy, dwidth, dheight, 0, this);
        delete this.sourceImg
      },
      filter: function(mode, param) {
        if (arguments.length === 2) p.filter(mode, param, this);
        else if (arguments.length === 1) p.filter(mode, null, this);
        delete this.sourceImg
      },
      save: function(file) {
        p.save(file, this)
      },
      resize: function(w, h) {
        if (this.isRemote) throw "Image is loaded remotely. Cannot resize.";
        if (this.width !== 0 || this.height !== 0) {
          if (w === 0 && h !== 0) w = Math.floor(this.width / this.height * h);
          else if (h === 0 && w !== 0) h = Math.floor(this.height / this.width * w);
          var canvas = getCanvasData(this.imageData).canvas;
          var imageData = getCanvasData(canvas, w, h).context.getImageData(0, 0, w, h);
          this.fromImageData(imageData)
        }
      },
      mask: function(mask) {
        var obj = this.toImageData(),
          i, size;
        if (mask instanceof PImage || mask.__isPImage) if (mask.width === this.width && mask.height === this.height) {
          mask = mask.toImageData();
          for (i = 2, size = this.width * this.height * 4; i < size; i += 4) obj.data[i + 1] = mask.data[i]
        } else throw "mask must have the same dimensions as PImage.";
        else if (mask instanceof
        Array) if (this.width * this.height === mask.length) for (i = 0, size = mask.length; i < size; ++i) obj.data[i * 4 + 3] = mask[i];
        else throw "mask array must be the same length as PImage pixels array.";
        this.fromImageData(obj)
      },
      loadPixels: nop,
      toImageData: function() {
        if (this.isRemote) return this.sourceImg;
        if (!this.__isDirty) return this.imageData;
        var canvasData = getCanvasData(this.sourceImg);
        return canvasData.context.getImageData(0, 0, this.width, this.height)
      },
      toDataURL: function() {
        if (this.isRemote) throw "Image is loaded remotely. Cannot create dataURI.";
        var canvasData = getCanvasData(this.imageData);
        return canvasData.canvas.toDataURL()
      },
      fromImageData: function(canvasImg) {
        var w = canvasImg.width,
          h = canvasImg.height,
          canvas = document.createElement("canvas"),
          ctx = canvas.getContext("2d");
        this.width = canvas.width = w;
        this.height = canvas.height = h;
        ctx.putImageData(canvasImg, 0, 0);
        this.format = 2;
        this.imageData = canvasImg;
        this.sourceImg = canvas
      }
    };
    p.PImage = PImage;
    p.createImage = function(w, h, mode) {
      return new PImage(w, h, mode)
    };
    p.loadImage = function(file, type, callback) {
      if (type) file = file + "." + type;
      var pimg;
      if (curSketch.imageCache.images[file]) {
        pimg = new PImage(curSketch.imageCache.images[file]);
        pimg.loaded = true;
        return pimg
      }
      pimg = new PImage;
      var img = document.createElement("img");
      pimg.sourceImg = img;
      img.onload = function(aImage, aPImage, aCallback) {
        var image = aImage;
        var pimg = aPImage;
        var callback = aCallback;
        return function() {
          pimg.fromHTMLImageData(image);
          pimg.loaded = true;
          if (callback) callback()
        }
      }(img, pimg, callback);
      img.src = file;
      return pimg
    };
    p.requestImage = p.loadImage;

    function get$2(x, y) {
      var data;
      if (x >= p.width || x < 0 || y < 0 || y >= p.height) return 0;
      if (isContextReplaced) {
        var offset = ((0 | x) + p.width * (0 | y)) * 4;
        data = p.imageData.data;
        return (data[offset + 3] & 255) << 24 | (data[offset] & 255) << 16 | (data[offset + 1] & 255) << 8 | data[offset + 2] & 255
      }
      data = p.toImageData(0 | x, 0 | y, 1, 1).data;
      return (data[3] & 255) << 24 | (data[0] & 255) << 16 | (data[1] & 255) << 8 | data[2] & 255
    }
    function get$3(x, y, img) {
      if (img.isRemote) throw "Image is loaded remotely. Cannot get x,y.";
      var offset = y * img.width * 4 + x * 4,
        data = img.imageData.data;
      return (data[offset + 3] & 255) << 24 | (data[offset] & 255) << 16 | (data[offset + 1] & 255) << 8 | data[offset + 2] & 255
    }
    function get$4(x, y, w, h) {
      var c = new PImage(w, h, 2);
      c.fromImageData(p.toImageData(x, y, w, h));
      return c
    }
    function get$5(x, y, w, h, img) {
      if (img.isRemote) throw "Image is loaded remotely. Cannot get x,y,w,h.";
      var c = new PImage(w, h, 2),
        cData = c.imageData.data,
        imgWidth = img.width,
        imgHeight = img.height,
        imgData = img.imageData.data;
      var startRow = Math.max(0, -y),
        startColumn = Math.max(0, -x),
        stopRow = Math.min(h, imgHeight - y),
        stopColumn = Math.min(w, imgWidth - x);
      for (var i = startRow; i < stopRow; ++i) {
        var sourceOffset = ((y + i) * imgWidth + (x + startColumn)) * 4;
        var targetOffset = (i * w + startColumn) * 4;
        for (var j = startColumn; j < stopColumn; ++j) {
          cData[targetOffset++] = imgData[sourceOffset++];
          cData[targetOffset++] = imgData[sourceOffset++];
          cData[targetOffset++] = imgData[sourceOffset++];
          cData[targetOffset++] = imgData[sourceOffset++]
        }
      }
      c.__isDirty = true;
      return c
    }
    p.get = function(x, y, w, h, img) {
      if (img !== undefined) return get$5(x, y, w, h, img);
      if (h !== undefined) return get$4(x, y, w, h);
      if (w !== undefined) return get$3(x, y, w);
      if (y !== undefined) return get$2(x, y);
      if (x !== undefined) return get$5(0, 0, x.width, x.height, x);
      return get$4(0, 0, p.width, p.height)
    };
    p.createGraphics = function(w, h, render) {
      var pg = new Processing;
      pg.size(w, h, render);
      pg.background(0, 0);
      return pg
    };

    function resetContext() {
      if (isContextReplaced) {
        curContext = originalContext;
        isContextReplaced = false;
        p.updatePixels()
      }
    }

    function SetPixelContextWrapper() {
      function wrapFunction(newContext, name) {
        function wrapper() {
          resetContext();
          curContext[name].apply(curContext, arguments)
        }
        newContext[name] = wrapper
      }
      function wrapProperty(newContext, name) {
        function getter() {
          resetContext();
          return curContext[name]
        }
        function setter(value) {
          resetContext();
          curContext[name] = value
        }
        p.defineProperty(newContext, name, {
          get: getter,
          set: setter
        })
      }
      for (var n in curContext) if (typeof curContext[n] === "function") wrapFunction(this, n);
      else wrapProperty(this, n)
    }
    function replaceContext() {
      if (isContextReplaced) return;
      p.loadPixels();
      if (proxyContext === null) {
        originalContext = curContext;
        proxyContext = new SetPixelContextWrapper
      }
      isContextReplaced = true;
      curContext = proxyContext;
      setPixelsCached = 0
    }
    function set$3(x, y, c) {
      if (x < p.width && x >= 0 && y >= 0 && y < p.height) {
        replaceContext();
        p.pixels.setPixel((0 | x) + p.width * (0 | y), c);
        if (++setPixelsCached > maxPixelsCached) resetContext()
      }
    }
    function set$4(x, y, obj, img) {
      if (img.isRemote) throw "Image is loaded remotely. Cannot set x,y.";
      var c = p.color.toArray(obj);
      var offset = y * img.width * 4 + x * 4;
      var data = img.imageData.data;
      data[offset] = c[0];
      data[offset + 1] = c[1];
      data[offset + 2] = c[2];
      data[offset + 3] = c[3]
    }
    p.set = function(x, y, obj, img) {
      var color, oldFill;
      if (arguments.length === 3) if (typeof obj === "number") set$3(x, y, obj);
      else {
        if (obj instanceof PImage || obj.__isPImage) p.image(obj, x, y)
      } else if (arguments.length === 4) set$4(x, y, obj, img)
    };
    p.imageData = {};
    p.pixels = {
      getLength: function() {
        return p.imageData.data.length ? p.imageData.data.length / 4 : 0
      },
      getPixel: function(i) {
        var offset = i * 4,
          data = p.imageData.data;
        return data[offset + 3] << 24 & 4278190080 | data[offset + 0] << 16 & 16711680 | data[offset + 1] << 8 & 65280 | data[offset + 2] & 255
      },
      setPixel: function(i, c) {
        var offset = i * 4,
          data = p.imageData.data;
        data[offset + 0] = (c & 16711680) >>> 16;
        data[offset + 1] = (c & 65280) >>> 8;
        data[offset + 2] = c & 255;
        data[offset + 3] = (c & 4278190080) >>> 24
      },
      toArray: function() {
        var arr = [],
          length = p.imageData.width * p.imageData.height,
          data = p.imageData.data;
        for (var i = 0, offset = 0; i < length; i++, offset += 4) arr.push(data[offset + 3] << 24 & 4278190080 | data[offset + 0] << 16 & 16711680 | data[offset + 1] << 8 & 65280 | data[offset + 2] & 255);
        return arr
      },
      set: function(arr) {
        for (var i = 0, aL = arr.length; i < aL; i++) this.setPixel(i, arr[i])
      }
    };
    p.loadPixels = function() {
      p.imageData = drawing.$ensureContext().getImageData(0, 0, p.width, p.height)
    };
    p.updatePixels = function() {
      if (p.imageData) drawing.$ensureContext().putImageData(p.imageData, 0, 0)
    };
    p.hint = function(which) {
      var curContext = drawing.$ensureContext();
      if (which === 4) {
        curContext.disable(curContext.DEPTH_TEST);
        curContext.depthMask(false);
        curContext.clear(curContext.DEPTH_BUFFER_BIT)
      } else if (which === -4) {
        curContext.enable(curContext.DEPTH_TEST);
        curContext.depthMask(true)
      } else if (which === -1 || which === 2) renderSmooth = true;
      else if (which === 1) renderSmooth = false
    };
    var backgroundHelper = function(arg1, arg2, arg3, arg4) {
      var obj;
      if (arg1 instanceof PImage || arg1.__isPImage) {
        obj = arg1;
        if (!obj.loaded) throw "Error using image in background(): PImage not loaded.";
        if (obj.width !== p.width || obj.height !== p.height) throw "Background image must be the same dimensions as the canvas.";
      } else obj = p.color(arg1, arg2, arg3, arg4);
      backgroundObj = obj
    };
    Drawing2D.prototype.background = function(arg1, arg2, arg3, arg4) {
      if (arg1 !== undef) backgroundHelper(arg1, arg2, arg3, arg4);
      if (backgroundObj instanceof PImage || backgroundObj.__isPImage) {
        saveContext();
        curContext.setTransform(1, 0, 0, 1, 0, 0);
        p.image(backgroundObj, 0, 0);
        restoreContext()
      } else {
        saveContext();
        curContext.setTransform(1, 0, 0, 1, 0, 0);
        if (p.alpha(backgroundObj) !== colorModeA) curContext.clearRect(0, 0, p.width, p.height);
        curContext.fillStyle = p.color.toString(backgroundObj);
        curContext.fillRect(0, 0, p.width, p.height);
        isFillDirty = true;
        restoreContext()
      }
    };
    Drawing3D.prototype.background = function(arg1, arg2, arg3, arg4) {
      if (arguments.length > 0) backgroundHelper(arg1, arg2, arg3, arg4);
      var c = p.color.toGLArray(backgroundObj);
      curContext.clearColor(c[0], c[1], c[2], c[3]);
      curContext.clear(curContext.COLOR_BUFFER_BIT | curContext.DEPTH_BUFFER_BIT)
    };
    Drawing2D.prototype.image = function(img, x, y, w, h) {
      x = Math.round(x);
      y = Math.round(y);
      if (img.width > 0) {
        var wid = w || img.width;
        var hgt = h || img.height;
        var bounds = imageModeConvert(x || 0, y || 0, w || img.width, h || img.height, arguments.length < 4);
        var fastImage = !!img.sourceImg && curTint === null;
        if (fastImage) {
          var htmlElement = img.sourceImg;
          if (img.__isDirty) img.updatePixels();
          curContext.drawImage(htmlElement, 0, 0, htmlElement.width, htmlElement.height, bounds.x, bounds.y, bounds.w, bounds.h)
        } else {
          var obj = img.toImageData();
          if (curTint !== null) {
            curTint(obj);
            img.__isDirty = true
          }
          curContext.drawImage(getCanvasData(obj).canvas, 0, 0, img.width, img.height, bounds.x, bounds.y, bounds.w, bounds.h)
        }
      }
    };
    Drawing3D.prototype.image = function(img, x, y, w, h) {
      if (img.width > 0) {
        x = Math.round(x);
        y = Math.round(y);
        w = w || img.width;
        h = h || img.height;
        p.beginShape(p.QUADS);
        p.texture(img);
        p.vertex(x, y, 0, 0, 0);
        p.vertex(x, y + h, 0, 0, h);
        p.vertex(x + w, y + h, 0, w, h);
        p.vertex(x + w, y, 0, w, 0);
        p.endShape()
      }
    };
    p.tint = function(a1, a2, a3, a4) {
      var tintColor = p.color(a1, a2, a3, a4);
      var r = p.red(tintColor) / colorModeX;
      var g = p.green(tintColor) / colorModeY;
      var b = p.blue(tintColor) / colorModeZ;
      var a = p.alpha(tintColor) / colorModeA;
      curTint = function(obj) {
        var data = obj.data,
          length = 4 * obj.width * obj.height;
        for (var i = 0; i < length;) {
          data[i++] *= r;
          data[i++] *= g;
          data[i++] *= b;
          data[i++] *= a
        }
      };
      curTint3d = function(data) {
        for (var i = 0; i < data.length;) {
          data[i++] = r;
          data[i++] = g;
          data[i++] = b;
          data[i++] = a
        }
      }
    };
    p.noTint = function() {
      curTint = null;
      curTint3d = null
    };
    p.copy = function(src, sx, sy, sw, sh, dx, dy, dw, dh) {
      if (dh === undef) {
        dh = dw;
        dw = dy;
        dy = dx;
        dx = sh;
        sh = sw;
        sw = sy;
        sy = sx;
        sx = src;
        src = p
      }
      p.blend(src, sx, sy, sw, sh, dx, dy, dw, dh, 0)
    };
    p.blend = function(src, sx, sy, sw, sh, dx, dy, dw, dh, mode, pimgdest) {
      if (src.isRemote) throw "Image is loaded remotely. Cannot blend image.";
      if (mode === undef) {
        mode = dh;
        dh = dw;
        dw = dy;
        dy = dx;
        dx = sh;
        sh = sw;
        sw = sy;
        sy = sx;
        sx = src;
        src = p
      }
      var sx2 = sx + sw,
        sy2 = sy + sh,
        dx2 = dx + dw,
        dy2 = dy + dh,
        dest = pimgdest || p;
      if (pimgdest === undef || mode === undef) p.loadPixels();
      src.loadPixels();
      if (src === p && p.intersect(sx, sy, sx2, sy2, dx, dy, dx2, dy2)) p.blit_resize(p.get(sx, sy, sx2 - sx, sy2 - sy), 0, 0, sx2 - sx - 1, sy2 - sy - 1, dest.imageData.data, dest.width, dest.height, dx, dy, dx2, dy2, mode);
      else p.blit_resize(src, sx, sy, sx2, sy2, dest.imageData.data, dest.width, dest.height, dx, dy, dx2, dy2, mode);
      if (pimgdest === undef) p.updatePixels()
    };
    var buildBlurKernel = function(r) {
      var radius = p.floor(r * 3.5),
        i, radiusi;
      radius = radius < 1 ? 1 : radius < 248 ? radius : 248;
      if (p.shared.blurRadius !== radius) {
        p.shared.blurRadius = radius;
        p.shared.blurKernelSize = 1 + (p.shared.blurRadius << 1);
        p.shared.blurKernel = new Float32Array(p.shared.blurKernelSize);
        var sharedBlurKernal = p.shared.blurKernel;
        var sharedBlurKernelSize = p.shared.blurKernelSize;
        var sharedBlurRadius = p.shared.blurRadius;
        for (i = 0; i < sharedBlurKernelSize; i++) sharedBlurKernal[i] = 0;
        var radiusiSquared = (radius - 1) * (radius - 1);
        for (i = 1; i < radius; i++) sharedBlurKernal[radius + i] = sharedBlurKernal[radiusi] = radiusiSquared;
        sharedBlurKernal[radius] = radius * radius
      }
    };
    var blurARGB = function(r, aImg) {
      var sum, cr, cg, cb, ca, c, m;
      var read, ri, ym, ymi, bk0;
      var wh = aImg.pixels.getLength();
      var r2 = new Float32Array(wh);
      var g2 = new Float32Array(wh);
      var b2 = new Float32Array(wh);
      var a2 = new Float32Array(wh);
      var yi = 0;
      var x, y, i, offset;
      buildBlurKernel(r);
      var aImgHeight = aImg.height;
      var aImgWidth = aImg.width;
      var sharedBlurKernelSize = p.shared.blurKernelSize;
      var sharedBlurRadius = p.shared.blurRadius;
      var sharedBlurKernal = p.shared.blurKernel;
      var pix = aImg.imageData.data;
      for (y = 0; y < aImgHeight; y++) {
        for (x = 0; x < aImgWidth; x++) {
          cb = cg = cr = ca = sum = 0;
          read = x - sharedBlurRadius;
          if (read < 0) {
            bk0 = -read;
            read = 0
          } else {
            if (read >= aImgWidth) break;
            bk0 = 0
          }
          for (i = bk0; i < sharedBlurKernelSize; i++) {
            if (read >= aImgWidth) break;
            offset = (read + yi) * 4;
            m = sharedBlurKernal[i];
            ca += m * pix[offset + 3];
            cr += m * pix[offset];
            cg += m * pix[offset + 1];
            cb += m * pix[offset + 2];
            sum += m;
            read++
          }
          ri = yi + x;
          a2[ri] = ca / sum;
          r2[ri] = cr / sum;
          g2[ri] = cg / sum;
          b2[ri] = cb / sum
        }
        yi += aImgWidth
      }
      yi = 0;
      ym = -sharedBlurRadius;
      ymi = ym * aImgWidth;
      for (y = 0; y < aImgHeight; y++) {
        for (x = 0; x < aImgWidth; x++) {
          cb = cg = cr = ca = sum = 0;
          if (ym < 0) {
            bk0 = ri = -ym;
            read = x
          } else {
            if (ym >= aImgHeight) break;
            bk0 = 0;
            ri = ym;
            read = x + ymi
          }
          for (i = bk0; i < sharedBlurKernelSize; i++) {
            if (ri >= aImgHeight) break;
            m = sharedBlurKernal[i];
            ca += m * a2[read];
            cr += m * r2[read];
            cg += m * g2[read];
            cb += m * b2[read];
            sum += m;
            ri++;
            read += aImgWidth
          }
          offset = (x + yi) * 4;
          pix[offset] = cr / sum;
          pix[offset + 1] = cg / sum;
          pix[offset + 2] = cb / sum;
          pix[offset + 3] = ca / sum
        }
        yi += aImgWidth;
        ymi += aImgWidth;
        ym++
      }
    };
    var dilate = function(isInverted, aImg) {
      var currIdx = 0;
      var maxIdx = aImg.pixels.getLength();
      var out = new Int32Array(maxIdx);
      var currRowIdx, maxRowIdx, colOrig, colOut, currLum;
      var idxRight, idxLeft, idxUp, idxDown, colRight, colLeft, colUp, colDown, lumRight, lumLeft, lumUp, lumDown;
      if (!isInverted) while (currIdx < maxIdx) {
        currRowIdx = currIdx;
        maxRowIdx = currIdx + aImg.width;
        while (currIdx < maxRowIdx) {
          colOrig = colOut = aImg.pixels.getPixel(currIdx);
          idxLeft = currIdx - 1;
          idxRight = currIdx + 1;
          idxUp = currIdx - aImg.width;
          idxDown = currIdx + aImg.width;
          if (idxLeft < currRowIdx) idxLeft = currIdx;
          if (idxRight >= maxRowIdx) idxRight = currIdx;
          if (idxUp < 0) idxUp = 0;
          if (idxDown >= maxIdx) idxDown = currIdx;
          colUp = aImg.pixels.getPixel(idxUp);
          colLeft = aImg.pixels.getPixel(idxLeft);
          colDown = aImg.pixels.getPixel(idxDown);
          colRight = aImg.pixels.getPixel(idxRight);
          currLum = 77 * (colOrig >> 16 & 255) + 151 * (colOrig >> 8 & 255) + 28 * (colOrig & 255);
          lumLeft = 77 * (colLeft >> 16 & 255) + 151 * (colLeft >> 8 & 255) + 28 * (colLeft & 255);
          lumRight = 77 * (colRight >> 16 & 255) + 151 * (colRight >> 8 & 255) + 28 * (colRight & 255);
          lumUp = 77 * (colUp >> 16 & 255) + 151 * (colUp >> 8 & 255) + 28 * (colUp & 255);
          lumDown = 77 * (colDown >> 16 & 255) + 151 * (colDown >> 8 & 255) + 28 * (colDown & 255);
          if (lumLeft > currLum) {
            colOut = colLeft;
            currLum = lumLeft
          }
          if (lumRight > currLum) {
            colOut = colRight;
            currLum = lumRight
          }
          if (lumUp > currLum) {
            colOut = colUp;
            currLum = lumUp
          }
          if (lumDown > currLum) {
            colOut = colDown;
            currLum = lumDown
          }
          out[currIdx++] = colOut
        }
      } else while (currIdx < maxIdx) {
        currRowIdx = currIdx;
        maxRowIdx = currIdx + aImg.width;
        while (currIdx < maxRowIdx) {
          colOrig = colOut = aImg.pixels.getPixel(currIdx);
          idxLeft = currIdx - 1;
          idxRight = currIdx + 1;
          idxUp = currIdx - aImg.width;
          idxDown = currIdx + aImg.width;
          if (idxLeft < currRowIdx) idxLeft = currIdx;
          if (idxRight >= maxRowIdx) idxRight = currIdx;
          if (idxUp < 0) idxUp = 0;
          if (idxDown >= maxIdx) idxDown = currIdx;
          colUp = aImg.pixels.getPixel(idxUp);
          colLeft = aImg.pixels.getPixel(idxLeft);
          colDown = aImg.pixels.getPixel(idxDown);
          colRight = aImg.pixels.getPixel(idxRight);
          currLum = 77 * (colOrig >> 16 & 255) + 151 * (colOrig >> 8 & 255) + 28 * (colOrig & 255);
          lumLeft = 77 * (colLeft >> 16 & 255) + 151 * (colLeft >> 8 & 255) + 28 * (colLeft & 255);
          lumRight = 77 * (colRight >> 16 & 255) + 151 * (colRight >> 8 & 255) + 28 * (colRight & 255);
          lumUp = 77 * (colUp >> 16 & 255) + 151 * (colUp >> 8 & 255) + 28 * (colUp & 255);
          lumDown = 77 * (colDown >> 16 & 255) + 151 * (colDown >> 8 & 255) + 28 * (colDown & 255);
          if (lumLeft < currLum) {
            colOut = colLeft;
            currLum = lumLeft
          }
          if (lumRight < currLum) {
            colOut = colRight;
            currLum = lumRight
          }
          if (lumUp < currLum) {
            colOut = colUp;
            currLum = lumUp
          }
          if (lumDown < currLum) {
            colOut = colDown;
            currLum = lumDown
          }
          out[currIdx++] = colOut
        }
      }
      aImg.pixels.set(out)
    };
    p.filter = function(kind, param, aImg) {
      var img, col, lum, i;
      if (arguments.length === 3) {
        aImg.loadPixels();
        img = aImg
      } else {
        p.loadPixels();
        img = p
      }
      if (param === undef) param = null;
      if (img.isRemote) throw "Image is loaded remotely. Cannot filter image.";
      var imglen = img.pixels.getLength();
      switch (kind) {
      case 11:
        var radius = param || 1;
        blurARGB(radius, img);
        break;
      case 12:
        if (img.format === 4) {
          for (i = 0; i < imglen; i++) {
            col = 255 - img.pixels.getPixel(i);
            img.pixels.setPixel(i, 4278190080 | col << 16 | col << 8 | col)
          }
          img.format = 1
        } else for (i = 0; i < imglen; i++) {
          col = img.pixels.getPixel(i);
          lum = 77 * (col >> 16 & 255) + 151 * (col >> 8 & 255) + 28 * (col & 255) >> 8;
          img.pixels.setPixel(i, col & 4278190080 | lum << 16 | lum << 8 | lum)
        }
        break;
      case 13:
        for (i = 0; i < imglen; i++) img.pixels.setPixel(i, img.pixels.getPixel(i) ^ 16777215);
        break;
      case 15:
        if (param === null) throw "Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)";
        var levels = p.floor(param);
        if (levels < 2 || levels > 255) throw "Levels must be between 2 and 255 for filter(POSTERIZE, levels)";
        var levels1 = levels - 1;
        for (i = 0; i < imglen; i++) {
          var rlevel = img.pixels.getPixel(i) >> 16 & 255;
          var glevel = img.pixels.getPixel(i) >> 8 & 255;
          var blevel = img.pixels.getPixel(i) & 255;
          rlevel = (rlevel * levels >> 8) * 255 / levels1;
          glevel = (glevel * levels >> 8) * 255 / levels1;
          blevel = (blevel * levels >> 8) * 255 / levels1;
          img.pixels.setPixel(i, 4278190080 & img.pixels.getPixel(i) | rlevel << 16 | glevel << 8 | blevel)
        }
        break;
      case 14:
        for (i = 0; i < imglen; i++) img.pixels.setPixel(i, img.pixels.getPixel(i) | 4278190080);
        img.format = 1;
        break;
      case 16:
        if (param === null) param = 0.5;
        if (param < 0 || param > 1) throw "Level must be between 0 and 1 for filter(THRESHOLD, level)";
        var thresh = p.floor(param * 255);
        for (i = 0; i < imglen; i++) {
          var max = p.max((img.pixels.getPixel(i) & 16711680) >> 16, p.max((img.pixels.getPixel(i) & 65280) >> 8, img.pixels.getPixel(i) & 255));
          img.pixels.setPixel(i, img.pixels.getPixel(i) & 4278190080 | (max < thresh ? 0 : 16777215))
        }
        break;
      case 17:
        dilate(true, img);
        break;
      case 18:
        dilate(false, img);
        break
      }
      img.updatePixels()
    };
    p.shared = {
      fracU: 0,
      ifU: 0,
      fracV: 0,
      ifV: 0,
      u1: 0,
      u2: 0,
      v1: 0,
      v2: 0,
      sX: 0,
      sY: 0,
      iw: 0,
      iw1: 0,
      ih1: 0,
      ul: 0,
      ll: 0,
      ur: 0,
      lr: 0,
      cUL: 0,
      cLL: 0,
      cUR: 0,
      cLR: 0,
      srcXOffset: 0,
      srcYOffset: 0,
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      srcBuffer: null,
      blurRadius: 0,
      blurKernelSize: 0,
      blurKernel: null
    };
    p.intersect = function(sx1, sy1, sx2, sy2, dx1, dy1, dx2, dy2) {
      var sw = sx2 - sx1 + 1;
      var sh = sy2 - sy1 + 1;
      var dw = dx2 - dx1 + 1;
      var dh = dy2 - dy1 + 1;
      if (dx1 < sx1) {
        dw += dx1 - sx1;
        if (dw > sw) dw = sw
      } else {
        var w = sw + sx1 - dx1;
        if (dw > w) dw = w
      }
      if (dy1 < sy1) {
        dh += dy1 - sy1;
        if (dh > sh) dh = sh
      } else {
        var h = sh + sy1 - dy1;
        if (dh > h) dh = h
      }
      return ! (dw <= 0 || dh <= 0)
    };
    var blendFuncs = {};
    blendFuncs[1] = p.modes.blend;
    blendFuncs[2] = p.modes.add;
    blendFuncs[4] = p.modes.subtract;
    blendFuncs[8] = p.modes.lightest;
    blendFuncs[16] = p.modes.darkest;
    blendFuncs[0] = p.modes.replace;
    blendFuncs[32] = p.modes.difference;
    blendFuncs[64] = p.modes.exclusion;
    blendFuncs[128] = p.modes.multiply;
    blendFuncs[256] = p.modes.screen;
    blendFuncs[512] = p.modes.overlay;
    blendFuncs[1024] = p.modes.hard_light;
    blendFuncs[2048] = p.modes.soft_light;
    blendFuncs[4096] = p.modes.dodge;
    blendFuncs[8192] = p.modes.burn;
    p.blit_resize = function(img, srcX1, srcY1, srcX2, srcY2, destPixels, screenW, screenH, destX1, destY1, destX2, destY2, mode) {
      var x, y;
      if (srcX1 < 0) srcX1 = 0;
      if (srcY1 < 0) srcY1 = 0;
      if (srcX2 >= img.width) srcX2 = img.width - 1;
      if (srcY2 >= img.height) srcY2 = img.height - 1;
      var srcW = srcX2 - srcX1;
      var srcH = srcY2 - srcY1;
      var destW = destX2 - destX1;
      var destH = destY2 - destY1;
      if (destW <= 0 || destH <= 0 || srcW <= 0 || srcH <= 0 || destX1 >= screenW || destY1 >= screenH || srcX1 >= img.width || srcY1 >= img.height) return;
      var dx = Math.floor(srcW / destW * 32768);
      var dy = Math.floor(srcH / destH * 32768);
      var pshared = p.shared;
      pshared.srcXOffset = Math.floor(destX1 < 0 ? -destX1 * dx : srcX1 * 32768);
      pshared.srcYOffset = Math.floor(destY1 < 0 ? -destY1 * dy : srcY1 * 32768);
      if (destX1 < 0) {
        destW += destX1;
        destX1 = 0
      }
      if (destY1 < 0) {
        destH += destY1;
        destY1 = 0
      }
      destW = Math.min(destW, screenW - destX1);
      destH = Math.min(destH, screenH - destY1);
      var destOffset = destY1 * screenW + destX1;
      var destColor;
      pshared.srcBuffer = img.imageData.data;
      pshared.iw = img.width;
      pshared.iw1 = img.width - 1;
      pshared.ih1 = img.height - 1;
      var filterBilinear = p.filter_bilinear,
        filterNewScanline = p.filter_new_scanline,
        blendFunc = blendFuncs[mode],
        blendedColor, idx, cULoffset, cURoffset, cLLoffset, cLRoffset, ALPHA_MASK = 4278190080,
        RED_MASK = 16711680,
        GREEN_MASK = 65280,
        BLUE_MASK = 255,
        PREC_MAXVAL = 32767,
        PRECISIONB = 15,
        PREC_RED_SHIFT = 1,
        PREC_ALPHA_SHIFT = 9,
        srcBuffer = pshared.srcBuffer,
        min = Math.min;
      for (y = 0; y < destH; y++) {
        pshared.sX = pshared.srcXOffset;
        pshared.fracV = pshared.srcYOffset & PREC_MAXVAL;
        pshared.ifV = PREC_MAXVAL - pshared.fracV;
        pshared.v1 = (pshared.srcYOffset >> PRECISIONB) * pshared.iw;
        pshared.v2 = min((pshared.srcYOffset >> PRECISIONB) + 1, pshared.ih1) * pshared.iw;
        for (x = 0; x < destW; x++) {
          idx = (destOffset + x) * 4;
          destColor = destPixels[idx + 3] << 24 & ALPHA_MASK | destPixels[idx] << 16 & RED_MASK | destPixels[idx + 1] << 8 & GREEN_MASK | destPixels[idx + 2] & BLUE_MASK;
          pshared.fracU = pshared.sX & PREC_MAXVAL;
          pshared.ifU = PREC_MAXVAL - pshared.fracU;
          pshared.ul = pshared.ifU * pshared.ifV >> PRECISIONB;
          pshared.ll = pshared.ifU * pshared.fracV >> PRECISIONB;
          pshared.ur = pshared.fracU * pshared.ifV >> PRECISIONB;
          pshared.lr = pshared.fracU * pshared.fracV >> PRECISIONB;
          pshared.u1 = pshared.sX >> PRECISIONB;
          pshared.u2 = min(pshared.u1 + 1, pshared.iw1);
          cULoffset = (pshared.v1 + pshared.u1) * 4;
          cURoffset = (pshared.v1 + pshared.u2) * 4;
          cLLoffset = (pshared.v2 + pshared.u1) * 4;
          cLRoffset = (pshared.v2 + pshared.u2) * 4;
          pshared.cUL = srcBuffer[cULoffset + 3] << 24 & ALPHA_MASK | srcBuffer[cULoffset] << 16 & RED_MASK | srcBuffer[cULoffset + 1] << 8 & GREEN_MASK | srcBuffer[cULoffset + 2] & BLUE_MASK;
          pshared.cUR = srcBuffer[cURoffset + 3] << 24 & ALPHA_MASK | srcBuffer[cURoffset] << 16 & RED_MASK | srcBuffer[cURoffset + 1] << 8 & GREEN_MASK | srcBuffer[cURoffset + 2] & BLUE_MASK;
          pshared.cLL = srcBuffer[cLLoffset + 3] << 24 & ALPHA_MASK | srcBuffer[cLLoffset] << 16 & RED_MASK | srcBuffer[cLLoffset + 1] << 8 & GREEN_MASK | srcBuffer[cLLoffset + 2] & BLUE_MASK;
          pshared.cLR = srcBuffer[cLRoffset + 3] << 24 & ALPHA_MASK | srcBuffer[cLRoffset] << 16 & RED_MASK | srcBuffer[cLRoffset + 1] << 8 & GREEN_MASK | srcBuffer[cLRoffset + 2] & BLUE_MASK;
          pshared.r = pshared.ul * ((pshared.cUL & RED_MASK) >> 16) + pshared.ll * ((pshared.cLL & RED_MASK) >> 16) + pshared.ur * ((pshared.cUR & RED_MASK) >> 16) + pshared.lr * ((pshared.cLR & RED_MASK) >> 16) << PREC_RED_SHIFT & RED_MASK;
          pshared.g = pshared.ul * (pshared.cUL & GREEN_MASK) + pshared.ll * (pshared.cLL & GREEN_MASK) + pshared.ur * (pshared.cUR & GREEN_MASK) + pshared.lr * (pshared.cLR & GREEN_MASK) >>> PRECISIONB & GREEN_MASK;
          pshared.b = pshared.ul * (pshared.cUL & BLUE_MASK) + pshared.ll * (pshared.cLL & BLUE_MASK) + pshared.ur * (pshared.cUR & BLUE_MASK) + pshared.lr * (pshared.cLR & BLUE_MASK) >>> PRECISIONB;
          pshared.a = pshared.ul * ((pshared.cUL & ALPHA_MASK) >>> 24) + pshared.ll * ((pshared.cLL & ALPHA_MASK) >>> 24) + pshared.ur * ((pshared.cUR & ALPHA_MASK) >>> 24) + pshared.lr * ((pshared.cLR & ALPHA_MASK) >>> 24) << PREC_ALPHA_SHIFT & ALPHA_MASK;
          blendedColor = blendFunc(destColor, pshared.a | pshared.r | pshared.g | pshared.b);
          destPixels[idx] = (blendedColor & RED_MASK) >>> 16;
          destPixels[idx + 1] = (blendedColor & GREEN_MASK) >>> 8;
          destPixels[idx + 2] = blendedColor & BLUE_MASK;
          destPixels[idx + 3] = (blendedColor & ALPHA_MASK) >>> 24;
          pshared.sX += dx
        }
        destOffset += screenW;
        pshared.srcYOffset += dy
      }
    };
    p.loadFont = function(name, size) {
      if (name === undef) throw "font name required in loadFont.";
      if (name.indexOf(".svg") === -1) {
        if (size === undef) size = curTextFont.size;
        return PFont.get(name, size)
      }
      var font = p.loadGlyphs(name);
      return {
        name: name,
        css: "12px sans-serif",
        glyph: true,
        units_per_em: font.units_per_em,
        horiz_adv_x: 1 / font.units_per_em * font.horiz_adv_x,
        ascent: font.ascent,
        descent: font.descent,
        width: function(str) {
          var width = 0;
          var len = str.length;
          for (var i = 0; i < len; i++) try {
            width += parseFloat(p.glyphLook(p.glyphTable[name], str[i]).horiz_adv_x)
          } catch(e) {
            Processing.debug(e)
          }
          return width / p.glyphTable[name].units_per_em
        }
      }
    };
    p.createFont = function(name, size) {
      return p.loadFont(name, size)
    };
    p.textFont = function(pfont, size) {
      if (size !== undef) {
        if (!pfont.glyph) pfont = PFont.get(pfont.name, size);
        curTextSize = size
      }
      curTextFont = pfont;
      curFontName = curTextFont.name;
      curTextAscent = curTextFont.ascent;
      curTextDescent = curTextFont.descent;
      curTextLeading = curTextFont.leading;
      var curContext = drawing.$ensureContext();
      curContext.font = curTextFont.css
    };
    p.textSize = function(size) {
      curTextFont = PFont.get(curFontName, size);
      curTextSize = size;
      curTextAscent = curTextFont.ascent;
      curTextDescent = curTextFont.descent;
      curTextLeading = curTextFont.leading;
      var curContext = drawing.$ensureContext();
      curContext.font = curTextFont.css
    };
    p.textAscent = function() {
      return curTextAscent
    };
    p.textDescent = function() {
      return curTextDescent
    };
    p.textLeading = function(leading) {
      curTextLeading = leading
    };
    p.textAlign = function(xalign, yalign) {
      horizontalTextAlignment = xalign;
      verticalTextAlignment = yalign || 0
    };

    function toP5String(obj) {
      if (obj instanceof String) return obj;
      if (typeof obj === "number") {
        if (obj === (0 | obj)) return obj.toString();
        return p.nf(obj, 0, 3)
      }
      if (obj === null || obj === undef) return "";
      return obj.toString()
    }
    Drawing2D.prototype.textWidth = function(str) {
      var lines = toP5String(str).split(/\r?\n/g),
        width = 0;
      var i, linesCount = lines.length;
      curContext.font = curTextFont.css;
      for (i = 0; i < linesCount; ++i) width = Math.max(width, curTextFont.measureTextWidth(lines[i]));
      return width | 0
    };
    Drawing3D.prototype.textWidth = function(str) {
      var lines = toP5String(str).split(/\r?\n/g),
        width = 0;
      var i, linesCount = lines.length;
      if (textcanvas === undef) textcanvas = document.createElement("canvas");
      var textContext = textcanvas.getContext("2d");
      textContext.font = curTextFont.css;
      for (i = 0; i < linesCount; ++i) width = Math.max(width, textContext.measureText(lines[i]).width);
      return width | 0
    };
    p.glyphLook = function(font, chr) {
      try {
        switch (chr) {
        case "1":
          return font.one;
        case "2":
          return font.two;
        case "3":
          return font.three;
        case "4":
          return font.four;
        case "5":
          return font.five;
        case "6":
          return font.six;
        case "7":
          return font.seven;
        case "8":
          return font.eight;
        case "9":
          return font.nine;
        case "0":
          return font.zero;
        case " ":
          return font.space;
        case "$":
          return font.dollar;
        case "!":
          return font.exclam;
        case '"':
          return font.quotedbl;
        case "#":
          return font.numbersign;
        case "%":
          return font.percent;
        case "&":
          return font.ampersand;
        case "'":
          return font.quotesingle;
        case "(":
          return font.parenleft;
        case ")":
          return font.parenright;
        case "*":
          return font.asterisk;
        case "+":
          return font.plus;
        case ",":
          return font.comma;
        case "-":
          return font.hyphen;
        case ".":
          return font.period;
        case "/":
          return font.slash;
        case "_":
          return font.underscore;
        case ":":
          return font.colon;
        case ";":
          return font.semicolon;
        case "<":
          return font.less;
        case "=":
          return font.equal;
        case ">":
          return font.greater;
        case "?":
          return font.question;
        case "@":
          return font.at;
        case "[":
          return font.bracketleft;
        case "\\":
          return font.backslash;
        case "]":
          return font.bracketright;
        case "^":
          return font.asciicircum;
        case "`":
          return font.grave;
        case "{":
          return font.braceleft;
        case "|":
          return font.bar;
        case "}":
          return font.braceright;
        case "~":
          return font.asciitilde;
        default:
          return font[chr]
        }
      } catch(e) {
        Processing.debug(e)
      }
    };
    Drawing2D.prototype.text$line = function(str, x, y, z, align) {
      var textWidth = 0,
        xOffset = 0;
      if (!curTextFont.glyph) {
        if (str && "fillText" in curContext) {
          if (isFillDirty) {
            curContext.fillStyle = p.color.toString(currentFillColor);
            isFillDirty = false
          }
          if (align === 39 || align === 3) {
            textWidth = curTextFont.measureTextWidth(str);
            if (align === 39) xOffset = -textWidth;
            else xOffset = -textWidth / 2
          }
          curContext.fillText(str, x + xOffset, y)
        }
      } else {
        var font = p.glyphTable[curFontName];
        saveContext();
        curContext.translate(x, y + curTextSize);
        if (align === 39 || align === 3) {
          textWidth = font.width(str);
          if (align === 39) xOffset = -textWidth;
          else xOffset = -textWidth / 2
        }
        var upem = font.units_per_em,
          newScale = 1 / upem * curTextSize;
        curContext.scale(newScale, newScale);
        for (var i = 0, len = str.length; i < len; i++) try {
          p.glyphLook(font, str[i]).draw()
        } catch(e) {
          Processing.debug(e)
        }
        restoreContext()
      }
    };
    Drawing3D.prototype.text$line = function(str, x, y, z, align) {
      if (textcanvas === undef) textcanvas = document.createElement("canvas");
      var oldContext = curContext;
      curContext = textcanvas.getContext("2d");
      curContext.font = curTextFont.css;
      var textWidth = curTextFont.measureTextWidth(str);
      textcanvas.width = textWidth;
      textcanvas.height = curTextSize;
      curContext = textcanvas.getContext("2d");
      curContext.font = curTextFont.css;
      curContext.textBaseline = "top";
      Drawing2D.prototype.text$line(str, 0, 0, 0, 37);
      var aspect = textcanvas.width / textcanvas.height;
      curContext = oldContext;
      curContext.bindTexture(curContext.TEXTURE_2D, textTex);
      curContext.texImage2D(curContext.TEXTURE_2D, 0, curContext.RGBA, curContext.RGBA, curContext.UNSIGNED_BYTE, textcanvas);
      curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MAG_FILTER, curContext.LINEAR);
      curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_MIN_FILTER, curContext.LINEAR);
      curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_WRAP_T, curContext.CLAMP_TO_EDGE);
      curContext.texParameteri(curContext.TEXTURE_2D, curContext.TEXTURE_WRAP_S, curContext.CLAMP_TO_EDGE);
      var xOffset = 0;
      if (align === 39) xOffset = -textWidth;
      else if (align === 3) xOffset = -textWidth / 2;
      var model = new PMatrix3D;
      var scalefactor = curTextSize * 0.5;
      model.translate(x + xOffset - scalefactor / 2, y - scalefactor, z);
      model.scale(-aspect * scalefactor, -scalefactor, scalefactor);
      model.translate(-1, -1, -1);
      model.transpose();
      var view = new PMatrix3D;
      view.scale(1, -1, 1);
      view.apply(modelView.array());
      view.transpose();
      curContext.useProgram(programObject2D);
      vertexAttribPointer("aVertex2d", programObject2D, "aVertex", 3, textBuffer);
      vertexAttribPointer("aTextureCoord2d", programObject2D, "aTextureCoord", 2, textureBuffer);
      uniformi("uSampler2d", programObject2D, "uSampler", [0]);
      uniformi("uIsDrawingText2d", programObject2D, "uIsDrawingText", true);
      uniformMatrix("uModel2d", programObject2D, "uModel", false, model.array());
      uniformMatrix("uView2d", programObject2D, "uView", false, view.array());
      uniformf("uColor2d", programObject2D, "uColor", fillStyle);
      curContext.bindBuffer(curContext.ELEMENT_ARRAY_BUFFER, indexBuffer);
      curContext.drawElements(curContext.TRIANGLES, 6, curContext.UNSIGNED_SHORT, 0)
    };

    function text$4(str, x, y, z) {
      var lines, linesCount;
      if (str.indexOf("\n") < 0) {
        lines = [str];
        linesCount = 1
      } else {
        lines = str.split(/\r?\n/g);
        linesCount = lines.length
      }
      var yOffset = 0;
      if (verticalTextAlignment === 101) yOffset = curTextAscent + curTextDescent;
      else if (verticalTextAlignment === 3) yOffset = curTextAscent / 2 - (linesCount - 1) * curTextLeading / 2;
      else if (verticalTextAlignment === 102) yOffset = -(curTextDescent + (linesCount - 1) * curTextLeading);
      for (var i = 0; i < linesCount; ++i) {
        var line = lines[i];
        drawing.text$line(line, x, y + yOffset, z, horizontalTextAlignment);
        yOffset += curTextLeading
      }
    }
    function text$6(str, x, y, width, height, z) {
      if (str.length === 0 || width === 0 || height === 0) return;
      if (curTextSize > height) return;
      var spaceMark = -1;
      var start = 0;
      var lineWidth = 0;
      var drawCommands = [];
      for (var charPos = 0, len = str.length; charPos < len; charPos++) {
        var currentChar = str[charPos];
        var spaceChar = currentChar === " ";
        var letterWidth = curTextFont.measureTextWidth(currentChar);
        if (currentChar !== "\n" && lineWidth + letterWidth <= width) {
          if (spaceChar) spaceMark = charPos;
          lineWidth += letterWidth
        } else {
          if (spaceMark + 1 === start) if (charPos > 0) spaceMark = charPos;
          else return;
          if (currentChar === "\n") {
            drawCommands.push({
              text: str.substring(start, charPos),
              width: lineWidth
            });
            start = charPos + 1
          } else {
            drawCommands.push({
              text: str.substring(start, spaceMark + 1),
              width: lineWidth
            });
            start = spaceMark + 1
          }
          lineWidth = 0;
          charPos = start - 1
        }
      }
      if (start < len) drawCommands.push({
        text: str.substring(start),
        width: lineWidth
      });
      var xOffset = 1,
        yOffset = curTextAscent;
      if (horizontalTextAlignment === 3) xOffset = width / 2;
      else if (horizontalTextAlignment === 39) xOffset = width;
      var linesCount = drawCommands.length,
        visibleLines = Math.min(linesCount, Math.floor(height / curTextLeading));
      if (verticalTextAlignment === 101) yOffset = curTextAscent + curTextDescent;
      else if (verticalTextAlignment === 3) yOffset = height / 2 - curTextLeading * (visibleLines / 2 - 1);
      else if (verticalTextAlignment === 102) yOffset = curTextDescent + curTextLeading;
      var command, drawCommand, leading;
      for (command = 0; command < linesCount; command++) {
        leading = command * curTextLeading;
        if (yOffset + leading > height - curTextDescent) break;
        drawCommand = drawCommands[command];
        drawing.text$line(drawCommand.text, x + xOffset, y + yOffset + leading, z, horizontalTextAlignment)
      }
    }
    p.text = function() {
      if (textMode === 5) return;
      if (arguments.length === 3) text$4(toP5String(arguments[0]), arguments[1], arguments[2], 0);
      else if (arguments.length === 4) text$4(toP5String(arguments[0]), arguments[1], arguments[2], arguments[3]);
      else if (arguments.length === 5) text$6(toP5String(arguments[0]), arguments[1], arguments[2], arguments[3], arguments[4], 0);
      else if (arguments.length === 6) text$6(toP5String(arguments[0]), arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
    };
    p.textMode = function(mode) {
      textMode = mode
    };
    p.loadGlyphs = function(url) {
      var x, y, cx, cy, nx, ny, d, a, lastCom, lenC, horiz_adv_x, getXY = "[0-9\\-]+",
        path;
      var regex = function(needle, hay) {
        var i = 0,
          results = [],
          latest, regexp = new RegExp(needle, "g");
        latest = results[i] = regexp.exec(hay);
        while (latest) {
          i++;
          latest = results[i] = regexp.exec(hay)
        }
        return results
      };
      var buildPath = function(d) {
        var c = regex("[A-Za-z][0-9\\- ]+|Z", d);
        var beforePathDraw = function() {
          saveContext();
          return drawing.$ensureContext()
        };
        var afterPathDraw = function() {
          executeContextFill();
          executeContextStroke();
          restoreContext()
        };
        path = "return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";
        x = 0;
        y = 0;
        cx = 0;
        cy = 0;
        nx = 0;
        ny = 0;
        d = 0;
        a = 0;
        lastCom = "";
        lenC = c.length - 1;
        for (var j = 0; j < lenC; j++) {
          var com = c[j][0],
            xy = regex(getXY, com);
          switch (com[0]) {
          case "M":
            x = parseFloat(xy[0][0]);
            y = parseFloat(xy[1][0]);
            path += "curContext.moveTo(" + x + "," + -y + ");";
            break;
          case "L":
            x = parseFloat(xy[0][0]);
            y = parseFloat(xy[1][0]);
            path += "curContext.lineTo(" + x + "," + -y + ");";
            break;
          case "H":
            x = parseFloat(xy[0][0]);
            path += "curContext.lineTo(" + x + "," + -y + ");";
            break;
          case "V":
            y = parseFloat(xy[0][0]);
            path += "curContext.lineTo(" + x + "," + -y + ");";
            break;
          case "T":
            nx = parseFloat(xy[0][0]);
            ny = parseFloat(xy[1][0]);
            if (lastCom === "Q" || lastCom === "T") {
              d = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(cy - y, 2));
              a = Math.PI + Math.atan2(cx - x, cy - y);
              cx = x + Math.sin(a) * d;
              cy = y + Math.cos(a) * d
            } else {
              cx = x;
              cy = y
            }
            path += "curContext.quadraticCurveTo(" + cx + "," + -cy + "," + nx + "," + -ny + ");";
            x = nx;
            y = ny;
            break;
          case "Q":
            cx = parseFloat(xy[0][0]);
            cy = parseFloat(xy[1][0]);
            nx = parseFloat(xy[2][0]);
            ny = parseFloat(xy[3][0]);
            path += "curContext.quadraticCurveTo(" + cx + "," + -cy + "," + nx + "," + -ny + ");";
            x = nx;
            y = ny;
            break;
          case "Z":
            path += "curContext.closePath();";
            break
          }
          lastCom = com[0]
        }
        path += "afterPathDraw();";
        path += "curContext.translate(" + horiz_adv_x + ",0);";
        path += "}}";
        return (new Function("beforePathDraw", "afterPathDraw", path))(beforePathDraw, afterPathDraw)
      };
      var parseSVGFont = function(svg) {
        var font = svg.getElementsByTagName("font");
        p.glyphTable[url].horiz_adv_x = font[0].getAttribute("horiz-adv-x");
        var font_face = svg.getElementsByTagName("font-face")[0];
        p.glyphTable[url].units_per_em = parseFloat(font_face.getAttribute("units-per-em"));
        p.glyphTable[url].ascent = parseFloat(font_face.getAttribute("ascent"));
        p.glyphTable[url].descent = parseFloat(font_face.getAttribute("descent"));
        var glyph = svg.getElementsByTagName("glyph"),
          len = glyph.length;
        for (var i = 0; i < len; i++) {
          var unicode = glyph[i].getAttribute("unicode");
          var name = glyph[i].getAttribute("glyph-name");
          horiz_adv_x = glyph[i].getAttribute("horiz-adv-x");
          if (horiz_adv_x === null) horiz_adv_x = p.glyphTable[url].horiz_adv_x;
          d = glyph[i].getAttribute("d");
          if (d !== undef) {
            path = buildPath(d);
            p.glyphTable[url][name] = {
              name: name,
              unicode: unicode,
              horiz_adv_x: horiz_adv_x,
              draw: path.draw
            }
          }
        }
      };
      var loadXML = function() {
        var xmlDoc;
        try {
          xmlDoc = document.implementation.createDocument("", "", null)
        } catch(e_fx_op) {
          Processing.debug(e_fx_op.message);
          return
        }
        try {
          xmlDoc.async = false;
          xmlDoc.load(url);
          parseSVGFont(xmlDoc.getElementsByTagName("svg")[0])
        } catch(e_sf_ch) {
          Processing.debug(e_sf_ch);
          try {
            var xmlhttp = new window.XMLHttpRequest;
            xmlhttp.open("GET", url, false);
            xmlhttp.send(null);
            parseSVGFont(xmlhttp.responseXML.documentElement)
          } catch(e) {
            Processing.debug(e_sf_ch)
          }
        }
      };
      p.glyphTable[url] = {};
      loadXML(url);
      return p.glyphTable[url]
    };
    p.param = function(name) {
      var attributeName = "data-processing-" + name;
      if (curElement.hasAttribute(attributeName)) return curElement.getAttribute(attributeName);
      for (var i = 0, len = curElement.childNodes.length; i < len; ++i) {
        var item = curElement.childNodes.item(i);
        if (item.nodeType !== 1 || item.tagName.toLowerCase() !== "param") continue;
        if (item.getAttribute("name") === name) return item.getAttribute("value")
      }
      if (curSketch.params.hasOwnProperty(name)) return curSketch.params[name];
      return null
    };

    function wireDimensionalFunctions(mode) {
      if (mode === "3D") drawing = new Drawing3D;
      else if (mode === "2D") drawing = new Drawing2D;
      else drawing = new DrawingPre;
      for (var i in DrawingPre.prototype) if (DrawingPre.prototype.hasOwnProperty(i) && i.indexOf("$") < 0) p[i] = drawing[i];
      drawing.$init()
    }
    function createDrawingPreFunction(name) {
      return function() {
        wireDimensionalFunctions("2D");
        return drawing[name].apply(this, arguments)
      }
    }
    DrawingPre.prototype.translate = createDrawingPreFunction("translate");
    DrawingPre.prototype.transform = createDrawingPreFunction("transform");
    DrawingPre.prototype.scale = createDrawingPreFunction("scale");
    DrawingPre.prototype.pushMatrix = createDrawingPreFunction("pushMatrix");
    DrawingPre.prototype.popMatrix = createDrawingPreFunction("popMatrix");
    DrawingPre.prototype.resetMatrix = createDrawingPreFunction("resetMatrix");
    DrawingPre.prototype.applyMatrix = createDrawingPreFunction("applyMatrix");
    DrawingPre.prototype.rotate = createDrawingPreFunction("rotate");
    DrawingPre.prototype.rotateZ = createDrawingPreFunction("rotateZ");
    DrawingPre.prototype.shearX = createDrawingPreFunction("shearX");
    DrawingPre.prototype.shearY = createDrawingPreFunction("shearY");
    DrawingPre.prototype.redraw = createDrawingPreFunction("redraw");
    DrawingPre.prototype.toImageData = createDrawingPreFunction("toImageData");
    DrawingPre.prototype.ambientLight = createDrawingPreFunction("ambientLight");
    DrawingPre.prototype.directionalLight = createDrawingPreFunction("directionalLight");
    DrawingPre.prototype.lightFalloff = createDrawingPreFunction("lightFalloff");
    DrawingPre.prototype.lightSpecular = createDrawingPreFunction("lightSpecular");
    DrawingPre.prototype.pointLight = createDrawingPreFunction("pointLight");
    DrawingPre.prototype.noLights = createDrawingPreFunction("noLights");
    DrawingPre.prototype.spotLight = createDrawingPreFunction("spotLight");
    DrawingPre.prototype.beginCamera = createDrawingPreFunction("beginCamera");
    DrawingPre.prototype.endCamera = createDrawingPreFunction("endCamera");
    DrawingPre.prototype.frustum = createDrawingPreFunction("frustum");
    DrawingPre.prototype.box = createDrawingPreFunction("box");
    DrawingPre.prototype.sphere = createDrawingPreFunction("sphere");
    DrawingPre.prototype.ambient = createDrawingPreFunction("ambient");
    DrawingPre.prototype.emissive = createDrawingPreFunction("emissive");
    DrawingPre.prototype.shininess = createDrawingPreFunction("shininess");
    DrawingPre.prototype.specular = createDrawingPreFunction("specular");
    DrawingPre.prototype.fill = createDrawingPreFunction("fill");
    DrawingPre.prototype.stroke = createDrawingPreFunction("stroke");
    DrawingPre.prototype.strokeWeight = createDrawingPreFunction("strokeWeight");
    DrawingPre.prototype.smooth = createDrawingPreFunction("smooth");
    DrawingPre.prototype.noSmooth = createDrawingPreFunction("noSmooth");
    DrawingPre.prototype.point = createDrawingPreFunction("point");
    DrawingPre.prototype.vertex = createDrawingPreFunction("vertex");
    DrawingPre.prototype.endShape = createDrawingPreFunction("endShape");
    DrawingPre.prototype.bezierVertex = createDrawingPreFunction("bezierVertex");
    DrawingPre.prototype.curveVertex = createDrawingPreFunction("curveVertex");
    DrawingPre.prototype.curve = createDrawingPreFunction("curve");
    DrawingPre.prototype.line = createDrawingPreFunction("line");
    DrawingPre.prototype.bezier = createDrawingPreFunction("bezier");
    DrawingPre.prototype.rect = createDrawingPreFunction("rect");
    DrawingPre.prototype.ellipse = createDrawingPreFunction("ellipse");
    DrawingPre.prototype.background = createDrawingPreFunction("background");
    DrawingPre.prototype.image = createDrawingPreFunction("image");
    DrawingPre.prototype.textWidth = createDrawingPreFunction("textWidth");
    DrawingPre.prototype.text$line = createDrawingPreFunction("text$line");
    DrawingPre.prototype.$ensureContext = createDrawingPreFunction("$ensureContext");
    DrawingPre.prototype.$newPMatrix = createDrawingPreFunction("$newPMatrix");
    DrawingPre.prototype.size = function(aWidth, aHeight, aMode) {
      wireDimensionalFunctions(aMode === 2 ? "3D" : "2D");
      p.size(aWidth, aHeight, aMode)
    };
    DrawingPre.prototype.$init = nop;
    Drawing2D.prototype.$init = function() {
      p.size(p.width, p.height);
      curContext.lineCap = "round";
      p.noSmooth();
      p.disableContextMenu()
    };
    Drawing3D.prototype.$init = function() {
      p.use3DContext = true;
      p.disableContextMenu()
    };
    DrawingShared.prototype.$ensureContext = function() {
      return curContext
    };

    function calculateOffset(curElement, event) {
      var element = curElement,
        offsetX = 0,
        offsetY = 0;
      p.pmouseX = p.mouseX;
      p.pmouseY = p.mouseY;
      if (element.offsetParent) {
        do {
          offsetX += element.offsetLeft;
          offsetY += element.offsetTop
        } while ( !! (element = element.offsetParent))
      }
      element = curElement;
      do {
        offsetX -= element.scrollLeft || 0;
        offsetY -= element.scrollTop || 0
      } while ( !! (element = element.parentNode));
      offsetX += stylePaddingLeft;
      offsetY += stylePaddingTop;
      offsetX += styleBorderLeft;
      offsetY += styleBorderTop;
      offsetX += window.pageXOffset;
      offsetY += window.pageYOffset;
      return {
        "X": offsetX,
        "Y": offsetY
      }
    }
    function updateMousePosition(curElement, event) {
      var offset = calculateOffset(curElement, event);
      p.mouseX = event.pageX - offset.X;
      p.mouseY = event.pageY - offset.Y
    }
    function addTouchEventOffset(t) {
      var offset = calculateOffset(t.changedTouches[0].target, t.changedTouches[0]),
        i;
      for (i = 0; i < t.touches.length; i++) {
        var touch = t.touches[i];
        touch.offsetX = touch.pageX - offset.X;
        touch.offsetY = touch.pageY - offset.Y
      }
      for (i = 0; i < t.targetTouches.length; i++) {
        var targetTouch = t.targetTouches[i];
        targetTouch.offsetX = targetTouch.pageX - offset.X;
        targetTouch.offsetY = targetTouch.pageY - offset.Y
      }
      for (i = 0; i < t.changedTouches.length; i++) {
        var changedTouch = t.changedTouches[i];
        changedTouch.offsetX = changedTouch.pageX - offset.X;
        changedTouch.offsetY = changedTouch.pageY - offset.Y
      }
      return t
    }
    attachEventHandler(curElement, "touchstart", function(t) {
      curElement.setAttribute("style", "-webkit-user-select: none");
      curElement.setAttribute("onclick", "void(0)");
      curElement.setAttribute("style", "-webkit-tap-highlight-color:rgba(0,0,0,0)");
      for (var i = 0, ehl = eventHandlers.length; i < ehl; i++) {
        var type = eventHandlers[i].type;
        if (type === "mouseout" || type === "mousemove" || type === "mousedown" || type === "mouseup" || type === "DOMMouseScroll" || type === "mousewheel" || type === "touchstart") detachEventHandler(eventHandlers[i])
      }
      if (p.touchStart !== undef || p.touchMove !== undef || p.touchEnd !== undef || p.touchCancel !== undef) {
        attachEventHandler(curElement, "touchstart", function(t) {
          if (p.touchStart !== undef) {
            t = addTouchEventOffset(t);
            p.touchStart(t)
          }
        });
        attachEventHandler(curElement, "touchmove", function(t) {
          if (p.touchMove !== undef) {
            t.preventDefault();
            t = addTouchEventOffset(t);
            p.touchMove(t)
          }
        });
        attachEventHandler(curElement, "touchend", function(t) {
          if (p.touchEnd !== undef) {
            t = addTouchEventOffset(t);
            p.touchEnd(t)
          }
        });
        attachEventHandler(curElement, "touchcancel", function(t) {
          if (p.touchCancel !== undef) {
            t = addTouchEventOffset(t);
            p.touchCancel(t)
          }
        })
      } else {
        attachEventHandler(curElement, "touchstart", function(e) {
          updateMousePosition(curElement, e.touches[0]);
          p.__mousePressed = true;
          p.mouseDragging = false;
          p.mouseButton = 37;
          if (typeof p.mousePressed === "function") p.mousePressed()
        });
        attachEventHandler(curElement, "touchmove", function(e) {
          e.preventDefault();
          updateMousePosition(curElement, e.touches[0]);
          if (typeof p.mouseMoved === "function" && !p.__mousePressed) p.mouseMoved();
          if (typeof p.mouseDragged === "function" && p.__mousePressed) {
            p.mouseDragged();
            p.mouseDragging = true
          }
        });
        attachEventHandler(curElement, "touchend", function(e) {
          p.__mousePressed = false;
          if (typeof p.mouseClicked === "function" && !p.mouseDragging) p.mouseClicked();
          if (typeof p.mouseReleased === "function") p.mouseReleased()
        })
      }
      curElement.dispatchEvent(t)
    });
    (function() {
      var enabled = true,
        contextMenu = function(e) {
        e.preventDefault();
        e.stopPropagation()
      };
      p.disableContextMenu = function() {
        if (!enabled) return;
        attachEventHandler(curElement, "contextmenu", contextMenu);
        enabled = false
      };
      p.enableContextMenu = function() {
        if (enabled) return;
        detachEventHandler({
          elem: curElement,
          type: "contextmenu",
          fn: contextMenu
        });
        enabled = true
      }
    })();
    attachEventHandler(curElement, "mousemove", function(e) {
      updateMousePosition(curElement, e);
      if (typeof p.mouseMoved === "function" && !p.__mousePressed) p.mouseMoved();
      if (typeof p.mouseDragged === "function" && p.__mousePressed) {
        p.mouseDragged();
        p.mouseDragging = true
      }
    });
    attachEventHandler(curElement, "mouseout", function(e) {
      if (typeof p.mouseOut === "function") p.mouseOut()
    });
    attachEventHandler(curElement, "mouseover", function(e) {
      updateMousePosition(curElement, e);
      if (typeof p.mouseOver === "function") p.mouseOver()
    });
    curElement.onmousedown = function() {
      curElement.focus();
      return false
    };
    attachEventHandler(curElement, "mousedown", function(e) {
      p.__mousePressed = true;
      p.mouseDragging = false;
      switch (e.which) {
      case 1:
        p.mouseButton = 37;
        break;
      case 2:
        p.mouseButton = 3;
        break;
      case 3:
        p.mouseButton = 39;
        break
      }
      if (typeof p.mousePressed === "function") p.mousePressed()
    });
    attachEventHandler(curElement, "mouseup", function(e) {
      p.__mousePressed = false;
      if (typeof p.mouseClicked === "function" && !p.mouseDragging) p.mouseClicked();
      if (typeof p.mouseReleased === "function") p.mouseReleased()
    });
    var mouseWheelHandler = function(e) {
      var delta = 0;
      if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
        if (window.opera) delta = -delta
      } else if (e.detail) delta = -e.detail / 3;
      p.mouseScroll = delta;
      if (delta && typeof p.mouseScrolled === "function") p.mouseScrolled()
    };
    attachEventHandler(document, "DOMMouseScroll", mouseWheelHandler);
    attachEventHandler(document, "mousewheel", mouseWheelHandler);
    if (!curElement.getAttribute("tabindex")) curElement.setAttribute("tabindex", 0);

    function getKeyCode(e) {
      var code = e.which || e.keyCode;
      switch (code) {
      case 13:
        return 10;
      case 91:
      case 93:
      case 224:
        return 157;
      case 57392:
        return 17;
      case 46:
        return 127;
      case 45:
        return 155
      }
      return code
    }
    function getKeyChar(e) {
      var c = e.which || e.keyCode;
      var anyShiftPressed = e.shiftKey || e.ctrlKey || e.altKey || e.metaKey;
      switch (c) {
      case 13:
        c = anyShiftPressed ? 13 : 10;
        break;
      case 8:
        c = anyShiftPressed ? 127 : 8;
        break
      }
      return new Char(c)
    }
    function suppressKeyEvent(e) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      else if (typeof e.stopPropagation === "function") e.stopPropagation();
      return false
    }
    function updateKeyPressed() {
      var ch;
      for (ch in pressedKeysMap) if (pressedKeysMap.hasOwnProperty(ch)) {
        p.__keyPressed = true;
        return
      }
      p.__keyPressed = false
    }
    function resetKeyPressed() {
      p.__keyPressed = false;
      pressedKeysMap = [];
      lastPressedKeyCode = null
    }
    function simulateKeyTyped(code, c) {
      pressedKeysMap[code] = c;
      lastPressedKeyCode = null;
      p.key = c;
      p.keyCode = code;
      p.keyPressed();
      p.keyCode = 0;
      p.keyTyped();
      updateKeyPressed()
    }
    function handleKeydown(e) {
      var code = getKeyCode(e);
      if (code === 127) {
        simulateKeyTyped(code, new Char(127));
        return
      }
      if (codedKeys.indexOf(code) < 0) {
        lastPressedKeyCode = code;
        return
      }
      var c = new Char(65535);
      p.key = c;
      p.keyCode = code;
      pressedKeysMap[code] = c;
      p.keyPressed();
      lastPressedKeyCode = null;
      updateKeyPressed();
      return suppressKeyEvent(e)
    }
    function handleKeypress(e) {
      if (lastPressedKeyCode === null) return;
      var code = lastPressedKeyCode,
        c = getKeyChar(e);
      simulateKeyTyped(code, c);
      return suppressKeyEvent(e)
    }
    function handleKeyup(e) {
      var code = getKeyCode(e),
        c = pressedKeysMap[code];
      if (c === undef) return;
      p.key = c;
      p.keyCode = code;
      p.keyReleased();
      delete pressedKeysMap[code];
      updateKeyPressed()
    }
    if (!pgraphicsMode) {
      if (aCode instanceof Processing.Sketch) curSketch = aCode;
      else if (typeof aCode === "function") curSketch = new Processing.Sketch(aCode);
      else if (!aCode) curSketch = new Processing.Sketch(function() {});
      else curSketch = Processing.compile(aCode);
      p.externals.sketch = curSketch;
      wireDimensionalFunctions();
      curElement.onfocus = function() {
        p.focused = true
      };
      curElement.onblur = function() {
        p.focused = false;
        if (!curSketch.options.globalKeyEvents) resetKeyPressed()
      };
      if (curSketch.options.pauseOnBlur) {
        attachEventHandler(window, "focus", function() {
          if (doLoop) p.loop()
        });
        attachEventHandler(window, "blur", function() {
          if (doLoop && loopStarted) {
            p.noLoop();
            doLoop = true
          }
          resetKeyPressed()
        })
      }
      var keyTrigger = curSketch.options.globalKeyEvents ? window : curElement;
      attachEventHandler(keyTrigger, "keydown", handleKeydown);
      attachEventHandler(keyTrigger, "keypress", handleKeypress);
      attachEventHandler(keyTrigger, "keyup", handleKeyup);
      for (var i in Processing.lib) if (Processing.lib.hasOwnProperty(i)) if (Processing.lib[i].hasOwnProperty("attach")) Processing.lib[i].attach(p);
      else if (Processing.lib[i] instanceof Function) Processing.lib[i].call(this);
      var retryInterval = 100;
      var executeSketch = function(processing) {
        if (! (curSketch.imageCache.pending || PFont.preloading.pending(retryInterval))) {
          if (window.opera) {
            var link, element, operaCache = curSketch.imageCache.operaCache;
            for (link in operaCache) if (operaCache.hasOwnProperty(link)) {
              element = operaCache[link];
              if (element !== null) document.body.removeChild(element);
              delete operaCache[link]
            }
          }
          curSketch.attach(processing, defaultScope);
          curSketch.onLoad(processing);
          if (processing.setup) {
            processing.setup();
            processing.resetMatrix();
            curSketch.onSetup()
          }
          resetContext();
          if (processing.draw) if (!doLoop) processing.redraw();
          else processing.loop()
        } else window.setTimeout(function() {
          executeSketch(processing)
        },
        retryInterval)
      };
      addInstance(this);
      executeSketch(p)
    } else {
      curSketch = new Processing.Sketch;
      wireDimensionalFunctions();
      p.size = function(w, h, render) {
        if (render && render === 2) wireDimensionalFunctions("3D");
        else wireDimensionalFunctions("2D");
        p.size(w, h, render)
      }
    }
  };
  Processing.debug = debug;
  Processing.prototype = defaultScope;

  function getGlobalMembers() {
    var names = ["abs", "acos", "alpha", "ambient", "ambientLight", "append",
      "applyMatrix", "arc", "arrayCopy", "asin", "atan", "atan2", "background", "beginCamera", "beginDraw", "beginShape", "bezier", "bezierDetail", "bezierPoint", "bezierTangent", "bezierVertex", "binary", "blend", "blendColor", "blit_resize", "blue", "box", "breakShape", "brightness", "camera", "ceil", "Character", "color", "colorMode", "concat", "constrain", "copy", "cos", "createFont", "createGraphics", "createImage", "cursor", "curve", "curveDetail", "curvePoint", "curveTangent", "curveTightness", "curveVertex", "day", "degrees", "directionalLight",
      "disableContextMenu", "dist", "draw", "ellipse", "ellipseMode", "emissive", "enableContextMenu", "endCamera", "endDraw", "endShape", "exit", "exp", "expand", "externals", "fill", "filter", "floor", "focused", "frameCount", "frameRate", "frustum", "get", "glyphLook", "glyphTable", "green", "height", "hex", "hint", "hour", "hue", "image", "imageMode", "intersect", "join", "key", "keyCode", "keyPressed", "keyReleased", "keyTyped", "lerp", "lerpColor", "lightFalloff", "lights", "lightSpecular", "line", "link", "loadBytes", "loadFont", "loadGlyphs",
      "loadImage", "loadPixels", "loadShape", "loadXML", "loadStrings", "log", "loop", "mag", "map", "match", "matchAll", "max", "millis", "min", "minute", "mix", "modelX", "modelY", "modelZ", "modes", "month", "mouseButton", "mouseClicked", "mouseDragged", "mouseMoved", "mouseOut", "mouseOver", "mousePressed", "mouseReleased", "mouseScroll", "mouseScrolled", "mouseX", "mouseY", "name", "nf", "nfc", "nfp", "nfs", "noCursor", "noFill", "noise", "noiseDetail", "noiseSeed", "noLights", "noLoop", "norm", "normal", "noSmooth", "noStroke", "noTint", "ortho",
      "param", "parseBoolean", "parseByte", "parseChar", "parseFloat", "parseInt", "peg", "perspective", "PImage", "pixels", "PMatrix2D", "PMatrix3D", "PMatrixStack", "pmouseX", "pmouseY", "point", "pointLight", "popMatrix", "popStyle", "pow", "print", "printCamera", "println", "printMatrix", "printProjection", "PShape", "PShapeSVG", "pushMatrix", "pushStyle", "quad", "radians", "random", "Random", "randomSeed", "rect", "rectMode", "red", "redraw", "requestImage", "resetMatrix", "reverse", "rotate", "rotateX", "rotateY", "rotateZ", "round", "saturation",
      "save", "saveFrame", "saveStrings", "scale", "screenX", "screenY", "screenZ", "second", "set", "setup", "shape", "shapeMode", "shared", "shearX", "shearY", "shininess", "shorten", "sin", "size", "smooth", "sort", "specular", "sphere", "sphereDetail", "splice", "split", "splitTokens", "spotLight", "sq", "sqrt", "status", "str", "stroke", "strokeCap", "strokeJoin", "strokeWeight", "subset", "tan", "text", "textAlign", "textAscent", "textDescent", "textFont", "textLeading", "textMode", "textSize", "texture", "textureMode", "textWidth", "tint", "toImageData",
      "touchCancel", "touchEnd", "touchMove", "touchStart", "translate", "transform", "triangle", "trim", "unbinary", "unhex", "updatePixels", "use3DContext", "vertex", "width", "XMLElement", "XML", "year", "__contains", "__equals", "__equalsIgnoreCase", "__frameRate", "__hashCode", "__int_cast", "__instanceof", "__keyPressed", "__mousePressed", "__printStackTrace", "__replace", "__replaceAll", "__replaceFirst", "__toCharArray", "__split", "__codePointAt", "__startsWith", "__endsWith", "__matches"];
    var members = {};
    var i, l;
    for (i = 0, l = names.length; i < l; ++i) members[names[i]] = null;
    for (var lib in Processing.lib) if (Processing.lib.hasOwnProperty(lib)) if (Processing.lib[lib].exports) {
      var exportedNames = Processing.lib[lib].exports;
      for (i = 0, l = exportedNames.length; i < l; ++i) members[exportedNames[i]] = null
    }
    return members
  }
  function parseProcessing(code) {
    var globalMembers = getGlobalMembers();

    function splitToAtoms(code) {
      var atoms = [];
      var items = code.split(/([\{\[\(\)\]\}])/);
      var result = items[0];
      var stack = [];
      for (var i = 1; i < items.length; i += 2) {
        var item = items[i];
        if (item === "[" || item === "{" || item === "(") {
          stack.push(result);
          result = item
        } else if (item === "]" || item === "}" || item === ")") {
          var kind = item === "}" ? "A" : item === ")" ? "B" : "C";
          var index = atoms.length;
          atoms.push(result + item);
          result = stack.pop() + '"' + kind + (index + 1) + '"'
        }
        result += items[i + 1]
      }
      atoms.unshift(result);
      return atoms
    }
    function injectStrings(code, strings) {
      return code.replace(/'(\d+)'/g, function(all, index) {
        var val = strings[index];
        if (val.charAt(0) === "/") return val;
        return /^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(val) ? "(new $p.Character(" + val + "))" : val
      })
    }
    function trimSpaces(string) {
      var m1 = /^\s*/.exec(string),
        result;
      if (m1[0].length === string.length) result = {
        left: m1[0],
        middle: "",
        right: ""
      };
      else {
        var m2 = /\s*$/.exec(string);
        result = {
          left: m1[0],
          middle: string.substring(m1[0].length, m2.index),
          right: m2[0]
        }
      }
      result.untrim = function(t) {
        return this.left + t + this.right
      };
      return result
    }
    function trim(string) {
      return string.replace(/^\s+/, "").replace(/\s+$/, "")
    }
    function appendToLookupTable(table, array) {
      for (var i = 0, l = array.length; i < l; ++i) table[array[i]] = null;
      return table
    }
    function isLookupTableEmpty(table) {
      for (var i in table) if (table.hasOwnProperty(i)) return false;
      return true
    }
    function getAtomIndex(templ) {
      return templ.substring(2, templ.length - 1)
    }
    var codeWoExtraCr = code.replace(/\r\n?|\n\r/g, "\n");
    var strings = [];
    var codeWoStrings = codeWoExtraCr.replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g, function(all, quoted, aposed, regexCtx, prefix, regex, singleComment, comment) {
      var index;
      if (quoted || aposed) {
        index = strings.length;
        strings.push(all);
        return "'" + index + "'"
      }
      if (regexCtx) {
        index = strings.length;
        strings.push(regex);
        return prefix + "'" + index + "'"
      }
      return comment !== "" ? " " : "\n"
    });
    codeWoStrings = codeWoStrings.replace(/__x([0-9A-F]{4})/g, function(all, hexCode) {
      return "__x005F_x" + hexCode
    });
    codeWoStrings = codeWoStrings.replace(/\$/g, "__x0024");
    var genericsWereRemoved;
    var codeWoGenerics = codeWoStrings;
    var replaceFunc = function(all, before, types, after) {
      if ( !! before || !!after) return all;
      genericsWereRemoved = true;
      return ""
    };
    do {
      genericsWereRemoved = false;
      codeWoGenerics = codeWoGenerics.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\[\])*(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g, replaceFunc)
    } while (genericsWereRemoved);
    var atoms = splitToAtoms(codeWoGenerics);
    var replaceContext;
    var declaredClasses = {},
      currentClassId, classIdSeed = 0;

    function addAtom(text, type) {
      var lastIndex = atoms.length;
      atoms.push(text);
      return '"' + type + lastIndex + '"'
    }
    function generateClassId() {
      return "class" + ++classIdSeed
    }
    function appendClass(class_, classId, scopeId) {
      class_.classId = classId;
      class_.scopeId = scopeId;
      declaredClasses[classId] = class_
    }
    var transformClassBody, transformInterfaceBody, transformStatementsBlock, transformStatements, transformMain, transformExpression;
    var classesRegex = /\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g;
    var methodsRegex = /\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g;
    var fieldTest = /^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/;
    var cstrsRegex = /\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g;
    var attrAndTypeRegex = /^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/;
    var functionsRegex = /\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;

    function extractClassesAndMethods(code) {
      var s = code;
      s = s.replace(classesRegex, function(all) {
        return addAtom(all, "E")
      });
      s = s.replace(methodsRegex, function(all) {
        return addAtom(all, "D")
      });
      s = s.replace(functionsRegex, function(all) {
        return addAtom(all, "H")
      });
      return s
    }
    function extractConstructors(code, className) {
      var result = code.replace(cstrsRegex, function(all, attr, name, params, throws_, body) {
        if (name !== className) return all;
        return addAtom(all, "G")
      });
      return result
    }
    function AstParam(name) {
      this.name = name
    }
    AstParam.prototype.toString = function() {
      return this.name
    };

    function AstParams(params, methodArgsParam) {
      this.params = params;
      this.methodArgsParam = methodArgsParam
    }
    AstParams.prototype.getNames = function() {
      var names = [];
      for (var i = 0, l = this.params.length; i < l; ++i) names.push(this.params[i].name);
      return names
    };
    AstParams.prototype.prependMethodArgs = function(body) {
      if (!this.methodArgsParam) return body;
      return "{\nvar " + this.methodArgsParam.name + " = Array.prototype.slice.call(arguments, " + this.params.length + ");\n" + body.substring(1)
    };
    AstParams.prototype.toString = function() {
      if (this.params.length === 0) return "()";
      var result = "(";
      for (var i = 0, l = this.params.length; i < l; ++i) result += this.params[i] + ", ";
      return result.substring(0, result.length - 2) + ")"
    };

    function transformParams(params) {
      var paramsWoPars = trim(params.substring(1, params.length - 1));
      var result = [],
        methodArgsParam = null;
      if (paramsWoPars !== "") {
        var paramList = paramsWoPars.split(",");
        for (var i = 0; i < paramList.length; ++i) {
          var param = /\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(paramList[i]);
          if (i === paramList.length - 1 && paramList[i].indexOf("...") >= 0) {
            methodArgsParam = new AstParam(param[1]);
            break
          }
          result.push(new AstParam(param[1]))
        }
      }
      return new AstParams(result, methodArgsParam)
    }
    function preExpressionTransform(expr) {
      var s = expr;
      s = s.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g, function(all, type, init) {
        return init
      });
      s = s.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g, function(all, type, init) {
        return addAtom(all, "F")
      });
      s = s.replace(functionsRegex, function(all) {
        return addAtom(all, "H")
      });
      s = s.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g, function(all, type, index) {
        var args = index.replace(/"C(\d+)"/g, function(all, j) {
          return atoms[j]
        }).replace(/\[\s*\]/g, "[null]").replace(/\s*\]\s*\[\s*/g, ", ");
        var arrayInitializer = "{" + args.substring(1, args.length - 1) + "}";
        var createArrayArgs = "('" + type + "', " + addAtom(arrayInitializer, "A") + ")";
        return "$p.createJavaArray" + addAtom(createArrayArgs, "B")
      });
      s = s.replace(/(\.\s*length)\s*"B\d+"/g, "$1");
      s = s.replace(/#([0-9A-Fa-f]{6})\b/g, function(all, digits) {
        return "0xFF" + digits
      });
      s = s.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g, function(all, index, next) {
        var atom = atoms[index];
        if (!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(atom)) return all;
        if (/^\(\s*int\s*\)$/.test(atom)) return "(int)" + next;
        var indexParts = atom.split(/"C(\d+)"/g);
        if (indexParts.length > 1) if (!/^\[\s*\]$/.test(atoms[indexParts[1]])) return all;
        return "" + next
      });
      s = s.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g, function(all, arg) {
        var trimmed = trimSpaces(arg);
        return trimmed.untrim("__int_cast(" + trimmed.middle + ")")
      });
      s = s.replace(/\bsuper(\s*"B\d+")/g, "$$superCstr$1").replace(/\bsuper(\s*\.)/g, "$$super$1");
      s = s.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/, function(all, numberWo0, intPart) {
        if (numberWo0 === intPart) return all;
        return intPart === "" ? "0" + numberWo0 : numberWo0
      });
      s = s.replace(/\b(\.?\d+\.?)[fF]\b/g, "$1");
      s = s.replace(/([^\s])%([^=\s])/g, "$1 % $2");
      s = s.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g, "__$1");
      s = s.replace(/\b(boolean|byte|char|float|int)\s*"B/g, function(all, name) {
        return "parse" + name.substring(0, 1).toUpperCase() + name.substring(1) + '"B'
      });
      s = s.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g, function(all, indexOrLength, index, atomIndex, equalsPart, rightSide) {
        if (index) {
          var atom = atoms[atomIndex];
          if (equalsPart) return "pixels.setPixel" + addAtom("(" + atom.substring(1, atom.length - 1) + "," + rightSide + ")", "B");
          return "pixels.getPixel" + addAtom("(" + atom.substring(1, atom.length - 1) + ")", "B")
        }
        if (indexOrLength) return "pixels.getLength" + addAtom("()", "B");
        if (equalsPart) return "pixels.set" + addAtom("(" + rightSide + ")", "B");
        return "pixels.toArray" + addAtom("()", "B")
      });
      var repeatJavaReplacement;

      function replacePrototypeMethods(all, subject, method, atomIndex) {
        var atom = atoms[atomIndex];
        repeatJavaReplacement = true;
        var trimmed = trimSpaces(atom.substring(1, atom.length - 1));
        return "__" + method + (trimmed.middle === "" ? addAtom("(" + subject.replace(/\.\s*$/, "") + ")", "B") : addAtom("(" + subject.replace(/\.\s*$/, "") + "," + trimmed.middle + ")", "B"))
      }
      do {
        repeatJavaReplacement = false;
        s = s.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt|matches)\s*"B(\d+)"/g, replacePrototypeMethods)
      } while (repeatJavaReplacement);

      function replaceInstanceof(all, subject, type) {
        repeatJavaReplacement = true;
        return "__instanceof" + addAtom("(" + subject + ", " + type + ")", "B")
      }
      do {
        repeatJavaReplacement = false;
        s = s.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g, replaceInstanceof)
      } while (repeatJavaReplacement);
      s = s.replace(/\bthis(\s*"B\d+")/g, "$$constr$1");
      return s
    }
    function AstInlineClass(baseInterfaceName, body) {
      this.baseInterfaceName = baseInterfaceName;
      this.body = body;
      body.owner = this
    }
    AstInlineClass.prototype.toString = function() {
      return "new (" + this.body + ")"
    };

    function transformInlineClass(class_) {
      var m = (new RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/)).exec(class_);
      var oldClassId = currentClassId,
        newClassId = generateClassId();
      currentClassId = newClassId;
      var uniqueClassName = m[1] + "$" + newClassId;
      var inlineClass = new AstInlineClass(uniqueClassName, transformClassBody(atoms[m[2]], uniqueClassName, "", "implements " + m[1]));
      appendClass(inlineClass, newClassId, oldClassId);
      currentClassId = oldClassId;
      return inlineClass
    }

    function AstFunction(name, params, body) {
      this.name = name;
      this.params = params;
      this.body = body
    }
    AstFunction.prototype.toString = function() {
      var oldContext = replaceContext;
      var names = appendToLookupTable({
        "this": null
      },
      this.params.getNames());
      replaceContext = function(subject) {
        return names.hasOwnProperty(subject.name) ? subject.name : oldContext(subject)
      };
      var result = "function";
      if (this.name) result += " " + this.name;
      var body = this.params.prependMethodArgs(this.body.toString());
      result += this.params + " " + body;
      replaceContext = oldContext;
      return result
    };

    function transformFunction(class_) {
      var m = (new RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/)).exec(class_);
      return new AstFunction(m[1] !== "function" ? m[1] : null, transformParams(atoms[m[2]]), transformStatementsBlock(atoms[m[3]]))
    }
    function AstInlineObject(members) {
      this.members = members
    }
    AstInlineObject.prototype.toString = function() {
      var oldContext = replaceContext;
      replaceContext = function(subject) {
        return subject.name === "this" ? "this" : oldContext(subject)
      };
      var result = "";
      for (var i = 0, l = this.members.length; i < l; ++i) {
        if (this.members[i].label) result += this.members[i].label + ": ";
        result += this.members[i].value.toString() + ", "
      }
      replaceContext = oldContext;
      return result.substring(0, result.length - 2)
    };

    function transformInlineObject(obj) {
      var members = obj.split(",");
      for (var i = 0; i < members.length; ++i) {
        var label = members[i].indexOf(":");
        if (label < 0) members[i] = {
          value: transformExpression(members[i])
        };
        else members[i] = {
          label: trim(members[i].substring(0, label)),
          value: transformExpression(trim(members[i].substring(label + 1)))
        }
      }
      return new AstInlineObject(members)
    }

    function expandExpression(expr) {
      if (expr.charAt(0) === "(" || expr.charAt(0) === "[") return expr.charAt(0) + expandExpression(expr.substring(1, expr.length - 1)) + expr.charAt(expr.length - 1);
      if (expr.charAt(0) === "{") {
        if (/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(expr)) return "{" + addAtom(expr.substring(1, expr.length - 1), "I") + "}";
        return "[" + expandExpression(expr.substring(1, expr.length - 1)) + "]"
      }
      var trimmed = trimSpaces(expr);
      var result = preExpressionTransform(trimmed.middle);
      result = result.replace(/"[ABC](\d+)"/g, function(all, index) {
        return expandExpression(atoms[index])
      });
      return trimmed.untrim(result)
    }
    function replaceContextInVars(expr) {
      return expr.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g, function(all, memberAccessSign, identifier, suffix, subMember, callSign) {
        if (memberAccessSign) return all;
        var subject = {
          name: identifier,
          member: subMember,
          callSign: !!callSign
        };
        return replaceContext(subject) + (suffix === undef ? "" : suffix)
      })
    }
    function AstExpression(expr, transforms) {
      this.expr = expr;
      this.transforms = transforms
    }
    AstExpression.prototype.toString = function() {
      var transforms = this.transforms;
      var expr = replaceContextInVars(this.expr);
      return expr.replace(/"!(\d+)"/g, function(all, index) {
        return transforms[index].toString()
      })
    };
    transformExpression = function(expr) {
      var transforms = [];
      var s = expandExpression(expr);
      s = s.replace(/"H(\d+)"/g, function(all, index) {
        transforms.push(transformFunction(atoms[index]));
        return '"!' + (transforms.length - 1) + '"'
      });
      s = s.replace(/"F(\d+)"/g, function(all, index) {
        transforms.push(transformInlineClass(atoms[index]));
        return '"!' + (transforms.length - 1) + '"'
      });
      s = s.replace(/"I(\d+)"/g, function(all, index) {
        transforms.push(transformInlineObject(atoms[index]));
        return '"!' + (transforms.length - 1) + '"'
      });
      return new AstExpression(s, transforms)
    };

    function AstVarDefinition(name, value, isDefault) {
      this.name = name;
      this.value = value;
      this.isDefault = isDefault
    }
    AstVarDefinition.prototype.toString = function() {
      return this.name + " = " + this.value
    };

    function transformVarDefinition(def, defaultTypeValue) {
      var eqIndex = def.indexOf("=");
      var name, value, isDefault;
      if (eqIndex < 0) {
        name = def;
        value = defaultTypeValue;
        isDefault = true
      } else {
        name = def.substring(0, eqIndex);
        value = transformExpression(def.substring(eqIndex + 1));
        isDefault = false
      }
      return new AstVarDefinition(trim(name.replace(/(\s*"C\d+")+/g, "")), value, isDefault)
    }
    function getDefaultValueForType(type) {
      if (type === "int" || type === "float") return "0";
      if (type === "boolean") return "false";
      if (type === "color") return "0x00000000";
      return "null"
    }
    function AstVar(definitions, varType) {
      this.definitions = definitions;
      this.varType = varType
    }
    AstVar.prototype.getNames = function() {
      var names = [];
      for (var i = 0, l = this.definitions.length; i < l; ++i) names.push(this.definitions[i].name);
      return names
    };
    AstVar.prototype.toString = function() {
      return "var " + this.definitions.join(",")
    };

    function AstStatement(expression) {
      this.expression = expression
    }
    AstStatement.prototype.toString = function() {
      return this.expression.toString()
    };

    function transformStatement(statement) {
      if (fieldTest.test(statement)) {
        var attrAndType = attrAndTypeRegex.exec(statement);
        var definitions = statement.substring(attrAndType[0].length).split(",");
        var defaultTypeValue = getDefaultValueForType(attrAndType[2]);
        for (var i = 0; i < definitions.length; ++i) definitions[i] = transformVarDefinition(definitions[i], defaultTypeValue);
        return new AstVar(definitions, attrAndType[2])
      }
      return new AstStatement(transformExpression(statement))
    }
    function AstForExpression(initStatement, condition, step) {
      this.initStatement = initStatement;
      this.condition = condition;
      this.step = step
    }
    AstForExpression.prototype.toString = function() {
      return "(" + this.initStatement + "; " + this.condition + "; " + this.step + ")"
    };

    function AstForInExpression(initStatement, container) {
      this.initStatement = initStatement;
      this.container = container
    }
    AstForInExpression.prototype.toString = function() {
      var init = this.initStatement.toString();
      if (init.indexOf("=") >= 0) init = init.substring(0, init.indexOf("="));
      return "(" + init + " in " + this.container + ")"
    };

    function AstForEachExpression(initStatement, container) {
      this.initStatement = initStatement;
      this.container = container
    }
    AstForEachExpression.iteratorId = 0;
    AstForEachExpression.prototype.toString = function() {
      var init = this.initStatement.toString();
      var iterator = "$it" + AstForEachExpression.iteratorId++;
      var variableName = init.replace(/^\s*var\s*/, "").split("=")[0];
      var initIteratorAndVariable = "var " + iterator + " = new $p.ObjectIterator(" + this.container + "), " + variableName + " = void(0)";
      var nextIterationCondition = iterator + ".hasNext() && ((" + variableName + " = " + iterator + ".next()) || true)";
      return "(" + initIteratorAndVariable + "; " + nextIterationCondition + ";)"
    };

    function transformForExpression(expr) {
      var content;
      if (/\bin\b/.test(expr)) {
        content = expr.substring(1, expr.length - 1).split(/\bin\b/g);
        return new AstForInExpression(transformStatement(trim(content[0])), transformExpression(content[1]))
      }
      if (expr.indexOf(":") >= 0 && expr.indexOf(";") < 0) {
        content = expr.substring(1, expr.length - 1).split(":");
        return new AstForEachExpression(transformStatement(trim(content[0])), transformExpression(content[1]))
      }
      content = expr.substring(1, expr.length - 1).split(";");
      return new AstForExpression(transformStatement(trim(content[0])), transformExpression(content[1]), transformExpression(content[2]))
    }

    function sortByWeight(array) {
      array.sort(function(a, b) {
        return b.weight - a.weight
      })
    }
    function AstInnerInterface(name, body, isStatic) {
      this.name = name;
      this.body = body;
      this.isStatic = isStatic;
      body.owner = this
    }
    AstInnerInterface.prototype.toString = function() {
      return "" + this.body
    };

    function AstInnerClass(name, body, isStatic) {
      this.name = name;
      this.body = body;
      this.isStatic = isStatic;
      body.owner = this
    }
    AstInnerClass.prototype.toString = function() {
      return "" + this.body
    };

    function transformInnerClass(class_) {
      var m = classesRegex.exec(class_);
      classesRegex.lastIndex = 0;
      var isStatic = m[1].indexOf("static") >= 0;
      var body = atoms[getAtomIndex(m[6])],
        innerClass;
      var oldClassId = currentClassId,
        newClassId = generateClassId();
      currentClassId = newClassId;
      if (m[2] === "interface") innerClass = new AstInnerInterface(m[3], transformInterfaceBody(body, m[3], m[4]), isStatic);
      else innerClass = new AstInnerClass(m[3], transformClassBody(body, m[3], m[4], m[5]), isStatic);
      appendClass(innerClass, newClassId, oldClassId);
      currentClassId = oldClassId;
      return innerClass
    }
    function AstClassMethod(name, params, body, isStatic) {
      this.name = name;
      this.params = params;
      this.body = body;
      this.isStatic = isStatic
    }
    AstClassMethod.prototype.toString = function() {
      var paramNames = appendToLookupTable({},
      this.params.getNames());
      var oldContext = replaceContext;
      replaceContext = function(subject) {
        return paramNames.hasOwnProperty(subject.name) ? subject.name : oldContext(subject)
      };
      var body = this.params.prependMethodArgs(this.body.toString());
      var result = "function " + this.methodId + this.params + " " + body + "\n";
      replaceContext = oldContext;
      return result
    };

    function transformClassMethod(method) {
      var m = methodsRegex.exec(method);
      methodsRegex.lastIndex = 0;
      var isStatic = m[1].indexOf("static") >= 0;
      var body = m[6] !== ";" ? atoms[getAtomIndex(m[6])] : "{}";
      return new AstClassMethod(m[3], transformParams(atoms[getAtomIndex(m[4])]), transformStatementsBlock(body), isStatic)
    }
    function AstClassField(definitions, fieldType, isStatic) {
      this.definitions = definitions;
      this.fieldType = fieldType;
      this.isStatic = isStatic
    }
    AstClassField.prototype.getNames = function() {
      var names = [];
      for (var i = 0, l = this.definitions.length; i < l; ++i) names.push(this.definitions[i].name);
      return names
    };
    AstClassField.prototype.toString = function() {
      var thisPrefix = replaceContext({
        name: "[this]"
      });
      if (this.isStatic) {
        var className = this.owner.name;
        var staticDeclarations = [];
        for (var i = 0, l = this.definitions.length; i < l; ++i) {
          var definition = this.definitions[i];
          var name = definition.name,
            staticName = className + "." + name;
          var declaration = "if(" + staticName + " === void(0)) {\n" + " " + staticName + " = " + definition.value + "; }\n" + "$p.defineProperty(" + thisPrefix + ", " + "'" + name + "', { get: function(){return " + staticName + ";}, " + "set: function(val){" + staticName + " = val;} });\n";
          staticDeclarations.push(declaration)
        }
        return staticDeclarations.join("")
      }
      return thisPrefix + "." + this.definitions.join("; " + thisPrefix + ".")
    };

    function transformClassField(statement) {
      var attrAndType = attrAndTypeRegex.exec(statement);
      var isStatic = attrAndType[1].indexOf("static") >= 0;
      var definitions = statement.substring(attrAndType[0].length).split(/,\s*/g);
      var defaultTypeValue = getDefaultValueForType(attrAndType[2]);
      for (var i = 0; i < definitions.length; ++i) definitions[i] = transformVarDefinition(definitions[i], defaultTypeValue);
      return new AstClassField(definitions, attrAndType[2], isStatic)
    }
    function AstConstructor(params, body) {
      this.params = params;
      this.body = body
    }
    AstConstructor.prototype.toString = function() {
      var paramNames = appendToLookupTable({},
      this.params.getNames());
      var oldContext = replaceContext;
      replaceContext = function(subject) {
        return paramNames.hasOwnProperty(subject.name) ? subject.name : oldContext(subject)
      };
      var prefix = "function $constr_" + this.params.params.length + this.params.toString();
      var body = this.params.prependMethodArgs(this.body.toString());
      if (!/\$(superCstr|constr)\b/.test(body)) body = "{\n$superCstr();\n" + body.substring(1);
      replaceContext = oldContext;
      return prefix + body + "\n"
    };

    function transformConstructor(cstr) {
      var m = (new RegExp(/"B(\d+)"\s*"A(\d+)"/)).exec(cstr);
      var params = transformParams(atoms[m[1]]);
      return new AstConstructor(params, transformStatementsBlock(atoms[m[2]]))
    }
    function AstInterfaceBody(name, interfacesNames, methodsNames, fields, innerClasses, misc) {
      var i, l;
      this.name = name;
      this.interfacesNames = interfacesNames;
      this.methodsNames = methodsNames;
      this.fields = fields;
      this.innerClasses = innerClasses;
      this.misc = misc;
      for (i = 0, l = fields.length; i < l; ++i) fields[i].owner = this
    }
    AstInterfaceBody.prototype.getMembers = function(classFields, classMethods, classInners) {
      if (this.owner.base) this.owner.base.body.getMembers(classFields, classMethods, classInners);
      var i, j, l, m;
      for (i = 0, l = this.fields.length; i < l; ++i) {
        var fieldNames = this.fields[i].getNames();
        for (j = 0, m = fieldNames.length; j < m; ++j) classFields[fieldNames[j]] = this.fields[i]
      }
      for (i = 0, l = this.methodsNames.length; i < l; ++i) {
        var methodName = this.methodsNames[i];
        classMethods[methodName] = true
      }
      for (i = 0, l = this.innerClasses.length; i < l; ++i) {
        var innerClass = this.innerClasses[i];
        classInners[innerClass.name] = innerClass
      }
    };
    AstInterfaceBody.prototype.toString = function() {
      function getScopeLevel(p) {
        var i = 0;
        while (p) {
          ++i;
          p = p.scope
        }
        return i
      }
      var scopeLevel = getScopeLevel(this.owner);
      var className = this.name;
      var staticDefinitions = "";
      var metadata = "";
      var thisClassFields = {},
        thisClassMethods = {},
        thisClassInners = {};
      this.getMembers(thisClassFields, thisClassMethods, thisClassInners);
      var i, l, j, m;
      if (this.owner.interfaces) {
        var resolvedInterfaces = [],
          resolvedInterface;
        for (i = 0, l = this.interfacesNames.length; i < l; ++i) {
          if (!this.owner.interfaces[i]) continue;
          resolvedInterface = replaceContext({
            name: this.interfacesNames[i]
          });
          resolvedInterfaces.push(resolvedInterface);
          staticDefinitions += "$p.extendInterfaceMembers(" + className + ", " + resolvedInterface + ");\n"
        }
        metadata += className + ".$interfaces = [" + resolvedInterfaces.join(", ") + "];\n"
      }
      metadata += className + ".$isInterface = true;\n";
      metadata += className + ".$methods = ['" + this.methodsNames.join("', '") + "'];\n";
      sortByWeight(this.innerClasses);
      for (i = 0, l = this.innerClasses.length; i < l; ++i) {
        var innerClass = this.innerClasses[i];
        if (innerClass.isStatic) staticDefinitions += className + "." + innerClass.name + " = " + innerClass + ";\n"
      }
      for (i = 0, l = this.fields.length; i < l; ++i) {
        var field = this.fields[i];
        if (field.isStatic) staticDefinitions += className + "." + field.definitions.join(";\n" + className + ".") + ";\n"
      }
      return "(function() {\n" + "function " + className + "() { throw 'Unable to create the interface'; }\n" + staticDefinitions + metadata + "return " + className + ";\n" + "})()"
    };
    transformInterfaceBody = function(body, name, baseInterfaces) {
      var declarations = body.substring(1, body.length - 1);
      declarations = extractClassesAndMethods(declarations);
      declarations = extractConstructors(declarations, name);
      var methodsNames = [],
        classes = [];
      declarations = declarations.replace(/"([DE])(\d+)"/g, function(all, type, index) {
        if (type === "D") methodsNames.push(index);
        else if (type === "E") classes.push(index);
        return ""
      });
      var fields = declarations.split(/;(?:\s*;)*/g);
      var baseInterfaceNames;
      var i, l;
      if (baseInterfaces !== undef) baseInterfaceNames = baseInterfaces.replace(/^\s*extends\s+(.+?)\s*$/g, "$1").split(/\s*,\s*/g);
      for (i = 0, l = methodsNames.length; i < l; ++i) {
        var method = transformClassMethod(atoms[methodsNames[i]]);
        methodsNames[i] = method.name
      }
      for (i = 0, l = fields.length - 1; i < l; ++i) {
        var field = trimSpaces(fields[i]);
        fields[i] = transformClassField(field.middle)
      }
      var tail = fields.pop();
      for (i = 0, l = classes.length; i < l; ++i) classes[i] = transformInnerClass(atoms[classes[i]]);
      return new AstInterfaceBody(name, baseInterfaceNames, methodsNames, fields, classes, {
        tail: tail
      })
    };

    function AstClassBody(name, baseClassName, interfacesNames, functions, methods, fields, cstrs, innerClasses, misc) {
      var i, l;
      this.name = name;
      this.baseClassName = baseClassName;
      this.interfacesNames = interfacesNames;
      this.functions = functions;
      this.methods = methods;
      this.fields = fields;
      this.cstrs = cstrs;
      this.innerClasses = innerClasses;
      this.misc = misc;
      for (i = 0, l = fields.length; i < l; ++i) fields[i].owner = this
    }
    AstClassBody.prototype.getMembers = function(classFields, classMethods, classInners) {
      if (this.owner.base) this.owner.base.body.getMembers(classFields, classMethods, classInners);
      var i, j, l, m;
      for (i = 0, l = this.fields.length; i < l; ++i) {
        var fieldNames = this.fields[i].getNames();
        for (j = 0, m = fieldNames.length; j < m; ++j) classFields[fieldNames[j]] = this.fields[i]
      }
      for (i = 0, l = this.methods.length; i < l; ++i) {
        var method = this.methods[i];
        classMethods[method.name] = method
      }
      for (i = 0, l = this.innerClasses.length; i < l; ++i) {
        var innerClass = this.innerClasses[i];
        classInners[innerClass.name] = innerClass
      }
    };
    AstClassBody.prototype.toString = function() {
      function getScopeLevel(p) {
        var i = 0;
        while (p) {
          ++i;
          p = p.scope
        }
        return i
      }
      var scopeLevel = getScopeLevel(this.owner);
      var selfId = "$this_" + scopeLevel;
      var className = this.name;
      var result = "var " + selfId + " = this;\n";
      var staticDefinitions = "";
      var metadata = "";
      var thisClassFields = {},
        thisClassMethods = {},
        thisClassInners = {};
      this.getMembers(thisClassFields, thisClassMethods, thisClassInners);
      var oldContext = replaceContext;
      replaceContext = function(subject) {
        var name = subject.name;
        if (name === "this") return subject.callSign || !subject.member ? selfId + ".$self" : selfId;
        if (thisClassFields.hasOwnProperty(name)) return thisClassFields[name].isStatic ? className + "." + name : selfId + "." + name;
        if (thisClassInners.hasOwnProperty(name)) return selfId + "." + name;
        if (thisClassMethods.hasOwnProperty(name)) return thisClassMethods[name].isStatic ? className + "." + name : selfId + ".$self." + name;
        return oldContext(subject)
      };
      var resolvedBaseClassName;
      if (this.baseClassName) {
        resolvedBaseClassName = oldContext({
          name: this.baseClassName
        });
        result += "var $super = { $upcast: " + selfId + " };\n";
        result += "function $superCstr(){" + resolvedBaseClassName + ".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n";
        metadata += className + ".$base = " + resolvedBaseClassName + ";\n"
      } else result += "function $superCstr(){$p.extendClassChain(" + selfId + ")}\n";
      if (this.owner.base) staticDefinitions += "$p.extendStaticMembers(" + className + ", " + resolvedBaseClassName + ");\n";
      var i, l, j, m;
      if (this.owner.interfaces) {
        var resolvedInterfaces = [],
          resolvedInterface;
        for (i = 0, l = this.interfacesNames.length; i < l; ++i) {
          if (!this.owner.interfaces[i]) continue;
          resolvedInterface = oldContext({
            name: this.interfacesNames[i]
          });
          resolvedInterfaces.push(resolvedInterface);
          staticDefinitions += "$p.extendInterfaceMembers(" + className + ", " + resolvedInterface + ");\n"
        }
        metadata += className + ".$interfaces = [" + resolvedInterfaces.join(", ") + "];\n"
      }
      if (this.functions.length > 0) result += this.functions.join("\n") + "\n";
      sortByWeight(this.innerClasses);
      for (i = 0, l = this.innerClasses.length; i < l; ++i) {
        var innerClass = this.innerClasses[i];
        if (innerClass.isStatic) {
          staticDefinitions += className + "." + innerClass.name + " = " + innerClass + ";\n";
          result += selfId + "." + innerClass.name + " = " + className + "." + innerClass.name + ";\n"
        } else result += selfId + "." + innerClass.name + " = " + innerClass + ";\n"
      }
      for (i = 0, l = this.fields.length; i < l; ++i) {
        var field = this.fields[i];
        if (field.isStatic) {
          staticDefinitions += className + "." + field.definitions.join(";\n" + className + ".") + ";\n";
          for (j = 0, m = field.definitions.length; j < m; ++j) {
            var fieldName = field.definitions[j].name,
              staticName = className + "." + fieldName;
            result += "$p.defineProperty(" + selfId + ", '" + fieldName + "', {" + "get: function(){return " + staticName + "}, " + "set: function(val){" + staticName + " = val}});\n"
          }
        } else result += selfId + "." + field.definitions.join(";\n" + selfId + ".") + ";\n"
      }
      var methodOverloads = {};
      for (i = 0, l = this.methods.length; i < l; ++i) {
        var method = this.methods[i];
        var overload = methodOverloads[method.name];
        var methodId = method.name + "$" + method.params.params.length;
        var hasMethodArgs = !!method.params.methodArgsParam;
        if (overload) {
          ++overload;
          methodId += "_" + overload
        } else overload = 1;
        method.methodId = methodId;
        methodOverloads[method.name] = overload;
        if (method.isStatic) {
          staticDefinitions += method;
          staticDefinitions += "$p.addMethod(" + className + ", '" + method.name + "', " + methodId + ", " + hasMethodArgs + ");\n";
          result += "$p.addMethod(" + selfId + ", '" + method.name + "', " + methodId + ", " + hasMethodArgs + ");\n"
        } else {
          result += method;
          result += "$p.addMethod(" + selfId + ", '" + method.name + "', " + methodId + ", " + hasMethodArgs + ");\n"
        }
      }
      result += trim(this.misc.tail);
      if (this.cstrs.length > 0) result += this.cstrs.join("\n") + "\n";
      result += "function $constr() {\n";
      var cstrsIfs = [];
      for (i = 0, l = this.cstrs.length; i < l; ++i) {
        var paramsLength = this.cstrs[i].params.params.length;
        var methodArgsPresent = !!this.cstrs[i].params.methodArgsParam;
        cstrsIfs.push("if(arguments.length " + (methodArgsPresent ? ">=" : "===") + " " + paramsLength + ") { " + "$constr_" + paramsLength + ".apply(" + selfId + ", arguments); }")
      }
      if (cstrsIfs.length > 0) result += cstrsIfs.join(" else ") + " else ";
      result += "$superCstr();\n}\n";
      result += "$constr.apply(null, arguments);\n";
      replaceContext = oldContext;
      return "(function() {\n" + "function " + className + "() {\n" + result + "}\n" + staticDefinitions + metadata + "return " + className + ";\n" + "})()"
    };
    transformClassBody = function(body, name, baseName, interfaces) {
      var declarations = body.substring(1, body.length - 1);
      declarations = extractClassesAndMethods(declarations);
      declarations = extractConstructors(declarations, name);
      var methods = [],
        classes = [],
        cstrs = [],
        functions = [];
      declarations = declarations.replace(/"([DEGH])(\d+)"/g, function(all, type, index) {
        if (type === "D") methods.push(index);
        else if (type === "E") classes.push(index);
        else if (type === "H") functions.push(index);
        else cstrs.push(index);
        return ""
      });
      var fields = declarations.replace(/^(?:\s*;)+/, "").split(/;(?:\s*;)*/g);
      var baseClassName, interfacesNames;
      var i;
      if (baseName !== undef) baseClassName = baseName.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g, "$1");
      if (interfaces !== undef) interfacesNames = interfaces.replace(/^\s*implements\s+(.+?)\s*$/g, "$1").split(/\s*,\s*/g);
      for (i = 0; i < functions.length; ++i) functions[i] = transformFunction(atoms[functions[i]]);
      for (i = 0; i < methods.length; ++i) methods[i] = transformClassMethod(atoms[methods[i]]);
      for (i = 0; i < fields.length - 1; ++i) {
        var field = trimSpaces(fields[i]);
        fields[i] = transformClassField(field.middle)
      }
      var tail = fields.pop();
      for (i = 0; i < cstrs.length; ++i) cstrs[i] = transformConstructor(atoms[cstrs[i]]);
      for (i = 0; i < classes.length; ++i) classes[i] = transformInnerClass(atoms[classes[i]]);
      return new AstClassBody(name, baseClassName, interfacesNames, functions, methods, fields, cstrs, classes, {
        tail: tail
      })
    };

    function AstInterface(name, body) {
      this.name = name;
      this.body = body;
      body.owner = this
    }
    AstInterface.prototype.toString = function() {
      return "var " + this.name + " = " + this.body + ";\n" + "$p." + this.name + " = " + this.name + ";\n"
    };

    function AstClass(name, body) {
      this.name = name;
      this.body = body;
      body.owner = this
    }
    AstClass.prototype.toString = function() {
      return "var " + this.name + " = " + this.body + ";\n" + "$p." + this.name + " = " + this.name + ";\n"
    };

    function transformGlobalClass(class_) {
      var m = classesRegex.exec(class_);
      classesRegex.lastIndex = 0;
      var body = atoms[getAtomIndex(m[6])];
      var oldClassId = currentClassId,
        newClassId = generateClassId();
      currentClassId = newClassId;
      var globalClass;
      if (m[2] === "interface") globalClass = new AstInterface(m[3], transformInterfaceBody(body, m[3], m[4]));
      else globalClass = new AstClass(m[3], transformClassBody(body, m[3], m[4], m[5]));
      appendClass(globalClass, newClassId, oldClassId);
      currentClassId = oldClassId;
      return globalClass
    }
    function AstMethod(name, params, body) {
      this.name = name;
      this.params = params;
      this.body = body
    }
    AstMethod.prototype.toString = function() {
      var paramNames = appendToLookupTable({},
      this.params.getNames());
      var oldContext = replaceContext;
      replaceContext = function(subject) {
        return paramNames.hasOwnProperty(subject.name) ? subject.name : oldContext(subject)
      };
      var body = this.params.prependMethodArgs(this.body.toString());
      var result = "function " + this.name + this.params + " " + body + "\n" + "$p." + this.name + " = " + this.name + ";";
      replaceContext = oldContext;
      return result
    };

    function transformGlobalMethod(method) {
      var m = methodsRegex.exec(method);
      var result = methodsRegex.lastIndex = 0;
      return new AstMethod(m[3], transformParams(atoms[getAtomIndex(m[4])]), transformStatementsBlock(atoms[getAtomIndex(m[6])]))
    }
    function preStatementsTransform(statements) {
      var s = statements;
      s = s.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g, "$1");
      return s
    }
    function AstForStatement(argument, misc) {
      this.argument = argument;
      this.misc = misc
    }
    AstForStatement.prototype.toString = function() {
      return this.misc.prefix + this.argument.toString()
    };

    function AstCatchStatement(argument, misc) {
      this.argument = argument;
      this.misc = misc
    }
    AstCatchStatement.prototype.toString = function() {
      return this.misc.prefix + this.argument.toString()
    };

    function AstPrefixStatement(name, argument, misc) {
      this.name = name;
      this.argument = argument;
      this.misc = misc
    }
    AstPrefixStatement.prototype.toString = function() {
      var result = this.misc.prefix;
      if (this.argument !== undef) result += this.argument.toString();
      return result
    };

    function AstSwitchCase(expr) {
      this.expr = expr
    }
    AstSwitchCase.prototype.toString = function() {
      return "case " + this.expr + ":"
    };

    function AstLabel(label) {
      this.label = label
    }
    AstLabel.prototype.toString = function() {
      return this.label
    };
    transformStatements = function(statements, transformMethod, transformClass) {
      var nextStatement = new RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g);
      var res = [];
      statements = preStatementsTransform(statements);
      var lastIndex = 0,
        m, space;
      while ((m = nextStatement.exec(statements)) !== null) {
        if (m[1] !== undef) {
          var i = statements.lastIndexOf('"B', nextStatement.lastIndex);
          var statementsPrefix = statements.substring(lastIndex, i);
          if (m[1] === "for") res.push(new AstForStatement(transformForExpression(atoms[m[2]]), {
            prefix: statementsPrefix
          }));
          else if (m[1] === "catch") res.push(new AstCatchStatement(transformParams(atoms[m[2]]), {
            prefix: statementsPrefix
          }));
          else res.push(new AstPrefixStatement(m[1], transformExpression(atoms[m[2]]), {
            prefix: statementsPrefix
          }))
        } else if (m[3] !== undef) res.push(new AstPrefixStatement(m[3], undef, {
          prefix: statements.substring(lastIndex, nextStatement.lastIndex)
        }));
        else if (m[4] !== undef) {
          space = statements.substring(lastIndex, nextStatement.lastIndex - m[4].length);
          if (trim(space).length !== 0) continue;
          res.push(space);
          var kind = m[4].charAt(1),
            atomIndex = m[5];
          if (kind === "D") res.push(transformMethod(atoms[atomIndex]));
          else if (kind === "E") res.push(transformClass(atoms[atomIndex]));
          else if (kind === "H") res.push(transformFunction(atoms[atomIndex]));
          else res.push(transformStatementsBlock(atoms[atomIndex]))
        } else if (m[6] !== undef) res.push(new AstSwitchCase(transformExpression(trim(m[7]))));
        else if (m[8] !== undef) {
          space = statements.substring(lastIndex, nextStatement.lastIndex - m[8].length);
          if (trim(space).length !== 0) continue;
          res.push(new AstLabel(statements.substring(lastIndex, nextStatement.lastIndex)))
        } else {
          var statement = trimSpaces(statements.substring(lastIndex, nextStatement.lastIndex - 1));
          res.push(statement.left);
          res.push(transformStatement(statement.middle));
          res.push(statement.right + ";")
        }
        lastIndex = nextStatement.lastIndex
      }
      var statementsTail = trimSpaces(statements.substring(lastIndex));
      res.push(statementsTail.left);
      if (statementsTail.middle !== "") {
        res.push(transformStatement(statementsTail.middle));
        res.push(";" + statementsTail.right)
      }
      return res
    };

    function getLocalNames(statements) {
      var localNames = [];
      for (var i = 0, l = statements.length; i < l; ++i) {
        var statement = statements[i];
        if (statement instanceof AstVar) localNames = localNames.concat(statement.getNames());
        else if (statement instanceof AstForStatement && statement.argument.initStatement instanceof AstVar) localNames = localNames.concat(statement.argument.initStatement.getNames());
        else if (statement instanceof AstInnerInterface || statement instanceof AstInnerClass || statement instanceof AstInterface || statement instanceof AstClass || statement instanceof AstMethod || statement instanceof AstFunction) localNames.push(statement.name)
      }
      return appendToLookupTable({},
      localNames)
    }
    function AstStatementsBlock(statements) {
      this.statements = statements
    }
    AstStatementsBlock.prototype.toString = function() {
      var localNames = getLocalNames(this.statements);
      var oldContext = replaceContext;
      if (!isLookupTableEmpty(localNames)) replaceContext = function(subject) {
        return localNames.hasOwnProperty(subject.name) ? subject.name : oldContext(subject)
      };
      var result = "{\n" + this.statements.join("") + "\n}";
      replaceContext = oldContext;
      return result
    };
    transformStatementsBlock = function(block) {
      var content = trimSpaces(block.substring(1, block.length - 1));
      return new AstStatementsBlock(transformStatements(content.middle))
    };

    function AstRoot(statements) {
      this.statements = statements
    }
    AstRoot.prototype.toString = function() {
      var classes = [],
        otherStatements = [],
        statement;
      for (var i = 0, len = this.statements.length; i < len; ++i) {
        statement = this.statements[i];
        if (statement instanceof AstClass || statement instanceof AstInterface) classes.push(statement);
        else otherStatements.push(statement)
      }
      sortByWeight(classes);
      var localNames = getLocalNames(this.statements);
      replaceContext = function(subject) {
        var name = subject.name;
        if (localNames.hasOwnProperty(name)) return name;
        if (globalMembers.hasOwnProperty(name) || PConstants.hasOwnProperty(name) || defaultScope.hasOwnProperty(name)) return "$p." + name;
        return name
      };
      var result = "// this code was autogenerated from PJS\n" + "(function($p) {\n" + classes.join("") + "\n" + otherStatements.join("") + "\n})";
      replaceContext = null;
      return result
    };
    transformMain = function() {
      var statements = extractClassesAndMethods(atoms[0]);
      statements = statements.replace(/\bimport\s+[^;]+;/g, "");
      return new AstRoot(transformStatements(statements, transformGlobalMethod, transformGlobalClass))
    };

    function generateMetadata(ast) {
      var globalScope = {};
      var id, class_;
      for (id in declaredClasses) if (declaredClasses.hasOwnProperty(id)) {
        class_ = declaredClasses[id];
        var scopeId = class_.scopeId,
          name = class_.name;
        if (scopeId) {
          var scope = declaredClasses[scopeId];
          class_.scope = scope;
          if (scope.inScope === undef) scope.inScope = {};
          scope.inScope[name] = class_
        } else globalScope[name] = class_
      }
      function findInScopes(class_, name) {
        var parts = name.split(".");
        var currentScope = class_.scope,
          found;
        while (currentScope) {
          if (currentScope.hasOwnProperty(parts[0])) {
            found = currentScope[parts[0]];
            break
          }
          currentScope = currentScope.scope
        }
        if (found === undef) found = globalScope[parts[0]];
        for (var i = 1, l = parts.length; i < l && found; ++i) found = found.inScope[parts[i]];
        return found
      }
      for (id in declaredClasses) if (declaredClasses.hasOwnProperty(id)) {
        class_ = declaredClasses[id];
        var baseClassName = class_.body.baseClassName;
        if (baseClassName) {
          var parent = findInScopes(class_, baseClassName);
          if (parent) {
            class_.base = parent;
            if (!parent.derived) parent.derived = [];
            parent.derived.push(class_)
          }
        }
        var interfacesNames = class_.body.interfacesNames,
          interfaces = [],
          i, l;
        if (interfacesNames && interfacesNames.length > 0) {
          for (i = 0, l = interfacesNames.length; i < l; ++i) {
            var interface_ = findInScopes(class_, interfacesNames[i]);
            interfaces.push(interface_);
            if (!interface_) continue;
            if (!interface_.derived) interface_.derived = [];
            interface_.derived.push(class_)
          }
          if (interfaces.length > 0) class_.interfaces = interfaces
        }
      }
    }
    function setWeight(ast) {
      var queue = [],
        tocheck = {};
      var id, scopeId, class_;
      for (id in declaredClasses) if (declaredClasses.hasOwnProperty(id)) {
        class_ = declaredClasses[id];
        if (!class_.inScope && !class_.derived) {
          queue.push(id);
          class_.weight = 0
        } else {
          var dependsOn = [];
          if (class_.inScope) for (scopeId in class_.inScope) if (class_.inScope.hasOwnProperty(scopeId)) dependsOn.push(class_.inScope[scopeId]);
          if (class_.derived) dependsOn = dependsOn.concat(class_.derived);
          tocheck[id] = dependsOn
        }
      }
      function removeDependentAndCheck(targetId, from) {
        var dependsOn = tocheck[targetId];
        if (!dependsOn) return false;
        var i = dependsOn.indexOf(from);
        if (i < 0) return false;
        dependsOn.splice(i, 1);
        if (dependsOn.length > 0) return false;
        delete tocheck[targetId];
        return true
      }
      while (queue.length > 0) {
        id = queue.shift();
        class_ = declaredClasses[id];
        if (class_.scopeId && removeDependentAndCheck(class_.scopeId, class_)) {
          queue.push(class_.scopeId);
          declaredClasses[class_.scopeId].weight = class_.weight + 1
        }
        if (class_.base && removeDependentAndCheck(class_.base.classId, class_)) {
          queue.push(class_.base.classId);
          class_.base.weight = class_.weight + 1
        }
        if (class_.interfaces) {
          var i, l;
          for (i = 0, l = class_.interfaces.length; i < l; ++i) {
            if (!class_.interfaces[i] || !removeDependentAndCheck(class_.interfaces[i].classId, class_)) continue;
            queue.push(class_.interfaces[i].classId);
            class_.interfaces[i].weight = class_.weight + 1
          }
        }
      }
    }
    var transformed = transformMain();
    generateMetadata(transformed);
    setWeight(transformed);
    var redendered = transformed.toString();
    redendered = redendered.replace(/\s*\n(?:[\t ]*\n)+/g, "\n\n");
    redendered = redendered.replace(/__x([0-9A-F]{4})/g, function(all, hexCode) {
      return String.fromCharCode(parseInt(hexCode, 16))
    });
    return injectStrings(redendered, strings)
  }

  function preprocessCode(aCode, sketch) {
    var dm = (new RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g)).exec(aCode);
    if (dm && dm.length === 2) {
      var jsonItems = [],
        directives = dm.splice(1, 2)[0].replace(/\{([\s\S]*?)\}/g, function() {
        return function(all, item) {
          jsonItems.push(item);
          return "{" + (jsonItems.length - 1) + "}"
        }
      }()).replace("\n", "").replace("\r", "").split(";");
      var clean = function(s) {
        return s.replace(/^\s*["']?/, "").replace(/["']?\s*$/, "")
      };
      for (var i = 0, dl = directives.length; i < dl; i++) {
        var pair = directives[i].split("=");
        if (pair && pair.length === 2) {
          var key = clean(pair[0]),
            value = clean(pair[1]),
            list = [];
          if (key === "preload") {
            list = value.split(",");
            for (var j = 0, jl = list.length; j < jl; j++) {
              var imageName = clean(list[j]);
              sketch.imageCache.add(imageName)
            }
          } else if (key === "font") {
            list = value.split(",");
            for (var x = 0, xl = list.length; x < xl; x++) {
              var fontName = clean(list[x]),
                index = /^\{(\d*?)\}$/.exec(fontName);
              PFont.preloading.add(index ? JSON.parse("{" + jsonItems[index[1]] + "}") : fontName)
            }
          } else if (key === "pauseOnBlur") sketch.options.pauseOnBlur = value === "true";
          else if (key === "globalKeyEvents") sketch.options.globalKeyEvents = value === "true";
          else if (key.substring(0, 6) === "param-") sketch.params[key.substring(6)] = value;
          else sketch.options[key] = value
        }
      }
    }
    return aCode
  }
  Processing.compile = function(pdeCode) {
    var sketch = new Processing.Sketch;
    var code = preprocessCode(pdeCode, sketch);
    var compiledPde = parseProcessing(code);
    sketch.sourceCode = compiledPde;
    return sketch
  };
  var tinylogLite = function() {
    var tinylogLite = {},
      undef = "undefined",
      func = "function",
      False = !1,
      True = !0,
      logLimit = 512,
      log = "log";
    if (typeof tinylog !== undef && typeof tinylog[log] === func) tinylogLite[log] = tinylog[log];
    else if (typeof document !== undef && !document.fake)(function() {
      var doc = document,
        $div = "div",
        $style = "style",
        $title = "title",
        containerStyles = {
        zIndex: 1E4,
        position: "fixed",
        bottom: "0px",
        width: "100%",
        height: "15%",
        fontFamily: "sans-serif",
        color: "#ccc",
        backgroundColor: "black"
      },
        outputStyles = {
        position: "relative",
        fontFamily: "monospace",
        overflow: "auto",
        height: "100%",
        paddingTop: "5px"
      },
        resizerStyles = {
        height: "5px",
        marginTop: "-5px",
        cursor: "n-resize",
        backgroundColor: "darkgrey"
      },
        closeButtonStyles = {
        position: "absolute",
        top: "5px",
        right: "20px",
        color: "#111",
        MozBorderRadius: "4px",
        webkitBorderRadius: "4px",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "normal",
        textAlign: "center",
        padding: "3px 5px",
        backgroundColor: "#333",
        fontSize: "12px"
      },
        entryStyles = {
        minHeight: "16px"
      },
        entryTextStyles = {
        fontSize: "12px",
        margin: "0 8px 0 8px",
        maxWidth: "100%",
        whiteSpace: "pre-wrap",
        overflow: "auto"
      },
        view = doc.defaultView,
        docElem = doc.documentElement,
        docElemStyle = docElem[$style],
        setStyles = function() {
        var i = arguments.length,
          elemStyle, styles, style;
        while (i--) {
          styles = arguments[i--];
          elemStyle = arguments[i][$style];
          for (style in styles) if (styles.hasOwnProperty(style)) elemStyle[style] = styles[style]
        }
      },
        observer = function(obj, event, handler) {
        if (obj.addEventListener) obj.addEventListener(event, handler, False);
        else if (obj.attachEvent) obj.attachEvent("on" + event, handler);
        return [obj, event, handler]
      },
        unobserve = function(obj, event, handler) {
        if (obj.removeEventListener) obj.removeEventListener(event, handler, False);
        else if (obj.detachEvent) obj.detachEvent("on" + event, handler)
      },
        clearChildren = function(node) {
        var children = node.childNodes,
          child = children.length;
        while (child--) node.removeChild(children.item(0))
      },
        append = function(to, elem) {
        return to.appendChild(elem)
      },
        createElement = function(localName) {
        return doc.createElement(localName)
      },
        createTextNode = function(text) {
        return doc.createTextNode(text)
      },
        createLog = tinylogLite[log] = function(message) {
        var uninit, originalPadding = docElemStyle.paddingBottom,
          container = createElement($div),
          containerStyle = container[$style],
          resizer = append(container, createElement($div)),
          output = append(container, createElement($div)),
          closeButton = append(container, createElement($div)),
          resizingLog = False,
          previousHeight = False,
          previousScrollTop = False,
          messages = 0,
          updateSafetyMargin = function() {
          docElemStyle.paddingBottom = container.clientHeight + "px"
        },
          setContainerHeight = function(height) {
          var viewHeight = view.innerHeight,
            resizerHeight = resizer.clientHeight;
          if (height < 0) height = 0;
          else if (height + resizerHeight > viewHeight) height = viewHeight - resizerHeight;
          containerStyle.height = height / viewHeight * 100 + "%";
          updateSafetyMargin()
        },
          observers = [observer(doc, "mousemove", function(evt) {
          if (resizingLog) {
            setContainerHeight(view.innerHeight - evt.clientY);
            output.scrollTop = previousScrollTop
          }
        }), observer(doc, "mouseup", function() {
          if (resizingLog) resizingLog = previousScrollTop = False
        }), observer(resizer, "dblclick", function(evt) {
          evt.preventDefault();
          if (previousHeight) {
            setContainerHeight(previousHeight);
            previousHeight = False
          } else {
            previousHeight = container.clientHeight;
            containerStyle.height = "0px"
          }
        }), observer(resizer, "mousedown", function(evt) {
          evt.preventDefault();
          resizingLog = True;
          previousScrollTop = output.scrollTop
        }), observer(resizer, "contextmenu", function() {
          resizingLog = False
        }), observer(closeButton, "click", function() {
          uninit()
        })];
        uninit = function() {
          var i = observers.length;
          while (i--) unobserve.apply(tinylogLite, observers[i]);
          docElem.removeChild(container);
          docElemStyle.paddingBottom = originalPadding;
          clearChildren(output);
          clearChildren(container);
          tinylogLite[log] = createLog
        };
        setStyles(container, containerStyles, output, outputStyles, resizer, resizerStyles, closeButton, closeButtonStyles);
        closeButton[$title] = "Close Log";
        append(closeButton, createTextNode("\u2716"));
        resizer[$title] = "Double-click to toggle log minimization";
        docElem.insertBefore(container, docElem.firstChild);
        tinylogLite[log] = function(message) {
          if (messages === logLimit) output.removeChild(output.firstChild);
          else messages++;
          var entry = append(output, createElement($div)),
            entryText = append(entry, createElement($div));
          entry[$title] = (new Date).toLocaleTimeString();
          setStyles(entry, entryStyles, entryText, entryTextStyles);
          append(entryText, createTextNode(message));
          output.scrollTop = output.scrollHeight
        };
        tinylogLite[log](message);
        updateSafetyMargin()
      }
    })();
    else if (typeof print === func) tinylogLite[log] = print;
    return tinylogLite
  }();
  Processing.logger = tinylogLite;
  Processing.version = "1.4.1";
  Processing.lib = {};
  Processing.registerLibrary = function(name, desc) {
    Processing.lib[name] = desc;
    if (desc.hasOwnProperty("init")) desc.init(defaultScope)
  };
  Processing.instances = processingInstances;
  Processing.getInstanceById = function(name) {
    return processingInstances[processingInstanceIds[name]]
  };
  Processing.Sketch = function(attachFunction) {
    this.attachFunction = attachFunction;
    this.options = {
      pauseOnBlur: false,
      globalKeyEvents: false
    };
    this.onLoad = nop;
    this.onSetup = nop;
    this.onPause = nop;
    this.onLoop = nop;
    this.onFrameStart = nop;
    this.onFrameEnd = nop;
    this.onExit = nop;
    this.params = {};
    this.imageCache = {
      pending: 0,
      images: {},
      operaCache: {},
      add: function(href, img) {
        if (this.images[href]) return;
        if (!isDOMPresent) this.images[href] = null;
        if (!img) {
          img = new Image;
          img.onload = function(owner) {
            return function() {
              owner.pending--
            }
          }(this);
          this.pending++;
          img.src = href
        }
        this.images[href] = img;
        if (window.opera) {
          var div = document.createElement("div");
          div.appendChild(img);
          div.style.position = "absolute";
          div.style.opacity = 0;
          div.style.width = "1px";
          div.style.height = "1px";
          if (!this.operaCache[href]) {
            document.body.appendChild(div);
            this.operaCache[href] = div
          }
        }
      }
    };
    this.sourceCode = undefined;
    this.attach = function(processing) {
      if (typeof this.attachFunction === "function") this.attachFunction(processing);
      else if (this.sourceCode) {
        var func = (new Function("return (" + this.sourceCode + ");"))();
        func(processing);
        this.attachFunction = func
      } else throw "Unable to attach sketch to the processing instance";
    };
    this.toString = function() {
      var i;
      var code = "((function(Sketch) {\n";
      code += "var sketch = new Sketch(\n" + this.sourceCode + ");\n";
      for (i in this.options) if (this.options.hasOwnProperty(i)) {
        var value = this.options[i];
        code += "sketch.options." + i + " = " + (typeof value === "string" ? '"' + value + '"' : "" + value) + ";\n"
      }
      for (i in this.imageCache) if (this.options.hasOwnProperty(i)) code += 'sketch.imageCache.add("' + i + '");\n';
      code += "return sketch;\n})(Processing.Sketch))";
      return code
    }
  };
  var loadSketchFromSources = function(canvas, sources) {
    var code = [],
      errors = [],
      sourcesCount = sources.length,
      loaded = 0;

    function ajaxAsync(url, callback) {
      var xhr = new XMLHttpRequest;
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          var error;
          if (xhr.status !== 200 && xhr.status !== 0) error = "Invalid XHR status " + xhr.status;
          else if (xhr.responseText === "") if ("withCredentials" in new XMLHttpRequest && (new XMLHttpRequest).withCredentials === false && window.location.protocol === "file:") error = "XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions.";
          else error = "File is empty.";
          callback(xhr.responseText, error)
        }
      };
      xhr.open("GET", url, true);
      if (xhr.overrideMimeType) xhr.overrideMimeType("application/json");
      xhr.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT");
      xhr.send(null)
    }
    function loadBlock(index, filename) {
      function callback(block, error) {
        code[index] = block;
        ++loaded;
        if (error) errors.push(filename + " ==> " + error);
        if (loaded === sourcesCount) if (errors.length === 0) try {
          return new Processing(canvas, code.join("\n"))
        } catch(e) {
          throw "Processing.js: Unable to execute pjs sketch: " + e;
        } else throw "Processing.js: Unable to load pjs sketch files: " + errors.join("\n");
      }
      if (filename.charAt(0) === "#") {
        var scriptElement = document.getElementById(filename.substring(1));
        if (scriptElement) callback(scriptElement.text || scriptElement.textContent);
        else callback("", "Unable to load pjs sketch: element with id '" + filename.substring(1) + "' was not found");
        return
      }
      ajaxAsync(filename, callback)
    }
    for (var i = 0; i < sourcesCount; ++i) loadBlock(i, sources[i])
  };
  var init = function() {
    document.removeEventListener("DOMContentLoaded", init, false);
    processingInstances = [];
    var canvas = document.getElementsByTagName("canvas"),
      filenames;
    for (var i = 0, l = canvas.length; i < l; i++) {
      var processingSources = canvas[i].getAttribute("data-processing-sources");
      if (processingSources === null) {
        processingSources = canvas[i].getAttribute("data-src");
        if (processingSources === null) processingSources = canvas[i].getAttribute("datasrc")
      }
      if (processingSources) {
        filenames = processingSources.split(/\s+/g);
        for (var j = 0; j < filenames.length;) if (filenames[j]) j++;
        else filenames.splice(j, 1);
        loadSketchFromSources(canvas[i], filenames)
      }
    }
    var s, last, source, instance, nodelist = document.getElementsByTagName("script"),
      scripts = [];
    for (s = nodelist.length - 1; s >= 0; s--) scripts.push(nodelist[s]);
    for (s = 0, last = scripts.length; s < last; s++) {
      var script = scripts[s];
      if (!script.getAttribute) continue;
      var type = script.getAttribute("type");
      if (type && (type.toLowerCase() === "text/processing" || type.toLowerCase() === "application/processing")) {
        var target = script.getAttribute("data-processing-target");
        canvas = undef;
        if (target) canvas = document.getElementById(target);
        else {
          var nextSibling = script.nextSibling;
          while (nextSibling && nextSibling.nodeType !== 1) nextSibling = nextSibling.nextSibling;
          if (nextSibling && nextSibling.nodeName.toLowerCase() === "canvas") canvas = nextSibling
        }
        if (canvas) {
          if (script.getAttribute("src")) {
            filenames = script.getAttribute("src").split(/\s+/);
            loadSketchFromSources(canvas, filenames);
            continue
          }
          source = script.textContent || script.text;
          instance = new Processing(canvas, source)
        }
      }
    }
  };
  Processing.reload = function() {
    if (processingInstances.length > 0) for (var i = processingInstances.length - 1; i >= 0; i--) if (processingInstances[i]) processingInstances[i].exit();
    init()
  };
  Processing.loadSketchFromSources = loadSketchFromSources;
  Processing.disableInit = function() {
    if (isDOMPresent) document.removeEventListener("DOMContentLoaded", init, false)
  };
  if (isDOMPresent) {
    window["Processing"] = Processing;
    document.addEventListener("DOMContentLoaded", init, false)
  } else this.Processing = Processing
})(window, window.document, Math);


/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}.call(this));


/***/ },
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(2);

window.$ = __webpack_require__(0);
__webpack_require__(19);
__webpack_require__(20);
window.jDataView = __webpack_require__(36);
__webpack_require__(9);
__webpack_require__(10);
__webpack_require__(12);
__webpack_require__(14);
__webpack_require__(13);
__webpack_require__(11);
__webpack_require__(35);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
__webpack_require__(8);


/***/ },
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {﻿; (function ($, window, document, undefined) {

  $.widget("Mashup.audioPlayerGraphical", $.Mashup.audioPlayer, {

        //Options to be used as defaults
        options: {
            bpm: 115,
            playButton: null,
            stopButton: null,
            clearButton: null,
            saveButton: null,
            numberOfLoopBeats: 16,
            rhythmIndex: 0,
            beatIncrement: 4, //4 = 16th note, 2 = 8th note, 1 = quarter note, etc.
            tracks: 5
        },

        _currentBeat: 0,
        _previousBeat: 0,
        //Number of beats visible at a time
        _viewableBeats: 16,
        _create: function () {
            //call base class create
            this.isGraphical = true;
            $.Mashup.audioPlayer.prototype._create.call(this);

            var self = this;

            //------------Wire up player buttons----------------------//
            this._stop = $(this.options.stopButton);
            if (this._stop.length < 1)
                throw "Stop button does not exist";
            this._stop.click(function() {
                self.stop();
            });

            this._save = $(this.options.saveButton);
            if (this._save.length > 0){
                this._save.click(function () {
                    self.savePlayer(this);
                });
            }


            this._toggle = $(this.options.playButton);
            if (this._toggle.length < 1)
                throw "Play button does not exist";
            this._toggle.click(function () {
                self.togglePlay();
            });

            this._clear = $(this.options.clearButton);
            if (this._clear.length < 1)
                throw "Clear button does not exist";
            this._clear.click(function () {
                self.reset();
            });

            //Allow pause/play using spacebar
            $('body').keydown(function(e) {
                if (e.which === 32) {
                    if (e.target.tagName.toUpperCase() === 'INPUT') return;
                    e.preventDefault();

                    self.togglePlay();
                }
            });

            //Handle autoscrolling
            self._autoScroll = false;
            $('#toggle-autoscroll').click(function () {
                self._autoScroll = $(this).is(':checked');
            });

            //Setup graphical tracks
            this._setupTracks();

            //Add click on beat function
            $('.track:last-child .span1').on('click',function() {
                self.pause();
                var currentBeat = $('.track:last-child .span1').index(this) + 1;
                self.rhythmIndex = currentBeat * self.options.beatIncrement-1;
                self._drawNote();
                self._advanceNote();
            });
        },

        _addTrack: function () {
            $.Mashup.audioPlayer.prototype._addTrack.call(this);
            var track = $("<div />").addClass('track row-fluid');
            var beat = "<div class='span1'></div>";
            for (var i = 0; i < this.options.numberOfLoopBeats; i++) {
                track.append(beat);
            }
            $(this.element[0]).append(track);
        },
        _drawNote: function () {
            //Draw Note
            var ndx = this.rhythmIndex + 1;

            //last track will be for drawing
            if(!(ndx % this.options.beatIncrement)) {
                this._currentBeat = ndx / this.options.beatIncrement;
                this.$player.find('.track:last-child .span1:nth-child(' + this._previousBeat + ')').removeClass('onBeat');
                this.$player.find('.track:last-child .span1:nth-child(' + this._currentBeat + ')').addClass('onBeat');
                this._previousBeat = this._currentBeat;

                //check if beat indicator has become hidden.  If so, scroll over by player width
                if (!this._autoScroll) return;
                var self = this;
                var xPositionBeat = this.$player.find('.track:last-child .onBeat').position().left;
                if (xPositionBeat > this.$player.width()) {
                    self._autoScrolling = true;
                    this.$player.animate({
                        scrollLeft: $player.scrollLeft() + this.$player.width()
                    }, 50);
                }
                else if(xPositionBeat < 0)
                    this.$player.animate({
                        scrollLeft: xPositionBeat
                    }, 50);
            }
        },
        _setOption: function (key, value) {
            switch (key) {
                case "numberOfLoopBeats":
                    var prevNumberOfBeats = this.options.numberOfLoopBeats;
                    this.options.numberOfLoopBeats = value;
                    this.adjustNumberOfBeats(prevNumberOfBeats);
                    break;
                default:
                    this.options[ key ] = value;
                    break;
            }
             this._super( "_setOption", key, value );
        },
        _setupTracks: function () {
            //add plus one for the beat track
            for (var i = 0; i < this.options.tracks +1; i++) {
                this._addTrack();
            }
            $(this.element[0]).find('.track:not(:last-child) [class*="span"]').droppable(Mashup.properties.droppableDefaultOptions);
        },
        _trimPlayer: function () {
            var lastBeatWithSample = 0;
            for(var k=0; k<this._samples.length;k++) {
                var sampleStartBeat = this._samples[k].audioSampleGraphical('option','rhythmIndex') / this.options.beatIncrement;
                var sampleLastBeat = sampleStartBeat + this._samples[k].audioSampleGraphical('getNumberOfBeats');
                lastBeatWithSample = sampleLastBeat > lastBeatWithSample ? sampleLastBeat : lastBeatWithSample;
            }
            if(lastBeatWithSample >= this._viewableBeats) {
                this.options.numberOfLoopBeats = lastBeatWithSample;
                this.adjustNumberOfBeats(lastBeatWithSample);
            }
        },
        adjustNumberOfBeats: function (prevNumberOfBeats) {
            var numberOfBeats = this.options.numberOfLoopBeats;
            var numWidths = numberOfBeats / this._viewableBeats * 100;
            $('.track').width(numWidths + "%");

            //Check if adding or removing measures
            if (numberOfBeats > prevNumberOfBeats) {
                //adding
                var beatsToAdd = numberOfBeats - prevNumberOfBeats;
                //Adjust track array
                this._addBeatsToTracks(beatsToAdd);

                var beat = '<div class="span1"></div>';
                var measure = '<div class="span1 measure"></div>';
                for (var i = 0; i < beatsToAdd; i++) {
                    this.element.children().append(beat);
                    this.element.children(':not(:last-child)').find(':last-child').droppable(Mashup.properties.droppableDefaultOptions);
                }
            }
            else {
                //removing
                var beatsToRemove = prevNumberOfBeats - numberOfBeats;

                //Trim off beats for each track
                for(var k = 0; k<this.options.tracks;k++) {
                    this._removeBeatsFromTrack(prevNumberOfBeats, beatsToRemove, k);
                }

                for (var j = 0; j < beatsToRemove; j++) {
                    //remove samples first, then remove measure
                    var lastMeasures = this.element.children().children(':last-child');
                    $.each(lastMeasures, function (ndx, item) {
                        $(item).remove();
                    });
                }
            }
            this.correctSpanWidths();
        },
        //This cycles through all the spans and calculates. This is very intensive though
        //TODO: We need to figure out how to make this faster.
        correctSpanWidths: function () {
            var numberOfBeats = this.options.numberOfLoopBeats;
            var $tracks = $(this.element[0]).children('.track');
            for (var j = 1; j <= numberOfBeats; j++) {
                //$('.track .span' + j).width(j / numberOfBeats * 100 + "%");
                $tracks.children('.span' + j).width(j / numberOfBeats * 100 + "%");
            }
        },

        loadMix: function (mix) {

            var jsonMix = JSON.parse(mix);
            //Setup player options
            this.options = jsonMix.player;

            //Adjust controls outside player
            $('#PlayerBpm').val(jsonMix.player.bpm);
            this.adjustNumberOfBeats(jsonMix.player.numberOfLoopBeats);

            //load samples with this new bpm
            Mashup.GetSamples();

            Mashup.StartLoading();
            //Trick to get loading to work during processing call
            setTimeout(function() {
                //Add samples to player
                $.each(jsonMix.samples, function(ndx, item) {
                    //First Get Div
                    var $track = this.$player.children('.track:eq(' + item.track + ')');
                    // Add spans until you reach start beat
                    var spanAggregate = 0;
                    var currentDiv = $track.children(':first-child');
                    item.startBeat = item.rhythmIndex / jsonMix.player.beatIncrement;
                    while (spanAggregate < item.startBeat) {
                        var spanNumber = currentDiv.attr('class').match(Mashup.properties.numberRegEx);
                        spanAggregate += parseInt(spanNumber[0]);
                        currentDiv = currentDiv.next();
                    }

                    var $playerDiv = currentDiv;
                    //Create sample and add to player
                    Mashup.MoveSampleToPlayer(item, $playerDiv);
                });
                Mashup.EndLoading();
            }, 10);
        },
        play: function () {
            if(this.stopped) {
                this.$player.find('.track:last-child span:nth-child(0)').addClass('onBeat');
            }
            //Graphical usually doesn't have problem with loading...so set to true
            this.isLoaded = true;
            $.Mashup.audioPlayer.prototype.play.call(this);
            this._toggle.text('Pause').append('<i class="icon-pause icon-white"></i>');
            //We need to also disable the player options up top
            $('.player-option').attr('disabled', 'disabled');
        },
        pause: function () {
            $.Mashup.audioPlayer.prototype.pause.call(this);
            this._toggle.text('Play').append('<i class="icon-play icon-white"></i>');
            $('.player-option').removeAttr('disabled');
        },
        savePlayer: function (self) {
            var samples = [];
            var distinctSampleIds = [];
            for(var i=0;i<this._samples.length;i++) {
                var sample = this._samples[i].audioSampleGraphical("getOptions");
                samples.push(sample);
                if(distinctSampleIds.indexOf(sample.id) < 0)
                    distinctSampleIds.push(sample.id);
            }
            var player = this.options;

            var mix = {
                player: player,
                samples: samples
            };
            var saveBtn = $(self);
            //not logged in.  show user to login screen
            if (saveBtn.attr('data-signed-in') === "false") {
                $.jStorage.set('latestUserMix', JSON.stringify(mix));
                $.jStorage.set('latestSampleIds', distinctSampleIds);
                window.location.href = '/Account/Logon?continue=' + escape('/Home&saveMix=true');
                return false;
            }
            //user signed in. Save if new mash, update if updating
            $('#MashupJson').val(JSON.stringify(mix));
            $('#SampleIds').val(distinctSampleIds);
            if ($('#mashId').val() === '0') {
                //new mashId
                $('#saveModal').modal('show');
            } else {
                var distinctIds = $('#SampleIds').val().split(",");
                Mashup.StartLoading('Updating Mashup....');
                var postData = {
                    Id: $('#mashId').val(),
                    MashupJson: $('#MashupJson').val(),
                    SampleIds: distinctIds
                };
                var url = '/api/mashups?format=json';
                $.ajax({
                    type: 'PUT',
                    data: postData,
                    url: url,
                    traditional: true,
                    success: function () {
                        $('#selectedTags').empty();
                        $('#hiddenTags').empty();
                        Mashup.EndLoading();
                        Mashup.ShowMessage("Success", "Your mash was updated.", Mashup.properties.messageType.Success);
                    },
                    error: Mashup.GenericErrorMessage
                });
            }
        },
        schedule: function () {
            this._drawNote();
            $.Mashup.audioPlayer.prototype.schedule.call(this);
        },
        stop: function () {
            $.Mashup.audioPlayer.prototype.stop.call(this);
            $('.player-option').removeAttr('disabled');
            this._toggle.text('Play').append('<i class="icon-play icon-white"></i>');
        },
        //does the checking. If it's paused, will play. If playing, will pause
        togglePlay: function() {
            if (this._toggle.children('i').hasClass('icon-pause'))
                this.pause();
            else
                this.play();
        },
        _destroy: function () {
            this._samples = null;
            this._tracks = null;
            this._toggle.unbind('click');
            this._stop.unbind('click');
            this._clear.unbind('click');
            this._save.unbind('click');
            $('body').unbind('keydown');
        }
    });

})(jQuery, window, document);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {!function(factory) {
    var global = this;
    module.exports = factory(global);
}(function(global) {
    "use strict";
    function is(obj, Ctor) {
        return "object" != typeof obj || null === obj ? !1 : obj.constructor === Ctor || Object.prototype.toString.call(obj) === "[object " + Ctor.name + "]";
    }
    function arrayFrom(arrayLike, forceCopy) {
        return !forceCopy && is(arrayLike, Array) ? arrayLike : Array.prototype.slice.call(arrayLike);
    }
    function defined(value, defaultValue) {
        return void 0 !== value ? value : defaultValue;
    }
    function jDataView(buffer, byteOffset, byteLength, littleEndian) {
        if (jDataView.is(buffer)) {
            var result = buffer.slice(byteOffset, byteOffset + byteLength);
            return result._littleEndian = defined(littleEndian, result._littleEndian), result;
        }
        if (!jDataView.is(this)) return new jDataView(buffer, byteOffset, byteLength, littleEndian);
        if (this.buffer = buffer = jDataView.wrapBuffer(buffer), this._isArrayBuffer = compatibility.ArrayBuffer && is(buffer, ArrayBuffer), 
        this._isPixelData = !1, this._isDataView = compatibility.DataView && this._isArrayBuffer, 
        this._isNodeBuffer = !0 && compatibility.NodeBuffer && is(buffer, Buffer), !this._isNodeBuffer && !this._isArrayBuffer && !is(buffer, Array)) throw new TypeError("jDataView buffer has an incompatible type");
        this._littleEndian = !!littleEndian;
        var bufferLength = "byteLength" in buffer ? buffer.byteLength : buffer.length;
        this.byteOffset = byteOffset = defined(byteOffset, 0), this.byteLength = byteLength = defined(byteLength, bufferLength - byteOffset), 
        this._offset = this._bitOffset = 0, this._isDataView ? this._view = new DataView(buffer, byteOffset, byteLength) : this._checkBounds(byteOffset, byteLength, bufferLength), 
        this._engineAction = this._isDataView ? this._dataViewAction : this._isNodeBuffer ? this._nodeBufferAction : this._isArrayBuffer ? this._arrayBufferAction : this._arrayAction;
    }
    function getCharCodes(string) {
        if (compatibility.NodeBuffer) return new Buffer(string, "binary");
        for (var Type = compatibility.ArrayBuffer ? Uint8Array : Array, codes = new Type(string.length), i = 0, length = string.length; length > i; i++) codes[i] = 255 & string.charCodeAt(i);
        return codes;
    }
    function pow2(n) {
        return n >= 0 && 31 > n ? 1 << n : pow2[n] || (pow2[n] = Math.pow(2, n));
    }
    function Uint64(lo, hi) {
        this.lo = lo, this.hi = hi;
    }
    function Int64() {
        Uint64.apply(this, arguments);
    }
    var compatibility = {
        NodeBuffer: !0 && "Buffer" in global,
        DataView: "DataView" in global,
        ArrayBuffer: "ArrayBuffer" in global,
        PixelData: !1
    }, TextEncoder = global.TextEncoder, TextDecoder = global.TextDecoder;
    compatibility.NodeBuffer && !function(buffer) {
        try {
            buffer.writeFloatLE(1/0, 0);
        } catch (e) {
            compatibility.NodeBuffer = !1;
        }
    }(new Buffer(4));
    var dataTypes = {
        Int8: 1,
        Int16: 2,
        Int32: 4,
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        Float32: 4,
        Float64: 8
    };
    jDataView.wrapBuffer = function(buffer) {
        switch (typeof buffer) {
          case "number":
            if (compatibility.NodeBuffer) buffer = new Buffer(buffer), buffer.fill(0); else if (compatibility.ArrayBuffer) buffer = new Uint8Array(buffer).buffer; else {
                buffer = new Array(buffer);
                for (var i = 0; i < buffer.length; i++) buffer[i] = 0;
            }
            return buffer;

          case "string":
            buffer = getCharCodes(buffer);

          default:
            return "length" in buffer && !(compatibility.NodeBuffer && is(buffer, Buffer) || compatibility.ArrayBuffer && is(buffer, ArrayBuffer)) && (compatibility.NodeBuffer ? buffer = new Buffer(buffer) : compatibility.ArrayBuffer ? is(buffer, ArrayBuffer) || (buffer = new Uint8Array(buffer).buffer, 
            is(buffer, ArrayBuffer) || (buffer = new Uint8Array(arrayFrom(buffer, !0)).buffer)) : buffer = arrayFrom(buffer)), 
            buffer;
        }
    }, jDataView.is = function(view) {
        return view && view.jDataView;
    }, jDataView.from = function() {
        return new jDataView(arguments);
    }, jDataView.Uint64 = Uint64, Uint64.prototype = {
        valueOf: function() {
            return this.lo + pow2(32) * this.hi;
        },
        toString: function() {
            return Number.prototype.toString.apply(this.valueOf(), arguments);
        }
    }, Uint64.fromNumber = function(number) {
        var hi = Math.floor(number / pow2(32)), lo = number - hi * pow2(32);
        return new Uint64(lo, hi);
    }, jDataView.Int64 = Int64, Int64.prototype = "create" in Object ? Object.create(Uint64.prototype) : new Uint64(), 
    Int64.prototype.valueOf = function() {
        return this.hi < pow2(31) ? Uint64.prototype.valueOf.apply(this, arguments) : -(pow2(32) - this.lo + pow2(32) * (pow2(32) - 1 - this.hi));
    }, Int64.fromNumber = function(number) {
        var lo, hi;
        if (number >= 0) {
            var unsigned = Uint64.fromNumber(number);
            lo = unsigned.lo, hi = unsigned.hi;
        } else hi = Math.floor(number / pow2(32)), lo = number - hi * pow2(32), hi += pow2(32);
        return new Int64(lo, hi);
    };
    var proto = jDataView.prototype = {
        compatibility: compatibility,
        jDataView: !0,
        _checkBounds: function(byteOffset, byteLength, maxLength) {
            if ("number" != typeof byteOffset) throw new TypeError("Offset is not a number.");
            if ("number" != typeof byteLength) throw new TypeError("Size is not a number.");
            if (0 > byteLength) throw new RangeError("Length is negative.");
            if (0 > byteOffset || byteOffset + byteLength > defined(maxLength, this.byteLength)) throw new RangeError("Offsets are out of bounds.");
        },
        _action: function(type, isReadAction, byteOffset, littleEndian, value) {
            return this._engineAction(type, isReadAction, defined(byteOffset, this._offset), defined(littleEndian, this._littleEndian), value);
        },
        _dataViewAction: function(type, isReadAction, byteOffset, littleEndian, value) {
            return this._offset = byteOffset + dataTypes[type], isReadAction ? this._view["get" + type](byteOffset, littleEndian) : this._view["set" + type](byteOffset, value, littleEndian);
        },
        _arrayBufferAction: function(type, isReadAction, byteOffset, littleEndian, value) {
            var typedArray, size = dataTypes[type], TypedArray = global[type + "Array"];
            if (littleEndian = defined(littleEndian, this._littleEndian), 1 === size || (this.byteOffset + byteOffset) % size === 0 && littleEndian) return typedArray = new TypedArray(this.buffer, this.byteOffset + byteOffset, 1), 
            this._offset = byteOffset + size, isReadAction ? typedArray[0] : typedArray[0] = value;
            var bytes = new Uint8Array(isReadAction ? this.getBytes(size, byteOffset, littleEndian, !0) : size);
            return typedArray = new TypedArray(bytes.buffer, 0, 1), isReadAction ? typedArray[0] : (typedArray[0] = value, 
            void this._setBytes(byteOffset, bytes, littleEndian));
        },
        _arrayAction: function(type, isReadAction, byteOffset, littleEndian, value) {
            return isReadAction ? this["_get" + type](byteOffset, littleEndian) : this["_set" + type](byteOffset, value, littleEndian);
        },
        _getBytes: function(length, byteOffset, littleEndian) {
            littleEndian = defined(littleEndian, this._littleEndian), byteOffset = defined(byteOffset, this._offset), 
            length = defined(length, this.byteLength - byteOffset), this._checkBounds(byteOffset, length), 
            byteOffset += this.byteOffset, this._offset = byteOffset - this.byteOffset + length;
            var result = this._isArrayBuffer ? new Uint8Array(this.buffer, byteOffset, length) : (this.buffer.slice || Array.prototype.slice).call(this.buffer, byteOffset, byteOffset + length);
            return littleEndian || 1 >= length ? result : arrayFrom(result).reverse();
        },
        getBytes: function(length, byteOffset, littleEndian, toArray) {
            var result = this._getBytes(length, byteOffset, defined(littleEndian, !0));
            return toArray ? arrayFrom(result) : result;
        },
        _setBytes: function(byteOffset, bytes, littleEndian) {
            var length = bytes.length;
            if (0 !== length) {
                if (littleEndian = defined(littleEndian, this._littleEndian), byteOffset = defined(byteOffset, this._offset), 
                this._checkBounds(byteOffset, length), !littleEndian && length > 1 && (bytes = arrayFrom(bytes, !0).reverse()), 
                byteOffset += this.byteOffset, this._isArrayBuffer) new Uint8Array(this.buffer, byteOffset, length).set(bytes); else if (this._isNodeBuffer) new Buffer(bytes).copy(this.buffer, byteOffset); else for (var i = 0; length > i; i++) this.buffer[byteOffset + i] = bytes[i];
                this._offset = byteOffset - this.byteOffset + length;
            }
        },
        setBytes: function(byteOffset, bytes, littleEndian) {
            this._setBytes(byteOffset, bytes, defined(littleEndian, !0));
        },
        getString: function(byteLength, byteOffset, encoding) {
            if (this._isNodeBuffer) return byteOffset = defined(byteOffset, this._offset), byteLength = defined(byteLength, this.byteLength - byteOffset), 
            this._checkBounds(byteOffset, byteLength), this._offset = byteOffset + byteLength, 
            this.buffer.toString(encoding || "binary", this.byteOffset + byteOffset, this.byteOffset + this._offset);
            var bytes = this._getBytes(byteLength, byteOffset, !0);
            if (encoding = "utf8" === encoding ? "utf-8" : encoding || "binary", TextDecoder && "binary" !== encoding) return new TextDecoder(encoding).decode(this._isArrayBuffer ? bytes : new Uint8Array(bytes));
            var string = "";
            byteLength = bytes.length;
            for (var i = 0; byteLength > i; i++) string += String.fromCharCode(bytes[i]);
            return "utf-8" === encoding && (string = decodeURIComponent(escape(string))), string;
        },
        setString: function(byteOffset, subString, encoding) {
            if (this._isNodeBuffer) return byteOffset = defined(byteOffset, this._offset), this._checkBounds(byteOffset, subString.length), 
            void (this._offset = byteOffset + this.buffer.write(subString, this.byteOffset + byteOffset, encoding || "binary"));
            encoding = "utf8" === encoding ? "utf-8" : encoding || "binary";
            var bytes;
            TextEncoder && "binary" !== encoding ? bytes = new TextEncoder(encoding).encode(subString) : ("utf-8" === encoding && (subString = unescape(encodeURIComponent(subString))), 
            bytes = getCharCodes(subString)), this._setBytes(byteOffset, bytes, !0);
        },
        getChar: function(byteOffset) {
            return this.getString(1, byteOffset);
        },
        setChar: function(byteOffset, character) {
            this.setString(byteOffset, character);
        },
        tell: function() {
            return this._offset;
        },
        seek: function(byteOffset) {
            return this._checkBounds(byteOffset, 0), this._offset = byteOffset;
        },
        skip: function(byteLength) {
            return this.seek(this._offset + byteLength);
        },
        slice: function(start, end, forceCopy) {
            function normalizeOffset(offset, byteLength) {
                return 0 > offset ? offset + byteLength : offset;
            }
            return start = normalizeOffset(start, this.byteLength), end = normalizeOffset(defined(end, this.byteLength), this.byteLength), 
            forceCopy ? new jDataView(this.getBytes(end - start, start, !0, !0), void 0, void 0, this._littleEndian) : new jDataView(this.buffer, this.byteOffset + start, end - start, this._littleEndian);
        },
        alignBy: function(byteCount) {
            return this._bitOffset = 0, 1 !== defined(byteCount, 1) ? this.skip(byteCount - (this._offset % byteCount || byteCount)) : this._offset;
        },
        _getFloat64: function(byteOffset, littleEndian) {
            var b = this._getBytes(8, byteOffset, littleEndian), sign = 1 - 2 * (b[7] >> 7), exponent = ((b[7] << 1 & 255) << 3 | b[6] >> 4) - 1023, mantissa = (15 & b[6]) * pow2(48) + b[5] * pow2(40) + b[4] * pow2(32) + b[3] * pow2(24) + b[2] * pow2(16) + b[1] * pow2(8) + b[0];
            return 1024 === exponent ? 0 !== mantissa ? 0/0 : 1/0 * sign : -1023 === exponent ? sign * mantissa * pow2(-1074) : sign * (1 + mantissa * pow2(-52)) * pow2(exponent);
        },
        _getFloat32: function(byteOffset, littleEndian) {
            var b = this._getBytes(4, byteOffset, littleEndian), sign = 1 - 2 * (b[3] >> 7), exponent = (b[3] << 1 & 255 | b[2] >> 7) - 127, mantissa = (127 & b[2]) << 16 | b[1] << 8 | b[0];
            return 128 === exponent ? 0 !== mantissa ? 0/0 : 1/0 * sign : -127 === exponent ? sign * mantissa * pow2(-149) : sign * (1 + mantissa * pow2(-23)) * pow2(exponent);
        },
        _get64: function(Type, byteOffset, littleEndian) {
            littleEndian = defined(littleEndian, this._littleEndian), byteOffset = defined(byteOffset, this._offset);
            for (var parts = littleEndian ? [ 0, 4 ] : [ 4, 0 ], i = 0; 2 > i; i++) parts[i] = this.getUint32(byteOffset + parts[i], littleEndian);
            return this._offset = byteOffset + 8, new Type(parts[0], parts[1]);
        },
        getInt64: function(byteOffset, littleEndian) {
            return this._get64(Int64, byteOffset, littleEndian);
        },
        getUint64: function(byteOffset, littleEndian) {
            return this._get64(Uint64, byteOffset, littleEndian);
        },
        _getInt32: function(byteOffset, littleEndian) {
            var b = this._getBytes(4, byteOffset, littleEndian);
            return b[3] << 24 | b[2] << 16 | b[1] << 8 | b[0];
        },
        _getUint32: function(byteOffset, littleEndian) {
            return this._getInt32(byteOffset, littleEndian) >>> 0;
        },
        _getInt16: function(byteOffset, littleEndian) {
            return this._getUint16(byteOffset, littleEndian) << 16 >> 16;
        },
        _getUint16: function(byteOffset, littleEndian) {
            var b = this._getBytes(2, byteOffset, littleEndian);
            return b[1] << 8 | b[0];
        },
        _getInt8: function(byteOffset) {
            return this._getUint8(byteOffset) << 24 >> 24;
        },
        _getUint8: function(byteOffset) {
            return this._getBytes(1, byteOffset)[0];
        },
        _getBitRangeData: function(bitLength, byteOffset) {
            var startBit = (defined(byteOffset, this._offset) << 3) + this._bitOffset, endBit = startBit + bitLength, start = startBit >>> 3, end = endBit + 7 >>> 3, b = this._getBytes(end - start, start, !0), wideValue = 0;
            (this._bitOffset = 7 & endBit) && (this._bitOffset -= 8);
            for (var i = 0, length = b.length; length > i; i++) wideValue = wideValue << 8 | b[i];
            return {
                start: start,
                bytes: b,
                wideValue: wideValue
            };
        },
        getSigned: function(bitLength, byteOffset) {
            var shift = 32 - bitLength;
            return this.getUnsigned(bitLength, byteOffset) << shift >> shift;
        },
        getUnsigned: function(bitLength, byteOffset) {
            var value = this._getBitRangeData(bitLength, byteOffset).wideValue >>> -this._bitOffset;
            return 32 > bitLength ? value & ~(-1 << bitLength) : value;
        },
        _setBinaryFloat: function(byteOffset, value, mantSize, expSize, littleEndian) {
            var exponent, mantissa, signBit = 0 > value ? 1 : 0, eMax = ~(-1 << expSize - 1), eMin = 1 - eMax;
            0 > value && (value = -value), 0 === value ? (exponent = 0, mantissa = 0) : isNaN(value) ? (exponent = 2 * eMax + 1, 
            mantissa = 1) : 1/0 === value ? (exponent = 2 * eMax + 1, mantissa = 0) : (exponent = Math.floor(Math.log(value) / Math.LN2), 
            exponent >= eMin && eMax >= exponent ? (mantissa = Math.floor((value * pow2(-exponent) - 1) * pow2(mantSize)), 
            exponent += eMax) : (mantissa = Math.floor(value / pow2(eMin - mantSize)), exponent = 0));
            for (var b = []; mantSize >= 8; ) b.push(mantissa % 256), mantissa = Math.floor(mantissa / 256), 
            mantSize -= 8;
            for (exponent = exponent << mantSize | mantissa, expSize += mantSize; expSize >= 8; ) b.push(255 & exponent), 
            exponent >>>= 8, expSize -= 8;
            b.push(signBit << expSize | exponent), this._setBytes(byteOffset, b, littleEndian);
        },
        _setFloat32: function(byteOffset, value, littleEndian) {
            this._setBinaryFloat(byteOffset, value, 23, 8, littleEndian);
        },
        _setFloat64: function(byteOffset, value, littleEndian) {
            this._setBinaryFloat(byteOffset, value, 52, 11, littleEndian);
        },
        _set64: function(Type, byteOffset, value, littleEndian) {
            "object" != typeof value && (value = Type.fromNumber(value)), littleEndian = defined(littleEndian, this._littleEndian), 
            byteOffset = defined(byteOffset, this._offset);
            var parts = littleEndian ? {
                lo: 0,
                hi: 4
            } : {
                lo: 4,
                hi: 0
            };
            for (var partName in parts) this.setUint32(byteOffset + parts[partName], value[partName], littleEndian);
            this._offset = byteOffset + 8;
        },
        setInt64: function(byteOffset, value, littleEndian) {
            this._set64(Int64, byteOffset, value, littleEndian);
        },
        setUint64: function(byteOffset, value, littleEndian) {
            this._set64(Uint64, byteOffset, value, littleEndian);
        },
        _setUint32: function(byteOffset, value, littleEndian) {
            this._setBytes(byteOffset, [ 255 & value, value >>> 8 & 255, value >>> 16 & 255, value >>> 24 ], littleEndian);
        },
        _setUint16: function(byteOffset, value, littleEndian) {
            this._setBytes(byteOffset, [ 255 & value, value >>> 8 & 255 ], littleEndian);
        },
        _setUint8: function(byteOffset, value) {
            this._setBytes(byteOffset, [ 255 & value ]);
        },
        setUnsigned: function(byteOffset, value, bitLength) {
            var data = this._getBitRangeData(bitLength, byteOffset), wideValue = data.wideValue, b = data.bytes;
            wideValue &= ~(~(-1 << bitLength) << -this._bitOffset), wideValue |= (32 > bitLength ? value & ~(-1 << bitLength) : value) << -this._bitOffset;
            for (var i = b.length - 1; i >= 0; i--) b[i] = 255 & wideValue, wideValue >>>= 8;
            this._setBytes(data.start, b, !0);
        }
    }, nodeNaming = {
        Int8: "Int8",
        Int16: "Int16",
        Int32: "Int32",
        Uint8: "UInt8",
        Uint16: "UInt16",
        Uint32: "UInt32",
        Float32: "Float",
        Float64: "Double"
    };
    proto._nodeBufferAction = function(type, isReadAction, byteOffset, littleEndian, value) {
        this._offset = byteOffset + dataTypes[type];
        var nodeName = nodeNaming[type] + ("Int8" === type || "Uint8" === type ? "" : littleEndian ? "LE" : "BE");
        return byteOffset += this.byteOffset, isReadAction ? this.buffer["read" + nodeName](byteOffset) : this.buffer["write" + nodeName](value, byteOffset);
    };
    for (var type in dataTypes) !function(type) {
        proto["get" + type] = function(byteOffset, littleEndian) {
            return this._action(type, !0, byteOffset, littleEndian);
        }, proto["set" + type] = function(byteOffset, value, littleEndian) {
            this._action(type, !1, byteOffset, littleEndian, value);
        };
    }(type);
    proto._setInt32 = proto._setUint32, proto._setInt16 = proto._setUint16, proto._setInt8 = proto._setUint8, 
    proto.setSigned = proto.setUnsigned;
    for (var method in proto) "set" === method.slice(0, 3) && !function(type) {
        proto["write" + type] = function() {
            Array.prototype.unshift.call(arguments, void 0), this["set" + type].apply(this, arguments);
        };
    }(method.slice(3));
    return jDataView;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38).Buffer))

/***/ },
/* 37 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = __webpack_require__(39)
var ieee754 = __webpack_require__(40)
var isArray = __webpack_require__(41)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(37)))

/***/ },
/* 39 */
/***/ function(module, exports) {

"use strict";
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ },
/* 40 */
/***/ function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ },
/* 41 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }
/******/ ]);
//# sourceMappingURL=player.bundle.js.map