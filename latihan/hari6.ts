function simpanAbsensi(nama:string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!nama) {
                reject(new Error("Nama tidak boleh kosong."));
                return;
            }
            resolve(`Absensi ${nama} tersimpan.`);
        }, 1000);
    });
}

async function jalankan(nama: string) {
    try {
        const hasil = await simpanAbsensi(nama);
        console.log(hasil);
    }   
    catch (error) {
        console.error("Gagal menyimpan absensi:", error);
    }
}

jalankan("adi");