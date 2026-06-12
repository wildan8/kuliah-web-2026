# WEB-2026: Kembali ke Web Engineering

Program belajar mandiri 24 minggu untuk kembali ke industri IT sebagai web engineer.
Profil mahasiswa: lulusan Sistem Informasi, mantan software engineer (NestJS/Node), saat ini bekerja di luar bidang IT. Waktu belajar 1-2 jam per hari.

## Proyek inti

Sistem Manajerial Internal Perusahaan (web app fullstack).
Modul pertama yang dibangun: SISTEM ABSENSI, dengan spesifikasi:
- Login per karyawan
- Role (admin, manager, staff)
- Alur approval (pengajuan izin/cuti disetujui atasan)
- Absensi dengan foto, dilanjutkan verifikasi wajah (face recognition)

Goal pertengahan semester (mid goal): sistem absensi versi 1 live di production.
Goal akhir semester: sistem absensi lengkap dengan face recognition, plus fondasi modul manajerial lain (data karyawan, laporan).

## Aturan kuliah

1. Setiap minggu wajib menghasilkan kode yang di-push ke GitHub.
2. Minggu 1-7: kode diketik sendiri. AI hanya boleh menjelaskan konsep, mereview kode, dan memberi petunjuk bertahap. Tidak boleh menuliskan solusi penuh.
3. Minggu 8 ke atas: AI boleh dipakai sebagai pair programmer.
4. Satu proyek inti tumbuh sepanjang semester mengikuti silabus.
5. UTS di minggu 7, UAS (capstone) di minggu 23-24.

## Silabus

### Minggu 0: Prasyarat dan setup (selesai)
- Git, GitHub, Claude Code, alur commit dan push

### Modul 1: TypeScript (Minggu 1-3)
- Minggu 1: types, interface, union, narrowing. Tugas: konversi satu script JS lama ke TS.
- Minggu 2: generics, utility types, async/await. Tugas: CLI tool kecil (contoh: parser CSV data karyawan).
- Minggu 3: tooling: tsconfig, ESLint, Vitest. Tugas: unit test untuk CLI minggu 2.

### Modul 2: React + Tailwind (Minggu 4-7)
- Minggu 4: komponen, props, state, event. Tugas: UI kartu profil karyawan (data dummy).
- Minggu 5: hooks (useEffect), data fetching, form. Tugas: form pengajuan izin/cuti dengan validasi.
- Minggu 6: Tailwind, layout responsif, komposisi komponen. Tugas: styling ulang tugas minggu 4-5.
- Minggu 7: UTS. Proyek mini: dashboard absensi (frontend, data dummy): daftar karyawan, status hadir/izin, riwayat absensi.

### Modul 3: Next.js (Minggu 8-12)
- Minggu 8-9: App Router, server components, routing. Tugas: migrasi dashboard absensi ke Next.js.
- Minggu 10-11: API routes, server actions, autentikasi (NextAuth/Auth.js). Tugas: login per karyawan dengan role admin/manager/staff, proteksi halaman per role.
- Minggu 12: caching, error handling, struktur proyek. Tugas: refactor dan dokumentasi README.

### Modul 4: Database (Minggu 13-15)
- Minggu 13-14: PostgreSQL, desain skema, Prisma. Tugas: skema karyawan, absensi, pengajuan izin (relasi user-role-attendance-leave_request).
- Minggu 15: relasi, transaksi, migrasi. Tugas: alur approval lengkap: staff mengajukan izin, manager menyetujui/menolak, status tercatat.

### Modul 5: DevOps dasar + kamera (Minggu 16-18)
- Minggu 16: capture foto absensi via kamera browser (getUserMedia), upload dan simpan foto check-in/check-out.
- Minggu 17: Docker, docker-compose. Tugas: containerize aplikasi.
- Minggu 18: CI/CD dengan GitHub Actions, deploy. Tugas: MID GOAL TERCAPAI: sistem absensi v1 live (login, role, approval, absensi foto).

### Modul 6: AI Engineering (Minggu 19-22)
- Minggu 19-20: face detection dan face embeddings (face-api.js/Human). Tugas: verifikasi wajah saat absen: foto check-in dicocokkan dengan foto referensi karyawan.
- Minggu 21-22: LLM API, tool use. Tugas: fitur "tanya data absensi" untuk manager (contoh: siapa yang paling sering terlambat bulan ini).

### Modul 7: Capstone (Minggu 23-24)
- Perluasan fondasi manajerial: modul data karyawan dan laporan rekap absensi (export).
- Polish, dokumentasi, finalisasi.
- Perbarui CV dengan proyek capstone, kirim minimal 10 lamaran kerja.

## Catatan teknis face recognition

- Bangun bertahap: simpan foto dulu (minggu 16), verifikasi wajah belakangan (minggu 19-20). Sistem harus tetap berfungsi tanpa recognition.
- Verifikasi wajah dipakai sebagai pendukung, bukan satu-satunya bukti kehadiran (akurasi tidak pernah 100%, ada risiko spoofing via foto).
- Foto wajah adalah data biometrik: simpan seaman mungkin, akses dibatasi role admin, ada persetujuan karyawan.

## Kriteria kelulusan

- Sistem absensi live di production dengan login, role, approval, absensi foto, dan verifikasi wajah
- Repo GitHub aktif dengan riwayat commit konsisten 24 minggu
- CV diperbarui dan lamaran terkirim

## Status saat ini

Minggu aktif: 1
Catatan progres:
- Minggu 0 selesai: alur git sudah dikuasai

