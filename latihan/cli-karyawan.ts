type Peran = "admin" | "manager" | "staff";
interface Karyawan {
  id: number;
  nama: string;
  peran: Peran;
  aktif: boolean;
}

const csvKaryawan = `id,nama,peran,aktif
1a,Adi,admin,true
2,ANDRE,staff,true
3,vincent,admin, true
4,Budi,manager,false
5,Citra,staff,true`;

function isInt(value: number): number {
    if (value === undefined || value === null || isNaN(value)) {
        throw new Error("Nilai tidak boleh undefined/null/teks");
    } 
    return value;
}

function parseKaryawan(teks: string):Karyawan[] {
    const baris = teks.split("\n");
    const dataBaris = baris.slice(1);
    const colKaryawan = dataBaris.map((baris, index) => {
        const kolom = baris.split(","); 
        if (kolom.length !== 4) {
            throw new Error(`pada data ke ${index + 1} ditemukan ${kolom.length} kolom, seharusnya 4 kolom`);
        }
        if(!isKaryawan(kolom[2])) {
                 throw new Error(`Peran tidak valid: ${kolom[2]}`);
            }
        return {
            id: isInt(Number(kolom[0])),
            nama: kolom[1],
            peran: kolom[2],
            aktif: kolom[3] === "true"
        };
    })
    return colKaryawan;
}

function isKaryawan(value:string): value is Peran {
    return value === "admin" || value === "manager" || value === "staff";
}

console.log(parseKaryawan(csvKaryawan));

function ringkasanPerPeran(data: Karyawan[]): Record<Peran, number> {
    const hitung: Record<Peran, number> = {
        admin: 0,
        manager: 0,
        staff: 0
    };
    data.forEach(karyawan => {
        hitung[karyawan.peran]++;
    });
    return hitung;
}