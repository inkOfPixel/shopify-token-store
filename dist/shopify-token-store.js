!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ShopifyTokenStore=t():e.ShopifyTokenStore=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";(function(e){function n(){return i.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(e,t){if(n()<t)throw new RangeError("Invalid typed array length");return i.TYPED_ARRAY_SUPPORT?(e=new Uint8Array(t)).__proto__=i.prototype:(null===e&&(e=new i(t)),e.length=t),e}function i(e,t,r){if(!(i.TYPED_ARRAY_SUPPORT||this instanceof i))return new i(e,t,r);if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string");return u(this,e)}return s(this,e,t,r)}function s(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){if(t.byteLength,r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds");if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n);i.TYPED_ARRAY_SUPPORT?(e=t).__proto__=i.prototype:e=f(e,t);return e}(e,t,r,n):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8");if(!i.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|h(t,r),s=(e=o(e,n)).write(t,r);s!==n&&(e=e.slice(0,s));return e}(e,t,r):function(e,t){if(i.isBuffer(t)){var r=0|c(t.length);return 0===(e=o(e,r)).length?e:(t.copy(e,0,0,r),e)}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||function(e){return e!=e}(t.length)?o(e,0):f(e,t);if("Buffer"===t.type&&N(t.data))return f(e,t.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}function a(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative')}function u(e,t){if(a(t),e=o(e,t<0?0:0|c(t)),!i.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0;return e}function f(e,t){var r=t.length<0?0:0|c(t.length);e=o(e,r);for(var n=0;n<r;n+=1)e[n]=255&t[n];return e}function c(e){if(e>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|e}function h(e,t){if(i.isBuffer(e))return e.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength;"string"!=typeof e&&(e=""+e);var r=e.length;if(0===r)return 0;for(var n=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return C(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return D(e).length;default:if(n)return C(e).length;t=(""+t).toLowerCase(),n=!0}}function p(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,t>>>=0,r<=t)return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0);(!r||r<0||r>n)&&(r=n);for(var o="",i=t;i<r;++i)o+=function(e){return e<16?"0"+e.toString(16):e.toString(16)}(e[i]);return o}(this,t,r);case"utf8":case"utf-8":return E(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(127&e[o]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var o=t;o<r;++o)n+=String.fromCharCode(e[o]);return n}(this,t,r);case"base64":return function(e,t,r){return 0===t&&r===e.length?U.fromByteArray(e):U.fromByteArray(e.slice(t,r))}(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function l(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function y(e,t,r,n,o){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(o)return-1;r=e.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof t&&(t=i.from(t,n)),i.isBuffer(t))return 0===t.length?-1:d(e,t,r,n,o);if("number"==typeof t)return t&=255,i.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):d(e,[t],r,n,o);throw new TypeError("val must be string, number or Buffer")}function d(e,t,r,n,o){function i(e,t){return 1===s?e[t]:e.readUInt16BE(t*s)}var s=1,a=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;s=2,a/=2,u/=2,r/=2}var f;if(o){var c=-1;for(f=r;f<a;f++)if(i(e,f)===i(t,-1===c?0:f-c)){if(-1===c&&(c=f),f-c+1===u)return c*s}else-1!==c&&(f-=f-c),c=-1}else for(r+u>a&&(r=a-u),f=r;f>=0;f--){for(var h=!0,p=0;p<u;p++)if(i(e,f+p)!==i(t,p)){h=!1;break}if(h)return f}return-1}function g(e,t,r,n){r=Number(r)||0;var o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=t.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var s=0;s<n;++s){var a=parseInt(t.substr(2*s,2),16);if(isNaN(a))return s;e[r+s]=a}return s}function m(e,t,r,n){return x(C(t,e.length-r),e,r,n)}function v(e,t,r,n){return x(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function w(e,t,r,n){return v(e,t,r,n)}function _(e,t,r,n){return x(D(t),e,r,n)}function b(e,t,r,n){return x(function(e,t){for(var r,n,o,i=[],s=0;s<e.length&&!((t-=2)<0);++s)r=e.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}(t,e.length-r),e,r,n)}function E(e,t,r){r=Math.min(e.length,r);for(var n=[],o=t;o<r;){var i=e[o],s=null,a=i>239?4:i>223?3:i>191?2:1;if(o+a<=r){var u,f,c,h;switch(a){case 1:i<128&&(s=i);break;case 2:128==(192&(u=e[o+1]))&&(h=(31&i)<<6|63&u)>127&&(s=h);break;case 3:u=e[o+1],f=e[o+2],128==(192&u)&&128==(192&f)&&(h=(15&i)<<12|(63&u)<<6|63&f)>2047&&(h<55296||h>57343)&&(s=h);break;case 4:u=e[o+1],f=e[o+2],c=e[o+3],128==(192&u)&&128==(192&f)&&128==(192&c)&&(h=(15&i)<<18|(63&u)<<12|(63&f)<<6|63&c)>65535&&h<1114112&&(s=h)}}null===s?(s=65533,a=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),o+=a}return function(e){var t=e.length;if(t<=k)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=k));return r}(n)}function A(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function T(e,t,r,n,o,s){if(!i.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<s)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function R(e,t,r,n){t<0&&(t=65535+t+1);for(var o=0,i=Math.min(e.length-r,2);o<i;++o)e[r+o]=(t&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function S(e,t,r,n){t<0&&(t=4294967295+t+1);for(var o=0,i=Math.min(e.length-r,4);o<i;++o)e[r+o]=t>>>8*(n?o:3-o)&255}function P(e,t,r,n,o,i){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function B(e,t,r,n,o){return o||P(e,0,r,4),I.write(e,t,r,n,23,4),r+4}function O(e,t,r,n,o){return o||P(e,0,r,8),I.write(e,t,r,n,52,8),r+8}function C(e,t){t=t||1/0;for(var r,n=e.length,o=null,i=[],s=0;s<n;++s){if((r=e.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(t-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((t-=1)<0)break;i.push(r)}else if(r<2048){if((t-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function D(e){return U.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(L,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function x(e,t,r,n){for(var o=0;o<n&&!(o+r>=t.length||o>=e.length);++o)t[o+r]=e[o];return o}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var U=r(8),I=r(9),N=r(10);t.Buffer=i,t.SlowBuffer=function(e){return+e!=e&&(e=0),i.alloc(+e)},t.INSPECT_MAX_BYTES=50,i.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1);return e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}(),t.kMaxLength=n(),i.poolSize=8192,i._augment=function(e){return e.__proto__=i.prototype,e},i.from=function(e,t,r){return s(null,e,t,r)},i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0})),i.alloc=function(e,t,r){return function(e,t,r,n){return a(t),t<=0?o(e,t):void 0!==r?"string"==typeof n?o(e,t).fill(r,n):o(e,t).fill(r):o(e,t)}(null,e,t,r)},i.allocUnsafe=function(e){return u(null,e)},i.allocUnsafeSlow=function(e){return u(null,e)},i.isBuffer=function(e){return!(null==e||!e._isBuffer)},i.compare=function(e,t){if(!i.isBuffer(e)||!i.isBuffer(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var r=e.length,n=t.length,o=0,s=Math.min(r,n);o<s;++o)if(e[o]!==t[o]){r=e[o],n=t[o];break}return r<n?-1:n<r?1:0},i.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(e,t){if(!N(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return i.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=i.allocUnsafe(t),o=0;for(r=0;r<e.length;++r){var s=e[r];if(!i.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,o),o+=s.length}return n},i.byteLength=h,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)l(this,t,t+1);return this},i.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)l(this,t,t+3),l(this,t+1,t+2);return this},i.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)l(this,t,t+7),l(this,t+1,t+6),l(this,t+2,t+5),l(this,t+3,t+4);return this},i.prototype.toString=function(){var e=0|this.length;return 0===e?"":0===arguments.length?E(this,0,e):p.apply(this,arguments)},i.prototype.equals=function(e){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===i.compare(this,e)},i.prototype.inspect=function(){var e="",r=t.INSPECT_MAX_BYTES;return this.length>0&&(e=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(e+=" ... ")),"<Buffer "+e+">"},i.prototype.compare=function(e,t,r,n,o){if(!i.isBuffer(e))throw new TypeError("Argument must be a Buffer");if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),t<0||r>e.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&t>=r)return 0;if(n>=o)return-1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,o>>>=0,this===e)return 0;for(var s=o-n,a=r-t,u=Math.min(s,a),f=this.slice(n,o),c=e.slice(t,r),h=0;h<u;++h)if(f[h]!==c[h]){s=f[h],a=c[h];break}return s<a?-1:a<s?1:0},i.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},i.prototype.indexOf=function(e,t,r){return y(this,e,t,r,!0)},i.prototype.lastIndexOf=function(e,t,r){return y(this,e,t,r,!1)},i.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-t;if((void 0===r||r>o)&&(r=o),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return g(this,e,t,r);case"utf8":case"utf-8":return m(this,e,t,r);case"ascii":return v(this,e,t,r);case"latin1":case"binary":return w(this,e,t,r);case"base64":return _(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return b(this,e,t,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var k=4096;i.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n;if(i.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=i.prototype;else{var o=t-e;n=new i(o,void 0);for(var s=0;s<o;++s)n[s]=this[s+e]}return n},i.prototype.readUIntLE=function(e,t,r){e|=0,t|=0,r||A(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return n},i.prototype.readUIntBE=function(e,t,r){e|=0,t|=0,r||A(e,t,this.length);for(var n=this[e+--t],o=1;t>0&&(o*=256);)n+=this[e+--t]*o;return n},i.prototype.readUInt8=function(e,t){return t||A(e,1,this.length),this[e]},i.prototype.readUInt16LE=function(e,t){return t||A(e,2,this.length),this[e]|this[e+1]<<8},i.prototype.readUInt16BE=function(e,t){return t||A(e,2,this.length),this[e]<<8|this[e+1]},i.prototype.readUInt32LE=function(e,t){return t||A(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},i.prototype.readUInt32BE=function(e,t){return t||A(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},i.prototype.readIntLE=function(e,t,r){e|=0,t|=0,r||A(e,t,this.length);for(var n=this[e],o=1,i=0;++i<t&&(o*=256);)n+=this[e+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*t)),n},i.prototype.readIntBE=function(e,t,r){e|=0,t|=0,r||A(e,t,this.length);for(var n=t,o=1,i=this[e+--n];n>0&&(o*=256);)i+=this[e+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*t)),i},i.prototype.readInt8=function(e,t){return t||A(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},i.prototype.readInt16LE=function(e,t){t||A(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt16BE=function(e,t){t||A(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt32LE=function(e,t){return t||A(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},i.prototype.readInt32BE=function(e,t){return t||A(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},i.prototype.readFloatLE=function(e,t){return t||A(e,4,this.length),I.read(this,e,!0,23,4)},i.prototype.readFloatBE=function(e,t){return t||A(e,4,this.length),I.read(this,e,!1,23,4)},i.prototype.readDoubleLE=function(e,t){return t||A(e,8,this.length),I.read(this,e,!0,52,8)},i.prototype.readDoubleBE=function(e,t){return t||A(e,8,this.length),I.read(this,e,!1,52,8)},i.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t|=0,r|=0,!n){T(this,e,t,r,Math.pow(2,8*r)-1,0)}var o=1,i=0;for(this[t]=255&e;++i<r&&(o*=256);)this[t+i]=e/o&255;return t+r},i.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t|=0,r|=0,!n){T(this,e,t,r,Math.pow(2,8*r)-1,0)}var o=r-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+r},i.prototype.writeUInt8=function(e,t,r){return e=+e,t|=0,r||T(this,e,t,1,255,0),i.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=255&e,t+1},i.prototype.writeUInt16LE=function(e,t,r){return e=+e,t|=0,r||T(this,e,t,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},i.prototype.writeUInt16BE=function(e,t,r){return e=+e,t|=0,r||T(this,e,t,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},i.prototype.writeUInt32LE=function(e,t,r){return e=+e,t|=0,r||T(this,e,t,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e):S(this,e,t,!0),t+4},i.prototype.writeUInt32BE=function(e,t,r){return e=+e,t|=0,r||T(this,e,t,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):S(this,e,t,!1),t+4},i.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t|=0,!n){var o=Math.pow(2,8*r-1);T(this,e,t,r,o-1,-o)}var i=0,s=1,a=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},i.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t|=0,!n){var o=Math.pow(2,8*r-1);T(this,e,t,r,o-1,-o)}var i=r-1,s=1,a=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/s>>0)-a&255;return t+r},i.prototype.writeInt8=function(e,t,r){return e=+e,t|=0,r||T(this,e,t,1,127,-128),i.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=255&e,t+1},i.prototype.writeInt16LE=function(e,t,r){return e=+e,t|=0,r||T(this,e,t,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8):R(this,e,t,!0),t+2},i.prototype.writeInt16BE=function(e,t,r){return e=+e,t|=0,r||T(this,e,t,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=255&e):R(this,e,t,!1),t+2},i.prototype.writeInt32LE=function(e,t,r){return e=+e,t|=0,r||T(this,e,t,4,2147483647,-2147483648),i.TYPED_ARRAY_SUPPORT?(this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):S(this,e,t,!0),t+4},i.prototype.writeInt32BE=function(e,t,r){return e=+e,t|=0,r||T(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),i.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e):S(this,e,t,!1),t+4},i.prototype.writeFloatLE=function(e,t,r){return B(this,e,t,!0,r)},i.prototype.writeFloatBE=function(e,t,r){return B(this,e,t,!1,r)},i.prototype.writeDoubleLE=function(e,t,r){return O(this,e,t,!0,r)},i.prototype.writeDoubleBE=function(e,t,r){return O(this,e,t,!1,r)},i.prototype.copy=function(e,t,r,n){if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var o,s=n-r;if(this===e&&r<t&&t<n)for(o=s-1;o>=0;--o)e[o+t]=this[o+r];else if(s<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<s;++o)e[o+t]=this[o+r];else Uint8Array.prototype.set.call(e,this.subarray(r,r+s),t);return s},i.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===e.length){var o=e.charCodeAt(0);o<256&&(e=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!i.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255);if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0);var s;if("number"==typeof e)for(s=t;s<r;++s)this[s]=e;else{var a=i.isBuffer(e)?e:C(new i(e,n).toString()),u=a.length;for(s=0;s<r-t;++s)this[s+t]=a[s%u]}return this};var L=/[^+\/0-9A-Za-z-_]/g}).call(t,r(0))},function(e,t){e.exports=require("url")},function(e,t,r){"use strict";(function(e){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=n(r(11)),s=n(r(18)),a=n(r(2)),u=n(r(30)),f=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e){if("string"!=typeof e.apiKey)throw new Error("apiKey is not a string");if("string"!=typeof e.sharedSecret)throw new Error("sharedSecret is not a string");if("string"!=typeof e.redirectUri)throw new Error("redirectUri is not a string")}(e),this.apiKey=e.apiKey,this.redirectUri=e.redirectUri,this.scopes=e.scopes||"read_content",this.sharedSecret=e.sharedSecret,this.storeStrategy=e.storeStrategy||new u.default,this.timeout=e.timeout||6e4}return o(t,null,[{key:"generateNonce",value:function(){return s.default.randomBytes(16).toString("hex")}}]),o(t,[{key:"generateNonce",value:function(){return t.generateNonce()}},{key:"generateAuthorizationUrl",value:function(e,r){var n=r||{},o=n.nonce,i=n.scopes;i=i||this.scopes,o=o||t.generateNonce();var s={scope:Array.isArray(i)?i.join(","):i,state:o,redirect_uri:this.redirectUri,client_id:this.apiKey};return a.default.format({pathname:"/admin/oauth/authorize",hostname:e+".myshopify.com",protocol:"https:",query:s})}},{key:"verifyHMAC",value:function(e){e.hmac,e.signature;var t=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["hmac","signature"]),r=Object.keys(t).map(function(t){var r=Array.isArray(e[t])?'["'+e[t].join('", "')+'"]':String(e[t]);return function(e){return e.replace(/[%&=]/g,encodeURIComponent)}(t)+"="+function(e){return e.replace(/[%&]/g,encodeURIComponent)}(r)}).sort();return s.default.createHmac("sha256",this.sharedSecret).update(r.join("&")).digest("hex")===e.hmac}},{key:"getAccessToken",value:function(t,r){var n=this;return new Promise(function(o,s){var a=JSON.stringify({client_secret:n.sharedSecret,client_id:n.apiKey,code:r}),u=i.default.request({headers:{"Content-Length":e.byteLength(a),"Content-Type":"application/json",Accept:"application/json"},path:"/admin/oauth/access_token",hostname:t,method:"POST"}),f=setTimeout(function(){u.abort(),f=null,s(new Error("Request timed out"))},n.timeout);u.on("response",function(e){var t=e.statusCode,r="";e.setEncoding("utf8"),e.on("data",function(e){return r+=e}),e.on("end",function(){if(f)if(clearTimeout(f),200!==t){var e=new Error("Failed to get Shopify access token");e.responseBody=r,e.statusCode=t,s(e)}else try{var n=JSON.parse(r).access_token;o(n)}catch(e){var i=new Error("Failed to parse the response body");i.responseBody=r,i.statusCode=t,s(i)}})}),u.on("error",function(e){f&&(clearTimeout(f),s(e))}),u.end(a)})}},{key:"getByUserId",value:function(e){return this.storeStrategy.getByUserId(e)}},{key:"getByShopName",value:function(e){return this.storeStrategy.getByShopName(e)}},{key:"store",value:function(e,t,r){return this.storeStrategy.store(e,t,r)}}]),t}();t.default=f}).call(t,r(1).Buffer)},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===r||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(){y&&p&&(y=!1,p.length?l=p.concat(l):d=-1,l.length&&s())}function s(){if(!y){var e=o(i);y=!0;for(var t=l.length;t;){for(p=l,l=[];++d<t;)p&&p[d].run();d=-1,t=l.length}p=null,y=!1,function(e){if(c===clearTimeout)return clearTimeout(e);if((c===n||!c)&&clearTimeout)return c=clearTimeout,clearTimeout(e);try{c(e)}catch(t){try{return c.call(null,e)}catch(t){return c.call(this,e)}}}(e)}}function a(e,t){this.fun=e,this.array=t}function u(){}var f,c,h=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:r}catch(e){f=r}try{c="function"==typeof clearTimeout?clearTimeout:n}catch(e){c=n}}();var p,l=[],y=!1,d=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new a(e,t)),1!==l.length||y||o(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=u,h.addListener=u,h.once=u,h.off=u,h.removeListener=u,h.removeAllListeners=u,h.emit=u,h.prependListener=u,h.prependOnceListener=u,h.listeners=function(e){return[]},h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(e,t,r){(function(e){function r(){if(void 0!==i)return i;if(e.XMLHttpRequest){i=new e.XMLHttpRequest;try{i.open("GET",e.XDomainRequest?"/":"https://example.com")}catch(e){i=null}}else i=null;return i}function n(e){var t=r();if(!t)return!1;try{return t.responseType=e,t.responseType===e}catch(e){}return!1}function o(e){return"function"==typeof e}t.fetch=o(e.fetch)&&o(e.ReadableStream),t.blobConstructor=!1;try{new Blob([new ArrayBuffer(1)]),t.blobConstructor=!0}catch(e){}var i,s=void 0!==e.ArrayBuffer,a=s&&o(e.ArrayBuffer.prototype.slice);t.arraybuffer=t.fetch||s&&n("arraybuffer"),t.msstream=!t.fetch&&a&&n("ms-stream"),t.mozchunkedarraybuffer=!t.fetch&&s&&n("moz-chunked-arraybuffer"),t.overrideMimeType=t.fetch||!!r()&&o(r().overrideMimeType),t.vbArray=o(e.VBArray),i=null}).call(t,r(0))},function(e,t){e.exports=require("inherits")},function(e,t){e.exports=require("readable-stream")},function(e,t){e.exports=require("base64-js")},function(e,t){e.exports=require("ieee754")},function(e,t){e.exports=require("isarray")},function(e,t,r){function n(e){if("string"==typeof e&&(e=i.parse(e)),e.protocol||(e.protocol="https:"),"https:"!==e.protocol)throw new Error('Protocol "'+e.protocol+'" not supported. Expected "https:"');return e}var o=r(12),i=r(2),s=e.exports;for(var a in o)o.hasOwnProperty(a)&&(s[a]=o[a]);s.request=function(e,t){return e=n(e),o.request.call(this,e,t)},s.get=function(e,t){return e=n(e),o.get.call(this,e,t)}},function(e,t,r){(function(e){var n=r(13),o=r(16),i=r(17),s=r(2),a=t;a.request=function(t,r){t="string"==typeof t?s.parse(t):o(t);var i=-1===e.location.protocol.search(/^https?:$/)?"http:":"",a=t.protocol||i,u=t.hostname||t.host,f=t.port,c=t.path||"/";u&&-1!==u.indexOf(":")&&(u="["+u+"]"),t.url=(u?a+"//"+u:"")+(f?":"+f:"")+c,t.method=(t.method||"GET").toUpperCase(),t.headers=t.headers||{};var h=new n(t);return r&&h.on("response",r),h},a.get=function(e,t){var r=a.request(e,t);return r.end(),r},a.Agent=function(){},a.Agent.defaultMaxSockets=4,a.STATUS_CODES=i,a.METHODS=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"]}).call(t,r(0))},function(e,t,r){(function(t,n,o){var i=r(5),s=r(6),a=r(14),u=r(7),f=r(15),c=a.IncomingMessage,h=a.readyStates,p=e.exports=function(e){var r=this;u.Writable.call(r),r._opts=e,r._body=[],r._headers={},e.auth&&r.setHeader("Authorization","Basic "+new t(e.auth).toString("base64")),Object.keys(e.headers).forEach(function(t){r.setHeader(t,e.headers[t])});var n,o=!0;if("disable-fetch"===e.mode||"timeout"in e)o=!1,n=!0;else if("prefer-streaming"===e.mode)n=!1;else if("allow-wrong-content-type"===e.mode)n=!i.overrideMimeType;else{if(e.mode&&"default"!==e.mode&&"prefer-fast"!==e.mode)throw new Error("Invalid value for opts.mode");n=!0}r._mode=function(e,t){return i.fetch&&t?"fetch":i.mozchunkedarraybuffer?"moz-chunked-arraybuffer":i.msstream?"ms-stream":i.arraybuffer&&e?"arraybuffer":i.vbArray&&e?"text:vbarray":"text"}(n,o),r.on("finish",function(){r._onFinish()})};s(p,u.Writable),p.prototype.setHeader=function(e,t){var r=e.toLowerCase();-1===l.indexOf(r)&&(this._headers[r]={name:e,value:t})},p.prototype.getHeader=function(e){var t=this._headers[e.toLowerCase()];return t?t.value:null},p.prototype.removeHeader=function(e){delete this._headers[e.toLowerCase()]},p.prototype._onFinish=function(){var e=this;if(!e._destroyed){var r=e._opts,s=e._headers,a=null;"GET"!==r.method&&"HEAD"!==r.method&&(a=i.blobConstructor?new n.Blob(e._body.map(function(e){return f(e)}),{type:(s["content-type"]||{}).value||""}):t.concat(e._body).toString());var u=[];if(Object.keys(s).forEach(function(e){var t=s[e].name,r=s[e].value;Array.isArray(r)?r.forEach(function(e){u.push([t,e])}):u.push([t,r])}),"fetch"===e._mode)n.fetch(e._opts.url,{method:e._opts.method,headers:u,body:a||void 0,mode:"cors",credentials:r.withCredentials?"include":"same-origin"}).then(function(t){e._fetchResponse=t,e._connect()},function(t){e.emit("error",t)});else{var c=e._xhr=new n.XMLHttpRequest;try{c.open(e._opts.method,e._opts.url,!0)}catch(t){return void o.nextTick(function(){e.emit("error",t)})}"responseType"in c&&(c.responseType=e._mode.split(":")[0]),"withCredentials"in c&&(c.withCredentials=!!r.withCredentials),"text"===e._mode&&"overrideMimeType"in c&&c.overrideMimeType("text/plain; charset=x-user-defined"),"timeout"in r&&(c.timeout=r.timeout,c.ontimeout=function(){e.emit("timeout")}),u.forEach(function(e){c.setRequestHeader(e[0],e[1])}),e._response=null,c.onreadystatechange=function(){switch(c.readyState){case h.LOADING:case h.DONE:e._onXHRProgress()}},"moz-chunked-arraybuffer"===e._mode&&(c.onprogress=function(){e._onXHRProgress()}),c.onerror=function(){e._destroyed||e.emit("error",new Error("XHR error"))};try{c.send(a)}catch(t){return void o.nextTick(function(){e.emit("error",t)})}}}},p.prototype._onXHRProgress=function(){(function(e){try{var t=e.status;return null!==t&&0!==t}catch(e){return!1}})(this._xhr)&&!this._destroyed&&(this._response||this._connect(),this._response._onXHRProgress())},p.prototype._connect=function(){var e=this;e._destroyed||(e._response=new c(e._xhr,e._fetchResponse,e._mode),e._response.on("error",function(t){e.emit("error",t)}),e.emit("response",e._response))},p.prototype._write=function(e,t,r){this._body.push(e),r()},p.prototype.abort=p.prototype.destroy=function(){this._destroyed=!0,this._response&&(this._response._destroyed=!0),this._xhr&&this._xhr.abort()},p.prototype.end=function(e,t,r){"function"==typeof e&&(r=e,e=void 0),u.Writable.prototype.end.call(this,e,t,r)},p.prototype.flushHeaders=function(){},p.prototype.setTimeout=function(){},p.prototype.setNoDelay=function(){},p.prototype.setSocketKeepAlive=function(){};var l=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","date","dnt","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"]}).call(t,r(1).Buffer,r(0),r(4))},function(e,t,r){(function(e,n,o){var i=r(5),s=r(6),a=r(7),u=t.readyStates={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},f=t.IncomingMessage=function(t,r,o){var s=this;if(a.Readable.call(s),s._mode=o,s.headers={},s.rawHeaders=[],s.trailers={},s.rawTrailers=[],s.on("end",function(){e.nextTick(function(){s.emit("close")})}),"fetch"===o){s._fetchResponse=r,s.url=r.url,s.statusCode=r.status,s.statusMessage=r.statusText,r.headers.forEach(function(e,t){s.headers[t.toLowerCase()]=e,s.rawHeaders.push(t,e)});var u=r.body.getReader();function f(){u.read().then(function(e){s._destroyed||(e.done?s.push(null):(s.push(new n(e.value)),f()))}).catch(function(e){s.emit("error",e)})}f()}else{s._xhr=t,s._pos=0,s.url=t.responseURL,s.statusCode=t.status,s.statusMessage=t.statusText;if(t.getAllResponseHeaders().split(/\r?\n/).forEach(function(e){var t=e.match(/^([^:]+):\s*(.*)/);if(t){var r=t[1].toLowerCase();"set-cookie"===r?(void 0===s.headers[r]&&(s.headers[r]=[]),s.headers[r].push(t[2])):void 0!==s.headers[r]?s.headers[r]+=", "+t[2]:s.headers[r]=t[2],s.rawHeaders.push(t[1],t[2])}}),s._charset="x-user-defined",!i.overrideMimeType){var c=s.rawHeaders["mime-type"];if(c){var h=c.match(/;\s*charset=([^;])(;|$)/);h&&(s._charset=h[1].toLowerCase())}s._charset||(s._charset="utf-8")}}};s(f,a.Readable),f.prototype._read=function(){},f.prototype._onXHRProgress=function(){var e=this,t=e._xhr,r=null;switch(e._mode){case"text:vbarray":if(t.readyState!==u.DONE)break;try{r=new o.VBArray(t.responseBody).toArray()}catch(e){}if(null!==r){e.push(new n(r));break}case"text":try{r=t.responseText}catch(t){e._mode="text:vbarray";break}if(r.length>e._pos){var i=r.substr(e._pos);if("x-user-defined"===e._charset){for(var s=new n(i.length),a=0;a<i.length;a++)s[a]=255&i.charCodeAt(a);e.push(s)}else e.push(i,e._charset);e._pos=r.length}break;case"arraybuffer":if(t.readyState!==u.DONE||!t.response)break;r=t.response,e.push(new n(new Uint8Array(r)));break;case"moz-chunked-arraybuffer":if(r=t.response,t.readyState!==u.LOADING||!r)break;e.push(new n(new Uint8Array(r)));break;case"ms-stream":if(r=t.response,t.readyState!==u.LOADING)break;var f=new o.MSStreamReader;f.onprogress=function(){f.result.byteLength>e._pos&&(e.push(new n(new Uint8Array(f.result.slice(e._pos)))),e._pos=f.result.byteLength)},f.onload=function(){e.push(null)},f.readAsArrayBuffer(r)}e._xhr.readyState===u.DONE&&"ms-stream"!==e._mode&&e.push(null)}}).call(t,r(4),r(1).Buffer,r(0))},function(e,t){e.exports=require("to-arraybuffer")},function(e,t){e.exports=require("xtend")},function(e,t){e.exports=require("builtin-status-codes")},function(e,t,r){"use strict";t.randomBytes=t.rng=t.pseudoRandomBytes=t.prng=r(19),t.createHash=t.Hash=r(20),t.createHmac=t.Hmac=r(21);var n=r(22),o=Object.keys(n),i=["sha1","sha224","sha256","sha384","sha512","md5","rmd160"].concat(o);t.getHashes=function(){return i};var s=r(23);t.pbkdf2=s.pbkdf2,t.pbkdf2Sync=s.pbkdf2Sync;var a=r(24);t.Cipher=a.Cipher,t.createCipher=a.createCipher,t.Cipheriv=a.Cipheriv,t.createCipheriv=a.createCipheriv,t.Decipher=a.Decipher,t.createDecipher=a.createDecipher,t.Decipheriv=a.Decipheriv,t.createDecipheriv=a.createDecipheriv,t.getCiphers=a.getCiphers,t.listCiphers=a.listCiphers;var u=r(25);t.DiffieHellmanGroup=u.DiffieHellmanGroup,t.createDiffieHellmanGroup=u.createDiffieHellmanGroup,t.getDiffieHellman=u.getDiffieHellman,t.createDiffieHellman=u.createDiffieHellman,t.DiffieHellman=u.DiffieHellman;var f=r(26);t.createSign=f.createSign,t.Sign=f.Sign,t.createVerify=f.createVerify,t.Verify=f.Verify,t.createECDH=r(27);var c=r(28);t.publicEncrypt=c.publicEncrypt,t.privateEncrypt=c.privateEncrypt,t.publicDecrypt=c.publicDecrypt,t.privateDecrypt=c.privateDecrypt;var h=r(29);t.randomFill=h.randomFill,t.randomFillSync=h.randomFillSync,t.createCredentials=function(){throw new Error(["sorry, createCredentials is not implemented yet","we accept pull requests","https://github.com/crypto-browserify/crypto-browserify"].join("\n"))},t.constants={DH_CHECK_P_NOT_SAFE_PRIME:2,DH_CHECK_P_NOT_PRIME:1,DH_UNABLE_TO_CHECK_GENERATOR:4,DH_NOT_SUITABLE_GENERATOR:8,NPN_ENABLED:1,ALPN_ENABLED:1,RSA_PKCS1_PADDING:1,RSA_SSLV23_PADDING:2,RSA_NO_PADDING:3,RSA_PKCS1_OAEP_PADDING:4,RSA_X931_PADDING:5,RSA_PKCS1_PSS_PADDING:6,POINT_CONVERSION_COMPRESSED:2,POINT_CONVERSION_UNCOMPRESSED:4,POINT_CONVERSION_HYBRID:6}},function(e,t){e.exports=require("randombytes")},function(e,t){e.exports=require("create-hash")},function(e,t){e.exports=require("create-hmac")},function(e,t){e.exports=require("browserify-sign/algos")},function(e,t){e.exports=require("pbkdf2")},function(e,t){e.exports=require("browserify-cipher")},function(e,t){e.exports=require("diffie-hellman")},function(e,t){e.exports=require("browserify-sign")},function(e,t){e.exports=require("create-ecdh")},function(e,t){e.exports=require("public-encrypt")},function(e,t){e.exports=require("randomfill")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(3);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.accessTokenByShopName=new Map,this.shopNameByUserId=new Map}return n(e,[{key:"getByUserId",value:function(e){var t=this.shopNameByUserId.get(e);return t?this.getByShopName(t):Promise.resolve()}},{key:"getByShopName",value:function(e){var t=e?this.accessTokenByShopName.get(e):void 0;return Promise.resolve(t)}},{key:"store",value:function(e,t,r){return this.shopNameByUserId.set(e,t),this.accessTokenByShopName.set(t,r),Promise.resolve()}}]),e}();t.default=o}])});