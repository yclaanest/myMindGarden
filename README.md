# myMindGarden
Ruang ringan untuk merawat diri - platform kesehatan mental interaktif
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MindGarden — Ruang Ringan untuk Merawat Diri</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container header-content">
            <div class="logo">
                <i class="fas fa-seedling"></i>
                <span>MindGarden</span>
            </div>
            
            <button class="mobile-menu-btn" id="mobileMenuBtn">
                <i class="fas fa-bars"></i>
            </button>
            
            <nav>
                <ul id="navMenu">
                    <li><a href="#" class="nav-link active" data-page="home">Beranda</a></li>
                    <li><a href="#" class="nav-link" data-page="games">Mini Game</a></li>
                    <li><a href="#" class="nav-link" data-page="articles">Artikel</a></li>
                    <li><a href="#" class="nav-link" data-page="mood">Mood Tracker</a></li>
                    <li><a href="#" class="nav-link" data-page="journal">Journal</a></li>
                    <li><a href="#" class="nav-link" data-page="audio">Audio Relaksasi</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Background Animations -->
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
    <div class="leaf leaf-1"><i class="fas fa-leaf"></i></div>
    <div class="leaf leaf-2"><i class="fas fa-leaf"></i></div>
    <div class="leaf leaf-3"><i class="fas fa-leaf"></i></div>

    <!-- Home Page -->
    <section id="home" class="page active">
        <div class="container">
            <div class="hero">
                <h1>Welcome to MindGarden</h1>
                <p>Ruang ringan untuk merawat diri. Temukan ketenangan, berlatih pernapasan, dan eksplorasi cara-cara lembut untuk menjaga kesehatan mentalmu.</p>
                
                <div class="cta-buttons">
                    <button class="btn btn-primary" data-page="games">
                        <i class="fas fa-gamepad"></i> Coba Mini Game
                    </button>
                    <button class="btn btn-secondary" data-page="articles">
                        <i class="fas fa-book-open"></i> Baca Artikel
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Games Page -->
    <section id="games" class="page">
        <div class="container">
            <h2 class="section-title">Mini Game Interaktif</h2>
            <p class="section-subtitle">Mainkan game-game ringan ini untuk melatih mindfulness, mengasah ingatan, dan merawat kesehatan mental dengan cara yang fun.</p>
            
            <div class="games-grid">
                <div class="game-card" data-game="breathing">
                    <div class="game-icon">
                        <i class="fas fa-spa"></i>
                    </div>
                    <h3>Breathing Bloom</h3>
                    <p>Ikuti animasi bunga yang mengembang dan menguncup untuk latihan pernapasan yang menenangkan.</p>
                    <button class="btn btn-primary">Mainkan</button>
                </div>
                
                <div class="game-card" data-game="mood">
                    <div class="game-icon">
                        <i class="fas fa-bubble"></i>
                    </div>
                    <h3>Mood Catcher</h3>
                    <p>Tangkap gelembung berisi emosi dan dapatkan pesan afirmasi positif untuk meningkatkan mood.</p>
                    <button class="btn btn-primary">Mainkan</button>
                </div>
                
                <div class="game-card" data-game="memory">
                    <div class="game-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3>Memory Bloom</h3>
                    <p>Asah ingatan dengan mencocokkan gambar bunga dan elemen alam yang menenangkan.</p>
                    <button class="btn btn-primary">Mainkan</button>
                </div>
                
                <div class="game-card" data-game="puzzle">
                    <div class="game-icon">
                        <i class="fas fa-puzzle-piece"></i>
                    </div>
                    <h3>Puzzle Damai</h3>
                    <p>Atur kepingan puzzle gambar pemandangan alam yang menenangkan untuk melatih fokus.</p>
                    <button class="btn btn-primary">Mainkan</button>
                </div>
            </div>
            
            <!-- Breathing Bloom Game -->
            <div id="breathing-game" class="game-container">
                <h3>Breathing Bloom</h3>
                <p id="breathing-instruction">Tarik napas dalam-dalam saat bunga mengembang, dan hembuskan saat bunga menguncup. Ulangi selama 5 siklus.</p>
                
                <div class="breathing-circle" id="breathingCircle">
                    <div class="inner-circle" id="breathText">Tarik Napas</div>
                </div>
                
                <div class="breathing-cycle">
                    <p>Siklus: <span id="cycleCount">0</span>/5</p>
                </div>
                
                <div class="calm-score">
                    <p>Skor Ketenangan: <span id="calmScore">0</span></p>
                </div>
                
                <div class="breathing-controls">
                    <button class="btn btn-primary" id="startBreathing">Mulai</button>
                    <button class="btn btn-secondary" id="resetBreathing">Reset</button>
                </div>
            </div>
            
            <!-- Mood Catcher Game -->
            <div id="mood-game" class="game-container">
                <h3>Mood Catcher</h3>
                <p class="game-description">Klik gelembung emosi untuk mendapatkan pesan afirmasi positif. Tangkap sebanyak mungkin dalam 30 detik!</p>
                
                <div class="mood-game-area" id="moodGameArea">
                    <!-- Bubbles will be generated here by JavaScript -->
                </div>
                
                <div class="affirmation-display" id="affirmationDisplay">
                    Klik gelembung untuk melihat afirmasi positif
                </div>
                
                <div class="game-stats">
                    <div>Waktu: <span id="gameTime">30</span>s</div>
                    <div>Skor: <span id="gameScore">0</span></div>
                    <button class="btn btn-primary" id="startMoodGame">Mulai Game</button>
                </div>
            </div>
            
            <!-- Memory Game -->
            <div id="memory-game" class="game-container">
                <div class="memory-game-container">
                    <h3>Memory Bloom</h3>
                    <p class="game-description">Cocokkan pasangan gambar yang sama untuk melatih ingatan dan fokus. Semakin sedikit langkah, semakin baik!</p>
                    
                    <div class="memory-stats">
                        <div>Langkah: <span id="memoryMoves">0</span></div>
                        <div>Waktu: <span id="memoryTime">0</span>s</div>
                        <div>Pasangan Ditemukan: <span id="memoryMatches">0</span>/8</div>
                    </div>
                    
                    <div class="memory-difficulty">
                        <button class="difficulty-btn active" data-difficulty="easy">Mudah (4x4)</button>
                        <button class="difficulty-btn" data-difficulty="medium">Sedang (4x5)</button>
                        <button class="difficulty-btn" data-difficulty="hard">Sulit (6x6)</button>
                    </div>
                    
                    <div class="memory-grid" id="memoryGrid">
                        <!-- Memory cards will be generated here -->
                    </div>
                    
                    <div class="game-controls">
                        <button class="btn btn-primary" id="startMemoryGame">Mulai Game Baru</button>
                        <button class="btn btn-secondary" id="resetMemoryGame">Reset</button>
                    </div>
                </div>
            </div>
            
            <!-- Puzzle Game -->
            <div id="puzzle-game" class="game-container">
                <div class="puzzle-container">
                    <h3>Puzzle Damai</h3>
                    <p class="game-description">Atur kepingan puzzle dengan menukar posisi untuk membentuk gambar utuh. Klik kepingan di sebelah kotak kosong untuk memindahkannya.</p>
                    
                    <div class="puzzle-stats">
                        <div>Langkah: <span id="puzzleMoves">0</span></div>
                        <div>Waktu: <span id="puzzleTime">0</span>s</div>
                    </div>
                    
                    <div class="puzzle-grid" id="puzzleGrid">
                        <!-- Puzzle pieces will be generated here -->
                    </div>
                    
                    <div class="puzzle-controls">
                        <button class="btn btn-primary" id="startPuzzleGame">Mulai Game Baru</button>
                        <button class="btn btn-secondary" id="resetPuzzleGame">Reset</button>
                        <button class="btn btn-secondary" id="hintPuzzle">Bantuan</button>
                    </div>
                    
                    <div id="puzzleMessage" class="game-message"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Articles Page -->
    <section id="articles" class="page">
        <div class="container">
            <h2 class="section-title">Artikel & Edukasi</h2>
            <p class="section-subtitle">Informasi ringan tentang kesehatan mental yang mudah dipahami, tidak judgmental, dan dilengkapi dengan elemen interaktif.</p>
            
            <!-- Back button for article detail view -->
            <div class="back-to-articles" id="backToArticles" style="display: none;">
                <i class="fas fa-arrow-left"></i> Kembali ke Daftar Artikel
            </div>
            
            <!-- Articles Grid -->
            <div class="articles-grid" id="articlesGrid">
                <div class="article-card" data-article="stress">
                    <div class="article-img">
                        <i class="fas fa-wind"></i>
                    </div>
                    <div class="article-content">
                        <h3>Cara Mengelola Stres dengan Mudah</h3>
                        <p>Stres adalah hal normal, tapi bagaimana kita meresponsnya yang penting. Temukan cara-cara sederhana untuk mengelola stres sehari-hari.</p>
                        <a class="read-more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="article-card" data-article="negative-thoughts">
                    <div class="article-img">
                        <i class="fas fa-brain"></i>
                    </div>
                    <div class="article-content">
                        <h3>Bersahabat dengan Suara Negatif dalam Pikiran</h3>
                        <p>Pikiran negatif sering muncul tanpa undangan. Belajar mengenali, menerima, dan meresponsnya dengan cara yang sehat.</p>
                        <a class="read-more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="article-card" data-article="digital-detox">
                    <div class="article-img">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="article-content">
                        <h3>Manfaat Istirahat Digital</h3>
                        <p>Terus terhubung dengan dunia digital bisa membuat lelah mental. Temukan manfaat dan cara melakukan detoks digital.</p>
                        <a class="read-more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="article-card" data-article="mood-boosters">
                    <div class="article-img">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="article-content">
                        <h3>Kebiasaan Kecil untuk Memperbaiki Mood</h3>
                        <p>Perubahan kecil dalam rutinitas harian dapat memberikan dampak besar pada suasana hati dan kesejahteraan mental.</p>
                        <a class="read-more">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            
            <!-- Article Detail: Mengelola Stres -->
            <div id="article-stress" class="article-detail-container">
                <div class="article-header">
                    <h2>Cara Mengelola Stres dengan Mudah</h2>
                    <div class="article-meta">
                        <span><i class="far fa-clock"></i> 5 min read</span>
                        <span><i class="far fa-calendar"></i> 15 Maret 2023</span>
                        <span><i class="fas fa-tags"></i> Stres, Kesehatan Mental, Self-Care</span>
                    </div>
                </div>
                
                <div class="article-illustration">
                    <i class="fas fa-wind"></i>
                </div>
                
                <div class="article-body">
                    <p>Stres adalah respons alami tubuh terhadap tuntutan atau tekanan. Dalam dosis kecil, stres bisa menjadi motivator yang membantu kita menyelesaikan tugas. Namun, ketika stres menjadi berlebihan atau kronis, dampaknya bisa merugikan kesehatan fisik dan mental kita.</p>
                    
                    <h3>Mengenali Tanda-Tanda Stres</h3>
                    <p>Sebelum kita bisa mengelola stres, penting untuk mengenali tanda-tandanya:</p>
                    <ul>
                        <li><strong>Fisik:</strong> Sakit kepala, tegang otot, kelelahan, gangguan tidur</li>
                        <li><strong>Emosional:</strong> Mudah marah, cemas, merasa kewalahan, mood swing</li>
                        <li><strong>Kognitif:</strong> Sulit berkonsentrasi, pelupa, pesimistis</li>
                        <li><strong>Perilaku:</strong> Perubahan nafsu makan, menarik diri dari sosial, menunda-nunda</li>
                    </ul>
                    
                    <h3>5 Strategi Sederhana Mengelola Stres</h3>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-clipboard-check"></i> Checklist: Aktivitas Pereda Stres</h4>
                        <p>Coba lakukan aktivitas-aktivitas berikut dalam seminggu. Centang setiap aktivitas yang sudah kamu lakukan:</p>
                        
                        <div class="checklist">
                            <div class="checklist-item">
                                <input type="checkbox" id="stressCheck1">
                                <label for="stressCheck1">Berjalan kaki di luar selama 15 menit</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="stressCheck2">
                                <label for="stressCheck2">Menulis 3 hal yang saya syukuri hari ini</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="stressCheck3">
                                <label for="stressCheck3">Mematikan notifikasi ponsel selama 1 jam</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="stressCheck4">
                                <label for="stressCheck4">Melakukan latihan pernapasan 4-7-8</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="stressCheck5">
                                <label for="stressCheck5">Minum air putih yang cukup (8 gelas)</label>
                            </div>
                        </div>
                        
                        <p id="stressCheckResult" class="checklist-result"></p>
                        <button id="stressCheckBtn" class="reflection-save">Lihat Progress</button>
                    </div>
                    
                    <h3>Latihan Pernapasan 4-7-8</h3>
                    <p>Teknik pernapasan sederhana ini dapat membantu menenangkan sistem saraf dalam hitungan menit:</p>
                    <ol>
                        <li>Duduk dengan nyaman, punggung lurus</li>
                        <li>Tarik napas perlahan melalui hidung selama 4 hitungan</li>
                        <li>Tahan napas selama 7 hitungan</li>
                        <li>Hembuskan napas perlahan melalui mulut selama 8 hitungan</li>
                        <li>Ulangi 3-4 kali</li>
                    </ol>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-question-circle"></i> Kuis Singkat: Pemahaman tentang Stres</h4>
                        <p>Test pengetahuanmu tentang manajemen stres dengan kuis singkat ini:</p>
                        
                        <div class="quiz-container">
                            <div class="quiz-question">
                                <h5>1. Manakah yang BUKAN merupakan tanda stres?</h5>
                                <div class="quiz-options">
                                    <div class="quiz-option" data-quiz="stress" data-question="1" data-answer="a">
                                        <span>A. Peningkatan energi dan fokus</span>
                                    </div>
                                    <div class="quiz-option" data-quiz="stress" data-question="1" data-answer="b">
                                        <span>B. Sakit kepala dan tegang otot</span>
                                    </div>
                                    <div class="quiz-option" data-quiz="stress" data-question="1" data-answer="c">
                                        <span>C. Mudah marah dan cemas</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="quiz-question">
                                <h5>2. Teknik pernapasan 4-7-8 melibatkan:</h5>
                                <div class="quiz-options">
                                    <div class="quiz-option" data-quiz="stress" data-question="2" data-answer="a">
                                        <span>A. Tarik napas 4 detik, tahan 7 detik, hembuskan 8 detik</span>
                                    </div>
                                    <div class="quiz-option" data-quiz="stress" data-question="2" data-answer="b">
                                        <span>B. Tarik napas 7 detik, tahan 4 detik, hembuskan 8 detik</span>
                                    </div>
                                    <div class="quiz-option" data-quiz="stress" data-question="2" data-answer="c">
                                        <span>C. Tarik napas 8 detik, tahan 4 detik, hembuskan 7 detik</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="quiz-result" id="stressQuizResult">
                                <!-- Result will be displayed here -->
                            </div>
                        </div>
                        
                        <button id="stressQuizBtn" class="reflection-save">Cek Jawaban</button>
                    </div>
                    
                    <h3>Kapan Harus Mencari Bantuan Profesional?</h3>
                    <p>Jika stres mulai mengganggu fungsi sehari-hari, atau jika kamu mengalami gejala seperti serangan panik, pikiran untuk menyakiti diri sendiri, atau kesulitan parah dalam beraktivitas normal, sebaiknya konsultasikan dengan profesional kesehatan mental.</p>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-pen"></i> Refleksi Pribadi</h4>
                        <p>Apa yang biasanya menjadi pemicu stres bagimu? Tuliskan 1-2 strategi yang bisa kamu coba untuk mengelolanya:</p>
                        <textarea class="reflection-textarea" id="stressReflection" placeholder="Tulis refleksimu di sini..."></textarea>
                        <button id="stressReflectionSave" class="reflection-save">Simpan Refleksi</button>
                        <p id="stressReflectionMessage" class="reflection-message"></p>
                    </div>
                </div>
            </div>
            
            <!-- Article Detail: Suara Negatif dalam Pikiran -->
            <div id="article-negative-thoughts" class="article-detail-container">
                <div class="article-header">
                    <h2>Bersahabat dengan Suara Negatif dalam Pikiran</h2>
                    <div class="article-meta">
                        <span><i class="far fa-clock"></i> 6 min read</span>
                        <span><i class="far fa-calendar"></i> 22 Maret 2023</span>
                        <span><i class="fas fa-tags"></i> Pikiran Negatif, Self-Talk, Kognitif</span>
                    </div>
                </div>
                
                <div class="article-illustration">
                    <i class="fas fa-brain"></i>
                </div>
                
                <div class="article-body">
                    <p>Pikiran negatif adalah bagian normal dari pengalaman manusia. Otak kita secara evolusioner dikondisikan untuk lebih memperhatikan ancaman potensial, yang bisa menjelaskan mengapa pikiran negatif seringkali lebih mudah muncul dan lebih menempel daripada pikiran positif.</p>
                    
                    <h3>Jenis-Jenis Distorsi Kognitif</h3>
                    <p>Distorsi kognitif adalah pola pikir tidak rasional yang memperkuat pikiran negatif. Mengenali jenis-jenisnya bisa membantu kita merespons dengan lebih sehat:</p>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-search"></i> Identifikasi Distorsi Kognitif</h4>
                        <p>Baca pernyataan berikut dan pilih jenis distorsi kognitif yang sesuai:</p>
                        
                        <div class="quiz-container">
                            <div class="quiz-question">
                                <h5>"Saya pasti akan gagal presentasi besok, seperti yang selalu terjadi."</h5>
                                <div class="quiz-options">
                                    <div class="quiz-option" data-quiz="cognitive" data-question="1" data-answer="a">
                                        <span>A. Pemikiran All-or-Nothing (Hitam-putih)</span>
                                    </div>
                                    <div class="quiz-option" data-quiz="cognitive" data-question="1" data-answer="b">
                                        <span>B. Generalisasi Berlebihan</span>
                                    </div>
                                    <div class="quiz-option" data-quiz="cognitive" data-question="1" data-answer="c">
                                        <span>C. Ramalan (Fortune Telling)</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="quiz-question">
                                <h5>"Kalau saya tidak melakukan ini dengan sempurna, berarti saya gagal total."</h5>
                                <div class="quiz-options">
                                    <div class="quiz-option" data-quiz="cognitive" data-question="2" data-answer="a">
                                        <span>A. Pemikiran All-or-Nothing (Hitam-putih)</span>
                                    </div>
                                    <div class="quiz-option" data-quiz="cognitive" data-question="2" data-answer="b">
                                        <span>B. Penyaringan Mental (Hanya melihat negatif)</span>
                                    </div>
                                    <div class="quiz-option" data-quiz="cognitive" data-question="2" data-answer="c">
                                        <span>C. Personalisasi (Menganggap segalanya tentang diri sendiri)</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="quiz-result" id="cognitiveQuizResult">
                                <!-- Result will be displayed here -->
                            </div>
                        </div>
                        
                        <button id="cognitiveQuizBtn" class="reflection-save">Cek Jawaban</button>
                    </div>
                    
                    <h3>Teknik Reframing (Membingkai Ulang)</h3>
                    <p>Reframing adalah teknik untuk mengubah cara kita melihat suatu situasi dengan mencari perspektif yang lebih seimbang dan realistis.</p>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-exchange-alt"></i> Latihan Reframing</h4>
                        <p>Coba ubah pernyataan negatif ini menjadi lebih seimbang:</p>
                        
                        <div class="checklist">
                            <div class="checklist-item">
                                <input type="checkbox" id="reframeCheck1">
                                <label for="reframeCheck1">Pikiran: "Saya selalu gagal dalam hubungan."
                                <br><small>Reframe: "Beberapa hubungan saya tidak berjalan sesuai harapan, tapi saya belajar dari pengalaman itu."</small></label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="reframeCheck2">
                                <label for="reframeCheck2">Pikiran: "Saya tidak bisa melakukan apa pun dengan benar."
                                <br><small>Reframe: "Saya membuat kesalahan, seperti semua orang. Saya bisa belajar dan mencoba lagi."</small></label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="reframeCheck3">
                                <label for="reframeCheck3">Pikiran: "Semua orang pasti memperhatikan kegagalan saya."
                                <br><small>Reframe: "Orang-orang mungkin tidak memperhatikan sebanyak yang saya kira, dan kebanyakan orang terlalu sibuk dengan kehidupan mereka sendiri."</small></label>
                            </div>
                        </div>
                    </div>
                    
                    <h3>Mengembangkan Self-Compassion</h3>
                    <p>Self-compassion (belas kasih pada diri sendiri) adalah kunci untuk merespons pikiran negatif dengan lebih lembut. Ini melibatkan tiga komponen:</p>
                    <ol>
                        <li><strong>Kesadaran</strong> - Menyadari bahwa kita sedang menderita</li>
                        <li><strong>Kemanusiaan Bersama</strong> - Mengakui bahwa penderitaan adalah bagian dari pengalaman manusia</li>
                        <li><strong>Kebaikan pada Diri Sendiri</strong> - Merespons dengan kelembutan, bukan kritik</li>
                    </ol>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-pen"></i> Refleksi: Dialog dengan Diri Sendiri</h4>
                        <p>Bayangkan teman baikmu mengalami pikiran negatif yang sama dengan yang kamu alami. Apa yang akan kamu katakan padanya? Sekarang coba tuliskan hal yang sama untuk dirimu sendiri:</p>
                        <textarea class="reflection-textarea" id="selfCompassionReflection" placeholder="Tulis kata-kata penyemangat untuk dirimu sendiri di sini..."></textarea>
                        <button id="selfCompassionSave" class="reflection-save">Simpan Pesan untuk Diriku</button>
                        <p id="selfCompassionMessage" class="reflection-message"></p>
                    </div>
                </div>
            </div>
            
            <!-- Article Detail: Istirahat Digital -->
            <div id="article-digital-detox" class="article-detail-container">
                <div class="article-header">
                    <h2>Manfaat Istirahat Digital yang Perlu Kamu Tahu</h2>
                    <div class="article-meta">
                        <span><i class="far fa-clock"></i> 7 min read</span>
                        <span><i class="far fa-calendar"></i> 5 April 2023</span>
                        <span><i class="fas fa-tags"></i> Digital Detox, Teknologi, Kesehatan Mental</span>
                    </div>
                </div>
                
                <div class="article-illustration">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                
                <div class="article-body">
                    <p>Di era digital seperti sekarang, kita terhubung hampir 24/7. Rata-rata orang memeriksa ponselnya 58 kali sehari, dengan waktu layar harian mencapai 3-5 jam. Meski teknologi membawa banyak manfaat, terlalu terhubung bisa menyebabkan "kelelahan digital" yang memengaruhi kesehatan mental kita.</p>
                    
                    <h3>Tanda-Tanda Kamu Perlu Istirahat Digital</h3>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-clipboard-check"></i> Checklist: Tanda Kelelahan Digital</h4>
                        <p>Cek tanda-tanda berikut. Semakin banyak yang kamu alami, semakin besar kemungkinan kamu perlu istirahat digital:</p>
                        
                        <div class="checklist">
                            <div class="checklist-item">
                                <input type="checkbox" id="digitalCheck1">
                                <label for="digitalCheck1">Merasa cemas ketika tidak bisa memeriksa ponsel</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="digitalCheck2">
                                <label for="digitalCheck2">Sulit berkonsentrasi pada tugas tanpa terganggu notifikasi</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="digitalCheck3">
                                <label for="digitalCheck3">Membandingkan diri sendiri dengan orang lain di media sosial</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="digitalCheck4">
                                <label for="digitalCheck4">Kesulitan tidur karena menatap layar sebelum tidur</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="digitalCheck5">
                                <label for="digitalCheck5">Merasa lelah secara mental setelah menghabiskan waktu di media sosial</label>
                            </div>
                        </div>
                        
                        <p id="digitalCheckResult" class="checklist-result"></p>
                        <button id="digitalCheckBtn" class="reflection-save">Lihat Hasil</button>
                    </div>
                    
                    <h3>Manfaat Istirahat Digital yang Terbukti Ilmiah</h3>
                    <ul>
                        <li><strong>Meningkatkan kualitas tidur:</strong> Cahaya biru dari layar mengganggu produksi melatonin, hormon pengatur tidur.</li>
                        <li><strong>Mengurangi kecemasan dan depresi:</strong> Studi menunjukkan korelasi antara penggunaan media sosial berlebihan dengan gejala depresi.</li>
                        <li><strong>Meningkatkan fokus dan produktivitas:</strong> Multitasking digital sebenarnya mengurangi efisiensi kognitif kita.</li>
                        <li><strong>Memperbaiki hubungan interpersonal:</strong> Hadir sepenuhnya dalam interaksi tatap muka memperkuat hubungan.</li>
                        <li><strong>Meningkatkan kreativitas:</strong> Memberi ruang bagi pikiran untuk mengembara tanpa gangguan digital merangsang kreativitas.</li>
                    </ul>
                    
                    <h3>Rencana Detoks Digital 7 Hari</h3>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-calendar-alt"></i> Rencana Detoks Digital Mingguan</h4>
                        <p>Pilih hari-hari yang akan kamu dedikasikan untuk mengurangi waktu layar:</p>
                        
                        <div class="checklist">
                            <div class="checklist-item">
                                <input type="checkbox" id="detoxDay1">
                                <label for="detoxDay1"><strong>Senin:</strong> Tidak memeriksa ponsel selama 1 jam pertama setelah bangun</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="detoxDay2">
                                <label for="detoxDay2"><strong>Selasa:</strong> Mematikan notifikasi non-esensial sepanjang hari</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="detoxDay3">
                                <label for="detoxDay3"><strong>Rabu:</strong> Tidak menggunakan ponsel selama waktu makan</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="detoxDay4">
                                <label for="detoxDay4"><strong>Kamis:</strong> Menghapus 1 aplikasi media sosial dari ponsel</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="detoxDay5">
                                <label for="detoxDay5"><strong>Jumat:</strong> Tidak menatap layar 1 jam sebelum tidur</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="detoxDay6">
                                <label for="detoxDay6"><strong>Sabtu:</strong> Menghabiskan 2 jam tanpa perangkat digital</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="detoxDay7">
                                <label for="detoxDay7"><strong>Minggu:</strong> Refleksi dan perencanaan untuk minggu depan</label>
                            </div>
                        </div>
                        
                        <button id="detoxPlanSave" class="reflection-save">Simpan Rencana Detoks</button>
                        <p id="detoxPlanMessage" class="reflection-message"></p>
                    </div>
                    
                    <h3>Alternatif Aktivitas Non-Digital</h3>
                    <p>Saat mengurangi waktu layar, coba aktivitas-aktivitas berikut:</p>
                    <ul>
                        <li>Membaca buku fisik (bukan e-book)</li>
                        <li>Berjalan-jalan di alam</li>
                        <li>Menulis jurnal dengan pena dan kertas</li>
                        <li>Melakukan hobi kreatif (menggambar, merajut, memasak)</li>
                        <li>Berbicara tatap muka dengan teman atau keluarga</li>
                        <li>Berlatih mindfulness atau meditasi</li>
                    </ul>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-pen"></i> Refleksi: Hubungan dengan Teknologi</h4>
                        <p>Apa yang paling kamu rindukan dari kehidupan sebelum era digital? Aktivitas non-digital apa yang ingin kamu coba atau kembalikan?</p>
                        <textarea class="reflection-textarea" id="digitalReflection" placeholder="Tulis refleksimu tentang hubunganmu dengan teknologi..."></textarea>
                        <button id="digitalReflectionSave" class="reflection-save">Simpan Refleksi</button>
                        <p id="digitalReflectionMessage" class="reflection-message"></p>
                    </div>
                </div>
            </div>
            
            <!-- Article Detail: Kebiasaan Memperbaiki Mood -->
            <div id="article-mood-boosters" class="article-detail-container">
                <div class="article-header">
                    <h2>Kebiasaan Kecil untuk Memperbaiki Mood Secara Alami</h2>
                    <div class="article-meta">
                        <span><i class="far fa-clock"></i> 6 min read</span>
                        <span><i class="far fa-calendar"></i> 12 April 2023</span>
                        <span><i class="fas fa-tags"></i> Mood, Kebiasaan, Kesehatan Mental</span>
                    </div>
                </div>
                
                <div class="article-illustration">
                    <i class="fas fa-heart"></i>
                </div>
                
                <div class="article-body">
                    <p>Suasana hati (mood) kita fluktuatif secara alami, tetapi ada kebiasaan kecil yang bisa kita terapkan untuk membantu menstabilkan dan memperbaiki mood ketika sedang tidak baik. Kabar baiknya: perubahan kecil dalam rutinitas harian bisa memberikan dampak besar pada kesejahteraan mental kita.</p>
                    
                    <h3>5 Kebiasaan Pagi untuk Memulai Hari dengan Mood Positif</h3>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-sun"></i> Checklist: Rutinitas Pagi yang Menyehatkan Mental</h4>
                        <p>Coba terapkan kebiasaan-kebiasaan ini dalam rutinitas pagimu:</p>
                        
                        <div class="checklist">
                            <div class="checklist-item">
                                <input type="checkbox" id="morningCheck1">
                                <label for="morningCheck1">Minum segelas air putih setelah bangun tidur</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="morningCheck2">
                                <label for="morningCheck2">Menghirup udara segar di luar selama 5 menit</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="morningCheck3">
                                <label for="morningCheck3">Mencatat 3 hal yang disyukuri</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="morningCheck4">
                                <label for="morningCheck4">Melakukan peregangan ringan atau yoga singkat</label>
                            </div>
                            <div class="checklist-item">
                                <input type="checkbox" id="morningCheck5">
                                <label for="morningCheck5">Mendengarkan musik yang membangkitkan semangat</label>
                            </div>
                        </div>
                        
                        <p id="morningCheckResult" class="checklist-result"></p>
                        <button id="morningCheckBtn" class="reflection-save">Lihat Progress Rutinitas Pagi</button>
                    </div>
                    
                    <h3>Sains di Balik Kebiasaan yang Memperbaiki Mood</h3>
                    <p>Kebiasaan-kebiasaan ini bekerja karena memengaruhi kimia otak kita secara positif:</p>
                    <ul>
                        <li><strong>Olahraga ringan:</strong> Meningkatkan endorfin (hormon perasaan baik) dan mengurangi kortisol (hormon stres).</li>
                        <li><strong>Paparan sinar matahari pagi:</strong> Mengatur ritme sirkadian dan meningkatkan produksi serotonin.</li>
                        <li><strong>Praktik syukur:</strong> Mengalihkan fokus dari kekurangan kepada hal-hal positif dalam hidup.</li>
                        <li><strong>Interaksi sosial positif:</strong> Melepaskan oksitosin yang mengurangi stres dan meningkatkan perasaan terhubung.</li>
                        <li><strong>Istirahat yang cukup:</strong> Memungkinkan otak memproses emosi dan mengkonsolidasi memori positif.</li>
                    </ul>
                    
                    <h3>Teknik "Mood Booster" dalam 5 Menit</h3>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-bolt"></i> Quick Mood Boosters</h4>
                        <p>Ketika mood sedang turun, coba salah satu teknik cepat ini:</p>
                        
                        <div class="quiz-container">
                            <div class="quiz-question">
                                <h5>Pilih teknik yang paling menarik untukmu:</h5>
                                <div class="quiz-options">
                                    <div class="quiz-option" data-quiz="moodboost" data-question="1" data-answer="a">
                                        <span>A. Teknik 5-4-3-2-1: Perhatikan 5 hal yang bisa kamu lihat, 4 yang bisa kamu sentuh, 3 yang bisa kamu dengar, 2 yang bisa kamu cium, 1 yang bisa kamu rasakan.</span>
                                    </div>
                                    <div class="quiz-option" data-quiz="moodboost" data-question="1" data-answer="b">
                                        <span>B. Power Pose: Berdiri seperti superhero selama 2 menit untuk meningkatkan kepercayaan diri.</span>
                                    </div>
                                    <div class="quiz-option" data-quiz="moodboost" data-question="1" data-answer="c">
                                        <span>C. Smile Therapy: Tersenyum lebar selama 1 menit (bahkan jika dipaksakan) untuk mengaktifkan sirkuit kebahagiaan di otak.</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="quiz-result" id="moodBoostQuizResult">
                                <!-- Result will be displayed here -->
                            </div>
                        </div>
                        
                        <button id="moodBoostQuizBtn" class="reflection-save">Simpan Pilihan Teknik</button>
                    </div>
                    
                    <h3>Membangun "Toolkit" Kesehatan Mental Pribadi</h3>
                    <p>Setiap orang berbeda, jadi penting untuk bereksperimen dan menemukan apa yang bekerja untukmu. Coba buat daftar aktivitas yang biasanya membantumu merasa lebih baik, dan simpan daftar itu di tempat yang mudah diakses ketika mood sedang turun.</p>
                    
                    <div class="interactive-element">
                        <h4><i class="fas fa-toolbox"></i> Buat Toolkit Kesehatan Mentalmu Sendiri</h4>
                        <p>Tulis 3-5 aktivitas yang biasanya membantumu merasa lebih baik ketika mood sedang tidak bagus:</p>
                        <textarea class="reflection-textarea" id="moodToolkit" placeholder="Contoh: 
