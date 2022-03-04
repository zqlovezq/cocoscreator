
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools/encrypt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4a53FUndhGyoSk9t7j14C3', 'encrypt');
// Script/encrypt.js

"use strict";

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.JSEncrypt = {});
})(void 0, function (exports) {
  'use strict';

  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";

  function int2char(n) {
    return BI_RM.charAt(n);
  } //#region BIT_OPERATIONS
  // (public) this & a


  function op_and(x, y) {
    return x & y;
  } // (public) this | a


  function op_or(x, y) {
    return x | y;
  } // (public) this ^ a


  function op_xor(x, y) {
    return x ^ y;
  } // (public) this & ~a


  function op_andnot(x, y) {
    return x & ~y;
  } // return index of lowest 1-bit in x, x < 2^31


  function lbit(x) {
    if (x == 0) {
      return -1;
    }

    var r = 0;

    if ((x & 0xffff) == 0) {
      x >>= 16;
      r += 16;
    }

    if ((x & 0xff) == 0) {
      x >>= 8;
      r += 8;
    }

    if ((x & 0xf) == 0) {
      x >>= 4;
      r += 4;
    }

    if ((x & 3) == 0) {
      x >>= 2;
      r += 2;
    }

    if ((x & 1) == 0) {
      ++r;
    }

    return r;
  } // return number of 1 bits in x


  function cbit(x) {
    var r = 0;

    while (x != 0) {
      x &= x - 1;
      ++r;
    }

    return r;
  } //#endregion BIT_OPERATIONS


  var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var b64pad = "=";

  function hex2b64(h) {
    var i;
    var c;
    var ret = "";

    for (i = 0; i + 3 <= h.length; i += 3) {
      c = parseInt(h.substring(i, i + 3), 16);
      ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }

    if (i + 1 == h.length) {
      c = parseInt(h.substring(i, i + 1), 16);
      ret += b64map.charAt(c << 2);
    } else if (i + 2 == h.length) {
      c = parseInt(h.substring(i, i + 2), 16);
      ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }

    while ((ret.length & 3) > 0) {
      ret += b64pad;
    }

    return ret;
  } // convert a base64 string to hex


  function b64tohex(s) {
    var ret = "";
    var i;
    var k = 0; // b64 state, 0-3

    var slop = 0;

    for (i = 0; i < s.length; ++i) {
      if (s.charAt(i) == b64pad) {
        break;
      }

      var v = b64map.indexOf(s.charAt(i));

      if (v < 0) {
        continue;
      }

      if (k == 0) {
        ret += int2char(v >> 2);
        slop = v & 3;
        k = 1;
      } else if (k == 1) {
        ret += int2char(slop << 2 | v >> 4);
        slop = v & 0xf;
        k = 2;
      } else if (k == 2) {
        ret += int2char(slop);
        ret += int2char(v >> 2);
        slop = v & 3;
        k = 3;
      } else {
        ret += int2char(slop << 2 | v >> 4);
        ret += int2char(v & 0xf);
        k = 0;
      }
    }

    if (k == 1) {
      ret += int2char(slop << 2);
    }

    return ret;
  }
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  /* global Reflect, Promise */


  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  function __extends(d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  } // Hex JavaScript decoder
  // Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
  // Permission to use, copy, modify, and/or distribute this software for any
  // purpose with or without fee is hereby granted, provided that the above
  // copyright notice and this permission notice appear in all copies.
  //
  // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

  /*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */


  var decoder;
  var Hex = {
    decode: function decode(a) {
      var i;

      if (decoder === undefined) {
        var hex = "0123456789ABCDEF";
        var ignore = " \f\n\r\t\xA0\u2028\u2029";
        decoder = {};

        for (i = 0; i < 16; ++i) {
          decoder[hex.charAt(i)] = i;
        }

        hex = hex.toLowerCase();

        for (i = 10; i < 16; ++i) {
          decoder[hex.charAt(i)] = i;
        }

        for (i = 0; i < ignore.length; ++i) {
          decoder[ignore.charAt(i)] = -1;
        }
      }

      var out = [];
      var bits = 0;
      var char_count = 0;

      for (i = 0; i < a.length; ++i) {
        var c = a.charAt(i);

        if (c == "=") {
          break;
        }

        c = decoder[c];

        if (c == -1) {
          continue;
        }

        if (c === undefined) {
          throw new Error("Illegal character at offset " + i);
        }

        bits |= c;

        if (++char_count >= 2) {
          out[out.length] = bits;
          bits = 0;
          char_count = 0;
        } else {
          bits <<= 4;
        }
      }

      if (char_count) {
        throw new Error("Hex encoding incomplete: 4 bits missing");
      }

      return out;
    }
  }; // Base64 JavaScript decoder
  // Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
  // Permission to use, copy, modify, and/or distribute this software for any
  // purpose with or without fee is hereby granted, provided that the above
  // copyright notice and this permission notice appear in all copies.
  //
  // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

  /*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */

  var decoder$1;
  var Base64 = {
    decode: function decode(a) {
      var i;

      if (decoder$1 === undefined) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var ignore = "= \f\n\r\t\xA0\u2028\u2029";
        decoder$1 = Object.create(null);

        for (i = 0; i < 64; ++i) {
          decoder$1[b64.charAt(i)] = i;
        }

        for (i = 0; i < ignore.length; ++i) {
          decoder$1[ignore.charAt(i)] = -1;
        }
      }

      var out = [];
      var bits = 0;
      var char_count = 0;

      for (i = 0; i < a.length; ++i) {
        var c = a.charAt(i);

        if (c == "=") {
          break;
        }

        c = decoder$1[c];

        if (c == -1) {
          continue;
        }

        if (c === undefined) {
          throw new Error("Illegal character at offset " + i);
        }

        bits |= c;

        if (++char_count >= 4) {
          out[out.length] = bits >> 16;
          out[out.length] = bits >> 8 & 0xFF;
          out[out.length] = bits & 0xFF;
          bits = 0;
          char_count = 0;
        } else {
          bits <<= 6;
        }
      }

      switch (char_count) {
        case 1:
          throw new Error("Base64 encoding incomplete: at least 2 bits missing");

        case 2:
          out[out.length] = bits >> 10;
          break;

        case 3:
          out[out.length] = bits >> 16;
          out[out.length] = bits >> 8 & 0xFF;
          break;
      }

      return out;
    },
    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
    unarmor: function unarmor(a) {
      var m = Base64.re.exec(a);

      if (m) {
        if (m[1]) {
          a = m[1];
        } else if (m[2]) {
          a = m[2];
        } else {
          throw new Error("RegExp out of sync");
        }
      }

      return Base64.decode(a);
    }
  }; // Big integer base-10 printing library
  // Copyright (c) 2014 Lapo Luchini <lapo@lapo.it>
  // Permission to use, copy, modify, and/or distribute this software for any
  // purpose with or without fee is hereby granted, provided that the above
  // copyright notice and this permission notice appear in all copies.
  //
  // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

  /*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */

  var max = 10000000000000; // biggest integer that can still fit 2^53 when multiplied by 256

  var Int10 =
  /** @class */
  function () {
    function Int10(value) {
      this.buf = [+value || 0];
    }

    Int10.prototype.mulAdd = function (m, c) {
      // assert(m <= 256)
      var b = this.buf;
      var l = b.length;
      var i;
      var t;

      for (i = 0; i < l; ++i) {
        t = b[i] * m + c;

        if (t < max) {
          c = 0;
        } else {
          c = 0 | t / max;
          t -= c * max;
        }

        b[i] = t;
      }

      if (c > 0) {
        b[i] = c;
      }
    };

    Int10.prototype.sub = function (c) {
      // assert(m <= 256)
      var b = this.buf;
      var l = b.length;
      var i;
      var t;

      for (i = 0; i < l; ++i) {
        t = b[i] - c;

        if (t < 0) {
          t += max;
          c = 1;
        } else {
          c = 0;
        }

        b[i] = t;
      }

      while (b[b.length - 1] === 0) {
        b.pop();
      }
    };

    Int10.prototype.toString = function (base) {
      if ((base || 10) != 10) {
        throw new Error("only base 10 is supported");
      }

      var b = this.buf;
      var s = b[b.length - 1].toString();

      for (var i = b.length - 2; i >= 0; --i) {
        s += (max + b[i]).toString().substring(1);
      }

      return s;
    };

    Int10.prototype.valueOf = function () {
      var b = this.buf;
      var v = 0;

      for (var i = b.length - 1; i >= 0; --i) {
        v = v * max + b[i];
      }

      return v;
    };

    Int10.prototype.simplify = function () {
      var b = this.buf;
      return b.length == 1 ? b[0] : this;
    };

    return Int10;
  }(); // ASN.1 JavaScript decoder


  var ellipsis = "\u2026";
  var reTimeS = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
  var reTimeL = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

  function stringCut(str, len) {
    if (str.length > len) {
      str = str.substring(0, len) + ellipsis;
    }

    return str;
  }

  var Stream =
  /** @class */
  function () {
    function Stream(enc, pos) {
      this.hexDigits = "0123456789ABCDEF";

      if (enc instanceof Stream) {
        this.enc = enc.enc;
        this.pos = enc.pos;
      } else {
        // enc should be an array or a binary string
        this.enc = enc;
        this.pos = pos;
      }
    }

    Stream.prototype.get = function (pos) {
      if (pos === undefined) {
        pos = this.pos++;
      }

      if (pos >= this.enc.length) {
        throw new Error("Requesting byte offset " + pos + " on a stream of length " + this.enc.length);
      }

      return "string" === typeof this.enc ? this.enc.charCodeAt(pos) : this.enc[pos];
    };

    Stream.prototype.hexByte = function (b) {
      return this.hexDigits.charAt(b >> 4 & 0xF) + this.hexDigits.charAt(b & 0xF);
    };

    Stream.prototype.hexDump = function (start, end, raw) {
      var s = "";

      for (var i = start; i < end; ++i) {
        s += this.hexByte(this.get(i));

        if (raw !== true) {
          switch (i & 0xF) {
            case 0x7:
              s += "  ";
              break;

            case 0xF:
              s += "\n";
              break;

            default:
              s += " ";
          }
        }
      }

      return s;
    };

    Stream.prototype.isASCII = function (start, end) {
      for (var i = start; i < end; ++i) {
        var c = this.get(i);

        if (c < 32 || c > 176) {
          return false;
        }
      }

      return true;
    };

    Stream.prototype.parseStringISO = function (start, end) {
      var s = "";

      for (var i = start; i < end; ++i) {
        s += String.fromCharCode(this.get(i));
      }

      return s;
    };

    Stream.prototype.parseStringUTF = function (start, end) {
      var s = "";

      for (var i = start; i < end;) {
        var c = this.get(i++);

        if (c < 128) {
          s += String.fromCharCode(c);
        } else if (c > 191 && c < 224) {
          s += String.fromCharCode((c & 0x1F) << 6 | this.get(i++) & 0x3F);
        } else {
          s += String.fromCharCode((c & 0x0F) << 12 | (this.get(i++) & 0x3F) << 6 | this.get(i++) & 0x3F);
        }
      }

      return s;
    };

    Stream.prototype.parseStringBMP = function (start, end) {
      var str = "";
      var hi;
      var lo;

      for (var i = start; i < end;) {
        hi = this.get(i++);
        lo = this.get(i++);
        str += String.fromCharCode(hi << 8 | lo);
      }

      return str;
    };

    Stream.prototype.parseTime = function (start, end, shortYear) {
      var s = this.parseStringISO(start, end);
      var m = (shortYear ? reTimeS : reTimeL).exec(s);

      if (!m) {
        return "Unrecognized time: " + s;
      }

      if (shortYear) {
        // to avoid querying the timer, use the fixed range [1970, 2069]
        // it will conform with ITU X.400 [-10, +40] sliding window until 2030
        m[1] = +m[1];
        m[1] += +m[1] < 70 ? 2000 : 1900;
      }

      s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];

      if (m[5]) {
        s += ":" + m[5];

        if (m[6]) {
          s += ":" + m[6];

          if (m[7]) {
            s += "." + m[7];
          }
        }
      }

      if (m[8]) {
        s += " UTC";

        if (m[8] != "Z") {
          s += m[8];

          if (m[9]) {
            s += ":" + m[9];
          }
        }
      }

      return s;
    };

    Stream.prototype.parseInteger = function (start, end) {
      var v = this.get(start);
      var neg = v > 127;
      var pad = neg ? 255 : 0;
      var len;
      var s = ""; // skip unuseful bits (not allowed in DER)

      while (v == pad && ++start < end) {
        v = this.get(start);
      }

      len = end - start;

      if (len === 0) {
        return neg ? -1 : 0;
      } // show bit length of huge integers


      if (len > 4) {
        s = v;
        len <<= 3;

        while (((+s ^ pad) & 0x80) == 0) {
          s = +s << 1;
          --len;
        }

        s = "(" + len + " bit)\n";
      } // decode the integer


      if (neg) {
        v = v - 256;
      }

      var n = new Int10(v);

      for (var i = start + 1; i < end; ++i) {
        n.mulAdd(256, this.get(i));
      }

      return s + n.toString();
    };

    Stream.prototype.parseBitString = function (start, end, maxLength) {
      var unusedBit = this.get(start);
      var lenBit = (end - start - 1 << 3) - unusedBit;
      var intro = "(" + lenBit + " bit)\n";
      var s = "";

      for (var i = start + 1; i < end; ++i) {
        var b = this.get(i);
        var skip = i == end - 1 ? unusedBit : 0;

        for (var j = 7; j >= skip; --j) {
          s += b >> j & 1 ? "1" : "0";
        }

        if (s.length > maxLength) {
          return intro + stringCut(s, maxLength);
        }
      }

      return intro + s;
    };

    Stream.prototype.parseOctetString = function (start, end, maxLength) {
      if (this.isASCII(start, end)) {
        return stringCut(this.parseStringISO(start, end), maxLength);
      }

      var len = end - start;
      var s = "(" + len + " byte)\n";
      maxLength /= 2; // we work in bytes

      if (len > maxLength) {
        end = start + maxLength;
      }

      for (var i = start; i < end; ++i) {
        s += this.hexByte(this.get(i));
      }

      if (len > maxLength) {
        s += ellipsis;
      }

      return s;
    };

    Stream.prototype.parseOID = function (start, end, maxLength) {
      var s = "";
      var n = new Int10();
      var bits = 0;

      for (var i = start; i < end; ++i) {
        var v = this.get(i);
        n.mulAdd(128, v & 0x7F);
        bits += 7;

        if (!(v & 0x80)) {
          if (s === "") {
            n = n.simplify();

            if (n instanceof Int10) {
              n.sub(80);
              s = "2." + n.toString();
            } else {
              var m = n < 80 ? n < 40 ? 0 : 1 : 2;
              s = m + "." + (n - m * 40);
            }
          } else {
            s += "." + n.toString();
          }

          if (s.length > maxLength) {
            return stringCut(s, maxLength);
          }

          n = new Int10();
          bits = 0;
        }
      }

      if (bits > 0) {
        s += ".incomplete";
      }

      return s;
    };

    return Stream;
  }();

  var ASN1 =
  /** @class */
  function () {
    function ASN1(stream, header, length, tag, sub) {
      if (!(tag instanceof ASN1Tag)) {
        throw new Error("Invalid tag value.");
      }

      this.stream = stream;
      this.header = header;
      this.length = length;
      this.tag = tag;
      this.sub = sub;
    }

    ASN1.prototype.typeName = function () {
      switch (this.tag.tagClass) {
        case 0:
          // universal
          switch (this.tag.tagNumber) {
            case 0x00:
              return "EOC";

            case 0x01:
              return "BOOLEAN";

            case 0x02:
              return "INTEGER";

            case 0x03:
              return "BIT_STRING";

            case 0x04:
              return "OCTET_STRING";

            case 0x05:
              return "NULL";

            case 0x06:
              return "OBJECT_IDENTIFIER";

            case 0x07:
              return "ObjectDescriptor";

            case 0x08:
              return "EXTERNAL";

            case 0x09:
              return "REAL";

            case 0x0A:
              return "ENUMERATED";

            case 0x0B:
              return "EMBEDDED_PDV";

            case 0x0C:
              return "UTF8String";

            case 0x10:
              return "SEQUENCE";

            case 0x11:
              return "SET";

            case 0x12:
              return "NumericString";

            case 0x13:
              return "PrintableString";
            // ASCII subset

            case 0x14:
              return "TeletexString";
            // aka T61String

            case 0x15:
              return "VideotexString";

            case 0x16:
              return "IA5String";
            // ASCII

            case 0x17:
              return "UTCTime";

            case 0x18:
              return "GeneralizedTime";

            case 0x19:
              return "GraphicString";

            case 0x1A:
              return "VisibleString";
            // ASCII subset

            case 0x1B:
              return "GeneralString";

            case 0x1C:
              return "UniversalString";

            case 0x1E:
              return "BMPString";
          }

          return "Universal_" + this.tag.tagNumber.toString();

        case 1:
          return "Application_" + this.tag.tagNumber.toString();

        case 2:
          return "[" + this.tag.tagNumber.toString() + "]";
        // Context

        case 3:
          return "Private_" + this.tag.tagNumber.toString();
      }
    };

    ASN1.prototype.content = function (maxLength) {
      if (this.tag === undefined) {
        return null;
      }

      if (maxLength === undefined) {
        maxLength = Infinity;
      }

      var content = this.posContent();
      var len = Math.abs(this.length);

      if (!this.tag.isUniversal()) {
        if (this.sub !== null) {
          return "(" + this.sub.length + " elem)";
        }

        return this.stream.parseOctetString(content, content + len, maxLength);
      }

      switch (this.tag.tagNumber) {
        case 0x01:
          // BOOLEAN
          return this.stream.get(content) === 0 ? "false" : "true";

        case 0x02:
          // INTEGER
          return this.stream.parseInteger(content, content + len);

        case 0x03:
          // BIT_STRING
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(content, content + len, maxLength);

        case 0x04:
          // OCTET_STRING
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(content, content + len, maxLength);
        // case 0x05: // NULL

        case 0x06:
          // OBJECT_IDENTIFIER
          return this.stream.parseOID(content, content + len, maxLength);
        // case 0x07: // ObjectDescriptor
        // case 0x08: // EXTERNAL
        // case 0x09: // REAL
        // case 0x0A: // ENUMERATED
        // case 0x0B: // EMBEDDED_PDV

        case 0x10: // SEQUENCE

        case 0x11:
          // SET
          if (this.sub !== null) {
            return "(" + this.sub.length + " elem)";
          } else {
            return "(no elem)";
          }

        case 0x0C:
          // UTF8String
          return stringCut(this.stream.parseStringUTF(content, content + len), maxLength);

        case 0x12: // NumericString

        case 0x13: // PrintableString

        case 0x14: // TeletexString

        case 0x15: // VideotexString

        case 0x16: // IA5String
        // case 0x19: // GraphicString

        case 0x1A:
          // VisibleString
          // case 0x1B: // GeneralString
          // case 0x1C: // UniversalString
          return stringCut(this.stream.parseStringISO(content, content + len), maxLength);

        case 0x1E:
          // BMPString
          return stringCut(this.stream.parseStringBMP(content, content + len), maxLength);

        case 0x17: // UTCTime

        case 0x18:
          // GeneralizedTime
          return this.stream.parseTime(content, content + len, this.tag.tagNumber == 0x17);
      }

      return null;
    };

    ASN1.prototype.toString = function () {
      return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub === null ? "null" : this.sub.length) + "]";
    };

    ASN1.prototype.toPrettyString = function (indent) {
      if (indent === undefined) {
        indent = "";
      }

      var s = indent + this.typeName() + " @" + this.stream.pos;

      if (this.length >= 0) {
        s += "+";
      }

      s += this.length;

      if (this.tag.tagConstructed) {
        s += " (constructed)";
      } else if (this.tag.isUniversal() && (this.tag.tagNumber == 0x03 || this.tag.tagNumber == 0x04) && this.sub !== null) {
        s += " (encapsulates)";
      }

      s += "\n";

      if (this.sub !== null) {
        indent += "  ";

        for (var i = 0, max = this.sub.length; i < max; ++i) {
          s += this.sub[i].toPrettyString(indent);
        }
      }

      return s;
    };

    ASN1.prototype.posStart = function () {
      return this.stream.pos;
    };

    ASN1.prototype.posContent = function () {
      return this.stream.pos + this.header;
    };

    ASN1.prototype.posEnd = function () {
      return this.stream.pos + this.header + Math.abs(this.length);
    };

    ASN1.prototype.toHexString = function () {
      return this.stream.hexDump(this.posStart(), this.posEnd(), true);
    };

    ASN1.decodeLength = function (stream) {
      var buf = stream.get();
      var len = buf & 0x7F;

      if (len == buf) {
        return len;
      } // no reason to use Int10, as it would be a huge buffer anyways


      if (len > 6) {
        throw new Error("Length over 48 bits not supported at position " + (stream.pos - 1));
      }

      if (len === 0) {
        return null;
      } // undefined


      buf = 0;

      for (var i = 0; i < len; ++i) {
        buf = buf * 256 + stream.get();
      }

      return buf;
    };
    /**
     * Retrieve the hexadecimal value (as a string) of the current ASN.1 element
     * @returns {string}
     * @public
     */


    ASN1.prototype.getHexStringValue = function () {
      var hexString = this.toHexString();
      var offset = this.header * 2;
      var length = this.length * 2;
      return hexString.substr(offset, length);
    };

    ASN1.decode = function (str) {
      var stream;

      if (!(str instanceof Stream)) {
        stream = new Stream(str, 0);
      } else {
        stream = str;
      }

      var streamStart = new Stream(stream);
      var tag = new ASN1Tag(stream);
      var len = ASN1.decodeLength(stream);
      var start = stream.pos;
      var header = start - streamStart.pos;
      var sub = null;

      var getSub = function getSub() {
        var ret = [];

        if (len !== null) {
          // definite length
          var end = start + len;

          while (stream.pos < end) {
            ret[ret.length] = ASN1.decode(stream);
          }

          if (stream.pos != end) {
            throw new Error("Content size is not correct for container starting at offset " + start);
          }
        } else {
          // undefined length
          try {
            for (;;) {
              var s = ASN1.decode(stream);

              if (s.tag.isEOC()) {
                break;
              }

              ret[ret.length] = s;
            }

            len = start - stream.pos; // undefined lengths are represented as negative values
          } catch (e) {
            throw new Error("Exception while decoding undefined length content: " + e);
          }
        }

        return ret;
      };

      if (tag.tagConstructed) {
        // must have valid content
        sub = getSub();
      } else if (tag.isUniversal() && (tag.tagNumber == 0x03 || tag.tagNumber == 0x04)) {
        // sometimes BitString and OctetString are used to encapsulate ASN.1
        try {
          if (tag.tagNumber == 0x03) {
            if (stream.get() != 0) {
              throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
            }
          }

          sub = getSub();

          for (var i = 0; i < sub.length; ++i) {
            if (sub[i].tag.isEOC()) {
              throw new Error("EOC is not supposed to be actual content.");
            }
          }
        } catch (e) {
          // but silently ignore when they don't
          sub = null;
        }
      }

      if (sub === null) {
        if (len === null) {
          throw new Error("We can't skip over an invalid tag with undefined length at offset " + start);
        }

        stream.pos = start + Math.abs(len);
      }

      return new ASN1(streamStart, header, len, tag, sub);
    };

    return ASN1;
  }();

  var ASN1Tag =
  /** @class */
  function () {
    function ASN1Tag(stream) {
      var buf = stream.get();
      this.tagClass = buf >> 6;
      this.tagConstructed = (buf & 0x20) !== 0;
      this.tagNumber = buf & 0x1F;

      if (this.tagNumber == 0x1F) {
        var n = new Int10();

        do {
          buf = stream.get();
          n.mulAdd(128, buf & 0x7F);
        } while (buf & 0x80);

        this.tagNumber = n.simplify();
      }
    }

    ASN1Tag.prototype.isUniversal = function () {
      return this.tagClass === 0x00;
    };

    ASN1Tag.prototype.isEOC = function () {
      return this.tagClass === 0x00 && this.tagNumber === 0x00;
    };

    return ASN1Tag;
  }(); // Copyright (c) 2005  Tom Wu
  // Bits per digit


  var dbits; // JavaScript engine analysis

  var canary = 0xdeadbeefcafe;
  var j_lm = (canary & 0xffffff) == 0xefcafe; //#region

  var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
  var lplim = (1 << 26) / lowprimes[lowprimes.length - 1]; //#endregion
  // (public) Constructor

  var BigInteger =
  /** @class */
  function () {
    function BigInteger(a, b, c) {
      if (a != null) {
        if ("number" == typeof a) {
          this.fromNumber(a, b, c);
        } else if (b == null && "string" != typeof a) {
          this.fromString(a, 256);
        } else {
          this.fromString(a, b);
        }
      }
    } //#region PUBLIC
    // BigInteger.prototype.toString = bnToString;
    // (public) return string representation in given radix


    BigInteger.prototype.toString = function (b) {
      if (this.s < 0) {
        return "-" + this.negate().toString(b);
      }

      var k;

      if (b == 16) {
        k = 4;
      } else if (b == 8) {
        k = 3;
      } else if (b == 2) {
        k = 1;
      } else if (b == 32) {
        k = 5;
      } else if (b == 4) {
        k = 2;
      } else {
        return this.toRadix(b);
      }

      var km = (1 << k) - 1;
      var d;
      var m = false;
      var r = "";
      var i = this.t;
      var p = this.DB - i * this.DB % k;

      if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) > 0) {
          m = true;
          r = int2char(d);
        }

        while (i >= 0) {
          if (p < k) {
            d = (this[i] & (1 << p) - 1) << k - p;
            d |= this[--i] >> (p += this.DB - k);
          } else {
            d = this[i] >> (p -= k) & km;

            if (p <= 0) {
              p += this.DB;
              --i;
            }
          }

          if (d > 0) {
            m = true;
          }

          if (m) {
            r += int2char(d);
          }
        }
      }

      return m ? r : "0";
    }; // BigInteger.prototype.negate = bnNegate;
    // (public) -this


    BigInteger.prototype.negate = function () {
      var r = nbi();
      BigInteger.ZERO.subTo(this, r);
      return r;
    }; // BigInteger.prototype.abs = bnAbs;
    // (public) |this|


    BigInteger.prototype.abs = function () {
      return this.s < 0 ? this.negate() : this;
    }; // BigInteger.prototype.compareTo = bnCompareTo;
    // (public) return + if this > a, - if this < a, 0 if equal


    BigInteger.prototype.compareTo = function (a) {
      var r = this.s - a.s;

      if (r != 0) {
        return r;
      }

      var i = this.t;
      r = i - a.t;

      if (r != 0) {
        return this.s < 0 ? -r : r;
      }

      while (--i >= 0) {
        if ((r = this[i] - a[i]) != 0) {
          return r;
        }
      }

      return 0;
    }; // BigInteger.prototype.bitLength = bnBitLength;
    // (public) return the number of bits in "this"


    BigInteger.prototype.bitLength = function () {
      if (this.t <= 0) {
        return 0;
      }

      return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
    }; // BigInteger.prototype.mod = bnMod;
    // (public) this mod a


    BigInteger.prototype.mod = function (a) {
      var r = nbi();
      this.abs().divRemTo(a, null, r);

      if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
        a.subTo(r, r);
      }

      return r;
    }; // BigInteger.prototype.modPowInt = bnModPowInt;
    // (public) this^e % m, 0 <= e < 2^32


    BigInteger.prototype.modPowInt = function (e, m) {
      var z;

      if (e < 256 || m.isEven()) {
        z = new Classic(m);
      } else {
        z = new Montgomery(m);
      }

      return this.exp(e, z);
    }; // BigInteger.prototype.clone = bnClone;
    // (public)


    BigInteger.prototype.clone = function () {
      var r = nbi();
      this.copyTo(r);
      return r;
    }; // BigInteger.prototype.intValue = bnIntValue;
    // (public) return value as integer


    BigInteger.prototype.intValue = function () {
      if (this.s < 0) {
        if (this.t == 1) {
          return this[0] - this.DV;
        } else if (this.t == 0) {
          return -1;
        }
      } else if (this.t == 1) {
        return this[0];
      } else if (this.t == 0) {
        return 0;
      } // assumes 16 < DB < 32


      return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
    }; // BigInteger.prototype.byteValue = bnByteValue;
    // (public) return value as byte


    BigInteger.prototype.byteValue = function () {
      return this.t == 0 ? this.s : this[0] << 24 >> 24;
    }; // BigInteger.prototype.shortValue = bnShortValue;
    // (public) return value as short (assumes DB>=16)


    BigInteger.prototype.shortValue = function () {
      return this.t == 0 ? this.s : this[0] << 16 >> 16;
    }; // BigInteger.prototype.signum = bnSigNum;
    // (public) 0 if this == 0, 1 if this > 0


    BigInteger.prototype.signum = function () {
      if (this.s < 0) {
        return -1;
      } else if (this.t <= 0 || this.t == 1 && this[0] <= 0) {
        return 0;
      } else {
        return 1;
      }
    }; // BigInteger.prototype.toByteArray = bnToByteArray;
    // (public) convert to bigendian byte array


    BigInteger.prototype.toByteArray = function () {
      var i = this.t;
      var r = [];
      r[0] = this.s;
      var p = this.DB - i * this.DB % 8;
      var d;
      var k = 0;

      if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) {
          r[k++] = d | this.s << this.DB - p;
        }

        while (i >= 0) {
          if (p < 8) {
            d = (this[i] & (1 << p) - 1) << 8 - p;
            d |= this[--i] >> (p += this.DB - 8);
          } else {
            d = this[i] >> (p -= 8) & 0xff;

            if (p <= 0) {
              p += this.DB;
              --i;
            }
          }

          if ((d & 0x80) != 0) {
            d |= -256;
          }

          if (k == 0 && (this.s & 0x80) != (d & 0x80)) {
            ++k;
          }

          if (k > 0 || d != this.s) {
            r[k++] = d;
          }
        }
      }

      return r;
    }; // BigInteger.prototype.equals = bnEquals;


    BigInteger.prototype.equals = function (a) {
      return this.compareTo(a) == 0;
    }; // BigInteger.prototype.min = bnMin;


    BigInteger.prototype.min = function (a) {
      return this.compareTo(a) < 0 ? this : a;
    }; // BigInteger.prototype.max = bnMax;


    BigInteger.prototype.max = function (a) {
      return this.compareTo(a) > 0 ? this : a;
    }; // BigInteger.prototype.and = bnAnd;


    BigInteger.prototype.and = function (a) {
      var r = nbi();
      this.bitwiseTo(a, op_and, r);
      return r;
    }; // BigInteger.prototype.or = bnOr;


    BigInteger.prototype.or = function (a) {
      var r = nbi();
      this.bitwiseTo(a, op_or, r);
      return r;
    }; // BigInteger.prototype.xor = bnXor;


    BigInteger.prototype.xor = function (a) {
      var r = nbi();
      this.bitwiseTo(a, op_xor, r);
      return r;
    }; // BigInteger.prototype.andNot = bnAndNot;


    BigInteger.prototype.andNot = function (a) {
      var r = nbi();
      this.bitwiseTo(a, op_andnot, r);
      return r;
    }; // BigInteger.prototype.not = bnNot;
    // (public) ~this


    BigInteger.prototype.not = function () {
      var r = nbi();

      for (var i = 0; i < this.t; ++i) {
        r[i] = this.DM & ~this[i];
      }

      r.t = this.t;
      r.s = ~this.s;
      return r;
    }; // BigInteger.prototype.shiftLeft = bnShiftLeft;
    // (public) this << n


    BigInteger.prototype.shiftLeft = function (n) {
      var r = nbi();

      if (n < 0) {
        this.rShiftTo(-n, r);
      } else {
        this.lShiftTo(n, r);
      }

      return r;
    }; // BigInteger.prototype.shiftRight = bnShiftRight;
    // (public) this >> n


    BigInteger.prototype.shiftRight = function (n) {
      var r = nbi();

      if (n < 0) {
        this.lShiftTo(-n, r);
      } else {
        this.rShiftTo(n, r);
      }

      return r;
    }; // BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    // (public) returns index of lowest 1-bit (or -1 if none)


    BigInteger.prototype.getLowestSetBit = function () {
      for (var i = 0; i < this.t; ++i) {
        if (this[i] != 0) {
          return i * this.DB + lbit(this[i]);
        }
      }

      if (this.s < 0) {
        return this.t * this.DB;
      }

      return -1;
    }; // BigInteger.prototype.bitCount = bnBitCount;
    // (public) return number of set bits


    BigInteger.prototype.bitCount = function () {
      var r = 0;
      var x = this.s & this.DM;

      for (var i = 0; i < this.t; ++i) {
        r += cbit(this[i] ^ x);
      }

      return r;
    }; // BigInteger.prototype.testBit = bnTestBit;
    // (public) true iff nth bit is set


    BigInteger.prototype.testBit = function (n) {
      var j = Math.floor(n / this.DB);

      if (j >= this.t) {
        return this.s != 0;
      }

      return (this[j] & 1 << n % this.DB) != 0;
    }; // BigInteger.prototype.setBit = bnSetBit;
    // (public) this | (1<<n)


    BigInteger.prototype.setBit = function (n) {
      return this.changeBit(n, op_or);
    }; // BigInteger.prototype.clearBit = bnClearBit;
    // (public) this & ~(1<<n)


    BigInteger.prototype.clearBit = function (n) {
      return this.changeBit(n, op_andnot);
    }; // BigInteger.prototype.flipBit = bnFlipBit;
    // (public) this ^ (1<<n)


    BigInteger.prototype.flipBit = function (n) {
      return this.changeBit(n, op_xor);
    }; // BigInteger.prototype.add = bnAdd;
    // (public) this + a


    BigInteger.prototype.add = function (a) {
      var r = nbi();
      this.addTo(a, r);
      return r;
    }; // BigInteger.prototype.subtract = bnSubtract;
    // (public) this - a


    BigInteger.prototype.subtract = function (a) {
      var r = nbi();
      this.subTo(a, r);
      return r;
    }; // BigInteger.prototype.multiply = bnMultiply;
    // (public) this * a


    BigInteger.prototype.multiply = function (a) {
      var r = nbi();
      this.multiplyTo(a, r);
      return r;
    }; // BigInteger.prototype.divide = bnDivide;
    // (public) this / a


    BigInteger.prototype.divide = function (a) {
      var r = nbi();
      this.divRemTo(a, r, null);
      return r;
    }; // BigInteger.prototype.remainder = bnRemainder;
    // (public) this % a


    BigInteger.prototype.remainder = function (a) {
      var r = nbi();
      this.divRemTo(a, null, r);
      return r;
    }; // BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    // (public) [this/a,this%a]


    BigInteger.prototype.divideAndRemainder = function (a) {
      var q = nbi();
      var r = nbi();
      this.divRemTo(a, q, r);
      return [q, r];
    }; // BigInteger.prototype.modPow = bnModPow;
    // (public) this^e % m (HAC 14.85)


    BigInteger.prototype.modPow = function (e, m) {
      var i = e.bitLength();
      var k;
      var r = nbv(1);
      var z;

      if (i <= 0) {
        return r;
      } else if (i < 18) {
        k = 1;
      } else if (i < 48) {
        k = 3;
      } else if (i < 144) {
        k = 4;
      } else if (i < 768) {
        k = 5;
      } else {
        k = 6;
      }

      if (i < 8) {
        z = new Classic(m);
      } else if (m.isEven()) {
        z = new Barrett(m);
      } else {
        z = new Montgomery(m);
      } // precomputation


      var g = [];
      var n = 3;
      var k1 = k - 1;
      var km = (1 << k) - 1;
      g[1] = z.convert(this);

      if (k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1], g2);

        while (n <= km) {
          g[n] = nbi();
          z.mulTo(g2, g[n - 2], g[n]);
          n += 2;
        }
      }

      var j = e.t - 1;
      var w;
      var is1 = true;
      var r2 = nbi();
      var t;
      i = nbits(e[j]) - 1;

      while (j >= 0) {
        if (i >= k1) {
          w = e[j] >> i - k1 & km;
        } else {
          w = (e[j] & (1 << i + 1) - 1) << k1 - i;

          if (j > 0) {
            w |= e[j - 1] >> this.DB + i - k1;
          }
        }

        n = k;

        while ((w & 1) == 0) {
          w >>= 1;
          --n;
        }

        if ((i -= n) < 0) {
          i += this.DB;
          --j;
        }

        if (is1) {
          g[w].copyTo(r);
          is1 = false;
        } else {
          while (n > 1) {
            z.sqrTo(r, r2);
            z.sqrTo(r2, r);
            n -= 2;
          }

          if (n > 0) {
            z.sqrTo(r, r2);
          } else {
            t = r;
            r = r2;
            r2 = t;
          }

          z.mulTo(r2, g[w], r);
        }

        while (j >= 0 && (e[j] & 1 << i) == 0) {
          z.sqrTo(r, r2);
          t = r;
          r = r2;
          r2 = t;

          if (--i < 0) {
            i = this.DB - 1;
            --j;
          }
        }
      }

      return z.revert(r);
    }; // BigInteger.prototype.modInverse = bnModInverse;
    // (public) 1/this % m (HAC 14.61)


    BigInteger.prototype.modInverse = function (m) {
      var ac = m.isEven();

      if (this.isEven() && ac || m.signum() == 0) {
        return BigInteger.ZERO;
      }

      var u = m.clone();
      var v = this.clone();
      var a = nbv(1);
      var b = nbv(0);
      var c = nbv(0);
      var d = nbv(1);

      while (u.signum() != 0) {
        while (u.isEven()) {
          u.rShiftTo(1, u);

          if (ac) {
            if (!a.isEven() || !b.isEven()) {
              a.addTo(this, a);
              b.subTo(m, b);
            }

            a.rShiftTo(1, a);
          } else if (!b.isEven()) {
            b.subTo(m, b);
          }

          b.rShiftTo(1, b);
        }

        while (v.isEven()) {
          v.rShiftTo(1, v);

          if (ac) {
            if (!c.isEven() || !d.isEven()) {
              c.addTo(this, c);
              d.subTo(m, d);
            }

            c.rShiftTo(1, c);
          } else if (!d.isEven()) {
            d.subTo(m, d);
          }

          d.rShiftTo(1, d);
        }

        if (u.compareTo(v) >= 0) {
          u.subTo(v, u);

          if (ac) {
            a.subTo(c, a);
          }

          b.subTo(d, b);
        } else {
          v.subTo(u, v);

          if (ac) {
            c.subTo(a, c);
          }

          d.subTo(b, d);
        }
      }

      if (v.compareTo(BigInteger.ONE) != 0) {
        return BigInteger.ZERO;
      }

      if (d.compareTo(m) >= 0) {
        return d.subtract(m);
      }

      if (d.signum() < 0) {
        d.addTo(m, d);
      } else {
        return d;
      }

      if (d.signum() < 0) {
        return d.add(m);
      } else {
        return d;
      }
    }; // BigInteger.prototype.pow = bnPow;
    // (public) this^e


    BigInteger.prototype.pow = function (e) {
      return this.exp(e, new NullExp());
    }; // BigInteger.prototype.gcd = bnGCD;
    // (public) gcd(this,a) (HAC 14.54)


    BigInteger.prototype.gcd = function (a) {
      var x = this.s < 0 ? this.negate() : this.clone();
      var y = a.s < 0 ? a.negate() : a.clone();

      if (x.compareTo(y) < 0) {
        var t = x;
        x = y;
        y = t;
      }

      var i = x.getLowestSetBit();
      var g = y.getLowestSetBit();

      if (g < 0) {
        return x;
      }

      if (i < g) {
        g = i;
      }

      if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y);
      }

      while (x.signum() > 0) {
        if ((i = x.getLowestSetBit()) > 0) {
          x.rShiftTo(i, x);
        }

        if ((i = y.getLowestSetBit()) > 0) {
          y.rShiftTo(i, y);
        }

        if (x.compareTo(y) >= 0) {
          x.subTo(y, x);
          x.rShiftTo(1, x);
        } else {
          y.subTo(x, y);
          y.rShiftTo(1, y);
        }
      }

      if (g > 0) {
        y.lShiftTo(g, y);
      }

      return y;
    }; // BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
    // (public) test primality with certainty >= 1-.5^t


    BigInteger.prototype.isProbablePrime = function (t) {
      var i;
      var x = this.abs();

      if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
        for (i = 0; i < lowprimes.length; ++i) {
          if (x[0] == lowprimes[i]) {
            return true;
          }
        }

        return false;
      }

      if (x.isEven()) {
        return false;
      }

      i = 1;

      while (i < lowprimes.length) {
        var m = lowprimes[i];
        var j = i + 1;

        while (j < lowprimes.length && m < lplim) {
          m *= lowprimes[j++];
        }

        m = x.modInt(m);

        while (i < j) {
          if (m % lowprimes[i++] == 0) {
            return false;
          }
        }
      }

      return x.millerRabin(t);
    }; //#endregion PUBLIC
    //#region PROTECTED
    // BigInteger.prototype.copyTo = bnpCopyTo;
    // (protected) copy this to r


    BigInteger.prototype.copyTo = function (r) {
      for (var i = this.t - 1; i >= 0; --i) {
        r[i] = this[i];
      }

      r.t = this.t;
      r.s = this.s;
    }; // BigInteger.prototype.fromInt = bnpFromInt;
    // (protected) set from integer value x, -DV <= x < DV


    BigInteger.prototype.fromInt = function (x) {
      this.t = 1;
      this.s = x < 0 ? -1 : 0;

      if (x > 0) {
        this[0] = x;
      } else if (x < -1) {
        this[0] = x + this.DV;
      } else {
        this.t = 0;
      }
    }; // BigInteger.prototype.fromString = bnpFromString;
    // (protected) set from string and radix


    BigInteger.prototype.fromString = function (s, b) {
      var k;

      if (b == 16) {
        k = 4;
      } else if (b == 8) {
        k = 3;
      } else if (b == 256) {
        k = 8;
        /* byte array */
      } else if (b == 2) {
        k = 1;
      } else if (b == 32) {
        k = 5;
      } else if (b == 4) {
        k = 2;
      } else {
        this.fromRadix(s, b);
        return;
      }

      this.t = 0;
      this.s = 0;
      var i = s.length;
      var mi = false;
      var sh = 0;

      while (--i >= 0) {
        var x = k == 8 ? +s[i] & 0xff : intAt(s, i);

        if (x < 0) {
          if (s.charAt(i) == "-") {
            mi = true;
          }

          continue;
        }

        mi = false;

        if (sh == 0) {
          this[this.t++] = x;
        } else if (sh + k > this.DB) {
          this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
          this[this.t++] = x >> this.DB - sh;
        } else {
          this[this.t - 1] |= x << sh;
        }

        sh += k;

        if (sh >= this.DB) {
          sh -= this.DB;
        }
      }

      if (k == 8 && (+s[0] & 0x80) != 0) {
        this.s = -1;

        if (sh > 0) {
          this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
        }
      }

      this.clamp();

      if (mi) {
        BigInteger.ZERO.subTo(this, this);
      }
    }; // BigInteger.prototype.clamp = bnpClamp;
    // (protected) clamp off excess high words


    BigInteger.prototype.clamp = function () {
      var c = this.s & this.DM;

      while (this.t > 0 && this[this.t - 1] == c) {
        --this.t;
      }
    }; // BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    // (protected) r = this << n*DB


    BigInteger.prototype.dlShiftTo = function (n, r) {
      var i;

      for (i = this.t - 1; i >= 0; --i) {
        r[i + n] = this[i];
      }

      for (i = n - 1; i >= 0; --i) {
        r[i] = 0;
      }

      r.t = this.t + n;
      r.s = this.s;
    }; // BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    // (protected) r = this >> n*DB


    BigInteger.prototype.drShiftTo = function (n, r) {
      for (var i = n; i < this.t; ++i) {
        r[i - n] = this[i];
      }

      r.t = Math.max(this.t - n, 0);
      r.s = this.s;
    }; // BigInteger.prototype.lShiftTo = bnpLShiftTo;
    // (protected) r = this << n


    BigInteger.prototype.lShiftTo = function (n, r) {
      var bs = n % this.DB;
      var cbs = this.DB - bs;
      var bm = (1 << cbs) - 1;
      var ds = Math.floor(n / this.DB);
      var c = this.s << bs & this.DM;

      for (var i = this.t - 1; i >= 0; --i) {
        r[i + ds + 1] = this[i] >> cbs | c;
        c = (this[i] & bm) << bs;
      }

      for (var i = ds - 1; i >= 0; --i) {
        r[i] = 0;
      }

      r[ds] = c;
      r.t = this.t + ds + 1;
      r.s = this.s;
      r.clamp();
    }; // BigInteger.prototype.rShiftTo = bnpRShiftTo;
    // (protected) r = this >> n


    BigInteger.prototype.rShiftTo = function (n, r) {
      r.s = this.s;
      var ds = Math.floor(n / this.DB);

      if (ds >= this.t) {
        r.t = 0;
        return;
      }

      var bs = n % this.DB;
      var cbs = this.DB - bs;
      var bm = (1 << bs) - 1;
      r[0] = this[ds] >> bs;

      for (var i = ds + 1; i < this.t; ++i) {
        r[i - ds - 1] |= (this[i] & bm) << cbs;
        r[i - ds] = this[i] >> bs;
      }

      if (bs > 0) {
        r[this.t - ds - 1] |= (this.s & bm) << cbs;
      }

      r.t = this.t - ds;
      r.clamp();
    }; // BigInteger.prototype.subTo = bnpSubTo;
    // (protected) r = this - a


    BigInteger.prototype.subTo = function (a, r) {
      var i = 0;
      var c = 0;
      var m = Math.min(a.t, this.t);

      while (i < m) {
        c += this[i] - a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }

      if (a.t < this.t) {
        c -= a.s;

        while (i < this.t) {
          c += this[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }

        c += this.s;
      } else {
        c += this.s;

        while (i < a.t) {
          c -= a[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }

        c -= a.s;
      }

      r.s = c < 0 ? -1 : 0;

      if (c < -1) {
        r[i++] = this.DV + c;
      } else if (c > 0) {
        r[i++] = c;
      }

      r.t = i;
      r.clamp();
    }; // BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.


    BigInteger.prototype.multiplyTo = function (a, r) {
      var x = this.abs();
      var y = a.abs();
      var i = x.t;
      r.t = i + y.t;

      while (--i >= 0) {
        r[i] = 0;
      }

      for (i = 0; i < y.t; ++i) {
        r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
      }

      r.s = 0;
      r.clamp();

      if (this.s != a.s) {
        BigInteger.ZERO.subTo(r, r);
      }
    }; // BigInteger.prototype.squareTo = bnpSquareTo;
    // (protected) r = this^2, r != this (HAC 14.16)


    BigInteger.prototype.squareTo = function (r) {
      var x = this.abs();
      var i = r.t = 2 * x.t;

      while (--i >= 0) {
        r[i] = 0;
      }

      for (i = 0; i < x.t - 1; ++i) {
        var c = x.am(i, x[i], r, 2 * i, 0, 1);

        if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
          r[i + x.t] -= x.DV;
          r[i + x.t + 1] = 1;
        }
      }

      if (r.t > 0) {
        r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
      }

      r.s = 0;
      r.clamp();
    }; // BigInteger.prototype.divRemTo = bnpDivRemTo;
    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.


    BigInteger.prototype.divRemTo = function (m, q, r) {
      var pm = m.abs();

      if (pm.t <= 0) {
        return;
      }

      var pt = this.abs();

      if (pt.t < pm.t) {
        if (q != null) {
          q.fromInt(0);
        }

        if (r != null) {
          this.copyTo(r);
        }

        return;
      }

      if (r == null) {
        r = nbi();
      }

      var y = nbi();
      var ts = this.s;
      var ms = m.s;
      var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus

      if (nsh > 0) {
        pm.lShiftTo(nsh, y);
        pt.lShiftTo(nsh, r);
      } else {
        pm.copyTo(y);
        pt.copyTo(r);
      }

      var ys = y.t;
      var y0 = y[ys - 1];

      if (y0 == 0) {
        return;
      }

      var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
      var d1 = this.FV / yt;
      var d2 = (1 << this.F1) / yt;
      var e = 1 << this.F2;
      var i = r.t;
      var j = i - ys;
      var t = q == null ? nbi() : q;
      y.dlShiftTo(j, t);

      if (r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t, r);
      }

      BigInteger.ONE.dlShiftTo(ys, t);
      t.subTo(y, y); // "negative" y so we can replace sub with am later

      while (y.t < ys) {
        y[y.t++] = 0;
      }

      while (--j >= 0) {
        // Estimate quotient digit
        var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);

        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
          y.dlShiftTo(j, t);
          r.subTo(t, r);

          while (r[i] < --qd) {
            r.subTo(t, r);
          }
        }
      }

      if (q != null) {
        r.drShiftTo(ys, q);

        if (ts != ms) {
          BigInteger.ZERO.subTo(q, q);
        }
      }

      r.t = ys;
      r.clamp();

      if (nsh > 0) {
        r.rShiftTo(nsh, r);
      } // Denormalize remainder


      if (ts < 0) {
        BigInteger.ZERO.subTo(r, r);
      }
    }; // BigInteger.prototype.invDigit = bnpInvDigit;
    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.


    BigInteger.prototype.invDigit = function () {
      if (this.t < 1) {
        return 0;
      }

      var x = this[0];

      if ((x & 1) == 0) {
        return 0;
      }

      var y = x & 3; // y == 1/x mod 2^2

      y = y * (2 - (x & 0xf) * y) & 0xf; // y == 1/x mod 2^4

      y = y * (2 - (x & 0xff) * y) & 0xff; // y == 1/x mod 2^8

      y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff; // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints

      y = y * (2 - x * y % this.DV) % this.DV; // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV

      return y > 0 ? this.DV - y : -y;
    }; // BigInteger.prototype.isEven = bnpIsEven;
    // (protected) true iff this is even


    BigInteger.prototype.isEven = function () {
      return (this.t > 0 ? this[0] & 1 : this.s) == 0;
    }; // BigInteger.prototype.exp = bnpExp;
    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)


    BigInteger.prototype.exp = function (e, z) {
      if (e > 0xffffffff || e < 1) {
        return BigInteger.ONE;
      }

      var r = nbi();
      var r2 = nbi();
      var g = z.convert(this);
      var i = nbits(e) - 1;
      g.copyTo(r);

      while (--i >= 0) {
        z.sqrTo(r, r2);

        if ((e & 1 << i) > 0) {
          z.mulTo(r2, g, r);
        } else {
          var t = r;
          r = r2;
          r2 = t;
        }
      }

      return z.revert(r);
    }; // BigInteger.prototype.chunkSize = bnpChunkSize;
    // (protected) return x s.t. r^x < DV


    BigInteger.prototype.chunkSize = function (r) {
      return Math.floor(Math.LN2 * this.DB / Math.log(r));
    }; // BigInteger.prototype.toRadix = bnpToRadix;
    // (protected) convert to radix string


    BigInteger.prototype.toRadix = function (b) {
      if (b == null) {
        b = 10;
      }

      if (this.signum() == 0 || b < 2 || b > 36) {
        return "0";
      }

      var cs = this.chunkSize(b);
      var a = Math.pow(b, cs);
      var d = nbv(a);
      var y = nbi();
      var z = nbi();
      var r = "";
      this.divRemTo(d, y, z);

      while (y.signum() > 0) {
        r = (a + z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d, y, z);
      }

      return z.intValue().toString(b) + r;
    }; // BigInteger.prototype.fromRadix = bnpFromRadix;
    // (protected) convert from radix string


    BigInteger.prototype.fromRadix = function (s, b) {
      this.fromInt(0);

      if (b == null) {
        b = 10;
      }

      var cs = this.chunkSize(b);
      var d = Math.pow(b, cs);
      var mi = false;
      var j = 0;
      var w = 0;

      for (var i = 0; i < s.length; ++i) {
        var x = intAt(s, i);

        if (x < 0) {
          if (s.charAt(i) == "-" && this.signum() == 0) {
            mi = true;
          }

          continue;
        }

        w = b * w + x;

        if (++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w, 0);
          j = 0;
          w = 0;
        }
      }

      if (j > 0) {
        this.dMultiply(Math.pow(b, j));
        this.dAddOffset(w, 0);
      }

      if (mi) {
        BigInteger.ZERO.subTo(this, this);
      }
    }; // BigInteger.prototype.fromNumber = bnpFromNumber;
    // (protected) alternate constructor


    BigInteger.prototype.fromNumber = function (a, b, c) {
      if ("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if (a < 2) {
          this.fromInt(1);
        } else {
          this.fromNumber(a, c);

          if (!this.testBit(a - 1)) {
            // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
          }

          if (this.isEven()) {
            this.dAddOffset(1, 0);
          } // force odd


          while (!this.isProbablePrime(b)) {
            this.dAddOffset(2, 0);

            if (this.bitLength() > a) {
              this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
            }
          }
        }
      } else {
        // new BigInteger(int,RNG)
        var x = [];
        var t = a & 7;
        x.length = (a >> 3) + 1;
        b.nextBytes(x);

        if (t > 0) {
          x[0] &= (1 << t) - 1;
        } else {
          x[0] = 0;
        }

        this.fromString(x, 256);
      }
    }; // BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    // (protected) r = this op a (bitwise)


    BigInteger.prototype.bitwiseTo = function (a, op, r) {
      var i;
      var f;
      var m = Math.min(a.t, this.t);

      for (i = 0; i < m; ++i) {
        r[i] = op(this[i], a[i]);
      }

      if (a.t < this.t) {
        f = a.s & this.DM;

        for (i = m; i < this.t; ++i) {
          r[i] = op(this[i], f);
        }

        r.t = this.t;
      } else {
        f = this.s & this.DM;

        for (i = m; i < a.t; ++i) {
          r[i] = op(f, a[i]);
        }

        r.t = a.t;
      }

      r.s = op(this.s, a.s);
      r.clamp();
    }; // BigInteger.prototype.changeBit = bnpChangeBit;
    // (protected) this op (1<<n)


    BigInteger.prototype.changeBit = function (n, op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r, op, r);
      return r;
    }; // BigInteger.prototype.addTo = bnpAddTo;
    // (protected) r = this + a


    BigInteger.prototype.addTo = function (a, r) {
      var i = 0;
      var c = 0;
      var m = Math.min(a.t, this.t);

      while (i < m) {
        c += this[i] + a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }

      if (a.t < this.t) {
        c += a.s;

        while (i < this.t) {
          c += this[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }

        c += this.s;
      } else {
        c += this.s;

        while (i < a.t) {
          c += a[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }

        c += a.s;
      }

      r.s = c < 0 ? -1 : 0;

      if (c > 0) {
        r[i++] = c;
      } else if (c < -1) {
        r[i++] = this.DV + c;
      }

      r.t = i;
      r.clamp();
    }; // BigInteger.prototype.dMultiply = bnpDMultiply;
    // (protected) this *= n, this >= 0, 1 < n < DV


    BigInteger.prototype.dMultiply = function (n) {
      this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
      ++this.t;
      this.clamp();
    }; // BigInteger.prototype.dAddOffset = bnpDAddOffset;
    // (protected) this += n << w words, this >= 0


    BigInteger.prototype.dAddOffset = function (n, w) {
      if (n == 0) {
        return;
      }

      while (this.t <= w) {
        this[this.t++] = 0;
      }

      this[w] += n;

      while (this[w] >= this.DV) {
        this[w] -= this.DV;

        if (++w >= this.t) {
          this[this.t++] = 0;
        }

        ++this[w];
      }
    }; // BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.


    BigInteger.prototype.multiplyLowerTo = function (a, n, r) {
      var i = Math.min(this.t + a.t, n);
      r.s = 0; // assumes a,this >= 0

      r.t = i;

      while (i > 0) {
        r[--i] = 0;
      }

      for (var j = r.t - this.t; i < j; ++i) {
        r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
      }

      for (var j = Math.min(a.t, n); i < j; ++i) {
        this.am(0, a[i], r, i, 0, n - i);
      }

      r.clamp();
    }; // BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.


    BigInteger.prototype.multiplyUpperTo = function (a, n, r) {
      --n;
      var i = r.t = this.t + a.t - n;
      r.s = 0; // assumes a,this >= 0

      while (--i >= 0) {
        r[i] = 0;
      }

      for (i = Math.max(n - this.t, 0); i < a.t; ++i) {
        r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
      }

      r.clamp();
      r.drShiftTo(1, r);
    }; // BigInteger.prototype.modInt = bnpModInt;
    // (protected) this % n, n < 2^26


    BigInteger.prototype.modInt = function (n) {
      if (n <= 0) {
        return 0;
      }

      var d = this.DV % n;
      var r = this.s < 0 ? n - 1 : 0;

      if (this.t > 0) {
        if (d == 0) {
          r = this[0] % n;
        } else {
          for (var i = this.t - 1; i >= 0; --i) {
            r = (d * r + this[i]) % n;
          }
        }
      }

      return r;
    }; // BigInteger.prototype.millerRabin = bnpMillerRabin;
    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)


    BigInteger.prototype.millerRabin = function (t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();

      if (k <= 0) {
        return false;
      }

      var r = n1.shiftRight(k);
      t = t + 1 >> 1;

      if (t > lowprimes.length) {
        t = lowprimes.length;
      }

      var a = nbi();

      for (var i = 0; i < t; ++i) {
        // Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var y = a.modPow(r, this);

        if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;

          while (j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2, this);

            if (y.compareTo(BigInteger.ONE) == 0) {
              return false;
            }
          }

          if (y.compareTo(n1) != 0) {
            return false;
          }
        }
      }

      return true;
    }; // BigInteger.prototype.square = bnSquare;
    // (public) this^2


    BigInteger.prototype.square = function () {
      var r = nbi();
      this.squareTo(r);
      return r;
    }; //#region ASYNC
    // Public API method


    BigInteger.prototype.gcda = function (a, callback) {
      var x = this.s < 0 ? this.negate() : this.clone();
      var y = a.s < 0 ? a.negate() : a.clone();

      if (x.compareTo(y) < 0) {
        var t = x;
        x = y;
        y = t;
      }

      var i = x.getLowestSetBit();
      var g = y.getLowestSetBit();

      if (g < 0) {
        callback(x);
        return;
      }

      if (i < g) {
        g = i;
      }

      if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y);
      } // Workhorse of the algorithm, gets called 200 - 800 times per 512 bit keygen.


      var gcda1 = function gcda1() {
        if ((i = x.getLowestSetBit()) > 0) {
          x.rShiftTo(i, x);
        }

        if ((i = y.getLowestSetBit()) > 0) {
          y.rShiftTo(i, y);
        }

        if (x.compareTo(y) >= 0) {
          x.subTo(y, x);
          x.rShiftTo(1, x);
        } else {
          y.subTo(x, y);
          y.rShiftTo(1, y);
        }

        if (!(x.signum() > 0)) {
          if (g > 0) {
            y.lShiftTo(g, y);
          }

          setTimeout(function () {
            callback(y);
          }, 0); // escape
        } else {
          setTimeout(gcda1, 0);
        }
      };

      setTimeout(gcda1, 10);
    }; // (protected) alternate constructor


    BigInteger.prototype.fromNumberAsync = function (a, b, c, callback) {
      if ("number" == typeof b) {
        if (a < 2) {
          this.fromInt(1);
        } else {
          this.fromNumber(a, c);

          if (!this.testBit(a - 1)) {
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
          }

          if (this.isEven()) {
            this.dAddOffset(1, 0);
          }

          var bnp_1 = this;

          var bnpfn1_1 = function bnpfn1_1() {
            bnp_1.dAddOffset(2, 0);

            if (bnp_1.bitLength() > a) {
              bnp_1.subTo(BigInteger.ONE.shiftLeft(a - 1), bnp_1);
            }

            if (bnp_1.isProbablePrime(b)) {
              setTimeout(function () {
                callback();
              }, 0); // escape
            } else {
              setTimeout(bnpfn1_1, 0);
            }
          };

          setTimeout(bnpfn1_1, 0);
        }
      } else {
        var x = [];
        var t = a & 7;
        x.length = (a >> 3) + 1;
        b.nextBytes(x);

        if (t > 0) {
          x[0] &= (1 << t) - 1;
        } else {
          x[0] = 0;
        }

        this.fromString(x, 256);
      }
    };

    return BigInteger;
  }(); //#region REDUCERS
  //#region NullExp


  var NullExp =
  /** @class */
  function () {
    function NullExp() {} // NullExp.prototype.convert = nNop;


    NullExp.prototype.convert = function (x) {
      return x;
    }; // NullExp.prototype.revert = nNop;


    NullExp.prototype.revert = function (x) {
      return x;
    }; // NullExp.prototype.mulTo = nMulTo;


    NullExp.prototype.mulTo = function (x, y, r) {
      x.multiplyTo(y, r);
    }; // NullExp.prototype.sqrTo = nSqrTo;


    NullExp.prototype.sqrTo = function (x, r) {
      x.squareTo(r);
    };

    return NullExp;
  }(); // Modular reduction using "classic" algorithm


  var Classic =
  /** @class */
  function () {
    function Classic(m) {
      this.m = m;
    } // Classic.prototype.convert = cConvert;


    Classic.prototype.convert = function (x) {
      if (x.s < 0 || x.compareTo(this.m) >= 0) {
        return x.mod(this.m);
      } else {
        return x;
      }
    }; // Classic.prototype.revert = cRevert;


    Classic.prototype.revert = function (x) {
      return x;
    }; // Classic.prototype.reduce = cReduce;


    Classic.prototype.reduce = function (x) {
      x.divRemTo(this.m, null, x);
    }; // Classic.prototype.mulTo = cMulTo;


    Classic.prototype.mulTo = function (x, y, r) {
      x.multiplyTo(y, r);
      this.reduce(r);
    }; // Classic.prototype.sqrTo = cSqrTo;


    Classic.prototype.sqrTo = function (x, r) {
      x.squareTo(r);
      this.reduce(r);
    };

    return Classic;
  }(); //#endregion
  //#region Montgomery
  // Montgomery reduction


  var Montgomery =
  /** @class */
  function () {
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp & 0x7fff;
      this.mph = this.mp >> 15;
      this.um = (1 << m.DB - 15) - 1;
      this.mt2 = 2 * m.t;
    } // Montgomery.prototype.convert = montConvert;
    // xR mod m


    Montgomery.prototype.convert = function (x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t, r);
      r.divRemTo(this.m, null, r);

      if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
        this.m.subTo(r, r);
      }

      return r;
    }; // Montgomery.prototype.revert = montRevert;
    // x/R mod m


    Montgomery.prototype.revert = function (x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }; // Montgomery.prototype.reduce = montReduce;
    // x = x/R mod m (HAC 14.32)


    Montgomery.prototype.reduce = function (x) {
      while (x.t <= this.mt2) {
        // pad x so am has enough room later
        x[x.t++] = 0;
      }

      for (var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i] & 0x7fff;
        var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM; // use am to combine the multiply-shift-add into one call

        j = i + this.m.t;
        x[j] += this.m.am(0, u0, x, i, 0, this.m.t); // propagate carry

        while (x[j] >= x.DV) {
          x[j] -= x.DV;
          x[++j]++;
        }
      }

      x.clamp();
      x.drShiftTo(this.m.t, x);

      if (x.compareTo(this.m) >= 0) {
        x.subTo(this.m, x);
      }
    }; // Montgomery.prototype.mulTo = montMulTo;
    // r = "xy/R mod m"; x,y != r


    Montgomery.prototype.mulTo = function (x, y, r) {
      x.multiplyTo(y, r);
      this.reduce(r);
    }; // Montgomery.prototype.sqrTo = montSqrTo;
    // r = "x^2/R mod m"; x != r


    Montgomery.prototype.sqrTo = function (x, r) {
      x.squareTo(r);
      this.reduce(r);
    };

    return Montgomery;
  }(); //#endregion Montgomery
  //#region Barrett
  // Barrett modular reduction


  var Barrett =
  /** @class */
  function () {
    function Barrett(m) {
      this.m = m; // setup Barrett

      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
      this.mu = this.r2.divide(m);
    } // Barrett.prototype.convert = barrettConvert;


    Barrett.prototype.convert = function (x) {
      if (x.s < 0 || x.t > 2 * this.m.t) {
        return x.mod(this.m);
      } else if (x.compareTo(this.m) < 0) {
        return x;
      } else {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
      }
    }; // Barrett.prototype.revert = barrettRevert;


    Barrett.prototype.revert = function (x) {
      return x;
    }; // Barrett.prototype.reduce = barrettReduce;
    // x = x mod m (HAC 14.42)


    Barrett.prototype.reduce = function (x) {
      x.drShiftTo(this.m.t - 1, this.r2);

      if (x.t > this.m.t + 1) {
        x.t = this.m.t + 1;
        x.clamp();
      }

      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);

      while (x.compareTo(this.r2) < 0) {
        x.dAddOffset(1, this.m.t + 1);
      }

      x.subTo(this.r2, x);

      while (x.compareTo(this.m) >= 0) {
        x.subTo(this.m, x);
      }
    }; // Barrett.prototype.mulTo = barrettMulTo;
    // r = x*y mod m; x,y != r


    Barrett.prototype.mulTo = function (x, y, r) {
      x.multiplyTo(y, r);
      this.reduce(r);
    }; // Barrett.prototype.sqrTo = barrettSqrTo;
    // r = x^2 mod m; x != r


    Barrett.prototype.sqrTo = function (x, r) {
      x.squareTo(r);
      this.reduce(r);
    };

    return Barrett;
  }(); //#endregion
  //#endregion REDUCERS
  // return new, unset BigInteger


  function nbi() {
    return new BigInteger(null);
  }

  function parseBigInt(str, r) {
    return new BigInteger(str, r);
  } // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)


  function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
      var v = x * this[i++] + w[j] + c;
      c = Math.floor(v / 0x4000000);
      w[j++] = v & 0x3ffffff;
    }

    return c;
  } // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)


  function am2(i, x, w, j, c, n) {
    var xl = x & 0x7fff;
    var xh = x >> 15;

    while (--n >= 0) {
      var l = this[i] & 0x7fff;
      var h = this[i++] >> 15;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
      c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
      w[j++] = l & 0x3fffffff;
    }

    return c;
  } // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.


  function am3(i, x, w, j, c, n) {
    var xl = x & 0x3fff;
    var xh = x >> 14;

    while (--n >= 0) {
      var l = this[i] & 0x3fff;
      var h = this[i++] >> 14;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
      c = (l >> 28) + (m >> 14) + xh * h;
      w[j++] = l & 0xfffffff;
    }

    return c;
  }

  if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
    BigInteger.prototype.am = am2;
    dbits = 30;
  } else if (j_lm && navigator.appName != "Netscape") {
    BigInteger.prototype.am = am1;
    dbits = 26;
  } else {
    BigInteger.prototype.am = am3;
    dbits = 28;
  }

  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = (1 << dbits) - 1;
  BigInteger.prototype.DV = 1 << dbits;
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2, BI_FP);
  BigInteger.prototype.F1 = BI_FP - dbits;
  BigInteger.prototype.F2 = 2 * dbits - BI_FP; // Digit conversions

  var BI_RC = [];
  var rr;
  var vv;
  rr = "0".charCodeAt(0);

  for (vv = 0; vv <= 9; ++vv) {
    BI_RC[rr++] = vv;
  }

  rr = "a".charCodeAt(0);

  for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
  }

  rr = "A".charCodeAt(0);

  for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
  }

  function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return c == null ? -1 : c;
  } // return bigint initialized to value


  function nbv(i) {
    var r = nbi();
    r.fromInt(i);
    return r;
  } // returns bit length of the integer x


  function nbits(x) {
    var r = 1;
    var t;

    if ((t = x >>> 16) != 0) {
      x = t;
      r += 16;
    }

    if ((t = x >> 8) != 0) {
      x = t;
      r += 8;
    }

    if ((t = x >> 4) != 0) {
      x = t;
      r += 4;
    }

    if ((t = x >> 2) != 0) {
      x = t;
      r += 2;
    }

    if ((t = x >> 1) != 0) {
      x = t;
      r += 1;
    }

    return r;
  } // "constants"


  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1); // prng4.js - uses Arcfour as a PRNG

  var Arcfour =
  /** @class */
  function () {
    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = [];
    } // Arcfour.prototype.init = ARC4init;
    // Initialize arcfour context from key, an array of ints, each from [0..255]


    Arcfour.prototype.init = function (key) {
      var i;
      var j;
      var t;

      for (i = 0; i < 256; ++i) {
        this.S[i] = i;
      }

      j = 0;

      for (i = 0; i < 256; ++i) {
        j = j + this.S[i] + key[i % key.length] & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
      }

      this.i = 0;
      this.j = 0;
    }; // Arcfour.prototype.next = ARC4next;


    Arcfour.prototype.next = function () {
      var t;
      this.i = this.i + 1 & 255;
      this.j = this.j + this.S[this.i] & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[t + this.S[this.i] & 255];
    };

    return Arcfour;
  }(); // Plug in your RNG constructor here


  function prng_newstate() {
    return new Arcfour();
  } // Pool size must be a multiple of 4 and greater than 32.
  // An array of bytes the size of the pool will be passed to init()


  var rng_psize = 256; // Random number generator - requires a PRNG backend, e.g. prng4.js

  var rng_state;
  var rng_pool = null;
  var rng_pptr; // Initialize the pool with junk if needed.

  if (rng_pool == null) {
    rng_pool = [];
    rng_pptr = 0;
    var t = void 0;

    if (window.crypto && window.crypto.getRandomValues) {
      // Extract entropy (2048 bits) from RNG if available
      var z = new Uint32Array(256);
      window.crypto.getRandomValues(z);

      for (t = 0; t < z.length; ++t) {
        rng_pool[rng_pptr++] = z[t] & 255;
      }
    } // Use mouse events for entropy, if we do not have enough entropy by the time
    // we need it, entropy will be generated by Math.random.


    var onMouseMoveListener_1 = function onMouseMoveListener_1(ev) {
      this.count = this.count || 0;

      if (this.count >= 256 || rng_pptr >= rng_psize) {
        if (window.removeEventListener) {
          window.removeEventListener("mousemove", onMouseMoveListener_1, false);
        } else if (window.detachEvent) {
          window.detachEvent("onmousemove", onMouseMoveListener_1);
        }

        return;
      }

      try {
        var mouseCoordinates = ev.x + ev.y;
        rng_pool[rng_pptr++] = mouseCoordinates & 255;
        this.count += 1;
      } catch (e) {// Sometimes Firefox will deny permission to access event properties for some reason. Ignore.
      }
    };

    if (window.addEventListener) {
      window.addEventListener("mousemove", onMouseMoveListener_1, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmousemove", onMouseMoveListener_1);
    }
  }

  function rng_get_byte() {
    if (rng_state == null) {
      rng_state = prng_newstate(); // At this point, we may not have collected enough entropy.  If not, fall back to Math.random

      while (rng_pptr < rng_psize) {
        var random = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = random & 255;
      }

      rng_state.init(rng_pool);

      for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
        rng_pool[rng_pptr] = 0;
      }

      rng_pptr = 0;
    } // TODO: allow reseeding after first request


    return rng_state.next();
  }

  var SecureRandom =
  /** @class */
  function () {
    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = function (ba) {
      for (var i = 0; i < ba.length; ++i) {
        ba[i] = rng_get_byte();
      }
    };

    return SecureRandom;
  }(); // Depends on jsbn.js and rng.js
  // function linebrk(s,n) {
  //   var ret = "";
  //   var i = 0;
  //   while(i + n < s.length) {
  //     ret += s.substring(i,i+n) + "\n";
  //     i += n;
  //   }
  //   return ret + s.substring(i,s.length);
  // }
  // function byte2Hex(b) {
  //   if(b < 0x10)
  //     return "0" + b.toString(16);
  //   else
  //     return b.toString(16);
  // }
  // PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint


  function pkcs1pad2(s, n) {
    if (n < s.length + 11) {
      console.error("Message too long for RSA");
      return null;
    }

    var ba = [];
    var i = s.length - 1;

    while (i >= 0 && n > 0) {
      var c = s.charCodeAt(i--);

      if (c < 128) {
        ba[--n] = c;
      } else if (c > 127 && c < 2048) {
        ba[--n] = c & 63 | 128;
        ba[--n] = c >> 6 | 192;
      } else {
        ba[--n] = c & 63 | 128;
        ba[--n] = c >> 6 & 63 | 128;
        ba[--n] = c >> 12 | 224;
      }
    }

    ba[--n] = 0;
    var rng = new SecureRandom();
    var x = [];

    while (n > 2) {
      x[0] = 0;

      while (x[0] == 0) {
        rng.nextBytes(x);
      }

      ba[--n] = x[0];
    }

    ba[--n] = 2;
    ba[--n] = 0;
    return new BigInteger(ba);
  } // "empty" RSA key constructor


  var RSAKey =
  /** @class */
  function () {
    function RSAKey() {
      this.n = null;
      this.e = 0;
      this.d = null;
      this.p = null;
      this.q = null;
      this.dmp1 = null;
      this.dmq1 = null;
      this.coeff = null;
    } //#region PROTECTED
    // protected
    // RSAKey.prototype.doPublic = RSADoPublic;
    // Perform raw public operation on "x": return x^e (mod n)


    RSAKey.prototype.doPublic = function (x) {
      return x.modPowInt(this.e, this.n);
    }; // RSAKey.prototype.doPrivate = RSADoPrivate;
    // Perform raw private operation on "x": return x^d (mod n)


    RSAKey.prototype.doPrivate = function (x) {
      if (this.p == null || this.q == null) {
        return x.modPow(this.d, this.n);
      } // TODO: re-calculate any missing CRT params


      var xp = x.mod(this.p).modPow(this.dmp1, this.p);
      var xq = x.mod(this.q).modPow(this.dmq1, this.q);

      while (xp.compareTo(xq) < 0) {
        xp = xp.add(this.p);
      }

      return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
    }; //#endregion PROTECTED
    //#region PUBLIC
    // RSAKey.prototype.setPublic = RSASetPublic;
    // Set the public key fields N and e from hex strings


    RSAKey.prototype.setPublic = function (N, E) {
      if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
      } else {
        console.error("Invalid RSA public key");
      }
    }; // RSAKey.prototype.encrypt = RSAEncrypt;
    // Return the PKCS#1 RSA encryption of "text" as an even-length hex string


    RSAKey.prototype.encrypt = function (text) {
      var m = pkcs1pad2(text, this.n.bitLength() + 7 >> 3);

      if (m == null) {
        return null;
      }

      var c = this.doPublic(m);

      if (c == null) {
        return null;
      }

      var h = c.toString(16);

      if ((h.length & 1) == 0) {
        return h;
      } else {
        return "0" + h;
      }
    }; // RSAKey.prototype.setPrivate = RSASetPrivate;
    // Set the private key fields N, e, and d from hex strings


    RSAKey.prototype.setPrivate = function (N, E, D) {
      if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
        this.d = parseBigInt(D, 16);
      } else {
        console.error("Invalid RSA private key");
      }
    }; // RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
    // Set the private key fields N, e, d and CRT params from hex strings


    RSAKey.prototype.setPrivateEx = function (N, E, D, P, Q, DP, DQ, C) {
      if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
        this.d = parseBigInt(D, 16);
        this.p = parseBigInt(P, 16);
        this.q = parseBigInt(Q, 16);
        this.dmp1 = parseBigInt(DP, 16);
        this.dmq1 = parseBigInt(DQ, 16);
        this.coeff = parseBigInt(C, 16);
      } else {
        console.error("Invalid RSA private key");
      }
    }; // RSAKey.prototype.generate = RSAGenerate;
    // Generate a new random private key B bits long, using public expt E


    RSAKey.prototype.generate = function (B, E) {
      var rng = new SecureRandom();
      var qs = B >> 1;
      this.e = parseInt(E, 16);
      var ee = new BigInteger(E, 16);

      for (;;) {
        for (;;) {
          this.p = new BigInteger(B - qs, 1, rng);

          if (this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) {
            break;
          }
        }

        for (;;) {
          this.q = new BigInteger(qs, 1, rng);

          if (this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) {
            break;
          }
        }

        if (this.p.compareTo(this.q) <= 0) {
          var t = this.p;
          this.p = this.q;
          this.q = t;
        }

        var p1 = this.p.subtract(BigInteger.ONE);
        var q1 = this.q.subtract(BigInteger.ONE);
        var phi = p1.multiply(q1);

        if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
          this.n = this.p.multiply(this.q);
          this.d = ee.modInverse(phi);
          this.dmp1 = this.d.mod(p1);
          this.dmq1 = this.d.mod(q1);
          this.coeff = this.q.modInverse(this.p);
          break;
        }
      }
    }; // RSAKey.prototype.decrypt = RSADecrypt;
    // Return the PKCS#1 RSA decryption of "ctext".
    // "ctext" is an even-length hex string and the output is a plain string.
    //修改


    RSAKey.prototype.decrypt = function (ctext) {
      var c = parseBigInt(ctext, 16); // var m = this.doPrivate(c);

      var m = this.doPublic(c);

      if (m == null) {
        return null;
      }

      return pkcs1unpad2(m, this.n.bitLength() + 7 >> 3);
    }; // Generate a new random private key B bits long, using public expt E


    RSAKey.prototype.generateAsync = function (B, E, callback) {
      var rng = new SecureRandom();
      var qs = B >> 1;
      this.e = parseInt(E, 16);
      var ee = new BigInteger(E, 16);
      var rsa = this; // These functions have non-descript names because they were originally for(;;) loops.
      // I don't know about cryptography to give them better names than loop1-4.

      var loop1 = function loop1() {
        var loop4 = function loop4() {
          if (rsa.p.compareTo(rsa.q) <= 0) {
            var t = rsa.p;
            rsa.p = rsa.q;
            rsa.q = t;
          }

          var p1 = rsa.p.subtract(BigInteger.ONE);
          var q1 = rsa.q.subtract(BigInteger.ONE);
          var phi = p1.multiply(q1);

          if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
            rsa.n = rsa.p.multiply(rsa.q);
            rsa.d = ee.modInverse(phi);
            rsa.dmp1 = rsa.d.mod(p1);
            rsa.dmq1 = rsa.d.mod(q1);
            rsa.coeff = rsa.q.modInverse(rsa.p);
            setTimeout(function () {
              callback();
            }, 0); // escape
          } else {
            setTimeout(loop1, 0);
          }
        };

        var loop3 = function loop3() {
          rsa.q = nbi();
          rsa.q.fromNumberAsync(qs, 1, rng, function () {
            rsa.q.subtract(BigInteger.ONE).gcda(ee, function (r) {
              if (r.compareTo(BigInteger.ONE) == 0 && rsa.q.isProbablePrime(10)) {
                setTimeout(loop4, 0);
              } else {
                setTimeout(loop3, 0);
              }
            });
          });
        };

        var loop2 = function loop2() {
          rsa.p = nbi();
          rsa.p.fromNumberAsync(B - qs, 1, rng, function () {
            rsa.p.subtract(BigInteger.ONE).gcda(ee, function (r) {
              if (r.compareTo(BigInteger.ONE) == 0 && rsa.p.isProbablePrime(10)) {
                setTimeout(loop3, 0);
              } else {
                setTimeout(loop2, 0);
              }
            });
          });
        };

        setTimeout(loop2, 0);
      };

      setTimeout(loop1, 0);
    };

    return RSAKey;
  }(); // Undo PKCS#1 (type 2, random) padding and, if valid, return the plaintext
  //修改


  function pkcs1unpad2(d, n) {
    var b = d.toByteArray();
    var i = 0;

    while (i < b.length && b[i] == 0) {
      ++i;
    } // if (b.length - i != n - 1 || b[i] != 2) {
    //     return null;
    // }


    ++i;

    while (b[i] != 0) {
      if (++i >= b.length) {
        return null;
      }
    }

    var ret = "";

    while (++i < b.length) {
      var c = b[i] & 255;

      if (c < 128) {
        ret += String.fromCharCode(c);
      } else if (c > 191 && c < 224) {
        ret += String.fromCharCode((c & 31) << 6 | b[i + 1] & 63);
        ++i;
      } else {
        ret += String.fromCharCode((c & 15) << 12 | (b[i + 1] & 63) << 6 | b[i + 2] & 63);
        i += 2;
      }
    }

    return ret;
  } // Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
  // function RSAEncryptB64(text) {
  //  var h = this.encrypt(text);
  //  if(h) return hex2b64(h); else return null;
  // }
  // public
  // RSAKey.prototype.encrypt_b64 = RSAEncryptB64;

  /*!
  Copyright (c) 2011, Yahoo! Inc. All rights reserved.
  Code licensed under the BSD License:
  http://developer.yahoo.com/yui/license.html
  version: 2.9.0
  */


  var YAHOO = {};
  YAHOO.lang = {
    /**
     * Utility to set up the prototype, constructor and superclass properties to
     * support an inheritance strategy that can chain constructors and methods.
     * Static members will not be inherited.
     *
     * @method extend
     * @static
     * @param {Function} subc   the object to modify
     * @param {Function} superc the object to inherit
     * @param {Object} overrides  additional properties/methods to add to the
     *                              subclass prototype.  These will override the
     *                              matching items obtained from the superclass
     *                              if present.
     */
    extend: function extend(subc, superc, overrides) {
      if (!superc || !subc) {
        throw new Error("YAHOO.lang.extend failed, please check that " + "all dependencies are included.");
      }

      var F = function F() {};

      F.prototype = superc.prototype;
      subc.prototype = new F();
      subc.prototype.constructor = subc;
      subc.superclass = superc.prototype;

      if (superc.prototype.constructor == Object.prototype.constructor) {
        superc.prototype.constructor = superc;
      }

      if (overrides) {
        var i;

        for (i in overrides) {
          subc.prototype[i] = overrides[i];
        }
        /*
         * IE will not enumerate native functions in a derived object even if the
         * function was overridden.  This is a workaround for specific functions
         * we care about on the Object prototype.
         * @property _IEEnumFix
         * @param {Function} r  the object to receive the augmentation
         * @param {Function} s  the object that supplies the properties to augment
         * @static
         * @private
         */


        var _IEEnumFix = function _IEEnumFix() {},
            ADD = ["toString", "valueOf"];

        try {
          if (/MSIE/.test(navigator.userAgent)) {
            _IEEnumFix = function _IEEnumFix(r, s) {
              for (i = 0; i < ADD.length; i = i + 1) {
                var fname = ADD[i],
                    f = s[fname];

                if (typeof f === 'function' && f != Object.prototype[fname]) {
                  r[fname] = f;
                }
              }
            };
          }
        } catch (ex) {}

        _IEEnumFix(subc.prototype, overrides);
      }
    }
  };
  /* asn1-1.0.13.js (c) 2013-2017 Kenji Urushima | kjur.github.com/jsrsasign/license
   */

  /**
   * @fileOverview
   * @name asn1-1.0.js
   * @author Kenji Urushima kenji.urushima@gmail.com
   * @version asn1 1.0.13 (2017-Jun-02)
   * @since jsrsasign 2.1
   * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
   */

  /**
   * kjur's class library name space
   * <p>
   * This name space provides following name spaces:
   * <ul>
   * <li>{@link KJUR.asn1} - ASN.1 primitive hexadecimal encoder</li>
   * <li>{@link KJUR.asn1.x509} - ASN.1 structure for X.509 certificate and CRL</li>
   * <li>{@link KJUR.crypto} - Java Cryptographic Extension(JCE) style MessageDigest/Signature
   * class and utilities</li>
   * </ul>
   * </p>
   * NOTE: Please ignore method summary and document of this namespace. This caused by a bug of jsdoc2.
   * @name KJUR
   * @namespace kjur's class library name space
   */

  var KJUR = {};
  /**
   * kjur's ASN.1 class library name space
   * <p>
   * This is ITU-T X.690 ASN.1 DER encoder class library and
   * class structure and methods is very similar to
   * org.bouncycastle.asn1 package of
   * well known BouncyCaslte Cryptography Library.
   * <h4>PROVIDING ASN.1 PRIMITIVES</h4>
   * Here are ASN.1 DER primitive classes.
   * <ul>
   * <li>0x01 {@link KJUR.asn1.DERBoolean}</li>
   * <li>0x02 {@link KJUR.asn1.DERInteger}</li>
   * <li>0x03 {@link KJUR.asn1.DERBitString}</li>
   * <li>0x04 {@link KJUR.asn1.DEROctetString}</li>
   * <li>0x05 {@link KJUR.asn1.DERNull}</li>
   * <li>0x06 {@link KJUR.asn1.DERObjectIdentifier}</li>
   * <li>0x0a {@link KJUR.asn1.DEREnumerated}</li>
   * <li>0x0c {@link KJUR.asn1.DERUTF8String}</li>
   * <li>0x12 {@link KJUR.asn1.DERNumericString}</li>
   * <li>0x13 {@link KJUR.asn1.DERPrintableString}</li>
   * <li>0x14 {@link KJUR.asn1.DERTeletexString}</li>
   * <li>0x16 {@link KJUR.asn1.DERIA5String}</li>
   * <li>0x17 {@link KJUR.asn1.DERUTCTime}</li>
   * <li>0x18 {@link KJUR.asn1.DERGeneralizedTime}</li>
   * <li>0x30 {@link KJUR.asn1.DERSequence}</li>
   * <li>0x31 {@link KJUR.asn1.DERSet}</li>
   * </ul>
   * <h4>OTHER ASN.1 CLASSES</h4>
   * <ul>
   * <li>{@link KJUR.asn1.ASN1Object}</li>
   * <li>{@link KJUR.asn1.DERAbstractString}</li>
   * <li>{@link KJUR.asn1.DERAbstractTime}</li>
   * <li>{@link KJUR.asn1.DERAbstractStructured}</li>
   * <li>{@link KJUR.asn1.DERTaggedObject}</li>
   * </ul>
   * <h4>SUB NAME SPACES</h4>
   * <ul>
   * <li>{@link KJUR.asn1.cades} - CAdES long term signature format</li>
   * <li>{@link KJUR.asn1.cms} - Cryptographic Message Syntax</li>
   * <li>{@link KJUR.asn1.csr} - Certificate Signing Request (CSR/PKCS#10)</li>
   * <li>{@link KJUR.asn1.tsp} - RFC 3161 Timestamping Protocol Format</li>
   * <li>{@link KJUR.asn1.x509} - RFC 5280 X.509 certificate and CRL</li>
   * </ul>
   * </p>
   * NOTE: Please ignore method summary and document of this namespace.
   * This caused by a bug of jsdoc2.
   * @name KJUR.asn1
   * @namespace
   */

  if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) KJUR.asn1 = {};
  /**
   * ASN1 utilities class
   * @name KJUR.asn1.ASN1Util
   * @class ASN1 utilities class
   * @since asn1 1.0.2
   */

  KJUR.asn1.ASN1Util = new function () {
    this.integerToByteHex = function (i) {
      var h = i.toString(16);
      if (h.length % 2 == 1) h = '0' + h;
      return h;
    };

    this.bigIntToMinTwosComplementsHex = function (bigIntegerValue) {
      var h = bigIntegerValue.toString(16);

      if (h.substr(0, 1) != '-') {
        if (h.length % 2 == 1) {
          h = '0' + h;
        } else {
          if (!h.match(/^[0-7]/)) {
            h = '00' + h;
          }
        }
      } else {
        var hPos = h.substr(1);
        var xorLen = hPos.length;

        if (xorLen % 2 == 1) {
          xorLen += 1;
        } else {
          if (!h.match(/^[0-7]/)) {
            xorLen += 2;
          }
        }

        var hMask = '';

        for (var i = 0; i < xorLen; i++) {
          hMask += 'f';
        }

        var biMask = new BigInteger(hMask, 16);
        var biNeg = biMask.xor(bigIntegerValue).add(BigInteger.ONE);
        h = biNeg.toString(16).replace(/^-/, '');
      }

      return h;
    };
    /**
     * get PEM string from hexadecimal data and header string
     * @name getPEMStringFromHex
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {String} dataHex hexadecimal string of PEM body
     * @param {String} pemHeader PEM header string (ex. 'RSA PRIVATE KEY')
     * @return {String} PEM formatted string of input data
     * @description
     * This method converts a hexadecimal string to a PEM string with
     * a specified header. Its line break will be CRLF("\r\n").
     * @example
     * var pem  = KJUR.asn1.ASN1Util.getPEMStringFromHex('616161', 'RSA PRIVATE KEY');
     * // value of pem will be:
     * -----BEGIN PRIVATE KEY-----
     * YWFh
     * -----END PRIVATE KEY-----
     */


    this.getPEMStringFromHex = function (dataHex, pemHeader) {
      return hextopem(dataHex, pemHeader);
    };
    /**
     * generate ASN1Object specifed by JSON parameters
     * @name newObject
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {Array} param JSON parameter to generate ASN1Object
     * @return {KJUR.asn1.ASN1Object} generated object
     * @since asn1 1.0.3
     * @description
     * generate any ASN1Object specified by JSON param
     * including ASN.1 primitive or structured.
     * Generally 'param' can be described as follows:
     * <blockquote>
     * {TYPE-OF-ASNOBJ: ASN1OBJ-PARAMETER}
     * </blockquote>
     * 'TYPE-OF-ASN1OBJ' can be one of following symbols:
     * <ul>
     * <li>'bool' - DERBoolean</li>
     * <li>'int' - DERInteger</li>
     * <li>'bitstr' - DERBitString</li>
     * <li>'octstr' - DEROctetString</li>
     * <li>'null' - DERNull</li>
     * <li>'oid' - DERObjectIdentifier</li>
     * <li>'enum' - DEREnumerated</li>
     * <li>'utf8str' - DERUTF8String</li>
     * <li>'numstr' - DERNumericString</li>
     * <li>'prnstr' - DERPrintableString</li>
     * <li>'telstr' - DERTeletexString</li>
     * <li>'ia5str' - DERIA5String</li>
     * <li>'utctime' - DERUTCTime</li>
     * <li>'gentime' - DERGeneralizedTime</li>
     * <li>'seq' - DERSequence</li>
     * <li>'set' - DERSet</li>
     * <li>'tag' - DERTaggedObject</li>
     * </ul>
     * @example
     * newObject({'prnstr': 'aaa'});
     * newObject({'seq': [{'int': 3}, {'prnstr': 'aaa'}]})
     * // ASN.1 Tagged Object
     * newObject({'tag': {'tag': 'a1',
     *                    'explicit': true,
     *                    'obj': {'seq': [{'int': 3}, {'prnstr': 'aaa'}]}}});
     * // more simple representation of ASN.1 Tagged Object
     * newObject({'tag': ['a1',
     *                    true,
     *                    {'seq': [
     *                      {'int': 3},
     *                      {'prnstr': 'aaa'}]}
     *                   ]});
     */


    this.newObject = function (param) {
      var _KJUR = KJUR,
          _KJUR_asn1 = _KJUR.asn1,
          _DERBoolean = _KJUR_asn1.DERBoolean,
          _DERInteger = _KJUR_asn1.DERInteger,
          _DERBitString = _KJUR_asn1.DERBitString,
          _DEROctetString = _KJUR_asn1.DEROctetString,
          _DERNull = _KJUR_asn1.DERNull,
          _DERObjectIdentifier = _KJUR_asn1.DERObjectIdentifier,
          _DEREnumerated = _KJUR_asn1.DEREnumerated,
          _DERUTF8String = _KJUR_asn1.DERUTF8String,
          _DERNumericString = _KJUR_asn1.DERNumericString,
          _DERPrintableString = _KJUR_asn1.DERPrintableString,
          _DERTeletexString = _KJUR_asn1.DERTeletexString,
          _DERIA5String = _KJUR_asn1.DERIA5String,
          _DERUTCTime = _KJUR_asn1.DERUTCTime,
          _DERGeneralizedTime = _KJUR_asn1.DERGeneralizedTime,
          _DERSequence = _KJUR_asn1.DERSequence,
          _DERSet = _KJUR_asn1.DERSet,
          _DERTaggedObject = _KJUR_asn1.DERTaggedObject,
          _newObject = _KJUR_asn1.ASN1Util.newObject;
      var keys = Object.keys(param);
      if (keys.length != 1) throw "key of param shall be only one.";
      var key = keys[0];
      if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + key + ":") == -1) throw "undefined key: " + key;
      if (key == "bool") return new _DERBoolean(param[key]);
      if (key == "int") return new _DERInteger(param[key]);
      if (key == "bitstr") return new _DERBitString(param[key]);
      if (key == "octstr") return new _DEROctetString(param[key]);
      if (key == "null") return new _DERNull(param[key]);
      if (key == "oid") return new _DERObjectIdentifier(param[key]);
      if (key == "enum") return new _DEREnumerated(param[key]);
      if (key == "utf8str") return new _DERUTF8String(param[key]);
      if (key == "numstr") return new _DERNumericString(param[key]);
      if (key == "prnstr") return new _DERPrintableString(param[key]);
      if (key == "telstr") return new _DERTeletexString(param[key]);
      if (key == "ia5str") return new _DERIA5String(param[key]);
      if (key == "utctime") return new _DERUTCTime(param[key]);
      if (key == "gentime") return new _DERGeneralizedTime(param[key]);

      if (key == "seq") {
        var paramList = param[key];
        var a = [];

        for (var i = 0; i < paramList.length; i++) {
          var asn1Obj = _newObject(paramList[i]);

          a.push(asn1Obj);
        }

        return new _DERSequence({
          'array': a
        });
      }

      if (key == "set") {
        var paramList = param[key];
        var a = [];

        for (var i = 0; i < paramList.length; i++) {
          var asn1Obj = _newObject(paramList[i]);

          a.push(asn1Obj);
        }

        return new _DERSet({
          'array': a
        });
      }

      if (key == "tag") {
        var tagParam = param[key];

        if (Object.prototype.toString.call(tagParam) === '[object Array]' && tagParam.length == 3) {
          var obj = _newObject(tagParam[2]);

          return new _DERTaggedObject({
            tag: tagParam[0],
            explicit: tagParam[1],
            obj: obj
          });
        } else {
          var newParam = {};
          if (tagParam.explicit !== undefined) newParam.explicit = tagParam.explicit;
          if (tagParam.tag !== undefined) newParam.tag = tagParam.tag;
          if (tagParam.obj === undefined) throw "obj shall be specified for 'tag'.";
          newParam.obj = _newObject(tagParam.obj);
          return new _DERTaggedObject(newParam);
        }
      }
    };
    /**
     * get encoded hexadecimal string of ASN1Object specifed by JSON parameters
     * @name jsonToASN1HEX
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {Array} param JSON parameter to generate ASN1Object
     * @return hexadecimal string of ASN1Object
     * @since asn1 1.0.4
     * @description
     * As for ASN.1 object representation of JSON object,
     * please see {@link newObject}.
     * @example
     * jsonToASN1HEX({'prnstr': 'aaa'});
     */


    this.jsonToASN1HEX = function (param) {
      var asn1Obj = this.newObject(param);
      return asn1Obj.getEncodedHex();
    };
  }();
  /**
   * get dot noted oid number string from hexadecimal value of OID
   * @name oidHexToInt
   * @memberOf KJUR.asn1.ASN1Util
   * @function
   * @param {String} hex hexadecimal value of object identifier
   * @return {String} dot noted string of object identifier
   * @since jsrsasign 4.8.3 asn1 1.0.7
   * @description
   * This static method converts from hexadecimal string representation of
   * ASN.1 value of object identifier to oid number string.
   * @example
   * KJUR.asn1.ASN1Util.oidHexToInt('550406') &rarr; "2.5.4.6"
   */

  KJUR.asn1.ASN1Util.oidHexToInt = function (hex) {
    var s = "";
    var i01 = parseInt(hex.substr(0, 2), 16);
    var i0 = Math.floor(i01 / 40);
    var i1 = i01 % 40;
    var s = i0 + "." + i1;
    var binbuf = "";

    for (var i = 2; i < hex.length; i += 2) {
      var value = parseInt(hex.substr(i, 2), 16);
      var bin = ("00000000" + value.toString(2)).slice(-8);
      binbuf = binbuf + bin.substr(1, 7);

      if (bin.substr(0, 1) == "0") {
        var bi = new BigInteger(binbuf, 2);
        s = s + "." + bi.toString(10);
        binbuf = "";
      }
    }

    return s;
  };
  /**
   * get hexadecimal value of object identifier from dot noted oid value
   * @name oidIntToHex
   * @memberOf KJUR.asn1.ASN1Util
   * @function
   * @param {String} oidString dot noted string of object identifier
   * @return {String} hexadecimal value of object identifier
   * @since jsrsasign 4.8.3 asn1 1.0.7
   * @description
   * This static method converts from object identifier value string.
   * to hexadecimal string representation of it.
   * @example
   * KJUR.asn1.ASN1Util.oidIntToHex("2.5.4.6") &rarr; "550406"
   */


  KJUR.asn1.ASN1Util.oidIntToHex = function (oidString) {
    var itox = function itox(i) {
      var h = i.toString(16);
      if (h.length == 1) h = '0' + h;
      return h;
    };

    var roidtox = function roidtox(roid) {
      var h = '';
      var bi = new BigInteger(roid, 10);
      var b = bi.toString(2);
      var padLen = 7 - b.length % 7;
      if (padLen == 7) padLen = 0;
      var bPad = '';

      for (var i = 0; i < padLen; i++) {
        bPad += '0';
      }

      b = bPad + b;

      for (var i = 0; i < b.length - 1; i += 7) {
        var b8 = b.substr(i, 7);
        if (i != b.length - 7) b8 = '1' + b8;
        h += itox(parseInt(b8, 2));
      }

      return h;
    };

    if (!oidString.match(/^[0-9.]+$/)) {
      throw "malformed oid string: " + oidString;
    }

    var h = '';
    var a = oidString.split('.');
    var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
    h += itox(i0);
    a.splice(0, 2);

    for (var i = 0; i < a.length; i++) {
      h += roidtox(a[i]);
    }

    return h;
  }; // ********************************************************************
  //  Abstract ASN.1 Classes
  // ********************************************************************
  // ********************************************************************

  /**
   * base class for ASN.1 DER encoder object
   * @name KJUR.asn1.ASN1Object
   * @class base class for ASN.1 DER encoder object
   * @property {Boolean} isModified flag whether internal data was changed
   * @property {String} hTLV hexadecimal string of ASN.1 TLV
   * @property {String} hT hexadecimal string of ASN.1 TLV tag(T)
   * @property {String} hL hexadecimal string of ASN.1 TLV length(L)
   * @property {String} hV hexadecimal string of ASN.1 TLV value(V)
   * @description
   */


  KJUR.asn1.ASN1Object = function () {
    var hV = '';
    /**
     * get hexadecimal ASN.1 TLV length(L) bytes from TLV value(V)
     * @name getLengthHexFromValue
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV length(L)
     */

    this.getLengthHexFromValue = function () {
      if (typeof this.hV == "undefined" || this.hV == null) {
        throw "this.hV is null or undefined.";
      }

      if (this.hV.length % 2 == 1) {
        throw "value hex must be even length: n=" + hV.length + ",v=" + this.hV;
      }

      var n = this.hV.length / 2;
      var hN = n.toString(16);

      if (hN.length % 2 == 1) {
        hN = "0" + hN;
      }

      if (n < 128) {
        return hN;
      } else {
        var hNlen = hN.length / 2;

        if (hNlen > 15) {
          throw "ASN.1 length too long to represent by 8x: n = " + n.toString(16);
        }

        var head = 128 + hNlen;
        return head.toString(16) + hN;
      }
    };
    /**
     * get hexadecimal string of ASN.1 TLV bytes
     * @name getEncodedHex
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV
     */


    this.getEncodedHex = function () {
      if (this.hTLV == null || this.isModified) {
        this.hV = this.getFreshValueHex();
        this.hL = this.getLengthHexFromValue();
        this.hTLV = this.hT + this.hL + this.hV;
        this.isModified = false; //alert("first time: " + this.hTLV);
      }

      return this.hTLV;
    };
    /**
     * get hexadecimal string of ASN.1 TLV value(V) bytes
     * @name getValueHex
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV value(V) bytes
     */


    this.getValueHex = function () {
      this.getEncodedHex();
      return this.hV;
    };

    this.getFreshValueHex = function () {
      return '';
    };
  }; // == BEGIN DERAbstractString ================================================

  /**
   * base class for ASN.1 DER string classes
   * @name KJUR.asn1.DERAbstractString
   * @class base class for ASN.1 DER string classes
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @property {String} s internal string of value
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>str - specify initial ASN.1 value(V) by a string</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   */


  KJUR.asn1.DERAbstractString = function (params) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    /**
     * get string value of this string object
     * @name getString
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @return {String} string value of this string object
     */

    this.getString = function () {
      return this.s;
    };
    /**
     * set value by a string
     * @name setString
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @param {String} newS value by a string to set
     */


    this.setString = function (newS) {
      this.hTLV = null;
      this.isModified = true;
      this.s = newS;
      this.hV = stohex(this.s);
    };
    /**
     * set value by a hexadecimal string
     * @name setStringHex
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @param {String} newHexString value by a hexadecimal string to set
     */


    this.setStringHex = function (newHexString) {
      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = newHexString;
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params == "string") {
        this.setString(params);
      } else if (typeof params['str'] != "undefined") {
        this.setString(params['str']);
      } else if (typeof params['hex'] != "undefined") {
        this.setStringHex(params['hex']);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object); // == END   DERAbstractString ================================================
  // == BEGIN DERAbstractTime ==================================================

  /**
   * base class for ASN.1 DER Generalized/UTCTime class
   * @name KJUR.asn1.DERAbstractTime
   * @class base class for ASN.1 DER Generalized/UTCTime class
   * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
   * @extends KJUR.asn1.ASN1Object
   * @description
   * @see KJUR.asn1.ASN1Object - superclass
   */

  KJUR.asn1.DERAbstractTime = function (params) {
    KJUR.asn1.DERAbstractTime.superclass.constructor.call(this); // --- PRIVATE METHODS --------------------

    this.localDateToUTC = function (d) {
      utc = d.getTime() + d.getTimezoneOffset() * 60000;
      var utcDate = new Date(utc);
      return utcDate;
    };
    /*
     * format date string by Data object
     * @name formatDate
     * @memberOf KJUR.asn1.AbstractTime;
     * @param {Date} dateObject
     * @param {string} type 'utc' or 'gen'
     * @param {boolean} withMillis flag for with millisections or not
     * @description
     * 'withMillis' flag is supported from asn1 1.0.6.
     */


    this.formatDate = function (dateObject, type, withMillis) {
      var pad = this.zeroPadding;
      var d = this.localDateToUTC(dateObject);
      var year = String(d.getFullYear());
      if (type == 'utc') year = year.substr(2, 2);
      var month = pad(String(d.getMonth() + 1), 2);
      var day = pad(String(d.getDate()), 2);
      var hour = pad(String(d.getHours()), 2);
      var min = pad(String(d.getMinutes()), 2);
      var sec = pad(String(d.getSeconds()), 2);
      var s = year + month + day + hour + min + sec;

      if (withMillis === true) {
        var millis = d.getMilliseconds();

        if (millis != 0) {
          var sMillis = pad(String(millis), 3);
          sMillis = sMillis.replace(/[0]+$/, "");
          s = s + "." + sMillis;
        }
      }

      return s + "Z";
    };

    this.zeroPadding = function (s, len) {
      if (s.length >= len) return s;
      return new Array(len - s.length + 1).join('0') + s;
    }; // --- PUBLIC METHODS --------------------

    /**
     * get string value of this string object
     * @name getString
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @return {String} string value of this time object
     */


    this.getString = function () {
      return this.s;
    };
    /**
     * set value by a string
     * @name setString
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @param {String} newS value by a string to set such like "130430235959Z"
     */


    this.setString = function (newS) {
      this.hTLV = null;
      this.isModified = true;
      this.s = newS;
      this.hV = stohex(newS);
    };
    /**
     * set value by a Date object
     * @name setByDateValue
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @param {Integer} year year of date (ex. 2013)
     * @param {Integer} month month of date between 1 and 12 (ex. 12)
     * @param {Integer} day day of month
     * @param {Integer} hour hours of date
     * @param {Integer} min minutes of date
     * @param {Integer} sec seconds of date
     */


    this.setByDateValue = function (year, month, day, hour, min, sec) {
      var dateObject = new Date(Date.UTC(year, month - 1, day, hour, min, sec, 0));
      this.setByDate(dateObject);
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };
  };

  YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object); // == END   DERAbstractTime ==================================================
  // == BEGIN DERAbstractStructured ============================================

  /**
   * base class for ASN.1 DER structured class
   * @name KJUR.asn1.DERAbstractStructured
   * @class base class for ASN.1 DER structured class
   * @property {Array} asn1Array internal array of ASN1Object
   * @extends KJUR.asn1.ASN1Object
   * @description
   * @see KJUR.asn1.ASN1Object - superclass
   */

  KJUR.asn1.DERAbstractStructured = function (params) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    /**
     * set value by array of ASN1Object
     * @name setByASN1ObjectArray
     * @memberOf KJUR.asn1.DERAbstractStructured#
     * @function
     * @param {array} asn1ObjectArray array of ASN1Object to set
     */

    this.setByASN1ObjectArray = function (asn1ObjectArray) {
      this.hTLV = null;
      this.isModified = true;
      this.asn1Array = asn1ObjectArray;
    };
    /**
     * append an ASN1Object to internal array
     * @name appendASN1Object
     * @memberOf KJUR.asn1.DERAbstractStructured#
     * @function
     * @param {ASN1Object} asn1Object to add
     */


    this.appendASN1Object = function (asn1Object) {
      this.hTLV = null;
      this.isModified = true;
      this.asn1Array.push(asn1Object);
    };

    this.asn1Array = new Array();

    if (typeof params != "undefined") {
      if (typeof params['array'] != "undefined") {
        this.asn1Array = params['array'];
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object); // ********************************************************************
  //  ASN.1 Object Classes
  // ********************************************************************
  // ********************************************************************

  /**
   * class for ASN.1 DER Boolean
   * @name KJUR.asn1.DERBoolean
   * @class class for ASN.1 DER Boolean
   * @extends KJUR.asn1.ASN1Object
   * @description
   * @see KJUR.asn1.ASN1Object - superclass
   */

  KJUR.asn1.DERBoolean = function () {
    KJUR.asn1.DERBoolean.superclass.constructor.call(this);
    this.hT = "01";
    this.hTLV = "0101ff";
  };

  YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER Integer
   * @name KJUR.asn1.DERInteger
   * @class class for ASN.1 DER Integer
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>int - specify initial ASN.1 value(V) by integer value</li>
   * <li>bigint - specify initial ASN.1 value(V) by BigInteger object</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   */

  KJUR.asn1.DERInteger = function (params) {
    KJUR.asn1.DERInteger.superclass.constructor.call(this);
    this.hT = "02";
    /**
     * set value by Tom Wu's BigInteger object
     * @name setByBigInteger
     * @memberOf KJUR.asn1.DERInteger#
     * @function
     * @param {BigInteger} bigIntegerValue to set
     */

    this.setByBigInteger = function (bigIntegerValue) {
      this.hTLV = null;
      this.isModified = true;
      this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
    };
    /**
     * set value by integer value
     * @name setByInteger
     * @memberOf KJUR.asn1.DERInteger
     * @function
     * @param {Integer} integer value to set
     */


    this.setByInteger = function (intValue) {
      var bi = new BigInteger(String(intValue), 10);
      this.setByBigInteger(bi);
    };
    /**
     * set value by integer value
     * @name setValueHex
     * @memberOf KJUR.asn1.DERInteger#
     * @function
     * @param {String} hexadecimal string of integer value
     * @description
     * <br/>
     * NOTE: Value shall be represented by minimum octet length of
     * two's complement representation.
     * @example
     * new KJUR.asn1.DERInteger(123);
     * new KJUR.asn1.DERInteger({'int': 123});
     * new KJUR.asn1.DERInteger({'hex': '1fad'});
     */


    this.setValueHex = function (newHexString) {
      this.hV = newHexString;
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params['bigint'] != "undefined") {
        this.setByBigInteger(params['bigint']);
      } else if (typeof params['int'] != "undefined") {
        this.setByInteger(params['int']);
      } else if (typeof params == "number") {
        this.setByInteger(params);
      } else if (typeof params['hex'] != "undefined") {
        this.setValueHex(params['hex']);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER encoded BitString primitive
   * @name KJUR.asn1.DERBitString
   * @class class for ASN.1 DER encoded BitString primitive
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>bin - specify binary string (ex. '10111')</li>
   * <li>array - specify array of boolean (ex. [true,false,true,true])</li>
   * <li>hex - specify hexadecimal string of ASN.1 value(V) including unused bits</li>
   * <li>obj - specify {@link KJUR.asn1.ASN1Util.newObject}
   * argument for "BitString encapsulates" structure.</li>
   * </ul>
   * NOTE1: 'params' can be omitted.<br/>
   * NOTE2: 'obj' parameter have been supported since
   * asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).<br/>
   * @example
   * // default constructor
   * o = new KJUR.asn1.DERBitString();
   * // initialize with binary string
   * o = new KJUR.asn1.DERBitString({bin: "1011"});
   * // initialize with boolean array
   * o = new KJUR.asn1.DERBitString({array: [true,false,true,true]});
   * // initialize with hexadecimal string (04 is unused bits)
   * o = new KJUR.asn1.DEROctetString({hex: "04bac0"});
   * // initialize with ASN1Util.newObject argument for encapsulated
   * o = new KJUR.asn1.DERBitString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
   * // above generates a ASN.1 data like this:
   * // BIT STRING, encapsulates {
   * //   SEQUENCE {
   * //     INTEGER 3
   * //     PrintableString 'aaa'
   * //     }
   * //   }
   */

  KJUR.asn1.DERBitString = function (params) {
    if (params !== undefined && typeof params.obj !== "undefined") {
      var o = KJUR.asn1.ASN1Util.newObject(params.obj);
      params.hex = "00" + o.getEncodedHex();
    }

    KJUR.asn1.DERBitString.superclass.constructor.call(this);
    this.hT = "03";
    /**
     * set ASN.1 value(V) by a hexadecimal string including unused bits
     * @name setHexValueIncludingUnusedBits
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {String} newHexStringIncludingUnusedBits
     */

    this.setHexValueIncludingUnusedBits = function (newHexStringIncludingUnusedBits) {
      this.hTLV = null;
      this.isModified = true;
      this.hV = newHexStringIncludingUnusedBits;
    };
    /**
     * set ASN.1 value(V) by unused bit and hexadecimal string of value
     * @name setUnusedBitsAndHexValue
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {Integer} unusedBits
     * @param {String} hValue
     */


    this.setUnusedBitsAndHexValue = function (unusedBits, hValue) {
      if (unusedBits < 0 || 7 < unusedBits) {
        throw "unused bits shall be from 0 to 7: u = " + unusedBits;
      }

      var hUnusedBits = "0" + unusedBits;
      this.hTLV = null;
      this.isModified = true;
      this.hV = hUnusedBits + hValue;
    };
    /**
     * set ASN.1 DER BitString by binary string<br/>
     * @name setByBinaryString
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {String} binaryString binary value string (i.e. '10111')
     * @description
     * Its unused bits will be calculated automatically by length of
     * 'binaryValue'. <br/>
     * NOTE: Trailing zeros '0' will be ignored.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.setByBooleanArray("01011");
     */


    this.setByBinaryString = function (binaryString) {
      binaryString = binaryString.replace(/0+$/, '');
      var unusedBits = 8 - binaryString.length % 8;
      if (unusedBits == 8) unusedBits = 0;

      for (var i = 0; i <= unusedBits; i++) {
        binaryString += '0';
      }

      var h = '';

      for (var i = 0; i < binaryString.length - 1; i += 8) {
        var b = binaryString.substr(i, 8);
        var x = parseInt(b, 2).toString(16);
        if (x.length == 1) x = '0' + x;
        h += x;
      }

      this.hTLV = null;
      this.isModified = true;
      this.hV = '0' + unusedBits + h;
    };
    /**
     * set ASN.1 TLV value(V) by an array of boolean<br/>
     * @name setByBooleanArray
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {array} booleanArray array of boolean (ex. [true, false, true])
     * @description
     * NOTE: Trailing falses will be ignored in the ASN.1 DER Object.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.setByBooleanArray([false, true, false, true, true]);
     */


    this.setByBooleanArray = function (booleanArray) {
      var s = '';

      for (var i = 0; i < booleanArray.length; i++) {
        if (booleanArray[i] == true) {
          s += '1';
        } else {
          s += '0';
        }
      }

      this.setByBinaryString(s);
    };
    /**
     * generate an array of falses with specified length<br/>
     * @name newFalseArray
     * @memberOf KJUR.asn1.DERBitString
     * @function
     * @param {Integer} nLength length of array to generate
     * @return {array} array of boolean falses
     * @description
     * This static method may be useful to initialize boolean array.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.newFalseArray(3) &rarr; [false, false, false]
     */


    this.newFalseArray = function (nLength) {
      var a = new Array(nLength);

      for (var i = 0; i < nLength; i++) {
        a[i] = false;
      }

      return a;
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params == "string" && params.toLowerCase().match(/^[0-9a-f]+$/)) {
        this.setHexValueIncludingUnusedBits(params);
      } else if (typeof params['hex'] != "undefined") {
        this.setHexValueIncludingUnusedBits(params['hex']);
      } else if (typeof params['bin'] != "undefined") {
        this.setByBinaryString(params['bin']);
      } else if (typeof params['array'] != "undefined") {
        this.setByBooleanArray(params['array']);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER OctetString<br/>
   * @name KJUR.asn1.DEROctetString
   * @class class for ASN.1 DER OctetString
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * This class provides ASN.1 OctetString simple type.<br/>
   * Supported "params" attributes are:
   * <ul>
   * <li>str - to set a string as a value</li>
   * <li>hex - to set a hexadecimal string as a value</li>
   * <li>obj - to set a encapsulated ASN.1 value by JSON object
   * which is defined in {@link KJUR.asn1.ASN1Util.newObject}</li>
   * </ul>
   * NOTE: A parameter 'obj' have been supported
   * for "OCTET STRING, encapsulates" structure.
   * since asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).
   * @see KJUR.asn1.DERAbstractString - superclass
   * @example
   * // default constructor
   * o = new KJUR.asn1.DEROctetString();
   * // initialize with string
   * o = new KJUR.asn1.DEROctetString({str: "aaa"});
   * // initialize with hexadecimal string
   * o = new KJUR.asn1.DEROctetString({hex: "616161"});
   * // initialize with ASN1Util.newObject argument
   * o = new KJUR.asn1.DEROctetString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
   * // above generates a ASN.1 data like this:
   * // OCTET STRING, encapsulates {
   * //   SEQUENCE {
   * //     INTEGER 3
   * //     PrintableString 'aaa'
   * //     }
   * //   }
   */

  KJUR.asn1.DEROctetString = function (params) {
    if (params !== undefined && typeof params.obj !== "undefined") {
      var o = KJUR.asn1.ASN1Util.newObject(params.obj);
      params.hex = o.getEncodedHex();
    }

    KJUR.asn1.DEROctetString.superclass.constructor.call(this, params);
    this.hT = "04";
  };

  YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER Null
   * @name KJUR.asn1.DERNull
   * @class class for ASN.1 DER Null
   * @extends KJUR.asn1.ASN1Object
   * @description
   * @see KJUR.asn1.ASN1Object - superclass
   */

  KJUR.asn1.DERNull = function () {
    KJUR.asn1.DERNull.superclass.constructor.call(this);
    this.hT = "05";
    this.hTLV = "0500";
  };

  YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER ObjectIdentifier
   * @name KJUR.asn1.DERObjectIdentifier
   * @class class for ASN.1 DER ObjectIdentifier
   * @param {Array} params associative array of parameters (ex. {'oid': '2.5.4.5'})
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>oid - specify initial ASN.1 value(V) by a oid string (ex. 2.5.4.13)</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   */

  KJUR.asn1.DERObjectIdentifier = function (params) {
    var itox = function itox(i) {
      var h = i.toString(16);
      if (h.length == 1) h = '0' + h;
      return h;
    };

    var roidtox = function roidtox(roid) {
      var h = '';
      var bi = new BigInteger(roid, 10);
      var b = bi.toString(2);
      var padLen = 7 - b.length % 7;
      if (padLen == 7) padLen = 0;
      var bPad = '';

      for (var i = 0; i < padLen; i++) {
        bPad += '0';
      }

      b = bPad + b;

      for (var i = 0; i < b.length - 1; i += 7) {
        var b8 = b.substr(i, 7);
        if (i != b.length - 7) b8 = '1' + b8;
        h += itox(parseInt(b8, 2));
      }

      return h;
    };

    KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
    this.hT = "06";
    /**
     * set value by a hexadecimal string
     * @name setValueHex
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} newHexString hexadecimal value of OID bytes
     */

    this.setValueHex = function (newHexString) {
      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = newHexString;
    };
    /**
     * set value by a OID string<br/>
     * @name setValueOidString
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} oidString OID string (ex. 2.5.4.13)
     * @example
     * o = new KJUR.asn1.DERObjectIdentifier();
     * o.setValueOidString("2.5.4.13");
     */


    this.setValueOidString = function (oidString) {
      if (!oidString.match(/^[0-9.]+$/)) {
        throw "malformed oid string: " + oidString;
      }

      var h = '';
      var a = oidString.split('.');
      var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
      h += itox(i0);
      a.splice(0, 2);

      for (var i = 0; i < a.length; i++) {
        h += roidtox(a[i]);
      }

      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = h;
    };
    /**
     * set value by a OID name
     * @name setValueName
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} oidName OID name (ex. 'serverAuth')
     * @since 1.0.1
     * @description
     * OID name shall be defined in 'KJUR.asn1.x509.OID.name2oidList'.
     * Otherwise raise error.
     * @example
     * o = new KJUR.asn1.DERObjectIdentifier();
     * o.setValueName("serverAuth");
     */


    this.setValueName = function (oidName) {
      var oid = KJUR.asn1.x509.OID.name2oid(oidName);

      if (oid !== '') {
        this.setValueOidString(oid);
      } else {
        throw "DERObjectIdentifier oidName undefined: " + oidName;
      }
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (params !== undefined) {
      if (typeof params === "string") {
        if (params.match(/^[0-2].[0-9.]+$/)) {
          this.setValueOidString(params);
        } else {
          this.setValueName(params);
        }
      } else if (params.oid !== undefined) {
        this.setValueOidString(params.oid);
      } else if (params.hex !== undefined) {
        this.setValueHex(params.hex);
      } else if (params.name !== undefined) {
        this.setValueName(params.name);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER Enumerated
   * @name KJUR.asn1.DEREnumerated
   * @class class for ASN.1 DER Enumerated
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>int - specify initial ASN.1 value(V) by integer value</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   * @example
   * new KJUR.asn1.DEREnumerated(123);
   * new KJUR.asn1.DEREnumerated({int: 123});
   * new KJUR.asn1.DEREnumerated({hex: '1fad'});
   */

  KJUR.asn1.DEREnumerated = function (params) {
    KJUR.asn1.DEREnumerated.superclass.constructor.call(this);
    this.hT = "0a";
    /**
     * set value by Tom Wu's BigInteger object
     * @name setByBigInteger
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {BigInteger} bigIntegerValue to set
     */

    this.setByBigInteger = function (bigIntegerValue) {
      this.hTLV = null;
      this.isModified = true;
      this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
    };
    /**
     * set value by integer value
     * @name setByInteger
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {Integer} integer value to set
     */


    this.setByInteger = function (intValue) {
      var bi = new BigInteger(String(intValue), 10);
      this.setByBigInteger(bi);
    };
    /**
     * set value by integer value
     * @name setValueHex
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {String} hexadecimal string of integer value
     * @description
     * <br/>
     * NOTE: Value shall be represented by minimum octet length of
     * two's complement representation.
     */


    this.setValueHex = function (newHexString) {
      this.hV = newHexString;
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params['int'] != "undefined") {
        this.setByInteger(params['int']);
      } else if (typeof params == "number") {
        this.setByInteger(params);
      } else if (typeof params['hex'] != "undefined") {
        this.setValueHex(params['hex']);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER UTF8String
   * @name KJUR.asn1.DERUTF8String
   * @class class for ASN.1 DER UTF8String
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * @see KJUR.asn1.DERAbstractString - superclass
   */

  KJUR.asn1.DERUTF8String = function (params) {
    KJUR.asn1.DERUTF8String.superclass.constructor.call(this, params);
    this.hT = "0c";
  };

  YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER NumericString
   * @name KJUR.asn1.DERNumericString
   * @class class for ASN.1 DER NumericString
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * @see KJUR.asn1.DERAbstractString - superclass
   */

  KJUR.asn1.DERNumericString = function (params) {
    KJUR.asn1.DERNumericString.superclass.constructor.call(this, params);
    this.hT = "12";
  };

  YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER PrintableString
   * @name KJUR.asn1.DERPrintableString
   * @class class for ASN.1 DER PrintableString
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * @see KJUR.asn1.DERAbstractString - superclass
   */

  KJUR.asn1.DERPrintableString = function (params) {
    KJUR.asn1.DERPrintableString.superclass.constructor.call(this, params);
    this.hT = "13";
  };

  YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER TeletexString
   * @name KJUR.asn1.DERTeletexString
   * @class class for ASN.1 DER TeletexString
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * @see KJUR.asn1.DERAbstractString - superclass
   */

  KJUR.asn1.DERTeletexString = function (params) {
    KJUR.asn1.DERTeletexString.superclass.constructor.call(this, params);
    this.hT = "14";
  };

  YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER IA5String
   * @name KJUR.asn1.DERIA5String
   * @class class for ASN.1 DER IA5String
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * @see KJUR.asn1.DERAbstractString - superclass
   */

  KJUR.asn1.DERIA5String = function (params) {
    KJUR.asn1.DERIA5String.superclass.constructor.call(this, params);
    this.hT = "16";
  };

  YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER UTCTime
   * @name KJUR.asn1.DERUTCTime
   * @class class for ASN.1 DER UTCTime
   * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
   * @extends KJUR.asn1.DERAbstractTime
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>str - specify initial ASN.1 value(V) by a string (ex.'130430235959Z')</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * <li>date - specify Date object.</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   * <h4>EXAMPLES</h4>
   * @example
   * d1 = new KJUR.asn1.DERUTCTime();
   * d1.setString('130430125959Z');
   *
   * d2 = new KJUR.asn1.DERUTCTime({'str': '130430125959Z'});
   * d3 = new KJUR.asn1.DERUTCTime({'date': new Date(Date.UTC(2015, 0, 31, 0, 0, 0, 0))});
   * d4 = new KJUR.asn1.DERUTCTime('130430125959Z');
   */

  KJUR.asn1.DERUTCTime = function (params) {
    KJUR.asn1.DERUTCTime.superclass.constructor.call(this, params);
    this.hT = "17";
    /**
     * set value by a Date object<br/>
     * @name setByDate
     * @memberOf KJUR.asn1.DERUTCTime#
     * @function
     * @param {Date} dateObject Date object to set ASN.1 value(V)
     * @example
     * o = new KJUR.asn1.DERUTCTime();
     * o.setByDate(new Date("2016/12/31"));
     */

    this.setByDate = function (dateObject) {
      this.hTLV = null;
      this.isModified = true;
      this.date = dateObject;
      this.s = this.formatDate(this.date, 'utc');
      this.hV = stohex(this.s);
    };

    this.getFreshValueHex = function () {
      if (typeof this.date == "undefined" && typeof this.s == "undefined") {
        this.date = new Date();
        this.s = this.formatDate(this.date, 'utc');
        this.hV = stohex(this.s);
      }

      return this.hV;
    };

    if (params !== undefined) {
      if (params.str !== undefined) {
        this.setString(params.str);
      } else if (typeof params == "string" && params.match(/^[0-9]{12}Z$/)) {
        this.setString(params);
      } else if (params.hex !== undefined) {
        this.setStringHex(params.hex);
      } else if (params.date !== undefined) {
        this.setByDate(params.date);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime); // ********************************************************************

  /**
   * class for ASN.1 DER GeneralizedTime
   * @name KJUR.asn1.DERGeneralizedTime
   * @class class for ASN.1 DER GeneralizedTime
   * @param {Array} params associative array of parameters (ex. {'str': '20130430235959Z'})
   * @property {Boolean} withMillis flag to show milliseconds or not
   * @extends KJUR.asn1.DERAbstractTime
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>str - specify initial ASN.1 value(V) by a string (ex.'20130430235959Z')</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * <li>date - specify Date object.</li>
   * <li>millis - specify flag to show milliseconds (from 1.0.6)</li>
   * </ul>
   * NOTE1: 'params' can be omitted.
   * NOTE2: 'withMillis' property is supported from asn1 1.0.6.
   */

  KJUR.asn1.DERGeneralizedTime = function (params) {
    KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, params);
    this.hT = "18";
    this.withMillis = false;
    /**
     * set value by a Date object
     * @name setByDate
     * @memberOf KJUR.asn1.DERGeneralizedTime#
     * @function
     * @param {Date} dateObject Date object to set ASN.1 value(V)
     * @example
     * When you specify UTC time, use 'Date.UTC' method like this:<br/>
     * o1 = new DERUTCTime();
     * o1.setByDate(date);
     *
     * date = new Date(Date.UTC(2015, 0, 31, 23, 59, 59, 0)); #2015JAN31 23:59:59
     */

    this.setByDate = function (dateObject) {
      this.hTLV = null;
      this.isModified = true;
      this.date = dateObject;
      this.s = this.formatDate(this.date, 'gen', this.withMillis);
      this.hV = stohex(this.s);
    };

    this.getFreshValueHex = function () {
      if (this.date === undefined && this.s === undefined) {
        this.date = new Date();
        this.s = this.formatDate(this.date, 'gen', this.withMillis);
        this.hV = stohex(this.s);
      }

      return this.hV;
    };

    if (params !== undefined) {
      if (params.str !== undefined) {
        this.setString(params.str);
      } else if (typeof params == "string" && params.match(/^[0-9]{14}Z$/)) {
        this.setString(params);
      } else if (params.hex !== undefined) {
        this.setStringHex(params.hex);
      } else if (params.date !== undefined) {
        this.setByDate(params.date);
      }

      if (params.millis === true) {
        this.withMillis = true;
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime); // ********************************************************************

  /**
   * class for ASN.1 DER Sequence
   * @name KJUR.asn1.DERSequence
   * @class class for ASN.1 DER Sequence
   * @extends KJUR.asn1.DERAbstractStructured
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>array - specify array of ASN1Object to set elements of content</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   */

  KJUR.asn1.DERSequence = function (params) {
    KJUR.asn1.DERSequence.superclass.constructor.call(this, params);
    this.hT = "30";

    this.getFreshValueHex = function () {
      var h = '';

      for (var i = 0; i < this.asn1Array.length; i++) {
        var asn1Obj = this.asn1Array[i];
        h += asn1Obj.getEncodedHex();
      }

      this.hV = h;
      return this.hV;
    };
  };

  YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured); // ********************************************************************

  /**
   * class for ASN.1 DER Set
   * @name KJUR.asn1.DERSet
   * @class class for ASN.1 DER Set
   * @extends KJUR.asn1.DERAbstractStructured
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>array - specify array of ASN1Object to set elements of content</li>
   * <li>sortflag - flag for sort (default: true). ASN.1 BER is not sorted in 'SET OF'.</li>
   * </ul>
   * NOTE1: 'params' can be omitted.<br/>
   * NOTE2: sortflag is supported since 1.0.5.
   */

  KJUR.asn1.DERSet = function (params) {
    KJUR.asn1.DERSet.superclass.constructor.call(this, params);
    this.hT = "31";
    this.sortFlag = true; // item shall be sorted only in ASN.1 DER

    this.getFreshValueHex = function () {
      var a = new Array();

      for (var i = 0; i < this.asn1Array.length; i++) {
        var asn1Obj = this.asn1Array[i];
        a.push(asn1Obj.getEncodedHex());
      }

      if (this.sortFlag == true) a.sort();
      this.hV = a.join('');
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params.sortflag != "undefined" && params.sortflag == false) this.sortFlag = false;
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured); // ********************************************************************

  /**
   * class for ASN.1 DER TaggedObject
   * @name KJUR.asn1.DERTaggedObject
   * @class class for ASN.1 DER TaggedObject
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * Parameter 'tagNoNex' is ASN.1 tag(T) value for this object.
   * For example, if you find '[1]' tag in a ASN.1 dump,
   * 'tagNoHex' will be 'a1'.
   * <br/>
   * As for optional argument 'params' for constructor, you can specify *ANY* of
   * following properties:
   * <ul>
   * <li>explicit - specify true if this is explicit tag otherwise false
   *     (default is 'true').</li>
   * <li>tag - specify tag (default is 'a0' which means [0])</li>
   * <li>obj - specify ASN1Object which is tagged</li>
   * </ul>
   * @example
   * d1 = new KJUR.asn1.DERUTF8String({'str':'a'});
   * d2 = new KJUR.asn1.DERTaggedObject({'obj': d1});
   * hex = d2.getEncodedHex();
   */

  KJUR.asn1.DERTaggedObject = function (params) {
    KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
    this.hT = "a0";
    this.hV = '';
    this.isExplicit = true;
    this.asn1Object = null;
    /**
     * set value by an ASN1Object
     * @name setString
     * @memberOf KJUR.asn1.DERTaggedObject#
     * @function
     * @param {Boolean} isExplicitFlag flag for explicit/implicit tag
     * @param {Integer} tagNoHex hexadecimal string of ASN.1 tag
     * @param {ASN1Object} asn1Object ASN.1 to encapsulate
     */

    this.setASN1Object = function (isExplicitFlag, tagNoHex, asn1Object) {
      this.hT = tagNoHex;
      this.isExplicit = isExplicitFlag;
      this.asn1Object = asn1Object;

      if (this.isExplicit) {
        this.hV = this.asn1Object.getEncodedHex();
        this.hTLV = null;
        this.isModified = true;
      } else {
        this.hV = null;
        this.hTLV = asn1Object.getEncodedHex();
        this.hTLV = this.hTLV.replace(/^../, tagNoHex);
        this.isModified = false;
      }
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params['tag'] != "undefined") {
        this.hT = params['tag'];
      }

      if (typeof params['explicit'] != "undefined") {
        this.isExplicit = params['explicit'];
      }

      if (typeof params['obj'] != "undefined") {
        this.asn1Object = params['obj'];
        this.setASN1Object(this.isExplicit, this.hT, this.asn1Object);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
  /**
   * Create a new JSEncryptRSAKey that extends Tom Wu's RSA key object.
   * This object is just a decorator for parsing the key parameter
   * @param {string|Object} key - The key in string format, or an object containing
   * the parameters needed to build a RSAKey object.
   * @constructor
   */

  var JSEncryptRSAKey =
  /** @class */
  function (_super) {
    __extends(JSEncryptRSAKey, _super);

    function JSEncryptRSAKey(key) {
      var _this = _super.call(this) || this; // Call the super constructor.
      //  RSAKey.call(this);
      // If a key key was provided.


      if (key) {
        // If this is a string...
        if (typeof key === "string") {
          _this.parseKey(key);
        } else if (JSEncryptRSAKey.hasPrivateKeyProperty(key) || JSEncryptRSAKey.hasPublicKeyProperty(key)) {
          // Set the values for the key.
          _this.parsePropertiesFrom(key);
        }
      }

      return _this;
    }
    /**
     * Method to parse a pem encoded string containing both a public or private key.
     * The method will translate the pem encoded string in a der encoded string and
     * will parse private key and public key parameters. This method accepts public key
     * in the rsaencryption pkcs #1 format (oid: 1.2.840.113549.1.1.1).
     *
     * @todo Check how many rsa formats use the same format of pkcs #1.
     *
     * The format is defined as:
     * PublicKeyInfo ::= SEQUENCE {
     *   algorithm       AlgorithmIdentifier,
     *   PublicKey       BIT STRING
     * }
     * Where AlgorithmIdentifier is:
     * AlgorithmIdentifier ::= SEQUENCE {
     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
     * }
     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
     * RSAPublicKey ::= SEQUENCE {
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER   -- e
     * }
     * it's possible to examine the structure of the keys obtained from openssl using
     * an asn.1 dumper as the one used here to parse the components: http://lapo.it/asn1js/
     * @argument {string} pem the pem encoded string, can include the BEGIN/END header/footer
     * @private
     */


    JSEncryptRSAKey.prototype.parseKey = function (pem) {
      try {
        var modulus = 0;
        var public_exponent = 0;
        var reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
        var der = reHex.test(pem) ? Hex.decode(pem) : Base64.unarmor(pem);
        var asn1 = ASN1.decode(der); // Fixes a bug with OpenSSL 1.0+ private keys

        if (asn1.sub.length === 3) {
          asn1 = asn1.sub[2].sub[0];
        }

        if (asn1.sub.length === 9) {
          // Parse the private key.
          modulus = asn1.sub[1].getHexStringValue(); // bigint

          this.n = parseBigInt(modulus, 16);
          public_exponent = asn1.sub[2].getHexStringValue(); // int

          this.e = parseInt(public_exponent, 16);
          var private_exponent = asn1.sub[3].getHexStringValue(); // bigint

          this.d = parseBigInt(private_exponent, 16);
          var prime1 = asn1.sub[4].getHexStringValue(); // bigint

          this.p = parseBigInt(prime1, 16);
          var prime2 = asn1.sub[5].getHexStringValue(); // bigint

          this.q = parseBigInt(prime2, 16);
          var exponent1 = asn1.sub[6].getHexStringValue(); // bigint

          this.dmp1 = parseBigInt(exponent1, 16);
          var exponent2 = asn1.sub[7].getHexStringValue(); // bigint

          this.dmq1 = parseBigInt(exponent2, 16);
          var coefficient = asn1.sub[8].getHexStringValue(); // bigint

          this.coeff = parseBigInt(coefficient, 16);
        } else if (asn1.sub.length === 2) {
          // Parse the public key.
          var bit_string = asn1.sub[1];
          var sequence = bit_string.sub[0];
          modulus = sequence.sub[0].getHexStringValue();
          this.n = parseBigInt(modulus, 16);
          public_exponent = sequence.sub[1].getHexStringValue();
          this.e = parseInt(public_exponent, 16);
        } else {
          return false;
        }

        return true;
      } catch (ex) {
        return false;
      }
    };
    /**
     * Translate rsa parameters in a hex encoded string representing the rsa key.
     *
     * The translation follow the ASN.1 notation :
     * RSAPrivateKey ::= SEQUENCE {
     *   version           Version,
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER,  -- e
     *   privateExponent   INTEGER,  -- d
     *   prime1            INTEGER,  -- p
     *   prime2            INTEGER,  -- q
     *   exponent1         INTEGER,  -- d mod (p1)
     *   exponent2         INTEGER,  -- d mod (q-1)
     *   coefficient       INTEGER,  -- (inverse of q) mod p
     * }
     * @returns {string}  DER Encoded String representing the rsa private key
     * @private
     */


    JSEncryptRSAKey.prototype.getPrivateBaseKey = function () {
      var options = {
        array: [new KJUR.asn1.DERInteger({
          "int": 0
        }), new KJUR.asn1.DERInteger({
          bigint: this.n
        }), new KJUR.asn1.DERInteger({
          "int": this.e
        }), new KJUR.asn1.DERInteger({
          bigint: this.d
        }), new KJUR.asn1.DERInteger({
          bigint: this.p
        }), new KJUR.asn1.DERInteger({
          bigint: this.q
        }), new KJUR.asn1.DERInteger({
          bigint: this.dmp1
        }), new KJUR.asn1.DERInteger({
          bigint: this.dmq1
        }), new KJUR.asn1.DERInteger({
          bigint: this.coeff
        })]
      };
      var seq = new KJUR.asn1.DERSequence(options);
      return seq.getEncodedHex();
    };
    /**
     * base64 (pem) encoded version of the DER encoded representation
     * @returns {string} pem encoded representation without header and footer
     * @public
     */


    JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function () {
      return hex2b64(this.getPrivateBaseKey());
    };
    /**
     * Translate rsa parameters in a hex encoded string representing the rsa public key.
     * The representation follow the ASN.1 notation :
     * PublicKeyInfo ::= SEQUENCE {
     *   algorithm       AlgorithmIdentifier,
     *   PublicKey       BIT STRING
     * }
     * Where AlgorithmIdentifier is:
     * AlgorithmIdentifier ::= SEQUENCE {
     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
     * }
     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
     * RSAPublicKey ::= SEQUENCE {
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER   -- e
     * }
     * @returns {string} DER Encoded String representing the rsa public key
     * @private
     */


    JSEncryptRSAKey.prototype.getPublicBaseKey = function () {
      var first_sequence = new KJUR.asn1.DERSequence({
        array: [new KJUR.asn1.DERObjectIdentifier({
          oid: "1.2.840.113549.1.1.1"
        }), new KJUR.asn1.DERNull()]
      });
      var second_sequence = new KJUR.asn1.DERSequence({
        array: [new KJUR.asn1.DERInteger({
          bigint: this.n
        }), new KJUR.asn1.DERInteger({
          "int": this.e
        })]
      });
      var bit_string = new KJUR.asn1.DERBitString({
        hex: "00" + second_sequence.getEncodedHex()
      });
      var seq = new KJUR.asn1.DERSequence({
        array: [first_sequence, bit_string]
      });
      return seq.getEncodedHex();
    };
    /**
     * base64 (pem) encoded version of the DER encoded representation
     * @returns {string} pem encoded representation without header and footer
     * @public
     */


    JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function () {
      return hex2b64(this.getPublicBaseKey());
    };
    /**
     * wrap the string in block of width chars. The default value for rsa keys is 64
     * characters.
     * @param {string} str the pem encoded string without header and footer
     * @param {Number} [width=64] - the length the string has to be wrapped at
     * @returns {string}
     * @private
     */


    JSEncryptRSAKey.wordwrap = function (str, width) {
      width = width || 64;

      if (!str) {
        return str;
      }

      var regex = "(.{1," + width + "})( +|$\n?)|(.{1," + width + "})";
      return str.match(RegExp(regex, "g")).join("\n");
    };
    /**
     * Retrieve the pem encoded private key
     * @returns {string} the pem encoded private key with header/footer
     * @public
     */


    JSEncryptRSAKey.prototype.getPrivateKey = function () {
      var key = "-----BEGIN RSA PRIVATE KEY-----\n";
      key += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + "\n";
      key += "-----END RSA PRIVATE KEY-----";
      return key;
    };
    /**
     * Retrieve the pem encoded public key
     * @returns {string} the pem encoded public key with header/footer
     * @public
     */


    JSEncryptRSAKey.prototype.getPublicKey = function () {
      var key = "-----BEGIN PUBLIC KEY-----\n";
      key += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + "\n";
      key += "-----END PUBLIC KEY-----";
      return key;
    };
    /**
     * Check if the object contains the necessary parameters to populate the rsa modulus
     * and public exponent parameters.
     * @param {Object} [obj={}] - An object that may contain the two public key
     * parameters
     * @returns {boolean} true if the object contains both the modulus and the public exponent
     * properties (n and e)
     * @todo check for types of n and e. N should be a parseable bigInt object, E should
     * be a parseable integer number
     * @private
     */


    JSEncryptRSAKey.hasPublicKeyProperty = function (obj) {
      obj = obj || {};
      return obj.hasOwnProperty("n") && obj.hasOwnProperty("e");
    };
    /**
     * Check if the object contains ALL the parameters of an RSA key.
     * @param {Object} [obj={}] - An object that may contain nine rsa key
     * parameters
     * @returns {boolean} true if the object contains all the parameters needed
     * @todo check for types of the parameters all the parameters but the public exponent
     * should be parseable bigint objects, the public exponent should be a parseable integer number
     * @private
     */


    JSEncryptRSAKey.hasPrivateKeyProperty = function (obj) {
      obj = obj || {};
      return obj.hasOwnProperty("n") && obj.hasOwnProperty("e") && obj.hasOwnProperty("d") && obj.hasOwnProperty("p") && obj.hasOwnProperty("q") && obj.hasOwnProperty("dmp1") && obj.hasOwnProperty("dmq1") && obj.hasOwnProperty("coeff");
    };
    /**
     * Parse the properties of obj in the current rsa object. Obj should AT LEAST
     * include the modulus and public exponent (n, e) parameters.
     * @param {Object} obj - the object containing rsa parameters
     * @private
     */


    JSEncryptRSAKey.prototype.parsePropertiesFrom = function (obj) {
      this.n = obj.n;
      this.e = obj.e;

      if (obj.hasOwnProperty("d")) {
        this.d = obj.d;
        this.p = obj.p;
        this.q = obj.q;
        this.dmp1 = obj.dmp1;
        this.dmq1 = obj.dmq1;
        this.coeff = obj.coeff;
      }
    };

    return JSEncryptRSAKey;
  }(RSAKey);
  /**
   *
   * @param {Object} [options = {}] - An object to customize JSEncrypt behaviour
   * possible parameters are:
   * - default_key_size        {number}  default: 1024 the key size in bit
   * - default_public_exponent {string}  default: '010001' the hexadecimal representation of the public exponent
   * - log                     {boolean} default: false whether log warn/error or not
   * @constructor
   */


  var JSEncrypt =
  /** @class */
  function () {
    function JSEncrypt(options) {
      options = options || {};
      this.default_key_size = parseInt(options.default_key_size, 10) || 1024;
      this.default_public_exponent = options.default_public_exponent || "010001"; // 65537 default openssl public exponent for rsa key type

      this.log = options.log || false; // The private and public key.

      this.key = null;
    }
    /**
     * Method to set the rsa key parameter (one method is enough to set both the public
     * and the private key, since the private key contains the public key paramenters)
     * Log a warning if logs are enabled
     * @param {Object|string} key the pem encoded string or an object (with or without header/footer)
     * @public
     */


    JSEncrypt.prototype.setKey = function (key) {
      if (this.log && this.key) {
        console.warn("A key was already set, overriding existing.");
      }

      this.key = new JSEncryptRSAKey(key);
    };
    /**
     * Proxy method for setKey, for api compatibility
     * @see setKey
     * @public
     */


    JSEncrypt.prototype.setPrivateKey = function (privkey) {
      // Create the key.
      this.setKey(privkey);
    };
    /**
     * Proxy method for setKey, for api compatibility
     * @see setKey
     * @public
     */


    JSEncrypt.prototype.setPublicKey = function (pubkey) {
      // Sets the public key.
      this.setKey(pubkey);
    };
    /**
     * Proxy method for RSAKey object's decrypt, decrypt the string using the private
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str base64 encoded crypted string to decrypt
     * @return {string} the decrypted string
     * @public
     */


    JSEncrypt.prototype.decrypt = function (str) {
      // Return the decrypted string.
      try {
        return this.getKey().decrypt(b64tohex(str));
      } catch (ex) {
        return false;
      }
    };
    /**
     * Proxy method for RSAKey object's encrypt, encrypt the string using the public
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str the string to encrypt
     * @return {string} the encrypted string encoded in base64
     * @public
     */


    JSEncrypt.prototype.encrypt = function (str) {
      // Return the encrypted string.
      try {
        return hex2b64(this.getKey().encrypt(str));
      } catch (ex) {
        return false;
      }
    };
    /**
     * Getter for the current JSEncryptRSAKey object. If it doesn't exists a new object
     * will be created and returned
     * @param {callback} [cb] the callback to be called if we want the key to be generated
     * in an async fashion
     * @returns {JSEncryptRSAKey} the JSEncryptRSAKey object
     * @public
     */


    JSEncrypt.prototype.getKey = function (cb) {
      // Only create new if it does not exist.
      if (!this.key) {
        // Get a new private key.
        this.key = new JSEncryptRSAKey();

        if (cb && {}.toString.call(cb) === "[object Function]") {
          this.key.generateAsync(this.default_key_size, this.default_public_exponent, cb);
          return;
        } // Generate the key.


        this.key.generate(this.default_key_size, this.default_public_exponent);
      }

      return this.key;
    };
    /**
     * Returns the pem encoded representation of the private key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the private key WITH header and footer
     * @public
     */


    JSEncrypt.prototype.getPrivateKey = function () {
      // Return the private representation of this key.
      return this.getKey().getPrivateKey();
    };
    /**
     * Returns the pem encoded representation of the private key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the private key WITHOUT header and footer
     * @public
     */


    JSEncrypt.prototype.getPrivateKeyB64 = function () {
      // Return the private representation of this key.
      return this.getKey().getPrivateBaseKeyB64();
    };
    /**
     * Returns the pem encoded representation of the public key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the public key WITH header and footer
     * @public
     */


    JSEncrypt.prototype.getPublicKey = function () {
      // Return the private representation of this key.
      return this.getKey().getPublicKey();
    };
    /**
     * Returns the pem encoded representation of the public key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the public key WITHOUT header and footer
     * @public
     */


    JSEncrypt.prototype.getPublicKeyB64 = function () {
      // Return the private representation of this key.
      return this.getKey().getPublicBaseKeyB64();
    };

    JSEncrypt.version = "3.0.0-beta.1";
    return JSEncrypt;
  }();

  window.JSEncrypt = JSEncrypt;
  exports.JSEncrypt = JSEncrypt;
  exports["default"] = JSEncrypt;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZW5jcnlwdC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsIkpTRW5jcnlwdCIsIkJJX1JNIiwiaW50MmNoYXIiLCJuIiwiY2hhckF0Iiwib3BfYW5kIiwieCIsInkiLCJvcF9vciIsIm9wX3hvciIsIm9wX2FuZG5vdCIsImxiaXQiLCJyIiwiY2JpdCIsImI2NG1hcCIsImI2NHBhZCIsImhleDJiNjQiLCJoIiwiaSIsImMiLCJyZXQiLCJsZW5ndGgiLCJwYXJzZUludCIsInN1YnN0cmluZyIsImI2NHRvaGV4IiwicyIsImsiLCJzbG9wIiwidiIsImluZGV4T2YiLCJleHRlbmRTdGF0aWNzIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsImQiLCJiIiwicCIsImhhc093blByb3BlcnR5IiwiX19leHRlbmRzIiwiX18iLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImNyZWF0ZSIsImRlY29kZXIiLCJIZXgiLCJkZWNvZGUiLCJhIiwidW5kZWZpbmVkIiwiaGV4IiwiaWdub3JlIiwidG9Mb3dlckNhc2UiLCJvdXQiLCJiaXRzIiwiY2hhcl9jb3VudCIsIkVycm9yIiwiZGVjb2RlciQxIiwiQmFzZTY0IiwiYjY0IiwicmUiLCJ1bmFybW9yIiwibSIsImV4ZWMiLCJtYXgiLCJJbnQxMCIsInZhbHVlIiwiYnVmIiwibXVsQWRkIiwibCIsInQiLCJzdWIiLCJwb3AiLCJ0b1N0cmluZyIsImJhc2UiLCJ2YWx1ZU9mIiwic2ltcGxpZnkiLCJlbGxpcHNpcyIsInJlVGltZVMiLCJyZVRpbWVMIiwic3RyaW5nQ3V0Iiwic3RyIiwibGVuIiwiU3RyZWFtIiwiZW5jIiwicG9zIiwiaGV4RGlnaXRzIiwiZ2V0IiwiY2hhckNvZGVBdCIsImhleEJ5dGUiLCJoZXhEdW1wIiwic3RhcnQiLCJlbmQiLCJyYXciLCJpc0FTQ0lJIiwicGFyc2VTdHJpbmdJU08iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZVN0cmluZ1VURiIsInBhcnNlU3RyaW5nQk1QIiwiaGkiLCJsbyIsInBhcnNlVGltZSIsInNob3J0WWVhciIsInBhcnNlSW50ZWdlciIsIm5lZyIsInBhZCIsInBhcnNlQml0U3RyaW5nIiwibWF4TGVuZ3RoIiwidW51c2VkQml0IiwibGVuQml0IiwiaW50cm8iLCJza2lwIiwiaiIsInBhcnNlT2N0ZXRTdHJpbmciLCJwYXJzZU9JRCIsIkFTTjEiLCJzdHJlYW0iLCJoZWFkZXIiLCJ0YWciLCJBU04xVGFnIiwidHlwZU5hbWUiLCJ0YWdDbGFzcyIsInRhZ051bWJlciIsImNvbnRlbnQiLCJJbmZpbml0eSIsInBvc0NvbnRlbnQiLCJNYXRoIiwiYWJzIiwiaXNVbml2ZXJzYWwiLCJ0b1ByZXR0eVN0cmluZyIsImluZGVudCIsInRhZ0NvbnN0cnVjdGVkIiwicG9zU3RhcnQiLCJwb3NFbmQiLCJ0b0hleFN0cmluZyIsImRlY29kZUxlbmd0aCIsImdldEhleFN0cmluZ1ZhbHVlIiwiaGV4U3RyaW5nIiwib2Zmc2V0Iiwic3Vic3RyIiwic3RyZWFtU3RhcnQiLCJnZXRTdWIiLCJpc0VPQyIsImUiLCJkYml0cyIsImNhbmFyeSIsImpfbG0iLCJsb3dwcmltZXMiLCJscGxpbSIsIkJpZ0ludGVnZXIiLCJmcm9tTnVtYmVyIiwiZnJvbVN0cmluZyIsIm5lZ2F0ZSIsInRvUmFkaXgiLCJrbSIsIkRCIiwibmJpIiwiWkVSTyIsInN1YlRvIiwiY29tcGFyZVRvIiwiYml0TGVuZ3RoIiwibmJpdHMiLCJETSIsIm1vZCIsImRpdlJlbVRvIiwibW9kUG93SW50IiwieiIsImlzRXZlbiIsIkNsYXNzaWMiLCJNb250Z29tZXJ5IiwiZXhwIiwiY2xvbmUiLCJjb3B5VG8iLCJpbnRWYWx1ZSIsIkRWIiwiYnl0ZVZhbHVlIiwic2hvcnRWYWx1ZSIsInNpZ251bSIsInRvQnl0ZUFycmF5IiwiZXF1YWxzIiwibWluIiwiYW5kIiwiYml0d2lzZVRvIiwib3IiLCJ4b3IiLCJhbmROb3QiLCJub3QiLCJzaGlmdExlZnQiLCJyU2hpZnRUbyIsImxTaGlmdFRvIiwic2hpZnRSaWdodCIsImdldExvd2VzdFNldEJpdCIsImJpdENvdW50IiwidGVzdEJpdCIsImZsb29yIiwic2V0Qml0IiwiY2hhbmdlQml0IiwiY2xlYXJCaXQiLCJmbGlwQml0IiwiYWRkIiwiYWRkVG8iLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwibXVsdGlwbHlUbyIsImRpdmlkZSIsInJlbWFpbmRlciIsImRpdmlkZUFuZFJlbWFpbmRlciIsInEiLCJtb2RQb3ciLCJuYnYiLCJCYXJyZXR0IiwiZyIsImsxIiwiY29udmVydCIsImcyIiwic3FyVG8iLCJtdWxUbyIsInciLCJpczEiLCJyMiIsInJldmVydCIsIm1vZEludmVyc2UiLCJhYyIsInUiLCJPTkUiLCJwb3ciLCJOdWxsRXhwIiwiZ2NkIiwiaXNQcm9iYWJsZVByaW1lIiwibW9kSW50IiwibWlsbGVyUmFiaW4iLCJmcm9tSW50IiwiZnJvbVJhZGl4IiwibWkiLCJzaCIsImludEF0IiwiY2xhbXAiLCJkbFNoaWZ0VG8iLCJkclNoaWZ0VG8iLCJicyIsImNicyIsImJtIiwiZHMiLCJhbSIsInNxdWFyZVRvIiwicG0iLCJwdCIsInRzIiwibXMiLCJuc2giLCJ5cyIsInkwIiwieXQiLCJGMSIsIkYyIiwiZDEiLCJGViIsImQyIiwicWQiLCJpbnZEaWdpdCIsImNodW5rU2l6ZSIsIkxOMiIsImxvZyIsImNzIiwiZE11bHRpcGx5IiwiZEFkZE9mZnNldCIsIm5leHRCeXRlcyIsIm9wIiwiZiIsIm11bHRpcGx5TG93ZXJUbyIsIm11bHRpcGx5VXBwZXJUbyIsIm4xIiwicmFuZG9tIiwic3F1YXJlIiwiZ2NkYSIsImNhbGxiYWNrIiwiZ2NkYTEiLCJzZXRUaW1lb3V0IiwiZnJvbU51bWJlckFzeW5jIiwiYm5wXzEiLCJibnBmbjFfMSIsInJlZHVjZSIsIm1wIiwibXBsIiwibXBoIiwidW0iLCJtdDIiLCJ1MCIsInEzIiwibXUiLCJwYXJzZUJpZ0ludCIsImFtMSIsImFtMiIsInhsIiwieGgiLCJhbTMiLCJuYXZpZ2F0b3IiLCJhcHBOYW1lIiwiQklfRlAiLCJCSV9SQyIsInJyIiwidnYiLCJBcmNmb3VyIiwiUyIsImluaXQiLCJrZXkiLCJuZXh0IiwicHJuZ19uZXdzdGF0ZSIsInJuZ19wc2l6ZSIsInJuZ19zdGF0ZSIsInJuZ19wb29sIiwicm5nX3BwdHIiLCJ3aW5kb3ciLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50MzJBcnJheSIsIm9uTW91c2VNb3ZlTGlzdGVuZXJfMSIsImV2IiwiY291bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGV0YWNoRXZlbnQiLCJtb3VzZUNvb3JkaW5hdGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50Iiwicm5nX2dldF9ieXRlIiwiU2VjdXJlUmFuZG9tIiwiYmEiLCJwa2NzMXBhZDIiLCJjb25zb2xlIiwiZXJyb3IiLCJybmciLCJSU0FLZXkiLCJkbXAxIiwiZG1xMSIsImNvZWZmIiwiZG9QdWJsaWMiLCJkb1ByaXZhdGUiLCJ4cCIsInhxIiwic2V0UHVibGljIiwiTiIsIkUiLCJlbmNyeXB0IiwidGV4dCIsInNldFByaXZhdGUiLCJEIiwic2V0UHJpdmF0ZUV4IiwiUCIsIlEiLCJEUCIsIkRRIiwiQyIsImdlbmVyYXRlIiwiQiIsInFzIiwiZWUiLCJwMSIsInExIiwicGhpIiwiZGVjcnlwdCIsImN0ZXh0IiwicGtjczF1bnBhZDIiLCJnZW5lcmF0ZUFzeW5jIiwicnNhIiwibG9vcDEiLCJsb29wNCIsImxvb3AzIiwibG9vcDIiLCJZQUhPTyIsImxhbmciLCJleHRlbmQiLCJzdWJjIiwic3VwZXJjIiwib3ZlcnJpZGVzIiwiRiIsInN1cGVyY2xhc3MiLCJfSUVFbnVtRml4IiwiQUREIiwidGVzdCIsInVzZXJBZ2VudCIsImZuYW1lIiwiZXgiLCJLSlVSIiwiYXNuMSIsIkFTTjFVdGlsIiwiaW50ZWdlclRvQnl0ZUhleCIsImJpZ0ludFRvTWluVHdvc0NvbXBsZW1lbnRzSGV4IiwiYmlnSW50ZWdlclZhbHVlIiwibWF0Y2giLCJoUG9zIiwieG9yTGVuIiwiaE1hc2siLCJiaU1hc2siLCJiaU5lZyIsInJlcGxhY2UiLCJnZXRQRU1TdHJpbmdGcm9tSGV4IiwiZGF0YUhleCIsInBlbUhlYWRlciIsImhleHRvcGVtIiwibmV3T2JqZWN0IiwicGFyYW0iLCJfS0pVUiIsIl9LSlVSX2FzbjEiLCJfREVSQm9vbGVhbiIsIkRFUkJvb2xlYW4iLCJfREVSSW50ZWdlciIsIkRFUkludGVnZXIiLCJfREVSQml0U3RyaW5nIiwiREVSQml0U3RyaW5nIiwiX0RFUk9jdGV0U3RyaW5nIiwiREVST2N0ZXRTdHJpbmciLCJfREVSTnVsbCIsIkRFUk51bGwiLCJfREVST2JqZWN0SWRlbnRpZmllciIsIkRFUk9iamVjdElkZW50aWZpZXIiLCJfREVSRW51bWVyYXRlZCIsIkRFUkVudW1lcmF0ZWQiLCJfREVSVVRGOFN0cmluZyIsIkRFUlVURjhTdHJpbmciLCJfREVSTnVtZXJpY1N0cmluZyIsIkRFUk51bWVyaWNTdHJpbmciLCJfREVSUHJpbnRhYmxlU3RyaW5nIiwiREVSUHJpbnRhYmxlU3RyaW5nIiwiX0RFUlRlbGV0ZXhTdHJpbmciLCJERVJUZWxldGV4U3RyaW5nIiwiX0RFUklBNVN0cmluZyIsIkRFUklBNVN0cmluZyIsIl9ERVJVVENUaW1lIiwiREVSVVRDVGltZSIsIl9ERVJHZW5lcmFsaXplZFRpbWUiLCJERVJHZW5lcmFsaXplZFRpbWUiLCJfREVSU2VxdWVuY2UiLCJERVJTZXF1ZW5jZSIsIl9ERVJTZXQiLCJERVJTZXQiLCJfREVSVGFnZ2VkT2JqZWN0IiwiREVSVGFnZ2VkT2JqZWN0IiwiX25ld09iamVjdCIsImtleXMiLCJwYXJhbUxpc3QiLCJhc24xT2JqIiwicHVzaCIsInRhZ1BhcmFtIiwiY2FsbCIsIm9iaiIsImV4cGxpY2l0IiwibmV3UGFyYW0iLCJqc29uVG9BU04xSEVYIiwiZ2V0RW5jb2RlZEhleCIsIm9pZEhleFRvSW50IiwiaTAxIiwiaTAiLCJpMSIsImJpbmJ1ZiIsImJpbiIsInNsaWNlIiwiYmkiLCJvaWRJbnRUb0hleCIsIm9pZFN0cmluZyIsIml0b3giLCJyb2lkdG94Iiwicm9pZCIsInBhZExlbiIsImJQYWQiLCJiOCIsInNwbGl0Iiwic3BsaWNlIiwiQVNOMU9iamVjdCIsImhWIiwiZ2V0TGVuZ3RoSGV4RnJvbVZhbHVlIiwiaE4iLCJoTmxlbiIsImhlYWQiLCJoVExWIiwiaXNNb2RpZmllZCIsImdldEZyZXNoVmFsdWVIZXgiLCJoTCIsImhUIiwiZ2V0VmFsdWVIZXgiLCJERVJBYnN0cmFjdFN0cmluZyIsInBhcmFtcyIsImdldFN0cmluZyIsInNldFN0cmluZyIsIm5ld1MiLCJzdG9oZXgiLCJzZXRTdHJpbmdIZXgiLCJuZXdIZXhTdHJpbmciLCJERVJBYnN0cmFjdFRpbWUiLCJsb2NhbERhdGVUb1VUQyIsInV0YyIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInV0Y0RhdGUiLCJEYXRlIiwiZm9ybWF0RGF0ZSIsImRhdGVPYmplY3QiLCJ0eXBlIiwid2l0aE1pbGxpcyIsInplcm9QYWRkaW5nIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwic2VjIiwiZ2V0U2Vjb25kcyIsIm1pbGxpcyIsImdldE1pbGxpc2Vjb25kcyIsInNNaWxsaXMiLCJqb2luIiwic2V0QnlEYXRlVmFsdWUiLCJVVEMiLCJzZXRCeURhdGUiLCJERVJBYnN0cmFjdFN0cnVjdHVyZWQiLCJzZXRCeUFTTjFPYmplY3RBcnJheSIsImFzbjFPYmplY3RBcnJheSIsImFzbjFBcnJheSIsImFwcGVuZEFTTjFPYmplY3QiLCJhc24xT2JqZWN0Iiwic2V0QnlCaWdJbnRlZ2VyIiwic2V0QnlJbnRlZ2VyIiwic2V0VmFsdWVIZXgiLCJvIiwic2V0SGV4VmFsdWVJbmNsdWRpbmdVbnVzZWRCaXRzIiwibmV3SGV4U3RyaW5nSW5jbHVkaW5nVW51c2VkQml0cyIsInNldFVudXNlZEJpdHNBbmRIZXhWYWx1ZSIsInVudXNlZEJpdHMiLCJoVmFsdWUiLCJoVW51c2VkQml0cyIsInNldEJ5QmluYXJ5U3RyaW5nIiwiYmluYXJ5U3RyaW5nIiwic2V0QnlCb29sZWFuQXJyYXkiLCJib29sZWFuQXJyYXkiLCJuZXdGYWxzZUFycmF5Iiwibkxlbmd0aCIsInNldFZhbHVlT2lkU3RyaW5nIiwic2V0VmFsdWVOYW1lIiwib2lkTmFtZSIsIm9pZCIsIng1MDkiLCJPSUQiLCJuYW1lMm9pZCIsIm5hbWUiLCJkYXRlIiwic29ydEZsYWciLCJzb3J0Iiwic29ydGZsYWciLCJpc0V4cGxpY2l0Iiwic2V0QVNOMU9iamVjdCIsImlzRXhwbGljaXRGbGFnIiwidGFnTm9IZXgiLCJKU0VuY3J5cHRSU0FLZXkiLCJfc3VwZXIiLCJfdGhpcyIsInBhcnNlS2V5IiwiaGFzUHJpdmF0ZUtleVByb3BlcnR5IiwiaGFzUHVibGljS2V5UHJvcGVydHkiLCJwYXJzZVByb3BlcnRpZXNGcm9tIiwicGVtIiwibW9kdWx1cyIsInB1YmxpY19leHBvbmVudCIsInJlSGV4IiwiZGVyIiwicHJpdmF0ZV9leHBvbmVudCIsInByaW1lMSIsInByaW1lMiIsImV4cG9uZW50MSIsImV4cG9uZW50MiIsImNvZWZmaWNpZW50IiwiYml0X3N0cmluZyIsInNlcXVlbmNlIiwiZ2V0UHJpdmF0ZUJhc2VLZXkiLCJvcHRpb25zIiwiYXJyYXkiLCJiaWdpbnQiLCJzZXEiLCJnZXRQcml2YXRlQmFzZUtleUI2NCIsImdldFB1YmxpY0Jhc2VLZXkiLCJmaXJzdF9zZXF1ZW5jZSIsInNlY29uZF9zZXF1ZW5jZSIsImdldFB1YmxpY0Jhc2VLZXlCNjQiLCJ3b3Jkd3JhcCIsIndpZHRoIiwicmVnZXgiLCJSZWdFeHAiLCJnZXRQcml2YXRlS2V5IiwiZ2V0UHVibGljS2V5IiwiZGVmYXVsdF9rZXlfc2l6ZSIsImRlZmF1bHRfcHVibGljX2V4cG9uZW50Iiwic2V0S2V5Iiwid2FybiIsInNldFByaXZhdGVLZXkiLCJwcml2a2V5Iiwic2V0UHVibGljS2V5IiwicHVia2V5IiwiZ2V0S2V5IiwiY2IiLCJnZXRQcml2YXRlS2V5QjY0IiwiZ2V0UHVibGljS2V5QjY0IiwidmVyc2lvbiIsImRlZmluZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFDLFdBQVVBLE1BQVYsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQzNCLFNBQU9DLE9BQVAsS0FBbUIsUUFBbkIsSUFBK0IsT0FBT0MsTUFBUCxLQUFrQixXQUFqRCxHQUErREYsT0FBTyxDQUFDQyxPQUFELENBQXRFLEdBQ0EsT0FBT0UsTUFBUCxLQUFrQixVQUFsQixJQUFnQ0EsTUFBTSxDQUFDQyxHQUF2QyxHQUE2Q0QsTUFBTSxDQUFDLENBQUMsU0FBRCxDQUFELEVBQWNILE9BQWQsQ0FBbkQsR0FDQ0EsT0FBTyxDQUFFRCxNQUFNLENBQUNNLFNBQVAsR0FBbUIsRUFBckIsQ0FGUjtBQUdBLENBSkEsVUFJUSxVQUFVSixPQUFWLEVBQW1CO0FBQUU7O0FBRTlCLE1BQUlLLEtBQUssR0FBRyxzQ0FBWjs7QUFDQSxXQUFTQyxRQUFULENBQWtCQyxDQUFsQixFQUFxQjtBQUNqQixXQUFPRixLQUFLLENBQUNHLE1BQU4sQ0FBYUQsQ0FBYixDQUFQO0FBQ0gsR0FMMkIsQ0FNNUI7QUFDQTs7O0FBQ0EsV0FBU0UsTUFBVCxDQUFnQkMsQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0FBQ2xCLFdBQU9ELENBQUMsR0FBR0MsQ0FBWDtBQUNILEdBVjJCLENBVzVCOzs7QUFDQSxXQUFTQyxLQUFULENBQWVGLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQ2pCLFdBQU9ELENBQUMsR0FBR0MsQ0FBWDtBQUNILEdBZDJCLENBZTVCOzs7QUFDQSxXQUFTRSxNQUFULENBQWdCSCxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0I7QUFDbEIsV0FBT0QsQ0FBQyxHQUFHQyxDQUFYO0FBQ0gsR0FsQjJCLENBbUI1Qjs7O0FBQ0EsV0FBU0csU0FBVCxDQUFtQkosQ0FBbkIsRUFBc0JDLENBQXRCLEVBQXlCO0FBQ3JC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Q0E7QUFDQTs7O0FBQ0k5a0IsSUFBQUEsU0FBUyxDQUFDMEMsU0FBVixDQUFvQmdqQixlQUFwQixHQUFzQyxZQUFZO0FBQzlDO0FBQ0EsYUFBTyxLQUFLSCxNQUFMLEdBQWNmLG1CQUFkLEVBQVA7QUFDSCxLQUhEOztBQUlBeGtCLElBQUFBLFNBQVMsQ0FBQzJsQixPQUFWLEdBQW9CLGNBQXBCO0FBQ0EsV0FBTzNsQixTQUFQO0FBQ0gsR0ExSThCLEVBQS9COztBQTRJQXdULEVBQUFBLE1BQU0sQ0FBQ3hULFNBQVAsR0FBbUJBLFNBQW5CO0FBRUFKLEVBQUFBLE9BQU8sQ0FBQ0ksU0FBUixHQUFvQkEsU0FBcEI7QUFDQUosRUFBQUEsT0FBTyxXQUFQLEdBQWtCSSxTQUFsQjtBQUVBK0IsRUFBQUEsTUFBTSxDQUFDNmpCLGNBQVAsQ0FBc0JobUIsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFBRXFFLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQTdDO0FBRUMsQ0FucEtBLENBQUQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cykgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcblx0KGZhY3RvcnkoKGdsb2JhbC5KU0VuY3J5cHQgPSB7fSkpKTtcbn0odGhpcywgKGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIEJJX1JNID0gXCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcbmZ1bmN0aW9uIGludDJjaGFyKG4pIHtcbiAgICByZXR1cm4gQklfUk0uY2hhckF0KG4pO1xufVxuLy8jcmVnaW9uIEJJVF9PUEVSQVRJT05TXG4vLyAocHVibGljKSB0aGlzICYgYVxuZnVuY3Rpb24gb3BfYW5kKHgsIHkpIHtcbiAgICByZXR1cm4geCAmIHk7XG59XG4vLyAocHVibGljKSB0aGlzIHwgYVxuZnVuY3Rpb24gb3Bfb3IoeCwgeSkge1xuICAgIHJldHVybiB4IHwgeTtcbn1cbi8vIChwdWJsaWMpIHRoaXMgXiBhXG5mdW5jdGlvbiBvcF94b3IoeCwgeSkge1xuICAgIHJldHVybiB4IF4geTtcbn1cbi8vIChwdWJsaWMpIHRoaXMgJiB+YVxuZnVuY3Rpb24gb3BfYW5kbm90KHgsIHkpIHtcbiAgICByZXR1cm4geCAmIH55O1xufVxuLy8gcmV0dXJuIGluZGV4IG9mIGxvd2VzdCAxLWJpdCBpbiB4LCB4IDwgMl4zMVxuZnVuY3Rpb24gbGJpdCh4KSB7XG4gICAgaWYgKHggPT0gMCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHZhciByID0gMDtcbiAgICBpZiAoKHggJiAweGZmZmYpID09IDApIHtcbiAgICAgICAgeCA+Pj0gMTY7XG4gICAgICAgIHIgKz0gMTY7XG4gICAgfVxuICAgIGlmICgoeCAmIDB4ZmYpID09IDApIHtcbiAgICAgICAgeCA+Pj0gODtcbiAgICAgICAgciArPSA4O1xuICAgIH1cbiAgICBpZiAoKHggJiAweGYpID09IDApIHtcbiAgICAgICAgeCA+Pj0gNDtcbiAgICAgICAgciArPSA0O1xuICAgIH1cbiAgICBpZiAoKHggJiAzKSA9PSAwKSB7XG4gICAgICAgIHggPj49IDI7XG4gICAgICAgIHIgKz0gMjtcbiAgICB9XG4gICAgaWYgKCh4ICYgMSkgPT0gMCkge1xuICAgICAgICArK3I7XG4gICAgfVxuICAgIHJldHVybiByO1xufVxuLy8gcmV0dXJuIG51bWJlciBvZiAxIGJpdHMgaW4geFxuZnVuY3Rpb24gY2JpdCh4KSB7XG4gICAgdmFyIHIgPSAwO1xuICAgIHdoaWxlICh4ICE9IDApIHtcbiAgICAgICAgeCAmPSB4IC0gMTtcbiAgICAgICAgKytyO1xuICAgIH1cbiAgICByZXR1cm4gcjtcbn1cbi8vI2VuZHJlZ2lvbiBCSVRfT1BFUkFUSU9OU1xuXG52YXIgYjY0bWFwID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG52YXIgYjY0cGFkID0gXCI9XCI7XG5mdW5jdGlvbiBoZXgyYjY0KGgpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgYztcbiAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICBmb3IgKGkgPSAwOyBpICsgMyA8PSBoLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgIGMgPSBwYXJzZUludChoLnN1YnN0cmluZyhpLCBpICsgMyksIDE2KTtcbiAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA+PiA2KSArIGI2NG1hcC5jaGFyQXQoYyAmIDYzKTtcbiAgICB9XG4gICAgaWYgKGkgKyAxID09IGgubGVuZ3RoKSB7XG4gICAgICAgIGMgPSBwYXJzZUludChoLnN1YnN0cmluZyhpLCBpICsgMSksIDE2KTtcbiAgICAgICAgcmV0ICs9IGI2NG1hcC5jaGFyQXQoYyA8PCAyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaSArIDIgPT0gaC5sZW5ndGgpIHtcbiAgICAgICAgYyA9IHBhcnNlSW50KGguc3Vic3RyaW5nKGksIGkgKyAyKSwgMTYpO1xuICAgICAgICByZXQgKz0gYjY0bWFwLmNoYXJBdChjID4+IDIpICsgYjY0bWFwLmNoYXJBdCgoYyAmIDMpIDw8IDQpO1xuICAgIH1cbiAgICB3aGlsZSAoKHJldC5sZW5ndGggJiAzKSA+IDApIHtcbiAgICAgICAgcmV0ICs9IGI2NHBhZDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cbi8vIGNvbnZlcnQgYSBiYXNlNjQgc3RyaW5nIHRvIGhleFxuZnVuY3Rpb24gYjY0dG9oZXgocykge1xuICAgIHZhciByZXQgPSBcIlwiO1xuICAgIHZhciBpO1xuICAgIHZhciBrID0gMDsgLy8gYjY0IHN0YXRlLCAwLTNcbiAgICB2YXIgc2xvcCA9IDA7XG4gICAgZm9yIChpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHMuY2hhckF0KGkpID09IGI2NHBhZCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHYgPSBiNjRtYXAuaW5kZXhPZihzLmNoYXJBdChpKSk7XG4gICAgICAgIGlmICh2IDwgMCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGsgPT0gMCkge1xuICAgICAgICAgICAgcmV0ICs9IGludDJjaGFyKHYgPj4gMik7XG4gICAgICAgICAgICBzbG9wID0gdiAmIDM7XG4gICAgICAgICAgICBrID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrID09IDEpIHtcbiAgICAgICAgICAgIHJldCArPSBpbnQyY2hhcigoc2xvcCA8PCAyKSB8ICh2ID4+IDQpKTtcbiAgICAgICAgICAgIHNsb3AgPSB2ICYgMHhmO1xuICAgICAgICAgICAgayA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoayA9PSAyKSB7XG4gICAgICAgICAgICByZXQgKz0gaW50MmNoYXIoc2xvcCk7XG4gICAgICAgICAgICByZXQgKz0gaW50MmNoYXIodiA+PiAyKTtcbiAgICAgICAgICAgIHNsb3AgPSB2ICYgMztcbiAgICAgICAgICAgIGsgPSAzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0ICs9IGludDJjaGFyKChzbG9wIDw8IDIpIHwgKHYgPj4gNCkpO1xuICAgICAgICAgICAgcmV0ICs9IGludDJjaGFyKHYgJiAweGYpO1xuICAgICAgICAgICAgayA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGsgPT0gMSkge1xuICAgICAgICByZXQgKz0gaW50MmNoYXIoc2xvcCA8PCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxuXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcblxuZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuLy8gSGV4IEphdmFTY3JpcHQgZGVjb2RlclxuLy8gQ29weXJpZ2h0IChjKSAyMDA4LTIwMTMgTGFwbyBMdWNoaW5pIDxsYXBvQGxhcG8uaXQ+XG4vLyBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbi8vIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbi8vIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4vLyBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4vLyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbi8vIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4vLyBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCBpbW1lZDogdHJ1ZSwgbGF0ZWRlZjogdHJ1ZSwgdW5kZWY6IHRydWUsIHJlZ2V4ZGFzaDogZmFsc2UgKi9cbnZhciBkZWNvZGVyO1xudmFyIEhleCA9IHtcbiAgICBkZWNvZGU6IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAoZGVjb2RlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgaGV4ID0gXCIwMTIzNDU2Nzg5QUJDREVGXCI7XG4gICAgICAgICAgICB2YXIgaWdub3JlID0gXCIgXFxmXFxuXFxyXFx0XFx1MDBBMFxcdTIwMjhcXHUyMDI5XCI7XG4gICAgICAgICAgICBkZWNvZGVyID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgICAgICAgICAgIGRlY29kZXJbaGV4LmNoYXJBdChpKV0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGV4ID0gaGV4LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBmb3IgKGkgPSAxMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgICAgICAgICAgICBkZWNvZGVyW2hleC5jaGFyQXQoaSldID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpZ25vcmUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBkZWNvZGVyW2lnbm9yZS5jaGFyQXQoaSldID0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICB2YXIgYml0cyA9IDA7XG4gICAgICAgIHZhciBjaGFyX2NvdW50ID0gMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBjID0gYS5jaGFyQXQoaSk7XG4gICAgICAgICAgICBpZiAoYyA9PSBcIj1cIikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYyA9IGRlY29kZXJbY107XG4gICAgICAgICAgICBpZiAoYyA9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklsbGVnYWwgY2hhcmFjdGVyIGF0IG9mZnNldCBcIiArIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYml0cyB8PSBjO1xuICAgICAgICAgICAgaWYgKCsrY2hhcl9jb3VudCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgb3V0W291dC5sZW5ndGhdID0gYml0cztcbiAgICAgICAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAgICAgICBjaGFyX2NvdW50ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpdHMgPDw9IDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXJfY291bnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhleCBlbmNvZGluZyBpbmNvbXBsZXRlOiA0IGJpdHMgbWlzc2luZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbn07XG5cbi8vIEJhc2U2NCBKYXZhU2NyaXB0IGRlY29kZXJcbi8vIENvcHlyaWdodCAoYykgMjAwOC0yMDEzIExhcG8gTHVjaGluaSA8bGFwb0BsYXBvLml0PlxuLy8gUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG4vLyBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQsIHByb3ZpZGVkIHRoYXQgdGhlIGFib3ZlXG4vLyBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIGFwcGVhciBpbiBhbGwgY29waWVzLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTXG4vLyBXSVRIIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUlxuLy8gQU5ZIFNQRUNJQUwsIERJUkVDVCwgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFU1xuLy8gV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTSBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOXG4vLyBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1IgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRlxuLy8gT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1IgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgaW1tZWQ6IHRydWUsIGxhdGVkZWY6IHRydWUsIHVuZGVmOiB0cnVlLCByZWdleGRhc2g6IGZhbHNlICovXG52YXIgZGVjb2RlciQxO1xudmFyIEJhc2U2NCA9IHtcbiAgICBkZWNvZGU6IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciBpO1xuICAgICAgICBpZiAoZGVjb2RlciQxID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBiNjQgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcbiAgICAgICAgICAgIHZhciBpZ25vcmUgPSBcIj0gXFxmXFxuXFxyXFx0XFx1MDBBMFxcdTIwMjhcXHUyMDI5XCI7XG4gICAgICAgICAgICBkZWNvZGVyJDEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IDY0OyArK2kpIHtcbiAgICAgICAgICAgICAgICBkZWNvZGVyJDFbYjY0LmNoYXJBdChpKV0gPSBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGlnbm9yZS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGRlY29kZXIkMVtpZ25vcmUuY2hhckF0KGkpXSA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBvdXQgPSBbXTtcbiAgICAgICAgdmFyIGJpdHMgPSAwO1xuICAgICAgICB2YXIgY2hhcl9jb3VudCA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgYyA9IGEuY2hhckF0KGkpO1xuICAgICAgICAgICAgaWYgKGMgPT0gXCI9XCIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGMgPSBkZWNvZGVyJDFbY107XG4gICAgICAgICAgICBpZiAoYyA9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklsbGVnYWwgY2hhcmFjdGVyIGF0IG9mZnNldCBcIiArIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYml0cyB8PSBjO1xuICAgICAgICAgICAgaWYgKCsrY2hhcl9jb3VudCA+PSA0KSB7XG4gICAgICAgICAgICAgICAgb3V0W291dC5sZW5ndGhdID0gKGJpdHMgPj4gMTYpO1xuICAgICAgICAgICAgICAgIG91dFtvdXQubGVuZ3RoXSA9IChiaXRzID4+IDgpICYgMHhGRjtcbiAgICAgICAgICAgICAgICBvdXRbb3V0Lmxlbmd0aF0gPSBiaXRzICYgMHhGRjtcbiAgICAgICAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAgICAgICBjaGFyX2NvdW50ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpdHMgPDw9IDY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChjaGFyX2NvdW50KSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmFzZTY0IGVuY29kaW5nIGluY29tcGxldGU6IGF0IGxlYXN0IDIgYml0cyBtaXNzaW5nXCIpO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIG91dFtvdXQubGVuZ3RoXSA9IChiaXRzID4+IDEwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBvdXRbb3V0Lmxlbmd0aF0gPSAoYml0cyA+PiAxNik7XG4gICAgICAgICAgICAgICAgb3V0W291dC5sZW5ndGhdID0gKGJpdHMgPj4gOCkgJiAweEZGO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfSxcbiAgICByZTogLy0tLS0tQkVHSU4gW14tXSstLS0tLShbQS1aYS16MC05K1xcLz1cXHNdKyktLS0tLUVORCBbXi1dKy0tLS0tfGJlZ2luLWJhc2U2NFteXFxuXStcXG4oW0EtWmEtejAtOStcXC89XFxzXSspPT09PS8sXG4gICAgdW5hcm1vcjogZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIG0gPSBCYXNlNjQucmUuZXhlYyhhKTtcbiAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgIGlmIChtWzFdKSB7XG4gICAgICAgICAgICAgICAgYSA9IG1bMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChtWzJdKSB7XG4gICAgICAgICAgICAgICAgYSA9IG1bMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWdFeHAgb3V0IG9mIHN5bmNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEJhc2U2NC5kZWNvZGUoYSk7XG4gICAgfVxufTtcblxuLy8gQmlnIGludGVnZXIgYmFzZS0xMCBwcmludGluZyBsaWJyYXJ5XG4vLyBDb3B5cmlnaHQgKGMpIDIwMTQgTGFwbyBMdWNoaW5pIDxsYXBvQGxhcG8uaXQ+XG4vLyBQZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbi8vIHB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZCwgcHJvdmlkZWQgdGhhdCB0aGUgYWJvdmVcbi8vIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2UgYXBwZWFyIGluIGFsbCBjb3BpZXMuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVNcbi8vIFdJVEggUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SXG4vLyBBTlkgU1BFQ0lBTCwgRElSRUNULCBJTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTXG4vLyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NIExPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU5cbi8vIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUiBPVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GXG4vLyBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUiBQRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiB0cnVlLCBpbW1lZDogdHJ1ZSwgbGF0ZWRlZjogdHJ1ZSwgdW5kZWY6IHRydWUsIHJlZ2V4ZGFzaDogZmFsc2UgKi9cbnZhciBtYXggPSAxMDAwMDAwMDAwMDAwMDsgLy8gYmlnZ2VzdCBpbnRlZ2VyIHRoYXQgY2FuIHN0aWxsIGZpdCAyXjUzIHdoZW4gbXVsdGlwbGllZCBieSAyNTZcbnZhciBJbnQxMCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbnQxMCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmJ1ZiA9IFsrdmFsdWUgfHwgMF07XG4gICAgfVxuICAgIEludDEwLnByb3RvdHlwZS5tdWxBZGQgPSBmdW5jdGlvbiAobSwgYykge1xuICAgICAgICAvLyBhc3NlcnQobSA8PSAyNTYpXG4gICAgICAgIHZhciBiID0gdGhpcy5idWY7XG4gICAgICAgIHZhciBsID0gYi5sZW5ndGg7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7ICsraSkge1xuICAgICAgICAgICAgdCA9IGJbaV0gKiBtICsgYztcbiAgICAgICAgICAgIGlmICh0IDwgbWF4KSB7XG4gICAgICAgICAgICAgICAgYyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjID0gMCB8ICh0IC8gbWF4KTtcbiAgICAgICAgICAgICAgICB0IC09IGMgKiBtYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiW2ldID0gdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA+IDApIHtcbiAgICAgICAgICAgIGJbaV0gPSBjO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbnQxMC5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgLy8gYXNzZXJ0KG0gPD0gMjU2KVxuICAgICAgICB2YXIgYiA9IHRoaXMuYnVmO1xuICAgICAgICB2YXIgbCA9IGIubGVuZ3RoO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIHQ7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyArK2kpIHtcbiAgICAgICAgICAgIHQgPSBiW2ldIC0gYztcbiAgICAgICAgICAgIGlmICh0IDwgMCkge1xuICAgICAgICAgICAgICAgIHQgKz0gbWF4O1xuICAgICAgICAgICAgICAgIGMgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiW2ldID0gdDtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoYltiLmxlbmd0aCAtIDFdID09PSAwKSB7XG4gICAgICAgICAgICBiLnBvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBJbnQxMC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoYmFzZSkge1xuICAgICAgICBpZiAoKGJhc2UgfHwgMTApICE9IDEwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IGJhc2UgMTAgaXMgc3VwcG9ydGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBiID0gdGhpcy5idWY7XG4gICAgICAgIHZhciBzID0gYltiLmxlbmd0aCAtIDFdLnRvU3RyaW5nKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSBiLmxlbmd0aCAtIDI7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICBzICs9IChtYXggKyBiW2ldKS50b1N0cmluZygpLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIEludDEwLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYiA9IHRoaXMuYnVmO1xuICAgICAgICB2YXIgdiA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSBiLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICB2ID0gdiAqIG1heCArIGJbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbiAgICBJbnQxMC5wcm90b3R5cGUuc2ltcGxpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBiID0gdGhpcy5idWY7XG4gICAgICAgIHJldHVybiAoYi5sZW5ndGggPT0gMSkgPyBiWzBdIDogdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBJbnQxMDtcbn0oKSk7XG5cbi8vIEFTTi4xIEphdmFTY3JpcHQgZGVjb2RlclxudmFyIGVsbGlwc2lzID0gXCJcXHUyMDI2XCI7XG52YXIgcmVUaW1lUyA9IC9eKFxcZFxcZCkoMFsxLTldfDFbMC0yXSkoMFsxLTldfFsxMl1cXGR8M1swMV0pKFswMV1cXGR8MlswLTNdKSg/OihbMC01XVxcZCkoPzooWzAtNV1cXGQpKD86Wy4sXShcXGR7MSwzfSkpPyk/KT8oWnxbLStdKD86WzBdXFxkfDFbMC0yXSkoWzAtNV1cXGQpPyk/JC87XG52YXIgcmVUaW1lTCA9IC9eKFxcZFxcZFxcZFxcZCkoMFsxLTldfDFbMC0yXSkoMFsxLTldfFsxMl1cXGR8M1swMV0pKFswMV1cXGR8MlswLTNdKSg/OihbMC01XVxcZCkoPzooWzAtNV1cXGQpKD86Wy4sXShcXGR7MSwzfSkpPyk/KT8oWnxbLStdKD86WzBdXFxkfDFbMC0yXSkoWzAtNV1cXGQpPyk/JC87XG5mdW5jdGlvbiBzdHJpbmdDdXQoc3RyLCBsZW4pIHtcbiAgICBpZiAoc3RyLmxlbmd0aCA+IGxlbikge1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGxlbikgKyBlbGxpcHNpcztcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbnZhciBTdHJlYW0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3RyZWFtKGVuYywgcG9zKSB7XG4gICAgICAgIHRoaXMuaGV4RGlnaXRzID0gXCIwMTIzNDU2Nzg5QUJDREVGXCI7XG4gICAgICAgIGlmIChlbmMgaW5zdGFuY2VvZiBTdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMuZW5jID0gZW5jLmVuYztcbiAgICAgICAgICAgIHRoaXMucG9zID0gZW5jLnBvcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVuYyBzaG91bGQgYmUgYW4gYXJyYXkgb3IgYSBiaW5hcnkgc3RyaW5nXG4gICAgICAgICAgICB0aGlzLmVuYyA9IGVuYztcbiAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xuICAgICAgICB9XG4gICAgfVxuICAgIFN0cmVhbS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHBvcykge1xuICAgICAgICBpZiAocG9zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBvcyA9IHRoaXMucG9zKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvcyA+PSB0aGlzLmVuYy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVlc3RpbmcgYnl0ZSBvZmZzZXQgXCIgKyBwb3MgKyBcIiBvbiBhIHN0cmVhbSBvZiBsZW5ndGggXCIgKyB0aGlzLmVuYy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gdHlwZW9mIHRoaXMuZW5jKSA/IHRoaXMuZW5jLmNoYXJDb2RlQXQocG9zKSA6IHRoaXMuZW5jW3Bvc107XG4gICAgfTtcbiAgICBTdHJlYW0ucHJvdG90eXBlLmhleEJ5dGUgPSBmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gdGhpcy5oZXhEaWdpdHMuY2hhckF0KChiID4+IDQpICYgMHhGKSArIHRoaXMuaGV4RGlnaXRzLmNoYXJBdChiICYgMHhGKTtcbiAgICB9O1xuICAgIFN0cmVhbS5wcm90b3R5cGUuaGV4RHVtcCA9IGZ1bmN0aW9uIChzdGFydCwgZW5kLCByYXcpIHtcbiAgICAgICAgdmFyIHMgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgICAgICAgcyArPSB0aGlzLmhleEJ5dGUodGhpcy5nZXQoaSkpO1xuICAgICAgICAgICAgaWYgKHJhdyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaSAmIDB4Rikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4NzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgKz0gXCIgIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHhGOlxuICAgICAgICAgICAgICAgICAgICAgICAgcyArPSBcIlxcblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBzICs9IFwiIFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIFN0cmVhbS5wcm90b3R5cGUuaXNBU0NJSSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMuZ2V0KGkpO1xuICAgICAgICAgICAgaWYgKGMgPCAzMiB8fCBjID4gMTc2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgU3RyZWFtLnByb3RvdHlwZS5wYXJzZVN0cmluZ0lTTyA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgIHZhciBzID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgICAgICAgIHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh0aGlzLmdldChpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfTtcbiAgICBTdHJlYW0ucHJvdG90eXBlLnBhcnNlU3RyaW5nVVRGID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgdmFyIHMgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7KSB7XG4gICAgICAgICAgICB2YXIgYyA9IHRoaXMuZ2V0KGkrKyk7XG4gICAgICAgICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICAgICAgICAgIHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChjID4gMTkxKSAmJiAoYyA8IDIyNCkpIHtcbiAgICAgICAgICAgICAgICBzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMHgxRikgPDwgNikgfCAodGhpcy5nZXQoaSsrKSAmIDB4M0YpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAweDBGKSA8PCAxMikgfCAoKHRoaXMuZ2V0KGkrKykgJiAweDNGKSA8PCA2KSB8ICh0aGlzLmdldChpKyspICYgMHgzRikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzO1xuICAgIH07XG4gICAgU3RyZWFtLnByb3RvdHlwZS5wYXJzZVN0cmluZ0JNUCA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgICAgIHZhciBzdHIgPSBcIlwiO1xuICAgICAgICB2YXIgaGk7XG4gICAgICAgIHZhciBsbztcbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOykge1xuICAgICAgICAgICAgaGkgPSB0aGlzLmdldChpKyspO1xuICAgICAgICAgICAgbG8gPSB0aGlzLmdldChpKyspO1xuICAgICAgICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGhpIDw8IDgpIHwgbG8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfTtcbiAgICBTdHJlYW0ucHJvdG90eXBlLnBhcnNlVGltZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kLCBzaG9ydFllYXIpIHtcbiAgICAgICAgdmFyIHMgPSB0aGlzLnBhcnNlU3RyaW5nSVNPKHN0YXJ0LCBlbmQpO1xuICAgICAgICB2YXIgbSA9IChzaG9ydFllYXIgPyByZVRpbWVTIDogcmVUaW1lTCkuZXhlYyhzKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJVbnJlY29nbml6ZWQgdGltZTogXCIgKyBzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG9ydFllYXIpIHtcbiAgICAgICAgICAgIC8vIHRvIGF2b2lkIHF1ZXJ5aW5nIHRoZSB0aW1lciwgdXNlIHRoZSBmaXhlZCByYW5nZSBbMTk3MCwgMjA2OV1cbiAgICAgICAgICAgIC8vIGl0IHdpbGwgY29uZm9ybSB3aXRoIElUVSBYLjQwMCBbLTEwLCArNDBdIHNsaWRpbmcgd2luZG93IHVudGlsIDIwMzBcbiAgICAgICAgICAgIG1bMV0gPSArbVsxXTtcbiAgICAgICAgICAgIG1bMV0gKz0gKCttWzFdIDwgNzApID8gMjAwMCA6IDE5MDA7XG4gICAgICAgIH1cbiAgICAgICAgcyA9IG1bMV0gKyBcIi1cIiArIG1bMl0gKyBcIi1cIiArIG1bM10gKyBcIiBcIiArIG1bNF07XG4gICAgICAgIGlmIChtWzVdKSB7XG4gICAgICAgICAgICBzICs9IFwiOlwiICsgbVs1XTtcbiAgICAgICAgICAgIGlmIChtWzZdKSB7XG4gICAgICAgICAgICAgICAgcyArPSBcIjpcIiArIG1bNl07XG4gICAgICAgICAgICAgICAgaWYgKG1bN10pIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBcIi5cIiArIG1bN107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtWzhdKSB7XG4gICAgICAgICAgICBzICs9IFwiIFVUQ1wiO1xuICAgICAgICAgICAgaWYgKG1bOF0gIT0gXCJaXCIpIHtcbiAgICAgICAgICAgICAgICBzICs9IG1bOF07XG4gICAgICAgICAgICAgICAgaWYgKG1bOV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcyArPSBcIjpcIiArIG1bOV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzO1xuICAgIH07XG4gICAgU3RyZWFtLnByb3RvdHlwZS5wYXJzZUludGVnZXIgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICAgICAgICB2YXIgdiA9IHRoaXMuZ2V0KHN0YXJ0KTtcbiAgICAgICAgdmFyIG5lZyA9ICh2ID4gMTI3KTtcbiAgICAgICAgdmFyIHBhZCA9IG5lZyA/IDI1NSA6IDA7XG4gICAgICAgIHZhciBsZW47XG4gICAgICAgIHZhciBzID0gXCJcIjtcbiAgICAgICAgLy8gc2tpcCB1bnVzZWZ1bCBiaXRzIChub3QgYWxsb3dlZCBpbiBERVIpXG4gICAgICAgIHdoaWxlICh2ID09IHBhZCAmJiArK3N0YXJ0IDwgZW5kKSB7XG4gICAgICAgICAgICB2ID0gdGhpcy5nZXQoc3RhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGxlbiA9IGVuZCAtIHN0YXJ0O1xuICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmVnID8gLTEgOiAwO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNob3cgYml0IGxlbmd0aCBvZiBodWdlIGludGVnZXJzXG4gICAgICAgIGlmIChsZW4gPiA0KSB7XG4gICAgICAgICAgICBzID0gdjtcbiAgICAgICAgICAgIGxlbiA8PD0gMztcbiAgICAgICAgICAgIHdoaWxlICgoKCtzIF4gcGFkKSAmIDB4ODApID09IDApIHtcbiAgICAgICAgICAgICAgICBzID0gK3MgPDwgMTtcbiAgICAgICAgICAgICAgICAtLWxlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHMgPSBcIihcIiArIGxlbiArIFwiIGJpdClcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWNvZGUgdGhlIGludGVnZXJcbiAgICAgICAgaWYgKG5lZykge1xuICAgICAgICAgICAgdiA9IHYgLSAyNTY7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSBuZXcgSW50MTAodik7XG4gICAgICAgIGZvciAodmFyIGkgPSBzdGFydCArIDE7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgICAgICAgbi5tdWxBZGQoMjU2LCB0aGlzLmdldChpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHMgKyBuLnRvU3RyaW5nKCk7XG4gICAgfTtcbiAgICBTdHJlYW0ucHJvdG90eXBlLnBhcnNlQml0U3RyaW5nID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIG1heExlbmd0aCkge1xuICAgICAgICB2YXIgdW51c2VkQml0ID0gdGhpcy5nZXQoc3RhcnQpO1xuICAgICAgICB2YXIgbGVuQml0ID0gKChlbmQgLSBzdGFydCAtIDEpIDw8IDMpIC0gdW51c2VkQml0O1xuICAgICAgICB2YXIgaW50cm8gPSBcIihcIiArIGxlbkJpdCArIFwiIGJpdClcXG5cIjtcbiAgICAgICAgdmFyIHMgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQgKyAxOyBpIDwgZW5kOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBiID0gdGhpcy5nZXQoaSk7XG4gICAgICAgICAgICB2YXIgc2tpcCA9IChpID09IGVuZCAtIDEpID8gdW51c2VkQml0IDogMDtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSA3OyBqID49IHNraXA7IC0taikge1xuICAgICAgICAgICAgICAgIHMgKz0gKGIgPj4gaikgJiAxID8gXCIxXCIgOiBcIjBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnRybyArIHN0cmluZ0N1dChzLCBtYXhMZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRybyArIHM7XG4gICAgfTtcbiAgICBTdHJlYW0ucHJvdG90eXBlLnBhcnNlT2N0ZXRTdHJpbmcgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCwgbWF4TGVuZ3RoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQVNDSUkoc3RhcnQsIGVuZCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdDdXQodGhpcy5wYXJzZVN0cmluZ0lTTyhzdGFydCwgZW5kKSwgbWF4TGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuID0gZW5kIC0gc3RhcnQ7XG4gICAgICAgIHZhciBzID0gXCIoXCIgKyBsZW4gKyBcIiBieXRlKVxcblwiO1xuICAgICAgICBtYXhMZW5ndGggLz0gMjsgLy8gd2Ugd29yayBpbiBieXRlc1xuICAgICAgICBpZiAobGVuID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICBlbmQgPSBzdGFydCArIG1heExlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgICAgICAgcyArPSB0aGlzLmhleEJ5dGUodGhpcy5nZXQoaSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsZW4gPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIHMgKz0gZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfTtcbiAgICBTdHJlYW0ucHJvdG90eXBlLnBhcnNlT0lEID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQsIG1heExlbmd0aCkge1xuICAgICAgICB2YXIgcyA9IFwiXCI7XG4gICAgICAgIHZhciBuID0gbmV3IEludDEwKCk7XG4gICAgICAgIHZhciBiaXRzID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5nZXQoaSk7XG4gICAgICAgICAgICBuLm11bEFkZCgxMjgsIHYgJiAweDdGKTtcbiAgICAgICAgICAgIGJpdHMgKz0gNztcbiAgICAgICAgICAgIGlmICghKHYgJiAweDgwKSkge1xuICAgICAgICAgICAgICAgIGlmIChzID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBuLnNpbXBsaWZ5KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuIGluc3RhbmNlb2YgSW50MTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uc3ViKDgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBcIjIuXCIgKyBuLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbSA9IG4gPCA4MCA/IG4gPCA0MCA/IDAgOiAxIDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBtICsgXCIuXCIgKyAobiAtIG0gKiA0MCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHMgKz0gXCIuXCIgKyBuLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nQ3V0KHMsIG1heExlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG4gPSBuZXcgSW50MTAoKTtcbiAgICAgICAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYml0cyA+IDApIHtcbiAgICAgICAgICAgIHMgKz0gXCIuaW5jb21wbGV0ZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzO1xuICAgIH07XG4gICAgcmV0dXJuIFN0cmVhbTtcbn0oKSk7XG52YXIgQVNOMSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBU04xKHN0cmVhbSwgaGVhZGVyLCBsZW5ndGgsIHRhZywgc3ViKSB7XG4gICAgICAgIGlmICghKHRhZyBpbnN0YW5jZW9mIEFTTjFUYWcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRhZyB2YWx1ZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy50YWcgPSB0YWc7XG4gICAgICAgIHRoaXMuc3ViID0gc3ViO1xuICAgIH1cbiAgICBBU04xLnByb3RvdHlwZS50eXBlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLnRhZy50YWdDbGFzcykge1xuICAgICAgICAgICAgY2FzZSAwOi8vIHVuaXZlcnNhbFxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy50YWcudGFnTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgwMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVPQ1wiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCT09MRUFOXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgwMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIklOVEVHRVJcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiQklUX1NUUklOR1wiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJPQ1RFVF9TVFJJTkdcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTlVMTFwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MDY6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJPQkpFQ1RfSURFTlRJRklFUlwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MDc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJPYmplY3REZXNjcmlwdG9yXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgwODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIkVYVEVSTkFMXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgwOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJFQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDBBOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiRU5VTUVSQVRFRFwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MEI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJFTUJFRERFRF9QRFZcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDBDOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVVRGOFN0cmluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MTA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTRVFVRU5DRVwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MTE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTRVRcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTnVtZXJpY1N0cmluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MTM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJQcmludGFibGVTdHJpbmdcIjsgLy8gQVNDSUkgc3Vic2V0XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlRlbGV0ZXhTdHJpbmdcIjsgLy8gYWthIFQ2MVN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MTU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJWaWRlb3RleFN0cmluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MTY6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJQTVTdHJpbmdcIjsgLy8gQVNDSUlcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDE3OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiVVRDVGltZVwiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MTg6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJHZW5lcmFsaXplZFRpbWVcIjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAweDE5OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiR3JhcGhpY1N0cmluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MUE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJWaXNpYmxlU3RyaW5nXCI7IC8vIEFTQ0lJIHN1YnNldFxuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MUI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJHZW5lcmFsU3RyaW5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMHgxQzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlVuaXZlcnNhbFN0cmluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDB4MUU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJCTVBTdHJpbmdcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVW5pdmVyc2FsX1wiICsgdGhpcy50YWcudGFnTnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiQXBwbGljYXRpb25fXCIgKyB0aGlzLnRhZy50YWdOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJbXCIgKyB0aGlzLnRhZy50YWdOdW1iZXIudG9TdHJpbmcoKSArIFwiXVwiOyAvLyBDb250ZXh0XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiUHJpdmF0ZV9cIiArIHRoaXMudGFnLnRhZ051bWJlci50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBU04xLnByb3RvdHlwZS5jb250ZW50ID0gZnVuY3Rpb24gKG1heExlbmd0aCkge1xuICAgICAgICBpZiAodGhpcy50YWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heExlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtYXhMZW5ndGggPSBJbmZpbml0eTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29udGVudCA9IHRoaXMucG9zQ29udGVudCgpO1xuICAgICAgICB2YXIgbGVuID0gTWF0aC5hYnModGhpcy5sZW5ndGgpO1xuICAgICAgICBpZiAoIXRoaXMudGFnLmlzVW5pdmVyc2FsKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIihcIiArIHRoaXMuc3ViLmxlbmd0aCArIFwiIGVsZW0pXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW0ucGFyc2VPY3RldFN0cmluZyhjb250ZW50LCBjb250ZW50ICsgbGVuLCBtYXhMZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy50YWcudGFnTnVtYmVyKSB7XG4gICAgICAgICAgICBjYXNlIDB4MDE6Ly8gQk9PTEVBTlxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5zdHJlYW0uZ2V0KGNvbnRlbnQpID09PSAwKSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwiO1xuICAgICAgICAgICAgY2FzZSAweDAyOi8vIElOVEVHRVJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW0ucGFyc2VJbnRlZ2VyKGNvbnRlbnQsIGNvbnRlbnQgKyBsZW4pO1xuICAgICAgICAgICAgY2FzZSAweDAzOi8vIEJJVF9TVFJJTkdcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zdWIgPyBcIihcIiArIHRoaXMuc3ViLmxlbmd0aCArIFwiIGVsZW0pXCIgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmVhbS5wYXJzZUJpdFN0cmluZyhjb250ZW50LCBjb250ZW50ICsgbGVuLCBtYXhMZW5ndGgpO1xuICAgICAgICAgICAgY2FzZSAweDA0Oi8vIE9DVEVUX1NUUklOR1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN1YiA/IFwiKFwiICsgdGhpcy5zdWIubGVuZ3RoICsgXCIgZWxlbSlcIiA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtLnBhcnNlT2N0ZXRTdHJpbmcoY29udGVudCwgY29udGVudCArIGxlbiwgbWF4TGVuZ3RoKTtcbiAgICAgICAgICAgIC8vIGNhc2UgMHgwNTogLy8gTlVMTFxuICAgICAgICAgICAgY2FzZSAweDA2Oi8vIE9CSkVDVF9JREVOVElGSUVSXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLnBhcnNlT0lEKGNvbnRlbnQsIGNvbnRlbnQgKyBsZW4sIG1heExlbmd0aCk7XG4gICAgICAgICAgICAvLyBjYXNlIDB4MDc6IC8vIE9iamVjdERlc2NyaXB0b3JcbiAgICAgICAgICAgIC8vIGNhc2UgMHgwODogLy8gRVhURVJOQUxcbiAgICAgICAgICAgIC8vIGNhc2UgMHgwOTogLy8gUkVBTFxuICAgICAgICAgICAgLy8gY2FzZSAweDBBOiAvLyBFTlVNRVJBVEVEXG4gICAgICAgICAgICAvLyBjYXNlIDB4MEI6IC8vIEVNQkVEREVEX1BEVlxuICAgICAgICAgICAgY2FzZSAweDEwOiAvLyBTRVFVRU5DRVxuICAgICAgICAgICAgY2FzZSAweDExOi8vIFNFVFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLnN1Yi5sZW5ndGggKyBcIiBlbGVtKVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiKG5vIGVsZW0pXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAweDBDOi8vIFVURjhTdHJpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nQ3V0KHRoaXMuc3RyZWFtLnBhcnNlU3RyaW5nVVRGKGNvbnRlbnQsIGNvbnRlbnQgKyBsZW4pLCBtYXhMZW5ndGgpO1xuICAgICAgICAgICAgY2FzZSAweDEyOiAvLyBOdW1lcmljU3RyaW5nXG4gICAgICAgICAgICBjYXNlIDB4MTM6IC8vIFByaW50YWJsZVN0cmluZ1xuICAgICAgICAgICAgY2FzZSAweDE0OiAvLyBUZWxldGV4U3RyaW5nXG4gICAgICAgICAgICBjYXNlIDB4MTU6IC8vIFZpZGVvdGV4U3RyaW5nXG4gICAgICAgICAgICBjYXNlIDB4MTY6IC8vIElBNVN0cmluZ1xuICAgICAgICAgICAgLy8gY2FzZSAweDE5OiAvLyBHcmFwaGljU3RyaW5nXG4gICAgICAgICAgICBjYXNlIDB4MUE6Ly8gVmlzaWJsZVN0cmluZ1xuICAgICAgICAgICAgICAgIC8vIGNhc2UgMHgxQjogLy8gR2VuZXJhbFN0cmluZ1xuICAgICAgICAgICAgICAgIC8vIGNhc2UgMHgxQzogLy8gVW5pdmVyc2FsU3RyaW5nXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0cmluZ0N1dCh0aGlzLnN0cmVhbS5wYXJzZVN0cmluZ0lTTyhjb250ZW50LCBjb250ZW50ICsgbGVuKSwgbWF4TGVuZ3RoKTtcbiAgICAgICAgICAgIGNhc2UgMHgxRTovLyBCTVBTdHJpbmdcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyaW5nQ3V0KHRoaXMuc3RyZWFtLnBhcnNlU3RyaW5nQk1QKGNvbnRlbnQsIGNvbnRlbnQgKyBsZW4pLCBtYXhMZW5ndGgpO1xuICAgICAgICAgICAgY2FzZSAweDE3OiAvLyBVVENUaW1lXG4gICAgICAgICAgICBjYXNlIDB4MTg6Ly8gR2VuZXJhbGl6ZWRUaW1lXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLnBhcnNlVGltZShjb250ZW50LCBjb250ZW50ICsgbGVuLCAodGhpcy50YWcudGFnTnVtYmVyID09IDB4MTcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIEFTTjEucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50eXBlTmFtZSgpICsgXCJAXCIgKyB0aGlzLnN0cmVhbS5wb3MgKyBcIltoZWFkZXI6XCIgKyB0aGlzLmhlYWRlciArIFwiLGxlbmd0aDpcIiArIHRoaXMubGVuZ3RoICsgXCIsc3ViOlwiICsgKCh0aGlzLnN1YiA9PT0gbnVsbCkgPyBcIm51bGxcIiA6IHRoaXMuc3ViLmxlbmd0aCkgKyBcIl1cIjtcbiAgICB9O1xuICAgIEFTTjEucHJvdG90eXBlLnRvUHJldHR5U3RyaW5nID0gZnVuY3Rpb24gKGluZGVudCkge1xuICAgICAgICBpZiAoaW5kZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGluZGVudCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHMgPSBpbmRlbnQgKyB0aGlzLnR5cGVOYW1lKCkgKyBcIiBAXCIgKyB0aGlzLnN0cmVhbS5wb3M7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgICBzICs9IFwiK1wiO1xuICAgICAgICB9XG4gICAgICAgIHMgKz0gdGhpcy5sZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLnRhZy50YWdDb25zdHJ1Y3RlZCkge1xuICAgICAgICAgICAgcyArPSBcIiAoY29uc3RydWN0ZWQpXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMudGFnLmlzVW5pdmVyc2FsKCkgJiYgKCh0aGlzLnRhZy50YWdOdW1iZXIgPT0gMHgwMykgfHwgKHRoaXMudGFnLnRhZ051bWJlciA9PSAweDA0KSkpICYmICh0aGlzLnN1YiAhPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHMgKz0gXCIgKGVuY2Fwc3VsYXRlcylcIjtcbiAgICAgICAgfVxuICAgICAgICBzICs9IFwiXFxuXCI7XG4gICAgICAgIGlmICh0aGlzLnN1YiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaW5kZW50ICs9IFwiICBcIjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBtYXggPSB0aGlzLnN1Yi5sZW5ndGg7IGkgPCBtYXg7ICsraSkge1xuICAgICAgICAgICAgICAgIHMgKz0gdGhpcy5zdWJbaV0udG9QcmV0dHlTdHJpbmcoaW5kZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcztcbiAgICB9O1xuICAgIEFTTjEucHJvdG90eXBlLnBvc1N0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW0ucG9zO1xuICAgIH07XG4gICAgQVNOMS5wcm90b3R5cGUucG9zQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLnBvcyArIHRoaXMuaGVhZGVyO1xuICAgIH07XG4gICAgQVNOMS5wcm90b3R5cGUucG9zRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW0ucG9zICsgdGhpcy5oZWFkZXIgKyBNYXRoLmFicyh0aGlzLmxlbmd0aCk7XG4gICAgfTtcbiAgICBBU04xLnByb3RvdHlwZS50b0hleFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLmhleER1bXAodGhpcy5wb3NTdGFydCgpLCB0aGlzLnBvc0VuZCgpLCB0cnVlKTtcbiAgICB9O1xuICAgIEFTTjEuZGVjb2RlTGVuZ3RoID0gZnVuY3Rpb24gKHN0cmVhbSkge1xuICAgICAgICB2YXIgYnVmID0gc3RyZWFtLmdldCgpO1xuICAgICAgICB2YXIgbGVuID0gYnVmICYgMHg3RjtcbiAgICAgICAgaWYgKGxlbiA9PSBidWYpIHtcbiAgICAgICAgICAgIHJldHVybiBsZW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm8gcmVhc29uIHRvIHVzZSBJbnQxMCwgYXMgaXQgd291bGQgYmUgYSBodWdlIGJ1ZmZlciBhbnl3YXlzXG4gICAgICAgIGlmIChsZW4gPiA2KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMZW5ndGggb3ZlciA0OCBiaXRzIG5vdCBzdXBwb3J0ZWQgYXQgcG9zaXRpb24gXCIgKyAoc3RyZWFtLnBvcyAtIDEpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSAvLyB1bmRlZmluZWRcbiAgICAgICAgYnVmID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgYnVmID0gKGJ1ZiAqIDI1NikgKyBzdHJlYW0uZ2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHRoZSBoZXhhZGVjaW1hbCB2YWx1ZSAoYXMgYSBzdHJpbmcpIG9mIHRoZSBjdXJyZW50IEFTTi4xIGVsZW1lbnRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBBU04xLnByb3RvdHlwZS5nZXRIZXhTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhleFN0cmluZyA9IHRoaXMudG9IZXhTdHJpbmcoKTtcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuaGVhZGVyICogMjtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoICogMjtcbiAgICAgICAgcmV0dXJuIGhleFN0cmluZy5zdWJzdHIob2Zmc2V0LCBsZW5ndGgpO1xuICAgIH07XG4gICAgQVNOMS5kZWNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgIHZhciBzdHJlYW07XG4gICAgICAgIGlmICghKHN0ciBpbnN0YW5jZW9mIFN0cmVhbSkpIHtcbiAgICAgICAgICAgIHN0cmVhbSA9IG5ldyBTdHJlYW0oc3RyLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0cmVhbSA9IHN0cjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RyZWFtU3RhcnQgPSBuZXcgU3RyZWFtKHN0cmVhbSk7XG4gICAgICAgIHZhciB0YWcgPSBuZXcgQVNOMVRhZyhzdHJlYW0pO1xuICAgICAgICB2YXIgbGVuID0gQVNOMS5kZWNvZGVMZW5ndGgoc3RyZWFtKTtcbiAgICAgICAgdmFyIHN0YXJ0ID0gc3RyZWFtLnBvcztcbiAgICAgICAgdmFyIGhlYWRlciA9IHN0YXJ0IC0gc3RyZWFtU3RhcnQucG9zO1xuICAgICAgICB2YXIgc3ViID0gbnVsbDtcbiAgICAgICAgdmFyIGdldFN1YiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXQgPSBbXTtcbiAgICAgICAgICAgIGlmIChsZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWZpbml0ZSBsZW5ndGhcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gc3RhcnQgKyBsZW47XG4gICAgICAgICAgICAgICAgd2hpbGUgKHN0cmVhbS5wb3MgPCBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0W3JldC5sZW5ndGhdID0gQVNOMS5kZWNvZGUoc3RyZWFtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cmVhbS5wb3MgIT0gZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbnRlbnQgc2l6ZSBpcyBub3QgY29ycmVjdCBmb3IgY29udGFpbmVyIHN0YXJ0aW5nIGF0IG9mZnNldCBcIiArIHN0YXJ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB1bmRlZmluZWQgbGVuZ3RoXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHMgPSBBU04xLmRlY29kZShzdHJlYW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHMudGFnLmlzRU9DKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldFtyZXQubGVuZ3RoXSA9IHM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGVuID0gc3RhcnQgLSBzdHJlYW0ucG9zOyAvLyB1bmRlZmluZWQgbGVuZ3RocyBhcmUgcmVwcmVzZW50ZWQgYXMgbmVnYXRpdmUgdmFsdWVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4Y2VwdGlvbiB3aGlsZSBkZWNvZGluZyB1bmRlZmluZWQgbGVuZ3RoIGNvbnRlbnQ6IFwiICsgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRhZy50YWdDb25zdHJ1Y3RlZCkge1xuICAgICAgICAgICAgLy8gbXVzdCBoYXZlIHZhbGlkIGNvbnRlbnRcbiAgICAgICAgICAgIHN1YiA9IGdldFN1YigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRhZy5pc1VuaXZlcnNhbCgpICYmICgodGFnLnRhZ051bWJlciA9PSAweDAzKSB8fCAodGFnLnRhZ051bWJlciA9PSAweDA0KSkpIHtcbiAgICAgICAgICAgIC8vIHNvbWV0aW1lcyBCaXRTdHJpbmcgYW5kIE9jdGV0U3RyaW5nIGFyZSB1c2VkIHRvIGVuY2Fwc3VsYXRlIEFTTi4xXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0YWcudGFnTnVtYmVyID09IDB4MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmVhbS5nZXQoKSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCSVQgU1RSSU5HcyB3aXRoIHVudXNlZCBiaXRzIGNhbm5vdCBlbmNhcHN1bGF0ZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3ViID0gZ2V0U3ViKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWIubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YltpXS50YWcuaXNFT0MoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRU9DIGlzIG5vdCBzdXBwb3NlZCB0byBiZSBhY3R1YWwgY29udGVudC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIGJ1dCBzaWxlbnRseSBpZ25vcmUgd2hlbiB0aGV5IGRvbid0XG4gICAgICAgICAgICAgICAgc3ViID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3ViID09PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAobGVuID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV2UgY2FuJ3Qgc2tpcCBvdmVyIGFuIGludmFsaWQgdGFnIHdpdGggdW5kZWZpbmVkIGxlbmd0aCBhdCBvZmZzZXQgXCIgKyBzdGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJlYW0ucG9zID0gc3RhcnQgKyBNYXRoLmFicyhsZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQVNOMShzdHJlYW1TdGFydCwgaGVhZGVyLCBsZW4sIHRhZywgc3ViKTtcbiAgICB9O1xuICAgIHJldHVybiBBU04xO1xufSgpKTtcbnZhciBBU04xVGFnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFTTjFUYWcoc3RyZWFtKSB7XG4gICAgICAgIHZhciBidWYgPSBzdHJlYW0uZ2V0KCk7XG4gICAgICAgIHRoaXMudGFnQ2xhc3MgPSBidWYgPj4gNjtcbiAgICAgICAgdGhpcy50YWdDb25zdHJ1Y3RlZCA9ICgoYnVmICYgMHgyMCkgIT09IDApO1xuICAgICAgICB0aGlzLnRhZ051bWJlciA9IGJ1ZiAmIDB4MUY7XG4gICAgICAgIGlmICh0aGlzLnRhZ051bWJlciA9PSAweDFGKSB7XG4gICAgICAgICAgICB2YXIgbiA9IG5ldyBJbnQxMCgpO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGJ1ZiA9IHN0cmVhbS5nZXQoKTtcbiAgICAgICAgICAgICAgICBuLm11bEFkZCgxMjgsIGJ1ZiAmIDB4N0YpO1xuICAgICAgICAgICAgfSB3aGlsZSAoYnVmICYgMHg4MCk7XG4gICAgICAgICAgICB0aGlzLnRhZ051bWJlciA9IG4uc2ltcGxpZnkoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBU04xVGFnLnByb3RvdHlwZS5pc1VuaXZlcnNhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFnQ2xhc3MgPT09IDB4MDA7XG4gICAgfTtcbiAgICBBU04xVGFnLnByb3RvdHlwZS5pc0VPQyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFnQ2xhc3MgPT09IDB4MDAgJiYgdGhpcy50YWdOdW1iZXIgPT09IDB4MDA7XG4gICAgfTtcbiAgICByZXR1cm4gQVNOMVRhZztcbn0oKSk7XG5cbi8vIENvcHlyaWdodCAoYykgMjAwNSAgVG9tIFd1XG4vLyBCaXRzIHBlciBkaWdpdFxudmFyIGRiaXRzO1xuLy8gSmF2YVNjcmlwdCBlbmdpbmUgYW5hbHlzaXNcbnZhciBjYW5hcnkgPSAweGRlYWRiZWVmY2FmZTtcbnZhciBqX2xtID0gKChjYW5hcnkgJiAweGZmZmZmZikgPT0gMHhlZmNhZmUpO1xuLy8jcmVnaW9uXG52YXIgbG93cHJpbWVzID0gWzIsIDMsIDUsIDcsIDExLCAxMywgMTcsIDE5LCAyMywgMjksIDMxLCAzNywgNDEsIDQzLCA0NywgNTMsIDU5LCA2MSwgNjcsIDcxLCA3MywgNzksIDgzLCA4OSwgOTcsIDEwMSwgMTAzLCAxMDcsIDEwOSwgMTEzLCAxMjcsIDEzMSwgMTM3LCAxMzksIDE0OSwgMTUxLCAxNTcsIDE2MywgMTY3LCAxNzMsIDE3OSwgMTgxLCAxOTEsIDE5MywgMTk3LCAxOTksIDIxMSwgMjIzLCAyMjcsIDIyOSwgMjMzLCAyMzksIDI0MSwgMjUxLCAyNTcsIDI2MywgMjY5LCAyNzEsIDI3NywgMjgxLCAyODMsIDI5MywgMzA3LCAzMTEsIDMxMywgMzE3LCAzMzEsIDMzNywgMzQ3LCAzNDksIDM1MywgMzU5LCAzNjcsIDM3MywgMzc5LCAzODMsIDM4OSwgMzk3LCA0MDEsIDQwOSwgNDE5LCA0MjEsIDQzMSwgNDMzLCA0MzksIDQ0MywgNDQ5LCA0NTcsIDQ2MSwgNDYzLCA0NjcsIDQ3OSwgNDg3LCA0OTEsIDQ5OSwgNTAzLCA1MDksIDUyMSwgNTIzLCA1NDEsIDU0NywgNTU3LCA1NjMsIDU2OSwgNTcxLCA1NzcsIDU4NywgNTkzLCA1OTksIDYwMSwgNjA3LCA2MTMsIDYxNywgNjE5LCA2MzEsIDY0MSwgNjQzLCA2NDcsIDY1MywgNjU5LCA2NjEsIDY3MywgNjc3LCA2ODMsIDY5MSwgNzAxLCA3MDksIDcxOSwgNzI3LCA3MzMsIDczOSwgNzQzLCA3NTEsIDc1NywgNzYxLCA3NjksIDc3MywgNzg3LCA3OTcsIDgwOSwgODExLCA4MjEsIDgyMywgODI3LCA4MjksIDgzOSwgODUzLCA4NTcsIDg1OSwgODYzLCA4NzcsIDg4MSwgODgzLCA4ODcsIDkwNywgOTExLCA5MTksIDkyOSwgOTM3LCA5NDEsIDk0NywgOTUzLCA5NjcsIDk3MSwgOTc3LCA5ODMsIDk5MSwgOTk3XTtcbnZhciBscGxpbSA9ICgxIDw8IDI2KSAvIGxvd3ByaW1lc1tsb3dwcmltZXMubGVuZ3RoIC0gMV07XG4vLyNlbmRyZWdpb25cbi8vIChwdWJsaWMpIENvbnN0cnVjdG9yXG52YXIgQmlnSW50ZWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaWdJbnRlZ2VyKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKFwibnVtYmVyXCIgPT0gdHlwZW9mIGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyb21OdW1iZXIoYSwgYiwgYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiID09IG51bGwgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgYSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZnJvbVN0cmluZyhhLCAyNTYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcm9tU3RyaW5nKGEsIGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vI3JlZ2lvbiBQVUJMSUNcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGJuVG9TdHJpbmc7XG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHN0cmluZyByZXByZXNlbnRhdGlvbiBpbiBnaXZlbiByYWRpeFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgaWYgKHRoaXMucyA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBcIi1cIiArIHRoaXMubmVnYXRlKCkudG9TdHJpbmcoYik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGs7XG4gICAgICAgIGlmIChiID09IDE2KSB7XG4gICAgICAgICAgICBrID0gNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiID09IDgpIHtcbiAgICAgICAgICAgIGsgPSAzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGIgPT0gMikge1xuICAgICAgICAgICAgayA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiA9PSAzMikge1xuICAgICAgICAgICAgayA9IDU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiA9PSA0KSB7XG4gICAgICAgICAgICBrID0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvUmFkaXgoYik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGttID0gKDEgPDwgaykgLSAxO1xuICAgICAgICB2YXIgZDtcbiAgICAgICAgdmFyIG0gPSBmYWxzZTtcbiAgICAgICAgdmFyIHIgPSBcIlwiO1xuICAgICAgICB2YXIgaSA9IHRoaXMudDtcbiAgICAgICAgdmFyIHAgPSB0aGlzLkRCIC0gKGkgKiB0aGlzLkRCKSAlIGs7XG4gICAgICAgIGlmIChpLS0gPiAwKSB7XG4gICAgICAgICAgICBpZiAocCA8IHRoaXMuREIgJiYgKGQgPSB0aGlzW2ldID4+IHApID4gMCkge1xuICAgICAgICAgICAgICAgIG0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHIgPSBpbnQyY2hhcihkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocCA8IGspIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9ICh0aGlzW2ldICYgKCgxIDw8IHApIC0gMSkpIDw8IChrIC0gcCk7XG4gICAgICAgICAgICAgICAgICAgIGQgfD0gdGhpc1stLWldID4+IChwICs9IHRoaXMuREIgLSBrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSAodGhpc1tpXSA+PiAocCAtPSBrKSkgJiBrbTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcCArPSB0aGlzLkRCO1xuICAgICAgICAgICAgICAgICAgICAgICAgLS1pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgciArPSBpbnQyY2hhcihkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG0gPyByIDogXCIwXCI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBibk5lZ2F0ZTtcbiAgICAvLyAocHVibGljKSAtdGhpc1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5lZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHRoaXMsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmFicyA9IGJuQWJzO1xuICAgIC8vIChwdWJsaWMpIHx0aGlzfFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnMgPCAwKSA/IHRoaXMubmVnYXRlKCkgOiB0aGlzO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gYm5Db21wYXJlVG87XG4gICAgLy8gKHB1YmxpYykgcmV0dXJuICsgaWYgdGhpcyA+IGEsIC0gaWYgdGhpcyA8IGEsIDAgaWYgZXF1YWxcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgciA9IHRoaXMucyAtIGEucztcbiAgICAgICAgaWYgKHIgIT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSB0aGlzLnQ7XG4gICAgICAgIHIgPSBpIC0gYS50O1xuICAgICAgICBpZiAociAhPSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucyA8IDApID8gLXIgOiByO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgaWYgKChyID0gdGhpc1tpXSAtIGFbaV0pICE9IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IGJuQml0TGVuZ3RoO1xuICAgIC8vIChwdWJsaWMpIHJldHVybiB0aGUgbnVtYmVyIG9mIGJpdHMgaW4gXCJ0aGlzXCJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnQgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuREIgKiAodGhpcy50IC0gMSkgKyBuYml0cyh0aGlzW3RoaXMudCAtIDFdIF4gKHRoaXMucyAmIHRoaXMuRE0pKTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZCA9IGJuTW9kO1xuICAgIC8vIChwdWJsaWMpIHRoaXMgbW9kIGFcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICB0aGlzLmFicygpLmRpdlJlbVRvKGEsIG51bGwsIHIpO1xuICAgICAgICBpZiAodGhpcy5zIDwgMCAmJiByLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLlpFUk8pID4gMCkge1xuICAgICAgICAgICAgYS5zdWJUbyhyLCByKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvd0ludCA9IGJuTW9kUG93SW50O1xuICAgIC8vIChwdWJsaWMpIHRoaXNeZSAlIG0sIDAgPD0gZSA8IDJeMzJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3dJbnQgPSBmdW5jdGlvbiAoZSwgbSkge1xuICAgICAgICB2YXIgejtcbiAgICAgICAgaWYgKGUgPCAyNTYgfHwgbS5pc0V2ZW4oKSkge1xuICAgICAgICAgICAgeiA9IG5ldyBDbGFzc2ljKG0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeiA9IG5ldyBNb250Z29tZXJ5KG0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmV4cChlLCB6KTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsb25lID0gYm5DbG9uZTtcbiAgICAvLyAocHVibGljKVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICB0aGlzLmNvcHlUbyhyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnRWYWx1ZSA9IGJuSW50VmFsdWU7XG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIGludGVnZXJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucyA8IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnQgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdIC0gdGhpcy5EVjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMudCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXNzdW1lcyAxNiA8IERCIDwgMzJcbiAgICAgICAgcmV0dXJuICgodGhpc1sxXSAmICgoMSA8PCAoMzIgLSB0aGlzLkRCKSkgLSAxKSkgPDwgdGhpcy5EQikgfCB0aGlzWzBdO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuYnl0ZVZhbHVlID0gYm5CeXRlVmFsdWU7XG4gICAgLy8gKHB1YmxpYykgcmV0dXJuIHZhbHVlIGFzIGJ5dGVcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ieXRlVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50ID09IDApID8gdGhpcy5zIDogKHRoaXNbMF0gPDwgMjQpID4+IDI0O1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuc2hvcnRWYWx1ZSA9IGJuU2hvcnRWYWx1ZTtcbiAgICAvLyAocHVibGljKSByZXR1cm4gdmFsdWUgYXMgc2hvcnQgKGFzc3VtZXMgREI+PTE2KVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNob3J0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy50ID09IDApID8gdGhpcy5zIDogKHRoaXNbMF0gPDwgMTYpID4+IDE2O1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuc2lnbnVtID0gYm5TaWdOdW07XG4gICAgLy8gKHB1YmxpYykgMCBpZiB0aGlzID09IDAsIDEgaWYgdGhpcyA+IDBcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaWdudW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnMgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy50IDw9IDAgfHwgKHRoaXMudCA9PSAxICYmIHRoaXNbMF0gPD0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvQnl0ZUFycmF5ID0gYm5Ub0J5dGVBcnJheTtcbiAgICAvLyAocHVibGljKSBjb252ZXJ0IHRvIGJpZ2VuZGlhbiBieXRlIGFycmF5XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9CeXRlQXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpID0gdGhpcy50O1xuICAgICAgICB2YXIgciA9IFtdO1xuICAgICAgICByWzBdID0gdGhpcy5zO1xuICAgICAgICB2YXIgcCA9IHRoaXMuREIgLSAoaSAqIHRoaXMuREIpICUgODtcbiAgICAgICAgdmFyIGQ7XG4gICAgICAgIHZhciBrID0gMDtcbiAgICAgICAgaWYgKGktLSA+IDApIHtcbiAgICAgICAgICAgIGlmIChwIDwgdGhpcy5EQiAmJiAoZCA9IHRoaXNbaV0gPj4gcCkgIT0gKHRoaXMucyAmIHRoaXMuRE0pID4+IHApIHtcbiAgICAgICAgICAgICAgICByW2srK10gPSBkIHwgKHRoaXMucyA8PCAodGhpcy5EQiAtIHApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpID49IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocCA8IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9ICh0aGlzW2ldICYgKCgxIDw8IHApIC0gMSkpIDw8ICg4IC0gcCk7XG4gICAgICAgICAgICAgICAgICAgIGQgfD0gdGhpc1stLWldID4+IChwICs9IHRoaXMuREIgLSA4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSAodGhpc1tpXSA+PiAocCAtPSA4KSkgJiAweGZmO1xuICAgICAgICAgICAgICAgICAgICBpZiAocCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwICs9IHRoaXMuREI7XG4gICAgICAgICAgICAgICAgICAgICAgICAtLWk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChkICYgMHg4MCkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkIHw9IC0yNTY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChrID09IDAgJiYgKHRoaXMucyAmIDB4ODApICE9IChkICYgMHg4MCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKytrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoayA+IDAgfHwgZCAhPSB0aGlzLnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcltrKytdID0gZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBibkVxdWFscztcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29tcGFyZVRvKGEpID09IDApO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUubWluID0gYm5NaW47XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWluID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmNvbXBhcmVUbyhhKSA8IDApID8gdGhpcyA6IGE7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tYXggPSBibk1heDtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tYXggPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29tcGFyZVRvKGEpID4gMCkgPyB0aGlzIDogYTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZCA9IGJuQW5kO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHRoaXMuYml0d2lzZVRvKGEsIG9wX2FuZCwgcik7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUub3IgPSBibk9yO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm9yID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgdGhpcy5iaXR3aXNlVG8oYSwgb3Bfb3IsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLnhvciA9IGJuWG9yO1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnhvciA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHRoaXMuYml0d2lzZVRvKGEsIG9wX3hvciwgcik7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kTm90ID0gYm5BbmROb3Q7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kTm90ID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgdGhpcy5iaXR3aXNlVG8oYSwgb3BfYW5kbm90LCByKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3QgPSBibk5vdDtcbiAgICAvLyAocHVibGljKSB+dGhpc1xuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSkge1xuICAgICAgICAgICAgcltpXSA9IHRoaXMuRE0gJiB+dGhpc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByLnQgPSB0aGlzLnQ7XG4gICAgICAgIHIucyA9IH50aGlzLnM7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gYm5TaGlmdExlZnQ7XG4gICAgLy8gKHB1YmxpYykgdGhpcyA8PCBuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgaWYgKG4gPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnJTaGlmdFRvKC1uLCByKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubFNoaWZ0VG8obiwgcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gYm5TaGlmdFJpZ2h0O1xuICAgIC8vIChwdWJsaWMpIHRoaXMgPj4gblxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICBpZiAobiA8IDApIHtcbiAgICAgICAgICAgIHRoaXMubFNoaWZ0VG8oLW4sIHIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yU2hpZnRUbyhuLCByKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmdldExvd2VzdFNldEJpdCA9IGJuR2V0TG93ZXN0U2V0Qml0O1xuICAgIC8vIChwdWJsaWMpIHJldHVybnMgaW5kZXggb2YgbG93ZXN0IDEtYml0IChvciAtMSBpZiBub25lKVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdldExvd2VzdFNldEJpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnQ7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXNbaV0gIT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpICogdGhpcy5EQiArIGxiaXQodGhpc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucyA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnQgKiB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdENvdW50ID0gYm5CaXRDb3VudDtcbiAgICAvLyAocHVibGljKSByZXR1cm4gbnVtYmVyIG9mIHNldCBiaXRzXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0Q291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gMDtcbiAgICAgICAgdmFyIHggPSB0aGlzLnMgJiB0aGlzLkRNO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudDsgKytpKSB7XG4gICAgICAgICAgICByICs9IGNiaXQodGhpc1tpXSBeIHgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUudGVzdEJpdCA9IGJuVGVzdEJpdDtcbiAgICAvLyAocHVibGljKSB0cnVlIGlmZiBudGggYml0IGlzIHNldFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRlc3RCaXQgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB2YXIgaiA9IE1hdGguZmxvb3IobiAvIHRoaXMuREIpO1xuICAgICAgICBpZiAoaiA+PSB0aGlzLnQpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5zICE9IDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKHRoaXNbal0gJiAoMSA8PCAobiAlIHRoaXMuREIpKSkgIT0gMCk7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zZXRCaXQgPSBiblNldEJpdDtcbiAgICAvLyAocHVibGljKSB0aGlzIHwgKDE8PG4pXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2V0Qml0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sIG9wX29yKTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsZWFyQml0ID0gYm5DbGVhckJpdDtcbiAgICAvLyAocHVibGljKSB0aGlzICYgfigxPDxuKVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsZWFyQml0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sIG9wX2FuZG5vdCk7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mbGlwQml0ID0gYm5GbGlwQml0O1xuICAgIC8vIChwdWJsaWMpIHRoaXMgXiAoMTw8bilcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mbGlwQml0ID0gZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlQml0KG4sIG9wX3hvcik7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBibkFkZDtcbiAgICAvLyAocHVibGljKSB0aGlzICsgYVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHRoaXMuYWRkVG8oYSwgcik7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3QgPSBiblN1YnRyYWN0O1xuICAgIC8vIChwdWJsaWMpIHRoaXMgLSBhXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICB0aGlzLnN1YlRvKGEsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gYm5NdWx0aXBseTtcbiAgICAvLyAocHVibGljKSB0aGlzICogYVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgdGhpcy5tdWx0aXBseVRvKGEsIHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IGJuRGl2aWRlO1xuICAgIC8vIChwdWJsaWMpIHRoaXMgLyBhXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgdGhpcy5kaXZSZW1UbyhhLCByLCBudWxsKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBiblJlbWFpbmRlcjtcbiAgICAvLyAocHVibGljKSB0aGlzICUgYVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHRoaXMuZGl2UmVtVG8oYSwgbnVsbCwgcik7XG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlQW5kUmVtYWluZGVyID0gYm5EaXZpZGVBbmRSZW1haW5kZXI7XG4gICAgLy8gKHB1YmxpYykgW3RoaXMvYSx0aGlzJWFdXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlQW5kUmVtYWluZGVyID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdmFyIHEgPSBuYmkoKTtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgdGhpcy5kaXZSZW1UbyhhLCBxLCByKTtcbiAgICAgICAgcmV0dXJuIFtxLCByXTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdyA9IGJuTW9kUG93O1xuICAgIC8vIChwdWJsaWMpIHRoaXNeZSAlIG0gKEhBQyAxNC44NSlcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBmdW5jdGlvbiAoZSwgbSkge1xuICAgICAgICB2YXIgaSA9IGUuYml0TGVuZ3RoKCk7XG4gICAgICAgIHZhciBrO1xuICAgICAgICB2YXIgciA9IG5idigxKTtcbiAgICAgICAgdmFyIHo7XG4gICAgICAgIGlmIChpIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGkgPCAxOCkge1xuICAgICAgICAgICAgayA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaSA8IDQ4KSB7XG4gICAgICAgICAgICBrID0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpIDwgMTQ0KSB7XG4gICAgICAgICAgICBrID0gNDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpIDwgNzY4KSB7XG4gICAgICAgICAgICBrID0gNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGsgPSA2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgOCkge1xuICAgICAgICAgICAgeiA9IG5ldyBDbGFzc2ljKG0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG0uaXNFdmVuKCkpIHtcbiAgICAgICAgICAgIHogPSBuZXcgQmFycmV0dChtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHogPSBuZXcgTW9udGdvbWVyeShtKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwcmVjb21wdXRhdGlvblxuICAgICAgICB2YXIgZyA9IFtdO1xuICAgICAgICB2YXIgbiA9IDM7XG4gICAgICAgIHZhciBrMSA9IGsgLSAxO1xuICAgICAgICB2YXIga20gPSAoMSA8PCBrKSAtIDE7XG4gICAgICAgIGdbMV0gPSB6LmNvbnZlcnQodGhpcyk7XG4gICAgICAgIGlmIChrID4gMSkge1xuICAgICAgICAgICAgdmFyIGcyID0gbmJpKCk7XG4gICAgICAgICAgICB6LnNxclRvKGdbMV0sIGcyKTtcbiAgICAgICAgICAgIHdoaWxlIChuIDw9IGttKSB7XG4gICAgICAgICAgICAgICAgZ1tuXSA9IG5iaSgpO1xuICAgICAgICAgICAgICAgIHoubXVsVG8oZzIsIGdbbiAtIDJdLCBnW25dKTtcbiAgICAgICAgICAgICAgICBuICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGogPSBlLnQgLSAxO1xuICAgICAgICB2YXIgdztcbiAgICAgICAgdmFyIGlzMSA9IHRydWU7XG4gICAgICAgIHZhciByMiA9IG5iaSgpO1xuICAgICAgICB2YXIgdDtcbiAgICAgICAgaSA9IG5iaXRzKGVbal0pIC0gMTtcbiAgICAgICAgd2hpbGUgKGogPj0gMCkge1xuICAgICAgICAgICAgaWYgKGkgPj0gazEpIHtcbiAgICAgICAgICAgICAgICB3ID0gKGVbal0gPj4gKGkgLSBrMSkpICYga207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3ID0gKGVbal0gJiAoKDEgPDwgKGkgKyAxKSkgLSAxKSkgPDwgKGsxIC0gaSk7XG4gICAgICAgICAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgfD0gZVtqIC0gMV0gPj4gKHRoaXMuREIgKyBpIC0gazEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4gPSBrO1xuICAgICAgICAgICAgd2hpbGUgKCh3ICYgMSkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHcgPj49IDE7XG4gICAgICAgICAgICAgICAgLS1uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChpIC09IG4pIDwgMCkge1xuICAgICAgICAgICAgICAgIGkgKz0gdGhpcy5EQjtcbiAgICAgICAgICAgICAgICAtLWo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXMxKSB7XG4gICAgICAgICAgICAgICAgZ1t3XS5jb3B5VG8ocik7XG4gICAgICAgICAgICAgICAgaXMxID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgei5zcXJUbyhyLCByMik7XG4gICAgICAgICAgICAgICAgICAgIHouc3FyVG8ocjIsIHIpO1xuICAgICAgICAgICAgICAgICAgICBuIC09IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB6LnNxclRvKHIsIHIyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSByO1xuICAgICAgICAgICAgICAgICAgICByID0gcjI7XG4gICAgICAgICAgICAgICAgICAgIHIyID0gdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgei5tdWxUbyhyMiwgZ1t3XSwgcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA+PSAwICYmIChlW2pdICYgKDEgPDwgaSkpID09IDApIHtcbiAgICAgICAgICAgICAgICB6LnNxclRvKHIsIHIyKTtcbiAgICAgICAgICAgICAgICB0ID0gcjtcbiAgICAgICAgICAgICAgICByID0gcjI7XG4gICAgICAgICAgICAgICAgcjIgPSB0O1xuICAgICAgICAgICAgICAgIGlmICgtLWkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSB0aGlzLkRCIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgLS1qO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnZlcnNlID0gYm5Nb2RJbnZlcnNlO1xuICAgIC8vIChwdWJsaWMpIDEvdGhpcyAlIG0gKEhBQyAxNC42MSlcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnZlcnNlID0gZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgdmFyIGFjID0gbS5pc0V2ZW4oKTtcbiAgICAgICAgaWYgKCh0aGlzLmlzRXZlbigpICYmIGFjKSB8fCBtLnNpZ251bSgpID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBCaWdJbnRlZ2VyLlpFUk87XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHUgPSBtLmNsb25lKCk7XG4gICAgICAgIHZhciB2ID0gdGhpcy5jbG9uZSgpO1xuICAgICAgICB2YXIgYSA9IG5idigxKTtcbiAgICAgICAgdmFyIGIgPSBuYnYoMCk7XG4gICAgICAgIHZhciBjID0gbmJ2KDApO1xuICAgICAgICB2YXIgZCA9IG5idigxKTtcbiAgICAgICAgd2hpbGUgKHUuc2lnbnVtKCkgIT0gMCkge1xuICAgICAgICAgICAgd2hpbGUgKHUuaXNFdmVuKCkpIHtcbiAgICAgICAgICAgICAgICB1LnJTaGlmdFRvKDEsIHUpO1xuICAgICAgICAgICAgICAgIGlmIChhYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWEuaXNFdmVuKCkgfHwgIWIuaXNFdmVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuYWRkVG8odGhpcywgYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiLnN1YlRvKG0sIGIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEuclNoaWZ0VG8oMSwgYSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFiLmlzRXZlbigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGIuc3ViVG8obSwgYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIuclNoaWZ0VG8oMSwgYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAodi5pc0V2ZW4oKSkge1xuICAgICAgICAgICAgICAgIHYuclNoaWZ0VG8oMSwgdik7XG4gICAgICAgICAgICAgICAgaWYgKGFjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYy5pc0V2ZW4oKSB8fCAhZC5pc0V2ZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5hZGRUbyh0aGlzLCBjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuc3ViVG8obSwgZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYy5yU2hpZnRUbygxLCBjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIWQuaXNFdmVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZC5zdWJUbyhtLCBkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZC5yU2hpZnRUbygxLCBkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1LmNvbXBhcmVUbyh2KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgdS5zdWJUbyh2LCB1KTtcbiAgICAgICAgICAgICAgICBpZiAoYWMpIHtcbiAgICAgICAgICAgICAgICAgICAgYS5zdWJUbyhjLCBhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYi5zdWJUbyhkLCBiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHYuc3ViVG8odSwgdik7XG4gICAgICAgICAgICAgICAgaWYgKGFjKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuc3ViVG8oYSwgYyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGQuc3ViVG8oYiwgZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHYuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSAhPSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gQmlnSW50ZWdlci5aRVJPO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkLmNvbXBhcmVUbyhtKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZC5zdWJ0cmFjdChtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZC5zaWdudW0oKSA8IDApIHtcbiAgICAgICAgICAgIGQuYWRkVG8obSwgZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZC5zaWdudW0oKSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiBkLmFkZChtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBiblBvdztcbiAgICAvLyAocHVibGljKSB0aGlzXmVcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHAoZSwgbmV3IE51bGxFeHAoKSk7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nY2QgPSBibkdDRDtcbiAgICAvLyAocHVibGljKSBnY2QodGhpcyxhKSAoSEFDIDE0LjU0KVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdjZCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHZhciB4ID0gKHRoaXMucyA8IDApID8gdGhpcy5uZWdhdGUoKSA6IHRoaXMuY2xvbmUoKTtcbiAgICAgICAgdmFyIHkgPSAoYS5zIDwgMCkgPyBhLm5lZ2F0ZSgpIDogYS5jbG9uZSgpO1xuICAgICAgICBpZiAoeC5jb21wYXJlVG8oeSkgPCAwKSB7XG4gICAgICAgICAgICB2YXIgdCA9IHg7XG4gICAgICAgICAgICB4ID0geTtcbiAgICAgICAgICAgIHkgPSB0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0geC5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgICAgdmFyIGcgPSB5LmdldExvd2VzdFNldEJpdCgpO1xuICAgICAgICBpZiAoZyA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgZykge1xuICAgICAgICAgICAgZyA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGcgPiAwKSB7XG4gICAgICAgICAgICB4LnJTaGlmdFRvKGcsIHgpO1xuICAgICAgICAgICAgeS5yU2hpZnRUbyhnLCB5KTtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoeC5zaWdudW0oKSA+IDApIHtcbiAgICAgICAgICAgIGlmICgoaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkge1xuICAgICAgICAgICAgICAgIHguclNoaWZ0VG8oaSwgeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGkgPSB5LmdldExvd2VzdFNldEJpdCgpKSA+IDApIHtcbiAgICAgICAgICAgICAgICB5LnJTaGlmdFRvKGksIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHguY29tcGFyZVRvKHkpID49IDApIHtcbiAgICAgICAgICAgICAgICB4LnN1YlRvKHksIHgpO1xuICAgICAgICAgICAgICAgIHguclNoaWZ0VG8oMSwgeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5LnN1YlRvKHgsIHkpO1xuICAgICAgICAgICAgICAgIHkuclNoaWZ0VG8oMSwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGcgPiAwKSB7XG4gICAgICAgICAgICB5LmxTaGlmdFRvKGcsIHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB5O1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gYm5Jc1Byb2JhYmxlUHJpbWU7XG4gICAgLy8gKHB1YmxpYykgdGVzdCBwcmltYWxpdHkgd2l0aCBjZXJ0YWludHkgPj0gMS0uNV50XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciB4ID0gdGhpcy5hYnMoKTtcbiAgICAgICAgaWYgKHgudCA9PSAxICYmIHhbMF0gPD0gbG93cHJpbWVzW2xvd3ByaW1lcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGxvd3ByaW1lcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGlmICh4WzBdID09IGxvd3ByaW1lc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHguaXNFdmVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpID0gMTtcbiAgICAgICAgd2hpbGUgKGkgPCBsb3dwcmltZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgbSA9IGxvd3ByaW1lc1tpXTtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IGxvd3ByaW1lcy5sZW5ndGggJiYgbSA8IGxwbGltKSB7XG4gICAgICAgICAgICAgICAgbSAqPSBsb3dwcmltZXNbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG0gPSB4Lm1vZEludChtKTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgaikge1xuICAgICAgICAgICAgICAgIGlmIChtICUgbG93cHJpbWVzW2krK10gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4Lm1pbGxlclJhYmluKHQpO1xuICAgIH07XG4gICAgLy8jZW5kcmVnaW9uIFBVQkxJQ1xuICAgIC8vI3JlZ2lvbiBQUk9URUNURURcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb3B5VG8gPSBibnBDb3B5VG87XG4gICAgLy8gKHByb3RlY3RlZCkgY29weSB0aGlzIHRvIHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb3B5VG8gPSBmdW5jdGlvbiAocikge1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHJbaV0gPSB0aGlzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHIudCA9IHRoaXMudDtcbiAgICAgICAgci5zID0gdGhpcy5zO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbUludCA9IGJucEZyb21JbnQ7XG4gICAgLy8gKHByb3RlY3RlZCkgc2V0IGZyb20gaW50ZWdlciB2YWx1ZSB4LCAtRFYgPD0geCA8IERWXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbUludCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHRoaXMudCA9IDE7XG4gICAgICAgIHRoaXMucyA9ICh4IDwgMCkgPyAtMSA6IDA7XG4gICAgICAgIGlmICh4ID4gMCkge1xuICAgICAgICAgICAgdGhpc1swXSA9IHg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoeCA8IC0xKSB7XG4gICAgICAgICAgICB0aGlzWzBdID0geCArIHRoaXMuRFY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnQgPSAwO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tU3RyaW5nID0gYm5wRnJvbVN0cmluZztcbiAgICAvLyAocHJvdGVjdGVkKSBzZXQgZnJvbSBzdHJpbmcgYW5kIHJhZGl4XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIChzLCBiKSB7XG4gICAgICAgIHZhciBrO1xuICAgICAgICBpZiAoYiA9PSAxNikge1xuICAgICAgICAgICAgayA9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiA9PSA4KSB7XG4gICAgICAgICAgICBrID0gMztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiID09IDI1Nikge1xuICAgICAgICAgICAgayA9IDg7XG4gICAgICAgICAgICAvKiBieXRlIGFycmF5ICovXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYiA9PSAyKSB7XG4gICAgICAgICAgICBrID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiID09IDMyKSB7XG4gICAgICAgICAgICBrID0gNTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChiID09IDQpIHtcbiAgICAgICAgICAgIGsgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcm9tUmFkaXgocywgYik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ID0gMDtcbiAgICAgICAgdGhpcy5zID0gMDtcbiAgICAgICAgdmFyIGkgPSBzLmxlbmd0aDtcbiAgICAgICAgdmFyIG1pID0gZmFsc2U7XG4gICAgICAgIHZhciBzaCA9IDA7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgdmFyIHggPSAoayA9PSA4KSA/ICgrc1tpXSkgJiAweGZmIDogaW50QXQocywgaSk7XG4gICAgICAgICAgICBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocy5jaGFyQXQoaSkgPT0gXCItXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2ggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXNbdGhpcy50KytdID0geDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHNoICsgayA+IHRoaXMuREIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW3RoaXMudCAtIDFdIHw9ICh4ICYgKCgxIDw8ICh0aGlzLkRCIC0gc2gpKSAtIDEpKSA8PCBzaDtcbiAgICAgICAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9ICh4ID4+ICh0aGlzLkRCIC0gc2gpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbdGhpcy50IC0gMV0gfD0geCA8PCBzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoICs9IGs7XG4gICAgICAgICAgICBpZiAoc2ggPj0gdGhpcy5EQikge1xuICAgICAgICAgICAgICAgIHNoIC09IHRoaXMuREI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGsgPT0gOCAmJiAoKCtzWzBdKSAmIDB4ODApICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMucyA9IC0xO1xuICAgICAgICAgICAgaWYgKHNoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXNbdGhpcy50IC0gMV0gfD0gKCgxIDw8ICh0aGlzLkRCIC0gc2gpKSAtIDEpIDw8IHNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xhbXAoKTtcbiAgICAgICAgaWYgKG1pKSB7XG4gICAgICAgICAgICBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmNsYW1wID0gYm5wQ2xhbXA7XG4gICAgLy8gKHByb3RlY3RlZCkgY2xhbXAgb2ZmIGV4Y2VzcyBoaWdoIHdvcmRzXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY2xhbXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjID0gdGhpcy5zICYgdGhpcy5ETTtcbiAgICAgICAgd2hpbGUgKHRoaXMudCA+IDAgJiYgdGhpc1t0aGlzLnQgLSAxXSA9PSBjKSB7XG4gICAgICAgICAgICAtLXRoaXMudDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZGxTaGlmdFRvID0gYm5wRExTaGlmdFRvO1xuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIDw8IG4qREJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kbFNoaWZ0VG8gPSBmdW5jdGlvbiAobiwgcikge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gdGhpcy50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHJbaSArIG5dID0gdGhpc1tpXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSBuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHJbaV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHIudCA9IHRoaXMudCArIG47XG4gICAgICAgIHIucyA9IHRoaXMucztcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmRyU2hpZnRUbyA9IGJucERSU2hpZnRUbztcbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuKkRCXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZHJTaGlmdFRvID0gZnVuY3Rpb24gKG4sIHIpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IG47IGkgPCB0aGlzLnQ7ICsraSkge1xuICAgICAgICAgICAgcltpIC0gbl0gPSB0aGlzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHIudCA9IE1hdGgubWF4KHRoaXMudCAtIG4sIDApO1xuICAgICAgICByLnMgPSB0aGlzLnM7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sU2hpZnRUbyA9IGJucExTaGlmdFRvO1xuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzIDw8IG5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sU2hpZnRUbyA9IGZ1bmN0aW9uIChuLCByKSB7XG4gICAgICAgIHZhciBicyA9IG4gJSB0aGlzLkRCO1xuICAgICAgICB2YXIgY2JzID0gdGhpcy5EQiAtIGJzO1xuICAgICAgICB2YXIgYm0gPSAoMSA8PCBjYnMpIC0gMTtcbiAgICAgICAgdmFyIGRzID0gTWF0aC5mbG9vcihuIC8gdGhpcy5EQik7XG4gICAgICAgIHZhciBjID0gKHRoaXMucyA8PCBicykgJiB0aGlzLkRNO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgIHJbaSArIGRzICsgMV0gPSAodGhpc1tpXSA+PiBjYnMpIHwgYztcbiAgICAgICAgICAgIGMgPSAodGhpc1tpXSAmIGJtKSA8PCBicztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gZHMgLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgcltpXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcltkc10gPSBjO1xuICAgICAgICByLnQgPSB0aGlzLnQgKyBkcyArIDE7XG4gICAgICAgIHIucyA9IHRoaXMucztcbiAgICAgICAgci5jbGFtcCgpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuclNoaWZ0VG8gPSBibnBSU2hpZnRUbztcbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyA+PiBuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuclNoaWZ0VG8gPSBmdW5jdGlvbiAobiwgcikge1xuICAgICAgICByLnMgPSB0aGlzLnM7XG4gICAgICAgIHZhciBkcyA9IE1hdGguZmxvb3IobiAvIHRoaXMuREIpO1xuICAgICAgICBpZiAoZHMgPj0gdGhpcy50KSB7XG4gICAgICAgICAgICByLnQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBicyA9IG4gJSB0aGlzLkRCO1xuICAgICAgICB2YXIgY2JzID0gdGhpcy5EQiAtIGJzO1xuICAgICAgICB2YXIgYm0gPSAoMSA8PCBicykgLSAxO1xuICAgICAgICByWzBdID0gdGhpc1tkc10gPj4gYnM7XG4gICAgICAgIGZvciAodmFyIGkgPSBkcyArIDE7IGkgPCB0aGlzLnQ7ICsraSkge1xuICAgICAgICAgICAgcltpIC0gZHMgLSAxXSB8PSAodGhpc1tpXSAmIGJtKSA8PCBjYnM7XG4gICAgICAgICAgICByW2kgLSBkc10gPSB0aGlzW2ldID4+IGJzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChicyA+IDApIHtcbiAgICAgICAgICAgIHJbdGhpcy50IC0gZHMgLSAxXSB8PSAodGhpcy5zICYgYm0pIDw8IGNicztcbiAgICAgICAgfVxuICAgICAgICByLnQgPSB0aGlzLnQgLSBkcztcbiAgICAgICAgci5jbGFtcCgpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuc3ViVG8gPSBibnBTdWJUbztcbiAgICAvLyAocHJvdGVjdGVkKSByID0gdGhpcyAtIGFcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJUbyA9IGZ1bmN0aW9uIChhLCByKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGMgPSAwO1xuICAgICAgICB2YXIgbSA9IE1hdGgubWluKGEudCwgdGhpcy50KTtcbiAgICAgICAgd2hpbGUgKGkgPCBtKSB7XG4gICAgICAgICAgICBjICs9IHRoaXNbaV0gLSBhW2ldO1xuICAgICAgICAgICAgcltpKytdID0gYyAmIHRoaXMuRE07XG4gICAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgICAgIGMgLT0gYS5zO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCB0aGlzLnQpIHtcbiAgICAgICAgICAgICAgICBjICs9IHRoaXNbaV07XG4gICAgICAgICAgICAgICAgcltpKytdID0gYyAmIHRoaXMuRE07XG4gICAgICAgICAgICAgICAgYyA+Pj0gdGhpcy5EQjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGMgKz0gdGhpcy5zO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IGEudCkge1xuICAgICAgICAgICAgICAgIGMgLT0gYVtpXTtcbiAgICAgICAgICAgICAgICByW2krK10gPSBjICYgdGhpcy5ETTtcbiAgICAgICAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYyAtPSBhLnM7XG4gICAgICAgIH1cbiAgICAgICAgci5zID0gKGMgPCAwKSA/IC0xIDogMDtcbiAgICAgICAgaWYgKGMgPCAtMSkge1xuICAgICAgICAgICAgcltpKytdID0gdGhpcy5EViArIGM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA+IDApIHtcbiAgICAgICAgICAgIHJbaSsrXSA9IGM7XG4gICAgICAgIH1cbiAgICAgICAgci50ID0gaTtcbiAgICAgICAgci5jbGFtcCgpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlUbyA9IGJucE11bHRpcGx5VG87XG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgKiBhLCByICE9IHRoaXMsYSAoSEFDIDE0LjEyKVxuICAgIC8vIFwidGhpc1wiIHNob3VsZCBiZSB0aGUgbGFyZ2VyIG9uZSBpZiBhcHByb3ByaWF0ZS5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseVRvID0gZnVuY3Rpb24gKGEsIHIpIHtcbiAgICAgICAgdmFyIHggPSB0aGlzLmFicygpO1xuICAgICAgICB2YXIgeSA9IGEuYWJzKCk7XG4gICAgICAgIHZhciBpID0geC50O1xuICAgICAgICByLnQgPSBpICsgeS50O1xuICAgICAgICB3aGlsZSAoLS1pID49IDApIHtcbiAgICAgICAgICAgIHJbaV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB5LnQ7ICsraSkge1xuICAgICAgICAgICAgcltpICsgeC50XSA9IHguYW0oMCwgeVtpXSwgciwgaSwgMCwgeC50KTtcbiAgICAgICAgfVxuICAgICAgICByLnMgPSAwO1xuICAgICAgICByLmNsYW1wKCk7XG4gICAgICAgIGlmICh0aGlzLnMgIT0gYS5zKSB7XG4gICAgICAgICAgICBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ociwgcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZVRvID0gYm5wU3F1YXJlVG87XG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXNeMiwgciAhPSB0aGlzIChIQUMgMTQuMTYpXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlVG8gPSBmdW5jdGlvbiAocikge1xuICAgICAgICB2YXIgeCA9IHRoaXMuYWJzKCk7XG4gICAgICAgIHZhciBpID0gci50ID0gMiAqIHgudDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgICByW2ldID0gMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgeC50IC0gMTsgKytpKSB7XG4gICAgICAgICAgICB2YXIgYyA9IHguYW0oaSwgeFtpXSwgciwgMiAqIGksIDAsIDEpO1xuICAgICAgICAgICAgaWYgKChyW2kgKyB4LnRdICs9IHguYW0oaSArIDEsIDIgKiB4W2ldLCByLCAyICogaSArIDEsIGMsIHgudCAtIGkgLSAxKSkgPj0geC5EVikge1xuICAgICAgICAgICAgICAgIHJbaSArIHgudF0gLT0geC5EVjtcbiAgICAgICAgICAgICAgICByW2kgKyB4LnQgKyAxXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIudCA+IDApIHtcbiAgICAgICAgICAgIHJbci50IC0gMV0gKz0geC5hbShpLCB4W2ldLCByLCAyICogaSwgMCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgci5zID0gMDtcbiAgICAgICAgci5jbGFtcCgpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2UmVtVG8gPSBibnBEaXZSZW1UbztcbiAgICAvLyAocHJvdGVjdGVkKSBkaXZpZGUgdGhpcyBieSBtLCBxdW90aWVudCBhbmQgcmVtYWluZGVyIHRvIHEsIHIgKEhBQyAxNC4yMClcbiAgICAvLyByICE9IHEsIHRoaXMgIT0gbS4gIHEgb3IgciBtYXkgYmUgbnVsbC5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZSZW1UbyA9IGZ1bmN0aW9uIChtLCBxLCByKSB7XG4gICAgICAgIHZhciBwbSA9IG0uYWJzKCk7XG4gICAgICAgIGlmIChwbS50IDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHQgPSB0aGlzLmFicygpO1xuICAgICAgICBpZiAocHQudCA8IHBtLnQpIHtcbiAgICAgICAgICAgIGlmIChxICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBxLmZyb21JbnQoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAociAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3B5VG8ocik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIgPT0gbnVsbCkge1xuICAgICAgICAgICAgciA9IG5iaSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB5ID0gbmJpKCk7XG4gICAgICAgIHZhciB0cyA9IHRoaXMucztcbiAgICAgICAgdmFyIG1zID0gbS5zO1xuICAgICAgICB2YXIgbnNoID0gdGhpcy5EQiAtIG5iaXRzKHBtW3BtLnQgLSAxXSk7IC8vIG5vcm1hbGl6ZSBtb2R1bHVzXG4gICAgICAgIGlmIChuc2ggPiAwKSB7XG4gICAgICAgICAgICBwbS5sU2hpZnRUbyhuc2gsIHkpO1xuICAgICAgICAgICAgcHQubFNoaWZ0VG8obnNoLCByKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBtLmNvcHlUbyh5KTtcbiAgICAgICAgICAgIHB0LmNvcHlUbyhyKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeXMgPSB5LnQ7XG4gICAgICAgIHZhciB5MCA9IHlbeXMgLSAxXTtcbiAgICAgICAgaWYgKHkwID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgeXQgPSB5MCAqICgxIDw8IHRoaXMuRjEpICsgKCh5cyA+IDEpID8geVt5cyAtIDJdID4+IHRoaXMuRjIgOiAwKTtcbiAgICAgICAgdmFyIGQxID0gdGhpcy5GViAvIHl0O1xuICAgICAgICB2YXIgZDIgPSAoMSA8PCB0aGlzLkYxKSAvIHl0O1xuICAgICAgICB2YXIgZSA9IDEgPDwgdGhpcy5GMjtcbiAgICAgICAgdmFyIGkgPSByLnQ7XG4gICAgICAgIHZhciBqID0gaSAtIHlzO1xuICAgICAgICB2YXIgdCA9IChxID09IG51bGwpID8gbmJpKCkgOiBxO1xuICAgICAgICB5LmRsU2hpZnRUbyhqLCB0KTtcbiAgICAgICAgaWYgKHIuY29tcGFyZVRvKHQpID49IDApIHtcbiAgICAgICAgICAgIHJbci50KytdID0gMTtcbiAgICAgICAgICAgIHIuc3ViVG8odCwgcik7XG4gICAgICAgIH1cbiAgICAgICAgQmlnSW50ZWdlci5PTkUuZGxTaGlmdFRvKHlzLCB0KTtcbiAgICAgICAgdC5zdWJUbyh5LCB5KTsgLy8gXCJuZWdhdGl2ZVwiIHkgc28gd2UgY2FuIHJlcGxhY2Ugc3ViIHdpdGggYW0gbGF0ZXJcbiAgICAgICAgd2hpbGUgKHkudCA8IHlzKSB7XG4gICAgICAgICAgICB5W3kudCsrXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKC0taiA+PSAwKSB7XG4gICAgICAgICAgICAvLyBFc3RpbWF0ZSBxdW90aWVudCBkaWdpdFxuICAgICAgICAgICAgdmFyIHFkID0gKHJbLS1pXSA9PSB5MCkgPyB0aGlzLkRNIDogTWF0aC5mbG9vcihyW2ldICogZDEgKyAocltpIC0gMV0gKyBlKSAqIGQyKTtcbiAgICAgICAgICAgIGlmICgocltpXSArPSB5LmFtKDAsIHFkLCByLCBqLCAwLCB5cykpIDwgcWQpIHtcbiAgICAgICAgICAgICAgICB5LmRsU2hpZnRUbyhqLCB0KTtcbiAgICAgICAgICAgICAgICByLnN1YlRvKHQsIHIpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChyW2ldIDwgLS1xZCkge1xuICAgICAgICAgICAgICAgICAgICByLnN1YlRvKHQsIHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocSAhPSBudWxsKSB7XG4gICAgICAgICAgICByLmRyU2hpZnRUbyh5cywgcSk7XG4gICAgICAgICAgICBpZiAodHMgIT0gbXMpIHtcbiAgICAgICAgICAgICAgICBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8ocSwgcSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgci50ID0geXM7XG4gICAgICAgIHIuY2xhbXAoKTtcbiAgICAgICAgaWYgKG5zaCA+IDApIHtcbiAgICAgICAgICAgIHIuclNoaWZ0VG8obnNoLCByKTtcbiAgICAgICAgfSAvLyBEZW5vcm1hbGl6ZSByZW1haW5kZXJcbiAgICAgICAgaWYgKHRzIDwgMCkge1xuICAgICAgICAgICAgQmlnSW50ZWdlci5aRVJPLnN1YlRvKHIsIHIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnZEaWdpdCA9IGJucEludkRpZ2l0O1xuICAgIC8vIChwcm90ZWN0ZWQpIHJldHVybiBcIi0xL3RoaXMgJSAyXkRCXCI7IHVzZWZ1bCBmb3IgTW9udC4gcmVkdWN0aW9uXG4gICAgLy8ganVzdGlmaWNhdGlvbjpcbiAgICAvLyAgICAgICAgIHh5ID09IDEgKG1vZCBtKVxuICAgIC8vICAgICAgICAgeHkgPSAgMStrbVxuICAgIC8vICAgeHkoMi14eSkgPSAoMStrbSkoMS1rbSlcbiAgICAvLyB4W3koMi14eSldID0gMS1rXjJtXjJcbiAgICAvLyB4W3koMi14eSldID09IDEgKG1vZCBtXjIpXG4gICAgLy8gaWYgeSBpcyAxL3ggbW9kIG0sIHRoZW4geSgyLXh5KSBpcyAxL3ggbW9kIG1eMlxuICAgIC8vIHNob3VsZCByZWR1Y2UgeCBhbmQgeSgyLXh5KSBieSBtXjIgYXQgZWFjaCBzdGVwIHRvIGtlZXAgc2l6ZSBib3VuZGVkLlxuICAgIC8vIEpTIG11bHRpcGx5IFwib3ZlcmZsb3dzXCIgZGlmZmVyZW50bHkgZnJvbSBDL0MrKywgc28gY2FyZSBpcyBuZWVkZWQgaGVyZS5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pbnZEaWdpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudCA8IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciB4ID0gdGhpc1swXTtcbiAgICAgICAgaWYgKCh4ICYgMSkgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHkgPSB4ICYgMzsgLy8geSA9PSAxL3ggbW9kIDJeMlxuICAgICAgICB5ID0gKHkgKiAoMiAtICh4ICYgMHhmKSAqIHkpKSAmIDB4ZjsgLy8geSA9PSAxL3ggbW9kIDJeNFxuICAgICAgICB5ID0gKHkgKiAoMiAtICh4ICYgMHhmZikgKiB5KSkgJiAweGZmOyAvLyB5ID09IDEveCBtb2QgMl44XG4gICAgICAgIHkgPSAoeSAqICgyIC0gKCgoeCAmIDB4ZmZmZikgKiB5KSAmIDB4ZmZmZikpKSAmIDB4ZmZmZjsgLy8geSA9PSAxL3ggbW9kIDJeMTZcbiAgICAgICAgLy8gbGFzdCBzdGVwIC0gY2FsY3VsYXRlIGludmVyc2UgbW9kIERWIGRpcmVjdGx5O1xuICAgICAgICAvLyBhc3N1bWVzIDE2IDwgREIgPD0gMzIgYW5kIGFzc3VtZXMgYWJpbGl0eSB0byBoYW5kbGUgNDgtYml0IGludHNcbiAgICAgICAgeSA9ICh5ICogKDIgLSB4ICogeSAlIHRoaXMuRFYpKSAlIHRoaXMuRFY7IC8vIHkgPT0gMS94IG1vZCAyXmRiaXRzXG4gICAgICAgIC8vIHdlIHJlYWxseSB3YW50IHRoZSBuZWdhdGl2ZSBpbnZlcnNlLCBhbmQgLURWIDwgeSA8IERWXG4gICAgICAgIHJldHVybiAoeSA+IDApID8gdGhpcy5EViAtIHkgOiAteTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGJucElzRXZlbjtcbiAgICAvLyAocHJvdGVjdGVkKSB0cnVlIGlmZiB0aGlzIGlzIGV2ZW5cbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoKHRoaXMudCA+IDApID8gKHRoaXNbMF0gJiAxKSA6IHRoaXMucykgPT0gMDtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmV4cCA9IGJucEV4cDtcbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzXmUsIGUgPCAyXjMyLCBkb2luZyBzcXIgYW5kIG11bCB3aXRoIFwiclwiIChIQUMgMTQuNzkpXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXhwID0gZnVuY3Rpb24gKGUsIHopIHtcbiAgICAgICAgaWYgKGUgPiAweGZmZmZmZmZmIHx8IGUgPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gQmlnSW50ZWdlci5PTkU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgdmFyIHIyID0gbmJpKCk7XG4gICAgICAgIHZhciBnID0gei5jb252ZXJ0KHRoaXMpO1xuICAgICAgICB2YXIgaSA9IG5iaXRzKGUpIC0gMTtcbiAgICAgICAgZy5jb3B5VG8ocik7XG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgei5zcXJUbyhyLCByMik7XG4gICAgICAgICAgICBpZiAoKGUgJiAoMSA8PCBpKSkgPiAwKSB7XG4gICAgICAgICAgICAgICAgei5tdWxUbyhyMiwgZywgcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdCA9IHI7XG4gICAgICAgICAgICAgICAgciA9IHIyO1xuICAgICAgICAgICAgICAgIHIyID0gdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gei5yZXZlcnQocik7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaHVua1NpemUgPSBibnBDaHVua1NpemU7XG4gICAgLy8gKHByb3RlY3RlZCkgcmV0dXJuIHggcy50LiByXnggPCBEVlxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNodW5rU2l6ZSA9IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGguTE4yICogdGhpcy5EQiAvIE1hdGgubG9nKHIpKTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvUmFkaXggPSBibnBUb1JhZGl4O1xuICAgIC8vIChwcm90ZWN0ZWQpIGNvbnZlcnQgdG8gcmFkaXggc3RyaW5nXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9SYWRpeCA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIGlmIChiID09IG51bGwpIHtcbiAgICAgICAgICAgIGIgPSAxMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaWdudW0oKSA9PSAwIHx8IGIgPCAyIHx8IGIgPiAzNikge1xuICAgICAgICAgICAgcmV0dXJuIFwiMFwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjcyA9IHRoaXMuY2h1bmtTaXplKGIpO1xuICAgICAgICB2YXIgYSA9IE1hdGgucG93KGIsIGNzKTtcbiAgICAgICAgdmFyIGQgPSBuYnYoYSk7XG4gICAgICAgIHZhciB5ID0gbmJpKCk7XG4gICAgICAgIHZhciB6ID0gbmJpKCk7XG4gICAgICAgIHZhciByID0gXCJcIjtcbiAgICAgICAgdGhpcy5kaXZSZW1UbyhkLCB5LCB6KTtcbiAgICAgICAgd2hpbGUgKHkuc2lnbnVtKCkgPiAwKSB7XG4gICAgICAgICAgICByID0gKGEgKyB6LmludFZhbHVlKCkpLnRvU3RyaW5nKGIpLnN1YnN0cigxKSArIHI7XG4gICAgICAgICAgICB5LmRpdlJlbVRvKGQsIHksIHopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB6LmludFZhbHVlKCkudG9TdHJpbmcoYikgKyByO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbVJhZGl4ID0gYm5wRnJvbVJhZGl4O1xuICAgIC8vIChwcm90ZWN0ZWQpIGNvbnZlcnQgZnJvbSByYWRpeCBzdHJpbmdcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5mcm9tUmFkaXggPSBmdW5jdGlvbiAocywgYikge1xuICAgICAgICB0aGlzLmZyb21JbnQoMCk7XG4gICAgICAgIGlmIChiID09IG51bGwpIHtcbiAgICAgICAgICAgIGIgPSAxMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3MgPSB0aGlzLmNodW5rU2l6ZShiKTtcbiAgICAgICAgdmFyIGQgPSBNYXRoLnBvdyhiLCBjcyk7XG4gICAgICAgIHZhciBtaSA9IGZhbHNlO1xuICAgICAgICB2YXIgaiA9IDA7XG4gICAgICAgIHZhciB3ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIgeCA9IGludEF0KHMsIGkpO1xuICAgICAgICAgICAgaWYgKHggPCAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHMuY2hhckF0KGkpID09IFwiLVwiICYmIHRoaXMuc2lnbnVtKCkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtaSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdyA9IGIgKiB3ICsgeDtcbiAgICAgICAgICAgIGlmICgrK2ogPj0gY3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRNdWx0aXBseShkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQodywgMCk7XG4gICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgICAgdyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGogPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRNdWx0aXBseShNYXRoLnBvdyhiLCBqKSk7XG4gICAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQodywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pKSB7XG4gICAgICAgICAgICBCaWdJbnRlZ2VyLlpFUk8uc3ViVG8odGhpcywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21OdW1iZXIgPSBibnBGcm9tTnVtYmVyO1xuICAgIC8vIChwcm90ZWN0ZWQpIGFsdGVybmF0ZSBjb25zdHJ1Y3RvclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmZyb21OdW1iZXIgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAoXCJudW1iZXJcIiA9PSB0eXBlb2YgYikge1xuICAgICAgICAgICAgLy8gbmV3IEJpZ0ludGVnZXIoaW50LGludCxSTkcpXG4gICAgICAgICAgICBpZiAoYSA8IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyb21JbnQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyb21OdW1iZXIoYSwgYyk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRlc3RCaXQoYSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZvcmNlIE1TQiBzZXRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iaXR3aXNlVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEgLSAxKSwgb3Bfb3IsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0V2ZW4oKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRBZGRPZmZzZXQoMSwgMCk7XG4gICAgICAgICAgICAgICAgfSAvLyBmb3JjZSBvZGRcbiAgICAgICAgICAgICAgICB3aGlsZSAoIXRoaXMuaXNQcm9iYWJsZVByaW1lKGIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZEFkZE9mZnNldCgyLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYml0TGVuZ3RoKCkgPiBhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1YlRvKEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChhIC0gMSksIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gbmV3IEJpZ0ludGVnZXIoaW50LFJORylcbiAgICAgICAgICAgIHZhciB4ID0gW107XG4gICAgICAgICAgICB2YXIgdCA9IGEgJiA3O1xuICAgICAgICAgICAgeC5sZW5ndGggPSAoYSA+PiAzKSArIDE7XG4gICAgICAgICAgICBiLm5leHRCeXRlcyh4KTtcbiAgICAgICAgICAgIGlmICh0ID4gMCkge1xuICAgICAgICAgICAgICAgIHhbMF0gJj0gKCgxIDw8IHQpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4WzBdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZnJvbVN0cmluZyh4LCAyNTYpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXR3aXNlVG8gPSBibnBCaXR3aXNlVG87XG4gICAgLy8gKHByb3RlY3RlZCkgciA9IHRoaXMgb3AgYSAoYml0d2lzZSlcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXR3aXNlVG8gPSBmdW5jdGlvbiAoYSwgb3AsIHIpIHtcbiAgICAgICAgdmFyIGk7XG4gICAgICAgIHZhciBmO1xuICAgICAgICB2YXIgbSA9IE1hdGgubWluKGEudCwgdGhpcy50KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG07ICsraSkge1xuICAgICAgICAgICAgcltpXSA9IG9wKHRoaXNbaV0sIGFbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLnQgPCB0aGlzLnQpIHtcbiAgICAgICAgICAgIGYgPSBhLnMgJiB0aGlzLkRNO1xuICAgICAgICAgICAgZm9yIChpID0gbTsgaSA8IHRoaXMudDsgKytpKSB7XG4gICAgICAgICAgICAgICAgcltpXSA9IG9wKHRoaXNbaV0sIGYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgci50ID0gdGhpcy50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZiA9IHRoaXMucyAmIHRoaXMuRE07XG4gICAgICAgICAgICBmb3IgKGkgPSBtOyBpIDwgYS50OyArK2kpIHtcbiAgICAgICAgICAgICAgICByW2ldID0gb3AoZiwgYVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByLnQgPSBhLnQ7XG4gICAgICAgIH1cbiAgICAgICAgci5zID0gb3AodGhpcy5zLCBhLnMpO1xuICAgICAgICByLmNsYW1wKCk7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaGFuZ2VCaXQgPSBibnBDaGFuZ2VCaXQ7XG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyBvcCAoMTw8bilcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jaGFuZ2VCaXQgPSBmdW5jdGlvbiAobiwgb3ApIHtcbiAgICAgICAgdmFyIHIgPSBCaWdJbnRlZ2VyLk9ORS5zaGlmdExlZnQobik7XG4gICAgICAgIHRoaXMuYml0d2lzZVRvKHIsIG9wLCByKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGRUbyA9IGJucEFkZFRvO1xuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSB0aGlzICsgYVxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZFRvID0gZnVuY3Rpb24gKGEsIHIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgYyA9IDA7XG4gICAgICAgIHZhciBtID0gTWF0aC5taW4oYS50LCB0aGlzLnQpO1xuICAgICAgICB3aGlsZSAoaSA8IG0pIHtcbiAgICAgICAgICAgIGMgKz0gdGhpc1tpXSArIGFbaV07XG4gICAgICAgICAgICByW2krK10gPSBjICYgdGhpcy5ETTtcbiAgICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEudCA8IHRoaXMudCkge1xuICAgICAgICAgICAgYyArPSBhLnM7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IHRoaXMudCkge1xuICAgICAgICAgICAgICAgIGMgKz0gdGhpc1tpXTtcbiAgICAgICAgICAgICAgICByW2krK10gPSBjICYgdGhpcy5ETTtcbiAgICAgICAgICAgICAgICBjID4+PSB0aGlzLkRCO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYyArPSB0aGlzLnM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjICs9IHRoaXMucztcbiAgICAgICAgICAgIHdoaWxlIChpIDwgYS50KSB7XG4gICAgICAgICAgICAgICAgYyArPSBhW2ldO1xuICAgICAgICAgICAgICAgIHJbaSsrXSA9IGMgJiB0aGlzLkRNO1xuICAgICAgICAgICAgICAgIGMgPj49IHRoaXMuREI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjICs9IGEucztcbiAgICAgICAgfVxuICAgICAgICByLnMgPSAoYyA8IDApID8gLTEgOiAwO1xuICAgICAgICBpZiAoYyA+IDApIHtcbiAgICAgICAgICAgIHJbaSsrXSA9IGM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IC0xKSB7XG4gICAgICAgICAgICByW2krK10gPSB0aGlzLkRWICsgYztcbiAgICAgICAgfVxuICAgICAgICByLnQgPSBpO1xuICAgICAgICByLmNsYW1wKCk7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kTXVsdGlwbHkgPSBibnBETXVsdGlwbHk7XG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyAqPSBuLCB0aGlzID49IDAsIDEgPCBuIDwgRFZcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kTXVsdGlwbHkgPSBmdW5jdGlvbiAobikge1xuICAgICAgICB0aGlzW3RoaXMudF0gPSB0aGlzLmFtKDAsIG4gLSAxLCB0aGlzLCAwLCAwLCB0aGlzLnQpO1xuICAgICAgICArK3RoaXMudDtcbiAgICAgICAgdGhpcy5jbGFtcCgpO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuZEFkZE9mZnNldCA9IGJucERBZGRPZmZzZXQ7XG4gICAgLy8gKHByb3RlY3RlZCkgdGhpcyArPSBuIDw8IHcgd29yZHMsIHRoaXMgPj0gMFxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRBZGRPZmZzZXQgPSBmdW5jdGlvbiAobiwgdykge1xuICAgICAgICBpZiAobiA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHRoaXMudCA8PSB3KSB7XG4gICAgICAgICAgICB0aGlzW3RoaXMudCsrXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpc1t3XSArPSBuO1xuICAgICAgICB3aGlsZSAodGhpc1t3XSA+PSB0aGlzLkRWKSB7XG4gICAgICAgICAgICB0aGlzW3ddIC09IHRoaXMuRFY7XG4gICAgICAgICAgICBpZiAoKyt3ID49IHRoaXMudCkge1xuICAgICAgICAgICAgICAgIHRoaXNbdGhpcy50KytdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICsrdGhpc1t3XTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlMb3dlclRvID0gYm5wTXVsdGlwbHlMb3dlclRvO1xuICAgIC8vIChwcm90ZWN0ZWQpIHIgPSBsb3dlciBuIHdvcmRzIG9mIFwidGhpcyAqIGFcIiwgYS50IDw9IG5cbiAgICAvLyBcInRoaXNcIiBzaG91bGQgYmUgdGhlIGxhcmdlciBvbmUgaWYgYXBwcm9wcmlhdGUuXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHlMb3dlclRvID0gZnVuY3Rpb24gKGEsIG4sIHIpIHtcbiAgICAgICAgdmFyIGkgPSBNYXRoLm1pbih0aGlzLnQgKyBhLnQsIG4pO1xuICAgICAgICByLnMgPSAwOyAvLyBhc3N1bWVzIGEsdGhpcyA+PSAwXG4gICAgICAgIHIudCA9IGk7XG4gICAgICAgIHdoaWxlIChpID4gMCkge1xuICAgICAgICAgICAgclstLWldID0gMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBqID0gci50IC0gdGhpcy50OyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgICByW2kgKyB0aGlzLnRdID0gdGhpcy5hbSgwLCBhW2ldLCByLCBpLCAwLCB0aGlzLnQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGogPSBNYXRoLm1pbihhLnQsIG4pOyBpIDwgajsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmFtKDAsIGFbaV0sIHIsIGksIDAsIG4gLSBpKTtcbiAgICAgICAgfVxuICAgICAgICByLmNsYW1wKCk7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseVVwcGVyVG8gPSBibnBNdWx0aXBseVVwcGVyVG87XG4gICAgLy8gKHByb3RlY3RlZCkgciA9IFwidGhpcyAqIGFcIiB3aXRob3V0IGxvd2VyIG4gd29yZHMsIG4gPiAwXG4gICAgLy8gXCJ0aGlzXCIgc2hvdWxkIGJlIHRoZSBsYXJnZXIgb25lIGlmIGFwcHJvcHJpYXRlLlxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5VXBwZXJUbyA9IGZ1bmN0aW9uIChhLCBuLCByKSB7XG4gICAgICAgIC0tbjtcbiAgICAgICAgdmFyIGkgPSByLnQgPSB0aGlzLnQgKyBhLnQgLSBuO1xuICAgICAgICByLnMgPSAwOyAvLyBhc3N1bWVzIGEsdGhpcyA+PSAwXG4gICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgcltpXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gTWF0aC5tYXgobiAtIHRoaXMudCwgMCk7IGkgPCBhLnQ7ICsraSkge1xuICAgICAgICAgICAgclt0aGlzLnQgKyBpIC0gbl0gPSB0aGlzLmFtKG4gLSBpLCBhW2ldLCByLCAwLCAwLCB0aGlzLnQgKyBpIC0gbik7XG4gICAgICAgIH1cbiAgICAgICAgci5jbGFtcCgpO1xuICAgICAgICByLmRyU2hpZnRUbygxLCByKTtcbiAgICB9O1xuICAgIC8vIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludCA9IGJucE1vZEludDtcbiAgICAvLyAocHJvdGVjdGVkKSB0aGlzICUgbiwgbiA8IDJeMjZcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnQgPSBmdW5jdGlvbiAobikge1xuICAgICAgICBpZiAobiA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZCA9IHRoaXMuRFYgJSBuO1xuICAgICAgICB2YXIgciA9ICh0aGlzLnMgPCAwKSA/IG4gLSAxIDogMDtcbiAgICAgICAgaWYgKHRoaXMudCA+IDApIHtcbiAgICAgICAgICAgIGlmIChkID09IDApIHtcbiAgICAgICAgICAgICAgICByID0gdGhpc1swXSAlIG47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy50IC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICAgICAgciA9IChkICogciArIHRoaXNbaV0pICUgbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taWxsZXJSYWJpbiA9IGJucE1pbGxlclJhYmluO1xuICAgIC8vIChwcm90ZWN0ZWQpIHRydWUgaWYgcHJvYmFibHkgcHJpbWUgKEhBQyA0LjI0LCBNaWxsZXItUmFiaW4pXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWlsbGVyUmFiaW4gPSBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgbjEgPSB0aGlzLnN1YnRyYWN0KEJpZ0ludGVnZXIuT05FKTtcbiAgICAgICAgdmFyIGsgPSBuMS5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgICAgaWYgKGsgPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gbjEuc2hpZnRSaWdodChrKTtcbiAgICAgICAgdCA9ICh0ICsgMSkgPj4gMTtcbiAgICAgICAgaWYgKHQgPiBsb3dwcmltZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0ID0gbG93cHJpbWVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IG5iaSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQ7ICsraSkge1xuICAgICAgICAgICAgLy8gUGljayBiYXNlcyBhdCByYW5kb20sIGluc3RlYWQgb2Ygc3RhcnRpbmcgYXQgMlxuICAgICAgICAgICAgYS5mcm9tSW50KGxvd3ByaW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsb3dwcmltZXMubGVuZ3RoKV0pO1xuICAgICAgICAgICAgdmFyIHkgPSBhLm1vZFBvdyhyLCB0aGlzKTtcbiAgICAgICAgICAgIGlmICh5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgIT0gMCAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaisrIDwgayAmJiB5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB5ID0geS5tb2RQb3dJbnQoMiwgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh5LmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh5LmNvbXBhcmVUbyhuMSkgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgLy8gQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gYm5TcXVhcmU7XG4gICAgLy8gKHB1YmxpYykgdGhpc14yXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IG5iaSgpO1xuICAgICAgICB0aGlzLnNxdWFyZVRvKHIpO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIC8vI3JlZ2lvbiBBU1lOQ1xuICAgIC8vIFB1YmxpYyBBUEkgbWV0aG9kXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ2NkYSA9IGZ1bmN0aW9uIChhLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgeCA9ICh0aGlzLnMgPCAwKSA/IHRoaXMubmVnYXRlKCkgOiB0aGlzLmNsb25lKCk7XG4gICAgICAgIHZhciB5ID0gKGEucyA8IDApID8gYS5uZWdhdGUoKSA6IGEuY2xvbmUoKTtcbiAgICAgICAgaWYgKHguY29tcGFyZVRvKHkpIDwgMCkge1xuICAgICAgICAgICAgdmFyIHQgPSB4O1xuICAgICAgICAgICAgeCA9IHk7XG4gICAgICAgICAgICB5ID0gdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCk7XG4gICAgICAgIHZhciBnID0geS5nZXRMb3dlc3RTZXRCaXQoKTtcbiAgICAgICAgaWYgKGcgPCAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjayh4KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGcpIHtcbiAgICAgICAgICAgIGcgPSBpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnID4gMCkge1xuICAgICAgICAgICAgeC5yU2hpZnRUbyhnLCB4KTtcbiAgICAgICAgICAgIHkuclNoaWZ0VG8oZywgeSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV29ya2hvcnNlIG9mIHRoZSBhbGdvcml0aG0sIGdldHMgY2FsbGVkIDIwMCAtIDgwMCB0aW1lcyBwZXIgNTEyIGJpdCBrZXlnZW4uXG4gICAgICAgIHZhciBnY2RhMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgoaSA9IHguZ2V0TG93ZXN0U2V0Qml0KCkpID4gMCkge1xuICAgICAgICAgICAgICAgIHguclNoaWZ0VG8oaSwgeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKGkgPSB5LmdldExvd2VzdFNldEJpdCgpKSA+IDApIHtcbiAgICAgICAgICAgICAgICB5LnJTaGlmdFRvKGksIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHguY29tcGFyZVRvKHkpID49IDApIHtcbiAgICAgICAgICAgICAgICB4LnN1YlRvKHksIHgpO1xuICAgICAgICAgICAgICAgIHguclNoaWZ0VG8oMSwgeCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5LnN1YlRvKHgsIHkpO1xuICAgICAgICAgICAgICAgIHkuclNoaWZ0VG8oMSwgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoISh4LnNpZ251bSgpID4gMCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgeS5sU2hpZnRUbyhnLCB5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGNhbGxiYWNrKHkpOyB9LCAwKTsgLy8gZXNjYXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGdjZGExLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc2V0VGltZW91dChnY2RhMSwgMTApO1xuICAgIH07XG4gICAgLy8gKHByb3RlY3RlZCkgYWx0ZXJuYXRlIGNvbnN0cnVjdG9yXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZnJvbU51bWJlckFzeW5jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChcIm51bWJlclwiID09IHR5cGVvZiBiKSB7XG4gICAgICAgICAgICBpZiAoYSA8IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyb21JbnQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyb21OdW1iZXIoYSwgYyk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnRlc3RCaXQoYSAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYml0d2lzZVRvKEJpZ0ludGVnZXIuT05FLnNoaWZ0TGVmdChhIC0gMSksIG9wX29yLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFdmVuKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kQWRkT2Zmc2V0KDEsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgYm5wXzEgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBibnBmbjFfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgYm5wXzEuZEFkZE9mZnNldCgyLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJucF8xLmJpdExlbmd0aCgpID4gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm5wXzEuc3ViVG8oQmlnSW50ZWdlci5PTkUuc2hpZnRMZWZ0KGEgLSAxKSwgYm5wXzEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChibnBfMS5pc1Byb2JhYmxlUHJpbWUoYikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBjYWxsYmFjaygpOyB9LCAwKTsgLy8gZXNjYXBlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGJucGZuMV8xLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChibnBmbjFfMSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgeCA9IFtdO1xuICAgICAgICAgICAgdmFyIHQgPSBhICYgNztcbiAgICAgICAgICAgIHgubGVuZ3RoID0gKGEgPj4gMykgKyAxO1xuICAgICAgICAgICAgYi5uZXh0Qnl0ZXMoeCk7XG4gICAgICAgICAgICBpZiAodCA+IDApIHtcbiAgICAgICAgICAgICAgICB4WzBdICY9ICgoMSA8PCB0KSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgeFswXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZyb21TdHJpbmcoeCwgMjU2KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEJpZ0ludGVnZXI7XG59KCkpO1xuLy8jcmVnaW9uIFJFRFVDRVJTXG4vLyNyZWdpb24gTnVsbEV4cFxudmFyIE51bGxFeHAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTnVsbEV4cCgpIHtcbiAgICB9XG4gICAgLy8gTnVsbEV4cC5wcm90b3R5cGUuY29udmVydCA9IG5Ob3A7XG4gICAgTnVsbEV4cC5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH07XG4gICAgLy8gTnVsbEV4cC5wcm90b3R5cGUucmV2ZXJ0ID0gbk5vcDtcbiAgICBOdWxsRXhwLnByb3RvdHlwZS5yZXZlcnQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9O1xuICAgIC8vIE51bGxFeHAucHJvdG90eXBlLm11bFRvID0gbk11bFRvO1xuICAgIE51bGxFeHAucHJvdG90eXBlLm11bFRvID0gZnVuY3Rpb24gKHgsIHksIHIpIHtcbiAgICAgICAgeC5tdWx0aXBseVRvKHksIHIpO1xuICAgIH07XG4gICAgLy8gTnVsbEV4cC5wcm90b3R5cGUuc3FyVG8gPSBuU3FyVG87XG4gICAgTnVsbEV4cC5wcm90b3R5cGUuc3FyVG8gPSBmdW5jdGlvbiAoeCwgcikge1xuICAgICAgICB4LnNxdWFyZVRvKHIpO1xuICAgIH07XG4gICAgcmV0dXJuIE51bGxFeHA7XG59KCkpO1xuLy8gTW9kdWxhciByZWR1Y3Rpb24gdXNpbmcgXCJjbGFzc2ljXCIgYWxnb3JpdGhtXG52YXIgQ2xhc3NpYyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDbGFzc2ljKG0pIHtcbiAgICAgICAgdGhpcy5tID0gbTtcbiAgICB9XG4gICAgLy8gQ2xhc3NpYy5wcm90b3R5cGUuY29udmVydCA9IGNDb252ZXJ0O1xuICAgIENsYXNzaWMucHJvdG90eXBlLmNvbnZlcnQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICBpZiAoeC5zIDwgMCB8fCB4LmNvbXBhcmVUbyh0aGlzLm0pID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiB4Lm1vZCh0aGlzLm0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIENsYXNzaWMucHJvdG90eXBlLnJldmVydCA9IGNSZXZlcnQ7XG4gICAgQ2xhc3NpYy5wcm90b3R5cGUucmV2ZXJ0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgICAvLyBDbGFzc2ljLnByb3RvdHlwZS5yZWR1Y2UgPSBjUmVkdWNlO1xuICAgIENsYXNzaWMucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHguZGl2UmVtVG8odGhpcy5tLCBudWxsLCB4KTtcbiAgICB9O1xuICAgIC8vIENsYXNzaWMucHJvdG90eXBlLm11bFRvID0gY011bFRvO1xuICAgIENsYXNzaWMucHJvdG90eXBlLm11bFRvID0gZnVuY3Rpb24gKHgsIHksIHIpIHtcbiAgICAgICAgeC5tdWx0aXBseVRvKHksIHIpO1xuICAgICAgICB0aGlzLnJlZHVjZShyKTtcbiAgICB9O1xuICAgIC8vIENsYXNzaWMucHJvdG90eXBlLnNxclRvID0gY1NxclRvO1xuICAgIENsYXNzaWMucHJvdG90eXBlLnNxclRvID0gZnVuY3Rpb24gKHgsIHIpIHtcbiAgICAgICAgeC5zcXVhcmVUbyhyKTtcbiAgICAgICAgdGhpcy5yZWR1Y2Uocik7XG4gICAgfTtcbiAgICByZXR1cm4gQ2xhc3NpYztcbn0oKSk7XG4vLyNlbmRyZWdpb25cbi8vI3JlZ2lvbiBNb250Z29tZXJ5XG4vLyBNb250Z29tZXJ5IHJlZHVjdGlvblxudmFyIE1vbnRnb21lcnkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9udGdvbWVyeShtKSB7XG4gICAgICAgIHRoaXMubSA9IG07XG4gICAgICAgIHRoaXMubXAgPSBtLmludkRpZ2l0KCk7XG4gICAgICAgIHRoaXMubXBsID0gdGhpcy5tcCAmIDB4N2ZmZjtcbiAgICAgICAgdGhpcy5tcGggPSB0aGlzLm1wID4+IDE1O1xuICAgICAgICB0aGlzLnVtID0gKDEgPDwgKG0uREIgLSAxNSkpIC0gMTtcbiAgICAgICAgdGhpcy5tdDIgPSAyICogbS50O1xuICAgIH1cbiAgICAvLyBNb250Z29tZXJ5LnByb3RvdHlwZS5jb252ZXJ0ID0gbW9udENvbnZlcnQ7XG4gICAgLy8geFIgbW9kIG1cbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgeC5hYnMoKS5kbFNoaWZ0VG8odGhpcy5tLnQsIHIpO1xuICAgICAgICByLmRpdlJlbVRvKHRoaXMubSwgbnVsbCwgcik7XG4gICAgICAgIGlmICh4LnMgPCAwICYmIHIuY29tcGFyZVRvKEJpZ0ludGVnZXIuWkVSTykgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLm0uc3ViVG8ociwgcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBNb250Z29tZXJ5LnByb3RvdHlwZS5yZXZlcnQgPSBtb250UmV2ZXJ0O1xuICAgIC8vIHgvUiBtb2QgbVxuICAgIE1vbnRnb21lcnkucHJvdG90eXBlLnJldmVydCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHZhciByID0gbmJpKCk7XG4gICAgICAgIHguY29weVRvKHIpO1xuICAgICAgICB0aGlzLnJlZHVjZShyKTtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgfTtcbiAgICAvLyBNb250Z29tZXJ5LnByb3RvdHlwZS5yZWR1Y2UgPSBtb250UmVkdWNlO1xuICAgIC8vIHggPSB4L1IgbW9kIG0gKEhBQyAxNC4zMilcbiAgICBNb250Z29tZXJ5LnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB3aGlsZSAoeC50IDw9IHRoaXMubXQyKSB7XG4gICAgICAgICAgICAvLyBwYWQgeCBzbyBhbSBoYXMgZW5vdWdoIHJvb20gbGF0ZXJcbiAgICAgICAgICAgIHhbeC50KytdID0gMDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubS50OyArK2kpIHtcbiAgICAgICAgICAgIC8vIGZhc3RlciB3YXkgb2YgY2FsY3VsYXRpbmcgdTAgPSB4W2ldKm1wIG1vZCBEVlxuICAgICAgICAgICAgdmFyIGogPSB4W2ldICYgMHg3ZmZmO1xuICAgICAgICAgICAgdmFyIHUwID0gKGogKiB0aGlzLm1wbCArICgoKGogKiB0aGlzLm1waCArICh4W2ldID4+IDE1KSAqIHRoaXMubXBsKSAmIHRoaXMudW0pIDw8IDE1KSkgJiB4LkRNO1xuICAgICAgICAgICAgLy8gdXNlIGFtIHRvIGNvbWJpbmUgdGhlIG11bHRpcGx5LXNoaWZ0LWFkZCBpbnRvIG9uZSBjYWxsXG4gICAgICAgICAgICBqID0gaSArIHRoaXMubS50O1xuICAgICAgICAgICAgeFtqXSArPSB0aGlzLm0uYW0oMCwgdTAsIHgsIGksIDAsIHRoaXMubS50KTtcbiAgICAgICAgICAgIC8vIHByb3BhZ2F0ZSBjYXJyeVxuICAgICAgICAgICAgd2hpbGUgKHhbal0gPj0geC5EVikge1xuICAgICAgICAgICAgICAgIHhbal0gLT0geC5EVjtcbiAgICAgICAgICAgICAgICB4Wysral0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB4LmNsYW1wKCk7XG4gICAgICAgIHguZHJTaGlmdFRvKHRoaXMubS50LCB4KTtcbiAgICAgICAgaWYgKHguY29tcGFyZVRvKHRoaXMubSkgPj0gMCkge1xuICAgICAgICAgICAgeC5zdWJUbyh0aGlzLm0sIHgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBNb250Z29tZXJ5LnByb3RvdHlwZS5tdWxUbyA9IG1vbnRNdWxUbztcbiAgICAvLyByID0gXCJ4eS9SIG1vZCBtXCI7IHgseSAhPSByXG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUubXVsVG8gPSBmdW5jdGlvbiAoeCwgeSwgcikge1xuICAgICAgICB4Lm11bHRpcGx5VG8oeSwgcik7XG4gICAgICAgIHRoaXMucmVkdWNlKHIpO1xuICAgIH07XG4gICAgLy8gTW9udGdvbWVyeS5wcm90b3R5cGUuc3FyVG8gPSBtb250U3FyVG87XG4gICAgLy8gciA9IFwieF4yL1IgbW9kIG1cIjsgeCAhPSByXG4gICAgTW9udGdvbWVyeS5wcm90b3R5cGUuc3FyVG8gPSBmdW5jdGlvbiAoeCwgcikge1xuICAgICAgICB4LnNxdWFyZVRvKHIpO1xuICAgICAgICB0aGlzLnJlZHVjZShyKTtcbiAgICB9O1xuICAgIHJldHVybiBNb250Z29tZXJ5O1xufSgpKTtcbi8vI2VuZHJlZ2lvbiBNb250Z29tZXJ5XG4vLyNyZWdpb24gQmFycmV0dFxuLy8gQmFycmV0dCBtb2R1bGFyIHJlZHVjdGlvblxudmFyIEJhcnJldHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmFycmV0dChtKSB7XG4gICAgICAgIHRoaXMubSA9IG07XG4gICAgICAgIC8vIHNldHVwIEJhcnJldHRcbiAgICAgICAgdGhpcy5yMiA9IG5iaSgpO1xuICAgICAgICB0aGlzLnEzID0gbmJpKCk7XG4gICAgICAgIEJpZ0ludGVnZXIuT05FLmRsU2hpZnRUbygyICogbS50LCB0aGlzLnIyKTtcbiAgICAgICAgdGhpcy5tdSA9IHRoaXMucjIuZGl2aWRlKG0pO1xuICAgIH1cbiAgICAvLyBCYXJyZXR0LnByb3RvdHlwZS5jb252ZXJ0ID0gYmFycmV0dENvbnZlcnQ7XG4gICAgQmFycmV0dC5wcm90b3R5cGUuY29udmVydCA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIGlmICh4LnMgPCAwIHx8IHgudCA+IDIgKiB0aGlzLm0udCkge1xuICAgICAgICAgICAgcmV0dXJuIHgubW9kKHRoaXMubSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoeC5jb21wYXJlVG8odGhpcy5tKSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHIgPSBuYmkoKTtcbiAgICAgICAgICAgIHguY29weVRvKHIpO1xuICAgICAgICAgICAgdGhpcy5yZWR1Y2Uocik7XG4gICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gQmFycmV0dC5wcm90b3R5cGUucmV2ZXJ0ID0gYmFycmV0dFJldmVydDtcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZXZlcnQgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9O1xuICAgIC8vIEJhcnJldHQucHJvdG90eXBlLnJlZHVjZSA9IGJhcnJldHRSZWR1Y2U7XG4gICAgLy8geCA9IHggbW9kIG0gKEhBQyAxNC40MilcbiAgICBCYXJyZXR0LnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB4LmRyU2hpZnRUbyh0aGlzLm0udCAtIDEsIHRoaXMucjIpO1xuICAgICAgICBpZiAoeC50ID4gdGhpcy5tLnQgKyAxKSB7XG4gICAgICAgICAgICB4LnQgPSB0aGlzLm0udCArIDE7XG4gICAgICAgICAgICB4LmNsYW1wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tdS5tdWx0aXBseVVwcGVyVG8odGhpcy5yMiwgdGhpcy5tLnQgKyAxLCB0aGlzLnEzKTtcbiAgICAgICAgdGhpcy5tLm11bHRpcGx5TG93ZXJUbyh0aGlzLnEzLCB0aGlzLm0udCArIDEsIHRoaXMucjIpO1xuICAgICAgICB3aGlsZSAoeC5jb21wYXJlVG8odGhpcy5yMikgPCAwKSB7XG4gICAgICAgICAgICB4LmRBZGRPZmZzZXQoMSwgdGhpcy5tLnQgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICB4LnN1YlRvKHRoaXMucjIsIHgpO1xuICAgICAgICB3aGlsZSAoeC5jb21wYXJlVG8odGhpcy5tKSA+PSAwKSB7XG4gICAgICAgICAgICB4LnN1YlRvKHRoaXMubSwgeCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIEJhcnJldHQucHJvdG90eXBlLm11bFRvID0gYmFycmV0dE11bFRvO1xuICAgIC8vIHIgPSB4KnkgbW9kIG07IHgseSAhPSByXG4gICAgQmFycmV0dC5wcm90b3R5cGUubXVsVG8gPSBmdW5jdGlvbiAoeCwgeSwgcikge1xuICAgICAgICB4Lm11bHRpcGx5VG8oeSwgcik7XG4gICAgICAgIHRoaXMucmVkdWNlKHIpO1xuICAgIH07XG4gICAgLy8gQmFycmV0dC5wcm90b3R5cGUuc3FyVG8gPSBiYXJyZXR0U3FyVG87XG4gICAgLy8gciA9IHheMiBtb2QgbTsgeCAhPSByXG4gICAgQmFycmV0dC5wcm90b3R5cGUuc3FyVG8gPSBmdW5jdGlvbiAoeCwgcikge1xuICAgICAgICB4LnNxdWFyZVRvKHIpO1xuICAgICAgICB0aGlzLnJlZHVjZShyKTtcbiAgICB9O1xuICAgIHJldHVybiBCYXJyZXR0O1xufSgpKTtcbi8vI2VuZHJlZ2lvblxuLy8jZW5kcmVnaW9uIFJFRFVDRVJTXG4vLyByZXR1cm4gbmV3LCB1bnNldCBCaWdJbnRlZ2VyXG5mdW5jdGlvbiBuYmkoKSB7IHJldHVybiBuZXcgQmlnSW50ZWdlcihudWxsKTsgfVxuZnVuY3Rpb24gcGFyc2VCaWdJbnQoc3RyLCByKSB7XG4gICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHN0ciwgcik7XG59XG4vLyBhbTogQ29tcHV0ZSB3X2ogKz0gKHgqdGhpc19pKSwgcHJvcGFnYXRlIGNhcnJpZXMsXG4vLyBjIGlzIGluaXRpYWwgY2FycnksIHJldHVybnMgZmluYWwgY2FycnkuXG4vLyBjIDwgMypkdmFsdWUsIHggPCAyKmR2YWx1ZSwgdGhpc19pIDwgZHZhbHVlXG4vLyBXZSBuZWVkIHRvIHNlbGVjdCB0aGUgZmFzdGVzdCBvbmUgdGhhdCB3b3JrcyBpbiB0aGlzIGVudmlyb25tZW50LlxuLy8gYW0xOiB1c2UgYSBzaW5nbGUgbXVsdCBhbmQgZGl2aWRlIHRvIGdldCB0aGUgaGlnaCBiaXRzLFxuLy8gbWF4IGRpZ2l0IGJpdHMgc2hvdWxkIGJlIDI2IGJlY2F1c2Vcbi8vIG1heCBpbnRlcm5hbCB2YWx1ZSA9IDIqZHZhbHVlXjItMipkdmFsdWUgKDwgMl41MylcbmZ1bmN0aW9uIGFtMShpLCB4LCB3LCBqLCBjLCBuKSB7XG4gICAgd2hpbGUgKC0tbiA+PSAwKSB7XG4gICAgICAgIHZhciB2ID0geCAqIHRoaXNbaSsrXSArIHdbal0gKyBjO1xuICAgICAgICBjID0gTWF0aC5mbG9vcih2IC8gMHg0MDAwMDAwKTtcbiAgICAgICAgd1tqKytdID0gdiAmIDB4M2ZmZmZmZjtcbiAgICB9XG4gICAgcmV0dXJuIGM7XG59XG4vLyBhbTIgYXZvaWRzIGEgYmlnIG11bHQtYW5kLWV4dHJhY3QgY29tcGxldGVseS5cbi8vIE1heCBkaWdpdCBiaXRzIHNob3VsZCBiZSA8PSAzMCBiZWNhdXNlIHdlIGRvIGJpdHdpc2Ugb3BzXG4vLyBvbiB2YWx1ZXMgdXAgdG8gMipoZHZhbHVlXjItaGR2YWx1ZS0xICg8IDJeMzEpXG5mdW5jdGlvbiBhbTIoaSwgeCwgdywgaiwgYywgbikge1xuICAgIHZhciB4bCA9IHggJiAweDdmZmY7XG4gICAgdmFyIHhoID0geCA+PiAxNTtcbiAgICB3aGlsZSAoLS1uID49IDApIHtcbiAgICAgICAgdmFyIGwgPSB0aGlzW2ldICYgMHg3ZmZmO1xuICAgICAgICB2YXIgaCA9IHRoaXNbaSsrXSA+PiAxNTtcbiAgICAgICAgdmFyIG0gPSB4aCAqIGwgKyBoICogeGw7XG4gICAgICAgIGwgPSB4bCAqIGwgKyAoKG0gJiAweDdmZmYpIDw8IDE1KSArIHdbal0gKyAoYyAmIDB4M2ZmZmZmZmYpO1xuICAgICAgICBjID0gKGwgPj4+IDMwKSArIChtID4+PiAxNSkgKyB4aCAqIGggKyAoYyA+Pj4gMzApO1xuICAgICAgICB3W2orK10gPSBsICYgMHgzZmZmZmZmZjtcbiAgICB9XG4gICAgcmV0dXJuIGM7XG59XG4vLyBBbHRlcm5hdGVseSwgc2V0IG1heCBkaWdpdCBiaXRzIHRvIDI4IHNpbmNlIHNvbWVcbi8vIGJyb3dzZXJzIHNsb3cgZG93biB3aGVuIGRlYWxpbmcgd2l0aCAzMi1iaXQgbnVtYmVycy5cbmZ1bmN0aW9uIGFtMyhpLCB4LCB3LCBqLCBjLCBuKSB7XG4gICAgdmFyIHhsID0geCAmIDB4M2ZmZjtcbiAgICB2YXIgeGggPSB4ID4+IDE0O1xuICAgIHdoaWxlICgtLW4gPj0gMCkge1xuICAgICAgICB2YXIgbCA9IHRoaXNbaV0gJiAweDNmZmY7XG4gICAgICAgIHZhciBoID0gdGhpc1tpKytdID4+IDE0O1xuICAgICAgICB2YXIgbSA9IHhoICogbCArIGggKiB4bDtcbiAgICAgICAgbCA9IHhsICogbCArICgobSAmIDB4M2ZmZikgPDwgMTQpICsgd1tqXSArIGM7XG4gICAgICAgIGMgPSAobCA+PiAyOCkgKyAobSA+PiAxNCkgKyB4aCAqIGg7XG4gICAgICAgIHdbaisrXSA9IGwgJiAweGZmZmZmZmY7XG4gICAgfVxuICAgIHJldHVybiBjO1xufVxuaWYgKGpfbG0gJiYgKG5hdmlnYXRvci5hcHBOYW1lID09IFwiTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyXCIpKSB7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTI7XG4gICAgZGJpdHMgPSAzMDtcbn1cbmVsc2UgaWYgKGpfbG0gJiYgKG5hdmlnYXRvci5hcHBOYW1lICE9IFwiTmV0c2NhcGVcIikpIHtcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbSA9IGFtMTtcbiAgICBkYml0cyA9IDI2O1xufVxuZWxzZSB7XG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW0gPSBhbTM7XG4gICAgZGJpdHMgPSAyODtcbn1cbkJpZ0ludGVnZXIucHJvdG90eXBlLkRCID0gZGJpdHM7XG5CaWdJbnRlZ2VyLnByb3RvdHlwZS5ETSA9ICgoMSA8PCBkYml0cykgLSAxKTtcbkJpZ0ludGVnZXIucHJvdG90eXBlLkRWID0gKDEgPDwgZGJpdHMpO1xudmFyIEJJX0ZQID0gNTI7XG5CaWdJbnRlZ2VyLnByb3RvdHlwZS5GViA9IE1hdGgucG93KDIsIEJJX0ZQKTtcbkJpZ0ludGVnZXIucHJvdG90eXBlLkYxID0gQklfRlAgLSBkYml0cztcbkJpZ0ludGVnZXIucHJvdG90eXBlLkYyID0gMiAqIGRiaXRzIC0gQklfRlA7XG4vLyBEaWdpdCBjb252ZXJzaW9uc1xudmFyIEJJX1JDID0gW107XG52YXIgcnI7XG52YXIgdnY7XG5yciA9IFwiMFwiLmNoYXJDb2RlQXQoMCk7XG5mb3IgKHZ2ID0gMDsgdnYgPD0gOTsgKyt2dikge1xuICAgIEJJX1JDW3JyKytdID0gdnY7XG59XG5yciA9IFwiYVwiLmNoYXJDb2RlQXQoMCk7XG5mb3IgKHZ2ID0gMTA7IHZ2IDwgMzY7ICsrdnYpIHtcbiAgICBCSV9SQ1tycisrXSA9IHZ2O1xufVxucnIgPSBcIkFcIi5jaGFyQ29kZUF0KDApO1xuZm9yICh2diA9IDEwOyB2diA8IDM2OyArK3Z2KSB7XG4gICAgQklfUkNbcnIrK10gPSB2djtcbn1cbmZ1bmN0aW9uIGludEF0KHMsIGkpIHtcbiAgICB2YXIgYyA9IEJJX1JDW3MuY2hhckNvZGVBdChpKV07XG4gICAgcmV0dXJuIChjID09IG51bGwpID8gLTEgOiBjO1xufVxuLy8gcmV0dXJuIGJpZ2ludCBpbml0aWFsaXplZCB0byB2YWx1ZVxuZnVuY3Rpb24gbmJ2KGkpIHtcbiAgICB2YXIgciA9IG5iaSgpO1xuICAgIHIuZnJvbUludChpKTtcbiAgICByZXR1cm4gcjtcbn1cbi8vIHJldHVybnMgYml0IGxlbmd0aCBvZiB0aGUgaW50ZWdlciB4XG5mdW5jdGlvbiBuYml0cyh4KSB7XG4gICAgdmFyIHIgPSAxO1xuICAgIHZhciB0O1xuICAgIGlmICgodCA9IHggPj4+IDE2KSAhPSAwKSB7XG4gICAgICAgIHggPSB0O1xuICAgICAgICByICs9IDE2O1xuICAgIH1cbiAgICBpZiAoKHQgPSB4ID4+IDgpICE9IDApIHtcbiAgICAgICAgeCA9IHQ7XG4gICAgICAgIHIgKz0gODtcbiAgICB9XG4gICAgaWYgKCh0ID0geCA+PiA0KSAhPSAwKSB7XG4gICAgICAgIHggPSB0O1xuICAgICAgICByICs9IDQ7XG4gICAgfVxuICAgIGlmICgodCA9IHggPj4gMikgIT0gMCkge1xuICAgICAgICB4ID0gdDtcbiAgICAgICAgciArPSAyO1xuICAgIH1cbiAgICBpZiAoKHQgPSB4ID4+IDEpICE9IDApIHtcbiAgICAgICAgeCA9IHQ7XG4gICAgICAgIHIgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHI7XG59XG4vLyBcImNvbnN0YW50c1wiXG5CaWdJbnRlZ2VyLlpFUk8gPSBuYnYoMCk7XG5CaWdJbnRlZ2VyLk9ORSA9IG5idigxKTtcblxuLy8gcHJuZzQuanMgLSB1c2VzIEFyY2ZvdXIgYXMgYSBQUk5HXG52YXIgQXJjZm91ciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBcmNmb3VyKCkge1xuICAgICAgICB0aGlzLmkgPSAwO1xuICAgICAgICB0aGlzLmogPSAwO1xuICAgICAgICB0aGlzLlMgPSBbXTtcbiAgICB9XG4gICAgLy8gQXJjZm91ci5wcm90b3R5cGUuaW5pdCA9IEFSQzRpbml0O1xuICAgIC8vIEluaXRpYWxpemUgYXJjZm91ciBjb250ZXh0IGZyb20ga2V5LCBhbiBhcnJheSBvZiBpbnRzLCBlYWNoIGZyb20gWzAuLjI1NV1cbiAgICBBcmNmb3VyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgdmFyIGo7XG4gICAgICAgIHZhciB0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuU1tpXSA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgaiA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICAgICAgICAgICAgaiA9IChqICsgdGhpcy5TW2ldICsga2V5W2kgJSBrZXkubGVuZ3RoXSkgJiAyNTU7XG4gICAgICAgICAgICB0ID0gdGhpcy5TW2ldO1xuICAgICAgICAgICAgdGhpcy5TW2ldID0gdGhpcy5TW2pdO1xuICAgICAgICAgICAgdGhpcy5TW2pdID0gdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmkgPSAwO1xuICAgICAgICB0aGlzLmogPSAwO1xuICAgIH07XG4gICAgLy8gQXJjZm91ci5wcm90b3R5cGUubmV4dCA9IEFSQzRuZXh0O1xuICAgIEFyY2ZvdXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0O1xuICAgICAgICB0aGlzLmkgPSAodGhpcy5pICsgMSkgJiAyNTU7XG4gICAgICAgIHRoaXMuaiA9ICh0aGlzLmogKyB0aGlzLlNbdGhpcy5pXSkgJiAyNTU7XG4gICAgICAgIHQgPSB0aGlzLlNbdGhpcy5pXTtcbiAgICAgICAgdGhpcy5TW3RoaXMuaV0gPSB0aGlzLlNbdGhpcy5qXTtcbiAgICAgICAgdGhpcy5TW3RoaXMual0gPSB0O1xuICAgICAgICByZXR1cm4gdGhpcy5TWyh0ICsgdGhpcy5TW3RoaXMuaV0pICYgMjU1XTtcbiAgICB9O1xuICAgIHJldHVybiBBcmNmb3VyO1xufSgpKTtcbi8vIFBsdWcgaW4geW91ciBSTkcgY29uc3RydWN0b3IgaGVyZVxuZnVuY3Rpb24gcHJuZ19uZXdzdGF0ZSgpIHtcbiAgICByZXR1cm4gbmV3IEFyY2ZvdXIoKTtcbn1cbi8vIFBvb2wgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCBhbmQgZ3JlYXRlciB0aGFuIDMyLlxuLy8gQW4gYXJyYXkgb2YgYnl0ZXMgdGhlIHNpemUgb2YgdGhlIHBvb2wgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpXG52YXIgcm5nX3BzaXplID0gMjU2O1xuXG4vLyBSYW5kb20gbnVtYmVyIGdlbmVyYXRvciAtIHJlcXVpcmVzIGEgUFJORyBiYWNrZW5kLCBlLmcuIHBybmc0LmpzXG52YXIgcm5nX3N0YXRlO1xudmFyIHJuZ19wb29sID0gbnVsbDtcbnZhciBybmdfcHB0cjtcbi8vIEluaXRpYWxpemUgdGhlIHBvb2wgd2l0aCBqdW5rIGlmIG5lZWRlZC5cbmlmIChybmdfcG9vbCA9PSBudWxsKSB7XG4gICAgcm5nX3Bvb2wgPSBbXTtcbiAgICBybmdfcHB0ciA9IDA7XG4gICAgdmFyIHQgPSB2b2lkIDA7XG4gICAgaWYgKHdpbmRvdy5jcnlwdG8gJiYgd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgLy8gRXh0cmFjdCBlbnRyb3B5ICgyMDQ4IGJpdHMpIGZyb20gUk5HIGlmIGF2YWlsYWJsZVxuICAgICAgICB2YXIgeiA9IG5ldyBVaW50MzJBcnJheSgyNTYpO1xuICAgICAgICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyh6KTtcbiAgICAgICAgZm9yICh0ID0gMDsgdCA8IHoubGVuZ3RoOyArK3QpIHtcbiAgICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyKytdID0gelt0XSAmIDI1NTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBVc2UgbW91c2UgZXZlbnRzIGZvciBlbnRyb3B5LCBpZiB3ZSBkbyBub3QgaGF2ZSBlbm91Z2ggZW50cm9weSBieSB0aGUgdGltZVxuICAgIC8vIHdlIG5lZWQgaXQsIGVudHJvcHkgd2lsbCBiZSBnZW5lcmF0ZWQgYnkgTWF0aC5yYW5kb20uXG4gICAgdmFyIG9uTW91c2VNb3ZlTGlzdGVuZXJfMSA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICB0aGlzLmNvdW50ID0gdGhpcy5jb3VudCB8fCAwO1xuICAgICAgICBpZiAodGhpcy5jb3VudCA+PSAyNTYgfHwgcm5nX3BwdHIgPj0gcm5nX3BzaXplKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZUxpc3RlbmVyXzEsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHdpbmRvdy5kZXRhY2hFdmVudCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kZXRhY2hFdmVudChcIm9ubW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlTGlzdGVuZXJfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBtb3VzZUNvb3JkaW5hdGVzID0gZXYueCArIGV2Lnk7XG4gICAgICAgICAgICBybmdfcG9vbFtybmdfcHB0cisrXSA9IG1vdXNlQ29vcmRpbmF0ZXMgJiAyNTU7XG4gICAgICAgICAgICB0aGlzLmNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFNvbWV0aW1lcyBGaXJlZm94IHdpbGwgZGVueSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBldmVudCBwcm9wZXJ0aWVzIGZvciBzb21lIHJlYXNvbi4gSWdub3JlLlxuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmVMaXN0ZW5lcl8xLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvdy5hdHRhY2hFdmVudCkge1xuICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoXCJvbm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZUxpc3RlbmVyXzEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJuZ19nZXRfYnl0ZSgpIHtcbiAgICBpZiAocm5nX3N0YXRlID09IG51bGwpIHtcbiAgICAgICAgcm5nX3N0YXRlID0gcHJuZ19uZXdzdGF0ZSgpO1xuICAgICAgICAvLyBBdCB0aGlzIHBvaW50LCB3ZSBtYXkgbm90IGhhdmUgY29sbGVjdGVkIGVub3VnaCBlbnRyb3B5LiAgSWYgbm90LCBmYWxsIGJhY2sgdG8gTWF0aC5yYW5kb21cbiAgICAgICAgd2hpbGUgKHJuZ19wcHRyIDwgcm5nX3BzaXplKSB7XG4gICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5mbG9vcig2NTUzNiAqIE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgcm5nX3Bvb2xbcm5nX3BwdHIrK10gPSByYW5kb20gJiAyNTU7XG4gICAgICAgIH1cbiAgICAgICAgcm5nX3N0YXRlLmluaXQocm5nX3Bvb2wpO1xuICAgICAgICBmb3IgKHJuZ19wcHRyID0gMDsgcm5nX3BwdHIgPCBybmdfcG9vbC5sZW5ndGg7ICsrcm5nX3BwdHIpIHtcbiAgICAgICAgICAgIHJuZ19wb29sW3JuZ19wcHRyXSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcm5nX3BwdHIgPSAwO1xuICAgIH1cbiAgICAvLyBUT0RPOiBhbGxvdyByZXNlZWRpbmcgYWZ0ZXIgZmlyc3QgcmVxdWVzdFxuICAgIHJldHVybiBybmdfc3RhdGUubmV4dCgpO1xufVxudmFyIFNlY3VyZVJhbmRvbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWN1cmVSYW5kb20oKSB7XG4gICAgfVxuICAgIFNlY3VyZVJhbmRvbS5wcm90b3R5cGUubmV4dEJ5dGVzID0gZnVuY3Rpb24gKGJhKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGJhW2ldID0gcm5nX2dldF9ieXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTZWN1cmVSYW5kb207XG59KCkpO1xuXG4vLyBEZXBlbmRzIG9uIGpzYm4uanMgYW5kIHJuZy5qc1xuLy8gZnVuY3Rpb24gbGluZWJyayhzLG4pIHtcbi8vICAgdmFyIHJldCA9IFwiXCI7XG4vLyAgIHZhciBpID0gMDtcbi8vICAgd2hpbGUoaSArIG4gPCBzLmxlbmd0aCkge1xuLy8gICAgIHJldCArPSBzLnN1YnN0cmluZyhpLGkrbikgKyBcIlxcblwiO1xuLy8gICAgIGkgKz0gbjtcbi8vICAgfVxuLy8gICByZXR1cm4gcmV0ICsgcy5zdWJzdHJpbmcoaSxzLmxlbmd0aCk7XG4vLyB9XG4vLyBmdW5jdGlvbiBieXRlMkhleChiKSB7XG4vLyAgIGlmKGIgPCAweDEwKVxuLy8gICAgIHJldHVybiBcIjBcIiArIGIudG9TdHJpbmcoMTYpO1xuLy8gICBlbHNlXG4vLyAgICAgcmV0dXJuIGIudG9TdHJpbmcoMTYpO1xuLy8gfVxuLy8gUEtDUyMxICh0eXBlIDIsIHJhbmRvbSkgcGFkIGlucHV0IHN0cmluZyBzIHRvIG4gYnl0ZXMsIGFuZCByZXR1cm4gYSBiaWdpbnRcbmZ1bmN0aW9uIHBrY3MxcGFkMihzLCBuKSB7XG4gICAgaWYgKG4gPCBzLmxlbmd0aCArIDExKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNZXNzYWdlIHRvbyBsb25nIGZvciBSU0FcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgYmEgPSBbXTtcbiAgICB2YXIgaSA9IHMubGVuZ3RoIC0gMTtcbiAgICB3aGlsZSAoaSA+PSAwICYmIG4gPiAwKSB7XG4gICAgICAgIHZhciBjID0gcy5jaGFyQ29kZUF0KGktLSk7XG4gICAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgICAgICBiYVstLW5dID0gYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoYyA+IDEyNykgJiYgKGMgPCAyMDQ4KSkge1xuICAgICAgICAgICAgYmFbLS1uXSA9IChjICYgNjMpIHwgMTI4O1xuICAgICAgICAgICAgYmFbLS1uXSA9IChjID4+IDYpIHwgMTkyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmFbLS1uXSA9IChjICYgNjMpIHwgMTI4O1xuICAgICAgICAgICAgYmFbLS1uXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgICAgICAgIGJhWy0tbl0gPSAoYyA+PiAxMikgfCAyMjQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmFbLS1uXSA9IDA7XG4gICAgdmFyIHJuZyA9IG5ldyBTZWN1cmVSYW5kb20oKTtcbiAgICB2YXIgeCA9IFtdO1xuICAgIHdoaWxlIChuID4gMikge1xuICAgICAgICB4WzBdID0gMDtcbiAgICAgICAgd2hpbGUgKHhbMF0gPT0gMCkge1xuICAgICAgICAgICAgcm5nLm5leHRCeXRlcyh4KTtcbiAgICAgICAgfVxuICAgICAgICBiYVstLW5dID0geFswXTtcbiAgICB9XG4gICAgYmFbLS1uXSA9IDI7XG4gICAgYmFbLS1uXSA9IDA7XG4gICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKGJhKTtcbn1cbi8vIFwiZW1wdHlcIiBSU0Ega2V5IGNvbnN0cnVjdG9yXG52YXIgUlNBS2V5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJTQUtleSgpIHtcbiAgICAgICAgdGhpcy5uID0gbnVsbDtcbiAgICAgICAgdGhpcy5lID0gMDtcbiAgICAgICAgdGhpcy5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5wID0gbnVsbDtcbiAgICAgICAgdGhpcy5xID0gbnVsbDtcbiAgICAgICAgdGhpcy5kbXAxID0gbnVsbDtcbiAgICAgICAgdGhpcy5kbXExID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb2VmZiA9IG51bGw7XG4gICAgfVxuICAgIC8vI3JlZ2lvbiBQUk9URUNURURcbiAgICAvLyBwcm90ZWN0ZWRcbiAgICAvLyBSU0FLZXkucHJvdG90eXBlLmRvUHVibGljID0gUlNBRG9QdWJsaWM7XG4gICAgLy8gUGVyZm9ybSByYXcgcHVibGljIG9wZXJhdGlvbiBvbiBcInhcIjogcmV0dXJuIHheZSAobW9kIG4pXG4gICAgUlNBS2V5LnByb3RvdHlwZS5kb1B1YmxpYyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4Lm1vZFBvd0ludCh0aGlzLmUsIHRoaXMubik7XG4gICAgfTtcbiAgICAvLyBSU0FLZXkucHJvdG90eXBlLmRvUHJpdmF0ZSA9IFJTQURvUHJpdmF0ZTtcbiAgICAvLyBQZXJmb3JtIHJhdyBwcml2YXRlIG9wZXJhdGlvbiBvbiBcInhcIjogcmV0dXJuIHheZCAobW9kIG4pXG4gICAgUlNBS2V5LnByb3RvdHlwZS5kb1ByaXZhdGUgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICBpZiAodGhpcy5wID09IG51bGwgfHwgdGhpcy5xID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB4Lm1vZFBvdyh0aGlzLmQsIHRoaXMubik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzogcmUtY2FsY3VsYXRlIGFueSBtaXNzaW5nIENSVCBwYXJhbXNcbiAgICAgICAgdmFyIHhwID0geC5tb2QodGhpcy5wKS5tb2RQb3codGhpcy5kbXAxLCB0aGlzLnApO1xuICAgICAgICB2YXIgeHEgPSB4Lm1vZCh0aGlzLnEpLm1vZFBvdyh0aGlzLmRtcTEsIHRoaXMucSk7XG4gICAgICAgIHdoaWxlICh4cC5jb21wYXJlVG8oeHEpIDwgMCkge1xuICAgICAgICAgICAgeHAgPSB4cC5hZGQodGhpcy5wKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geHAuc3VidHJhY3QoeHEpLm11bHRpcGx5KHRoaXMuY29lZmYpLm1vZCh0aGlzLnApLm11bHRpcGx5KHRoaXMucSkuYWRkKHhxKTtcbiAgICB9O1xuICAgIC8vI2VuZHJlZ2lvbiBQUk9URUNURURcbiAgICAvLyNyZWdpb24gUFVCTElDXG4gICAgLy8gUlNBS2V5LnByb3RvdHlwZS5zZXRQdWJsaWMgPSBSU0FTZXRQdWJsaWM7XG4gICAgLy8gU2V0IHRoZSBwdWJsaWMga2V5IGZpZWxkcyBOIGFuZCBlIGZyb20gaGV4IHN0cmluZ3NcbiAgICBSU0FLZXkucHJvdG90eXBlLnNldFB1YmxpYyA9IGZ1bmN0aW9uIChOLCBFKSB7XG4gICAgICAgIGlmIChOICE9IG51bGwgJiYgRSAhPSBudWxsICYmIE4ubGVuZ3RoID4gMCAmJiBFLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubiA9IHBhcnNlQmlnSW50KE4sIDE2KTtcbiAgICAgICAgICAgIHRoaXMuZSA9IHBhcnNlSW50KEUsIDE2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIFJTQSBwdWJsaWMga2V5XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBSU0FLZXkucHJvdG90eXBlLmVuY3J5cHQgPSBSU0FFbmNyeXB0O1xuICAgIC8vIFJldHVybiB0aGUgUEtDUyMxIFJTQSBlbmNyeXB0aW9uIG9mIFwidGV4dFwiIGFzIGFuIGV2ZW4tbGVuZ3RoIGhleCBzdHJpbmdcbiAgICBSU0FLZXkucHJvdG90eXBlLmVuY3J5cHQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICB2YXIgbSA9IHBrY3MxcGFkMih0ZXh0LCAodGhpcy5uLmJpdExlbmd0aCgpICsgNykgPj4gMyk7XG4gICAgICAgIGlmIChtID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjID0gdGhpcy5kb1B1YmxpYyhtKTtcbiAgICAgICAgaWYgKGMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGggPSBjLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKChoLmxlbmd0aCAmIDEpID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiMFwiICsgaDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gUlNBS2V5LnByb3RvdHlwZS5zZXRQcml2YXRlID0gUlNBU2V0UHJpdmF0ZTtcbiAgICAvLyBTZXQgdGhlIHByaXZhdGUga2V5IGZpZWxkcyBOLCBlLCBhbmQgZCBmcm9tIGhleCBzdHJpbmdzXG4gICAgUlNBS2V5LnByb3RvdHlwZS5zZXRQcml2YXRlID0gZnVuY3Rpb24gKE4sIEUsIEQpIHtcbiAgICAgICAgaWYgKE4gIT0gbnVsbCAmJiBFICE9IG51bGwgJiYgTi5sZW5ndGggPiAwICYmIEUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5uID0gcGFyc2VCaWdJbnQoTiwgMTYpO1xuICAgICAgICAgICAgdGhpcy5lID0gcGFyc2VJbnQoRSwgMTYpO1xuICAgICAgICAgICAgdGhpcy5kID0gcGFyc2VCaWdJbnQoRCwgMTYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgUlNBIHByaXZhdGUga2V5XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBSU0FLZXkucHJvdG90eXBlLnNldFByaXZhdGVFeCA9IFJTQVNldFByaXZhdGVFeDtcbiAgICAvLyBTZXQgdGhlIHByaXZhdGUga2V5IGZpZWxkcyBOLCBlLCBkIGFuZCBDUlQgcGFyYW1zIGZyb20gaGV4IHN0cmluZ3NcbiAgICBSU0FLZXkucHJvdG90eXBlLnNldFByaXZhdGVFeCA9IGZ1bmN0aW9uIChOLCBFLCBELCBQLCBRLCBEUCwgRFEsIEMpIHtcbiAgICAgICAgaWYgKE4gIT0gbnVsbCAmJiBFICE9IG51bGwgJiYgTi5sZW5ndGggPiAwICYmIEUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5uID0gcGFyc2VCaWdJbnQoTiwgMTYpO1xuICAgICAgICAgICAgdGhpcy5lID0gcGFyc2VJbnQoRSwgMTYpO1xuICAgICAgICAgICAgdGhpcy5kID0gcGFyc2VCaWdJbnQoRCwgMTYpO1xuICAgICAgICAgICAgdGhpcy5wID0gcGFyc2VCaWdJbnQoUCwgMTYpO1xuICAgICAgICAgICAgdGhpcy5xID0gcGFyc2VCaWdJbnQoUSwgMTYpO1xuICAgICAgICAgICAgdGhpcy5kbXAxID0gcGFyc2VCaWdJbnQoRFAsIDE2KTtcbiAgICAgICAgICAgIHRoaXMuZG1xMSA9IHBhcnNlQmlnSW50KERRLCAxNik7XG4gICAgICAgICAgICB0aGlzLmNvZWZmID0gcGFyc2VCaWdJbnQoQywgMTYpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgUlNBIHByaXZhdGUga2V5XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBSU0FLZXkucHJvdG90eXBlLmdlbmVyYXRlID0gUlNBR2VuZXJhdGU7XG4gICAgLy8gR2VuZXJhdGUgYSBuZXcgcmFuZG9tIHByaXZhdGUga2V5IEIgYml0cyBsb25nLCB1c2luZyBwdWJsaWMgZXhwdCBFXG4gICAgUlNBS2V5LnByb3RvdHlwZS5nZW5lcmF0ZSA9IGZ1bmN0aW9uIChCLCBFKSB7XG4gICAgICAgIHZhciBybmcgPSBuZXcgU2VjdXJlUmFuZG9tKCk7XG4gICAgICAgIHZhciBxcyA9IEIgPj4gMTtcbiAgICAgICAgdGhpcy5lID0gcGFyc2VJbnQoRSwgMTYpO1xuICAgICAgICB2YXIgZWUgPSBuZXcgQmlnSW50ZWdlcihFLCAxNik7XG4gICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgIGZvciAoOzspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnAgPSBuZXcgQmlnSW50ZWdlcihCIC0gcXMsIDEsIHJuZyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucC5zdWJ0cmFjdChCaWdJbnRlZ2VyLk9ORSkuZ2NkKGVlKS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpID09IDAgJiYgdGhpcy5wLmlzUHJvYmFibGVQcmltZSgxMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICg7Oykge1xuICAgICAgICAgICAgICAgIHRoaXMucSA9IG5ldyBCaWdJbnRlZ2VyKHFzLCAxLCBybmcpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnEuc3VidHJhY3QoQmlnSW50ZWdlci5PTkUpLmdjZChlZSkuY29tcGFyZVRvKEJpZ0ludGVnZXIuT05FKSA9PSAwICYmIHRoaXMucS5pc1Byb2JhYmxlUHJpbWUoMTApKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnAuY29tcGFyZVRvKHRoaXMucSkgPD0gMCkge1xuICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5wO1xuICAgICAgICAgICAgICAgIHRoaXMucCA9IHRoaXMucTtcbiAgICAgICAgICAgICAgICB0aGlzLnEgPSB0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHAxID0gdGhpcy5wLnN1YnRyYWN0KEJpZ0ludGVnZXIuT05FKTtcbiAgICAgICAgICAgIHZhciBxMSA9IHRoaXMucS5zdWJ0cmFjdChCaWdJbnRlZ2VyLk9ORSk7XG4gICAgICAgICAgICB2YXIgcGhpID0gcDEubXVsdGlwbHkocTEpO1xuICAgICAgICAgICAgaWYgKHBoaS5nY2QoZWUpLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubiA9IHRoaXMucC5tdWx0aXBseSh0aGlzLnEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZCA9IGVlLm1vZEludmVyc2UocGhpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRtcDEgPSB0aGlzLmQubW9kKHAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRtcTEgPSB0aGlzLmQubW9kKHExKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZWZmID0gdGhpcy5xLm1vZEludmVyc2UodGhpcy5wKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gUlNBS2V5LnByb3RvdHlwZS5kZWNyeXB0ID0gUlNBRGVjcnlwdDtcbiAgICAvLyBSZXR1cm4gdGhlIFBLQ1MjMSBSU0EgZGVjcnlwdGlvbiBvZiBcImN0ZXh0XCIuXG4gICAgLy8gXCJjdGV4dFwiIGlzIGFuIGV2ZW4tbGVuZ3RoIGhleCBzdHJpbmcgYW5kIHRoZSBvdXRwdXQgaXMgYSBwbGFpbiBzdHJpbmcuXG4gICAgLy/kv67mlLlcbiAgICBSU0FLZXkucHJvdG90eXBlLmRlY3J5cHQgPSBmdW5jdGlvbiAoY3RleHQpIHtcbiAgICAgICAgdmFyIGMgPSBwYXJzZUJpZ0ludChjdGV4dCwgMTYpO1xuICAgICAgICAvLyB2YXIgbSA9IHRoaXMuZG9Qcml2YXRlKGMpO1xuICAgICAgICB2YXIgbSA9IHRoaXMuZG9QdWJsaWMoYyk7XG4gICAgICAgIGlmIChtID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwa2NzMXVucGFkMihtLCAodGhpcy5uLmJpdExlbmd0aCgpICsgNykgPj4gMyk7XG4gICAgfTtcbiAgICAvLyBHZW5lcmF0ZSBhIG5ldyByYW5kb20gcHJpdmF0ZSBrZXkgQiBiaXRzIGxvbmcsIHVzaW5nIHB1YmxpYyBleHB0IEVcbiAgICBSU0FLZXkucHJvdG90eXBlLmdlbmVyYXRlQXN5bmMgPSBmdW5jdGlvbiAoQiwgRSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJuZyA9IG5ldyBTZWN1cmVSYW5kb20oKTtcbiAgICAgICAgdmFyIHFzID0gQiA+PiAxO1xuICAgICAgICB0aGlzLmUgPSBwYXJzZUludChFLCAxNik7XG4gICAgICAgIHZhciBlZSA9IG5ldyBCaWdJbnRlZ2VyKEUsIDE2KTtcbiAgICAgICAgdmFyIHJzYSA9IHRoaXM7XG4gICAgICAgIC8vIFRoZXNlIGZ1bmN0aW9ucyBoYXZlIG5vbi1kZXNjcmlwdCBuYW1lcyBiZWNhdXNlIHRoZXkgd2VyZSBvcmlnaW5hbGx5IGZvcig7OykgbG9vcHMuXG4gICAgICAgIC8vIEkgZG9uJ3Qga25vdyBhYm91dCBjcnlwdG9ncmFwaHkgdG8gZ2l2ZSB0aGVtIGJldHRlciBuYW1lcyB0aGFuIGxvb3AxLTQuXG4gICAgICAgIHZhciBsb29wMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsb29wNCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAocnNhLnAuY29tcGFyZVRvKHJzYS5xKSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gcnNhLnA7XG4gICAgICAgICAgICAgICAgICAgIHJzYS5wID0gcnNhLnE7XG4gICAgICAgICAgICAgICAgICAgIHJzYS5xID0gdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHAxID0gcnNhLnAuc3VidHJhY3QoQmlnSW50ZWdlci5PTkUpO1xuICAgICAgICAgICAgICAgIHZhciBxMSA9IHJzYS5xLnN1YnRyYWN0KEJpZ0ludGVnZXIuT05FKTtcbiAgICAgICAgICAgICAgICB2YXIgcGhpID0gcDEubXVsdGlwbHkocTEpO1xuICAgICAgICAgICAgICAgIGlmIChwaGkuZ2NkKGVlKS5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcnNhLm4gPSByc2EucC5tdWx0aXBseShyc2EucSk7XG4gICAgICAgICAgICAgICAgICAgIHJzYS5kID0gZWUubW9kSW52ZXJzZShwaGkpO1xuICAgICAgICAgICAgICAgICAgICByc2EuZG1wMSA9IHJzYS5kLm1vZChwMSk7XG4gICAgICAgICAgICAgICAgICAgIHJzYS5kbXExID0gcnNhLmQubW9kKHExKTtcbiAgICAgICAgICAgICAgICAgICAgcnNhLmNvZWZmID0gcnNhLnEubW9kSW52ZXJzZShyc2EucCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBjYWxsYmFjaygpOyB9LCAwKTsgLy8gZXNjYXBlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGxvb3AxLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGxvb3AzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJzYS5xID0gbmJpKCk7XG4gICAgICAgICAgICAgICAgcnNhLnEuZnJvbU51bWJlckFzeW5jKHFzLCAxLCBybmcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcnNhLnEuc3VidHJhY3QoQmlnSW50ZWdlci5PTkUpLmdjZGEoZWUsIGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5jb21wYXJlVG8oQmlnSW50ZWdlci5PTkUpID09IDAgJiYgcnNhLnEuaXNQcm9iYWJsZVByaW1lKDEwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQobG9vcDQsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChsb29wMywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBsb29wMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByc2EucCA9IG5iaSgpO1xuICAgICAgICAgICAgICAgIHJzYS5wLmZyb21OdW1iZXJBc3luYyhCIC0gcXMsIDEsIHJuZywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByc2EucC5zdWJ0cmFjdChCaWdJbnRlZ2VyLk9ORSkuZ2NkYShlZSwgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmNvbXBhcmVUbyhCaWdJbnRlZ2VyLk9ORSkgPT0gMCAmJiByc2EucC5pc1Byb2JhYmxlUHJpbWUoMTApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChsb29wMywgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGxvb3AyLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0VGltZW91dChsb29wMiwgMCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldFRpbWVvdXQobG9vcDEsIDApO1xuICAgIH07XG4gICAgcmV0dXJuIFJTQUtleTtcbn0oKSk7XG4vLyBVbmRvIFBLQ1MjMSAodHlwZSAyLCByYW5kb20pIHBhZGRpbmcgYW5kLCBpZiB2YWxpZCwgcmV0dXJuIHRoZSBwbGFpbnRleHRcbi8v5L+u5pS5XG5mdW5jdGlvbiBwa2NzMXVucGFkMihkLCBuKSB7XG4gICAgdmFyIGIgPSBkLnRvQnl0ZUFycmF5KCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYi5sZW5ndGggJiYgYltpXSA9PSAwKSB7XG4gICAgICAgICsraTtcbiAgICB9XG4gICAgLy8gaWYgKGIubGVuZ3RoIC0gaSAhPSBuIC0gMSB8fCBiW2ldICE9IDIpIHtcbiAgICAvLyAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gfVxuICAgICsraTtcbiAgICB3aGlsZSAoYltpXSAhPSAwKSB7XG4gICAgICAgIGlmICgrK2kgPj0gYi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciByZXQgPSBcIlwiO1xuICAgIHdoaWxlICgrK2kgPCBiLmxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IGJbaV0gJiAyNTU7XG4gICAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoYyA+IDE5MSkgJiYgKGMgPCAyMjQpKSB7XG4gICAgICAgICAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAzMSkgPDwgNikgfCAoYltpICsgMV0gJiA2MykpO1xuICAgICAgICAgICAgKytpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMTUpIDw8IDEyKSB8ICgoYltpICsgMV0gJiA2MykgPDwgNikgfCAoYltpICsgMl0gJiA2MykpO1xuICAgICAgICAgICAgaSArPSAyO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG4vLyBSZXR1cm4gdGhlIFBLQ1MjMSBSU0EgZW5jcnlwdGlvbiBvZiBcInRleHRcIiBhcyBhIEJhc2U2NC1lbmNvZGVkIHN0cmluZ1xuLy8gZnVuY3Rpb24gUlNBRW5jcnlwdEI2NCh0ZXh0KSB7XG4vLyAgdmFyIGggPSB0aGlzLmVuY3J5cHQodGV4dCk7XG4vLyAgaWYoaCkgcmV0dXJuIGhleDJiNjQoaCk7IGVsc2UgcmV0dXJuIG51bGw7XG4vLyB9XG4vLyBwdWJsaWNcbi8vIFJTQUtleS5wcm90b3R5cGUuZW5jcnlwdF9iNjQgPSBSU0FFbmNyeXB0QjY0O1xuXG4vKiFcbkNvcHlyaWdodCAoYykgMjAxMSwgWWFob28hIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkNvZGUgbGljZW5zZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlOlxuaHR0cDovL2RldmVsb3Blci55YWhvby5jb20veXVpL2xpY2Vuc2UuaHRtbFxudmVyc2lvbjogMi45LjBcbiovXG52YXIgWUFIT08gPSB7fTtcbllBSE9PLmxhbmcgPSB7XG4gICAgLyoqXG4gICAgICogVXRpbGl0eSB0byBzZXQgdXAgdGhlIHByb3RvdHlwZSwgY29uc3RydWN0b3IgYW5kIHN1cGVyY2xhc3MgcHJvcGVydGllcyB0b1xuICAgICAqIHN1cHBvcnQgYW4gaW5oZXJpdGFuY2Ugc3RyYXRlZ3kgdGhhdCBjYW4gY2hhaW4gY29uc3RydWN0b3JzIGFuZCBtZXRob2RzLlxuICAgICAqIFN0YXRpYyBtZW1iZXJzIHdpbGwgbm90IGJlIGluaGVyaXRlZC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgZXh0ZW5kXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1YmMgICB0aGUgb2JqZWN0IHRvIG1vZGlmeVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHN1cGVyYyB0aGUgb2JqZWN0IHRvIGluaGVyaXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3ZlcnJpZGVzICBhZGRpdGlvbmFsIHByb3BlcnRpZXMvbWV0aG9kcyB0byBhZGQgdG8gdGhlXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJjbGFzcyBwcm90b3R5cGUuICBUaGVzZSB3aWxsIG92ZXJyaWRlIHRoZVxuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hpbmcgaXRlbXMgb2J0YWluZWQgZnJvbSB0aGUgc3VwZXJjbGFzc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgcHJlc2VudC5cbiAgICAgKi9cbiAgICBleHRlbmQ6IGZ1bmN0aW9uKHN1YmMsIHN1cGVyYywgb3ZlcnJpZGVzKSB7XG4gICAgICAgIGlmICghIHN1cGVyYyB8fCAhIHN1YmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllBSE9PLmxhbmcuZXh0ZW5kIGZhaWxlZCwgcGxlYXNlIGNoZWNrIHRoYXQgXCIgK1xuICAgICAgICAgICAgICAgIFwiYWxsIGRlcGVuZGVuY2llcyBhcmUgaW5jbHVkZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIEYgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICBGLnByb3RvdHlwZSA9IHN1cGVyYy5wcm90b3R5cGU7XG4gICAgICAgIHN1YmMucHJvdG90eXBlID0gbmV3IEYoKTtcbiAgICAgICAgc3ViYy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJjO1xuICAgICAgICBzdWJjLnN1cGVyY2xhc3MgPSBzdXBlcmMucHJvdG90eXBlO1xuXG4gICAgICAgIGlmIChzdXBlcmMucHJvdG90eXBlLmNvbnN0cnVjdG9yID09IE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHN1cGVyYy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdXBlcmM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3ZlcnJpZGVzKSB7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIGZvciAoaSBpbiBvdmVycmlkZXMpIHtcbiAgICAgICAgICAgICAgICBzdWJjLnByb3RvdHlwZVtpXSA9IG92ZXJyaWRlc1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAqIElFIHdpbGwgbm90IGVudW1lcmF0ZSBuYXRpdmUgZnVuY3Rpb25zIGluIGEgZGVyaXZlZCBvYmplY3QgZXZlbiBpZiB0aGVcbiAgICAgICAgICAgICAqIGZ1bmN0aW9uIHdhcyBvdmVycmlkZGVuLiAgVGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIHNwZWNpZmljIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICogd2UgY2FyZSBhYm91dCBvbiB0aGUgT2JqZWN0IHByb3RvdHlwZS5cbiAgICAgICAgICAgICAqIEBwcm9wZXJ0eSBfSUVFbnVtRml4XG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByICB0aGUgb2JqZWN0IHRvIHJlY2VpdmUgdGhlIGF1Z21lbnRhdGlvblxuICAgICAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gcyAgdGhlIG9iamVjdCB0aGF0IHN1cHBsaWVzIHRoZSBwcm9wZXJ0aWVzIHRvIGF1Z21lbnRcbiAgICAgICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBfSUVFbnVtRml4ID0gZnVuY3Rpb24oKSB7fSxcbiAgICAgICAgICAgICAgICBBREQgPSBbXCJ0b1N0cmluZ1wiLCBcInZhbHVlT2ZcIl07XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICgvTVNJRS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBfSUVFbnVtRml4ID0gZnVuY3Rpb24ociwgcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IEFERC5sZW5ndGg7IGkgPSBpICsgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbmFtZSA9IEFERFtpXSwgZiA9IHNbZm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJyAmJiBmICE9IE9iamVjdC5wcm90b3R5cGVbZm5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJbZm5hbWVdID0gZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHt9ICAgICAgICAgICAgX0lFRW51bUZpeChzdWJjLnByb3RvdHlwZSwgb3ZlcnJpZGVzKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qIGFzbjEtMS4wLjEzLmpzIChjKSAyMDEzLTIwMTcgS2VuamkgVXJ1c2hpbWEgfCBranVyLmdpdGh1Yi5jb20vanNyc2FzaWduL2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXdcbiAqIEBuYW1lIGFzbjEtMS4wLmpzXG4gKiBAYXV0aG9yIEtlbmppIFVydXNoaW1hIGtlbmppLnVydXNoaW1hQGdtYWlsLmNvbVxuICogQHZlcnNpb24gYXNuMSAxLjAuMTMgKDIwMTctSnVuLTAyKVxuICogQHNpbmNlIGpzcnNhc2lnbiAyLjFcbiAqIEBsaWNlbnNlIDxhIGhyZWY9XCJodHRwczovL2tqdXIuZ2l0aHViLmlvL2pzcnNhc2lnbi9saWNlbnNlL1wiPk1JVCBMaWNlbnNlPC9hPlxuICovXG5cbi8qKlxuICoga2p1cidzIGNsYXNzIGxpYnJhcnkgbmFtZSBzcGFjZVxuICogPHA+XG4gKiBUaGlzIG5hbWUgc3BhY2UgcHJvdmlkZXMgZm9sbG93aW5nIG5hbWUgc3BhY2VzOlxuICogPHVsPlxuICogPGxpPntAbGluayBLSlVSLmFzbjF9IC0gQVNOLjEgcHJpbWl0aXZlIGhleGFkZWNpbWFsIGVuY29kZXI8L2xpPlxuICogPGxpPntAbGluayBLSlVSLmFzbjEueDUwOX0gLSBBU04uMSBzdHJ1Y3R1cmUgZm9yIFguNTA5IGNlcnRpZmljYXRlIGFuZCBDUkw8L2xpPlxuICogPGxpPntAbGluayBLSlVSLmNyeXB0b30gLSBKYXZhIENyeXB0b2dyYXBoaWMgRXh0ZW5zaW9uKEpDRSkgc3R5bGUgTWVzc2FnZURpZ2VzdC9TaWduYXR1cmVcbiAqIGNsYXNzIGFuZCB1dGlsaXRpZXM8L2xpPlxuICogPC91bD5cbiAqIDwvcD5cbiAqIE5PVEU6IFBsZWFzZSBpZ25vcmUgbWV0aG9kIHN1bW1hcnkgYW5kIGRvY3VtZW50IG9mIHRoaXMgbmFtZXNwYWNlLiBUaGlzIGNhdXNlZCBieSBhIGJ1ZyBvZiBqc2RvYzIuXG4gKiBAbmFtZSBLSlVSXG4gKiBAbmFtZXNwYWNlIGtqdXIncyBjbGFzcyBsaWJyYXJ5IG5hbWUgc3BhY2VcbiAqL1xudmFyIEtKVVIgPSB7fTtcblxuLyoqXG4gKiBranVyJ3MgQVNOLjEgY2xhc3MgbGlicmFyeSBuYW1lIHNwYWNlXG4gKiA8cD5cbiAqIFRoaXMgaXMgSVRVLVQgWC42OTAgQVNOLjEgREVSIGVuY29kZXIgY2xhc3MgbGlicmFyeSBhbmRcbiAqIGNsYXNzIHN0cnVjdHVyZSBhbmQgbWV0aG9kcyBpcyB2ZXJ5IHNpbWlsYXIgdG9cbiAqIG9yZy5ib3VuY3ljYXN0bGUuYXNuMSBwYWNrYWdlIG9mXG4gKiB3ZWxsIGtub3duIEJvdW5jeUNhc2x0ZSBDcnlwdG9ncmFwaHkgTGlicmFyeS5cbiAqIDxoND5QUk9WSURJTkcgQVNOLjEgUFJJTUlUSVZFUzwvaDQ+XG4gKiBIZXJlIGFyZSBBU04uMSBERVIgcHJpbWl0aXZlIGNsYXNzZXMuXG4gKiA8dWw+XG4gKiA8bGk+MHgwMSB7QGxpbmsgS0pVUi5hc24xLkRFUkJvb2xlYW59PC9saT5cbiAqIDxsaT4weDAyIHtAbGluayBLSlVSLmFzbjEuREVSSW50ZWdlcn08L2xpPlxuICogPGxpPjB4MDMge0BsaW5rIEtKVVIuYXNuMS5ERVJCaXRTdHJpbmd9PC9saT5cbiAqIDxsaT4weDA0IHtAbGluayBLSlVSLmFzbjEuREVST2N0ZXRTdHJpbmd9PC9saT5cbiAqIDxsaT4weDA1IHtAbGluayBLSlVSLmFzbjEuREVSTnVsbH08L2xpPlxuICogPGxpPjB4MDYge0BsaW5rIEtKVVIuYXNuMS5ERVJPYmplY3RJZGVudGlmaWVyfTwvbGk+XG4gKiA8bGk+MHgwYSB7QGxpbmsgS0pVUi5hc24xLkRFUkVudW1lcmF0ZWR9PC9saT5cbiAqIDxsaT4weDBjIHtAbGluayBLSlVSLmFzbjEuREVSVVRGOFN0cmluZ308L2xpPlxuICogPGxpPjB4MTIge0BsaW5rIEtKVVIuYXNuMS5ERVJOdW1lcmljU3RyaW5nfTwvbGk+XG4gKiA8bGk+MHgxMyB7QGxpbmsgS0pVUi5hc24xLkRFUlByaW50YWJsZVN0cmluZ308L2xpPlxuICogPGxpPjB4MTQge0BsaW5rIEtKVVIuYXNuMS5ERVJUZWxldGV4U3RyaW5nfTwvbGk+XG4gKiA8bGk+MHgxNiB7QGxpbmsgS0pVUi5hc24xLkRFUklBNVN0cmluZ308L2xpPlxuICogPGxpPjB4MTcge0BsaW5rIEtKVVIuYXNuMS5ERVJVVENUaW1lfTwvbGk+XG4gKiA8bGk+MHgxOCB7QGxpbmsgS0pVUi5hc24xLkRFUkdlbmVyYWxpemVkVGltZX08L2xpPlxuICogPGxpPjB4MzAge0BsaW5rIEtKVVIuYXNuMS5ERVJTZXF1ZW5jZX08L2xpPlxuICogPGxpPjB4MzEge0BsaW5rIEtKVVIuYXNuMS5ERVJTZXR9PC9saT5cbiAqIDwvdWw+XG4gKiA8aDQ+T1RIRVIgQVNOLjEgQ0xBU1NFUzwvaDQ+XG4gKiA8dWw+XG4gKiA8bGk+e0BsaW5rIEtKVVIuYXNuMS5BU04xT2JqZWN0fTwvbGk+XG4gKiA8bGk+e0BsaW5rIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZ308L2xpPlxuICogPGxpPntAbGluayBLSlVSLmFzbjEuREVSQWJzdHJhY3RUaW1lfTwvbGk+XG4gKiA8bGk+e0BsaW5rIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cnVjdHVyZWR9PC9saT5cbiAqIDxsaT57QGxpbmsgS0pVUi5hc24xLkRFUlRhZ2dlZE9iamVjdH08L2xpPlxuICogPC91bD5cbiAqIDxoND5TVUIgTkFNRSBTUEFDRVM8L2g0PlxuICogPHVsPlxuICogPGxpPntAbGluayBLSlVSLmFzbjEuY2FkZXN9IC0gQ0FkRVMgbG9uZyB0ZXJtIHNpZ25hdHVyZSBmb3JtYXQ8L2xpPlxuICogPGxpPntAbGluayBLSlVSLmFzbjEuY21zfSAtIENyeXB0b2dyYXBoaWMgTWVzc2FnZSBTeW50YXg8L2xpPlxuICogPGxpPntAbGluayBLSlVSLmFzbjEuY3NyfSAtIENlcnRpZmljYXRlIFNpZ25pbmcgUmVxdWVzdCAoQ1NSL1BLQ1MjMTApPC9saT5cbiAqIDxsaT57QGxpbmsgS0pVUi5hc24xLnRzcH0gLSBSRkMgMzE2MSBUaW1lc3RhbXBpbmcgUHJvdG9jb2wgRm9ybWF0PC9saT5cbiAqIDxsaT57QGxpbmsgS0pVUi5hc24xLng1MDl9IC0gUkZDIDUyODAgWC41MDkgY2VydGlmaWNhdGUgYW5kIENSTDwvbGk+XG4gKiA8L3VsPlxuICogPC9wPlxuICogTk9URTogUGxlYXNlIGlnbm9yZSBtZXRob2Qgc3VtbWFyeSBhbmQgZG9jdW1lbnQgb2YgdGhpcyBuYW1lc3BhY2UuXG4gKiBUaGlzIGNhdXNlZCBieSBhIGJ1ZyBvZiBqc2RvYzIuXG4gKiBAbmFtZSBLSlVSLmFzbjFcbiAqIEBuYW1lc3BhY2VcbiAqL1xuaWYgKHR5cGVvZiBLSlVSLmFzbjEgPT0gXCJ1bmRlZmluZWRcIiB8fCAhS0pVUi5hc24xKSBLSlVSLmFzbjEgPSB7fTtcblxuLyoqXG4gKiBBU04xIHV0aWxpdGllcyBjbGFzc1xuICogQG5hbWUgS0pVUi5hc24xLkFTTjFVdGlsXG4gKiBAY2xhc3MgQVNOMSB1dGlsaXRpZXMgY2xhc3NcbiAqIEBzaW5jZSBhc24xIDEuMC4yXG4gKi9cbktKVVIuYXNuMS5BU04xVXRpbCA9IG5ldyBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmludGVnZXJUb0J5dGVIZXggPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHZhciBoID0gaS50b1N0cmluZygxNik7XG4gICAgICAgIGlmICgoaC5sZW5ndGggJSAyKSA9PSAxKSBoID0gJzAnICsgaDtcbiAgICAgICAgcmV0dXJuIGg7XG4gICAgfTtcbiAgICB0aGlzLmJpZ0ludFRvTWluVHdvc0NvbXBsZW1lbnRzSGV4ID0gZnVuY3Rpb24oYmlnSW50ZWdlclZhbHVlKSB7XG4gICAgICAgIHZhciBoID0gYmlnSW50ZWdlclZhbHVlLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKGguc3Vic3RyKDAsIDEpICE9ICctJykge1xuICAgICAgICAgICAgaWYgKGgubGVuZ3RoICUgMiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgaCA9ICcwJyArIGg7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghIGgubWF0Y2goL15bMC03XS8pKSB7XG4gICAgICAgICAgICAgICAgICAgIGggPSAnMDAnICsgaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgaFBvcyA9IGguc3Vic3RyKDEpO1xuICAgICAgICAgICAgdmFyIHhvckxlbiA9IGhQb3MubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHhvckxlbiAlIDIgPT0gMSkge1xuICAgICAgICAgICAgICAgIHhvckxlbiArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoISBoLm1hdGNoKC9eWzAtN10vKSkge1xuICAgICAgICAgICAgICAgICAgICB4b3JMZW4gKz0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaE1hc2sgPSAnJztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeG9yTGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBoTWFzayArPSAnZic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYmlNYXNrID0gbmV3IEJpZ0ludGVnZXIoaE1hc2ssIDE2KTtcbiAgICAgICAgICAgIHZhciBiaU5lZyA9IGJpTWFzay54b3IoYmlnSW50ZWdlclZhbHVlKS5hZGQoQmlnSW50ZWdlci5PTkUpO1xuICAgICAgICAgICAgaCA9IGJpTmVnLnRvU3RyaW5nKDE2KS5yZXBsYWNlKC9eLS8sICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGdldCBQRU0gc3RyaW5nIGZyb20gaGV4YWRlY2ltYWwgZGF0YSBhbmQgaGVhZGVyIHN0cmluZ1xuICAgICAqIEBuYW1lIGdldFBFTVN0cmluZ0Zyb21IZXhcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkFTTjFVdGlsXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGFIZXggaGV4YWRlY2ltYWwgc3RyaW5nIG9mIFBFTSBib2R5XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBlbUhlYWRlciBQRU0gaGVhZGVyIHN0cmluZyAoZXguICdSU0EgUFJJVkFURSBLRVknKVxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gUEVNIGZvcm1hdHRlZCBzdHJpbmcgb2YgaW5wdXQgZGF0YVxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIFRoaXMgbWV0aG9kIGNvbnZlcnRzIGEgaGV4YWRlY2ltYWwgc3RyaW5nIHRvIGEgUEVNIHN0cmluZyB3aXRoXG4gICAgICogYSBzcGVjaWZpZWQgaGVhZGVyLiBJdHMgbGluZSBicmVhayB3aWxsIGJlIENSTEYoXCJcXHJcXG5cIikuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB2YXIgcGVtICA9IEtKVVIuYXNuMS5BU04xVXRpbC5nZXRQRU1TdHJpbmdGcm9tSGV4KCc2MTYxNjEnLCAnUlNBIFBSSVZBVEUgS0VZJyk7XG4gICAgICogLy8gdmFsdWUgb2YgcGVtIHdpbGwgYmU6XG4gICAgICogLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG4gICAgICogWVdGaFxuICAgICAqIC0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiAgICAgKi9cbiAgICB0aGlzLmdldFBFTVN0cmluZ0Zyb21IZXggPSBmdW5jdGlvbihkYXRhSGV4LCBwZW1IZWFkZXIpIHtcbiAgICAgICAgcmV0dXJuIGhleHRvcGVtKGRhdGFIZXgsIHBlbUhlYWRlcik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGdlbmVyYXRlIEFTTjFPYmplY3Qgc3BlY2lmZWQgYnkgSlNPTiBwYXJhbWV0ZXJzXG4gICAgICogQG5hbWUgbmV3T2JqZWN0XG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5BU04xVXRpbFxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtIEpTT04gcGFyYW1ldGVyIHRvIGdlbmVyYXRlIEFTTjFPYmplY3RcbiAgICAgKiBAcmV0dXJuIHtLSlVSLmFzbjEuQVNOMU9iamVjdH0gZ2VuZXJhdGVkIG9iamVjdFxuICAgICAqIEBzaW5jZSBhc24xIDEuMC4zXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogZ2VuZXJhdGUgYW55IEFTTjFPYmplY3Qgc3BlY2lmaWVkIGJ5IEpTT04gcGFyYW1cbiAgICAgKiBpbmNsdWRpbmcgQVNOLjEgcHJpbWl0aXZlIG9yIHN0cnVjdHVyZWQuXG4gICAgICogR2VuZXJhbGx5ICdwYXJhbScgY2FuIGJlIGRlc2NyaWJlZCBhcyBmb2xsb3dzOlxuICAgICAqIDxibG9ja3F1b3RlPlxuICAgICAqIHtUWVBFLU9GLUFTTk9CSjogQVNOMU9CSi1QQVJBTUVURVJ9XG4gICAgICogPC9ibG9ja3F1b3RlPlxuICAgICAqICdUWVBFLU9GLUFTTjFPQkonIGNhbiBiZSBvbmUgb2YgZm9sbG93aW5nIHN5bWJvbHM6XG4gICAgICogPHVsPlxuICAgICAqIDxsaT4nYm9vbCcgLSBERVJCb29sZWFuPC9saT5cbiAgICAgKiA8bGk+J2ludCcgLSBERVJJbnRlZ2VyPC9saT5cbiAgICAgKiA8bGk+J2JpdHN0cicgLSBERVJCaXRTdHJpbmc8L2xpPlxuICAgICAqIDxsaT4nb2N0c3RyJyAtIERFUk9jdGV0U3RyaW5nPC9saT5cbiAgICAgKiA8bGk+J251bGwnIC0gREVSTnVsbDwvbGk+XG4gICAgICogPGxpPidvaWQnIC0gREVST2JqZWN0SWRlbnRpZmllcjwvbGk+XG4gICAgICogPGxpPidlbnVtJyAtIERFUkVudW1lcmF0ZWQ8L2xpPlxuICAgICAqIDxsaT4ndXRmOHN0cicgLSBERVJVVEY4U3RyaW5nPC9saT5cbiAgICAgKiA8bGk+J251bXN0cicgLSBERVJOdW1lcmljU3RyaW5nPC9saT5cbiAgICAgKiA8bGk+J3BybnN0cicgLSBERVJQcmludGFibGVTdHJpbmc8L2xpPlxuICAgICAqIDxsaT4ndGVsc3RyJyAtIERFUlRlbGV0ZXhTdHJpbmc8L2xpPlxuICAgICAqIDxsaT4naWE1c3RyJyAtIERFUklBNVN0cmluZzwvbGk+XG4gICAgICogPGxpPid1dGN0aW1lJyAtIERFUlVUQ1RpbWU8L2xpPlxuICAgICAqIDxsaT4nZ2VudGltZScgLSBERVJHZW5lcmFsaXplZFRpbWU8L2xpPlxuICAgICAqIDxsaT4nc2VxJyAtIERFUlNlcXVlbmNlPC9saT5cbiAgICAgKiA8bGk+J3NldCcgLSBERVJTZXQ8L2xpPlxuICAgICAqIDxsaT4ndGFnJyAtIERFUlRhZ2dlZE9iamVjdDwvbGk+XG4gICAgICogPC91bD5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG5ld09iamVjdCh7J3BybnN0cic6ICdhYWEnfSk7XG4gICAgICogbmV3T2JqZWN0KHsnc2VxJzogW3snaW50JzogM30sIHsncHJuc3RyJzogJ2FhYSd9XX0pXG4gICAgICogLy8gQVNOLjEgVGFnZ2VkIE9iamVjdFxuICAgICAqIG5ld09iamVjdCh7J3RhZyc6IHsndGFnJzogJ2ExJyxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgJ2V4cGxpY2l0JzogdHJ1ZSxcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgJ29iaic6IHsnc2VxJzogW3snaW50JzogM30sIHsncHJuc3RyJzogJ2FhYSd9XX19fSk7XG4gICAgICogLy8gbW9yZSBzaW1wbGUgcmVwcmVzZW50YXRpb24gb2YgQVNOLjEgVGFnZ2VkIE9iamVjdFxuICAgICAqIG5ld09iamVjdCh7J3RhZyc6IFsnYTEnLFxuICAgICAqICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAqICAgICAgICAgICAgICAgICAgICB7J3NlcSc6IFtcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICB7J2ludCc6IDN9LFxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIHsncHJuc3RyJzogJ2FhYSd9XX1cbiAgICAgKiAgICAgICAgICAgICAgICAgICBdfSk7XG4gICAgICovXG4gICAgdGhpcy5uZXdPYmplY3QgPSBmdW5jdGlvbihwYXJhbSkge1xuICAgICAgICB2YXIgX0tKVVIgPSBLSlVSLFxuICAgICAgICAgICAgX0tKVVJfYXNuMSA9IF9LSlVSLmFzbjEsXG4gICAgICAgICAgICBfREVSQm9vbGVhbiA9IF9LSlVSX2FzbjEuREVSQm9vbGVhbixcbiAgICAgICAgICAgIF9ERVJJbnRlZ2VyID0gX0tKVVJfYXNuMS5ERVJJbnRlZ2VyLFxuICAgICAgICAgICAgX0RFUkJpdFN0cmluZyA9IF9LSlVSX2FzbjEuREVSQml0U3RyaW5nLFxuICAgICAgICAgICAgX0RFUk9jdGV0U3RyaW5nID0gX0tKVVJfYXNuMS5ERVJPY3RldFN0cmluZyxcbiAgICAgICAgICAgIF9ERVJOdWxsID0gX0tKVVJfYXNuMS5ERVJOdWxsLFxuICAgICAgICAgICAgX0RFUk9iamVjdElkZW50aWZpZXIgPSBfS0pVUl9hc24xLkRFUk9iamVjdElkZW50aWZpZXIsXG4gICAgICAgICAgICBfREVSRW51bWVyYXRlZCA9IF9LSlVSX2FzbjEuREVSRW51bWVyYXRlZCxcbiAgICAgICAgICAgIF9ERVJVVEY4U3RyaW5nID0gX0tKVVJfYXNuMS5ERVJVVEY4U3RyaW5nLFxuICAgICAgICAgICAgX0RFUk51bWVyaWNTdHJpbmcgPSBfS0pVUl9hc24xLkRFUk51bWVyaWNTdHJpbmcsXG4gICAgICAgICAgICBfREVSUHJpbnRhYmxlU3RyaW5nID0gX0tKVVJfYXNuMS5ERVJQcmludGFibGVTdHJpbmcsXG4gICAgICAgICAgICBfREVSVGVsZXRleFN0cmluZyA9IF9LSlVSX2FzbjEuREVSVGVsZXRleFN0cmluZyxcbiAgICAgICAgICAgIF9ERVJJQTVTdHJpbmcgPSBfS0pVUl9hc24xLkRFUklBNVN0cmluZyxcbiAgICAgICAgICAgIF9ERVJVVENUaW1lID0gX0tKVVJfYXNuMS5ERVJVVENUaW1lLFxuICAgICAgICAgICAgX0RFUkdlbmVyYWxpemVkVGltZSA9IF9LSlVSX2FzbjEuREVSR2VuZXJhbGl6ZWRUaW1lLFxuICAgICAgICAgICAgX0RFUlNlcXVlbmNlID0gX0tKVVJfYXNuMS5ERVJTZXF1ZW5jZSxcbiAgICAgICAgICAgIF9ERVJTZXQgPSBfS0pVUl9hc24xLkRFUlNldCxcbiAgICAgICAgICAgIF9ERVJUYWdnZWRPYmplY3QgPSBfS0pVUl9hc24xLkRFUlRhZ2dlZE9iamVjdCxcbiAgICAgICAgICAgIF9uZXdPYmplY3QgPSBfS0pVUl9hc24xLkFTTjFVdGlsLm5ld09iamVjdDtcblxuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtKTtcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoICE9IDEpXG4gICAgICAgICAgICB0aHJvdyBcImtleSBvZiBwYXJhbSBzaGFsbCBiZSBvbmx5IG9uZS5cIjtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbMF07XG5cbiAgICAgICAgaWYgKFwiOmJvb2w6aW50OmJpdHN0cjpvY3RzdHI6bnVsbDpvaWQ6ZW51bTp1dGY4c3RyOm51bXN0cjpwcm5zdHI6dGVsc3RyOmlhNXN0cjp1dGN0aW1lOmdlbnRpbWU6c2VxOnNldDp0YWc6XCIuaW5kZXhPZihcIjpcIiArIGtleSArIFwiOlwiKSA9PSAtMSlcbiAgICAgICAgICAgIHRocm93IFwidW5kZWZpbmVkIGtleTogXCIgKyBrZXk7XG5cbiAgICAgICAgaWYgKGtleSA9PSBcImJvb2xcIikgICAgcmV0dXJuIG5ldyBfREVSQm9vbGVhbihwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcImludFwiKSAgICAgcmV0dXJuIG5ldyBfREVSSW50ZWdlcihwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcImJpdHN0clwiKSAgcmV0dXJuIG5ldyBfREVSQml0U3RyaW5nKHBhcmFtW2tleV0pO1xuICAgICAgICBpZiAoa2V5ID09IFwib2N0c3RyXCIpICByZXR1cm4gbmV3IF9ERVJPY3RldFN0cmluZyhwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcIm51bGxcIikgICAgcmV0dXJuIG5ldyBfREVSTnVsbChwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcIm9pZFwiKSAgICAgcmV0dXJuIG5ldyBfREVST2JqZWN0SWRlbnRpZmllcihwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcImVudW1cIikgICAgcmV0dXJuIG5ldyBfREVSRW51bWVyYXRlZChwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcInV0ZjhzdHJcIikgcmV0dXJuIG5ldyBfREVSVVRGOFN0cmluZyhwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcIm51bXN0clwiKSAgcmV0dXJuIG5ldyBfREVSTnVtZXJpY1N0cmluZyhwYXJhbVtrZXldKTtcbiAgICAgICAgaWYgKGtleSA9PSBcInBybnN0clwiKSAgcmV0dXJuIG5ldyBfREVSUHJpbnRhYmxlU3RyaW5nKHBhcmFtW2tleV0pO1xuICAgICAgICBpZiAoa2V5ID09IFwidGVsc3RyXCIpICByZXR1cm4gbmV3IF9ERVJUZWxldGV4U3RyaW5nKHBhcmFtW2tleV0pO1xuICAgICAgICBpZiAoa2V5ID09IFwiaWE1c3RyXCIpICByZXR1cm4gbmV3IF9ERVJJQTVTdHJpbmcocGFyYW1ba2V5XSk7XG4gICAgICAgIGlmIChrZXkgPT0gXCJ1dGN0aW1lXCIpIHJldHVybiBuZXcgX0RFUlVUQ1RpbWUocGFyYW1ba2V5XSk7XG4gICAgICAgIGlmIChrZXkgPT0gXCJnZW50aW1lXCIpIHJldHVybiBuZXcgX0RFUkdlbmVyYWxpemVkVGltZShwYXJhbVtrZXldKTtcblxuICAgICAgICBpZiAoa2V5ID09IFwic2VxXCIpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbUxpc3QgPSBwYXJhbVtrZXldO1xuICAgICAgICAgICAgdmFyIGEgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFzbjFPYmogPSBfbmV3T2JqZWN0KHBhcmFtTGlzdFtpXSk7XG4gICAgICAgICAgICAgICAgYS5wdXNoKGFzbjFPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBfREVSU2VxdWVuY2UoeydhcnJheSc6IGF9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJzZXRcIikge1xuICAgICAgICAgICAgdmFyIHBhcmFtTGlzdCA9IHBhcmFtW2tleV07XG4gICAgICAgICAgICB2YXIgYSA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYXNuMU9iaiA9IF9uZXdPYmplY3QocGFyYW1MaXN0W2ldKTtcbiAgICAgICAgICAgICAgICBhLnB1c2goYXNuMU9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IF9ERVJTZXQoeydhcnJheSc6IGF9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChrZXkgPT0gXCJ0YWdcIikge1xuICAgICAgICAgICAgdmFyIHRhZ1BhcmFtID0gcGFyYW1ba2V5XTtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGFnUGFyYW0pID09PSAnW29iamVjdCBBcnJheV0nICYmXG4gICAgICAgICAgICAgICAgdGFnUGFyYW0ubGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gX25ld09iamVjdCh0YWdQYXJhbVsyXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfREVSVGFnZ2VkT2JqZWN0KHt0YWc6IHRhZ1BhcmFtWzBdLFxuICAgICAgICAgICAgICAgICAgICBleHBsaWNpdDogdGFnUGFyYW1bMV0sXG4gICAgICAgICAgICAgICAgICAgIG9iajogb2JqfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBuZXdQYXJhbSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmICh0YWdQYXJhbS5leHBsaWNpdCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBuZXdQYXJhbS5leHBsaWNpdCA9IHRhZ1BhcmFtLmV4cGxpY2l0O1xuICAgICAgICAgICAgICAgIGlmICh0YWdQYXJhbS50YWcgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgbmV3UGFyYW0udGFnID0gdGFnUGFyYW0udGFnO1xuICAgICAgICAgICAgICAgIGlmICh0YWdQYXJhbS5vYmogPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgXCJvYmogc2hhbGwgYmUgc3BlY2lmaWVkIGZvciAndGFnJy5cIjtcbiAgICAgICAgICAgICAgICBuZXdQYXJhbS5vYmogPSBfbmV3T2JqZWN0KHRhZ1BhcmFtLm9iaik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBfREVSVGFnZ2VkT2JqZWN0KG5ld1BhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBnZXQgZW5jb2RlZCBoZXhhZGVjaW1hbCBzdHJpbmcgb2YgQVNOMU9iamVjdCBzcGVjaWZlZCBieSBKU09OIHBhcmFtZXRlcnNcbiAgICAgKiBAbmFtZSBqc29uVG9BU04xSEVYXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5BU04xVXRpbFxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtIEpTT04gcGFyYW1ldGVyIHRvIGdlbmVyYXRlIEFTTjFPYmplY3RcbiAgICAgKiBAcmV0dXJuIGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04xT2JqZWN0XG4gICAgICogQHNpbmNlIGFzbjEgMS4wLjRcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBBcyBmb3IgQVNOLjEgb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIEpTT04gb2JqZWN0LFxuICAgICAqIHBsZWFzZSBzZWUge0BsaW5rIG5ld09iamVjdH0uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBqc29uVG9BU04xSEVYKHsncHJuc3RyJzogJ2FhYSd9KTtcbiAgICAgKi9cbiAgICB0aGlzLmpzb25Ub0FTTjFIRVggPSBmdW5jdGlvbihwYXJhbSkge1xuICAgICAgICB2YXIgYXNuMU9iaiA9IHRoaXMubmV3T2JqZWN0KHBhcmFtKTtcbiAgICAgICAgcmV0dXJuIGFzbjFPYmouZ2V0RW5jb2RlZEhleCgpO1xuICAgIH07XG59O1xuXG4vKipcbiAqIGdldCBkb3Qgbm90ZWQgb2lkIG51bWJlciBzdHJpbmcgZnJvbSBoZXhhZGVjaW1hbCB2YWx1ZSBvZiBPSURcbiAqIEBuYW1lIG9pZEhleFRvSW50XG4gKiBAbWVtYmVyT2YgS0pVUi5hc24xLkFTTjFVdGlsXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBoZXggaGV4YWRlY2ltYWwgdmFsdWUgb2Ygb2JqZWN0IGlkZW50aWZpZXJcbiAqIEByZXR1cm4ge1N0cmluZ30gZG90IG5vdGVkIHN0cmluZyBvZiBvYmplY3QgaWRlbnRpZmllclxuICogQHNpbmNlIGpzcnNhc2lnbiA0LjguMyBhc24xIDEuMC43XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgc3RhdGljIG1ldGhvZCBjb252ZXJ0cyBmcm9tIGhleGFkZWNpbWFsIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZlxuICogQVNOLjEgdmFsdWUgb2Ygb2JqZWN0IGlkZW50aWZpZXIgdG8gb2lkIG51bWJlciBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICogS0pVUi5hc24xLkFTTjFVdGlsLm9pZEhleFRvSW50KCc1NTA0MDYnKSAmcmFycjsgXCIyLjUuNC42XCJcbiAqL1xuS0pVUi5hc24xLkFTTjFVdGlsLm9pZEhleFRvSW50ID0gZnVuY3Rpb24oaGV4KSB7XG4gICAgdmFyIHMgPSBcIlwiO1xuICAgIHZhciBpMDEgPSBwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNik7XG4gICAgdmFyIGkwID0gTWF0aC5mbG9vcihpMDEgLyA0MCk7XG4gICAgdmFyIGkxID0gaTAxICUgNDA7XG4gICAgdmFyIHMgPSBpMCArIFwiLlwiICsgaTE7XG5cbiAgICB2YXIgYmluYnVmID0gXCJcIjtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGhleC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUludChoZXguc3Vic3RyKGksIDIpLCAxNik7XG4gICAgICAgIHZhciBiaW4gPSAoXCIwMDAwMDAwMFwiICsgdmFsdWUudG9TdHJpbmcoMikpLnNsaWNlKC0gOCk7XG4gICAgICAgIGJpbmJ1ZiA9IGJpbmJ1ZiArIGJpbi5zdWJzdHIoMSwgNyk7XG4gICAgICAgIGlmIChiaW4uc3Vic3RyKDAsIDEpID09IFwiMFwiKSB7XG4gICAgICAgICAgICB2YXIgYmkgPSBuZXcgQmlnSW50ZWdlcihiaW5idWYsIDIpO1xuICAgICAgICAgICAgcyA9IHMgKyBcIi5cIiArIGJpLnRvU3RyaW5nKDEwKTtcbiAgICAgICAgICAgIGJpbmJ1ZiA9IFwiXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHM7XG59O1xuXG4vKipcbiAqIGdldCBoZXhhZGVjaW1hbCB2YWx1ZSBvZiBvYmplY3QgaWRlbnRpZmllciBmcm9tIGRvdCBub3RlZCBvaWQgdmFsdWVcbiAqIEBuYW1lIG9pZEludFRvSGV4XG4gKiBAbWVtYmVyT2YgS0pVUi5hc24xLkFTTjFVdGlsXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBvaWRTdHJpbmcgZG90IG5vdGVkIHN0cmluZyBvZiBvYmplY3QgaWRlbnRpZmllclxuICogQHJldHVybiB7U3RyaW5nfSBoZXhhZGVjaW1hbCB2YWx1ZSBvZiBvYmplY3QgaWRlbnRpZmllclxuICogQHNpbmNlIGpzcnNhc2lnbiA0LjguMyBhc24xIDEuMC43XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgc3RhdGljIG1ldGhvZCBjb252ZXJ0cyBmcm9tIG9iamVjdCBpZGVudGlmaWVyIHZhbHVlIHN0cmluZy5cbiAqIHRvIGhleGFkZWNpbWFsIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBpdC5cbiAqIEBleGFtcGxlXG4gKiBLSlVSLmFzbjEuQVNOMVV0aWwub2lkSW50VG9IZXgoXCIyLjUuNC42XCIpICZyYXJyOyBcIjU1MDQwNlwiXG4gKi9cbktKVVIuYXNuMS5BU04xVXRpbC5vaWRJbnRUb0hleCA9IGZ1bmN0aW9uKG9pZFN0cmluZykge1xuICAgIHZhciBpdG94ID0gZnVuY3Rpb24oaSkge1xuICAgICAgICB2YXIgaCA9IGkudG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoaC5sZW5ndGggPT0gMSkgaCA9ICcwJyArIGg7XG4gICAgICAgIHJldHVybiBoO1xuICAgIH07XG5cbiAgICB2YXIgcm9pZHRveCA9IGZ1bmN0aW9uKHJvaWQpIHtcbiAgICAgICAgdmFyIGggPSAnJztcbiAgICAgICAgdmFyIGJpID0gbmV3IEJpZ0ludGVnZXIocm9pZCwgMTApO1xuICAgICAgICB2YXIgYiA9IGJpLnRvU3RyaW5nKDIpO1xuICAgICAgICB2YXIgcGFkTGVuID0gNyAtIGIubGVuZ3RoICUgNztcbiAgICAgICAgaWYgKHBhZExlbiA9PSA3KSBwYWRMZW4gPSAwO1xuICAgICAgICB2YXIgYlBhZCA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhZExlbjsgaSsrKSBiUGFkICs9ICcwJztcbiAgICAgICAgYiA9IGJQYWQgKyBiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoIC0gMTsgaSArPSA3KSB7XG4gICAgICAgICAgICB2YXIgYjggPSBiLnN1YnN0cihpLCA3KTtcbiAgICAgICAgICAgIGlmIChpICE9IGIubGVuZ3RoIC0gNykgYjggPSAnMScgKyBiODtcbiAgICAgICAgICAgIGggKz0gaXRveChwYXJzZUludChiOCwgMikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoO1xuICAgIH07XG5cbiAgICBpZiAoISBvaWRTdHJpbmcubWF0Y2goL15bMC05Ll0rJC8pKSB7XG4gICAgICAgIHRocm93IFwibWFsZm9ybWVkIG9pZCBzdHJpbmc6IFwiICsgb2lkU3RyaW5nO1xuICAgIH1cbiAgICB2YXIgaCA9ICcnO1xuICAgIHZhciBhID0gb2lkU3RyaW5nLnNwbGl0KCcuJyk7XG4gICAgdmFyIGkwID0gcGFyc2VJbnQoYVswXSkgKiA0MCArIHBhcnNlSW50KGFbMV0pO1xuICAgIGggKz0gaXRveChpMCk7XG4gICAgYS5zcGxpY2UoMCwgMik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGggKz0gcm9pZHRveChhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGg7XG59O1xuXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgQWJzdHJhY3QgQVNOLjEgQ2xhc3Nlc1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLyoqXG4gKiBiYXNlIGNsYXNzIGZvciBBU04uMSBERVIgZW5jb2RlciBvYmplY3RcbiAqIEBuYW1lIEtKVVIuYXNuMS5BU04xT2JqZWN0XG4gKiBAY2xhc3MgYmFzZSBjbGFzcyBmb3IgQVNOLjEgREVSIGVuY29kZXIgb2JqZWN0XG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGlzTW9kaWZpZWQgZmxhZyB3aGV0aGVyIGludGVybmFsIGRhdGEgd2FzIGNoYW5nZWRcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBoVExWIGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04uMSBUTFZcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBoVCBoZXhhZGVjaW1hbCBzdHJpbmcgb2YgQVNOLjEgVExWIHRhZyhUKVxuICogQHByb3BlcnR5IHtTdHJpbmd9IGhMIGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04uMSBUTFYgbGVuZ3RoKEwpXG4gKiBAcHJvcGVydHkge1N0cmluZ30gaFYgaGV4YWRlY2ltYWwgc3RyaW5nIG9mIEFTTi4xIFRMViB2YWx1ZShWKVxuICogQGRlc2NyaXB0aW9uXG4gKi9cbktKVVIuYXNuMS5BU04xT2JqZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhWID0gJyc7XG5cbiAgICAvKipcbiAgICAgKiBnZXQgaGV4YWRlY2ltYWwgQVNOLjEgVExWIGxlbmd0aChMKSBieXRlcyBmcm9tIFRMViB2YWx1ZShWKVxuICAgICAqIEBuYW1lIGdldExlbmd0aEhleEZyb21WYWx1ZVxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuQVNOMU9iamVjdCNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04uMSBUTFYgbGVuZ3RoKEwpXG4gICAgICovXG4gICAgdGhpcy5nZXRMZW5ndGhIZXhGcm9tVmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmhWID09IFwidW5kZWZpbmVkXCIgfHwgdGhpcy5oViA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBcInRoaXMuaFYgaXMgbnVsbCBvciB1bmRlZmluZWQuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaFYubGVuZ3RoICUgMiA9PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBcInZhbHVlIGhleCBtdXN0IGJlIGV2ZW4gbGVuZ3RoOiBuPVwiICsgaFYubGVuZ3RoICsgXCIsdj1cIiArIHRoaXMuaFY7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG4gPSB0aGlzLmhWLmxlbmd0aCAvIDI7XG4gICAgICAgIHZhciBoTiA9IG4udG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoaE4ubGVuZ3RoICUgMiA9PSAxKSB7XG4gICAgICAgICAgICBoTiA9IFwiMFwiICsgaE47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG4gPCAxMjgpIHtcbiAgICAgICAgICAgIHJldHVybiBoTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBoTmxlbiA9IGhOLmxlbmd0aCAvIDI7XG4gICAgICAgICAgICBpZiAoaE5sZW4gPiAxNSkge1xuICAgICAgICAgICAgICAgIHRocm93IFwiQVNOLjEgbGVuZ3RoIHRvbyBsb25nIHRvIHJlcHJlc2VudCBieSA4eDogbiA9IFwiICsgbi50b1N0cmluZygxNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGVhZCA9IDEyOCArIGhObGVuO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWQudG9TdHJpbmcoMTYpICsgaE47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogZ2V0IGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04uMSBUTFYgYnl0ZXNcbiAgICAgKiBAbmFtZSBnZXRFbmNvZGVkSGV4XG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5BU04xT2JqZWN0I1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gaGV4YWRlY2ltYWwgc3RyaW5nIG9mIEFTTi4xIFRMVlxuICAgICAqL1xuICAgIHRoaXMuZ2V0RW5jb2RlZEhleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5oVExWID09IG51bGwgfHwgdGhpcy5pc01vZGlmaWVkKSB7XG4gICAgICAgICAgICB0aGlzLmhWID0gdGhpcy5nZXRGcmVzaFZhbHVlSGV4KCk7XG4gICAgICAgICAgICB0aGlzLmhMID0gdGhpcy5nZXRMZW5ndGhIZXhGcm9tVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuaFRMViA9IHRoaXMuaFQgKyB0aGlzLmhMICsgdGhpcy5oVjtcbiAgICAgICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IGZhbHNlO1xuICAgICAgICAgICAgLy9hbGVydChcImZpcnN0IHRpbWU6IFwiICsgdGhpcy5oVExWKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5oVExWO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBnZXQgaGV4YWRlY2ltYWwgc3RyaW5nIG9mIEFTTi4xIFRMViB2YWx1ZShWKSBieXRlc1xuICAgICAqIEBuYW1lIGdldFZhbHVlSGV4XG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5BU04xT2JqZWN0I1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gaGV4YWRlY2ltYWwgc3RyaW5nIG9mIEFTTi4xIFRMViB2YWx1ZShWKSBieXRlc1xuICAgICAqL1xuICAgIHRoaXMuZ2V0VmFsdWVIZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5nZXRFbmNvZGVkSGV4KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmhWO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEZyZXNoVmFsdWVIZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH07XG59O1xuXG4vLyA9PSBCRUdJTiBERVJBYnN0cmFjdFN0cmluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qKlxuICogYmFzZSBjbGFzcyBmb3IgQVNOLjEgREVSIHN0cmluZyBjbGFzc2VzXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmdcbiAqIEBjbGFzcyBiYXNlIGNsYXNzIGZvciBBU04uMSBERVIgc3RyaW5nIGNsYXNzZXNcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBhc3NvY2lhdGl2ZSBhcnJheSBvZiBwYXJhbWV0ZXJzIChleC4geydzdHInOiAnYWFhJ30pXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcyBpbnRlcm5hbCBzdHJpbmcgb2YgdmFsdWVcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5BU04xT2JqZWN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIDxici8+XG4gKiBBcyBmb3IgYXJndW1lbnQgJ3BhcmFtcycgZm9yIGNvbnN0cnVjdG9yLCB5b3UgY2FuIHNwZWNpZnkgb25lIG9mXG4gKiBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqIDx1bD5cbiAqIDxsaT5zdHIgLSBzcGVjaWZ5IGluaXRpYWwgQVNOLjEgdmFsdWUoVikgYnkgYSBzdHJpbmc8L2xpPlxuICogPGxpPmhleCAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBhIGhleGFkZWNpbWFsIHN0cmluZzwvbGk+XG4gKiA8L3VsPlxuICogTk9URTogJ3BhcmFtcycgY2FuIGJlIG9taXR0ZWQuXG4gKi9cbktKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZy5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBnZXQgc3RyaW5nIHZhbHVlIG9mIHRoaXMgc3RyaW5nIG9iamVjdFxuICAgICAqIEBuYW1lIGdldFN0cmluZ1xuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBzdHJpbmcgdmFsdWUgb2YgdGhpcyBzdHJpbmcgb2JqZWN0XG4gICAgICovXG4gICAgdGhpcy5nZXRTdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IGEgc3RyaW5nXG4gICAgICogQG5hbWUgc2V0U3RyaW5nXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmV3UyB2YWx1ZSBieSBhIHN0cmluZyB0byBzZXRcbiAgICAgKi9cbiAgICB0aGlzLnNldFN0cmluZyA9IGZ1bmN0aW9uKG5ld1MpIHtcbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zID0gbmV3UztcbiAgICAgICAgdGhpcy5oViA9IHN0b2hleCh0aGlzLnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgYnkgYSBoZXhhZGVjaW1hbCBzdHJpbmdcbiAgICAgKiBAbmFtZSBzZXRTdHJpbmdIZXhcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuZXdIZXhTdHJpbmcgdmFsdWUgYnkgYSBoZXhhZGVjaW1hbCBzdHJpbmcgdG8gc2V0XG4gICAgICovXG4gICAgdGhpcy5zZXRTdHJpbmdIZXggPSBmdW5jdGlvbihuZXdIZXhTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zID0gbnVsbDtcbiAgICAgICAgdGhpcy5oViA9IG5ld0hleFN0cmluZztcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRGcmVzaFZhbHVlSGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhWO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHBhcmFtcyAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5nKHBhcmFtcyk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1snc3RyJ10gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmcocGFyYW1zWydzdHInXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1snaGV4J10gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmdIZXgocGFyYW1zWydoZXgnXSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nLCBLSlVSLmFzbjEuQVNOMU9iamVjdCk7XG4vLyA9PSBFTkQgICBERVJBYnN0cmFjdFN0cmluZyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gPT0gQkVHSU4gREVSQWJzdHJhY3RUaW1lID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIGJhc2UgY2xhc3MgZm9yIEFTTi4xIERFUiBHZW5lcmFsaXplZC9VVENUaW1lIGNsYXNzXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSQWJzdHJhY3RUaW1lXG4gKiBAY2xhc3MgYmFzZSBjbGFzcyBmb3IgQVNOLjEgREVSIEdlbmVyYWxpemVkL1VUQ1RpbWUgY2xhc3NcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBhc3NvY2lhdGl2ZSBhcnJheSBvZiBwYXJhbWV0ZXJzIChleC4geydzdHInOiAnMTMwNDMwMjM1OTU5Wid9KVxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogQHNlZSBLSlVSLmFzbjEuQVNOMU9iamVjdCAtIHN1cGVyY2xhc3NcbiAqL1xuS0pVUi5hc24xLkRFUkFic3RyYWN0VGltZSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFRpbWUuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuXG4gICAgLy8gLS0tIFBSSVZBVEUgTUVUSE9EUyAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMubG9jYWxEYXRlVG9VVEMgPSBmdW5jdGlvbihkKSB7XG4gICAgICAgIHV0YyA9IGQuZ2V0VGltZSgpICsgKGQuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwKTtcbiAgICAgICAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZSh1dGMpO1xuICAgICAgICByZXR1cm4gdXRjRGF0ZTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBmb3JtYXQgZGF0ZSBzdHJpbmcgYnkgRGF0YSBvYmplY3RcbiAgICAgKiBAbmFtZSBmb3JtYXREYXRlXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5BYnN0cmFjdFRpbWU7XG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgJ3V0Yycgb3IgJ2dlbidcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHdpdGhNaWxsaXMgZmxhZyBmb3Igd2l0aCBtaWxsaXNlY3Rpb25zIG9yIG5vdFxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqICd3aXRoTWlsbGlzJyBmbGFnIGlzIHN1cHBvcnRlZCBmcm9tIGFzbjEgMS4wLjYuXG4gICAgICovXG4gICAgdGhpcy5mb3JtYXREYXRlID0gZnVuY3Rpb24oZGF0ZU9iamVjdCwgdHlwZSwgd2l0aE1pbGxpcykge1xuICAgICAgICB2YXIgcGFkID0gdGhpcy56ZXJvUGFkZGluZztcbiAgICAgICAgdmFyIGQgPSB0aGlzLmxvY2FsRGF0ZVRvVVRDKGRhdGVPYmplY3QpO1xuICAgICAgICB2YXIgeWVhciA9IFN0cmluZyhkLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICBpZiAodHlwZSA9PSAndXRjJykgeWVhciA9IHllYXIuc3Vic3RyKDIsIDIpO1xuICAgICAgICB2YXIgbW9udGggPSBwYWQoU3RyaW5nKGQuZ2V0TW9udGgoKSArIDEpLCAyKTtcbiAgICAgICAgdmFyIGRheSA9IHBhZChTdHJpbmcoZC5nZXREYXRlKCkpLCAyKTtcbiAgICAgICAgdmFyIGhvdXIgPSBwYWQoU3RyaW5nKGQuZ2V0SG91cnMoKSksIDIpO1xuICAgICAgICB2YXIgbWluID0gcGFkKFN0cmluZyhkLmdldE1pbnV0ZXMoKSksIDIpO1xuICAgICAgICB2YXIgc2VjID0gcGFkKFN0cmluZyhkLmdldFNlY29uZHMoKSksIDIpO1xuICAgICAgICB2YXIgcyA9IHllYXIgKyBtb250aCArIGRheSArIGhvdXIgKyBtaW4gKyBzZWM7XG4gICAgICAgIGlmICh3aXRoTWlsbGlzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB2YXIgbWlsbGlzID0gZC5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICAgICAgICAgIGlmIChtaWxsaXMgIT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzTWlsbGlzID0gcGFkKFN0cmluZyhtaWxsaXMpLCAzKTtcbiAgICAgICAgICAgICAgICBzTWlsbGlzID0gc01pbGxpcy5yZXBsYWNlKC9bMF0rJC8sIFwiXCIpO1xuICAgICAgICAgICAgICAgIHMgPSBzICsgXCIuXCIgKyBzTWlsbGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzICsgXCJaXCI7XG4gICAgfTtcblxuICAgIHRoaXMuemVyb1BhZGRpbmcgPSBmdW5jdGlvbihzLCBsZW4pIHtcbiAgICAgICAgaWYgKHMubGVuZ3RoID49IGxlbikgcmV0dXJuIHM7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkobGVuIC0gcy5sZW5ndGggKyAxKS5qb2luKCcwJykgKyBzO1xuICAgIH07XG5cbiAgICAvLyAtLS0gUFVCTElDIE1FVEhPRFMgLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvKipcbiAgICAgKiBnZXQgc3RyaW5nIHZhbHVlIG9mIHRoaXMgc3RyaW5nIG9iamVjdFxuICAgICAqIEBuYW1lIGdldFN0cmluZ1xuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSQWJzdHJhY3RUaW1lI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gc3RyaW5nIHZhbHVlIG9mIHRoaXMgdGltZSBvYmplY3RcbiAgICAgKi9cbiAgICB0aGlzLmdldFN0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgYnkgYSBzdHJpbmdcbiAgICAgKiBAbmFtZSBzZXRTdHJpbmdcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkFic3RyYWN0VGltZSNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmV3UyB2YWx1ZSBieSBhIHN0cmluZyB0byBzZXQgc3VjaCBsaWtlIFwiMTMwNDMwMjM1OTU5WlwiXG4gICAgICovXG4gICAgdGhpcy5zZXRTdHJpbmcgPSBmdW5jdGlvbihuZXdTKSB7XG4gICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIHRoaXMucyA9IG5ld1M7XG4gICAgICAgIHRoaXMuaFYgPSBzdG9oZXgobmV3Uyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBhIERhdGUgb2JqZWN0XG4gICAgICogQG5hbWUgc2V0QnlEYXRlVmFsdWVcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkFic3RyYWN0VGltZSNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IHllYXIgeWVhciBvZiBkYXRlIChleC4gMjAxMylcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IG1vbnRoIG1vbnRoIG9mIGRhdGUgYmV0d2VlbiAxIGFuZCAxMiAoZXguIDEyKVxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gZGF5IGRheSBvZiBtb250aFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gaG91ciBob3VycyBvZiBkYXRlXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBtaW4gbWludXRlcyBvZiBkYXRlXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBzZWMgc2Vjb25kcyBvZiBkYXRlXG4gICAgICovXG4gICAgdGhpcy5zZXRCeURhdGVWYWx1ZSA9IGZ1bmN0aW9uKHllYXIsIG1vbnRoLCBkYXksIGhvdXIsIG1pbiwgc2VjKSB7XG4gICAgICAgIHZhciBkYXRlT2JqZWN0ID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGggLSAxLCBkYXksIGhvdXIsIG1pbiwgc2VjLCAwKSk7XG4gICAgICAgIHRoaXMuc2V0QnlEYXRlKGRhdGVPYmplY3QpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEZyZXNoVmFsdWVIZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSQWJzdHJhY3RUaW1lLCBLSlVSLmFzbjEuQVNOMU9iamVjdCk7XG4vLyA9PSBFTkQgICBERVJBYnN0cmFjdFRpbWUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gPT0gQkVHSU4gREVSQWJzdHJhY3RTdHJ1Y3R1cmVkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIGJhc2UgY2xhc3MgZm9yIEFTTi4xIERFUiBzdHJ1Y3R1cmVkIGNsYXNzXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJ1Y3R1cmVkXG4gKiBAY2xhc3MgYmFzZSBjbGFzcyBmb3IgQVNOLjEgREVSIHN0cnVjdHVyZWQgY2xhc3NcbiAqIEBwcm9wZXJ0eSB7QXJyYXl9IGFzbjFBcnJheSBpbnRlcm5hbCBhcnJheSBvZiBBU04xT2JqZWN0XG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuQVNOMU9iamVjdFxuICogQGRlc2NyaXB0aW9uXG4gKiBAc2VlIEtKVVIuYXNuMS5BU04xT2JqZWN0IC0gc3VwZXJjbGFzc1xuICovXG5LSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJ1Y3R1cmVkID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBhcnJheSBvZiBBU04xT2JqZWN0XG4gICAgICogQG5hbWUgc2V0QnlBU04xT2JqZWN0QXJyYXlcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RydWN0dXJlZCNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhc24xT2JqZWN0QXJyYXkgYXJyYXkgb2YgQVNOMU9iamVjdCB0byBzZXRcbiAgICAgKi9cbiAgICB0aGlzLnNldEJ5QVNOMU9iamVjdEFycmF5ID0gZnVuY3Rpb24oYXNuMU9iamVjdEFycmF5KSB7XG4gICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYXNuMUFycmF5ID0gYXNuMU9iamVjdEFycmF5O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBhcHBlbmQgYW4gQVNOMU9iamVjdCB0byBpbnRlcm5hbCBhcnJheVxuICAgICAqIEBuYW1lIGFwcGVuZEFTTjFPYmplY3RcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RydWN0dXJlZCNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0FTTjFPYmplY3R9IGFzbjFPYmplY3QgdG8gYWRkXG4gICAgICovXG4gICAgdGhpcy5hcHBlbmRBU04xT2JqZWN0ID0gZnVuY3Rpb24oYXNuMU9iamVjdCkge1xuICAgICAgICB0aGlzLmhUTFYgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmFzbjFBcnJheS5wdXNoKGFzbjFPYmplY3QpO1xuICAgIH07XG5cbiAgICB0aGlzLmFzbjFBcnJheSA9IG5ldyBBcnJheSgpO1xuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbJ2FycmF5J10gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hc24xQXJyYXkgPSBwYXJhbXNbJ2FycmF5J107XG4gICAgICAgIH1cbiAgICB9XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUkFic3RyYWN0U3RydWN0dXJlZCwgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAgQVNOLjEgT2JqZWN0IENsYXNzZXNcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIGNsYXNzIGZvciBBU04uMSBERVIgQm9vbGVhblxuICogQG5hbWUgS0pVUi5hc24xLkRFUkJvb2xlYW5cbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIEJvb2xlYW5cbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5BU04xT2JqZWN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIEBzZWUgS0pVUi5hc24xLkFTTjFPYmplY3QgLSBzdXBlcmNsYXNzXG4gKi9cbktKVVIuYXNuMS5ERVJCb29sZWFuID0gZnVuY3Rpb24oKSB7XG4gICAgS0pVUi5hc24xLkRFUkJvb2xlYW4uc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaFQgPSBcIjAxXCI7XG4gICAgdGhpcy5oVExWID0gXCIwMTAxZmZcIjtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSQm9vbGVhbiwgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBjbGFzcyBmb3IgQVNOLjEgREVSIEludGVnZXJcbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJJbnRlZ2VyXG4gKiBAY2xhc3MgY2xhc3MgZm9yIEFTTi4xIERFUiBJbnRlZ2VyXG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuQVNOMU9iamVjdFxuICogQGRlc2NyaXB0aW9uXG4gKiA8YnIvPlxuICogQXMgZm9yIGFyZ3VtZW50ICdwYXJhbXMnIGZvciBjb25zdHJ1Y3RvciwgeW91IGNhbiBzcGVjaWZ5IG9uZSBvZlxuICogZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiA8dWw+XG4gKiA8bGk+aW50IC0gc3BlY2lmeSBpbml0aWFsIEFTTi4xIHZhbHVlKFYpIGJ5IGludGVnZXIgdmFsdWU8L2xpPlxuICogPGxpPmJpZ2ludCAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBCaWdJbnRlZ2VyIG9iamVjdDwvbGk+XG4gKiA8bGk+aGV4IC0gc3BlY2lmeSBpbml0aWFsIEFTTi4xIHZhbHVlKFYpIGJ5IGEgaGV4YWRlY2ltYWwgc3RyaW5nPC9saT5cbiAqIDwvdWw+XG4gKiBOT1RFOiAncGFyYW1zJyBjYW4gYmUgb21pdHRlZC5cbiAqL1xuS0pVUi5hc24xLkRFUkludGVnZXIgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICBLSlVSLmFzbjEuREVSSW50ZWdlci5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gICAgdGhpcy5oVCA9IFwiMDJcIjtcblxuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBUb20gV3UncyBCaWdJbnRlZ2VyIG9iamVjdFxuICAgICAqIEBuYW1lIHNldEJ5QmlnSW50ZWdlclxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSSW50ZWdlciNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0JpZ0ludGVnZXJ9IGJpZ0ludGVnZXJWYWx1ZSB0byBzZXRcbiAgICAgKi9cbiAgICB0aGlzLnNldEJ5QmlnSW50ZWdlciA9IGZ1bmN0aW9uKGJpZ0ludGVnZXJWYWx1ZSkge1xuICAgICAgICB0aGlzLmhUTFYgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhWID0gS0pVUi5hc24xLkFTTjFVdGlsLmJpZ0ludFRvTWluVHdvc0NvbXBsZW1lbnRzSGV4KGJpZ0ludGVnZXJWYWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBpbnRlZ2VyIHZhbHVlXG4gICAgICogQG5hbWUgc2V0QnlJbnRlZ2VyXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJJbnRlZ2VyXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBpbnRlZ2VyIHZhbHVlIHRvIHNldFxuICAgICAqL1xuICAgIHRoaXMuc2V0QnlJbnRlZ2VyID0gZnVuY3Rpb24oaW50VmFsdWUpIHtcbiAgICAgICAgdmFyIGJpID0gbmV3IEJpZ0ludGVnZXIoU3RyaW5nKGludFZhbHVlKSwgMTApO1xuICAgICAgICB0aGlzLnNldEJ5QmlnSW50ZWdlcihiaSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBpbnRlZ2VyIHZhbHVlXG4gICAgICogQG5hbWUgc2V0VmFsdWVIZXhcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkludGVnZXIjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhleGFkZWNpbWFsIHN0cmluZyBvZiBpbnRlZ2VyIHZhbHVlXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogPGJyLz5cbiAgICAgKiBOT1RFOiBWYWx1ZSBzaGFsbCBiZSByZXByZXNlbnRlZCBieSBtaW5pbXVtIG9jdGV0IGxlbmd0aCBvZlxuICAgICAqIHR3bydzIGNvbXBsZW1lbnQgcmVwcmVzZW50YXRpb24uXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoMTIzKTtcbiAgICAgKiBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeydpbnQnOiAxMjN9KTtcbiAgICAgKiBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeydoZXgnOiAnMWZhZCd9KTtcbiAgICAgKi9cbiAgICB0aGlzLnNldFZhbHVlSGV4ID0gZnVuY3Rpb24obmV3SGV4U3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaFYgPSBuZXdIZXhTdHJpbmc7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0RnJlc2hWYWx1ZUhleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oVjtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1snYmlnaW50J10gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRCeUJpZ0ludGVnZXIocGFyYW1zWydiaWdpbnQnXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1snaW50J10gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRCeUludGVnZXIocGFyYW1zWydpbnQnXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtcyA9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJ5SW50ZWdlcihwYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNbJ2hleCddICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVIZXgocGFyYW1zWydoZXgnXSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUkludGVnZXIsIEtKVVIuYXNuMS5BU04xT2JqZWN0KTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBlbmNvZGVkIEJpdFN0cmluZyBwcmltaXRpdmVcbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJCaXRTdHJpbmdcbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIGVuY29kZWQgQml0U3RyaW5nIHByaW1pdGl2ZVxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPmJpbiAtIHNwZWNpZnkgYmluYXJ5IHN0cmluZyAoZXguICcxMDExMScpPC9saT5cbiAqIDxsaT5hcnJheSAtIHNwZWNpZnkgYXJyYXkgb2YgYm9vbGVhbiAoZXguIFt0cnVlLGZhbHNlLHRydWUsdHJ1ZV0pPC9saT5cbiAqIDxsaT5oZXggLSBzcGVjaWZ5IGhleGFkZWNpbWFsIHN0cmluZyBvZiBBU04uMSB2YWx1ZShWKSBpbmNsdWRpbmcgdW51c2VkIGJpdHM8L2xpPlxuICogPGxpPm9iaiAtIHNwZWNpZnkge0BsaW5rIEtKVVIuYXNuMS5BU04xVXRpbC5uZXdPYmplY3R9XG4gKiBhcmd1bWVudCBmb3IgXCJCaXRTdHJpbmcgZW5jYXBzdWxhdGVzXCIgc3RydWN0dXJlLjwvbGk+XG4gKiA8L3VsPlxuICogTk9URTE6ICdwYXJhbXMnIGNhbiBiZSBvbWl0dGVkLjxici8+XG4gKiBOT1RFMjogJ29iaicgcGFyYW1ldGVyIGhhdmUgYmVlbiBzdXBwb3J0ZWQgc2luY2VcbiAqIGFzbjEgMS4wLjExLCBqc3JzYXNpZ24gNi4xLjEgKDIwMTYtU2VwLTI1KS48YnIvPlxuICogQGV4YW1wbGVcbiAqIC8vIGRlZmF1bHQgY29uc3RydWN0b3JcbiAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUkJpdFN0cmluZygpO1xuICogLy8gaW5pdGlhbGl6ZSB3aXRoIGJpbmFyeSBzdHJpbmdcbiAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUkJpdFN0cmluZyh7YmluOiBcIjEwMTFcIn0pO1xuICogLy8gaW5pdGlhbGl6ZSB3aXRoIGJvb2xlYW4gYXJyYXlcbiAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUkJpdFN0cmluZyh7YXJyYXk6IFt0cnVlLGZhbHNlLHRydWUsdHJ1ZV19KTtcbiAqIC8vIGluaXRpYWxpemUgd2l0aCBoZXhhZGVjaW1hbCBzdHJpbmcgKDA0IGlzIHVudXNlZCBiaXRzKVxuICogbyA9IG5ldyBLSlVSLmFzbjEuREVST2N0ZXRTdHJpbmcoe2hleDogXCIwNGJhYzBcIn0pO1xuICogLy8gaW5pdGlhbGl6ZSB3aXRoIEFTTjFVdGlsLm5ld09iamVjdCBhcmd1bWVudCBmb3IgZW5jYXBzdWxhdGVkXG4gKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJCaXRTdHJpbmcoe29iajoge3NlcTogW3tpbnQ6IDN9LCB7cHJuc3RyOiAnYWFhJ31dfX0pO1xuICogLy8gYWJvdmUgZ2VuZXJhdGVzIGEgQVNOLjEgZGF0YSBsaWtlIHRoaXM6XG4gKiAvLyBCSVQgU1RSSU5HLCBlbmNhcHN1bGF0ZXMge1xuICogLy8gICBTRVFVRU5DRSB7XG4gKiAvLyAgICAgSU5URUdFUiAzXG4gKiAvLyAgICAgUHJpbnRhYmxlU3RyaW5nICdhYWEnXG4gKiAvLyAgICAgfVxuICogLy8gICB9XG4gKi9cbktKVVIuYXNuMS5ERVJCaXRTdHJpbmcgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBhcmFtcy5vYmogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIG8gPSBLSlVSLmFzbjEuQVNOMVV0aWwubmV3T2JqZWN0KHBhcmFtcy5vYmopO1xuICAgICAgICBwYXJhbXMuaGV4ID0gXCIwMFwiICsgby5nZXRFbmNvZGVkSGV4KCk7XG4gICAgfVxuICAgIEtKVVIuYXNuMS5ERVJCaXRTdHJpbmcuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaFQgPSBcIjAzXCI7XG5cbiAgICAvKipcbiAgICAgKiBzZXQgQVNOLjEgdmFsdWUoVikgYnkgYSBoZXhhZGVjaW1hbCBzdHJpbmcgaW5jbHVkaW5nIHVudXNlZCBiaXRzXG4gICAgICogQG5hbWUgc2V0SGV4VmFsdWVJbmNsdWRpbmdVbnVzZWRCaXRzXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJCaXRTdHJpbmcjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5ld0hleFN0cmluZ0luY2x1ZGluZ1VudXNlZEJpdHNcbiAgICAgKi9cbiAgICB0aGlzLnNldEhleFZhbHVlSW5jbHVkaW5nVW51c2VkQml0cyA9IGZ1bmN0aW9uKG5ld0hleFN0cmluZ0luY2x1ZGluZ1VudXNlZEJpdHMpIHtcbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oViA9IG5ld0hleFN0cmluZ0luY2x1ZGluZ1VudXNlZEJpdHM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNldCBBU04uMSB2YWx1ZShWKSBieSB1bnVzZWQgYml0IGFuZCBoZXhhZGVjaW1hbCBzdHJpbmcgb2YgdmFsdWVcbiAgICAgKiBAbmFtZSBzZXRVbnVzZWRCaXRzQW5kSGV4VmFsdWVcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkJpdFN0cmluZyNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IHVudXNlZEJpdHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaFZhbHVlXG4gICAgICovXG4gICAgdGhpcy5zZXRVbnVzZWRCaXRzQW5kSGV4VmFsdWUgPSBmdW5jdGlvbih1bnVzZWRCaXRzLCBoVmFsdWUpIHtcbiAgICAgICAgaWYgKHVudXNlZEJpdHMgPCAwIHx8IDcgPCB1bnVzZWRCaXRzKSB7XG4gICAgICAgICAgICB0aHJvdyBcInVudXNlZCBiaXRzIHNoYWxsIGJlIGZyb20gMCB0byA3OiB1ID0gXCIgKyB1bnVzZWRCaXRzO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoVW51c2VkQml0cyA9IFwiMFwiICsgdW51c2VkQml0cztcbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oViA9IGhVbnVzZWRCaXRzICsgaFZhbHVlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzZXQgQVNOLjEgREVSIEJpdFN0cmluZyBieSBiaW5hcnkgc3RyaW5nPGJyLz5cbiAgICAgKiBAbmFtZSBzZXRCeUJpbmFyeVN0cmluZ1xuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSQml0U3RyaW5nI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBiaW5hcnlTdHJpbmcgYmluYXJ5IHZhbHVlIHN0cmluZyAoaS5lLiAnMTAxMTEnKVxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIEl0cyB1bnVzZWQgYml0cyB3aWxsIGJlIGNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBieSBsZW5ndGggb2ZcbiAgICAgKiAnYmluYXJ5VmFsdWUnLiA8YnIvPlxuICAgICAqIE5PVEU6IFRyYWlsaW5nIHplcm9zICcwJyB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJCaXRTdHJpbmcoKTtcbiAgICAgKiBvLnNldEJ5Qm9vbGVhbkFycmF5KFwiMDEwMTFcIik7XG4gICAgICovXG4gICAgdGhpcy5zZXRCeUJpbmFyeVN0cmluZyA9IGZ1bmN0aW9uKGJpbmFyeVN0cmluZykge1xuICAgICAgICBiaW5hcnlTdHJpbmcgPSBiaW5hcnlTdHJpbmcucmVwbGFjZSgvMCskLywgJycpO1xuICAgICAgICB2YXIgdW51c2VkQml0cyA9IDggLSBiaW5hcnlTdHJpbmcubGVuZ3RoICUgODtcbiAgICAgICAgaWYgKHVudXNlZEJpdHMgPT0gOCkgdW51c2VkQml0cyA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IHVudXNlZEJpdHM7IGkrKykge1xuICAgICAgICAgICAgYmluYXJ5U3RyaW5nICs9ICcwJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgaCA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbmFyeVN0cmluZy5sZW5ndGggLSAxOyBpICs9IDgpIHtcbiAgICAgICAgICAgIHZhciBiID0gYmluYXJ5U3RyaW5nLnN1YnN0cihpLCA4KTtcbiAgICAgICAgICAgIHZhciB4ID0gcGFyc2VJbnQoYiwgMikudG9TdHJpbmcoMTYpO1xuICAgICAgICAgICAgaWYgKHgubGVuZ3RoID09IDEpIHggPSAnMCcgKyB4O1xuICAgICAgICAgICAgaCArPSB4O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaFYgPSAnMCcgKyB1bnVzZWRCaXRzICsgaDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogc2V0IEFTTi4xIFRMViB2YWx1ZShWKSBieSBhbiBhcnJheSBvZiBib29sZWFuPGJyLz5cbiAgICAgKiBAbmFtZSBzZXRCeUJvb2xlYW5BcnJheVxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVSQml0U3RyaW5nI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGJvb2xlYW5BcnJheSBhcnJheSBvZiBib29sZWFuIChleC4gW3RydWUsIGZhbHNlLCB0cnVlXSlcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBOT1RFOiBUcmFpbGluZyBmYWxzZXMgd2lsbCBiZSBpZ25vcmVkIGluIHRoZSBBU04uMSBERVIgT2JqZWN0LlxuICAgICAqIEBleGFtcGxlXG4gICAgICogbyA9IG5ldyBLSlVSLmFzbjEuREVSQml0U3RyaW5nKCk7XG4gICAgICogby5zZXRCeUJvb2xlYW5BcnJheShbZmFsc2UsIHRydWUsIGZhbHNlLCB0cnVlLCB0cnVlXSk7XG4gICAgICovXG4gICAgdGhpcy5zZXRCeUJvb2xlYW5BcnJheSA9IGZ1bmN0aW9uKGJvb2xlYW5BcnJheSkge1xuICAgICAgICB2YXIgcyA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvb2xlYW5BcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJvb2xlYW5BcnJheVtpXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcyArPSAnMSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHMgKz0gJzAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QnlCaW5hcnlTdHJpbmcocyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGdlbmVyYXRlIGFuIGFycmF5IG9mIGZhbHNlcyB3aXRoIHNwZWNpZmllZCBsZW5ndGg8YnIvPlxuICAgICAqIEBuYW1lIG5ld0ZhbHNlQXJyYXlcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkJpdFN0cmluZ1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gbkxlbmd0aCBsZW5ndGggb2YgYXJyYXkgdG8gZ2VuZXJhdGVcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gYXJyYXkgb2YgYm9vbGVhbiBmYWxzZXNcbiAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgKiBUaGlzIHN0YXRpYyBtZXRob2QgbWF5IGJlIHVzZWZ1bCB0byBpbml0aWFsaXplIGJvb2xlYW4gYXJyYXkuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJCaXRTdHJpbmcoKTtcbiAgICAgKiBvLm5ld0ZhbHNlQXJyYXkoMykgJnJhcnI7IFtmYWxzZSwgZmFsc2UsIGZhbHNlXVxuICAgICAqL1xuICAgIHRoaXMubmV3RmFsc2VBcnJheSA9IGZ1bmN0aW9uKG5MZW5ndGgpIHtcbiAgICAgICAgdmFyIGEgPSBuZXcgQXJyYXkobkxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhW2ldID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGE7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0RnJlc2hWYWx1ZUhleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oVjtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcyA9PSBcInN0cmluZ1wiICYmIHBhcmFtcy50b0xvd2VyQ2FzZSgpLm1hdGNoKC9eWzAtOWEtZl0rJC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldEhleFZhbHVlSW5jbHVkaW5nVW51c2VkQml0cyhwYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNbJ2hleCddICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0SGV4VmFsdWVJbmNsdWRpbmdVbnVzZWRCaXRzKHBhcmFtc1snaGV4J10pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXNbJ2JpbiddICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QnlCaW5hcnlTdHJpbmcocGFyYW1zWydiaW4nXSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmFtc1snYXJyYXknXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJ5Qm9vbGVhbkFycmF5KHBhcmFtc1snYXJyYXknXSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUkJpdFN0cmluZywgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBjbGFzcyBmb3IgQVNOLjEgREVSIE9jdGV0U3RyaW5nPGJyLz5cbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJPY3RldFN0cmluZ1xuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgT2N0ZXRTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBhc3NvY2lhdGl2ZSBhcnJheSBvZiBwYXJhbWV0ZXJzIChleC4geydzdHInOiAnYWFhJ30pXG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBjbGFzcyBwcm92aWRlcyBBU04uMSBPY3RldFN0cmluZyBzaW1wbGUgdHlwZS48YnIvPlxuICogU3VwcG9ydGVkIFwicGFyYW1zXCIgYXR0cmlidXRlcyBhcmU6XG4gKiA8dWw+XG4gKiA8bGk+c3RyIC0gdG8gc2V0IGEgc3RyaW5nIGFzIGEgdmFsdWU8L2xpPlxuICogPGxpPmhleCAtIHRvIHNldCBhIGhleGFkZWNpbWFsIHN0cmluZyBhcyBhIHZhbHVlPC9saT5cbiAqIDxsaT5vYmogLSB0byBzZXQgYSBlbmNhcHN1bGF0ZWQgQVNOLjEgdmFsdWUgYnkgSlNPTiBvYmplY3RcbiAqIHdoaWNoIGlzIGRlZmluZWQgaW4ge0BsaW5rIEtKVVIuYXNuMS5BU04xVXRpbC5uZXdPYmplY3R9PC9saT5cbiAqIDwvdWw+XG4gKiBOT1RFOiBBIHBhcmFtZXRlciAnb2JqJyBoYXZlIGJlZW4gc3VwcG9ydGVkXG4gKiBmb3IgXCJPQ1RFVCBTVFJJTkcsIGVuY2Fwc3VsYXRlc1wiIHN0cnVjdHVyZS5cbiAqIHNpbmNlIGFzbjEgMS4wLjExLCBqc3JzYXNpZ24gNi4xLjEgKDIwMTYtU2VwLTI1KS5cbiAqIEBzZWUgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nIC0gc3VwZXJjbGFzc1xuICogQGV4YW1wbGVcbiAqIC8vIGRlZmF1bHQgY29uc3RydWN0b3JcbiAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUk9jdGV0U3RyaW5nKCk7XG4gKiAvLyBpbml0aWFsaXplIHdpdGggc3RyaW5nXG4gKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJPY3RldFN0cmluZyh7c3RyOiBcImFhYVwifSk7XG4gKiAvLyBpbml0aWFsaXplIHdpdGggaGV4YWRlY2ltYWwgc3RyaW5nXG4gKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJPY3RldFN0cmluZyh7aGV4OiBcIjYxNjE2MVwifSk7XG4gKiAvLyBpbml0aWFsaXplIHdpdGggQVNOMVV0aWwubmV3T2JqZWN0IGFyZ3VtZW50XG4gKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJPY3RldFN0cmluZyh7b2JqOiB7c2VxOiBbe2ludDogM30sIHtwcm5zdHI6ICdhYWEnfV19fSk7XG4gKiAvLyBhYm92ZSBnZW5lcmF0ZXMgYSBBU04uMSBkYXRhIGxpa2UgdGhpczpcbiAqIC8vIE9DVEVUIFNUUklORywgZW5jYXBzdWxhdGVzIHtcbiAqIC8vICAgU0VRVUVOQ0Uge1xuICogLy8gICAgIElOVEVHRVIgM1xuICogLy8gICAgIFByaW50YWJsZVN0cmluZyAnYWFhJ1xuICogLy8gICAgIH1cbiAqIC8vICAgfVxuICovXG5LSlVSLmFzbjEuREVST2N0ZXRTdHJpbmcgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHBhcmFtcy5vYmogIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgdmFyIG8gPSBLSlVSLmFzbjEuQVNOMVV0aWwubmV3T2JqZWN0KHBhcmFtcy5vYmopO1xuICAgICAgICBwYXJhbXMuaGV4ID0gby5nZXRFbmNvZGVkSGV4KCk7XG4gICAgfVxuICAgIEtKVVIuYXNuMS5ERVJPY3RldFN0cmluZy5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyYW1zKTtcbiAgICB0aGlzLmhUID0gXCIwNFwiO1xufTtcbllBSE9PLmxhbmcuZXh0ZW5kKEtKVVIuYXNuMS5ERVJPY3RldFN0cmluZywgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nKTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBOdWxsXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSTnVsbFxuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgTnVsbFxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogQHNlZSBLSlVSLmFzbjEuQVNOMU9iamVjdCAtIHN1cGVyY2xhc3NcbiAqL1xuS0pVUi5hc24xLkRFUk51bGwgPSBmdW5jdGlvbigpIHtcbiAgICBLSlVSLmFzbjEuREVSTnVsbC5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gICAgdGhpcy5oVCA9IFwiMDVcIjtcbiAgICB0aGlzLmhUTFYgPSBcIjA1MDBcIjtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSTnVsbCwgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBjbGFzcyBmb3IgQVNOLjEgREVSIE9iamVjdElkZW50aWZpZXJcbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJPYmplY3RJZGVudGlmaWVyXG4gKiBAY2xhc3MgY2xhc3MgZm9yIEFTTi4xIERFUiBPYmplY3RJZGVudGlmaWVyXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgYXNzb2NpYXRpdmUgYXJyYXkgb2YgcGFyYW1ldGVycyAoZXguIHsnb2lkJzogJzIuNS40LjUnfSlcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5BU04xT2JqZWN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIDxici8+XG4gKiBBcyBmb3IgYXJndW1lbnQgJ3BhcmFtcycgZm9yIGNvbnN0cnVjdG9yLCB5b3UgY2FuIHNwZWNpZnkgb25lIG9mXG4gKiBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqIDx1bD5cbiAqIDxsaT5vaWQgLSBzcGVjaWZ5IGluaXRpYWwgQVNOLjEgdmFsdWUoVikgYnkgYSBvaWQgc3RyaW5nIChleC4gMi41LjQuMTMpPC9saT5cbiAqIDxsaT5oZXggLSBzcGVjaWZ5IGluaXRpYWwgQVNOLjEgdmFsdWUoVikgYnkgYSBoZXhhZGVjaW1hbCBzdHJpbmc8L2xpPlxuICogPC91bD5cbiAqIE5PVEU6ICdwYXJhbXMnIGNhbiBiZSBvbWl0dGVkLlxuICovXG5LSlVSLmFzbjEuREVST2JqZWN0SWRlbnRpZmllciA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIHZhciBpdG94ID0gZnVuY3Rpb24oaSkge1xuICAgICAgICB2YXIgaCA9IGkudG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoaC5sZW5ndGggPT0gMSkgaCA9ICcwJyArIGg7XG4gICAgICAgIHJldHVybiBoO1xuICAgIH07XG4gICAgdmFyIHJvaWR0b3ggPSBmdW5jdGlvbihyb2lkKSB7XG4gICAgICAgIHZhciBoID0gJyc7XG4gICAgICAgIHZhciBiaSA9IG5ldyBCaWdJbnRlZ2VyKHJvaWQsIDEwKTtcbiAgICAgICAgdmFyIGIgPSBiaS50b1N0cmluZygyKTtcbiAgICAgICAgdmFyIHBhZExlbiA9IDcgLSBiLmxlbmd0aCAlIDc7XG4gICAgICAgIGlmIChwYWRMZW4gPT0gNykgcGFkTGVuID0gMDtcbiAgICAgICAgdmFyIGJQYWQgPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWRMZW47IGkrKykgYlBhZCArPSAnMCc7XG4gICAgICAgIGIgPSBiUGFkICsgYjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aCAtIDE7IGkgKz0gNykge1xuICAgICAgICAgICAgdmFyIGI4ID0gYi5zdWJzdHIoaSwgNyk7XG4gICAgICAgICAgICBpZiAoaSAhPSBiLmxlbmd0aCAtIDcpIGI4ID0gJzEnICsgYjg7XG4gICAgICAgICAgICBoICs9IGl0b3gocGFyc2VJbnQoYjgsIDIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaDtcbiAgICB9O1xuXG4gICAgS0pVUi5hc24xLkRFUk9iamVjdElkZW50aWZpZXIuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICAgIHRoaXMuaFQgPSBcIjA2XCI7XG5cbiAgICAvKipcbiAgICAgKiBzZXQgdmFsdWUgYnkgYSBoZXhhZGVjaW1hbCBzdHJpbmdcbiAgICAgKiBAbmFtZSBzZXRWYWx1ZUhleFxuICAgICAqIEBtZW1iZXJPZiBLSlVSLmFzbjEuREVST2JqZWN0SWRlbnRpZmllciNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmV3SGV4U3RyaW5nIGhleGFkZWNpbWFsIHZhbHVlIG9mIE9JRCBieXRlc1xuICAgICAqL1xuICAgIHRoaXMuc2V0VmFsdWVIZXggPSBmdW5jdGlvbihuZXdIZXhTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zID0gbnVsbDtcbiAgICAgICAgdGhpcy5oViA9IG5ld0hleFN0cmluZztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IGEgT0lEIHN0cmluZzxici8+XG4gICAgICogQG5hbWUgc2V0VmFsdWVPaWRTdHJpbmdcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUk9iamVjdElkZW50aWZpZXIjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9pZFN0cmluZyBPSUQgc3RyaW5nIChleC4gMi41LjQuMTMpXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBvID0gbmV3IEtKVVIuYXNuMS5ERVJPYmplY3RJZGVudGlmaWVyKCk7XG4gICAgICogby5zZXRWYWx1ZU9pZFN0cmluZyhcIjIuNS40LjEzXCIpO1xuICAgICAqL1xuICAgIHRoaXMuc2V0VmFsdWVPaWRTdHJpbmcgPSBmdW5jdGlvbihvaWRTdHJpbmcpIHtcbiAgICAgICAgaWYgKCEgb2lkU3RyaW5nLm1hdGNoKC9eWzAtOS5dKyQvKSkge1xuICAgICAgICAgICAgdGhyb3cgXCJtYWxmb3JtZWQgb2lkIHN0cmluZzogXCIgKyBvaWRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGggPSAnJztcbiAgICAgICAgdmFyIGEgPSBvaWRTdHJpbmcuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIGkwID0gcGFyc2VJbnQoYVswXSkgKiA0MCArIHBhcnNlSW50KGFbMV0pO1xuICAgICAgICBoICs9IGl0b3goaTApO1xuICAgICAgICBhLnNwbGljZSgwLCAyKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoICs9IHJvaWR0b3goYVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oVExWID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc01vZGlmaWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zID0gbnVsbDtcbiAgICAgICAgdGhpcy5oViA9IGg7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBhIE9JRCBuYW1lXG4gICAgICogQG5hbWUgc2V0VmFsdWVOYW1lXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJPYmplY3RJZGVudGlmaWVyI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvaWROYW1lIE9JRCBuYW1lIChleC4gJ3NlcnZlckF1dGgnKVxuICAgICAqIEBzaW5jZSAxLjAuMVxuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIE9JRCBuYW1lIHNoYWxsIGJlIGRlZmluZWQgaW4gJ0tKVVIuYXNuMS54NTA5Lk9JRC5uYW1lMm9pZExpc3QnLlxuICAgICAqIE90aGVyd2lzZSByYWlzZSBlcnJvci5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIG8gPSBuZXcgS0pVUi5hc24xLkRFUk9iamVjdElkZW50aWZpZXIoKTtcbiAgICAgKiBvLnNldFZhbHVlTmFtZShcInNlcnZlckF1dGhcIik7XG4gICAgICovXG4gICAgdGhpcy5zZXRWYWx1ZU5hbWUgPSBmdW5jdGlvbihvaWROYW1lKSB7XG4gICAgICAgIHZhciBvaWQgPSBLSlVSLmFzbjEueDUwOS5PSUQubmFtZTJvaWQob2lkTmFtZSk7XG4gICAgICAgIGlmIChvaWQgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlT2lkU3RyaW5nKG9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIkRFUk9iamVjdElkZW50aWZpZXIgb2lkTmFtZSB1bmRlZmluZWQ6IFwiICsgb2lkTmFtZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmdldEZyZXNoVmFsdWVIZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5tYXRjaCgvXlswLTJdLlswLTkuXSskLykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlT2lkU3RyaW5nKHBhcmFtcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVOYW1lKHBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLm9pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlT2lkU3RyaW5nKHBhcmFtcy5vaWQpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5oZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZUhleChwYXJhbXMuaGV4KTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMubmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlTmFtZShwYXJhbXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUk9iamVjdElkZW50aWZpZXIsIEtKVVIuYXNuMS5BU04xT2JqZWN0KTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBFbnVtZXJhdGVkXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSRW51bWVyYXRlZFxuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgRW51bWVyYXRlZFxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPmludCAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBpbnRlZ2VyIHZhbHVlPC9saT5cbiAqIDxsaT5oZXggLSBzcGVjaWZ5IGluaXRpYWwgQVNOLjEgdmFsdWUoVikgYnkgYSBoZXhhZGVjaW1hbCBzdHJpbmc8L2xpPlxuICogPC91bD5cbiAqIE5PVEU6ICdwYXJhbXMnIGNhbiBiZSBvbWl0dGVkLlxuICogQGV4YW1wbGVcbiAqIG5ldyBLSlVSLmFzbjEuREVSRW51bWVyYXRlZCgxMjMpO1xuICogbmV3IEtKVVIuYXNuMS5ERVJFbnVtZXJhdGVkKHtpbnQ6IDEyM30pO1xuICogbmV3IEtKVVIuYXNuMS5ERVJFbnVtZXJhdGVkKHtoZXg6ICcxZmFkJ30pO1xuICovXG5LSlVSLmFzbjEuREVSRW51bWVyYXRlZCA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIEtKVVIuYXNuMS5ERVJFbnVtZXJhdGVkLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmhUID0gXCIwYVwiO1xuXG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IFRvbSBXdSdzIEJpZ0ludGVnZXIgb2JqZWN0XG4gICAgICogQG5hbWUgc2V0QnlCaWdJbnRlZ2VyXG4gICAgICogQG1lbWJlck9mIEtKVVIuYXNuMS5ERVJFbnVtZXJhdGVkI1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7QmlnSW50ZWdlcn0gYmlnSW50ZWdlclZhbHVlIHRvIHNldFxuICAgICAqL1xuICAgIHRoaXMuc2V0QnlCaWdJbnRlZ2VyID0gZnVuY3Rpb24oYmlnSW50ZWdlclZhbHVlKSB7XG4gICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaFYgPSBLSlVSLmFzbjEuQVNOMVV0aWwuYmlnSW50VG9NaW5Ud29zQ29tcGxlbWVudHNIZXgoYmlnSW50ZWdlclZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IGludGVnZXIgdmFsdWVcbiAgICAgKiBAbmFtZSBzZXRCeUludGVnZXJcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkVudW1lcmF0ZWQjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBpbnRlZ2VyIHZhbHVlIHRvIHNldFxuICAgICAqL1xuICAgIHRoaXMuc2V0QnlJbnRlZ2VyID0gZnVuY3Rpb24oaW50VmFsdWUpIHtcbiAgICAgICAgdmFyIGJpID0gbmV3IEJpZ0ludGVnZXIoU3RyaW5nKGludFZhbHVlKSwgMTApO1xuICAgICAgICB0aGlzLnNldEJ5QmlnSW50ZWdlcihiaSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBpbnRlZ2VyIHZhbHVlXG4gICAgICogQG5hbWUgc2V0VmFsdWVIZXhcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkVudW1lcmF0ZWQjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhleGFkZWNpbWFsIHN0cmluZyBvZiBpbnRlZ2VyIHZhbHVlXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogPGJyLz5cbiAgICAgKiBOT1RFOiBWYWx1ZSBzaGFsbCBiZSByZXByZXNlbnRlZCBieSBtaW5pbXVtIG9jdGV0IGxlbmd0aCBvZlxuICAgICAqIHR3bydzIGNvbXBsZW1lbnQgcmVwcmVzZW50YXRpb24uXG4gICAgICovXG4gICAgdGhpcy5zZXRWYWx1ZUhleCA9IGZ1bmN0aW9uKG5ld0hleFN0cmluZykge1xuICAgICAgICB0aGlzLmhWID0gbmV3SGV4U3RyaW5nO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEZyZXNoVmFsdWVIZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbJ2ludCddICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QnlJbnRlZ2VyKHBhcmFtc1snaW50J10pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMgPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgdGhpcy5zZXRCeUludGVnZXIocGFyYW1zKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zWydoZXgnXSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlSGV4KHBhcmFtc1snaGV4J10pO1xuICAgICAgICB9XG4gICAgfVxufTtcbllBSE9PLmxhbmcuZXh0ZW5kKEtKVVIuYXNuMS5ERVJFbnVtZXJhdGVkLCBLSlVSLmFzbjEuQVNOMU9iamVjdCk7XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIGNsYXNzIGZvciBBU04uMSBERVIgVVRGOFN0cmluZ1xuICogQG5hbWUgS0pVUi5hc24xLkRFUlVURjhTdHJpbmdcbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIFVURjhTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBhc3NvY2lhdGl2ZSBhcnJheSBvZiBwYXJhbWV0ZXJzIChleC4geydzdHInOiAnYWFhJ30pXG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogQHNlZSBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcgLSBzdXBlcmNsYXNzXG4gKi9cbktKVVIuYXNuMS5ERVJVVEY4U3RyaW5nID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUlVURjhTdHJpbmcuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHBhcmFtcyk7XG4gICAgdGhpcy5oVCA9IFwiMGNcIjtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSVVRGOFN0cmluZywgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nKTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBOdW1lcmljU3RyaW5nXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSTnVtZXJpY1N0cmluZ1xuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgTnVtZXJpY1N0cmluZ1xuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIGFzc29jaWF0aXZlIGFycmF5IG9mIHBhcmFtZXRlcnMgKGV4LiB7J3N0cic6ICdhYWEnfSlcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBAc2VlIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyAtIHN1cGVyY2xhc3NcbiAqL1xuS0pVUi5hc24xLkRFUk51bWVyaWNTdHJpbmcgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICBLSlVSLmFzbjEuREVSTnVtZXJpY1N0cmluZy5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyYW1zKTtcbiAgICB0aGlzLmhUID0gXCIxMlwiO1xufTtcbllBSE9PLmxhbmcuZXh0ZW5kKEtKVVIuYXNuMS5ERVJOdW1lcmljU3RyaW5nLCBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBjbGFzcyBmb3IgQVNOLjEgREVSIFByaW50YWJsZVN0cmluZ1xuICogQG5hbWUgS0pVUi5hc24xLkRFUlByaW50YWJsZVN0cmluZ1xuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgUHJpbnRhYmxlU3RyaW5nXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgYXNzb2NpYXRpdmUgYXJyYXkgb2YgcGFyYW1ldGVycyAoZXguIHsnc3RyJzogJ2FhYSd9KVxuICogQGV4dGVuZHMgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nXG4gKiBAZGVzY3JpcHRpb25cbiAqIEBzZWUgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nIC0gc3VwZXJjbGFzc1xuICovXG5LSlVSLmFzbjEuREVSUHJpbnRhYmxlU3RyaW5nID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUlByaW50YWJsZVN0cmluZy5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyYW1zKTtcbiAgICB0aGlzLmhUID0gXCIxM1wiO1xufTtcbllBSE9PLmxhbmcuZXh0ZW5kKEtKVVIuYXNuMS5ERVJQcmludGFibGVTdHJpbmcsIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyk7XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIGNsYXNzIGZvciBBU04uMSBERVIgVGVsZXRleFN0cmluZ1xuICogQG5hbWUgS0pVUi5hc24xLkRFUlRlbGV0ZXhTdHJpbmdcbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIFRlbGV0ZXhTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBhc3NvY2lhdGl2ZSBhcnJheSBvZiBwYXJhbWV0ZXJzIChleC4geydzdHInOiAnYWFhJ30pXG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmdcbiAqIEBkZXNjcmlwdGlvblxuICogQHNlZSBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcgLSBzdXBlcmNsYXNzXG4gKi9cbktKVVIuYXNuMS5ERVJUZWxldGV4U3RyaW5nID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUlRlbGV0ZXhTdHJpbmcuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHBhcmFtcyk7XG4gICAgdGhpcy5oVCA9IFwiMTRcIjtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSVGVsZXRleFN0cmluZywgS0pVUi5hc24xLkRFUkFic3RyYWN0U3RyaW5nKTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBJQTVTdHJpbmdcbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJJQTVTdHJpbmdcbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIElBNVN0cmluZ1xuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zIGFzc29jaWF0aXZlIGFycmF5IG9mIHBhcmFtZXRlcnMgKGV4LiB7J3N0cic6ICdhYWEnfSlcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBAc2VlIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cmluZyAtIHN1cGVyY2xhc3NcbiAqL1xuS0pVUi5hc24xLkRFUklBNVN0cmluZyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIEtKVVIuYXNuMS5ERVJJQTVTdHJpbmcuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHBhcmFtcyk7XG4gICAgdGhpcy5oVCA9IFwiMTZcIjtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSSUE1U3RyaW5nLCBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJpbmcpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBjbGFzcyBmb3IgQVNOLjEgREVSIFVUQ1RpbWVcbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJVVENUaW1lXG4gKiBAY2xhc3MgY2xhc3MgZm9yIEFTTi4xIERFUiBVVENUaW1lXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMgYXNzb2NpYXRpdmUgYXJyYXkgb2YgcGFyYW1ldGVycyAoZXguIHsnc3RyJzogJzEzMDQzMDIzNTk1OVonfSlcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFRpbWVcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPnN0ciAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBhIHN0cmluZyAoZXguJzEzMDQzMDIzNTk1OVonKTwvbGk+XG4gKiA8bGk+aGV4IC0gc3BlY2lmeSBpbml0aWFsIEFTTi4xIHZhbHVlKFYpIGJ5IGEgaGV4YWRlY2ltYWwgc3RyaW5nPC9saT5cbiAqIDxsaT5kYXRlIC0gc3BlY2lmeSBEYXRlIG9iamVjdC48L2xpPlxuICogPC91bD5cbiAqIE5PVEU6ICdwYXJhbXMnIGNhbiBiZSBvbWl0dGVkLlxuICogPGg0PkVYQU1QTEVTPC9oND5cbiAqIEBleGFtcGxlXG4gKiBkMSA9IG5ldyBLSlVSLmFzbjEuREVSVVRDVGltZSgpO1xuICogZDEuc2V0U3RyaW5nKCcxMzA0MzAxMjU5NTlaJyk7XG4gKlxuICogZDIgPSBuZXcgS0pVUi5hc24xLkRFUlVUQ1RpbWUoeydzdHInOiAnMTMwNDMwMTI1OTU5Wid9KTtcbiAqIGQzID0gbmV3IEtKVVIuYXNuMS5ERVJVVENUaW1lKHsnZGF0ZSc6IG5ldyBEYXRlKERhdGUuVVRDKDIwMTUsIDAsIDMxLCAwLCAwLCAwLCAwKSl9KTtcbiAqIGQ0ID0gbmV3IEtKVVIuYXNuMS5ERVJVVENUaW1lKCcxMzA0MzAxMjU5NTlaJyk7XG4gKi9cbktKVVIuYXNuMS5ERVJVVENUaW1lID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUlVUQ1RpbWUuc3VwZXJjbGFzcy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHBhcmFtcyk7XG4gICAgdGhpcy5oVCA9IFwiMTdcIjtcblxuICAgIC8qKlxuICAgICAqIHNldCB2YWx1ZSBieSBhIERhdGUgb2JqZWN0PGJyLz5cbiAgICAgKiBAbmFtZSBzZXRCeURhdGVcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUlVUQ1RpbWUjXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtEYXRlfSBkYXRlT2JqZWN0IERhdGUgb2JqZWN0IHRvIHNldCBBU04uMSB2YWx1ZShWKVxuICAgICAqIEBleGFtcGxlXG4gICAgICogbyA9IG5ldyBLSlVSLmFzbjEuREVSVVRDVGltZSgpO1xuICAgICAqIG8uc2V0QnlEYXRlKG5ldyBEYXRlKFwiMjAxNi8xMi8zMVwiKSk7XG4gICAgICovXG4gICAgdGhpcy5zZXRCeURhdGUgPSBmdW5jdGlvbihkYXRlT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVPYmplY3Q7XG4gICAgICAgIHRoaXMucyA9IHRoaXMuZm9ybWF0RGF0ZSh0aGlzLmRhdGUsICd1dGMnKTtcbiAgICAgICAgdGhpcy5oViA9IHN0b2hleCh0aGlzLnMpO1xuICAgIH07XG5cbiAgICB0aGlzLmdldEZyZXNoVmFsdWVIZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRhdGUgPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2YgdGhpcy5zID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnMgPSB0aGlzLmZvcm1hdERhdGUodGhpcy5kYXRlLCAndXRjJyk7XG4gICAgICAgICAgICB0aGlzLmhWID0gc3RvaGV4KHRoaXMucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcblxuICAgIGlmIChwYXJhbXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyYW1zLnN0ciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0cmluZyhwYXJhbXMuc3RyKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zID09IFwic3RyaW5nXCIgJiYgcGFyYW1zLm1hdGNoKC9eWzAtOV17MTJ9WiQvKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmcocGFyYW1zKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuaGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5nSGV4KHBhcmFtcy5oZXgpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5kYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QnlEYXRlKHBhcmFtcy5kYXRlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSVVRDVGltZSwgS0pVUi5hc24xLkRFUkFic3RyYWN0VGltZSk7XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vKipcbiAqIGNsYXNzIGZvciBBU04uMSBERVIgR2VuZXJhbGl6ZWRUaW1lXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSR2VuZXJhbGl6ZWRUaW1lXG4gKiBAY2xhc3MgY2xhc3MgZm9yIEFTTi4xIERFUiBHZW5lcmFsaXplZFRpbWVcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcyBhc3NvY2lhdGl2ZSBhcnJheSBvZiBwYXJhbWV0ZXJzIChleC4geydzdHInOiAnMjAxMzA0MzAyMzU5NTlaJ30pXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IHdpdGhNaWxsaXMgZmxhZyB0byBzaG93IG1pbGxpc2Vjb25kcyBvciBub3RcbiAqIEBleHRlbmRzIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFRpbWVcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIEFzIGZvciBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSBvbmUgb2ZcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICogPHVsPlxuICogPGxpPnN0ciAtIHNwZWNpZnkgaW5pdGlhbCBBU04uMSB2YWx1ZShWKSBieSBhIHN0cmluZyAoZXguJzIwMTMwNDMwMjM1OTU5WicpPC9saT5cbiAqIDxsaT5oZXggLSBzcGVjaWZ5IGluaXRpYWwgQVNOLjEgdmFsdWUoVikgYnkgYSBoZXhhZGVjaW1hbCBzdHJpbmc8L2xpPlxuICogPGxpPmRhdGUgLSBzcGVjaWZ5IERhdGUgb2JqZWN0LjwvbGk+XG4gKiA8bGk+bWlsbGlzIC0gc3BlY2lmeSBmbGFnIHRvIHNob3cgbWlsbGlzZWNvbmRzIChmcm9tIDEuMC42KTwvbGk+XG4gKiA8L3VsPlxuICogTk9URTE6ICdwYXJhbXMnIGNhbiBiZSBvbWl0dGVkLlxuICogTk9URTI6ICd3aXRoTWlsbGlzJyBwcm9wZXJ0eSBpcyBzdXBwb3J0ZWQgZnJvbSBhc24xIDEuMC42LlxuICovXG5LSlVSLmFzbjEuREVSR2VuZXJhbGl6ZWRUaW1lID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUkdlbmVyYWxpemVkVGltZS5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyYW1zKTtcbiAgICB0aGlzLmhUID0gXCIxOFwiO1xuICAgIHRoaXMud2l0aE1pbGxpcyA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IGEgRGF0ZSBvYmplY3RcbiAgICAgKiBAbmFtZSBzZXRCeURhdGVcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUkdlbmVyYWxpemVkVGltZSNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0RhdGV9IGRhdGVPYmplY3QgRGF0ZSBvYmplY3QgdG8gc2V0IEFTTi4xIHZhbHVlKFYpXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBXaGVuIHlvdSBzcGVjaWZ5IFVUQyB0aW1lLCB1c2UgJ0RhdGUuVVRDJyBtZXRob2QgbGlrZSB0aGlzOjxici8+XG4gICAgICogbzEgPSBuZXcgREVSVVRDVGltZSgpO1xuICAgICAqIG8xLnNldEJ5RGF0ZShkYXRlKTtcbiAgICAgKlxuICAgICAqIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygyMDE1LCAwLCAzMSwgMjMsIDU5LCA1OSwgMCkpOyAjMjAxNUpBTjMxIDIzOjU5OjU5XG4gICAgICovXG4gICAgdGhpcy5zZXRCeURhdGUgPSBmdW5jdGlvbihkYXRlT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVPYmplY3Q7XG4gICAgICAgIHRoaXMucyA9IHRoaXMuZm9ybWF0RGF0ZSh0aGlzLmRhdGUsICdnZW4nLCB0aGlzLndpdGhNaWxsaXMpO1xuICAgICAgICB0aGlzLmhWID0gc3RvaGV4KHRoaXMucyk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0RnJlc2hWYWx1ZUhleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRlID09PSB1bmRlZmluZWQgJiYgdGhpcy5zID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0aGlzLnMgPSB0aGlzLmZvcm1hdERhdGUodGhpcy5kYXRlLCAnZ2VuJywgdGhpcy53aXRoTWlsbGlzKTtcbiAgICAgICAgICAgIHRoaXMuaFYgPSBzdG9oZXgodGhpcy5zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5oVjtcbiAgICB9O1xuXG4gICAgaWYgKHBhcmFtcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJhbXMuc3RyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RyaW5nKHBhcmFtcy5zdHIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMgPT0gXCJzdHJpbmdcIiAmJiBwYXJhbXMubWF0Y2goL15bMC05XXsxNH1aJC8pKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0cmluZyhwYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtcy5oZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdHJpbmdIZXgocGFyYW1zLmhleCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1zLmRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRCeURhdGUocGFyYW1zLmRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMubWlsbGlzID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLndpdGhNaWxsaXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufTtcbllBSE9PLmxhbmcuZXh0ZW5kKEtKVVIuYXNuMS5ERVJHZW5lcmFsaXplZFRpbWUsIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFRpbWUpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBjbGFzcyBmb3IgQVNOLjEgREVSIFNlcXVlbmNlXG4gKiBAbmFtZSBLSlVSLmFzbjEuREVSU2VxdWVuY2VcbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIFNlcXVlbmNlXG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJ1Y3R1cmVkXG4gKiBAZGVzY3JpcHRpb25cbiAqIDxici8+XG4gKiBBcyBmb3IgYXJndW1lbnQgJ3BhcmFtcycgZm9yIGNvbnN0cnVjdG9yLCB5b3UgY2FuIHNwZWNpZnkgb25lIG9mXG4gKiBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqIDx1bD5cbiAqIDxsaT5hcnJheSAtIHNwZWNpZnkgYXJyYXkgb2YgQVNOMU9iamVjdCB0byBzZXQgZWxlbWVudHMgb2YgY29udGVudDwvbGk+XG4gKiA8L3VsPlxuICogTk9URTogJ3BhcmFtcycgY2FuIGJlIG9taXR0ZWQuXG4gKi9cbktKVVIuYXNuMS5ERVJTZXF1ZW5jZSA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgIEtKVVIuYXNuMS5ERVJTZXF1ZW5jZS5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyYW1zKTtcbiAgICB0aGlzLmhUID0gXCIzMFwiO1xuICAgIHRoaXMuZ2V0RnJlc2hWYWx1ZUhleCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaCA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXNuMUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXNuMU9iaiA9IHRoaXMuYXNuMUFycmF5W2ldO1xuICAgICAgICAgICAgaCArPSBhc24xT2JqLmdldEVuY29kZWRIZXgoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhWID0gaDtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSU2VxdWVuY2UsIEtKVVIuYXNuMS5ERVJBYnN0cmFjdFN0cnVjdHVyZWQpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLyoqXG4gKiBjbGFzcyBmb3IgQVNOLjEgREVSIFNldFxuICogQG5hbWUgS0pVUi5hc24xLkRFUlNldFxuICogQGNsYXNzIGNsYXNzIGZvciBBU04uMSBERVIgU2V0XG4gKiBAZXh0ZW5kcyBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJ1Y3R1cmVkXG4gKiBAZGVzY3JpcHRpb25cbiAqIDxici8+XG4gKiBBcyBmb3IgYXJndW1lbnQgJ3BhcmFtcycgZm9yIGNvbnN0cnVjdG9yLCB5b3UgY2FuIHNwZWNpZnkgb25lIG9mXG4gKiBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqIDx1bD5cbiAqIDxsaT5hcnJheSAtIHNwZWNpZnkgYXJyYXkgb2YgQVNOMU9iamVjdCB0byBzZXQgZWxlbWVudHMgb2YgY29udGVudDwvbGk+XG4gKiA8bGk+c29ydGZsYWcgLSBmbGFnIGZvciBzb3J0IChkZWZhdWx0OiB0cnVlKS4gQVNOLjEgQkVSIGlzIG5vdCBzb3J0ZWQgaW4gJ1NFVCBPRicuPC9saT5cbiAqIDwvdWw+XG4gKiBOT1RFMTogJ3BhcmFtcycgY2FuIGJlIG9taXR0ZWQuPGJyLz5cbiAqIE5PVEUyOiBzb3J0ZmxhZyBpcyBzdXBwb3J0ZWQgc2luY2UgMS4wLjUuXG4gKi9cbktKVVIuYXNuMS5ERVJTZXQgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICBLSlVSLmFzbjEuREVSU2V0LnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBwYXJhbXMpO1xuICAgIHRoaXMuaFQgPSBcIjMxXCI7XG4gICAgdGhpcy5zb3J0RmxhZyA9IHRydWU7IC8vIGl0ZW0gc2hhbGwgYmUgc29ydGVkIG9ubHkgaW4gQVNOLjEgREVSXG4gICAgdGhpcy5nZXRGcmVzaFZhbHVlSGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hc24xQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhc24xT2JqID0gdGhpcy5hc24xQXJyYXlbaV07XG4gICAgICAgICAgICBhLnB1c2goYXNuMU9iai5nZXRFbmNvZGVkSGV4KCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNvcnRGbGFnID09IHRydWUpIGEuc29ydCgpO1xuICAgICAgICB0aGlzLmhWID0gYS5qb2luKCcnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMuc29ydGZsYWcgIT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgcGFyYW1zLnNvcnRmbGFnID09IGZhbHNlKVxuICAgICAgICAgICAgdGhpcy5zb3J0RmxhZyA9IGZhbHNlO1xuICAgIH1cbn07XG5ZQUhPTy5sYW5nLmV4dGVuZChLSlVSLmFzbjEuREVSU2V0LCBLSlVSLmFzbjEuREVSQWJzdHJhY3RTdHJ1Y3R1cmVkKTtcblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8qKlxuICogY2xhc3MgZm9yIEFTTi4xIERFUiBUYWdnZWRPYmplY3RcbiAqIEBuYW1lIEtKVVIuYXNuMS5ERVJUYWdnZWRPYmplY3RcbiAqIEBjbGFzcyBjbGFzcyBmb3IgQVNOLjEgREVSIFRhZ2dlZE9iamVjdFxuICogQGV4dGVuZHMgS0pVUi5hc24xLkFTTjFPYmplY3RcbiAqIEBkZXNjcmlwdGlvblxuICogPGJyLz5cbiAqIFBhcmFtZXRlciAndGFnTm9OZXgnIGlzIEFTTi4xIHRhZyhUKSB2YWx1ZSBmb3IgdGhpcyBvYmplY3QuXG4gKiBGb3IgZXhhbXBsZSwgaWYgeW91IGZpbmQgJ1sxXScgdGFnIGluIGEgQVNOLjEgZHVtcCxcbiAqICd0YWdOb0hleCcgd2lsbCBiZSAnYTEnLlxuICogPGJyLz5cbiAqIEFzIGZvciBvcHRpb25hbCBhcmd1bWVudCAncGFyYW1zJyBmb3IgY29uc3RydWN0b3IsIHlvdSBjYW4gc3BlY2lmeSAqQU5ZKiBvZlxuICogZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKiA8dWw+XG4gKiA8bGk+ZXhwbGljaXQgLSBzcGVjaWZ5IHRydWUgaWYgdGhpcyBpcyBleHBsaWNpdCB0YWcgb3RoZXJ3aXNlIGZhbHNlXG4gKiAgICAgKGRlZmF1bHQgaXMgJ3RydWUnKS48L2xpPlxuICogPGxpPnRhZyAtIHNwZWNpZnkgdGFnIChkZWZhdWx0IGlzICdhMCcgd2hpY2ggbWVhbnMgWzBdKTwvbGk+XG4gKiA8bGk+b2JqIC0gc3BlY2lmeSBBU04xT2JqZWN0IHdoaWNoIGlzIHRhZ2dlZDwvbGk+XG4gKiA8L3VsPlxuICogQGV4YW1wbGVcbiAqIGQxID0gbmV3IEtKVVIuYXNuMS5ERVJVVEY4U3RyaW5nKHsnc3RyJzonYSd9KTtcbiAqIGQyID0gbmV3IEtKVVIuYXNuMS5ERVJUYWdnZWRPYmplY3QoeydvYmonOiBkMX0pO1xuICogaGV4ID0gZDIuZ2V0RW5jb2RlZEhleCgpO1xuICovXG5LSlVSLmFzbjEuREVSVGFnZ2VkT2JqZWN0ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgS0pVUi5hc24xLkRFUlRhZ2dlZE9iamVjdC5zdXBlcmNsYXNzLmNvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gICAgdGhpcy5oVCA9IFwiYTBcIjtcbiAgICB0aGlzLmhWID0gJyc7XG4gICAgdGhpcy5pc0V4cGxpY2l0ID0gdHJ1ZTtcbiAgICB0aGlzLmFzbjFPYmplY3QgPSBudWxsO1xuXG4gICAgLyoqXG4gICAgICogc2V0IHZhbHVlIGJ5IGFuIEFTTjFPYmplY3RcbiAgICAgKiBAbmFtZSBzZXRTdHJpbmdcbiAgICAgKiBAbWVtYmVyT2YgS0pVUi5hc24xLkRFUlRhZ2dlZE9iamVjdCNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzRXhwbGljaXRGbGFnIGZsYWcgZm9yIGV4cGxpY2l0L2ltcGxpY2l0IHRhZ1xuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gdGFnTm9IZXggaGV4YWRlY2ltYWwgc3RyaW5nIG9mIEFTTi4xIHRhZ1xuICAgICAqIEBwYXJhbSB7QVNOMU9iamVjdH0gYXNuMU9iamVjdCBBU04uMSB0byBlbmNhcHN1bGF0ZVxuICAgICAqL1xuICAgIHRoaXMuc2V0QVNOMU9iamVjdCA9IGZ1bmN0aW9uKGlzRXhwbGljaXRGbGFnLCB0YWdOb0hleCwgYXNuMU9iamVjdCkge1xuICAgICAgICB0aGlzLmhUID0gdGFnTm9IZXg7XG4gICAgICAgIHRoaXMuaXNFeHBsaWNpdCA9IGlzRXhwbGljaXRGbGFnO1xuICAgICAgICB0aGlzLmFzbjFPYmplY3QgPSBhc24xT2JqZWN0O1xuICAgICAgICBpZiAodGhpcy5pc0V4cGxpY2l0KSB7XG4gICAgICAgICAgICB0aGlzLmhWID0gdGhpcy5hc24xT2JqZWN0LmdldEVuY29kZWRIZXgoKTtcbiAgICAgICAgICAgIHRoaXMuaFRMViA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oViA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmhUTFYgPSBhc24xT2JqZWN0LmdldEVuY29kZWRIZXgoKTtcbiAgICAgICAgICAgIHRoaXMuaFRMViA9IHRoaXMuaFRMVi5yZXBsYWNlKC9eLi4vLCB0YWdOb0hleCk7XG4gICAgICAgICAgICB0aGlzLmlzTW9kaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmdldEZyZXNoVmFsdWVIZXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaFY7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1zICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbJ3RhZyddICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaFQgPSBwYXJhbXNbJ3RhZyddO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zWydleHBsaWNpdCddICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFeHBsaWNpdCA9IHBhcmFtc1snZXhwbGljaXQnXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1snb2JqJ10gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdGhpcy5hc24xT2JqZWN0ID0gcGFyYW1zWydvYmonXTtcbiAgICAgICAgICAgIHRoaXMuc2V0QVNOMU9iamVjdCh0aGlzLmlzRXhwbGljaXQsIHRoaXMuaFQsIHRoaXMuYXNuMU9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuWUFIT08ubGFuZy5leHRlbmQoS0pVUi5hc24xLkRFUlRhZ2dlZE9iamVjdCwgS0pVUi5hc24xLkFTTjFPYmplY3QpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBKU0VuY3J5cHRSU0FLZXkgdGhhdCBleHRlbmRzIFRvbSBXdSdzIFJTQSBrZXkgb2JqZWN0LlxuICogVGhpcyBvYmplY3QgaXMganVzdCBhIGRlY29yYXRvciBmb3IgcGFyc2luZyB0aGUga2V5IHBhcmFtZXRlclxuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBrZXkgLSBUaGUga2V5IGluIHN0cmluZyBmb3JtYXQsIG9yIGFuIG9iamVjdCBjb250YWluaW5nXG4gKiB0aGUgcGFyYW1ldGVycyBuZWVkZWQgdG8gYnVpbGQgYSBSU0FLZXkgb2JqZWN0LlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnZhciBKU0VuY3J5cHRSU0FLZXkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEpTRW5jcnlwdFJTQUtleSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKU0VuY3J5cHRSU0FLZXkoa2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIC8vIENhbGwgdGhlIHN1cGVyIGNvbnN0cnVjdG9yLlxuICAgICAgICAvLyAgUlNBS2V5LmNhbGwodGhpcyk7XG4gICAgICAgIC8vIElmIGEga2V5IGtleSB3YXMgcHJvdmlkZWQuXG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBzdHJpbmcuLi5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFyc2VLZXkoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEpTRW5jcnlwdFJTQUtleS5oYXNQcml2YXRlS2V5UHJvcGVydHkoa2V5KSB8fFxuICAgICAgICAgICAgICAgIEpTRW5jcnlwdFJTQUtleS5oYXNQdWJsaWNLZXlQcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSB2YWx1ZXMgZm9yIHRoZSBrZXkuXG4gICAgICAgICAgICAgICAgX3RoaXMucGFyc2VQcm9wZXJ0aWVzRnJvbShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIHBhcnNlIGEgcGVtIGVuY29kZWQgc3RyaW5nIGNvbnRhaW5pbmcgYm90aCBhIHB1YmxpYyBvciBwcml2YXRlIGtleS5cbiAgICAgKiBUaGUgbWV0aG9kIHdpbGwgdHJhbnNsYXRlIHRoZSBwZW0gZW5jb2RlZCBzdHJpbmcgaW4gYSBkZXIgZW5jb2RlZCBzdHJpbmcgYW5kXG4gICAgICogd2lsbCBwYXJzZSBwcml2YXRlIGtleSBhbmQgcHVibGljIGtleSBwYXJhbWV0ZXJzLiBUaGlzIG1ldGhvZCBhY2NlcHRzIHB1YmxpYyBrZXlcbiAgICAgKiBpbiB0aGUgcnNhZW5jcnlwdGlvbiBwa2NzICMxIGZvcm1hdCAob2lkOiAxLjIuODQwLjExMzU0OS4xLjEuMSkuXG4gICAgICpcbiAgICAgKiBAdG9kbyBDaGVjayBob3cgbWFueSByc2EgZm9ybWF0cyB1c2UgdGhlIHNhbWUgZm9ybWF0IG9mIHBrY3MgIzEuXG4gICAgICpcbiAgICAgKiBUaGUgZm9ybWF0IGlzIGRlZmluZWQgYXM6XG4gICAgICogUHVibGljS2V5SW5mbyA6Oj0gU0VRVUVOQ0Uge1xuICAgICAqICAgYWxnb3JpdGhtICAgICAgIEFsZ29yaXRobUlkZW50aWZpZXIsXG4gICAgICogICBQdWJsaWNLZXkgICAgICAgQklUIFNUUklOR1xuICAgICAqIH1cbiAgICAgKiBXaGVyZSBBbGdvcml0aG1JZGVudGlmaWVyIGlzOlxuICAgICAqIEFsZ29yaXRobUlkZW50aWZpZXIgOjo9IFNFUVVFTkNFIHtcbiAgICAgKiAgIGFsZ29yaXRobSAgICAgICBPQkpFQ1QgSURFTlRJRklFUiwgICAgIHRoZSBPSUQgb2YgdGhlIGVuYyBhbGdvcml0aG1cbiAgICAgKiAgIHBhcmFtZXRlcnMgICAgICBBTlkgREVGSU5FRCBCWSBhbGdvcml0aG0gT1BUSU9OQUwgKE5VTEwgZm9yIFBLQ1MgIzEpXG4gICAgICogfVxuICAgICAqIGFuZCBQdWJsaWNLZXkgaXMgYSBTRVFVRU5DRSBlbmNhcHN1bGF0ZWQgaW4gYSBCSVQgU1RSSU5HXG4gICAgICogUlNBUHVibGljS2V5IDo6PSBTRVFVRU5DRSB7XG4gICAgICogICBtb2R1bHVzICAgICAgICAgICBJTlRFR0VSLCAgLS0gblxuICAgICAqICAgcHVibGljRXhwb25lbnQgICAgSU5URUdFUiAgIC0tIGVcbiAgICAgKiB9XG4gICAgICogaXQncyBwb3NzaWJsZSB0byBleGFtaW5lIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIGtleXMgb2J0YWluZWQgZnJvbSBvcGVuc3NsIHVzaW5nXG4gICAgICogYW4gYXNuLjEgZHVtcGVyIGFzIHRoZSBvbmUgdXNlZCBoZXJlIHRvIHBhcnNlIHRoZSBjb21wb25lbnRzOiBodHRwOi8vbGFwby5pdC9hc24xanMvXG4gICAgICogQGFyZ3VtZW50IHtzdHJpbmd9IHBlbSB0aGUgcGVtIGVuY29kZWQgc3RyaW5nLCBjYW4gaW5jbHVkZSB0aGUgQkVHSU4vRU5EIGhlYWRlci9mb290ZXJcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEpTRW5jcnlwdFJTQUtleS5wcm90b3R5cGUucGFyc2VLZXkgPSBmdW5jdGlvbiAocGVtKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbW9kdWx1cyA9IDA7XG4gICAgICAgICAgICB2YXIgcHVibGljX2V4cG9uZW50ID0gMDtcbiAgICAgICAgICAgIHZhciByZUhleCA9IC9eXFxzKig/OlswLTlBLUZhLWZdWzAtOUEtRmEtZl1cXHMqKSskLztcbiAgICAgICAgICAgIHZhciBkZXIgPSByZUhleC50ZXN0KHBlbSkgPyBIZXguZGVjb2RlKHBlbSkgOiBCYXNlNjQudW5hcm1vcihwZW0pO1xuICAgICAgICAgICAgdmFyIGFzbjEgPSBBU04xLmRlY29kZShkZXIpO1xuICAgICAgICAgICAgLy8gRml4ZXMgYSBidWcgd2l0aCBPcGVuU1NMIDEuMCsgcHJpdmF0ZSBrZXlzXG4gICAgICAgICAgICBpZiAoYXNuMS5zdWIubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgYXNuMSA9IGFzbjEuc3ViWzJdLnN1YlswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhc24xLnN1Yi5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgICAgICAgICAvLyBQYXJzZSB0aGUgcHJpdmF0ZSBrZXkuXG4gICAgICAgICAgICAgICAgbW9kdWx1cyA9IGFzbjEuc3ViWzFdLmdldEhleFN0cmluZ1ZhbHVlKCk7IC8vIGJpZ2ludFxuICAgICAgICAgICAgICAgIHRoaXMubiA9IHBhcnNlQmlnSW50KG1vZHVsdXMsIDE2KTtcbiAgICAgICAgICAgICAgICBwdWJsaWNfZXhwb25lbnQgPSBhc24xLnN1YlsyXS5nZXRIZXhTdHJpbmdWYWx1ZSgpOyAvLyBpbnRcbiAgICAgICAgICAgICAgICB0aGlzLmUgPSBwYXJzZUludChwdWJsaWNfZXhwb25lbnQsIDE2KTtcbiAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZV9leHBvbmVudCA9IGFzbjEuc3ViWzNdLmdldEhleFN0cmluZ1ZhbHVlKCk7IC8vIGJpZ2ludFxuICAgICAgICAgICAgICAgIHRoaXMuZCA9IHBhcnNlQmlnSW50KHByaXZhdGVfZXhwb25lbnQsIDE2KTtcbiAgICAgICAgICAgICAgICB2YXIgcHJpbWUxID0gYXNuMS5zdWJbNF0uZ2V0SGV4U3RyaW5nVmFsdWUoKTsgLy8gYmlnaW50XG4gICAgICAgICAgICAgICAgdGhpcy5wID0gcGFyc2VCaWdJbnQocHJpbWUxLCAxNik7XG4gICAgICAgICAgICAgICAgdmFyIHByaW1lMiA9IGFzbjEuc3ViWzVdLmdldEhleFN0cmluZ1ZhbHVlKCk7IC8vIGJpZ2ludFxuICAgICAgICAgICAgICAgIHRoaXMucSA9IHBhcnNlQmlnSW50KHByaW1lMiwgMTYpO1xuICAgICAgICAgICAgICAgIHZhciBleHBvbmVudDEgPSBhc24xLnN1Yls2XS5nZXRIZXhTdHJpbmdWYWx1ZSgpOyAvLyBiaWdpbnRcbiAgICAgICAgICAgICAgICB0aGlzLmRtcDEgPSBwYXJzZUJpZ0ludChleHBvbmVudDEsIDE2KTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwb25lbnQyID0gYXNuMS5zdWJbN10uZ2V0SGV4U3RyaW5nVmFsdWUoKTsgLy8gYmlnaW50XG4gICAgICAgICAgICAgICAgdGhpcy5kbXExID0gcGFyc2VCaWdJbnQoZXhwb25lbnQyLCAxNik7XG4gICAgICAgICAgICAgICAgdmFyIGNvZWZmaWNpZW50ID0gYXNuMS5zdWJbOF0uZ2V0SGV4U3RyaW5nVmFsdWUoKTsgLy8gYmlnaW50XG4gICAgICAgICAgICAgICAgdGhpcy5jb2VmZiA9IHBhcnNlQmlnSW50KGNvZWZmaWNpZW50LCAxNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhc24xLnN1Yi5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAvLyBQYXJzZSB0aGUgcHVibGljIGtleS5cbiAgICAgICAgICAgICAgICB2YXIgYml0X3N0cmluZyA9IGFzbjEuc3ViWzFdO1xuICAgICAgICAgICAgICAgIHZhciBzZXF1ZW5jZSA9IGJpdF9zdHJpbmcuc3ViWzBdO1xuICAgICAgICAgICAgICAgIG1vZHVsdXMgPSBzZXF1ZW5jZS5zdWJbMF0uZ2V0SGV4U3RyaW5nVmFsdWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm4gPSBwYXJzZUJpZ0ludChtb2R1bHVzLCAxNik7XG4gICAgICAgICAgICAgICAgcHVibGljX2V4cG9uZW50ID0gc2VxdWVuY2Uuc3ViWzFdLmdldEhleFN0cmluZ1ZhbHVlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5lID0gcGFyc2VJbnQocHVibGljX2V4cG9uZW50LCAxNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVHJhbnNsYXRlIHJzYSBwYXJhbWV0ZXJzIGluIGEgaGV4IGVuY29kZWQgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgcnNhIGtleS5cbiAgICAgKlxuICAgICAqIFRoZSB0cmFuc2xhdGlvbiBmb2xsb3cgdGhlIEFTTi4xIG5vdGF0aW9uIDpcbiAgICAgKiBSU0FQcml2YXRlS2V5IDo6PSBTRVFVRU5DRSB7XG4gICAgICogICB2ZXJzaW9uICAgICAgICAgICBWZXJzaW9uLFxuICAgICAqICAgbW9kdWx1cyAgICAgICAgICAgSU5URUdFUiwgIC0tIG5cbiAgICAgKiAgIHB1YmxpY0V4cG9uZW50ICAgIElOVEVHRVIsICAtLSBlXG4gICAgICogICBwcml2YXRlRXhwb25lbnQgICBJTlRFR0VSLCAgLS0gZFxuICAgICAqICAgcHJpbWUxICAgICAgICAgICAgSU5URUdFUiwgIC0tIHBcbiAgICAgKiAgIHByaW1lMiAgICAgICAgICAgIElOVEVHRVIsICAtLSBxXG4gICAgICogICBleHBvbmVudDEgICAgICAgICBJTlRFR0VSLCAgLS0gZCBtb2QgKHAxKVxuICAgICAqICAgZXhwb25lbnQyICAgICAgICAgSU5URUdFUiwgIC0tIGQgbW9kIChxLTEpXG4gICAgICogICBjb2VmZmljaWVudCAgICAgICBJTlRFR0VSLCAgLS0gKGludmVyc2Ugb2YgcSkgbW9kIHBcbiAgICAgKiB9XG4gICAgICogQHJldHVybnMge3N0cmluZ30gIERFUiBFbmNvZGVkIFN0cmluZyByZXByZXNlbnRpbmcgdGhlIHJzYSBwcml2YXRlIGtleVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgSlNFbmNyeXB0UlNBS2V5LnByb3RvdHlwZS5nZXRQcml2YXRlQmFzZUtleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhcnJheTogW1xuICAgICAgICAgICAgICAgIG5ldyBLSlVSLmFzbjEuREVSSW50ZWdlcih7IGludDogMCB9KSxcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBiaWdpbnQ6IHRoaXMubiB9KSxcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBpbnQ6IHRoaXMuZSB9KSxcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBiaWdpbnQ6IHRoaXMuZCB9KSxcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBiaWdpbnQ6IHRoaXMucCB9KSxcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBiaWdpbnQ6IHRoaXMucSB9KSxcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBiaWdpbnQ6IHRoaXMuZG1wMSB9KSxcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBiaWdpbnQ6IHRoaXMuZG1xMSB9KSxcbiAgICAgICAgICAgICAgICBuZXcgS0pVUi5hc24xLkRFUkludGVnZXIoeyBiaWdpbnQ6IHRoaXMuY29lZmYgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNlcSA9IG5ldyBLSlVSLmFzbjEuREVSU2VxdWVuY2Uob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBzZXEuZ2V0RW5jb2RlZEhleCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogYmFzZTY0IChwZW0pIGVuY29kZWQgdmVyc2lvbiBvZiB0aGUgREVSIGVuY29kZWQgcmVwcmVzZW50YXRpb25cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBwZW0gZW5jb2RlZCByZXByZXNlbnRhdGlvbiB3aXRob3V0IGhlYWRlciBhbmQgZm9vdGVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdFJTQUtleS5wcm90b3R5cGUuZ2V0UHJpdmF0ZUJhc2VLZXlCNjQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoZXgyYjY0KHRoaXMuZ2V0UHJpdmF0ZUJhc2VLZXkoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGUgcnNhIHBhcmFtZXRlcnMgaW4gYSBoZXggZW5jb2RlZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSByc2EgcHVibGljIGtleS5cbiAgICAgKiBUaGUgcmVwcmVzZW50YXRpb24gZm9sbG93IHRoZSBBU04uMSBub3RhdGlvbiA6XG4gICAgICogUHVibGljS2V5SW5mbyA6Oj0gU0VRVUVOQ0Uge1xuICAgICAqICAgYWxnb3JpdGhtICAgICAgIEFsZ29yaXRobUlkZW50aWZpZXIsXG4gICAgICogICBQdWJsaWNLZXkgICAgICAgQklUIFNUUklOR1xuICAgICAqIH1cbiAgICAgKiBXaGVyZSBBbGdvcml0aG1JZGVudGlmaWVyIGlzOlxuICAgICAqIEFsZ29yaXRobUlkZW50aWZpZXIgOjo9IFNFUVVFTkNFIHtcbiAgICAgKiAgIGFsZ29yaXRobSAgICAgICBPQkpFQ1QgSURFTlRJRklFUiwgICAgIHRoZSBPSUQgb2YgdGhlIGVuYyBhbGdvcml0aG1cbiAgICAgKiAgIHBhcmFtZXRlcnMgICAgICBBTlkgREVGSU5FRCBCWSBhbGdvcml0aG0gT1BUSU9OQUwgKE5VTEwgZm9yIFBLQ1MgIzEpXG4gICAgICogfVxuICAgICAqIGFuZCBQdWJsaWNLZXkgaXMgYSBTRVFVRU5DRSBlbmNhcHN1bGF0ZWQgaW4gYSBCSVQgU1RSSU5HXG4gICAgICogUlNBUHVibGljS2V5IDo6PSBTRVFVRU5DRSB7XG4gICAgICogICBtb2R1bHVzICAgICAgICAgICBJTlRFR0VSLCAgLS0gblxuICAgICAqICAgcHVibGljRXhwb25lbnQgICAgSU5URUdFUiAgIC0tIGVcbiAgICAgKiB9XG4gICAgICogQHJldHVybnMge3N0cmluZ30gREVSIEVuY29kZWQgU3RyaW5nIHJlcHJlc2VudGluZyB0aGUgcnNhIHB1YmxpYyBrZXlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEpTRW5jcnlwdFJTQUtleS5wcm90b3R5cGUuZ2V0UHVibGljQmFzZUtleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZpcnN0X3NlcXVlbmNlID0gbmV3IEtKVVIuYXNuMS5ERVJTZXF1ZW5jZSh7XG4gICAgICAgICAgICBhcnJheTogW1xuICAgICAgICAgICAgICAgIG5ldyBLSlVSLmFzbjEuREVST2JqZWN0SWRlbnRpZmllcih7IG9pZDogXCIxLjIuODQwLjExMzU0OS4xLjEuMVwiIH0pLFxuICAgICAgICAgICAgICAgIG5ldyBLSlVSLmFzbjEuREVSTnVsbCgpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc2Vjb25kX3NlcXVlbmNlID0gbmV3IEtKVVIuYXNuMS5ERVJTZXF1ZW5jZSh7XG4gICAgICAgICAgICBhcnJheTogW1xuICAgICAgICAgICAgICAgIG5ldyBLSlVSLmFzbjEuREVSSW50ZWdlcih7IGJpZ2ludDogdGhpcy5uIH0pLFxuICAgICAgICAgICAgICAgIG5ldyBLSlVSLmFzbjEuREVSSW50ZWdlcih7IGludDogdGhpcy5lIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYml0X3N0cmluZyA9IG5ldyBLSlVSLmFzbjEuREVSQml0U3RyaW5nKHtcbiAgICAgICAgICAgIGhleDogXCIwMFwiICsgc2Vjb25kX3NlcXVlbmNlLmdldEVuY29kZWRIZXgoKVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHNlcSA9IG5ldyBLSlVSLmFzbjEuREVSU2VxdWVuY2Uoe1xuICAgICAgICAgICAgYXJyYXk6IFtcbiAgICAgICAgICAgICAgICBmaXJzdF9zZXF1ZW5jZSxcbiAgICAgICAgICAgICAgICBiaXRfc3RyaW5nXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VxLmdldEVuY29kZWRIZXgoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIGJhc2U2NCAocGVtKSBlbmNvZGVkIHZlcnNpb24gb2YgdGhlIERFUiBlbmNvZGVkIHJlcHJlc2VudGF0aW9uXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcGVtIGVuY29kZWQgcmVwcmVzZW50YXRpb24gd2l0aG91dCBoZWFkZXIgYW5kIGZvb3RlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHRSU0FLZXkucHJvdG90eXBlLmdldFB1YmxpY0Jhc2VLZXlCNjQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBoZXgyYjY0KHRoaXMuZ2V0UHVibGljQmFzZUtleSgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHdyYXAgdGhlIHN0cmluZyBpbiBibG9jayBvZiB3aWR0aCBjaGFycy4gVGhlIGRlZmF1bHQgdmFsdWUgZm9yIHJzYSBrZXlzIGlzIDY0XG4gICAgICogY2hhcmFjdGVycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIHRoZSBwZW0gZW5jb2RlZCBzdHJpbmcgd2l0aG91dCBoZWFkZXIgYW5kIGZvb3RlclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbd2lkdGg9NjRdIC0gdGhlIGxlbmd0aCB0aGUgc3RyaW5nIGhhcyB0byBiZSB3cmFwcGVkIGF0XG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEpTRW5jcnlwdFJTQUtleS53b3Jkd3JhcCA9IGZ1bmN0aW9uIChzdHIsIHdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gd2lkdGggfHwgNjQ7XG4gICAgICAgIGlmICghc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWdleCA9IFwiKC57MSxcIiArIHdpZHRoICsgXCJ9KSggK3wkXFxuPyl8KC57MSxcIiArIHdpZHRoICsgXCJ9KVwiO1xuICAgICAgICByZXR1cm4gc3RyLm1hdGNoKFJlZ0V4cChyZWdleCwgXCJnXCIpKS5qb2luKFwiXFxuXCIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgdGhlIHBlbSBlbmNvZGVkIHByaXZhdGUga2V5XG4gICAgICogQHJldHVybnMge3N0cmluZ30gdGhlIHBlbSBlbmNvZGVkIHByaXZhdGUga2V5IHdpdGggaGVhZGVyL2Zvb3RlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHRSU0FLZXkucHJvdG90eXBlLmdldFByaXZhdGVLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBrZXkgPSBcIi0tLS0tQkVHSU4gUlNBIFBSSVZBVEUgS0VZLS0tLS1cXG5cIjtcbiAgICAgICAga2V5ICs9IEpTRW5jcnlwdFJTQUtleS53b3Jkd3JhcCh0aGlzLmdldFByaXZhdGVCYXNlS2V5QjY0KCkpICsgXCJcXG5cIjtcbiAgICAgICAga2V5ICs9IFwiLS0tLS1FTkQgUlNBIFBSSVZBVEUgS0VZLS0tLS1cIjtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHRoZSBwZW0gZW5jb2RlZCBwdWJsaWMga2V5XG4gICAgICogQHJldHVybnMge3N0cmluZ30gdGhlIHBlbSBlbmNvZGVkIHB1YmxpYyBrZXkgd2l0aCBoZWFkZXIvZm9vdGVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdFJTQUtleS5wcm90b3R5cGUuZ2V0UHVibGljS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIga2V5ID0gXCItLS0tLUJFR0lOIFBVQkxJQyBLRVktLS0tLVxcblwiO1xuICAgICAgICBrZXkgKz0gSlNFbmNyeXB0UlNBS2V5LndvcmR3cmFwKHRoaXMuZ2V0UHVibGljQmFzZUtleUI2NCgpKSArIFwiXFxuXCI7XG4gICAgICAgIGtleSArPSBcIi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLVwiO1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIG9iamVjdCBjb250YWlucyB0aGUgbmVjZXNzYXJ5IHBhcmFtZXRlcnMgdG8gcG9wdWxhdGUgdGhlIHJzYSBtb2R1bHVzXG4gICAgICogYW5kIHB1YmxpYyBleHBvbmVudCBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqPXt9XSAtIEFuIG9iamVjdCB0aGF0IG1heSBjb250YWluIHRoZSB0d28gcHVibGljIGtleVxuICAgICAqIHBhcmFtZXRlcnNcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgb2JqZWN0IGNvbnRhaW5zIGJvdGggdGhlIG1vZHVsdXMgYW5kIHRoZSBwdWJsaWMgZXhwb25lbnRcbiAgICAgKiBwcm9wZXJ0aWVzIChuIGFuZCBlKVxuICAgICAqIEB0b2RvIGNoZWNrIGZvciB0eXBlcyBvZiBuIGFuZCBlLiBOIHNob3VsZCBiZSBhIHBhcnNlYWJsZSBiaWdJbnQgb2JqZWN0LCBFIHNob3VsZFxuICAgICAqIGJlIGEgcGFyc2VhYmxlIGludGVnZXIgbnVtYmVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBKU0VuY3J5cHRSU0FLZXkuaGFzUHVibGljS2V5UHJvcGVydHkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIG9iaiA9IG9iaiB8fCB7fTtcbiAgICAgICAgcmV0dXJuIChvYmouaGFzT3duUHJvcGVydHkoXCJuXCIpICYmXG4gICAgICAgICAgICBvYmouaGFzT3duUHJvcGVydHkoXCJlXCIpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBvYmplY3QgY29udGFpbnMgQUxMIHRoZSBwYXJhbWV0ZXJzIG9mIGFuIFJTQSBrZXkuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvYmo9e31dIC0gQW4gb2JqZWN0IHRoYXQgbWF5IGNvbnRhaW4gbmluZSByc2Ega2V5XG4gICAgICogcGFyYW1ldGVyc1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBvYmplY3QgY29udGFpbnMgYWxsIHRoZSBwYXJhbWV0ZXJzIG5lZWRlZFxuICAgICAqIEB0b2RvIGNoZWNrIGZvciB0eXBlcyBvZiB0aGUgcGFyYW1ldGVycyBhbGwgdGhlIHBhcmFtZXRlcnMgYnV0IHRoZSBwdWJsaWMgZXhwb25lbnRcbiAgICAgKiBzaG91bGQgYmUgcGFyc2VhYmxlIGJpZ2ludCBvYmplY3RzLCB0aGUgcHVibGljIGV4cG9uZW50IHNob3VsZCBiZSBhIHBhcnNlYWJsZSBpbnRlZ2VyIG51bWJlclxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgSlNFbmNyeXB0UlNBS2V5Lmhhc1ByaXZhdGVLZXlQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgb2JqID0gb2JqIHx8IHt9O1xuICAgICAgICByZXR1cm4gKG9iai5oYXNPd25Qcm9wZXJ0eShcIm5cIikgJiZcbiAgICAgICAgICAgIG9iai5oYXNPd25Qcm9wZXJ0eShcImVcIikgJiZcbiAgICAgICAgICAgIG9iai5oYXNPd25Qcm9wZXJ0eShcImRcIikgJiZcbiAgICAgICAgICAgIG9iai5oYXNPd25Qcm9wZXJ0eShcInBcIikgJiZcbiAgICAgICAgICAgIG9iai5oYXNPd25Qcm9wZXJ0eShcInFcIikgJiZcbiAgICAgICAgICAgIG9iai5oYXNPd25Qcm9wZXJ0eShcImRtcDFcIikgJiZcbiAgICAgICAgICAgIG9iai5oYXNPd25Qcm9wZXJ0eShcImRtcTFcIikgJiZcbiAgICAgICAgICAgIG9iai5oYXNPd25Qcm9wZXJ0eShcImNvZWZmXCIpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBhcnNlIHRoZSBwcm9wZXJ0aWVzIG9mIG9iaiBpbiB0aGUgY3VycmVudCByc2Egb2JqZWN0LiBPYmogc2hvdWxkIEFUIExFQVNUXG4gICAgICogaW5jbHVkZSB0aGUgbW9kdWx1cyBhbmQgcHVibGljIGV4cG9uZW50IChuLCBlKSBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSB0aGUgb2JqZWN0IGNvbnRhaW5pbmcgcnNhIHBhcmFtZXRlcnNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIEpTRW5jcnlwdFJTQUtleS5wcm90b3R5cGUucGFyc2VQcm9wZXJ0aWVzRnJvbSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdGhpcy5uID0gb2JqLm47XG4gICAgICAgIHRoaXMuZSA9IG9iai5lO1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KFwiZFwiKSkge1xuICAgICAgICAgICAgdGhpcy5kID0gb2JqLmQ7XG4gICAgICAgICAgICB0aGlzLnAgPSBvYmoucDtcbiAgICAgICAgICAgIHRoaXMucSA9IG9iai5xO1xuICAgICAgICAgICAgdGhpcy5kbXAxID0gb2JqLmRtcDE7XG4gICAgICAgICAgICB0aGlzLmRtcTEgPSBvYmouZG1xMTtcbiAgICAgICAgICAgIHRoaXMuY29lZmYgPSBvYmouY29lZmY7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBKU0VuY3J5cHRSU0FLZXk7XG59KFJTQUtleSkpO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMgPSB7fV0gLSBBbiBvYmplY3QgdG8gY3VzdG9taXplIEpTRW5jcnlwdCBiZWhhdmlvdXJcbiAqIHBvc3NpYmxlIHBhcmFtZXRlcnMgYXJlOlxuICogLSBkZWZhdWx0X2tleV9zaXplICAgICAgICB7bnVtYmVyfSAgZGVmYXVsdDogMTAyNCB0aGUga2V5IHNpemUgaW4gYml0XG4gKiAtIGRlZmF1bHRfcHVibGljX2V4cG9uZW50IHtzdHJpbmd9ICBkZWZhdWx0OiAnMDEwMDAxJyB0aGUgaGV4YWRlY2ltYWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIHB1YmxpYyBleHBvbmVudFxuICogLSBsb2cgICAgICAgICAgICAgICAgICAgICB7Ym9vbGVhbn0gZGVmYXVsdDogZmFsc2Ugd2hldGhlciBsb2cgd2Fybi9lcnJvciBvciBub3RcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgSlNFbmNyeXB0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpTRW5jcnlwdChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLmRlZmF1bHRfa2V5X3NpemUgPSBwYXJzZUludChvcHRpb25zLmRlZmF1bHRfa2V5X3NpemUsIDEwKSB8fCAxMDI0O1xuICAgICAgICB0aGlzLmRlZmF1bHRfcHVibGljX2V4cG9uZW50ID0gb3B0aW9ucy5kZWZhdWx0X3B1YmxpY19leHBvbmVudCB8fCBcIjAxMDAwMVwiOyAvLyA2NTUzNyBkZWZhdWx0IG9wZW5zc2wgcHVibGljIGV4cG9uZW50IGZvciByc2Ega2V5IHR5cGVcbiAgICAgICAgdGhpcy5sb2cgPSBvcHRpb25zLmxvZyB8fCBmYWxzZTtcbiAgICAgICAgLy8gVGhlIHByaXZhdGUgYW5kIHB1YmxpYyBrZXkuXG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWV0aG9kIHRvIHNldCB0aGUgcnNhIGtleSBwYXJhbWV0ZXIgKG9uZSBtZXRob2QgaXMgZW5vdWdoIHRvIHNldCBib3RoIHRoZSBwdWJsaWNcbiAgICAgKiBhbmQgdGhlIHByaXZhdGUga2V5LCBzaW5jZSB0aGUgcHJpdmF0ZSBrZXkgY29udGFpbnMgdGhlIHB1YmxpYyBrZXkgcGFyYW1lbnRlcnMpXG4gICAgICogTG9nIGEgd2FybmluZyBpZiBsb2dzIGFyZSBlbmFibGVkXG4gICAgICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBrZXkgdGhlIHBlbSBlbmNvZGVkIHN0cmluZyBvciBhbiBvYmplY3QgKHdpdGggb3Igd2l0aG91dCBoZWFkZXIvZm9vdGVyKVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLnNldEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHRoaXMubG9nICYmIHRoaXMua2V5KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJBIGtleSB3YXMgYWxyZWFkeSBzZXQsIG92ZXJyaWRpbmcgZXhpc3RpbmcuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua2V5ID0gbmV3IEpTRW5jcnlwdFJTQUtleShrZXkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUHJveHkgbWV0aG9kIGZvciBzZXRLZXksIGZvciBhcGkgY29tcGF0aWJpbGl0eVxuICAgICAqIEBzZWUgc2V0S2V5XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdC5wcm90b3R5cGUuc2V0UHJpdmF0ZUtleSA9IGZ1bmN0aW9uIChwcml2a2V5KSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUga2V5LlxuICAgICAgICB0aGlzLnNldEtleShwcml2a2V5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByb3h5IG1ldGhvZCBmb3Igc2V0S2V5LCBmb3IgYXBpIGNvbXBhdGliaWxpdHlcbiAgICAgKiBAc2VlIHNldEtleVxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLnNldFB1YmxpY0tleSA9IGZ1bmN0aW9uIChwdWJrZXkpIHtcbiAgICAgICAgLy8gU2V0cyB0aGUgcHVibGljIGtleS5cbiAgICAgICAgdGhpcy5zZXRLZXkocHVia2V5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByb3h5IG1ldGhvZCBmb3IgUlNBS2V5IG9iamVjdCdzIGRlY3J5cHQsIGRlY3J5cHQgdGhlIHN0cmluZyB1c2luZyB0aGUgcHJpdmF0ZVxuICAgICAqIGNvbXBvbmVudHMgb2YgdGhlIHJzYSBrZXkgb2JqZWN0LiBOb3RlIHRoYXQgaWYgdGhlIG9iamVjdCB3YXMgbm90IHNldCB3aWxsIGJlIGNyZWF0ZWRcbiAgICAgKiBvbiB0aGUgZmx5IChieSB0aGUgZ2V0S2V5IG1ldGhvZCkgdXNpbmcgdGhlIHBhcmFtZXRlcnMgcGFzc2VkIGluIHRoZSBKU0VuY3J5cHQgY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIGJhc2U2NCBlbmNvZGVkIGNyeXB0ZWQgc3RyaW5nIHRvIGRlY3J5cHRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBkZWNyeXB0ZWQgc3RyaW5nXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdC5wcm90b3R5cGUuZGVjcnlwdCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBkZWNyeXB0ZWQgc3RyaW5nLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0S2V5KCkuZGVjcnlwdChiNjR0b2hleChzdHIpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUHJveHkgbWV0aG9kIGZvciBSU0FLZXkgb2JqZWN0J3MgZW5jcnlwdCwgZW5jcnlwdCB0aGUgc3RyaW5nIHVzaW5nIHRoZSBwdWJsaWNcbiAgICAgKiBjb21wb25lbnRzIG9mIHRoZSByc2Ega2V5IG9iamVjdC4gTm90ZSB0aGF0IGlmIHRoZSBvYmplY3Qgd2FzIG5vdCBzZXQgd2lsbCBiZSBjcmVhdGVkXG4gICAgICogb24gdGhlIGZseSAoYnkgdGhlIGdldEtleSBtZXRob2QpIHVzaW5nIHRoZSBwYXJhbWV0ZXJzIHBhc3NlZCBpbiB0aGUgSlNFbmNyeXB0IGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciB0aGUgc3RyaW5nIHRvIGVuY3J5cHRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlbmNyeXB0ZWQgc3RyaW5nIGVuY29kZWQgaW4gYmFzZTY0XG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdC5wcm90b3R5cGUuZW5jcnlwdCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBlbmNyeXB0ZWQgc3RyaW5nLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGhleDJiNjQodGhpcy5nZXRLZXkoKS5lbmNyeXB0KHN0cikpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChleCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXR0ZXIgZm9yIHRoZSBjdXJyZW50IEpTRW5jcnlwdFJTQUtleSBvYmplY3QuIElmIGl0IGRvZXNuJ3QgZXhpc3RzIGEgbmV3IG9iamVjdFxuICAgICAqIHdpbGwgYmUgY3JlYXRlZCBhbmQgcmV0dXJuZWRcbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBbY2JdIHRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgaWYgd2Ugd2FudCB0aGUga2V5IHRvIGJlIGdlbmVyYXRlZFxuICAgICAqIGluIGFuIGFzeW5jIGZhc2hpb25cbiAgICAgKiBAcmV0dXJucyB7SlNFbmNyeXB0UlNBS2V5fSB0aGUgSlNFbmNyeXB0UlNBS2V5IG9iamVjdFxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLmdldEtleSA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICAvLyBPbmx5IGNyZWF0ZSBuZXcgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgIGlmICghdGhpcy5rZXkpIHtcbiAgICAgICAgICAgIC8vIEdldCBhIG5ldyBwcml2YXRlIGtleS5cbiAgICAgICAgICAgIHRoaXMua2V5ID0gbmV3IEpTRW5jcnlwdFJTQUtleSgpO1xuICAgICAgICAgICAgaWYgKGNiICYmIHt9LnRvU3RyaW5nLmNhbGwoY2IpID09PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtleS5nZW5lcmF0ZUFzeW5jKHRoaXMuZGVmYXVsdF9rZXlfc2l6ZSwgdGhpcy5kZWZhdWx0X3B1YmxpY19leHBvbmVudCwgY2IpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIHRoZSBrZXkuXG4gICAgICAgICAgICB0aGlzLmtleS5nZW5lcmF0ZSh0aGlzLmRlZmF1bHRfa2V5X3NpemUsIHRoaXMuZGVmYXVsdF9wdWJsaWNfZXhwb25lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmtleTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlbSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcml2YXRlIGtleVxuICAgICAqIElmIHRoZSBrZXkgZG9lc24ndCBleGlzdHMgYSBuZXcga2V5IHdpbGwgYmUgY3JlYXRlZFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IHBlbSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwcml2YXRlIGtleSBXSVRIIGhlYWRlciBhbmQgZm9vdGVyXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEpTRW5jcnlwdC5wcm90b3R5cGUuZ2V0UHJpdmF0ZUtleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBwcml2YXRlIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMga2V5LlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRLZXkoKS5nZXRQcml2YXRlS2V5KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwZW0gZW5jb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJpdmF0ZSBrZXlcbiAgICAgKiBJZiB0aGUga2V5IGRvZXNuJ3QgZXhpc3RzIGEgbmV3IGtleSB3aWxsIGJlIGNyZWF0ZWRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBwZW0gZW5jb2RlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgcHJpdmF0ZSBrZXkgV0lUSE9VVCBoZWFkZXIgYW5kIGZvb3RlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLmdldFByaXZhdGVLZXlCNjQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJldHVybiB0aGUgcHJpdmF0ZSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIGtleS5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0S2V5KCkuZ2V0UHJpdmF0ZUJhc2VLZXlCNjQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlbSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwdWJsaWMga2V5XG4gICAgICogSWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0cyBhIG5ldyBrZXkgd2lsbCBiZSBjcmVhdGVkXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcGVtIGVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHB1YmxpYyBrZXkgV0lUSCBoZWFkZXIgYW5kIGZvb3RlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLmdldFB1YmxpY0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBwcml2YXRlIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMga2V5LlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRLZXkoKS5nZXRQdWJsaWNLZXkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHBlbSBlbmNvZGVkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwdWJsaWMga2V5XG4gICAgICogSWYgdGhlIGtleSBkb2Vzbid0IGV4aXN0cyBhIG5ldyBrZXkgd2lsbCBiZSBjcmVhdGVkXG4gICAgICogQHJldHVybnMge3N0cmluZ30gcGVtIGVuY29kZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHB1YmxpYyBrZXkgV0lUSE9VVCBoZWFkZXIgYW5kIGZvb3RlclxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBKU0VuY3J5cHQucHJvdG90eXBlLmdldFB1YmxpY0tleUI2NCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBwcml2YXRlIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMga2V5LlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRLZXkoKS5nZXRQdWJsaWNCYXNlS2V5QjY0KCk7XG4gICAgfTtcbiAgICBKU0VuY3J5cHQudmVyc2lvbiA9IFwiMy4wLjAtYmV0YS4xXCI7XG4gICAgcmV0dXJuIEpTRW5jcnlwdDtcbn0oKSk7XG5cbndpbmRvdy5KU0VuY3J5cHQgPSBKU0VuY3J5cHQ7XG5cbmV4cG9ydHMuSlNFbmNyeXB0ID0gSlNFbmNyeXB0O1xuZXhwb3J0cy5kZWZhdWx0ID0gSlNFbmNyeXB0O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpOyJdfQ==