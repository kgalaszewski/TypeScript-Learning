let cos = 'asd';

// niektore metody jak np .endsWith potrzebuja wiedziec, ze obiekt na ktorym wykonujemy operacje jest konkretnego 
// typu, w tym przypadku string
cos.endsWith('asd'); // tutaj wie, bo u gory przypisalismy string

let cosInnego;

(<string>cosInnego).endsWith('tdam');
(cosInnego as string).endsWith('tadam'); // to robi to samo
// takie rzutowanie nie zmienia wartosci na string, mowi tylko kompilatorowi, ze to jest string i kompilator nam ufa

