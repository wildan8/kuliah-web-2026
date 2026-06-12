interface Karyawan {
    nama: string,
    umur: number,
    aktif: boolean,
    peran: "admin"|"manager"|"staff"
}

const user_karyawan : Karyawan = {
    nama: "wildan",
    umur: 26,
    aktif: true,
    peran: "admin"
}