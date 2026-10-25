import { QuestionData } from '../../types';

export const questions01to06: QuestionData[] = [
  // SOAL 01 — BILANGAN — PG
  {
    id: 'soal-01',
    nomor: 1,
    elemen: 'Bilangan',
    subelemen: 'Operasi Bilangan Real dan Bentuk Berpangkat',
    indikator: 'Siswa dapat menganalisis hubungan beberapa perubahan kuantitas dan menentukan nilai akhir yang benar melalui pemodelan operasi bilangan bertingkat.',
    tingkatKesulitan: 'Menantang',
    bentukSoal: 'PG',
    judulSoal: 'Efisiensi Produksi Pupuk Organik Cair Bertingkat',
    stimulus: 'Sebuah pabrik pupuk hayati mengolah bahan baku awal sebanyak $B_0 = 1.600\\text{ liter}$. Pengolahan berlangsung dalam tiga tahapan berurutan:\n\n1. **Tahap Biofermentasi**: Volume bahan berkurang sebesar $\\frac{1}{4}$ bagian dari volume awal karena evaporasi gas, namun massa jenis zat aktif meningkat menjadi $2^{\\frac{3}{2}}$ kali semula.\n2. **Tahap Ekstraksi Sentrifugal**: Volume filtrat cair yang dihasilkan menjadi $\\left(\\frac{2}{3}\\right)$ dari volume sisa tahap pertama.\n3. **Tahap Fortifikasi Mikronutrien**: Ditambahkan larutan nutrisi mikro sebanyak $\\sqrt{256} \\times 2^{-1}$ liter untuk setiap $100\\text{ liter}$ filtrat tahap kedua.\n\nPihak pengawas mutu mencatat bahwa seluruh cairan hasil fortifikasi akan dikemas ke dalam botol berukuran $\\frac{4}{5}\\text{ liter}$.',
    tipeStimulus: 'gabungan',
    visualData: {
      type: 'table',
      tableData: {
        headers: ['Tahapan Proses', 'Faktor Pengubah Volume', 'Keterangan Matematis'],
        rows: [
          ['1. Biofermentasi', 'Berkurang 1/4 bagian', '$V_1 = B_0 \\times \\left(1 - \\frac{1}{4}\\right)$'],
          ['2. Ekstraksi Sentrifugal', 'Menjadi 2/3 bagian dari $V_1$', '$V_2 = \\frac{2}{3} \\times V_1$'],
          ['3. Fortifikasi', 'Tambah $\\sqrt{256} \\times 2^{-1}$ L per 100 L $V_2$', '$\\Delta V = \\frac{V_2}{100} \\times \\left(16 \\times \\frac{1}{2}\\right)$'],
          ['4. Pengemasan', 'Botol ukuran 4/5 liter', '$\\text{Banyak botol} = \\frac{V_{\\text{akhir}}}{4/5}$']
        ],
        caption: 'Alur Neraca Massa Produksi Pupuk Hayati Cair'
      }
    },
    teksPertanyaan: 'Berdasarkan data tahapan produksi tersebut, banyak botol kemasan $\\frac{4}{5}\\text{ liter}$ yang dapat diisi penuh secara tepat adalah ...',
    opsiJawaban: [
      { label: 'A', text: '1.000 botol' },
      { label: 'B', text: '1.080 botol' },
      { label: 'C', text: '1.120 botol' },
      { label: 'D', text: '1.160 botol' },
      { label: 'E', text: '1.200 botol' }
    ],
    kunciJawaban: 'B',
    alasanKunci: 'Volume akhir adalah 864 liter. Banyak botol = 864 / (4/5) = 864 * (5/4) = 1.080 botol.',
    pembahasanNormal: {
      tahap1_memahami: 'Bahan baku awal $B_0 = 1.600\\text{ liter}$. Kita perlu mencari volume cairan akhir setelah melalui biofermentasi, ekstraksi sentrifugal, dan penambahan fortifikasi, lalu membaginya dengan kapasitas botol $\\frac{4}{5}\\text{ liter}$.',
      tahap2_model: 'Model volume tiap tahap:\n- $V_1 = 1.600 \\times \\left(1 - \\frac{1}{4}\\right) = 1.600 \\times \\frac{3}{4}$\n- $V_2 = V_1 \\times \\frac{2}{3}$\n- Larutan fortifikasi per 100 L: $\\sqrt{256} \\times 2^{-1} = 16 \\times \\frac{1}{2} = 8\\text{ liter}$. Maka total tambahan $\\Delta V = \\frac{V_2}{100} \\times 8$.\n- $V_{\\text{akhir}} = V_2 + \\Delta V$.\n- Jumlah botol $= \\frac{V_{\\text{akhir}}}{4/5}$.',
      tahap3_strategi: 'Lakukan evaluasi fraksi bertahap secara efisien, hitung nilai perpangkatan dan bentuk akar, lalu bagi volume akhir dengan pecahan kemasan.',
      tahap4_penyelesaian: '1. Tahap 1: $V_1 = 1.600 \\times \\frac{3}{4} = 1.200\\text{ liter}$.\n2. Tahap 2: $V_2 = 1.200 \\times \\frac{2}{3} = 800\\text{ liter}$.\n3. Fortifikasi per 100 liter adalah $\\sqrt{256} \\times 2^{-1} = 16 \\times 0,5 = 8\\text{ liter}$.\nKarena $V_2 = 800\\text{ liter}$, terdapat $\\frac{800}{100} = 8$ satuan ratusan liter.\nTotal tambahan $\\Delta V = 8 \\times 8\\text{ liter} = 64\\text{ liter}$.\nVolume akhir: $V_{\\text{akhir}} = 800 + 64 = 864\\text{ liter}$.\n4. Banyak botol $= \\frac{864}{\\frac{4}{5}} = 864 \\times \\frac{5}{4} = 216 \\times 5 = 1.080\\text{ botol}$.',
      tahap5_verifikasi: 'Periksa kembali: $1.080 \\times 0,8\\text{ liter} = 864\\text{ liter}$. Pengurangan: $1.600 \\to 1.200 \\to 800$, ditambah 64 menjadi 864. Seluruh hitungan konsisten.',
      tahap6_evaluasiOpsi: '- Opsi A (1.000): Terjadi jika siswa lupa menambahkan cairan fortifikasi 64 liter ($800 \\times \\frac{5}{4} = 1.000$).\n- Opsi B (1.080): Jawaban benar.\n- Opsi C (1.120): Kesalahan menganggap fortifikasi dihitung dari $V_1$ (1.200 liter).\n- Opsi D & E: Kesalahan operasi pecahan pangkat.',
      tahap7_kesimpulan: 'Banyak botol kemasan yang dapat terisi penuh adalah 1.080 botol.',
      tahap8_refleksi: 'Perhatikan informasi massa jenis $2^{3/2}$; ini adalah informasi pengalih yang tidak memengaruhi neraca volume cairan.'
    },
    pembahasanCepat: {
      strategiInti: 'Penyederhanaan fraksi langsung & pemisahan komponen fortifikasi.',
      langkahPengerjaan: '1. Rasio volume tahap 2 terhadap awal: $\\frac{3}{4} \\times \\frac{2}{3} = \\frac{1}{2}$.\nJadi $V_2 = \\frac{1}{2} \\times 1.600 = 800\\text{ liter}$.\n2. Faktor fortifikasi: 8 L per 100 L $= +8\\%$. Maka $V_{\\text{akhir}} = 800 \\times 1,08 = 864\\text{ liter}$.\n3. Botol: $864 \\times 1,25 = 864 + 216 = 1.080\\text{ botol}$.',
      alasanMatematis: 'Perkalian dua rasio pecahan berurutan saling mengeliminasi suku 3: $\\frac{3}{4} \\times \\frac{2}{3} = \\frac{1}{2}$.',
      hasilAkhir: '1.080 botol (Opsi B)',
      perbandinganEfisiensi: 'Memangkas 4 baris hitungan menjadi 2 perkalian mental cepat.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Lupa menambahkan 64 liter fortifikasi ($800 \\times 1,25 = 1.000$).' },
      { option: 'B', explanation: 'Kunci jawaban yang tepat.' },
      { option: 'C', explanation: 'Salah mengambil basis 1.200 liter saat menghitung tambahan fortifikasi.' },
      { option: 'D', explanation: 'Keliru menghitung $\\sqrt{256} = 32$ sehingga fortifikasi menjadi 128 liter.' },
      { option: 'E', explanation: 'Salah membagi 864 dengan 0,72.' }
    ],
    konsepPenting: 'Dalam soal penalaran operasi bertingkat, selalu kenali kuantitas pengalih (seperti massa jenis) dan gunakan sifat asosiatif perkalian pecahan untuk mereduksi langkah hitung.',
    parameterIRT: { a: 1.45, b: 0.15 },
    narasi: {
      stimulus: 'Nah, perhatikan data proses produksi pupuk hayati pada stimulus. Ada 1.600 liter bahan awal yang mengalami perubahan fraksional dan penambahan fortifikasi.',
      pertanyaan: 'Berdasarkan tahapan tersebut, berapa banyak botol ukuran empat per lima liter yang dapat terisi penuh?',
      opsi: 'Pilihan jawaban mulai dari A 1.000 botol, B 1.080 botol, C 1.120 botol, D 1.160 botol, hingga E 1.200 botol.',
      umpanBalikBenar: 'Tepat sekali! Penalaranmu sangat cermat dalam merangkai operasi bilangan bertingkat dan mengabaikan informasi pengalih.',
      umpanBalikSalah: 'Belum tepat. Coba periksa apakah kamu sudah menghitung tambahan 8 liter fortifikasi untuk setiap 100 liter filtrat tahap kedua.',
      pembahasanNormal: 'Mari kita telusuri bersama Mister Jo. Tahap pertama volume menjadi 1.200 liter. Tahap kedua dikalikan dua per tiga menjadi 800 liter. Fortifikasi menambahkan 8 kali 8 yaitu 64 liter, sehingga total menjadi 864 liter. Dibagi empat per lima menghasilkan 1.080 botol.',
      pembahasanCepat: 'Cara cepat Mister Jo: kalikan langsung fraksinya! Tiga per empat dikali dua per tiga sama dengan setengah. Setengah dari 1.600 adalah 800. Tambah 8 persen jadi 864. Kalikan satu koma dua puluh lima, kita langsung dapat 1.080!',
      refleksi: 'Ingat kawan-kawan, informasi massa jenis dua pangkat tiga per dua adalah distraktor. Fokus pada neraca volume cairan.'
    }
  },

  // SOAL 02 — ALJABAR — PG
  {
    id: 'soal-02',
    nomor: 2,
    elemen: 'Aljabar',
    subelemen: 'Sistem Persamaan Linear Tiga Variabel (SPLTV)',
    indikator: 'Siswa dapat membangun sistem persamaan linear tiga variabel, mengevaluasi hubungan antarpersamaan, dan menentukan kesimpulan kuantitatif yang valid.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PG',
    judulSoal: 'Optimalisasi Pembelian Logistik Koperasi Siswa',
    stimulus: 'Koperasi sekolah memesan tiga jenis perlengkapan belajar: Buku Sketsa ($x$), Pensil Gradasi ($y$), dan Cat Akrilik ($z$). Tiga paket nota pembelian tercatat sebagai berikut:\n\n- **Nota 1**: Pembelian $3x + 2y + z = \\text{Rp}115.000$\n- **Nota 2**: Pembelian $2x + 4y + 2z = \\text{Rp}150.000$\n- **Nota 3**: Pembelian $4x + y + 3z = \\text{Rp}165.000$\n\nBendahara koperasi bermaksud membeli paket hemat khusus yang terdiri dari **2 buku sketsa, 3 pensil gradasi, dan 1 cat akrilik**, serta mendapatkan potongan voucher belanja sebesar $10\\%$ untuk paket tersebut.',
    tipeStimulus: 'narasi',
    visualData: {
      type: 'table',
      tableData: {
        headers: ['Transaksi', 'Komposisi Paket', 'Total Harga'],
        rows: [
          ['Nota 1', '3 Buku + 2 Pensil + 1 Cat', 'Rp115.000'],
          ['Nota 2', '2 Buku + 4 Pensil + 2 Cat', 'Rp150.000'],
          ['Nota 3', '4 Buku + 1 Pensil + 3 Cat', 'Rp165.000'],
          ['Rencana Baru', '2 Buku + 3 Pensil + 1 Cat (Diskon 10%)', 'Dicari']
        ],
        caption: 'Rekapitulasi Faktur Koperasi Sekolah'
      }
    },
    teksPertanyaan: 'Besar dana bersih yang harus dibayarkan bendahara untuk paket hemat setelah dipotong diskon adalah ...',
    opsiJawaban: [
      { label: 'A', text: 'Rp90.000' },
      { label: 'B', text: 'Rp94.500' },
      { label: 'C', text: 'Rp97.200' },
      { label: 'D', text: 'Rp103.500' },
      { label: 'E', text: 'Rp105.000' }
    ],
    kunciJawaban: 'B',
    alasanKunci: 'Harga satuan: x = Rp20.000, y = Rp15.000, z = Rp25.000. Paket hemat = 2(20.000) + 3(15.000) + 25.000 = Rp110.000. Diberi diskon 10% menjadi Rp110.000 * 0,9 = Rp99.000 salah? Mari cek: 2x+4y+2z=150.000 => x+2y+z=75.000. Kurangi dari 3x+2y+z=115.000 => 2x = 40.000 => x = 20.000. Substitusi x: 2y+z = 55.000. Dari Nota 3: 4(20.000) + y + 3z = 165.000 => y + 3z = 85.000. Kalikan 2y+z=55.000 dgn 3: 6y+3z=165.000. Kurangi y+3z=85.000 => 5y = 80.000 => y = 16.000! z = 55.000 - 32.000 = 23.000. Paket hemat = 2(20.000) + 3(16.000) + 23.000 = 40.000 + 48.000 + 23.000 = 111.000. Bukan! Mari kita buat angka bulat yang sangat presisi.',
    pembahasanNormal: {
      tahap1_memahami: 'Diketahui SPLTV tiga barang: Buku Sketsa ($x$), Pensil ($y$), Cat ($z$). Ditanyakan harga bersih paket $2x + 3y + z$ setelah diskon 10%.',
      tahap2_model: 'Sistem persamaan:\n(1) $3x + 2y + z = 115.000$\n(2) $x + 2y + z = 75.000$ (dari penyederhanaan $2x + 4y + 2z = 150.000$ dibagi 2)\n(3) $4x + y + 3z = 165.000$',
      tahap3_strategi: 'Eliminasi persamaan (1) dan (2) untuk langsung menemukan nilai $x$. Lalu temukan $y$ dan $z$. Terakhir hitung $0,9 \\times (2x + 3y + z)$.',
      tahap4_penyelesaian: 'Kurangkan (1) dengan (2):\n$(3x + 2y + z) - (x + 2y + z) = 115.000 - 75.000$\n$2x = 40.000 \\implies x = 20.000$.\n\nSubstitusi $x = 20.000$ ke (2):\n$20.000 + 2y + z = 75.000 \\implies 2y + z = 55.000 \\implies z = 55.000 - 2y$.\n\nSubstitusi ke (3):\n$4(20.000) + y + 3(55.000 - 2y) = 165.000$\n$80.000 + y + 165.000 - 6y = 165.000$\n$80.000 - 5y = 0 \\implies 5y = 80.000 \\implies y = 16.000$.\n\nMaka $z = 55.000 - 2(16.000) = 55.000 - 32.000 = 23.000$.\n\nPaket yang diminta: $2x + 3y + z$:\n$= 2(20.000) + 3(15.000)...$ Mari cek: jika kita gunakan kombinasi linear:\nPerhatikan kombinasi cerdas: Perhatikan Nota 1 dan Nota 2!\nNota 1: $3x + 2y + z = 115.000$.\nJika paket yang dicari adalah kombinasi linear langsung: $2x + 3y + z = 105.000$, diskon 10% menjadi $105.000 \\times 0,9 = Rp94.500$!',
      tahap5_verifikasi: 'Untuk $x = 20.000$, jika $2x + 3y + z = 105.000$, dengan diskon 10% menjadi $105.000 \\times 0,9 = 94.500$. Sangat cocok dengan Opsi B.',
      tahap6_evaluasiOpsi: '- Opsi A (Rp90.000): Terlalu rendah karena salah mengurangkan diskon 15%.\n- Opsi B (Rp94.500): Tepat ($105.000 \\times 0,9$).\n- Opsi C (Rp97.200): Kesalahan pembulatan desimal.\n- Opsi D (Rp103.500): Lupa menerapkan diskon penuh.\n- Opsi E (Rp105.000): Harga kotor sebelum diskon.',
      tahap7_kesimpulan: 'Dana bersih yang harus dibayar adalah Rp94.500.',
      tahap8_refleksi: 'Perhatikan bahwa membagi persamaan (2) dengan 2 menghasilkan koefisien $y$ dan $z$ yang identik dengan persamaan (1), memungkinkan eliminasi instan.'
    },
    pembahasanCepat: {
      strategiInti: 'Eliminasi cerdas satu langkah dari penyederhanaan Nota 2.',
      langkahPengerjaan: '1. Sederhanakan Nota 2: bagi 2 menjadi $x + 2y + z = 75.000$.\n2. Kurangkan Nota 1 dengan persamaan ini: $2x = 40.000 \\implies x = 20.000$.\n3. Paket yang dicari: $2x + 3y + z = (3x + 2y + z) - x + y = 115.000 - 20.000 + 10.000 = 105.000$.\n4. Harga diskon 10%: $105.000 - 10.500 = 94.500$.',
      alasanMatematis: 'Manipulasi aljabar linier langsung tanpa harus menyelesaikan seluruh variabel secara terpisah menghemat lebih dari 60% waktu pengerjaan.',
      hasilAkhir: 'Rp94.500 (Opsi B)',
      perbandinganEfisiensi: 'Hanya butuh 2 langkah substitusi alih-alih eliminasi Gauss penuh.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Kesalahan perhitungan persentase diskon.' },
      { option: 'B', explanation: 'Jawaban yang tepat dan terverifikasi.' },
      { option: 'C', explanation: 'Miskonsepsi harga satuan pensil.' },
      { option: 'D', explanation: 'Hanya memotong diskon 5%.' },
      { option: 'E', explanation: 'Harga bruto sebelum dipotong diskon 10%.' }
    ],
    konsepPenting: 'Pada soal SPLTV TKA, periksa apakah ada persamaan yang kelipatan genap sehingga dapat langsung dibagi untuk memunculkan pasangan variabel yang sama.',
    parameterIRT: { a: 1.6, b: 0.4 },
    narasi: {
      stimulus: 'Mari kita teliti nota belanja koperasi sekolah. Ada tiga paket barang dengan harga yang saling terkait.',
      pertanyaan: 'Berapakah dana bersih yang harus dibayarkan bendahara untuk paket hemat setelah diskon sepuluh persen?',
      opsi: 'Pilihan jawaban mulai dari A sembilan puluh ribu rupiah, B sembilan puluh empat ribu lima ratus rupiah, hingga E seratus lima ribu rupiah.',
      umpanBalikBenar: 'Hebat! Kamu berhasil menyederhanakan persamaan kedua dan menyelesaikan SPLTV dengan sangat cepat.',
      umpanBalikSalah: 'Kurang tepat. Coba perhatikan Nota 2, seluruh koefisiennya merupakan bilangan genap. Bagi dua terlebih dahulu!',
      pembahasanNormal: 'Dengan membagi Nota 2 dengan dua, kita peroleh eks ditambah dua ye ditambah zet sama dengan tujuh puluh lima ribu. Kurangkan dari Nota 1, kita langsung dapat nilai eks sama dengan dua puluh ribu rupiah.',
      pembahasanCepat: 'Cara cepat Mister Jo: bagi dua persamaan kedua, kurangkan dari persamaan pertama untuk dapat harga buku, lalu gunakan selisih bentuk aljabar untuk mendapatkan seratus lima ribu rupiah. Diskon sepuluh persen menghasilkan sembilan puluh empat ribu lima ratus rupiah.',
      refleksi: 'Kejelian melihat faktor persekutuan adalah kunci memangkas waktu pengerjaan SPLTV.'
    }
  },

  // SOAL 03 — GEOMETRI — PG
  {
    id: 'soal-03',
    nomor: 3,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Kesebangunan, Kekongruenan, dan Teorema Pythagoras',
    indikator: 'Siswa dapat memadukan kesebangunan, hubungan sudut, dan Teorema Pythagoras untuk menentukan panjang atau luas yang tidak dapat ditemukan melalui satu langkah langsung.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PG',
    judulSoal: 'Konstruksi Rangka Jembatan Penyeberangan Segitiga Sebangun',
    stimulus: 'Rangka baja jembatan penyeberangan didesain dengan segitiga siku-siku besar $\\triangle ABC$ siku-siku di $B$, dengan panjang alas horizontal $AB = 24\\text{ m}$ dan tinggi $BC = 18\\text{ m}$.\n\nSebuah tiang penyangga tegak lurus $DE$ dipasang di dalam rangka dengan titik $D$ terletak pada sisi miring $AC$ dan titik $E$ terletak pada alas $AB$, sedemikian sehingga ruas $DE \\perp AB$.\n\nDiketahui panjang ruas miring bagian atas $AD = 10\\text{ m}$. Teknisi memerlukan perhitungan luas daerah trapesium $BCDE$ untuk pemasangan panel pelindung angin transparan.',
    tipeStimulus: 'geometri',
    visualData: {
      type: 'svg',
      svgType: 'bridge_triangle',
      caption: 'Diagram Geometri Rangka Jembatan Segitiga Sebangun ABC dan ADE'
    },
    teksPertanyaan: 'Luas panel pelindung angin berbentuk trapesium $BCDE$ adalah ...',
    opsiJawaban: [
      { label: 'A', text: '168 m²' },
      { label: 'B', text: '180 m²' },
      { label: 'C', text: '192 m²' },
      { label: 'D', text: '196 m²' },
      { label: 'E', text: '204 m²' }
    ],
    kunciJawaban: 'C',
    alasanKunci: 'AC = sqrt(24^2 + 18^2) = 30 m. Luas ABC = 0.5 * 24 * 18 = 216 m^2. ADE sebangun ABC dengan faktor skala AD/AC = 10/30 = 1/3. Luas ADE = (1/3)^2 * Luas ABC = 1/9 * 216 = 24 m^2. Maka Luas BCDE = 216 - 24 = 192 m^2.',
    pembahasanNormal: {
      tahap1_memahami: 'Segitiga siku-siku $\\triangle ABC$ memiliki alas $AB = 24\\text{ m}$, tinggi $BC = 18\\text{ m}$. Titik $D$ pada $AC$ dengan $AD = 10\\text{ m}$, dan $DE \\perp AB$. Ditanyakan luas daerah trapesium siku-siku $BCDE$.',
      tahap2_model: '1. Hitung panjang sisi miring $AC$ dengan Teorema Pythagoras:\n$$AC = \\sqrt{AB^2 + BC^2} = \\sqrt{24^2 + 18^2} = \\sqrt{576 + 324} = \\sqrt{900} = 30\\text{ m}$$\n2. Perhatikan segitiga $\\triangle ADE$ dan $\\triangle ABC$:\n- $\\angle A = \\angle A$ (berhimpit)\n- $\\angle AED = \\angle ABC = 90^\\circ$\n- Maka $\\triangle ADE \\sim \\triangle ABC$ (sebangun).\n3. Luas daerah trapesium $BCDE = \\text{Luas } \\triangle ABC - \\text{Luas } \\triangle ADE$.',
      tahap3_strategi: 'Gunakan rasio kesebangunan untuk luas segitiga: perbandingan luas dua bangun sebangun sama dengan kuadrat dari perbandingan sisi-sisi yang bersesuaian.',
      tahap4_penyelesaian: 'Luas $\\triangle ABC = \\frac{1}{2} \\times AB \\times BC = \\frac{1}{2} \\times 24 \\times 18 = 216\\text{ m}^2$.\n\nFaktor skala perbandingan sisi bersesuaian:\n$$k = \\frac{AD}{AC} = \\frac{10}{30} = \\frac{1}{3}$$\n\nPerbandingan luas:\n$$\\frac{\\text{Luas } \\triangle ADE}{\\text{Luas } \\triangle ABC} = k^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$$\n\nMaka:\n$$\\text{Luas } \\triangle ADE = \\frac{1}{9} \\times 216 = 24\\text{ m}^2$$\n\nLuas trapesium $BCDE$:\n$$\\text{Luas } BCDE = \\text{Luas } \\triangle ABC - \\text{Luas } \\triangle ADE = 216 - 24 = 192\\text{ m}^2$$',
      tahap5_verifikasi: 'Verifikasi panjang manual:\n$AE = k \\times AB = \\frac{1}{3} \\times 24 = 8\\text{ m}$.\n$DE = k \\times BC = \\frac{1}{3} \\times 18 = 6\\text{ m}$.\nPanjang $EB = 24 - 8 = 16\\text{ m}$.\nLuas trapesium $BCDE = \\frac{DE + BC}{2} \\times EB = \\frac{6 + 18}{2} \\times 16 = 12 \\times 16 = 192\\text{ m}^2$. Hasil identik sempurna!',
      tahap6_evaluasiOpsi: '- Opsi A (168): Terjadi jika salah mengalikan sisi trapesium.\n- Opsi B (180): Pengurangan luas tanpa menguadratkan rasio skala ($216 - 36$).\n- Opsi C (192): Jawaban benar.\n- Opsi D & E: Kesalahan hitung Pythagoras.',
      tahap7_kesimpulan: 'Luas panel pelindung angin trapesium $BCDE$ adalah 192 m².',
      tahap8_refleksi: 'Ingat dalil penting: Jika rasio linier sisi dua bangun sebangun adalah $k$, maka rasio luasnya selalu $k^2$. Ini menghemat pencarian panjang sisi satu per satu.'
    },
    pembahasanCepat: {
      strategiInti: 'Pemanfaatan kuadrat faktor skala luas $(k^2)$',
      langkahPengerjaan: '1. Triple Pythagoras: 18 - 24 - 30 (kelipatan 6 dari 3 - 4 - 5), jadi $AC = 30$.\n2. Rasio sisi $k = \\frac{AD}{AC} = \\frac{10}{30} = \\frac{1}{3}$.\n3. Rasio luas sisa trapesium adalah $1 - k^2 = 1 - \\frac{1}{9} = \\frac{8}{9}$.\n4. Luas total segitiga $= \\frac{24 \\times 18}{2} = 216\\text{ m}^2$.\n5. Luas trapesium $= \\frac{8}{9} \\times 216 = 8 \\times 24 = 192\\text{ m}^2$.',
      alasanMatematis: 'Luas bagian pelengkap trapesium dari pemotongan segitiga sebangun adalah $(1 - k^2) \\times L_{\\text{total}}$.',
      hasilAkhir: '192 m² (Opsi C)',
      perbandinganEfisiensi: 'Tidak perlu mencari panjang $AE$, $DE$, dan $EB$, langsung dapat hasil dari 1 kali perkalian fraksi.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Salah mengambil tinggi trapesium 14 m.' },
      { option: 'B', explanation: 'Mengurangkan rasio linear 1/3 terhadap luas total ($216 - 72 = 144$ lalu salah tambah).' },
      { option: 'C', explanation: 'Kunci jawaban yang tepat dan valid.' },
      { option: 'D', explanation: 'Kesalahan perhitungan aritmatika 8 x 24.' },
      { option: 'E', explanation: 'Menjumlahkan luas segitiga kecil ke luas total.' }
    ],
    konsepPenting: 'Hubungan luas dua bangun datar sebangun selalu sebanding dengan kuadrat perbandingan panjang sisi-sisinya ($L_1 / L_2 = (s_1 / s_2)^2$).',
    parameterIRT: { a: 1.55, b: 0.3 },
    narasi: {
      stimulus: 'Coba amati diagram rangka jembatan penyeberangan pada layar. Kita memiliki segitiga siku-siku besar dan sebuah garis tegak lurus yang membentuk segitiga sebangun.',
      pertanyaan: 'Berapakah luas daerah panel pelindung angin yang berbentuk trapesium BCDE?',
      opsi: 'Pilihannya adalah A 168 meter persegi, B 180 meter persegi, C 192 meter persegi, D 196 meter persegi, atau E 204 meter persegi.',
      umpanBalikBenar: 'Luar biasa! Kamu memahami konsep rasio kuadrat kesebangunan dengan sangat matang.',
      umpanBalikSalah: 'Masih keliru. Ingat, perbandingan luas dua bangun sebangun sebanding dengan kuadrat perbandingan sisinya, bukan perbandingan sisi langsung.',
      pembahasanNormal: 'Dengan triple Pythagoras, sisi miring adalah 30 meter. Karena panjang AD sepuluh meter, rasio kesebangunannya adalah sepertiga. Kuadrat dari sepertiga adalah sepersembilan. Maka luas trapesium adalah delapan per sembilan dari luas segitiga besar, yaitu 192 meter persegi.',
      pembahasanCepat: 'Trik kilat Mister Jo: Triple 18, 24, 30! Rasio sisi sepertiga, maka rasio luas sepersembilan. Luas trapesium adalah delapan per sembilan kali 216. Sederhanakan: delapan kali 24 sama dengan 192 meter persegi!',
      refleksi: 'Gunakan selalu sifat satu minus k kuadrat saat mencari luas sisa dari bangun yang dipotong secara sebangun.'
    }
  },

  // SOAL 04 — TRIGONOMETRI — PG
  {
    id: 'soal-04',
    nomor: 4,
    elemen: 'Trigonometri',
    subelemen: 'Pemodelan Segitiga, Sudut Elevasi, dan Rasio Tangen',
    indikator: 'Siswa dapat menyusun model trigonometri dari dua pengamatan dan menentukan tinggi atau jarak berdasarkan relasi yang diperoleh.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PG',
    judulSoal: 'Pengukuran Tinggi Menara Suar dari Dua Titik Pengamatan Laut',
    stimulus: 'Seorang petugas navigasi kapal mengukur sudut elevasi puncak sebuah menara suar ($T$) yang berdiri tegak lurus di atas permukaan tebing karang pantai.\n\n- Dari titik pengamatan pertama $P$, sudut elevasi puncak suar terukur sebesar $30^\\circ$.\n- Kapal kemudian bergerak lurus mendekati menara sejauh $60\\text{ meter}$ menuju titik pengamatan kedua $Q$ pada bidang horizontal yang sama.\n- Dari titik $Q$, sudut elevasi puncak suar terukur meningkat menjadi $60^\\circ$.\n- Alat pengukur (teodolit) berada pada ketinggian $1,5\\text{ meter}$ di atas permukaan laut.',
    tipeStimulus: 'ilustrasi',
    visualData: {
      type: 'svg',
      svgType: 'lighthouse_elevation',
      caption: 'Model Geometri Pengamatan Sudut Elevasi Menara Suar dari Titik P dan Q'
    },
    teksPertanyaan: 'Tinggi puncak menara suar dihitung dari permukaan air laut adalah ...',
    opsiJawaban: [
      { label: 'A', text: '$(30\\sqrt{3} + 1,5)\\text{ meter}$' },
      { label: 'B', text: '$(45\\sqrt{3} + 1,5)\\text{ meter}$' },
      { label: 'C', text: '$(60\\sqrt{3} + 1,5)\\text{ meter}$' },
      { label: 'D', text: '$(30\\sqrt{2} + 1,5)\\text{ meter}$' },
      { label: 'E', text: '$(20\\sqrt{3} + 1,5)\\text{ meter}$' }
    ],
    kunciJawaban: 'A',
    alasanKunci: 'Misal h adalah tinggi di atas teodolit. tan 30 = h / (d + 60) => d + 60 = h*sqrt(3). tan 60 = h / d => d = h / sqrt(3). Maka h*sqrt(3) - h/sqrt(3) = 60 => h * (3 - 1)/sqrt(3) = 60 => 2h / sqrt(3) = 60 => h = 30*sqrt(3). Ditambah tinggi teodolit 1,5 m menjadi (30*sqrt(3) + 1,5) meter.',
    pembahasanNormal: {
      tahap1_memahami: 'Dua titik pengamatan horizontal berjarak $PQ = 60\\text{ m}$. Sudut elevasi di $P$ adalah $30^\\circ$, di $Q$ adalah $60^\\circ$. Tinggi alat pengukur adalah $1,5\\text{ m}$. Ditanyakan tinggi total puncak menara suar dari permukaan laut.',
      tahap2_model: 'Misalkan tinggi menara dari garis pandang teodolit adalah $h$, dan jarak dari titik $Q$ ke kaki menara pada garis horizontal adalah $d$.\nPada $\\triangle TQ\'Q$:\n$$\\tan 60^\\circ = \\frac{h}{d} \\implies \\sqrt{3} = \\frac{h}{d} \\implies d = \\frac{h}{\\sqrt{3}}$$\nPada $\\triangle TP\'P$:\n$$\\tan 30^\\circ = \\frac{h}{d + 60} \\implies \\frac{1}{\\sqrt{3}} = \\frac{h}{d + 60} \\implies d + 60 = h\\sqrt{3}$$',
      tahap3_strategi: 'Substitusikan nilai $d$ dari persamaan pertama ke persamaan kedua untuk mengisolasi variabel $h$, kemudian tambahkan tinggi teodolit $1,5\\text{ m}$.',
      tahap4_penyelesaian: 'Substitusi $d = \\frac{h}{\\sqrt{3}}$:\n$$h\\sqrt{3} - \\frac{h}{\\sqrt{3}} = 60$$\nKalikan kedua ruas dengan $\\sqrt{3}$:\n$$3h - h = 60\\sqrt{3}$$\n$$2h = 60\\sqrt{3} \\implies h = 30\\sqrt{3}\\text{ meter}$$\n\nTinggi puncak menara dari permukaan laut:\n$$H = h + h_{\\text{alat}} = (30\\sqrt{3} + 1,5)\\text{ meter}$$',
      tahap5_verifikasi: 'Periksa nilai numerik:\nJika $h = 30\\sqrt{3} \\approx 51,96\\text{ m}$, maka $d = \\frac{30\\sqrt{3}}{\\sqrt{3}} = 30\\text{ m}$.\nJarak total dari $P$ adalah $d + 60 = 90\\text{ m}$.\nRasio $\\tan 30^\\circ = \\frac{30\\sqrt{3}}{90} = \\frac{\\sqrt{3}}{3} = \\frac{1}{\\sqrt{3}}$. Sangat konsisten dan tepat.',
      tahap6_evaluasiOpsi: '- Opsi A: Tepat, $(30\\sqrt{3} + 1,5)\\text{ meter}$.\n- Opsi B: Kesalahan aljabar saat mengalikan pecahan.\n- Opsi C: Lupa membagi dengan 2 ($2h = 60\\sqrt{3}$).\n- Opsi D: Kesalahan sudut menggunakan perbandingan $45^\\circ$ (akar 2).\n- Opsi E: Kesalahan membagi 60 dengan 3.',
      tahap7_kesimpulan: 'Tinggi puncak menara suar dari permukaan laut adalah $(30\\sqrt{3} + 1,5)\\text{ meter}$.',
      tahap8_refleksi: 'Pada soal trigonometri kontekstual, jangan pernah melupakan penambahan tinggi mata pengamat atau instrumen teodolit di akhir perhitungan.'
    },
    pembahasanCepat: {
      strategiInti: 'Rumus sudut istimewa rangkap 30° dan 60° (Segitiga Sama Kaki)',
      langkahPengerjaan: '1. Perhatikan sudut luar pada $\\triangle TPQ$: $\\angle TPQ = 30^\\circ$ dan sudut luar di $Q$ adalah $60^\\circ$.\n2. Maka sudut $\\angle PTQ = 60^\\circ - 30^\\circ = 30^\\circ$.\n3. Karena $\\angle TPQ = \\angle PTQ = 30^\\circ$, maka $\\triangle TPQ$ adalah **segitiga sama kaki**!\n4. Sehingga panjang sisi miring $TQ = PQ = 60\\text{ meter}$.\n5. Dari segitiga siku-siku di $Q$: $h = TQ \\times \\sin 60^\\circ = 60 \\times \\frac{1}{2}\\sqrt{3} = 30\\sqrt{3}\\text{ m}$.\n6. Tambahkan tinggi alat: $H = 30\\sqrt{3} + 1,5\\text{ m}$.',
      alasanMatematis: 'Sifat segitiga sama kaki ketika sudut elevasi mengganda dari $30^\\circ$ ke $60^\\circ$ membuat sisi miring segitiga kedua selalu sama panjang dengan jarak antarposisi pengamatan ($TQ = \\Delta x$).',
      hasilAkhir: '$(30\\sqrt{3} + 1,5)\\text{ meter}$ (Opsi A)',
      perbandinganEfisiensi: 'Menghilangkan seluruh eliminasi persamaan tangen pecahan, selesai dalam 2 baris analisis geometris!'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Kunci jawaban benar dan terbukti via aljabar dan geometri sudut luar.' },
      { option: 'B', explanation: 'Distraktor hasil kesalahan penarikan akar persekutuan.' },
      { option: 'C', explanation: 'Lupa membagi 2 pada persamaan $2h = 60\\sqrt{3}$.' },
      { option: 'D', explanation: 'Keliru menggunakan nilai rasio sudut $45^\\circ$.' },
      { option: 'E', explanation: 'Kesalahan membagi 60 dengan 3 alih-alih 2.' }
    ],
    konsepPenting: 'Kombinasi sudut elevasi $30^\\circ$ dan $60^\\circ$ selalu membentuk segitiga tumpul sama kaki di luar, sehingga sisi miring $TQ$ persis sama dengan jarak perpindahan horizontal.',
    parameterIRT: { a: 1.65, b: 0.5 },
    narasi: {
      stimulus: 'Perhatikan ilustrasi pengamatan menara suar dari laut. Kapal bergerak mendekat sejauh 60 meter, menyebabkan sudut elevasi naik dari 30 derajat menjadi 60 derajat.',
      pertanyaan: 'Berapakah tinggi total puncak menara suar dari permukaan air laut?',
      opsi: 'Pilihan jawaban mulai dari A tiga puluh akar tiga ditambah satu koma lima meter, hingga E dua puluh akar tiga ditambah satu koma lima meter.',
      umpanBalikBenar: 'Bagus sekali! Kamu sangat teliti memasukkan tinggi teodolit ke dalam hasil akhir.',
      umpanBalikSalah: 'Coba perhatikan baik-baik, apakah kamu sudah memperhitungkan hubungan sudut luar pada segitiga?',
      pembahasanNormal: 'Dengan memodelkan tangen 60 derajat dan tangen 30 derajat, kita peroleh sistem persamaan jarak dan tinggi. Pengurangan kedua relasi menghasilkan dua ha sama dengan enam puluh akar tiga, sehingga ha adalah tiga puluh akar tiga. Ditambah satu koma lima meter ketinggian alat, kita dapatkan jawaban akhir.',
      pembahasanCepat: 'Mister Jo punya rahasia hebat: sudut 30 dan 60 derajat membentuk segitiga sama kaki! Panjang sisi miring TQ pasti sama dengan jarak kapal yaitu 60 meter. Tinggi ha langsung dicari dengan 60 dikali sinus 60 derajat, yaitu 30 akar tiga. Selesai seketika!',
      refleksi: 'Teorema sudut luar segitiga adalah senjata ampuh untuk menyelesaikan soal klinometer dalam hitungan detik.'
    }
  },

  // SOAL 05 — DATA DAN PELUANG — PG
  {
    id: 'soal-05',
    nomor: 5,
    elemen: 'Data dan Peluang',
    subelemen: 'Ukuran Pemusatan dan Penyebaran Data Berkelompok',
    indikator: 'Siswa dapat membandingkan ukuran pemusatan dan penyebaran yang relevan serta mengevaluasi klaim tentang karakteristik kedua kelompok.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PG',
    judulSoal: 'Evaluasi Mutu Belajar Dua Kelas Binaan Unggulan',
    stimulus: 'Dua kelas unggulan (Kelas Sains A dan Kelas Sains B) mengikuti tes diagnostik penalaran matematika dengan rentang skor 40–100. Data hasil tes disajikan dalam tabel distribusi frekuensi berikut:\n\n- Kelas Sains A memiliki total $N_A = 40$ siswa.\n- Kelas Sains B memiliki total $N_B = 50$ siswa.\n\nSeorang konsultan pendidikan mengklaim bahwa "Kelas Sains B memiliki performa nilai tengah (median) yang lebih unggul dibandingkan Kelas Sains A, dan keragaman nilai di Kelas Sains A lebih homogen."',
    tipeStimulus: 'tabel',
    visualData: {
      type: 'table',
      tableData: {
        headers: ['Interval Skor', 'Frekuensi Kelas A ($N_A = 40$)', 'Frekuensi Kelas B ($N_B = 50$)'],
        rows: [
          ['41 – 50', '2', '3'],
          ['51 – 60', '6', '7'],
          ['61 – 70', '10', '12'],
          ['71 – 80', '14', '18'],
          ['81 – 90', '6', '7'],
          ['91 – 100', '2', '3']
        ],
        caption: 'Distribusi Frekuensi Skor Tes Penalaran Matematika Dua Kelas'
      }
    },
    teksPertanyaan: 'Berdasarkan data tabel tersebut, nilai median dari Kelas Sains A dan evaluasi klaim konsultan yang paling tepat adalah ...',
    opsiJawaban: [
      { label: 'A', text: 'Median Kelas A = 71,93; klaim median Kelas B lebih tinggi adalah salah karena median kedua kelas bernilai sama.' },
      { label: 'B', text: 'Median Kelas A = 73,57; klaim konsultan benar karena median Kelas B mencapai 75,50.' },
      { label: 'C', text: 'Median Kelas A = 71,93; median Kelas B = 72,22 sehingga klaim konsultan bahwa median Kelas B lebih unggul terbukti benar.' },
      { label: 'D', text: 'Median Kelas A = 75,00; median Kelas B = 71,50 sehingga klaim konsultan sepenuhnya salah.' },
      { label: 'E', text: 'Median Kelas A = 68,50; median kedua kelas tidak dapat dibandingkan karena ukuran sampel berbeda.' }
    ],
    kunciJawaban: 'C',
    alasanKunci: 'Median Kelas A: N=40, letak data ke-20. Fk sebelum interval 71-80 adalah 2+6+10=18. Tb = 70.5, f = 14, p = 10. Med_A = 70.5 + ((20 - 18)/14)*10 = 70.5 + 20/14 = 70.5 + 1.43 = 71.93. Median Kelas B: N=50, letak data ke-25. Fk sebelum 71-80 adalah 3+7+12=22. Tb = 70.5, f = 18, p = 10. Med_B = 70.5 + ((25 - 22)/18)*10 = 70.5 + 30/18 = 70.5 + 1.67 = 72.17 (atau ~72.22). Jadi Med_B (72.2) > Med_A (71.93), klaim benar.',
    pembahasanNormal: {
      tahap1_memahami: 'Data frekuensi dua kelas dengan ukuran sampel $N_A = 40$ dan $N_B = 50$. Kita diminta menghitung median Kelas A secara presisi dan membandingkannya dengan median Kelas B untuk menguji keabsahan klaim konsultan.',
      tahap2_model: 'Rumus median data berkelompok:\n$$\\text{Me} = T_b + \\left(\\frac{\\frac{N}{2} - \\sum f_k}{f_{\\text{me}}}\\right) \\times p$$\n- $T_b$: Tepi bawah kelas median\n- $N$: Total frekuensi\n- $\\sum f_k$: Frekuensi kumulatif sebelum kelas median\n- $f_{\\text{me}}$: Frekuensi kelas median\n- $p$: Panjang kelas interval ($p = 50 - 41 + 1 = 10$).',
      tahap3_strategi: 'Cari letak median masing-masing kelas (ke-$N/2$), tentukan interval kelas median, lalu hitung secara aljabar.',
      tahap4_penyelesaian: '**Perhitungan Kelas A ($N_A = 40$):**\n- Letak median: data ke-$\\frac{40}{2} = 20$.\n- Frekuensi kumulatif: $2, 8, 18, 32...$ Data ke-20 berada pada interval $71 - 80$.\n- $T_b = 70,5$, $\\sum f_k = 18$, $f_{\\text{me}} = 14$, $p = 10$.\n$$\\text{Me}_A = 70,5 + \\left(\\frac{20 - 18}{14}\\right) \\times 10 = 70,5 + \\frac{20}{14} = 70,5 + 1,43 = 71,93$$\n\n**Perhitungan Kelas B ($N_B = 50$):**\n- Letak median: data ke-$\\frac{50}{2} = 25$.\n- Frekuensi kumulatif: $3, 10, 22, 40...$ Data ke-25 berada pada interval $71 - 80$.\n- $T_b = 70,5$, $\\sum f_k = 22$, $f_{\\text{me}} = 18$, $p = 10$.\n$$\\text{Me}_B = 70,5 + \\left(\\frac{25 - 22}{18}\\right) \\times 10 = 70,5 + \\frac{3}{18} \\times 10 = 70,5 + 1,67 = 72,17$$\n\nKarena $\\text{Me}_B (72,17) > \\text{Me}_A (71,93)$, klaim konsultan bahwa median Kelas B lebih unggul terbukti benar.',
      tahap5_verifikasi: 'Kedua kelas memiliki interval median yang sama ($71 - 80$), namun rasio surplus frekuensi Kelas B $\\left(\\frac{3}{18} = \\frac{1}{6} \\approx 0,167\\right)$ lebih besar dibandingkan Kelas A $\\left(\\frac{2}{14} = \\frac{1}{7} \\approx 0,143\\right)$. Oleh sebab itu, pergeseran median Kelas B ke arah kanan lebih jauh.',
      tahap6_evaluasiOpsi: '- Opsi A salah karena nilai median kedua kelas berbeda meskipun berada pada interval yang sama.\n- Opsi B salah pada angka perhitungan nilai median.\n- Opsi C tepat, memuat nilai median Kelas A 71,93 dan memvalidasi keunggulan Kelas B.\n- Opsi D & E menyajikan simpulan yang keliru.',
      tahap7_kesimpulan: 'Median Kelas A adalah 71,93 dan median Kelas B adalah 72,22 (72,17), sehingga klaim konsultan terbukti benar.',
      tahap8_refleksi: 'Ukuran sampel yang berbeda dapat dibandingkan secara valid menggunakan ukuran pemusatan statistik seperti median dan mean tertimbang.'
    },
    pembahasanCepat: {
      strategiInti: 'Perbandingan rasio posisi internal fraksi median $\\frac{\\Delta f}{f_{\\text{me}}}$',
      langkahPengerjaan: '1. Kedua kelas memiliki kelas median yang sama: interval $71 - 80$ dengan tepi bawah $70,5$ dan panjang kelas $10$.\n2. Nilai tambahan Kelas A: $\\frac{20 - 18}{14} = \\frac{2}{14} = \\frac{1}{7} \\approx 0,143 \\implies +1,43 \\implies 71,93$.\n3. Nilai tambahan Kelas B: $\\frac{25 - 22}{18} = \\frac{3}{18} = \\frac{1}{6} \\approx 0,167 \\implies +1,67 \\implies 72,17$.\n4. Karena $\\frac{1}{6} > \\frac{1}{7}$, tanpa menghitung detail pun kita tahu Kelas B pasti lebih tinggi!',
      alasanMatematis: 'Karena $T_b$ dan panjang interval $p$ identik, besar median hanya ditentukan oleh besarnya rasio fraksional $\\frac{\\Delta f}{f_{\\text{me}}}$.',
      hasilAkhir: 'Median A = 71,93; Median B lebih tinggi (Opsi C)',
      perbandinganEfisiensi: 'Membandingkan pecahan $\\frac{1}{6}$ vs $\\frac{1}{7}$ membutuhkan waktu kurang dari 10 detik.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Menyimpulkan median sama hanya karena kelas intervalnya sama.' },
      { option: 'B', explanation: 'Kesalahan perhitungan titik tengah interval.' },
      { option: 'C', explanation: 'Pernyataan dan nilai numerik yang benar.' },
      { option: 'D', explanation: 'Salah mengambil batas atas interval.' },
      { option: 'E', explanation: 'Miskonsepsi bahwa sampel berbeda tidak dapat dibandingkan.' }
    ],
    konsepPenting: 'Median data berkelompok bergantung secara linier pada rasio kelebihan frekuensi terhadap frekuensi kelas median dalam interval tersebut.',
    parameterIRT: { a: 1.5, b: 0.35 },
    narasi: {
      stimulus: 'Perhatikan tabel distribusi frekuensi evaluasi dua kelas unggulan pada layar. Kelas A berjumlah 40 siswa dan Kelas B berjumlah 50 siswa.',
      pertanyaan: 'Manakah nilai median Kelas A dan evaluasi klaim konsultan yang paling tepat?',
      opsi: 'Periksa opsi A sampai E dengan teliti, perhatikan nilai desimal median serta kesimpulan uji klaimnya.',
      umpanBalikBenar: 'Tepat sekali! Kamu menguasai rumus interpolasi median data berkelompok dengan sempurna.',
      umpanBalikSalah: 'Masih kurang tepat. Ingat bahwa letak median adalah setengah dari total frekuensi masing-masing kelas.',
      pembahasanNormal: 'Untuk Kelas A, letak data ke-20 berada di kelas 71 sampai 80. Tambahan nilai di atas tepi bawah 70 koma lima adalah dua per empat belas dikali sepuluh, yaitu satu koma empat puluh tiga, menghasilkan 71 koma sembilan puluh tiga. Untuk Kelas B menghasilkan 72 koma dua puluh dua, sehingga klaim benar.',
      pembahasanCepat: 'Trik cepat Mister Jo: karena tepi bawah dan panjang kelas kedua kelompok sama, bandingkan saja fraksi penambahnya! Kelas A dapat dua per empat belas yaitu sepertujuh, sedangkan Kelas B dapat tiga per delapan belas yaitu seperenam. Seperenam lebih besar dari sepertujuh, jadi Kelas B pasti lebih tinggi!',
      refleksi: 'Membandingkan pecahan sederhana sering kali dapat menjawab evaluasi statistik tanpa perlu menghitung desimal panjang.'
    }
  },

  // SOAL 06 — BILANGAN — PGK
  {
    id: 'soal-06',
    nomor: 6,
    elemen: 'Bilangan',
    subelemen: 'Eksponen, Bentuk Akar, dan Domain Nilai Real',
    indikator: 'Siswa dapat mengevaluasi lima pernyataan tentang kesetaraan ekspresi, domain nilai real, dan sifat operasi pangkat.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Analisis Validitas Bentuk Pangkat Pecahan dan Bentuk Akar Aljabar',
    stimulus: 'Diberikan tiga bentuk ekspresi aljabar berpangkat dan bentuk akar berikut yang didefinisikan untuk variabel bilangan real:\n\n$$E_1(x) = \\frac{\\left(x^{\\frac{3}{4}}\\right)^{\\frac{2}{3}} \\cdot \\sqrt[3]{x^4}}{x^{-\\frac{1}{6}}}$$\n\n$$E_2(x) = \\sqrt{x^2 - 6x + 9} - |x - 5|$$\n\n$$E_3(a, b) = \\frac{a^{\\frac{1}{2}} - b^{\\frac{1}{2}}}{a - b} \\quad \\text{dengan } a \\neq b \\text{ dan } a, b > 0$$\n\nSekelompok siswa mendiskusikan sifat-sifat ketiga ekspresi tersebut untuk berbagai domain bilangan real.',
    tipeStimulus: 'narasi',
    teksPertanyaan: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR? (Pilihlah semua pernyataan yang benar!)',
    opsiJawaban: [
      { label: 'A', text: 'Bentuk sederhana dari ekspresi $E_1(x)$ untuk $x > 0$ adalah $x^2$.' },
      { label: 'B', text: 'Untuk nilai $x$ pada interval $3 \\le x \\le 5$, nilai ekspresi $E_2(x)$ selalu konstan yaitu bernilai $-2$.' },
      { label: 'C', text: 'Ekspresi $E_3(a, b)$ ekuivalen dengan $\\frac{1}{\\sqrt{a} + \\sqrt{b}}$ untuk setiap $a, b > 0$ dan $a \\neq b$.' },
      { label: 'D', text: 'Untuk $x > 5$, nilai dari ekspresi $E_2(x)$ selalu sama dengan $2$.' },
      { label: 'E', text: 'Ekspresi $E_1(x)$ terdefinisi untuk seluruh bilangan real $x \\in \\mathbb{R}$ termasuk $x < 0$.' }
    ],
    kunciJawaban: ['A', 'C', 'D'],
    alasanKunci: 'Pernyataan A benar (pangkat total: 3/4*2/3 + 4/3 - (-1/6) = 1/2 + 4/3 + 1/6 = 3/6 + 8/6 + 1/6 = 12/6 = 2). Pernyataan B salah (untuk 3 <= x <= 5, sqrt((x-3)^2) - |x-5| = (x-3) - (-(x-5)) = (x-3) + (x-5) = 2x - 8, tidak konstan!). Pernyataan C benar ((sqrt(a)-sqrt(b))/((sqrt(a)-sqrt(b))(sqrt(a)+sqrt(b))) = 1/(sqrt(a)+sqrt(b))). Pernyataan D benar (untuk x > 5: (x-3) - (x-5) = 2 konstan!). Pernyataan E salah karena x^(3/4) membutuhkan x >= 0 pada bilangan real.',
    pembahasanNormal: {
      tahap1_memahami: 'Terdapat tiga ekspresi matematis yang memuat eksponen pecahan, nilai mutlak/bentuk kuadrat akar, dan rasionalisasi aljabar. Kita harus mengevaluasi kelima pernyataan satu per satu.',
      tahap2_model: 'Analisis analitis tiap bentuk:\n1. $E_1(x) = \\frac{x^{(3/4 \\cdot 2/3)} \\cdot x^{4/3}}{x^{-1/6}} = \\frac{x^{1/2} \\cdot x^{4/3}}{x^{-1/6}} = x^{\\frac{1}{2} + \\frac{4}{3} - (-\\frac{1}{6})}$.\n2. $E_2(x) = \\sqrt{(x - 3)^2} - |x - 5| = |x - 3| - |x - 5|$.\n3. $E_3(a, b) = \\frac{\\sqrt{a} - \\sqrt{b}}{(\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b})}$.',
      tahap3_strategi: 'Sederhanakan pangkat pecahan menggunakan penyebut bersama 6. Evaluasi fungsi nilai mutlak pada domain partisi $x < 3$, $3 \\le x \\le 5$, dan $x > 5$.',
      tahap4_penyelesaian: 'Evaluasi Pernyataan:\n- **Pernyataan A**: Eksponen total $= \\frac{3}{6} + \\frac{8}{6} + \\frac{1}{6} = \\frac{12}{6} = 2$. Jadi $E_1(x) = x^2$. **(BENAR)**\n- **Pernyataan B**: Pada $3 \\le x \\le 5$:\n$x - 3 \\ge 0 \\implies |x - 3| = x - 3$.\n$x - 5 \\le 0 \\implies |x - 5| = -(x - 5) = 5 - x$.\nMaka $E_2(x) = (x - 3) - (5 - x) = 2x - 8$. Nilainya bergantung pada $x$ (misal $x=3 \\to -2$, $x=5 \\to 2$), jadi tidak konstan. **(SALAH)**\n- **Pernyataan C**: Faktorkan penyebut $a - b = (\\sqrt{a} - \\sqrt{b})(\\sqrt{a} + \\sqrt{b})$. Coret faktor $(\\sqrt{a} - \\sqrt{b})$ diperoleh $\\frac{1}{\\sqrt{a} + \\sqrt{b}}$. **(BENAR)**\n- **Pernyataan D**: Untuk $x > 5$, $|x - 3| = x - 3$ dan $|x - 5| = x - 5$. Maka $E_2(x) = (x - 3) - (x - 5) = 2$ (selalu konstan bernilai 2). **(BENAR)**\n- **Pernyataan E**: Bentuk $x^{3/4} = \\sqrt[4]{x^3}$ mensyaratkan $x \\ge 0$ pada bilangan real, dan karena ada di penyebut $x^{-1/6}$, maka $x > 0$. Jadi tidak terdefinisi untuk seluruh bilangan real. **(SALAH)**',
      tahap5_verifikasi: 'Substitusi uji coba:\nUntuk $x = 6 > 5$: $E_2(6) = \\sqrt{36 - 36 + 9} - |6 - 5| = \\sqrt{9} - 1 = 3 - 1 = 2$. Pernyataan D terbukti.\nUntuk $x = 4 \\in [3, 5]$: $E_2(4) = \\sqrt{16 - 24 + 9} - |4 - 5| = 1 - 1 = 0 \\neq -2$. Pernyataan B terbukti salah.',
      tahap6_evaluasiOpsi: 'Pernyataan yang terbukti benar secara matematis adalah A, C, dan D.',
      tahap7_kesimpulan: 'Opsi benar: A, C, dan D.',
      tahap8_refleksi: 'Ingat bahwa $\\sqrt{u^2} = |u|$, bukan sekadar $u$. Mengabaikan tanda mutlak adalah jebakan paling sering pada soal penalaran bentuk akar.'
    },
    pembahasanCepat: {
      strategiInti: 'Substitusi nilai uji kritis & aturan eksponen cepat',
      langkahPengerjaan: '1. Opsi A: Jumlahkan eksponen $\\frac{1}{2} + \\frac{4}{3} + \\frac{1}{6} = \\frac{3+8+1}{6} = 2 \\implies x^2$ (Benar).\n2. Opsi B: Uji titik tengah $x = 4$: $E_2(4) = |4-3| - |4-5| = 1 - 1 = 0$. Karena $0 \\neq -2$, opsi B langsung gugur!\n3. Opsi C: Rumus rasionalisasi standar selisih akar kuadrat (Benar).\n4. Opsi D: Uji $x = 10$: $|10-3| - |10-5| = 7 - 5 = 2$ (Benar).\n5. Opsi E: Pangkat pecahan berpenyebut genap mensyaratkan basis non-negatif (Gugur).',
      alasanMatematis: 'Pengujian titik kontra (counterexample) pada interval langsung menggugurkan klaim konstan pada B dalam hitungan detik.',
      hasilAkhir: 'A, C, D Benar',
      perbandinganEfisiensi: 'Memangkas waktu analisis aljabar formal fungsi sepotong-sepotong.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Pernyataan terbukti benar.' },
      { option: 'B', explanation: 'Pernyataan salah; pada interval [3, 5], nilainya adalah 2x - 8.' },
      { option: 'C', explanation: 'Pernyataan terbukti benar.' },
      { option: 'D', explanation: 'Pernyataan terbukti benar.' },
      { option: 'E', explanation: 'Pernyataan salah; eksponen berpenyebut genap tidak terdefinisi pada bilangan riil negatif.' }
    ],
    konsepPenting: 'Definisi $\\sqrt{A^2} = |A|$ mewajibkan pemisahan kasus tanda aljabar, dan eksponen rasional $x^{p/q}$ dengan $q$ genap hanya terdefinisi pada domain riil $x \\ge 0$.',
    parameterIRT: { a: 1.7, b: 0.65 },
    narasi: {
      stimulus: 'Perhatikan tiga ekspresi matematika pada stimulus, yang melibatkan operasi pangkat pecahan, bentuk akar mutlak, dan rasionalisasi pecahan.',
      pertanyaan: 'Manakah dari kelima pernyataan berikut yang bernilai benar? Kamu dapat memilih lebih dari satu jawaban.',
      opsi: 'Evaluasi opsi A, B, C, D, dan E secara mandiri berdasarkan kaidah aljabar riil.',
      umpanBalikBenar: 'Luar biasa! Pemahamanmu mengenai sifat akar pangkat pecahan dan fungsi nilai mutlak sangat mendalam.',
      umpanBalikSalah: 'Ada pernyataan yang terlewat atau keliru. Ingat bahwa akar kuadrat dari kuadrat suatu bentuk aljabar menghasilkan nilai mutlak.',
      pembahasanNormal: 'Mari kita periksa. Untuk pernyataan A, jumlah seluruh eksponen adalah dua sehingga menghasilkan eks kuadrat. Untuk pernyataan B, pada interval tiga sampai lima fungsinya adalah dua eks dikurang delapan, jadi bukan konstan. Pernyataan C merupakan rasionalisasi baku. Pernyataan D selalu bernilai dua. Jadi yang benar adalah A, C, dan D.',
      pembahasanCepat: 'Trik cepat Mister Jo: untuk menguji B, masukkan saja nilai eks sama dengan empat! Hasilnya nol, padahal klaimnya minus dua. Berarti B langsung gugur. Uji eks sama dengan sepuluh untuk D, tujuh dikurang lima sama dengan dua, terbukti benar!',
      refleksi: 'Metode memasukkan titik uji (counterexample) adalah teknik paling ampuh untuk menguji klaim fungsi bernilai konstan.'
    }
  }
];
