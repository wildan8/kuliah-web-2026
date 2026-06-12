let nama : string = "wildan"
let umur : number = 26
let isMahasiswa = true // inference

console.log(nama)
console.log(umur)
console.log(isMahasiswa)


function keliling (sisi:number) :number {
    return sisi * 4
}

//  1. error ini terjadi karena parameter yang di harapkan function adalah sebuah number, namun input yang ada malah menggunakan string
//  2. dalam js mengembalikan NaN, daji coder tidak bisa mengetahui langsung kesalahannya di titik mana
console.log(keliling("lima"))