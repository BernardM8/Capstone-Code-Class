'use strict';

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
  /**
   * @define {boolean} Whether this is the client Node.js SDK.
   */
  NODE_CLIENT: false,

  /**
   * @define {boolean} Whether this is the Admin Node.js SDK.
   */
  NODE_ADMIN: false,

  /**
   * Firebase SDK Version
   */
  SDK_VERSION: '${JSCORE_VERSION}'
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Throws an error if the provided assertion is falsy
 */

var assert = function assert(assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};
/**
 * Returns an Error object suitable for throwing.
 */


var assertionError = function assertionError(message) {
  return new Error('Firebase Database (' + CONSTANTS.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + message);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var stringToByteArray$1 = function stringToByteArray$1(str) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if ((c & 0xfc00) === 0xd800 && i + 1 < str.length && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */


var byteArrayToString = function byteArrayToString(bytes) {
  // TODO(user): Use native implementations if/when available
  var out = [];
  var pos = 0,
      c = 0;

  while (pos < bytes.length) {
    var c1 = bytes[pos++];

    if (c1 < 128) {
      out[c++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      var c2 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
    } else if (c1 > 239 && c1 < 365) {
      // Surrogate Pair
      var _c = bytes[pos++];
      var c3 = bytes[pos++];
      var c4 = bytes[pos++];
      var u = ((c1 & 7) << 18 | (_c & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 0x10000;
      out[c++] = String.fromCharCode(0xd800 + (u >> 10));
      out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
    } else {
      var _c2 = bytes[pos++];
      var _c3 = bytes[pos++];
      out[c++] = String.fromCharCode((c1 & 15) << 12 | (_c2 & 63) << 6 | _c3 & 63);
    }
  }

  return out.join('');
}; // We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()


var base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,

  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,

  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,

  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,

  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',

  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + '+/=';
  },

  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + '-_.';
  },

  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === 'function',

  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray: function encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error('encodeByteArray takes an array as a parameter');
    }

    this.init_();
    var byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    var output = [];

    for (var i = 0; i < input.length; i += 3) {
      var byte1 = input[i];
      var haveByte2 = i + 1 < input.length;
      var byte2 = haveByte2 ? input[i + 1] : 0;
      var haveByte3 = i + 2 < input.length;
      var byte3 = haveByte3 ? input[i + 2] : 0;
      var outByte1 = byte1 >> 2;
      var outByte2 = (byte1 & 0x03) << 4 | byte2 >> 4;
      var outByte3 = (byte2 & 0x0f) << 2 | byte3 >> 6;
      var outByte4 = byte3 & 0x3f;

      if (!haveByte3) {
        outByte4 = 64;

        if (!haveByte2) {
          outByte3 = 64;
        }
      }

      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }

    return output.join('');
  },

  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString: function encodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }

    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },

  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString: function decodeString(input, webSafe) {
    // Shortcut for Mozilla browsers that implement
    // a native base64 encoder in the form of "btoa/atob"
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }

    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },

  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray: function decodeStringToByteArray(input, webSafe) {
    this.init_();
    var charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    var output = [];

    for (var i = 0; i < input.length;) {
      var byte1 = charToByteMap[input.charAt(i++)];
      var haveByte2 = i < input.length;
      var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      var haveByte3 = i < input.length;
      var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      var haveByte4 = i < input.length;
      var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;

      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw Error();
      }

      var outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);

      if (byte3 !== 64) {
        var outByte2 = byte2 << 4 & 0xf0 | byte3 >> 2;
        output.push(outByte2);

        if (byte4 !== 64) {
          var outByte3 = byte3 << 6 & 0xc0 | byte4;
          output.push(outByte3);
        }
      }
    }

    return output;
  },

  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_: function init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {}; // We want quick mappings back and forth, so we precompute two maps.

      for (var i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i; // Be forgiving when decoding and correctly decode both encodings.

        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
/**
 * URL-safe base64 encoding
 */

var base64Encode = function base64Encode(str) {
  var utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */


var base64urlEncodeWithoutPadding = function base64urlEncodeWithoutPadding(str) {
  // Use base64url encoding and remove padding in the end (dot characters).
  return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */


var base64Decode = function base64Decode(str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error('base64Decode failed: ', e);
  }

  return null;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */


function deepCopy(value) {
  return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */


function deepExtend(target, source) {
  if (!(source instanceof Object)) {
    return source;
  }

  switch (source.constructor) {
    case Date:
      // Treat Dates like scalars; if the target date object had any child
      // properties - they will be lost!
      var dateValue = source;
      return new Date(dateValue.getTime());

    case Object:
      if (target === undefined) {
        target = {};
      }

      break;

    case Array:
      // Always copy the array source and overwrite the target.
      target = [];
      break;

    default:
      // Not a plain Object - treat it as a scalar.
      return source;
  }

  for (var prop in source) {
    // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
    if (!source.hasOwnProperty(prop) || !isValidKey$1(prop)) {
      continue;
    }

    target[prop] = deepExtend(target[prop], source[prop]);
  }

  return target;
}

function isValidKey$1(key) {
  return key !== '__proto__';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Deferred = /*#__PURE__*/function () {
  function Deferred() {
    var _this = this;

    _classCallCheck(this, Deferred);

    this.reject = function () {};

    this.resolve = function () {};

    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
  }
  /**
   * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */


  _createClass(Deferred, [{
    key: "wrapCallback",
    value: function wrapCallback(callback) {
      var _this2 = this;

      return function (error, value) {
        if (error) {
          _this2.reject(error);
        } else {
          _this2.resolve(value);
        }

        if (typeof callback === 'function') {
          // Attaching noop handler just in case developer wasn't expecting
          // promises
          _this2.promise["catch"](function () {}); // Some of our callbacks don't expect a value and our own tests
          // assert that the parameter length is 1


          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    }
  }]);

  return Deferred;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */


function getUA() {
  if (typeof navigator !== 'undefined' && typeof navigator['userAgent'] === 'string') {
    return navigator['userAgent'];
  } else {
    return '';
  }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */


function isMobileCordova() {
  return typeof window !== 'undefined' && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */


function isReactNative() {
  return (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) === 'object' && navigator['product'] === 'ReactNative';
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */


function isNodeSdk() {
  return CONSTANTS.NODE_ADMIN === true;
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */


function isIndexedDBAvailable() {
  return (typeof indexedDB === "undefined" ? "undefined" : _typeof(indexedDB)) === 'object';
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */


function validateIndexedDBOpenable() {
  return new Promise(function (resolve, reject) {
    try {
      var preExist = true;
      var DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
      var request = self.indexedDB.open(DB_CHECK_NAME);

      request.onsuccess = function () {
        request.result.close(); // delete database only when it doesn't pre-exist

        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }

        resolve(true);
      };

      request.onupgradeneeded = function () {
        preExist = false;
      };

      request.onerror = function () {
        var _a;

        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
      };
    } catch (error) {
      reject(error);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if (e.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */


var ERROR_NAME = 'FirebaseError'; // Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types

var FirebaseError = /*#__PURE__*/function (_Error) {
  _inherits(FirebaseError, _Error);

  var _super = _createSuper(FirebaseError);

  function FirebaseError(
  /** The error code for this error. */
  code, message,
  /** Custom data for this error. */
  customData) {
    var _this3;

    _classCallCheck(this, FirebaseError);

    _this3 = _super.call(this, message);
    _this3.code = code;
    _this3.customData = customData;
    /** The custom name for all FirebaseErrors. */

    _this3.name = ERROR_NAME; // Fix For ES5
    // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

    Object.setPrototypeOf(_assertThisInitialized(_this3), FirebaseError.prototype); // Maintains proper stack trace for where our error was thrown.
    // Only available on V8.

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this3), ErrorFactory.prototype.create);
    }

    return _this3;
  }

  return _createClass(FirebaseError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

var ErrorFactory = /*#__PURE__*/function () {
  function ErrorFactory(service, serviceName, errors) {
    _classCallCheck(this, ErrorFactory);

    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }

  _createClass(ErrorFactory, [{
    key: "create",
    value: function create(code) {
      var customData = (arguments.length <= 1 ? undefined : arguments[1]) || {};
      var fullCode = "".concat(this.service, "/").concat(code);
      var template = this.errors[code];
      var message = template ? replaceTemplate(template, customData) : 'Error'; // Service Name: Error message (service/code).

      var fullMessage = "".concat(this.serviceName, ": ").concat(message, " (").concat(fullCode, ").");
      var error = new FirebaseError(fullCode, fullMessage, customData);
      return error;
    }
  }]);

  return ErrorFactory;
}();

function replaceTemplate(template, data) {
  return template.replace(PATTERN, function (_, key) {
    var value = data[key];
    return value != null ? String(value) : "<".concat(key, "?>");
  });
}

var PATTERN = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */

function jsonEval(str) {
  return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */


function stringify(data) {
  return JSON.stringify(data);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var decode = function decode(token) {
  var header = {},
      claims = {},
      data = {},
      signature = '';

  try {
    var parts = token.split('.');
    header = jsonEval(base64Decode(parts[0]) || '');
    claims = jsonEval(base64Decode(parts[1]) || '');
    signature = parts[2];
    data = claims['d'] || {};
    delete claims['d'];
  } catch (e) {}

  return {
    header: header,
    claims: claims,
    data: data,
    signature: signature
  };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var isValidFormat = function isValidFormat(token) {
  var decoded = decode(token),
      claims = decoded.claims;
  return !!claims && _typeof(claims) === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */


var isAdmin = function isAdmin(token) {
  var claims = decode(token).claims;
  return _typeof(claims) === 'object' && claims['admin'] === true;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function contains(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function safeGet(obj, key) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    return obj[key];
  } else {
    return undefined;
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

function map(obj, fn, contextObj) {
  var res = {};

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      res[key] = fn.call(contextObj, obj[key], key, obj);
    }
  }

  return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */


function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  for (var _i = 0, _aKeys = aKeys; _i < _aKeys.length; _i++) {
    var k = _aKeys[_i];

    if (!bKeys.includes(k)) {
      return false;
    }

    var aProp = a[k];
    var bProp = b[k];

    if (isObject(aProp) && isObject(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }

  for (var _i2 = 0, _bKeys = bKeys; _i2 < _bKeys.length; _i2++) {
    var _k = _bKeys[_i2];

    if (!aKeys.includes(_k)) {
      return false;
    }
  }

  return true;
}

function isObject(thing) {
  return thing !== null && _typeof(thing) === 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */


function querystring(querystringParams) {
  var params = [];

  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i3], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (Array.isArray(value)) {
      value.forEach(function (arrayVal) {
        params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
    }
  };

  for (var _i3 = 0, _Object$entries = Object.entries(querystringParams); _i3 < _Object$entries.length; _i3++) {
    _loop();
  }

  return params.length ? '&' + params.join('&') : '';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */

/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */


var Sha1 = /*#__PURE__*/function () {
  function Sha1() {
    _classCallCheck(this, Sha1);

    /**
     * Holds the previous values of accumulated variables a-e in the compress_
     * function.
     * @private
     */
    this.chain_ = [];
    /**
     * A buffer holding the partially computed hash result.
     * @private
     */

    this.buf_ = [];
    /**
     * An array of 80 bytes, each a part of the message to be hashed.  Referred to
     * as the message schedule in the docs.
     * @private
     */

    this.W_ = [];
    /**
     * Contains data needed to pad messages less than 64 bytes.
     * @private
     */

    this.pad_ = [];
    /**
     * @private {number}
     */

    this.inbuf_ = 0;
    /**
     * @private {number}
     */

    this.total_ = 0;
    this.blockSize = 512 / 8;
    this.pad_[0] = 128;

    for (var i = 1; i < this.blockSize; ++i) {
      this.pad_[i] = 0;
    }

    this.reset();
  }

  _createClass(Sha1, [{
    key: "reset",
    value: function reset() {
      this.chain_[0] = 0x67452301;
      this.chain_[1] = 0xefcdab89;
      this.chain_[2] = 0x98badcfe;
      this.chain_[3] = 0x10325476;
      this.chain_[4] = 0xc3d2e1f0;
      this.inbuf_ = 0;
      this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */

  }, {
    key: "compress_",
    value: function compress_(buf, offset) {
      if (!offset) {
        offset = 0;
      }

      var W = this.W_; // get 16 big endian words

      if (typeof buf === 'string') {
        for (var i = 0; i < 16; i++) {
          // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
          // have a bug that turns the post-increment ++ operator into pre-increment
          // during JIT compilation.  We have code that depends heavily on SHA-1 for
          // correctness and which is affected by this bug, so I've removed all uses
          // of post-increment ++ in which the result value is used.  We can revert
          // this change once the Safari bug
          // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
          // most clients have been updated.
          W[i] = buf.charCodeAt(offset) << 24 | buf.charCodeAt(offset + 1) << 16 | buf.charCodeAt(offset + 2) << 8 | buf.charCodeAt(offset + 3);
          offset += 4;
        }
      } else {
        for (var _i4 = 0; _i4 < 16; _i4++) {
          W[_i4] = buf[offset] << 24 | buf[offset + 1] << 16 | buf[offset + 2] << 8 | buf[offset + 3];
          offset += 4;
        }
      } // expand to 80 words


      for (var _i5 = 16; _i5 < 80; _i5++) {
        var t = W[_i5 - 3] ^ W[_i5 - 8] ^ W[_i5 - 14] ^ W[_i5 - 16];
        W[_i5] = (t << 1 | t >>> 31) & 0xffffffff;
      }

      var a = this.chain_[0];
      var b = this.chain_[1];
      var c = this.chain_[2];
      var d = this.chain_[3];
      var e = this.chain_[4];
      var f, k; // TODO(user): Try to unroll this loop to speed up the computation.

      for (var _i6 = 0; _i6 < 80; _i6++) {
        if (_i6 < 40) {
          if (_i6 < 20) {
            f = d ^ b & (c ^ d);
            k = 0x5a827999;
          } else {
            f = b ^ c ^ d;
            k = 0x6ed9eba1;
          }
        } else {
          if (_i6 < 60) {
            f = b & c | d & (b | c);
            k = 0x8f1bbcdc;
          } else {
            f = b ^ c ^ d;
            k = 0xca62c1d6;
          }
        }

        var _t = (a << 5 | a >>> 27) + f + e + k + W[_i6] & 0xffffffff;

        e = d;
        d = c;
        c = (b << 30 | b >>> 2) & 0xffffffff;
        b = a;
        a = _t;
      }

      this.chain_[0] = this.chain_[0] + a & 0xffffffff;
      this.chain_[1] = this.chain_[1] + b & 0xffffffff;
      this.chain_[2] = this.chain_[2] + c & 0xffffffff;
      this.chain_[3] = this.chain_[3] + d & 0xffffffff;
      this.chain_[4] = this.chain_[4] + e & 0xffffffff;
    }
  }, {
    key: "update",
    value: function update(bytes, length) {
      // TODO(johnlenz): tighten the function signature and remove this check
      if (bytes == null) {
        return;
      }

      if (length === undefined) {
        length = bytes.length;
      }

      var lengthMinusBlock = length - this.blockSize;
      var n = 0; // Using local instead of member variables gives ~5% speedup on Firefox 16.

      var buf = this.buf_;
      var inbuf = this.inbuf_; // The outer while loop should execute at most twice.

      while (n < length) {
        // When we have no data in the block to top up, we can directly process the
        // input buffer (assuming it contains sufficient data). This gives ~25%
        // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
        // the data is provided in large chunks (or in multiples of 64 bytes).
        if (inbuf === 0) {
          while (n <= lengthMinusBlock) {
            this.compress_(bytes, n);
            n += this.blockSize;
          }
        }

        if (typeof bytes === 'string') {
          while (n < length) {
            buf[inbuf] = bytes.charCodeAt(n);
            ++inbuf;
            ++n;

            if (inbuf === this.blockSize) {
              this.compress_(buf);
              inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

              break;
            }
          }
        } else {
          while (n < length) {
            buf[inbuf] = bytes[n];
            ++inbuf;
            ++n;

            if (inbuf === this.blockSize) {
              this.compress_(buf);
              inbuf = 0; // Jump to the outer loop so we use the full-block optimization.

              break;
            }
          }
        }
      }

      this.inbuf_ = inbuf;
      this.total_ += length;
    }
    /** @override */

  }, {
    key: "digest",
    value: function digest() {
      var digest = [];
      var totalBits = this.total_ * 8; // Add pad 0x80 0x00*.

      if (this.inbuf_ < 56) {
        this.update(this.pad_, 56 - this.inbuf_);
      } else {
        this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
      } // Add # bits.


      for (var i = this.blockSize - 1; i >= 56; i--) {
        this.buf_[i] = totalBits & 255;
        totalBits /= 256; // Don't use bit-shifting here!
      }

      this.compress_(this.buf_);
      var n = 0;

      for (var _i7 = 0; _i7 < 5; _i7++) {
        for (var j = 24; j >= 0; j -= 8) {
          digest[n] = this.chain_[_i7] >> j & 255;
          ++n;
        }
      }

      return digest;
    }
  }]);

  return Sha1;
}();
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */


function errorPrefix(fnName, argName) {
  return "".concat(fnName, " failed: ").concat(argName, " argument ");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3

/**
 * @param {string} str
 * @return {Array}
 */


var stringToByteArray = function stringToByteArray(str) {
  var out = [];
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i); // Is this the lead surrogate in a surrogate pair?

    if (c >= 0xd800 && c <= 0xdbff) {
      var high = c - 0xd800; // the high 10 bits.

      i++;
      assert(i < str.length, 'Surrogate pair missing trail surrogate.');
      var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.

      c = 0x10000 + (high << 10) + low;
    }

    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = c >> 6 | 192;
      out[p++] = c & 63 | 128;
    } else if (c < 65536) {
      out[p++] = c >> 12 | 224;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    } else {
      out[p++] = c >> 18 | 240;
      out[p++] = c >> 12 & 63 | 128;
      out[p++] = c >> 6 & 63 | 128;
      out[p++] = c & 63 | 128;
    }
  }

  return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */


var stringLength = function stringLength(str) {
  var p = 0;

  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);

    if (c < 128) {
      p++;
    } else if (c < 2048) {
      p += 2;
    } else if (c >= 0xd800 && c <= 0xdbff) {
      // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
      p += 4;
      i++; // skip trail surrogate.
    } else {
      p += 3;
    }
  }

  return p;
};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @internal
 */


function promisifyRequest(request, errorMessage) {
  return new Promise(function (resolve, reject) {
    request.onsuccess = function (event) {
      resolve(event.target.result);
    };

    request.onerror = function (event) {
      var _a;

      reject("".concat(errorMessage, ": ").concat((_a = event.target.error) === null || _a === void 0 ? void 0 : _a.message));
    };
  });
}
/**
 * @internal
 */


var DBWrapper = /*#__PURE__*/function () {
  function DBWrapper(_db) {
    _classCallCheck(this, DBWrapper);

    this._db = _db;
    this.objectStoreNames = this._db.objectStoreNames;
  }

  _createClass(DBWrapper, [{
    key: "transaction",
    value: function transaction(storeNames, mode) {
      return new TransactionWrapper(this._db.transaction.call(this._db, storeNames, mode));
    }
  }, {
    key: "createObjectStore",
    value: function createObjectStore(storeName, options) {
      return new ObjectStoreWrapper(this._db.createObjectStore(storeName, options));
    }
  }, {
    key: "close",
    value: function close() {
      this._db.close();
    }
  }]);

  return DBWrapper;
}();
/**
 * @internal
 */


var TransactionWrapper = /*#__PURE__*/function () {
  function TransactionWrapper(_transaction) {
    var _this8 = this;

    _classCallCheck(this, TransactionWrapper);

    this._transaction = _transaction;
    this.complete = new Promise(function (resolve, reject) {
      _this8._transaction.oncomplete = function () {
        resolve();
      };

      _this8._transaction.onerror = function () {
        reject(_this8._transaction.error);
      };

      _this8._transaction.onabort = function () {
        reject(_this8._transaction.error);
      };
    });
  }

  _createClass(TransactionWrapper, [{
    key: "objectStore",
    value: function objectStore(storeName) {
      return new ObjectStoreWrapper(this._transaction.objectStore(storeName));
    }
  }]);

  return TransactionWrapper;
}();
/**
 * @internal
 */


var ObjectStoreWrapper = /*#__PURE__*/function () {
  function ObjectStoreWrapper(_store) {
    _classCallCheck(this, ObjectStoreWrapper);

    this._store = _store;
  }

  _createClass(ObjectStoreWrapper, [{
    key: "index",
    value: function index(name) {
      return new IndexWrapper(this._store.index(name));
    }
  }, {
    key: "createIndex",
    value: function createIndex(name, keypath, options) {
      return new IndexWrapper(this._store.createIndex(name, keypath, options));
    }
  }, {
    key: "get",
    value: function get(key) {
      var request = this._store.get(key);

      return promisifyRequest(request, 'Error reading from IndexedDB');
    }
  }, {
    key: "put",
    value: function put(value, key) {
      var request = this._store.put(value, key);

      return promisifyRequest(request, 'Error writing to IndexedDB');
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      var request = this._store["delete"](key);

      return promisifyRequest(request, 'Error deleting from IndexedDB');
    }
  }, {
    key: "clear",
    value: function clear() {
      var request = this._store.clear();

      return promisifyRequest(request, 'Error clearing IndexedDB object store');
    }
  }]);

  return ObjectStoreWrapper;
}();
/**
 * @internal
 */


var IndexWrapper = /*#__PURE__*/function () {
  function IndexWrapper(_index) {
    _classCallCheck(this, IndexWrapper);

    this._index = _index;
  }

  _createClass(IndexWrapper, [{
    key: "get",
    value: function get(key) {
      var request = this._index.get(key);

      return promisifyRequest(request, 'Error reading from IndexedDB');
    }
  }]);

  return IndexWrapper;
}();
/**
 * @internal
 */


function openDB(dbName, dbVersion, upgradeCallback) {
  return new Promise(function (resolve, reject) {
    try {
      var request = indexedDB.open(dbName, dbVersion);

      request.onsuccess = function (event) {
        resolve(new DBWrapper(event.target.result));
      };

      request.onerror = function (event) {
        var _a;

        reject("Error opening indexedDB: ".concat((_a = event.target.error) === null || _a === void 0 ? void 0 : _a.message));
      };

      request.onupgradeneeded = function (event) {
        upgradeCallback(new DBWrapper(request.result), event.oldVersion, event.newVersion, new TransactionWrapper(request.transaction));
      };
    } catch (e) {
      reject("Error opening indexedDB: ".concat(e.message));
    }
  });
}

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */

var Component = /*#__PURE__*/function () {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  function Component(name, instanceFactory, type) {
    _classCallCheck(this, Component);

    this.name = name;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    /**
     * Properties to be added to the service namespace
     */

    this.serviceProps = {};
    this.instantiationMode = "LAZY"
    /* LAZY */
    ;
    this.onInstanceCreated = null;
  }

  _createClass(Component, [{
    key: "setInstantiationMode",
    value: function setInstantiationMode(mode) {
      this.instantiationMode = mode;
      return this;
    }
  }, {
    key: "setMultipleInstances",
    value: function setMultipleInstances(multipleInstances) {
      this.multipleInstances = multipleInstances;
      return this;
    }
  }, {
    key: "setServiceProps",
    value: function setServiceProps(props) {
      this.serviceProps = props;
      return this;
    }
  }, {
    key: "setInstanceCreatedCallback",
    value: function setInstanceCreatedCallback(callback) {
      this.onInstanceCreated = callback;
      return this;
    }
  }]);

  return Component;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var DEFAULT_ENTRY_NAME$1 = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */

var Provider = /*#__PURE__*/function () {
  function Provider(name, container) {
    _classCallCheck(this, Provider);

    this.name = name;
    this.container = container;
    this.component = null;
    this.instances = new Map();
    this.instancesDeferred = new Map();
    this.instancesOptions = new Map();
    this.onInitCallbacks = new Map();
  }
  /**
   * @param identifier A provider can provide mulitple instances of a service
   * if this.component.multipleInstances is true.
   */


  _createClass(Provider, [{
    key: "get",
    value: function get(identifier) {
      // if multipleInstances is not supported, use the default name
      var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);

      if (!this.instancesDeferred.has(normalizedIdentifier)) {
        var deferred = new Deferred();
        this.instancesDeferred.set(normalizedIdentifier, deferred);

        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          // initialize the service if it can be auto-initialized
          try {
            var instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });

            if (instance) {
              deferred.resolve(instance);
            }
          } catch (e) {// when the instance factory throws an exception during get(), it should not cause
            // a fatal error. We just return the unresolved promise in this case.
          }
        }
      }

      return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
  }, {
    key: "getImmediate",
    value: function getImmediate(options) {
      var _a; // if multipleInstances is not supported, use the default name


      var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
      var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;

      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          return this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
        } catch (e) {
          if (optional) {
            return null;
          } else {
            throw e;
          }
        }
      } else {
        // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
        if (optional) {
          return null;
        } else {
          throw Error("Service ".concat(this.name, " is not available"));
        }
      }
    }
  }, {
    key: "getComponent",
    value: function getComponent() {
      return this.component;
    }
  }, {
    key: "setComponent",
    value: function setComponent(component) {
      if (component.name !== this.name) {
        throw Error("Mismatching Component ".concat(component.name, " for Provider ").concat(this.name, "."));
      }

      if (this.component) {
        throw Error("Component for ".concat(this.name, " has already been provided"));
      }

      this.component = component; // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)

      if (!this.shouldAutoInitialize()) {
        return;
      } // if the service is eager, initialize the default instance


      if (isComponentEager(component)) {
        try {
          this.getOrInitializeService({
            instanceIdentifier: DEFAULT_ENTRY_NAME$1
          });
        } catch (e) {// when the instance factory for an eager Component throws an exception during the eager
          // initialization, it should not cause a fatal error.
          // TODO: Investigate if we need to make it configurable, because some component may want to cause
          // a fatal error in this case?
        }
      } // Create service instances for the pending promises and resolve them
      // NOTE: if this.multipleInstances is false, only the default instance will be created
      // and all promises with resolve with it regardless of the identifier.


      var _iterator = _createForOfIteratorHelper(this.instancesDeferred.entries()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              instanceIdentifier = _step$value[0],
              instanceDeferred = _step$value[1];

          var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

          try {
            // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
            var instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            instanceDeferred.resolve(instance);
          } catch (e) {// when the instance factory throws an exception, it should not cause
            // a fatal error. We just leave the promise unresolved.
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "clearInstance",
    value: function clearInstance() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME$1;
      this.instancesDeferred["delete"](identifier);
      this.instancesOptions["delete"](identifier);
      this.instances["delete"](identifier);
    } // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?

  }, {
    key: "delete",
    value: function () {
      var _delete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var services;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                services = Array.from(this.instances.values());
                _context.next = 3;
                return Promise.all([].concat(_toConsumableArray(services.filter(function (service) {
                  return 'INTERNAL' in service;
                }) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(function (service) {
                  return service.INTERNAL["delete"]();
                })), _toConsumableArray(services.filter(function (service) {
                  return '_delete' in service;
                }) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(function (service) {
                  return service._delete();
                }))));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "isComponentSet",
    value: function isComponentSet() {
      return this.component != null;
    }
  }, {
    key: "isInitialized",
    value: function isInitialized() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME$1;
      return this.instances.has(identifier);
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME$1;
      return this.instancesOptions.get(identifier) || {};
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _opts$options = opts.options,
          options = _opts$options === void 0 ? {} : _opts$options;
      var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);

      if (this.isInitialized(normalizedIdentifier)) {
        throw Error("".concat(this.name, "(").concat(normalizedIdentifier, ") has already been initialized"));
      }

      if (!this.isComponentSet()) {
        throw Error("Component ".concat(this.name, " has not been registered yet"));
      }

      var instance = this.getOrInitializeService({
        instanceIdentifier: normalizedIdentifier,
        options: options
      }); // resolve any pending promise waiting for the service instance

      var _iterator2 = _createForOfIteratorHelper(this.instancesDeferred.entries()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              instanceIdentifier = _step2$value[0],
              instanceDeferred = _step2$value[1];

          var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);

          if (normalizedIdentifier === normalizedDeferredIdentifier) {
            instanceDeferred.resolve(instance);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */

  }, {
    key: "onInit",
    value: function onInit(callback, identifier) {
      var _a;

      var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
      existingCallbacks.add(callback);
      this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
      var existingInstance = this.instances.get(normalizedIdentifier);

      if (existingInstance) {
        callback(existingInstance, normalizedIdentifier);
      }

      return function () {
        existingCallbacks["delete"](callback);
      };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */

  }, {
    key: "invokeOnInitCallbacks",
    value: function invokeOnInitCallbacks(instance, identifier) {
      var callbacks = this.onInitCallbacks.get(identifier);

      if (!callbacks) {
        return;
      }

      var _iterator3 = _createForOfIteratorHelper(callbacks),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var callback = _step3.value;

          try {
            callback(instance, identifier);
          } catch (_a) {// ignore errors in the onInit callback
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "getOrInitializeService",
    value: function getOrInitializeService(_ref) {
      var instanceIdentifier = _ref.instanceIdentifier,
          _ref$options = _ref.options,
          options = _ref$options === void 0 ? {} : _ref$options;
      var instance = this.instances.get(instanceIdentifier);

      if (!instance && this.component) {
        instance = this.component.instanceFactory(this.container, {
          instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
          options: options
        });
        this.instances.set(instanceIdentifier, instance);
        this.instancesOptions.set(instanceIdentifier, options);
        /**
         * Invoke onInit listeners.
         * Note this.component.onInstanceCreated is different, which is used by the component creator,
         * while onInit listeners are registered by consumers of the provider.
         */

        this.invokeOnInitCallbacks(instance, instanceIdentifier);
        /**
         * Order is important
         * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
         * makes `isInitialized()` return true.
         */

        if (this.component.onInstanceCreated) {
          try {
            this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
          } catch (_a) {// ignore errors in the onInstanceCreatedCallback
          }
        }
      }

      return instance || null;
    }
  }, {
    key: "normalizeInstanceIdentifier",
    value: function normalizeInstanceIdentifier() {
      var identifier = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME$1;

      if (this.component) {
        return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME$1;
      } else {
        return identifier; // assume multiple instances are supported before the component is provided.
      }
    }
  }, {
    key: "shouldAutoInitialize",
    value: function shouldAutoInitialize() {
      return !!this.component && this.component.instantiationMode !== "EXPLICIT"
      /* EXPLICIT */
      ;
    }
  }]);

  return Provider;
}(); // undefined should be passed to the service factory for the default instance


function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME$1 ? undefined : identifier;
}

function isComponentEager(component) {
  return component.instantiationMode === "EAGER"
  /* EAGER */
  ;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */


var ComponentContainer = /*#__PURE__*/function () {
  function ComponentContainer(name) {
    _classCallCheck(this, ComponentContainer);

    this.name = name;
    this.providers = new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */


  _createClass(ComponentContainer, [{
    key: "addComponent",
    value: function addComponent(component) {
      var provider = this.getProvider(component.name);

      if (provider.isComponentSet()) {
        throw new Error("Component ".concat(component.name, " has already been registered with ").concat(this.name));
      }

      provider.setComponent(component);
    }
  }, {
    key: "addOrOverwriteComponent",
    value: function addOrOverwriteComponent(component) {
      var provider = this.getProvider(component.name);

      if (provider.isComponentSet()) {
        // delete the existing provider from the container, so we can register the new component
        this.providers["delete"](component.name);
      }

      this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */

  }, {
    key: "getProvider",
    value: function getProvider(name) {
      if (this.providers.has(name)) {
        return this.providers.get(name);
      } // create a Provider for a service that hasn't registered with Firebase


      var provider = new Provider(name, this);
      this.providers.set(name, provider);
      return provider;
    }
  }, {
    key: "getProviders",
    value: function getProviders() {
      return Array.from(this.providers.values());
    }
  }]);

  return ComponentContainer;
}();

var _ConsoleMethod;
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */

var LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));

var levelStringToEnum = {
  'debug': LogLevel.DEBUG,
  'verbose': LogLevel.VERBOSE,
  'info': LogLevel.INFO,
  'warn': LogLevel.WARN,
  'error': LogLevel.ERROR,
  'silent': LogLevel.SILENT
};
/**
 * The default log level
 */

var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */

var ConsoleMethod = (_ConsoleMethod = {}, _defineProperty(_ConsoleMethod, LogLevel.DEBUG, 'log'), _defineProperty(_ConsoleMethod, LogLevel.VERBOSE, 'log'), _defineProperty(_ConsoleMethod, LogLevel.INFO, 'info'), _defineProperty(_ConsoleMethod, LogLevel.WARN, 'warn'), _defineProperty(_ConsoleMethod, LogLevel.ERROR, 'error'), _ConsoleMethod);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */

var defaultLogHandler = function defaultLogHandler(instance, logType) {
  if (logType < instance.logLevel) {
    return;
  }

  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];

  if (method) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    (_console = console)[method].apply(_console, ["[".concat(now, "]  ").concat(instance.name, ":")].concat(args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: ".concat(logType, ")"));
  }
};

var Logger = /*#__PURE__*/function () {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  function Logger(name) {
    _classCallCheck(this, Logger);

    this.name = name;
    /**
     * The log level of the given Logger instance.
     */

    this._logLevel = defaultLogLevel;
    /**
     * The main (internal) log handler for the Logger instance.
     * Can be set to a new function in internal package code but not by user.
     */

    this._logHandler = defaultLogHandler;
    /**
     * The optional, additional, user-defined log handler for the Logger instance.
     */

    this._userLogHandler = null;
  }

  _createClass(Logger, [{
    key: "logLevel",
    get: function get() {
      return this._logLevel;
    },
    set: function set(val) {
      if (!(val in LogLevel)) {
        throw new TypeError("Invalid value \"".concat(val, "\" assigned to `logLevel`"));
      }

      this._logLevel = val;
    } // Workaround for setter/getter having to be the same type.

  }, {
    key: "setLogLevel",
    value: function setLogLevel(val) {
      this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
  }, {
    key: "logHandler",
    get: function get() {
      return this._logHandler;
    },
    set: function set(val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }

      this._logHandler = val;
    }
  }, {
    key: "userLogHandler",
    get: function get() {
      return this._userLogHandler;
    },
    set: function set(val) {
      this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */

  }, {
    key: "debug",
    value: function debug() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.DEBUG].concat(args));

      this._logHandler.apply(this, [this, LogLevel.DEBUG].concat(args));
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.VERBOSE].concat(args));

      this._logHandler.apply(this, [this, LogLevel.VERBOSE].concat(args));
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.INFO].concat(args));

      this._logHandler.apply(this, [this, LogLevel.INFO].concat(args));
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.WARN].concat(args));

      this._logHandler.apply(this, [this, LogLevel.WARN].concat(args));
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      this._userLogHandler && this._userLogHandler.apply(this, [this, LogLevel.ERROR].concat(args));

      this._logHandler.apply(this, [this, LogLevel.ERROR].concat(args));
    }
  }]);

  return Logger;
}();

var _PLATFORM_LOG_STRING, _ERRORS;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var PlatformLoggerServiceImpl = /*#__PURE__*/function () {
  function PlatformLoggerServiceImpl(container) {
    _classCallCheck(this, PlatformLoggerServiceImpl);

    this.container = container;
  } // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.


  _createClass(PlatformLoggerServiceImpl, [{
    key: "getPlatformInfoString",
    value: function getPlatformInfoString() {
      var providers = this.container.getProviders(); // Loop through providers and get library/version pairs from any that are
      // version components.

      return providers.map(function (provider) {
        if (isVersionServiceProvider(provider)) {
          var service = provider.getImmediate();
          return "".concat(service.library, "/").concat(service.version);
        } else {
          return null;
        }
      }).filter(function (logString) {
        return logString;
      }).join(' ');
    }
  }]);

  return PlatformLoggerServiceImpl;
}();
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */


function isVersionServiceProvider(provider) {
  var component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION"
  /* VERSION */
  ;
}

var name$o = "@firebase/app";
var version$1$1 = "0.7.20";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var logger$1 = new Logger('@firebase/app');
var name$n = "@firebase/app-compat";
var name$m = "@firebase/analytics-compat";
var name$l = "@firebase/analytics";
var name$k = "@firebase/app-check-compat";
var name$j = "@firebase/app-check";
var name$i = "@firebase/auth";
var name$h = "@firebase/auth-compat";
var name$g = "@firebase/database";
var name$f = "@firebase/database-compat";
var name$e = "@firebase/functions";
var name$d = "@firebase/functions-compat";
var name$c = "@firebase/installations";
var name$b = "@firebase/installations-compat";
var name$a = "@firebase/messaging";
var name$9 = "@firebase/messaging-compat";
var name$8 = "@firebase/performance";
var name$7 = "@firebase/performance-compat";
var name$6 = "@firebase/remote-config";
var name$5 = "@firebase/remote-config-compat";
var name$4 = "@firebase/storage";
var name$3 = "@firebase/storage-compat";
var name$2 = "@firebase/firestore";
var name$1$1 = "@firebase/firestore-compat";
var name$p = "firebase";
var version$2 = "9.6.10";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The default app name
 *
 * @internal
 */

var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_PLATFORM_LOG_STRING = {}, _defineProperty(_PLATFORM_LOG_STRING, name$o, 'fire-core'), _defineProperty(_PLATFORM_LOG_STRING, name$n, 'fire-core-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$l, 'fire-analytics'), _defineProperty(_PLATFORM_LOG_STRING, name$m, 'fire-analytics-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$j, 'fire-app-check'), _defineProperty(_PLATFORM_LOG_STRING, name$k, 'fire-app-check-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$i, 'fire-auth'), _defineProperty(_PLATFORM_LOG_STRING, name$h, 'fire-auth-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$g, 'fire-rtdb'), _defineProperty(_PLATFORM_LOG_STRING, name$f, 'fire-rtdb-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$e, 'fire-fn'), _defineProperty(_PLATFORM_LOG_STRING, name$d, 'fire-fn-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$c, 'fire-iid'), _defineProperty(_PLATFORM_LOG_STRING, name$b, 'fire-iid-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$a, 'fire-fcm'), _defineProperty(_PLATFORM_LOG_STRING, name$9, 'fire-fcm-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$8, 'fire-perf'), _defineProperty(_PLATFORM_LOG_STRING, name$7, 'fire-perf-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$6, 'fire-rc'), _defineProperty(_PLATFORM_LOG_STRING, name$5, 'fire-rc-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$4, 'fire-gcs'), _defineProperty(_PLATFORM_LOG_STRING, name$3, 'fire-gcs-compat'), _defineProperty(_PLATFORM_LOG_STRING, name$2, 'fire-fst'), _defineProperty(_PLATFORM_LOG_STRING, name$1$1, 'fire-fst-compat'), _defineProperty(_PLATFORM_LOG_STRING, 'fire-js', 'fire-js'), _defineProperty(_PLATFORM_LOG_STRING, name$p, 'fire-js-all'), _PLATFORM_LOG_STRING);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @internal
 */

var _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any


var _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */


function _addComponent(app, component) {
  try {
    app.container.addComponent(component);
  } catch (e) {
    logger$1.debug("Component ".concat(component.name, " failed to register with FirebaseApp ").concat(app.name), e);
  }
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */


function _registerComponent(component) {
  var componentName = component.name;

  if (_components.has(componentName)) {
    logger$1.debug("There were multiple attempts to register component ".concat(componentName, "."));
    return false;
  }

  _components.set(componentName, component); // add the component to existing app instances


  var _iterator = _createForOfIteratorHelper(_apps.values()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var app = _step.value;

      _addComponent(app, component);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */


function _getProvider(app, name) {
  var heartbeatController = app.container.getProvider('heartbeat').getImmediate({
    optional: true
  });

  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }

  return app.container.getProvider(name);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ERRORS = (_ERRORS = {}, _defineProperty(_ERRORS, "no-app"
/* NO_APP */
, "No Firebase App '{$appName}' has been created - " + 'call Firebase App.initializeApp()'), _defineProperty(_ERRORS, "bad-app-name"
/* BAD_APP_NAME */
, "Illegal App name: '{$appName}"), _defineProperty(_ERRORS, "duplicate-app"
/* DUPLICATE_APP */
, "Firebase App named '{$appName}' already exists with different options or config"), _defineProperty(_ERRORS, "app-deleted"
/* APP_DELETED */
, "Firebase App named '{$appName}' already deleted"), _defineProperty(_ERRORS, "invalid-app-argument"
/* INVALID_APP_ARGUMENT */
, 'firebase.{$appName}() takes either no argument or a ' + 'Firebase App instance.'), _defineProperty(_ERRORS, "invalid-log-argument"
/* INVALID_LOG_ARGUMENT */
, 'First argument to `onLog` must be null or a function.'), _defineProperty(_ERRORS, "storage-open"
/* STORAGE_OPEN */
, 'Error thrown when opening storage. Original error: {$originalErrorMessage}.'), _defineProperty(_ERRORS, "storage-get"
/* STORAGE_GET */
, 'Error thrown when reading from storage. Original error: {$originalErrorMessage}.'), _defineProperty(_ERRORS, "storage-set"
/* STORAGE_WRITE */
, 'Error thrown when writing to storage. Original error: {$originalErrorMessage}.'), _defineProperty(_ERRORS, "storage-delete"
/* STORAGE_DELETE */
, 'Error thrown when deleting from storage. Original error: {$originalErrorMessage}.'), _ERRORS);
var ERROR_FACTORY = new ErrorFactory('app', 'Firebase', ERRORS);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FirebaseAppImpl = /*#__PURE__*/function () {
  function FirebaseAppImpl(options, config, container) {
    var _this = this;

    _classCallCheck(this, FirebaseAppImpl);

    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new Component('app', function () {
      return _this;
    }, "PUBLIC"
    /* PUBLIC */
    ));
  }

  _createClass(FirebaseAppImpl, [{
    key: "automaticDataCollectionEnabled",
    get: function get() {
      this.checkDestroyed();
      return this._automaticDataCollectionEnabled;
    },
    set: function set(val) {
      this.checkDestroyed();
      this._automaticDataCollectionEnabled = val;
    }
  }, {
    key: "name",
    get: function get() {
      this.checkDestroyed();
      return this._name;
    }
  }, {
    key: "options",
    get: function get() {
      this.checkDestroyed();
      return this._options;
    }
  }, {
    key: "config",
    get: function get() {
      this.checkDestroyed();
      return this._config;
    }
  }, {
    key: "container",
    get: function get() {
      return this._container;
    }
  }, {
    key: "isDeleted",
    get: function get() {
      return this._isDeleted;
    },
    set: function set(val) {
      this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */

  }, {
    key: "checkDestroyed",
    value: function checkDestroyed() {
      if (this.isDeleted) {
        throw ERROR_FACTORY.create("app-deleted"
        /* APP_DELETED */
        , {
          appName: this._name
        });
      }
    }
  }]);

  return FirebaseAppImpl;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The current SDK version.
 *
 * @public
 */


var SDK_VERSION$1 = version$2;

function initializeApp(options) {
  var rawConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (_typeof(rawConfig) !== 'object') {
    var _name = rawConfig;
    rawConfig = {
      name: _name
    };
  }

  var config = Object.assign({
    name: DEFAULT_ENTRY_NAME,
    automaticDataCollectionEnabled: false
  }, rawConfig);
  var name = config.name;

  if (typeof name !== 'string' || !name) {
    throw ERROR_FACTORY.create("bad-app-name"
    /* BAD_APP_NAME */
    , {
      appName: String(name)
    });
  }

  var existingApp = _apps.get(name);

  if (existingApp) {
    // return the existing app if options and config deep equal the ones in the existing app.
    if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app"
      /* DUPLICATE_APP */
      , {
        appName: name
      });
    }
  }

  var container = new ComponentContainer(name);

  var _iterator2 = _createForOfIteratorHelper(_components.values()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var component = _step2.value;
      container.addComponent(component);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var newApp = new FirebaseAppImpl(options, config, container);

  _apps.set(name, newApp);

  return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */


function getApp() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_ENTRY_NAME;

  var app = _apps.get(name);

  if (!app) {
    throw ERROR_FACTORY.create("no-app"
    /* NO_APP */
    , {
      appName: name
    });
  }

  return app;
}

function registerVersion(libraryKeyOrName, version, variant) {
  var _a; // TODO: We can use this check to whitelist strings when/if we set up
  // a good whitelist system.


  var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;

  if (variant) {
    library += "-".concat(variant);
  }

  var libraryMismatch = library.match(/\s|\//);
  var versionMismatch = version.match(/\s|\//);

  if (libraryMismatch || versionMismatch) {
    var warning = ["Unable to register library \"".concat(library, "\" with version \"").concat(version, "\":")];

    if (libraryMismatch) {
      warning.push("library name \"".concat(library, "\" contains illegal characters (whitespace or \"/\")"));
    }

    if (libraryMismatch && versionMismatch) {
      warning.push('and');
    }

    if (versionMismatch) {
      warning.push("version name \"".concat(version, "\" contains illegal characters (whitespace or \"/\")"));
    }

    logger$1.warn(warning.join(' '));
    return;
  }

  _registerComponent(new Component("".concat(library, "-version"), function () {
    return {
      library: library,
      version: version
    };
  }, "VERSION"
  /* VERSION */
  ));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var DB_NAME = 'firebase-heartbeat-database';
var DB_VERSION = 1;
var STORE_NAME = 'firebase-heartbeat-store';
var dbPromise = null;

function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, function (db, oldVersion) {
      // We don't use 'break' in this switch statement, the fall-through
      // behavior is what we want, because if there are multiple versions between
      // the old version and the current version, we want ALL the migrations
      // that correspond to those versions to run, not only the last one.
      // eslint-disable-next-line default-case
      switch (oldVersion) {
        case 0:
          db.createObjectStore(STORE_NAME);
      }
    })["catch"](function (e) {
      throw ERROR_FACTORY.create("storage-open"
      /* STORAGE_OPEN */
      , {
        originalErrorMessage: e.message
      });
    });
  }

  return dbPromise;
}

function readHeartbeatsFromIndexedDB(_x2) {
  return _readHeartbeatsFromIndexedDB.apply(this, arguments);
}

function _readHeartbeatsFromIndexedDB() {
  _readHeartbeatsFromIndexedDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(app) {
    var db;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return getDbPromise();

          case 3:
            db = _context8.sent;
            return _context8.abrupt("return", db.transaction(STORE_NAME).objectStore(STORE_NAME).get(computeKey(app)));

          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](0);
            throw ERROR_FACTORY.create("storage-get"
            /* STORAGE_GET */
            , {
              originalErrorMessage: _context8.t0.message
            });

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 7]]);
  }));
  return _readHeartbeatsFromIndexedDB.apply(this, arguments);
}

function writeHeartbeatsToIndexedDB(_x3, _x4) {
  return _writeHeartbeatsToIndexedDB.apply(this, arguments);
}

function _writeHeartbeatsToIndexedDB() {
  _writeHeartbeatsToIndexedDB = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(app, heartbeatObject) {
    var db, tx, objectStore;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return getDbPromise();

          case 3:
            db = _context9.sent;
            tx = db.transaction(STORE_NAME, 'readwrite');
            objectStore = tx.objectStore(STORE_NAME);
            _context9.next = 8;
            return objectStore.put(heartbeatObject, computeKey(app));

          case 8:
            return _context9.abrupt("return", tx.complete);

          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](0);
            throw ERROR_FACTORY.create("storage-set"
            /* STORAGE_WRITE */
            , {
              originalErrorMessage: _context9.t0.message
            });

          case 14:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 11]]);
  }));
  return _writeHeartbeatsToIndexedDB.apply(this, arguments);
}

function computeKey(app) {
  return "".concat(app.name, "!").concat(app.options.appId);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var MAX_HEADER_BYTES = 1024; // 30 days

var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;

var HeartbeatServiceImpl = /*#__PURE__*/function () {
  function HeartbeatServiceImpl(container) {
    var _this2 = this;

    _classCallCheck(this, HeartbeatServiceImpl);

    this.container = container;
    /**
     * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
     * the header string.
     * Stores one record per date. This will be consolidated into the standard
     * format of one record per user agent string before being sent as a header.
     * Populated from indexedDB when the controller is instantiated and should
     * be kept in sync with indexedDB.
     * Leave public for easier testing.
     */

    this._heartbeatsCache = null;
    var app = this.container.getProvider('app').getImmediate();
    this._storage = new HeartbeatStorageImpl(app);
    this._heartbeatsCachePromise = this._storage.read().then(function (result) {
      _this2._heartbeatsCache = result;
      return result;
    });
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */


  _createClass(HeartbeatServiceImpl, [{
    key: "triggerHeartbeat",
    value: function () {
      var _triggerHeartbeat = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var platformLogger, agent, date;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                platformLogger = this.container.getProvider('platform-logger').getImmediate(); // This is the "Firebase user agent" string from the platform logger
                // service, not the browser user agent.

                agent = platformLogger.getPlatformInfoString();
                date = getUTCDateString();

                if (!(this._heartbeatsCache === null)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return this._heartbeatsCachePromise;

              case 6:
                this._heartbeatsCache = _context.sent;

              case 7:
                if (!(this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some(function (singleDateHeartbeat) {
                  return singleDateHeartbeat.date === date;
                }))) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt("return");

              case 11:
                // There is no entry for this date. Create one.
                this._heartbeatsCache.heartbeats.push({
                  date: date,
                  agent: agent
                });

              case 12:
                // Remove entries older than 30 days.
                this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(function (singleDateHeartbeat) {
                  var hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
                  var now = Date.now();
                  return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
                });
                return _context.abrupt("return", this._storage.overwrite(this._heartbeatsCache));

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function triggerHeartbeat() {
        return _triggerHeartbeat.apply(this, arguments);
      }

      return triggerHeartbeat;
    }()
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */

  }, {
    key: "getHeartbeatsHeader",
    value: function () {
      var _getHeartbeatsHeader = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var date, _extractHeartbeatsFor, heartbeatsToSend, unsentEntries, headerString;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this._heartbeatsCache === null)) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return this._heartbeatsCachePromise;

              case 3:
                if (!(this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", '');

              case 5:
                date = getUTCDateString(); // Extract as many heartbeats from the cache as will fit under the size limit.

                _extractHeartbeatsFor = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats), heartbeatsToSend = _extractHeartbeatsFor.heartbeatsToSend, unsentEntries = _extractHeartbeatsFor.unsentEntries;
                headerString = base64urlEncodeWithoutPadding(JSON.stringify({
                  version: 2,
                  heartbeats: heartbeatsToSend
                })); // Store last sent date to prevent another being logged/sent for the same day.

                this._heartbeatsCache.lastSentHeartbeatDate = date;

                if (!(unsentEntries.length > 0)) {
                  _context2.next = 15;
                  break;
                }

                // Store any unsent entries if they exist.
                this._heartbeatsCache.heartbeats = unsentEntries; // This seems more likely than emptying the array (below) to lead to some odd state
                // since the cache isn't empty and this will be called again on the next request,
                // and is probably safest if we await it.

                _context2.next = 13;
                return this._storage.overwrite(this._heartbeatsCache);

              case 13:
                _context2.next = 17;
                break;

              case 15:
                this._heartbeatsCache.heartbeats = []; // Do not wait for this, to reduce latency.

                void this._storage.overwrite(this._heartbeatsCache);

              case 17:
                return _context2.abrupt("return", headerString);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getHeartbeatsHeader() {
        return _getHeartbeatsHeader.apply(this, arguments);
      }

      return getHeartbeatsHeader;
    }()
  }]);

  return HeartbeatServiceImpl;
}();

function getUTCDateString() {
  var today = new Date(); // Returns date format 'YYYY-MM-DD'

  return today.toISOString().substring(0, 10);
}

function extractHeartbeatsForHeader(heartbeatsCache) {
  var maxSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MAX_HEADER_BYTES;
  // Heartbeats grouped by user agent in the standard format to be sent in
  // the header.
  var heartbeatsToSend = []; // Single date format heartbeats that are not sent.

  var unsentEntries = heartbeatsCache.slice();

  var _iterator3 = _createForOfIteratorHelper(heartbeatsCache),
      _step3;

  try {
    var _loop = function _loop() {
      var singleDateHeartbeat = _step3.value;
      // Look for an existing entry with the same user agent.
      var heartbeatEntry = heartbeatsToSend.find(function (hb) {
        return hb.agent === singleDateHeartbeat.agent;
      });

      if (!heartbeatEntry) {
        // If no entry for this user agent exists, create one.
        heartbeatsToSend.push({
          agent: singleDateHeartbeat.agent,
          dates: [singleDateHeartbeat.date]
        });

        if (countBytes(heartbeatsToSend) > maxSize) {
          // If the header would exceed max size, remove the added heartbeat
          // entry and stop adding to the header.
          heartbeatsToSend.pop();
          return "break";
        }
      } else {
        heartbeatEntry.dates.push(singleDateHeartbeat.date); // If the header would exceed max size, remove the added date
        // and stop adding to the header.

        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatEntry.dates.pop();
          return "break";
        }
      } // Pop unsent entry from queue. (Skipped if adding the entry exceeded
      // quota and the loop breaks early.)


      unsentEntries = unsentEntries.slice(1);
    };

    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _ret = _loop();

      if (_ret === "break") break;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return {
    heartbeatsToSend: heartbeatsToSend,
    unsentEntries: unsentEntries
  };
}

var HeartbeatStorageImpl = /*#__PURE__*/function () {
  function HeartbeatStorageImpl(app) {
    _classCallCheck(this, HeartbeatStorageImpl);

    this.app = app;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }

  _createClass(HeartbeatStorageImpl, [{
    key: "runIndexedDBEnvironmentCheck",
    value: function () {
      var _runIndexedDBEnvironmentCheck = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (isIndexedDBAvailable()) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", false);

              case 4:
                return _context3.abrupt("return", validateIndexedDBOpenable().then(function () {
                  return true;
                })["catch"](function () {
                  return false;
                }));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function runIndexedDBEnvironmentCheck() {
        return _runIndexedDBEnvironmentCheck.apply(this, arguments);
      }

      return runIndexedDBEnvironmentCheck;
    }()
    /**
     * Read all heartbeats.
     */

  }, {
    key: "read",
    value: function () {
      var _read = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var canUseIndexedDB, idbHeartbeatObject;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._canUseIndexedDBPromise;

              case 2:
                canUseIndexedDB = _context4.sent;

                if (canUseIndexedDB) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", {
                  heartbeats: []
                });

              case 7:
                _context4.next = 9;
                return readHeartbeatsFromIndexedDB(this.app);

              case 9:
                idbHeartbeatObject = _context4.sent;
                return _context4.abrupt("return", idbHeartbeatObject || {
                  heartbeats: []
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function read() {
        return _read.apply(this, arguments);
      }

      return read;
    }() // overwrite the storage with the provided heartbeats

  }, {
    key: "overwrite",
    value: function () {
      var _overwrite = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(heartbeatsObject) {
        var _a, canUseIndexedDB, existingHeartbeatsObject;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._canUseIndexedDBPromise;

              case 2:
                canUseIndexedDB = _context5.sent;

                if (canUseIndexedDB) {
                  _context5.next = 7;
                  break;
                }

                return _context5.abrupt("return");

              case 7:
                _context5.next = 9;
                return this.read();

              case 9:
                existingHeartbeatsObject = _context5.sent;
                return _context5.abrupt("return", writeHeartbeatsToIndexedDB(this.app, {
                  lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                  heartbeats: heartbeatsObject.heartbeats
                }));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function overwrite(_x5) {
        return _overwrite.apply(this, arguments);
      }

      return overwrite;
    }() // add heartbeats

  }, {
    key: "add",
    value: function () {
      var _add = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(heartbeatsObject) {
        var _a, canUseIndexedDB, existingHeartbeatsObject;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._canUseIndexedDBPromise;

              case 2:
                canUseIndexedDB = _context6.sent;

                if (canUseIndexedDB) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return");

              case 7:
                _context6.next = 9;
                return this.read();

              case 9:
                existingHeartbeatsObject = _context6.sent;
                return _context6.abrupt("return", writeHeartbeatsToIndexedDB(this.app, {
                  lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                  heartbeats: [].concat(_toConsumableArray(existingHeartbeatsObject.heartbeats), _toConsumableArray(heartbeatsObject.heartbeats))
                }));

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function add(_x6) {
        return _add.apply(this, arguments);
      }

      return add;
    }()
  }]);

  return HeartbeatStorageImpl;
}();
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */


function countBytes(heartbeatsCache) {
  // base64 has a restricted set of characters, all of which should be 1 byte.
  return base64urlEncodeWithoutPadding( // heartbeatsCache wrapper properties
  JSON.stringify({
    version: 2,
    heartbeats: heartbeatsCache
  })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function registerCoreComponents(variant) {
  _registerComponent(new Component('platform-logger', function (container) {
    return new PlatformLoggerServiceImpl(container);
  }, "PRIVATE"
  /* PRIVATE */
  ));

  _registerComponent(new Component('heartbeat', function (container) {
    return new HeartbeatServiceImpl(container);
  }, "PRIVATE"
  /* PRIVATE */
  )); // Register `app` package.


  registerVersion(name$o, version$1$1, variant); // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation

  registerVersion(name$o, version$1$1, 'esm2017'); // Register platform SDK identifier (no version).

  registerVersion('fire-js', '');
}
/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */


registerCoreComponents('');

var name$1 = "firebase";
var version$1 = "9.6.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

registerVersion(name$1, version$1, 'app');

var name="@firebase/database";var version="0.12.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The semver (www.semver.org) version of the SDK. */var SDK_VERSION='';/**
 * SDK_VERSION should be set before any database instance is created
 * @internal
 */function setSDKVersion(version){SDK_VERSION=version;}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Wraps a DOM Storage object and:
 * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
 * - prefixes names with "firebase:" to avoid collisions with app data.
 *
 * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
 * and one for localStorage.
 *
 */var DOMStorageWrapper=/*#__PURE__*/function(){/**
     * @param domStorage_ - The underlying storage object (e.g. localStorage or sessionStorage)
     */function DOMStorageWrapper(domStorage_){_classCallCheck(this,DOMStorageWrapper);this.domStorage_=domStorage_;// Use a prefix to avoid collisions with other stuff saved by the app.
this.prefix_='firebase:';}/**
     * @param key - The key to save the value under
     * @param value - The value being stored, or null to remove the key.
     */_createClass(DOMStorageWrapper,[{key:"set",value:function set(key,value){if(value==null){this.domStorage_.removeItem(this.prefixedName_(key));}else {this.domStorage_.setItem(this.prefixedName_(key),stringify(value));}}/**
     * @returns The value that was stored under this key, or null
     */},{key:"get",value:function get(key){var storedVal=this.domStorage_.getItem(this.prefixedName_(key));if(storedVal==null){return null;}else {return jsonEval(storedVal);}}},{key:"remove",value:function remove(key){this.domStorage_.removeItem(this.prefixedName_(key));}},{key:"prefixedName_",value:function prefixedName_(name){return this.prefix_+name;}},{key:"toString",value:function toString(){return this.domStorage_.toString();}}]);return DOMStorageWrapper;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An in-memory storage implementation that matches the API of DOMStorageWrapper
 * (TODO: create interface for both to implement).
 */var MemoryStorage=/*#__PURE__*/function(){function MemoryStorage(){_classCallCheck(this,MemoryStorage);this.cache_={};this.isInMemoryStorage=true;}_createClass(MemoryStorage,[{key:"set",value:function set(key,value){if(value==null){delete this.cache_[key];}else {this.cache_[key]=value;}}},{key:"get",value:function get(key){if(contains(this.cache_,key)){return this.cache_[key];}return null;}},{key:"remove",value:function remove(key){delete this.cache_[key];}}]);return MemoryStorage;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Helper to create a DOMStorageWrapper or else fall back to MemoryStorage.
 * TODO: Once MemoryStorage and DOMStorageWrapper have a shared interface this method annotation should change
 * to reflect this type
 *
 * @param domStorageName - Name of the underlying storage object
 *   (e.g. 'localStorage' or 'sessionStorage').
 * @returns Turning off type information until a common interface is defined.
 */var createStoragefor=function createStoragefor(domStorageName){try{// NOTE: just accessing "localStorage" or "window['localStorage']" may throw a security exception,
// so it must be inside the try/catch.
if(typeof window!=='undefined'&&typeof window[domStorageName]!=='undefined'){// Need to test cache. Just because it's here doesn't mean it works
var domStorage=window[domStorageName];domStorage.setItem('firebase:sentinel','cache');domStorage.removeItem('firebase:sentinel');return new DOMStorageWrapper(domStorage);}}catch(e){}// Failed to create wrapper.  Just return in-memory storage.
// TODO: log?
return new MemoryStorage();};/** A storage object that lasts across sessions */var PersistentStorage=createStoragefor('localStorage');/** A storage object that only lasts one session */var SessionStorage=createStoragefor('sessionStorage');/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var logClient=new Logger('@firebase/database');/**
 * Returns a locally-unique ID (generated by just incrementing up from 0 each time its called).
 */var LUIDGenerator=function(){var id=1;return function(){return id++;};}();/**
 * Sha1 hash of the input string
 * @param str - The string to hash
 * @returns {!string} The resulting hash
 */var sha1=function sha1(str){var utf8Bytes=stringToByteArray(str);var sha1=new Sha1();sha1.update(utf8Bytes);var sha1Bytes=sha1.digest();return base64.encodeByteArray(sha1Bytes);};var buildLogMessage_=function buildLogMessage_(){var message='';for(var i=0;i<arguments.length;i++){var arg=i<0||arguments.length<=i?undefined:arguments[i];if(Array.isArray(arg)||arg&&_typeof(arg)==='object'&&// eslint-disable-next-line @typescript-eslint/no-explicit-any
typeof arg.length==='number'){message+=buildLogMessage_.apply(null,arg);}else if(_typeof(arg)==='object'){message+=stringify(arg);}else {message+=arg;}message+=' ';}return message;};/**
 * Use this for all debug messages in Firebase.
 */var logger=null;/**
 * Flag to check for log availability on first log message
 */var firstLog_=true;/**
 * The implementation of Firebase.enableLogging (defined here to break dependencies)
 * @param logger_ - A flag to turn on logging, or a custom logger
 * @param persistent - Whether or not to persist logging settings across refreshes
 */var enableLogging$1=function enableLogging$1(logger_,persistent){assert(!persistent||logger_===true||logger_===false,"Can't turn on custom loggers persistently.");if(logger_===true){logClient.logLevel=LogLevel.VERBOSE;logger=logClient.log.bind(logClient);if(persistent){SessionStorage.set('logging_enabled',true);}}else if(typeof logger_==='function'){logger=logger_;}else {logger=null;SessionStorage.remove('logging_enabled');}};var log=function log(){if(firstLog_===true){firstLog_=false;if(logger===null&&SessionStorage.get('logging_enabled')===true){enableLogging$1(true);}}if(logger){for(var _len=arguments.length,varArgs=new Array(_len),_key2=0;_key2<_len;_key2++){varArgs[_key2]=arguments[_key2];}var message=buildLogMessage_.apply(null,varArgs);logger(message);}};var logWrapper=function logWrapper(prefix){return function(){for(var _len2=arguments.length,varArgs=new Array(_len2),_key3=0;_key3<_len2;_key3++){varArgs[_key3]=arguments[_key3];}log.apply(void 0,[prefix].concat(varArgs));};};var error=function error(){var message='FIREBASE INTERNAL ERROR: '+buildLogMessage_.apply(void 0,arguments);logClient.error(message);};var fatal=function fatal(){var message="FIREBASE FATAL ERROR: ".concat(buildLogMessage_.apply(void 0,arguments));logClient.error(message);throw new Error(message);};var warn=function warn(){var message='FIREBASE WARNING: '+buildLogMessage_.apply(void 0,arguments);logClient.warn(message);};/**
 * Logs a warning if the containing page uses https. Called when a call to new Firebase
 * does not use https.
 */var warnIfPageIsSecure=function warnIfPageIsSecure(){// Be very careful accessing browser globals. Who knows what may or may not exist.
if(typeof window!=='undefined'&&window.location&&window.location.protocol&&window.location.protocol.indexOf('https:')!==-1){warn('Insecure Firebase access from a secure page. '+'Please use https in calls to new Firebase().');}};/**
 * Returns true if data is NaN, or +/- Infinity.
 */var isInvalidJSONNumber=function isInvalidJSONNumber(data){return typeof data==='number'&&(data!==data||// NaN
data===Number.POSITIVE_INFINITY||data===Number.NEGATIVE_INFINITY);};var executeWhenDOMReady=function executeWhenDOMReady(fn){if(document.readyState==='complete'){fn();}else {// Modeled after jQuery. Try DOMContentLoaded and onreadystatechange (which
// fire before onload), but fall back to onload.
var called=false;var wrappedFn=function wrappedFn(){if(!document.body){setTimeout(wrappedFn,Math.floor(10));return;}if(!called){called=true;fn();}};if(document.addEventListener){document.addEventListener('DOMContentLoaded',wrappedFn,false);// fallback to onload.
window.addEventListener('load',wrappedFn,false);// eslint-disable-next-line @typescript-eslint/no-explicit-any
}else if(document.attachEvent){// IE.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
document.attachEvent('onreadystatechange',function(){if(document.readyState==='complete'){wrappedFn();}});// fallback to onload.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
window.attachEvent('onload',wrappedFn);// jQuery has an extra hack for IE that we could employ (based on
// http://javascript.nwbox.com/IEContentLoaded/) But it looks really old.
// I'm hoping we don't need it.
}}};/**
 * Minimum key name. Invalid for actual data, used as a marker to sort before any valid names
 */var MIN_NAME='[MIN_NAME]';/**
 * Maximum key name. Invalid for actual data, used as a marker to sort above any valid names
 */var MAX_NAME='[MAX_NAME]';/**
 * Compares valid Firebase key names, plus min and max name
 */var nameCompare=function nameCompare(a,b){if(a===b){return 0;}else if(a===MIN_NAME||b===MAX_NAME){return -1;}else if(b===MIN_NAME||a===MAX_NAME){return 1;}else {var aAsInt=tryParseInt(a),bAsInt=tryParseInt(b);if(aAsInt!==null){if(bAsInt!==null){return aAsInt-bAsInt===0?a.length-b.length:aAsInt-bAsInt;}else {return -1;}}else if(bAsInt!==null){return 1;}else {return a<b?-1:1;}}};/**
 * @returns {!number} comparison result.
 */var stringCompare=function stringCompare(a,b){if(a===b){return 0;}else if(a<b){return -1;}else {return 1;}};var requireKey=function requireKey(key,obj){if(obj&&key in obj){return obj[key];}else {throw new Error('Missing required key ('+key+') in object: '+stringify(obj));}};var ObjectToUniqueKey=function ObjectToUniqueKey(obj){if(_typeof(obj)!=='object'||obj===null){return stringify(obj);}var keys=[];// eslint-disable-next-line guard-for-in
for(var k in obj){keys.push(k);}// Export as json, but with the keys sorted.
keys.sort();var key='{';for(var i=0;i<keys.length;i++){if(i!==0){key+=',';}key+=stringify(keys[i]);key+=':';key+=ObjectToUniqueKey(obj[keys[i]]);}key+='}';return key;};/**
 * Splits a string into a number of smaller segments of maximum size
 * @param str - The string
 * @param segsize - The maximum number of chars in the string.
 * @returns The string, split into appropriately-sized chunks
 */var splitStringBySize=function splitStringBySize(str,segsize){var len=str.length;if(len<=segsize){return [str];}var dataSegs=[];for(var c=0;c<len;c+=segsize){if(c+segsize>len){dataSegs.push(str.substring(c,len));}else {dataSegs.push(str.substring(c,c+segsize));}}return dataSegs;};/**
 * Apply a function to each (key, value) pair in an object or
 * apply a function to each (index, value) pair in an array
 * @param obj - The object or array to iterate over
 * @param fn - The function to apply
 */function each(obj,fn){for(var key in obj){if(obj.hasOwnProperty(key)){fn(key,obj[key]);}}}/**
 * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
 * I made one modification at the end and removed the NaN / Infinity
 * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
 * @param v - A double
 *
 */var doubleToIEEE754String=function doubleToIEEE754String(v){assert(!isInvalidJSONNumber(v),'Invalid JSON number');// MJL
var ebits=11,fbits=52;var bias=(1<<ebits-1)-1;var s,e,f,ln,i;// Compute sign, exponent, fraction
// Skip NaN / Infinity handling --MJL.
if(v===0){e=0;f=0;s=1/v===-Infinity?1:0;}else {s=v<0;v=Math.abs(v);if(v>=Math.pow(2,1-bias)){// Normalized
ln=Math.min(Math.floor(Math.log(v)/Math.LN2),bias);e=ln+bias;f=Math.round(v*Math.pow(2,fbits-ln)-Math.pow(2,fbits));}else {// Denormalized
e=0;f=Math.round(v/Math.pow(2,1-bias-fbits));}}// Pack sign, exponent, fraction
var bits=[];for(i=fbits;i;i-=1){bits.push(f%2?1:0);f=Math.floor(f/2);}for(i=ebits;i;i-=1){bits.push(e%2?1:0);e=Math.floor(e/2);}bits.push(s?1:0);bits.reverse();var str=bits.join('');// Return the data as a hex string. --MJL
var hexByteString='';for(i=0;i<64;i+=8){var hexByte=parseInt(str.substr(i,8),2).toString(16);if(hexByte.length===1){hexByte='0'+hexByte;}hexByteString=hexByteString+hexByte;}return hexByteString.toLowerCase();};/**
 * Used to detect if we're in a Chrome content script (which executes in an
 * isolated environment where long-polling doesn't work).
 */var isChromeExtensionContentScript=function isChromeExtensionContentScript(){return !!((typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window['chrome']&&window['chrome']['extension']&&!/^chrome/.test(window.location.href));};/**
 * Used to detect if we're in a Windows 8 Store app.
 */var isWindowsStoreApp=function isWindowsStoreApp(){// Check for the presence of a couple WinRT globals
return (typeof Windows==="undefined"?"undefined":_typeof(Windows))==='object'&&_typeof(Windows.UI)==='object';};/**
 * Converts a server error code to a Javascript Error
 */function errorForServerCode(code,query){var reason='Unknown Error';if(code==='too_big'){reason='The data requested exceeds the maximum size '+'that can be accessed with a single request.';}else if(code==='permission_denied'){reason="Client doesn't have permission to access the desired data.";}else if(code==='unavailable'){reason='The service is unavailable';}var error=new Error(code+' at '+query._path.toString()+': '+reason);// eslint-disable-next-line @typescript-eslint/no-explicit-any
error.code=code.toUpperCase();return error;}/**
 * Used to test for integer-looking strings
 */var INTEGER_REGEXP_=new RegExp('^-?(0*)\\d{1,10}$');/**
 * For use in keys, the minimum possible 32-bit integer.
 */var INTEGER_32_MIN=-2147483648;/**
 * For use in kyes, the maximum possible 32-bit integer.
 */var INTEGER_32_MAX=2147483647;/**
 * If the string contains a 32-bit integer, return it.  Else return null.
 */var tryParseInt=function tryParseInt(str){if(INTEGER_REGEXP_.test(str)){var intVal=Number(str);if(intVal>=INTEGER_32_MIN&&intVal<=INTEGER_32_MAX){return intVal;}}return null;};/**
 * Helper to run some code but catch any exceptions and re-throw them later.
 * Useful for preventing user callbacks from breaking internal code.
 *
 * Re-throwing the exception from a setTimeout is a little evil, but it's very
 * convenient (we don't have to try to figure out when is a safe point to
 * re-throw it), and the behavior seems reasonable:
 *
 * * If you aren't pausing on exceptions, you get an error in the console with
 *   the correct stack trace.
 * * If you're pausing on all exceptions, the debugger will pause on your
 *   exception and then again when we rethrow it.
 * * If you're only pausing on uncaught exceptions, the debugger will only pause
 *   on us re-throwing it.
 *
 * @param fn - The code to guard.
 */var exceptionGuard=function exceptionGuard(fn){try{fn();}catch(e){// Re-throw exception when it's safe.
setTimeout(function(){// It used to be that "throw e" would result in a good console error with
// relevant context, but as of Chrome 39, you just get the firebase.js
// file/line number where we re-throw it, which is useless. So we log
// e.stack explicitly.
var stack=e.stack||'';warn('Exception was thrown by user callback.',stack);throw e;},Math.floor(0));}};/**
 * @returns {boolean} true if we think we're currently being crawled.
 */var beingCrawled=function beingCrawled(){var userAgent=(typeof window==="undefined"?"undefined":_typeof(window))==='object'&&window['navigator']&&window['navigator']['userAgent']||'';// For now we whitelist the most popular crawlers.  We should refine this to be the set of crawlers we
// believe to support JavaScript/AJAX rendering.
// NOTE: Google Webmaster Tools doesn't really belong, but their "This is how a visitor to your website
// would have seen the page" is flaky if we don't treat it as a crawler.
return userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0;};/**
 * Same as setTimeout() except on Node.JS it will /not/ prevent the process from exiting.
 *
 * It is removed with clearTimeout() as normal.
 *
 * @param fn - Function to run.
 * @param time - Milliseconds to wait before running.
 * @returns The setTimeout() return value.
 */var setTimeoutNonBlocking=function setTimeoutNonBlocking(fn,time){var timeout=setTimeout(fn,time);// eslint-disable-next-line @typescript-eslint/no-explicit-any
if(_typeof(timeout)==='object'&&timeout['unref']){// eslint-disable-next-line @typescript-eslint/no-explicit-any
timeout['unref']();}return timeout;};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Abstraction around AppCheck's token fetching capabilities.
 */var AppCheckTokenProvider=/*#__PURE__*/function(){function AppCheckTokenProvider(appName_,appCheckProvider){var _this=this;_classCallCheck(this,AppCheckTokenProvider);this.appName_=appName_;this.appCheckProvider=appCheckProvider;this.appCheck=appCheckProvider===null||appCheckProvider===void 0?void 0:appCheckProvider.getImmediate({optional:true});if(!this.appCheck){appCheckProvider===null||appCheckProvider===void 0?void 0:appCheckProvider.get().then(function(appCheck){return _this.appCheck=appCheck;});}}_createClass(AppCheckTokenProvider,[{key:"getToken",value:function getToken(forceRefresh){var _this2=this;if(!this.appCheck){return new Promise(function(resolve,reject){// Support delayed initialization of FirebaseAppCheck. This allows our
// customers to initialize the RTDB SDK before initializing Firebase
// AppCheck and ensures that all requests are authenticated if a token
// becomes available before the timoeout below expires.
setTimeout(function(){if(_this2.appCheck){_this2.getToken(forceRefresh).then(resolve,reject);}else {resolve(null);}},0);});}return this.appCheck.getToken(forceRefresh);}},{key:"addTokenChangeListener",value:function addTokenChangeListener(listener){var _a;(_a=this.appCheckProvider)===null||_a===void 0?void 0:_a.get().then(function(appCheck){return appCheck.addTokenListener(listener);});}},{key:"notifyForInvalidToken",value:function notifyForInvalidToken(){warn("Provided AppCheck credentials for the app named \"".concat(this.appName_,"\" ")+'are invalid. This usually indicates your app was not initialized correctly.');}}]);return AppCheckTokenProvider;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Abstraction around FirebaseApp's token fetching capabilities.
 */var FirebaseAuthTokenProvider=/*#__PURE__*/function(){function FirebaseAuthTokenProvider(appName_,firebaseOptions_,authProvider_){var _this3=this;_classCallCheck(this,FirebaseAuthTokenProvider);this.appName_=appName_;this.firebaseOptions_=firebaseOptions_;this.authProvider_=authProvider_;this.auth_=null;this.auth_=authProvider_.getImmediate({optional:true});if(!this.auth_){authProvider_.onInit(function(auth){return _this3.auth_=auth;});}}_createClass(FirebaseAuthTokenProvider,[{key:"getToken",value:function getToken(forceRefresh){var _this4=this;if(!this.auth_){return new Promise(function(resolve,reject){// Support delayed initialization of FirebaseAuth. This allows our
// customers to initialize the RTDB SDK before initializing Firebase
// Auth and ensures that all requests are authenticated if a token
// becomes available before the timoeout below expires.
setTimeout(function(){if(_this4.auth_){_this4.getToken(forceRefresh).then(resolve,reject);}else {resolve(null);}},0);});}return this.auth_.getToken(forceRefresh)["catch"](function(error){// TODO: Need to figure out all the cases this is raised and whether
// this makes sense.
if(error&&error.code==='auth/token-not-initialized'){log('Got auth/token-not-initialized error.  Treating as null token.');return null;}else {return Promise.reject(error);}});}},{key:"addTokenChangeListener",value:function addTokenChangeListener(listener){// TODO: We might want to wrap the listener and call it with no args to
// avoid a leaky abstraction, but that makes removing the listener harder.
if(this.auth_){this.auth_.addAuthTokenListener(listener);}else {this.authProvider_.get().then(function(auth){return auth.addAuthTokenListener(listener);});}}},{key:"removeTokenChangeListener",value:function removeTokenChangeListener(listener){this.authProvider_.get().then(function(auth){return auth.removeAuthTokenListener(listener);});}},{key:"notifyForInvalidToken",value:function notifyForInvalidToken(){var errorMessage='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not '+'initialized correctly. ';if('credential'in this.firebaseOptions_){errorMessage+='Make sure the "credential" property provided to initializeApp() '+'is authorized to access the specified "databaseURL" and is from the correct '+'project.';}else if('serviceAccount'in this.firebaseOptions_){errorMessage+='Make sure the "serviceAccount" property provided to initializeApp() '+'is authorized to access the specified "databaseURL" and is from the correct '+'project.';}else {errorMessage+='Make sure the "apiKey" and "databaseURL" properties provided to '+'initializeApp() match the values provided for your app at '+'https://console.firebase.google.com/.';}warn(errorMessage);}}]);return FirebaseAuthTokenProvider;}();/* AuthTokenProvider that supplies a constant token. Used by Admin SDK or mockUserToken with emulators. */var EmulatorTokenProvider=/*#__PURE__*/function(){function EmulatorTokenProvider(accessToken){_classCallCheck(this,EmulatorTokenProvider);this.accessToken=accessToken;}_createClass(EmulatorTokenProvider,[{key:"getToken",value:function getToken(forceRefresh){return Promise.resolve({accessToken:this.accessToken});}},{key:"addTokenChangeListener",value:function addTokenChangeListener(listener){// Invoke the listener immediately to match the behavior in Firebase Auth
// (see packages/auth/src/auth.js#L1807)
listener(this.accessToken);}},{key:"removeTokenChangeListener",value:function removeTokenChangeListener(listener){}},{key:"notifyForInvalidToken",value:function notifyForInvalidToken(){}}]);return EmulatorTokenProvider;}();/** A string that is treated as an admin access token by the RTDB emulator. Used by Admin SDK. */EmulatorTokenProvider.OWNER='owner';/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var PROTOCOL_VERSION='5';var VERSION_PARAM='v';var TRANSPORT_SESSION_PARAM='s';var REFERER_PARAM='r';var FORGE_REF='f';// Matches console.firebase.google.com, firebase-console-*.corp.google.com and
// firebase.corp.google.com
var FORGE_DOMAIN_RE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;var LAST_SESSION_PARAM='ls';var APPLICATION_ID_PARAM='p';var APP_CHECK_TOKEN_PARAM='ac';var WEBSOCKET='websocket';var LONG_POLLING='long_polling';/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A class that holds metadata about a Repo object
 */var RepoInfo=/*#__PURE__*/function(){/**
     * @param host - Hostname portion of the url for the repo
     * @param secure - Whether or not this repo is accessed over ssl
     * @param namespace - The namespace represented by the repo
     * @param webSocketOnly - Whether to prefer websockets over all other transports (used by Nest).
     * @param nodeAdmin - Whether this instance uses Admin SDK credentials
     * @param persistenceKey - Override the default session persistence storage key
     */function RepoInfo(host,secure,namespace,webSocketOnly){var nodeAdmin=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var persistenceKey=arguments.length>5&&arguments[5]!==undefined?arguments[5]:'';var includeNamespaceInQueryParams=arguments.length>6&&arguments[6]!==undefined?arguments[6]:false;_classCallCheck(this,RepoInfo);this.secure=secure;this.namespace=namespace;this.webSocketOnly=webSocketOnly;this.nodeAdmin=nodeAdmin;this.persistenceKey=persistenceKey;this.includeNamespaceInQueryParams=includeNamespaceInQueryParams;this._host=host.toLowerCase();this._domain=this._host.substr(this._host.indexOf('.')+1);this.internalHost=PersistentStorage.get('host:'+host)||this._host;}_createClass(RepoInfo,[{key:"isCacheableHost",value:function isCacheableHost(){return this.internalHost.substr(0,2)==='s-';}},{key:"isCustomHost",value:function isCustomHost(){return this._domain!=='firebaseio.com'&&this._domain!=='firebaseio-demo.com';}},{key:"host",get:function get(){return this._host;},set:function set(newHost){if(newHost!==this.internalHost){this.internalHost=newHost;if(this.isCacheableHost()){PersistentStorage.set('host:'+this._host,this.internalHost);}}}},{key:"toString",value:function toString(){var str=this.toURLString();if(this.persistenceKey){str+='<'+this.persistenceKey+'>';}return str;}},{key:"toURLString",value:function toURLString(){var protocol=this.secure?'https://':'http://';var query=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):'';return "".concat(protocol).concat(this.host,"/").concat(query);}}]);return RepoInfo;}();function repoInfoNeedsQueryParam(repoInfo){return repoInfo.host!==repoInfo.internalHost||repoInfo.isCustomHost()||repoInfo.includeNamespaceInQueryParams;}/**
 * Returns the websocket URL for this repo
 * @param repoInfo - RepoInfo object
 * @param type - of connection
 * @param params - list
 * @returns The URL for this repo
 */function repoInfoConnectionURL(repoInfo,type,params){assert(typeof type==='string','typeof type must == string');assert(_typeof(params)==='object','typeof params must == object');var connURL;if(type===WEBSOCKET){connURL=(repoInfo.secure?'wss://':'ws://')+repoInfo.internalHost+'/.ws?';}else if(type===LONG_POLLING){connURL=(repoInfo.secure?'https://':'http://')+repoInfo.internalHost+'/.lp?';}else {throw new Error('Unknown connection type: '+type);}if(repoInfoNeedsQueryParam(repoInfo)){params['ns']=repoInfo.namespace;}var pairs=[];each(params,function(key,value){pairs.push(key+'='+value);});return connURL+pairs.join('&');}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Tracks a collection of stats.
 */var StatsCollection=/*#__PURE__*/function(){function StatsCollection(){_classCallCheck(this,StatsCollection);this.counters_={};}_createClass(StatsCollection,[{key:"incrementCounter",value:function incrementCounter(name){var amount=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;if(!contains(this.counters_,name)){this.counters_[name]=0;}this.counters_[name]+=amount;}},{key:"get",value:function get(){return deepCopy(this.counters_);}}]);return StatsCollection;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var collections={};var reporters={};function statsManagerGetCollection(repoInfo){var hashString=repoInfo.toString();if(!collections[hashString]){collections[hashString]=new StatsCollection();}return collections[hashString];}function statsManagerGetOrCreateReporter(repoInfo,creatorFunction){var hashString=repoInfo.toString();if(!reporters[hashString]){reporters[hashString]=creatorFunction();}return reporters[hashString];}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class ensures the packets from the server arrive in order
 * This class takes data from the server and ensures it gets passed into the callbacks in order.
 */var PacketReceiver=/*#__PURE__*/function(){/**
     * @param onMessage_
     */function PacketReceiver(onMessage_){_classCallCheck(this,PacketReceiver);this.onMessage_=onMessage_;this.pendingResponses=[];this.currentResponseNum=0;this.closeAfterResponse=-1;this.onClose=null;}_createClass(PacketReceiver,[{key:"closeAfter",value:function closeAfter(responseNum,callback){this.closeAfterResponse=responseNum;this.onClose=callback;if(this.closeAfterResponse<this.currentResponseNum){this.onClose();this.onClose=null;}}/**
     * Each message from the server comes with a response number, and an array of data. The responseNumber
     * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
     * browsers will respond in the same order as the requests we sent
     */},{key:"handleResponse",value:function handleResponse(requestNum,data){var _this5=this;this.pendingResponses[requestNum]=data;var _loop=function _loop(){var toProcess=_this5.pendingResponses[_this5.currentResponseNum];delete _this5.pendingResponses[_this5.currentResponseNum];var _loop2=function _loop2(i){if(toProcess[i]){exceptionGuard(function(){_this5.onMessage_(toProcess[i]);});}};for(var i=0;i<toProcess.length;++i){_loop2(i);}if(_this5.currentResponseNum===_this5.closeAfterResponse){if(_this5.onClose){_this5.onClose();_this5.onClose=null;}return "break";}_this5.currentResponseNum++;};while(this.pendingResponses[this.currentResponseNum]){var _ret=_loop();if(_ret==="break")break;}}}]);return PacketReceiver;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // URL query parameters associated with longpolling
var FIREBASE_LONGPOLL_START_PARAM='start';var FIREBASE_LONGPOLL_CLOSE_COMMAND='close';var FIREBASE_LONGPOLL_COMMAND_CB_NAME='pLPCommand';var FIREBASE_LONGPOLL_DATA_CB_NAME='pRTLPCB';var FIREBASE_LONGPOLL_ID_PARAM='id';var FIREBASE_LONGPOLL_PW_PARAM='pw';var FIREBASE_LONGPOLL_SERIAL_PARAM='ser';var FIREBASE_LONGPOLL_CALLBACK_ID_PARAM='cb';var FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM='seg';var FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET='ts';var FIREBASE_LONGPOLL_DATA_PARAM='d';var FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM='dframe';//Data size constants.
//TODO: Perf: the maximum length actually differs from browser to browser.
// We should check what browser we're on and set accordingly.
var MAX_URL_DATA_SIZE=1870;var SEG_HEADER_SIZE=30;//ie: &seg=8299234&ts=982389123&d=
var MAX_PAYLOAD_SIZE=MAX_URL_DATA_SIZE-SEG_HEADER_SIZE;/**
 * Keepalive period
 * send a fresh request at minimum every 25 seconds. Opera has a maximum request
 * length of 30 seconds that we can't exceed.
 */var KEEPALIVE_REQUEST_INTERVAL=25000;/**
 * How long to wait before aborting a long-polling connection attempt.
 */var LP_CONNECT_TIMEOUT=30000;/**
 * This class manages a single long-polling connection.
 */var BrowserPollConnection=/*#__PURE__*/function(){/**
     * @param connId An identifier for this connection, used for logging
     * @param repoInfo The info for the endpoint to send data to.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The AppCheck token for this client.
     * @param authToken The AuthToken to use for this connection.
     * @param transportSessionId Optional transportSessionid if we are
     * reconnecting for an existing transport session
     * @param lastSessionId Optional lastSessionId if the PersistentConnection has
     * already created a connection previously
     */function BrowserPollConnection(connId,repoInfo,applicationId,appCheckToken,authToken,transportSessionId,lastSessionId){var _this6=this;_classCallCheck(this,BrowserPollConnection);this.connId=connId;this.repoInfo=repoInfo;this.applicationId=applicationId;this.appCheckToken=appCheckToken;this.authToken=authToken;this.transportSessionId=transportSessionId;this.lastSessionId=lastSessionId;this.bytesSent=0;this.bytesReceived=0;this.everConnected_=false;this.log_=logWrapper(connId);this.stats_=statsManagerGetCollection(repoInfo);this.urlFn=function(params){// Always add the token if we have one.
if(_this6.appCheckToken){params[APP_CHECK_TOKEN_PARAM]=_this6.appCheckToken;}return repoInfoConnectionURL(repoInfo,LONG_POLLING,params);};}/**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */_createClass(BrowserPollConnection,[{key:"open",value:function open(onMessage,onDisconnect){var _this7=this;this.curSegmentNum=0;this.onDisconnect_=onDisconnect;this.myPacketOrderer=new PacketReceiver(onMessage);this.isClosed_=false;this.connectTimeoutTimer_=setTimeout(function(){_this7.log_('Timed out trying to connect.');// Make sure we clear the host cache
_this7.onClosed_();_this7.connectTimeoutTimer_=null;// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(LP_CONNECT_TIMEOUT));// Ensure we delay the creation of the iframe until the DOM is loaded.
executeWhenDOMReady(function(){if(_this7.isClosed_){return;}//Set up a callback that gets triggered once a connection is set up.
_this7.scriptTagHolder=new FirebaseIFrameScriptHolder(function(){for(var _len3=arguments.length,args=new Array(_len3),_key4=0;_key4<_len3;_key4++){args[_key4]=arguments[_key4];}var command=args[0],arg1=args[1],arg2=args[2];args[3];args[4];_this7.incrementIncomingBytes_(args);if(!_this7.scriptTagHolder){return;// we closed the connection.
}if(_this7.connectTimeoutTimer_){clearTimeout(_this7.connectTimeoutTimer_);_this7.connectTimeoutTimer_=null;}_this7.everConnected_=true;if(command===FIREBASE_LONGPOLL_START_PARAM){_this7.id=arg1;_this7.password=arg2;}else if(command===FIREBASE_LONGPOLL_CLOSE_COMMAND){// Don't clear the host cache. We got a response from the server, so we know it's reachable
if(arg1){// We aren't expecting any more data (other than what the server's already in the process of sending us
// through our already open polls), so don't send any more.
_this7.scriptTagHolder.sendNewPolls=false;// arg1 in this case is the last response number sent by the server. We should try to receive
// all of the responses up to this one before closing
_this7.myPacketOrderer.closeAfter(arg1,function(){_this7.onClosed_();});}else {_this7.onClosed_();}}else {throw new Error('Unrecognized command received: '+command);}},function(){for(var _len4=arguments.length,args=new Array(_len4),_key5=0;_key5<_len4;_key5++){args[_key5]=arguments[_key5];}var pN=args[0],data=args[1];_this7.incrementIncomingBytes_(args);_this7.myPacketOrderer.handleResponse(pN,data);},function(){_this7.onClosed_();},_this7.urlFn);//Send the initial request to connect. The serial number is simply to keep the browser from pulling previous results
//from cache.
var urlParams={};urlParams[FIREBASE_LONGPOLL_START_PARAM]='t';urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM]=Math.floor(Math.random()*100000000);if(_this7.scriptTagHolder.uniqueCallbackIdentifier){urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM]=_this7.scriptTagHolder.uniqueCallbackIdentifier;}urlParams[VERSION_PARAM]=PROTOCOL_VERSION;if(_this7.transportSessionId){urlParams[TRANSPORT_SESSION_PARAM]=_this7.transportSessionId;}if(_this7.lastSessionId){urlParams[LAST_SESSION_PARAM]=_this7.lastSessionId;}if(_this7.applicationId){urlParams[APPLICATION_ID_PARAM]=_this7.applicationId;}if(_this7.appCheckToken){urlParams[APP_CHECK_TOKEN_PARAM]=_this7.appCheckToken;}if(typeof location!=='undefined'&&location.hostname&&FORGE_DOMAIN_RE.test(location.hostname)){urlParams[REFERER_PARAM]=FORGE_REF;}var connectURL=_this7.urlFn(urlParams);_this7.log_('Connecting via long-poll to '+connectURL);_this7.scriptTagHolder.addTag(connectURL,function(){/* do nothing */});});}/**
     * Call this when a handshake has completed successfully and we want to consider the connection established
     */},{key:"start",value:function start(){this.scriptTagHolder.startLongPoll(this.id,this.password);this.addDisconnectPingFrame(this.id,this.password);}/**
     * Forces long polling to be considered as a potential transport
     */},{key:"markConnectionHealthy",value:/**
     * No-op for polling
     */function markConnectionHealthy(){}/**
     * Stops polling and cleans up the iframe
     */},{key:"shutdown_",value:function shutdown_(){this.isClosed_=true;if(this.scriptTagHolder){this.scriptTagHolder.close();this.scriptTagHolder=null;}//remove the disconnect frame, which will trigger an XHR call to the server to tell it we're leaving.
if(this.myDisconnFrame){document.body.removeChild(this.myDisconnFrame);this.myDisconnFrame=null;}if(this.connectTimeoutTimer_){clearTimeout(this.connectTimeoutTimer_);this.connectTimeoutTimer_=null;}}/**
     * Triggered when this transport is closed
     */},{key:"onClosed_",value:function onClosed_(){if(!this.isClosed_){this.log_('Longpoll is closing itself');this.shutdown_();if(this.onDisconnect_){this.onDisconnect_(this.everConnected_);this.onDisconnect_=null;}}}/**
     * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
     * that we've left.
     */},{key:"close",value:function close(){if(!this.isClosed_){this.log_('Longpoll is being closed.');this.shutdown_();}}/**
     * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
     * broken into chunks (since URLs have a small maximum length).
     * @param data - The JSON data to transmit.
     */},{key:"send",value:function send(data){var dataStr=stringify(data);this.bytesSent+=dataStr.length;this.stats_.incrementCounter('bytes_sent',dataStr.length);//first, lets get the base64-encoded data
var base64data=base64Encode(dataStr);//We can only fit a certain amount in each URL, so we need to split this request
//up into multiple pieces if it doesn't fit in one request.
var dataSegs=splitStringBySize(base64data,MAX_PAYLOAD_SIZE);//Enqueue each segment for transmission. We assign each chunk a sequential ID and a total number
//of segments so that we can reassemble the packet on the server.
for(var i=0;i<dataSegs.length;i++){this.scriptTagHolder.enqueueSegment(this.curSegmentNum,dataSegs.length,dataSegs[i]);this.curSegmentNum++;}}/**
     * This is how we notify the server that we're leaving.
     * We aren't able to send requests with DHTML on a window close event, but we can
     * trigger XHR requests in some browsers (everything but Opera basically).
     */},{key:"addDisconnectPingFrame",value:function addDisconnectPingFrame(id,pw){this.myDisconnFrame=document.createElement('iframe');var urlParams={};urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM]='t';urlParams[FIREBASE_LONGPOLL_ID_PARAM]=id;urlParams[FIREBASE_LONGPOLL_PW_PARAM]=pw;this.myDisconnFrame.src=this.urlFn(urlParams);this.myDisconnFrame.style.display='none';document.body.appendChild(this.myDisconnFrame);}/**
     * Used to track the bytes received by this client
     */},{key:"incrementIncomingBytes_",value:function incrementIncomingBytes_(args){// TODO: This is an annoying perf hit just to track the number of incoming bytes.  Maybe it should be opt-in.
var bytesReceived=stringify(args).length;this.bytesReceived+=bytesReceived;this.stats_.incrementCounter('bytes_received',bytesReceived);}}],[{key:"forceAllow",value:function forceAllow(){BrowserPollConnection.forceAllow_=true;}/**
     * Forces longpolling to not be considered as a potential transport
     */},{key:"forceDisallow",value:function forceDisallow(){BrowserPollConnection.forceDisallow_=true;}// Static method, use string literal so it can be accessed in a generic way
},{key:"isAvailable",value:function isAvailable(){if(BrowserPollConnection.forceAllow_){return true;}else {// NOTE: In React-Native there's normally no 'document', but if you debug a React-Native app in
// the Chrome debugger, 'document' is defined, but document.createElement is null (2015/06/08).
return !BrowserPollConnection.forceDisallow_&&typeof document!=='undefined'&&document.createElement!=null&&!isChromeExtensionContentScript()&&!isWindowsStoreApp();}}}]);return BrowserPollConnection;}();/*********************************************************************************************
 * A wrapper around an iframe that is used as a long-polling script holder.
 *********************************************************************************************/var FirebaseIFrameScriptHolder=/*#__PURE__*/function(){/**
     * @param commandCB - The callback to be called when control commands are recevied from the server.
     * @param onMessageCB - The callback to be triggered when responses arrive from the server.
     * @param onDisconnect - The callback to be triggered when this tag holder is closed
     * @param urlFn - A function that provides the URL of the endpoint to send data to.
     */function FirebaseIFrameScriptHolder(commandCB,onMessageCB,onDisconnect,urlFn){_classCallCheck(this,FirebaseIFrameScriptHolder);this.onDisconnect=onDisconnect;this.urlFn=urlFn;//We maintain a count of all of the outstanding requests, because if we have too many active at once it can cause
//problems in some browsers.
this.outstandingRequests=new Set();//A queue of the pending segments waiting for transmission to the server.
this.pendingSegs=[];//A serial number. We use this for two things:
// 1) A way to ensure the browser doesn't cache responses to polls
// 2) A way to make the server aware when long-polls arrive in a different order than we started them. The
//    server needs to release both polls in this case or it will cause problems in Opera since Opera can only execute
//    JSONP code in the order it was added to the iframe.
this.currentSerial=Math.floor(Math.random()*100000000);// This gets set to false when we're "closing down" the connection (e.g. we're switching transports but there's still
// incoming data from the server that we're waiting for).
this.sendNewPolls=true;{//Each script holder registers a couple of uniquely named callbacks with the window. These are called from the
//iframes where we put the long-polling script tags. We have two callbacks:
//   1) Command Callback - Triggered for control issues, like starting a connection.
//   2) Message Callback - Triggered when new data arrives.
this.uniqueCallbackIdentifier=LUIDGenerator();window[FIREBASE_LONGPOLL_COMMAND_CB_NAME+this.uniqueCallbackIdentifier]=commandCB;window[FIREBASE_LONGPOLL_DATA_CB_NAME+this.uniqueCallbackIdentifier]=onMessageCB;//Create an iframe for us to add script tags to.
this.myIFrame=FirebaseIFrameScriptHolder.createIFrame_();// Set the iframe's contents.
var script='';// if we set a javascript url, it's IE and we need to set the document domain. The javascript url is sufficient
// for ie9, but ie8 needs to do it again in the document itself.
if(this.myIFrame.src&&this.myIFrame.src.substr(0,'javascript:'.length)==='javascript:'){var currentDomain=document.domain;script='<script>document.domain="'+currentDomain+'";</script>';}var iframeContents='<html><body>'+script+'</body></html>';try{this.myIFrame.doc.open();this.myIFrame.doc.write(iframeContents);this.myIFrame.doc.close();}catch(e){log('frame writing exception');if(e.stack){log(e.stack);}log(e);}}}/**
     * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
     * actually use.
     */_createClass(FirebaseIFrameScriptHolder,[{key:"close",value:/**
     * Cancel all outstanding queries and remove the frame.
     */function close(){var _this8=this;//Mark this iframe as dead, so no new requests are sent.
this.alive=false;if(this.myIFrame){//We have to actually remove all of the html inside this iframe before removing it from the
//window, or IE will continue loading and executing the script tags we've already added, which
//can lead to some errors being thrown. Setting innerHTML seems to be the easiest way to do this.
this.myIFrame.doc.body.innerHTML='';setTimeout(function(){if(_this8.myIFrame!==null){document.body.removeChild(_this8.myIFrame);_this8.myIFrame=null;}},Math.floor(0));}// Protect from being called recursively.
var onDisconnect=this.onDisconnect;if(onDisconnect){this.onDisconnect=null;onDisconnect();}}/**
     * Actually start the long-polling session by adding the first script tag(s) to the iframe.
     * @param id - The ID of this connection
     * @param pw - The password for this connection
     */},{key:"startLongPoll",value:function startLongPoll(id,pw){this.myID=id;this.myPW=pw;this.alive=true;//send the initial request. If there are requests queued, make sure that we transmit as many as we are currently able to.
while(this.newRequest_()){}}/**
     * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
     * too many outstanding requests and we are still alive.
     *
     * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
     * needed.
     */},{key:"newRequest_",value:function newRequest_(){// We keep one outstanding request open all the time to receive data, but if we need to send data
// (pendingSegs.length > 0) then we create a new request to send the data.  The server will automatically
// close the old request.
if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){//construct our url
this.currentSerial++;var urlParams={};urlParams[FIREBASE_LONGPOLL_ID_PARAM]=this.myID;urlParams[FIREBASE_LONGPOLL_PW_PARAM]=this.myPW;urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM]=this.currentSerial;var theURL=this.urlFn(urlParams);//Now add as much data as we can.
var curDataString='';var i=0;while(this.pendingSegs.length>0){//first, lets see if the next segment will fit.
var nextSeg=this.pendingSegs[0];if(nextSeg.d.length+SEG_HEADER_SIZE+curDataString.length<=MAX_URL_DATA_SIZE){//great, the segment will fit. Lets append it.
var theSeg=this.pendingSegs.shift();curDataString=curDataString+'&'+FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM+i+'='+theSeg.seg+'&'+FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET+i+'='+theSeg.ts+'&'+FIREBASE_LONGPOLL_DATA_PARAM+i+'='+theSeg.d;i++;}else {break;}}theURL=theURL+curDataString;this.addLongPollTag_(theURL,this.currentSerial);return true;}else {return false;}}/**
     * Queue a packet for transmission to the server.
     * @param segnum - A sequential id for this packet segment used for reassembly
     * @param totalsegs - The total number of segments in this packet
     * @param data - The data for this segment.
     */},{key:"enqueueSegment",value:function enqueueSegment(segnum,totalsegs,data){//add this to the queue of segments to send.
this.pendingSegs.push({seg:segnum,ts:totalsegs,d:data});//send the data immediately if there isn't already data being transmitted, unless
//startLongPoll hasn't been called yet.
if(this.alive){this.newRequest_();}}/**
     * Add a script tag for a regular long-poll request.
     * @param url - The URL of the script tag.
     * @param serial - The serial number of the request.
     */},{key:"addLongPollTag_",value:function addLongPollTag_(url,serial){var _this9=this;//remember that we sent this request.
this.outstandingRequests.add(serial);var doNewRequest=function doNewRequest(){_this9.outstandingRequests["delete"](serial);_this9.newRequest_();};// If this request doesn't return on its own accord (by the server sending us some data), we'll
// create a new one after the KEEPALIVE interval to make sure we always keep a fresh request open.
var keepaliveTimeout=setTimeout(doNewRequest,Math.floor(KEEPALIVE_REQUEST_INTERVAL));var readyStateCB=function readyStateCB(){// Request completed.  Cancel the keepalive.
clearTimeout(keepaliveTimeout);// Trigger a new request so we can continue receiving data.
doNewRequest();};this.addTag(url,readyStateCB);}/**
     * Add an arbitrary script tag to the iframe.
     * @param url - The URL for the script tag source.
     * @param loadCB - A callback to be triggered once the script has loaded.
     */},{key:"addTag",value:function addTag(url,loadCB){var _this10=this;{setTimeout(function(){try{// if we're already closed, don't add this poll
if(!_this10.sendNewPolls){return;}var newScript=_this10.myIFrame.doc.createElement('script');newScript.type='text/javascript';newScript.async=true;newScript.src=url;// eslint-disable-next-line @typescript-eslint/no-explicit-any
newScript.onload=newScript.onreadystatechange=function(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
var rstate=newScript.readyState;if(!rstate||rstate==='loaded'||rstate==='complete'){// eslint-disable-next-line @typescript-eslint/no-explicit-any
newScript.onload=newScript.onreadystatechange=null;if(newScript.parentNode){newScript.parentNode.removeChild(newScript);}loadCB();}};newScript.onerror=function(){log('Long-poll script failed to load: '+url);_this10.sendNewPolls=false;_this10.close();};_this10.myIFrame.doc.body.appendChild(newScript);}catch(e){// TODO: we should make this error visible somehow
}},Math.floor(1));}}}],[{key:"createIFrame_",value:function createIFrame_(){var iframe=document.createElement('iframe');iframe.style.display='none';// This is necessary in order to initialize the document inside the iframe
if(document.body){document.body.appendChild(iframe);try{// If document.domain has been modified in IE, this will throw an error, and we need to set the
// domain of the iframe's document manually. We can do this via a javascript: url as the src attribute
// Also note that we must do this *after* the iframe has been appended to the page. Otherwise it doesn't work.
var a=iframe.contentWindow.document;if(!a){// Apologies for the log-spam, I need to do something to keep closure from optimizing out the assignment above.
log('No IE domain setting required');}}catch(e){var domain=document.domain;iframe.src="javascript:void((function(){document.open();document.domain='"+domain+"';document.close();})())";}}else {// LongPollConnection attempts to delay initialization until the document is ready, so hopefully this
// never gets hit.
throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';}// Get the document of the iframe in a browser-specific way.
if(iframe.contentDocument){iframe.doc=iframe.contentDocument;// Firefox, Opera, Safari
}else if(iframe.contentWindow){iframe.doc=iframe.contentWindow.document;// Internet Explorer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}else if(iframe.document){// eslint-disable-next-line @typescript-eslint/no-explicit-any
iframe.doc=iframe.document;//others?
}return iframe;}}]);return FirebaseIFrameScriptHolder;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var WEBSOCKET_MAX_FRAME_SIZE=16384;var WEBSOCKET_KEEPALIVE_INTERVAL=45000;var WebSocketImpl=null;if(typeof MozWebSocket!=='undefined'){WebSocketImpl=MozWebSocket;}else if(typeof WebSocket!=='undefined'){WebSocketImpl=WebSocket;}/**
 * Create a new websocket connection with the given callbacks.
 */var WebSocketConnection=/*#__PURE__*/function(){/**
     * @param connId identifier for this transport
     * @param repoInfo The info for the websocket endpoint.
     * @param applicationId The Firebase App ID for this project.
     * @param appCheckToken The App Check Token for this client.
     * @param authToken The Auth Token for this client.
     * @param transportSessionId Optional transportSessionId if this is connecting
     * to an existing transport session
     * @param lastSessionId Optional lastSessionId if there was a previous
     * connection
     */function WebSocketConnection(connId,repoInfo,applicationId,appCheckToken,authToken,transportSessionId,lastSessionId){_classCallCheck(this,WebSocketConnection);this.connId=connId;this.applicationId=applicationId;this.appCheckToken=appCheckToken;this.authToken=authToken;this.keepaliveTimer=null;this.frames=null;this.totalFrames=0;this.bytesSent=0;this.bytesReceived=0;this.log_=logWrapper(this.connId);this.stats_=statsManagerGetCollection(repoInfo);this.connURL=WebSocketConnection.connectionURL_(repoInfo,transportSessionId,lastSessionId,appCheckToken);this.nodeAdmin=repoInfo.nodeAdmin;}/**
     * @param repoInfo - The info for the websocket endpoint.
     * @param transportSessionId - Optional transportSessionId if this is connecting to an existing transport
     *                                         session
     * @param lastSessionId - Optional lastSessionId if there was a previous connection
     * @returns connection url
     */_createClass(WebSocketConnection,[{key:"open",value:/**
     * @param onMessage - Callback when messages arrive
     * @param onDisconnect - Callback with connection lost.
     */function open(onMessage,onDisconnect){var _this11=this;this.onDisconnect=onDisconnect;this.onMessage=onMessage;this.log_('Websocket connecting to '+this.connURL);this.everConnected_=false;// Assume failure until proven otherwise.
PersistentStorage.set('previous_websocket_failure',true);try{var device, options, env, proxy; if(isNodeSdk());else {var _options={headers:{'X-Firebase-GMPID':this.applicationId||'','X-Firebase-AppCheck':this.appCheckToken||''}};this.mySock=new WebSocketImpl(this.connURL,[],_options);}}catch(e){this.log_('Error instantiating WebSocket.');var _error=e.message||e.data;if(_error){this.log_(_error);}this.onClosed_();return;}this.mySock.onopen=function(){_this11.log_('Websocket connected.');_this11.everConnected_=true;};this.mySock.onclose=function(){_this11.log_('Websocket connection was disconnected.');_this11.mySock=null;_this11.onClosed_();};this.mySock.onmessage=function(m){_this11.handleIncomingFrame(m);};this.mySock.onerror=function(e){_this11.log_('WebSocket error.  Closing connection.');// eslint-disable-next-line @typescript-eslint/no-explicit-any
var error=e.message||e.data;if(error){_this11.log_(error);}_this11.onClosed_();};}/**
     * No-op for websockets, we don't need to do anything once the connection is confirmed as open
     */},{key:"start",value:function start(){}},{key:"markConnectionHealthy",value:function markConnectionHealthy(){PersistentStorage.remove('previous_websocket_failure');}},{key:"appendFrame_",value:function appendFrame_(data){this.frames.push(data);if(this.frames.length===this.totalFrames){var fullMess=this.frames.join('');this.frames=null;var jsonMess=jsonEval(fullMess);//handle the message
this.onMessage(jsonMess);}}/**
     * @param frameCount - The number of frames we are expecting from the server
     */},{key:"handleNewFrameCount_",value:function handleNewFrameCount_(frameCount){this.totalFrames=frameCount;this.frames=[];}/**
     * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
     * @returns Any remaining data to be process, or null if there is none
     */},{key:"extractFrameCount_",value:function extractFrameCount_(data){assert(this.frames===null,'We already have a frame buffer');// TODO: The server is only supposed to send up to 9999 frames (i.e. length <= 4), but that isn't being enforced
// currently.  So allowing larger frame counts (length <= 6).  See https://app.asana.com/0/search/8688598998380/8237608042508
if(data.length<=6){var frameCount=Number(data);if(!isNaN(frameCount)){this.handleNewFrameCount_(frameCount);return null;}}this.handleNewFrameCount_(1);return data;}/**
     * Process a websocket frame that has arrived from the server.
     * @param mess - The frame data
     */},{key:"handleIncomingFrame",value:function handleIncomingFrame(mess){if(this.mySock===null){return;// Chrome apparently delivers incoming packets even after we .close() the connection sometimes.
}var data=mess['data'];this.bytesReceived+=data.length;this.stats_.incrementCounter('bytes_received',data.length);this.resetKeepAlive();if(this.frames!==null){// we're buffering
this.appendFrame_(data);}else {// try to parse out a frame count, otherwise, assume 1 and process it
var remainingData=this.extractFrameCount_(data);if(remainingData!==null){this.appendFrame_(remainingData);}}}/**
     * Send a message to the server
     * @param data - The JSON object to transmit
     */},{key:"send",value:function send(data){this.resetKeepAlive();var dataStr=stringify(data);this.bytesSent+=dataStr.length;this.stats_.incrementCounter('bytes_sent',dataStr.length);//We can only fit a certain amount in each websocket frame, so we need to split this request
//up into multiple pieces if it doesn't fit in one request.
var dataSegs=splitStringBySize(dataStr,WEBSOCKET_MAX_FRAME_SIZE);//Send the length header
if(dataSegs.length>1){this.sendString_(String(dataSegs.length));}//Send the actual data in segments.
for(var i=0;i<dataSegs.length;i++){this.sendString_(dataSegs[i]);}}},{key:"shutdown_",value:function shutdown_(){this.isClosed_=true;if(this.keepaliveTimer){clearInterval(this.keepaliveTimer);this.keepaliveTimer=null;}if(this.mySock){this.mySock.close();this.mySock=null;}}},{key:"onClosed_",value:function onClosed_(){if(!this.isClosed_){this.log_('WebSocket is closing itself');this.shutdown_();// since this is an internal close, trigger the close listener
if(this.onDisconnect){this.onDisconnect(this.everConnected_);this.onDisconnect=null;}}}/**
     * External-facing close handler.
     * Close the websocket and kill the connection.
     */},{key:"close",value:function close(){if(!this.isClosed_){this.log_('WebSocket is being closed');this.shutdown_();}}/**
     * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
     * the last activity.
     */},{key:"resetKeepAlive",value:function resetKeepAlive(){var _this12=this;clearInterval(this.keepaliveTimer);this.keepaliveTimer=setInterval(function(){//If there has been no websocket activity for a while, send a no-op
if(_this12.mySock){_this12.sendString_('0');}_this12.resetKeepAlive();// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));}/**
     * Send a string over the websocket.
     *
     * @param str - String to send.
     */},{key:"sendString_",value:function sendString_(str){// Firefox seems to sometimes throw exceptions (NS_ERROR_UNEXPECTED) from websocket .send()
// calls for some unknown reason.  We treat these as an error and disconnect.
// See https://app.asana.com/0/58926111402292/68021340250410
try{this.mySock.send(str);}catch(e){this.log_('Exception thrown from WebSocket.send():',e.message||e.data,'Closing connection.');setTimeout(this.onClosed_.bind(this),0);}}}],[{key:"connectionURL_",value:function connectionURL_(repoInfo,transportSessionId,lastSessionId,appCheckToken){var urlParams={};urlParams[VERSION_PARAM]=PROTOCOL_VERSION;if(typeof location!=='undefined'&&location.hostname&&FORGE_DOMAIN_RE.test(location.hostname)){urlParams[REFERER_PARAM]=FORGE_REF;}if(transportSessionId){urlParams[TRANSPORT_SESSION_PARAM]=transportSessionId;}if(lastSessionId){urlParams[LAST_SESSION_PARAM]=lastSessionId;}if(appCheckToken){urlParams[APP_CHECK_TOKEN_PARAM]=appCheckToken;}return repoInfoConnectionURL(repoInfo,WEBSOCKET,urlParams);}},{key:"forceDisallow",value:function forceDisallow(){WebSocketConnection.forceDisallow_=true;}},{key:"isAvailable",value:function isAvailable(){var isOldAndroid=false;if(typeof navigator!=='undefined'&&navigator.userAgent){var oldAndroidRegex=/Android ([0-9]{0,}\.[0-9]{0,})/;var oldAndroidMatch=navigator.userAgent.match(oldAndroidRegex);if(oldAndroidMatch&&oldAndroidMatch.length>1){if(parseFloat(oldAndroidMatch[1])<4.4){isOldAndroid=true;}}}return !isOldAndroid&&WebSocketImpl!==null&&!WebSocketConnection.forceDisallow_;}/**
     * Returns true if we previously failed to connect with this transport.
     */},{key:"previouslyFailed",value:function previouslyFailed(){// If our persistent storage is actually only in-memory storage,
// we default to assuming that it previously failed to be safe.
return PersistentStorage.isInMemoryStorage||PersistentStorage.get('previous_websocket_failure')===true;}}]);return WebSocketConnection;}();/**
 * Number of response before we consider the connection "healthy."
 */WebSocketConnection.responsesRequiredToBeHealthy=2;/**
 * Time to wait for the connection te become healthy before giving up.
 */WebSocketConnection.healthyTimeout=30000;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Currently simplistic, this class manages what transport a Connection should use at various stages of its
 * lifecycle.
 *
 * It starts with longpolling in a browser, and httppolling on node. It then upgrades to websockets if
 * they are available.
 */var TransportManager=/*#__PURE__*/function(){/**
     * @param repoInfo - Metadata around the namespace we're connecting to
     */function TransportManager(repoInfo){_classCallCheck(this,TransportManager);this.initTransports_(repoInfo);}_createClass(TransportManager,[{key:"initTransports_",value:function initTransports_(repoInfo){var isWebSocketsAvailable=WebSocketConnection&&WebSocketConnection['isAvailable']();var isSkipPollConnection=isWebSocketsAvailable&&!WebSocketConnection.previouslyFailed();if(repoInfo.webSocketOnly){if(!isWebSocketsAvailable){warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");}isSkipPollConnection=true;}if(isSkipPollConnection){this.transports_=[WebSocketConnection];}else {var transports=this.transports_=[];var _iterator=_createForOfIteratorHelper(TransportManager.ALL_TRANSPORTS),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var transport=_step.value;if(transport&&transport['isAvailable']()){transports.push(transport);}}}catch(err){_iterator.e(err);}finally{_iterator.f();}}}/**
     * @returns The constructor for the initial transport to use
     */},{key:"initialTransport",value:function initialTransport(){if(this.transports_.length>0){return this.transports_[0];}else {throw new Error('No transports available');}}/**
     * @returns The constructor for the next transport, or null
     */},{key:"upgradeTransport",value:function upgradeTransport(){if(this.transports_.length>1){return this.transports_[1];}else {return null;}}}],[{key:"ALL_TRANSPORTS",get:function get(){return [BrowserPollConnection,WebSocketConnection];}}]);return TransportManager;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Abort upgrade attempt if it takes longer than 60s.
var UPGRADE_TIMEOUT=60000;// For some transports (WebSockets), we need to "validate" the transport by exchanging a few requests and responses.
// If we haven't sent enough requests within 5s, we'll start sending noop ping requests.
var DELAY_BEFORE_SENDING_EXTRA_REQUESTS=5000;// If the initial data sent triggers a lot of bandwidth (i.e. it's a large put or a listen for a large amount of data)
// then we may not be able to exchange our ping/pong requests within the healthy timeout.  So if we reach the timeout
// but we've sent/received enough bytes, we don't cancel the connection.
var BYTES_SENT_HEALTHY_OVERRIDE=10*1024;var BYTES_RECEIVED_HEALTHY_OVERRIDE=100*1024;var MESSAGE_TYPE='t';var MESSAGE_DATA='d';var CONTROL_SHUTDOWN='s';var CONTROL_RESET='r';var CONTROL_ERROR='e';var CONTROL_PONG='o';var SWITCH_ACK='a';var END_TRANSMISSION='n';var PING='p';var SERVER_HELLO='h';/**
 * Creates a new real-time connection to the server using whichever method works
 * best in the current browser.
 */var Connection=/*#__PURE__*/function(){/**
     * @param id - an id for this connection
     * @param repoInfo_ - the info for the endpoint to connect to
     * @param applicationId_ - the Firebase App ID for this project
     * @param appCheckToken_ - The App Check Token for this device.
     * @param authToken_ - The auth token for this session.
     * @param onMessage_ - the callback to be triggered when a server-push message arrives
     * @param onReady_ - the callback to be triggered when this connection is ready to send messages.
     * @param onDisconnect_ - the callback to be triggered when a connection was lost
     * @param onKill_ - the callback to be triggered when this connection has permanently shut down.
     * @param lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
     */function Connection(id,repoInfo_,applicationId_,appCheckToken_,authToken_,onMessage_,onReady_,onDisconnect_,onKill_,lastSessionId){_classCallCheck(this,Connection);this.id=id;this.repoInfo_=repoInfo_;this.applicationId_=applicationId_;this.appCheckToken_=appCheckToken_;this.authToken_=authToken_;this.onMessage_=onMessage_;this.onReady_=onReady_;this.onDisconnect_=onDisconnect_;this.onKill_=onKill_;this.lastSessionId=lastSessionId;this.connectionCount=0;this.pendingDataMessages=[];this.state_=0/* CONNECTING */;this.log_=logWrapper('c:'+this.id+':');this.transportManager_=new TransportManager(repoInfo_);this.log_('Connection created');this.start_();}/**
     * Starts a connection attempt
     */_createClass(Connection,[{key:"start_",value:function start_(){var _this13=this;var conn=this.transportManager_.initialTransport();this.conn_=new conn(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId);// For certain transports (WebSockets), we need to send and receive several messages back and forth before we
// can consider the transport healthy.
this.primaryResponsesRequired_=conn['responsesRequiredToBeHealthy']||0;var onMessageReceived=this.connReceiver_(this.conn_);var onConnectionLost=this.disconnReceiver_(this.conn_);this.tx_=this.conn_;this.rx_=this.conn_;this.secondaryConn_=null;this.isHealthy_=false;/*
         * Firefox doesn't like when code from one iframe tries to create another iframe by way of the parent frame.
         * This can occur in the case of a redirect, i.e. we guessed wrong on what server to connect to and received a reset.
         * Somehow, setTimeout seems to make this ok. That doesn't make sense from a security perspective, since you should
         * still have the context of your originating frame.
         */setTimeout(function(){// this.conn_ gets set to null in some of the tests. Check to make sure it still exists before using it
_this13.conn_&&_this13.conn_.open(onMessageReceived,onConnectionLost);},Math.floor(0));var healthyTimeoutMS=conn['healthyTimeout']||0;if(healthyTimeoutMS>0){this.healthyTimeout_=setTimeoutNonBlocking(function(){_this13.healthyTimeout_=null;if(!_this13.isHealthy_){if(_this13.conn_&&_this13.conn_.bytesReceived>BYTES_RECEIVED_HEALTHY_OVERRIDE){_this13.log_('Connection exceeded healthy timeout but has received '+_this13.conn_.bytesReceived+' bytes.  Marking connection healthy.');_this13.isHealthy_=true;_this13.conn_.markConnectionHealthy();}else if(_this13.conn_&&_this13.conn_.bytesSent>BYTES_SENT_HEALTHY_OVERRIDE){_this13.log_('Connection exceeded healthy timeout but has sent '+_this13.conn_.bytesSent+' bytes.  Leaving connection alive.');// NOTE: We don't want to mark it healthy, since we have no guarantee that the bytes have made it to
// the server.
}else {_this13.log_('Closing unhealthy connection after timeout.');_this13.close();}}// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(healthyTimeoutMS));}}},{key:"nextTransportId_",value:function nextTransportId_(){return 'c:'+this.id+':'+this.connectionCount++;}},{key:"disconnReceiver_",value:function disconnReceiver_(conn){var _this14=this;return function(everConnected){if(conn===_this14.conn_){_this14.onConnectionLost_(everConnected);}else if(conn===_this14.secondaryConn_){_this14.log_('Secondary connection lost.');_this14.onSecondaryConnectionLost_();}else {_this14.log_('closing an old connection');}};}},{key:"connReceiver_",value:function connReceiver_(conn){var _this15=this;return function(message){if(_this15.state_!==2/* DISCONNECTED */){if(conn===_this15.rx_){_this15.onPrimaryMessageReceived_(message);}else if(conn===_this15.secondaryConn_){_this15.onSecondaryMessageReceived_(message);}else {_this15.log_('message on old connection');}}};}/**
     * @param dataMsg - An arbitrary data message to be sent to the server
     */},{key:"sendRequest",value:function sendRequest(dataMsg){// wrap in a data message envelope and send it on
var msg={t:'d',d:dataMsg};this.sendData_(msg);}},{key:"tryCleanupConnection",value:function tryCleanupConnection(){if(this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_){this.log_('cleaning up and promoting a connection: '+this.secondaryConn_.connId);this.conn_=this.secondaryConn_;this.secondaryConn_=null;// the server will shutdown the old connection
}}},{key:"onSecondaryControl_",value:function onSecondaryControl_(controlData){if(MESSAGE_TYPE in controlData){var cmd=controlData[MESSAGE_TYPE];if(cmd===SWITCH_ACK){this.upgradeIfSecondaryHealthy_();}else if(cmd===CONTROL_RESET){// Most likely the session wasn't valid. Abandon the switch attempt
this.log_('Got a reset on secondary, closing it');this.secondaryConn_.close();// If we were already using this connection for something, than we need to fully close
if(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_){this.close();}}else if(cmd===CONTROL_PONG){this.log_('got pong on secondary.');this.secondaryResponsesRequired_--;this.upgradeIfSecondaryHealthy_();}}}},{key:"onSecondaryMessageReceived_",value:function onSecondaryMessageReceived_(parsedData){var layer=requireKey('t',parsedData);var data=requireKey('d',parsedData);if(layer==='c'){this.onSecondaryControl_(data);}else if(layer==='d'){// got a data message, but we're still second connection. Need to buffer it up
this.pendingDataMessages.push(data);}else {throw new Error('Unknown protocol layer: '+layer);}}},{key:"upgradeIfSecondaryHealthy_",value:function upgradeIfSecondaryHealthy_(){if(this.secondaryResponsesRequired_<=0){this.log_('Secondary connection is healthy.');this.isHealthy_=true;this.secondaryConn_.markConnectionHealthy();this.proceedWithUpgrade_();}else {// Send a ping to make sure the connection is healthy.
this.log_('sending ping on secondary.');this.secondaryConn_.send({t:'c',d:{t:PING,d:{}}});}}},{key:"proceedWithUpgrade_",value:function proceedWithUpgrade_(){// tell this connection to consider itself open
this.secondaryConn_.start();// send ack
this.log_('sending client ack on secondary');this.secondaryConn_.send({t:'c',d:{t:SWITCH_ACK,d:{}}});// send end packet on primary transport, switch to sending on this one
// can receive on this one, buffer responses until end received on primary transport
this.log_('Ending transmission on primary');this.conn_.send({t:'c',d:{t:END_TRANSMISSION,d:{}}});this.tx_=this.secondaryConn_;this.tryCleanupConnection();}},{key:"onPrimaryMessageReceived_",value:function onPrimaryMessageReceived_(parsedData){// Must refer to parsedData properties in quotes, so closure doesn't touch them.
var layer=requireKey('t',parsedData);var data=requireKey('d',parsedData);if(layer==='c'){this.onControl_(data);}else if(layer==='d'){this.onDataMessage_(data);}}},{key:"onDataMessage_",value:function onDataMessage_(message){this.onPrimaryResponse_();// We don't do anything with data messages, just kick them up a level
this.onMessage_(message);}},{key:"onPrimaryResponse_",value:function onPrimaryResponse_(){if(!this.isHealthy_){this.primaryResponsesRequired_--;if(this.primaryResponsesRequired_<=0){this.log_('Primary connection is healthy.');this.isHealthy_=true;this.conn_.markConnectionHealthy();}}}},{key:"onControl_",value:function onControl_(controlData){var cmd=requireKey(MESSAGE_TYPE,controlData);if(MESSAGE_DATA in controlData){var payload=controlData[MESSAGE_DATA];if(cmd===SERVER_HELLO){this.onHandshake_(payload);}else if(cmd===END_TRANSMISSION){this.log_('recvd end transmission on primary');this.rx_=this.secondaryConn_;for(var i=0;i<this.pendingDataMessages.length;++i){this.onDataMessage_(this.pendingDataMessages[i]);}this.pendingDataMessages=[];this.tryCleanupConnection();}else if(cmd===CONTROL_SHUTDOWN){// This was previously the 'onKill' callback passed to the lower-level connection
// payload in this case is the reason for the shutdown. Generally a human-readable error
this.onConnectionShutdown_(payload);}else if(cmd===CONTROL_RESET){// payload in this case is the host we should contact
this.onReset_(payload);}else if(cmd===CONTROL_ERROR){error('Server Error: '+payload);}else if(cmd===CONTROL_PONG){this.log_('got pong on primary.');this.onPrimaryResponse_();this.sendPingOnPrimaryIfNecessary_();}else {error('Unknown control packet command: '+cmd);}}}/**
     * @param handshake - The handshake data returned from the server
     */},{key:"onHandshake_",value:function onHandshake_(handshake){var timestamp=handshake.ts;var version=handshake.v;var host=handshake.h;this.sessionId=handshake.s;this.repoInfo_.host=host;// if we've already closed the connection, then don't bother trying to progress further
if(this.state_===0/* CONNECTING */){this.conn_.start();this.onConnectionEstablished_(this.conn_,timestamp);if(PROTOCOL_VERSION!==version){warn('Protocol version mismatch detected');}// TODO: do we want to upgrade? when? maybe a delay?
this.tryStartUpgrade_();}}},{key:"tryStartUpgrade_",value:function tryStartUpgrade_(){var conn=this.transportManager_.upgradeTransport();if(conn){this.startUpgrade_(conn);}}},{key:"startUpgrade_",value:function startUpgrade_(conn){var _this16=this;this.secondaryConn_=new conn(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId);// For certain transports (WebSockets), we need to send and receive several messages back and forth before we
// can consider the transport healthy.
this.secondaryResponsesRequired_=conn['responsesRequiredToBeHealthy']||0;var onMessage=this.connReceiver_(this.secondaryConn_);var onDisconnect=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(onMessage,onDisconnect);// If we haven't successfully upgraded after UPGRADE_TIMEOUT, give up and kill the secondary.
setTimeoutNonBlocking(function(){if(_this16.secondaryConn_){_this16.log_('Timed out trying to upgrade.');_this16.secondaryConn_.close();}},Math.floor(UPGRADE_TIMEOUT));}},{key:"onReset_",value:function onReset_(host){this.log_('Reset packet received.  New host: '+host);this.repoInfo_.host=host;// TODO: if we're already "connected", we need to trigger a disconnect at the next layer up.
// We don't currently support resets after the connection has already been established
if(this.state_===1/* CONNECTED */){this.close();}else {// Close whatever connections we have open and start again.
this.closeConnections_();this.start_();}}},{key:"onConnectionEstablished_",value:function onConnectionEstablished_(conn,timestamp){var _this17=this;this.log_('Realtime connection established.');this.conn_=conn;this.state_=1/* CONNECTED */;if(this.onReady_){this.onReady_(timestamp,this.sessionId);this.onReady_=null;}// If after 5 seconds we haven't sent enough requests to the server to get the connection healthy,
// send some pings.
if(this.primaryResponsesRequired_===0){this.log_('Primary connection is healthy.');this.isHealthy_=true;}else {setTimeoutNonBlocking(function(){_this17.sendPingOnPrimaryIfNecessary_();},Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));}}},{key:"sendPingOnPrimaryIfNecessary_",value:function sendPingOnPrimaryIfNecessary_(){// If the connection isn't considered healthy yet, we'll send a noop ping packet request.
if(!this.isHealthy_&&this.state_===1/* CONNECTED */){this.log_('sending ping on primary.');this.sendData_({t:'c',d:{t:PING,d:{}}});}}},{key:"onSecondaryConnectionLost_",value:function onSecondaryConnectionLost_(){var conn=this.secondaryConn_;this.secondaryConn_=null;if(this.tx_===conn||this.rx_===conn){// we are relying on this connection already in some capacity. Therefore, a failure is real
this.close();}}/**
     * @param everConnected - Whether or not the connection ever reached a server. Used to determine if
     * we should flush the host cache
     */},{key:"onConnectionLost_",value:function onConnectionLost_(everConnected){this.conn_=null;// NOTE: IF you're seeing a Firefox error for this line, I think it might be because it's getting
// called on window close and RealtimeState.CONNECTING is no longer defined.  Just a guess.
if(!everConnected&&this.state_===0/* CONNECTING */){this.log_('Realtime connection failed.');// Since we failed to connect at all, clear any cached entry for this namespace in case the machine went away
if(this.repoInfo_.isCacheableHost()){PersistentStorage.remove('host:'+this.repoInfo_.host);// reset the internal host to what we would show the user, i.e. <ns>.firebaseio.com
this.repoInfo_.internalHost=this.repoInfo_.host;}}else if(this.state_===1/* CONNECTED */){this.log_('Realtime connection lost.');}this.close();}},{key:"onConnectionShutdown_",value:function onConnectionShutdown_(reason){this.log_('Connection shutdown command received. Shutting down...');if(this.onKill_){this.onKill_(reason);this.onKill_=null;}// We intentionally don't want to fire onDisconnect (kill is a different case),
// so clear the callback.
this.onDisconnect_=null;this.close();}},{key:"sendData_",value:function sendData_(data){if(this.state_!==1/* CONNECTED */){throw 'Connection is not connected';}else {this.tx_.send(data);}}/**
     * Cleans up this connection, calling the appropriate callbacks
     */},{key:"close",value:function close(){if(this.state_!==2/* DISCONNECTED */){this.log_('Closing realtime connection.');this.state_=2/* DISCONNECTED */;this.closeConnections_();if(this.onDisconnect_){this.onDisconnect_();this.onDisconnect_=null;}}}},{key:"closeConnections_",value:function closeConnections_(){this.log_('Shutting down all connections');if(this.conn_){this.conn_.close();this.conn_=null;}if(this.secondaryConn_){this.secondaryConn_.close();this.secondaryConn_=null;}if(this.healthyTimeout_){clearTimeout(this.healthyTimeout_);this.healthyTimeout_=null;}}}]);return Connection;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Interface defining the set of actions that can be performed against the Firebase server
 * (basically corresponds to our wire protocol).
 *
 * @interface
 */var ServerActions=/*#__PURE__*/function(){function ServerActions(){_classCallCheck(this,ServerActions);}_createClass(ServerActions,[{key:"put",value:function put(pathString,data,onComplete,hash){}},{key:"merge",value:function merge(pathString,data,onComplete,hash){}/**
     * Refreshes the auth token for the current connection.
     * @param token - The authentication token
     */},{key:"refreshAuthToken",value:function refreshAuthToken(token){}/**
     * Refreshes the app check token for the current connection.
     * @param token The app check token
     */},{key:"refreshAppCheckToken",value:function refreshAppCheckToken(token){}},{key:"onDisconnectPut",value:function onDisconnectPut(pathString,data,onComplete){}},{key:"onDisconnectMerge",value:function onDisconnectMerge(pathString,data,onComplete){}},{key:"onDisconnectCancel",value:function onDisconnectCancel(pathString,onComplete){}},{key:"reportStats",value:function reportStats(stats){}}]);return ServerActions;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Base class to be used if you want to emit events. Call the constructor with
 * the set of allowed event names.
 */var EventEmitter=/*#__PURE__*/function(){function EventEmitter(allowedEvents_){_classCallCheck(this,EventEmitter);this.allowedEvents_=allowedEvents_;this.listeners_={};assert(Array.isArray(allowedEvents_)&&allowedEvents_.length>0,'Requires a non-empty array');}/**
     * To be called by derived classes to trigger events.
     */_createClass(EventEmitter,[{key:"trigger",value:function trigger(eventType){if(Array.isArray(this.listeners_[eventType])){// Clone the list, since callbacks could add/remove listeners.
var listeners=_toConsumableArray(this.listeners_[eventType]);for(var _len5=arguments.length,varArgs=new Array(_len5>1?_len5-1:0),_key6=1;_key6<_len5;_key6++){varArgs[_key6-1]=arguments[_key6];}for(var i=0;i<listeners.length;i++){listeners[i].callback.apply(listeners[i].context,varArgs);}}}},{key:"on",value:function on(eventType,callback,context){this.validateEventType_(eventType);this.listeners_[eventType]=this.listeners_[eventType]||[];this.listeners_[eventType].push({callback:callback,context:context});var eventData=this.getInitialEvent(eventType);if(eventData){callback.apply(context,eventData);}}},{key:"off",value:function off(eventType,callback,context){this.validateEventType_(eventType);var listeners=this.listeners_[eventType]||[];for(var i=0;i<listeners.length;i++){if(listeners[i].callback===callback&&(!context||context===listeners[i].context)){listeners.splice(i,1);return;}}}},{key:"validateEventType_",value:function validateEventType_(eventType){assert(this.allowedEvents_.find(function(et){return et===eventType;}),'Unknown event: '+eventType);}}]);return EventEmitter;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Monitors online state (as reported by window.online/offline events).
 *
 * The expectation is that this could have many false positives (thinks we are online
 * when we're not), but no false negatives.  So we can safely use it to determine when
 * we definitely cannot reach the internet.
 */var OnlineMonitor=/*#__PURE__*/function(_EventEmitter){_inherits(OnlineMonitor,_EventEmitter);var _super=_createSuper(OnlineMonitor);function OnlineMonitor(){var _this18;_classCallCheck(this,OnlineMonitor);_this18=_super.call(this,['online']);_this18.online_=true;// We've had repeated complaints that Cordova apps can get stuck "offline", e.g.
// https://forum.ionicframework.com/t/firebase-connection-is-lost-and-never-come-back/43810
// It would seem that the 'online' event does not always fire consistently. So we disable it
// for Cordova.
if(typeof window!=='undefined'&&typeof window.addEventListener!=='undefined'&&!isMobileCordova()){window.addEventListener('online',function(){if(!_this18.online_){_this18.online_=true;_this18.trigger('online',true);}},false);window.addEventListener('offline',function(){if(_this18.online_){_this18.online_=false;_this18.trigger('online',false);}},false);}return _this18;}_createClass(OnlineMonitor,[{key:"getInitialEvent",value:function getInitialEvent(eventType){assert(eventType==='online','Unknown event type: '+eventType);return [this.online_];}},{key:"currentlyOnline",value:function currentlyOnline(){return this.online_;}}],[{key:"getInstance",value:function getInstance(){return new OnlineMonitor();}}]);return OnlineMonitor;}(EventEmitter);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Maximum key depth. */var MAX_PATH_DEPTH=32;/** Maximum number of (UTF8) bytes in a Firebase path. */var MAX_PATH_LENGTH_BYTES=768;/**
 * An immutable object representing a parsed path.  It's immutable so that you
 * can pass them around to other functions without worrying about them changing
 * it.
 */var Path=/*#__PURE__*/function(){/**
     * @param pathOrString - Path string to parse, or another path, or the raw
     * tokens array
     */function Path(pathOrString,pieceNum){_classCallCheck(this,Path);if(pieceNum===void 0){this.pieces_=pathOrString.split('/');// Remove empty pieces.
var copyTo=0;for(var i=0;i<this.pieces_.length;i++){if(this.pieces_[i].length>0){this.pieces_[copyTo]=this.pieces_[i];copyTo++;}}this.pieces_.length=copyTo;this.pieceNum_=0;}else {this.pieces_=pathOrString;this.pieceNum_=pieceNum;}}_createClass(Path,[{key:"toString",value:function toString(){var pathString='';for(var i=this.pieceNum_;i<this.pieces_.length;i++){if(this.pieces_[i]!==''){pathString+='/'+this.pieces_[i];}}return pathString||'/';}}]);return Path;}();function newEmptyPath(){return new Path('');}function pathGetFront(path){if(path.pieceNum_>=path.pieces_.length){return null;}return path.pieces_[path.pieceNum_];}/**
 * @returns The number of segments in this path
 */function pathGetLength(path){return path.pieces_.length-path.pieceNum_;}function pathPopFront(path){var pieceNum=path.pieceNum_;if(pieceNum<path.pieces_.length){pieceNum++;}return new Path(path.pieces_,pieceNum);}function pathGetBack(path){if(path.pieceNum_<path.pieces_.length){return path.pieces_[path.pieces_.length-1];}return null;}function pathToUrlEncodedString(path){var pathString='';for(var i=path.pieceNum_;i<path.pieces_.length;i++){if(path.pieces_[i]!==''){pathString+='/'+encodeURIComponent(String(path.pieces_[i]));}}return pathString||'/';}/**
 * Shallow copy of the parts of the path.
 *
 */function pathSlice(path){var begin=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;return path.pieces_.slice(path.pieceNum_+begin);}function pathParent(path){if(path.pieceNum_>=path.pieces_.length){return null;}var pieces=[];for(var i=path.pieceNum_;i<path.pieces_.length-1;i++){pieces.push(path.pieces_[i]);}return new Path(pieces,0);}function pathChild(path,childPathObj){var pieces=[];for(var i=path.pieceNum_;i<path.pieces_.length;i++){pieces.push(path.pieces_[i]);}if(childPathObj instanceof Path){for(var _i=childPathObj.pieceNum_;_i<childPathObj.pieces_.length;_i++){pieces.push(childPathObj.pieces_[_i]);}}else {var childPieces=childPathObj.split('/');for(var _i2=0;_i2<childPieces.length;_i2++){if(childPieces[_i2].length>0){pieces.push(childPieces[_i2]);}}}return new Path(pieces,0);}/**
 * @returns True if there are no segments in this path
 */function pathIsEmpty(path){return path.pieceNum_>=path.pieces_.length;}/**
 * @returns The path from outerPath to innerPath
 */function newRelativePath(outerPath,innerPath){var outer=pathGetFront(outerPath),inner=pathGetFront(innerPath);if(outer===null){return innerPath;}else if(outer===inner){return newRelativePath(pathPopFront(outerPath),pathPopFront(innerPath));}else {throw new Error('INTERNAL ERROR: innerPath ('+innerPath+') is not within '+'outerPath ('+outerPath+')');}}/**
 * @returns true if paths are the same.
 */function pathEquals(path,other){if(pathGetLength(path)!==pathGetLength(other)){return false;}for(var i=path.pieceNum_,j=other.pieceNum_;i<=path.pieces_.length;i++,j++){if(path.pieces_[i]!==other.pieces_[j]){return false;}}return true;}/**
 * @returns True if this path is a parent (or the same as) other
 */function pathContains(path,other){var i=path.pieceNum_;var j=other.pieceNum_;if(pathGetLength(path)>pathGetLength(other)){return false;}while(i<path.pieces_.length){if(path.pieces_[i]!==other.pieces_[j]){return false;}++i;++j;}return true;}/**
 * Dynamic (mutable) path used to count path lengths.
 *
 * This class is used to efficiently check paths for valid
 * length (in UTF8 bytes) and depth (used in path validation).
 *
 * Throws Error exception if path is ever invalid.
 *
 * The definition of a path always begins with '/'.
 */var ValidationPath=/*#__PURE__*/_createClass(/**
     * @param path - Initial Path.
     * @param errorPrefix_ - Prefix for any error messages.
     */function ValidationPath(path,errorPrefix_){_classCallCheck(this,ValidationPath);this.errorPrefix_=errorPrefix_;this.parts_=pathSlice(path,0);/** Initialize to number of '/' chars needed in path. */this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++){this.byteLength_+=stringLength(this.parts_[i]);}validationPathCheckValid(this);});function validationPathPush(validationPath,child){// Count the needed '/'
if(validationPath.parts_.length>0){validationPath.byteLength_+=1;}validationPath.parts_.push(child);validationPath.byteLength_+=stringLength(child);validationPathCheckValid(validationPath);}function validationPathPop(validationPath){var last=validationPath.parts_.pop();validationPath.byteLength_-=stringLength(last);// Un-count the previous '/'
if(validationPath.parts_.length>0){validationPath.byteLength_-=1;}}function validationPathCheckValid(validationPath){if(validationPath.byteLength_>MAX_PATH_LENGTH_BYTES){throw new Error(validationPath.errorPrefix_+'has a key path longer than '+MAX_PATH_LENGTH_BYTES+' bytes ('+validationPath.byteLength_+').');}if(validationPath.parts_.length>MAX_PATH_DEPTH){throw new Error(validationPath.errorPrefix_+'path specified exceeds the maximum depth that can be written ('+MAX_PATH_DEPTH+') or object contains a cycle '+validationPathToErrorString(validationPath));}}/**
 * String for use in error messages - uses '.' notation for path.
 */function validationPathToErrorString(validationPath){if(validationPath.parts_.length===0){return '';}return "in property '"+validationPath.parts_.join('.')+"'";}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var VisibilityMonitor=/*#__PURE__*/function(_EventEmitter2){_inherits(VisibilityMonitor,_EventEmitter2);var _super2=_createSuper(VisibilityMonitor);function VisibilityMonitor(){var _this19;_classCallCheck(this,VisibilityMonitor);_this19=_super2.call(this,['visible']);var hidden;var visibilityChange;if(typeof document!=='undefined'&&typeof document.addEventListener!=='undefined'){if(typeof document['hidden']!=='undefined'){// Opera 12.10 and Firefox 18 and later support
visibilityChange='visibilitychange';hidden='hidden';}else if(typeof document['mozHidden']!=='undefined'){visibilityChange='mozvisibilitychange';hidden='mozHidden';}else if(typeof document['msHidden']!=='undefined'){visibilityChange='msvisibilitychange';hidden='msHidden';}else if(typeof document['webkitHidden']!=='undefined'){visibilityChange='webkitvisibilitychange';hidden='webkitHidden';}}// Initially, we always assume we are visible. This ensures that in browsers
// without page visibility support or in cases where we are never visible
// (e.g. chrome extension), we act as if we are visible, i.e. don't delay
// reconnects
_this19.visible_=true;if(visibilityChange){document.addEventListener(visibilityChange,function(){var visible=!document[hidden];if(visible!==_this19.visible_){_this19.visible_=visible;_this19.trigger('visible',visible);}},false);}return _this19;}_createClass(VisibilityMonitor,[{key:"getInitialEvent",value:function getInitialEvent(eventType){assert(eventType==='visible','Unknown event type: '+eventType);return [this.visible_];}}],[{key:"getInstance",value:function getInstance(){return new VisibilityMonitor();}}]);return VisibilityMonitor;}(EventEmitter);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var RECONNECT_MIN_DELAY=1000;var RECONNECT_MAX_DELAY_DEFAULT=60*5*1000;// 5 minutes in milliseconds (Case: 1858)
var GET_CONNECT_TIMEOUT=3*1000;var RECONNECT_MAX_DELAY_FOR_ADMINS=30*1000;// 30 seconds for admin clients (likely to be a backend server)
var RECONNECT_DELAY_MULTIPLIER=1.3;var RECONNECT_DELAY_RESET_TIMEOUT=30000;// Reset delay back to MIN_DELAY after being connected for 30sec.
var SERVER_KILL_INTERRUPT_REASON='server_kill';// If auth fails repeatedly, we'll assume something is wrong and log a warning / back off.
var INVALID_TOKEN_THRESHOLD=3;/**
 * Firebase connection.  Abstracts wire protocol and handles reconnecting.
 *
 * NOTE: All JSON objects sent to the realtime connection must have property names enclosed
 * in quotes to make sure the closure compiler does not minify them.
 */var PersistentConnection=/*#__PURE__*/function(_ServerActions){_inherits(PersistentConnection,_ServerActions);var _super3=_createSuper(PersistentConnection);/**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param applicationId_ - The Firebase App ID for this project
     * @param onDataUpdate_ - A callback for new data from the server
     */function PersistentConnection(repoInfo_,applicationId_,onDataUpdate_,onConnectStatus_,onServerInfoUpdate_,authTokenProvider_,appCheckTokenProvider_,authOverride_){var _this20;_classCallCheck(this,PersistentConnection);_this20=_super3.call(this);_this20.repoInfo_=repoInfo_;_this20.applicationId_=applicationId_;_this20.onDataUpdate_=onDataUpdate_;_this20.onConnectStatus_=onConnectStatus_;_this20.onServerInfoUpdate_=onServerInfoUpdate_;_this20.authTokenProvider_=authTokenProvider_;_this20.appCheckTokenProvider_=appCheckTokenProvider_;_this20.authOverride_=authOverride_;// Used for diagnostic logging.
_this20.id=PersistentConnection.nextPersistentConnectionId_++;_this20.log_=logWrapper('p:'+_this20.id+':');_this20.interruptReasons_={};_this20.listens=new Map();_this20.outstandingPuts_=[];_this20.outstandingGets_=[];_this20.outstandingPutCount_=0;_this20.outstandingGetCount_=0;_this20.onDisconnectRequestQueue_=[];_this20.connected_=false;_this20.reconnectDelay_=RECONNECT_MIN_DELAY;_this20.maxReconnectDelay_=RECONNECT_MAX_DELAY_DEFAULT;_this20.securityDebugCallback_=null;_this20.lastSessionId=null;_this20.establishConnectionTimer_=null;_this20.visible_=false;// Before we get connected, we keep a queue of pending messages to send.
_this20.requestCBHash_={};_this20.requestNumber_=0;_this20.realtime_=null;_this20.authToken_=null;_this20.appCheckToken_=null;_this20.forceTokenRefresh_=false;_this20.invalidAuthTokenCount_=0;_this20.invalidAppCheckTokenCount_=0;_this20.firstConnection_=true;_this20.lastConnectionAttemptTime_=null;_this20.lastConnectionEstablishedTime_=null;if(authOverride_&&!isNodeSdk()){throw new Error('Auth override specified in options, but not supported on non Node.js platforms');}VisibilityMonitor.getInstance().on('visible',_this20.onVisible_,_assertThisInitialized(_this20));if(repoInfo_.host.indexOf('fblocal')===-1){OnlineMonitor.getInstance().on('online',_this20.onOnline_,_assertThisInitialized(_this20));}return _this20;}_createClass(PersistentConnection,[{key:"sendRequest",value:function sendRequest(action,body,onResponse){var curReqNum=++this.requestNumber_;var msg={r:curReqNum,a:action,b:body};this.log_(stringify(msg));assert(this.connected_,"sendRequest call when we're not connected not allowed.");this.realtime_.sendRequest(msg);if(onResponse){this.requestCBHash_[curReqNum]=onResponse;}}},{key:"get",value:function get(query){var _this21=this;this.initConnection_();var deferred=new Deferred();var request={p:query._path.toString(),q:query._queryObject};var outstandingGet={action:'g',request:request,onComplete:function onComplete(message){var payload=message['d'];if(message['s']==='ok'){_this21.onDataUpdate_(request['p'],payload,/*isMerge*/false,/*tag*/null);deferred.resolve(payload);}else {deferred.reject(payload);}}};this.outstandingGets_.push(outstandingGet);this.outstandingGetCount_++;var index=this.outstandingGets_.length-1;if(!this.connected_){setTimeout(function(){var get=_this21.outstandingGets_[index];if(get===undefined||outstandingGet!==get){return;}delete _this21.outstandingGets_[index];_this21.outstandingGetCount_--;if(_this21.outstandingGetCount_===0){_this21.outstandingGets_=[];}_this21.log_('get '+index+' timed out on connection');deferred.reject(new Error('Client is offline.'));},GET_CONNECT_TIMEOUT);}if(this.connected_){this.sendGet_(index);}return deferred.promise;}},{key:"listen",value:function listen(query,currentHashFn,tag,onComplete){this.initConnection_();var queryId=query._queryIdentifier;var pathString=query._path.toString();this.log_('Listen called for '+pathString+' '+queryId);if(!this.listens.has(pathString)){this.listens.set(pathString,new Map());}assert(query._queryParams.isDefault()||!query._queryParams.loadsAllData(),'listen() called for non-default but complete query');assert(!this.listens.get(pathString).has(queryId),'listen() called twice for same path/queryId.');var listenSpec={onComplete:onComplete,hashFn:currentHashFn,query:query,tag:tag};this.listens.get(pathString).set(queryId,listenSpec);if(this.connected_){this.sendListen_(listenSpec);}}},{key:"sendGet_",value:function sendGet_(index){var _this22=this;var get=this.outstandingGets_[index];this.sendRequest('g',get.request,function(message){delete _this22.outstandingGets_[index];_this22.outstandingGetCount_--;if(_this22.outstandingGetCount_===0){_this22.outstandingGets_=[];}if(get.onComplete){get.onComplete(message);}});}},{key:"sendListen_",value:function sendListen_(listenSpec){var _this23=this;var query=listenSpec.query;var pathString=query._path.toString();var queryId=query._queryIdentifier;this.log_('Listen on '+pathString+' for '+queryId);var req={/*path*/p:pathString};var action='q';// Only bother to send query if it's non-default.
if(listenSpec.tag){req['q']=query._queryObject;req['t']=listenSpec.tag;}req[/*hash*/'h']=listenSpec.hashFn();this.sendRequest(action,req,function(message){var payload=message[/*data*/'d'];var status=message[/*status*/'s'];// print warnings in any case...
PersistentConnection.warnOnListenWarnings_(payload,query);var currentListenSpec=_this23.listens.get(pathString)&&_this23.listens.get(pathString).get(queryId);// only trigger actions if the listen hasn't been removed and readded
if(currentListenSpec===listenSpec){_this23.log_('listen response',message);if(status!=='ok'){_this23.removeListen_(pathString,queryId);}if(listenSpec.onComplete){listenSpec.onComplete(status,payload);}}});}},{key:"refreshAuthToken",value:function refreshAuthToken(token){this.authToken_=token;this.log_('Auth token refreshed');if(this.authToken_){this.tryAuth();}else {//If we're connected we want to let the server know to unauthenticate us. If we're not connected, simply delete
//the credential so we dont become authenticated next time we connect.
if(this.connected_){this.sendRequest('unauth',{},function(){});}}this.reduceReconnectDelayIfAdminCredential_(token);}},{key:"reduceReconnectDelayIfAdminCredential_",value:function reduceReconnectDelayIfAdminCredential_(credential){// NOTE: This isn't intended to be bulletproof (a malicious developer can always just modify the client).
// Additionally, we don't bother resetting the max delay back to the default if auth fails / expires.
var isFirebaseSecret=credential&&credential.length===40;if(isFirebaseSecret||isAdmin(credential)){this.log_('Admin auth credential detected.  Reducing max reconnect time.');this.maxReconnectDelay_=RECONNECT_MAX_DELAY_FOR_ADMINS;}}},{key:"refreshAppCheckToken",value:function refreshAppCheckToken(token){this.appCheckToken_=token;this.log_('App check token refreshed');if(this.appCheckToken_){this.tryAppCheck();}else {//If we're connected we want to let the server know to unauthenticate us.
//If we're not connected, simply delete the credential so we dont become
// authenticated next time we connect.
if(this.connected_){this.sendRequest('unappeck',{},function(){});}}}/**
     * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
     * a auth revoked (the connection is closed).
     */},{key:"tryAuth",value:function tryAuth(){var _this24=this;if(this.connected_&&this.authToken_){var token=this.authToken_;var authMethod=isValidFormat(token)?'auth':'gauth';var requestData={cred:token};if(this.authOverride_===null){requestData['noauth']=true;}else if(_typeof(this.authOverride_)==='object'){requestData['authvar']=this.authOverride_;}this.sendRequest(authMethod,requestData,function(res){var status=res[/*status*/'s'];var data=res[/*data*/'d']||'error';if(_this24.authToken_===token){if(status==='ok'){_this24.invalidAuthTokenCount_=0;}else {// Triggers reconnect and force refresh for auth token
_this24.onAuthRevoked_(status,data);}}});}}/**
     * Attempts to authenticate with the given token. If the authentication
     * attempt fails, it's triggered like the token was revoked (the connection is
     * closed).
     */},{key:"tryAppCheck",value:function tryAppCheck(){var _this25=this;if(this.connected_&&this.appCheckToken_){this.sendRequest('appcheck',{'token':this.appCheckToken_},function(res){var status=res[/*status*/'s'];var data=res[/*data*/'d']||'error';if(status==='ok'){_this25.invalidAppCheckTokenCount_=0;}else {_this25.onAppCheckRevoked_(status,data);}});}}/**
     * @inheritDoc
     */},{key:"unlisten",value:function unlisten(query,tag){var pathString=query._path.toString();var queryId=query._queryIdentifier;this.log_('Unlisten called for '+pathString+' '+queryId);assert(query._queryParams.isDefault()||!query._queryParams.loadsAllData(),'unlisten() called for non-default but complete query');var listen=this.removeListen_(pathString,queryId);if(listen&&this.connected_){this.sendUnlisten_(pathString,queryId,query._queryObject,tag);}}},{key:"sendUnlisten_",value:function sendUnlisten_(pathString,queryId,queryObj,tag){this.log_('Unlisten on '+pathString+' for '+queryId);var req={/*path*/p:pathString};var action='n';// Only bother sending queryId if it's non-default.
if(tag){req['q']=queryObj;req['t']=tag;}this.sendRequest(action,req);}},{key:"onDisconnectPut",value:function onDisconnectPut(pathString,data,onComplete){this.initConnection_();if(this.connected_){this.sendOnDisconnect_('o',pathString,data,onComplete);}else {this.onDisconnectRequestQueue_.push({pathString:pathString,action:'o',data:data,onComplete:onComplete});}}},{key:"onDisconnectMerge",value:function onDisconnectMerge(pathString,data,onComplete){this.initConnection_();if(this.connected_){this.sendOnDisconnect_('om',pathString,data,onComplete);}else {this.onDisconnectRequestQueue_.push({pathString:pathString,action:'om',data:data,onComplete:onComplete});}}},{key:"onDisconnectCancel",value:function onDisconnectCancel(pathString,onComplete){this.initConnection_();if(this.connected_){this.sendOnDisconnect_('oc',pathString,null,onComplete);}else {this.onDisconnectRequestQueue_.push({pathString:pathString,action:'oc',data:null,onComplete:onComplete});}}},{key:"sendOnDisconnect_",value:function sendOnDisconnect_(action,pathString,data,onComplete){var request={/*path*/p:pathString,/*data*/d:data};this.log_('onDisconnect '+action,request);this.sendRequest(action,request,function(response){if(onComplete){setTimeout(function(){onComplete(response[/*status*/'s'],response[/* data */'d']);},Math.floor(0));}});}},{key:"put",value:function put(pathString,data,onComplete,hash){this.putInternal('p',pathString,data,onComplete,hash);}},{key:"merge",value:function merge(pathString,data,onComplete,hash){this.putInternal('m',pathString,data,onComplete,hash);}},{key:"putInternal",value:function putInternal(action,pathString,data,onComplete,hash){this.initConnection_();var request={/*path*/p:pathString,/*data*/d:data};if(hash!==undefined){request[/*hash*/'h']=hash;}// TODO: Only keep track of the most recent put for a given path?
this.outstandingPuts_.push({action:action,request:request,onComplete:onComplete});this.outstandingPutCount_++;var index=this.outstandingPuts_.length-1;if(this.connected_){this.sendPut_(index);}else {this.log_('Buffering put: '+pathString);}}},{key:"sendPut_",value:function sendPut_(index){var _this26=this;var action=this.outstandingPuts_[index].action;var request=this.outstandingPuts_[index].request;var onComplete=this.outstandingPuts_[index].onComplete;this.outstandingPuts_[index].queued=this.connected_;this.sendRequest(action,request,function(message){_this26.log_(action+' response',message);delete _this26.outstandingPuts_[index];_this26.outstandingPutCount_--;// Clean up array occasionally.
if(_this26.outstandingPutCount_===0){_this26.outstandingPuts_=[];}if(onComplete){onComplete(message[/*status*/'s'],message[/* data */'d']);}});}},{key:"reportStats",value:function reportStats(stats){var _this27=this;// If we're not connected, we just drop the stats.
if(this.connected_){var request={/*counters*/c:stats};this.log_('reportStats',request);this.sendRequest(/*stats*/'s',request,function(result){var status=result[/*status*/'s'];if(status!=='ok'){var errorReason=result[/* data */'d'];_this27.log_('reportStats','Error sending stats: '+errorReason);}});}}},{key:"onDataMessage_",value:function onDataMessage_(message){if('r'in message){// this is a response
this.log_('from server: '+stringify(message));var reqNum=message['r'];var onResponse=this.requestCBHash_[reqNum];if(onResponse){delete this.requestCBHash_[reqNum];onResponse(message[/*body*/'b']);}}else if('error'in message){throw 'A server-side error has occurred: '+message['error'];}else if('a'in message){// a and b are action and body, respectively
this.onDataPush_(message['a'],message['b']);}}},{key:"onDataPush_",value:function onDataPush_(action,body){this.log_('handleServerMessage',action,body);if(action==='d'){this.onDataUpdate_(body[/*path*/'p'],body[/*data*/'d'],/*isMerge*/false,body['t']);}else if(action==='m'){this.onDataUpdate_(body[/*path*/'p'],body[/*data*/'d'],/*isMerge=*/true,body['t']);}else if(action==='c'){this.onListenRevoked_(body[/*path*/'p'],body[/*query*/'q']);}else if(action==='ac'){this.onAuthRevoked_(body[/*status code*/'s'],body[/* explanation */'d']);}else if(action==='apc'){this.onAppCheckRevoked_(body[/*status code*/'s'],body[/* explanation */'d']);}else if(action==='sd'){this.onSecurityDebugPacket_(body);}else {error('Unrecognized action received from server: '+stringify(action)+'\nAre you using the latest client?');}}},{key:"onReady_",value:function onReady_(timestamp,sessionId){this.log_('connection ready');this.connected_=true;this.lastConnectionEstablishedTime_=new Date().getTime();this.handleTimestamp_(timestamp);this.lastSessionId=sessionId;if(this.firstConnection_){this.sendConnectStats_();}this.restoreState_();this.firstConnection_=false;this.onConnectStatus_(true);}},{key:"scheduleConnect_",value:function scheduleConnect_(timeout){var _this28=this;assert(!this.realtime_,"Scheduling a connect when we're already connected/ing?");if(this.establishConnectionTimer_){clearTimeout(this.establishConnectionTimer_);}// NOTE: Even when timeout is 0, it's important to do a setTimeout to work around an infuriating "Security Error" in
// Firefox when trying to write to our long-polling iframe in some scenarios (e.g. Forge or our unit tests).
this.establishConnectionTimer_=setTimeout(function(){_this28.establishConnectionTimer_=null;_this28.establishConnection_();// eslint-disable-next-line @typescript-eslint/no-explicit-any
},Math.floor(timeout));}},{key:"initConnection_",value:function initConnection_(){if(!this.realtime_&&this.firstConnection_){this.scheduleConnect_(0);}}},{key:"onVisible_",value:function onVisible_(visible){// NOTE: Tabbing away and back to a window will defeat our reconnect backoff, but I think that's fine.
if(visible&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_){this.log_('Window became visible.  Reducing delay.');this.reconnectDelay_=RECONNECT_MIN_DELAY;if(!this.realtime_){this.scheduleConnect_(0);}}this.visible_=visible;}},{key:"onOnline_",value:function onOnline_(online){if(online){this.log_('Browser went online.');this.reconnectDelay_=RECONNECT_MIN_DELAY;if(!this.realtime_){this.scheduleConnect_(0);}}else {this.log_('Browser went offline.  Killing connection.');if(this.realtime_){this.realtime_.close();}}}},{key:"onRealtimeDisconnect_",value:function onRealtimeDisconnect_(){this.log_('data client disconnected');this.connected_=false;this.realtime_=null;// Since we don't know if our sent transactions succeeded or not, we need to cancel them.
this.cancelSentTransactions_();// Clear out the pending requests.
this.requestCBHash_={};if(this.shouldReconnect_()){if(!this.visible_){this.log_("Window isn't visible.  Delaying reconnect.");this.reconnectDelay_=this.maxReconnectDelay_;this.lastConnectionAttemptTime_=new Date().getTime();}else if(this.lastConnectionEstablishedTime_){// If we've been connected long enough, reset reconnect delay to minimum.
var timeSinceLastConnectSucceeded=new Date().getTime()-this.lastConnectionEstablishedTime_;if(timeSinceLastConnectSucceeded>RECONNECT_DELAY_RESET_TIMEOUT){this.reconnectDelay_=RECONNECT_MIN_DELAY;}this.lastConnectionEstablishedTime_=null;}var timeSinceLastConnectAttempt=new Date().getTime()-this.lastConnectionAttemptTime_;var reconnectDelay=Math.max(0,this.reconnectDelay_-timeSinceLastConnectAttempt);reconnectDelay=Math.random()*reconnectDelay;this.log_('Trying to reconnect in '+reconnectDelay+'ms');this.scheduleConnect_(reconnectDelay);// Adjust reconnect delay for next time.
this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*RECONNECT_DELAY_MULTIPLIER);}this.onConnectStatus_(false);}},{key:"establishConnection_",value:function(){var _establishConnection_=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(){var _this29=this;var onDataMessage,onReady,_onDisconnect,connId,lastSessionId,canceled,connection,closeFn,sendRequestFn,forceRefresh,_yield$Promise$all,_yield$Promise$all2,authToken,appCheckToken;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!this.shouldReconnect_()){_context.next=30;break;}this.log_('Making a connection attempt');this.lastConnectionAttemptTime_=new Date().getTime();this.lastConnectionEstablishedTime_=null;onDataMessage=this.onDataMessage_.bind(this);onReady=this.onReady_.bind(this);_onDisconnect=this.onRealtimeDisconnect_.bind(this);connId=this.id+':'+PersistentConnection.nextConnectionId_++;lastSessionId=this.lastSessionId;canceled=false;connection=null;closeFn=function closeFn(){if(connection){connection.close();}else {canceled=true;_onDisconnect();}};sendRequestFn=function sendRequestFn(msg){assert(connection,"sendRequest call when we're not connected not allowed.");connection.sendRequest(msg);};this.realtime_={close:closeFn,sendRequest:sendRequestFn};forceRefresh=this.forceTokenRefresh_;this.forceTokenRefresh_=false;_context.prev=16;_context.next=19;return Promise.all([this.authTokenProvider_.getToken(forceRefresh),this.appCheckTokenProvider_.getToken(forceRefresh)]);case 19:_yield$Promise$all=_context.sent;_yield$Promise$all2=_slicedToArray(_yield$Promise$all,2);authToken=_yield$Promise$all2[0];appCheckToken=_yield$Promise$all2[1];if(!canceled){log('getToken() completed. Creating connection.');this.authToken_=authToken&&authToken.accessToken;this.appCheckToken_=appCheckToken&&appCheckToken.token;connection=new Connection(connId,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,onDataMessage,onReady,_onDisconnect,/* onKill= */function(reason){warn(reason+' ('+_this29.repoInfo_.toString()+')');_this29.interrupt(SERVER_KILL_INTERRUPT_REASON);},lastSessionId);}else {log('getToken() completed but was canceled');}_context.next=30;break;case 26:_context.prev=26;_context.t0=_context["catch"](16);this.log_('Failed to get token: '+_context.t0);if(!canceled){if(this.repoInfo_.nodeAdmin){// This may be a critical error for the Admin Node.js SDK, so log a warning.
// But getToken() may also just have temporarily failed, so we still want to
// continue retrying.
warn(_context.t0);}closeFn();}case 30:case"end":return _context.stop();}}},_callee,this,[[16,26]]);}));function establishConnection_(){return _establishConnection_.apply(this,arguments);}return establishConnection_;}()},{key:"interrupt",value:function interrupt(reason){log('Interrupting connection for reason: '+reason);this.interruptReasons_[reason]=true;if(this.realtime_){this.realtime_.close();}else {if(this.establishConnectionTimer_){clearTimeout(this.establishConnectionTimer_);this.establishConnectionTimer_=null;}if(this.connected_){this.onRealtimeDisconnect_();}}}},{key:"resume",value:function resume(reason){log('Resuming connection for reason: '+reason);delete this.interruptReasons_[reason];if(isEmpty(this.interruptReasons_)){this.reconnectDelay_=RECONNECT_MIN_DELAY;if(!this.realtime_){this.scheduleConnect_(0);}}}},{key:"handleTimestamp_",value:function handleTimestamp_(timestamp){var delta=timestamp-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:delta});}},{key:"cancelSentTransactions_",value:function cancelSentTransactions_(){for(var i=0;i<this.outstandingPuts_.length;i++){var put=this.outstandingPuts_[i];if(put&&/*hash*/'h'in put.request&&put.queued){if(put.onComplete){put.onComplete('disconnect');}delete this.outstandingPuts_[i];this.outstandingPutCount_--;}}// Clean up array occasionally.
if(this.outstandingPutCount_===0){this.outstandingPuts_=[];}}},{key:"onListenRevoked_",value:function onListenRevoked_(pathString,query){// Remove the listen and manufacture a "permission_denied" error for the failed listen.
var queryId;if(!query){queryId='default';}else {queryId=query.map(function(q){return ObjectToUniqueKey(q);}).join('$');}var listen=this.removeListen_(pathString,queryId);if(listen&&listen.onComplete){listen.onComplete('permission_denied');}}},{key:"removeListen_",value:function removeListen_(pathString,queryId){var normalizedPathString=new Path(pathString).toString();// normalize path.
var listen;if(this.listens.has(normalizedPathString)){var _map=this.listens.get(normalizedPathString);listen=_map.get(queryId);_map["delete"](queryId);if(_map.size===0){this.listens["delete"](normalizedPathString);}}else {// all listens for this path has already been removed
listen=undefined;}return listen;}},{key:"onAuthRevoked_",value:function onAuthRevoked_(statusCode,explanation){log('Auth token revoked: '+statusCode+'/'+explanation);this.authToken_=null;this.forceTokenRefresh_=true;this.realtime_.close();if(statusCode==='invalid_token'||statusCode==='permission_denied'){// We'll wait a couple times before logging the warning / increasing the
// retry period since oauth tokens will report as "invalid" if they're
// just expired. Plus there may be transient issues that resolve themselves.
this.invalidAuthTokenCount_++;if(this.invalidAuthTokenCount_>=INVALID_TOKEN_THRESHOLD){// Set a long reconnect delay because recovery is unlikely
this.reconnectDelay_=RECONNECT_MAX_DELAY_FOR_ADMINS;// Notify the auth token provider that the token is invalid, which will log
// a warning
this.authTokenProvider_.notifyForInvalidToken();}}}},{key:"onAppCheckRevoked_",value:function onAppCheckRevoked_(statusCode,explanation){log('App check token revoked: '+statusCode+'/'+explanation);this.appCheckToken_=null;this.forceTokenRefresh_=true;// Note: We don't close the connection as the developer may not have
// enforcement enabled. The backend closes connections with enforcements.
if(statusCode==='invalid_token'||statusCode==='permission_denied'){// We'll wait a couple times before logging the warning / increasing the
// retry period since oauth tokens will report as "invalid" if they're
// just expired. Plus there may be transient issues that resolve themselves.
this.invalidAppCheckTokenCount_++;if(this.invalidAppCheckTokenCount_>=INVALID_TOKEN_THRESHOLD){this.appCheckTokenProvider_.notifyForInvalidToken();}}}},{key:"onSecurityDebugPacket_",value:function onSecurityDebugPacket_(body){if(this.securityDebugCallback_){this.securityDebugCallback_(body);}else {if('msg'in body){console.log('FIREBASE: '+body['msg'].replace('\n','\nFIREBASE: '));}}}},{key:"restoreState_",value:function restoreState_(){//Re-authenticate ourselves if we have a credential stored.
this.tryAuth();this.tryAppCheck();// Puts depend on having received the corresponding data update from the server before they complete, so we must
// make sure to send listens before puts.
var _iterator2=_createForOfIteratorHelper(this.listens.values()),_step2;try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var queries=_step2.value;var _iterator3=_createForOfIteratorHelper(queries.values()),_step3;try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var listenSpec=_step3.value;this.sendListen_(listenSpec);}}catch(err){_iterator3.e(err);}finally{_iterator3.f();}}}catch(err){_iterator2.e(err);}finally{_iterator2.f();}for(var i=0;i<this.outstandingPuts_.length;i++){if(this.outstandingPuts_[i]){this.sendPut_(i);}}while(this.onDisconnectRequestQueue_.length){var request=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(request.action,request.pathString,request.data,request.onComplete);}for(var _i3=0;_i3<this.outstandingGets_.length;_i3++){if(this.outstandingGets_[_i3]){this.sendGet_(_i3);}}}/**
     * Sends client stats for first connection
     */},{key:"sendConnectStats_",value:function sendConnectStats_(){var stats={};var clientName='js';stats['sdk.'+clientName+'.'+SDK_VERSION.replace(/\./g,'-')]=1;if(isMobileCordova()){stats['framework.cordova']=1;}else if(isReactNative()){stats['framework.reactnative']=1;}this.reportStats(stats);}},{key:"shouldReconnect_",value:function shouldReconnect_(){var online=OnlineMonitor.getInstance().currentlyOnline();return isEmpty(this.interruptReasons_)&&online;}}],[{key:"warnOnListenWarnings_",value:function warnOnListenWarnings_(payload,query){if(payload&&_typeof(payload)==='object'&&contains(payload,'w')){// eslint-disable-next-line @typescript-eslint/no-explicit-any
var warnings=safeGet(payload,'w');if(Array.isArray(warnings)&&~warnings.indexOf('no_index')){var indexSpec='".indexOn": "'+query._queryParams.getIndex().toString()+'"';var indexPath=query._path.toString();warn("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(indexSpec," at ")+"".concat(indexPath," to your security rules for better performance."));}}}}]);return PersistentConnection;}(ServerActions);PersistentConnection.nextPersistentConnectionId_=0;/**
 * Counter for number of connections created. Mainly used for tagging in the logs
 */PersistentConnection.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var NamedNode=/*#__PURE__*/function(){function NamedNode(name,node){_classCallCheck(this,NamedNode);this.name=name;this.node=node;}_createClass(NamedNode,null,[{key:"Wrap",value:function Wrap(name,node){return new NamedNode(name,node);}}]);return NamedNode;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Index=/*#__PURE__*/function(){function Index(){_classCallCheck(this,Index);}_createClass(Index,[{key:"getCompare",value:/**
     * @returns A standalone comparison function for
     * this index
     */function getCompare(){return this.compare.bind(this);}/**
     * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
     * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
     *
     *
     * @returns True if the portion of the snapshot being indexed changed between oldNode and newNode
     */},{key:"indexedValueChanged",value:function indexedValueChanged(oldNode,newNode){var oldWrapped=new NamedNode(MIN_NAME,oldNode);var newWrapped=new NamedNode(MIN_NAME,newNode);return this.compare(oldWrapped,newWrapped)!==0;}/**
     * @returns a node wrapper that will sort equal to or less than
     * any other node wrapper, using this index
     */},{key:"minPost",value:function minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return NamedNode.MIN;}}]);return Index;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var __EMPTY_NODE;var KeyIndex=/*#__PURE__*/function(_Index){_inherits(KeyIndex,_Index);var _super4=_createSuper(KeyIndex);function KeyIndex(){_classCallCheck(this,KeyIndex);return _super4.apply(this,arguments);}_createClass(KeyIndex,[{key:"compare",value:function compare(a,b){return nameCompare(a.name,b.name);}},{key:"isDefinedOn",value:function isDefinedOn(node){// We could probably return true here (since every node has a key), but it's never called
// so just leaving unimplemented for now.
throw assertionError('KeyIndex.isDefinedOn not expected to be called.');}},{key:"indexedValueChanged",value:function indexedValueChanged(oldNode,newNode){return false;// The key for a node never changes.
}},{key:"minPost",value:function minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return NamedNode.MIN;}},{key:"maxPost",value:function maxPost(){// TODO: This should really be created once and cached in a static property, but
// NamedNode isn't defined yet, so I can't use it in a static.  Bleh.
return new NamedNode(MAX_NAME,__EMPTY_NODE);}},{key:"makePost",value:function makePost(indexValue,name){assert(typeof indexValue==='string','KeyIndex indexValue must always be a string.');// We just use empty node, but it'll never be compared, since our comparator only looks at name.
return new NamedNode(indexValue,__EMPTY_NODE);}/**
     * @returns String representation for inclusion in a query spec
     */},{key:"toString",value:function toString(){return '.key';}}],[{key:"__EMPTY_NODE",get:function get(){return __EMPTY_NODE;},set:function set(val){__EMPTY_NODE=val;}}]);return KeyIndex;}(Index);var KEY_INDEX=new KeyIndex();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An iterator over an LLRBNode.
 */var SortedMapIterator=/*#__PURE__*/function(){/**
     * @param node - Node to iterate.
     * @param isReverse_ - Whether or not to iterate in reverse
     */function SortedMapIterator(node,startKey,comparator,isReverse_){var resultGenerator_=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;_classCallCheck(this,SortedMapIterator);this.isReverse_=isReverse_;this.resultGenerator_=resultGenerator_;this.nodeStack_=[];var cmp=1;while(!node.isEmpty()){node=node;cmp=startKey?comparator(node.key,startKey):1;// flip the comparison if we're going in reverse
if(isReverse_){cmp*=-1;}if(cmp<0){// This node is less than our start key. ignore it
if(this.isReverse_){node=node.left;}else {node=node.right;}}else if(cmp===0){// This node is exactly equal to our start key. Push it on the stack, but stop iterating;
this.nodeStack_.push(node);break;}else {// This node is greater than our start key, add it to the stack and move to the next one
this.nodeStack_.push(node);if(this.isReverse_){node=node.right;}else {node=node.left;}}}}_createClass(SortedMapIterator,[{key:"getNext",value:function getNext(){if(this.nodeStack_.length===0){return null;}var node=this.nodeStack_.pop();var result;if(this.resultGenerator_){result=this.resultGenerator_(node.key,node.value);}else {result={key:node.key,value:node.value};}if(this.isReverse_){node=node.left;while(!node.isEmpty()){this.nodeStack_.push(node);node=node.right;}}else {node=node.right;while(!node.isEmpty()){this.nodeStack_.push(node);node=node.left;}}return result;}},{key:"hasNext",value:function hasNext(){return this.nodeStack_.length>0;}},{key:"peek",value:function peek(){if(this.nodeStack_.length===0){return null;}var node=this.nodeStack_[this.nodeStack_.length-1];if(this.resultGenerator_){return this.resultGenerator_(node.key,node.value);}else {return {key:node.key,value:node.value};}}}]);return SortedMapIterator;}();/**
 * Represents a node in a Left-leaning Red-Black tree.
 */var LLRBNode=/*#__PURE__*/function(){/**
     * @param key - Key associated with this node.
     * @param value - Value associated with this node.
     * @param color - Whether this node is red.
     * @param left - Left child.
     * @param right - Right child.
     */function LLRBNode(key,value,color,left,right){_classCallCheck(this,LLRBNode);this.key=key;this.value=value;this.color=color!=null?color:LLRBNode.RED;this.left=left!=null?left:SortedMap.EMPTY_NODE;this.right=right!=null?right:SortedMap.EMPTY_NODE;}/**
     * Returns a copy of the current node, optionally replacing pieces of it.
     *
     * @param key - New key for the node, or null.
     * @param value - New value for the node, or null.
     * @param color - New color for the node, or null.
     * @param left - New left child for the node, or null.
     * @param right - New right child for the node, or null.
     * @returns The node copy.
     */_createClass(LLRBNode,[{key:"copy",value:function copy(key,value,color,left,right){return new LLRBNode(key!=null?key:this.key,value!=null?value:this.value,color!=null?color:this.color,left!=null?left:this.left,right!=null?right:this.right);}/**
     * @returns The total number of nodes in the tree.
     */},{key:"count",value:function count(){return this.left.count()+1+this.right.count();}/**
     * @returns True if the tree is empty.
     */},{key:"isEmpty",value:function isEmpty(){return false;}/**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     *   node.  If it returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */},{key:"inorderTraversal",value:function inorderTraversal(action){return this.left.inorderTraversal(action)||!!action(this.key,this.value)||this.right.inorderTraversal(action);}/**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */},{key:"reverseTraversal",value:function reverseTraversal(action){return this.right.reverseTraversal(action)||action(this.key,this.value)||this.left.reverseTraversal(action);}/**
     * @returns The minimum node in the tree.
     */},{key:"min_",value:function min_(){if(this.left.isEmpty()){return this;}else {return this.left.min_();}}/**
     * @returns The maximum key in the tree.
     */},{key:"minKey",value:function minKey(){return this.min_().key;}/**
     * @returns The maximum key in the tree.
     */},{key:"maxKey",value:function maxKey(){if(this.right.isEmpty()){return this.key;}else {return this.right.maxKey();}}/**
     * @param key - Key to insert.
     * @param value - Value to insert.
     * @param comparator - Comparator.
     * @returns New tree, with the key/value added.
     */},{key:"insert",value:function insert(key,value,comparator){var n=this;var cmp=comparator(key,n.key);if(cmp<0){n=n.copy(null,null,null,n.left.insert(key,value,comparator),null);}else if(cmp===0){n=n.copy(null,value,null,null,null);}else {n=n.copy(null,null,null,null,n.right.insert(key,value,comparator));}return n.fixUp_();}/**
     * @returns New tree, with the minimum key removed.
     */},{key:"removeMin_",value:function removeMin_(){if(this.left.isEmpty()){return SortedMap.EMPTY_NODE;}var n=this;if(!n.left.isRed_()&&!n.left.left.isRed_()){n=n.moveRedLeft_();}n=n.copy(null,null,null,n.left.removeMin_(),null);return n.fixUp_();}/**
     * @param key - The key of the item to remove.
     * @param comparator - Comparator.
     * @returns New tree, with the specified item removed.
     */},{key:"remove",value:function remove(key,comparator){var n,smallest;n=this;if(comparator(key,n.key)<0){if(!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()){n=n.moveRedLeft_();}n=n.copy(null,null,null,n.left.remove(key,comparator),null);}else {if(n.left.isRed_()){n=n.rotateRight_();}if(!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()){n=n.moveRedRight_();}if(comparator(key,n.key)===0){if(n.right.isEmpty()){return SortedMap.EMPTY_NODE;}else {smallest=n.right.min_();n=n.copy(smallest.key,smallest.value,null,null,n.right.removeMin_());}}n=n.copy(null,null,null,null,n.right.remove(key,comparator));}return n.fixUp_();}/**
     * @returns Whether this is a RED node.
     */},{key:"isRed_",value:function isRed_(){return this.color;}/**
     * @returns New tree after performing any needed rotations.
     */},{key:"fixUp_",value:function fixUp_(){var n=this;if(n.right.isRed_()&&!n.left.isRed_()){n=n.rotateLeft_();}if(n.left.isRed_()&&n.left.left.isRed_()){n=n.rotateRight_();}if(n.left.isRed_()&&n.right.isRed_()){n=n.colorFlip_();}return n;}/**
     * @returns New tree, after moveRedLeft.
     */},{key:"moveRedLeft_",value:function moveRedLeft_(){var n=this.colorFlip_();if(n.right.left.isRed_()){n=n.copy(null,null,null,null,n.right.rotateRight_());n=n.rotateLeft_();n=n.colorFlip_();}return n;}/**
     * @returns New tree, after moveRedRight.
     */},{key:"moveRedRight_",value:function moveRedRight_(){var n=this.colorFlip_();if(n.left.left.isRed_()){n=n.rotateRight_();n=n.colorFlip_();}return n;}/**
     * @returns New tree, after rotateLeft.
     */},{key:"rotateLeft_",value:function rotateLeft_(){var nl=this.copy(null,null,LLRBNode.RED,null,this.right.left);return this.right.copy(null,null,this.color,nl,null);}/**
     * @returns New tree, after rotateRight.
     */},{key:"rotateRight_",value:function rotateRight_(){var nr=this.copy(null,null,LLRBNode.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,nr);}/**
     * @returns Newt ree, after colorFlip.
     */},{key:"colorFlip_",value:function colorFlip_(){var left=this.left.copy(null,null,!this.left.color,null,null);var right=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,left,right);}/**
     * For testing.
     *
     * @returns True if all is well.
     */},{key:"checkMaxDepth_",value:function checkMaxDepth_(){var blackDepth=this.check_();return Math.pow(2.0,blackDepth)<=this.count()+1;}},{key:"check_",value:function check_(){if(this.isRed_()&&this.left.isRed_()){throw new Error('Red node has red child('+this.key+','+this.value+')');}if(this.right.isRed_()){throw new Error('Right child of ('+this.key+','+this.value+') is red');}var blackDepth=this.left.check_();if(blackDepth!==this.right.check_()){throw new Error('Black depths differ');}else {return blackDepth+(this.isRed_()?0:1);}}}]);return LLRBNode;}();LLRBNode.RED=true;LLRBNode.BLACK=false;/**
 * Represents an empty node (a leaf node in the Red-Black Tree).
 */var LLRBEmptyNode=/*#__PURE__*/function(){function LLRBEmptyNode(){_classCallCheck(this,LLRBEmptyNode);}_createClass(LLRBEmptyNode,[{key:"copy",value:/**
     * Returns a copy of the current node.
     *
     * @returns The node copy.
     */function copy(key,value,color,left,right){return this;}/**
     * Returns a copy of the tree, with the specified key/value added.
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @param comparator - Comparator.
     * @returns New tree, with item added.
     */},{key:"insert",value:function insert(key,value,comparator){return new LLRBNode(key,value,null);}/**
     * Returns a copy of the tree, with the specified key removed.
     *
     * @param key - The key to remove.
     * @param comparator - Comparator.
     * @returns New tree, with item removed.
     */},{key:"remove",value:function remove(key,comparator){return this;}/**
     * @returns The total number of nodes in the tree.
     */},{key:"count",value:function count(){return 0;}/**
     * @returns True if the tree is empty.
     */},{key:"isEmpty",value:function isEmpty(){return true;}/**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */},{key:"inorderTraversal",value:function inorderTraversal(action){return false;}/**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param action - Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @returns True if traversal was aborted.
     */},{key:"reverseTraversal",value:function reverseTraversal(action){return false;}},{key:"minKey",value:function minKey(){return null;}},{key:"maxKey",value:function maxKey(){return null;}},{key:"check_",value:function check_(){return 0;}/**
     * @returns Whether this node is red.
     */},{key:"isRed_",value:function isRed_(){return false;}}]);return LLRBEmptyNode;}();/**
 * An immutable sorted map implementation, based on a Left-leaning Red-Black
 * tree.
 */var SortedMap=/*#__PURE__*/function(){/**
     * @param comparator_ - Key comparator.
     * @param root_ - Optional root node for the map.
     */function SortedMap(comparator_){var root_=arguments.length>1&&arguments[1]!==undefined?arguments[1]:SortedMap.EMPTY_NODE;_classCallCheck(this,SortedMap);this.comparator_=comparator_;this.root_=root_;}/**
     * Returns a copy of the map, with the specified key/value added or replaced.
     * (TODO: We should perhaps rename this method to 'put')
     *
     * @param key - Key to be added.
     * @param value - Value to be added.
     * @returns New map, with item added.
     */_createClass(SortedMap,[{key:"insert",value:function insert(key,value){return new SortedMap(this.comparator_,this.root_.insert(key,value,this.comparator_).copy(null,null,LLRBNode.BLACK,null,null));}/**
     * Returns a copy of the map, with the specified key removed.
     *
     * @param key - The key to remove.
     * @returns New map, with item removed.
     */},{key:"remove",value:function remove(key){return new SortedMap(this.comparator_,this.root_.remove(key,this.comparator_).copy(null,null,LLRBNode.BLACK,null,null));}/**
     * Returns the value of the node with the given key, or null.
     *
     * @param key - The key to look up.
     * @returns The value of the node with the given key, or null if the
     * key doesn't exist.
     */},{key:"get",value:function get(key){var cmp;var node=this.root_;while(!node.isEmpty()){cmp=this.comparator_(key,node.key);if(cmp===0){return node.value;}else if(cmp<0){node=node.left;}else if(cmp>0){node=node.right;}}return null;}/**
     * Returns the key of the item *before* the specified key, or null if key is the first item.
     * @param key - The key to find the predecessor of
     * @returns The predecessor key.
     */},{key:"getPredecessorKey",value:function getPredecessorKey(key){var cmp,node=this.root_,rightParent=null;while(!node.isEmpty()){cmp=this.comparator_(key,node.key);if(cmp===0){if(!node.left.isEmpty()){node=node.left;while(!node.right.isEmpty()){node=node.right;}return node.key;}else if(rightParent){return rightParent.key;}else {return null;// first item.
}}else if(cmp<0){node=node.left;}else if(cmp>0){rightParent=node;node=node.right;}}throw new Error('Attempted to find predecessor key for a nonexistent key.  What gives?');}/**
     * @returns True if the map is empty.
     */},{key:"isEmpty",value:function isEmpty(){return this.root_.isEmpty();}/**
     * @returns The total number of nodes in the map.
     */},{key:"count",value:function count(){return this.root_.count();}/**
     * @returns The minimum key in the map.
     */},{key:"minKey",value:function minKey(){return this.root_.minKey();}/**
     * @returns The maximum key in the map.
     */},{key:"maxKey",value:function maxKey(){return this.root_.maxKey();}/**
     * Traverses the map in key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns The first truthy value returned by action, or the last falsey
     *   value returned by action
     */},{key:"inorderTraversal",value:function inorderTraversal(action){return this.root_.inorderTraversal(action);}/**
     * Traverses the map in reverse key order and calls the specified action function
     * for each key/value pair.
     *
     * @param action - Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @returns True if the traversal was aborted.
     */},{key:"reverseTraversal",value:function reverseTraversal(action){return this.root_.reverseTraversal(action);}/**
     * Returns an iterator over the SortedMap.
     * @returns The iterator.
     */},{key:"getIterator",value:function getIterator(resultGenerator){return new SortedMapIterator(this.root_,null,this.comparator_,false,resultGenerator);}},{key:"getIteratorFrom",value:function getIteratorFrom(key,resultGenerator){return new SortedMapIterator(this.root_,key,this.comparator_,false,resultGenerator);}},{key:"getReverseIteratorFrom",value:function getReverseIteratorFrom(key,resultGenerator){return new SortedMapIterator(this.root_,key,this.comparator_,true,resultGenerator);}},{key:"getReverseIterator",value:function getReverseIterator(resultGenerator){return new SortedMapIterator(this.root_,null,this.comparator_,true,resultGenerator);}}]);return SortedMap;}();/**
 * Always use the same empty node, to reduce memory.
 */SortedMap.EMPTY_NODE=new LLRBEmptyNode();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NAME_ONLY_COMPARATOR(left,right){return nameCompare(left.name,right.name);}function NAME_COMPARATOR(left,right){return nameCompare(left,right);}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var MAX_NODE$2;function setMaxNode$1(val){MAX_NODE$2=val;}var priorityHashText=function priorityHashText(priority){if(typeof priority==='number'){return 'number:'+doubleToIEEE754String(priority);}else {return 'string:'+priority;}};/**
 * Validates that a priority snapshot Node is valid.
 */var validatePriorityNode=function validatePriorityNode(priorityNode){if(priorityNode.isLeafNode()){var val=priorityNode.val();assert(typeof val==='string'||typeof val==='number'||_typeof(val)==='object'&&contains(val,'.sv'),'Priority must be a string or number.');}else {assert(priorityNode===MAX_NODE$2||priorityNode.isEmpty(),'priority of unexpected type.');}// Don't call getPriority() on MAX_NODE to avoid hitting assertion.
assert(priorityNode===MAX_NODE$2||priorityNode.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.");};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var __childrenNodeConstructor;/**
 * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
 * implements Node and stores the value of the node (a string,
 * number, or boolean) accessible via getValue().
 */var LeafNode=/*#__PURE__*/function(){/**
     * @param value_ - The value to store in this leaf node. The object type is
     * possible in the event of a deferred value
     * @param priorityNode_ - The priority of this node.
     */function LeafNode(value_){var priorityNode_=arguments.length>1&&arguments[1]!==undefined?arguments[1]:LeafNode.__childrenNodeConstructor.EMPTY_NODE;_classCallCheck(this,LeafNode);this.value_=value_;this.priorityNode_=priorityNode_;this.lazyHash_=null;assert(this.value_!==undefined&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value.");validatePriorityNode(this.priorityNode_);}_createClass(LeafNode,[{key:"isLeafNode",value:/** @inheritDoc */function isLeafNode(){return true;}/** @inheritDoc */},{key:"getPriority",value:function getPriority(){return this.priorityNode_;}/** @inheritDoc */},{key:"updatePriority",value:function updatePriority(newPriorityNode){return new LeafNode(this.value_,newPriorityNode);}/** @inheritDoc */},{key:"getImmediateChild",value:function getImmediateChild(childName){// Hack to treat priority as a regular child
if(childName==='.priority'){return this.priorityNode_;}else {return LeafNode.__childrenNodeConstructor.EMPTY_NODE;}}/** @inheritDoc */},{key:"getChild",value:function getChild(path){if(pathIsEmpty(path)){return this;}else if(pathGetFront(path)==='.priority'){return this.priorityNode_;}else {return LeafNode.__childrenNodeConstructor.EMPTY_NODE;}}},{key:"hasChild",value:function hasChild(){return false;}/** @inheritDoc */},{key:"getPredecessorChildName",value:function getPredecessorChildName(childName,childNode){return null;}/** @inheritDoc */},{key:"updateImmediateChild",value:function updateImmediateChild(childName,newChildNode){if(childName==='.priority'){return this.updatePriority(newChildNode);}else if(newChildNode.isEmpty()&&childName!=='.priority'){return this;}else {return LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName,newChildNode).updatePriority(this.priorityNode_);}}/** @inheritDoc */},{key:"updateChild",value:function updateChild(path,newChildNode){var front=pathGetFront(path);if(front===null){return newChildNode;}else if(newChildNode.isEmpty()&&front!=='.priority'){return this;}else {assert(front!=='.priority'||pathGetLength(path)===1,'.priority must be the last token in a path');return this.updateImmediateChild(front,LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(path),newChildNode));}}/** @inheritDoc */},{key:"isEmpty",value:function isEmpty(){return false;}/** @inheritDoc */},{key:"numChildren",value:function numChildren(){return 0;}/** @inheritDoc */},{key:"forEachChild",value:function forEachChild(index,action){return false;}},{key:"val",value:function val(exportFormat){if(exportFormat&&!this.getPriority().isEmpty()){return {'.value':this.getValue(),'.priority':this.getPriority().val()};}else {return this.getValue();}}/** @inheritDoc */},{key:"hash",value:function hash(){if(this.lazyHash_===null){var toHash='';if(!this.priorityNode_.isEmpty()){toHash+='priority:'+priorityHashText(this.priorityNode_.val())+':';}var type=_typeof(this.value_);toHash+=type+':';if(type==='number'){toHash+=doubleToIEEE754String(this.value_);}else {toHash+=this.value_;}this.lazyHash_=sha1(toHash);}return this.lazyHash_;}/**
     * Returns the value of the leaf node.
     * @returns The value of the node.
     */},{key:"getValue",value:function getValue(){return this.value_;}},{key:"compareTo",value:function compareTo(other){if(other===LeafNode.__childrenNodeConstructor.EMPTY_NODE){return 1;}else if(other instanceof LeafNode.__childrenNodeConstructor){return -1;}else {assert(other.isLeafNode(),'Unknown node type');return this.compareToLeafNode_(other);}}/**
     * Comparison specifically for two leaf nodes
     */},{key:"compareToLeafNode_",value:function compareToLeafNode_(otherLeaf){var otherLeafType=_typeof(otherLeaf.value_);var thisLeafType=_typeof(this.value_);var otherIndex=LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);var thisIndex=LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);assert(otherIndex>=0,'Unknown leaf type: '+otherLeafType);assert(thisIndex>=0,'Unknown leaf type: '+thisLeafType);if(otherIndex===thisIndex){// Same type, compare values
if(thisLeafType==='object'){// Deferred value nodes are all equal, but we should also never get to this point...
return 0;}else {// Note that this works because true > false, all others are number or string comparisons
if(this.value_<otherLeaf.value_){return -1;}else if(this.value_===otherLeaf.value_){return 0;}else {return 1;}}}else {return thisIndex-otherIndex;}}},{key:"withIndex",value:function withIndex(){return this;}},{key:"isIndexed",value:function isIndexed(){return true;}},{key:"equals",value:function equals(other){if(other===this){return true;}else if(other.isLeafNode()){var otherLeaf=other;return this.value_===otherLeaf.value_&&this.priorityNode_.equals(otherLeaf.priorityNode_);}else {return false;}}}],[{key:"__childrenNodeConstructor",get:function get(){return __childrenNodeConstructor;},set:function set(val){__childrenNodeConstructor=val;}}]);return LeafNode;}();/**
 * The sort order for comparing leaf nodes of different types. If two leaf nodes have
 * the same type, the comparison falls back to their value
 */LeafNode.VALUE_TYPE_ORDER=['object','boolean','number','string'];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nodeFromJSON$1;var MAX_NODE$1;function setNodeFromJSON(val){nodeFromJSON$1=val;}function setMaxNode(val){MAX_NODE$1=val;}var PriorityIndex=/*#__PURE__*/function(_Index2){_inherits(PriorityIndex,_Index2);var _super5=_createSuper(PriorityIndex);function PriorityIndex(){_classCallCheck(this,PriorityIndex);return _super5.apply(this,arguments);}_createClass(PriorityIndex,[{key:"compare",value:function compare(a,b){var aPriority=a.node.getPriority();var bPriority=b.node.getPriority();var indexCmp=aPriority.compareTo(bPriority);if(indexCmp===0){return nameCompare(a.name,b.name);}else {return indexCmp;}}},{key:"isDefinedOn",value:function isDefinedOn(node){return !node.getPriority().isEmpty();}},{key:"indexedValueChanged",value:function indexedValueChanged(oldNode,newNode){return !oldNode.getPriority().equals(newNode.getPriority());}},{key:"minPost",value:function minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return NamedNode.MIN;}},{key:"maxPost",value:function maxPost(){return new NamedNode(MAX_NAME,new LeafNode('[PRIORITY-POST]',MAX_NODE$1));}},{key:"makePost",value:function makePost(indexValue,name){var priorityNode=nodeFromJSON$1(indexValue);return new NamedNode(name,new LeafNode('[PRIORITY-POST]',priorityNode));}/**
     * @returns String representation for inclusion in a query spec
     */},{key:"toString",value:function toString(){return '.priority';}}]);return PriorityIndex;}(Index);var PRIORITY_INDEX=new PriorityIndex();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var LOG_2=Math.log(2);var Base12Num=/*#__PURE__*/function(){function Base12Num(length){_classCallCheck(this,Base12Num);var logBase2=function logBase2(num){return(// eslint-disable-next-line @typescript-eslint/no-explicit-any
parseInt(Math.log(num)/LOG_2,10));};var bitMask=function bitMask(bits){return parseInt(Array(bits+1).join('1'),2);};this.count=logBase2(length+1);this.current_=this.count-1;var mask=bitMask(this.count);this.bits_=length+1&mask;}_createClass(Base12Num,[{key:"nextBitIsOne",value:function nextBitIsOne(){//noinspection JSBitwiseOperatorUsage
var result=!(this.bits_&0x1<<this.current_);this.current_--;return result;}}]);return Base12Num;}();/**
 * Takes a list of child nodes and constructs a SortedSet using the given comparison
 * function
 *
 * Uses the algorithm described in the paper linked here:
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
 *
 * @param childList - Unsorted list of children
 * @param cmp - The comparison method to be used
 * @param keyFn - An optional function to extract K from a node wrapper, if K's
 * type is not NamedNode
 * @param mapSortFn - An optional override for comparator used by the generated sorted map
 */var buildChildSet=function buildChildSet(childList,cmp,keyFn,mapSortFn){childList.sort(cmp);var buildBalancedTree=function buildBalancedTree(low,high){var length=high-low;var namedNode;var key;if(length===0){return null;}else if(length===1){namedNode=childList[low];key=keyFn?keyFn(namedNode):namedNode;return new LLRBNode(key,namedNode.node,LLRBNode.BLACK,null,null);}else {// eslint-disable-next-line @typescript-eslint/no-explicit-any
var middle=parseInt(length/2,10)+low;var left=buildBalancedTree(low,middle);var right=buildBalancedTree(middle+1,high);namedNode=childList[middle];key=keyFn?keyFn(namedNode):namedNode;return new LLRBNode(key,namedNode.node,LLRBNode.BLACK,left,right);}};var buildFrom12Array=function buildFrom12Array(base12){var node=null;var root=null;var index=childList.length;var buildPennant=function buildPennant(chunkSize,color){var low=index-chunkSize;var high=index;index-=chunkSize;var childTree=buildBalancedTree(low+1,high);var namedNode=childList[low];var key=keyFn?keyFn(namedNode):namedNode;attachPennant(new LLRBNode(key,namedNode.node,color,null,childTree));};var attachPennant=function attachPennant(pennant){if(node){node.left=pennant;node=pennant;}else {root=pennant;node=pennant;}};for(var i=0;i<base12.count;++i){var isOne=base12.nextBitIsOne();// The number of nodes taken in each slice is 2^(arr.length - (i + 1))
var chunkSize=Math.pow(2,base12.count-(i+1));if(isOne){buildPennant(chunkSize,LLRBNode.BLACK);}else {// current == 2
buildPennant(chunkSize,LLRBNode.BLACK);buildPennant(chunkSize,LLRBNode.RED);}}return root;};var base12=new Base12Num(childList.length);var root=buildFrom12Array(base12);// eslint-disable-next-line @typescript-eslint/no-explicit-any
return new SortedMap(mapSortFn||cmp,root);};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _defaultIndexMap;var fallbackObject={};var IndexMap=/*#__PURE__*/function(){function IndexMap(indexes_,indexSet_){_classCallCheck(this,IndexMap);this.indexes_=indexes_;this.indexSet_=indexSet_;}/**
     * The default IndexMap for nodes without a priority
     */_createClass(IndexMap,[{key:"get",value:function get(indexKey){var sortedMap=safeGet(this.indexes_,indexKey);if(!sortedMap){throw new Error('No index defined for '+indexKey);}if(sortedMap instanceof SortedMap){return sortedMap;}else {// The index exists, but it falls back to just name comparison. Return null so that the calling code uses the
// regular child map
return null;}}},{key:"hasIndex",value:function hasIndex(indexDefinition){return contains(this.indexSet_,indexDefinition.toString());}},{key:"addIndex",value:function addIndex(indexDefinition,existingChildren){assert(indexDefinition!==KEY_INDEX,"KeyIndex always exists and isn't meant to be added to the IndexMap.");var childList=[];var sawIndexedValue=false;var iter=existingChildren.getIterator(NamedNode.Wrap);var next=iter.getNext();while(next){sawIndexedValue=sawIndexedValue||indexDefinition.isDefinedOn(next.node);childList.push(next);next=iter.getNext();}var newIndex;if(sawIndexedValue){newIndex=buildChildSet(childList,indexDefinition.getCompare());}else {newIndex=fallbackObject;}var indexName=indexDefinition.toString();var newIndexSet=Object.assign({},this.indexSet_);newIndexSet[indexName]=indexDefinition;var newIndexes=Object.assign({},this.indexes_);newIndexes[indexName]=newIndex;return new IndexMap(newIndexes,newIndexSet);}/**
     * Ensure that this node is properly tracked in any indexes that we're maintaining
     */},{key:"addToIndexes",value:function addToIndexes(namedNode,existingChildren){var _this30=this;var newIndexes=map(this.indexes_,function(indexedChildren,indexName){var index=safeGet(_this30.indexSet_,indexName);assert(index,'Missing index implementation for '+indexName);if(indexedChildren===fallbackObject){// Check to see if we need to index everything
if(index.isDefinedOn(namedNode.node)){// We need to build this index
var childList=[];var iter=existingChildren.getIterator(NamedNode.Wrap);var next=iter.getNext();while(next){if(next.name!==namedNode.name){childList.push(next);}next=iter.getNext();}childList.push(namedNode);return buildChildSet(childList,index.getCompare());}else {// No change, this remains a fallback
return fallbackObject;}}else {var existingSnap=existingChildren.get(namedNode.name);var newChildren=indexedChildren;if(existingSnap){newChildren=newChildren.remove(new NamedNode(namedNode.name,existingSnap));}return newChildren.insert(namedNode,namedNode.node);}});return new IndexMap(newIndexes,this.indexSet_);}/**
     * Create a new IndexMap instance with the given value removed
     */},{key:"removeFromIndexes",value:function removeFromIndexes(namedNode,existingChildren){var newIndexes=map(this.indexes_,function(indexedChildren){if(indexedChildren===fallbackObject){// This is the fallback. Just return it, nothing to do in this case
return indexedChildren;}else {var existingSnap=existingChildren.get(namedNode.name);if(existingSnap){return indexedChildren.remove(new NamedNode(namedNode.name,existingSnap));}else {// No record of this child
return indexedChildren;}}});return new IndexMap(newIndexes,this.indexSet_);}}],[{key:"Default",get:function get(){assert(fallbackObject&&PRIORITY_INDEX,'ChildrenNode.ts has not been loaded');_defaultIndexMap=_defaultIndexMap||new IndexMap({'.priority':fallbackObject},{'.priority':PRIORITY_INDEX});return _defaultIndexMap;}}]);return IndexMap;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // TODO: For memory savings, don't store priorityNode_ if it's empty.
var EMPTY_NODE;/**
 * ChildrenNode is a class for storing internal nodes in a DataSnapshot
 * (i.e. nodes with children).  It implements Node and stores the
 * list of children in the children property, sorted by child name.
 */var ChildrenNode=/*#__PURE__*/function(){/**
     * @param children_ - List of children of this node..
     * @param priorityNode_ - The priority of this node (as a snapshot node).
     */function ChildrenNode(children_,priorityNode_,indexMap_){_classCallCheck(this,ChildrenNode);this.children_=children_;this.priorityNode_=priorityNode_;this.indexMap_=indexMap_;this.lazyHash_=null;/**
         * Note: The only reason we allow null priority is for EMPTY_NODE, since we can't use
         * EMPTY_NODE as the priority of EMPTY_NODE.  We might want to consider making EMPTY_NODE its own
         * class instead of an empty ChildrenNode.
         */if(this.priorityNode_){validatePriorityNode(this.priorityNode_);}if(this.children_.isEmpty()){assert(!this.priorityNode_||this.priorityNode_.isEmpty(),'An empty node cannot have a priority');}}_createClass(ChildrenNode,[{key:"isLeafNode",value:/** @inheritDoc */function isLeafNode(){return false;}/** @inheritDoc */},{key:"getPriority",value:function getPriority(){return this.priorityNode_||EMPTY_NODE;}/** @inheritDoc */},{key:"updatePriority",value:function updatePriority(newPriorityNode){if(this.children_.isEmpty()){// Don't allow priorities on empty nodes
return this;}else {return new ChildrenNode(this.children_,newPriorityNode,this.indexMap_);}}/** @inheritDoc */},{key:"getImmediateChild",value:function getImmediateChild(childName){// Hack to treat priority as a regular child
if(childName==='.priority'){return this.getPriority();}else {var _child=this.children_.get(childName);return _child===null?EMPTY_NODE:_child;}}/** @inheritDoc */},{key:"getChild",value:function getChild(path){var front=pathGetFront(path);if(front===null){return this;}return this.getImmediateChild(front).getChild(pathPopFront(path));}/** @inheritDoc */},{key:"hasChild",value:function hasChild(childName){return this.children_.get(childName)!==null;}/** @inheritDoc */},{key:"updateImmediateChild",value:function updateImmediateChild(childName,newChildNode){assert(newChildNode,'We should always be passing snapshot nodes');if(childName==='.priority'){return this.updatePriority(newChildNode);}else {var namedNode=new NamedNode(childName,newChildNode);var newChildren,newIndexMap;if(newChildNode.isEmpty()){newChildren=this.children_.remove(childName);newIndexMap=this.indexMap_.removeFromIndexes(namedNode,this.children_);}else {newChildren=this.children_.insert(childName,newChildNode);newIndexMap=this.indexMap_.addToIndexes(namedNode,this.children_);}var newPriority=newChildren.isEmpty()?EMPTY_NODE:this.priorityNode_;return new ChildrenNode(newChildren,newPriority,newIndexMap);}}/** @inheritDoc */},{key:"updateChild",value:function updateChild(path,newChildNode){var front=pathGetFront(path);if(front===null){return newChildNode;}else {assert(pathGetFront(path)!=='.priority'||pathGetLength(path)===1,'.priority must be the last token in a path');var newImmediateChild=this.getImmediateChild(front).updateChild(pathPopFront(path),newChildNode);return this.updateImmediateChild(front,newImmediateChild);}}/** @inheritDoc */},{key:"isEmpty",value:function isEmpty(){return this.children_.isEmpty();}/** @inheritDoc */},{key:"numChildren",value:function numChildren(){return this.children_.count();}/** @inheritDoc */},{key:"val",value:function val(exportFormat){if(this.isEmpty()){return null;}var obj={};var numKeys=0,maxKey=0,allIntegerKeys=true;this.forEachChild(PRIORITY_INDEX,function(key,childNode){obj[key]=childNode.val(exportFormat);numKeys++;if(allIntegerKeys&&ChildrenNode.INTEGER_REGEXP_.test(key)){maxKey=Math.max(maxKey,Number(key));}else {allIntegerKeys=false;}});if(!exportFormat&&allIntegerKeys&&maxKey<2*numKeys){// convert to array.
var array=[];// eslint-disable-next-line guard-for-in
for(var key in obj){array[key]=obj[key];}return array;}else {if(exportFormat&&!this.getPriority().isEmpty()){obj['.priority']=this.getPriority().val();}return obj;}}/** @inheritDoc */},{key:"hash",value:function hash(){if(this.lazyHash_===null){var toHash='';if(!this.getPriority().isEmpty()){toHash+='priority:'+priorityHashText(this.getPriority().val())+':';}this.forEachChild(PRIORITY_INDEX,function(key,childNode){var childHash=childNode.hash();if(childHash!==''){toHash+=':'+key+':'+childHash;}});this.lazyHash_=toHash===''?'':sha1(toHash);}return this.lazyHash_;}/** @inheritDoc */},{key:"getPredecessorChildName",value:function getPredecessorChildName(childName,childNode,index){var idx=this.resolveIndex_(index);if(idx){var _predecessor=idx.getPredecessorKey(new NamedNode(childName,childNode));return _predecessor?_predecessor.name:null;}else {return this.children_.getPredecessorKey(childName);}}},{key:"getFirstChildName",value:function getFirstChildName(indexDefinition){var idx=this.resolveIndex_(indexDefinition);if(idx){var minKey=idx.minKey();return minKey&&minKey.name;}else {return this.children_.minKey();}}},{key:"getFirstChild",value:function getFirstChild(indexDefinition){var minKey=this.getFirstChildName(indexDefinition);if(minKey){return new NamedNode(minKey,this.children_.get(minKey));}else {return null;}}/**
     * Given an index, return the key name of the largest value we have, according to that index
     */},{key:"getLastChildName",value:function getLastChildName(indexDefinition){var idx=this.resolveIndex_(indexDefinition);if(idx){var maxKey=idx.maxKey();return maxKey&&maxKey.name;}else {return this.children_.maxKey();}}},{key:"getLastChild",value:function getLastChild(indexDefinition){var maxKey=this.getLastChildName(indexDefinition);if(maxKey){return new NamedNode(maxKey,this.children_.get(maxKey));}else {return null;}}},{key:"forEachChild",value:function forEachChild(index,action){var idx=this.resolveIndex_(index);if(idx){return idx.inorderTraversal(function(wrappedNode){return action(wrappedNode.name,wrappedNode.node);});}else {return this.children_.inorderTraversal(action);}}},{key:"getIterator",value:function getIterator(indexDefinition){return this.getIteratorFrom(indexDefinition.minPost(),indexDefinition);}},{key:"getIteratorFrom",value:function getIteratorFrom(startPost,indexDefinition){var idx=this.resolveIndex_(indexDefinition);if(idx){return idx.getIteratorFrom(startPost,function(key){return key;});}else {var iterator=this.children_.getIteratorFrom(startPost.name,NamedNode.Wrap);var next=iterator.peek();while(next!=null&&indexDefinition.compare(next,startPost)<0){iterator.getNext();next=iterator.peek();}return iterator;}}},{key:"getReverseIterator",value:function getReverseIterator(indexDefinition){return this.getReverseIteratorFrom(indexDefinition.maxPost(),indexDefinition);}},{key:"getReverseIteratorFrom",value:function getReverseIteratorFrom(endPost,indexDefinition){var idx=this.resolveIndex_(indexDefinition);if(idx){return idx.getReverseIteratorFrom(endPost,function(key){return key;});}else {var iterator=this.children_.getReverseIteratorFrom(endPost.name,NamedNode.Wrap);var next=iterator.peek();while(next!=null&&indexDefinition.compare(next,endPost)>0){iterator.getNext();next=iterator.peek();}return iterator;}}},{key:"compareTo",value:function compareTo(other){if(this.isEmpty()){if(other.isEmpty()){return 0;}else {return -1;}}else if(other.isLeafNode()||other.isEmpty()){return 1;}else if(other===MAX_NODE){return -1;}else {// Must be another node with children.
return 0;}}},{key:"withIndex",value:function withIndex(indexDefinition){if(indexDefinition===KEY_INDEX||this.indexMap_.hasIndex(indexDefinition)){return this;}else {var newIndexMap=this.indexMap_.addIndex(indexDefinition,this.children_);return new ChildrenNode(this.children_,this.priorityNode_,newIndexMap);}}},{key:"isIndexed",value:function isIndexed(index){return index===KEY_INDEX||this.indexMap_.hasIndex(index);}},{key:"equals",value:function equals(other){if(other===this){return true;}else if(other.isLeafNode()){return false;}else {var otherChildrenNode=other;if(!this.getPriority().equals(otherChildrenNode.getPriority())){return false;}else if(this.children_.count()===otherChildrenNode.children_.count()){var thisIter=this.getIterator(PRIORITY_INDEX);var otherIter=otherChildrenNode.getIterator(PRIORITY_INDEX);var thisCurrent=thisIter.getNext();var otherCurrent=otherIter.getNext();while(thisCurrent&&otherCurrent){if(thisCurrent.name!==otherCurrent.name||!thisCurrent.node.equals(otherCurrent.node)){return false;}thisCurrent=thisIter.getNext();otherCurrent=otherIter.getNext();}return thisCurrent===null&&otherCurrent===null;}else {return false;}}}/**
     * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
     * instead.
     *
     */},{key:"resolveIndex_",value:function resolveIndex_(indexDefinition){if(indexDefinition===KEY_INDEX){return null;}else {return this.indexMap_.get(indexDefinition.toString());}}}],[{key:"EMPTY_NODE",get:function get(){return EMPTY_NODE||(EMPTY_NODE=new ChildrenNode(new SortedMap(NAME_COMPARATOR),null,IndexMap.Default));}}]);return ChildrenNode;}();ChildrenNode.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var MaxNode=/*#__PURE__*/function(_ChildrenNode){_inherits(MaxNode,_ChildrenNode);var _super6=_createSuper(MaxNode);function MaxNode(){_classCallCheck(this,MaxNode);return _super6.call(this,new SortedMap(NAME_COMPARATOR),ChildrenNode.EMPTY_NODE,IndexMap.Default);}_createClass(MaxNode,[{key:"compareTo",value:function compareTo(other){if(other===this){return 0;}else {return 1;}}},{key:"equals",value:function equals(other){// Not that we every compare it, but MAX_NODE is only ever equal to itself
return other===this;}},{key:"getPriority",value:function getPriority(){return this;}},{key:"getImmediateChild",value:function getImmediateChild(childName){return ChildrenNode.EMPTY_NODE;}},{key:"isEmpty",value:function isEmpty(){return false;}}]);return MaxNode;}(ChildrenNode);/**
 * Marker that will sort higher than any other snapshot.
 */var MAX_NODE=new MaxNode();Object.defineProperties(NamedNode,{MIN:{value:new NamedNode(MIN_NAME,ChildrenNode.EMPTY_NODE)},MAX:{value:new NamedNode(MAX_NAME,MAX_NODE)}});/**
 * Reference Extensions
 */KeyIndex.__EMPTY_NODE=ChildrenNode.EMPTY_NODE;LeafNode.__childrenNodeConstructor=ChildrenNode;setMaxNode$1(MAX_NODE);setMaxNode(MAX_NODE);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var USE_HINZE=true;/**
 * Constructs a snapshot node representing the passed JSON and returns it.
 * @param json - JSON to create a node for.
 * @param priority - Optional priority to use.  This will be ignored if the
 * passed JSON contains a .priority property.
 */function nodeFromJSON(json){var priority=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(json===null){return ChildrenNode.EMPTY_NODE;}if(_typeof(json)==='object'&&'.priority'in json){priority=json['.priority'];}assert(priority===null||typeof priority==='string'||typeof priority==='number'||_typeof(priority)==='object'&&'.sv'in priority,'Invalid priority type found: '+_typeof(priority));if(_typeof(json)==='object'&&'.value'in json&&json['.value']!==null){json=json['.value'];}// Valid leaf nodes include non-objects or server-value wrapper objects
if(_typeof(json)!=='object'||'.sv'in json){var jsonLeaf=json;return new LeafNode(jsonLeaf,nodeFromJSON(priority));}if(!(json instanceof Array)&&USE_HINZE){var children=[];var childrenHavePriority=false;var hinzeJsonObj=json;each(hinzeJsonObj,function(key,child){if(key.substring(0,1)!=='.'){// Ignore metadata nodes
var childNode=nodeFromJSON(child);if(!childNode.isEmpty()){childrenHavePriority=childrenHavePriority||!childNode.getPriority().isEmpty();children.push(new NamedNode(key,childNode));}}});if(children.length===0){return ChildrenNode.EMPTY_NODE;}var childSet=buildChildSet(children,NAME_ONLY_COMPARATOR,function(namedNode){return namedNode.name;},NAME_COMPARATOR);if(childrenHavePriority){var sortedChildSet=buildChildSet(children,PRIORITY_INDEX.getCompare());return new ChildrenNode(childSet,nodeFromJSON(priority),new IndexMap({'.priority':sortedChildSet},{'.priority':PRIORITY_INDEX}));}else {return new ChildrenNode(childSet,nodeFromJSON(priority),IndexMap.Default);}}else {var node=ChildrenNode.EMPTY_NODE;each(json,function(key,childData){if(contains(json,key)){if(key.substring(0,1)!=='.'){// ignore metadata nodes.
var childNode=nodeFromJSON(childData);if(childNode.isLeafNode()||!childNode.isEmpty()){node=node.updateImmediateChild(key,childNode);}}}});return node.updatePriority(nodeFromJSON(priority));}}setNodeFromJSON(nodeFromJSON);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var PathIndex=/*#__PURE__*/function(_Index3){_inherits(PathIndex,_Index3);var _super7=_createSuper(PathIndex);function PathIndex(indexPath_){var _this31;_classCallCheck(this,PathIndex);_this31=_super7.call(this);_this31.indexPath_=indexPath_;assert(!pathIsEmpty(indexPath_)&&pathGetFront(indexPath_)!=='.priority',"Can't create PathIndex with empty path or .priority key");return _this31;}_createClass(PathIndex,[{key:"extractChild",value:function extractChild(snap){return snap.getChild(this.indexPath_);}},{key:"isDefinedOn",value:function isDefinedOn(node){return !node.getChild(this.indexPath_).isEmpty();}},{key:"compare",value:function compare(a,b){var aChild=this.extractChild(a.node);var bChild=this.extractChild(b.node);var indexCmp=aChild.compareTo(bChild);if(indexCmp===0){return nameCompare(a.name,b.name);}else {return indexCmp;}}},{key:"makePost",value:function makePost(indexValue,name){var valueNode=nodeFromJSON(indexValue);var node=ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_,valueNode);return new NamedNode(name,node);}},{key:"maxPost",value:function maxPost(){var node=ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_,MAX_NODE);return new NamedNode(MAX_NAME,node);}},{key:"toString",value:function toString(){return pathSlice(this.indexPath_,0).join('/');}}]);return PathIndex;}(Index);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ValueIndex=/*#__PURE__*/function(_Index4){_inherits(ValueIndex,_Index4);var _super8=_createSuper(ValueIndex);function ValueIndex(){_classCallCheck(this,ValueIndex);return _super8.apply(this,arguments);}_createClass(ValueIndex,[{key:"compare",value:function compare(a,b){var indexCmp=a.node.compareTo(b.node);if(indexCmp===0){return nameCompare(a.name,b.name);}else {return indexCmp;}}},{key:"isDefinedOn",value:function isDefinedOn(node){return true;}},{key:"indexedValueChanged",value:function indexedValueChanged(oldNode,newNode){return !oldNode.equals(newNode);}},{key:"minPost",value:function minPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return NamedNode.MIN;}},{key:"maxPost",value:function maxPost(){// eslint-disable-next-line @typescript-eslint/no-explicit-any
return NamedNode.MAX;}},{key:"makePost",value:function makePost(indexValue,name){var valueNode=nodeFromJSON(indexValue);return new NamedNode(name,valueNode);}/**
     * @returns String representation for inclusion in a query spec
     */},{key:"toString",value:function toString(){return '.value';}}]);return ValueIndex;}(Index);var VALUE_INDEX=new ValueIndex();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Modeled after base64 web-safe chars, but ordered by ASCII.
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function changeValue(snapshotNode){return {type:"value"/* VALUE */,snapshotNode:snapshotNode};}function changeChildAdded(childName,snapshotNode){return {type:"child_added"/* CHILD_ADDED */,snapshotNode:snapshotNode,childName:childName};}function changeChildRemoved(childName,snapshotNode){return {type:"child_removed"/* CHILD_REMOVED */,snapshotNode:snapshotNode,childName:childName};}function changeChildChanged(childName,snapshotNode,oldSnap){return {type:"child_changed"/* CHILD_CHANGED */,snapshotNode:snapshotNode,childName:childName,oldSnap:oldSnap};}function changeChildMoved(childName,snapshotNode){return {type:"child_moved"/* CHILD_MOVED */,snapshotNode:snapshotNode,childName:childName};}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Doesn't really filter nodes but applies an index to the node and keeps track of any changes
 */var IndexedFilter=/*#__PURE__*/function(){function IndexedFilter(index_){_classCallCheck(this,IndexedFilter);this.index_=index_;}_createClass(IndexedFilter,[{key:"updateChild",value:function updateChild(snap,key,newChild,affectedPath,source,optChangeAccumulator){assert(snap.isIndexed(this.index_),'A node must be indexed if only a child is updated');var oldChild=snap.getImmediateChild(key);// Check if anything actually changed.
if(oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))){// There's an edge case where a child can enter or leave the view because affectedPath was set to null.
// In this case, affectedPath will appear null in both the old and new snapshots.  So we need
// to avoid treating these cases as "nothing changed."
if(oldChild.isEmpty()===newChild.isEmpty()){// Nothing changed.
// This assert should be valid, but it's expensive (can dominate perf testing) so don't actually do it.
//assert(oldChild.equals(newChild), 'Old and new snapshots should be equal.');
return snap;}}if(optChangeAccumulator!=null){if(newChild.isEmpty()){if(snap.hasChild(key)){optChangeAccumulator.trackChildChange(changeChildRemoved(key,oldChild));}else {assert(snap.isLeafNode(),'A child remove without an old child only makes sense on a leaf node');}}else if(oldChild.isEmpty()){optChangeAccumulator.trackChildChange(changeChildAdded(key,newChild));}else {optChangeAccumulator.trackChildChange(changeChildChanged(key,newChild,oldChild));}}if(snap.isLeafNode()&&newChild.isEmpty()){return snap;}else {// Make sure the node is indexed
return snap.updateImmediateChild(key,newChild).withIndex(this.index_);}}},{key:"updateFullNode",value:function updateFullNode(oldSnap,newSnap,optChangeAccumulator){if(optChangeAccumulator!=null){if(!oldSnap.isLeafNode()){oldSnap.forEachChild(PRIORITY_INDEX,function(key,childNode){if(!newSnap.hasChild(key)){optChangeAccumulator.trackChildChange(changeChildRemoved(key,childNode));}});}if(!newSnap.isLeafNode()){newSnap.forEachChild(PRIORITY_INDEX,function(key,childNode){if(oldSnap.hasChild(key)){var oldChild=oldSnap.getImmediateChild(key);if(!oldChild.equals(childNode)){optChangeAccumulator.trackChildChange(changeChildChanged(key,childNode,oldChild));}}else {optChangeAccumulator.trackChildChange(changeChildAdded(key,childNode));}});}}return newSnap.withIndex(this.index_);}},{key:"updatePriority",value:function updatePriority(oldSnap,newPriority){if(oldSnap.isEmpty()){return ChildrenNode.EMPTY_NODE;}else {return oldSnap.updatePriority(newPriority);}}},{key:"filtersNodes",value:function filtersNodes(){return false;}},{key:"getIndexedFilter",value:function getIndexedFilter(){return this;}},{key:"getIndex",value:function getIndex(){return this.index_;}}]);return IndexedFilter;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Filters nodes by range and uses an IndexFilter to track any changes after filtering the node
 */var RangedFilter=/*#__PURE__*/function(){function RangedFilter(params){_classCallCheck(this,RangedFilter);this.indexedFilter_=new IndexedFilter(params.getIndex());this.index_=params.getIndex();this.startPost_=RangedFilter.getStartPost_(params);this.endPost_=RangedFilter.getEndPost_(params);}_createClass(RangedFilter,[{key:"getStartPost",value:function getStartPost(){return this.startPost_;}},{key:"getEndPost",value:function getEndPost(){return this.endPost_;}},{key:"matches",value:function matches(node){return this.index_.compare(this.getStartPost(),node)<=0&&this.index_.compare(node,this.getEndPost())<=0;}},{key:"updateChild",value:function updateChild(snap,key,newChild,affectedPath,source,optChangeAccumulator){if(!this.matches(new NamedNode(key,newChild))){newChild=ChildrenNode.EMPTY_NODE;}return this.indexedFilter_.updateChild(snap,key,newChild,affectedPath,source,optChangeAccumulator);}},{key:"updateFullNode",value:function updateFullNode(oldSnap,newSnap,optChangeAccumulator){if(newSnap.isLeafNode()){// Make sure we have a children node with the correct index, not a leaf node;
newSnap=ChildrenNode.EMPTY_NODE;}var filtered=newSnap.withIndex(this.index_);// Don't support priorities on queries
filtered=filtered.updatePriority(ChildrenNode.EMPTY_NODE);var self=this;newSnap.forEachChild(PRIORITY_INDEX,function(key,childNode){if(!self.matches(new NamedNode(key,childNode))){filtered=filtered.updateImmediateChild(key,ChildrenNode.EMPTY_NODE);}});return this.indexedFilter_.updateFullNode(oldSnap,filtered,optChangeAccumulator);}},{key:"updatePriority",value:function updatePriority(oldSnap,newPriority){// Don't support priorities on queries
return oldSnap;}},{key:"filtersNodes",value:function filtersNodes(){return true;}},{key:"getIndexedFilter",value:function getIndexedFilter(){return this.indexedFilter_;}},{key:"getIndex",value:function getIndex(){return this.index_;}}],[{key:"getStartPost_",value:function getStartPost_(params){if(params.hasStart()){var startName=params.getIndexStartName();return params.getIndex().makePost(params.getIndexStartValue(),startName);}else {return params.getIndex().minPost();}}},{key:"getEndPost_",value:function getEndPost_(params){if(params.hasEnd()){var endName=params.getIndexEndName();return params.getIndex().makePost(params.getIndexEndValue(),endName);}else {return params.getIndex().maxPost();}}}]);return RangedFilter;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Applies a limit and a range to a node and uses RangedFilter to do the heavy lifting where possible
 */var LimitedFilter=/*#__PURE__*/function(){function LimitedFilter(params){_classCallCheck(this,LimitedFilter);this.rangedFilter_=new RangedFilter(params);this.index_=params.getIndex();this.limit_=params.getLimit();this.reverse_=!params.isViewFromLeft();}_createClass(LimitedFilter,[{key:"updateChild",value:function updateChild(snap,key,newChild,affectedPath,source,optChangeAccumulator){if(!this.rangedFilter_.matches(new NamedNode(key,newChild))){newChild=ChildrenNode.EMPTY_NODE;}if(snap.getImmediateChild(key).equals(newChild)){// No change
return snap;}else if(snap.numChildren()<this.limit_){return this.rangedFilter_.getIndexedFilter().updateChild(snap,key,newChild,affectedPath,source,optChangeAccumulator);}else {return this.fullLimitUpdateChild_(snap,key,newChild,source,optChangeAccumulator);}}},{key:"updateFullNode",value:function updateFullNode(oldSnap,newSnap,optChangeAccumulator){var filtered;if(newSnap.isLeafNode()||newSnap.isEmpty()){// Make sure we have a children node with the correct index, not a leaf node;
filtered=ChildrenNode.EMPTY_NODE.withIndex(this.index_);}else {if(this.limit_*2<newSnap.numChildren()&&newSnap.isIndexed(this.index_)){// Easier to build up a snapshot, since what we're given has more than twice the elements we want
filtered=ChildrenNode.EMPTY_NODE.withIndex(this.index_);// anchor to the startPost, endPost, or last element as appropriate
var iterator;if(this.reverse_){iterator=newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_);}else {iterator=newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);}var count=0;while(iterator.hasNext()&&count<this.limit_){var next=iterator.getNext();var inRange=void 0;if(this.reverse_){inRange=this.index_.compare(this.rangedFilter_.getStartPost(),next)<=0;}else {inRange=this.index_.compare(next,this.rangedFilter_.getEndPost())<=0;}if(inRange){filtered=filtered.updateImmediateChild(next.name,next.node);count++;}else {// if we have reached the end post, we cannot keep adding elemments
break;}}}else {// The snap contains less than twice the limit. Faster to delete from the snap than build up a new one
filtered=newSnap.withIndex(this.index_);// Don't support priorities on queries
filtered=filtered.updatePriority(ChildrenNode.EMPTY_NODE);var startPost;var endPost;var cmp;var _iterator4;if(this.reverse_){_iterator4=filtered.getReverseIterator(this.index_);startPost=this.rangedFilter_.getEndPost();endPost=this.rangedFilter_.getStartPost();var indexCompare=this.index_.getCompare();cmp=function cmp(a,b){return indexCompare(b,a);};}else {_iterator4=filtered.getIterator(this.index_);startPost=this.rangedFilter_.getStartPost();endPost=this.rangedFilter_.getEndPost();cmp=this.index_.getCompare();}var _count=0;var foundStartPost=false;while(_iterator4.hasNext()){var _next=_iterator4.getNext();if(!foundStartPost&&cmp(startPost,_next)<=0){// start adding
foundStartPost=true;}var _inRange=foundStartPost&&_count<this.limit_&&cmp(_next,endPost)<=0;if(_inRange){_count++;}else {filtered=filtered.updateImmediateChild(_next.name,ChildrenNode.EMPTY_NODE);}}}}return this.rangedFilter_.getIndexedFilter().updateFullNode(oldSnap,filtered,optChangeAccumulator);}},{key:"updatePriority",value:function updatePriority(oldSnap,newPriority){// Don't support priorities on queries
return oldSnap;}},{key:"filtersNodes",value:function filtersNodes(){return true;}},{key:"getIndexedFilter",value:function getIndexedFilter(){return this.rangedFilter_.getIndexedFilter();}},{key:"getIndex",value:function getIndex(){return this.index_;}},{key:"fullLimitUpdateChild_",value:function fullLimitUpdateChild_(snap,childKey,childSnap,source,changeAccumulator){// TODO: rename all cache stuff etc to general snap terminology
var cmp;if(this.reverse_){var indexCmp=this.index_.getCompare();cmp=function cmp(a,b){return indexCmp(b,a);};}else {cmp=this.index_.getCompare();}var oldEventCache=snap;assert(oldEventCache.numChildren()===this.limit_,'');var newChildNamedNode=new NamedNode(childKey,childSnap);var windowBoundary=this.reverse_?oldEventCache.getFirstChild(this.index_):oldEventCache.getLastChild(this.index_);var inRange=this.rangedFilter_.matches(newChildNamedNode);if(oldEventCache.hasChild(childKey)){var oldChildSnap=oldEventCache.getImmediateChild(childKey);var nextChild=source.getChildAfterChild(this.index_,windowBoundary,this.reverse_);while(nextChild!=null&&(nextChild.name===childKey||oldEventCache.hasChild(nextChild.name))){// There is a weird edge case where a node is updated as part of a merge in the write tree, but hasn't
// been applied to the limited filter yet. Ignore this next child which will be updated later in
// the limited filter...
nextChild=source.getChildAfterChild(this.index_,nextChild,this.reverse_);}var compareNext=nextChild==null?1:cmp(nextChild,newChildNamedNode);var remainsInWindow=inRange&&!childSnap.isEmpty()&&compareNext>=0;if(remainsInWindow){if(changeAccumulator!=null){changeAccumulator.trackChildChange(changeChildChanged(childKey,childSnap,oldChildSnap));}return oldEventCache.updateImmediateChild(childKey,childSnap);}else {if(changeAccumulator!=null){changeAccumulator.trackChildChange(changeChildRemoved(childKey,oldChildSnap));}var newEventCache=oldEventCache.updateImmediateChild(childKey,ChildrenNode.EMPTY_NODE);var nextChildInRange=nextChild!=null&&this.rangedFilter_.matches(nextChild);if(nextChildInRange){if(changeAccumulator!=null){changeAccumulator.trackChildChange(changeChildAdded(nextChild.name,nextChild.node));}return newEventCache.updateImmediateChild(nextChild.name,nextChild.node);}else {return newEventCache;}}}else if(childSnap.isEmpty()){// we're deleting a node, but it was not in the window, so ignore it
return snap;}else if(inRange){if(cmp(windowBoundary,newChildNamedNode)>=0){if(changeAccumulator!=null){changeAccumulator.trackChildChange(changeChildRemoved(windowBoundary.name,windowBoundary.node));changeAccumulator.trackChildChange(changeChildAdded(childKey,childSnap));}return oldEventCache.updateImmediateChild(childKey,childSnap).updateImmediateChild(windowBoundary.name,ChildrenNode.EMPTY_NODE);}else {return snap;}}else {return snap;}}}]);return LimitedFilter;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
 * range to be returned for a particular location. It is assumed that validation of parameters is done at the
 * user-facing API level, so it is not done here.
 *
 * @internal
 */var QueryParams=/*#__PURE__*/function(){function QueryParams(){_classCallCheck(this,QueryParams);this.limitSet_=false;this.startSet_=false;this.startNameSet_=false;this.startAfterSet_=false;this.endSet_=false;this.endNameSet_=false;this.endBeforeSet_=false;this.limit_=0;this.viewFrom_='';this.indexStartValue_=null;this.indexStartName_='';this.indexEndValue_=null;this.indexEndName_='';this.index_=PRIORITY_INDEX;}_createClass(QueryParams,[{key:"hasStart",value:function hasStart(){return this.startSet_;}},{key:"hasStartAfter",value:function hasStartAfter(){return this.startAfterSet_;}},{key:"hasEndBefore",value:function hasEndBefore(){return this.endBeforeSet_;}/**
     * @returns True if it would return from left.
     */},{key:"isViewFromLeft",value:function isViewFromLeft(){if(this.viewFrom_===''){// limit(), rather than limitToFirst or limitToLast was called.
// This means that only one of startSet_ and endSet_ is true. Use them
// to calculate which side of the view to anchor to. If neither is set,
// anchor to the end.
return this.startSet_;}else {return this.viewFrom_==="l"/* VIEW_FROM_LEFT */;}}/**
     * Only valid to call if hasStart() returns true
     */},{key:"getIndexStartValue",value:function getIndexStartValue(){assert(this.startSet_,'Only valid if start has been set');return this.indexStartValue_;}/**
     * Only valid to call if hasStart() returns true.
     * Returns the starting key name for the range defined by these query parameters
     */},{key:"getIndexStartName",value:function getIndexStartName(){assert(this.startSet_,'Only valid if start has been set');if(this.startNameSet_){return this.indexStartName_;}else {return MIN_NAME;}}},{key:"hasEnd",value:function hasEnd(){return this.endSet_;}/**
     * Only valid to call if hasEnd() returns true.
     */},{key:"getIndexEndValue",value:function getIndexEndValue(){assert(this.endSet_,'Only valid if end has been set');return this.indexEndValue_;}/**
     * Only valid to call if hasEnd() returns true.
     * Returns the end key name for the range defined by these query parameters
     */},{key:"getIndexEndName",value:function getIndexEndName(){assert(this.endSet_,'Only valid if end has been set');if(this.endNameSet_){return this.indexEndName_;}else {return MAX_NAME;}}},{key:"hasLimit",value:function hasLimit(){return this.limitSet_;}/**
     * @returns True if a limit has been set and it has been explicitly anchored
     */},{key:"hasAnchoredLimit",value:function hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!=='';}/**
     * Only valid to call if hasLimit() returns true
     */},{key:"getLimit",value:function getLimit(){assert(this.limitSet_,'Only valid if limit has been set');return this.limit_;}},{key:"getIndex",value:function getIndex(){return this.index_;}},{key:"loadsAllData",value:function loadsAllData(){return !(this.startSet_||this.endSet_||this.limitSet_);}},{key:"isDefault",value:function isDefault(){return this.loadsAllData()&&this.index_===PRIORITY_INDEX;}},{key:"copy",value:function copy(){var copy=new QueryParams();copy.limitSet_=this.limitSet_;copy.limit_=this.limit_;copy.startSet_=this.startSet_;copy.indexStartValue_=this.indexStartValue_;copy.startNameSet_=this.startNameSet_;copy.indexStartName_=this.indexStartName_;copy.endSet_=this.endSet_;copy.indexEndValue_=this.indexEndValue_;copy.endNameSet_=this.endNameSet_;copy.indexEndName_=this.indexEndName_;copy.index_=this.index_;copy.viewFrom_=this.viewFrom_;return copy;}}]);return QueryParams;}();function queryParamsGetNodeFilter(queryParams){if(queryParams.loadsAllData()){return new IndexedFilter(queryParams.getIndex());}else if(queryParams.hasLimit()){return new LimitedFilter(queryParams);}else {return new RangedFilter(queryParams);}}/**
 * Returns a set of REST query string parameters representing this query.
 *
 * @returns query string parameters
 */function queryParamsToRestQueryStringParameters(queryParams){var qs={};if(queryParams.isDefault()){return qs;}var orderBy;if(queryParams.index_===PRIORITY_INDEX){orderBy="$priority"/* PRIORITY_INDEX */;}else if(queryParams.index_===VALUE_INDEX){orderBy="$value"/* VALUE_INDEX */;}else if(queryParams.index_===KEY_INDEX){orderBy="$key"/* KEY_INDEX */;}else {assert(queryParams.index_ instanceof PathIndex,'Unrecognized index type!');orderBy=queryParams.index_.toString();}qs["orderBy"/* ORDER_BY */]=stringify(orderBy);if(queryParams.startSet_){qs["startAt"/* START_AT */]=stringify(queryParams.indexStartValue_);if(queryParams.startNameSet_){qs["startAt"/* START_AT */]+=','+stringify(queryParams.indexStartName_);}}if(queryParams.endSet_){qs["endAt"/* END_AT */]=stringify(queryParams.indexEndValue_);if(queryParams.endNameSet_){qs["endAt"/* END_AT */]+=','+stringify(queryParams.indexEndName_);}}if(queryParams.limitSet_){if(queryParams.isViewFromLeft()){qs["limitToFirst"/* LIMIT_TO_FIRST */]=queryParams.limit_;}else {qs["limitToLast"/* LIMIT_TO_LAST */]=queryParams.limit_;}}return qs;}function queryParamsGetQueryObject(queryParams){var obj={};if(queryParams.startSet_){obj["sp"/* INDEX_START_VALUE */]=queryParams.indexStartValue_;if(queryParams.startNameSet_){obj["sn"/* INDEX_START_NAME */]=queryParams.indexStartName_;}}if(queryParams.endSet_){obj["ep"/* INDEX_END_VALUE */]=queryParams.indexEndValue_;if(queryParams.endNameSet_){obj["en"/* INDEX_END_NAME */]=queryParams.indexEndName_;}}if(queryParams.limitSet_){obj["l"/* LIMIT */]=queryParams.limit_;var viewFrom=queryParams.viewFrom_;if(viewFrom===''){if(queryParams.isViewFromLeft()){viewFrom="l"/* VIEW_FROM_LEFT */;}else {viewFrom="r"/* VIEW_FROM_RIGHT */;}}obj["vf"/* VIEW_FROM */]=viewFrom;}// For now, priority index is the default, so we only specify if it's some other index
if(queryParams.index_!==PRIORITY_INDEX){obj["i"/* INDEX */]=queryParams.index_.toString();}return obj;}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An implementation of ServerActions that communicates with the server via REST requests.
 * This is mostly useful for compatibility with crawlers, where we don't want to spin up a full
 * persistent connection (using WebSockets or long-polling)
 */var ReadonlyRestClient=/*#__PURE__*/function(_ServerActions2){_inherits(ReadonlyRestClient,_ServerActions2);var _super9=_createSuper(ReadonlyRestClient);/**
     * @param repoInfo_ - Data about the namespace we are connecting to
     * @param onDataUpdate_ - A callback for new data from the server
     */function ReadonlyRestClient(repoInfo_,onDataUpdate_,authTokenProvider_,appCheckTokenProvider_){var _this32;_classCallCheck(this,ReadonlyRestClient);_this32=_super9.call(this);_this32.repoInfo_=repoInfo_;_this32.onDataUpdate_=onDataUpdate_;_this32.authTokenProvider_=authTokenProvider_;_this32.appCheckTokenProvider_=appCheckTokenProvider_;/** @private {function(...[*])} */_this32.log_=logWrapper('p:rest:');/**
         * We don't actually need to track listens, except to prevent us calling an onComplete for a listen
         * that's been removed. :-/
         */_this32.listens_={};return _this32;}_createClass(ReadonlyRestClient,[{key:"reportStats",value:function reportStats(stats){throw new Error('Method not implemented.');}},{key:"listen",value:/** @inheritDoc */function listen(query,currentHashFn,tag,onComplete){var _this33=this;var pathString=query._path.toString();this.log_('Listen called for '+pathString+' '+query._queryIdentifier);// Mark this listener so we can tell if it's removed.
var listenId=ReadonlyRestClient.getListenId_(query,tag);var thisListen={};this.listens_[listenId]=thisListen;var queryStringParameters=queryParamsToRestQueryStringParameters(query._queryParams);this.restRequest_(pathString+'.json',queryStringParameters,function(error,result){var data=result;if(error===404){data=null;error=null;}if(error===null){_this33.onDataUpdate_(pathString,data,/*isMerge=*/false,tag);}if(safeGet(_this33.listens_,listenId)===thisListen){var status;if(!error){status='ok';}else if(error===401){status='permission_denied';}else {status='rest_error:'+error;}onComplete(status,null);}});}/** @inheritDoc */},{key:"unlisten",value:function unlisten(query,tag){var listenId=ReadonlyRestClient.getListenId_(query,tag);delete this.listens_[listenId];}},{key:"get",value:function get(query){var _this34=this;var queryStringParameters=queryParamsToRestQueryStringParameters(query._queryParams);var pathString=query._path.toString();var deferred=new Deferred();this.restRequest_(pathString+'.json',queryStringParameters,function(error,result){var data=result;if(error===404){data=null;error=null;}if(error===null){_this34.onDataUpdate_(pathString,data,/*isMerge=*/false,/*tag=*/null);deferred.resolve(data);}else {deferred.reject(new Error(data));}});return deferred.promise;}/** @inheritDoc */},{key:"refreshAuthToken",value:function refreshAuthToken(token){// no-op since we just always call getToken.
}/**
     * Performs a REST request to the given path, with the provided query string parameters,
     * and any auth credentials we have.
     */},{key:"restRequest_",value:function restRequest_(pathString){var _this35=this;var queryStringParameters=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var callback=arguments.length>2?arguments[2]:undefined;queryStringParameters['format']='export';return Promise.all([this.authTokenProvider_.getToken(/*forceRefresh=*/false),this.appCheckTokenProvider_.getToken(/*forceRefresh=*/false)]).then(function(_ref){var _ref2=_slicedToArray(_ref,2),authToken=_ref2[0],appCheckToken=_ref2[1];if(authToken&&authToken.accessToken){queryStringParameters['auth']=authToken.accessToken;}if(appCheckToken&&appCheckToken.token){queryStringParameters['ac']=appCheckToken.token;}var url=(_this35.repoInfo_.secure?'https://':'http://')+_this35.repoInfo_.host+pathString+'?'+'ns='+_this35.repoInfo_.namespace+querystring(queryStringParameters);_this35.log_('Sending REST request for '+url);var xhr=new XMLHttpRequest();xhr.onreadystatechange=function(){if(callback&&xhr.readyState===4){_this35.log_('REST Response for '+url+' received. status:',xhr.status,'response:',xhr.responseText);var res=null;if(xhr.status>=200&&xhr.status<300){try{res=jsonEval(xhr.responseText);}catch(e){warn('Failed to parse JSON response for '+url+': '+xhr.responseText);}callback(null,res);}else {// 401 and 404 are expected.
if(xhr.status!==401&&xhr.status!==404){warn('Got unsuccessful REST response for '+url+' Status: '+xhr.status);}callback(xhr.status);}callback=null;}};xhr.open('GET',url,/*asynchronous=*/true);xhr.send();});}}],[{key:"getListenId_",value:function getListenId_(query,tag){if(tag!==undefined){return 'tag$'+tag;}else {assert(query._queryParams.isDefault(),"should have a tag if it's not a default query.");return query._path.toString();}}}]);return ReadonlyRestClient;}(ServerActions);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Mutable object which basically just stores a reference to the "latest" immutable snapshot.
 */var SnapshotHolder=/*#__PURE__*/function(){function SnapshotHolder(){_classCallCheck(this,SnapshotHolder);this.rootNode_=ChildrenNode.EMPTY_NODE;}_createClass(SnapshotHolder,[{key:"getNode",value:function getNode(path){return this.rootNode_.getChild(path);}},{key:"updateSnapshot",value:function updateSnapshot(path,newSnapshotNode){this.rootNode_=this.rootNode_.updateChild(path,newSnapshotNode);}}]);return SnapshotHolder;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function newSparseSnapshotTree(){return {value:null,children:new Map()};}/**
 * Stores the given node at the specified path. If there is already a node
 * at a shallower path, it merges the new data into that snapshot node.
 *
 * @param path - Path to look up snapshot for.
 * @param data - The new data, or null.
 */function sparseSnapshotTreeRemember(sparseSnapshotTree,path,data){if(pathIsEmpty(path)){sparseSnapshotTree.value=data;sparseSnapshotTree.children.clear();}else if(sparseSnapshotTree.value!==null){sparseSnapshotTree.value=sparseSnapshotTree.value.updateChild(path,data);}else {var childKey=pathGetFront(path);if(!sparseSnapshotTree.children.has(childKey)){sparseSnapshotTree.children.set(childKey,newSparseSnapshotTree());}var _child2=sparseSnapshotTree.children.get(childKey);path=pathPopFront(path);sparseSnapshotTreeRemember(_child2,path,data);}}/**
 * Recursively iterates through all of the stored tree and calls the
 * callback on each one.
 *
 * @param prefixPath - Path to look up node for.
 * @param func - The function to invoke for each tree.
 */function sparseSnapshotTreeForEachTree(sparseSnapshotTree,prefixPath,func){if(sparseSnapshotTree.value!==null){func(prefixPath,sparseSnapshotTree.value);}else {sparseSnapshotTreeForEachChild(sparseSnapshotTree,function(key,tree){var path=new Path(prefixPath.toString()+'/'+key);sparseSnapshotTreeForEachTree(tree,path,func);});}}/**
 * Iterates through each immediate child and triggers the callback.
 * Only seems to be used in tests.
 *
 * @param func - The function to invoke for each child.
 */function sparseSnapshotTreeForEachChild(sparseSnapshotTree,func){sparseSnapshotTree.children.forEach(function(tree,key){func(key,tree);});}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Returns the delta from the previous call to get stats.
 *
 * @param collection_ - The collection to "listen" to.
 */var StatsListener=/*#__PURE__*/function(){function StatsListener(collection_){_classCallCheck(this,StatsListener);this.collection_=collection_;this.last_=null;}_createClass(StatsListener,[{key:"get",value:function get(){var newStats=this.collection_.get();var delta=Object.assign({},newStats);if(this.last_){each(this.last_,function(stat,value){delta[stat]=delta[stat]-value;});}this.last_=newStats;return delta;}}]);return StatsListener;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Assuming some apps may have a short amount of time on page, and a bulk of firebase operations probably
// happen on page load, we try to report our first set of stats pretty quickly, but we wait at least 10
// seconds to try to ensure the Firebase connection is established / settled.
var FIRST_STATS_MIN_TIME=10*1000;var FIRST_STATS_MAX_TIME=30*1000;// We'll continue to report stats on average every 5 minutes.
var REPORT_STATS_INTERVAL=5*60*1000;var StatsReporter=/*#__PURE__*/function(){function StatsReporter(collection,server_){_classCallCheck(this,StatsReporter);this.server_=server_;this.statsToReport_={};this.statsListener_=new StatsListener(collection);var timeout=FIRST_STATS_MIN_TIME+(FIRST_STATS_MAX_TIME-FIRST_STATS_MIN_TIME)*Math.random();setTimeoutNonBlocking(this.reportStats_.bind(this),Math.floor(timeout));}_createClass(StatsReporter,[{key:"reportStats_",value:function reportStats_(){var _this36=this;var stats=this.statsListener_.get();var reportedStats={};var haveStatsToReport=false;each(stats,function(stat,value){if(value>0&&contains(_this36.statsToReport_,stat)){reportedStats[stat]=value;haveStatsToReport=true;}});if(haveStatsToReport){this.server_.reportStats(reportedStats);}// queue our next run.
setTimeoutNonBlocking(this.reportStats_.bind(this),Math.floor(Math.random()*2*REPORT_STATS_INTERVAL));}}]);return StatsReporter;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 *
 * @enum
 */var OperationType;(function(OperationType){OperationType[OperationType["OVERWRITE"]=0]="OVERWRITE";OperationType[OperationType["MERGE"]=1]="MERGE";OperationType[OperationType["ACK_USER_WRITE"]=2]="ACK_USER_WRITE";OperationType[OperationType["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE";})(OperationType||(OperationType={}));function newOperationSourceUser(){return {fromUser:true,fromServer:false,queryId:null,tagged:false};}function newOperationSourceServer(){return {fromUser:false,fromServer:true,queryId:null,tagged:false};}function newOperationSourceServerTaggedQuery(queryId){return {fromUser:false,fromServer:true,queryId:queryId,tagged:true};}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var AckUserWrite=/*#__PURE__*/function(){/**
     * @param affectedTree - A tree containing true for each affected path. Affected paths can't overlap.
     */function AckUserWrite(/** @inheritDoc */path,/** @inheritDoc */affectedTree,/** @inheritDoc */revert){_classCallCheck(this,AckUserWrite);this.path=path;this.affectedTree=affectedTree;this.revert=revert;/** @inheritDoc */this.type=OperationType.ACK_USER_WRITE;/** @inheritDoc */this.source=newOperationSourceUser();}_createClass(AckUserWrite,[{key:"operationForChild",value:function operationForChild(childName){if(!pathIsEmpty(this.path)){assert(pathGetFront(this.path)===childName,'operationForChild called for unrelated child.');return new AckUserWrite(pathPopFront(this.path),this.affectedTree,this.revert);}else if(this.affectedTree.value!=null){assert(this.affectedTree.children.isEmpty(),'affectedTree should not have overlapping affected paths.');// All child locations are affected as well; just return same operation.
return this;}else {var childTree=this.affectedTree.subtree(new Path(childName));return new AckUserWrite(newEmptyPath(),childTree,this.revert);}}}]);return AckUserWrite;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ListenComplete=/*#__PURE__*/function(){function ListenComplete(source,path){_classCallCheck(this,ListenComplete);this.source=source;this.path=path;/** @inheritDoc */this.type=OperationType.LISTEN_COMPLETE;}_createClass(ListenComplete,[{key:"operationForChild",value:function operationForChild(childName){if(pathIsEmpty(this.path)){return new ListenComplete(this.source,newEmptyPath());}else {return new ListenComplete(this.source,pathPopFront(this.path));}}}]);return ListenComplete;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Overwrite=/*#__PURE__*/function(){function Overwrite(source,path,snap){_classCallCheck(this,Overwrite);this.source=source;this.path=path;this.snap=snap;/** @inheritDoc */this.type=OperationType.OVERWRITE;}_createClass(Overwrite,[{key:"operationForChild",value:function operationForChild(childName){if(pathIsEmpty(this.path)){return new Overwrite(this.source,newEmptyPath(),this.snap.getImmediateChild(childName));}else {return new Overwrite(this.source,pathPopFront(this.path),this.snap);}}}]);return Overwrite;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Merge=/*#__PURE__*/function(){function Merge(/** @inheritDoc */source,/** @inheritDoc */path,/** @inheritDoc */children){_classCallCheck(this,Merge);this.source=source;this.path=path;this.children=children;/** @inheritDoc */this.type=OperationType.MERGE;}_createClass(Merge,[{key:"operationForChild",value:function operationForChild(childName){if(pathIsEmpty(this.path)){var childTree=this.children.subtree(new Path(childName));if(childTree.isEmpty()){// This child is unaffected
return null;}else if(childTree.value){// We have a snapshot for the child in question.  This becomes an overwrite of the child.
return new Overwrite(this.source,newEmptyPath(),childTree.value);}else {// This is a merge at a deeper level
return new Merge(this.source,newEmptyPath(),childTree);}}else {assert(pathGetFront(this.path)===childName,"Can't get a merge for a child not on the path of the operation");return new Merge(this.source,pathPopFront(this.path),this.children);}}},{key:"toString",value:function toString(){return 'Operation('+this.path+': '+this.source.toString()+' merge: '+this.children.toString()+')';}}]);return Merge;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A cache node only stores complete children. Additionally it holds a flag whether the node can be considered fully
 * initialized in the sense that we know at one point in time this represented a valid state of the world, e.g.
 * initialized with data from the server, or a complete overwrite by the client. The filtered flag also tracks
 * whether a node potentially had children removed due to a filter.
 */var CacheNode=/*#__PURE__*/function(){function CacheNode(node_,fullyInitialized_,filtered_){_classCallCheck(this,CacheNode);this.node_=node_;this.fullyInitialized_=fullyInitialized_;this.filtered_=filtered_;}/**
     * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
     */_createClass(CacheNode,[{key:"isFullyInitialized",value:function isFullyInitialized(){return this.fullyInitialized_;}/**
     * Returns whether this node is potentially missing children due to a filter applied to the node
     */},{key:"isFiltered",value:function isFiltered(){return this.filtered_;}},{key:"isCompleteForPath",value:function isCompleteForPath(path){if(pathIsEmpty(path)){return this.isFullyInitialized()&&!this.filtered_;}var childKey=pathGetFront(path);return this.isCompleteForChild(childKey);}},{key:"isCompleteForChild",value:function isCompleteForChild(key){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(key);}},{key:"getNode",value:function getNode(){return this.node_;}}]);return CacheNode;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An EventGenerator is used to convert "raw" changes (Change) as computed by the
 * CacheDiffer into actual events (Event) that can be raised.  See generateEventsForChanges()
 * for details.
 *
 */var EventGenerator=/*#__PURE__*/_createClass(function EventGenerator(query_){_classCallCheck(this,EventGenerator);this.query_=query_;this.index_=this.query_._queryParams.getIndex();});/**
 * Given a set of raw changes (no moved events and prevName not specified yet), and a set of
 * EventRegistrations that should be notified of these changes, generate the actual events to be raised.
 *
 * Notes:
 *  - child_moved events will be synthesized at this time for any child_changed events that affect
 *    our index.
 *  - prevName will be calculated based on the index ordering.
 */function eventGeneratorGenerateEventsForChanges(eventGenerator,changes,eventCache,eventRegistrations){var events=[];var moves=[];changes.forEach(function(change){if(change.type==="child_changed"/* CHILD_CHANGED */&&eventGenerator.index_.indexedValueChanged(change.oldSnap,change.snapshotNode)){moves.push(changeChildMoved(change.childName,change.snapshotNode));}});eventGeneratorGenerateEventsForType(eventGenerator,events,"child_removed"/* CHILD_REMOVED */,changes,eventRegistrations,eventCache);eventGeneratorGenerateEventsForType(eventGenerator,events,"child_added"/* CHILD_ADDED */,changes,eventRegistrations,eventCache);eventGeneratorGenerateEventsForType(eventGenerator,events,"child_moved"/* CHILD_MOVED */,moves,eventRegistrations,eventCache);eventGeneratorGenerateEventsForType(eventGenerator,events,"child_changed"/* CHILD_CHANGED */,changes,eventRegistrations,eventCache);eventGeneratorGenerateEventsForType(eventGenerator,events,"value"/* VALUE */,changes,eventRegistrations,eventCache);return events;}/**
 * Given changes of a single change type, generate the corresponding events.
 */function eventGeneratorGenerateEventsForType(eventGenerator,events,eventType,changes,registrations,eventCache){var filteredChanges=changes.filter(function(change){return change.type===eventType;});filteredChanges.sort(function(a,b){return eventGeneratorCompareChanges(eventGenerator,a,b);});filteredChanges.forEach(function(change){var materializedChange=eventGeneratorMaterializeSingleChange(eventGenerator,change,eventCache);registrations.forEach(function(registration){if(registration.respondsTo(change.type)){events.push(registration.createEvent(materializedChange,eventGenerator.query_));}});});}function eventGeneratorMaterializeSingleChange(eventGenerator,change,eventCache){if(change.type==='value'||change.type==='child_removed'){return change;}else {change.prevName=eventCache.getPredecessorChildName(change.childName,change.snapshotNode,eventGenerator.index_);return change;}}function eventGeneratorCompareChanges(eventGenerator,a,b){if(a.childName==null||b.childName==null){throw assertionError('Should only compare child_ events.');}var aWrapped=new NamedNode(a.childName,a.snapshotNode);var bWrapped=new NamedNode(b.childName,b.snapshotNode);return eventGenerator.index_.compare(aWrapped,bWrapped);}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function newViewCache(eventCache,serverCache){return {eventCache:eventCache,serverCache:serverCache};}function viewCacheUpdateEventSnap(viewCache,eventSnap,complete,filtered){return newViewCache(new CacheNode(eventSnap,complete,filtered),viewCache.serverCache);}function viewCacheUpdateServerSnap(viewCache,serverSnap,complete,filtered){return newViewCache(viewCache.eventCache,new CacheNode(serverSnap,complete,filtered));}function viewCacheGetCompleteEventSnap(viewCache){return viewCache.eventCache.isFullyInitialized()?viewCache.eventCache.getNode():null;}function viewCacheGetCompleteServerSnap(viewCache){return viewCache.serverCache.isFullyInitialized()?viewCache.serverCache.getNode():null;}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var emptyChildrenSingleton;/**
 * Singleton empty children collection.
 *
 */var EmptyChildren=function EmptyChildren(){if(!emptyChildrenSingleton){emptyChildrenSingleton=new SortedMap(stringCompare);}return emptyChildrenSingleton;};/**
 * A tree with immutable elements.
 */var ImmutableTree=/*#__PURE__*/function(){function ImmutableTree(value){var children=arguments.length>1&&arguments[1]!==undefined?arguments[1]:EmptyChildren();_classCallCheck(this,ImmutableTree);this.value=value;this.children=children;}_createClass(ImmutableTree,[{key:"isEmpty",value:/**
     * True if the value is empty and there are no children
     */function isEmpty(){return this.value===null&&this.children.isEmpty();}/**
     * Given a path and predicate, return the first node and the path to that node
     * where the predicate returns true.
     *
     * TODO Do a perf test -- If we're creating a bunch of `{path: value:}`
     * objects on the way back out, it may be better to pass down a pathSoFar obj.
     *
     * @param relativePath - The remainder of the path
     * @param predicate - The predicate to satisfy to return a node
     */},{key:"findRootMostMatchingPathAndValue",value:function findRootMostMatchingPathAndValue(relativePath,predicate){if(this.value!=null&&predicate(this.value)){return {path:newEmptyPath(),value:this.value};}else {if(pathIsEmpty(relativePath)){return null;}else {var front=pathGetFront(relativePath);var _child3=this.children.get(front);if(_child3!==null){var childExistingPathAndValue=_child3.findRootMostMatchingPathAndValue(pathPopFront(relativePath),predicate);if(childExistingPathAndValue!=null){var fullPath=pathChild(new Path(front),childExistingPathAndValue.path);return {path:fullPath,value:childExistingPathAndValue.value};}else {return null;}}else {return null;}}}}/**
     * Find, if it exists, the shortest subpath of the given path that points a defined
     * value in the tree
     */},{key:"findRootMostValueAndPath",value:function findRootMostValueAndPath(relativePath){return this.findRootMostMatchingPathAndValue(relativePath,function(){return true;});}/**
     * @returns The subtree at the given path
     */},{key:"subtree",value:function subtree(relativePath){if(pathIsEmpty(relativePath)){return this;}else {var front=pathGetFront(relativePath);var childTree=this.children.get(front);if(childTree!==null){return childTree.subtree(pathPopFront(relativePath));}else {return new ImmutableTree(null);}}}/**
     * Sets a value at the specified path.
     *
     * @param relativePath - Path to set value at.
     * @param toSet - Value to set.
     * @returns Resulting tree.
     */},{key:"set",value:function set(relativePath,toSet){if(pathIsEmpty(relativePath)){return new ImmutableTree(toSet,this.children);}else {var front=pathGetFront(relativePath);var _child4=this.children.get(front)||new ImmutableTree(null);var newChild=_child4.set(pathPopFront(relativePath),toSet);var newChildren=this.children.insert(front,newChild);return new ImmutableTree(this.value,newChildren);}}/**
     * Removes the value at the specified path.
     *
     * @param relativePath - Path to value to remove.
     * @returns Resulting tree.
     */},{key:"remove",value:function remove(relativePath){if(pathIsEmpty(relativePath)){if(this.children.isEmpty()){return new ImmutableTree(null);}else {return new ImmutableTree(null,this.children);}}else {var front=pathGetFront(relativePath);var _child5=this.children.get(front);if(_child5){var newChild=_child5.remove(pathPopFront(relativePath));var newChildren;if(newChild.isEmpty()){newChildren=this.children.remove(front);}else {newChildren=this.children.insert(front,newChild);}if(this.value===null&&newChildren.isEmpty()){return new ImmutableTree(null);}else {return new ImmutableTree(this.value,newChildren);}}else {return this;}}}/**
     * Gets a value from the tree.
     *
     * @param relativePath - Path to get value for.
     * @returns Value at path, or null.
     */},{key:"get",value:function get(relativePath){if(pathIsEmpty(relativePath)){return this.value;}else {var front=pathGetFront(relativePath);var _child6=this.children.get(front);if(_child6){return _child6.get(pathPopFront(relativePath));}else {return null;}}}/**
     * Replace the subtree at the specified path with the given new tree.
     *
     * @param relativePath - Path to replace subtree for.
     * @param newTree - New tree.
     * @returns Resulting tree.
     */},{key:"setTree",value:function setTree(relativePath,newTree){if(pathIsEmpty(relativePath)){return newTree;}else {var front=pathGetFront(relativePath);var _child7=this.children.get(front)||new ImmutableTree(null);var newChild=_child7.setTree(pathPopFront(relativePath),newTree);var newChildren;if(newChild.isEmpty()){newChildren=this.children.remove(front);}else {newChildren=this.children.insert(front,newChild);}return new ImmutableTree(this.value,newChildren);}}/**
     * Performs a depth first fold on this tree. Transforms a tree into a single
     * value, given a function that operates on the path to a node, an optional
     * current value, and a map of child names to folded subtrees
     */},{key:"fold",value:function fold(fn){return this.fold_(newEmptyPath(),fn);}/**
     * Recursive helper for public-facing fold() method
     */},{key:"fold_",value:function fold_(pathSoFar,fn){var accum={};this.children.inorderTraversal(function(childKey,childTree){accum[childKey]=childTree.fold_(pathChild(pathSoFar,childKey),fn);});return fn(pathSoFar,this.value,accum);}/**
     * Find the first matching value on the given path. Return the result of applying f to it.
     */},{key:"findOnPath",value:function findOnPath(path,f){return this.findOnPath_(path,newEmptyPath(),f);}},{key:"findOnPath_",value:function findOnPath_(pathToFollow,pathSoFar,f){var result=this.value?f(pathSoFar,this.value):false;if(result){return result;}else {if(pathIsEmpty(pathToFollow)){return null;}else {var front=pathGetFront(pathToFollow);var nextChild=this.children.get(front);if(nextChild){return nextChild.findOnPath_(pathPopFront(pathToFollow),pathChild(pathSoFar,front),f);}else {return null;}}}}},{key:"foreachOnPath",value:function foreachOnPath(path,f){return this.foreachOnPath_(path,newEmptyPath(),f);}},{key:"foreachOnPath_",value:function foreachOnPath_(pathToFollow,currentRelativePath,f){if(pathIsEmpty(pathToFollow)){return this;}else {if(this.value){f(currentRelativePath,this.value);}var front=pathGetFront(pathToFollow);var nextChild=this.children.get(front);if(nextChild){return nextChild.foreachOnPath_(pathPopFront(pathToFollow),pathChild(currentRelativePath,front),f);}else {return new ImmutableTree(null);}}}/**
     * Calls the given function for each node in the tree that has a value.
     *
     * @param f - A function to be called with the path from the root of the tree to
     * a node, and the value at that node. Called in depth-first order.
     */},{key:"foreach",value:function foreach(f){this.foreach_(newEmptyPath(),f);}},{key:"foreach_",value:function foreach_(currentRelativePath,f){this.children.inorderTraversal(function(childName,childTree){childTree.foreach_(pathChild(currentRelativePath,childName),f);});if(this.value){f(currentRelativePath,this.value);}}},{key:"foreachChild",value:function foreachChild(f){this.children.inorderTraversal(function(childName,childTree){if(childTree.value){f(childName,childTree.value);}});}}],[{key:"fromObject",value:function fromObject(obj){var tree=new ImmutableTree(null);each(obj,function(childPath,childSnap){tree=tree.set(new Path(childPath),childSnap);});return tree;}}]);return ImmutableTree;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This class holds a collection of writes that can be applied to nodes in unison. It abstracts away the logic with
 * dealing with priority writes and multiple nested writes. At any given path there is only allowed to be one write
 * modifying that path. Any write to an existing path or shadowing an existing path will modify that existing write
 * to reflect the write added.
 */var CompoundWrite=/*#__PURE__*/function(){function CompoundWrite(writeTree_){_classCallCheck(this,CompoundWrite);this.writeTree_=writeTree_;}_createClass(CompoundWrite,null,[{key:"empty",value:function empty(){return new CompoundWrite(new ImmutableTree(null));}}]);return CompoundWrite;}();function compoundWriteAddWrite(compoundWrite,path,node){if(pathIsEmpty(path)){return new CompoundWrite(new ImmutableTree(node));}else {var rootmost=compoundWrite.writeTree_.findRootMostValueAndPath(path);if(rootmost!=null){var rootMostPath=rootmost.path;var value=rootmost.value;var relativePath=newRelativePath(rootMostPath,path);value=value.updateChild(relativePath,node);return new CompoundWrite(compoundWrite.writeTree_.set(rootMostPath,value));}else {var subtree=new ImmutableTree(node);var _newWriteTree=compoundWrite.writeTree_.setTree(path,subtree);return new CompoundWrite(_newWriteTree);}}}function compoundWriteAddWrites(compoundWrite,path,updates){var newWrite=compoundWrite;each(updates,function(childKey,node){newWrite=compoundWriteAddWrite(newWrite,pathChild(path,childKey),node);});return newWrite;}/**
 * Will remove a write at the given path and deeper paths. This will <em>not</em> modify a write at a higher
 * location, which must be removed by calling this method with that path.
 *
 * @param compoundWrite - The CompoundWrite to remove.
 * @param path - The path at which a write and all deeper writes should be removed
 * @returns The new CompoundWrite with the removed path
 */function compoundWriteRemoveWrite(compoundWrite,path){if(pathIsEmpty(path)){return CompoundWrite.empty();}else {var _newWriteTree2=compoundWrite.writeTree_.setTree(path,new ImmutableTree(null));return new CompoundWrite(_newWriteTree2);}}/**
 * Returns whether this CompoundWrite will fully overwrite a node at a given location and can therefore be
 * considered "complete".
 *
 * @param compoundWrite - The CompoundWrite to check.
 * @param path - The path to check for
 * @returns Whether there is a complete write at that path
 */function compoundWriteHasCompleteWrite(compoundWrite,path){return compoundWriteGetCompleteNode(compoundWrite,path)!=null;}/**
 * Returns a node for a path if and only if the node is a "complete" overwrite at that path. This will not aggregate
 * writes from deeper paths, but will return child nodes from a more shallow path.
 *
 * @param compoundWrite - The CompoundWrite to get the node from.
 * @param path - The path to get a complete write
 * @returns The node if complete at that path, or null otherwise.
 */function compoundWriteGetCompleteNode(compoundWrite,path){var rootmost=compoundWrite.writeTree_.findRootMostValueAndPath(path);if(rootmost!=null){return compoundWrite.writeTree_.get(rootmost.path).getChild(newRelativePath(rootmost.path,path));}else {return null;}}/**
 * Returns all children that are guaranteed to be a complete overwrite.
 *
 * @param compoundWrite - The CompoundWrite to get children from.
 * @returns A list of all complete children.
 */function compoundWriteGetCompleteChildren(compoundWrite){var children=[];var node=compoundWrite.writeTree_.value;if(node!=null){// If it's a leaf node, it has no children; so nothing to do.
if(!node.isLeafNode()){node.forEachChild(PRIORITY_INDEX,function(childName,childNode){children.push(new NamedNode(childName,childNode));});}}else {compoundWrite.writeTree_.children.inorderTraversal(function(childName,childTree){if(childTree.value!=null){children.push(new NamedNode(childName,childTree.value));}});}return children;}function compoundWriteChildCompoundWrite(compoundWrite,path){if(pathIsEmpty(path)){return compoundWrite;}else {var shadowingNode=compoundWriteGetCompleteNode(compoundWrite,path);if(shadowingNode!=null){return new CompoundWrite(new ImmutableTree(shadowingNode));}else {return new CompoundWrite(compoundWrite.writeTree_.subtree(path));}}}/**
 * Returns true if this CompoundWrite is empty and therefore does not modify any nodes.
 * @returns Whether this CompoundWrite is empty
 */function compoundWriteIsEmpty(compoundWrite){return compoundWrite.writeTree_.isEmpty();}/**
 * Applies this CompoundWrite to a node. The node is returned with all writes from this CompoundWrite applied to the
 * node
 * @param node - The node to apply this CompoundWrite to
 * @returns The node with all writes applied
 */function compoundWriteApply(compoundWrite,node){return applySubtreeWrite(newEmptyPath(),compoundWrite.writeTree_,node);}function applySubtreeWrite(relativePath,writeTree,node){if(writeTree.value!=null){// Since there a write is always a leaf, we're done here
return node.updateChild(relativePath,writeTree.value);}else {var priorityWrite=null;writeTree.children.inorderTraversal(function(childKey,childTree){if(childKey==='.priority'){// Apply priorities at the end so we don't update priorities for either empty nodes or forget
// to apply priorities to empty nodes that are later filled
assert(childTree.value!==null,'Priority writes must always be leaf nodes');priorityWrite=childTree.value;}else {node=applySubtreeWrite(pathChild(relativePath,childKey),childTree,node);}});// If there was a priority write, we only apply it if the node is not empty
if(!node.getChild(relativePath).isEmpty()&&priorityWrite!==null){node=node.updateChild(pathChild(relativePath,'.priority'),priorityWrite);}return node;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Create a new WriteTreeRef for the given path. For use with a new sync point at the given path.
 *
 */function writeTreeChildWrites(writeTree,path){return newWriteTreeRef(path,writeTree);}/**
 * Record a new overwrite from user code.
 *
 * @param visible - This is set to false by some transactions. It should be excluded from event caches
 */function writeTreeAddOverwrite(writeTree,path,snap,writeId,visible){assert(writeId>writeTree.lastWriteId,'Stacking an older write on top of newer ones');if(visible===undefined){visible=true;}writeTree.allWrites.push({path:path,snap:snap,writeId:writeId,visible:visible});if(visible){writeTree.visibleWrites=compoundWriteAddWrite(writeTree.visibleWrites,path,snap);}writeTree.lastWriteId=writeId;}function writeTreeGetWrite(writeTree,writeId){for(var i=0;i<writeTree.allWrites.length;i++){var record=writeTree.allWrites[i];if(record.writeId===writeId){return record;}}return null;}/**
 * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
 * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
 *
 * @returns true if the write may have been visible (meaning we'll need to reevaluate / raise
 * events as a result).
 */function writeTreeRemoveWrite(writeTree,writeId){// Note: disabling this check. It could be a transaction that preempted another transaction, and thus was applied
// out of order.
//const validClear = revert || this.allWrites_.length === 0 || writeId <= this.allWrites_[0].writeId;
//assert(validClear, "Either we don't have this write, or it's the first one in the queue");
var idx=writeTree.allWrites.findIndex(function(s){return s.writeId===writeId;});assert(idx>=0,'removeWrite called with nonexistent writeId.');var writeToRemove=writeTree.allWrites[idx];writeTree.allWrites.splice(idx,1);var removedWriteWasVisible=writeToRemove.visible;var removedWriteOverlapsWithOtherWrites=false;var i=writeTree.allWrites.length-1;while(removedWriteWasVisible&&i>=0){var currentWrite=writeTree.allWrites[i];if(currentWrite.visible){if(i>=idx&&writeTreeRecordContainsPath_(currentWrite,writeToRemove.path)){// The removed write was completely shadowed by a subsequent write.
removedWriteWasVisible=false;}else if(pathContains(writeToRemove.path,currentWrite.path)){// Either we're covering some writes or they're covering part of us (depending on which came first).
removedWriteOverlapsWithOtherWrites=true;}}i--;}if(!removedWriteWasVisible){return false;}else if(removedWriteOverlapsWithOtherWrites){// There's some shadowing going on. Just rebuild the visible writes from scratch.
writeTreeResetTree_(writeTree);return true;}else {// There's no shadowing.  We can safely just remove the write(s) from visibleWrites.
if(writeToRemove.snap){writeTree.visibleWrites=compoundWriteRemoveWrite(writeTree.visibleWrites,writeToRemove.path);}else {var children=writeToRemove.children;each(children,function(childName){writeTree.visibleWrites=compoundWriteRemoveWrite(writeTree.visibleWrites,pathChild(writeToRemove.path,childName));});}return true;}}function writeTreeRecordContainsPath_(writeRecord,path){if(writeRecord.snap){return pathContains(writeRecord.path,path);}else {for(var childName in writeRecord.children){if(writeRecord.children.hasOwnProperty(childName)&&pathContains(pathChild(writeRecord.path,childName),path)){return true;}}return false;}}/**
 * Re-layer the writes and merges into a tree so we can efficiently calculate event snapshots
 */function writeTreeResetTree_(writeTree){writeTree.visibleWrites=writeTreeLayerTree_(writeTree.allWrites,writeTreeDefaultFilter_,newEmptyPath());if(writeTree.allWrites.length>0){writeTree.lastWriteId=writeTree.allWrites[writeTree.allWrites.length-1].writeId;}else {writeTree.lastWriteId=-1;}}/**
 * The default filter used when constructing the tree. Keep everything that's visible.
 */function writeTreeDefaultFilter_(write){return write.visible;}/**
 * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
 * event data at that path.
 */function writeTreeLayerTree_(writes,filter,treeRoot){var compoundWrite=CompoundWrite.empty();for(var i=0;i<writes.length;++i){var write=writes[i];// Theory, a later set will either:
// a) abort a relevant transaction, so no need to worry about excluding it from calculating that transaction
// b) not be relevant to a transaction (separate branch), so again will not affect the data for that transaction
if(filter(write)){var writePath=write.path;var relativePath=void 0;if(write.snap){if(pathContains(treeRoot,writePath)){relativePath=newRelativePath(treeRoot,writePath);compoundWrite=compoundWriteAddWrite(compoundWrite,relativePath,write.snap);}else if(pathContains(writePath,treeRoot)){relativePath=newRelativePath(writePath,treeRoot);compoundWrite=compoundWriteAddWrite(compoundWrite,newEmptyPath(),write.snap.getChild(relativePath));}else;}else if(write.children){if(pathContains(treeRoot,writePath)){relativePath=newRelativePath(treeRoot,writePath);compoundWrite=compoundWriteAddWrites(compoundWrite,relativePath,write.children);}else if(pathContains(writePath,treeRoot)){relativePath=newRelativePath(writePath,treeRoot);if(pathIsEmpty(relativePath)){compoundWrite=compoundWriteAddWrites(compoundWrite,newEmptyPath(),write.children);}else {var _child8=safeGet(write.children,pathGetFront(relativePath));if(_child8){// There exists a child in this node that matches the root path
var deepNode=_child8.getChild(pathPopFront(relativePath));compoundWrite=compoundWriteAddWrite(compoundWrite,newEmptyPath(),deepNode);}}}else;}else {throw assertionError('WriteRecord should have .snap or .children');}}}return compoundWrite;}/**
 * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
 * writes), attempt to calculate a complete snapshot for the given path
 *
 * @param writeIdsToExclude - An optional set to be excluded
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */function writeTreeCalcCompleteEventCache(writeTree,treePath,completeServerCache,writeIdsToExclude,includeHiddenWrites){if(!writeIdsToExclude&&!includeHiddenWrites){var shadowingNode=compoundWriteGetCompleteNode(writeTree.visibleWrites,treePath);if(shadowingNode!=null){return shadowingNode;}else {var subMerge=compoundWriteChildCompoundWrite(writeTree.visibleWrites,treePath);if(compoundWriteIsEmpty(subMerge)){return completeServerCache;}else if(completeServerCache==null&&!compoundWriteHasCompleteWrite(subMerge,newEmptyPath())){// We wouldn't have a complete snapshot, since there's no underlying data and no complete shadow
return null;}else {var layeredCache=completeServerCache||ChildrenNode.EMPTY_NODE;return compoundWriteApply(subMerge,layeredCache);}}}else {var merge=compoundWriteChildCompoundWrite(writeTree.visibleWrites,treePath);if(!includeHiddenWrites&&compoundWriteIsEmpty(merge)){return completeServerCache;}else {// If the server cache is null, and we don't have a complete cache, we need to return null
if(!includeHiddenWrites&&completeServerCache==null&&!compoundWriteHasCompleteWrite(merge,newEmptyPath())){return null;}else {var filter=function filter(write){return (write.visible||includeHiddenWrites)&&(!writeIdsToExclude||!~writeIdsToExclude.indexOf(write.writeId))&&(pathContains(write.path,treePath)||pathContains(treePath,write.path));};var mergeAtPath=writeTreeLayerTree_(writeTree.allWrites,filter,treePath);var _layeredCache=completeServerCache||ChildrenNode.EMPTY_NODE;return compoundWriteApply(mergeAtPath,_layeredCache);}}}}/**
 * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
 * Used when creating new views, to pre-fill their complete event children snapshot.
 */function writeTreeCalcCompleteEventChildren(writeTree,treePath,completeServerChildren){var completeChildren=ChildrenNode.EMPTY_NODE;var topLevelSet=compoundWriteGetCompleteNode(writeTree.visibleWrites,treePath);if(topLevelSet){if(!topLevelSet.isLeafNode()){// we're shadowing everything. Return the children.
topLevelSet.forEachChild(PRIORITY_INDEX,function(childName,childSnap){completeChildren=completeChildren.updateImmediateChild(childName,childSnap);});}return completeChildren;}else if(completeServerChildren){// Layer any children we have on top of this
// We know we don't have a top-level set, so just enumerate existing children
var merge=compoundWriteChildCompoundWrite(writeTree.visibleWrites,treePath);completeServerChildren.forEachChild(PRIORITY_INDEX,function(childName,childNode){var node=compoundWriteApply(compoundWriteChildCompoundWrite(merge,new Path(childName)),childNode);completeChildren=completeChildren.updateImmediateChild(childName,node);});// Add any complete children we have from the set
compoundWriteGetCompleteChildren(merge).forEach(function(namedNode){completeChildren=completeChildren.updateImmediateChild(namedNode.name,namedNode.node);});return completeChildren;}else {// We don't have anything to layer on top of. Layer on any children we have
// Note that we can return an empty snap if we have a defined delete
var _merge=compoundWriteChildCompoundWrite(writeTree.visibleWrites,treePath);compoundWriteGetCompleteChildren(_merge).forEach(function(namedNode){completeChildren=completeChildren.updateImmediateChild(namedNode.name,namedNode.node);});return completeChildren;}}/**
 * Given that the underlying server data has updated, determine what, if anything, needs to be
 * applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events
 *
 * Either existingEventSnap or existingServerSnap must exist
 */function writeTreeCalcEventCacheAfterServerOverwrite(writeTree,treePath,childPath,existingEventSnap,existingServerSnap){assert(existingEventSnap||existingServerSnap,'Either existingEventSnap or existingServerSnap must exist');var path=pathChild(treePath,childPath);if(compoundWriteHasCompleteWrite(writeTree.visibleWrites,path)){// At this point we can probably guarantee that we're in case 2, meaning no events
// May need to check visibility while doing the findRootMostValueAndPath call
return null;}else {// No complete shadowing. We're either partially shadowing or not shadowing at all.
var childMerge=compoundWriteChildCompoundWrite(writeTree.visibleWrites,path);if(compoundWriteIsEmpty(childMerge)){// We're not shadowing at all. Case 1
return existingServerSnap.getChild(childPath);}else {// This could be more efficient if the serverNode + updates doesn't change the eventSnap
// However this is tricky to find out, since user updates don't necessary change the server
// snap, e.g. priority updates on empty nodes, or deep deletes. Another special case is if the server
// adds nodes, but doesn't change any existing writes. It is therefore not enough to
// only check if the updates change the serverNode.
// Maybe check if the merge tree contains these special cases and only do a full overwrite in that case?
return compoundWriteApply(childMerge,existingServerSnap.getChild(childPath));}}}/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */function writeTreeCalcCompleteChild(writeTree,treePath,childKey,existingServerSnap){var path=pathChild(treePath,childKey);var shadowingNode=compoundWriteGetCompleteNode(writeTree.visibleWrites,path);if(shadowingNode!=null){return shadowingNode;}else {if(existingServerSnap.isCompleteForChild(childKey)){var childMerge=compoundWriteChildCompoundWrite(writeTree.visibleWrites,path);return compoundWriteApply(childMerge,existingServerSnap.getNode().getImmediateChild(childKey));}else {return null;}}}/**
 * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
 * a higher path, this will return the child of that write relative to the write and this path.
 * Returns null if there is no write at this path.
 */function writeTreeShadowingWrite(writeTree,path){return compoundWriteGetCompleteNode(writeTree.visibleWrites,path);}/**
 * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
 * the window, but may now be in the window.
 */function writeTreeCalcIndexedSlice(writeTree,treePath,completeServerData,startPost,count,reverse,index){var toIterate;var merge=compoundWriteChildCompoundWrite(writeTree.visibleWrites,treePath);var shadowingNode=compoundWriteGetCompleteNode(merge,newEmptyPath());if(shadowingNode!=null){toIterate=shadowingNode;}else if(completeServerData!=null){toIterate=compoundWriteApply(merge,completeServerData);}else {// no children to iterate on
return [];}toIterate=toIterate.withIndex(index);if(!toIterate.isEmpty()&&!toIterate.isLeafNode()){var nodes=[];var cmp=index.getCompare();var iter=reverse?toIterate.getReverseIteratorFrom(startPost,index):toIterate.getIteratorFrom(startPost,index);var next=iter.getNext();while(next&&nodes.length<count){if(cmp(next,startPost)!==0){nodes.push(next);}next=iter.getNext();}return nodes;}else {return [];}}function newWriteTree(){return {visibleWrites:CompoundWrite.empty(),allWrites:[],lastWriteId:-1};}/**
 * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
 * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
 * can lead to a more expensive calculation.
 *
 * @param writeIdsToExclude - Optional writes to exclude.
 * @param includeHiddenWrites - Defaults to false, whether or not to layer on writes with visible set to false
 */function writeTreeRefCalcCompleteEventCache(writeTreeRef,completeServerCache,writeIdsToExclude,includeHiddenWrites){return writeTreeCalcCompleteEventCache(writeTreeRef.writeTree,writeTreeRef.treePath,completeServerCache,writeIdsToExclude,includeHiddenWrites);}/**
 * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
 * mix of the given server data and write data.
 *
 */function writeTreeRefCalcCompleteEventChildren(writeTreeRef,completeServerChildren){return writeTreeCalcCompleteEventChildren(writeTreeRef.writeTree,writeTreeRef.treePath,completeServerChildren);}/**
 * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
 * if anything, needs to be applied to the event cache.
 *
 * Possibilities:
 *
 * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
 *
 * 2. Some write is completely shadowing. No events to be raised
 *
 * 3. Is partially shadowed. Events should be raised
 *
 * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
 *
 *
 */function writeTreeRefCalcEventCacheAfterServerOverwrite(writeTreeRef,path,existingEventSnap,existingServerSnap){return writeTreeCalcEventCacheAfterServerOverwrite(writeTreeRef.writeTree,writeTreeRef.treePath,path,existingEventSnap,existingServerSnap);}/**
 * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
 * a higher path, this will return the child of that write relative to the write and this path.
 * Returns null if there is no write at this path.
 *
 */function writeTreeRefShadowingWrite(writeTreeRef,path){return writeTreeShadowingWrite(writeTreeRef.writeTree,pathChild(writeTreeRef.treePath,path));}/**
 * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
 * the window, but may now be in the window
 */function writeTreeRefCalcIndexedSlice(writeTreeRef,completeServerData,startPost,count,reverse,index){return writeTreeCalcIndexedSlice(writeTreeRef.writeTree,writeTreeRef.treePath,completeServerData,startPost,count,reverse,index);}/**
 * Returns a complete child for a given server snap after applying all user writes or null if there is no
 * complete child for this ChildKey.
 */function writeTreeRefCalcCompleteChild(writeTreeRef,childKey,existingServerCache){return writeTreeCalcCompleteChild(writeTreeRef.writeTree,writeTreeRef.treePath,childKey,existingServerCache);}/**
 * Return a WriteTreeRef for a child.
 */function writeTreeRefChild(writeTreeRef,childName){return newWriteTreeRef(pathChild(writeTreeRef.treePath,childName),writeTreeRef.writeTree);}function newWriteTreeRef(path,writeTree){return {treePath:path,writeTree:writeTree};}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ChildChangeAccumulator=/*#__PURE__*/function(){function ChildChangeAccumulator(){_classCallCheck(this,ChildChangeAccumulator);this.changeMap=new Map();}_createClass(ChildChangeAccumulator,[{key:"trackChildChange",value:function trackChildChange(change){var type=change.type;var childKey=change.childName;assert(type==="child_added"/* CHILD_ADDED */||type==="child_changed"/* CHILD_CHANGED */||type==="child_removed"/* CHILD_REMOVED */,'Only child changes supported for tracking');assert(childKey!=='.priority','Only non-priority child changes can be tracked.');var oldChange=this.changeMap.get(childKey);if(oldChange){var oldType=oldChange.type;if(type==="child_added"/* CHILD_ADDED */&&oldType==="child_removed"/* CHILD_REMOVED */){this.changeMap.set(childKey,changeChildChanged(childKey,change.snapshotNode,oldChange.snapshotNode));}else if(type==="child_removed"/* CHILD_REMOVED */&&oldType==="child_added"/* CHILD_ADDED */){this.changeMap["delete"](childKey);}else if(type==="child_removed"/* CHILD_REMOVED */&&oldType==="child_changed"/* CHILD_CHANGED */){this.changeMap.set(childKey,changeChildRemoved(childKey,oldChange.oldSnap));}else if(type==="child_changed"/* CHILD_CHANGED */&&oldType==="child_added"/* CHILD_ADDED */){this.changeMap.set(childKey,changeChildAdded(childKey,change.snapshotNode));}else if(type==="child_changed"/* CHILD_CHANGED */&&oldType==="child_changed"/* CHILD_CHANGED */){this.changeMap.set(childKey,changeChildChanged(childKey,change.snapshotNode,oldChange.oldSnap));}else {throw assertionError('Illegal combination of changes: '+change+' occurred after '+oldChange);}}else {this.changeMap.set(childKey,change);}}},{key:"getChanges",value:function getChanges(){return Array.from(this.changeMap.values());}}]);return ChildChangeAccumulator;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * An implementation of CompleteChildSource that never returns any additional children
 */ // eslint-disable-next-line @typescript-eslint/naming-convention
var NoCompleteChildSource_=/*#__PURE__*/function(){function NoCompleteChildSource_(){_classCallCheck(this,NoCompleteChildSource_);}_createClass(NoCompleteChildSource_,[{key:"getCompleteChild",value:function getCompleteChild(childKey){return null;}},{key:"getChildAfterChild",value:function getChildAfterChild(index,child,reverse){return null;}}]);return NoCompleteChildSource_;}();/**
 * Singleton instance.
 */var NO_COMPLETE_CHILD_SOURCE=new NoCompleteChildSource_();/**
 * An implementation of CompleteChildSource that uses a WriteTree in addition to any other server data or
 * old event caches available to calculate complete children.
 */var WriteTreeCompleteChildSource=/*#__PURE__*/function(){function WriteTreeCompleteChildSource(writes_,viewCache_){var optCompleteServerCache_=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;_classCallCheck(this,WriteTreeCompleteChildSource);this.writes_=writes_;this.viewCache_=viewCache_;this.optCompleteServerCache_=optCompleteServerCache_;}_createClass(WriteTreeCompleteChildSource,[{key:"getCompleteChild",value:function getCompleteChild(childKey){var node=this.viewCache_.eventCache;if(node.isCompleteForChild(childKey)){return node.getNode().getImmediateChild(childKey);}else {var serverNode=this.optCompleteServerCache_!=null?new CacheNode(this.optCompleteServerCache_,true,false):this.viewCache_.serverCache;return writeTreeRefCalcCompleteChild(this.writes_,childKey,serverNode);}}},{key:"getChildAfterChild",value:function getChildAfterChild(index,child,reverse){var completeServerData=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:viewCacheGetCompleteServerSnap(this.viewCache_);var nodes=writeTreeRefCalcIndexedSlice(this.writes_,completeServerData,child,1,reverse,index);if(nodes.length===0){return null;}else {return nodes[0];}}}]);return WriteTreeCompleteChildSource;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function newViewProcessor(filter){return {filter:filter};}function viewProcessorAssertIndexed(viewProcessor,viewCache){assert(viewCache.eventCache.getNode().isIndexed(viewProcessor.filter.getIndex()),'Event snap not indexed');assert(viewCache.serverCache.getNode().isIndexed(viewProcessor.filter.getIndex()),'Server snap not indexed');}function viewProcessorApplyOperation(viewProcessor,oldViewCache,operation,writesCache,completeCache){var accumulator=new ChildChangeAccumulator();var newViewCache,filterServerNode;if(operation.type===OperationType.OVERWRITE){var overwrite=operation;if(overwrite.source.fromUser){newViewCache=viewProcessorApplyUserOverwrite(viewProcessor,oldViewCache,overwrite.path,overwrite.snap,writesCache,completeCache,accumulator);}else {assert(overwrite.source.fromServer,'Unknown source.');// We filter the node if it's a tagged update or the node has been previously filtered  and the
// update is not at the root in which case it is ok (and necessary) to mark the node unfiltered
// again
filterServerNode=overwrite.source.tagged||oldViewCache.serverCache.isFiltered()&&!pathIsEmpty(overwrite.path);newViewCache=viewProcessorApplyServerOverwrite(viewProcessor,oldViewCache,overwrite.path,overwrite.snap,writesCache,completeCache,filterServerNode,accumulator);}}else if(operation.type===OperationType.MERGE){var merge=operation;if(merge.source.fromUser){newViewCache=viewProcessorApplyUserMerge(viewProcessor,oldViewCache,merge.path,merge.children,writesCache,completeCache,accumulator);}else {assert(merge.source.fromServer,'Unknown source.');// We filter the node if it's a tagged update or the node has been previously filtered
filterServerNode=merge.source.tagged||oldViewCache.serverCache.isFiltered();newViewCache=viewProcessorApplyServerMerge(viewProcessor,oldViewCache,merge.path,merge.children,writesCache,completeCache,filterServerNode,accumulator);}}else if(operation.type===OperationType.ACK_USER_WRITE){var ackUserWrite=operation;if(!ackUserWrite.revert){newViewCache=viewProcessorAckUserWrite(viewProcessor,oldViewCache,ackUserWrite.path,ackUserWrite.affectedTree,writesCache,completeCache,accumulator);}else {newViewCache=viewProcessorRevertUserWrite(viewProcessor,oldViewCache,ackUserWrite.path,writesCache,completeCache,accumulator);}}else if(operation.type===OperationType.LISTEN_COMPLETE){newViewCache=viewProcessorListenComplete(viewProcessor,oldViewCache,operation.path,writesCache,accumulator);}else {throw assertionError('Unknown operation type: '+operation.type);}var changes=accumulator.getChanges();viewProcessorMaybeAddValueEvent(oldViewCache,newViewCache,changes);return {viewCache:newViewCache,changes:changes};}function viewProcessorMaybeAddValueEvent(oldViewCache,newViewCache,accumulator){var eventSnap=newViewCache.eventCache;if(eventSnap.isFullyInitialized()){var isLeafOrEmpty=eventSnap.getNode().isLeafNode()||eventSnap.getNode().isEmpty();var oldCompleteSnap=viewCacheGetCompleteEventSnap(oldViewCache);if(accumulator.length>0||!oldViewCache.eventCache.isFullyInitialized()||isLeafOrEmpty&&!eventSnap.getNode().equals(oldCompleteSnap)||!eventSnap.getNode().getPriority().equals(oldCompleteSnap.getPriority())){accumulator.push(changeValue(viewCacheGetCompleteEventSnap(newViewCache)));}}}function viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor,viewCache,changePath,writesCache,source,accumulator){var oldEventSnap=viewCache.eventCache;if(writeTreeRefShadowingWrite(writesCache,changePath)!=null){// we have a shadowing write, ignore changes
return viewCache;}else {var newEventCache,serverNode;if(pathIsEmpty(changePath)){// TODO: figure out how this plays with "sliding ack windows"
assert(viewCache.serverCache.isFullyInitialized(),'If change path is empty, we must have complete server data');if(viewCache.serverCache.isFiltered()){// We need to special case this, because we need to only apply writes to complete children, or
// we might end up raising events for incomplete children. If the server data is filtered deep
// writes cannot be guaranteed to be complete
var serverCache=viewCacheGetCompleteServerSnap(viewCache);var completeChildren=serverCache instanceof ChildrenNode?serverCache:ChildrenNode.EMPTY_NODE;var completeEventChildren=writeTreeRefCalcCompleteEventChildren(writesCache,completeChildren);newEventCache=viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(),completeEventChildren,accumulator);}else {var completeNode=writeTreeRefCalcCompleteEventCache(writesCache,viewCacheGetCompleteServerSnap(viewCache));newEventCache=viewProcessor.filter.updateFullNode(viewCache.eventCache.getNode(),completeNode,accumulator);}}else {var childKey=pathGetFront(changePath);if(childKey==='.priority'){assert(pathGetLength(changePath)===1,"Can't have a priority with additional path components");var oldEventNode=oldEventSnap.getNode();serverNode=viewCache.serverCache.getNode();// we might have overwrites for this priority
var updatedPriority=writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache,changePath,oldEventNode,serverNode);if(updatedPriority!=null){newEventCache=viewProcessor.filter.updatePriority(oldEventNode,updatedPriority);}else {// priority didn't change, keep old node
newEventCache=oldEventSnap.getNode();}}else {var childChangePath=pathPopFront(changePath);// update child
var newEventChild;if(oldEventSnap.isCompleteForChild(childKey)){serverNode=viewCache.serverCache.getNode();var eventChildUpdate=writeTreeRefCalcEventCacheAfterServerOverwrite(writesCache,changePath,oldEventSnap.getNode(),serverNode);if(eventChildUpdate!=null){newEventChild=oldEventSnap.getNode().getImmediateChild(childKey).updateChild(childChangePath,eventChildUpdate);}else {// Nothing changed, just keep the old child
newEventChild=oldEventSnap.getNode().getImmediateChild(childKey);}}else {newEventChild=writeTreeRefCalcCompleteChild(writesCache,childKey,viewCache.serverCache);}if(newEventChild!=null){newEventCache=viewProcessor.filter.updateChild(oldEventSnap.getNode(),childKey,newEventChild,childChangePath,source,accumulator);}else {// no complete child available or no change
newEventCache=oldEventSnap.getNode();}}}return viewCacheUpdateEventSnap(viewCache,newEventCache,oldEventSnap.isFullyInitialized()||pathIsEmpty(changePath),viewProcessor.filter.filtersNodes());}}function viewProcessorApplyServerOverwrite(viewProcessor,oldViewCache,changePath,changedSnap,writesCache,completeCache,filterServerNode,accumulator){var oldServerSnap=oldViewCache.serverCache;var newServerCache;var serverFilter=filterServerNode?viewProcessor.filter:viewProcessor.filter.getIndexedFilter();if(pathIsEmpty(changePath)){newServerCache=serverFilter.updateFullNode(oldServerSnap.getNode(),changedSnap,null);}else if(serverFilter.filtersNodes()&&!oldServerSnap.isFiltered()){// we want to filter the server node, but we didn't filter the server node yet, so simulate a full update
var newServerNode=oldServerSnap.getNode().updateChild(changePath,changedSnap);newServerCache=serverFilter.updateFullNode(oldServerSnap.getNode(),newServerNode,null);}else {var childKey=pathGetFront(changePath);if(!oldServerSnap.isCompleteForPath(changePath)&&pathGetLength(changePath)>1){// We don't update incomplete nodes with updates intended for other listeners
return oldViewCache;}var childChangePath=pathPopFront(changePath);var childNode=oldServerSnap.getNode().getImmediateChild(childKey);var newChildNode=childNode.updateChild(childChangePath,changedSnap);if(childKey==='.priority'){newServerCache=serverFilter.updatePriority(oldServerSnap.getNode(),newChildNode);}else {newServerCache=serverFilter.updateChild(oldServerSnap.getNode(),childKey,newChildNode,childChangePath,NO_COMPLETE_CHILD_SOURCE,null);}}var newViewCache=viewCacheUpdateServerSnap(oldViewCache,newServerCache,oldServerSnap.isFullyInitialized()||pathIsEmpty(changePath),serverFilter.filtersNodes());var source=new WriteTreeCompleteChildSource(writesCache,newViewCache,completeCache);return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor,newViewCache,changePath,writesCache,source,accumulator);}function viewProcessorApplyUserOverwrite(viewProcessor,oldViewCache,changePath,changedSnap,writesCache,completeCache,accumulator){var oldEventSnap=oldViewCache.eventCache;var newViewCache,newEventCache;var source=new WriteTreeCompleteChildSource(writesCache,oldViewCache,completeCache);if(pathIsEmpty(changePath)){newEventCache=viewProcessor.filter.updateFullNode(oldViewCache.eventCache.getNode(),changedSnap,accumulator);newViewCache=viewCacheUpdateEventSnap(oldViewCache,newEventCache,true,viewProcessor.filter.filtersNodes());}else {var childKey=pathGetFront(changePath);if(childKey==='.priority'){newEventCache=viewProcessor.filter.updatePriority(oldViewCache.eventCache.getNode(),changedSnap);newViewCache=viewCacheUpdateEventSnap(oldViewCache,newEventCache,oldEventSnap.isFullyInitialized(),oldEventSnap.isFiltered());}else {var childChangePath=pathPopFront(changePath);var oldChild=oldEventSnap.getNode().getImmediateChild(childKey);var newChild;if(pathIsEmpty(childChangePath)){// Child overwrite, we can replace the child
newChild=changedSnap;}else {var childNode=source.getCompleteChild(childKey);if(childNode!=null){if(pathGetBack(childChangePath)==='.priority'&&childNode.getChild(pathParent(childChangePath)).isEmpty()){// This is a priority update on an empty node. If this node exists on the server, the
// server will send down the priority in the update, so ignore for now
newChild=childNode;}else {newChild=childNode.updateChild(childChangePath,changedSnap);}}else {// There is no complete child node available
newChild=ChildrenNode.EMPTY_NODE;}}if(!oldChild.equals(newChild)){var newEventSnap=viewProcessor.filter.updateChild(oldEventSnap.getNode(),childKey,newChild,childChangePath,source,accumulator);newViewCache=viewCacheUpdateEventSnap(oldViewCache,newEventSnap,oldEventSnap.isFullyInitialized(),viewProcessor.filter.filtersNodes());}else {newViewCache=oldViewCache;}}}return newViewCache;}function viewProcessorCacheHasChild(viewCache,childKey){return viewCache.eventCache.isCompleteForChild(childKey);}function viewProcessorApplyUserMerge(viewProcessor,viewCache,path,changedChildren,writesCache,serverCache,accumulator){// HACK: In the case of a limit query, there may be some changes that bump things out of the
// window leaving room for new items.  It's important we process these changes first, so we
// iterate the changes twice, first processing any that affect items currently in view.
// TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
// and event snap.  I'm not sure if this will result in edge cases when a child is in one but
// not the other.
var curViewCache=viewCache;changedChildren.foreach(function(relativePath,childNode){var writePath=pathChild(path,relativePath);if(viewProcessorCacheHasChild(viewCache,pathGetFront(writePath))){curViewCache=viewProcessorApplyUserOverwrite(viewProcessor,curViewCache,writePath,childNode,writesCache,serverCache,accumulator);}});changedChildren.foreach(function(relativePath,childNode){var writePath=pathChild(path,relativePath);if(!viewProcessorCacheHasChild(viewCache,pathGetFront(writePath))){curViewCache=viewProcessorApplyUserOverwrite(viewProcessor,curViewCache,writePath,childNode,writesCache,serverCache,accumulator);}});return curViewCache;}function viewProcessorApplyMerge(viewProcessor,node,merge){merge.foreach(function(relativePath,childNode){node=node.updateChild(relativePath,childNode);});return node;}function viewProcessorApplyServerMerge(viewProcessor,viewCache,path,changedChildren,writesCache,serverCache,filterServerNode,accumulator){// If we don't have a cache yet, this merge was intended for a previously listen in the same location. Ignore it and
// wait for the complete data update coming soon.
if(viewCache.serverCache.getNode().isEmpty()&&!viewCache.serverCache.isFullyInitialized()){return viewCache;}// HACK: In the case of a limit query, there may be some changes that bump things out of the
// window leaving room for new items.  It's important we process these changes first, so we
// iterate the changes twice, first processing any that affect items currently in view.
// TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
// and event snap.  I'm not sure if this will result in edge cases when a child is in one but
// not the other.
var curViewCache=viewCache;var viewMergeTree;if(pathIsEmpty(path)){viewMergeTree=changedChildren;}else {viewMergeTree=new ImmutableTree(null).setTree(path,changedChildren);}var serverNode=viewCache.serverCache.getNode();viewMergeTree.children.inorderTraversal(function(childKey,childTree){if(serverNode.hasChild(childKey)){var serverChild=viewCache.serverCache.getNode().getImmediateChild(childKey);var newChild=viewProcessorApplyMerge(viewProcessor,serverChild,childTree);curViewCache=viewProcessorApplyServerOverwrite(viewProcessor,curViewCache,new Path(childKey),newChild,writesCache,serverCache,filterServerNode,accumulator);}});viewMergeTree.children.inorderTraversal(function(childKey,childMergeTree){var isUnknownDeepMerge=!viewCache.serverCache.isCompleteForChild(childKey)&&childMergeTree.value===undefined;if(!serverNode.hasChild(childKey)&&!isUnknownDeepMerge){var serverChild=viewCache.serverCache.getNode().getImmediateChild(childKey);var newChild=viewProcessorApplyMerge(viewProcessor,serverChild,childMergeTree);curViewCache=viewProcessorApplyServerOverwrite(viewProcessor,curViewCache,new Path(childKey),newChild,writesCache,serverCache,filterServerNode,accumulator);}});return curViewCache;}function viewProcessorAckUserWrite(viewProcessor,viewCache,ackPath,affectedTree,writesCache,completeCache,accumulator){if(writeTreeRefShadowingWrite(writesCache,ackPath)!=null){return viewCache;}// Only filter server node if it is currently filtered
var filterServerNode=viewCache.serverCache.isFiltered();// Essentially we'll just get our existing server cache for the affected paths and re-apply it as a server update
// now that it won't be shadowed.
var serverCache=viewCache.serverCache;if(affectedTree.value!=null){// This is an overwrite.
if(pathIsEmpty(ackPath)&&serverCache.isFullyInitialized()||serverCache.isCompleteForPath(ackPath)){return viewProcessorApplyServerOverwrite(viewProcessor,viewCache,ackPath,serverCache.getNode().getChild(ackPath),writesCache,completeCache,filterServerNode,accumulator);}else if(pathIsEmpty(ackPath)){// This is a goofy edge case where we are acking data at this location but don't have full data.  We
// should just re-apply whatever we have in our cache as a merge.
var changedChildren=new ImmutableTree(null);serverCache.getNode().forEachChild(KEY_INDEX,function(name,node){changedChildren=changedChildren.set(new Path(name),node);});return viewProcessorApplyServerMerge(viewProcessor,viewCache,ackPath,changedChildren,writesCache,completeCache,filterServerNode,accumulator);}else {return viewCache;}}else {// This is a merge.
var _changedChildren=new ImmutableTree(null);affectedTree.foreach(function(mergePath,value){var serverCachePath=pathChild(ackPath,mergePath);if(serverCache.isCompleteForPath(serverCachePath)){_changedChildren=_changedChildren.set(mergePath,serverCache.getNode().getChild(serverCachePath));}});return viewProcessorApplyServerMerge(viewProcessor,viewCache,ackPath,_changedChildren,writesCache,completeCache,filterServerNode,accumulator);}}function viewProcessorListenComplete(viewProcessor,viewCache,path,writesCache,accumulator){var oldServerNode=viewCache.serverCache;var newViewCache=viewCacheUpdateServerSnap(viewCache,oldServerNode.getNode(),oldServerNode.isFullyInitialized()||pathIsEmpty(path),oldServerNode.isFiltered());return viewProcessorGenerateEventCacheAfterServerEvent(viewProcessor,newViewCache,path,writesCache,NO_COMPLETE_CHILD_SOURCE,accumulator);}function viewProcessorRevertUserWrite(viewProcessor,viewCache,path,writesCache,completeServerCache,accumulator){var complete;if(writeTreeRefShadowingWrite(writesCache,path)!=null){return viewCache;}else {var source=new WriteTreeCompleteChildSource(writesCache,viewCache,completeServerCache);var oldEventCache=viewCache.eventCache.getNode();var newEventCache;if(pathIsEmpty(path)||pathGetFront(path)==='.priority'){var newNode;if(viewCache.serverCache.isFullyInitialized()){newNode=writeTreeRefCalcCompleteEventCache(writesCache,viewCacheGetCompleteServerSnap(viewCache));}else {var serverChildren=viewCache.serverCache.getNode();assert(serverChildren instanceof ChildrenNode,'serverChildren would be complete if leaf node');newNode=writeTreeRefCalcCompleteEventChildren(writesCache,serverChildren);}newNode=newNode;newEventCache=viewProcessor.filter.updateFullNode(oldEventCache,newNode,accumulator);}else {var childKey=pathGetFront(path);var newChild=writeTreeRefCalcCompleteChild(writesCache,childKey,viewCache.serverCache);if(newChild==null&&viewCache.serverCache.isCompleteForChild(childKey)){newChild=oldEventCache.getImmediateChild(childKey);}if(newChild!=null){newEventCache=viewProcessor.filter.updateChild(oldEventCache,childKey,newChild,pathPopFront(path),source,accumulator);}else if(viewCache.eventCache.getNode().hasChild(childKey)){// No complete child available, delete the existing one, if any
newEventCache=viewProcessor.filter.updateChild(oldEventCache,childKey,ChildrenNode.EMPTY_NODE,pathPopFront(path),source,accumulator);}else {newEventCache=oldEventCache;}if(newEventCache.isEmpty()&&viewCache.serverCache.isFullyInitialized()){// We might have reverted all child writes. Maybe the old event was a leaf node
complete=writeTreeRefCalcCompleteEventCache(writesCache,viewCacheGetCompleteServerSnap(viewCache));if(complete.isLeafNode()){newEventCache=viewProcessor.filter.updateFullNode(newEventCache,complete,accumulator);}}}complete=viewCache.serverCache.isFullyInitialized()||writeTreeRefShadowingWrite(writesCache,newEmptyPath())!=null;return viewCacheUpdateEventSnap(viewCache,newEventCache,complete,viewProcessor.filter.filtersNodes());}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A view represents a specific location and query that has 1 or more event registrations.
 *
 * It does several things:
 *  - Maintains the list of event registrations for this location/query.
 *  - Maintains a cache of the data visible for this location/query.
 *  - Applies new operations (via applyOperation), updates the cache, and based on the event
 *    registrations returns the set of events to be raised.
 */var View=/*#__PURE__*/function(){function View(query_,initialViewCache){_classCallCheck(this,View);this.query_=query_;this.eventRegistrations_=[];var params=this.query_._queryParams;var indexFilter=new IndexedFilter(params.getIndex());var filter=queryParamsGetNodeFilter(params);this.processor_=newViewProcessor(filter);var initialServerCache=initialViewCache.serverCache;var initialEventCache=initialViewCache.eventCache;// Don't filter server node with other filter than index, wait for tagged listen
var serverSnap=indexFilter.updateFullNode(ChildrenNode.EMPTY_NODE,initialServerCache.getNode(),null);var eventSnap=filter.updateFullNode(ChildrenNode.EMPTY_NODE,initialEventCache.getNode(),null);var newServerCache=new CacheNode(serverSnap,initialServerCache.isFullyInitialized(),indexFilter.filtersNodes());var newEventCache=new CacheNode(eventSnap,initialEventCache.isFullyInitialized(),filter.filtersNodes());this.viewCache_=newViewCache(newEventCache,newServerCache);this.eventGenerator_=new EventGenerator(this.query_);}_createClass(View,[{key:"query",get:function get(){return this.query_;}}]);return View;}();function viewGetServerCache(view){return view.viewCache_.serverCache.getNode();}function viewGetCompleteServerCache(view,path){var cache=viewCacheGetCompleteServerSnap(view.viewCache_);if(cache){// If this isn't a "loadsAllData" view, then cache isn't actually a complete cache and
// we need to see if it contains the child we're interested in.
if(view.query._queryParams.loadsAllData()||!pathIsEmpty(path)&&!cache.getImmediateChild(pathGetFront(path)).isEmpty()){return cache.getChild(path);}}return null;}function viewIsEmpty(view){return view.eventRegistrations_.length===0;}function viewAddEventRegistration(view,eventRegistration){view.eventRegistrations_.push(eventRegistration);}/**
 * @param eventRegistration - If null, remove all callbacks.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns Cancel events, if cancelError was provided.
 */function viewRemoveEventRegistration(view,eventRegistration,cancelError){var cancelEvents=[];if(cancelError){assert(eventRegistration==null,'A cancel should cancel all event registrations.');var path=view.query._path;view.eventRegistrations_.forEach(function(registration){var maybeEvent=registration.createCancelEvent(cancelError,path);if(maybeEvent){cancelEvents.push(maybeEvent);}});}if(eventRegistration){var remaining=[];for(var i=0;i<view.eventRegistrations_.length;++i){var existing=view.eventRegistrations_[i];if(!existing.matches(eventRegistration)){remaining.push(existing);}else if(eventRegistration.hasAnyCallback()){// We're removing just this one
remaining=remaining.concat(view.eventRegistrations_.slice(i+1));break;}}view.eventRegistrations_=remaining;}else {view.eventRegistrations_=[];}return cancelEvents;}/**
 * Applies the given Operation, updates our cache, and returns the appropriate events.
 */function viewApplyOperation(view,operation,writesCache,completeServerCache){if(operation.type===OperationType.MERGE&&operation.source.queryId!==null){assert(viewCacheGetCompleteServerSnap(view.viewCache_),'We should always have a full cache before handling merges');assert(viewCacheGetCompleteEventSnap(view.viewCache_),'Missing event cache, even though we have a server cache');}var oldViewCache=view.viewCache_;var result=viewProcessorApplyOperation(view.processor_,oldViewCache,operation,writesCache,completeServerCache);viewProcessorAssertIndexed(view.processor_,result.viewCache);assert(result.viewCache.serverCache.isFullyInitialized()||!oldViewCache.serverCache.isFullyInitialized(),'Once a server snap is complete, it should never go back');view.viewCache_=result.viewCache;return viewGenerateEventsForChanges_(view,result.changes,result.viewCache.eventCache.getNode(),null);}function viewGetInitialEvents(view,registration){var eventSnap=view.viewCache_.eventCache;var initialChanges=[];if(!eventSnap.getNode().isLeafNode()){var eventNode=eventSnap.getNode();eventNode.forEachChild(PRIORITY_INDEX,function(key,childNode){initialChanges.push(changeChildAdded(key,childNode));});}if(eventSnap.isFullyInitialized()){initialChanges.push(changeValue(eventSnap.getNode()));}return viewGenerateEventsForChanges_(view,initialChanges,eventSnap.getNode(),registration);}function viewGenerateEventsForChanges_(view,changes,eventCache,eventRegistration){var registrations=eventRegistration?[eventRegistration]:view.eventRegistrations_;return eventGeneratorGenerateEventsForChanges(view.eventGenerator_,changes,eventCache,registrations);}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var referenceConstructor$1;/**
 * SyncPoint represents a single location in a SyncTree with 1 or more event registrations, meaning we need to
 * maintain 1 or more Views at this location to cache server data and raise appropriate events for server changes
 * and user writes (set, transaction, update).
 *
 * It's responsible for:
 *  - Maintaining the set of 1 or more views necessary at this location (a SyncPoint with 0 views should be removed).
 *  - Proxying user / server operations to the views as appropriate (i.e. applyServerOverwrite,
 *    applyUserOverwrite, etc.)
 */var SyncPoint=/*#__PURE__*/_createClass(function SyncPoint(){_classCallCheck(this,SyncPoint);/**
         * The Views being tracked at this location in the tree, stored as a map where the key is a
         * queryId and the value is the View for that query.
         *
         * NOTE: This list will be quite small (usually 1, but perhaps 2 or 3; any more is an odd use case).
         */this.views=new Map();});function syncPointSetReferenceConstructor(val){assert(!referenceConstructor$1,'__referenceConstructor has already been defined');referenceConstructor$1=val;}function syncPointGetReferenceConstructor(){assert(referenceConstructor$1,'Reference.ts has not been loaded');return referenceConstructor$1;}function syncPointIsEmpty(syncPoint){return syncPoint.views.size===0;}function syncPointApplyOperation(syncPoint,operation,writesCache,optCompleteServerCache){var queryId=operation.source.queryId;if(queryId!==null){var view=syncPoint.views.get(queryId);assert(view!=null,'SyncTree gave us an op for an invalid query.');return viewApplyOperation(view,operation,writesCache,optCompleteServerCache);}else {var events=[];var _iterator5=_createForOfIteratorHelper(syncPoint.views.values()),_step4;try{for(_iterator5.s();!(_step4=_iterator5.n()).done;){var _view=_step4.value;events=events.concat(viewApplyOperation(_view,operation,writesCache,optCompleteServerCache));}}catch(err){_iterator5.e(err);}finally{_iterator5.f();}return events;}}/**
 * Get a view for the specified query.
 *
 * @param query - The query to return a view for
 * @param writesCache
 * @param serverCache
 * @param serverCacheComplete
 * @returns Events to raise.
 */function syncPointGetView(syncPoint,query,writesCache,serverCache,serverCacheComplete){var queryId=query._queryIdentifier;var view=syncPoint.views.get(queryId);if(!view){// TODO: make writesCache take flag for complete server node
var eventCache=writeTreeRefCalcCompleteEventCache(writesCache,serverCacheComplete?serverCache:null);var eventCacheComplete=false;if(eventCache){eventCacheComplete=true;}else if(serverCache instanceof ChildrenNode){eventCache=writeTreeRefCalcCompleteEventChildren(writesCache,serverCache);eventCacheComplete=false;}else {eventCache=ChildrenNode.EMPTY_NODE;eventCacheComplete=false;}var viewCache=newViewCache(new CacheNode(eventCache,eventCacheComplete,false),new CacheNode(serverCache,serverCacheComplete,false));return new View(query,viewCache);}return view;}/**
 * Add an event callback for the specified query.
 *
 * @param query
 * @param eventRegistration
 * @param writesCache
 * @param serverCache - Complete server cache, if we have it.
 * @param serverCacheComplete
 * @returns Events to raise.
 */function syncPointAddEventRegistration(syncPoint,query,eventRegistration,writesCache,serverCache,serverCacheComplete){var view=syncPointGetView(syncPoint,query,writesCache,serverCache,serverCacheComplete);if(!syncPoint.views.has(query._queryIdentifier)){syncPoint.views.set(query._queryIdentifier,view);}// This is guaranteed to exist now, we just created anything that was missing
viewAddEventRegistration(view,eventRegistration);return viewGetInitialEvents(view,eventRegistration);}/**
 * Remove event callback(s).  Return cancelEvents if a cancelError is specified.
 *
 * If query is the default query, we'll check all views for the specified eventRegistration.
 * If eventRegistration is null, we'll remove all callbacks for the specified view(s).
 *
 * @param eventRegistration - If null, remove all callbacks.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns removed queries and any cancel events
 */function syncPointRemoveEventRegistration(syncPoint,query,eventRegistration,cancelError){var queryId=query._queryIdentifier;var removed=[];var cancelEvents=[];var hadCompleteView=syncPointHasCompleteView(syncPoint);if(queryId==='default'){// When you do ref.off(...), we search all views for the registration to remove.
var _iterator6=_createForOfIteratorHelper(syncPoint.views.entries()),_step5;try{for(_iterator6.s();!(_step5=_iterator6.n()).done;){var _step5$value=_slicedToArray(_step5.value,2),viewQueryId=_step5$value[0],view=_step5$value[1];cancelEvents=cancelEvents.concat(viewRemoveEventRegistration(view,eventRegistration,cancelError));if(viewIsEmpty(view)){syncPoint.views["delete"](viewQueryId);// We'll deal with complete views later.
if(!view.query._queryParams.loadsAllData()){removed.push(view.query);}}}}catch(err){_iterator6.e(err);}finally{_iterator6.f();}}else {// remove the callback from the specific view.
var _view2=syncPoint.views.get(queryId);if(_view2){cancelEvents=cancelEvents.concat(viewRemoveEventRegistration(_view2,eventRegistration,cancelError));if(viewIsEmpty(_view2)){syncPoint.views["delete"](queryId);// We'll deal with complete views later.
if(!_view2.query._queryParams.loadsAllData()){removed.push(_view2.query);}}}}if(hadCompleteView&&!syncPointHasCompleteView(syncPoint)){// We removed our last complete view.
removed.push(new(syncPointGetReferenceConstructor())(query._repo,query._path));}return {removed:removed,events:cancelEvents};}function syncPointGetQueryViews(syncPoint){var result=[];var _iterator7=_createForOfIteratorHelper(syncPoint.views.values()),_step6;try{for(_iterator7.s();!(_step6=_iterator7.n()).done;){var view=_step6.value;if(!view.query._queryParams.loadsAllData()){result.push(view);}}}catch(err){_iterator7.e(err);}finally{_iterator7.f();}return result;}/**
 * @param path - The path to the desired complete snapshot
 * @returns A complete cache, if it exists
 */function syncPointGetCompleteServerCache(syncPoint,path){var serverCache=null;var _iterator8=_createForOfIteratorHelper(syncPoint.views.values()),_step7;try{for(_iterator8.s();!(_step7=_iterator8.n()).done;){var view=_step7.value;serverCache=serverCache||viewGetCompleteServerCache(view,path);}}catch(err){_iterator8.e(err);}finally{_iterator8.f();}return serverCache;}function syncPointViewForQuery(syncPoint,query){var params=query._queryParams;if(params.loadsAllData()){return syncPointGetCompleteView(syncPoint);}else {var queryId=query._queryIdentifier;return syncPoint.views.get(queryId);}}function syncPointViewExistsForQuery(syncPoint,query){return syncPointViewForQuery(syncPoint,query)!=null;}function syncPointHasCompleteView(syncPoint){return syncPointGetCompleteView(syncPoint)!=null;}function syncPointGetCompleteView(syncPoint){var _iterator9=_createForOfIteratorHelper(syncPoint.views.values()),_step8;try{for(_iterator9.s();!(_step8=_iterator9.n()).done;){var view=_step8.value;if(view.query._queryParams.loadsAllData()){return view;}}}catch(err){_iterator9.e(err);}finally{_iterator9.f();}return null;}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var referenceConstructor;function syncTreeSetReferenceConstructor(val){assert(!referenceConstructor,'__referenceConstructor has already been defined');referenceConstructor=val;}function syncTreeGetReferenceConstructor(){assert(referenceConstructor,'Reference.ts has not been loaded');return referenceConstructor;}/**
 * Static tracker for next query tag.
 */var syncTreeNextQueryTag_=1;/**
 * SyncTree is the central class for managing event callback registration, data caching, views
 * (query processing), and event generation.  There are typically two SyncTree instances for
 * each Repo, one for the normal Firebase data, and one for the .info data.
 *
 * It has a number of responsibilities, including:
 *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
 *  - Applying and caching data changes for user set(), transaction(), and update() calls
 *    (applyUserOverwrite(), applyUserMerge()).
 *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
 *    applyServerMerge()).
 *  - Generating user-facing events for server and user changes (all of the apply* methods
 *    return the set of events that need to be raised as a result).
 *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
 *    to the correct set of paths and queries to satisfy the current set of user event
 *    callbacks (listens are started/stopped using the provided listenProvider).
 *
 * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
 * events are returned to the caller rather than raised synchronously.
 *
 */var SyncTree=/*#__PURE__*/_createClass(/**
     * @param listenProvider_ - Used by SyncTree to start / stop listening
     *   to server data.
     */function SyncTree(listenProvider_){_classCallCheck(this,SyncTree);this.listenProvider_=listenProvider_;/**
         * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
         */this.syncPointTree_=new ImmutableTree(null);/**
         * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
         */this.pendingWriteTree_=newWriteTree();this.tagToQueryMap=new Map();this.queryToTagMap=new Map();});/**
 * Apply the data changes for a user-generated set() or transaction() call.
 *
 * @returns Events to raise.
 */function syncTreeApplyUserOverwrite(syncTree,path,newData,writeId,visible){// Record pending write.
writeTreeAddOverwrite(syncTree.pendingWriteTree_,path,newData,writeId,visible);if(!visible){return [];}else {return syncTreeApplyOperationToSyncPoints_(syncTree,new Overwrite(newOperationSourceUser(),path,newData));}}/**
 * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
 *
 * @param revert - True if the given write failed and needs to be reverted
 * @returns Events to raise.
 */function syncTreeAckUserWrite(syncTree,writeId){var revert=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var write=writeTreeGetWrite(syncTree.pendingWriteTree_,writeId);var needToReevaluate=writeTreeRemoveWrite(syncTree.pendingWriteTree_,writeId);if(!needToReevaluate){return [];}else {var affectedTree=new ImmutableTree(null);if(write.snap!=null){// overwrite
affectedTree=affectedTree.set(newEmptyPath(),true);}else {each(write.children,function(pathString){affectedTree=affectedTree.set(new Path(pathString),true);});}return syncTreeApplyOperationToSyncPoints_(syncTree,new AckUserWrite(write.path,affectedTree,revert));}}/**
 * Apply new server data for the specified path..
 *
 * @returns Events to raise.
 */function syncTreeApplyServerOverwrite(syncTree,path,newData){return syncTreeApplyOperationToSyncPoints_(syncTree,new Overwrite(newOperationSourceServer(),path,newData));}/**
 * Apply new server data to be merged in at the specified path.
 *
 * @returns Events to raise.
 */function syncTreeApplyServerMerge(syncTree,path,changedChildren){var changeTree=ImmutableTree.fromObject(changedChildren);return syncTreeApplyOperationToSyncPoints_(syncTree,new Merge(newOperationSourceServer(),path,changeTree));}/**
 * Apply a listen complete for a query
 *
 * @returns Events to raise.
 */function syncTreeApplyListenComplete(syncTree,path){return syncTreeApplyOperationToSyncPoints_(syncTree,new ListenComplete(newOperationSourceServer(),path));}/**
 * Apply a listen complete for a tagged query
 *
 * @returns Events to raise.
 */function syncTreeApplyTaggedListenComplete(syncTree,path,tag){var queryKey=syncTreeQueryKeyForTag_(syncTree,tag);if(queryKey){var r=syncTreeParseQueryKey_(queryKey);var queryPath=r.path,queryId=r.queryId;var relativePath=newRelativePath(queryPath,path);var op=new ListenComplete(newOperationSourceServerTaggedQuery(queryId),relativePath);return syncTreeApplyTaggedOperation_(syncTree,queryPath,op);}else {// We've already removed the query. No big deal, ignore the update
return [];}}/**
 * Remove event callback(s).
 *
 * If query is the default query, we'll check all queries for the specified eventRegistration.
 * If eventRegistration is null, we'll remove all callbacks for the specified query/queries.
 *
 * @param eventRegistration - If null, all callbacks are removed.
 * @param cancelError - If a cancelError is provided, appropriate cancel events will be returned.
 * @returns Cancel events, if cancelError was provided.
 */function syncTreeRemoveEventRegistration(syncTree,query,eventRegistration,cancelError){// Find the syncPoint first. Then deal with whether or not it has matching listeners
var path=query._path;var maybeSyncPoint=syncTree.syncPointTree_.get(path);var cancelEvents=[];// A removal on a default query affects all queries at that location. A removal on an indexed query, even one without
// other query constraints, does *not* affect all queries at that location. So this check must be for 'default', and
// not loadsAllData().
if(maybeSyncPoint&&(query._queryIdentifier==='default'||syncPointViewExistsForQuery(maybeSyncPoint,query))){var removedAndEvents=syncPointRemoveEventRegistration(maybeSyncPoint,query,eventRegistration,cancelError);if(syncPointIsEmpty(maybeSyncPoint)){syncTree.syncPointTree_=syncTree.syncPointTree_.remove(path);}var removed=removedAndEvents.removed;cancelEvents=removedAndEvents.events;// We may have just removed one of many listeners and can short-circuit this whole process
// We may also not have removed a default listener, in which case all of the descendant listeners should already be
// properly set up.
//
// Since indexed queries can shadow if they don't have other query constraints, check for loadsAllData(), instead of
// queryId === 'default'
var removingDefault=-1!==removed.findIndex(function(query){return query._queryParams.loadsAllData();});var covered=syncTree.syncPointTree_.findOnPath(path,function(relativePath,parentSyncPoint){return syncPointHasCompleteView(parentSyncPoint);});if(removingDefault&&!covered){var subtree=syncTree.syncPointTree_.subtree(path);// There are potentially child listeners. Determine what if any listens we need to send before executing the
// removal
if(!subtree.isEmpty()){// We need to fold over our subtree and collect the listeners to send
var newViews=syncTreeCollectDistinctViewsForSubTree_(subtree);// Ok, we've collected all the listens we need. Set them up.
for(var i=0;i<newViews.length;++i){var view=newViews[i],newQuery=view.query;var listener=syncTreeCreateListenerForView_(syncTree,view);syncTree.listenProvider_.startListening(syncTreeQueryForListening_(newQuery),syncTreeTagForQuery_(syncTree,newQuery),listener.hashFn,listener.onComplete);}}}// If we removed anything and we're not covered by a higher up listen, we need to stop listening on this query
// The above block has us covered in terms of making sure we're set up on listens lower in the tree.
// Also, note that if we have a cancelError, it's already been removed at the provider level.
if(!covered&&removed.length>0&&!cancelError){// If we removed a default, then we weren't listening on any of the other queries here. Just cancel the one
// default. Otherwise, we need to iterate through and cancel each individual query
if(removingDefault){// We don't tag default listeners
var defaultTag=null;syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(query),defaultTag);}else {removed.forEach(function(queryToRemove){var tagToRemove=syncTree.queryToTagMap.get(syncTreeMakeQueryKey_(queryToRemove));syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToRemove),tagToRemove);});}}// Now, clear all of the tags we're tracking for the removed listens
syncTreeRemoveTags_(syncTree,removed);}return cancelEvents;}/**
 * Apply new server data for the specified tagged query.
 *
 * @returns Events to raise.
 */function syncTreeApplyTaggedQueryOverwrite(syncTree,path,snap,tag){var queryKey=syncTreeQueryKeyForTag_(syncTree,tag);if(queryKey!=null){var r=syncTreeParseQueryKey_(queryKey);var queryPath=r.path,queryId=r.queryId;var relativePath=newRelativePath(queryPath,path);var op=new Overwrite(newOperationSourceServerTaggedQuery(queryId),relativePath,snap);return syncTreeApplyTaggedOperation_(syncTree,queryPath,op);}else {// Query must have been removed already
return [];}}/**
 * Apply server data to be merged in for the specified tagged query.
 *
 * @returns Events to raise.
 */function syncTreeApplyTaggedQueryMerge(syncTree,path,changedChildren,tag){var queryKey=syncTreeQueryKeyForTag_(syncTree,tag);if(queryKey){var r=syncTreeParseQueryKey_(queryKey);var queryPath=r.path,queryId=r.queryId;var relativePath=newRelativePath(queryPath,path);var changeTree=ImmutableTree.fromObject(changedChildren);var op=new Merge(newOperationSourceServerTaggedQuery(queryId),relativePath,changeTree);return syncTreeApplyTaggedOperation_(syncTree,queryPath,op);}else {// We've already removed the query. No big deal, ignore the update
return [];}}/**
 * Add an event callback for the specified query.
 *
 * @returns Events to raise.
 */function syncTreeAddEventRegistration(syncTree,query,eventRegistration){var path=query._path;var serverCache=null;var foundAncestorDefaultView=false;// Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
// Consider optimizing this once there's a better understanding of what actual behavior will be.
syncTree.syncPointTree_.foreachOnPath(path,function(pathToSyncPoint,sp){var relativePath=newRelativePath(pathToSyncPoint,path);serverCache=serverCache||syncPointGetCompleteServerCache(sp,relativePath);foundAncestorDefaultView=foundAncestorDefaultView||syncPointHasCompleteView(sp);});var syncPoint=syncTree.syncPointTree_.get(path);if(!syncPoint){syncPoint=new SyncPoint();syncTree.syncPointTree_=syncTree.syncPointTree_.set(path,syncPoint);}else {foundAncestorDefaultView=foundAncestorDefaultView||syncPointHasCompleteView(syncPoint);serverCache=serverCache||syncPointGetCompleteServerCache(syncPoint,newEmptyPath());}var serverCacheComplete;if(serverCache!=null){serverCacheComplete=true;}else {serverCacheComplete=false;serverCache=ChildrenNode.EMPTY_NODE;var subtree=syncTree.syncPointTree_.subtree(path);subtree.foreachChild(function(childName,childSyncPoint){var completeCache=syncPointGetCompleteServerCache(childSyncPoint,newEmptyPath());if(completeCache){serverCache=serverCache.updateImmediateChild(childName,completeCache);}});}var viewAlreadyExists=syncPointViewExistsForQuery(syncPoint,query);if(!viewAlreadyExists&&!query._queryParams.loadsAllData()){// We need to track a tag for this query
var queryKey=syncTreeMakeQueryKey_(query);assert(!syncTree.queryToTagMap.has(queryKey),'View does not exist, but we have a tag');var tag=syncTreeGetNextQueryTag_();syncTree.queryToTagMap.set(queryKey,tag);syncTree.tagToQueryMap.set(tag,queryKey);}var writesCache=writeTreeChildWrites(syncTree.pendingWriteTree_,path);var events=syncPointAddEventRegistration(syncPoint,query,eventRegistration,writesCache,serverCache,serverCacheComplete);if(!viewAlreadyExists&&!foundAncestorDefaultView){var view=syncPointViewForQuery(syncPoint,query);events=events.concat(syncTreeSetupListener_(syncTree,query,view));}return events;}/**
 * Returns a complete cache, if we have one, of the data at a particular path. If the location does not have a
 * listener above it, we will get a false "null". This shouldn't be a problem because transactions will always
 * have a listener above, and atomic operations would correctly show a jitter of <increment value> ->
 *     <incremented total> as the write is applied locally and then acknowledged at the server.
 *
 * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
 *
 * @param path - The path to the data we want
 * @param writeIdsToExclude - A specific set to be excluded
 */function syncTreeCalcCompleteEventCache(syncTree,path,writeIdsToExclude){var includeHiddenSets=true;var writeTree=syncTree.pendingWriteTree_;var serverCache=syncTree.syncPointTree_.findOnPath(path,function(pathSoFar,syncPoint){var relativePath=newRelativePath(pathSoFar,path);var serverCache=syncPointGetCompleteServerCache(syncPoint,relativePath);if(serverCache){return serverCache;}});return writeTreeCalcCompleteEventCache(writeTree,path,serverCache,writeIdsToExclude,includeHiddenSets);}/**
 * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
 *
 * NOTES:
 * - Descendant SyncPoints will be visited first (since we raise events depth-first).
 *
 * - We call applyOperation() on each SyncPoint passing three things:
 *   1. A version of the Operation that has been made relative to the SyncPoint location.
 *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
 *   3. A snapshot Node with cached server data, if we have it.
 *
 * - We concatenate all of the events returned by each SyncPoint and return the result.
 */function syncTreeApplyOperationToSyncPoints_(syncTree,operation){return syncTreeApplyOperationHelper_(operation,syncTree.syncPointTree_,/*serverCache=*/null,writeTreeChildWrites(syncTree.pendingWriteTree_,newEmptyPath()));}/**
 * Recursive helper for applyOperationToSyncPoints_
 */function syncTreeApplyOperationHelper_(operation,syncPointTree,serverCache,writesCache){if(pathIsEmpty(operation.path)){return syncTreeApplyOperationDescendantsHelper_(operation,syncPointTree,serverCache,writesCache);}else {var syncPoint=syncPointTree.get(newEmptyPath());// If we don't have cached server data, see if we can get it from this SyncPoint.
if(serverCache==null&&syncPoint!=null){serverCache=syncPointGetCompleteServerCache(syncPoint,newEmptyPath());}var events=[];var childName=pathGetFront(operation.path);var childOperation=operation.operationForChild(childName);var childTree=syncPointTree.children.get(childName);if(childTree&&childOperation){var childServerCache=serverCache?serverCache.getImmediateChild(childName):null;var childWritesCache=writeTreeRefChild(writesCache,childName);events=events.concat(syncTreeApplyOperationHelper_(childOperation,childTree,childServerCache,childWritesCache));}if(syncPoint){events=events.concat(syncPointApplyOperation(syncPoint,operation,writesCache,serverCache));}return events;}}/**
 * Recursive helper for applyOperationToSyncPoints_
 */function syncTreeApplyOperationDescendantsHelper_(operation,syncPointTree,serverCache,writesCache){var syncPoint=syncPointTree.get(newEmptyPath());// If we don't have cached server data, see if we can get it from this SyncPoint.
if(serverCache==null&&syncPoint!=null){serverCache=syncPointGetCompleteServerCache(syncPoint,newEmptyPath());}var events=[];syncPointTree.children.inorderTraversal(function(childName,childTree){var childServerCache=serverCache?serverCache.getImmediateChild(childName):null;var childWritesCache=writeTreeRefChild(writesCache,childName);var childOperation=operation.operationForChild(childName);if(childOperation){events=events.concat(syncTreeApplyOperationDescendantsHelper_(childOperation,childTree,childServerCache,childWritesCache));}});if(syncPoint){events=events.concat(syncPointApplyOperation(syncPoint,operation,writesCache,serverCache));}return events;}function syncTreeCreateListenerForView_(syncTree,view){var query=view.query;var tag=syncTreeTagForQuery_(syncTree,query);return {hashFn:function hashFn(){var cache=viewGetServerCache(view)||ChildrenNode.EMPTY_NODE;return cache.hash();},onComplete:function onComplete(status){if(status==='ok'){if(tag){return syncTreeApplyTaggedListenComplete(syncTree,query._path,tag);}else {return syncTreeApplyListenComplete(syncTree,query._path);}}else {// If a listen failed, kill all of the listeners here, not just the one that triggered the error.
// Note that this may need to be scoped to just this listener if we change permissions on filtered children
var _error2=errorForServerCode(status,query);return syncTreeRemoveEventRegistration(syncTree,query,/*eventRegistration*/null,_error2);}}};}/**
 * Return the tag associated with the given query.
 */function syncTreeTagForQuery_(syncTree,query){var queryKey=syncTreeMakeQueryKey_(query);return syncTree.queryToTagMap.get(queryKey);}/**
 * Given a query, computes a "queryKey" suitable for use in our queryToTagMap_.
 */function syncTreeMakeQueryKey_(query){return query._path.toString()+'$'+query._queryIdentifier;}/**
 * Return the query associated with the given tag, if we have one
 */function syncTreeQueryKeyForTag_(syncTree,tag){return syncTree.tagToQueryMap.get(tag);}/**
 * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
 */function syncTreeParseQueryKey_(queryKey){var splitIndex=queryKey.indexOf('$');assert(splitIndex!==-1&&splitIndex<queryKey.length-1,'Bad queryKey.');return {queryId:queryKey.substr(splitIndex+1),path:new Path(queryKey.substr(0,splitIndex))};}/**
 * A helper method to apply tagged operations
 */function syncTreeApplyTaggedOperation_(syncTree,queryPath,operation){var syncPoint=syncTree.syncPointTree_.get(queryPath);assert(syncPoint,"Missing sync point for query tag that we're tracking");var writesCache=writeTreeChildWrites(syncTree.pendingWriteTree_,queryPath);return syncPointApplyOperation(syncPoint,operation,writesCache,null);}/**
 * This collapses multiple unfiltered views into a single view, since we only need a single
 * listener for them.
 */function syncTreeCollectDistinctViewsForSubTree_(subtree){return subtree.fold(function(relativePath,maybeChildSyncPoint,childMap){if(maybeChildSyncPoint&&syncPointHasCompleteView(maybeChildSyncPoint)){var completeView=syncPointGetCompleteView(maybeChildSyncPoint);return [completeView];}else {// No complete view here, flatten any deeper listens into an array
var views=[];if(maybeChildSyncPoint){views=syncPointGetQueryViews(maybeChildSyncPoint);}each(childMap,function(_key,childViews){views=views.concat(childViews);});return views;}});}/**
 * Normalizes a query to a query we send the server for listening
 *
 * @returns The normalized query
 */function syncTreeQueryForListening_(query){if(query._queryParams.loadsAllData()&&!query._queryParams.isDefault()){// We treat queries that load all data as default queries
// Cast is necessary because ref() technically returns Firebase which is actually fb.api.Firebase which inherits
// from Query
return new(syncTreeGetReferenceConstructor())(query._repo,query._path);}else {return query;}}function syncTreeRemoveTags_(syncTree,queries){for(var j=0;j<queries.length;++j){var removedQuery=queries[j];if(!removedQuery._queryParams.loadsAllData()){// We should have a tag for this
var removedQueryKey=syncTreeMakeQueryKey_(removedQuery);var removedQueryTag=syncTree.queryToTagMap.get(removedQueryKey);syncTree.queryToTagMap["delete"](removedQueryKey);syncTree.tagToQueryMap["delete"](removedQueryTag);}}}/**
 * Static accessor for query tags.
 */function syncTreeGetNextQueryTag_(){return syncTreeNextQueryTag_++;}/**
 * For a given new listen, manage the de-duplication of outstanding subscriptions.
 *
 * @returns This method can return events to support synchronous data sources
 */function syncTreeSetupListener_(syncTree,query,view){var path=query._path;var tag=syncTreeTagForQuery_(syncTree,query);var listener=syncTreeCreateListenerForView_(syncTree,view);var events=syncTree.listenProvider_.startListening(syncTreeQueryForListening_(query),tag,listener.hashFn,listener.onComplete);var subtree=syncTree.syncPointTree_.subtree(path);// The root of this subtree has our query. We're here because we definitely need to send a listen for that, but we
// may need to shadow other listens as well.
if(tag){assert(!syncPointHasCompleteView(subtree.value),"If we're adding a query, it shouldn't be shadowed");}else {// Shadow everything at or below this location, this is a default listener.
var queriesToStop=subtree.fold(function(relativePath,maybeChildSyncPoint,childMap){if(!pathIsEmpty(relativePath)&&maybeChildSyncPoint&&syncPointHasCompleteView(maybeChildSyncPoint)){return [syncPointGetCompleteView(maybeChildSyncPoint).query];}else {// No default listener here, flatten any deeper queries into an array
var queries=[];if(maybeChildSyncPoint){queries=queries.concat(syncPointGetQueryViews(maybeChildSyncPoint).map(function(view){return view.query;}));}each(childMap,function(_key,childQueries){queries=queries.concat(childQueries);});return queries;}});for(var i=0;i<queriesToStop.length;++i){var queryToStop=queriesToStop[i];syncTree.listenProvider_.stopListening(syncTreeQueryForListening_(queryToStop),syncTreeTagForQuery_(syncTree,queryToStop));}}return events;}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ExistingValueProvider=/*#__PURE__*/function(){function ExistingValueProvider(node_){_classCallCheck(this,ExistingValueProvider);this.node_=node_;}_createClass(ExistingValueProvider,[{key:"getImmediateChild",value:function getImmediateChild(childName){var child=this.node_.getImmediateChild(childName);return new ExistingValueProvider(child);}},{key:"node",value:function node(){return this.node_;}}]);return ExistingValueProvider;}();var DeferredValueProvider=/*#__PURE__*/function(){function DeferredValueProvider(syncTree,path){_classCallCheck(this,DeferredValueProvider);this.syncTree_=syncTree;this.path_=path;}_createClass(DeferredValueProvider,[{key:"getImmediateChild",value:function getImmediateChild(childName){var childPath=pathChild(this.path_,childName);return new DeferredValueProvider(this.syncTree_,childPath);}},{key:"node",value:function node(){return syncTreeCalcCompleteEventCache(this.syncTree_,this.path_);}}]);return DeferredValueProvider;}();/**
 * Generate placeholders for deferred values.
 */var generateWithValues=function generateWithValues(values){values=values||{};values['timestamp']=values['timestamp']||new Date().getTime();return values;};/**
 * Value to use when firing local events. When writing server values, fire
 * local events with an approximate value, otherwise return value as-is.
 */var resolveDeferredLeafValue=function resolveDeferredLeafValue(value,existingVal,serverValues){if(!value||_typeof(value)!=='object'){return value;}assert('.sv'in value,'Unexpected leaf node or priority contents');if(typeof value['.sv']==='string'){return resolveScalarDeferredValue(value['.sv'],existingVal,serverValues);}else if(_typeof(value['.sv'])==='object'){return resolveComplexDeferredValue(value['.sv'],existingVal);}else {assert(false,'Unexpected server value: '+JSON.stringify(value,null,2));}};var resolveScalarDeferredValue=function resolveScalarDeferredValue(op,existing,serverValues){switch(op){case'timestamp':return serverValues['timestamp'];default:assert(false,'Unexpected server value: '+op);}};var resolveComplexDeferredValue=function resolveComplexDeferredValue(op,existing,unused){if(!op.hasOwnProperty('increment')){assert(false,'Unexpected server value: '+JSON.stringify(op,null,2));}var delta=op['increment'];if(typeof delta!=='number'){assert(false,'Unexpected increment value: '+delta);}var existingNode=existing.node();assert(existingNode!==null&&typeof existingNode!=='undefined','Expected ChildrenNode.EMPTY_NODE for nulls');// Incrementing a non-number sets the value to the incremented amount
if(!existingNode.isLeafNode()){return delta;}var leaf=existingNode;var existingVal=leaf.getValue();if(typeof existingVal!=='number'){return delta;}// No need to do over/underflow arithmetic here because JS only handles floats under the covers
return existingVal+delta;};/**
 * Recursively replace all deferred values and priorities in the tree with the
 * specified generated replacement values.
 * @param path - path to which write is relative
 * @param node - new data written at path
 * @param syncTree - current data
 */var resolveDeferredValueTree=function resolveDeferredValueTree(path,node,syncTree,serverValues){return resolveDeferredValue(node,new DeferredValueProvider(syncTree,path),serverValues);};/**
 * Recursively replace all deferred values and priorities in the node with the
 * specified generated replacement values.  If there are no server values in the node,
 * it'll be returned as-is.
 */var resolveDeferredValueSnapshot=function resolveDeferredValueSnapshot(node,existing,serverValues){return resolveDeferredValue(node,new ExistingValueProvider(existing),serverValues);};function resolveDeferredValue(node,existingVal,serverValues){var rawPri=node.getPriority().val();var priority=resolveDeferredLeafValue(rawPri,existingVal.getImmediateChild('.priority'),serverValues);var newNode;if(node.isLeafNode()){var leafNode=node;var value=resolveDeferredLeafValue(leafNode.getValue(),existingVal,serverValues);if(value!==leafNode.getValue()||priority!==leafNode.getPriority().val()){return new LeafNode(value,nodeFromJSON(priority));}else {return node;}}else {var childrenNode=node;newNode=childrenNode;if(priority!==childrenNode.getPriority().val()){newNode=newNode.updatePriority(new LeafNode(priority));}childrenNode.forEachChild(PRIORITY_INDEX,function(childName,childNode){var newChildNode=resolveDeferredValue(childNode,existingVal.getImmediateChild(childName),serverValues);if(newChildNode!==childNode){newNode=newNode.updateImmediateChild(childName,newChildNode);}});return newNode;}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A light-weight tree, traversable by path.  Nodes can have both values and children.
 * Nodes are not enumerated (by forEachChild) unless they have a value or non-empty
 * children.
 */var Tree=/*#__PURE__*/_createClass(/**
     * @param name - Optional name of the node.
     * @param parent - Optional parent node.
     * @param node - Optional node to wrap.
     */function Tree(){var name=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var parent=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var node=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{children:{},childCount:0};_classCallCheck(this,Tree);this.name=name;this.parent=parent;this.node=node;});/**
 * Returns a sub-Tree for the given path.
 *
 * @param pathObj - Path to look up.
 * @returns Tree for path.
 */function treeSubTree(tree,pathObj){// TODO: Require pathObj to be Path?
var path=pathObj instanceof Path?pathObj:new Path(pathObj);var child=tree,next=pathGetFront(path);while(next!==null){var childNode=safeGet(child.node.children,next)||{children:{},childCount:0};child=new Tree(next,child,childNode);path=pathPopFront(path);next=pathGetFront(path);}return child;}/**
 * Returns the data associated with this tree node.
 *
 * @returns The data or null if no data exists.
 */function treeGetValue(tree){return tree.node.value;}/**
 * Sets data to this tree node.
 *
 * @param value - Value to set.
 */function treeSetValue(tree,value){tree.node.value=value;treeUpdateParents(tree);}/**
 * @returns Whether the tree has any children.
 */function treeHasChildren(tree){return tree.node.childCount>0;}/**
 * @returns Whethe rthe tree is empty (no value or children).
 */function treeIsEmpty(tree){return treeGetValue(tree)===undefined&&!treeHasChildren(tree);}/**
 * Calls action for each child of this tree node.
 *
 * @param action - Action to be called for each child.
 */function treeForEachChild(tree,action){each(tree.node.children,function(child,childTree){action(new Tree(child,tree,childTree));});}/**
 * Does a depth-first traversal of this node's descendants, calling action for each one.
 *
 * @param action - Action to be called for each child.
 * @param includeSelf - Whether to call action on this node as well. Defaults to
 *   false.
 * @param childrenFirst - Whether to call action on children before calling it on
 *   parent.
 */function treeForEachDescendant(tree,action,includeSelf,childrenFirst){if(includeSelf&&!childrenFirst){action(tree);}treeForEachChild(tree,function(child){treeForEachDescendant(child,action,true,childrenFirst);});if(includeSelf&&childrenFirst){action(tree);}}/**
 * Calls action on each ancestor node.
 *
 * @param action - Action to be called on each parent; return
 *   true to abort.
 * @param includeSelf - Whether to call action on this node as well.
 * @returns true if the action callback returned true.
 */function treeForEachAncestor(tree,action,includeSelf){var node=includeSelf?tree:tree.parent;while(node!==null){if(action(node)){return true;}node=node.parent;}return false;}/**
 * @returns The path of this tree node, as a Path.
 */function treeGetPath(tree){return new Path(tree.parent===null?tree.name:treeGetPath(tree.parent)+'/'+tree.name);}/**
 * Adds or removes this child from its parent based on whether it's empty or not.
 */function treeUpdateParents(tree){if(tree.parent!==null){treeUpdateChild(tree.parent,tree.name,tree);}}/**
 * Adds or removes the passed child to this tree node, depending on whether it's empty.
 *
 * @param childName - The name of the child to update.
 * @param child - The child to update.
 */function treeUpdateChild(tree,childName,child){var childEmpty=treeIsEmpty(child);var childExists=contains(tree.node.children,childName);if(childEmpty&&childExists){delete tree.node.children[childName];tree.node.childCount--;treeUpdateParents(tree);}else if(!childEmpty&&!childExists){tree.node.children[childName]=child.node;tree.node.childCount++;treeUpdateParents(tree);}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * True for invalid Firebase keys
 */var INVALID_KEY_REGEX_=/[\[\].#$\/\u0000-\u001F\u007F]/;/**
 * True for invalid Firebase paths.
 * Allows '/' in paths.
 */var INVALID_PATH_REGEX_=/[\[\].#$\u0000-\u001F\u007F]/;/**
 * Maximum number of characters to allow in leaf value
 */var MAX_LEAF_SIZE_=10*1024*1024;var isValidKey=function isValidKey(key){return typeof key==='string'&&key.length!==0&&!INVALID_KEY_REGEX_.test(key);};var isValidPathString=function isValidPathString(pathString){return typeof pathString==='string'&&pathString.length!==0&&!INVALID_PATH_REGEX_.test(pathString);};var isValidRootPathString=function isValidRootPathString(pathString){if(pathString){// Allow '/.info/' at the beginning.
pathString=pathString.replace(/^\/*\.info(\/|$)/,'/');}return isValidPathString(pathString);};/**
 * Pre-validate a datum passed as an argument to Firebase function.
 */var validateFirebaseDataArg=function validateFirebaseDataArg(fnName,value,path,optional){if(optional&&value===undefined){return;}validateFirebaseData(errorPrefix(fnName,'value'),value,path);};/**
 * Validate a data object client-side before sending to server.
 */var validateFirebaseData=function validateFirebaseData(errorPrefix,data,path_){var path=path_ instanceof Path?new ValidationPath(path_,errorPrefix):path_;if(data===undefined){throw new Error(errorPrefix+'contains undefined '+validationPathToErrorString(path));}if(typeof data==='function'){throw new Error(errorPrefix+'contains a function '+validationPathToErrorString(path)+' with contents = '+data.toString());}if(isInvalidJSONNumber(data)){throw new Error(errorPrefix+'contains '+data.toString()+' '+validationPathToErrorString(path));}// Check max leaf size, but try to avoid the utf8 conversion if we can.
if(typeof data==='string'&&data.length>MAX_LEAF_SIZE_/3&&stringLength(data)>MAX_LEAF_SIZE_){throw new Error(errorPrefix+'contains a string greater than '+MAX_LEAF_SIZE_+' utf8 bytes '+validationPathToErrorString(path)+" ('"+data.substring(0,50)+"...')");}// TODO = Perf = Consider combining the recursive validation of keys into NodeFromJSON
// to save extra walking of large objects.
if(data&&_typeof(data)==='object'){var hasDotValue=false;var hasActualChild=false;each(data,function(key,value){if(key==='.value'){hasDotValue=true;}else if(key!=='.priority'&&key!=='.sv'){hasActualChild=true;if(!isValidKey(key)){throw new Error(errorPrefix+' contains an invalid key ('+key+') '+validationPathToErrorString(path)+'.  Keys must be non-empty strings '+'and can\'t contain ".", "#", "$", "/", "[", or "]"');}}validationPathPush(path,key);validateFirebaseData(errorPrefix,value,path);validationPathPop(path);});if(hasDotValue&&hasActualChild){throw new Error(errorPrefix+' contains ".value" child '+validationPathToErrorString(path)+' in addition to actual children.');}}};/**
 * @internal
 */var validatePathString=function validatePathString(fnName,argumentName,pathString,optional){if(optional&&pathString===undefined){return;}if(!isValidPathString(pathString)){throw new Error(errorPrefix(fnName,argumentName)+'was an invalid path = "'+pathString+'". Paths must be non-empty strings and '+'can\'t contain ".", "#", "$", "[", or "]"');}};var validateRootPathString=function validateRootPathString(fnName,argumentName,pathString,optional){if(pathString){// Allow '/.info/' at the beginning.
pathString=pathString.replace(/^\/*\.info(\/|$)/,'/');}validatePathString(fnName,argumentName,pathString,optional);};/**
 * @internal
 */var validateWritablePath=function validateWritablePath(fnName,path){if(pathGetFront(path)==='.info'){throw new Error(fnName+" failed = Can't modify data under /.info/");}};var validateUrl=function validateUrl(fnName,parsedUrl){// TODO = Validate server better.
var pathString=parsedUrl.path.toString();if(!(typeof parsedUrl.repoInfo.host==='string')||parsedUrl.repoInfo.host.length===0||!isValidKey(parsedUrl.repoInfo.namespace)&&parsedUrl.repoInfo.host.split(':')[0]!=='localhost'||pathString.length!==0&&!isValidRootPathString(pathString)){throw new Error(errorPrefix(fnName,'url')+'must be a valid firebase URL and '+'the path can\'t contain ".", "#", "$", "[", or "]".');}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * The event queue serves a few purposes:
 * 1. It ensures we maintain event order in the face of event callbacks doing operations that result in more
 *    events being queued.
 * 2. raiseQueuedEvents() handles being called reentrantly nicely.  That is, if in the course of raising events,
 *    raiseQueuedEvents() is called again, the "inner" call will pick up raising events where the "outer" call
 *    left off, ensuring that the events are still raised synchronously and in order.
 * 3. You can use raiseEventsAtPath and raiseEventsForChangedPath to ensure only relevant previously-queued
 *    events are raised synchronously.
 *
 * NOTE: This can all go away if/when we move to async events.
 *
 */var EventQueue=/*#__PURE__*/_createClass(function EventQueue(){_classCallCheck(this,EventQueue);this.eventLists_=[];/**
         * Tracks recursion depth of raiseQueuedEvents_, for debugging purposes.
         */this.recursionDepth_=0;});/**
 * @param eventDataList - The new events to queue.
 */function eventQueueQueueEvents(eventQueue,eventDataList){// We group events by path, storing them in a single EventList, to make it easier to skip over them quickly.
var currList=null;for(var i=0;i<eventDataList.length;i++){var data=eventDataList[i];var path=data.getPath();if(currList!==null&&!pathEquals(path,currList.path)){eventQueue.eventLists_.push(currList);currList=null;}if(currList===null){currList={events:[],path:path};}currList.events.push(data);}if(currList){eventQueue.eventLists_.push(currList);}}/**
 * Queues the specified events and synchronously raises all events (including previously queued ones)
 * for the specified path.
 *
 * It is assumed that the new events are all for the specified path.
 *
 * @param path - The path to raise events for.
 * @param eventDataList - The new events to raise.
 */function eventQueueRaiseEventsAtPath(eventQueue,path,eventDataList){eventQueueQueueEvents(eventQueue,eventDataList);eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue,function(eventPath){return pathEquals(eventPath,path);});}/**
 * Queues the specified events and synchronously raises all events (including previously queued ones) for
 * locations related to the specified change path (i.e. all ancestors and descendants).
 *
 * It is assumed that the new events are all related (ancestor or descendant) to the specified path.
 *
 * @param changedPath - The path to raise events for.
 * @param eventDataList - The events to raise
 */function eventQueueRaiseEventsForChangedPath(eventQueue,changedPath,eventDataList){eventQueueQueueEvents(eventQueue,eventDataList);eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue,function(eventPath){return pathContains(eventPath,changedPath)||pathContains(changedPath,eventPath);});}function eventQueueRaiseQueuedEventsMatchingPredicate(eventQueue,predicate){eventQueue.recursionDepth_++;var sentAll=true;for(var i=0;i<eventQueue.eventLists_.length;i++){var eventList=eventQueue.eventLists_[i];if(eventList){var eventPath=eventList.path;if(predicate(eventPath)){eventListRaise(eventQueue.eventLists_[i]);eventQueue.eventLists_[i]=null;}else {sentAll=false;}}}if(sentAll){eventQueue.eventLists_=[];}eventQueue.recursionDepth_--;}/**
 * Iterates through the list and raises each event
 */function eventListRaise(eventList){for(var i=0;i<eventList.events.length;i++){var eventData=eventList.events[i];if(eventData!==null){eventList.events[i]=null;var eventFn=eventData.getEventRunner();if(logger){log('event: '+eventData.toString());}exceptionGuard(eventFn);}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var INTERRUPT_REASON='repo_interrupt';/**
 * If a transaction does not succeed after 25 retries, we abort it. Among other
 * things this ensure that if there's ever a bug causing a mismatch between
 * client / server hashes for some data, we won't retry indefinitely.
 */var MAX_TRANSACTION_RETRIES=25;/**
 * A connection to a single data repository.
 */var Repo=/*#__PURE__*/function(){function Repo(repoInfo_,forceRestClient_,authTokenProvider_,appCheckProvider_){_classCallCheck(this,Repo);this.repoInfo_=repoInfo_;this.forceRestClient_=forceRestClient_;this.authTokenProvider_=authTokenProvider_;this.appCheckProvider_=appCheckProvider_;this.dataUpdateCount=0;this.statsListener_=null;this.eventQueue_=new EventQueue();this.nextWriteId_=1;this.interceptServerDataCallback_=null;/** A list of data pieces and paths to be set when this client disconnects. */this.onDisconnect_=newSparseSnapshotTree();/** Stores queues of outstanding transactions for Firebase locations. */this.transactionQueueTree_=new Tree();// TODO: This should be @private but it's used by test_access.js and internal.js
this.persistentConnection_=null;// This key is intentionally not updated if RepoInfo is later changed or replaced
this.key=this.repoInfo_.toURLString();}/**
     * @returns The URL corresponding to the root of this Firebase.
     */_createClass(Repo,[{key:"toString",value:function toString(){return (this.repoInfo_.secure?'https://':'http://')+this.repoInfo_.host;}}]);return Repo;}();function repoStart(repo,appId,authOverride){repo.stats_=statsManagerGetCollection(repo.repoInfo_);if(repo.forceRestClient_||beingCrawled()){repo.server_=new ReadonlyRestClient(repo.repoInfo_,function(pathString,data,isMerge,tag){repoOnDataUpdate(repo,pathString,data,isMerge,tag);},repo.authTokenProvider_,repo.appCheckProvider_);// Minor hack: Fire onConnect immediately, since there's no actual connection.
setTimeout(function(){return repoOnConnectStatus(repo,/* connectStatus= */true);},0);}else {// Validate authOverride
if(typeof authOverride!=='undefined'&&authOverride!==null){if(_typeof(authOverride)!=='object'){throw new Error('Only objects are supported for option databaseAuthVariableOverride');}try{stringify(authOverride);}catch(e){throw new Error('Invalid authOverride provided: '+e);}}repo.persistentConnection_=new PersistentConnection(repo.repoInfo_,appId,function(pathString,data,isMerge,tag){repoOnDataUpdate(repo,pathString,data,isMerge,tag);},function(connectStatus){repoOnConnectStatus(repo,connectStatus);},function(updates){repoOnServerInfoUpdate(repo,updates);},repo.authTokenProvider_,repo.appCheckProvider_,authOverride);repo.server_=repo.persistentConnection_;}repo.authTokenProvider_.addTokenChangeListener(function(token){repo.server_.refreshAuthToken(token);});repo.appCheckProvider_.addTokenChangeListener(function(result){repo.server_.refreshAppCheckToken(result.token);});// In the case of multiple Repos for the same repoInfo (i.e. there are multiple Firebase.Contexts being used),
// we only want to create one StatsReporter.  As such, we'll report stats over the first Repo created.
repo.statsReporter_=statsManagerGetOrCreateReporter(repo.repoInfo_,function(){return new StatsReporter(repo.stats_,repo.server_);});// Used for .info.
repo.infoData_=new SnapshotHolder();repo.infoSyncTree_=new SyncTree({startListening:function startListening(query,tag,currentHashFn,onComplete){var infoEvents=[];var node=repo.infoData_.getNode(query._path);// This is possibly a hack, but we have different semantics for .info endpoints. We don't raise null events
// on initial data...
if(!node.isEmpty()){infoEvents=syncTreeApplyServerOverwrite(repo.infoSyncTree_,query._path,node);setTimeout(function(){onComplete('ok');},0);}return infoEvents;},stopListening:function stopListening(){}});repoUpdateInfo(repo,'connected',false);repo.serverSyncTree_=new SyncTree({startListening:function startListening(query,tag,currentHashFn,onComplete){repo.server_.listen(query,currentHashFn,tag,function(status,data){var events=onComplete(status,data);eventQueueRaiseEventsForChangedPath(repo.eventQueue_,query._path,events);});// No synchronous events for network-backed sync trees
return [];},stopListening:function stopListening(query,tag){repo.server_.unlisten(query,tag);}});}/**
 * @returns The time in milliseconds, taking the server offset into account if we have one.
 */function repoServerTime(repo){var offsetNode=repo.infoData_.getNode(new Path('.info/serverTimeOffset'));var offset=offsetNode.val()||0;return new Date().getTime()+offset;}/**
 * Generate ServerValues using some variables from the repo object.
 */function repoGenerateServerValues(repo){return generateWithValues({timestamp:repoServerTime(repo)});}/**
 * Called by realtime when we get new messages from the server.
 */function repoOnDataUpdate(repo,pathString,data,isMerge,tag){// For testing.
repo.dataUpdateCount++;var path=new Path(pathString);data=repo.interceptServerDataCallback_?repo.interceptServerDataCallback_(pathString,data):data;var events=[];if(tag){if(isMerge){var taggedChildren=map(data,function(raw){return nodeFromJSON(raw);});events=syncTreeApplyTaggedQueryMerge(repo.serverSyncTree_,path,taggedChildren,tag);}else {var taggedSnap=nodeFromJSON(data);events=syncTreeApplyTaggedQueryOverwrite(repo.serverSyncTree_,path,taggedSnap,tag);}}else if(isMerge){var changedChildren=map(data,function(raw){return nodeFromJSON(raw);});events=syncTreeApplyServerMerge(repo.serverSyncTree_,path,changedChildren);}else {var snap=nodeFromJSON(data);events=syncTreeApplyServerOverwrite(repo.serverSyncTree_,path,snap);}var affectedPath=path;if(events.length>0){// Since we have a listener outstanding for each transaction, receiving any events
// is a proxy for some change having occurred.
affectedPath=repoRerunTransactions(repo,path);}eventQueueRaiseEventsForChangedPath(repo.eventQueue_,affectedPath,events);}function repoOnConnectStatus(repo,connectStatus){repoUpdateInfo(repo,'connected',connectStatus);if(connectStatus===false){repoRunOnDisconnectEvents(repo);}}function repoOnServerInfoUpdate(repo,updates){each(updates,function(key,value){repoUpdateInfo(repo,key,value);});}function repoUpdateInfo(repo,pathString,value){var path=new Path('/.info/'+pathString);var newNode=nodeFromJSON(value);repo.infoData_.updateSnapshot(path,newNode);var events=syncTreeApplyServerOverwrite(repo.infoSyncTree_,path,newNode);eventQueueRaiseEventsForChangedPath(repo.eventQueue_,path,events);}function repoGetNextWriteId(repo){return repo.nextWriteId_++;}function repoSetWithPriority(repo,path,newVal,newPriority,onComplete){repoLog(repo,'set',{path:path.toString(),value:newVal,priority:newPriority});// TODO: Optimize this behavior to either (a) store flag to skip resolving where possible and / or
// (b) store unresolved paths on JSON parse
var serverValues=repoGenerateServerValues(repo);var newNodeUnresolved=nodeFromJSON(newVal,newPriority);var existing=syncTreeCalcCompleteEventCache(repo.serverSyncTree_,path);var newNode=resolveDeferredValueSnapshot(newNodeUnresolved,existing,serverValues);var writeId=repoGetNextWriteId(repo);var events=syncTreeApplyUserOverwrite(repo.serverSyncTree_,path,newNode,writeId,true);eventQueueQueueEvents(repo.eventQueue_,events);repo.server_.put(path.toString(),newNodeUnresolved.val(/*export=*/true),function(status,errorReason){var success=status==='ok';if(!success){warn('set at '+path+' failed: '+status);}var clearEvents=syncTreeAckUserWrite(repo.serverSyncTree_,writeId,!success);eventQueueRaiseEventsForChangedPath(repo.eventQueue_,path,clearEvents);repoCallOnCompleteCallback(repo,onComplete,status,errorReason);});var affectedPath=repoAbortTransactions(repo,path);repoRerunTransactions(repo,affectedPath);// We queued the events above, so just flush the queue here
eventQueueRaiseEventsForChangedPath(repo.eventQueue_,affectedPath,[]);}/**
 * Applies all of the changes stored up in the onDisconnect_ tree.
 */function repoRunOnDisconnectEvents(repo){repoLog(repo,'onDisconnectEvents');var serverValues=repoGenerateServerValues(repo);var resolvedOnDisconnectTree=newSparseSnapshotTree();sparseSnapshotTreeForEachTree(repo.onDisconnect_,newEmptyPath(),function(path,node){var resolved=resolveDeferredValueTree(path,node,repo.serverSyncTree_,serverValues);sparseSnapshotTreeRemember(resolvedOnDisconnectTree,path,resolved);});var events=[];sparseSnapshotTreeForEachTree(resolvedOnDisconnectTree,newEmptyPath(),function(path,snap){events=events.concat(syncTreeApplyServerOverwrite(repo.serverSyncTree_,path,snap));var affectedPath=repoAbortTransactions(repo,path);repoRerunTransactions(repo,affectedPath);});repo.onDisconnect_=newSparseSnapshotTree();eventQueueRaiseEventsForChangedPath(repo.eventQueue_,newEmptyPath(),events);}function repoAddEventCallbackForQuery(repo,query,eventRegistration){var events;if(pathGetFront(query._path)==='.info'){events=syncTreeAddEventRegistration(repo.infoSyncTree_,query,eventRegistration);}else {events=syncTreeAddEventRegistration(repo.serverSyncTree_,query,eventRegistration);}eventQueueRaiseEventsAtPath(repo.eventQueue_,query._path,events);}function repoRemoveEventCallbackForQuery(repo,query,eventRegistration){// These are guaranteed not to raise events, since we're not passing in a cancelError. However, we can future-proof
// a little bit by handling the return values anyways.
var events;if(pathGetFront(query._path)==='.info'){events=syncTreeRemoveEventRegistration(repo.infoSyncTree_,query,eventRegistration);}else {events=syncTreeRemoveEventRegistration(repo.serverSyncTree_,query,eventRegistration);}eventQueueRaiseEventsAtPath(repo.eventQueue_,query._path,events);}function repoInterrupt(repo){if(repo.persistentConnection_){repo.persistentConnection_.interrupt(INTERRUPT_REASON);}}function repoLog(repo){var prefix='';if(repo.persistentConnection_){prefix=repo.persistentConnection_.id+':';}for(var _len6=arguments.length,varArgs=new Array(_len6>1?_len6-1:0),_key7=1;_key7<_len6;_key7++){varArgs[_key7-1]=arguments[_key7];}log.apply(void 0,[prefix].concat(varArgs));}function repoCallOnCompleteCallback(repo,callback,status,errorReason){if(callback){exceptionGuard(function(){if(status==='ok'){callback(null);}else {var code=(status||'error').toUpperCase();var message=code;if(errorReason){message+=': '+errorReason;}var _error3=new Error(message);// eslint-disable-next-line @typescript-eslint/no-explicit-any
_error3.code=code;callback(_error3);}});}}/**
 * @param excludeSets - A specific set to exclude
 */function repoGetLatestState(repo,path,excludeSets){return syncTreeCalcCompleteEventCache(repo.serverSyncTree_,path,excludeSets)||ChildrenNode.EMPTY_NODE;}/**
 * Sends any already-run transactions that aren't waiting for outstanding
 * transactions to complete.
 *
 * Externally it's called with no arguments, but it calls itself recursively
 * with a particular transactionQueueTree node to recurse through the tree.
 *
 * @param node - transactionQueueTree node to start at.
 */function repoSendReadyTransactions(repo){var node=arguments.length>1&&arguments[1]!==undefined?arguments[1]:repo.transactionQueueTree_;// Before recursing, make sure any completed transactions are removed.
if(!node){repoPruneCompletedTransactionsBelowNode(repo,node);}if(treeGetValue(node)){var queue=repoBuildTransactionQueue(repo,node);assert(queue.length>0,'Sending zero length transaction queue');var allRun=queue.every(function(transaction){return transaction.status===0;}/* RUN */);// If they're all run (and not sent), we can send them.  Else, we must wait.
if(allRun){repoSendTransactionQueue(repo,treeGetPath(node),queue);}}else if(treeHasChildren(node)){treeForEachChild(node,function(childNode){repoSendReadyTransactions(repo,childNode);});}}/**
 * Given a list of run transactions, send them to the server and then handle
 * the result (success or failure).
 *
 * @param path - The location of the queue.
 * @param queue - Queue of transactions under the specified location.
 */function repoSendTransactionQueue(repo,path,queue){// Mark transactions as sent and increment retry count!
var setsToIgnore=queue.map(function(txn){return txn.currentWriteId;});var latestState=repoGetLatestState(repo,path,setsToIgnore);var snapToSend=latestState;var latestHash=latestState.hash();for(var i=0;i<queue.length;i++){var txn=queue[i];assert(txn.status===0/* RUN */,'tryToSendTransactionQueue_: items in queue should all be run.');txn.status=1/* SENT */;txn.retryCount++;var relativePath=newRelativePath(path,txn.path);// If we've gotten to this point, the output snapshot must be defined.
snapToSend=snapToSend.updateChild(relativePath/** @type {!Node} */,txn.currentOutputSnapshotRaw);}var dataToSend=snapToSend.val(true);var pathToSend=path;// Send the put.
repo.server_.put(pathToSend.toString(),dataToSend,function(status){repoLog(repo,'transaction put response',{path:pathToSend.toString(),status:status});var events=[];if(status==='ok'){// Queue up the callbacks and fire them after cleaning up all of our
// transaction state, since the callback could trigger more
// transactions or sets.
var callbacks=[];var _loop3=function _loop3(_i5){queue[_i5].status=2/* COMPLETED */;events=events.concat(syncTreeAckUserWrite(repo.serverSyncTree_,queue[_i5].currentWriteId));if(queue[_i5].onComplete){// We never unset the output snapshot, and given that this
// transaction is complete, it should be set
callbacks.push(function(){return queue[_i5].onComplete(null,true,queue[_i5].currentOutputSnapshotResolved);});}queue[_i5].unwatcher();};for(var _i5=0;_i5<queue.length;_i5++){_loop3(_i5);}// Now remove the completed transactions.
repoPruneCompletedTransactionsBelowNode(repo,treeSubTree(repo.transactionQueueTree_,path));// There may be pending transactions that we can now send.
repoSendReadyTransactions(repo,repo.transactionQueueTree_);eventQueueRaiseEventsForChangedPath(repo.eventQueue_,path,events);// Finally, trigger onComplete callbacks.
for(var _i6=0;_i6<callbacks.length;_i6++){exceptionGuard(callbacks[_i6]);}}else {// transactions are no longer sent.  Update their status appropriately.
if(status==='datastale'){for(var _i7=0;_i7<queue.length;_i7++){if(queue[_i7].status===3/* SENT_NEEDS_ABORT */){queue[_i7].status=4/* NEEDS_ABORT */;}else {queue[_i7].status=0/* RUN */;}}}else {warn('transaction at '+pathToSend.toString()+' failed: '+status);for(var _i8=0;_i8<queue.length;_i8++){queue[_i8].status=4/* NEEDS_ABORT */;queue[_i8].abortReason=status;}}repoRerunTransactions(repo,path);}},latestHash);}/**
 * Finds all transactions dependent on the data at changedPath and reruns them.
 *
 * Should be called any time cached data changes.
 *
 * Return the highest path that was affected by rerunning transactions. This
 * is the path at which events need to be raised for.
 *
 * @param changedPath - The path in mergedData that changed.
 * @returns The rootmost path that was affected by rerunning transactions.
 */function repoRerunTransactions(repo,changedPath){var rootMostTransactionNode=repoGetAncestorTransactionNode(repo,changedPath);var path=treeGetPath(rootMostTransactionNode);var queue=repoBuildTransactionQueue(repo,rootMostTransactionNode);repoRerunTransactionQueue(repo,queue,path);return path;}/**
 * Does all the work of rerunning transactions (as well as cleans up aborted
 * transactions and whatnot).
 *
 * @param queue - The queue of transactions to run.
 * @param path - The path the queue is for.
 */function repoRerunTransactionQueue(repo,queue,path){if(queue.length===0){return;// Nothing to do!
}// Queue up the callbacks and fire them after cleaning up all of our
// transaction state, since the callback could trigger more transactions or
// sets.
var callbacks=[];var events=[];// Ignore all of the sets we're going to re-run.
var txnsToRerun=queue.filter(function(q){return q.status===0/* RUN */;});var setsToIgnore=txnsToRerun.map(function(q){return q.currentWriteId;});var _loop4=function _loop4(i){var transaction=queue[i];var relativePath=newRelativePath(path,transaction.path);var abortTransaction=false,abortReason=void 0;assert(relativePath!==null,'rerunTransactionsUnderNode_: relativePath should not be null.');if(transaction.status===4/* NEEDS_ABORT */){abortTransaction=true;abortReason=transaction.abortReason;events=events.concat(syncTreeAckUserWrite(repo.serverSyncTree_,transaction.currentWriteId,true));}else if(transaction.status===0/* RUN */){if(transaction.retryCount>=MAX_TRANSACTION_RETRIES){abortTransaction=true;abortReason='maxretry';events=events.concat(syncTreeAckUserWrite(repo.serverSyncTree_,transaction.currentWriteId,true));}else {// This code reruns a transaction
var currentNode=repoGetLatestState(repo,transaction.path,setsToIgnore);transaction.currentInputSnapshot=currentNode;var newData=queue[i].update(currentNode.val());if(newData!==undefined){validateFirebaseData('transaction failed: Data returned ',newData,transaction.path);var newDataNode=nodeFromJSON(newData);var hasExplicitPriority=_typeof(newData)==='object'&&newData!=null&&contains(newData,'.priority');if(!hasExplicitPriority){// Keep the old priority if there wasn't a priority explicitly specified.
newDataNode=newDataNode.updatePriority(currentNode.getPriority());}var oldWriteId=transaction.currentWriteId;var serverValues=repoGenerateServerValues(repo);var newNodeResolved=resolveDeferredValueSnapshot(newDataNode,currentNode,serverValues);transaction.currentOutputSnapshotRaw=newDataNode;transaction.currentOutputSnapshotResolved=newNodeResolved;transaction.currentWriteId=repoGetNextWriteId(repo);// Mutates setsToIgnore in place
setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId),1);events=events.concat(syncTreeApplyUserOverwrite(repo.serverSyncTree_,transaction.path,newNodeResolved,transaction.currentWriteId,transaction.applyLocally));events=events.concat(syncTreeAckUserWrite(repo.serverSyncTree_,oldWriteId,true));}else {abortTransaction=true;abortReason='nodata';events=events.concat(syncTreeAckUserWrite(repo.serverSyncTree_,transaction.currentWriteId,true));}}}eventQueueRaiseEventsForChangedPath(repo.eventQueue_,path,events);events=[];if(abortTransaction){// Abort.
queue[i].status=2/* COMPLETED */;// Removing a listener can trigger pruning which can muck with
// mergedData/visibleData (as it prunes data). So defer the unwatcher
// until we're done.
(function(unwatcher){setTimeout(unwatcher,Math.floor(0));})(queue[i].unwatcher);if(queue[i].onComplete){if(abortReason==='nodata'){callbacks.push(function(){return queue[i].onComplete(null,false,queue[i].currentInputSnapshot);});}else {callbacks.push(function(){return queue[i].onComplete(new Error(abortReason),false,null);});}}}};for(var i=0;i<queue.length;i++){_loop4(i);}// Clean up completed transactions.
repoPruneCompletedTransactionsBelowNode(repo,repo.transactionQueueTree_);// Now fire callbacks, now that we're in a good, known state.
for(var _i9=0;_i9<callbacks.length;_i9++){exceptionGuard(callbacks[_i9]);}// Try to send the transaction result to the server.
repoSendReadyTransactions(repo,repo.transactionQueueTree_);}/**
 * Returns the rootmost ancestor node of the specified path that has a pending
 * transaction on it, or just returns the node for the given path if there are
 * no pending transactions on any ancestor.
 *
 * @param path - The location to start at.
 * @returns The rootmost node with a transaction.
 */function repoGetAncestorTransactionNode(repo,path){var front;// Start at the root and walk deeper into the tree towards path until we
// find a node with pending transactions.
var transactionNode=repo.transactionQueueTree_;front=pathGetFront(path);while(front!==null&&treeGetValue(transactionNode)===undefined){transactionNode=treeSubTree(transactionNode,front);path=pathPopFront(path);front=pathGetFront(path);}return transactionNode;}/**
 * Builds the queue of all transactions at or below the specified
 * transactionNode.
 *
 * @param transactionNode
 * @returns The generated queue.
 */function repoBuildTransactionQueue(repo,transactionNode){// Walk any child transaction queues and aggregate them into a single queue.
var transactionQueue=[];repoAggregateTransactionQueuesForNode(repo,transactionNode,transactionQueue);// Sort them by the order the transactions were created.
transactionQueue.sort(function(a,b){return a.order-b.order;});return transactionQueue;}function repoAggregateTransactionQueuesForNode(repo,node,queue){var nodeQueue=treeGetValue(node);if(nodeQueue){for(var i=0;i<nodeQueue.length;i++){queue.push(nodeQueue[i]);}}treeForEachChild(node,function(child){repoAggregateTransactionQueuesForNode(repo,child,queue);});}/**
 * Remove COMPLETED transactions at or below this node in the transactionQueueTree_.
 */function repoPruneCompletedTransactionsBelowNode(repo,node){var queue=treeGetValue(node);if(queue){var to=0;for(var from=0;from<queue.length;from++){if(queue[from].status!==2/* COMPLETED */){queue[to]=queue[from];to++;}}queue.length=to;treeSetValue(node,queue.length>0?queue:undefined);}treeForEachChild(node,function(childNode){repoPruneCompletedTransactionsBelowNode(repo,childNode);});}/**
 * Aborts all transactions on ancestors or descendants of the specified path.
 * Called when doing a set() or update() since we consider them incompatible
 * with transactions.
 *
 * @param path - Path for which we want to abort related transactions.
 */function repoAbortTransactions(repo,path){var affectedPath=treeGetPath(repoGetAncestorTransactionNode(repo,path));var transactionNode=treeSubTree(repo.transactionQueueTree_,path);treeForEachAncestor(transactionNode,function(node){repoAbortTransactionsOnNode(repo,node);});repoAbortTransactionsOnNode(repo,transactionNode);treeForEachDescendant(transactionNode,function(node){repoAbortTransactionsOnNode(repo,node);});return affectedPath;}/**
 * Abort transactions stored in this transaction queue node.
 *
 * @param node - Node to abort transactions for.
 */function repoAbortTransactionsOnNode(repo,node){var queue=treeGetValue(node);if(queue){// Queue up the callbacks and fire them after cleaning up all of our
// transaction state, since the callback could trigger more transactions
// or sets.
var callbacks=[];// Go through queue.  Any already-sent transactions must be marked for
// abort, while the unsent ones can be immediately aborted and removed.
var events=[];var lastSent=-1;for(var i=0;i<queue.length;i++){if(queue[i].status===3/* SENT_NEEDS_ABORT */);else if(queue[i].status===1/* SENT */){assert(lastSent===i-1,'All SENT items should be at beginning of queue.');lastSent=i;// Mark transaction for abort when it comes back.
queue[i].status=3/* SENT_NEEDS_ABORT */;queue[i].abortReason='set';}else {assert(queue[i].status===0/* RUN */,'Unexpected transaction status in abort');// We can abort it immediately.
queue[i].unwatcher();events=events.concat(syncTreeAckUserWrite(repo.serverSyncTree_,queue[i].currentWriteId,true));if(queue[i].onComplete){callbacks.push(queue[i].onComplete.bind(null,new Error('set'),false,null));}}}if(lastSent===-1){// We're not waiting for any sent transactions.  We can clear the queue.
treeSetValue(node,undefined);}else {// Remove the transactions we aborted.
queue.length=lastSent+1;}// Now fire the callbacks.
eventQueueRaiseEventsForChangedPath(repo.eventQueue_,treeGetPath(node),events);for(var _i10=0;_i10<callbacks.length;_i10++){exceptionGuard(callbacks[_i10]);}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function decodePath(pathString){var pathStringDecoded='';var pieces=pathString.split('/');for(var i=0;i<pieces.length;i++){if(pieces[i].length>0){var piece=pieces[i];try{piece=decodeURIComponent(piece.replace(/\+/g,' '));}catch(e){}pathStringDecoded+='/'+piece;}}return pathStringDecoded;}/**
 * @returns key value hash
 */function decodeQuery(queryString){var results={};if(queryString.charAt(0)==='?'){queryString=queryString.substring(1);}var _iterator10=_createForOfIteratorHelper(queryString.split('&')),_step9;try{for(_iterator10.s();!(_step9=_iterator10.n()).done;){var segment=_step9.value;if(segment.length===0){continue;}var kv=segment.split('=');if(kv.length===2){results[decodeURIComponent(kv[0])]=decodeURIComponent(kv[1]);}else {warn("Invalid query segment '".concat(segment,"' in query '").concat(queryString,"'"));}}}catch(err){_iterator10.e(err);}finally{_iterator10.f();}return results;}var parseRepoInfo=function parseRepoInfo(dataURL,nodeAdmin){var parsedUrl=parseDatabaseURL(dataURL),namespace=parsedUrl.namespace;if(parsedUrl.domain==='firebase.com'){fatal(parsedUrl.host+' is no longer supported. '+'Please use <YOUR FIREBASE>.firebaseio.com instead');}// Catch common error of uninitialized namespace value.
if((!namespace||namespace==='undefined')&&parsedUrl.domain!=='localhost'){fatal('Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com');}if(!parsedUrl.secure){warnIfPageIsSecure();}var webSocketOnly=parsedUrl.scheme==='ws'||parsedUrl.scheme==='wss';return {repoInfo:new RepoInfo(parsedUrl.host,parsedUrl.secure,namespace,nodeAdmin,webSocketOnly,/*persistenceKey=*/'',/*includeNamespaceInQueryParams=*/namespace!==parsedUrl.subdomain),path:new Path(parsedUrl.pathString)};};var parseDatabaseURL=function parseDatabaseURL(dataURL){// Default to empty strings in the event of a malformed string.
var host='',domain='',subdomain='',pathString='',namespace='';// Always default to SSL, unless otherwise specified.
var secure=true,scheme='https',port=443;// Don't do any validation here. The caller is responsible for validating the result of parsing.
if(typeof dataURL==='string'){// Parse scheme.
var colonInd=dataURL.indexOf('//');if(colonInd>=0){scheme=dataURL.substring(0,colonInd-1);dataURL=dataURL.substring(colonInd+2);}// Parse host, path, and query string.
var slashInd=dataURL.indexOf('/');if(slashInd===-1){slashInd=dataURL.length;}var questionMarkInd=dataURL.indexOf('?');if(questionMarkInd===-1){questionMarkInd=dataURL.length;}host=dataURL.substring(0,Math.min(slashInd,questionMarkInd));if(slashInd<questionMarkInd){// For pathString, questionMarkInd will always come after slashInd
pathString=decodePath(dataURL.substring(slashInd,questionMarkInd));}var queryParams=decodeQuery(dataURL.substring(Math.min(dataURL.length,questionMarkInd)));// If we have a port, use scheme for determining if it's secure.
colonInd=host.indexOf(':');if(colonInd>=0){secure=scheme==='https'||scheme==='wss';port=parseInt(host.substring(colonInd+1),10);}else {colonInd=host.length;}var hostWithoutPort=host.slice(0,colonInd);if(hostWithoutPort.toLowerCase()==='localhost'){domain='localhost';}else if(hostWithoutPort.split('.').length<=2){domain=hostWithoutPort;}else {// Interpret the subdomain of a 3 or more component URL as the namespace name.
var dotInd=host.indexOf('.');subdomain=host.substring(0,dotInd).toLowerCase();domain=host.substring(dotInd+1);// Normalize namespaces to lowercase to share storage / connection.
namespace=subdomain;}// Always treat the value of the `ns` as the namespace name if it is present.
if('ns'in queryParams){namespace=queryParams['ns'];}}return {host:host,port:port,domain:domain,subdomain:subdomain,secure:secure,scheme:scheme,pathString:pathString,namespace:namespace};};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Encapsulates the data needed to raise an event
 */var DataEvent=/*#__PURE__*/function(){/**
     * @param eventType - One of: value, child_added, child_changed, child_moved, child_removed
     * @param eventRegistration - The function to call to with the event data. User provided
     * @param snapshot - The data backing the event
     * @param prevName - Optional, the name of the previous child for child_* events.
     */function DataEvent(eventType,eventRegistration,snapshot,prevName){_classCallCheck(this,DataEvent);this.eventType=eventType;this.eventRegistration=eventRegistration;this.snapshot=snapshot;this.prevName=prevName;}_createClass(DataEvent,[{key:"getPath",value:function getPath(){var ref=this.snapshot.ref;if(this.eventType==='value'){return ref._path;}else {return ref.parent._path;}}},{key:"getEventType",value:function getEventType(){return this.eventType;}},{key:"getEventRunner",value:function getEventRunner(){return this.eventRegistration.getEventRunner(this);}},{key:"toString",value:function toString(){return this.getPath().toString()+':'+this.eventType+':'+stringify(this.snapshot.exportVal());}}]);return DataEvent;}();var CancelEvent=/*#__PURE__*/function(){function CancelEvent(eventRegistration,error,path){_classCallCheck(this,CancelEvent);this.eventRegistration=eventRegistration;this.error=error;this.path=path;}_createClass(CancelEvent,[{key:"getPath",value:function getPath(){return this.path;}},{key:"getEventType",value:function getEventType(){return 'cancel';}},{key:"getEventRunner",value:function getEventRunner(){return this.eventRegistration.getEventRunner(this);}},{key:"toString",value:function toString(){return this.path.toString()+':cancel';}}]);return CancelEvent;}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * A wrapper class that converts events from the database@exp SDK to the legacy
 * Database SDK. Events are not converted directly as event registration relies
 * on reference comparison of the original user callback (see `matches()`) and
 * relies on equality of the legacy SDK's `context` object.
 */var CallbackContext=/*#__PURE__*/function(){function CallbackContext(snapshotCallback,cancelCallback){_classCallCheck(this,CallbackContext);this.snapshotCallback=snapshotCallback;this.cancelCallback=cancelCallback;}_createClass(CallbackContext,[{key:"onValue",value:function onValue(expDataSnapshot,previousChildName){this.snapshotCallback.call(null,expDataSnapshot,previousChildName);}},{key:"onCancel",value:function onCancel(error){assert(this.hasCancelCallback,'Raising a cancel event on a listener with no cancel callback');return this.cancelCallback.call(null,error);}},{key:"hasCancelCallback",get:function get(){return !!this.cancelCallback;}},{key:"matches",value:function matches(other){return this.snapshotCallback===other.snapshotCallback||this.snapshotCallback.userCallback!==undefined&&this.snapshotCallback.userCallback===other.snapshotCallback.userCallback&&this.snapshotCallback.context===other.snapshotCallback.context;}}]);return CallbackContext;}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @internal
 */var QueryImpl=/*#__PURE__*/function(){/**
     * @hideconstructor
     */function QueryImpl(_repo,_path,_queryParams,_orderByCalled){_classCallCheck(this,QueryImpl);this._repo=_repo;this._path=_path;this._queryParams=_queryParams;this._orderByCalled=_orderByCalled;}_createClass(QueryImpl,[{key:"key",get:function get(){if(pathIsEmpty(this._path)){return null;}else {return pathGetBack(this._path);}}},{key:"ref",get:function get(){return new ReferenceImpl(this._repo,this._path);}},{key:"_queryIdentifier",get:function get(){var obj=queryParamsGetQueryObject(this._queryParams);var id=ObjectToUniqueKey(obj);return id==='{}'?'default':id;}/**
     * An object representation of the query parameters used by this Query.
     */},{key:"_queryObject",get:function get(){return queryParamsGetQueryObject(this._queryParams);}},{key:"isEqual",value:function isEqual(other){other=getModularInstance(other);if(!(other instanceof QueryImpl)){return false;}var sameRepo=this._repo===other._repo;var samePath=pathEquals(this._path,other._path);var sameQueryIdentifier=this._queryIdentifier===other._queryIdentifier;return sameRepo&&samePath&&sameQueryIdentifier;}},{key:"toJSON",value:function toJSON(){return this.toString();}},{key:"toString",value:function toString(){return this._repo.toString()+pathToUrlEncodedString(this._path);}}]);return QueryImpl;}();/**
 * @internal
 */var ReferenceImpl=/*#__PURE__*/function(_QueryImpl){_inherits(ReferenceImpl,_QueryImpl);var _super10=_createSuper(ReferenceImpl);/** @hideconstructor */function ReferenceImpl(repo,path){_classCallCheck(this,ReferenceImpl);return _super10.call(this,repo,path,new QueryParams(),false);}_createClass(ReferenceImpl,[{key:"parent",get:function get(){var parentPath=pathParent(this._path);return parentPath===null?null:new ReferenceImpl(this._repo,parentPath);}},{key:"root",get:function get(){var ref=this;while(ref.parent!==null){ref=ref.parent;}return ref;}}]);return ReferenceImpl;}(QueryImpl);/**
 * A `DataSnapshot` contains data from a Database location.
 *
 * Any time you read data from the Database, you receive the data as a
 * `DataSnapshot`. A `DataSnapshot` is passed to the event callbacks you attach
 * with `on()` or `once()`. You can extract the contents of the snapshot as a
 * JavaScript object by calling the `val()` method. Alternatively, you can
 * traverse into the snapshot by calling `child()` to return child snapshots
 * (which you could then call `val()` on).
 *
 * A `DataSnapshot` is an efficiently generated, immutable copy of the data at
 * a Database location. It cannot be modified and will never change (to modify
 * data, you always call the `set()` method on a `Reference` directly).
 */var DataSnapshot=/*#__PURE__*/function(){/**
     * @param _node - A SnapshotNode to wrap.
     * @param ref - The location this snapshot came from.
     * @param _index - The iteration order for this snapshot
     * @hideconstructor
     */function DataSnapshot(_node,/**
     * The location of this DataSnapshot.
     */ref,_index){_classCallCheck(this,DataSnapshot);this._node=_node;this.ref=ref;this._index=_index;}/**
     * Gets the priority value of the data in this `DataSnapshot`.
     *
     * Applications need not use priority but can order collections by
     * ordinary properties (see
     * {@link https://firebase.google.com/docs/database/web/lists-of-data#sorting_and_filtering_data |Sorting and filtering data}
     * ).
     */_createClass(DataSnapshot,[{key:"priority",get:function get(){// typecast here because we never return deferred values or internal priorities (MAX_PRIORITY)
return this._node.getPriority().val();}/**
     * The key (last part of the path) of the location of this `DataSnapshot`.
     *
     * The last token in a Database location is considered its key. For example,
     * "ada" is the key for the /users/ada/ node. Accessing the key on any
     * `DataSnapshot` will return the key for the location that generated it.
     * However, accessing the key on the root URL of a Database will return
     * `null`.
     */},{key:"key",get:function get(){return this.ref.key;}/** Returns the number of child properties of this `DataSnapshot`. */},{key:"size",get:function get(){return this._node.numChildren();}/**
     * Gets another `DataSnapshot` for the location at the specified relative path.
     *
     * Passing a relative path to the `child()` method of a DataSnapshot returns
     * another `DataSnapshot` for the location at the specified relative path. The
     * relative path can either be a simple child name (for example, "ada") or a
     * deeper, slash-separated path (for example, "ada/name/first"). If the child
     * location has no data, an empty `DataSnapshot` (that is, a `DataSnapshot`
     * whose value is `null`) is returned.
     *
     * @param path - A relative path to the location of child data.
     */},{key:"child",value:function child(path){var childPath=new Path(path);var childRef=_child9(this.ref,path);return new DataSnapshot(this._node.getChild(childPath),childRef,PRIORITY_INDEX);}/**
     * Returns true if this `DataSnapshot` contains any data. It is slightly more
     * efficient than using `snapshot.val() !== null`.
     */},{key:"exists",value:function exists(){return !this._node.isEmpty();}/**
     * Exports the entire contents of the DataSnapshot as a JavaScript object.
     *
     * The `exportVal()` method is similar to `val()`, except priority information
     * is included (if available), making it suitable for backing up your data.
     *
     * @returns The DataSnapshot's contents as a JavaScript value (Object,
     *   Array, string, number, boolean, or `null`).
     */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
},{key:"exportVal",value:function exportVal(){return this._node.val(true);}/**
     * Enumerates the top-level children in the `DataSnapshot`.
     *
     * Because of the way JavaScript objects work, the ordering of data in the
     * JavaScript object returned by `val()` is not guaranteed to match the
     * ordering on the server nor the ordering of `onChildAdded()` events. That is
     * where `forEach()` comes in handy. It guarantees the children of a
     * `DataSnapshot` will be iterated in their query order.
     *
     * If no explicit `orderBy*()` method is used, results are returned
     * ordered by key (unless priorities are used, in which case, results are
     * returned by priority).
     *
     * @param action - A function that will be called for each child DataSnapshot.
     * The callback can return true to cancel further enumeration.
     * @returns true if enumeration was canceled due to your callback returning
     * true.
     */},{key:"forEach",value:function forEach(action){var _this37=this;if(this._node.isLeafNode()){return false;}var childrenNode=this._node;// Sanitize the return value to a boolean. ChildrenNode.forEachChild has a weird return type...
return !!childrenNode.forEachChild(this._index,function(key,node){return action(new DataSnapshot(node,_child9(_this37.ref,key),PRIORITY_INDEX));});}/**
     * Returns true if the specified child path has (non-null) data.
     *
     * @param path - A relative path to the location of a potential child.
     * @returns `true` if data exists at the specified child path; else
     *  `false`.
     */},{key:"hasChild",value:function hasChild(path){var childPath=new Path(path);return !this._node.getChild(childPath).isEmpty();}/**
     * Returns whether or not the `DataSnapshot` has any non-`null` child
     * properties.
     *
     * You can use `hasChildren()` to determine if a `DataSnapshot` has any
     * children. If it does, you can enumerate them using `forEach()`. If it
     * doesn't, then either this snapshot contains a primitive value (which can be
     * retrieved with `val()`) or it is empty (in which case, `val()` will return
     * `null`).
     *
     * @returns true if this snapshot has any children; else false.
     */},{key:"hasChildren",value:function hasChildren(){if(this._node.isLeafNode()){return false;}else {return !this._node.isEmpty();}}/**
     * Returns a JSON-serializable representation of this object.
     */},{key:"toJSON",value:function toJSON(){return this.exportVal();}/**
     * Extracts a JavaScript value from a `DataSnapshot`.
     *
     * Depending on the data in a `DataSnapshot`, the `val()` method may return a
     * scalar type (string, number, or boolean), an array, or an object. It may
     * also return null, indicating that the `DataSnapshot` is empty (contains no
     * data).
     *
     * @returns The DataSnapshot's contents as a JavaScript value (Object,
     *   Array, string, number, boolean, or `null`).
     */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
},{key:"val",value:function val(){return this._node.val();}}]);return DataSnapshot;}();/**
 *
 * Returns a `Reference` representing the location in the Database
 * corresponding to the provided path. If no path is provided, the `Reference`
 * will point to the root of the Database.
 *
 * @param db - The database instance to obtain a reference for.
 * @param path - Optional path representing the location the returned
 *   `Reference` will point. If not provided, the returned `Reference` will
 *   point to the root of the Database.
 * @returns If a path is provided, a `Reference`
 *   pointing to the provided path. Otherwise, a `Reference` pointing to the
 *   root of the Database.
 */function ref(db,path){db=getModularInstance(db);db._checkNotDeleted('ref');return path!==undefined?_child9(db._root,path):db._root;}/**
 * Gets a `Reference` for the location at the specified relative path.
 *
 * The relative path can either be a simple child name (for example, "ada") or
 * a deeper slash-separated path (for example, "ada/name/first").
 *
 * @param parent - The parent location.
 * @param path - A relative path from this location to the desired child
 *   location.
 * @returns The specified child location.
 */function _child9(parent,path){parent=getModularInstance(parent);if(pathGetFront(parent._path)===null){validateRootPathString('child','path',path,false);}else {validatePathString('child','path',path,false);}return new ReferenceImpl(parent._repo,pathChild(parent._path,path));}/**
 * Writes data to this Database location.
 *
 * This will overwrite any data at this location and all child locations.
 *
 * The effect of the write will be visible immediately, and the corresponding
 * events ("value", "child_added", etc.) will be triggered. Synchronization of
 * the data to the Firebase servers will also be started, and the returned
 * Promise will resolve when complete. If provided, the `onComplete` callback
 * will be called asynchronously after synchronization has finished.
 *
 * Passing `null` for the new value is equivalent to calling `remove()`; namely,
 * all data at this location and all child locations will be deleted.
 *
 * `set()` will remove any priority stored at this location, so if priority is
 * meant to be preserved, you need to use `setWithPriority()` instead.
 *
 * Note that modifying data with `set()` will cancel any pending transactions
 * at that location, so extreme care should be taken if mixing `set()` and
 * `transaction()` to modify the same data.
 *
 * A single `set()` will generate a single "value" event at the location where
 * the `set()` was performed.
 *
 * @param ref - The location to write to.
 * @param value - The value to be written (string, number, boolean, object,
 *   array, or null).
 * @returns Resolves when write to server is complete.
 */function set(ref,value){ref=getModularInstance(ref);validateWritablePath('set',ref._path);validateFirebaseDataArg('set',value,ref._path,false);var deferred=new Deferred();repoSetWithPriority(ref._repo,ref._path,value,/*priority=*/null,deferred.wrapCallback(function(){}));return deferred.promise;}/**
 * Represents registration for 'value' events.
 */var ValueEventRegistration=/*#__PURE__*/function(){function ValueEventRegistration(callbackContext){_classCallCheck(this,ValueEventRegistration);this.callbackContext=callbackContext;}_createClass(ValueEventRegistration,[{key:"respondsTo",value:function respondsTo(eventType){return eventType==='value';}},{key:"createEvent",value:function createEvent(change,query){var index=query._queryParams.getIndex();return new DataEvent('value',this,new DataSnapshot(change.snapshotNode,new ReferenceImpl(query._repo,query._path),index));}},{key:"getEventRunner",value:function getEventRunner(eventData){var _this38=this;if(eventData.getEventType()==='cancel'){return function(){return _this38.callbackContext.onCancel(eventData.error);};}else {return function(){return _this38.callbackContext.onValue(eventData.snapshot,null);};}}},{key:"createCancelEvent",value:function createCancelEvent(error,path){if(this.callbackContext.hasCancelCallback){return new CancelEvent(this,error,path);}else {return null;}}},{key:"matches",value:function matches(other){if(!(other instanceof ValueEventRegistration)){return false;}else if(!other.callbackContext||!this.callbackContext){// If no callback specified, we consider it to match any callback.
return true;}else {return other.callbackContext.matches(this.callbackContext);}}},{key:"hasAnyCallback",value:function hasAnyCallback(){return this.callbackContext!==null;}}]);return ValueEventRegistration;}();/**
 * Represents the registration of a child_x event.
 */var ChildEventRegistration=/*#__PURE__*/function(){function ChildEventRegistration(eventType,callbackContext){_classCallCheck(this,ChildEventRegistration);this.eventType=eventType;this.callbackContext=callbackContext;}_createClass(ChildEventRegistration,[{key:"respondsTo",value:function respondsTo(eventType){var eventToCheck=eventType==='children_added'?'child_added':eventType;eventToCheck=eventToCheck==='children_removed'?'child_removed':eventToCheck;return this.eventType===eventToCheck;}},{key:"createCancelEvent",value:function createCancelEvent(error,path){if(this.callbackContext.hasCancelCallback){return new CancelEvent(this,error,path);}else {return null;}}},{key:"createEvent",value:function createEvent(change,query){assert(change.childName!=null,'Child events should have a childName.');var childRef=_child9(new ReferenceImpl(query._repo,query._path),change.childName);var index=query._queryParams.getIndex();return new DataEvent(change.type,this,new DataSnapshot(change.snapshotNode,childRef,index),change.prevName);}},{key:"getEventRunner",value:function getEventRunner(eventData){var _this39=this;if(eventData.getEventType()==='cancel'){return function(){return _this39.callbackContext.onCancel(eventData.error);};}else {return function(){return _this39.callbackContext.onValue(eventData.snapshot,eventData.prevName);};}}},{key:"matches",value:function matches(other){if(other instanceof ChildEventRegistration){return this.eventType===other.eventType&&(!this.callbackContext||!other.callbackContext||this.callbackContext.matches(other.callbackContext));}return false;}},{key:"hasAnyCallback",value:function hasAnyCallback(){return !!this.callbackContext;}}]);return ChildEventRegistration;}();function addEventListener(query,eventType,callback,cancelCallbackOrListenOptions,options){var cancelCallback;if(_typeof(cancelCallbackOrListenOptions)==='object'){cancelCallback=undefined;options=cancelCallbackOrListenOptions;}if(typeof cancelCallbackOrListenOptions==='function'){cancelCallback=cancelCallbackOrListenOptions;}if(options&&options.onlyOnce){var userCallback=callback;var onceCallback=function onceCallback(dataSnapshot,previousChildName){repoRemoveEventCallbackForQuery(query._repo,query,container);userCallback(dataSnapshot,previousChildName);};onceCallback.userCallback=callback.userCallback;onceCallback.context=callback.context;callback=onceCallback;}var callbackContext=new CallbackContext(callback,cancelCallback||undefined);var container=eventType==='value'?new ValueEventRegistration(callbackContext):new ChildEventRegistration(eventType,callbackContext);repoAddEventCallbackForQuery(query._repo,query,container);return function(){return repoRemoveEventCallbackForQuery(query._repo,query,container);};}function onValue(query,callback,cancelCallbackOrListenOptions,options){return addEventListener(query,'value',callback,cancelCallbackOrListenOptions,options);}/**
 * Define reference constructor in various modules
 *
 * We are doing this here to avoid several circular
 * dependency issues
 */syncPointSetReferenceConstructor(ReferenceImpl);syncTreeSetReferenceConstructor(ReferenceImpl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * This variable is also defined in the firebase Node.js Admin SDK. Before
 * modifying this definition, consult the definition in:
 *
 * https://github.com/firebase/firebase-admin-node
 *
 * and make sure the two are consistent.
 */var FIREBASE_DATABASE_EMULATOR_HOST_VAR='FIREBASE_DATABASE_EMULATOR_HOST';/**
 * Creates and caches `Repo` instances.
 */var repos={};/**
 * If true, any new `Repo` will be created to use `ReadonlyRestClient` (for testing purposes).
 */var useRestClient=false;/**
 * This function should only ever be called to CREATE a new database instance.
 * @internal
 */function repoManagerDatabaseFromApp(app,authProvider,appCheckProvider,url,nodeAdmin){var dbUrl=url||app.options.databaseURL;if(dbUrl===undefined){if(!app.options.projectId){fatal("Can't determine Firebase Database URL. Be sure to include "+' a Project ID when calling firebase.initializeApp().');}log('Using default host for project ',app.options.projectId);dbUrl="".concat(app.options.projectId,"-default-rtdb.firebaseio.com");}var parsedUrl=parseRepoInfo(dbUrl,nodeAdmin);var repoInfo=parsedUrl.repoInfo;var isEmulator;var dbEmulatorHost=undefined;if(typeof process!=='undefined'){dbEmulatorHost=process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR];}if(dbEmulatorHost){isEmulator=true;dbUrl="http://".concat(dbEmulatorHost,"?ns=").concat(repoInfo.namespace);parsedUrl=parseRepoInfo(dbUrl,nodeAdmin);repoInfo=parsedUrl.repoInfo;}else {isEmulator=!parsedUrl.repoInfo.secure;}var authTokenProvider=nodeAdmin&&isEmulator?new EmulatorTokenProvider(EmulatorTokenProvider.OWNER):new FirebaseAuthTokenProvider(app.name,app.options,authProvider);validateUrl('Invalid Firebase Database URL',parsedUrl);if(!pathIsEmpty(parsedUrl.path)){fatal('Database URL must point to the root of a Firebase Database '+'(not including a child path).');}var repo=repoManagerCreateRepo(repoInfo,app,authTokenProvider,new AppCheckTokenProvider(app.name,appCheckProvider));return new Database(repo,app);}/**
 * Remove the repo and make sure it is disconnected.
 *
 */function repoManagerDeleteRepo(repo,appName){var appRepos=repos[appName];// This should never happen...
if(!appRepos||appRepos[repo.key]!==repo){fatal("Database ".concat(appName,"(").concat(repo.repoInfo_,") has already been deleted."));}repoInterrupt(repo);delete appRepos[repo.key];}/**
 * Ensures a repo doesn't already exist and then creates one using the
 * provided app.
 *
 * @param repoInfo - The metadata about the Repo
 * @returns The Repo object for the specified server / repoName.
 */function repoManagerCreateRepo(repoInfo,app,authTokenProvider,appCheckProvider){var appRepos=repos[app.name];if(!appRepos){appRepos={};repos[app.name]=appRepos;}var repo=appRepos[repoInfo.toURLString()];if(repo){fatal('Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.');}repo=new Repo(repoInfo,useRestClient,authTokenProvider,appCheckProvider);appRepos[repoInfo.toURLString()]=repo;return repo;}/**
 * Class representing a Firebase Realtime Database.
 */var Database=/*#__PURE__*/function(){/** @hideconstructor */function Database(_repoInternal,/** The {@link @firebase/app#FirebaseApp} associated with this Realtime Database instance. */app){_classCallCheck(this,Database);this._repoInternal=_repoInternal;this.app=app;/** Represents a `Database` instance. */this['type']='database';/** Track if the instance has been used (root or repo accessed) */this._instanceStarted=false;}_createClass(Database,[{key:"_repo",get:function get(){if(!this._instanceStarted){repoStart(this._repoInternal,this.app.options.appId,this.app.options['databaseAuthVariableOverride']);this._instanceStarted=true;}return this._repoInternal;}},{key:"_root",get:function get(){if(!this._rootInternal){this._rootInternal=new ReferenceImpl(this._repo,newEmptyPath());}return this._rootInternal;}},{key:"_delete",value:function _delete(){if(this._rootInternal!==null){repoManagerDeleteRepo(this._repo,this.app.name);this._repoInternal=null;this._rootInternal=null;}return Promise.resolve();}},{key:"_checkNotDeleted",value:function _checkNotDeleted(apiName){if(this._rootInternal===null){fatal('Cannot call '+apiName+' on a deleted database.');}}}]);return Database;}();/**
 * Returns the instance of the Realtime Database SDK that is associated
 * with the provided {@link @firebase/app#FirebaseApp}. Initializes a new instance with
 * with default settings if no instance exists or if the existing instance uses
 * a custom database URL.
 *
 * @param app - The {@link @firebase/app#FirebaseApp} instance that the returned Realtime
 * Database instance is associated with.
 * @param url - The URL of the Realtime Database instance to connect to. If not
 * provided, the SDK connects to the default instance of the Firebase App.
 * @returns The `Database` instance of the provided app.
 */function getDatabase(){var app=arguments.length>0&&arguments[0]!==undefined?arguments[0]:getApp();var url=arguments.length>1?arguments[1]:undefined;return _getProvider(app,'database').getImmediate({identifier:url});}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function registerDatabase(variant){setSDKVersion(SDK_VERSION$1);_registerComponent(new Component('database',function(container,_ref3){var url=_ref3.instanceIdentifier;var app=container.getProvider('app').getImmediate();var authProvider=container.getProvider('auth-internal');var appCheckProvider=container.getProvider('app-check-internal');return repoManagerDatabaseFromApp(app,authProvider,appCheckProvider,url);},"PUBLIC"/* PUBLIC */).setMultipleInstances(true));registerVersion(name,version,variant);// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
registerVersion(name,version,'esm2017');}PersistentConnection.prototype.simpleListen=function(pathString,onComplete){this.sendRequest('q',{p:pathString},onComplete);};// eslint-disable-next-line @typescript-eslint/no-explicit-any
PersistentConnection.prototype.echo=function(data,onEcho){this.sendRequest('echo',{d:data},onEcho);};// RealTimeConnection properties that we use in tests.
/**
 * Firebase Realtime Database
 *
 * @packageDocumentation
 */registerDatabase();

// Copyright 2010-2012 Mikeal Rogers

var extend = require('extend');

var cookies = require('./lib/cookies');

var helpers = require('./lib/helpers');

var paramsHaveRequestBody = helpers.paramsHaveRequestBody; // organize params for patch, post, put, head, del

function initParams(uri, options, callback) {
  if (typeof options === 'function') {
    callback = options;
  }

  var params = {};

  if (options !== null && _typeof(options) === 'object') {
    extend(params, options, {
      uri: uri
    });
  } else if (typeof uri === 'string') {
    extend(params, {
      uri: uri
    });
  } else {
    extend(params, uri);
  }

  params.callback = callback || params.callback;
  return params;
}

function request(uri, options, callback) {
  if (typeof uri === 'undefined') {
    throw new Error('undefined is not a valid uri or options object.');
  }

  var params = initParams(uri, options, callback);

  if (params.method === 'HEAD' && paramsHaveRequestBody(params)) {
    throw new Error('HTTP HEAD requests MUST NOT include a request body.');
  }

  return new request.Request(params);
}

function verbFunc(verb) {
  var method = verb.toUpperCase();
  return function (uri, options, callback) {
    var params = initParams(uri, options, callback);
    params.method = method;
    return request(params, params.callback);
  };
} // define like this to please codeintel/intellisense IDEs


request.get = verbFunc('get');
request.head = verbFunc('head');
request.options = verbFunc('options');
request.post = verbFunc('post');
request.put = verbFunc('put');
request.patch = verbFunc('patch');
request.del = verbFunc('delete');
request['delete'] = verbFunc('delete');

request.jar = function (store) {
  return cookies.jar(store);
};

request.cookie = function (str) {
  return cookies.parse(str);
};

function wrapRequestMethod(method, options, requester, verb) {
  return function (uri, opts, callback) {
    var params = initParams(uri, opts, callback);
    var target = {};
    extend(true, target, options, params);
    target.pool = params.pool || options.pool;

    if (verb) {
      target.method = verb.toUpperCase();
    }

    if (typeof requester === 'function') {
      method = requester;
    }

    return method(target, target.callback);
  };
}

request.defaults = function (options, requester) {
  var self = this;
  options = options || {};

  if (typeof options === 'function') {
    requester = options;
    options = {};
  }

  var defaults = wrapRequestMethod(self, options, requester);
  var verbs = ['get', 'head', 'post', 'put', 'patch', 'del', 'delete'];
  verbs.forEach(function (verb) {
    defaults[verb] = wrapRequestMethod(self[verb], options, requester, verb);
  });
  defaults.cookie = wrapRequestMethod(self.cookie, options, requester);
  defaults.jar = self.jar;
  defaults.defaults = self.defaults;
  return defaults;
};

request.forever = function (agentOptions, optionsArg) {
  var options = {};

  if (optionsArg) {
    extend(options, optionsArg);
  }

  if (agentOptions) {
    options.agentOptions = agentOptions;
  }

  options.forever = true;
  return request.defaults(options);
}; // Exports


module.exports = request;
request.Request = require('./request');
request.initParams = initParams; // Backwards compatibility for request.debug

Object.defineProperty(request, 'debug', {
  enumerable: true,
  get: function get() {
    return request.Request.debug;
  },
  set: function set(debug) {
    request.Request.debug = debug;
  }
});

// TODO: Add SDKs for Firebase products that you want to use
// Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDICcooHUciQZvAs_dPpExVxqBhtJMojbY",
  authDomain: "codelab-database-1.firebaseapp.com",
  databaseURL: "https://codelab-database-1-default-rtdb.firebaseio.com",
  projectId: "codelab-database-1",
  storageBucket: "codelab-database-1.appspot.com",
  messagingSenderId: "573387563239",
  appId: "1:573387563239:web:161f23412c218ba50ac242",
  measurementId: "G-4XTVC35JQL"
}; // Initialize Firebase editor

var app = initializeApp(firebaseConfig);
var database = getDatabase(app);
var dataRef = ref(database, 'User1/');
var JsCodeArea = document.getElementById("editor"); // Create ACE editor

var aceEditor = ace.edit("editor");
aceEditor.setTheme("ace/theme/monokai");
aceEditor.getSession(); // Create ACE editor 2

var aceEditor2 = ace.edit("editor2");
aceEditor2.setTheme("ace/theme/monokai");
aceEditor.getSession();
aceEditor2.session.setMode("ace/mode/c_cpp");
document.getElementById("editor2");
var languageCode = 'cpp'; //Change Language select section

window.changeLanguage = function changeLanguage() {
  var language = $("#languages").val();

  if (language == 'c++') {
    aceEditor.session.setMode("ace/mode/c_cpp");
    languageCode = 'cpp';
  } else if (language == 'java') {
    aceEditor.session.setMode("ace/mode/java");
    languageCode = 'java';
  } else if (language == 'python') {
    aceEditor.session.setMode("ace/mode/python");
    languageCode = 'python3';
  } else if (language == 'node') {
    aceEditor.session.setMode("ace/mode/javascript");
    languageCode = 'nodejs';
  }
}; //Assign code problem select section


window.assignProblem = function assignProblem() {
  var mode = $("#assign").val();

  if (mode == 'timed') {
    console.log("timed triggered");
    var CodeArea = aceEditor.getSession().getValue(); //need to add setter to firebase

    aceEditor2.getSession().setValue(CodeArea, 1);
  } else if (mode == 'practice') {
    console.log("practice triggered");
    var CodeArea = aceEditor.getSession().getValue(); //need to add setter to firebase

    aceEditor2.getSession().setValue(CodeArea, 1);
  }
}; //function getter from firbase and setter into ace editor


function updateEditor(data) {
  var cursorPosition = aceEditor.getCursorPosition();
  var txtarea = data.val().codeEditor;
  console.log("txtarea = " + txtarea);
  aceEditor.getSession().setValue(txtarea, 1); //set value in ace editor

  aceEditor.moveCursorToPosition(cursorPosition);
} //function getter from ace editor and setter for firebase


function listenSetFirebase(event) {
  console.log("check event.key: " + event.key);
  var CodeArea = aceEditor.getSession().getValue();
  console.log("Listener = " + CodeArea);
  var jsedit = {
    codeEditor: CodeArea
  };
  set(dataRef, jsedit);
} //----Main-----


changeLanguage();
onValue(dataRef, updateEditor); //update editor from firebase

JsCodeArea.addEventListener('keyup', listenSetFirebase); //set firebase from key event


window.executeCode = function executeCode() {
  var CodeArea = aceEditor.getSession().getValue();
  console.log("Output =" + CodeArea);
  var compiledOutput;
  var initializePromise = compiler.submitCode(CodeArea, languageCode);
  initializePromise.then(function (result) {
    compiledOutput = result;
    console.log("Initialized details"); // Use user details from here

    console.log(compiledOutput);
    document.getElementById("output").innerHTML = compiledOutput;
  }, function (err) {
    console.log(err);
  });
};
