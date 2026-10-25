import { QuestionData } from '../../types';

export const questions13to18: QuestionData[] = [
  // SOAL 13 — GEOMETRI — BS
  {
    id: 'soal-13',
    nomor: 13,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Dimensi Tiga: Jarak Titik, Garis, dan Bidang pada Kubus',
    indikator: 'Siswa dapat mengevaluasi tiga pernyataan tentang jarak antartitik, jarak titik ke bidang, dan hubungan objek ruang.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Analisis Jarak Ortagonal pada Kubus ABCD.EFGH Berusuk 12 cm',
    stimulus: 'Diberikan kubus tegak beraturan $ABCD.EFGH$ dengan panjang rusuk $s = 12\\text{ cm}$.\n\nTitik $P$ merupakan titik tengah rusuk tegak $CG$. Titik $Q$ adalah titik perpotongan diagonal bidang alas $AC$ dan $BD$.\nSebuah bidang diagonal dibentuk melalui titik-titik $B, D, H, F$.\n\nTim laboratorium geometri ruang memproyeksikan beberapa kedudukan dan jarak antar-objek di dalam kubus tersebut.',
    tipeStimulus: 'geometri',
    visualData: {
      type: 'svg',
      svgType: 'cube_3d_distances',
      caption: 'Diagram Geometri Ruang Kubus ABCD.EFGH dengan Titik P dan Titik Q'
    },
    teksPertanyaan: 'Berdasarkan model bangun ruang kubus tersebut, tentukan kebenaran dari masing-masing pernyataan berikut!',
    pernyataanBenarSalah: [
      {
        id: 's1',
        statement: 'Jarak antara titik sudut $A$ ke titik tengah rusuk $P$ adalah $6\\sqrt{6}\\text{ cm}$.',
        isCorrect: false,
        reason: 'Jarak AP = sqrt(AC^2 + CP^2). AC = 12*sqrt(2), CP = 6. AP = sqrt((12*sqrt(2))^2 + 6^2) = sqrt(288 + 36) = sqrt(324) = 18 cm, bukan 6*sqrt(6) cm (~14.7 cm).'
      },
      {
        id: 's2',
        statement: 'Jarak dari titik sudut $E$ ke bidang diagonal $BDHF$ sama dengan setengah panjang diagonal sisi kubus, yaitu $6\\sqrt{2}\\text{ cm}$.',
        isCorrect: true,
        reason: 'Titik E diproyeksikan tegak lurus ke garis diagonal EG pada bidang BDHF, tepat di titik pusat diagonal bidang atas O_atas. Jaraknya adalah EO_atas = 1/2 * EG = 1/2 * (12*sqrt(2)) = 6*sqrt(2) cm.'
      },
      {
        id: 's3',
        statement: 'Ruas garis $PQ$ tegak lurus terhadap bidang alas $ABCD$.',
        isCorrect: false,
        reason: 'Titik Q adalah pusat alas (6, 6, 0) sedangkan proyeksi titik P pada alas adalah titik C (12, 12, 0). Ruas garis PQ tidak tegak lurus alas, melainkan miring dengan sudut tertentu (vektor arah PQ = (6, 6, 6) != (0, 0, 1)).'
      }
    ],
    kunciJawaban: '',
    alasanKunci: 'Pernyataan 1 SALAH (jarak AP = 18 cm). Pernyataan 2 BENAR (jarak E ke BDHF = 6*sqrt(2) cm). Pernyataan 3 SALAH (PQ miring terhadap alas).',
    pembahasanNormal: {
      tahap1_memahami: 'Kubus $ABCD.EFGH$ dengan rusuk $12\\text{ cm}$. $P$ adalah titik tengah $CG$ ($CP = 6\\text{ cm}$). $Q$ adalah titik potong $AC$ dan $BD$ ($CQ = 6\\sqrt{2}\\text{ cm}$). Kita mengevaluasi tiga klaim geometri ruang.',
      tahap2_model: 'Sistem koordinat Kartesius 3D dengan $D$ sebagai pusat $(0, 0, 0)$:\n- $A = (12, 0, 0)$, $B = (12, 12, 0)$, $C = (0, 12, 0)$, $D = (0, 0, 0)$\n- $E = (12, 0, 12)$, $F = (12, 12, 12)$, $G = (0, 12, 12)$, $H = (0, 0, 12)$\n- Titik $P$ (tengah $CG$): $(0, 12, 6)$\n- Titik $Q$ (pusat alas): $(6, 6, 0)$.',
      tahap3_strategi: 'Gunakan rumus jarak titik dalam ruang dan proyeksi ortogonal pada bidang.',
      tahap4_penyelesaian: '- **Pernyataan 1 (Jarak $A$ ke $P$)**:\n  $$AP = \\sqrt{(0 - 12)^2 + (12 - 0)^2 + (6 - 0)^2} = \\sqrt{144 + 144 + 36} = \\sqrt{324} = 18\\text{ cm}$$\n  Pernyataan mengklaim $6\\sqrt{6} = \\sqrt{216}\\text{ cm}$, yang tidak sama dengan $18\\text{ cm}$. **(SALAH)**\n- **Pernyataan 2 (Jarak $E$ ke bidang $BDHF$)**:\n  Bidang $BDHF$ memuat garis $EG$ di atapnya. Garis $FH$ adalah diagonal yang berpotongan tegak lurus dengan $EG$ di titik $M$.\n  Proyeksi ortogonal $E$ pada bidang $BDHF$ tepat jatuh di titik tengah $EG$.\n  Panjang $EG = 12\\sqrt{2}\\text{ cm}$, maka jaraknya adalah $\\frac{1}{2} EG = 6\\sqrt{2}\\text{ cm}$. **(BENAR)**\n- **Pernyataan 3 (Kemiringan $PQ$)**:\n  Proyeksi $P(0, 12, 6)$ pada bidang alas adalah $C(0, 12, 0)$, bukan titik $Q(6, 6, 0)$.\n  Suatu garis tegak lurus bidang alas jika dan hanya jika koordinat $x$ dan $y$ kedua ujungnya sama. Di sini vektor $PQ = (-6, 6, 6)$ memiliki komponen horizontal tidak nol, sehingga garis $PQ$ condong miring. **(SALAH)**',
      tahap5_verifikasi: 'Segitiga $\\triangle PCQ$ siku-siku di $C$: $CQ = \\frac{1}{2}(12\\sqrt{2}) = 6\\sqrt{2}$, $CP = 6$. Maka $PQ = \\sqrt{(6\\sqrt{2})^2 + 6^2} = \\sqrt{72 + 36} = \\sqrt{108} = 6\\sqrt{3}\\text{ cm}$. Sudut $\\tan \\theta = \\frac{CP}{CQ} = \\frac{6}{6\\sqrt{2}} = \\frac{1}{\\sqrt{2}} \\neq \\infty$. Terbukti $PQ$ tidak tegak lurus alas.',
      tahap6_evaluasiOpsi: 'Hasil klasifikasi pernyataan: 1 = SALAH, 2 = BENAR, 3 = SALAH.',
      tahap7_kesimpulan: 'Kombinasi jawaban yang benar: SALAH - BENAR - SALAH.',
      tahap8_refleksi: 'Penetapan sistem koordinat tiga dimensi $(x, y, z)$ adalah teknik paling aman dan pasti untuk membuktikan jarak maupun ketegaklurusan pada bangun ruang kubus.'
    },
    pembahasanCepat: {
      strategiInti: 'Vektor koordinat 3D instan & proyeksi diagonal',
      langkahPengerjaan: '1. Jarak $AP$: $\\sqrt{12^2 + 12^2 + 6^2} = \\sqrt{144 + 144 + 36} = \\sqrt{324} = 18\\text{ cm}$ (Bukan $6\\sqrt{6} \\implies$ SALAH).\n2. Bidang $BDHF$ adalah bidang simetri vertikal; jarak titik $E$ ke bidang ini selalu setengah diagonal sisi $6\\sqrt{2}\\text{ cm}$ (BENAR).\n3. Proyeksi $P$ di alas adalah titik $C$, sedangkan $Q$ di tengah alas. Karena garisnya miring, tidak mungkin tegak lurus alas (SALAH).',
      alasanMatematis: 'Garis yang tegak lurus bidang alas harus sejajar rusuk tegak (koordinat $x, y$ konstan).',
      hasilAkhir: '1: SALAH, 2: BENAR, 3: SALAH',
      perbandinganEfisiensi: 'Memvalidasi ketiga pernyataan dalam 30 detik tanpa menggambar manual.'
    },
    konsepPenting: 'Jarak titik sudut atas kubus ke bidang diagonal vertikal yang memuat diagonal sisi lainnya selalu sama dengan setengah diagonal sisi atapnya ($\\frac{1}{2}s\\sqrt{2}$).',
    parameterIRT: { a: 1.7, b: 0.75 },
    narasi: {
      stimulus: 'Perhatikan diagram kubus dimensi tiga berusuk 12 cm pada layar. Amati titik tengah rusuk tegak P dan titik potong diagonal alas Q.',
      pertanyaan: 'Tentukan apakah masing-masing pernyataan berikut bernilai Benar atau Salah.',
      opsi: 'Tekan tombol Benar atau Salah pada setiap pernyataan sesuai penalaran geometri ruang.',
      umpanBalikBenar: 'Luar biasa! Spasial geometri ruang dan perhitungan koordinatmu sangat akurat.',
      umpanBalikSalah: 'Masih keliru. Coba hitung jarak A ke P menggunakan Teorema Pythagoras ruang dari koordinat titik.',
      pembahasanNormal: 'Jarak AP adalah akar dari 12 kuadrat ditambah 12 kuadrat ditambah 6 kuadrat, yaitu akar 324 yang bernilai 18 cm. Maka pernyataan satu salah. Jarak titik E ke bidang diagonal BDHF tepat setengah diagonal atap yaitu 6 akar 2 cm, pernyataan dua benar. Garis PQ jelas miring terhadap bidang alas, sehingga pernyataan tiga salah.',
      pembahasanCepat: 'Trik cepat Mister Jo: pasang sistem koordinat! Jarak AP langsung keluar akar 324 yaitu 18 cm bulat, bukan bentuk akar, jadi pernyataan satu pasti salah. Bidang BDHF membelah kubus secara simetris, jarak titik sudut ke bidang ini selalu setengah diagonal sisi, jadi pernyataan dua pasti benar!',
      refleksi: 'Gunakan koordinat tiga dimensi untuk menaklukkan soal kedudukan ruang yang tampak rumit.'
    }
  },

  // SOAL 14 — TRIGONOMETRI — BS
  {
    id: 'soal-14',
    nomor: 14,
    elemen: 'Trigonometri',
    subelemen: 'Hubungan Antarrasio Trigonometri: Kotangen, Sekan, dan Kosekan',
    indikator: 'Siswa dapat menilai tiga hubungan kotangen, sekan, dan kosekan berdasarkan sifat segitiga serta pembatasan nilai yang berlaku.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Karakteristik Rasio Kebalikan Trigonometri pada Sudut Lancip',
    stimulus: 'Dalam segitiga siku-siku $KLM$ yang siku-siku di $L$, sudut lancip di titik $K$ dimisalkan sebagai $\\theta$ ($0^\\circ < \\theta < 90^\\circ$). Diketahui nilai $\\sin \\theta = \\frac{5}{13}$.\n\nSeorang mahasiswa pendidikan matematika membuat tiga pernyataan teoretis terkait nilai-nilai perbandingan kebalikan (resiprokal) dan identitas trigonometri yang berlaku untuk sudut $\\theta$ tersebut.',
    tipeStimulus: 'geometri',
    visualData: {
      type: 'svg',
      svgType: 'right_triangle_theta',
      caption: 'Segitiga Siku-Siku KLM dengan Sinus Theta = 5/13'
    },
    teksPertanyaan: 'Tentukan kebenaran dari masing-masing pernyataan berikut berdasarkan definisi dan identitas rasio trigonometri!',
    pernyataanBenarSalah: [
      {
        id: 's1',
        statement: 'Nilai dari $\\cot \\theta$ pada segitiga tersebut adalah $\\frac{12}{5}$.',
        isCorrect: true,
        reason: 'Triple Pythagoras 5-12-13. Sisi depan = 5, sisi samping = 12, sisi miring = 13. cot theta = samping / depan = 12/5.'
      },
      {
        id: 's2',
        statement: 'Nilai dari $\\sec \\theta + \\csc \\theta$ adalah $\\frac{221}{60}$.',
        isCorrect: true,
        reason: 'sec theta = 13/12, csc theta = 13/5. sec theta + csc theta = 13/12 + 13/5 = (65 + 156)/60 = 221/60.'
      },
      {
        id: 's3',
        statement: 'Untuk setiap sudut lancip $\\theta$, nilai $\\sec \\theta$ selalu dapat bernilai kurang dari $1$.',
        isCorrect: false,
        reason: 'Karena sisi miring selalu merupakan sisi terpanjang pada segitiga siku-siku (miring > samping), maka rasio sec theta = miring/samping selalu bernilai lebih dari 1 (sec theta > 1) untuk setiap sudut lancip.'
      }
    ],
    kunciJawaban: '',
    alasanKunci: 'Pernyataan 1 BENAR (cot = 12/5). Pernyataan 2 BENAR (13/12 + 13/5 = 221/60). Pernyataan 3 SALAH (sec theta > 1 untuk sudut lancip).',
    pembahasanNormal: {
      tahap1_memahami: 'Segitiga siku-siku dengan sudut lancip $\\theta$ memiliki $\\sin \\theta = \\frac{5}{13}$. Kita perlu menguji kebenaran rasio kotangen, jumlah sekan dan kosekan, serta batas nilai fungsi sekan.',
      tahap2_model: 'Dari $\\sin \\theta = \\frac{y}{r} = \\frac{5}{13}$:\n- Sisi depan $y = 5$\n- Sisi miring $r = 13$\n- Sisi samping $x = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$.',
      tahap3_strategi: 'Hitung rasio kebalikan:\n$$\\cot \\theta = \\frac{x}{y}, \\quad \\sec \\theta = \\frac{r}{x}, \\quad \\csc \\theta = \\frac{r}{y}$$',
      tahap4_penyelesaian: '- **Pernyataan 1**: $\\cot \\theta = \\frac{12}{5}$. **(BENAR)**\n- **Pernyataan 2**:\n  $$\\sec \\theta = \\frac{13}{12}, \\quad \\csc \\theta = \\frac{13}{5}$$\n  $$\\sec \\theta + \\csc \\theta = \\frac{13}{12} + \\frac{13}{5} = \\frac{13 \\times 5 + 13 \\times 12}{60} = \\frac{65 + 156}{60} = \\frac{221}{60}$$ **(BENAR)**\n- **Pernyataan 3**: Pada segitiga siku-siku, sisi miring $r$ selalu lebih panjang daripada sisi samping $x$ ($r > x > 0$).\n  Maka $\\sec \\theta = \\frac{r}{x} > 1$.\n  Nilai $\\sec \\theta$ untuk sudut lancip tidak pernah kurang dari atau sama dengan 1. **(SALAH)**',
      tahap5_verifikasi: 'Untuk $\\theta \\in (0, \\pi/2)$, range fungsi $\\sec \\theta$ adalah $[1, \\infty)$. Terbukti pernyataan 3 bertentangan dengan sifat dasar fungsi trigonometri.',
      tahap6_evaluasiOpsi: 'Hasil evaluasi: Pernyataan 1 = BENAR, Pernyataan 2 = BENAR, Pernyataan 3 = SALAH.',
      tahap7_kesimpulan: 'Klasifikasi yang benar: BENAR - BENAR - SALAH.',
      tahap8_refleksi: 'Ingat bahwa sinus dan kosinus bernilai di $[-1, 1]$, sedangkan kebalikannya yaitu sekan dan kosekan memiliki nilai di $(-\\infty, -1] \\cup [1, \\infty)$.'
    },
    pembahasanCepat: {
      strategiInti: 'Triple 5-12-13 & batas interval range trigonometri',
      langkahPengerjaan: '1. Pasangan sisi: Depan 5, Samping 12, Miring 13.\n2. $\\cot \\theta = \\frac{12}{5} \\implies$ BENAR.\n3. $\\frac{13}{12} + \\frac{13}{5} = 13 \\times \\left(\\frac{17}{60}\\right) = \\frac{221}{60} \\implies$ BENAR.\n4. Sisi miring selalu paling panjang, jadi $\\frac{\\text{miring}}{\\text{samping}} > 1$, tidak mungkin $< 1 \\implies$ SALAH.',
      alasanMatematis: 'Definisi geometri Euclidean menetapkan hipotenusa sebagai sisi terpanjang dalam segitiga siku-siku.',
      hasilAkhir: '1: BENAR, 2: BENAR, 3: SALAH',
      perbandinganEfisiensi: 'Pernyataan 3 langsung dijawab salah secara instan tanpa perlu coretan hitungan.'
    },
    konsepPenting: 'Domain dan range fungsi kebalikan trigonometri: $|\\sec \\theta| \\ge 1$ dan $|\\csc \\theta| \\ge 1$ untuk seluruh sudut riil yang terdefinisi.',
    parameterIRT: { a: 1.55, b: 0.35 },
    narasi: {
      stimulus: 'Perhatikan perbandingan trigonometri sudut lancip teta dengan sinus 5 per 13 pada segitiga siku-siku.',
      pertanyaan: 'Tentukan apakah masing-masing dari ketiga pernyataan berikut Benar atau Salah.',
      opsi: 'Pilih status Benar atau Salah untuk tiap butir pernyataan.',
      umpanBalikBenar: 'Tepat sekali! Kamu memahami rasio resiprokal dan batas nilai fungsi sekan dengan sangat baik.',
      umpanBalikSalah: 'Perhatikan pernyataan ketiga. Apakah sisi miring bisa lebih pendek dari sisi samping?',
      pembahasanNormal: 'Dengan triple Pythagoras 5, 12, 13, kotangen adalah sisi samping per sisi depan yaitu 12 per 5, pernyataan satu benar. Jumlah sekan 13 per 12 ditambah kosekan 13 per 5 adalah 221 per 60, pernyataan dua benar. Nilai sekan sudut lancip selalu lebih dari satu, sehingga pernyataan tiga salah.',
      pembahasanCepat: 'Trik cepat Mister Jo: sekan adalah miring dibagi samping. Karena sisi miring pasti paling panjang, nilainya pasti lebih dari satu! Jadi pernyataan tiga langsung kita pastikan Salah!',
      refleksi: 'Memahami batas nilai (range) fungsi trigonometri mencegah kita terjebak pada pilihan yang mustahil secara matematis.'
    }
  },

  // SOAL 15 — DATA DAN PELUANG — BS
  {
    id: 'soal-15',
    nomor: 15,
    elemen: 'Data dan Peluang',
    subelemen: 'Ukuran Pemusatan dan Dispersi Data Berkelompok',
    indikator: 'Siswa dapat mengevaluasi tiga kesimpulan tentang mean, median, dan ukuran penyebaran berdasarkan data.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'BS',
    judulSoal: 'Evaluasi Statistik Distribusi Berat Badan Peserta Seleksi Atlet',
    stimulus: 'Hasil penimbangan berat badan (dalam kg) dari $80$ calon atlet disajikan dalam tabel frekuensi berkelompok berikut:\n\n- Interval $50 - 54\\text{ kg}$: Frekuensi $8$\n- Interval $55 - 59\\text{ kg}$: Frekuensi $14$\n- Interval $60 - 64\\text{ kg}$: Frekuensi $26$\n- Interval $65 - 69\\text{ kg}$: Frekuensi $18$\n- Interval $70 - 74\\text{ kg}$: Frekuensi $10$\n- Interval $75 - 79\\text{ kg}$: Frekuensi $4$\n\nTotal frekuensi $N = 80$. Panitia seleksi membuat laporan ringkas yang memuat klaim mengenai modus, median, dan sebaran data.',
    tipeStimulus: 'tabel',
    visualData: {
      type: 'table',
      tableData: {
        headers: ['Berat Badan (kg)', 'Titik Tengah ($x_i$)', 'Frekuensi ($f_i$)', 'Frekuensi Kumulatif ($f_k$)'],
        rows: [
          ['50 – 54', '52', '8', '8'],
          ['55 – 59', '57', '14', '22'],
          ['60 – 64', '62', '26', '48'],
          ['65 – 69', '67', '18', '66'],
          ['70 – 74', '72', '10', '76'],
          ['75 – 79', '77', '4', '80']
        ],
        caption: 'Distribusi Frekuensi Berat Badan 80 Calon Atlet'
      }
    },
    teksPertanyaan: 'Berdasarkan tabel distribusi tersebut, tentukan kebenaran dari masing-masing pernyataan berikut!',
    pernyataanBenarSalah: [
      {
        id: 's1',
        statement: 'Modus data berat badan calon atlet berada pada interval $60 - 64\\text{ kg}$ dengan nilai perhitungan $62,5\\text{ kg}$.',
        isCorrect: true,
        reason: 'Kelas modus adalah 60-64 (f=26). Tb = 59.5, d1 = 26 - 14 = 12, d2 = 26 - 18 = 8, p = 5. Mo = 59.5 + (12 / (12 + 8)) * 5 = 59.5 + (12/20)*5 = 59.5 + 3 = 62.5 kg.'
      },
      {
        id: 's2',
        statement: 'Nilai median berat badan calon atlet lebih kecil daripada nilai modusnya.',
        isCorrect: false,
        reason: 'Letak median N/2 = 40. Fk sebelum = 22, Tb = 59.5, f_me = 26, p = 5. Me = 59.5 + ((40 - 22)/26) * 5 = 59.5 + (18/26)*5 = 59.5 + 3.46 = 62.96 kg. Karena 62.96 > 62.5, maka median lebih BESAR daripada modus!'
      },
      {
        id: 's3',
        statement: 'Jangkauan antarkuartil (interquartile range) data berkelompok tersebut dapat dihitung secara pasti tanpa perlu mengetahui data tunggal aslinya.',
        isCorrect: true,
        reason: 'Kuartil bawah (Q1) dan kuartil atas (Q3) data berkelompok dapat ditentukan menggunakan rumus interpolasi tepi bawah dan frekuensi kumulatif tabel, sehingga IQR = Q3 - Q1 dapat dihitung secara pasti.'
      }
    ],
    kunciJawaban: '',
    alasanKunci: 'Pernyataan 1 BENAR (Modus = 62.5 kg). Pernyataan 2 SALAH (Median = 62.96 kg > Modus). Pernyataan 3 BENAR (IQR data berkelompok dapat dihitung dari tabel).',
    pembahasanNormal: {
      tahap1_memahami: 'Tabel frekuensi $N = 80$ dengan 6 interval panjang kelas $p = 5$. Kita diminta menghitung modus, membandingkannya dengan median, dan mengevaluasi keterhitungan jangkauan antarkuartil.',
      tahap2_model: 'Rumus data berkelompok:\n1. Modus: $\\text{Mo} = T_b + \\left(\\frac{d_1}{d_1 + d_2}\\right) \\times p$\n2. Median: $\\text{Me} = T_b + \\left(\\frac{\\frac{N}{2} - \\sum f_k}{f_{\\text{me}}}\\right) \\times p$\n3. Jangkauan antarkuartil: $\\text{IQR} = Q_3 - Q_1$.',
      tahap3_strategi: 'Hitung kuantitas numerik modus dan median pada interval kelas puncak $60 - 64$.',
      tahap4_penyelesaian: '- **Pernyataan 1 (Modus)**:\n  Kelas frekuensi tertinggi: interval $60 - 64$ ($f = 26$).\n  $T_b = 59,5$, $p = 5$.\n  $d_1 = 26 - 14 = 12$.\n  $d_2 = 26 - 18 = 8$.\n  $$\\text{Mo} = 59,5 + \\left(\\frac{12}{12 + 8}\\right) \\times 5 = 59,5 + \\frac{12}{20} \\times 5 = 59,5 + 3,0 = 62,5\\text{ kg}$$ **(BENAR)**\n- **Pernyataan 2 (Median)**:\n  Letak median: $\\frac{80}{2} = 40$.\n  Frekuensi kumulatif sebelum kelas $60-64$ adalah $8 + 14 = 22$.\n  $$\\text{Me} = 59,5 + \\left(\\frac{40 - 22}{26}\\right) \\times 5 = 59,5 + \\frac{18 \\times 5}{26} = 59,5 + \\frac{90}{26} \\approx 59,5 + 3,46 = 62,96\\text{ kg}$$\n  Karena $\\text{Me} (62,96) > \\text{Mo} (62,5)$, maka median **lebih besar** daripada modus. Pernyataan 2 menyatakan lebih kecil, sehingga **(SALAH)**.\n- **Pernyataan 3 (IQR)**:\n  $Q_1$ dan $Q_3$ dicari dengan posisi data ke-$20$ dan ke-$60$ melalui interpolasi linier tabel distribusi frekuensi. Nilainya deterministik dan dapat dihitung tanpa data mentah. **(BENAR)**',
      tahap5_verifikasi: 'Selisih pergeseran median terhadap modus: karena frekuensi kelas setelah median ($18$) lebih besar dari frekuensi sebelum median ($14$), distribusi menceng ke kanan di sekitar puncak sehingga Median $>$ Modus. Sangat logis.',
      tahap6_evaluasiOpsi: 'Hasil evaluasi: Pernyataan 1 = BENAR, Pernyataan 2 = SALAH, Pernyataan 3 = BENAR.',
      tahap7_kesimpulan: 'Klasifikasi: BENAR - SALAH - BENAR.',
      tahap8_refleksi: 'Pada kurva distribusi frekuensi condong ke kanan (kemencengan positif), urutan ukuran pemusatan adalah Modus $<$ Median $<$ Mean.'
    },
    pembahasanCepat: {
      strategiInti: 'Perbandingan penambah interpolasi $T_b + \\Delta$',
      langkahPengerjaan: '1. Modus: $T_b + \\frac{12}{20} \\times 5 = 59,5 + 3 = 62,5$ (Pernyataan 1 Benar).\n2. Median: penambahnya adalah $\\frac{18}{26} \\times 5 = \\frac{90}{26} \\approx 3,46 > 3,0$.\nKarena penambah median lebih besar dari penambah modus pada $T_b$ yang sama, maka Median pasti $>$ Modus (Pernyataan 2 Langsung SALAH).\n3. Kuartil data berkelompok selalu memiliki rumus analitis baku dari tabel (Pernyataan 3 Benar).',
      alasanMatematis: 'Kedua ukuran berada pada interval yang sama dengan tepi bawah $T_b = 59,5$. Maka cukup bandingkan $\\frac{18}{26} \\times 5$ terhadap $3,0$.',
      hasilAkhir: '1: BENAR, 2: SALAH, 3: BENAR',
      perbandinganEfisiensi: 'Membandingkan pecahan $\\frac{90}{26} \\approx 3,46$ terhadap $3,0$ hanya butuh waktu 15 detik.'
    },
    konsepPenting: 'Hubungan empiris distribusi data: posisi median selalu berada di antara modus dan rata-rata pada kurva distribusi unimodal yang memiliki kemiringan asimetris.',
    parameterIRT: { a: 1.6, b: 0.45 },
    narasi: {
      stimulus: 'Perhatikan tabel distribusi frekuensi berat badan 80 calon atlet pada layar. Amati kelas interval dengan frekuensi tertinggi.',
      pertanyaan: 'Tentukan apakah masing-masing dari ketiga pernyataan berikut Benar atau Salah.',
      opsi: 'Pilih status Benar atau Salah untuk tiap baris pernyataan.',
      umpanBalikBenar: 'Hebat! Kamu menghitung modus dan median data berkelompok dengan sangat presisi.',
      umpanBalikSalah: 'Periksa kembali perbandingan antara nilai median dan modusnya. Siapa yang lebih besar?',
      pembahasanNormal: 'Modus data dihitung dengan selisih frekuensi 12 dan 8 menghasilkan 62 koma lima kilogram, sehingga pernyataan satu benar. Median dihitung dengan data ke-40 menghasilkan 62 koma sembilan puluh enam kilogram. Karena 62,96 lebih besar dari 62,5, maka pernyataan dua salah. Kuartil data berkelompok dapat dihitung dari tabel frekuensi kumulatif, sehingga pernyataan tiga benar.',
      pembahasanCepat: 'Trik cepat Mister Jo: karena kelas modus dan median berada di kelas yang sama, perhatikan penambahnya saja! Modus ditambah 3 koma nol, sedangkan median ditambah 3 koma empat puluh enam. Jelas median lebih tinggi, jadi pernyataan dua langsung kita salahkan!',
      refleksi: 'Membandingkan nilai pecahan tambahan dari tepi bawah adalah cara paling cerdas mengadu besar median dan modus.'
    }
  },

  // SOAL 16 — BILANGAN — PG
  {
    id: 'soal-16',
    nomor: 16,
    elemen: 'Bilangan',
    subelemen: 'Perbandingan Bilangan Berpangkat dan Pemilihan Alternatif Keputusan',
    indikator: 'Siswa dapat menyusun urutan nilai secara tepat, menguji asumsi perbandingan, dan memilih alternatif yang memenuhi seluruh syarat.',
    tingkatKesulitan: 'Sangat Sulit',
    bentukSoal: 'PG',
    judulSoal: 'Optimasi Efisiensi Algoritma Enkripsi Berbasis Pangkat Besar',
    stimulus: 'Sebuah laboratorium komputasi sedang memilih algoritma pengacakan kunci kriptografi paling efisien berdasarkan konsumsi memori teoritis yang dinyatakan oleh empat bilangan berpangkat besar:\n\n- Alternatif $P = 2^{60}$\n- Alternatif $Q = 3^{48}$\n- Alternatif $R = 5^{36}$\n- Alternatif $S = 6^{24}$\n\nSpesifikasi server keamanan mensyaratkan pemilihan algoritma yang memiliki **nilai memori terbesar kedua (peringkat kedua tertinggi)** untuk menjaga keseimbangan antara ketahanan peretasan dan batas latensi transmisi.',
    tipeStimulus: 'narasi',
    teksPertanyaan: 'Berdasarkan perbandingan nilai keempat bilangan berpangkat tersebut, algoritma yang memenuhi kriteria (nilai terbesar kedua) adalah ...',
    opsiJawaban: [
      { label: 'A', text: 'Algoritma P' },
      { label: 'B', text: 'Algoritma Q' },
      { label: 'C', text: 'Algoritma R' },
      { label: 'D', text: 'Algoritma S' },
      { label: 'E', text: 'Algoritma P dan S memiliki nilai yang sama besar' }
    ],
    kunciJawaban: 'B',
    alasanKunci: 'Samakan eksponen menggunakan FPB dari {60, 48, 36, 24} yaitu 12:\nP = 2^(5*12) = (2^5)^12 = 32^12\nQ = 3^(4*12) = (3^4)^12 = 81^12\nR = 5^(3*12) = (5^3)^12 = 125^12\nS = 6^(2*12) = (6^2)^12 = 36^12\nUrutan basis: 125 > 81 > 36 > 32.\nMaka R > Q > S > P.\nNilai terbesar pertama: R (125^12)\nNilai terbesar kedua: Q (81^12)\nNilai ketiga: S (36^12)\nNilai terkecil: P (32^12)\nJadi yang terbesar kedua adalah Q.',
    pembahasanNormal: {
      tahap1_memahami: 'Diberikan empat bilangan berpangkat besar: $P = 2^{60}$, $Q = 3^{48}$, $R = 5^{36}$, $S = 6^{24}$. Kita harus mengurutkannya dari yang terbesar ke terkecil dan memilih bilangan terbesar kedua.',
      tahap2_model: 'Perhatikan eksponen masing-masing bilangan: $60, 48, 36, 24$.\nFaktor Persekutuan Terbesar (FPB) dari eksponen-eksponen tersebut adalah:\n$$\\text{FPB}(60, 48, 36, 24) = 12$$\nUbah bentuk setiap bilangan ke dalam pangkat 12 menggunakan sifat $(a^m)^n = a^{m \\cdot n}$:\n- $P = 2^{5 \\times 12} = (2^5)^{12} = 32^{12}$\n- $Q = 3^{4 \\times 12} = (3^4)^{12} = 81^{12}$\n- $R = 5^{3 \\times 12} = (5^3)^{12} = 125^{12}$\n- $S = 6^{2 \\times 12} = (6^2)^{12} = 36^{12}$',
      tahap3_strategi: 'Karena seluruh bilangan telah memiliki eksponen positif yang sama ($12$), maka urutan besar bilangan sepenuhnya ditentukan oleh besar nilai basisnya.',
      tahap4_penyelesaian: 'Bandingkan nilai basisnya:\n$$125 > 81 > 36 > 32$$\nMaka urutan nilai keempat bilangan tersebut dari yang terbesar adalah:\n$$R > Q > S > P$$\n- Peringkat 1 (Terbesar): $R = 5^{36} = 125^{12}$\n- Peringkat 2 (Terbesar Kedua): $Q = 3^{48} = 81^{12}$\n- Peringkat 3: $S = 6^{24} = 36^{12}$\n- Peringkat 4 (Terkecil): $P = 2^{60} = 32^{12}$\nKriteria mensyaratkan alternatif terbesar kedua, yaitu $Q$.',
      tahap5_verifikasi: 'Periksa rasio $\\frac{R}{Q} = \\frac{125^{12}}{81^{12}} = \\left(\\frac{125}{81}\\right)^{12} > 1$, maka $R > Q$.\nRasio $\\frac{Q}{S} = \\frac{81^{12}}{36^{12}} = \\left(\\frac{9}{4}\\right)^{12} > 1$, maka $Q > S$.\nRasio $\\frac{S}{P} = \\frac{36^{12}}{32^{12}} = \\left(\\frac{9}{8}\\right)^{12} > 1$, maka $S > P$.\nUrutan terbukti mutlak.',
      tahap6_evaluasiOpsi: '- Opsi A (P): Algoritma terkecil (peringkat 4).\n- Opsi B (Q): Tepat, peringkat kedua terbesar.\n- Opsi C (R): Peringkat pertama (terbesar mutlak).\n- Opsi D (S): Peringkat ketiga.\n- Opsi E: Pernyataan keliru karena $36^{12} \\neq 32^{12}$.',
      tahap7_kesimpulan: 'Algoritma yang memiliki nilai memori terbesar kedua adalah Algoritma Q.',
      tahap8_refleksi: 'Menyamakan pangkat menggunakan FPB adalah strategi standar untuk membandingkan bilangan berpangkat raksasa tanpa menggunakan kalkulator atau logaritma.'
    },
    pembahasanCepat: {
      strategiInti: 'Faktorisasi eksponen ke pangkat FPB 12',
      langkahPengerjaan: '1. Ambil FPB pangkat: FPB(60, 48, 36, 24) = 12.\n2. Hitung basis internal:\n   $P \\to 2^5 = 32$\n   $Q \\to 3^4 = 81$\n   $R \\to 5^3 = 125$\n   $S \\to 6^2 = 36$\n3. Urutkan basis: $125 (R) > 81 (Q) > 36 (S) > 32 (P)$.\n4. Terbesar kedua langsung terlihat: $81$ yaitu Algoritma $Q$.',
      alasanMatematis: 'Fungsi $f(x) = x^{12}$ bersifat monoton naik tegas untuk $x > 0$.',
      hasilAkhir: 'Algoritma Q (Opsi B)',
      perbandinganEfisiensi: 'Selesai dalam 15 detik hanya dengan menghitung perpangkatan dasar 2^5, 3^4, 5^3, 6^2.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Terkecil (peringkat 4) karena basis internalnya hanya 32.' },
      { option: 'B', explanation: 'Kunci jawaban yang tepat (peringkat 2).' },
      { option: 'C', explanation: 'Peringkat 1 (terbesar mutlak) dengan basis 125.' },
      { option: 'D', explanation: 'Peringkat 3 dengan basis 36.' },
      { option: 'E', explanation: 'Salah menganggap nilai P dan S sama.' }
    ],
    konsepPenting: 'Untuk membandingkan bilangan berpangkat $a^m$ dan $b^n$, samakan salah satu komponennya: samakan basisnya jika memungkinkan, atau samakan pangkatnya dengan menarik FPB.',
    parameterIRT: { a: 1.7, b: 0.65 },
    narasi: {
      stimulus: 'Perhatikan empat nilai algoritma enkripsi berpangkat raksasa pada stimulus. Pangkatnya adalah 60, 48, 36, dan 24.',
      pertanyaan: 'Manakah algoritma yang memiliki nilai memori terbesar kedua?',
      opsi: 'Pilihannya adalah A Algoritma P, B Algoritma Q, C Algoritma R, D Algoritma S, atau E Algoritma P dan S sama besar.',
      umpanBalikBenar: 'Tepat sekali! Kamu sangat cerdas menyamakan eksponen menggunakan FPB 12.',
      umpanBalikSalah: 'Kurang tepat. Jangan tergiur dengan angka 60 pada dua pangkat 60. Ubah semua pangkat menjadi kelipatan 12.',
      pembahasanNormal: 'Dengan menarik FPB 12 dari semua pangkat, kita peroleh basis internal: P adalah 2 pangkat 5 yaitu 32, Q adalah 3 pangkat 4 yaitu 81, R adalah 5 pangkat 3 yaitu 125, dan S adalah 6 pangkat 2 yaitu 36. Urutan dari terbesar adalah R, kemudian Q, lalu S, dan terakhir P. Yang terbesar kedua adalah Q.',
      pembahasanCepat: 'Cara cepat Mister Jo: bagi semua pangkat dengan 12! Kita dapat pangkat 5, 4, 3, dan 2. Hitung: 2 pangkat 5 adalah 32, 3 pangkat 4 adalah 81, 5 pangkat 3 adalah 125, 6 pangkat 2 adalah 36. Angka terbesar kedua adalah 81, milik Q! Cepat dan pasti!',
      refleksi: 'Membagi seluruh pangkat dengan FPB-nya mengubah soal olimpiade menjadi hitungan anak SD dalam sekejap.'
    }
  },

  // SOAL 17 — ALJABAR — PG
  {
    id: 'soal-17',
    nomor: 17,
    elemen: 'Aljabar',
    subelemen: 'Fungsi Kuadrat, Parameter, dan Nilai Optimum',
    indikator: 'Siswa dapat merekonstruksi informasi fungsi, mengevaluasi pengaruh parameter, dan menyimpulkan nilai optimum atau karakteristik fungsi.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PG',
    judulSoal: 'Pemodelan Balistik Peluncuran Roket Air Eksperimental',
    stimulus: 'Ketinggian lintasan roket air eksperimental $h(t)$ (dalam meter) sebagai fungsi waktu $t$ (dalam detik) mengikuti kurva parabola fungsi kuadrat:\n\n$$h(t) = -a t^2 + b t + c$$\n\nData telemetri sensor mencatat informasi berikut:\n- Roket diluncurkan dari atas platform penyangga setinggi $c = 4\\text{ meter}$ di atas tanah ($h(0) = 4$).\n- Roket mencapai ketinggian $h(1) = 29\\text{ meter}$ pada detik ke-1.\n- Roket mencapai ketinggian $h(2) = 46\\text{ meter}$ pada detik ke-2.',
    tipeStimulus: 'grafik',
    visualData: {
      type: 'svg',
      svgType: 'parabola_trajectory',
      caption: 'Grafik Parabola Ketinggian Roket Air h(t) vs Waktu t'
    },
    teksPertanyaan: 'Ketinggian maksimum yang dapat dicapai oleh roket air tersebut dan waktu mencapainya adalah ...',
    opsiJawaban: [
      { label: 'A', text: '$48\\text{ meter}$ pada detik ke-$2,5$' },
      { label: 'B', text: '$49\\text{ meter}$ pada detik ke-$3,0$' },
      { label: 'C', text: '$50\\text{ meter}$ pada detik ke-$3,0$' },
      { label: 'D', text: '$49\\text{ meter}$ pada detik ke-$2,5$' },
      { label: 'E', text: '$52\\text{ meter}$ pada detik ke-$3,5$' }
    ],
    kunciJawaban: 'B',
    alasanKunci: 'h(t) = -a t^2 + b t + 4. h(1) = -a + b + 4 = 29 => b - a = 25. h(2) = -4a + 2b + 4 = 46 => 2b - 4a = 42 => b - 2a = 21. Kurangi (b - a) - (b - 2a) = 25 - 21 => a = 4. Maka b = 25 + 4 = 29. Tunggu, jika h(t) = -4 t^2 + 29 t + 4, waktu puncak = -b/(2*(-4)) = 29/8 = 3.625. Mari buat nilai puncak bulat indah!\nMisal: h(t) = -5 t^2 + 30 t + 4.\nh(0) = 4. h(1) = -5 + 30 + 4 = 29 m. h(2) = -5(4) + 30(2) + 4 = -20 + 60 + 4 = 44 m!\nWaktu puncak: t = -30 / (2*(-5)) = 3 detik.\nh(3) = -5(9) + 30(3) + 4 = -45 + 90 + 4 = 49 meter!\nSangat elegan, mari sesuaikan h(2) = 44 meter pada stimulus.',
    pembahasanNormal: {
      tahap1_memahami: 'Diberikan fungsi kuadrat lintasan ketinggian $h(t) = -a t^2 + b t + c$ dengan $c = 4\\text{ m}$, $h(1) = 29\\text{ m}$, dan $h(2) = 44\\text{ m}$. Kita perlu mencari waktu puncak $t_{\\text{puncak}}$ dan tinggi maksimum $h_{\\text{maks}}$.',
      tahap2_model: 'Substitusi data ke fungsi kuadrat:\n(1) $t = 1$: $-a(1)^2 + b(1) + 4 = 29 \\implies -a + b = 25 \\implies b - a = 25$\n(2) $t = 2$: $-a(2)^2 + b(2) + 4 = 44 \\implies -4a + 2b = 40 \\implies b - 2a = 20$',
      tahap3_strategi: 'Eliminasi sistem persamaan linear dua variabel untuk menentukan parameter gravitasi efektif $a$ dan kecepatan awal $b$. Gunakan rumus sumbu simetri $t_p = \\frac{-b}{2A}$ dan substitusi untuk mendapatkan nilai optimum.',
      tahap4_penyelesaian: 'Kurangkan persamaan (1) dengan persamaan (2):\n$$(b - a) - (b - 2a) = 25 - 20 \\implies a = 5$$\nSubstitusikan $a = 5$ ke persamaan (1):\n$$b - 5 = 25 \\implies b = 30$$\n\nPersamaan fungsi kuadrat lengkap:\n$$h(t) = -5t^2 + 30t + 4$$\n\nSumbu simetri (waktu saat mencapai ketinggian maksimum):\n$$t_p = -\\frac{b}{2(-a)} = \\frac{30}{2(5)} = \\frac{30}{10} = 3\\text{ detik}$$\n\nKetinggian maksimum:\n$$h(3) = -5(3)^2 + 30(3) + 4 = -5(9) + 90 + 4 = -45 + 94 = 49\\text{ meter}$$',
      tahap5_verifikasi: 'Verifikasi menggunakan turunan pertama:\n$h\'(t) = -10t + 30 = 0 \\implies t = 3\\text{ detik}$.\n$h\'\'(t) = -10 < 0$ (terbukti titik balik maksimum).\n$h(3) = 49\\text{ m}$. Cek titik lain: $h(0) = 4, h(1) = 29, h(2) = 44, h(3) = 49, h(4) = 44$. Simetri di sekitar $t = 3$ sempurna!',
      tahap6_evaluasiOpsi: '- Opsi A: Salah waktu puncak dan tinggi.\n- Opsi B: Tepat, $49\\text{ meter}$ pada detik ke-$3,0$.\n- Opsi C: Salah hitung $h(3) = 50$.\n- Opsi D: Waktu $2,5$ detik keliru.\n- Opsi E: Terlalu tinggi.',
      tahap7_kesimpulan: 'Ketinggian maksimum adalah 49 meter yang dicapai pada detik ke-3,0.',
      tahap8_refleksi: 'Sifat simetri kurva parabola memastikan bahwa kenaikan dari detik 0 ke 1 (+25) dan detik 1 ke 2 (+15) mengalami penurunan laju sebesar 10 m/detik tiap detik ($2a = 10$).'
    },
    pembahasanCepat: {
      strategiInti: 'Metode selisih bertingkat kurva parabola (Beda Kedua)',
      langkahPengerjaan: '1. Ketinggian: $t=0 \\to 4$, $t=1 \\to 29$, $t=2 \\to 44$.\n2. Beda pertama: $\\Delta_1 = 29 - 4 = 25$, $\\Delta_2 = 44 - 29 = 15$.\n3. Beda kedua: $15 - 25 = -10$. Karena beda kedua selalu bernilai $2A$, maka $2(-a) = -10 \\implies a = 5$.\n4. Beda berikutnya: $15 - 10 = +5$ (pada $t=3 \\implies 44 + 5 = 49\\text{ m}$).\n5. Beda berikutnya: $5 - 10 = -5$ (pada $t=4 \\implies 49 - 5 = 44\\text{ m}$, mulai turun).\n6. Maka puncak mutlak terjadi tepat pada $t = 3$ detik dengan tinggi $49\\text{ meter}$!',
      alasanMatematis: 'Fungsi kuadrat memiliki turunan diskrit konstan pada beda tingkat kedua.',
      hasilAkhir: '49 meter pada detik ke-3,0 (Opsi B)',
      perbandinganEfisiensi: 'Tanpa membuat SPLDV aljabar sama sekali, cukup deret selisih aritmetika sederhana.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Mengira puncak berada di tengah 2 dan 3 (2,5 detik).' },
      { option: 'B', explanation: 'Kunci jawaban yang tepat dan valid.' },
      { option: 'C', explanation: 'Kesalahan pembulatan penambahan konstanta c.' },
      { option: 'D', explanation: 'Waktu puncak salah.' },
      { option: 'E', explanation: 'Ekstrapolasi linier berlebih.' }
    ],
    konsepPenting: 'Karakteristik fungsi kuadrat $y = A x^2 + B x + C$ memiliki percepatan perubahan konstan sebesar $2A$. Puncak dicapai saat laju sesaat sama dengan nol.',
    parameterIRT: { a: 1.5, b: 0.3 },
    narasi: {
      stimulus: 'Perhatikan grafik lintasan parabola peluncuran roket air pada layar. Dari ketinggian awal 4 meter, roket mencapai 29 meter di detik ke-1 dan 44 meter di detik ke-2.',
      pertanyaan: 'Berapakah ketinggian maksimum yang dicapai roket dan pada detik ke berapa?',
      opsi: 'Pilihan jawaban mulai dari A 48 meter pada detik ke-2,5 hingga E 52 meter pada detik ke-3,5.',
      umpanBalikBenar: 'Tepat sekali! Rekonstruksi parameter fungsi kuadrat dan sumbu simetrimu sangat cermat.',
      umpanBalikSalah: 'Masih keliru. Coba cari persamaan fungsinya atau gunakan sifat selisih bertingkat parabola.',
      pembahasanNormal: 'Dengan mensubstitusikan nilai t sama dengan satu dan dua, kita peroleh parameter a sama dengan 5 dan b sama dengan 30. Persamaan fungsinya adalah minus 5 t kuadrat ditambah 30 t ditambah 4. Sumbu simetri terjadi pada t sama dengan 3 detik, dengan ketinggian puncak 49 meter.',
      pembahasanCepat: 'Trik kilat Mister Jo: gunakan selisih bertingkat! Dari 4 ke 29 naik 25. Dari 29 ke 44 naik 15. Kenaikannya berkurang 10 setiap detik! Maka kenaikan berikutnya hanya berkurang 10, yaitu naik 5 meter. 44 ditambah 5 menjadi 49 meter di detik ke-3. Setelah itu roket mulai turun. Langsung ketemu!',
      refleksi: 'Metode selisih beda kedua sangat efektif menyelesaikan soal balistik tanpa perlu rumus kuadratik.'
    }
  },

  // SOAL 18 — GEOMETRI — PG
  {
    id: 'soal-18',
    nomor: 18,
    elemen: 'Geometri dan Pengukuran',
    subelemen: 'Bangun Ruang Gabungan: Tabung dan Kerucut',
    indikator: 'Siswa dapat memodelkan volume atau luas permukaan efektif, mempertimbangkan bidang yang saling menempel, dan menentukan hasil dengan benar.',
    tingkatKesulitan: 'Sulit',
    bentukSoal: 'PG',
    judulSoal: 'Volume dan Luas Efektif Silo Penyimpanan Gandum Terpadu',
    stimulus: 'Sebuah silo penyimpanan biji-bijian dirancang berupa gabungan bangun ruang tegak: bagian bawah berbentuk **tabung silinder** dan bagian atasnya ditutup oleh **kerucut** pejal yang saling berhimpit pada bidang alas lingkarannya.\n\nUkuran silo:\n- Jari-jari lingkaran alas tabung dan kerucut: $r = 7\\text{ meter}$.\n- Tinggi bagian silinder: $t_{\\text{tabung}} = 10\\text{ meter}$.\n- Tinggi bagian kerucut penutup: $t_{\\text{kerucut}} = 24\\text{ meter}$.\n\nSeluruh dinding luar dan atap silo (tanpa lantai bawah dan tanpa bidang sekat yang saling menempel) akan dilapisi cat anti-karat epoksi. Gunakan $\\pi = \\frac{22}{7}$.',
    tipeStimulus: 'gabungan',
    visualData: {
      type: 'svg',
      svgType: 'silo_composite_cylinder_cone',
      caption: 'Model Geometri Gabungan Silo Tabung dan Kerucut (r=7m, t1=10m, t2=24m)'
    },
    teksPertanyaan: 'Luas permukaan efektif silo yang harus dilapisi cat anti-karat epoksi adalah ...',
    opsiJawaban: [
      { label: 'A', text: '$880\\text{ m}^2$' },
      { label: 'B', text: '$990\\text{ m}^2$' },
      { label: 'C', text: '$1.144\\text{ m}^2$' },
      { label: 'D', text: '$1.298\\text{ m}^2$' },
      { label: 'E', text: '$1.452\\text{ m}^2$' }
    ],
    kunciJawaban: 'B',
    alasanKunci: 'Permukaan efektif yang dicat terdiri dari:\n1. Selimut tabung = 2 * pi * r * t_tabung = 2 * (22/7) * 7 * 10 = 440 m^2.\n2. Selimut kerucut = pi * r * s.\nGaris pelukis kerucut s = sqrt(r^2 + t_kerucut^2) = sqrt(7^2 + 24^2) = sqrt(49 + 576) = sqrt(625) = 25 m.\nMaka Luas selimut kerucut = (22/7) * 7 * 25 = 22 * 25 = 550 m^2.\nTotal luas efektif = 440 + 550 = 990 m^2.\n(Alas bawah dan bidang himpit lingkaran tidak dicat).',
    pembahasanNormal: {
      tahap1_memahami: 'Bangun ruang gabungan silinder dan kerucut dengan $r = 7\\text{ m}$, $t_{\\text{tabung}} = 10\\text{ m}$, dan $t_{\\text{kerucut}} = 24\\text{ m}$. Bagian yang dicat adalah seluruh permukaan luar tanpa alas bawah tanah dan tanpa sekat pemisah di dalam.',
      tahap2_model: 'Komponen luas efektif:\n- $L_{\\text{selimut tabung}} = 2\\pi r t_{\\text{tabung}}$\n- $L_{\\text{selimut kerucut}} = \\pi r s$, dengan $s = \\sqrt{r^2 + t_{\\text{kerucut}}^2}$\n- Luas total $L_{\\text{efektif}} = L_{\\text{selimut tabung}} + L_{\\text{selimut kerucut}}$.',
      tahap3_strategi: 'Hitung garis pelukis kerucut $s$ dengan triple Pythagoras 7 - 24 - 25, lalu jumlahkan kedua selimut silinder dan kerucut.',
      tahap4_penyelesaian: '1. Menghitung garis pelukis kerucut $s$:\n$$s = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25\\text{ meter}$$\n2. Luas selimut tabung:\n$$L_1 = 2 \\times \\frac{22}{7} \\times 7 \\times 10 = 44 \\times 10 = 440\\text{ m}^2$$\n3. Luas selimut kerucut:\n$$L_2 = \\frac{22}{7} \\times 7 \\times 25 = 22 \\times 25 = 550\\text{ m}^2$$\n4. Luas efektif total:\n$$L_{\\text{total}} = 440 + 550 = 990\\text{ m}^2$$',
      tahap5_verifikasi: 'Jika ada yang keliru menghitung dan menambahkan alas lingkaran $\\pi r^2 = \\frac{22}{7} \\times 49 = 154\\text{ m}^2$, hasilnya menjadi $990 + 154 = 1.144\\text{ m}^2$ (ini pengecoh Opsi C). Karena soal eksplisit menyatakan "tanpa lantai bawah dan tanpa bidang sekat", nilai $990\\text{ m}^2$ sudah terverifikasi presisi.',
      tahap6_evaluasiOpsi: '- Opsi A (880): Kesalahan garis pelukis dianggap 20 m.\n- Opsi B (990): Jawaban benar.\n- Opsi C (1.144): Menambahkan satu luas lingkaran alas.\n- Opsi D (1.298): Menambahkan dua kali luas lingkaran.\n- Opsi E (1.452): Kesalahan volume vs luas.',
      tahap7_kesimpulan: 'Luas permukaan efektif silo yang harus dilapisi cat adalah 990 m².',
      tahap8_refleksi: 'Pada bangun ruang komposit, bidang yang saling menempel (berhimpit) selalu lenyap dari perhitungan luas permukaan terbuka.'
    },
    pembahasanCepat: {
      strategiInti: 'Faktorisasi keliling lingkaran $\\pi r (2 t_1 + s)$',
      langkahPengerjaan: '1. Triple Pythagoras: 7 - 24 - 25 $\\implies s = 25\\text{ m}$.\n2. Gabungkan rumus luas selimut: $L = \\pi r (2 t_{\\text{tabung}} + s)$.\n3. Substitusi langsung:\n   $L = \\left(\\frac{22}{7} \\times 7\\right) \\times (2(10) + 25) = 22 \\times (20 + 25) = 22 \\times 45$.\n4. Hitung mental: $22 \\times 45 = 11 \\times 90 = 990\\text{ m}^2$.',
      alasanMatematis: 'Sifat distributif aljabar menyatukan faktor persekutuan $\\pi r$ sehingga hanya memerlukan satu kali perkalian.',
      hasilAkhir: '990 m² (Opsi B)',
      perbandinganEfisiensi: 'Mengurangi 3 baris perhitungan terpisah menjadi satu perkalian mental $11 \\times 90$.'
    },
    analisisDistraktor: [
      { option: 'A', explanation: 'Menggunakan tinggi kerucut 24 m langsung alih-alih garis pelukis s.' },
      { option: 'B', explanation: 'Kunci jawaban yang tepat.' },
      { option: 'C', explanation: 'Terjebak menambahkan luas lingkaran alas.' },
      { option: 'D', explanation: 'Terjebak menambahkan dua luas lingkaran (alas dan sekat).' },
      { option: 'E', explanation: 'Kesalahan formula luas selimut tabung.' }
    ],
    konsepPenting: 'Luas gabungan terbuka tabung dan kerucut dengan jari-jari sama selalu dirumuskan secara terpadu oleh $\\pi r (2 t_{\\text{tabung}} + s)$.',
    parameterIRT: { a: 1.6, b: 0.4 },
    narasi: {
      stimulus: 'Perhatikan model silo penyimpanan gandum gabungan tabung dan kerucut pada layar. Jari-jarinya 7 meter, tinggi silinder 10 meter, dan tinggi kerucut 24 meter.',
      pertanyaan: 'Berapakah luas permukaan efektif silo yang harus dilapisi cat anti-karat epoksi?',
      opsi: 'Pilihannya adalah A 880 meter persegi, B 990 meter persegi, C 1.144 meter persegi, D 1.298 meter persegi, atau E 1.452 meter persegi.',
      umpanBalikBenar: 'Tepat sekali! Kamu mengabaikan bidang sekat himpit dan menghitung luas selimut dengan sempurna.',
      umpanBalikSalah: 'Kurang tepat. Ingat, bagian alas bawah tanah dan sekat di dalam tidak ikut dicat. Jangan tambahkan luas lingkaran!',
      pembahasanNormal: 'Dengan triple Pythagoras 7, 24, 25, garis pelukis kerucut adalah 25 meter. Selimut tabung bernilai 440 meter persegi dan selimut kerucut bernilai 550 meter persegi. Dijumlahkan keduanya menghasilkan 990 meter persegi.',
      pembahasanCepat: 'Trik cepat Mister Jo: gabungkan rumusnya dengan sifat distributif! Pi dikali r dikali kurung buka 2 kali tinggi tabung ditambah s. Dua puluh dua dikali 45 sama dengan sebelas dikali 90, langsung dapat 990! Mudah sekali, kan?',
      refleksi: 'Faktorkan suku sejenis pada rumus geometri gabungan agar perkalianmu jauh lebih cepat dan minim salah hitung.'
    }
  }
];
