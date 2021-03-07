// Union types
function doStuff(someParam: number | string, otherParam: number | boolean | string, anotherParam: number) : string {
    let result: any = anotherParam;
    if (typeof someParam === 'number' && typeof otherParam === 'number') {
        result += <number>someParam + <number>otherParam;
        console.log(result); 
    }
    else {
        console.log('given arguments are not numeric')
        result = someParam.toString() + otherParam.toString() + anotherParam.toString();
    }

    return result;
}

let kodiOrMarkiz: 'Kodi' | 'Markiz'; // defines specific strings as the only accepted types and values
kodiOrMarkiz = 'Kodi'; // ok
// kodiOrMarkiz = 'Szczur'; // does not work

// Literal types
let something: string = 'asd';
let somethingParsedToNumber: number = +something; // it is now a number
let somethingParsedToNumber2: number = parseFloat(something); // same as above