type Numereczek = number;

// let ilosc: Numereczek = 's'; // does not work
let ilosc: Numereczek = 3; // :)

// przyklad uzycia
type WiekPsa = number | string;

let wiekPsow: WiekPsa[];
// wiekPsow.push(true); // does not work
wiekPsow.push(2);
wiekPsow.push('3');


// jesli wiemy, ze apka dotyczy sie tylko 3 firm
type firma = 'msi' | 'asus' | 'a4tech';

function sprawdzProdukty(nazwaFirmy: firma): string {
    return 'lista produktow';
}

// sprawdzProdukty('asd'); // does not work
sprawdzProdukty('msi'); // :)