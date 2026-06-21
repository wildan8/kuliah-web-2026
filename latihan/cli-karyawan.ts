import { readFile } from "node:fs/promises";

async function main(){
    const csvKaryawan = await readFile("latihan/data/karyawan.csv", "utf-8");
    console.log("parse karyawan",parseKaryawan(csvKaryawan));
    console.log("ringkasan karyawan",ringkasanPerPeran(parseKaryawan(csvKaryawan).valid));

}

type Peran = "admin" | "manager" | "staff";
interface Karyawan {
  id: number;
  nama: string;
  peran: Peran;
  aktif: boolean;
}


function isKaryawan(value:string): value is Peran {
    return value === "admin" || value === "manager" || value === "staff";
}

type ParseResult = {
    valid: Karyawan[];
    errors: string[];
};

function parseKaryawan(teks: string): ParseResult {
    const hasil: ParseResult = {
        valid: [],
        errors: []
    };

    const baris = teks.split("\n");
    const dataBaris = baris.slice(1);

    for (const [index, barisItem] of dataBaris.entries()) {
        try {
            const kolom = barisItem.split(",").map(k => k.trim());

            if (kolom.length !== 4) {
                throw new Error(
                    `Baris ${index + 1}: ditemukan ${kolom.length} kolom, seharusnya 4`
                );
            }

            const id = Number(kolom[0]);
            if (!Number.isInteger(id)) {
                throw new Error(`Baris ${index + 1}: ID tidak valid (${kolom[0]})`);
            }

            if (!isKaryawan(kolom[2])) {
                throw new Error(`Baris ${index + 1}: Peran tidak valid (${kolom[2]})`);
            }

            const aktif =
                kolom[3].toLowerCase() === "true"
                    ? true
                    : kolom[3].toLowerCase() === "false"
                    ? false
                    : (() => {
                          throw new Error(
                              `Baris ${index + 1}: nilai aktif harus true/false (${kolom[3]})`
                          );
                      })();

            hasil.valid.push({
                id,
                nama: kolom[1],
                peran: kolom[2],
                aktif
            });

        } catch (err) {
            hasil.errors.push((err as Error).message);
        }
    }

    return hasil;
}



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

main()