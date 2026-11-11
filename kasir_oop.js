// --- MEMBUAT CLASS (CETAK BIRU OBJEK) ---
class TransaksiKasir {
    // Constructor untuk menerima data awal saat objek dibuat
    constructor(namaBuku, hargaSatuan, jumlahBeli) {
        this.namaBuku = namaBuku;
        this.hargaSatuan = hargaSatuan;
        this.jumlahBeli = jumlahBeli;
    }

    // Method (fungsi di dalam class) untuk menghitung total harga
    hitungTotal() {
        return this.hargaSatuan * this.jumlahBeli;
    }

    // Method untuk menentukan status bonus berdasarkan logika tertentu
    cekBonus(totalHarga) {
        if (this.jumlahBeli > 5 && totalHarga >= 200000) {
            return "Dapat Buku Catatan Gratis!";
        } else {
            return "Tidak Mendapat Bonus";
        }
    }
}


// --- IMPLEMENTASI / PEMBUATAN OBJEK NYATA ---
// Di sini kita membuat objek baru (menggunakan kata kunci 'new') dari Class TransaksiKasir
const transaksi1 = new TransaksiKasir("Buku Pemrograman Web", 50000, 6);

// Menjalankan method yang ada di dalam class
let totalHarga = transaksi1.hitungTotal();
let statusBonus = transaksi1.cekBonus(totalHarga);


// --- MENAMPILKAN HASIL KE DOM HTML ---
document.getElementById("outNama").innerText = transaksi1.namaBuku;
document.getElementById("outHarga").innerText = "Rp " + transaksi1.hargaSatuan.toLocaleString();
document.getElementById("outJumlah").innerText = transaksi1.jumlahBeli;
document.getElementById("outTotal").innerText = "Rp " + totalHarga.toLocaleString();
document.getElementById("outBonus").innerText = statusBonus;