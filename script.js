script.js
/ Data FAQ dalam bentuk array of objects
const faqData = [
{
category: "teknis",
question: "QRIS TIDAK MUNCUL",
answer: "Untuk perihal tampilan error atau tidak muncul menu download kode QR pada menu deposit via QRIS silahkan dicoba hapus cookies / hsitory dari settingan internet bosku / bosku bisa coba gunakan browser lainnya Silakan ikuti cara dibawah ini ya bosku : 1. Clear history dan cache browser bos di menu Setting > Privacy > History (atau tergantung browser bosku) 2. Bersihkan history, cookies, dan cache browser bosku 3. Keluar dari browser 4. Buka kembali browser dan kembali login ke situs kami NB : Jika anda telah melakukan hal yang kami informasikan di atas dan masih tetap tidak memunculkan barcode Qris , maka kami sarankan deposit antar bank ke bank deposit kami yang aktif dan online lain ya bosku."
},
{
category: "teknis",
question: "TELAT RESULT PASARAN",
answer: "Yth kami ingin menginformasikan bahwa untuk pasaran tersebut untuk saat ini terjadi keterlambatan result dari pihak penyedia belum mengeluarkan angka result. Mohon untuk menunggu dan bersabar estimasi waktu tidak dapat kami tentukan, Terima kasih."
},
{
category: "teknis",
question: "CARA KIRIM GAMBAR",
answer: "Cara mengirimkan screenshot ke Live Chat : 1. Klik tombol kirim file : https://prnt.sc/me8qnc0bjCVk 2. Pilih foto yang ingin ada kirimkan dan klik kirim ya bosku."
},
{
category: "deposit",
question: "REJECT DEPOSIT",
answer: "Mohon maaf bosku untuk perihal tersebut anda sebelumnya sudah mengisi form deposit namun terpending pada sistem kami, untuk perihal deposit anda sudah kami bantu reject ya bosku, dalam waktu 1 menit kedepan silahkan untuk mengisi form deposit kembali dengan nominal yang sesuai yang anda kirimkan ke kami ya bosku, Terima kasih"
},
{
category: "deposit",
question: "QRIS PENDING",
answer: "Mohon maaf bosku, setelah kami melakukan pengecekan dana anda tidak tercetak pada sistem kami sehingga belum diproseskan ya bosku. Saat ini kami sedang menghubungi pihak kami yang terkait untuk membantu terkait kendala anda ya bosku. Untuk estimasi waktu tidak dapat kami pastikan ya bosku Mohon ditunggu & Mohon maaf atas ketidaknyamananya. Terima kasih"
},
{
category: "deposit",
question: "MINT DETAIL BUKTI TRANSAKSI",
answer: "Untuk pengiriman dana deposit anda tersebut di bantu isi data-data di bawah ini agar kami dapat mengeceknya ya bosku : User id : Nama rekening tujuan : Nomor rekening tujuan : Jam dan tanggal : Nominal deposit : Nama pengirim dana deposit :"
},
{
category: "permainan",
question: "CARA BERMAIN SOCCER ROULETTE",
answer: "Untuk permainan Roullet Soccers sama dengan permainan roullet pada umumnya, Namun disini Soccer Roulette memiliki perkalian yang sangat Tinggi di banding Roulette biasa nya. Berikut ini Cara bermainnya: 1.Tentukan taruhan Anda Setelah memilih jenis roulette yang ingin dimainkan, pemain harus menentukan taruhan yang ingin mereka pasang. Taruhan dalam roulette dapat berupa taruhan dalam (pada nomor tunggal), taruhan luar (pada kombinasi angka atau warna), atau taruhan khusus lainnya seperti taruhan split (pada dua nomor) atau taruhan sudut (pada empat nomor). Contoh seperti gambar yang ada pada link diatas ini Perkalian yang akan di berikan pada kalian saat bermain 2.Letakkan taruhan Anda Setelah menentukan taruhan, pemain harus meletakkan chip mereka di atas meja roulette sesuai dengan taruhan yang dipilih. Dealer akan memutar roda roulette dan melemparkan bola ke dalamnya. Pemain dapat terus memasang taruhan hingga dealer mengumumkan bahwa taruhan tidak lagi diterima. 3.Tunggu hasil putaran Setelah bola berhenti di salah satu slot roda roulette, dealer akan mengumumkan hasilnya dan membayar pemain yang berhasil menebak hasilnya dengan benar. Pemain yang kalah harus menyerahkan chip mereka kepada dealer. 4.Ulangi prosesnya Permainan roulette consiste dari serangkaian putaran yang independen satu sama lain. Pemain dapat terus memasang taruhan pada setiap putaran baru dan mencoba keberuntungan mereka dalam memprediksi hasil putaran berikutnya"
},
{
category: "withdraw",
question: "WITHDRAW PENDING",
answer: "Untuk permintaan penarikan dana anda sudah kami proses ya bosku untuk status pengiriman sedang dalam proses dan telah mengurangi saldo bank kami ya bosku jika terjadi keterlambatan dan masuk pada rekening anda maka kami sarankan di tunggu dalam estimasi selambatnya 7x24 jam ya bos terima kasih"
},
{
category: "bonus",
question: "CLAIM SCATTER",
answer: "Untuk perihal klaim bonus scatter Mahjong Ways I dan Mahjong Ways II yang dimana anda hanya perlu melengkapi data data yang kami butuhkan saat anda mendapatkan scatter ya bosku : 1. Screenshot Mendapatkan Scatter 2. Screenshot Kemenangan Akhir 3. Screenshot History Kemenangan"
}
];

