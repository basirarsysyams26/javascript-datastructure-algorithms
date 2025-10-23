const z = [
  [
    {
      name: "siswaA",
      kelas: "ABC",
      alamat: {
        provinsi: "Jawa Barat",
        kota: "Bekasi",
      },
      umur: 18,
      hobi: ["Belajar", "Futsal"],
    },
    {
      name: "siswaB",
      kelas: "ABC",
      alamat: {
        provinsi: "Sumatera Barat",
        kota: "Padang",
      },
      umur: 19,
      hobi: ["Membaca buku", "Ngoding"],
    },
  ],
  [
    {
      name: "siswaD",
      kelas: "XYZ",
      alamat: {
        provinsi: "Jawa Timur",
        kota: "Surabaya",
      },
      umur: 17,
      hobi: ["Memancing", "Berenang"],
    },
    {
      name: "siswaE",
      kelas: "XYZ",
      alamat: {
        provinsi: "Jakarta",
        alamat: "Jatinegara",
      },
      umur: 20,
      100: ["Berenang", "Senam"],
    },
  ],
];
const result = z[1][1]["100"][1];
console.log(result);
