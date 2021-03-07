class SomeClass {
    get x(): number {
        return this._x;
    }

    set x(value: number) { // cannot have return type annotation
        if (value > 5) {
            this._x = value;
        }
    }

    constructor(private _x: number) {
        // lalala
    }
}