1. Mendengarkan lagu favorit
2. Berbicara dengan teman
3. Menulis di jurnal
4. Berjalan-jalan di taman
5. Membaca buku favorit..."></textarea>
                        <button id="moodToolkitSave" class="reflection-save">Simpan Toolkit Saya</button>
                        <p id="moodToolkitMessage" class="reflection-message"></p>
                    </div>
                    
                    <p>Ingatlah bahwa mood yang fluktuatif adalah bagian normal dari kehidupan. Yang penting bukanlah menghilangkan perasaan tidak enak sama sekali, tetapi mengembangkan kemampuan untuk melewatinya dengan lebih mudah dan kembali ke keadaan seimbang dengan lebih cepat.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Mood Tracker Page -->
    <section id="mood" class="page">
        <div class="container">
            <h2 class="section-title">Mood Tracker Harian</h2>
            <p class="section-subtitle">Lacak suasana hatimu setiap hari dan lihat pola mood-mu dalam grafik sederhana.</p>
            
            <div class="mood-tracker-container">
                <h3>Bagaimana perasaanmu hari ini?</h3>
                
                <div class="mood-selector">
                    <div class="mood-option" data-mood="senang">
                        <div class="mood-emoji">😊</div>
                        <div class="mood-name">Senang</div>
                    </div>
                    
                    <div class="mood-option" data-mood="tenang">
                        <div class="mood-emoji">😌</div>
                        <div class="mood-name">Tenang</div>
                    </div>
                    
                    <div class="mood-option" data-mood="netral">
                        <div class="mood-emoji">😐</div>
                        <div class="mood-name">Netral</div>
                    </div>
                    
                    <div class="mood-option" data-mood="capek">
                        <div class="mood-emoji">😔</div>
                        <div class="mood-name">Capek</div>
                    </div>
                    
                    <div class="mood-option" data-mood="tertekan">
                        <div class="mood-emoji">😢</div>
                        <div class="mood-name">Tertekan</div>
                    </div>
                </div>
                
                <button class="btn btn-primary" id="saveMood">Simpan Mood Hari Ini</button>
                
                <h3 class="chart-title">Riwayat Mood 7 Hari Terakhir</h3>
                <div class="mood-chart" id="moodChart">
                    <!-- Chart bars will be generated by JavaScript -->
                </div>
            </div>
        </div>
    </section>

    <!-- Journal Page -->
    <section id="journal" class="page">
        <div class="container">
            <h2 class="section-title">Journal Ringkas</h2>
            <p class="section-subtitle">Tuliskan apa yang kamu rasakan hari ini. Journal akan disimpan secara lokal di perangkatmu.</p>
            
            <div class="journal-container">
                <textarea class="journal-entry" id="journalEntry" placeholder="Apa yang kamu rasakan hari ini? Tuliskan di sini..."></textarea>
                <button class="btn btn-primary" id="saveJournal">Simpan Entry</button>
                
                <div class="journal-entries" id="journalEntries">
                    <h3>Entry Sebelumnya</h3>
                    <!-- Journal entries will be loaded here -->
                </div>
            </div>
        </div>
    </section>

    <!-- Audio Page -->
    <section id="audio" class="page">
        <div class="container">
            <h2 class="section-title">Audio Relaksasi</h2>
            <p class="section-subtitle">Dengarkan suara alam yang menenangkan untuk relaksasi dan meditasi.</p>
            
            <div class="audio-container">
                <div class="audio-grid">
                    <div class="audio-card" data-audio="rain">
                        <div class="audio-icon">
                            <i class="fas fa-cloud-rain"></i>
                        </div>
                        <div class="audio-info">
                            <h4>Suara Hujan</h4>
                            <p>10 menit • Menenangkan</p>
                        </div>
                    </div>
                    
                    <div class="audio-card" data-audio="forest">
                        <div class="audio-icon">
                            <i class="fas fa-tree"></i>
                        </div>
                        <div class="audio-info">
                            <h4>Suara Hutan</h4>
                            <p>15 menit • Menyegarkan</p>
                        </div>
                    </div>
                    
                    <div class="audio-card" data-audio="waves">
                        <div class="audio-icon">
                            <i class="fas fa-water"></i>
                        </div>
                        <div class="audio-info">
                            <h4>Ombak Pantai</h4>
                            <p>12 menit • Relaksasi</p>
                        </div>
                    </div>
                    
                    <div class="audio-card" data-audio="birds">
                        <div class="audio-icon">
                            <i class="fas fa-dove"></i>
                        </div>
                        <div class="audio-info">
                            <h4>Kicauan Burung</h4>
                            <p>8 menit • Menyegarkan</p>
                        </div>
                    </div>
                </div>
                
                <div class="audio-controls" id="audioControls">
                    <button id="playPauseBtn" class="btn btn-primary">
                        <i class="fas fa-play"></i>
                    </button>
                    
                    <div class="audio-progress">
                        <div class="audio-progress-bar" id="audioProgressBar"></div>
                    </div>
                    
                    <span id="currentTime">0:00</span> / <span id="duration">0:00</span>
                    
                    <button id="stopBtn" class="btn btn-secondary">
                        <i class="fas fa-stop"></i>
                    </button>
                </div>
                
                <p id="nowPlaying" class="now-playing"></p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="logo">
                <i class="fas fa-seedling"></i>
                <span>MindGarden</span>
            </div>
            <p>Ruang ringan untuk merawat diri & kesehatan mental</p>
            <p class="copyright">© 2023 MindGarden. Dibuat dengan ❤️ untuk kesejahteraan mental.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
