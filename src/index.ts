import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fungsi untuk membuat prompt
function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function main() {
  console.log("=== MENU ===");
  console.log("1. Tambah Data");
  console.log("2. Lihat Data");
  console.log("3. Hapus Data");
  console.log("exit. Keluar");
  console.log("============");

  const data: string[] = [];

  while (true) {
    const input = await ask("Masukkan perintah: ");

    switch (input) {
      case "1":
        const nama = await ask("Masukkan nama: ");
        data.push(nama);
        console.log(`✅ Data '${nama}' ditambahkan`);
        break;

      case "2":
        console.log("📌 Isi data:");
        if (data.length === 0) console.log("(kosong)");
        else console.log(data);
        break;

      case "3":
        const hapus = await ask("Nama yang ingin dihapus: ");
        const idx = data.indexOf(hapus);
        if (idx !== -1) {
          data.splice(idx, 1);
          console.log(`✅ '${hapus}' sudah dihapus`);
        } else {
          console.log("❌ Data tidak ditemukan");
        }
        break;

      case "exit":
        console.log("Keluar dari program...");
        rl.close();
        return;

      default:
        console.log("⛔ Perintah tidak dikenal");
        break;
    }
  }
}

main();
