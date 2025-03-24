// Yazı animasyonu
const typingText = document.querySelector('.typing-text');
const texts = ['AI Developer', 'Computer Vision Expert', 'Deep Learning Engineer'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const translations = {
    en: {
        home: 'Home',
        about: 'About',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
        hero_title: 'Shape the Future<br>with AI',
        about_title: 'About Me',
        about_text1: 'I am a Computer Vision and Deep Learning Engineer specializing in facial recognition systems and 3D face modeling. Currently working on innovative solutions in the field of computer vision, with a focus on diffusion models and texture completion techniques.',
        about_text2: 'As a member of ITU Cezeri UAV Team, I contribute to unmanned aerial vehicle projects through web development and AI integration. My recent achievements include securing 3rd place in Anadolu Agency\'s National Hackathon with a face recognition system, and presenting research on texture completion using diffusion models at the GITMA Conference.',
        projects_title: 'Projects',
        project1_title: 'Cezeri UAV Team Website',
        project1_desc: 'Developed the official website for ITU Cezeri UAV Team, showcasing our innovative UAV projects and achievements. Built with React.js and Next.js, featuring a modern blog section highlighting team activities, technical articles, and competition experiences. Implemented responsive design with Tailwind CSS and integrated a dynamic content management system for easy updates.',
        project2_title: 'Face Recognition System',
        project2_desc: 'Developed a high-performance face recognition system for Anadolu Agency (AA), achieving 3rd place in their national hackathon. The system features real-time face detection and recognition capabilities, optimized for large-scale media analysis. Implemented with deep learning technologies, achieving 99.5% accuracy in identity verification and real-time processing of multiple video streams.',
        project3_title: 'GITMA Conference Paper',
        project3_desc: 'Research paper focused on enhancing single-image texture completion using Diffusion Probabilistic Models, presented at GITMA Conference. The study addresses data loss challenges in 3D face modeling caused by head rotations, proposing innovative solutions using DDPMs and achieving significant improvements in reconstruction accuracy compared to traditional methods.',
        skills_title: 'Skills',
        skills_ai: 'AI & Deep Learning',
        skills_prog: 'Programming & Tools',
        skills_lang: 'Programming Languages',
        contact_title: 'Contact',
        contact_name: 'Your Name',
        contact_email: 'Your Email',
        contact_message: 'Your Message',
        contact_send: 'Send',
        footer_text: '© 2024 Onuralp Gayret. All rights reserved.',
        typing_texts: ['AI Developer', 'Computer Vision Expert', 'Deep Learning Engineer']
    },
    tr: {
        home: 'Anasayfa',
        about: 'Hakkımda',
        projects: 'Projeler',
        skills: 'Yetenekler',
        contact: 'İletişim',
        hero_title: 'Yapay Zeka ile<br>Geleceği Şekillendir',
        about_title: 'Hakkımda',
        about_text1: 'Yüz tanıma sistemleri ve 3B yüz modellemesi konusunda uzmanlaşmış bir Bilgisayarlı Görü ve Derin Öğrenme Mühendisiyim. Şu anda bilgisayarlı görü alanında, difüzyon modelleri ve doku tamamlama teknikleri üzerine yenilikçi çözümler geliştiriyorum.',
        about_text2: 'İTÜ Cezeri İHA Takımı üyesi olarak, web geliştirme ve yapay zeka entegrasyonu yoluyla insansız hava aracı projelerine katkıda bulunuyorum. Son başarılarım arasında Anadolu Ajansı\'nın Ulusal Hackathon\'unda yüz tanıma sistemiyle 3.lük ve GITMA Konferansı\'nda difüzyon modelleri kullanarak doku tamamlama üzerine araştırmamın sunumu yer alıyor.',
        projects_title: 'Projeler',
        project1_title: 'Cezeri İHA Takımı Web Sitesi',
        project1_desc: 'İTÜ Cezeri İHA Takımı için geliştirilen resmi web sitesi, yenilikçi İHA projelerimizi ve başarılarımızı sergiliyor. React.js ve Next.js ile oluşturulan site, takım aktiviteleri, teknik makaleler ve yarışma deneyimlerini içeren modern bir blog bölümüne sahip. Tailwind CSS ile responsive tasarım ve kolay güncellemeler için dinamik içerik yönetim sistemi entegre edildi.',
        project2_title: 'Yüz Tanıma Sistemi',
        project2_desc: 'Anadolu Ajansı (AA) için geliştirilen ve ulusal hackathon\'da 3.lük elde eden yüksek performanslı yüz tanıma sistemi. Sistem, büyük ölçekli medya analizi için optimize edilmiş gerçek zamanlı yüz tespiti ve tanıma özelliklerine sahip. Derin öğrenme teknolojileri ile geliştirilen sistem, kimlik doğrulamada %99.5 doğruluk oranı ve çoklu video akışlarının gerçek zamanlı işlenmesini sağlıyor.',
        project3_title: 'GITMA Konferans Makalesi',
        project3_desc: 'GITMA Konferansı\'nda sunulan, Difüzyon Olasılıksal Modelleri kullanarak tek görüntüden doku tamamlamayı geliştirmeye odaklanan araştırma makalesi. Çalışma, baş dönüşlerinden kaynaklanan 3B yüz modellemedeki veri kaybı zorluklarını ele alıyor ve DDPM\'ler kullanarak yenilikçi çözümler önererek yeniden yapılandırma doğruluğunda önemli iyileştirmeler sağlıyor.',
        skills_title: 'Yetenekler',
        skills_ai: 'Yapay Zeka & Derin Öğrenme',
        skills_prog: 'Programlama & Araçlar',
        skills_lang: 'Programlama Dilleri',
        contact_title: 'İletişim',
        contact_name: 'Adınız',
        contact_email: 'E-posta Adresiniz',
        contact_message: 'Mesajınız',
        contact_send: 'Gönder',
        footer_text: '© 2024 Onuralp Gayret. Tüm hakları saklıdır.',
        typing_texts: ['Yapay Zeka Geliştirici', 'Bilgisayarlı Görü Uzmanı', 'Derin Öğrenme Mühendisi']
    },
    de: {
        home: 'Startseite',
        about: 'Über Mich',
        projects: 'Projekte',
        skills: 'Fähigkeiten',
        contact: 'Kontakt',
        hero_title: 'Gestalte die Zukunft<br>mit KI',
        about_title: 'Über Mich',
        about_text1: 'Ich bin ein Computer Vision und Deep Learning Ingenieur, spezialisiert auf Gesichtserkennungssysteme und 3D-Gesichtsmodellierung. Derzeit arbeite ich an innovativen Lösungen im Bereich Computer Vision, mit Fokus auf Diffusionsmodelle und Texturvervollständigungstechniken.',
        about_text2: 'Als Mitglied des ITU Cezeri UAV Teams trage ich durch Webentwicklung und KI-Integration zu unbemannten Luftfahrzeugprojekten bei. Zu meinen jüngsten Erfolgen gehören der 3. Platz beim National Hackathon der Anadolu Agency mit einem Gesichtserkennungssystem und die Präsentation meiner Forschung zur Texturvervollständigung mit Diffusionsmodellen auf der GITMA-Konferenz.',
        projects_title: 'Projekte',
        project1_title: 'Cezeri UAV Team Webseite',
        project1_desc: 'Entwicklung der offiziellen Webseite für das ITU Cezeri UAV Team, die unsere innovativen UAV-Projekte und Erfolge präsentiert. Mit React.js und Next.js erstellt, mit einem modernen Blog-Bereich für Teamaktivitäten, technische Artikel und Wettbewerbserfahrungen. Implementierung eines responsiven Designs mit Tailwind CSS und Integration eines dynamischen Content-Management-Systems.',
        project2_title: 'Gesichtserkennungssystem',
        project2_desc: 'Entwicklung eines leistungsstarken Gesichtserkennungssystems für die Anadolu Agency (AA), das den 3. Platz beim nationalen Hackathon erreichte. Das System bietet Echtzeit-Gesichtserkennung und -analyse, optimiert für große Medienanalysen. Mit Deep-Learning-Technologien implementiert, erreicht es 99,5% Genauigkeit bei der Identitätsverifizierung und Echtzeit-Verarbeitung mehrerer Videostreams.',
        project3_title: 'GITMA Konferenz Paper',
        project3_desc: 'Forschungsarbeit zur Verbesserung der Einzelbild-Texturvervollständigung mittels Diffusions-Wahrscheinlichkeitsmodellen, präsentiert auf der GITMA-Konferenz. Die Studie behandelt Datenverlust-Herausforderungen bei der 3D-Gesichtsmodellierung durch Kopfdrehungen und schlägt innovative Lösungen mit DDPMs vor.',
        skills_title: 'Fähigkeiten',
        skills_ai: 'KI & Deep Learning',
        skills_prog: 'Programmierung & Tools',
        skills_lang: 'Programmiersprachen',
        contact_title: 'Kontakt',
        contact_name: 'Ihr Name',
        contact_email: 'Ihre E-Mail',
        contact_message: 'Ihre Nachricht',
        contact_send: 'Senden',
        footer_text: '© 2024 Onuralp Gayret. Alle Rechte vorbehalten.',
        typing_texts: ['KI-Entwickler', 'Computer Vision Experte', 'Deep Learning Ingenieur']
    }
};

function changeLanguage(lang) {
    // Navbar linkleri (OAG hariç)
    document.querySelectorAll('.nav-link[data-section]').forEach((link) => {
        const section = link.getAttribute('data-section');
        link.textContent = translations[lang][section];
    });

    // Hero başlığı
    document.querySelector('.hero h1').innerHTML = translations[lang].hero_title;

    // About bölümü
    document.querySelector('#about h2').textContent = translations[lang].about_title;
    const aboutTexts = document.querySelectorAll('.about-text p');
    aboutTexts[0].textContent = translations[lang].about_text1;
    aboutTexts[1].textContent = translations[lang].about_text2;

    // Projects bölümü
    document.querySelector('#projects h2').textContent = translations[lang].projects_title;
    const projectTitles = document.querySelectorAll('.project-card h3');
    const projectDescs = document.querySelectorAll('.project-card p');
    projectTitles[0].textContent = translations[lang].project1_title;
    projectTitles[1].textContent = translations[lang].project2_title;
    projectTitles[2].textContent = translations[lang].project3_title;
    projectDescs[0].textContent = translations[lang].project1_desc;
    projectDescs[1].textContent = translations[lang].project2_desc;
    projectDescs[2].textContent = translations[lang].project3_desc;

    // Skills bölümü
    document.querySelector('#skills h2').textContent = translations[lang].skills_title;
    const skillTitles = document.querySelectorAll('.skill-category h3');
    skillTitles[0].textContent = translations[lang].skills_ai;
    skillTitles[1].textContent = translations[lang].skills_prog;
    skillTitles[2].textContent = translations[lang].skills_lang;

    // Contact bölümü
    document.querySelector('#contact h2').textContent = translations[lang].contact_title;
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    inputs[0].placeholder = translations[lang].contact_name;
    inputs[1].placeholder = translations[lang].contact_email;
    inputs[2].placeholder = translations[lang].contact_message;
    document.querySelector('.contact-form button').textContent = translations[lang].contact_send;

    // Footer
    document.querySelector('footer p').textContent = translations[lang].footer_text;

    // Typing text'i güncelle
    texts.length = 0;
    texts.push(...translations[lang].typing_texts);
    textIndex = 0;
    charIndex = 0;
    isDeleting = false;
    typingText.textContent = '';
}

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

type();

// Scroll animasyonu
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(17, 17, 17, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(17, 17, 17, 0.9)';
        nav.style.boxShadow = 'none';
    }
});

// Form gönderimi
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Form verilerini al
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz
    console.log('Form verileri:', data);
    
    // Formu temizle
    contactForm.reset();
    
    // Başarı mesajı göster
    alert('Mesajınız başarıyla gönderildi!');
});

// Sayfa yüklendiğinde smooth scroll
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

// Proje kartları için hover efekti
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
}); 