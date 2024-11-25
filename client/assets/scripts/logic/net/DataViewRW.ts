

class DataViewBase
{
    constructor(buffer: ArrayBufferLike, byteOffset?: number, byteLength?: number) {  
        this.m_DataView = new DataView(buffer, byteOffset, byteLength);
        this.m_len = 0;
        this.m_pos = 0;
    }

    public markEnd(){
        this.m_len = this.m_pos;
    }

    public getLen(): number {
        return this.m_len;
    }

    public getPos(): number {
        return this.m_pos;
    }

    public setLen(len: number) {
        this.m_len = len;
    }

    public resetPos() {
        this.m_pos = 0;
    }

    public advance(num: number) {
        this.m_pos += num;
    }

    public getCapacity() {
        return this.m_DataView.byteLength;
    }

    public getBuffer() {
        return this.m_DataView.buffer;
    }

    public getOffset() {
        return this.m_DataView.byteOffset;
    }

    protected m_len : number;
    protected m_pos : number;
    protected m_DataView : DataView;
}

export class DataViewWriter extends DataViewBase
{
    constructor(buffer: ArrayBufferLike, byteOffset?: number, byteLength?: number) {  
        super(buffer, byteOffset, byteLength);
    }

    public setBool(value: boolean) {
        this.setInt8(Number(value));
    }

    public setInt8(value: number) {
        this.m_DataView.setInt8(this.m_pos, value)
        this.m_pos += 1;
    }

    public setUint8(value: number) {
        this.setInt8(value);
    }

    public setInt16(value: number) {
        this.m_DataView.setInt16(this.m_pos, value, true)
        this.m_pos += 2;
    }

    public setUint16(value: number) {
        this.setInt16(value);
    }

    public setInt32(value: number) {
        this.m_DataView.setInt32(this.m_pos, value, true)
        this.m_pos += 4;
    }

    public setUint32(value: number) {
        this.setInt32(value);
    }

    public setFloat32(value: number) {
        this.m_DataView.setFloat32(this.m_pos, value, true)
        this.m_pos += 4;
    }

    public setFloat64(value: number) {
        this.m_DataView.setFloat64(this.m_pos, value, true)
        this.m_pos += 4;
    }

    public setString(value: string) {
        let codeArray = new Array<number>();
        for(let i = 0; i < value.length; ++i)
        {
            let code = value.charCodeAt(i);
            if(code < 128)
            {
                //1 byte
                codeArray.push(value.charCodeAt(i))
            }
            else if(code < 2048)
            {
                //2 bytes 110xxxxx 10xxxxxx
                let firstByte = (code >> 6) | 192;
                let secondByte =  (code & 63) | 128;
                codeArray.push(firstByte);
                codeArray.push(secondByte);
            }
            else if(code < 65536)
            {
                //3 bytes 1110xxxx 10xxxxxx 10xxxxxx
                let firstByte = (code >> 12) | 224;
                let secondByte =  ((code >> 6) & 63) | 128;
                let thirdByte =  (code & 63) | 128;
                codeArray.push(firstByte);
                codeArray.push(secondByte);
                codeArray.push(thirdByte);
            }
            else if(code < 1114112)
            {
                //4 bytes 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
                let firstByte = (code >> 18) | 240;
                let secondByte =  ((code >> 12) & 63) | 128;
                let thirdByte =   ((code >> 6) & 63) | 128;
                let fourthByte =  (code & 63) | 128;
                codeArray.push(firstByte);
                codeArray.push(secondByte);
                codeArray.push(thirdByte);
                codeArray.push(fourthByte);
            }
            else
            {
                throw new Error("not supported code")
            }
        }
        this.setInt32(codeArray.length); //长度
        for(let charCode of codeArray)
        {
            this.setUint8(charCode);
        }
    }

    public getDataView() : DataView {
        return new DataView(this.m_DataView.buffer, this.m_DataView.byteOffset, this.m_len);
    }
    public getArrayBuffer(): ArrayBuffer {
        return this.m_DataView.buffer.slice(this.m_DataView.byteOffset, this.m_DataView.byteOffset + this.m_len)
    }
}

export class DataViewReader extends DataViewBase
{
    constructor(buffer: ArrayBufferLike, byteOffset?: number, byteLength?: number) {  
        super(buffer, byteOffset, byteLength);
    }

    public getBool(): boolean {
        return Boolean(this.getInt8());
    }

    public getInt8(): number {
        let data = this.m_DataView.getInt8(this.m_pos)
        this.m_pos += 1;
        return data;
    }

    public getUint8(): number {
        let data = this.m_DataView.getUint8(this.m_pos)
        this.m_pos += 1;
        return data;
    }

    public getInt16(): number {
        let data = this.m_DataView.getInt16(this.m_pos, true)
        this.m_pos += 2;
        return data;
    }

    public getUint16(): number {
        let data = this.m_DataView.getUint16(this.m_pos, true)
        this.m_pos += 2;
        return data;
    }

    public getInt32(): number {
        let data = this.m_DataView.getInt32(this.m_pos, true)
        this.m_pos += 4;
        return data;
    }

    public getUint32(): number {
        let data = this.m_DataView.getUint32(this.m_pos, true)
        this.m_pos += 4;
        return data;
    }

    public getFloat32(): number {
        let data = this.m_DataView.getFloat32(this.m_pos, true)
        this.m_pos += 4;
        return data;
    }

    public getFloat64(): number {
        let data = this.m_DataView.getFloat64(this.m_pos, true)
        this.m_pos += 8;
        return data;
    }

    public getString(len: number): string {
        let str: string = "";
        let i: number = 0;
        while(i < len)
        {
            let firstByte = this.getUint8();
            if((firstByte & 240) == 240)
            {
                //4 bytes 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
                if(i + 3 >= len)
                {
                    return str;
                }
                let secondByte =  this.getUint8();
                let thirdByte =   this.getUint8();
                let fourthByte =  this.getUint8();
                let code = ((firstByte & 7) << 18) | ((secondByte & 63) << 12) | ((thirdByte & 63) << 6) | (fourthByte & 63);
                str += String.fromCharCode(code);

                i += 4;
            }
            else if((firstByte & 224) == 224)
            {
                //3 bytes 1110xxxx 10xxxxxx 10xxxxxx
                if(i + 2 >= len)
                {
                    return str;
                }
                let secondByte =  this.getUint8();
                let thirdByte =   this.getUint8();
                let code = ((firstByte & 15) << 12) | ((secondByte & 63) << 6) | (thirdByte & 63);
                str += String.fromCharCode(code);
                i += 3;
            }
            else if((firstByte & 192) == 192)
            {
                //2 bytes 110xxxxx 10xxxxxx
                if(i + 1 >= len)
                {
                    return str;
                }
                let secondByte =  this.getUint8();
                let code = ((firstByte & 31) << 6) | (secondByte & 63);
                str += String.fromCharCode(code);
                i += 2;
            }
            else
            {
                str += String.fromCharCode(firstByte);
                ++i;
            }
        }
        return str;
    }

    public getLen(): number {
        return this.m_DataView.byteLength;
    }
}