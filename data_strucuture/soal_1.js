// Soal 1: Daftar Peserta Seminar
// Sebuah seminar diikuti oleh 100 peserta. Setiap peserta punya nama, email, dan institusi. Setiap peserta akan mendapat sertifikat berdasarkan email.

// Pertanyaan:
// Bagaimana kamu menyimpan data semua peserta agar mudah mencari peserta berdasarkan email?

// Jawaban:

const peserta = [
  {
    name: "Basir",
    email: "basir@gmail",
    institusi: "IPB University",
  },
  {
    name: "Alif",
    email: "alif@gmail",
    institusi: "IPB",
  },
];

// for (const p of peserta) {
//   console.log(p["email"]);
// }

const arrayBaru = peserta.map((p, index, arr) => {
 console.log(index);
 console.log(arr); 
});
console.log(arrayBaru);
