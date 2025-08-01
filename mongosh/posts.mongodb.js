use('sample_content');

db.posts.insertMany([
  {
    id: 1,
    title: '10 Tips Menjadi Pengusaha Sukses',
    body: 'Memulai bisnis adalah tantangan yang besar bagi banyak orang. Berikut ini adalah 10 tips untuk menjadi pengusaha sukses:...',
    author: {
      name: 'Agus',
      email: 'agus@example.com',
    },
    comments: [
      {
        id: 1,
        body: 'Sangat bermanfaat, terima kasih atas tipsnya.',
        author: {
          name: 'Budi',
          email: 'budi@example.com',
        },
        created_at: '2022-04-01T10:00:00Z',
      },
      {
        id: 2,
        body: 'Saya setuju dengan tip nomor 3, networking sangat penting dalam bisnis.',
        author: {
          name: 'Rina',
          email: 'rina@example.com',
        },
        created_at: '2022-04-02T11:30:00Z',
      },
    ],
  },
  {
    id: 2,
    title: 'Cara Membuat Brownies yang Lezat',
    body: 'Brownies adalah salah satu kue yang paling disukai oleh banyak orang. Berikut ini adalah cara membuat brownies yang enak:...',
    author: {
      name: 'Siti',
      email: 'siti@example.com',
    },
    comments: [
      {
        id: 1,
        body: 'Saya sudah mencoba resep ini dan hasilnya sangat lezat!',
        author: {
          name: 'Budi',
          email: 'budi@example.com',
        },
        created_at: '2022-03-31T08:00:00Z',
      },
      {
        id: 2,
        body: 'Apakah bisa menambahkan kacang dalam adonan brownies?',
        author: {
          name: 'Rina',
          email: 'rina@example.com',
        },
        created_at: '2022-04-01T10:30:00Z',
      },
      {
        id: 3,
        body: 'Saya lebih suka brownies yang menggunakan coklat hitam, bukan bubuk coklat.',
        author: {
          name: 'Dewi',
          email: 'dewi@example.com',
        },
        created_at: '2022-04-02T14:00:00Z',
      },
    ],
  },
  {
    id: 3,
    title: 'Cara Merawat Tanaman Hias',
    body: 'Tanaman hias dapat membuat rumah menjadi lebih indah dan nyaman. Berikut ini adalah cara merawat tanaman hias agar tetap sehat dan cantik:...',
    author: {
      name: 'Agus',
      email: 'agus@example.com',
    },
    comments: [
      {
        id: 1,
        body: 'Saya memiliki tanaman hias yang sama dan saya menemukan tips ini sangat berguna.',
        author: {
          name: 'Budi',
          email: 'budi@example.com',
        },
        created_at: '2022-03-30T15:00:00Z',
      },
      {
        id: 2,
        body: 'Saya pernah mencoba menyiram tanaman hias dengan susu, dan hasilnya memang luar biasa!',
        author: {
          name: 'Rina',
          email: 'rina@example.com',
        },
        created_at: '2022-03-31T11:30:00Z',
      },
    ],
  },
  {
    id: 4,
    title: 'Tips Belajar Bahasa Inggris',
    body: 'Bahasa Inggris adalah bahasa yang sangat penting untuk dikuasai. Berikut ini adalah beberapa tips untuk belajar bahasa Inggris dengan mudah:...',
    author: {
      name: 'Dewi',
      email: 'dewi@example.com',
    },
    comments: [
      {
        id: 1,
        body: 'Saya suka menggunakan aplikasi Duolingo untuk belajar bahasa Inggris.',
        author: {
          name: 'Budi',
          email: 'budi@example.com',
        },
        created_at: '2022-03-30T09:00:00Z',
      },
      {
        id: 2,
        body: 'Menonton film dengan subtitle bahasa Inggris juga bisa membantu meningkatkan kemampuan berbahasa Inggris.',
        author: {
          name: 'Rina',
          email: 'rina@example.com',
        },
        created_at: '2022-03-31T14:30:00Z',
      },
      {
        id: 3,
        body: 'Saya juga suka membaca novel bahasa Inggris, selain meningkatkan kemampuan berbahasa Inggris juga bisa menambah wawasan.',
        author: {
          name: 'Agus',
          email: 'agus@example.com',
        },
        created_at: '2022-04-01T16:00:00Z',
      },
    ],
  },
  {
    id: 5,
    title: 'Cara Membuat Nasi Goreng yang Lezat',
    body: 'Nasi goreng adalah salah satu masakan Indonesia yang paling terkenal. Berikut ini adalah cara membuat nasi goreng yang enak:...',
    author: {
      name: 'Siti',
      email: 'siti@example.com',
    },
    comments: [
      {
        id: 1,
        body: 'Saya sudah mencoba resep ini dan hasilnya sangat lezat!',
        author: {
          name: 'Budi',
          email: 'budi@example.com',
        },
        created_at: '2022-04-01T10:00:00Z',
      },
      {
        id: 2,
        body: 'Apakah bisa menambahkan seafood dalam nasi goreng?',
        author: {
          name: 'Rina',
          email: 'rina@example.com',
        },
        created_at: '2022-04-02T12:30:00Z',
      },
      {
        id: 3,
        body: 'Saya lebih suka nasi goreng yang menggunakan bumbu rempah tradisional, bukan saos tomat.',
        author: { name: 'Agus', email: 'agus@example.com' },
        created_at: '2022-04-03T08:15:00Z',
      },
    ],
  },
]);
