var MyPoint = /** @class */ (function () {
    function MyPoint(x, y) {
        this.height = x;
        this.width = y;
    }
    // constructor(x?: number, y?: number) { // x?: number to optional parametr jak w c# x = null
    //     this.height = x;
    //     this.width = y;
    // }
    MyPoint.prototype.Draw = function (name) {
        console.log("Point with name " + name + " and size " + this.height + " / " + this.width + " has been created");
    };
    MyPoint.prototype.Compare = function (someOtherPoint) {
        //... if (someOtherPoint.height == this.height)
        return true;
    };
    return MyPoint;
}());
var poincik = new MyPoint(3, 5);
var poincik2 = new MyPoint(3, 5);
var areSimilar = poincik.Compare(poincik2);
console.log(areSimilar);
