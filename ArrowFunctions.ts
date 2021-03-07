// to to samo co w C# lamba expressions

function DoStuff(msg: string) {
    console.log(msg);
}

// to to samo
let doStuff2 = function(msg: string) {
    console.log(msg);
}

// to to samo
let doStuff3 = (msg: string) => {
    console.log(msg);
}

// to to samo
let doStuff4 = msg => console.log(msg);

// to to samo
let doStuff5 = (msg: string) => console.log(msg);
