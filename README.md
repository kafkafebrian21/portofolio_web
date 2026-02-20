# 🎓 Website Portofolio Mahasiswa

Website portofolio modern dan responsif untuk mahasiswa Teknik Informatika. Dibuat menggunakan HTML, CSS (Tailwind CSS), dan JavaScript.

## ✨ Fitur

- ✅ **Responsive Design** - Tampil sempurna di semua perangkat (mobile, tablet, desktop)
- 🌙 **Dark Mode** - Mode gelap dengan toggle yang smooth
- 🎨 **Modern UI/UX** - Design gradient purple & pink yang menarik
- ⚡ **Smooth Animations** - Animasi hover, float, dan scroll yang halus
- 📊 **Progress Bars** - Skill bars dengan animasi
- 💼 **Project Showcase** - Card projects dengan overlay interaktif
- 📧 **Contact Form** - Form kontak yang fungsional
- 🔝 **Back to Top** - Tombol kembali ke atas
- 📱 **Mobile Menu** - Navigasi mobile yang user-friendly

## 📁 Struktur File

```
portfolio-website/
│
├── index.html          # File HTML utama
├── style.css          # File CSS custom
├── script.js          # File JavaScript
└── README.md          # Dokumentasi
```

## 🚀 Cara Menggunakan

### 1. Download Semua File
Download ketiga file berikut:
- `index.html`
- `style.css`
- `script.js`

### 2. Simpan dalam Satu Folder
Pastikan ketiga file berada dalam satu folder yang sama.

### 3. Buka di Browser
Double-click file `index.html` atau klik kanan → Open with → Browser pilihan Anda.

## 🛠️ Customisasi

### Mengubah Data Pribadi

#### 1. Nama dan Info Dasar (index.html)
```html
<!-- Ganti pada baris 80 -->
<h1>Halo, Saya <span>Nama Anda</span></h1>

<!-- Ganti pada baris 161-176 untuk info pribadi -->
<p>Nama Lengkap Anda</p>
<p>123456789</p> <!-- NIM -->
<p>email@example.com</p>
```

#### 2. Pendidikan (index.html)
```html
<!-- Section Education, baris 183-215 -->
<h3>Sarjana Teknik Informatika</h3>
<p>Universitas XYZ</p>
<p>2021 - Sekarang</p>
<p>IPK: 3.85 / 4.00</p>
```

#### 3. Skills (index.html)
```html
<!-- Ubah persentase skill pada baris 273-318 -->
<span>90%</span> <!-- HTML & CSS -->
<div style="width: 90%"></div>
```

#### 4. Projects (index.html)
```html
<!-- Ubah info project pada baris 357-487 -->
<h3>E-Commerce Website</h3>
<p>Platform e-commerce dengan...</p>
<!-- Ganti link demo dan GitHub -->
<a href="link-demo-anda">Demo</a>
<a href="link-github-anda">Code</a>
```

#### 5. Social Media Links
Cari dan ganti semua `yourusername` dengan username Anda:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`
- Instagram: `https://instagram.com/yourusername`
- Twitter: `https://twitter.com/yourusername`

### Mengubah Warna

#### Gradient Utama (style.css)
```css
.gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

Ganti dengan warna favorit Anda:
- Blue-Purple: `#667eea` → `#764ba2`
- Orange-Red: `#f12711` → `#f5af19`
- Green-Blue: `#56ab2f` → `#a8e063`
- Pink-Purple: `#e91e63` → `#9c27b0`

## 📧 Integrasi Email

Saat ini form kontak hanya menampilkan alert (demo). Untuk mengirim email sungguhan:

### Opsi 1: EmailJS (Gratis & Mudah)
1. Daftar di [EmailJS](https://www.emailjs.com/)
2. Dapatkan Service ID dan Template ID
3. Tambahkan script EmailJS di `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
4. Update `script.js` dengan kode EmailJS

### Opsi 2: Formspree
1. Daftar di [Formspree](https://formspree.io/)
2. Dapatkan endpoint URL
3. Ubah form action di `index.html`

### Opsi 3: Backend Sendiri
Buat backend dengan:
- Node.js + Express + Nodemailer
- PHP + PHPMailer
- Python + Flask/Django

## 🎨 Menambah Foto Profil

Ganti icon user dengan foto Anda:

```html
<!-- Dari (baris 69-73) -->
<div class="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
    <i class="fas fa-user text-white text-7xl"></i>
</div>

<!-- Menjadi -->
<img src="foto-anda.jpg" alt="Foto Profil" class="w-full h-full rounded-full object-cover">
```

## 📱 Deploy Website

### GitHub Pages (Gratis)
1. Buat repository di GitHub
2. Upload semua file
3. Settings → Pages → pilih branch main
4. Website Anda live di `username.github.io/repo-name`

### Netlify (Gratis)
1. Drag & drop folder ke [Netlify](https://netlify.com)
2. Website langsung online!

### Vercel (Gratis)
1. Import project ke [Vercel](https://vercel.com)
2. Deploy otomatis

## 🔧 Browser Support

Website ini support di:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

## 📚 Dependencies

- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework (via CDN)
- [Font Awesome](https://fontawesome.com/) - Icons (via CDN)
- [Google Fonts - Poppins](https://fonts.google.com/) - Typography

## 🤝 Kontribusi

Jika Anda ingin meningkatkan website ini:
1. Fork repository
2. Buat branch baru
3. Commit changes
4. Push ke branch
5. Buat Pull Request

## 📄 License

Website ini gratis untuk digunakan dan dimodifikasi sesuai kebutuhan Anda.

## 💡 Tips

1. **Backup**: Selalu backup file Anda sebelum melakukan perubahan besar
2. **Testing**: Test di berbagai browser dan device
3. **Performance**: Optimalkan gambar sebelum upload
4. **SEO**: Tambahkan meta tags untuk SEO
5. **Analytics**: Integrasikan Google Analytics untuk tracking

## 🆘 Troubleshooting

### Website tidak muncul dengan baik?
- Pastikan ketiga file (index.html, style.css, script.js) dalam satu folder
- Cek console browser (F12) untuk error
- Pastikan koneksi internet aktif (untuk CDN)

### Dark mode tidak berfungsi?
- Cek apakah JavaScript enabled di browser
- Clear browser cache

### Form tidak terkirim?
- Ini normal, form belum terintegrasi dengan backend
- Ikuti panduan integrasi email di atas

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Email: your.email@example.com
- GitHub Issues: [Link ke repo]

---

**Dibuat dengan ❤️ menggunakan HTML, CSS & JavaScript**

Semoga sukses dengan website portofolio Anda! 🚀
