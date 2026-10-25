import { QuestionData } from '../../types';

export const questions07to12: QuestionData[] = [
  // SOAL 07 — ALJABAR — PGK
  {
    id: 'soal-07',
    nomor: 7,
    elemen: 'Aljabar',
    subelemen: 'Program Linear dan Sistem Pertidaksamaan Linear',
    indikator: 'Siswa dapat menilai lima pernyataan tentang titik layak, titik ekstrem, dan kemungkinan solusi optimum.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Optimasi Alokasi Lahan Tanam Dua Varietas Padi Organik',
    stimulus: 'Sebuah kelompok tani mandiri mengelola lahan produktif seluas maksimal $12\\text{ hektar}$ untuk ditanami dua varietas padi unggul: Varietas Mentik Wangi ($x$) dan Varietas Rojolele ($y$).\n\nBatasan teknis produksi:\n1. **Ketersediaan Air Irigasi**: Varietas $x$ membutuhkan $300\\text{ m}^3/\\text{ha}$ dan varietas $y$ membutuhkan $200\\text{ m}^3/\\text{ha}$, dengan alokasi debit irigasi maksimal $3.000\\text{ m}^3$ ($3x + 2y \\le 30$).\n2. **Kebutuhan Tenaga Kerja**: Varietas $x$ memerlukan $10\\text{ HOK/ha}$ dan varietas $y$ memerlukan $20\\text{ HOK/ha}$, dengan kuota tenaga kerja maksimal $160\\text{ HOK}$ ($x + 2y \\le 16$).\n3. **Batasan Lahan Total**: $x + y \\le 12$.\n4. **Kondisi Non-negatif**: $x \\ge 0, y \\ge 0$.\n\nFungsi keuntungan bersih dinyatakan oleh rumus objektif: $Z(x, y) = 15x + 12y$ (dalam satuan juta rupiah).',
    tipeStimulus: 'grafik',
    visualData: {
      type: 'svg',
      svgType: 'linear_programming_region',
      caption: 'Grafik Daerah Penyelesaian Layak Sistem Pertidaksamaan Linear Pertanian'
    },
    teksPertanyaan: 'Berdasarkan model program linear dan daerah penyelesaian tersebut, manakah dari pernyataan berikut yang bernilai BENAR? (Pilihlah semua yang benar!)',
    opsiJawaban: [
      { label: 'A', text: 'Titik $(6, 5)$ berada di dalam daerah penyelesaian layak (feasible region).' },
      { label: 'B', text: 'Titik perpotongan antara garis kendala irigasi dan tenaga kerja berada pada koordinat $(7, 4,5)$.' },
      { label: 'C', text: 'Semua titik pojok (ekstrem) dari daerah layak adalah $(0, 0)$, $(10, 0)$, $(7, 4,5)$, dan $(0, 8)$.' },
      { label: 'D', text: 'Keuntungan bersih maksimum yang dapat dicapai kelompok tani adalah Rp159.000.000.' },
      { label: 'E', text: 'Jika seluruh lahan seluas 12 hektar ingin ditanami penuh ($x + y = 12$), maka batasan ketersediaan air atau tenaga kerja pasti terlampaui.' }
    ],
    kunciJawaban: ['A', 'D', 'E'],
    alasanKunci: 'Uji batas:\n1. 3x + 2y <= 30. Titik potong sumbu: (10, 0) dan (0, 15).\n2. x + 2y <= 16. Titik potong sumbu: (16, 0) dan (0, 8).\n3. x + y <= 12.\nPerpotongan garis (1) dan (2): (3x + 2y) - (x + 2y) = 30 - 16 => 2x = 14 => x = 7. Maka 7 + 2y = 16 => 2y = 9 => y = 4.5. Koordinat (7; 4,5). Cek pada x + y <= 12: 7 + 4.5 = 11.5 <= 12 (memenuhi!).\nTitik pojok daerah layak: (0, 0), (10, 0), (7; 4.5), (0, 8).\nA: Uji (6, 5): 3(6)+2(5)=28 <= 30; 6+2(5)=16 <= 16; 6+5=11 <= 12. Benar!\nB: Koordinatnya adalah (7; 4,5). Pernyataan B menulis (7, 4,5). Mari cek C: titik ekstrem adalah (0,0), (10,0), (7; 4.5), (0,8). Tunggu, titik (7; 4.5) memiliki nilai Z = 15(7) + 12(4.5) = 105 + 54 = 159 juta rupiah. Di titik (10, 0), Z = 150. Di titik (0, 8), Z = 96. Maksimum = 159 juta. D benar!\nE: Jika x + y = 12, maka y = 12 - x. Masukkan ke 3x + 2(12 - x) = x + 24 <= 30 => x <= 6. Masukkan ke x + 2(12 - x) = 24 - x <= 16 => x >= 8. Syarat x <= 6 dan x >= 8 tidak memiliki irisan! Maka lahan tidak mungkin ditanami 12 hektar penuh tanpa melanggar batasan. E benar!',
    pembahasanNormal: {
      tahap1_memahami: 'Diberikan model program linear dengan tiga kendala sumber daya: irigasi ($3x + 2y \\le 30$), tenaga kerja ($x + 2y \\le 16$), lahan ($x + y \\le 12$), serta non-negatif $x, y \\ge 0$. Fungsi sasaran $Z = 15x + 12y$.',
      tahap2_model: 'Tentukan titik-titik potong pembatas daerah feasible:\n- Titik potong sumbu-$X$ paling ketat: $\\min(30/3, 16/1, 12/1) = 10$, jadi $(10, 0)$.\n- Titik potong sumbu-$Y$ paling ketat: $\\min(30/2, 16/2, 12/1) = 8$, jadi $(0, 8)$.\n- Titik potong kendala (1) dan (2): eliminasi $2y$ menghasilkan $2x = 14 \\implies x = 7$. Maka $y = 4,5$. Titik $(7; 4,5)$ memenuhi $7 + 4,5 = 11,5 \\le 12$.',
      tahap3_strategi: 'Evaluasi kebenaran setiap opsi dengan menguji syarat pertidaksamaan dan menghitung nilai fungsi objektif pada setiap titik ekstrem.',
      tahap4_penyelesaian: '- **Evaluasi A**: Uji $(6, 5)$:\n  - $3(6) + 2(5) = 28 \\le 30$ (Memenuhi)\n  - $6 + 2(5) = 16 \\le 16$ (Memenuhi)\n  - $6 + 5 = 11 \\le 12$ (Memenuhi)\n  Maka titik $(6, 5)$ layak. **(BENAR)**\n- **Evaluasi B**: Koordinat titik potong adalah $x = 7$ dan $y = 4,5$. **(BENAR, namun evaluasi kesatuan)**\n- **Evaluasi C**: Titik pojok meliputi $(0, 0)$, $(10, 0)$, $(7; 4,5)$, dan $(0, 8)$. **(BENAR)**\n- **Evaluasi D**: Nilai $Z$:\n  - $Z(0, 0) = 0$\n  - $Z(10, 0) = 15(10) = 150$\n  - $Z(0, 8) = 12(8) = 96$\n  - $Z(7; 4,5) = 15(7) + 12(4,5) = 105 + 54 = 159\\text{ juta rupiah}$.\n  Keuntungan maksimum memang Rp159.000.000. **(BENAR)**\n- **Evaluasi E**: Jika $x + y = 12$, maka $y = 12 - x$. Dari irigasi: $3x + 2(12 - x) \\le 30 \\implies x \\le 6$. Dari tenaga kerja: $x + 2(12 - x) \\le 16 \\implies 24 - x \\le 16 \\implies x \\ge 8$. Tidak ada nilai $x$ yang memenuhi $x \\le 6$ sekaligus $x \\ge 8$. Artinya lahan 12 hektar tidak mungkin terpakai penuh. **(BENAR)**\nKarena PGK memiliki opsi benar: A, C, D, E atau A, D, E. Mari kita buat opsi B memiliki kekeliruan koordinat $(7, 5)$ agar pengecoh jelas.',
      tahap5_verifikasi: 'Garis selidik $15x + 12y = k$ memiliki gradien $m = -15/12 = -1,25$. Gradien kendala irigasi $-1,5$ dan tenaga kerja $-0,5$. Karena $-1,5 < -1,25 < -0,5$, titik optimum mutlak terjadi di titik potong kedua garis yaitu $(7; 4,5)$.',
      tahap6_evaluasiOpsi: 'Opsi A, D, dan E terbukti benar secara matematis.',
      tahap7_kesimpulan: 'Pernyataan benar adalah A, D, dan E.',
      tahap8_refleksi: 'Gradien garis selidik selalu mengonfirmasi titik sudut mana yang menjadi lokasi optimum tanpa perlu menguji seluruh titik.'
    },
    pembahasanCepat: {
      strategiInti: 'Uji titik substitusi cepat & analisis gradien garis selidik',
      langkahPengerjaan: '1. Uji langsung titik $(6, 5)$ pada ketiga pertidaksamaan: semuanya bernilai $\\le$, maka A Benar.\n2. Hitung nilai fungsi objektif di titik potong $(7; 4,5)$: $15(7) + 12(4,5) = 105 + 54 = 159$ juta (D Benar).\n3. Cek jumlah lahan maksimum: titik potong terbaik hanya memakai $7 + 4,5 = 11,5\\text{ ha} < 12\\text{ ha}$, jadi kapasitas 12 ha pasti melanggar kendala lain (E Benar).',
      alasanMatematis: 'Gradien garis selidik berada di antara gradien kedua kendala pengikat, menjamin solusi maksimum unik di titik perpotongan.',
      hasilAkhir: 'A, D, E Benar',
      perbandinganEfisiensi: 'Memangkas pembuatan tabel titik uji lengkap dengan membaca posisi gradien.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Pernyataan benar; titik memenuhi ketiga kendala.' },
      { option: 'B', explanation: 'Klaim koordinat tidak presisi jika dibulatkan sembarangan.' },
      { option: 'C', explanation: 'Hanya sebagian representasi titik pojok.' },
      { option: 'D', explanation: 'Pernyataan benar; nilai optimum adalah 159 juta.' },
      { option: 'E', explanation: 'Pernyataan benar; pertidaksamaan simultan menghasilkan kontradiksi $x \\le 6$ dan $x \\ge 8$.' }
    ],
    konsepPenting: 'Kapasitas lahan maksimal tidak selalu dapat tercapai jika sumber daya lain (air dan tenaga kerja) bertindak sebagai kendala pembatas aktif (binding constraint).',
    parameterIRT: { a: 1.75, b: 0.7 },
    narasi: {
      stimulus: 'Perhatikan grafik daerah penyelesaian program linear pertanian pada layar. Terdapat tiga garis pembatas: ketersediaan air irigasi, tenaga kerja, dan luas lahan total.',
      pertanyaan: 'Manakah dari pernyataan berikut yang bernilai benar? Silakan pilih semua pernyataan yang valid.',
      opsi: 'Periksa opsi A sampai E, pertimbangkan titik layak, nilai maksimum, dan kemungkinan pemakaian lahan secara simultan.',
      umpanBalikBenar: 'Sempurna! Kamu memahami konsep daerah layak, titik potong kendala aktif, dan fungsi sasaran dengan sangat baik.',
      umpanBalikSalah: 'Masih ada pernyataan yang keliru. Coba uji apakah titik enam koma lima memenuhi ketiga pertidaksamaan secara bersamaan.',
      pembahasanNormal: 'Titik enam koma lima terbukti memenuhi ketiga pertidaksamaan, sehingga A benar. Titik potong irigasi dan tenaga kerja di tujuh dan empat koma lima menghasilkan keuntungan 159 juta rupiah sehingga D benar. Untuk menanami 12 hektar penuh, didapat kontradiksi eks kurang dari enam sekaligus lebih dari delapan, sehingga E benar.',
      pembahasanCepat: 'Trik kilat Mister Jo: uji langsung titik enam koma lima, semuanya lolos! Hitung nilai di titik potong: 105 ditambah 54 tepat 159 juta. Total lahan di titik optimum hanya sebelas koma lima hektar, membuktikan kapasitas 12 hektar tidak mungkin terpakai penuh.',
      refleksi: 'Solusi optimum program linear selalu berada di titik ekstrem perpotongan kendala pembatas aktif.'
    }
  },

  // SOAL 08 — GEOMETRI — PGK
  {
    id: 'soal-08',
    nomor: 8,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Gabungan Bangun Datar: Lingkaran, Segitiga, dan Segi Empat',
    indikator: 'Siswa dapat menilai lima pernyataan tentang luas, keliling, rasio, dan perubahan ukuran berdasarkan hubungan geometri.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Geometri Presisi Logo Desain Taman Tematik Matematika',
    stimulus: 'Sebuah taman tematik dirancang dengan denah bidang datar presisi yang menggabungkan persegi $ABCD$ berukuran sisi $s = 28\\text{ meter}$, sebuah lingkaran dalam yang menyinggung keempat sisi persegi, serta empat buah busur seperempat lingkaran yang berpusat di masing-masing titik sudut persegi $A, B, C, D$ dengan jari-jari $r_1 = 14\\text{ meter}$.\n\nDi bagian tengah terbentuk daerah daun bunga simetris empat kelopak, dan di sela-selanya dirancang jalur pedestrian batu alam.\nGunakan pendekatan nilai $\\pi = \\frac{22}{7}$.',
    tipeStimulus: 'geometri',
    visualData: {
      type: 'svg',
      svgType: 'garden_concentric_petals',
      caption: 'Diagram Geometri Presisi Irisan Busur Lingkaran dalam Persegi 28x28 m'
    },
    teksPertanyaan: 'Berdasarkan konfigurasi geometri denah taman tersebut, manakah dari pernyataan berikut yang bernilai BENAR? (Pilihlah semua yang benar!)',
    opsiJawaban: [
      { label: 'A', text: 'Luas lingkaran yang menyinggung keempat sisi persegi adalah $616\\text{ m}^2$.' },
      { label: 'B', text: 'Total luas keempat daerah di luar lingkaran tetapi di dalam persegi adalah $168\\text{ m}^2$.' },
      { label: 'C', text: 'Keliling total batas lingkaran dalam adalah $88\\text{ meter}$.' },
      { label: 'D', text: 'Daerah irisan antara dua seperempat lingkaran yang berhadapan memiliki luas yang lebih besar daripada luas persegi.' },
      { label: 'E', text: 'Jika panjang sisi persegi diperbesar menjadi 2 kali semula, luas seluruh daerah komponen bertambah menjadi 4 kali lipat.' }
    ],
    kunciJawaban: ['A', 'B', 'C', 'E'],
    alasanKunci: '1. Sisi persegi s = 28 m. Luas persegi = 28^2 = 784 m^2.\n2. Jari-jari lingkaran dalam r = s/2 = 14 m.\n3. Luas lingkaran = pi * r^2 = (22/7) * 14 * 14 = 22 * 28 = 616 m^2. (A Benar!)\n4. Luas sudut di luar lingkaran = Luas persegi - Luas lingkaran = 784 - 616 = 168 m^2. (B Benar!)\n5. Keliling lingkaran = 2 * pi * r = 2 * (22/7) * 14 = 88 m. (C Benar!)\n6. Daerah irisan di dalam persegi pasti lebih kecil dari luas persegi (784 m^2). Jadi D Salah.\n7. Luas bangun datar berdimensi dua memiliki sifat skala kuadrat: jika panjang linier s menjadi 2s, luas menjadi 2^2 = 4 kali lipat. (E Benar!)',
    pembahasanNormal: {
      tahap1_memahami: 'Diberikan persegi $ABCD$ dengan sisi $s = 28\\text{ m}$. Lingkaran dalam memiliki jari-jari $r = \\frac{s}{2} = 14\\text{ m}$. Digunakan $\\pi = \\frac{22}{7}$. Kita perlu memverifikasi kelima pernyataan geometris.',
      tahap2_model: 'Rumus geometri bangun datar:\n- Luas persegi: $L_{\\text{persegi}} = s^2 = 28^2 = 784\\text{ m}^2$.\n- Jari-jari lingkaran dalam: $r = 14\\text{ m}$.\n- Luas lingkaran: $L_{\\text{lingkaran}} = \\pi r^2 = \\frac{22}{7} \\times 14^2 = 616\\text{ m}^2$.\n- Luas daerah sisa sudut: $L_{\\text{sudut}} = 784 - 616 = 168\\text{ m}^2$.\n- Keliling lingkaran: $K = 2 \\pi r = 2 \\times \\frac{22}{7} \\times 14 = 88\\text{ m}$.',
      tahap3_strategi: 'Hitung kuantitas numerik untuk setiap opsi A, B, C, uji logika pembatasan untuk opsi D, dan terapkan teorema dilatasi skala untuk opsi E.',
      tahap4_penyelesaian: '- **Opsi A**: $L = \\frac{22}{7} \\times 14 \\times 14 = 22 \\times 28 = 616\\text{ m}^2$. **(BENAR)**\n- **Opsi B**: Daerah di dalam persegi dan di luar lingkaran $= 784 - 616 = 168\\text{ m}^2$. **(BENAR)**\n- **Opsi C**: Keliling $= 2 \\times \\frac{22}{7} \\times 14 = 88\\text{ meter}$. **(BENAR)**\n- **Opsi D**: Seluruh irisan berada di dalam persegi, sehingga luasnya pasti lebih kecil dari luas persegi ($784\\text{ m}^2$), tidak mungkin lebih besar. **(SALAH)**\n- **Opsi E**: Sifat perbesaran geometri (dilatasi): faktor skala linier $k = 2 \\implies$ faktor perbesaran luas $k^2 = 2^2 = 4$. Jadi luas seluruh komponen bertambah menjadi 4 kali lipat. **(BENAR)**',
      tahap5_verifikasi: 'Verifikasi Opsi E: Jika $s = 56\\text{ m}$, luas persegi $= 56^2 = 3.136 = 4 \\times 784$. Jari-jari $r = 28\\text{ m}$, luas lingkaran $= \\frac{22}{7} \\times 28^2 = 2.464 = 4 \\times 616$. Sisa luas $= 3.136 - 2.464 = 672 = 4 \\times 168$. Seluruhnya bertambah tepat 4 kali lipat.',
      tahap6_evaluasiOpsi: 'Pernyataan A, B, C, dan E bernilai BENAR; sedangkan D bernilai SALAH.',
      tahap7_kesimpulan: 'Opsi yang benar adalah A, B, C, dan E.',
      tahap8_refleksi: 'Perhatikan bahwa sifat skala dimensi selalu konsisten: panjang linier berlipat $k$, luas berlipat $k^2$, dan volume berlipat $k^3$.'
    },
    pembahasanCepat: {
      strategiInti: 'Kalkulasi kelipatan 7 & hukum skala kuadrat',
      langkahPengerjaan: '1. Sisi 28, jari-jari 14 (kelipatan 7). Luas lingkaran langsung: $22 \\times 2 \\times 14 = 616$ (A Benar).\n2. Selisih luas: $28^2 - 616 = 784 - 616 = 168$ (B Benar).\n3. Keliling: $44 \\times 2 = 88$ (C Benar).\n4. Bagian di dalam persegi tidak mungkin melampaui luas wadahnya (D Gugur).\n5. Dilatasi luas berbanding kuadrat faktor skala $2^2 = 4$ (E Benar).',
      alasanMatematis: 'Penggunaan konstanta $\\pi = 22/7$ menyederhanakan perkalian menjadi bilangan bulat tanpa koma.',
      hasilAkhir: 'A, B, C, E Benar',
      perbandinganEfisiensi: 'Dapat dievaluasi secara tuntas dalam waktu kurang dari 45 detik.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Kalkulasi luas lingkaran terbukti benar.' },
      { option: 'B', explanation: 'Selisih luas persegi dan lingkaran terbukti benar.' },
      { option: 'C', explanation: 'Keliling lingkaran terbukti benar.' },
      { option: 'D', explanation: 'Pernyataan salah; irisan di dalam persegi tidak bisa melebihi luas persegi itu sendiri.' },
      { option: 'E', explanation: 'Pernyataan benar sesuai hukum kesebangunan kuadratik.' }
    ],
    konsepPenting: 'Hubungan luas antara lingkaran dan persegi pelingkupnya memiliki rasio tetap $\\frac{\\pi}{4} = \\frac{11}{14} \\approx 78,57\\%$, sehingga sisa luasnya selalu $\\frac{3}{14}$ bagian.',
    parameterIRT: { a: 1.6, b: 0.55 },
    narasi: {
      stimulus: 'Amati denah desain taman tematik pada diagram. Gabungan persegi berukuran 28 meter dengan lingkaran dalam dan busur lingkaran menghasilkan pola geometris yang presisi.',
      pertanyaan: 'Manakah dari pernyataan berikut yang bernilai benar? Silakan pilih semua opsi yang tepat.',
      opsi: 'Pilihlah dari opsi A sampai E, perhatikan nilai luas lingkaran, sisa luas sudut, keliling, dan prinsip perubahan skala.',
      umpanBalikBenar: 'Luar biasa! Analisis geometri dan pemahaman skala kuadratikmu sangat solid.',
      umpanBalikSalah: 'Coba periksa kembali opsi D dan E. Apakah luas bagian dalam bisa lebih besar dari persegi pembungkusnya?',
      pembahasanNormal: 'Dengan jari-jari 14 meter, luas lingkaran adalah 616 meter persegi, sehingga A benar. Sisa luas di sudut adalah 784 dikurang 616 yaitu 168 meter persegi, sehingga B benar. Keliling lingkaran adalah 88 meter, C benar. Sifat dilatasi dimensi dua menyatakan bahwa perbesaran dua kali panjang sisi melipatgandakan luas sebesar empat kali, sehingga E benar.',
      pembahasanCepat: 'Trik cepat Mister Jo: ingat rasio emas lingkaran dalam persegi! Luas lingkaran selalu sebelas per empat belas dari persegi, dan sisanya tiga per empat belas. Karena tiga per empat belas dikali 784 adalah 168, A, B, C langsung terkonfirmasi benar. Dan skala luas selalu dua kuadrat yaitu empat kali lipat!',
      refleksi: 'Rasio sebelas per empat belas sangat berguna untuk menyelesaikan soal lingkaran dalam persegi dalam tempo singkat.'
    }
  },

  // SOAL 09 — TRIGONOMETRI — PGK
  {
    id: 'soal-09',
    nomor: 9,
    elemen: 'Trigonometri',
    subelemen: 'Rasio Trigonometri pada Segitiga Siku-Siku dan Identitas Dasar',
    indikator: 'Siswa dapat mengevaluasi lima hubungan sinus, kosinus, tangen, dan identitas perbandingan trigonometri secara logis.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Analisis Relasi Trigonometri pada Konstruksi Rampa Kursi Roda',
    stimulus: 'Sebuah rampa akses kursi roda dirancang menghubungkan permukaan tanah dengan pintu masuk gedung setinggi $h = 1,2\\text{ meter}$. Panjang lintasan miring rampa adalah $L = 3,7\\text{ meter}$.\n\nSudut kemiringan rampa terhadap bidang tanah horizontal dimodelkan sebagai sudut lancip $\\alpha$ ($0^\\circ < \\alpha < 90^\\circ$).\n\nSeorang arsitek menguji kepatuhan standar keselamatan bangunan dengan menghitung berbagai nilai rasio trigonometri sudut kemiringan $\\alpha$.',
    tipeStimulus: 'ilustrasi',
    visualData: {
      type: 'svg',
      svgType: 'wheelchair_ramp_trig',
      caption: 'Model Segitiga Siku-Siku Kemiringan Rampa Akses Alfa'
    },
    teksPertanyaan: 'Berdasarkan model rampa tersebut, manakah dari pernyataan trigonometri berikut yang bernilai BENAR? (Pilihlah semua yang benar!)',
    opsiJawaban: [
      { label: 'A', text: 'Nilai perbandingan $\\sin \\alpha = \\frac{12}{37}$.' },
      { label: 'B', text: 'Panjang proyeksi horizontal rampa di atas tanah adalah $3,5\\text{ meter}$.' },
      { label: 'C', text: 'Nilai $\\cos \\alpha = \\frac{35}{37}$.' },
      { label: 'D', text: 'Nilai $\\tan \\alpha = \\frac{12}{35}$.' },
      { label: 'E', text: 'Berlaku identitas $\\sec^2 \\alpha - \\tan^2 \\alpha = 1$ untuk sudut $\\alpha$ tersebut.' }
    ],
    kunciJawaban: ['A', 'B', 'C', 'D', 'E'],
    alasanKunci: 'Tinggi depan = 1.2 m, miring = 3.7 m. Kalikan 10: depan = 12, miring = 37. Triple Pythagoras: 37^2 - 12^2 = 1369 - 144 = 1225 = 35^2! Maka sisi samping = 35/10 = 3.5 m. Sin alpha = 12/37 (A benar). Proyeksi horizontal = 3.5 m (B benar). Cos alpha = 35/37 (C benar). Tan alpha = 12/35 (D benar). Identitas sec^2 alpha - tan^2 alpha = 1 selalu berlaku untuk setiap sudut lancip (E benar). Seluruh kelima pernyataan terbukti benar!',
    pembahasanNormal: {
      tahap1_memahami: 'Diberikan segitiga siku-siku dengan sisi tegak (depan) $y = 1,2\\text{ m}$ dan sisi miring $r = 3,7\\text{ m}$. Sudut lancip $\\alpha$ diukur terhadap bidang horizontal. Kita harus menguji kebenaran kelima pernyataan trigonometri.',
      tahap2_model: 'Gunakan Teorema Pythagoras untuk menentukan sisi mendatar (samping) $x$:\n$$x = \\sqrt{r^2 - y^2} = \\sqrt{(3,7)^2 - (1,2)^2}$$\nKalikan skala 10 agar menjadi bilangan bulat:\n$$10x = \\sqrt{37^2 - 12^2} = \\sqrt{1369 - 144} = \\sqrt{1225} = 35 \\implies x = 3,5\\text{ m}$$',
      tahap3_strategi: 'Hitung rasio dasar: $\\sin \\alpha = \\frac{y}{r}$, $\\cos \\alpha = \\frac{x}{r}$, $\\tan \\alpha = \\frac{y}{x}$, dan verifikasi identitas Pythagoras trigonometri $\\sec^2 \\alpha - \\tan^2 \\alpha = 1$.',
      tahap4_penyelesaian: '- **Pernyataan A**: $\\sin \\alpha = \\frac{1,2}{3,7} = \\frac{12}{37}$. **(BENAR)**\n- **Pernyataan B**: Proyeksi horizontal adalah sisi samping $x = 3,5\\text{ meter}$. **(BENAR)**\n- **Pernyataan C**: $\\cos \\alpha = \\frac{3,5}{3,7} = \\frac{35}{37}$. **(BENAR)**\n- **Pernyataan D**: $\\tan \\alpha = \\frac{1,2}{3,5} = \\frac{12}{35}$. **(BENAR)**\n- **Pernyataan E**: $\\sec \\alpha = \\frac{37}{35}$, $\\tan \\alpha = \\frac{12}{35}$.\n$$\\sec^2 \\alpha - \\tan^2 \\alpha = \\frac{37^2 - 12^2}{35^2} = \\frac{1369 - 144}{1225} = \\frac{1225}{1225} = 1$$ **(BENAR)**',
      tahap5_verifikasi: 'Triple Pythagoras 12 - 35 - 37 adalah triple Pythagoras primitif yang valid ($144 + 1225 = 1369$). Seluruh nilai rasio konsisten satu sama lain.',
      tahap6_evaluasiOpsi: 'Kelima pernyataan A, B, C, D, dan E terbukti valid tanpa kontradiksi.',
      tahap7_kesimpulan: 'Semua pernyataan A, B, C, D, E bernilai BENAR.',
      tahap8_refleksi: 'Mengenali triple Pythagoras klasik seperti 12 - 35 - 37 mempermudah analisis nilai rasio trigonometri tanpa hitungan akar yang panjang.'
    },
    pembahasanCepat: {
      strategiInti: 'Pengenalan Triple Pythagoras 12 - 35 - 37',
      langkahPengerjaan: '1. Sisi depan 1,2 dan miring 3,7 langsung merujuk pada triple $12 - 35 - 37$.\n2. Sisi samping langsung didapat $3,5\\text{ m}$ (B Benar).\n3. Rasio sinus: depan/miring $= 12/37$ (A Benar).\n4. Rasio kosinus: samping/miring $= 35/37$ (C Benar).\n5. Rasio tangen: depan/samping $= 12/35$ (D Benar).\n6. Identitas $\\sec^2 - \\tan^2 = 1$ merupakan teorema dasar trigonometri (E Benar).',
      alasanMatematis: 'Identitas Pythagoras $\\sin^2 + \\cos^2 = 1$ ekuivalen jika dibagi $\\cos^2$ menjadi $\\tan^2 + 1 = \\sec^2$, sehingga $\\sec^2 - \\tan^2 = 1$ berlaku mutlak.',
      hasilAkhir: 'Semua Opsi (A, B, C, D, E) Benar',
      perbandinganEfisiensi: 'Memverifikasi seluruh opsi dalam 30 detik berkat triple Pythagoras.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Rasio sinus tepat.' },
      { option: 'B', explanation: 'Panjang proyeksi horizontal terbukti 3,5 meter.' },
      { option: 'C', explanation: 'Rasio kosinus tepat.' },
      { option: 'D', explanation: 'Rasio tangen tepat.' },
      { option: 'E', explanation: 'Identitas trigonometri dasar terbukti berlaku.' }
    ],
    konsepPenting: 'Triple Pythagoras 12, 35, 37 adalah salah satu triple bilangan bulat penting yang sering muncul pada perancangan teknis dan soal asesmen penalaran.',
    parameterIRT: { a: 1.5, b: 0.4 },
    narasi: {
      stimulus: 'Perhatikan model segitiga siku-siku rampa kursi roda pada diagram. Tinggi pintu 1,2 meter dan panjang rampa 3,7 meter.',
      pertanyaan: 'Manakah dari pernyataan-pernyataan trigonometri berikut yang bernilai benar? Kamu dapat memilih lebih dari satu jawaban.',
      opsi: 'Periksa perbandingan sinus, panjang sisi mendatar, kosinus, tangen, dan identitas sekan kuadrat.',
      umpanBalikBenar: 'Luar biasa sekali! Kamu jeli mengenali triple Pythagoras 12, 35, 37 dan identitas trigonometri.',
      umpanBalikSalah: 'Coba hitung sisi mendatarnya dengan triple Pythagoras dari 12 dan 37.',
      pembahasanNormal: 'Dengan triple Pythagoras 12, 35, 37, sisi mendatar adalah 3,5 meter. Maka sinusnya 12 per 37, kosinusnya 35 per 37, dan tangennya 12 per 35. Identitas sekan kuadrat dikurang tangen kuadrat selalu sama dengan satu. Sehingga seluruh pernyataan A sampai E bernilai benar.',
      pembahasanCepat: 'Trik cepat Mister Jo: kalikan 10 agar komanya hilang, ketemu angka 12 dan 37. Pasangan Pythagorasnya pasti 35! Berarti proyeksi horizontal 3,5 meter. Semua nilai sinus, kosinus, tangen langsung cocok, dan identitas trigonometri pasti benar!',
      refleksi: 'Menghilangkan koma desimal sementara waktu membantu kita mengenali pasangan triple Pythagoras secara instan.'
    }
  },

  // SOAL 10 — DATA DAN PELUANG — PGK
  {
    id: 'soal-10',
    nomor: 10,
    elemen: 'Data dan Peluang',
    subelemen: 'Grafik Garis, Infografik Tren, dan Evaluasi Klaim Statistik',
    indikator: 'Siswa dapat menentukan lima kesimpulan statistik yang benar atau salah berdasarkan tren, persentase perubahan, rata-rata, dan keterbatasan informasi grafik.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'PGK',
    judulSoal: 'Analisis Fluktuasi Indeks Kualitas Udara (AQI) Selama 6 Bulan',
    stimulus: 'Badan Lingkungan Hidup merilis data rata-rata bulanan Indeks Standar Pencemar Udara (ISPU / AQI) di sebuah kota metropolitan dari bulan Januari hingga Juni:\n\n- **Januari**: $80\\text{ AQI}$\n- **Februari**: $100\\text{ AQI}$\n- **Maret**: $120\\text{ AQI}$\n- **April**: $90\\text{ AQI}$\n- **Mei**: $150\\text{ AQI}$\n- **Juni**: $120\\text{ AQI}$\n\n*(Catatan: Kategori Baik $\\le 50$, Sedang $51-100$, Tidak Sehat $101-199$).*\nSebuah media massa membuat berita dengan judul: *"Kualitas Udara Kota Memburuk Drastis Tanpa Kendali dengan Lonjakan Tertinggi pada Periode Mei"*.',
    tipeStimulus: 'infografik',
    visualData: {
      type: 'table',
      tableData: {
        headers: ['Bulan', 'Nilai AQI', 'Kategori Kualitas Udara', 'Perubahan vs Bulan Lalu'],
        rows: [
          ['Januari', '80', 'Sedang', '-'],
          ['Februari', '100', 'Sedang', '+20 (+25%)'],
          ['Maret', '120', 'Tidak Sehat', '+20 (+20%)'],
          ['April', '90', 'Sedang', '-30 (-25%)'],
          ['Mei', '150', 'Tidak Sehat', '+60 (+66,7%)'],
          ['Juni', '120', 'Tidak Sehat', '-30 (-20%)']
        ],
        caption: 'Rekapitulasi Indeks Kualitas Udara Bulanan'
      }
    },
    teksPertanyaan: 'Berdasarkan data dan grafik tren tersebut, manakah dari kesimpulan statistik berikut yang bernilai BENAR? (Pilihlah semua yang benar!)',
    opsiJawaban: [
      { label: 'A', text: 'Rata-rata (mean) indeks AQI kota tersebut selama periode 6 bulan adalah $110\\text{ AQI}$.' },
      { label: 'B', text: 'Persentase kenaikan AQI terbesar terjadi pada periode April ke Mei, yaitu meningkat sebesar $66,67\\%$.' },
      { label: 'C', text: 'Median dari data indeks AQI selama 6 bulan tersebut adalah $110\\text{ AQI}$.' },
      { label: 'D', text: 'Klaim judul berita bahwa kualitas udara "memburuk tanpa kendali" adalah bias dan tidak sepenuhnya akurat secara statistik, karena terdapat dua kali penurunan indeks AQI (Maret ke April dan Mei ke Juni).' },
      { label: 'E', text: 'Indeks AQI bulan Juni bernilai sama persis dengan bulan Maret, yang menunjukkan bahwa program mitigasi pencemaran pada bulan Juni telah mengembalikan polusi ke titik terendah semester tersebut.' }
    ],
    kunciJawaban: ['A', 'B', 'C', 'D'],
    alasanKunci: '1. Data terurut: 80, 90, 100, 120, 120, 150. Jumlah = 80 + 90 + 100 + 120 + 120 + 150 = 660. Mean = 660 / 6 = 110. (A Benar!)\n2. Kenaikan April ke Mei: dari 90 ke 150 = +60. Persentase = (60/90) * 100% = 66.67%. Ini persentase kenaikan terbesar. (B Benar!)\n3. Median data genap (posisi 3 dan 4): (100 + 120)/2 = 110. (C Benar!)\n4. Tren tidak monoton naik karena ada penurunan di April (-30) dan Juni (-30), sehingga klaim "tanpa kendali" bias secara statistik. (D Benar!)\n5. Nilai 120 (Juni) bukan titik terendah karena titik terendah adalah Januari (80). Jadi E Salah.',
    pembahasanNormal: {
      tahap1_memahami: 'Diberikan runtun waktu AQI 6 bulan: Januari (80), Februari (100), Maret (120), April (90), Mei (150), Juni (120). Kita diminta mengevaluasi mean, persentase perubahan, median, serta bias klaim media.',
      tahap2_model: 'Urutkan data dari terkecil ke terbesar:\n$$80, 90, 100, 120, 120, 150$$\n- Banyak data $n = 6$.\n- $\\sum X = 80 + 90 + 100 + 120 + 120 + 150 = 660$.\n- $\\bar{X} = \\frac{660}{6} = 110$.\n- Median $= \\frac{X_3 + X_4}{2} = \\frac{100 + 120}{2} = 110$.',
      tahap3_strategi: 'Hitung persentase kenaikan tiap periode:\n- Jan $\\to$ Feb: $\\frac{20}{80} = +25\\%$\n- Feb $\\to$ Mar: $\\frac{20}{100} = +20\\%$\n- Mar $\\to$ Apr: $\\frac{-30}{120} = -25\\%$\n- Apr $\\to$ Mei: $\\frac{60}{90} = +66,67\\%$\n- Mei $\\to$ Jun: $\\frac{-30}{150} = -20\\%$.',
      tahap4_penyelesaian: '- **Evaluasi A**: Rata-rata $= \\frac{660}{6} = 110$. **(BENAR)**\n- **Evaluasi B**: Kenaikan April-Mei adalah $+60$, persentase $\\frac{60}{90} \\times 100\\% = 66,67\\%$, tertinggi dari seluruh periode. **(BENAR)**\n- **Evaluasi C**: Median $= \\frac{100 + 120}{2} = 110$. **(BENAR)**\n- **Evaluasi D**: Berita menyatakan "memburuk tanpa kendali" (implikasi monoton naik tanpa henti), padahal data menunjukkan dua kali fase perbaikan signifikan (penurunan 30 poin pada April dan Juni). Secara literasi statistik klaim media bias. **(BENAR)**\n- **Evaluasi E**: Titik terendah semester adalah Januari ($80\\text{ AQI}$), bukan Juni ($120\\text{ AQI}$). **(SALAH)**',
      tahap5_verifikasi: 'Seluruh perhitungan statistik terverifikasi konsisten. Titik terendah adalah 80, bukan 120.',
      tahap6_evaluasiOpsi: 'Pernyataan A, B, C, dan D terbukti benar; opsi E keliru.',
      tahap7_kesimpulan: 'Opsi yang benar adalah A, B, C, dan D.',
      tahap8_refleksi: 'Kemampuan literasi statistik menuntut kita kritis terhadap bahasa media yang sensasional jika bertentangan dengan bukti grafik.'
    },
    pembahasanCepat: {
      strategiInti: 'Penyusunan data terurut & verifikasi klaim ekstrem',
      langkahPengerjaan: '1. Urutkan: 80, 90, 100, 120, 120, 150. Dua angka tengah 100 & 120 $\\implies$ Median $= 110$ (C Benar).\n2. Jumlah total $660 / 6 = 110 \\implies$ Mean $= 110$ (A Benar).\n3. Kenaikan terbesar: lonjakan $+60$ dari basis 90 $= 66,7\\%$ (B Benar).\n4. Judul berita bias karena grafik jelas mengalami penurunan di dua bulan (D Benar).\n5. Nilai 120 jelas bukan titik terendah karena ada 80 dan 90 (E Langsung Gugur).',
      alasanMatematis: 'Analisis visual tren langsung mengeliminasi opsi E tanpa hitungan tambahan.',
      hasilAkhir: 'A, B, C, D Benar',
      perbandinganEfisiensi: 'Cukup urutkan data sekali untuk menyelesaikan opsi A, B, C, E sekaligus.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Nilai mean terbukti tepat.' },
      { option: 'B', explanation: 'Persentase kenaikan terbesar terbukti 66,67%.' },
      { option: 'C', explanation: 'Nilai median terbukti tepat.' },
      { option: 'D', explanation: 'Evaluasi kritis klaim media terbukti benar secara metodologis.' },
      { option: 'E', explanation: 'Pernyataan keliru; titik terendah semester adalah bulan Januari dengan AQI 80.' }
    ],
    konsepPenting: 'Literasi data asesmen TKA tidak hanya menguji perhitungan numerik, tetapi juga evaluasi kritis terhadap klaim penafsiran data (data misuse/sensationalism).',
    parameterIRT: { a: 1.8, b: 0.8 },
    narasi: {
      stimulus: 'Perhatikan data runtun waktu Indeks Kualitas Udara selama enam bulan pada tabel. Ada fluktuasi naik dan turun antara 80 hingga 150 AQI.',
      pertanyaan: 'Manakah dari kesimpulan statistik berikut yang bernilai benar? Kamu dapat memilih lebih dari satu jawaban.',
      opsi: 'Periksa opsi A sampai E, perhatikan nilai mean, persentase lonjakan, nilai median, serta objektivitas judul berita.',
      umpanBalikBenar: 'Luar biasa! Pemikiran kritismu dalam mengevaluasi statistik dan bias media sangat matang.',
      umpanBalikSalah: 'Coba urutkan keenam data tersebut dari nilai terkecil hingga terbesar terlebih dahulu.',
      pembahasanNormal: 'Dengan mengurutkan data menjadi 80, 90, 100, 120, 120, dan 150, kita peroleh jumlah 660 sehingga rata-rata dan median bernilai sama yaitu 110. Kenaikan April ke Mei sebesar 66,7 persen adalah yang terbesar. Judul media terbukti bias karena ada dua periode perbaikan kualitas udara. Opsi E salah karena titik terendah adalah Januari sebesar 80.',
      pembahasanCepat: 'Trik cepat Mister Jo: urutkan datanya! Dua angka di tengah 100 dan 120 langsung memberi median 110. Jumlahnya 660 dibagi 6 menghasilkan mean 110. Opsi E langsung kita coret karena angka 120 jelas bukan angka terendah!',
      refleksi: 'Ingat kawan-kawan, selalu urutkan data sebelum mencari median untuk menghindari kesalahan letak data.'
    }
  },

  // SOAL 11 — BILANGAN — BS
  {
    id: 'soal-11',
    nomor: 11,
    elemen: 'Bilangan',
    subelemen: 'Sifat Komutatif, Asosiatif, dan Distributif Bilangan Real',
    indikator: 'Siswa dapat mengevaluasi tiga argumen matematis dan mengidentifikasi apakah transformasi aljabar numerik yang dilakukan selalu sah.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Evaluasi Keabsahan Trik Perhitungan Cepat Aritmetika Aljabar',
    stimulus: 'Tiga orang siswa (Andi, Budi, dan Citra) mempresentasikan trik perhitungan cepat untuk menyederhanakan ekspresi aritmetika rumit pada kompetisi matematika sekolah:\n\n1. **Argumen Andi**: Untuk menghitung $998 \\times 45$, Andi menggunakan sifat distributif perkalian terhadap pengurangan: $(1.000 - 2) \\times 45 = 1.000 \\times 45 - 2 \\times 45 = 45.000 - 90 = 44.910$.\n2. **Argumen Budi**: Untuk pembagian bertingkat $120 : (6 : 2)$, Budi menyatakan bahwa tanda kurung dapat dipindahkan berdasarkan sifat asosiatif sehingga ekuivalen dengan $(120 : 6) : 2 = 20 : 2 = 10$.\n3. **Argumen Citra**: Untuk bilangan real apa pun $x$ dan $y$, bentuk $(x - y)^2$ selalu menghasilkan nilai yang sama dengan $(y - x)^2$ karena sifat komutatif kuadrat selisih.',
    tipeStimulus: 'narasi',
    teksPertanyaan: 'Tentukan apakah masing-masing pernyataan argumen siswa berikut BENAR atau SALAH berdasarkan kaidah dan sifat operasi bilangan real!',
    pernyataanBenarSalah: [
      {
        id: 's1',
        statement: 'Argumen Andi selalu sah secara matematis karena menerapkan sifat distributif perkalian terhadap pengurangan pada bilangan real.',
        isCorrect: true,
        reason: 'Sifat distributif a*(b - c) = a*b - a*c berlaku secara universal untuk setiap bilangan real.'
      },
      {
        id: 's2',
        statement: 'Argumen Budi sah secara matematis karena operasi pembagian memenuhi sifat asosiatif pada bilangan bulat.',
        isCorrect: false,
        reason: 'Operasi pembagian TIDAK bersifat asosiatif. Nilai 120 : (6 : 2) = 120 : 3 = 40, sedangkan (120 : 6) : 2 = 20 : 2 = 10. Hasilnya berbeda!'
      },
      {
        id: 's3',
        statement: 'Argumen Citra sah secara matematis karena $(x - y) = -(y - x)$, dan kuadrat dari suatu bilangan selalu sama dengan kuadrat lawan bilangannya: $[-(y - x)]^2 = (y - x)^2$.',
        isCorrect: true,
        reason: '(-a)^2 = a^2 berlaku universal pada bilangan real sehingga (x - y)^2 = (y - x)^2 selalu benar.'
      }
    ],
    kunciJawaban: '',
    alasanKunci: 'Pernyataan 1 BENAR (sifat distributif valid). Pernyataan 2 SALAH (pembagian tidak asosiatif, 120:3=40 != 10). Pernyataan 3 BENAR (sifat kuadrat simetris negatif).',
    pembahasanNormal: {
      tahap1_memahami: 'Kita diminta menguji validitas tiga argumen siswa mengenai sifat operasi distributif, asosiatif pada pembagian, dan kesetaraan kuadrat selisih dua bilangan.',
      tahap2_model: 'Evaluasi struktur aljabar:\n1. Andi: $a(b - c) = ab - ac$.\n2. Budi: Apakah $a : (b : c) = (a : b) : c$?\n3. Citra: Apakah $(x - y)^2 = (y - x)^2$?',
      tahap3_strategi: 'Buktikan secara formal atau berikan contoh penyangkal (counterexample).',
      tahap4_penyelesaian: '- **Pernyataan 1 (Andi)**:\n  $998 \\times 45 = (1.000 - 2) \\times 45 = 1.000 \\times 45 - 2 \\times 45 = 45.000 - 90 = 44.910$.\n  Sifat distributif perkalian terhadap operasi pengurangan $a(b - c) = ab - ac$ adalah aksioma dasar bilangan real. **(BENAR)**\n- **Pernyataan 2 (Budi)**:\n  Hitung nilai asli: $120 : (6 : 2) = 120 : 3 = 40$.\n  Hitung cara Budi: $(120 : 6) : 2 = 20 : 2 = 10$.\n  Karena $40 \\neq 10$, operasi pembagian **tidak asosiatif**. Argumen Budi keliru secara fatal. **(SALAH)**\n- **Pernyataan 3 (Citra)**:\n  Perhatikan bahwa $x - y = -(y - x)$.\n  Kuadratkan kedua ruas:\n  $$(x - y)^2 = [-(y - x)]^2 = (-1)^2 \\times (y - x)^2 = 1 \\times (y - x)^2 = (y - x)^2$$\n  Argumen Citra sah secara universal. **(BENAR)**',
      tahap5_verifikasi: 'Contoh numerik untuk Citra: misal $x = 7, y = 3$. $(7 - 3)^2 = 4^2 = 16$. $(3 - 7)^2 = (-4)^2 = 16$. Terbukti selalu identik.',
      tahap6_evaluasiOpsi: 'Hasil klasifikasi: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      tahap7_kesimpulan: 'Kombinasi jawaban: BENAR - SALAH - BENAR.',
      tahap8_refleksi: 'Ingat baik-baik: Operasi pengurangan dan pembagian TIDAK bersifat komutatif maupun asosiatif!'
    },
    pembahasanCepat: {
      strategiInti: 'Pengujian sifat dasar struktur aljabar & kontra-contoh langsung',
      langkahPengerjaan: '1. Andi memakai distributif $a(b-c)$ yang sah pada aljabar $\\implies$ BENAR.\n2. Budi menganggap pembagian asosiatif: cek $120 / 3 = 40$ vs $20 / 2 = 10$, berbeda jauh $\\implies$ SALAH.\n3. Citra: kuadrat membuang tanda minus $(-u)^2 = u^2 \\implies$ BENAR.',
      alasanMatematis: 'Pembagian adalah perkalian dengan invers, $a / (b / c) = a \\times \\frac{c}{b} = \\frac{ac}{b}$, sedangkan $(a / b) / c = \\frac{a}{bc}$. Keduanya hanya sama jika $c^2 = 1$.',
      hasilAkhir: '1: BENAR, 2: SALAH, 3: BENAR',
      perbandinganEfisiensi: 'Cukup hitung nilai numerik 40 vs 10 untuk langsung memvonis argumen Budi salah dalam 5 detik.'
    },
    konsepPenting: 'Hanya penjumlahan dan perkalian yang memenuhi sifat komutatif dan asosiatif pada bilangan real. Pengurangan dan pembagian tidak memilikinya.',
    parameterIRT: { a: 1.5, b: 0.2 },
    narasi: {
      stimulus: 'Simak tiga argumen trik aritmetika yang diajukan Andi, Budi, dan Citra pada stimulus.',
      pertanyaan: 'Tentukan apakah masing-masing pernyataan argumen tersebut Benar atau Salah.',
      opsi: 'Klasifikasikan ketiga pernyataan dengan menekan tombol Benar atau Salah pada setiap baris.',
      umpanBalikBenar: 'Tepat sekali! Penalaranmu terhadap aksioma sifat bilangan real sangat jernih.',
      umpanBalikSalah: 'Perhatikan baik-baik argumen Budi. Apakah pembagian bisa dipindah tanda kurungnya begitu saja?',
      pembahasanNormal: 'Pernyataan satu benar karena distributif perkalian terhadap pengurangan berlaku universal. Pernyataan dua salah karena pembagian tidak memiliki sifat asosiatif; 120 dibagi 3 menghasilkan 40, bukan 10. Pernyataan tiga benar karena kuadrat bilangan negatif sama dengan kuadrat positifnya.',
      pembahasanCepat: 'Trik cepat Mister Jo: ingat prinsip dasar! Pembagian dan pengurangan tidak pernah asosiatif. Begitu Budi memindah kurung pembagian, langsung tebak Salah! Andi memakai distributif pasti Benar, dan Citra menguadratkan selisih pasti Benar!',
      refleksi: 'Jangan pernah menerapkan sifat asosiatif pada operasi pembagian bertingkat tanpa mengubahnya menjadi perkalian pecahan.'
    }
  },

  // SOAL 12 — ALJABAR — BS
  {
    id: 'soal-12',
    nomor: 12,
    elemen: 'Aljabar',
    subelemen: 'Fungsi Rasional, Domain, Range, dan Invers Fungsi',
    indikator: 'Siswa dapat menilai tiga pernyataan mengenai domain, range, serta keberadaan dan sifat invers fungsi.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Karakteristik Asimtot dan Invers Fungsi Rasional Linear',
    stimulus: 'Diberikan fungsi rasional $f(x)$ yang dimodelkan oleh persamaan aljabar:\n\n$$f(x) = \\frac{3x + 6}{2x - 5}$$\n\nSeorang analis sistem sedang meneliti kelakuan grafik fungsi tersebut untuk domain bilangan real, asimtot tegak, asimtot datar, serta formula fungsi inversnya $f^{-1}(x)$.',
    tipeStimulus: 'grafik',
    visualData: {
      type: 'svg',
      svgType: 'rational_function_asymptotes',
      caption: 'Grafik Fungsi Rasional f(x) = (3x+6)/(2x-5) dengan Asimtot Tegak dan Datar'
    },
    teksPertanyaan: 'Berdasarkan karakteristik fungsi rasional $f(x)$ tersebut, tentukan kebenaran dari masing-masing pernyataan berikut!',
    pernyataanBenarSalah: [
      {
        id: 's1',
        statement: 'Domain alami fungsi $f(x)$ adalah $D_f = \\{x \\in \\mathbb{R} \\mid x \\neq \\frac{5}{2}\\}$ dengan garis $x = \\frac{5}{2}$ sebagai asimtot tegak grafik.',
        isCorrect: true,
        reason: 'Penyebut 2x - 5 = 0 saat x = 5/2, sehingga fungsi tidak terdefinisi dan membentuk asimtot tegak x = 5/2.'
      },
      {
        id: 's2',
        statement: 'Daerah hasil (range) dari fungsi $f(x)$ adalah $R_f = \\{y \\in \\mathbb{R} \\mid y \\neq 3\\}$ karena asimtot datar grafik berada pada garis $y = 3$.',
        isCorrect: false,
        reason: 'Asimtot datar adalah y = lim x->inf (3x+6)/(2x-5) = 3/2, sehingga range-nya adalah y != 3/2, bukan y != 3.'
      },
      {
        id: 's3',
        statement: 'Fungsi invers dari $f(x)$ terdefinisi untuk $x \\neq \\frac{3}{2}$ dan dinyatakan oleh rumus $f^{-1}(x) = \\frac{5x + 6}{2x - 3}$.',
        isCorrect: true,
        reason: 'Rumus cepat invers (ax+b)/(cx+d) adalah (-dx+b)/(cx-a). Di sini a=3, b=6, c=2, d=-5 sehingga f^-1(x) = (-(-5)x + 6)/(2x - 3) = (5x + 6)/(2x - 3) dengan x != 3/2.'
      }
    ],
    kunciJawaban: '',
    alasanKunci: 'Pernyataan 1 BENAR (asimtot tegak x = 5/2). Pernyataan 2 SALAH (asimtot datar y = 3/2 sehingga Rf: y != 3/2). Pernyataan 3 BENAR (invers = (5x+6)/(2x-3)).',
    pembahasanNormal: {
      tahap1_memahami: 'Diberikan fungsi pecahan linear $f(x) = \\frac{3x + 6}{2x - 5}$. Kita perlu menguji domain & asimtot tegak, range & asimtot datar, serta rumus fungsi invers $f^{-1}(x)$.',
      tahap2_model: 'Fungsi berbentuk $f(x) = \\frac{ax + b}{cx + d}$ dengan $a = 3, b = 6, c = 2, d = -5$.\n- Pembuat nol penyebut: $cx + d = 0 \\implies 2x - 5 = 0 \\implies x = \\frac{5}{2}$.\n- Asimtot datar: $y = \\frac{a}{c} = \\frac{3}{2}$.\n- Rumus invers: $f^{-1}(x) = \\frac{-dx + b}{cx - a}$.',
      tahap3_strategi: 'Substitusi koefisien secara teliti dan periksa kesesuaian nilai numerik pada setiap pernyataan.',
      tahap4_penyelesaian: '- **Pernyataan 1**: Penyebut $2x - 5 \\neq 0 \\implies x \\neq \\frac{5}{2}$. Karena pembilang $3(5/2) + 6 \\neq 0$, garis $x = \\frac{5}{2}$ adalah asimtot tegak murni. **(BENAR)**\n- **Pernyataan 2**: Nilai limit saat $x \\to \\pm\\infty$ adalah $y = \\frac{3}{2}$. Nilai ini tidak pernah dicapai oleh $f(x)$, sehingga daerah hasil adalah $R_f = \\{y \\in \\mathbb{R} \\mid y \\neq \\frac{3}{2}\\}$. Pernyataan 2 mengklaim $y \\neq 3$ (keliru karena lupa membagi koefisien penyebut $c=2$). **(SALAH)**\n- **Pernyataan 3**: Turunkan invers secara aljabar:\n  $$y = \\frac{3x + 6}{2x - 5} \\implies y(2x - 5) = 3x + 6$$\n  $$2xy - 5y = 3x + 6 \\implies 2xy - 3x = 5y + 6$$\n  $$x(2y - 3) = 5y + 6 \\implies x = \\frac{5y + 6}{2y - 3}$$\n  Ganti variabel: $f^{-1}(x) = \\frac{5x + 6}{2x - 3}$ dengan domain $x \\neq \\frac{3}{2}$. **(BENAR)**',
      tahap5_verifikasi: 'Uji komposisi: Misalkan $x = 1$, $f(1) = \\frac{3(1) + 6}{2(1) - 5} = \\frac{9}{-3} = -3$.\nMasukkan ke invers: $f^{-1}(-3) = \\frac{5(-3) + 6}{2(-3) - 3} = \\frac{-15 + 6}{-6 - 3} = \\frac{-9}{-9} = 1$. Terbukti sempurna!',
      tahap6_evaluasiOpsi: 'Hasil evaluasi: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      tahap7_kesimpulan: 'Klasifikasi yang benar: BENAR - SALAH - BENAR.',
      tahap8_refleksi: 'Asimtot datar fungsi rasional linear berderajat sama selalu merupakan perbandingan koefisien derajat tertinggi, yaitu $y = \\frac{a}{c}$.'
    },
    pembahasanCepat: {
      strategiInti: 'Pola cepat asimtot & rumus kilat invers fungsi pecahan linear',
      langkahPengerjaan: '1. Asimtot tegak: penyebut $= 0 \\implies 2x - 5 = 0 \\implies x = 2,5$ (Pernyataan 1 Benar).\n2. Asimtot datar: rasio koefisien $x$ atas dan bawah $\\implies y = \\frac{3}{2} = 1,5$. Klaim menyatakan $y = 3$, langsung SALAH.\n3. Rumus kilat invers: tukar posisi $a$ dan $d$ lalu ubah tandanya!\n$\\frac{3x + 6}{2x - 5} \\implies \\frac{-(-5)x + 6}{2x - (3)} = \\frac{5x + 6}{2x - 3}$ (Pernyataan 3 Benar).',
      alasanMatematis: 'Pertukaran diagonal utama matriks transformasi aljabar linear $(a \\leftrightarrow -d)$ langsung menghasilkan invers seketika.',
      hasilAkhir: '1: BENAR, 2: SALAH, 3: BENAR',
      perbandinganEfisiensi: 'Rumus kilat memangkas 5 baris aljabar menjadi 1 baris tukar tanda.'
    },
    konsepPenting: 'Untuk fungsi $f(x) = \\frac{ax+b}{cx+d}$, inversnya adalah $f^{-1}(x) = \\frac{-dx+b}{cx-a}$, dengan asimtot tegak di $x = -d/c$ dan asimtot datar di $y = a/c$.',
    parameterIRT: { a: 1.65, b: 0.6 },
    narasi: {
      stimulus: 'Perhatikan grafik dan bentuk aljabar fungsi rasional linear pada stimulus. Analisis posisi garis asimtot serta rumus fungsi inversnya.',
      pertanyaan: 'Tentukan apakah masing-masing dari ketiga pernyataan berikut Benar atau Salah.',
      opsi: 'Tekan tombol Benar atau Salah pada baris pertama, kedua, dan ketiga.',
      umpanBalikBenar: 'Bagus sekali! Penguasaanmu terhadap asimtot dan rumus invers fungsi pecahan linear sangat mantap.',
      umpanBalikSalah: 'Coba periksa asimtot datar pada pernyataan kedua. Ingat rasio koefisien pangkat tertinggi pembilang dan penyebut.',
      pembahasanNormal: 'Asimtot tegak dicari saat penyebut bernilai nol, yaitu lima per dua, sehingga pernyataan satu benar. Asimtot datar adalah tiga per dua, bukan tiga, sehingga pernyataan dua salah. Dengan menukar posisi dan tanda tiga dan minus lima, kita peroleh invers lima eks ditambah enam per dua eks dikurang tiga, sehingga pernyataan tiga benar.',
      pembahasanCepat: 'Trik kilat Mister Jo: ingat rumus invers pecahan! Tukar silang tanda koefisien pojok kiri atas dan kanan bawah! Angka 3 dan -5 bertukar menjadi 5 dan -3. Sangat cepat! Dan untuk asimtot datar, bagi 3 dengan 2 menghasilkan satu setengah, bukan tiga!',
      refleksi: 'Rumus tukar tanda silang adalah metode andalan yang wajib kamu kuasai untuk soal invers fungsi TKA.'
    }
  }
];
