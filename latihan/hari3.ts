function formatNilai ( nilai: number | string) {
    // console.log(nilai.toUpperCase());
    if (typeof nilai === "number") {
        return nilai.toFixed(2);
    } else {
        return nilai.toUpperCase();
    }
}

function tampilkanJam (input : number | string): string {
    if (typeof input === "number") {
        return `${input} menit`
    } else {
        return input
    }
}

console.log(tampilkanJam("08:30"))