# Driver Tracking Realtime (Node.js + WebSocket + Leaflet)

Proyek ini adalah demo pelacakan posisi driver secara realtime
menggunakan:

-   **Node.js** (Express + WebSocket)
-   **Leaflet.js** untuk peta
-   **File route.json** sebagai rute statis
-   **Simulasi pergerakan driver** melalui WebSocket

## 📁 Struktur Folder

    project/
    │
    ├── public/
    │   ├── index.html
    │   ├── client.js
    │   └── route.json
    │
    └── server.js

## 🚀 Cara Menjalankan

### 1. Install dependencies

    npm install express ws

### 2. Jalankan server

    node server.js

Server akan berjalan di:

-   HTTP: **http://localhost:3000/**
-   WebSocket: **ws://localhost:8080**

## 🗺️ Cara Kerja Aplikasi

### 1. Express melayani file statis dari folder `public/`

### 2. Leaflet menampilkan map + polyline dari `route.json`

### 3. WebSocket mengirim posisi driver tiap 1 detik

## 🔧 API WebSocket

Contoh data yang dikirim server:

``` json
{
  "lat": -7.2575,
  "lng": 112.7521
}
```

## ✔️ Troubleshooting

**GET /route.json 404 (Not Found)**\
Solusi: - Pastikan file berada di `public/route.json` - Akses via
`http://localhost:3000/route.json`

## 📄 Lisensi

Bebas digunakan untuk belajar dan pengembangan.