// Fungsi untuk merender FAQ items
function renderFAQItems(items) {
const faqList = document.getElementById('faqList');
faqList.innerHTML = '';

if (items.length === 0) {
faqList.innerHTML = '<div class="no-results">Tidak ada hasil ditemukan</div>';
return;
}

items.forEach(item => {
const faqItem = document.createElement('div');
faqItem.className = 'faq-item';
faqItem.dataset.category = item.category;

faqItem.innerHTML = `
<div class="faq-header">
<span>${item.question}</span>
<span class="expand-icon">+</span>
</div>
<div class="faq-content">
<div class="faq-question">${item.question}</div>
<div class="faq-answer">${item.answer}</div>
<button class="copy-btn" data-answer="${escapeHtml(item.answer)}">Salin Jawaban</button>
</div>
`;

faqList.appendChild(faqItem);
});

// Add event listeners to FAQ items
document.querySelectorAll('.faq-header').forEach(header => {
header.addEventListener('click', () => {
const content = header.nextElementSibling;
const isActive = content.classList.contains('active');

// Close all open items first
document.querySelectorAll('.faq-content').forEach(item => {
item.classList.remove('active');
});

document.querySelectorAll('.expand-icon').forEach(icon => {
icon.textContent = '+';
});

// Open clicked item if it wasn't already open
if (!isActive) {
content.classList.add('active');
header.querySelector('.expand-icon').textContent = '-';
}
});
});

// Add event listeners to copy buttons
document.querySelectorAll('.copy-btn').forEach(button => {
button.addEventListener('click', (e) => {
e.stopPropagation(); // Mencegah event bubbling ke parent elements
const answerText = button.getAttribute('data-answer');
copyToClipboard(answerText);
// Ubah tampilan tombol sementara
const originalText = button.textContent;
button.textContent = 'Tersalin!';
button.classList.add('copied');
// Kembalikan tampilan tombol setelah 2 detik
setTimeout(() => {
button.textContent = originalText;
button.classList.remove('copied');
}, 2000);
});
});
}

// Fungsi untuk menyalin teks ke clipboard
function copyToClipboard(text) {
// Menggunakan Clipboard API modern
navigator.clipboard.writeText(text).then(() => {
console.log('Teks berhasil disalin');
}).catch(err => {
console.error('Gagal menyalin teks: ', err);
// Fallback untuk browser lama
fallbackCopyToClipboard(text);
});
}

// Fallback untuk browser yang tidak mendukung Clipboard API
function fallbackCopyToClipboard(text) {
const textArea = document.createElement('textarea');
textArea.value = text;
textArea.style.position = 'fixed'; // Avoid scrolling to bottom
document.body.appendChild(textArea);
textArea.focus();
textArea.select();
try {
const successful = document.execCommand('copy');
if (!successful) {
console.error('Fallback copy gagal');
}
} catch (err) {
console.error('Fallback copy error: ', err);
}
document.body.removeChild(textArea);
}

// Fungsi untuk escape karakter HTML (mencegah XSS)
function escapeHtml(unsafe) {
return unsafe
.replace(/&/g, "&amp;")
.replace(/</g, "&lt;")
.replace(/>/g, "&gt;")
.replace(/"/g, "&quot;")
.replace(/'/g, "&#039;");
}

// Fungsi untuk memfilter FAQ berdasarkan pencarian dan kategori
function filterFAQ() {
const searchText = document.getElementById('searchInput').value.toLowerCase();
const activeCategory = document.querySelector('.category-btn.active').dataset.category;

const filteredItems = faqData.filter(item => {
const matchesSearch = item.question.toLowerCase().includes(searchText) ||
item.answer.toLowerCase().includes(searchText);
const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

return matchesSearch && matchesCategory;
});

renderFAQItems(filteredItems);
}

// Inisialisasi event listeners
document.addEventListener('DOMContentLoaded', () => {
// Render semua FAQ items pada awal
renderFAQItems(faqData);

// Search input event listener
document.getElementById('searchInput').addEventListener('input', filterFAQ);

// Category buttons event listeners
document.querySelectorAll('.category-btn').forEach(button => {
button.addEventListener('click', () => {
document.querySelectorAll('.category-btn').forEach(btn => {
btn.classList.remove('active');
});

button.classList.add('active');
filterFAQ();
});
});
});

