interface IPoint {
    height: number;
    width: number;

    Draw: (name: string) => void;

    Compare: (anotherOne: IPoint) => boolean;
}

class MyPoint implements IPoint {
    private x: number;
    height: number;
    width: number;
    protected someField: number;

    constructor(x: number, y: number) {
        this.height = x;
        this.width = y;
    }

    // constructor(x?: number, y?: number) { // x?: number to optional parametr jak w c# x = null
    //     this.height = x;
    //     this.width = y;
    // }

    Draw(name: string): void {
        console.log(`Point with name ${name} and size ${this.height} / ${this.width} has been created`)
    }

    Compare(someOtherPoint: IPoint): boolean {
        //... if (someOtherPoint.height == this.height)
        return true;
    }
}

let poincik = new MyPoint(3, 5);
let poincik2 = new MyPoint(3, 5);
let areSimilar = poincik.Compare(poincik2);
console.log(areSimilar);

class SomeOtherClass extends MyPoint {
    // now we do not need to implement interface, because MyPoint already has that

    DoStuff(): void {
        // here is what we can access from SomeOtherClass
        this.height = 2;
        this.width = 3;
        this.someField = 5; // because it was marked protected
        // this.x = 6; outlined red because not accessible, its pirvate
    }
}

class AnotherOne {
    constructor(private x: string, public y: number, protected d: boolean) {
        // when we specify constructor like this with private modifier, ts will create field for us
        // and value will be alredy here like if you did this.x = x
    }
}