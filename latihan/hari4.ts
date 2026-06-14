function terakhir<T> (arr: T[]): T {
return arr[arr.length - 1];
}

function bungkus<T> (nilai: T): T[] {
return [nilai];
}

function punyaId <T extends {id: number}>(item: T): number {
    return item.id;
}

const a = terakhir([1, 2, 3]);        // T jadi number → a: number
const b = terakhir(["x", "y"]);
const c = bungkus(5);
const d = bungkus("Aku");
const e = punyaId({id: 1,nama:"wildan"});
// const f = punyaId({umur: 1,nama:"wildan"});
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
// console.log(f);