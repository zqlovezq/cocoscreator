System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DataViewBase, DataViewWriter, DataViewReader, _crd;

  _export({
    DataViewWriter: void 0,
    DataViewReader: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8bbb5+gpblHDLqSBmlhNArH", "DataViewRW", undefined);

      DataViewBase = class DataViewBase {
        constructor(buffer, byteOffset, byteLength) {
          this.m_len = void 0;
          this.m_pos = void 0;
          this.m_DataView = void 0;
          this.m_DataView = new DataView(buffer, byteOffset, byteLength);
          this.m_len = 0;
          this.m_pos = 0;
        }

        markEnd() {
          this.m_len = this.m_pos;
        }

        getLen() {
          return this.m_len;
        }

        getPos() {
          return this.m_pos;
        }

        setLen(len) {
          this.m_len = len;
        }

        resetPos() {
          this.m_pos = 0;
        }

        advance(num) {
          this.m_pos += num;
        }

        getCapacity() {
          return this.m_DataView.byteLength;
        }

        getBuffer() {
          return this.m_DataView.buffer;
        }

        getOffset() {
          return this.m_DataView.byteOffset;
        }

      };

      _export("DataViewWriter", DataViewWriter = class DataViewWriter extends DataViewBase {
        constructor(buffer, byteOffset, byteLength) {
          super(buffer, byteOffset, byteLength);
        }

        setBool(value) {
          this.setInt8(Number(value));
        }

        setInt8(value) {
          this.m_DataView.setInt8(this.m_pos, value);
          this.m_pos += 1;
        }

        setUint8(value) {
          this.setInt8(value);
        }

        setInt16(value) {
          this.m_DataView.setInt16(this.m_pos, value, true);
          this.m_pos += 2;
        }

        setUint16(value) {
          this.setInt16(value);
        }

        setInt32(value) {
          this.m_DataView.setInt32(this.m_pos, value, true);
          this.m_pos += 4;
        }

        setUint32(value) {
          this.setInt32(value);
        }

        setFloat32(value) {
          this.m_DataView.setFloat32(this.m_pos, value, true);
          this.m_pos += 4;
        }

        setFloat64(value) {
          this.m_DataView.setFloat64(this.m_pos, value, true);
          this.m_pos += 4;
        }

        setString(value) {
          var codeArray = new Array();

          for (var i = 0; i < value.length; ++i) {
            var code = value.charCodeAt(i);

            if (code < 128) {
              //1 byte
              codeArray.push(value.charCodeAt(i));
            } else if (code < 2048) {
              //2 bytes 110xxxxx 10xxxxxx
              var firstByte = code >> 6 | 192;
              var secondByte = code & 63 | 128;
              codeArray.push(firstByte);
              codeArray.push(secondByte);
            } else if (code < 65536) {
              //3 bytes 1110xxxx 10xxxxxx 10xxxxxx
              var _firstByte = code >> 12 | 224;

              var _secondByte = code >> 6 & 63 | 128;

              var thirdByte = code & 63 | 128;
              codeArray.push(_firstByte);
              codeArray.push(_secondByte);
              codeArray.push(thirdByte);
            } else if (code < 1114112) {
              //4 bytes 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
              var _firstByte2 = code >> 18 | 240;

              var _secondByte2 = code >> 12 & 63 | 128;

              var _thirdByte = code >> 6 & 63 | 128;

              var fourthByte = code & 63 | 128;
              codeArray.push(_firstByte2);
              codeArray.push(_secondByte2);
              codeArray.push(_thirdByte);
              codeArray.push(fourthByte);
            } else {
              throw new Error("not supported code");
            }
          }

          this.setInt32(codeArray.length); //长度

          for (var charCode of codeArray) {
            this.setUint8(charCode);
          }
        }

        getDataView() {
          return new DataView(this.m_DataView.buffer, this.m_DataView.byteOffset, this.m_len);
        }

        getArrayBuffer() {
          return this.m_DataView.buffer.slice(this.m_DataView.byteOffset, this.m_DataView.byteOffset + this.m_len);
        }

      });

      _export("DataViewReader", DataViewReader = class DataViewReader extends DataViewBase {
        constructor(buffer, byteOffset, byteLength) {
          super(buffer, byteOffset, byteLength);
        }

        getBool() {
          return Boolean(this.getInt8());
        }

        getInt8() {
          var data = this.m_DataView.getInt8(this.m_pos);
          this.m_pos += 1;
          return data;
        }

        getUint8() {
          var data = this.m_DataView.getUint8(this.m_pos);
          this.m_pos += 1;
          return data;
        }

        getInt16() {
          var data = this.m_DataView.getInt16(this.m_pos, true);
          this.m_pos += 2;
          return data;
        }

        getUint16() {
          var data = this.m_DataView.getUint16(this.m_pos, true);
          this.m_pos += 2;
          return data;
        }

        getInt32() {
          var data = this.m_DataView.getInt32(this.m_pos, true);
          this.m_pos += 4;
          return data;
        }

        getUint32() {
          var data = this.m_DataView.getUint32(this.m_pos, true);
          this.m_pos += 4;
          return data;
        }

        getFloat32() {
          var data = this.m_DataView.getFloat32(this.m_pos, true);
          this.m_pos += 4;
          return data;
        }

        getFloat64() {
          var data = this.m_DataView.getFloat64(this.m_pos, true);
          this.m_pos += 8;
          return data;
        }

        getString(len) {
          var str = "";
          var i = 0;

          while (i < len) {
            var firstByte = this.getUint8();

            if ((firstByte & 240) == 240) {
              //4 bytes 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
              if (i + 3 >= len) {
                return str;
              }

              var secondByte = this.getUint8();
              var thirdByte = this.getUint8();
              var fourthByte = this.getUint8();
              var code = (firstByte & 7) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
              str += String.fromCharCode(code);
              i += 4;
            } else if ((firstByte & 224) == 224) {
              //3 bytes 1110xxxx 10xxxxxx 10xxxxxx
              if (i + 2 >= len) {
                return str;
              }

              var _secondByte3 = this.getUint8();

              var _thirdByte2 = this.getUint8();

              var _code = (firstByte & 15) << 12 | (_secondByte3 & 63) << 6 | _thirdByte2 & 63;

              str += String.fromCharCode(_code);
              i += 3;
            } else if ((firstByte & 192) == 192) {
              //2 bytes 110xxxxx 10xxxxxx
              if (i + 1 >= len) {
                return str;
              }

              var _secondByte4 = this.getUint8();

              var _code2 = (firstByte & 31) << 6 | _secondByte4 & 63;

              str += String.fromCharCode(_code2);
              i += 2;
            } else {
              str += String.fromCharCode(firstByte);
              ++i;
            }
          }

          return str;
        }

        getLen() {
          return this.m_DataView.byteLength;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=386271e5920a89fa2bfa4ca84feafe2b330f9620.js.map