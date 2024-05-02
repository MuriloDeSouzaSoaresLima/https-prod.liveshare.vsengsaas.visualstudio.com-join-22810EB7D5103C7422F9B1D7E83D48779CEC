function incremento(x: number): number {
    let y: number = x;
    y++
    return y
}

let x: number = 0;

while (x < 5) {
    console.log(x);
    x = incremento(x);
}



let y: number = 10;

function decremento(x: number): number {
    let y: number = x;
    y++
    return y
}

while (y >= 1) {
    console.log(y);
    y = decremento(y);
}
