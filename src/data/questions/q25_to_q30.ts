import { QuestionData } from '../../types';

export const questions25to30: QuestionData[] = [
  // SOAL 25 — DATA DAN PELUANG — PGK
  {
    id: 'soal-25',
    nomor: 25,
    elemen: 'Data dan Peluang',
    subelemen: 'Peluang Kejadian Majemuk Tanpa Pengembalian',
    indikator: 'Siswa dapat mengevaluasi lima pernyataan peluang kejadian majemuk, termasuk konsekuensi perubahan jumlah objek yang tersedia.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Uji Acak Pengambilan Komponen Cacat dari Lini Pabrik',
    stimulus: 'Sebuah wadah pengendali mutu memuat $15$ unit mikrocip elektronik yang tampak serupa dari luar:\n- **$10$ unit mikrocip standar (berfungsi baik)**\n- **$5$ unit mikrocip cacat (defektif)**\n\nPetugas penguji mengambil **tiga unit mikrocip secara acak satu per satu tanpa pengembalian** untuk diuji ketahanan arusnya.',
    tipeStimulus: 'narasi',
    visualData: {
      type: 'table',
      tableData: {
        headers: ['Kategori Komponen', 'Jumlah Awal', 'Probabilitas Awal'],
        rows: [
          ['Mikrocip Baik', '10 unit', '10/15 = 2/3'],
          ['Mikrocip Cacat', '5 unit', '5/15 = 1/3'],
          ['Total Wadah', '15 unit', '1']
        ],
        caption: 'Komposisi Awal Komponen Elektronik dalam Wadah Uji'
      }
    },
    teksPertanyaan: 'Berdasarkan skenario pengambilan tanpa pengembalian tersebut, manakah dari pernyataan peluang berikut yang bernilai BENAR? (Pilihlah semua yang benar!)',
    opsiJawaban: [
      { label: 'A', text: 'Peluang terambilnya ketiga mikrocip berkondisi baik adalah $\\frac{24}{91}$.' },
      { label: 'B', text: 'Peluang terambilnya tepat satu mikrocip cacat adalah $\\frac{45}{91}$.' },
      { label: 'C', text: 'Peluang ketiga mikrocip yang terambil semuanya cacat adalah $\\frac{2}{91}$.' },
      { label: 'D', text: 'Peluang terambilnya minimal satu mikrocip cacat adalah $\\frac{67}{91}$.' },
      { label: 'E', text: 'Peluang terambilnya mikrocip cacat pada pengambilan pertama dan kedua sama besar dengan peluang terambilnya mikrocip cacat pada pengambilan kedua dan ketiga.' }
    ],
    kunciJawaban: ['A', 'B', 'C', 'D', 'E'],
    alasanKunci: 'Total semesta C(15, 3) = (15*14*13)/(3*2*1) = 5*7*13 = 455.\nA: Ketiga baik = C(10, 3) / 455 = 120 / 455. Sederhanakan bagi 5: 24/91. (A Benar!)\nB: Tepat 1 cacat (1 cacat, 2 baik) = [C(5, 1) * C(10, 2)] / 455 = [5 * 45] / 455 = 225 / 455 = 45/91. (B Benar!)\nC: Ketiga cacat = C(5, 3) / 455 = 10 / 455 = 2/91. (C Benar!)\nD: Minimal 1 cacat = 1 - P(semua baik) = 1 - 24/91 = (91 - 24)/91 = 67/91. (D Benar!)\nE: Simetri peluang tanpa pengembalian: P(C1 dan C2) = (5/15)*(4/14) = 2/21. P(C2 dan C3) = (10/15)*(5/14)*(4/13) + (5/15)*(4/14)*(13/13) = 2/21. Karena sifat simetri urutan marginal pada sampling tanpa pengembalian, peluang urutan posisi selalu simetris. (E Benar!)\nKelima pernyataan bernilai benar!',
    pembahasanNormal: {
      tahap1_memahami: 'Wadah memuat 10 komponen baik ($B$) dan 5 cacat ($C$), total 15 unit. Diambil 3 unit tanpa pengembalian. Kita harus menguji peluang gabungan kejadian majemuk.',
      tahap2_model: 'Ruang sampel pengambilan 3 dari 15 tanpa memperhatikan urutan:\n$$n(S) = C(15, 3) = \\frac{15 \\times 14 \\times 13}{3 \\times 2 \\times 1} = 5 \\times 7 \\times 13 = 455$$',
      tahap3_strategi: 'Hitung kombinasi untuk setiap skenario kejadian dan gunakan aturan komplemen untuk "minimal 1 cacat".',
      tahap4_penyelesaian: '- **Pernyataan A (Semua 3 Baik)**:\n  $$n(3B) = C(10, 3) = \\frac{10 \\times 9 \\times 8}{6} = 120$$\n  $$P(3B) = \\frac{120}{455} = \\frac{24}{91}$$ **(BENAR)**\n- **Pernyataan B (Tepat 1 Cacat, 2 Baik)**:\n  $$n(1C, 2B) = C(5, 1) \\times C(10, 2) = 5 \\times 45 = 225$$\n  $$P(1C, 2B) = \\frac{225}{455} = \\frac{45}{91}$$ **(BENAR)**\n- **Pernyataan C (Ketiga Cacat)**:\n  $$n(3C) = C(5, 3) = 10$$\n  $$P(3C) = \\frac{10}{455} = \\frac{2}{91}$$ **(BENAR)**\n- **Pernyataan D (Minimal 1 Cacat)**:\n  Kejadian komplementer dari "semua baik":\n  $$P(\\text{min } 1C) = 1 - P(3B) = 1 - \\frac{24}{91} = \\frac{67}{91}$$ **(BENAR)**\n- **Pernyataan E (Simetri Marginal)**:\n  Pada pengambilan acak tanpa pengembalian, setiap posisi pengambilan memiliki distribusi marginal yang identik (teorema penukaran urutan/exchangeability). Peluang komponen ke-$i$ dan ke-$j$ cacat adalah $\\frac{5}{15} \\times \\frac{4}{14} = \\frac{2}{21}$, independen dari apakah $i, j$ adalah posisi $(1, 2)$ atau $(2, 3)$. **(BENAR)**',
      tahap5_verifikasi: 'Cek jumlah total peluang: $P(0C) + P(1C) + P(2C) + P(3C) = \\frac{24}{91} + \\frac{45}{91} + \\frac{C(5,2)C(10,1)}{455} + \\frac{2}{91} = \\frac{24 + 45 + 20 + 2}{91} = \\frac{91}{91} = 1$. Distribusi lengkap dan sah.',
      tahap6_evaluasiOpsi: 'Seluruh pernyataan A, B, C, D, dan E terbukti benar secara matematis.',
      tahap7_kesimpulan: 'Semua pernyataan A, B, C, D, E bernilai BENAR.',
      tahap8_refleksi: 'Prinsip komplemen $P(A) = 1 - P(A^c)$ adalah cara tercepat mencari peluang dengan kata kunci "minimal satu".'
    },
    pembahasanCepat: {
      strategiInti: 'Kombinasi pembagi 455 & aturan komplemen satu baris',
      langkahPengerjaan: '1. Semesta $C(15, 3) = 455$.\n2. $P(3\\text{ baik}) = \\frac{120}{455} = \\frac{24}{91}$ (A Benar).\n3. $P(1\\text{ cacat}) = \\frac{5 \\times 45}{455} = \\frac{225}{455} = \\frac{45}{91}$ (B Benar).\n4. $P(3\\text{ cacat}) = \\frac{10}{455} = \\frac{2}{91}$ (C Benar).\n5. $P(\\text{min } 1) = 1 - \\frac{24}{91} = \\frac{67}{91}$ (D Benar).\n6. Sifat simetri posisi sampling tanpa pengembalian menjamin urutan probabilitas selalu setara (E Benar).',
      alasanMatematis: 'Pengambilan serentak 3 objek secara matematis ekuivalen dengan pengambilan bertahap tanpa pengembalian.',
      hasilAkhir: 'Semua Opsi (A, B, C, D, E) Benar',
      perbandinganEfisiensi: 'Memverifikasi kelima opsi secara sistematis dalam waktu 40 detik.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Peluang ketiga mikrocip baik terbukti 24/91.' },
      { option: 'B', explanation: 'Peluang tepat satu cacat terbukti 45/91.' },
      { option: 'C', explanation: 'Peluang ketiga cacat terbukti 2/91.' },
      { option: 'D', explanation: 'Peluang minimal satu cacat via komplemen terbukti 67/91.' },
      { option: 'E', explanation: 'Sifat simetri urutan sampling terbukti sah secara probabilitas.' }
    ],
    konsepPenting: 'Hukum probabilitas komplemen: untuk mencari peluang "sedikitnya satu kejadian terjadi", selalu hitung $1 - P(\\text{tidak ada kejadian tersebut yang terjadi})$.',
    parameterIRT: { a: 1.75, b: 0.7 },
    narasi: {
      stimulus: 'Perhatikan kondisi pengambilan acak 3 mikrocip dari wadah berisi 10 mikrocip baik dan 5 mikrocip cacat tanpa pengembalian.',
      pertanyaan: 'Manakah dari pernyataan peluang berikut yang bernilai benar? Silakan pilih semua pernyataan yang valid.',
      opsi: 'Periksa peluang ketiga baik, tepat satu cacat, ketiga cacat, minimal satu cacat, serta sifat simetri urutan pengambilannya.',
      umpanBalikBenar: 'Luar biasa! Penguasaanmu terhadap ruang sampel kombinasi dan peluang majemuk sangat sempurna.',
      umpanBalikSalah: 'Coba hitung total ruang sampel kombinasi 15 diambil 3 terlebih dahulu, yaitu 455.',
      pembahasanNormal: 'Dengan ruang sampel 455, peluang ketiga baik adalah 120 per 455 yaitu 24 per 91, A benar. Peluang tepat satu cacat adalah 5 kali 45 per 455 yaitu 45 per 91, B benar. Ketiga cacat adalah 10 per 455 yaitu 2 per 91, C benar. Minimal satu cacat dicari dengan komplemen 1 dikurang 24 per 91 menghasilkan 67 per 91, D benar. Probabilitas urutan tanpa pengembalian bersifat simetris, E benar.',
      pembahasanCepat: 'Trik cepat Mister Jo: bagi semuanya dengan faktor 5 pada semesta 455 yang menjadi 91! Kombinasi 10 diambil 3 adalah 120 dibagi 5 dapat 24, maka A benar. Kurangkan 91 dengan 24 langsung dapat 67 untuk D! Semuanya konsisten dan benar!',
      refleksi: 'Penyederhanaan pecahan di awal perhitungan menghindari kerumitan angka besar.'
    }
  },

  // SOAL 26 — BILANGAN — BS
  {
    id: 'soal-26',
    nomor: 26,
    elemen: 'Bilangan',
    subelemen: 'Eksponen Bulat dan Pecahan pada Konteks Dekomposisi Radioaktif',
    indikator: 'Siswa dapat menilai kebenaran tiga kesimpulan dengan mempertimbangkan sifat eksponen dan ketentuan nilai real.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Evaluasi Penurunan Rumus Peluruhan Zat Radioaktif',
    stimulus: 'Massa suatu isotop radioaktif meluruh mengikuti fungsi eksponensial terhadap waktu $t$ (dalam jam):\n\n$$M(t) = M_0 \\cdot 2^{-\\frac{t}{6}}$$\n\ndengan $M_0 = 64\\text{ gram}$ adalah massa awal isotop.\nTiga orang asisten laboratorium mengemukakan kesimpulan matematis mengenai sisa massa zat tersebut pada berbagai interval waktu.',
    tipeStimulus: 'narasi',
    teksPertanyaan: 'Tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH berdasarkan sifat operasi bilangan berpangkat!',
    pernyataanBenarSalah: [
      {
        id: 's1',
        statement: 'Waktu paruh (half-life) dari isotop radioaktif tersebut adalah $6\\text{ jam}$, yaitu waktu yang dibutuhkan massa untuk berkurang menjadi setengah dari massa awalnya.',
        isCorrect: true,
        reason: 'Saat t = 6 jam, M(6) = M_0 * 2^(-6/6) = M_0 * 2^(-1) = (1/2)*M_0 = 32 gram. Jadi waktu paruh tepat 6 jam.'
      },
      {
        id: 's2',
        statement: 'Setelah waktu $t = 15\\text{ jam}$, sisa massa isotop yang ada di laboratorium adalah $8\\sqrt{2}\\text{ gram}$.',
        isCorrect: true,
        reason: 'M(15) = 64 * 2^(-15/6) = 2^6 * 2^(-5/2) = 2^(6 - 5/2) = 2^(7/2) = 2^3 * 2^(1/2) = 8*sqrt(2) gram.'
      },
      {
        id: 's3',
        statement: 'Rasio sisa massa pada saat $t = 18\\text{ jam}$ dibandingkan saat $t = 12\\text{ jam}$ adalah $\\frac{1}{4}$.',
        isCorrect: false,
        reason: 'Selisih waktu Delta t = 18 - 12 = 6 jam (tepat satu waktu paruh). Maka rasio massanya adalah 2^(-6/6) = 2^(-1) = 1/2, BUKAN 1/4 (1/4 terjadi jika selisih waktu 12 jam).'
      }
    ],
    kunciJawaban: '',
    alasanKunci: 'Pernyataan 1 BENAR (waktu paruh = 6 jam). Pernyataan 2 BENAR (sisa massa = 8*sqrt(2) gram). Pernyataan 3 SALAH (rasio = 1/2, bukan 1/4).',
    pembahasanNormal: {
      tahap1_memahami: 'Diberikan rumus peluruhan $M(t) = 64 \\times 2^{-t/6}$. Kita menguji waktu paruh, sisa massa pada pangkat pecahan $t = 15\\text{ jam}$, dan rasio massa antara dua titik waktu.',
      tahap2_model: 'Gunakan sifat eksponen $a^m \\cdot a^n = a^{m+n}$ dan $a^{p/q} = \\sqrt[q]{a^p}$:\n- Waktu paruh tercapai saat $2^{-t/6} = 2^{-1} \\implies -\\frac{t}{6} = -1 \\implies t = 6\\text{ jam}$.\n- Sisa massa pada $t = 15$: $M(15) = 64 \\times 2^{-15/6}$.\n- Rasio $\\frac{M(18)}{M(12)} = \\frac{2^{-18/6}}{2^{-12/6}} = 2^{-3 - (-2)} = 2^{-1}$.',
      tahap3_strategi: 'Sederhanakan eksponen pecahan menjadi bentuk pangkat bulat dan akar.',
      tahap4_penyelesaian: '- **Pernyataan 1**: Pada $t = 6\\text{ jam}$, $M(6) = M_0 \\times 2^{-1} = \\frac{1}{2} M_0$. Maka waktu paruh memang $6\\text{ jam}$. **(BENAR)**\n- **Pernyataan 2**: Sederhanakan $M(15)$:\n  $$M(15) = 2^6 \\times 2^{-\\frac{15}{6}} = 2^6 \\times 2^{-\\frac{5}{2}} = 2^{6 - \\frac{5}{2}} = 2^{\\frac{7}{2}}$$\n  $$2^{\\frac{7}{2}} = 2^{3 + \\frac{1}{2}} = 2^3 \\times 2^{\\frac{1}{2}} = 8\\sqrt{2}\\text{ gram}$$ **(BENAR)**\n- **Pernyataan 3**: Rasio perbandingan massa:\n  $$\\frac{M(18)}{M(12)} = \\frac{64 \\times 2^{-3}}{64 \\times 2^{-2}} = \\frac{2^{-3}}{2^{-2}} = 2^{-1} = \\frac{1}{2}$$\n  Pernyataan menyatakan rasio $\\frac{1}{4}$ (keliru). **(SALAH)**',
      tahap5_verifikasi: 'Nilai $M(12) = 64 \\times 2^{-2} = 16\\text{ g}$. $M(18) = 64 \\times 2^{-3} = 8\\text{ g}$.\nRasio $\\frac{8}{16} = \\frac{1}{2} \\neq \\frac{1}{4}$. Terbukti.',
      tahap6_evaluasiOpsi: 'Hasil klasifikasi: Pernyataan 1 = BENAR, Pernyataan 2 = BENAR, Pernyataan 3 = SALAH.',
      tahap7_kesimpulan: 'Klasifikasi yang benar: BENAR - BENAR - SALAH.',
      tahap8_refleksi: 'Selisih waktu 6 jam selalu membagi dua massa zat, apa pun titik waktu awalnya (sifat memoryless peluruhan eksponensial).'
    },
    pembahasanCepat: {
      strategiInti: 'Konversi basis 2 & selisih waktu eksponensial',
      langkahPengerjaan: '1. Pangkat $-t/6 = -1 \\implies t = 6$ (Waktu paruh 6 jam $\\implies$ BENAR).\n2. $64 = 2^6$. Pangkat di $t=15$: $6 - 2,5 = 3,5 = 3 + 0,5 \\implies 2^3 \\sqrt{2} = 8\\sqrt{2}$ (BENAR).\n3. Selisih waktu $18 - 12 = 6$ jam $= 1$ waktu paruh $\\implies$ rasio harus $\\frac{1}{2}$, bukan $\\frac{1}{4}$ (SALAH).',
      alasanMatematis: 'Fungsi eksponensial memiliki sifat invarian pergeseran waktu: $\\frac{f(t + \\Delta t)}{f(t)} = a^{\\Delta t}$.',
      hasilAkhir: '1: BENAR, 2: BENAR, 3: SALAH',
      perbandinganEfisiensi: 'Memvalidasi ketiga pernyataan dalam 20 detik menggunakan mental math pangkat 2.'
    },
    konsepPenting: 'Sifat perkalian eksponen $2^{m - n}$ memungkinkan perhitungan rasio peluruhan hanya berdasarkan selisih waktu $\\Delta t$, tanpa memedulikan massa awal.',
    parameterIRT: { a: 1.55, b: 0.35 },
    narasi: {
      stimulus: 'Perhatikan model peluruhan zat radioaktif pada stimulus dengan massa awal 64 gram dan pembagi waktu 6 jam.',
      pertanyaan: 'Tentukan apakah masing-masing dari ketiga pernyataan berikut Benar atau Salah.',
      opsi: 'Pilih status Benar atau Salah pada setiap baris pernyataan.',
      umpanBalikBenar: 'Tepat sekali! Penalaran sifat eksponen dan waktu paruhmu sangat jitu.',
      umpanBalikSalah: 'Perhatikan selisih waktu pada pernyataan ketiga: 18 dikurang 12 adalah 6 jam, tepat satu periode waktu paruh.',
      pembahasanNormal: 'Saat t sama dengan 6 jam massa menjadi setengahnya, maka waktu paruh adalah 6 jam, pernyataan satu benar. Pada t sama dengan 15 jam, pangkat menjadi 7 per 2 yaitu 8 akar 2 gram, pernyataan dua benar. Selisih 18 dan 12 jam adalah 6 jam sehingga massanya menjadi setengah kali semula, bukan seperempat, maka pernyataan tiga salah.',
      pembahasanCepat: 'Trik cepat Mister Jo: ubah 64 jadi 2 pangkat 6! Di t sama dengan 15, pangkatnya 6 dikurang 2 setengah yaitu 3 setengah. 2 pangkat 3 adalah 8 dan pangkat setengah adalah akar dua, jadi 8 akar dua tepat! Selisih 18 dan 12 jam cuma 6 jam, alias satu kali waktu paruh, jadi berkurang jadi setengah, bukan seperempat!',
      refleksi: 'Ingat bahwa pangkat pecahan a pangkat m per n selalu bisa dipisahkan menjadi bagian bulat dan bagian akar.'
    }
  },

  // SOAL 27 — ALJABAR — BS
  {
    id: 'soal-27',
    nomor: 27,
    elemen: 'Aljabar',
    subelemen: 'Aplikasi Matematika Finansial: Bunga Tunggal vs Bunga Majemuk',
    indikator: 'Siswa dapat menilai tiga klaim tentang model fungsi, nilai akumulasi, dan kondisi ketika suatu rencana lebih menguntungkan.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Komparasi Pertumbuhan Saldo Bunga Tunggal dan Bunga Majemuk',
    stimulus: 'Dua orang investor menempatkan modal awal yang sama besar, yaitu $M_0 = \\text{Rp}10.000.000$ pada dua produk perbankan berbeda selama beberapa tahun ($t$):\n\n- **Rencana Alfa (Bunga Tunggal)**: Menerapkan suku bunga tunggal $10\\%$ per tahun.\n- **Rencana Beta (Bunga Majemuk)**: Menerapkan suku bunga majemuk $8\\%$ per tahun yang dikapitalisasi setiap akhir tahun.\n\nPerencana keuangan membandingkan perkembangan nilai akumulasi modal kedua rencana tersebut.',
    tipeStimulus: 'tabel',
    visualData: {
      type: 'table',
      tableData: {
        headers: ['Akhir Tahun ke-', 'Saldo Rencana Alfa (Bunga Tunggal 10%)', 'Saldo Rencana Beta (Bunga Majemuk 8%)'],
        rows: [
          ['0 (Awal)', 'Rp10.000.000', 'Rp10.000.000'],
          ['1', 'Rp11.000.000', 'Rp10.800.000'],
          ['2', 'Rp12.000.000', 'Rp11.664.000'],
          ['3', 'Rp13.000.000', 'Rp12.597.120'],
          ['4', 'Rp14.000.000', 'Rp13.604.890']
        ],
        caption: 'Simulasi Saldo Rencana Alfa vs Rencana Beta Selama 4 Tahun'
      }
    },
    teksPertanyaan: 'Tentukan apakah masing-masing klaim perencana keuangan berikut BENAR atau SALAH!',
    pernyataanBenarSalah: [
      {
        id: 's1',
        statement: 'Pertumbuhan saldo Rencana Alfa membentuk fungsi linear terhadap waktu $t$, sedangkan Rencana Beta membentuk fungsi eksponensial terhadap waktu $t$.',
        isCorrect: true,
        reason: 'Bunga tunggal: M_A(t) = M_0*(1 + i*t) = 10.000.000 + 1.000.000*t (fungsi linear linier). Bunga majemuk: M_B(t) = M_0*(1 + i)^t = 10.000.000*(1,08)^t (fungsi eksponensial).'
      },
      {
        id: 's2',
        statement: 'Pada periode 4 tahun pertama, Rencana Alfa selalu menghasilkan saldo akhir tahun yang lebih tinggi dibandingkan Rencana Beta.',
        isCorrect: true,
        reason: 'Sesuai data tabel: Tahun 1 (11 jt > 10,8 jt), Tahun 2 (12 jt > 11,664 jt), Tahun 3 (13 jt > 12,597 jt), Tahun 4 (14 jt > 13,605 jt). Alfa selalu lebih tinggi selama 4 tahun pertama.'
      },
      {
        id: 's3',
        statement: 'Karena suku bunga Rencana Alfa ($10\\%$) lebih besar daripada suku bunga Rencana Beta ($8\\%$), maka saldo Rencana Alfa akan selalu lebih tinggi daripada Rencana Beta untuk jangka waktu berapa tahun pun.',
        isCorrect: false,
        reason: 'Meskipun suku bunganya lebih kecil (8% < 10%), fungsi eksponensial (1,08)^t memiliki turunan yang terus bertambah besar. Pada jangka panjang (t >= 11 tahun, 1,08^11 ~ 2,331 > 2,10), saldo bunga majemuk Beta pasti melampaui bunga tunggal Alfa.'
      }
    ],
    kunciJawaban: '',
    alasanKunci: 'Pernyataan 1 BENAR (linear vs eksponensial). Pernyataan 2 BENAR (Alfa > Beta selama 4 tahun pertama). Pernyataan 3 SALAH (jangka panjang fungsi eksponensial pasti melampaui linear).',
    pembahasanNormal: {
      tahap1_memahami: 'Dua skema bunga: Alfa (tunggal 10%) dan Beta (majemuk 8%) dengan modal awal Rp10.000.000. Kita mengevaluasi bentuk matematis fungsi, data saldo 4 tahun pertama, dan proyeksi jangka panjang.',
      tahap2_model: 'Model matematis:\n- Bunga Tunggal: $M_A(t) = M_0 (1 + r_A \\cdot t) = 10.000.000 (1 + 0,10 t) = 10.000.000 + 1.000.000 t$ (Fungsi Polinomial Derajat 1 / Linear).\n- Bunga Majemuk: $M_B(t) = M_0 (1 + r_B)^t = 10.000.000 (1,08)^t$ (Fungsi Eksponensial Basis $> 1$).',
      tahap3_strategi: 'Bandingkan grafik kedua fungsi dan periksa nilai limit saat $t \\to \\infty$.',
      tahap4_penyelesaian: '- **Pernyataan 1**: Bentuk $M_A(t)$ berderajat 1 (linear), sedangkan $M_B(t)$ memiliki variabel bebas $t$ di eksponen (fungsi eksponensial). **(BENAR)**\n- **Pernyataan 2**: Mengacu pada data tabel:\n  - $t = 1$: $11,0 > 10,8$ juta\n  - $t = 2$: $12,0 > 11,664$ juta\n  - $t = 3$: $13,0 > 12,597$ juta\n  - $t = 4$: $14,0 > 13,605$ juta\n  Saldo Alfa selalu lebih unggul selama 4 tahun pertama. **(BENAR)**\n- **Pernyataan 3**: Secara asimtotik matematis, untuk basis $b > 1$, fungsi eksponensial $b^t$ selalu tumbuh lebih cepat daripada fungsi linear $c \\cdot t$.\n  Cek pada $t = 11$:\n  $M_A(11) = 10 \\times (1 + 1,1) = 21,0\\text{ juta}$.\n  $M_B(11) = 10 \\times (1,08)^{11} \\approx 10 \\times 2,3316 = 23,316\\text{ juta}$.\n  Pada tahun ke-11, Beta sudah melampaui Alfa! Pernyataan 3 mengklaim "selalu lebih tinggi untuk berapa tahun pun", sehingga **(SALAH)**.',
      tahap5_verifikasi: 'Limit $\\lim_{t \\to \\infty} \\frac{(1,08)^t}{1 + 0,1t} = \\infty$. Bunga majemuk pada akhirnya pasti mengalahkan bunga tunggal.',
      tahap6_evaluasiOpsi: 'Hasil klasifikasi: Pernyataan 1 = BENAR, Pernyataan 2 = BENAR, Pernyataan 3 = SALAH.',
      tahap7_kesimpulan: 'Klasifikasi yang benar: BENAR - BENAR - SALAH.',
      tahap8_refleksi: 'Efek "bunga berbunga" (compounding effect) adalah sifat dasar eksponensial yang selalu mendominasi fungsi linear dalam jangka panjang.'
    },
    pembahasanCepat: {
      strategiInti: 'Karakteristik kurva Linear vs Eksponensial',
      langkahPengerjaan: '1. Bunga tunggal adalah garis lurus (linear), bunga majemuk adalah kurva melengkung ke atas (eksponensial) $\\implies$ BENAR.\n2. Tabel jelas menunjukkan angka Alfa lebih besar dari Beta di tahun 1 sampai 4 $\\implies$ BENAR.\n3. Pertumbuhan eksponensial PASTI melampaui garis lurus di masa depan, tidak mungkin kalah selamanya $\\implies$ SALAH.',
      alasanMatematis: 'Laju pertumbuhan relatif eksponensial konstan positif ($8\\%$), sedangkan laju pertumbuhan relatif linear $\\frac{1}{t}$ menurun menuju nol.',
      hasilAkhir: '1: BENAR, 2: BENAR, 3: SALAH',
      perbandinganEfisiensi: 'Memvalidasi pernyataan 3 secara konseptual dalam 5 detik tanpa perlu kalkulator tahun ke-11.'
    },
    konsepPenting: 'Teorema pertumbuhan: Setiap fungsi eksponensial $a(1+r)^t$ dengan $r > 0$ pada akhirnya akan melampaui fungsi linear mana pun $a(1+kt)$ untuk rentang waktu yang cukup panjang.',
    parameterIRT: { a: 1.6, b: 0.4 },
    narasi: {
      stimulus: 'Perhatikan perbandingan simulasi saldo bunga tunggal 10 persen dan bunga majemuk 8 persen pada tabel selama 4 tahun.',
      pertanyaan: 'Tentukan apakah masing-masing klaim perencana keuangan berikut Benar atau Salah.',
      opsi: 'Pilihlah Benar atau Salah untuk tiap butir klaim evaluasi keuangan.',
      umpanBalikBenar: 'Tepat sekali! Pemahamanmu mengenai model linear, eksponensial, dan efek bunga majemuk sangat brilian.',
      umpanBalikSalah: 'Coba cermati pernyataan ketiga. Apakah kurva garis lurus bisa mengalahkan kurva eksponensial untuk selamanya?',
      pembahasanNormal: 'Bunga tunggal bertambah konstan satu juta rupiah per tahun sehingga membentuk fungsi linear, sedangkan bunga majemuk mengalikan saldo sebesar satu koma nol delapan setiap tahun sehingga membentuk fungsi eksponensial, pernyataan satu benar. Dalam empat tahun pertama saldo Alfa selalu di atas Beta, pernyataan dua benar. Dalam jangka panjang bunga majemuk pasti melampaui bunga tunggal, sehingga pernyataan tiga salah.',
      pembahasanCepat: 'Trik cepat Mister Jo: ingat prinsip dasar kurva! Bunga tunggal itu garis lurus, bunga majemuk itu eksponensial melengkung ke atas. Kurva melengkung eksponensial pasti akan menyalip garis lurus di masa depan! Jadi pernyataan tiga yang bilang Alfa menang selamanya langsung kita salahkan!',
      refleksi: 'Pahami kekuatan efek penggandaan majemuk dalam analisis keuangan jangka panjang.'
    }
  },

  // SOAL 28 — GEOMETRI — BS
  {
    id: 'soal-28',
    nomor: 28,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Kedudukan Garis, Kesejajaran, dan Hubungan Garis-Bidang pada Limas',
    indikator: 'Siswa dapat mengevaluasi tiga pernyataan mengenai kedudukan garis, kesejajaran, hubungan garis-bidang, dan jarak objek geometri.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Analisis Kedudukan Garis dan Bidang pada Limas Segi Empat T.ABCD',
    stimulus: 'Diberikan limas segi empat beraturan $T.ABCD$ dengan alas berbentuk persegi berukuran $AB = 8\\text{ cm}$ dan tinggi limas $TO = 4\\sqrt{6}\\text{ cm}$ (dengan $O$ adalah titik pusat perpotongan diagonal bidang alas $ABCD$).\n\nTitik $M$ merupakan titik tengah rusuk tegak $TC$. Tim arsitek memproyeksikan beberapa kedudukan garis terhadap rusuk dan bidang limas.',
    tipeStimulus: 'geometri',
    visualData: {
      type: 'svg',
      svgType: 'pyramid_lines_relationships',
      caption: 'Diagram Limas Beraturan T.ABCD dengan Titik M pada Rusuk TC'
    },
    teksPertanyaan: 'Berdasarkan model limas beraturan $T.ABCD$ tersebut, tentukan kebenaran dari masing-masing pernyataan berikut!',
    pernyataanBenarSalah: [
      {
        id: 's1',
        statement: 'Ruas garis $AB$ dan ruas garis $TC$ merupakan dua garis yang saling bersilangan (tidak sejajar dan tidak berpotongan).',
        isCorrect: true,
        reason: 'Garis AB terletak pada bidang alas ABCD, sedangkan titik T di luar alas dan C di alas tetapi tidak pada AB. Keduanya tidak sebidang, tidak sejajar, dan tidak berpotongan, sehingga bersilangan.'
      },
      {
        id: 's2',
        statement: 'Garis yang menghubungkan titik $O$ (pusat alas) dan titik $M$ (tengah $TC$) sejajar dengan rusuk tegak $TA$.',
        isCorrect: true,
        reason: 'Pada bidang segitiga TAC, titik O adalah titik tengah diagonal AC (karena ABCD persegi) dan titik M adalah titik tengah TC. Garis OM adalah garis tengah (midsegment) segitiga TAC sehingga OM sejajar dengan TA dan panjang OM = 1/2 * TA.'
      },
      {
        id: 's3',
        statement: 'Tinggi rusuk tegak $TA$ sama panjang dengan rusuk alas $AB$, yaitu $8\\text{ cm}$.',
        isCorrect: false,
        reason: 'Diagonal alas AC = 8*sqrt(2), maka OA = 4*sqrt(2) cm. Tinggi TO = 4*sqrt(6) cm. TA = sqrt(OA^2 + TO^2) = sqrt((4*sqrt(2))^2 + (4*sqrt(6))^2) = sqrt(32 + 96) = sqrt(128) = 8*sqrt(2) cm (~11.31 cm), bukan 8 cm.'
      }
    ],
    kunciJawaban: '',
    alasanKunci: 'Pernyataan 1 BENAR (AB dan TC bersilangan). Pernyataan 2 BENAR (OM sejajar TA karena garis tengah segitiga TAC). Pernyataan 3 SALAH (panjang TA = 8*sqrt(2) cm != 8 cm).',
    pembahasanNormal: {
      tahap1_memahami: 'Limas beraturan $T.ABCD$ dengan alas persegi $s = 8\\text{ cm}$ dan tinggi $TO = 4\\sqrt{6}\\text{ cm}$. Titik $O$ di tengah $AC$, dan $M$ di tengah $TC$. Kita mengevaluasi kedudukan bersilangan garis $AB$ dan $TC$, kesejajaran garis $OM$ dengan $TA$, dan panjang rusuk tegak $TA$.',
      tahap2_model: 'Geometri bidang diagonal $TAC$:\n- $AC$ adalah diagonal persegi alas: $AC = s\\sqrt{2} = 8\\sqrt{2}\\text{ cm}$.\n- $O$ adalah titik tengah $AC$, sehingga $AO = OC = 4\\sqrt{2}\\text{ cm}$.\n- Segitiga $\\triangle TOA$ siku-siku di $O$ dengan $TO = 4\\sqrt{6}\\text{ cm}$ dan $AO = 4\\sqrt{2}\\text{ cm}$.',
      tahap3_strategi: 'Gunakan dalil garis tengah segitiga dan Teorema Pythagoras ruang.',
      tahap4_penyelesaian: '- **Pernyataan 1**: Garis $AB$ terletak pada bidang alas $ABCD$. Garis $TC$ menembus bidang alas di titik $C$. Karena $C \\notin AB$, maka kedua garis tidak berpotongan dan tidak sejajar (tidak sebidang). Dengan demikian garis $AB$ dan $TC$ saling **bersilangan**. **(BENAR)**\n- **Pernyataan 2**: Tinjau segitiga $\\triangle TAC$.\n  $O$ adalah titik tengah $AC$ ($AO = OC$).\n  $M$ adalah titik tengah $TC$ ($TM = MC$).\n  Berdasarkan **Dalil Titik Tengah Segitiga**, ruas garis penghubung dua titik tengah sisi segitiga ($OM$) selalu **sejajar** dengan sisi ketiga ($TA$) dan panjangnya $\\frac{1}{2} TA$. **(BENAR)**\n- **Pernyataan 3**: Hitung panjang rusuk tegak $TA$:\n  $$TA = \\sqrt{AO^2 + TO^2} = \\sqrt{(4\\sqrt{2})^2 + (4\\sqrt{6})^2} = \\sqrt{32 + 96} = \\sqrt{128} = 8\\sqrt{2}\\text{ cm}$$\n  Pernyataan menyatakan panjangnya $8\\text{ cm}$. Nilai yang benar adalah $8\\sqrt{2}\\text{ cm}$. **(SALAH)**',
      tahap5_verifikasi: 'Cek rasio $TA$: $8\\sqrt{2} \\approx 11,31\\text{ cm} > 8\\text{ cm}$. Pada limas beraturan dengan tinggi $4\\sqrt{6} \\approx 9,8\\text{ cm}$, rusuk miring $TA$ harus lebih panjang dari tinggi ($11,31 > 9,8$), sehingga tidak mungkin bernilai 8 cm.',
      tahap6_evaluasiOpsi: 'Hasil klasifikasi: Pernyataan 1 = BENAR, Pernyataan 2 = BENAR, Pernyataan 3 = SALAH.',
      tahap7_kesimpulan: 'Klasifikasi yang benar: BENAR - BENAR - SALAH.',
      tahap8_refleksi: 'Dalil titik tengah segitiga adalah alat yang sangat ampuh untuk membuktikan kesejajaran garis di dalam bangun ruang tanpa menggunakan koordinat rumit.'
    },
    pembahasanCepat: {
      strategiInti: 'Dalil Midsegment Segitiga & Pythagoras Cepat',
      langkahPengerjaan: '1. Garis alas $AB$ dan rusuk miring seberang $TC$ tidak sebidang $\\implies$ BERSILANGAN (BENAR).\n2. Di segitiga $TAC$, $O$ tengah $AC$ dan $M$ tengah $TC$. Ruas penghubung tengah pasti sejajar sisi ketiga $TA$ (BENAR).\n3. Rusuk tegak $TA = \\sqrt{(4\\sqrt{2})^2 + (4\\sqrt{6})^2} = \\sqrt{32 + 96} = \\sqrt{128} = 8\\sqrt{2} \\neq 8$ (SALAH).',
      alasanMatematis: 'Tinggi $TO = 4\\sqrt{6} \\approx 9,8\\text{ cm}$ sudah melebihi 8 cm, sehingga hipotenusa $TA$ mustahil hanya bernilai 8 cm!',
      hasilAkhir: '1: BENAR, 2: BENAR, 3: SALAH',
      perbandinganEfisiensi: 'Pernyataan 3 langsung gugur dalam 2 detik karena sisi miring segitiga siku-siku harus lebih panjang dari sisi tegaknya.'
    },
    konsepPenting: 'Dua garis dalam ruang disebut bersilangan jika tidak terletak pada satu bidang yang sama (tidak sejajar dan tidak berpotongan).',
    parameterIRT: { a: 1.65, b: 0.55 },
    narasi: {
      stimulus: 'Perhatikan diagram limas segi empat beraturan T.ABCD pada layar. Amati titik tengah rusuk tegak M dan titik potong diagonal alas O.',
      pertanyaan: 'Tentukan apakah masing-masing dari ketiga pernyataan berikut Benar atau Salah.',
      opsi: 'Pilih status Benar atau Salah pada setiap baris pernyataan.',
      umpanBalikBenar: 'Luar biasa! Pemahamanmu terhadap dalil garis tengah segitiga dan kedudukan garis ruang sangat mantap.',
      umpanBalikSalah: 'Coba perhatikan tinggi TO yang bernilai 4 akar 6. Apakah mungkin sisi miring TA lebih pendek dari tingginya?',
      pembahasanNormal: 'Garis AB di alas dan garis TC di rusuk miring tidak sebidang sehingga bersilangan, pernyataan satu benar. Garis OM menghubungkan dua titik tengah sisi segitiga TAC sehingga sejajar TA berdasarkan dalil midsegment, pernyataan dua benar. Panjang TA adalah akar dari 32 ditambah 96 yaitu 8 akar 2 cm, bukan 8 cm, maka pernyataan tiga salah.',
      pembahasanCepat: 'Trik cepat Mister Jo: perhatikan segitiga siku-siku TOA! Tingginya 4 akar 6 yaitu sekitar 9 koma delapan cm. Masak sisi miringnya cuma 8 cm? Jelas mustahil, hipotenusa pasti lebih panjang dari sisi tegak! Maka pernyataan tiga langsung SALAH tanpa perlu menghitung detail!',
      refleksi: 'Gunakan selalu sifat hipotenusa sebagai sisi terpanjang untuk memverifikasi kebenaran hitungan geometri ruang.'
    }
  },

  // SOAL 29 — TRIGONOMETRI — BS
  {
    id: 'soal-29',
    nomor: 29,
    elemen: 'Trigonometri',
    subelemen: 'Pengaruh Perubahan Sudut Elevasi terhadap Tinggi dan Jarak',
    indikator: 'Siswa dapat menilai tiga prediksi mengenai perubahan rasio trigonometri dan dampaknya terhadap panjang atau tinggi objek.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Prediksi Dinamika Pengukuran Klinometer pada Perubahan Sudut',
    stimulus: 'Seorang surveyor mengamati puncak pohon pinus tegak dari jarak horizontal tetap $d = 20\\text{ meter}$ menggunakan alat klinometer.\n\nDalam simulasi cuaca dan pertumbuhan tajuk pohon, disimulasikan dua skenario sudut elevasi pengamatan:\n- **Skenario 1**: Sudut elevasi awal $\\theta_1 = 30^\\circ$.\n- **Skenario 2**: Sudut elevasi meningkat menjadi dua kali lipat, yaitu $\\theta_2 = 60^\\circ$.\n\nTinggi instrumen klinometer diabaikan.',
    tipeStimulus: 'ilustrasi',
    visualData: {
      type: 'svg',
      svgType: 'surveyor_angle_double',
      caption: 'Model Skenario Perubahan Sudut Elevasi dari Theta = 30° Menjadi 60° pada Jarak Tetap'
    },
    teksPertanyaan: 'Tentukan apakah masing-masing pernyataan prediksi matematis berikut BENAR atau SALAH!',
    pernyataanBenarSalah: [
      {
        id: 's1',
        statement: 'Tinggi pohon yang terukur pada Skenario 1 adalah $\\frac{20}{\\sqrt{3}}\\text{ meter}$ (atau $\\frac{20}{3}\\sqrt{3}\\text{ meter}$).',
        isCorrect: true,
        reason: 'h1 = d * tan 30 = 20 * (1/sqrt(3)) = 20/sqrt(3) = (20/3)*sqrt(3) meter.'
      },
      {
        id: 's2',
        statement: 'Karena sudut elevasi meningkat 2 kali lipat (dari $30^\\circ$ menjadi $60^\\circ$), maka tinggi pohon yang terukur pada Skenario 2 tepat bernilai 2 kali lipat dari tinggi pohon pada Skenario 1.',
        isCorrect: false,
        reason: 'Fungsi tangen BUKAN fungsi linear. tan 60 = sqrt(3), sedangkan tan 30 = 1/sqrt(3). Rasio tinggi h2 / h1 = tan 60 / tan 30 = sqrt(3) / (1/sqrt(3)) = 3 KALI LIPAT, bukan 2 kali lipat!'
      },
      {
        id: 's3',
        statement: 'Rasio pertambahan tinggi pohon antara Skenario 2 dan Skenario 1 adalah $\\frac{40}{3}\\sqrt{3}\\text{ meter}$.',
        isCorrect: true,
        reason: 'Delta h = h2 - h1 = 20*sqrt(3) - (20/3)*sqrt(3) = (60/3 - 20/3)*sqrt(3) = (40/3)*sqrt(3) meter.'
      }
    ],
    kunciJawaban: '',
    alasanKunci: 'Pernyataan 1 BENAR (h1 = (20/3)*sqrt(3) m). Pernyataan 2 SALAH (tinggi menjadi 3 kali lipat, bukan 2 kali lipat karena fungsi tangen non-linear). Pernyataan 3 BENAR (Delta h = (40/3)*sqrt(3) m).',
    pembahasanNormal: {
      tahap1_memahami: 'Jarak horizontal tetap $d = 20\\text{ m}$. Sudut $\\theta_1 = 30^\\circ$ dan $\\theta_2 = 60^\\circ$. Kita mengevaluasi tinggi $h_1$, non-linearitas penggandaan sudut pada tinggi, dan selisih ketinggian $\\Delta h$.',
      tahap2_model: 'Hubungan tinggi dan sudut pada jarak horizontal tetap $d$:\n$$h(\\theta) = d \\cdot \\tan \\theta$$\n- $h_1 = 20 \\cdot \\tan 30^\\circ = 20 \\cdot \\frac{1}{\\sqrt{3}} = \\frac{20}{3}\\sqrt{3}\\text{ meter}$.\n- $h_2 = 20 \\cdot \\tan 60^\\circ = 20 \\cdot \\sqrt{3} = 20\\sqrt{3}\\text{ meter}$.',
      tahap3_strategi: 'Hitung rasio perbandingan $\\frac{h_2}{h_1}$ dan selisih aljabar $h_2 - h_1$.',
      tahap4_penyelesaian: '- **Pernyataan 1**: $h_1 = 20 \\times \\frac{1}{\\sqrt{3}} = \\frac{20}{3}\\sqrt{3}\\text{ meter}$. **(BENAR)**\n- **Pernyataan 2**: Hitung rasio tinggi:\n  $$\\frac{h_2}{h_1} = \\frac{\\tan 60^\\circ}{\\tan 30^\\circ} = \\frac{\\sqrt{3}}{\\frac{1}{\\sqrt{3}}} = \\sqrt{3} \\times \\sqrt{3} = 3$$\n  Tinggi objek meningkat menjadi **3 kali lipat**, bukan 2 kali lipat! Hal ini karena fungsi trigonometri $\\tan \\theta$ bersifat non-linear ($f(2x) \\neq 2f(x)$). **(SALAH)**\n- **Pernyataan 3**: Selisih pertambahan tinggi:\n  $$\\Delta h = h_2 - h_1 = 20\\sqrt{3} - \\frac{20}{3}\\sqrt{3} = \\left(20 - \\frac{20}{3}\\right)\\sqrt{3} = \\left(\\frac{60 - 20}{3}\\right)\\sqrt{3} = \\frac{40}{3}\\sqrt{3}\\text{ meter}$$ **(BENAR)**',
      tahap5_verifikasi: 'Gunakan rumus sudut rangkap tangen:\n$$\\tan(2\\theta) = \\frac{2\\tan \\theta}{1 - \\tan^2 \\theta}$$\nUntuk $\\theta = 30^\\circ$, $\\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$:\n$$\\tan 60^\\circ = \\frac{2(1/\\sqrt{3})}{1 - 1/3} = \\frac{2/\\sqrt{3}}{2/3} = \\frac{3}{\\sqrt{3}} = \\sqrt{3}$$\nFaktor pengali adalah $\\frac{1}{1 - \\tan^2 30^\\circ} = \\frac{1}{2/3} = \\frac{3}{2}$ kali dari penggandaan biasa, menghasilkan tepat 3 kali lipat.',
      tahap6_evaluasiOpsi: 'Hasil klasifikasi: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      tahap7_kesimpulan: 'Klasifikasi yang benar: BENAR - SALAH - BENAR.',
      tahap8_refleksi: 'Fungsi trigonometri tidak pernah proporsional langsung terhadap sudutnya; melipatgandakan sudut tidak melipatgandakan nilai perbandingan trigonometrinya.'
    },
    pembahasanCepat: {
      strategiInti: 'Rasio tangen istimewa $\\sqrt{3} : \\frac{1}{\\sqrt{3}} = 3$',
      langkahPengerjaan: '1. $h_1 = 20 \\times \\frac{\\sqrt{3}}{3} = \\frac{20}{3}\\sqrt{3}$ (Pernyataan 1 Benar).\n2. Tangen 60 derajat ($\\\\sqrt{3}$) dibagi tangen 30 derajat ($1/\\sqrt{3}$) adalah $3$. Ketinggian naik 3 KALI LIPAT, bukan 2 kali lipat (Pernyataan 2 SALAH).\n3. Selisih: $3 h_1 - h_1 = 2 h_1 = 2 \\times \\frac{20}{3}\\sqrt{3} = \\frac{40}{3}\\sqrt{3}$ (Pernyataan 3 Benar).',
      alasanMatematis: 'Karena $h_2 = 3 h_1$, maka selisih $\\Delta h = 2 h_1$ dapat dihitung seketika.',
      hasilAkhir: '1: BENAR, 2: SALAH, 3: BENAR',
      perbandinganEfisiensi: 'Memangkas perhitungan selisih menjadi cukup mengalikan $h_1$ dengan 2.'
    },
    konsepPenting: 'Miskonsepsi linearitas: $\\tan(2\\theta) \\neq 2\\tan(\\theta)$. Pada sudut $30^\\circ$ ke $60^\\circ$, nilai tangen melonjak tepat 3 kali lipat.',
    parameterIRT: { a: 1.6, b: 0.45 },
    narasi: {
      stimulus: 'Perhatikan model pengamatan pohon pinus dari jarak 20 meter ketika sudut elevasi dinaikkan dari 30 derajat menjadi 60 derajat.',
      pertanyaan: 'Tentukan apakah masing-masing pernyataan prediksi matematis berikut Benar atau Salah.',
      opsi: 'Pilih status Benar atau Salah pada setiap baris pernyataan.',
      umpanBalikBenar: 'Tepat sekali! Kamu tidak terjebak ilusi linearitas sudut dan menghitung pertambahan tinggi dengan sangat baik.',
      umpanBalikSalah: 'Perhatikan baik-baik pernyataan kedua. Apakah tangen 60 derajat sama dengan dua kali tangen 30 derajat?',
      pembahasanNormal: 'Tinggi pertama adalah 20 per 3 akar 3 meter, pernyataan satu benar. Tangen 60 derajat adalah akar 3, sedangkan tangen 30 derajat adalah 1 per akar 3. Pembagian keduanya menghasilkan angka 3, yang berarti tingginya menjadi 3 kali lipat, bukan 2 kali lipat! Maka pernyataan dua salah. Selisih ketinggian adalah 2 kali tinggi pertama yaitu 40 per 3 akar 3 meter, pernyataan tiga benar.',
      pembahasanCepat: 'Trik cepat Mister Jo: jangan tertipu sudut yang berlipat dua! Akar 3 dibagi sepertiga akar 3 itu sama dengan 3! Jadi tingginya naik tiga kali lipat! Karena naik tiga kali lipat, selisihnya adalah dua kali tinggi awal: dua kali 20 per 3 adalah 40 per 3 akar tiga. Sangat mudah dan menyenangkan!',
      refleksi: 'Ingat kawan-kawan, fungsi trigonometri bukan garis lurus. Jangan pernah berasumsi kelipatan sudut melipatgandakan tinggi.'
    }
  },

  // SOAL 30 — DATA DAN PELUANG — BS
  {
    id: 'soal-30',
    nomor: 30,
    elemen: 'Data dan Peluang',
    subelemen: 'Rata-Rata Gabungan, Sebaran, dan Validitas Inferensi Dua Populasi',
    indikator: 'Siswa dapat mengevaluasi tiga pernyataan mengenai rata-rata gabungan, penyebaran data, serta validitas kesimpulan berdasarkan bukti statistik.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Evaluasi Komparasi Prestasi Belajar Dua Sekolah Kabupaten',
    stimulus: 'Dinas Pendidikan mengevaluasi hasil Asesmen Standar Nasional Matematika dari dua sekolah di satu wilayah:\n\n- **Sekolah Mandiri ($A$)**: Memiliki $n_A = 60$ siswa dengan rata-rata skor $\\bar{x}_A = 82$ dan simpangan baku $s_A = 4$.\n- **Sekolah Pelopor ($B$)**: Memiliki $n_B = 40$ siswa dengan rata-rata skor $\\bar{x}_B = 72$ dan simpangan baku $s_B = 9$.\n\nSeorang staf analis menyusun laporan komparatif mengenai kedua sekolah tersebut.',
    tipeStimulus: 'tabel',
    visualData: {
      type: 'table',
      tableData: {
        headers: ['Parameter Statistik', 'Sekolah Mandiri (A)', 'Sekolah Pelopor (B)'],
        rows: [
          ['Jumlah Siswa ($n$)', '60 siswa', '40 siswa'],
          ['Rata-Rata Skor (Mean)', '82', '72'],
          ['Simpangan Baku (SD)', '4', '9'],
          ['Variansi ($s^2$)', '16', '81']
        ],
        caption: 'Ringkasan Statistik Hasil Asesmen Matematika Dua Sekolah'
      }
    },
    teksPertanyaan: 'Tentukan apakah masing-masing klaim laporan staf analis berikut BENAR atau SALAH berdasarkan bukti statistik data!',
    pernyataanBenarSalah: [
      {
        id: 's1',
        statement: 'Rata-rata gabungan skor asesmen matematika dari kedua sekolah tersebut adalah $78,0$.',
        isCorrect: true,
        reason: 'Rata-rata gabungan = (n_A * x_bar_A + n_B * x_bar_B) / (n_A + n_B) = (60 * 82 + 40 * 72) / (60 + 40) = (4.920 + 2.880) / 100 = 7.800 / 100 = 78,0.'
      },
      {
        id: 's2',
        statement: 'Sebaran nilai siswa di Sekolah Mandiri ($A$) lebih heterogen (lebih bervariasi) dibandingkan sebaran nilai siswa di Sekolah Pelopor ($B$).',
        isCorrect: false,
        reason: 'Simpangan baku Sekolah A (s_A = 4) jauh lebih kecil daripada Sekolah B (s_B = 9). Semakin kecil simpangan baku, semakin homogen datanya. Jadi Sekolah A lebih homogen, bukan lebih heterogen!'
      },
      {
        id: 's3',
        statement: 'Pasti terdapat setidaknya satu siswa di Sekolah Pelopor ($B$) yang memperoleh skor asesmen lebih tinggi daripada rata-rata siswa di Sekolah Mandiri ($82$).',
        isCorrect: false,
        reason: 'Statistik deskriptif mean (72) dan simpangan baku (9) tidak menjamin adanya nilai di atas 82. Secara matematis, sangat mungkin seluruh 40 siswa Sekolah B berada pada rentang [54, 81] yang tetap menghasilkan mean 72 dan SD 9 tanpa seorang pun bernilai >= 82. Klaim "pasti ada" secara bukti deduktif tidak valid.'
      }
    ],
    kunciJawaban: '',
    alasanKunci: 'Pernyataan 1 BENAR (Rata-rata gabungan = 78,0). Pernyataan 2 SALAH (Sekolah A dengan SD 4 lebih homogen). Pernyataan 3 SALAH (mean dan SD tidak dapat memastikan adanya nilai ekstrem tertentu secara pasti).',
    pembahasanNormal: {
      tahap1_memahami: 'Data dua kelompok: Sekolah A ($n_A = 60, \\bar{x}_A = 82, s_A = 4$) dan Sekolah B ($n_B = 40, \\bar{x}_B = 72, s_B = 9$). Kita mengevaluasi rata-rata tertimbang gabungan, heterogenitas data via simpangan baku, dan keabsahan kesimpulan deduktif tentang nilai individu.',
      tahap2_model: 'Rumus rata-rata gabungan dua kelompok berukuran berbeda:\n$$\\bar{x}_{\\text{gab}} = \\frac{n_A \\bar{x}_A + n_B \\bar{x}_B}{n_A + n_B}$$\nUkuran keragaman: Simpangan baku $s$ mengukur dispersi data dari nilai rata-rata (semakin besar $s$, semakin heterogen).',
      tahap3_strategi: 'Hitung nilai rata-rata tertimbang numerik dan uji logika deduktif matematika inferensial.',
      tahap4_penyelesaian: '- **Pernyataan 1**: Hitung rata-rata gabungan:\n  $$\\bar{x}_{\\text{gab}} = \\frac{60(82) + 40(72)}{60 + 40} = \\frac{4.920 + 2.880}{100} = \\frac{7.800}{100} = 78,0$$ **(BENAR)**\n- **Pernyataan 2**: Simpangan baku Sekolah A ($s_A = 4$) lebih kecil dari Sekolah B ($s_B = 9$).\n  Simpangan baku yang lebih kecil menunjukkan data yang lebih mengelompok di sekitar rata-rata (lebih homogen), bukan lebih heterogen. **(SALAH)**\n- **Pernyataan 3**: Apakah pasti ada siswa Sekolah B bernilai $> 82$?\n  Klaim "pasti" dalam pembuktian matematika membutuhkan kepastian mutlak. Kita dapat mengonstruksi contoh distribusi 40 siswa dengan mean 72 dan SD 9 di mana nilai tertinggi adalah 81 (misal 20 siswa mendapat nilai 63 dan 20 siswa mendapat nilai 81 $\\to$ mean 72, SD 9). Karena tidak ada yang mencapai 82, klaim "pasti ada" tersebut tidak terbukti sah secara statistik. **(SALAH)**',
      tahap5_verifikasi: 'Kontra-contoh untuk pernyataan 3: Jika 20 siswa mendapat nilai 63 dan 20 siswa mendapat nilai 81, maka rata-rata $= \\frac{20(63) + 20(81)}{40} = \\frac{1.260 + 1.620}{40} = \\frac{2.880}{40} = 72$. Simpangan baku $= \\sqrt{\\frac{20(63-72)^2 + 20(81-72)^2}{40}} = \\sqrt{\\frac{20(81) + 20(81)}{40}} = \\sqrt{81} = 9$. Data ini memenuhi seluruh kondisi, namun nilai tertinggi hanya 81 (tidak ada yang $> 82$). Terbukti pernyataan 3 salah.',
      tahap6_evaluasiOpsi: 'Hasil klasifikasi: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = SALAH.',
      tahap7_kesimpulan: 'Klasifikasi yang benar: BENAR - SALAH - SALAH.',
      tahap8_refleksi: 'Hati-hati dengan kata "pasti" pada klaim inferensi data; ringkasan statistik (mean dan SD) tidak pernah membocorkan data individual secara mutlak.'
    },
    pembahasanCepat: {
      strategiInti: 'Bobot rasio 3:2 rata-rata & uji kepastian statistik',
      langkahPengerjaan: '1. Rasio bobot siswa $60 : 40 = 3 : 2$.\n   $\\bar{x}_{\\text{gab}} = \\frac{3(82) + 2(72)}{5} = \\frac{246 + 144}{5} = \\frac{390}{5} = 78$ (Pernyataan 1 Benar).\n2. Simpangan baku $A$ ($4$) $<$ $B$ ($9$) $\\implies A$ lebih seragam (homogen), bukan heterogen (Pernyataan 2 SALAH).\n3. Rata-rata dan simpangan baku kelompok tidak bisa memastikan skor perseorangan (Pernyataan 3 SALAH).',
      alasanMatematis: 'Rasio tertimbang $3 : 2$ membagi selisih 10 poin menjadi $10 \\times \\frac{2}{5} = 4$ poin di bawah 82 $\\implies 82 - 4 = 78$.',
      hasilAkhir: '1: BENAR, 2: SALAH, 3: SALAH',
      perbandinganEfisiensi: 'Rasio cepat $3:2$ menghemat perkalian angka ribuan.'
    },
    konsepPenting: 'Keterbatasan statistik ringkasan: Mean dan simpangan baku merangkum sebaran agregat, tetapi tidak memberikan informasi deterministik mengenai nilai maksimum atau minimum populasi.',
    parameterIRT: { a: 1.7, b: 0.6 },
    narasi: {
      stimulus: 'Perhatikan data asesmen dua sekolah pada tabel. Sekolah Mandiri beranggotakan 60 siswa dengan rata-rata 82, sedangkan Sekolah Pelopor beranggotakan 40 siswa dengan rata-rata 72.',
      pertanyaan: 'Tentukan apakah masing-masing klaim laporan staf analis berikut Benar atau Salah.',
      opsi: 'Pilih status Benar atau Salah pada setiap baris pernyataan.',
      umpanBalikBenar: 'Luar biasa! Pemikiran kritismu dalam menguji rata-rata gabungan dan klaim inferensi statistik sangat tajam.',
      umpanBalikSalah: 'Coba cermati kata "pasti" pada pernyataan ketiga. Apakah rata-rata dan simpangan baku bisa menjamin nilai individu secara pasti?',
      pembahasanNormal: 'Rata-rata gabungan dihitung dengan pembobotan 60 dan 40 menghasilkan tepat 78, pernyataan satu benar. Simpangan baku Sekolah A lebih kecil sehingga nilainya lebih homogen, bukan heterogen, maka pernyataan dua salah. Rata-rata dan simpangan baku kelompok tidak menjamin adanya siswa dengan nilai tertentu, sehingga klaim pasti ada siswa di atas 82 adalah salah.',
      pembahasanCepat: 'Trik cepat Mister Jo: sederhanakan jumlah siswanya menjadi rasio tiga banding dua! Tiga kali 82 ditambah dua kali 72 dibagi lima, langsung dapat 78! Simpangan baku 4 lebih kecil dari 9 artinya lebih rapi dan seragam, bukan heterogen. Dan ingat, statistik kelompok tidak pernah bisa menjamin nilai perseorangan! Jadi pernyataan tiga langsung kita salahkan!',
      refleksi: 'Selalu bersikap kritis terhadap kata "pasti" ketika menafsirkan data statistik agregat.'
    }
  }
];
