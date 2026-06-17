interface Karyawan {
  id: number;
  nama: string;
  peran: "admin" | "manager" | "staff";
  aktif: boolean;
}

type KaryawanTanpaId = Omit<Karyawan, "id">;
type KartuNama = Pick<Karyawan,"nama"| "peran">;

function patch(data: Partial<Karyawan>) {
    console.log(data);
}

type RecordKaryawan = Record<"pagi" | "siang" | "malam", number>
type KaryawanEditable = Partial<Karyawan>;

// type Peran = "admin" | "manager" | "staff";
type PeranNonAdmin = Exclude<Peran, "admin">;

function CariKaryawan(id: number): Karyawan| null {
  return {} as Karyawan;
}
type HasilCari = ReturnType<typeof CariKaryawan>;



