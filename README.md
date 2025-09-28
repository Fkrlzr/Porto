# Website Portofolio

Sebuah website portofolio modern dengan tema putih dan biru muda, dilengkapi dengan dark mode toggle dan integrasi sosial media.

## Fitur

✨ **Desain Modern**: Menggunakan tema putih dan biru muda yang elegan
🌙 **Dark Mode**: Toggle untuk beralih antara light dan dark mode dengan animasi smooth
📱 **Responsive**: Tampilan yang optimal di semua perangkat (desktop, tablet, mobile)
🔗 **Social Media Integration**: Button untuk redirect ke Instagram, GitHub, LinkedIn, dan Email
🎯 **Smooth Scrolling**: Navigasi yang smooth antar section
📝 **Contact Form**: Form kontak dengan validasi
🎨 **Animasi**: Berbagai animasi hover dan scroll yang menarik

## Struktur File

```
Porto/
├── index.html          # File HTML utama
├── styles.css          # File CSS dengan tema dan styling
├── script.js           # File JavaScript untuk interaktivitas
└── README.md           # Dokumentasi proyek
```

## Cara Penggunaan

### 1. Personalisasi Konten

**Edit informasi pribadi di `index.html`:**

- Ganti "Nama Anda" dengan nama asli Anda
- Update profesi/title di hero section
- Ubah teks "Tentang Saya" sesuai dengan background Anda
- Tambah/ubah skill di section skills
- Update proyek-proyek di section projects
- Ganti informasi kontak

**Update social media links di `script.js`:**

```javascript
const socialLinks = {
  instagram: "https://instagram.com/yourusername", // Ganti dengan username Instagram
  github: "https://github.com/yourusername", // Ganti dengan username GitHub
  linkedin: "https://linkedin.com/in/yourusername", // Ganti dengan username LinkedIn
  email: "mailto:your.email@example.com", // Ganti dengan email Anda
};
```

### 2. Kustomisasi Warna

**Untuk mengubah tema warna, edit variabel CSS di `styles.css`:**

```css
:root {
  --primary-color: #87ceeb; /* Biru muda utama */
  --secondary-color: #4a90e2; /* Biru medium */
  --accent-color: #5dade2; /* Biru aksen */
  /* ... warna lainnya */
}
```

### 3. Menambah Foto Profil

Ganti placeholder di hero section dengan foto Anda:

1. Simpan foto dengan nama `profile.jpg` di folder yang sama
2. Update CSS untuk `.profile-placeholder`:

```css
.profile-placeholder {
  background-image: url("profile.jpg");
  background-size: cover;
  background-position: center;
}
```

### 4. Menjalankan Website

1. **Lokal**: Buka file `index.html` di browser
2. **Live Server**: Gunakan Live Server extension di VS Code
3. **Deploy**: Upload ke hosting seperti Netlify, Vercel, atau GitHub Pages

## Fitur Dark Mode

Website memiliki toggle dark mode yang:

- Otomatis menyimpan preferensi theme di localStorage
- Mengubah seluruh skema warna website
- Memiliki animasi transisi yang smooth
- Icon berubah sesuai mode (moon/sun)

## Responsive Design

Website responsive dengan breakpoint:

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## Browser Support

- Chrome/Chromium (Recommended)
- Firefox
- Safari
- Edge

## Customization Tips

### Menambah Section Baru

1. Tambah HTML section di `index.html`
2. Tambah link navigasi di navbar
3. Tambah styling di `styles.css`
4. Update smooth scrolling di `script.js`

### Mengubah Font

Ganti font family di CSS:

```css
body {
  font-family: "Your Font", sans-serif;
}
```

### Menambah Animasi

Gunakan CSS keyframes atau update observer di JavaScript untuk animasi scroll.

## Social Media Links

Update link berikut sesuai akun Anda:

- **Instagram**: Untuk portfolio visual/personal branding
- **GitHub**: Untuk menampilkan code repository
- **LinkedIn**: Untuk networking profesional
- **Email**: Untuk kontak langsung

## Tips SEO

1. Update `<title>` dan meta description
2. Tambah meta tags Open Graph
3. Optimasi gambar dengan alt text
4. Gunakan semantic HTML

## Deploy ke GitHub Pages

1. Push code ke GitHub repository
2. Buka Settings > Pages
3. Pilih source branch (main/master)
4. Website akan tersedia di `username.github.io/repository-name`

## License

Bebas digunakan untuk personal dan komersial.

---

Dibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript vanilla.

**Happy Coding!** 🚀
