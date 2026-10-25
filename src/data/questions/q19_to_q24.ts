import { QuestionData } from '../../types';

export const questions19to24: QuestionData[] = [
  // SOAL 19 — TRIGONOMETRI — PG
  {
    id: 'soal-19',
    nomor: 19,
    elemen: 'Trigonometri',
    subelemen: 'Trigonometri Multilangkah: Sudut Elevasi dan Depresi Bertingkat',
    indikator: 'Siswa dapat menurunkan hubungan perbandingan trigonometri secara bertahap dan menentukan nilai yang memenuhi kedua kondisi pengamatan.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'PG',
    judulSoal: 'Pengukuran Tinggi Tiang Pemancar Radio di Atas Gedung Bertingkat',
    stimulus: 'Sebuah tiang pemancar sinyal telekomunikasi $TR$ dipasang tegak lurus tepat di tepi atap sebuah gedung perkantoran $GB$.\n\nDari sebuah titik pengamatan $A$ di permukaan tanah horizontal yang berjarak $d = 40\\text{ meter}$ dari dasar gedung:\n- Sudut elevasi menuju atap gedung (kaki tiang pemancar, titik $R$) terukur sebesar $45^\\circ$.\n- Sudut elevasi menuju ujung tertinggi pemancar (titik $T$) terukur sebesar $60^\\circ$.\n\nTinggi teodolit pengamat diabaikan (dianggap di permukaan tanah).',
    tipeStimulus: 'ilustrasi',
    visualData: {
      type: 'svg',
      svgType: 'antenna_building_elevation',
      caption: 'Model Pengamatan Sudut Elevasi Atap Gedung (45°) dan Puncak Tiang Pemancar (60°)'
    },
    teksPertanyaan: 'Tinggi tiang pemancar telekomunikasi ($TR$) tersebut adalah ...',
    opsiJawaban: [
      { label: 'A', text: '$40(\\sqrt{3} - 1)\\text{ meter}$' },
      { label: 'B', text: '$40(\\sqrt{3} + 1)\\text{ meter}$' },
      { label: 'C', text: '$20(\\sqrt{3} - 1)\\text{ meter}$' },
      { label: 'D', text: '$40\\sqrt{2}\\text{ meter}$' },
      { label: 'E', text: '$60(\\sqrt{3} - 1)\\text{ meter}$' }
    ],
    kunciJawaban: 'A',
    alasanKunci: 'Jarak d = 40 m. Tinggi atap gedung: h_gedung = d * tan 45 = 40 * 1 = 40 m. Tinggi ujung pemancar: h_total = d * tan 60 = 40 * sqrt(3) m. Tinggi tiang TR = h_total - h_gedung = 40*sqrt(3) - 40 = 40(sqrt(3) - 1) meter.',
    pembahasanNormal: {
      tahap1_memahami: 'Jarak pengamat ke dasar gedung $d = 40\\text{ m}$. Sudut elevasi atap gedung $\\alpha = 45^\\circ$. Sudut elevasi puncak tiang $\\beta = 60^\\circ$. Kita mencari panjang tiang pemancar $TR$.',
      tahap2_model: 'Gunakan perbandingan tangen pada dua segitiga siku-siku dengan alas bersama $d = 40\\text{ m}$:\n- Segitiga bawah (dasar gedung ke atap): $\\tan 45^\\circ = \\frac{h_{\\text{gedung}}}{d}$\n- Segitiga besar (dasar gedung ke puncak tiang): $\\tan 60^\\circ = \\frac{h_{\\text{total}}}{d}$\n- Tinggi tiang: $TR = h_{\\text{total}} - h_{\\text{gedung}}$.',
      tahap3_strategi: 'Substitusi nilai trigonometri istimewa $\\tan 45^\\circ = 1$ dan $\\tan 60^\\circ = \\sqrt{3}$ lalu kurangkan kedua nilai.',
      tahap4_penyelesaian: '1. Tinggi gedung:\n$$h_{\\text{gedung}} = 40 \\times \\tan 45^\\circ = 40 \\times 1 = 40\\text{ meter}$$\n2. Tinggi total:\n$$h_{\\text{total}} = 40 \\times \\tan 60^\\circ = 40\\sqrt{3}\\text{ meter}$$\n3. Tinggi tiang pemancar:\n$$TR = 40\\sqrt{3} - 40 = 40(\\sqrt{3} - 1)\\text{ meter}$$',
      tahap5_verifikasi: 'Nilai desimal: $\\sqrt{3} \\approx 1,732 \\implies TR \\approx 40(0,732) = 29,28\\text{ meter}$. Total tinggi $= 40 + 29,28 = 69,28\\text{ m}$. Rasio $\\frac{69,28}{40} = 1,732 = \\sqrt{3}$. Sesuai sempurna.',
      tahap6_evaluasiOpsi: '- Opsi A: Tepat, $40(\\sqrt{3} - 1)\\text{ meter}$.\n- Opsi B: Kesalahan menjumlahkan alih-alih mengurangkan.\n- Opsi C: Salah membagi jarak 40 dengan 2.\n- Opsi D: Menggunakan rasio sinus 45 derajat.\n- Opsi E: Menggunakan jarak 60 m.',
      tahap7_kesimpulan: 'Tinggi tiang pemancar telekomunikasi adalah $40(\\sqrt{3} - 1)\\text{ meter}$.',
      tahap8_refleksi: 'Pada sudut $45^\\circ$, panjang alas selalu sama persis dengan tinggi objek karena $\\tan 45^\\circ = 1$.'
    },
    pembahasanCepat: {
      strategiInti: 'Faktorisasi selisih tangen sudut istimewa $d(\\tan \\beta - \\tan \\alpha)$',
      langkahPengerjaan: '1. Rumus langsung selisih tinggi: $\\Delta h = d \\times (\\tan 60^\\circ - \\tan 45^\\circ)$.\n2. Masukkan nilai: $\\Delta h = 40 \\times (\\sqrt{3} - 1)$.\n3. Selesai langsung!',
      alasanMatematis: 'Karena kedua segitiga memiliki sisi samping yang sama di dasar horizontal, selisih sisi depan berbanding lurus dengan selisih tangen sudut.',
      hasilAkhir: '$40(\\sqrt{3} - 1)\\text{ meter}$ (Opsi A)',
      perbandinganEfisiensi: 'Hanya 1 baris persamaan tanpa menghitung dua tahap terpisah.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Kunci jawaban yang tepat.' },
      { option: 'B', explanation: 'Salah menjumlahkan tinggi gedung dan tinggi total.' },
      { option: 'C', explanation: 'Keliru membagi dua jarak alas.' },
      { option: 'D', explanation: 'Miskonsepsi menggunakan sudut 45 derajat pada tiang.' },
      { option: 'E', explanation: 'Menggunakan faktor pengali jarak yang keliru.' }
    ],
    konsepPenting: 'Selisih ketinggian dua objek vertikal dari titik pandang tanah yang sama berjarak $d$ selalu sama dengan $d(\\tan \\theta_2 - \\tan \\theta_1)$.',
    parameterIRT: { a: 1.6, b: 0.35 },
    narasi: {
      stimulus: 'Perhatikan ilustrasi pengamatan tiang pemancar di atas gedung. Jarak pengamat 40 meter, sudut ke atap gedung 45 derajat, dan sudut ke ujung tiang 60 derajat.',
      pertanyaan: 'Berapakah tinggi tiang pemancar telekomunikasi tersebut?',
      opsi: 'Pilihannya adalah A 40 kali kurung buka akar tiga dikurang satu meter, hingga E 60 kali akar tiga dikurang satu meter.',
      umpanBalikBenar: 'Tepat sekali! Memanfaatkan sifat tangen 45 derajat dan 60 derajat membuat penyelesaianmu sangat cepat.',
      umpanBalikSalah: 'Kurang tepat. Ingat bahwa tinggi tiang adalah selisih antara tinggi total dengan tinggi gedung.',
      pembahasanNormal: 'Tinggi gedung adalah 40 dikali tangen 45 derajat yaitu 40 meter. Tinggi total ke puncak pemancar adalah 40 dikali tangen 60 derajat yaitu 40 akar 3 meter. Mengurangkan keduanya menghasilkan 40 dikali kurung buka akar 3 dikurang 1 meter.',
      pembahasanCepat: 'Trik cepat Mister Jo: gunakan rumus selisih tangen! Jarak alas dikalikan selisih nilai tangen: 40 dikali kurung buka tangen 60 dikurang tangen 45. Karena tangen 60 adalah akar tiga dan tangen 45 adalah satu, jawabannya langsung 40 kali akar tiga dikurang satu!',
      refleksi: 'Rumus cepat selisih tangen adalah senjata praktis untuk soal menara di atas gedung.'
    }
  },

  // SOAL 20 — DATA DAN PELUANG — PG
  {
    id: 'soal-20',
    nomor: 20,
    elemen: 'Data dan Peluang',
    subelemen: 'Aturan Pencacahan, Kombinasi dengan Pembatasan, dan Peluang Bersyarat',
    indikator: 'Siswa dapat membangun model aturan pencacahan dan menghitung peluang kejadian yang memenuhi seluruh batasan.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'PG',
    judulSoal: 'Formasi Delegasi Tim Olimpiade Sains Lintas Peminatan',
    stimulus: 'Sebuah sekolah akan memilih satu delegasi yang terdiri dari **4 orang siswa** untuk mewakili kompetisi riset sains antarsekolah.\n\nKandidat yang lolos seleksi awal berjumlah $10$ siswa, terdiri dari:\n- **$6$ siswa peminatan Matematika** ($M_1, M_2, M_3, M_4, M_5, M_6$)\n- **$4$ siswa peminatan Fisika** ($F_1, F_2, F_3, F_4$)\n\nSyarat pembentukan tim:\n1. Tim harus beranggotakan **minimal 2 siswa Matematika**.\n2. Siswa $M_1$ (juara bertahan) **wajib terpilih** ke dalam tim delegasi.',
    tipeStimulus: 'narasi',
    teksPertanyaan: 'Banyak cara berbeda pembentukan tim delegasi yang memenuhi seluruh persyaratan tersebut adalah ...',
    opsiJawaban: [
      { label: 'A', text: '70 cara' },
      { label: 'B', text: '80 cara' },
      { label: 'C', text: '84 cara' },
      { label: 'D', text: '120 cara' },
      { label: 'E', text: '126 cara' }
    ],
    kunciJawaban: 'B',
    alasanKunci: 'Total anggota tim = 4 orang. M1 sudah pasti masuk, sisa slot = 3 orang.\nSisa kandidat Matematika = 5 orang (M2..M6). Kandidat Fisika = 4 orang (F1..F4).\nSyarat minimal 2 Matematika: karena M1 sudah 1 orang Matematika, kita butuh minimal 1 orang Matematika lagi dari sisa 3 slot.\nKomposisi sisa 3 slot:\nKasus 1: 1 M dan 2 F => C(5, 1) * C(4, 2) = 5 * 6 = 30 cara\nKasus 2: 2 M dan 1 F => C(5, 2) * C(4, 1) = 10 * 4 = 40 cara\nKasus 3: 3 M dan 0 F => C(5, 3) * C(4, 0) = 10 * 1 = 10 cara\nTotal cara = 30 + 40 + 10 = 80 cara!\n(Atau komplemen: dari 9 sisa kandidat pilih 3 = C(9, 3) = 84 cara. Pelanggaran: 0 M lagi (semua 3 Fisika) = C(4, 3) = 4 cara. Maka 84 - 4 = 80 cara!)',
    pembahasanNormal: {
      tahap1_memahami: 'Total tim 4 orang dari 10 calon (6 Matematika, 4 Fisika). Syarat: $M_1$ wajib masuk, dan total siswa Matematika di dalam tim minimal 2 orang. Kita mencari banyaknya cara pemilihan tim yang sah.',
      tahap2_model: 'Karena $M_1$ sudah pasti terpilih, kuota tersisa adalah **3 orang**. Sisa calon yang dapat dipilih berjumlah $9$ orang: $5$ siswa Matematika dan $4$ siswa Fisika.\nKarena $M_1$ sudah menyumbang 1 siswa Matematika, maka dari sisa 3 slot harus terisi minimal 1 siswa Matematika lagi ($k \\ge 1$).',
      tahap3_strategi: 'Bagi menjadi tiga kasus mutually exclusive (saling lepas):\n- Kasus 1: Menambah 1 siswa Matematika dan 2 siswa Fisika.\n- Kasus 2: Menambah 2 siswa Matematika dan 1 siswa Fisika.\n- Kasus 3: Menambah 3 siswa Matematika dan 0 siswa Fisika.',
      tahap4_penyelesaian: 'Gunakan aturan kombinasi $C(n, r) = \\frac{n!}{r!(n-r)!}$:\n1. **Kasus 1 ($1M + 2F$)**:\n   $$C(5, 1) \\times C(4, 2) = 5 \\times \\frac{4 \\times 3}{2} = 5 \\times 6 = 30\\text{ cara}$$\n2. **Kasus 2 ($2M + 1F$)**:\n   $$C(5, 2) \\times C(4, 1) = \\frac{5 \\times 4}{2} \\times 4 = 10 \\times 4 = 40\\text{ cara}$$\n3. **Kasus 3 ($3M + 0F$)**:\n   $$C(5, 3) \\times C(4, 0) = 10 \\times 1 = 10\\text{ cara}$$\n\nTotal cara:\n$$\\text{Total} = 30 + 40 + 10 = 80\\text{ cara}$$',
      tahap5_verifikasi: 'Verifikasi menggunakan metode komplemen:\nTotal seluruh cara memilih 3 orang dari 9 calon tersisa:\n$$C(9, 3) = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 3 \\times 4 \\times 7 = 84\\text{ cara}$$\nSatu-satunya kondisi yang melanggar syarat (hanya 1 Matematika yaitu $M_1$) adalah jika seluruh 3 slot tersisa diisi oleh siswa Fisika:\n$$C(4, 3) = 4\\text{ cara}$$\nMaka banyak cara sah $= 84 - 4 = 80\\text{ cara}$. Hasil identik sempurna!',
      tahap6_evaluasiOpsi: '- Opsi A (70): Terjadi jika melupakan kasus seluruh sisa Matematika (10 cara).\n- Opsi B (80): Kunci jawaban yang tepat.\n- Opsi C (84): Total tanpa memperhitungkan syarat minimal 2 Matematika.\n- Opsi D & E: Lupa bahwa $M_1$ sudah pasti terpilih.',
      tahap7_kesimpulan: 'Banyak cara pembentukan tim delegasi adalah 80 cara.',
      tahap8_refleksi: 'Jika suatu elemen sudah pasti terpilih, kurangi kapasitas tim dan kurangi jumlah kandidat yang bersangkutan sebelum menerapkan aturan kombinasi.'
    },
    pembahasanCepat: {
      strategiInti: 'Metode Komplemen Pengurangan Pelanggaran $C(\\text{semesta}) - C(\\text{dilarang})$',
      langkahPengerjaan: '1. $M_1$ sudah masuk $\\implies$ pilih 3 dari 9 sisa kandidat.\n2. Total kombinasi bebas: $C(9, 3) = \\frac{9 \\times 8 \\times 7}{6} = 84$.\n3. Pelanggaran (kurang dari 2 Matematika $\\to$ 0 Matematika lagi $\\to$ semua 3 orang Fisika):\n   $C(4, 3) = 4$.\n4. Banyak cara sah: $84 - 4 = 80$ cara!',
      alasanMatematis: 'Prinsip inklusi-eksklusi komplemen menghindari pemisahan banyak kasus menjadi cukup satu operasi pengurangan.',
      hasilAkhir: '80 cara (Opsi B)',
      perbandinganEfisiensi: 'Hanya butuh 2 langkah hitungan cepat daripada menjumlahkan 3 kasus terpisah.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Lupa menghitung kasus semua anggota tersisa adalah siswa Matematika.' },
      { option: 'B', explanation: 'Kunci jawaban yang tepat.' },
      { option: 'C', explanation: 'Memilih bebas 3 dari 9 tanpa mengurangi kasus pelanggaran (semua Fisika).' },
      { option: 'D', explanation: 'Keliru menghitung C(6, 2) * C(4, 2).' },
      { option: 'E', explanation: 'Menggunakan basis 10 siswa bebas.' }
    ],
    konsepPenting: 'Prinsip komplemen pada aturan pencacahan: $n(A) = n(S) - n(A^c)$ sangat menghemat waktu saat syarat "minimal" hanya memiliki sedikit kasus pelanggaran.',
    parameterIRT: { a: 1.65, b: 0.5 },
    narasi: {
      stimulus: 'Perhatikan kondisi seleksi tim delegasi olimpiade sains pada stimulus. Ada 6 siswa Matematika dan 4 siswa Fisika. Siswa M1 wajib masuk dan tim minimal beranggotakan 2 siswa Matematika.',
      pertanyaan: 'Berapa banyak cara berbeda pembentukan tim delegasi yang memenuhi seluruh persyaratan?',
      opsi: 'Pilihannya adalah A 70 cara, B 80 cara, C 84 cara, D 120 cara, atau E 126 cara.',
      umpanBalikBenar: 'Luar biasa! Pemilihan kombinasi dan metode komplemenmu sangat brilian.',
      umpanBalikSalah: 'Kurang tepat. Perhatikan bahwa M1 sudah pasti masuk, sehingga kamu hanya perlu memilih 3 orang lagi dari 9 kandidat.',
      pembahasanNormal: 'Karena M1 sudah masuk, tersisa 3 slot dari 5 siswa Matematika dan 4 siswa Fisika. Kita bagi tiga kasus: satu Matematika dua Fisika ada 30 cara, dua Matematika satu Fisika ada 40 cara, dan tiga Matematika ada 10 cara. Totalnya adalah 80 cara.',
      pembahasanCepat: 'Trik kilat Mister Jo: gunakan cara komplemen! Total memilih 3 orang dari 9 sisa calon adalah kombinasi 9 diambil 3 yaitu 84 cara. Kasus yang terlarang hanyalah jika ketiga slot diisi oleh siswa Fisika semua, yaitu kombinasi 4 diambil 3 bernilai 4 cara. Kurangkan langsung: 84 dikurang 4 sama dengan 80 cara! Sekejap selesai!',
      refleksi: 'Metode komplemen adalah trik paling elegan untuk menyelesaikan soal kombinasi bersyarat minimal.'
    }
  },

  // SOAL 21 — BILANGAN — PGK
  {
    id: 'soal-21',
    nomor: 21,
    elemen: 'Bilangan',
    subelemen: 'Rasio, Pembagian Pecahan Bertingkat, dan Bentuk Akar Real',
    indikator: 'Siswa dapat mengevaluasi lima pernyataan yang memerlukan perbandingan bentuk bilangan, pembuktian kesetaraan, dan penalaran terhadap hasil operasi.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Alokasi Proporsi Aset Portofolio Berbasis Kuantitas Fraksional',
    stimulus: 'Tiga jenis instrumen investasi syariah ($A, B, C$) mengalokasikan modal awal $M$ dengan formula fraksional:\n- Instrumen $A$ menerima bagian: $P_A = \\frac{1}{3 - \\sqrt{5}}$ dari modal.\n- Instrumen $B$ menerima bagian: $P_B = \\frac{3 + \\sqrt{5}}{4}$ dari modal.\n- Instrumen $C$ menerima bagian: $P_C = \\left(\\frac{1}{\\sqrt{5} - 1}\\right)^2$ dari modal.\n\nSeorang konsultan keuangan syariah mengevaluasi proporsi nilai dan hubungan kesetaraan antarketiga porsi investasi tersebut.',
    tipeStimulus: 'narasi',
    teksPertanyaan: 'Manakah dari pernyataan-pernyataan evaluasi numerik berikut yang bernilai BENAR? (Pilihlah semua yang benar!)',
    opsiJawaban: [
      { label: 'A', text: 'Porsi $P_A$ dan $P_B$ bernilai sama persis ($P_A = P_B$).' },
      { label: 'B', text: 'Bentuk rasional dari $P_C$ adalah $\\frac{3 + \\sqrt{5}}{8}$.' },
      { label: 'C', text: 'Nilai $P_A$ lebih besar daripada $P_C$.' },
      { label: 'D', text: 'Rasio perbandingan $P_A : P_C$ adalah $2 : 1$.' },
      { label: 'E', text: 'Jumlah $P_A + P_C$ menghasilkan bilangan rasional murni tanpa bentuk akar.' }
    ],
    kunciJawaban: ['A', 'B', 'C', 'D'],
    alasanKunci: '1. Rasionalkan P_A: 1 / (3 - sqrt(5)) = (3 + sqrt(5)) / (9 - 5) = (3 + sqrt(5)) / 4. P_B = (3 + sqrt(5)) / 4. Maka P_A = P_B! (A Benar!)\n2. P_C = (1 / (sqrt(5) - 1))^2 = ((sqrt(5) + 1) / (5 - 1))^2 = ((sqrt(5) + 1)/4)^2 = (5 + 2*sqrt(5) + 1) / 16 = (6 + 2*sqrt(5)) / 16 = (3 + sqrt(5)) / 8. (B Benar!)\n3. P_A = (3 + sqrt(5))/4, P_C = (3 + sqrt(5))/8. Jelas P_A > P_C. (C Benar!)\n4. Rasio P_A / P_C = [ (3 + sqrt(5))/4 ] / [ (3 + sqrt(5))/8 ] = 8/4 = 2/1. (D Benar!)\n5. Jumlah P_A + P_C = (3 + sqrt(5))/4 + (3 + sqrt(5))/8 = 3*(3 + sqrt(5))/8 = (9 + 3*sqrt(5))/8, masih memuat bentuk akar sqrt(5), bukan bilangan rasional murni! (E Salah!)',
    pembahasanNormal: {
      tahap1_memahami: 'Diberikan tiga bentuk pecahan akar: $P_A = \\frac{1}{3 - \\sqrt{5}}$, $P_B = \\frac{3 + \\sqrt{5}}{4}$, dan $P_C = \\left(\\frac{1}{\\sqrt{5} - 1}\\right)^2$. Kita harus mengevaluasi kelima pernyataan.',
      tahap2_model: 'Rasionalkan masing-masing bentuk aljabar akar:\n- $P_A = \\frac{1}{3 - \\sqrt{5}} \\times \\frac{3 + \\sqrt{5}}{3 + \\sqrt{5}} = \\frac{3 + \\sqrt{5}}{3^2 - (\\sqrt{5})^2} = \\frac{3 + \\sqrt{5}}{9 - 5} = \\frac{3 + \\sqrt{5}}{4}$.\n- $P_B = \\frac{3 + \\sqrt{5}}{4}$.\n- $P_C = \\left(\\frac{\\sqrt{5} + 1}{(\\sqrt{5} - 1)(\\sqrt{5} + 1)}\\right)^2 = \\left(\\frac{\\sqrt{5} + 1}{5 - 1}\\right)^2 = \\left(\\frac{\\sqrt{5} + 1}{4}\\right)^2 = \\frac{5 + 2\\sqrt{5} + 1}{16} = \\frac{6 + 2\\sqrt{5}}{16} = \\frac{3 + \\sqrt{5}}{8}$.',
      tahap3_strategi: 'Bandingkan nilai pecahan yang telah dirasionalkan secara aljabar.',
      tahap4_penyelesaian: '- **Pernyataan A**: $P_A = \\frac{3 + \\sqrt{5}}{4}$ dan $P_B = \\frac{3 + \\sqrt{5}}{4}$, terbukti bernilai identik. **(BENAR)**\n- **Pernyataan B**: $P_C = \\frac{3 + \\sqrt{5}}{8}$, terbukti tepat. **(BENAR)**\n- **Pernyataan C**: Karena penyebut $P_A$ ($4$) lebih kecil dari penyebut $P_C$ ($8$) dengan pembilang sama positif, maka $P_A > P_C$. **(BENAR)**\n- **Pernyataan D**: $\\frac{P_A}{P_C} = \\frac{\\frac{3 + \\sqrt{5}}{4}}{\\frac{3 + \\sqrt{5}}{8}} = \\frac{8}{4} = 2$. Rasio $2 : 1$. **(BENAR)**\n- **Pernyataan E**: $P_A + P_C = \\frac{2(3 + \\sqrt{5})}{8} + \\frac{3 + \\sqrt{5}}{8} = \\frac{3(3 + \\sqrt{5})}{8} = \\frac{9 + 3\\sqrt{5}}{8}$. Masih mengandung $\\sqrt{5}$ (bilangan irasional), bukan bilangan rasional murni. **(SALAH)**',
      tahap5_verifikasi: 'Nilai pendekatan: $\\sqrt{5} \\approx 2,236$.\n$P_A \\approx \\frac{5,236}{4} = 1,309$.\n$P_C \\approx \\frac{5,236}{8} = 0,6545$.\nRasio $\\frac{1,309}{0,6545} = 2,000$. Konsistensi numerik sempurna.',
      tahap6_evaluasiOpsi: 'Pernyataan A, B, C, dan D bernilai BENAR; pernyataan E bernilai SALAH.',
      tahap7_kesimpulan: 'Pernyataan yang benar adalah A, B, C, dan D.',
      tahap8_refleksi: 'Perkalian sekawan $(a - b)(a + b) = a^2 - b^2$ adalah metode universal menyederhanakan penyebut irasional.'
    },
    pembahasanCepat: {
      strategiInti: 'Rasionalisasi cepat faktor sekawan',
      langkahPengerjaan: '1. Rasionalkan $P_A$: kalikan $(3 + \\sqrt{5})$, penyebut $9 - 5 = 4 \\implies P_A = P_B$ (A Benar).\n2. Rasionalkan $P_C$: dalam kurung menjadi $\\frac{\\sqrt{5}+1}{4}$. Kuadratkan: $\\frac{6 + 2\\sqrt{5}}{16} = \\frac{3 + \\sqrt{5}}{8}$ (B Benar).\n3. $P_A$ setengah kali lebih besar dari $P_C$, tepat $2 : 1$ (C & D Benar).\n4. Penjumlahan suku akar positif tidak mungkin saling menghilangkan bentuk akar $\\implies$ E pasti salah.',
      alasanMatematis: 'Pembilang kedua bentuk sama $(3 + \\sqrt{5})$, sehingga relasi besaran berbanding terbalik murni terhadap penyebutnya.',
      hasilAkhir: 'A, B, C, D Benar',
      perbandinganEfisiensi: 'Memangkas waktu pengujian opsi C, D, E menjadi perbandingan langsung penyebut 4 dan 8.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Pernyataan terbukti benar.' },
      { option: 'B', explanation: 'Pernyataan terbukti benar.' },
      { option: 'C', explanation: 'Pernyataan terbukti benar.' },
      { option: 'D', explanation: 'Pernyataan terbukti benar.' },
      { option: 'E', explanation: 'Pernyataan salah; hasil penjumlahan tetap berupa bilangan irasional.' }
    ],
    konsepPenting: 'Penjumlahan dua bentuk irasional dengan tanda akar sejenis ($+\\sqrt{5}$ dan $+\\sqrt{5}$) tidak akan pernah menghasilkan bilangan rasional.',
    parameterIRT: { a: 1.6, b: 0.5 },
    narasi: {
      stimulus: 'Perhatikan formula porsi portofolio investasi pada stimulus yang dinyatakan dalam bentuk pecahan akar kuadrat.',
      pertanyaan: 'Manakah dari pernyataan evaluasi numerik berikut yang bernilai benar? Silakan pilih semua opsi yang tepat.',
      opsi: 'Periksa kesamaan porsi A dan B, bentuk rasional C, perbandingan nilai, dan sifat hasil penjumlahannya.',
      umpanBalikBenar: 'Luar biasa! Kemampuanmu merasionalkan bentuk akar dan menganalisis sifat bilangan irasional sangat hebat.',
      umpanBalikSalah: 'Coba rasionalkan porsi A dan C terlebih dahulu dengan mengalikan bentuk sekawannya.',
      pembahasanNormal: 'Dengan mengalikan sekawan, porsi A menjadi 3 ditambah akar 5 per 4, persis sama dengan porsi B. Porsi C disederhanakan menjadi 3 ditambah akar 5 per 8. Karena pembilangnya sama dan penyebutnya 4 banding 8, maka porsi A dua kali lipat porsi C. Pernyataan E salah karena penjumlahannya tetap memuat akar 5.',
      pembahasanCepat: 'Trik cepat Mister Jo: rasionalkan penyebutnya dalam pikiran! Sembilan dikurang 5 adalah 4, langsung terlihat P_A sama dengan P_B. Kuadratkan C menghasilkan penyebut 16 disederhanakan jadi 8. Pembilangnya sama persis! Maka rasio A banding C langsung dua banding satu. Dan karena akarnya sama-sama positif, tidak mungkin hilang saat dijumlahkan!',
      refleksi: 'Perhatikan bahwa bentuk sekawan hanya menghilangkan akar pada penyebut, bukan memusnahkan bilangan irasionalnya secara total.'
    }
  },

  // SOAL 22 — ALJABAR — PGK
  {
    id: 'soal-22',
    nomor: 22,
    elemen: 'Aljabar',
    subelemen: 'Pola Barisan, Deret Aritmetika, Deret Geometri, dan Pertumbuhan',
    indikator: 'Siswa dapat mengevaluasi lima pernyataan mengenai pola barisan, jumlah deret, model pertumbuhan, dan perbandingan proyeksi.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Komparasi Model Pertumbuhan Pelanggan Startup Digital',
    stimulus: 'Dua perusahaan rintisan teknologi (Startup Alfa dan Startup Beta) mencatat pertumbuhan jumlah pengguna aktif bulanan (MAU) sejak bulan pertama beroperasi:\n\n- **Startup Alfa** mengikuti model **Barisan Aritmetika**: Bulan ke-1 tercatat $U_1 = 4.000$ pengguna, dan bertambah secara konstan sebesar $b = 1.500$ pengguna setiap bulan.\n- **Startup Beta** mengikuti model **Barisan Geometri**: Bulan ke-1 tercatat $V_1 = 1.000$ pengguna, dan meningkat dengan rasio tetap $r = 2$ (berlipat ganda setiap bulan).\n\nInvestor mengamati dinamika jumlah pengguna kedua startup tersebut selama 6 bulan pertama.',
    tipeStimulus: 'tabel',
    visualData: {
      type: 'table',
      tableData: {
        headers: ['Bulan ke-', 'Pengguna Startup Alfa (Aritmetika)', 'Pengguna Startup Beta (Geometri)'],
        rows: [
          ['1', '4.000', '1.000'],
          ['2', '5.500', '2.000'],
          ['3', '7.000', '4.000'],
          ['4', '8.500', '8.000'],
          ['5', '10.000', '16.000'],
          ['6', '11.500', '32.000']
        ],
        caption: 'Tabel Pertumbuhan Pengguna Bulanan Startup Alfa vs Beta'
      }
    },
    teksPertanyaan: 'Berdasarkan data dan karakteristik kedua model barisan tersebut, manakah dari pernyataan berikut yang bernilai BENAR? (Pilihlah semua yang benar!)',
    opsiJawaban: [
      { label: 'A', text: 'Pada bulan ke-4, jumlah pengguna Startup Alfa masih lebih banyak daripada pengguna Startup Beta.' },
      { label: 'B', text: 'Startup Beta untuk pertama kalinya melampaui jumlah pengguna Startup Alfa pada bulan ke-5.' },
      { label: 'C', text: 'Total akumulasi pengguna baru yang mendaftar di Startup Alfa selama 6 bulan pertama adalah $46.500$ pengguna.' },
      { label: 'D', text: 'Total akumulasi pengguna baru di Startup Beta selama 6 bulan pertama adalah $63.000$ pengguna.' },
      { label: 'E', text: 'Selisih jumlah pengguna kedua startup pada bulan ke-6 adalah $20.500$ pengguna.' }
    ],
    kunciJawaban: ['A', 'B', 'C', 'D', 'E'],
    alasanKunci: '1. Alfa: U_n = 4000 + (n-1)*1500. Beta: V_n = 1000 * 2^(n-1).\nBulan 4: Alfa = 8500, Beta = 8000. Alfa > Beta. (A Benar!)\nBulan 5: Alfa = 10000, Beta = 16000. Beta melampaui Alfa pertama kali di bulan 5. (B Benar!)\nAkumulasi Alfa 6 bulan: S_6 = 6/2 * (U_1 + U_6) = 3 * (4000 + 11500) = 3 * 15500 = 46.500. (C Benar!)\nAkumulasi Beta 6 bulan: S_6 = 1000 * (2^6 - 1) / (2 - 1) = 1000 * (64 - 1) = 63.000. (D Benar!)\nSelisih bulan ke-6: Beta - Alfa = 32000 - 11500 = 20.500. (E Benar!)\nKelima pernyataan terbukti benar!',
    pembahasanNormal: {
      tahap1_memahami: 'Dua model pertumbuhan: Alfa (Aritmetika: $a = 4.000, b = 1.500$) dan Beta (Geometri: $a = 1.000, r = 2$). Kita perlu mengevaluasi pengguna bulanan, titik persilangan kurva pertumbuhan, akumulasi deret, dan selisih di bulan ke-6.',
      tahap2_model: 'Rumus barisan dan deret:\n- Alfa: $U_n = 4.000 + (n - 1)1.500$, $S_n = \\frac{n}{2}(2a + (n - 1)b)$\n- Beta: $V_n = 1.000 \\times 2^{n-1}$, $S_n = \\frac{a(r^n - 1)}{r - 1}$.',
      tahap3_strategi: 'Hitung nilai per bulan dan jumlah deret untuk masing-masing opsi.',
      tahap4_penyelesaian: '- **Pernyataan A**: Bulan ke-4: $U_4 = 4.000 + 3(1.500) = 8.500$. $V_4 = 1.000 \\times 2^3 = 8.000$. Karena $8.500 > 8.000$, Alfa lebih banyak. **(BENAR)**\n- **Pernyataan B**: Bulan ke-5: $U_5 = 10.000$, $V_5 = 1.000 \\times 2^4 = 16.000$. Beta melampaui Alfa untuk pertama kalinya pada bulan ke-5. **(BENAR)**\n- **Pernyataan C**: Total akumulasi Alfa 6 bulan:\n  $$S_{6,\\text{Alfa}} = \\frac{6}{2} (4.000 + 11.500) = 3 \\times 15.500 = 46.500$$ **(BENAR)**\n- **Pernyataan D**: Total akumulasi Beta 6 bulan:\n  $$S_{6,\\text{Beta}} = \\frac{1.000(2^6 - 1)}{2 - 1} = 1.000(64 - 1) = 63.000$$ **(BENAR)**\n- **Pernyataan E**: Selisih pengguna bulan ke-6: $V_6 - U_6 = 32.000 - 11.500 = 20.500$. **(BENAR)**',
      tahap5_verifikasi: 'Jumlah manual Alfa: $4.000 + 5.500 + 7.000 + 8.500 + 10.000 + 11.500 = 46.500$.\nJumlah manual Beta: $1.000 + 2.000 + 4.000 + 8.000 + 16.000 + 32.000 = 63.000$.\nSeluruh angka cocok sempurna.',
      tahap6_evaluasiOpsi: 'Kelima pernyataan A, B, C, D, dan E terbukti valid.',
      tahap7_kesimpulan: 'Seluruh pernyataan A, B, C, D, E bernilai BENAR.',
      tahap8_refleksi: 'Pertumbuhan geometri (eksponensial) pada awalnya tampak tertinggal dari pertumbuhan aritmetika (linear), tetapi pasti melesat jauh melampauinya setelah titik balik tertentu.'
    },
    pembahasanCepat: {
      strategiInti: 'Inspeksi tabel langsung & rumus deret instan',
      langkahPengerjaan: '1. Baca tabel baris 4: $8.500 > 8.000 \\implies$ A Benar.\n2. Baca tabel baris 5: $16.000 > 10.000 \\implies$ B Benar.\n3. Rata-rata Alfa $= \\frac{4.000 + 11.500}{2} = 7.750$. Kalikan $6 \\implies 46.500$ (C Benar).\n4. Geometri rasio 2: jumlah 6 suku pertama selalu $(2^6 - 1) \\times U_1 = 63 \\times 1.000 = 63.000$ (D Benar).\n5. Selisih baris 6: $32.000 - 11.500 = 20.500$ (E Benar).',
      alasanMatematis: 'Untuk rasio $r = 2$, deret geometri selalu memenuhi $\\sum_{k=0}^{n-1} 2^k = 2^n - 1$.',
      hasilAkhir: 'Semua Opsi (A, B, C, D, E) Benar',
      perbandinganEfisiensi: 'Tabel yang sudah tertera membuat opsi A, B, E terjawab dalam 5 detik.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Kondisi bulan ke-4 terbukti benar dari tabel.' },
      { option: 'B', explanation: 'Titik pembalikan tren terbukti pada bulan ke-5.' },
      { option: 'C', explanation: 'Jumlah deret aritmetika terbukti 46.500.' },
      { option: 'D', explanation: 'Jumlah deret geometri terbukti 63.000.' },
      { option: 'E', explanation: 'Selisih bulan ke-6 terbukti 20.500.' }
    ],
    konsepPenting: 'Dinamika Malthusian: Fungsi eksponensial $a \\cdot r^t$ selalu mengalahkan fungsi linier $a + b t$ untuk nilai $t$ yang cukup besar jika $r > 1$.',
    parameterIRT: { a: 1.5, b: 0.3 },
    narasi: {
      stimulus: 'Perhatikan perbandingan model pertumbuhan pengguna Startup Alfa dan Beta pada tabel. Alfa mengikuti barisan aritmetika, sedangkan Beta mengikuti barisan geometri.',
      pertanyaan: 'Manakah dari pernyataan berikut yang bernilai benar? Silakan pilih semua pernyataan yang valid.',
      opsi: 'Periksa posisi pengguna di bulan keempat dan kelima, total akumulasi pengguna enam bulan, serta selisihnya.',
      umpanBalikBenar: 'Luar biasa! Pemahamanmu terhadap barisan aritmetika, geometri, dan akumulasi deret sangat mantap.',
      umpanBalikSalah: 'Coba jumlahkan seluruh pengguna selama enam bulan untuk masing-masing startup menggunakan rumus deret.',
      pembahasanNormal: 'Pada bulan ke-4 pengguna Alfa 8.500 lebih banyak dari Beta 8.000, A benar. Pada bulan ke-5 Beta melonjak ke 16.000 melampaui Alfa 10.000, B benar. Akumulasi deret aritmetika menghasilkan 46.500 dan deret geometri 63.000, C dan D benar. Selisih di bulan ke-6 adalah 20.500, E benar.',
      pembahasanCepat: 'Trik cepat Mister Jo: lihat tabelnya langsung! Opsi A dan B terbukti seketika dari angka di tabel. Untuk deret geometri dengan rasio dua, jumlahnya selalu dua pangkat enam dikurang satu yaitu 63 dikali seribu, dapat 63.000. Untuk aritmetika, tengahnya 7.750 dikali enam adalah 46.500. Semua pernyataan benar!',
      refleksi: 'Pertumbuhan eksponensial adalah kekuatan luar biasa yang selalu mengungguli pertumbuhan konstan.'
    }
  },

  // SOAL 23 — GEOMETRI — PGK
  {
    id: 'soal-23',
    nomor: 23,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Komposisi Transformasi Geometri: Translasi, Refleksi, Rotasi, dan Dilatasi',
    indikator: 'Siswa dapat mengevaluasi lima pernyataan mengenai hasil komposisi transformasi, jarak, dan perubahan ukuran.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Navigasi Robotika Otomatis Berbasis Transformasi Titik Koordinat',
    stimulus: 'Sebuah modul drone inspeksi berada pada titik koordinat awal $P(4, -2)$ di bidang koordinat Kartesius.\nDrone melakukan serangkaian manuver navigasi bertingkat:\n\n1. **Manuver 1 (Translasi)**: Ditranslasikan oleh vektor $T = \\begin{pmatrix} -6 \\\\ 5 \\end{pmatrix}$ menghasilkan titik $P_1$.\n2. **Manuver 2 (Refleksi)**: Dicerminkan terhadap garis $y = x$ menghasilkan titik $P_2$.\n3. **Manuver 3 (Rotasi)**: Diputar sebesar $90^\\circ$ berlawanan arah jarum jam dengan pusat rotasi di titik asal $O(0, 0)$ menghasilkan titik $P_3$.\n4. **Manuver 4 (Dilatasi)**: Didilatasi dengan faktor skala $k = 2$ berpusat di titik asal $O(0, 0)$ menghasilkan posisi akhir $P_4$.',
    tipeStimulus: 'grafik',
    visualData: {
      type: 'svg',
      svgType: 'transformation_drone_path',
      caption: 'Lintasan Transformasi Geometri Modul Drone dari Titik P ke P4'
    },
    teksPertanyaan: 'Berdasarkan runtutan manuver transformasi tersebut, manakah dari pernyataan berikut yang bernilai BENAR? (Pilihlah semua yang benar!)',
    opsiJawaban: [
      { label: 'A', text: 'Koordinat titik $P_1$ setelah translasi adalah $(-2, 3)$.' },
      { label: 'B', text: 'Koordinat titik $P_2$ setelah refleksi terhadap garis $y = x$ adalah $(3, -2)$.' },
      { label: 'C', text: 'Koordinat titik $P_3$ setelah rotasi $90^\\circ$ berlawanan arah jarum jam adalah $(2, 3)$.' },
      { label: 'D', text: 'Koordinat posisi akhir drone $P_4$ adalah $(4, 6)$.' },
      { label: 'E', text: 'Jarak posisi akhir $P_4$ dari titik pusat koordinat $O(0, 0)$ adalah $2\\sqrt{13}$ satuan.' }
    ],
    kunciJawaban: ['A', 'B', 'C', 'D', 'E'],
    alasanKunci: '1. P(4, -2) + T(-6, 5) = (4 - 6, -2 + 5) = (-2, 3). (A Benar!)\n2. Refleksi thd y = x: (x, y) -> (y, x). Titik (-2, 3) menjadi (3, -2). (B Benar!)\n3. Rotasi [O, +90 deg]: (x, y) -> (-y, x). Titik (3, -2) menjadi (-(-2), 3) = (2, 3). (C Benar!)\n4. Dilatasi [O, 2]: (x, y) -> (2x, 2y). Titik (2, 3) menjadi (4, 6). (D Benar!)\n5. Jarak P_4(4, 6) ke O(0, 0): d = sqrt(4^2 + 6^2) = sqrt(16 + 36) = sqrt(52) = sqrt(4 * 13) = 2*sqrt(13). (E Benar!)\nSeluruh kelima pernyataan terbukti benar!',
    pembahasanNormal: {
      tahap1_memahami: 'Titik awal $P(4, -2)$ mengalami 4 transformasi berurutan: Translasi $\\begin{pmatrix}-6\\\\5\\end{pmatrix}$, Refleksi garis $y = x$, Rotasi $R[O, 90^\\circ]$, dan Dilatasi $D[O, 2]$. Kita perlu memverifikasi koordinat tiap tahap dan jarak akhir ke titik asal.',
      tahap2_model: 'Matriks / aturan pemetaan koordinat:\n- Translasi: $(x\', y\') = (x + a, y + b)$\n- Refleksi garis $y = x$: $(x\', y\') = (y, x)$\n- Rotasi $90^\\circ$ berlawanan jarum jam: $(x\', y\') = (-y, x)$\n- Dilatasi pusat $O$ faktor $k$: $(x\', y\') = (kx, ky)$\n- Jarak ke pusat: $d = \\sqrt{x^2 + y^2}$.',
      tahap3_strategi: 'Lacak koordinat titik tahap demi tahap secara berurutan dan hitung jarak Euclid pada langkah terakhir.',
      tahap4_penyelesaian: '1. **Tahap 1 (Translasi)**:\n   $$P_1 = (4 + (-6), -2 + 5) = (-2, 3)$$ **(Pernyataan A BENAR)**\n2. **Tahap 2 (Refleksi $y = x$)**:\n   Tukar posisi absis dan ordinat: $P_2 = (3, -2)$. **(Pernyataan B BENAR)**\n3. **Tahap 3 (Rotasi $90^\\circ$ CCW)**:\n   $(x, y) \\to (-y, x)$.\n   $$P_3 = (-(-2), 3) = (2, 3)$$ **(Pernyataan C BENAR)**\n4. **Tahap 4 (Dilatasi $[O, 2]$)**:\n   $$P_4 = (2 \\times 2, 2 \\times 3) = (4, 6)$$ **(Pernyataan D BENAR)**\n5. **Tahap 5 (Jarak ke $O(0, 0)$)**:\n   $$d = \\sqrt{4^2 + 6^2} = \\sqrt{16 + 36} = \\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13}$$ **(Pernyataan E BENAR)**',
      tahap5_verifikasi: 'Gunakan matriks komposisi untuk tahapan 2, 3, 4:\n$$M = \\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix} \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = 2 \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$\nKalikan ke $P_1(-2, 3)$:\n$$P_4 = 2 \\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix} = 2 \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 6 \\end{pmatrix}$$\nHasil perkalian matriks identik sempurna!',
      tahap6_evaluasiOpsi: 'Semua pernyataan A, B, C, D, dan E terbukti benar.',
      tahap7_kesimpulan: 'Opsi yang benar adalah A, B, C, D, dan E.',
      tahap8_refleksi: 'Perkalian matriks transformasi dapat memadatkan beberapa operasi linier menjadi satu kali pemetaan langsung.'
    },
    pembahasanCepat: {
      strategiInti: 'Aturan pemetaan koordinat mental instan',
      langkahPengerjaan: '1. $(4, -2) + (-6, 5) = (-2, 3)$ (A Benar).\n2. Balik $(y, x) \\implies (3, -2)$ (B Benar).\n3. Rotasi $+90^\\circ \\implies (-y, x) = (2, 3)$ (C Benar).\n4. Kali 2 skala dilatasi $\\implies (4, 6)$ (D Benar).\n5. Pythagoras: $\\sqrt{16 + 36} = \\sqrt{52} = 2\\sqrt{13}$ (E Benar).',
      alasanMatematis: 'Setiap operasi hanya membutuhkan aritmetika dasar satu langkah.',
      hasilAkhir: 'Semua Opsi (A, B, C, D, E) Benar',
      perbandinganEfisiensi: 'Dapat diselesaikan secara beruntun dalam waktu kurang dari 30 detik.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Hasil translasi terbukti (-2, 3).' },
      { option: 'B', explanation: 'Hasil refleksi terbukti (3, -2).' },
      { option: 'C', explanation: 'Hasil rotasi 90 derajat terbukti (2, 3).' },
      { option: 'D', explanation: 'Hasil dilatasi terbukti (4, 6).' },
      { option: 'E', explanation: 'Jarak Euclidean terbukti 2 akar 13.' }
    ],
    konsepPenting: 'Rotasi $90^\\circ$ berlawanan arah jarum jam memetakan $(x, y) \\to (-y, x)$, sedangkan rotasi searah jarum jam memetakan $(x, y) \\to (y, -x)$.',
    parameterIRT: { a: 1.6, b: 0.45 },
    narasi: {
      stimulus: 'Perhatikan empat tahap manuver navigasi drone pada diagram bidang Kartesius: translasi, refleksi garis y sama dengan x, rotasi 90 derajat, dan dilatasi faktor dua.',
      pertanyaan: 'Manakah dari pernyataan berikut yang bernilai benar? Silakan pilih semua pernyataan yang valid.',
      opsi: 'Periksa koordinat titik P1, P2, P3, posisi akhir P4, serta jarak Euclidean ke titik asal.',
      umpanBalikBenar: 'Luar biasa! Pemahamanmu mengenai aturan pemetaan transformasi geometri sangat runtut dan tanpa cela.',
      umpanBalikSalah: 'Coba teliti aturan rotasi 90 derajat berlawanan arah jarum jam. Ingat polanya: minus ye koma eks.',
      pembahasanNormal: 'Translasi menghasilkan minus 2 koma 3, A benar. Pencerminan terhadap y sama dengan x membalik koordinat menjadi 3 koma minus 2, B benar. Rotasi 90 derajat menghasilkan 2 koma 3, C benar. Dilatasi dengan faktor 2 melipatgandakan koordinat menjadi 4 koma 6, D benar. Jarak ke pusat adalah akar dari 16 ditambah 36 yaitu 2 akar 13, E benar.',
      pembahasanCepat: 'Trik cepat Mister Jo: jalankan secara berurutan dalam pikiran! 4 dikurang 6 jadi -2, -2 ditambah 5 jadi 3. Tukar tempat jadi 3 koma -2. Rotasi 90 derajat ubah tanda depan jadi 2 koma 3. Kalikan 2 jadi 4 koma 6. Jaraknya akar 52 yaitu 2 akar 13. Semua pernyataan benar!',
      refleksi: 'Menguasai pola singkat pergeseran koordinat membebaskanmu dari kerepotan menggambar grafik sumbu berulang-ulang.'
    }
  },

  // SOAL 24 — TRIGONOMETRI — PGK
  {
    id: 'soal-24',
    nomor: 24,
    elemen: 'Trigonometri',
    subelemen: 'Pemodelan Segitiga Siku-Siku: Sudut Kemiringan dan Keselamatan Kerja',
    indikator: 'Siswa dapat mengevaluasi lima klaim mengenai panjang, sudut, ketinggian, dan hubungan rasio trigonometri.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Standar Keselamatan Sudut Sandar Tangga Pemadam Kebakaran',
    stimulus: 'Regulasi keselamatan pemadam kebakaran menetapkan bahwa sudut aman penegakan tangga darurat terhadap permukaan tanah $(\\beta)$ harus memenuhi rentang $60^\\circ \\le \\beta \\le 75^\\circ$ agar tangga tidak mudah tergelincir maupun terbalik ke belakang.\n\nSebuah tangga dengan panjang tetap $L = 10\\text{ meter}$ disandarkan ke dinding vertikal gedung bertingkat dengan sudut tepat $\\beta = 60^\\circ$.\nGunakan pendekatan: $\\sin 60^\\circ = \\frac{1}{2}\\sqrt{3} \\approx 0,866$, $\\cos 60^\\circ = 0,500$, dan $\\tan 60^\\circ = \\sqrt{3} \\approx 1,732$.',
    tipeStimulus: 'ilustrasi',
    visualData: {
      type: 'svg',
      svgType: 'fire_ladder_safety',
      caption: 'Model Penegakan Tangga Pemadam Kebakaran Panjang 10 m dengan Sudut Beta = 60°'
    },
    teksPertanyaan: 'Berdasarkan konfigurasi tangga tersebut, manakah dari pernyataan berikut yang bernilai BENAR? (Pilihlah semua yang benar!)',
    opsiJawaban: [
      { label: 'A', text: 'Jarak kaki tangga dari dasar dinding gedung adalah $5\\text{ meter}$.' },
      { label: 'B', text: 'Ketinggian dinding yang dapat dijangkau oleh ujung atas tangga adalah $5\\sqrt{3}\\text{ meter}$ (sekitar $8,66\\text{ meter}$).' },
      { label: 'C', text: 'Penegakan tangga tersebut memenuhi batas regulasi keselamatan standar ($60^\\circ \\le \\beta \\le 75^\\circ$).' },
      { label: 'D', text: 'Jika sudut penegakan diperbesar menjadi $75^\\circ$, maka jarak kaki tangga ke dasar dinding menjadi lebih besar daripada $5\\text{ meter}$.' },
      { label: 'E', text: 'Rasio antara tinggi yang dicapai dinding terhadap jarak kaki tangga ke dinding sama dengan $\\tan 60^\\circ = \\sqrt{3}$.' }
    ],
    kunciJawaban: ['A', 'B', 'C', 'E'],
    alasanKunci: '1. Jarak kaki tangga d = L * cos 60 = 10 * 0.5 = 5 meter. (A Benar!)\n2. Tinggi dinding h = L * sin 60 = 10 * (sqrt(3)/2) = 5*sqrt(3) m ~ 8.66 m. (B Benar!)\n3. Sudut 60 derajat berada dalam interval [60, 75]. (C Benar!)\n4. Jika sudut diperbesar ke 75 derajat, jarak kaki d = 10 * cos 75. Karena cosinus turun di kuadran I (cos 75 < cos 60 = 0.5), maka jarak kaki menjadi LEBIH KECIL (< 5 m), bukan lebih besar. (D Salah!)\n5. Rasio tinggi terhadap jarak kaki tangga = h / d = (L sin 60) / (L cos 60) = tan 60 = sqrt(3). (E Benar!)',
    pembahasanNormal: {
      tahap1_memahami: 'Tangga panjang $L = 10\\text{ m}$ disandarkan dengan sudut $\\beta = 60^\\circ$ terhadap tanah. Kita diminta memverifikasi jarak kaki tangga, tinggi jangkauan, kepatuhan regulasi, perilaku sudut saat dinaikkan ke $75^\\circ$, dan perbandingan rasio tangen.',
      tahap2_model: 'Segitiga siku-siku dengan hipotenusa $L = 10\\text{ m}$:\n- Sisi samping (jarak kaki ke dinding): $d = L \\cos \\beta = 10 \\cos 60^\\circ$\n- Sisi depan (tinggi dinding): $h = L \\sin \\beta = 10 \\sin 60^\\circ$\n- Rasio tinggi/jarak: $\\frac{h}{d} = \\tan \\beta$.',
      tahap3_strategi: 'Evaluasi nilai perbandingan trigonometri dan sifat kemonotonan fungsi kosinus pada kuadran I.',
      tahap4_penyelesaian: '- **Pernyataan A**: $d = 10 \\times \\cos 60^\\circ = 10 \\times 0,5 = 5\\text{ meter}$. **(BENAR)**\n- **Pernyataan B**: $h = 10 \\times \\sin 60^\\circ = 10 \\times \\frac{1}{2}\\sqrt{3} = 5\\sqrt{3} \\approx 8,66\\text{ meter}$. **(BENAR)**\n- **Pernyataan C**: Sudut $\\beta = 60^\\circ$ berada pada interval keselamatan $[60^\\circ, 75^\\circ]$. **(BENAR)**\n- **Pernyataan D**: Fungsi kosinus $f(\\beta) = \\cos \\beta$ bersifat **monoton turun** pada interval $0^\\circ < \\beta < 90^\\circ$.\n  Karena $75^\\circ > 60^\\circ$, maka $\\cos 75^\\circ < \\cos 60^\\circ$.\n  Jarak baru $d\' = 10 \\cos 75^\\circ < 5\\text{ meter}$. Klaim menyatakan lebih besar, sehingga **(SALAH)**.\n- **Pernyataan E**: $\\frac{h}{d} = \\frac{5\\sqrt{3}}{5} = \\sqrt{3} = \\tan 60^\\circ$. **(BENAR)**',
      tahap5_verifikasi: 'Nilai $\\cos 75^\\circ = \\frac{\\sqrt{6} - \\sqrt{2}}{4} \\approx 0,259$. Maka $d\' = 10(0,259) = 2,59\\text{ m} < 5\\text{ m}$. Ketika tangga ditegakkan lebih curam, kaki tangga semakin mendekati dinding, bukan menjauh. Terbukti pernyataan D keliru.',
      tahap6_evaluasiOpsi: 'Pernyataan A, B, C, dan E bernilai BENAR; pernyataan D bernilai SALAH.',
      tahap7_kesimpulan: 'Opsi yang benar adalah A, B, C, dan E.',
      tahap8_refleksi: 'Memahami kemonotonan rasio trigonometri (sinus naik, kosinus turun pada kuadran I) penting untuk menalar arah perubahan fisik suatu sistem.'
    },
    pembahasanCepat: {
      strategiInti: 'Logika fisik penegakan tangga & sifat kosinus',
      langkahPengerjaan: '1. Siku-siku sudut $60^\\circ$: sisi samping $= \\frac{1}{2} \\times$ miring $= 5\\text{ m}$ (A Benar).\n2. Sisi tegak $= \\frac{1}{2}\\sqrt{3} \\times 10 = 5\\sqrt{3}$ (B Benar).\n3. $60^\\circ$ adalah batas bawah aman regulasi (C Benar).\n4. Logika praktis: kalau tangga dibuat lebih tegak (sudut lebih besar), bawah tangga pasti makin mepet ke dinding ($d$ mengecil). Pernyataan D pasti SALAH!\n5. Rasio depan/samping definisi tangen (E Benar).',
      alasanMatematis: 'Makin besar sudut sandar, jarak horizontal $10 \\cos \\beta$ semakin mendekati nol.',
      hasilAkhir: 'A, B, C, E Benar',
      perbandinganEfisiensi: 'Penalaran fisik langsung mengeliminasi D dalam 3 detik tanpa kalkulator sudut 75 derajat.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Kalkulasi jarak mendatar terbukti benar.' },
      { option: 'B', explanation: 'Kalkulasi tinggi dinding terbukti benar.' },
      { option: 'C', explanation: 'Evaluasi regulasi aman terbukti benar.' },
      { option: 'D', explanation: 'Pernyataan salah; semakin curam tangga, kaki tangga justru semakin mendekat ke dinding.' },
      { option: 'E', explanation: 'Definisi rasio tangen terbukti benar.' }
    ],
    konsepPenting: 'Pada kuadran I ($0^\\circ \\le \\theta \\le 90^\\circ$), penambahan besar sudut menyebabkan nilai kosinus menurun dan nilai sinus meningkat.',
    parameterIRT: { a: 1.55, b: 0.4 },
    narasi: {
      stimulus: 'Perhatikan model penegakan tangga pemadam kebakaran pada diagram. Tangga 10 meter membentuk sudut 60 derajat dengan permukaan tanah.',
      pertanyaan: 'Manakah dari pernyataan berikut yang bernilai benar? Silakan pilih semua opsi yang valid.',
      opsi: 'Periksa jarak kaki tangga, tinggi dinding yang dicapai, kesesuaian regulasi, serta dampak jika sudut diperbesar menjadi 75 derajat.',
      umpanBalikBenar: 'Tepat sekali! Analisis fisik dan pemahaman trigonometrimu sangat tajam.',
      umpanBalikSalah: 'Coba bayangkan secara fisik pada opsi D. Jika tangga ditegakkan lebih curam, apakah kakinya menjauh atau mendekat ke dinding?',
      pembahasanNormal: 'Dengan kosinus 60 derajat bernilai setengah, jarak kaki tangga adalah 5 meter, A benar. Ketinggian jangkauan adalah 5 akar 3 meter, B benar. Sudut 60 derajat memenuhi batas aman regulasi, C benar. Jika sudut dinaikkan ke 75 derajat tangga makin tegak sehingga jarak kakinya justru mengecil kurang dari 5 meter, D salah. Rasio tinggi per jarak adalah tangen 60 derajat, E benar.',
      pembahasanCepat: 'Trik cepat Mister Jo: bayangkan tangga di rumah! Kalau kamu buat tangga makin tegak, bawah tangga pasti makin mepet ke tembok, jaraknya mengecil, bukan membesar! Jadi opsi D langsung dicoret! Sisanya A, B, C, E terbukti benar!',
      refleksi: 'Hubungkan selalu konsep matematika dengan intuisi visual dunia nyata agar terhindar dari salah nalar.'
    }
  }
];
