// Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Page navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target page
            const targetPage = this.getAttribute('data-page');
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            
            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));
            
            // Show target page
            document.getElementById(targetPage).classList.add('active');
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
            
            // If navigating to games page, show the games grid by default
            if (targetPage === 'games') {
                document.querySelectorAll('.game-container').forEach(container => {
                    container.classList.remove('active');
                });
            }
            
            // If navigating to articles page, show the articles grid by default
            if (targetPage === 'articles') {
                document.querySelectorAll('.article-detail-container').forEach(container => {
                    container.classList.remove('active');
                });
                document.getElementById('articlesGrid').style.display = 'grid';
                document.getElementById('backToArticles').style.display = 'none';
            }
        });
    });
    
    // CTA buttons navigation
    const ctaButtons = document.querySelectorAll('[data-page]');
    ctaButtons.forEach(button => {
        if (button.classList.contains('nav-link')) return; // Skip nav links
        
        button.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-page');
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            document.querySelector(`.nav-link[data-page="${targetPage}"]`).classList.add('active');
            
            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));
            
            // Show target page
            document.getElementById(targetPage).classList.add('active');
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
        });
    });
    
    // Game cards
    const gameCards = document.querySelectorAll('.game-card');
    const gameContainers = document.querySelectorAll('.game-container');
    
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            const gameType = this.getAttribute('data-game');
            
            // Hide all game containers
            gameContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            // Show selected game
            document.getElementById(`${gameType}-game`).classList.add('active');
        });
    });
    
    // Article cards
    const articleCards = document.querySelectorAll('.article-card');
    const articleDetailContainers = document.querySelectorAll('.article-detail-container');
    const backToArticlesBtn = document.getElementById('backToArticles');
    const articlesGrid = document.getElementById('articlesGrid');
    
    articleCards.forEach(card => {
        card.addEventListener('click', function() {
            const articleType = this.getAttribute('data-article');
            
            // Hide articles grid
            articlesGrid.style.display = 'none';
            
            // Hide all article detail containers
            articleDetailContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            // Show selected article
            document.getElementById(`article-${articleType}`).classList.add('active');
            
            // Show back button
            backToArticlesBtn.style.display = 'flex';
        });
    });
    
    // Back to articles button
    backToArticlesBtn.addEventListener('click', function() {
        // Hide all article detail containers
        articleDetailContainers.forEach(container => {
            container.classList.remove('active');
        });
        
        // Show articles grid
        articlesGrid.style.display = 'grid';
        
        // Hide back button
        this.style.display = 'none';
    });
    
    // Initialize all features
    initBreathingGame();
    initMoodGame();
    initMemoryGame();
    initPuzzleGame();
    initArticleInteractions();
    initMoodTracker();
    initJournal();
    initAudioPlayer();
});

// Breathing Bloom Game
function initBreathingGame() {
    const breathingCircle = document.getElementById('breathingCircle');
    const breathText = document.getElementById('breathText');
    const cycleCount = document.getElementById('cycleCount');
    const calmScore = document.getElementById('calmScore');
    const startBtn = document.getElementById('startBreathing');
    const resetBtn = document.getElementById('resetBreathing');
    const instruction = document.getElementById('breathing-instruction');
    
    let isBreathing = false;
    let currentCycle = 0;
    let score = 0;
    let breathingInterval;
    
    startBtn.addEventListener('click', function() {
        if (isBreathing) {
            stopBreathing();
            startBtn.textContent = 'Mulai';
            startBtn.classList.remove('btn-secondary');
            startBtn.classList.add('btn-primary');
        } else {
            startBreathing();
            startBtn.textContent = 'Berhenti';
            startBtn.classList.remove('btn-primary');
            startBtn.classList.add('btn-secondary');
        }
        isBreathing = !isBreathing;
    });
    
    resetBtn.addEventListener('click', function() {
        stopBreathing();
        isBreathing = false;
        currentCycle = 0;
        score = 0;
        cycleCount.textContent = '0';
        calmScore.textContent = '0';
        breathingCircle.style.transform = 'scale(1)';
        breathText.textContent = 'Tarik Napas';
        instruction.textContent = 'Tarik napas dalam-dalam saat bunga mengembang, dan hembuskan saat bunga menguncup. Ulangi selama 5 siklus.';
        startBtn.textContent = 'Mulai';
        startBtn.classList.remove('btn-secondary');
        startBtn.classList.add('btn-primary');
    });
    
    function startBreathing() {
        let phase = 'inhale'; // inhale, hold, exhale, rest
        let phaseTime = 0;
        
        breathingInterval = setInterval(() => {
            phaseTime++;
            
            if (phase === 'inhale') {
                // Scale up for 4 seconds
                const scale = 1 + (phaseTime / 4) * 0.5;
                breathingCircle.style.transform = `scale(${scale})`;
                breathText.textContent = 'Tarik Napas';
                
                if (phaseTime >= 4) {
                    phase = 'hold';
                    phaseTime = 0;
                    instruction.textContent = 'Tahan napas sebentar...';
                }
            } else if (phase === 'hold') {
                // Hold for 2 seconds
                breathText.textContent = 'Tahan';
                
                if (phaseTime >= 2) {
                    phase = 'exhale';
                    phaseTime = 0;
                    instruction.textContent = 'Sekarang hembuskan perlahan...';
                }
            } else if (phase === 'exhale') {
                // Scale down for 6 seconds
                const scale = 1.5 - (phaseTime / 6) * 0.5;
                breathingCircle.style.transform = `scale(${scale})`;
                breathText.textContent = 'Hembuskan';
                
                if (phaseTime >= 6) {
                    phase = 'rest';
                    phaseTime = 0;
                    instruction.textContent = 'Istirahat sebentar sebelum siklus berikutnya...';
                }
            } else if (phase === 'rest') {
                // Rest for 2 seconds
                breathText.textContent = 'Istirahat';
                
                if (phaseTime >= 2) {
                    phase = 'inhale';
                    phaseTime = 0;
                    currentCycle++;
                    cycleCount.textContent = currentCycle;