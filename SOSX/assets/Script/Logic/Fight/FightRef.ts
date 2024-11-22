export default class FightRef {
    private refCount = 0;

    public addRef() {
        this.refCount++
    }

    public decRef() {
        this.refCount--
        if(this.refCount < 0) {
            this.refCount = 0;
        }
    }

    public clear() {
        this.refCount = 0;
    }

    public get Ref() {
        return this.refCount
    }
}