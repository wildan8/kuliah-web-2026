// // Rekap kehadiran karyawan Akar Coffee (versi JS lama, belum bertipe)
// // Tugas: konversi file ini ke TypeScript yang bertipe rapi.

// const dataAbsensi = [
//   { nama: "Wildan", status: "hadir", jamMasuk: "08:00", jamKeluar: "16:00" },
//   { nama: "Sari", status: "izin", jamMasuk: null, jamKeluar: null },
//   { nama: "Budi", status: "hadir", jamMasuk: "09:15", jamKeluar: "17:00" },
//   { nama: "Tari", status: "alpha", jamMasuk: null, jamKeluar: null },
// ];

// // ubah "08:30" menjadi total menit sejak tengah malam
// function keMenit(jam) {
//   const bagian = jam.split(":");
//   const jamnya = Number(bagian[0]);
//   const menitnya = Number(bagian[1]);
//   return jamnya * 60 + menitnya;
// }

// // hitung durasi kerja (dalam jam) untuk satu record
// function durasiKerja(record) {
//   if (record.status !== "hadir") {
//     return 0;
//   }
//   const masuk = keMenit(record.jamMasuk);
//   const keluar = keMenit(record.jamKeluar);
//   return (keluar - masuk) / 60;
// }

// // karyawan dianggap terlambat kalau masuk lewat dari jam 08:00
// function terlambat(record) {
//   if (record.status !== "hadir") {
//     return false;
//   }
//   return keMenit(record.jamMasuk) > keMenit("08:00");
// }

// // buat ringkasan untuk seluruh data
// function buatRekap(data) {
//   let totalHadir = 0;
//   let totalJam = 0;
//   const namaTerlambat = [];

//   for (const record of data) {
//     if (record.status === "hadir") {
//       totalHadir = totalHadir + 1;
//       totalJam = totalJam + durasiKerja(record);
//       if (terlambat(record)) {
//         namaTerlambat.push(record.nama);
//       }
//     }
//   }

//   return {
//     totalHadir: totalHadir,
//     totalJam: totalJam,
//     namaTerlambat: namaTerlambat,
//   };
// }

// const hasil = buatRekap(dataAbsensi);
// console.log(hasil);
