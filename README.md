
# Tentang Saya

Hai! Saya Muhammad Alif Hidayah, seorang graduated Information Systems dengan background UI/UX Designer. Saya memiliki minat yang kuat dalam **Pemrograman** dan juga pada **DATA SIENCE**

Proyek **BriqNature** ini adalah salah satu cara saya untuk mendalami dan menerapkan pengetahuan saya. Saya bersemangat untuk terus belajar dan membangun solusi yang inovatif.

## BriqNature - Website Profil Perusahaan

## Deskripsi Proyek

BriqNature adalah website profil perusahaan yang dirancang untuk menampilkan produk briket premium dan layanan ekspor kami. Proyek ini dibangun sebagai bagian dari portofolio pribadi saya untuk mendemonstrasikan keahlian dalam pengembangan web menggunakan Python dan framework Flask. Website ini menyajikan informasi detail tentang produk, layanan, testimoni pelanggan, dan menyediakan sarana kontak.

## Tujuan Proyek (Portofolio)

Proyek ini dibuat untuk menunjukkan kemampuan saya dalam:

* **Pengembangan Backend dengan Python Flask:** Membangun aplikasi web yang terstruktur, mengelola routing, dan menyajikan data dinamis.
* **Templating dengan Jinja2:** Menggunakan template engine untuk memisahkan logika backend dari tampilan frontend, menghasilkan halaman HTML dinamis.
* **Desain Antarmuka Pengguna (UI) Dasar:** Menyusun elemen-elemen halaman dan memastikan presentasi konten yang bersih.
* **Pengelolaan Aset Statis:** Mengatur dan menyajikan file CSS, JavaScript, dan gambar.
* **Struktur Proyek Web yang Rapi:** Mengorganisir kode dan aset proyek agar mudah dimengerti dan dikelola.

## Fitur-Fitur Utama

* **Halaman Beranda (`/`):** Menampilkan ringkasan tentang BriqNature, layanan utama, produk unggulan, dan testimoni pelanggan.
* **Halaman Tentang Kami (`/about`):** Memberikan informasi mendalam tentang visi, misi, dan sejarah perusahaan.
* **Halaman Kontak (`/contact`):** Menyediakan formulir kontak sederhana untuk pertanyaan atau kerja sama (logika pengiriman formulir dapat ditambahkan nanti).
* **Data Dinamis:** Data produk, layanan, dan testimoni dikelola dalam file Python (`app.py`) dan disajikan secara dinamis ke template HTML.
* **Integrasi Gambar dan Aset Statis:** Menggunakan gambar lokal dan eksternal untuk memperkaya konten visual.

## Teknologi yang Digunakan

* **Backend:**
    * Python 3.x
    * Flask (Web Framework)
    * Jinja2 (Templating Engine)
* **Frontend:**
    * HTML5
    * CSS3
    * JavaScript (opsional, jika ada penambahan interaktivitas)

## Cara Menjalankan Proyek Secara Lokal

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan aplikasi ini di lingkungan pengembangan lokal Anda:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/YourUsername/BriqNature.git](https://github.com/YourUsername/BriqNature.git)
    cd BriqNature
    ```
    *(Ganti `YourUsername` dengan username GitHub Anda)*

2.  **Buat dan aktifkan Virtual Environment (direkomendasikan):**
    Ini akan membantu mengisolasi dependensi proyek dari instalasi Python global Anda.
    ```bash
    python -m venv venv
    ```
    * **Di Windows Command Prompt/PowerShell:**
        ```bash
        venv\Scripts\activate
        ```
    * **Di macOS/Linux/Git Bash:**
        ```bash
        source venv/bin/activate
        ```

3.  **Instal dependensi:**
    Pastikan Anda telah mengaktifkan virtual environment sebelum menjalankan perintah ini.
    ```bash
    pip install -r requirements.txt
    ```
    *(Catatan: Pastikan Anda telah membuat file `requirements.txt` dengan `pip freeze > requirements.txt` setelah menginstal semua dependensi Flask Anda.)*

4.  **Atur variabel lingkungan FLASK_APP:**
    Ini memberi tahu Flask file mana yang harus dijalankan.
    * **Di Windows Command Prompt/PowerShell:**
        ```bash
        set FLASK_APP=app.py
        ```
    * **Di macOS/Linux/Git Bash:**
        ```bash
        export FLASK_APP=app.py
        ```

5.  **Jalankan aplikasi Flask:**
    ```bash
    flask run
    ```
    Atau, karena Anda sudah mengaktifkan `debug=True` di `app.py`:
    ```bash
    python app.py
    ```

    Aplikasi akan berjalan di `http://127.0.0.1:5000/`. Buka URL ini di browser web Anda.

## Tentang Saya

Muhammad Alif Hidayah
* GitHub: malifhdyh
* LinkedIn: Muhammad Alif Hidayah
* Portofolio:(https://drive.google.com/drive/folders/1hyVMcuOUdXoq-nEAKGzdy2OCjXBfAVep?usp=drive_link)
