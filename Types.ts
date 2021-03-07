// all TYPES
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any = [1, true, 'asd'];

enum Color { Red, Green, Blue};
let backgroundColor = Color.Red; // 0
let backgroundColor2 = Color.Blue; // 2


enum Color2 { Red = 123, Green = 0, Blue = 1 };
let bgc = Color2.Red; // 123
let bgc2 = Color2.Blue; // 1

let u; // any
let i = 3; // numbernpm install typescript


let x = 5; // its already the same as you would declare let x: number = 5;
// x = 'asd'; // throws an error, because its not dynamic anymore, to have dynamic typing, use "any"

let y: any = 5;
y = 'asd';  // OK :)


let z; // any type - automatically dynamic
z = 1;
z = 'asd'; // does not throw
z = true; // does not throw

// TUPLES !
let someTuple: [number, string];

someTuple = [2, 's'];

// someTuple = [2, 's', '']; outlined red, because we defined its number and string
// it behaves like an array of any, but with defined types in defined order 


// functions as params (like delegates in c#)
function doStuffik(param: string): void {
    console.log(param);
}

function doStuff(name: string, funkcyjka: (name: string) => void) {
    funkcyjka(name);
}

doStuff('Karol', doStuffik);
doStuff('Kodi', (something: string) => console.log(something));
