// ===================================
// DARK MODE TOGGLE
// ===================================
const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

darkModeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('darkMode', html.classList.contains('dark'));
});

// Load dark mode preference from localStorage
if (localStorage.getItem('darkMode') === 'true') {
    html.classList.add('dark');
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ===================================
// BACK TO TOP BUTTON
// ===================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.remove('opacity-0', 'invisible');
        backToTop.classList.add('opacity-100', 'visible');
    } else {
        backToTop.classList.add('opacity-0', 'invisible');
        backToTop.classList.remove('opacity-100', 'visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
});

// ===================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ===================================
// ANIMATE SKILL BARS ON SCROLL
// ===================================
const skillBars = document.querySelectorAll('.skill-bar');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.style.width;
        }
    });
}, { 
    threshold: 0.5 
});

skillBars.forEach(bar => observer.observe(bar));

// ===================================
// CONTACT FORM SUBMISSION
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Display success message (Demo only)
    alert(`Terima kasih ${name}!\n\nPesan Anda telah terkirim.\n\n(Ini hanya demo - untuk benar-benar mengirim pesan, Anda perlu mengintegrasikan dengan backend atau email service seperti EmailJS, Formspree, atau API email lainnya)`);
    
    // Reset form
    contactForm.reset();
    
    // CATATAN: Untuk implementasi real, Anda bisa menggunakan:
    // - EmailJS: https://www.emailjs.com/
    // - Formspree: https://formspree.io/
    // - Backend API sendiri dengan Node.js, PHP, Python, dll.
    
    /*
    // Contoh integrasi dengan EmailJS:
    emailjs.send("service_id", "template_id", {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    })
    .then(function(response) {
        alert('Email berhasil dikirim!');
        contactForm.reset();
    }, function(error) {
        alert('Gagal mengirim email. Silakan coba lagi.');
    });
    */
});

// ===================================
// NAVBAR ACTIVE LINK ON SCROLL
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-purple-600', 'dark:text-purple-400');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-purple-600', 'dark:text-purple-400');
        }
    });
});

// ===================================
// TYPING ANIMATION (Optional Enhancement)
// ===================================
/*
const typingText = document.querySelector('.typing-animation');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    typeWriter();
}
*/

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c👋 Halo! ', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cTerima kasih telah mengunjungi portfolio saya!', 'font-size: 14px; color: #764ba2;');
console.log('%cJika Anda tertarik untuk berkolaborasi, jangan ragu untuk menghubungi saya! 🚀', 'font-size: 12px; color: #667eea;');
