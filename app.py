# app.py
from flask import Flask, render_template # Add render_template here
from datetime import datetime

app = Flask(__name__)

@app.route('/')
def home():
    # Data untuk layanan
    services = [
        {
            "title": "Produk Lokal",
            "description": "BriqNature adalah briket premium buatan lokal yang dirancang untuk memenuhi standar kualitas terbaik.",
            "image": "static/images/Briq 1.jpeg"
        },
        {
            "title": "Produk Ekspor",
            "description": "BriqNature adalah briket premium yang telah memenuhi standar internasional untuk pasar ekspor.",
            "image": "static/images/Gallery-4-1024x576.jpg"
        },
        {
            "title": "Pengiriman Internasional",
            "description": "Layanan pengiriman yang aman dan efisien ke berbagai negara dengan pelacakan real-time.",
            "image": "https://www.morethanshipping.com/wp-content/uploads/2015/04/iStock_000053559384_Medium.jpg"
        }
    ]
    
    # Data untuk produk
    products = [
        {
            "title": "Briket Hexagonal (2x2)",
            "description": "Arang Briket Hexagonal ukuran 2x2. Dengan bentuk unik dan ukuran yang compact, arang briket ini memberikan berbagai keunggulan untuk kebutuhan sehari-hari Anda.",
            "price": "Rp 18.000 / Kg",
            "image": "static/images/Product-5-1-300x300.jpg",
            "tag": "Populer"
        },
        {
            "title": "Briket Hexagonal (5x2)",
            "description": "Praktis, mudah dinyalakan, dan memiliki daya bakar lama. Bentuk uniknya memastikan pembakaran merata, cocok untuk BBQ, camping, atau kegiatan outdoor lainnya. ",
            "price": "Rp 18.000 / Kg",
            "image": "static/images/Product-11-1-300x300.jpg",
            "tag": None
        },
        {
            "title": "Briket Hexagonal (5x5)",
            "description": "Arang briket hexagonal ukuran 5x5 cm hadir dengan daya bakar lebih lama, pembakaran merata, dan cocok untuk BBQ besar, acara outdoor, atau kebutuhan industri kecil.",
            "price": "Rp 18.000 / Kg",
            "image": "static/images/Product-8-1-300x300.jpg",
            "tag": "Baru"
        },
        {
            "title": "Request Bentuk",
            "description": "kami menerima request bentuk dan ukuran sesuai kebutuhan Anda! Dapatkan produk yang efisien dan customizable hanya di sini.",
            "price": "Kontak Kami",
            "image": "static/images/Product-9-1-300x300.jpg",
            "tag": "Ready"
        }
    ]
    
    # Data untuk testimoni
    testimonials = [
        {
            "name": "Ahmad Suryana",
            "position": "Pemilik Surya Craft",
            "message": "Berkat bantuan Ekspor Indonesia, produk kerajinan tangan kami kini sudah diekspor ke Jepang dan Australia. Prosesnya sangat mudah dan tim mereka sangat profesional.",
            "image": "static/images/Our-Team5.jpeg"
        },
        {
            "name": "Dewi Lestari",
            "position": "CEO Batik Nusantara",
            "message": "Sebagai pemula dalam dunia ekspor, saya sangat terbantu dengan layanan konsultasi yang diberikan. Mereka menjelaskan setiap langkah dengan detail dan selalu siap membantu.",
            "image": "static/images/Our-Team6.jpg"
        },
        {
            "name": "Budi Santoso",
            "position": "Direktur Bali Furniture",
            "message": "Proses pengiriman sangat cepat dan aman. Barang tiba tepat waktu dan dalam kondisi sempurna. Ini adalah partner ekspor terbaik yang pernah kami temukan.",
            "image": "static/images/client3.jpg"
        }
    ]
    
    return render_template('index.html', 
                           services=services, 
                           products=products, 
                           testimonials=testimonials)
    
@app.route('/about')
def about():
    current_year = datetime.now().year  # Pastikan datetime sudah diimport
    return render_template('about.html', current_year=current_year)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    # Logika untuk memproses form kontak bisa ditambahkan di sini
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)