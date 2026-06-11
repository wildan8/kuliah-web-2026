# WEB-2026: Kembali ke Web Engineering

Program belajar mandiri 24 minggu untuk kembali ke industri IT sebagai web engineer.
Profil mahasiswa: lulusan Sistem Informasi, mantan software engineer (NestJS/Node), saat ini bekerja di luar bidang IT. Waktu belajar 1-2 jam per hari.

## Aturan kuliah

1. Setiap minggu wajib menghasilkan kode yang di-push ke GitHub.
2. Minggu 1-7: kode diketik sendiri. AI hanya boleh menjelaskan konsep, mereview kode, dan memberi petunjuk bertahap. Tidak boleh menuliskan solusi penuh.
3. Minggu 8 ke atas: AI boleh dipakai sebagai pair programmer.
4. Satu proyek inti tumbuh sepanjang semester: sistem inventory/POS untuk Akar Coffee (bisnis nyata milik mahasiswa).
5. UTS di minggu 7, UAS (capstone) di minggu 23-24.

## Silabus

### Minggu 0: Prasyarat dan setup (sudah dikuasai)
- Instal Git, buat akun GitHub
- Instal Claude Code dan autentikasi
- Dasar terminal dan git: init, add, commit, push
- Buat repo kuliah-web-2026 dengan CLAUDE.md dan KURIKULUM.md
- Output: repo live di GitHub, push pertama berhasil

### Modul 1: TypeScript (Minggu 1-3)
- Minggu 1: types, interface, union, narrowing. Tugas: konversi satu script JS lama ke TS.
- Minggu 2: generics, utility types, async/await. Tugas: CLI tool kecil (contoh: parser CSV).
- Minggu 3: tooling: tsconfig, ESLint, Vitest. Tugas: unit test untuk CLI minggu 2.

### Modul 2: React + Tailwind (Minggu 4-7)
- Minggu 4: komponen, props, state, event. Tugas: UI kartu menu Akar Coffee (data dummy).
- Minggu 5: hooks (useEffect), data fetching, form. Tugas: form input transaksi dengan validasi.
- Minggu 6: Tailwind, layout responsif, komposisi komponen. Tugas: styling ulang tugas minggu 4-5.
- Minggu 7: UTS. Proyek mini: dashboard penjualan Akar Coffee (frontend, data dummy).

### Modul 3: Next.js (Minggu 8-12)
- Minggu 8-9: App Router, server components, routing. Tugas: migrasi dashboard ke Next.js.
- Minggu 10-11: API routes, server actions, autentikasi (NextAuth). Tugas: login multi-role (owner/staff).
- Minggu 12: caching, error handling, struktur proyek. Tugas: refactor dan dokumentasi README.

### Modul 4: Database (Minggu 13-15)
- Minggu 13-14: PostgreSQL, desain skema, Prisma. Tugas: skema inventory dan BOM Akar Coffee.
- Minggu 15: relasi, transaksi, migrasi. Tugas: CRUD penuh terhubung ke dashboard.

### Modul 5: DevOps dasar (Minggu 16-18)
- Minggu 16-17: Docker, docker-compose. Tugas: containerize aplikasi.
- Minggu 18: CI/CD dengan GitHub Actions, deploy ke Vercel atau VPS. Tugas: aplikasi live di production.

### Modul 6: AI Engineering (Minggu 19-22)
- Minggu 19-20: LLM API, streaming, tool use. Tugas: fitur chat "tanya data penjualan".
- Minggu 21-22: RAG dasar, embeddings, pgvector. Tugas: asisten SOP Akar Coffee (pencarian dari dokumen SOP).

### Modul 7: Capstone (Minggu 23-24)
- Finalisasi sistem inventory/POS, polish, dokumentasi.
- Perbarui CV dengan proyek capstone.
- Kirim minimal 10 lamaran kerja.

## Kriteria kelulusan

- Satu aplikasi fullstack live di production dengan user nyata
- Repo GitHub aktif dengan riwayat commit konsisten 24 minggu
- CV diperbarui dan lamaran terkirim

## Status saat ini

Minggu aktif: 0 (setup)
Catatan progres: 
- Minggu 0 selesai: alur git sudah di kuasai
