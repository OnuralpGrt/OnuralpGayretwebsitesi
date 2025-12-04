// Yazı animasyonu
const typingText = document.querySelector('.typing-text');
const texts = ['AI Developer', 'Computer Vision Expert', 'Deep Learning Specialist'];
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
        about_text1: 'I am Onuralp Gayret, currently working as a long-term Data Scientist intern at Koçfinans. We achieved 3rd place among 133 teams with our face recognition model at the Anadolu Agency IT Valley Media Technologies Hackathon, competed as a finalist in the TÜBİTAK BİGG program, and my article on face reconstruction data loss due to face rotation and compensation methods was published at the international GITMA conference.',
        about_text2: 'After the hackathon, we carried out project developments affiliated with Anadolu Agency. Additionally, we became finalists among the last 9 teams out of 158 teams in the Turkish Technic Aviation Ideathon, where I conducted bird detection studies to prevent birds from entering hangars. Currently, I continue my career by developing data science projects at Koçfinans.',
        projects_title: 'Projects',
        project1_title: 'Cezeri UAV Team Website',
        project1_desc: 'Developed the official website for ITU Cezeri UAV Team, showcasing our innovative UAV projects and achievements. Built with React.js and Next.js, featuring a modern blog section highlighting team activities, technical articles, and competition experiences. Implemented responsive design with Tailwind CSS and integrated a dynamic content management system for easy updates.',
        project2_title: 'Face Recognition System',
        project2_desc: 'Developed a high-performance face recognition system for Anadolu Agency (AA), achieving 3rd place in their national hackathon. The system features real-time face detection and recognition capabilities, optimized for large-scale media analysis. Implemented with deep learning technologies, achieving 99.5% accuracy in identity verification and real-time processing of multiple video streams.',
        project3_title: 'GITMA Conference Paper',
        project3_desc: 'Research paper submitted to GITMA Conference and currently under review, focusing on enhancing single-image texture completion using Diffusion Probabilistic Models. The study addresses data loss challenges in 3D face modeling caused by head rotations and proposes innovative solutions using DDPMs.',
        project4_title: 'Car Damage Classification',
        project4_desc: 'This application automatically detects and classifies damages on car images using a deep learning model. With its Flask-based web interface, users can upload images and instantly see the damaged areas and severity ("minor", "moderate", "severe"). The system is optimized with transfer learning and data augmentation techniques, offering practical solutions for insurance, used car sales, and fleet management.',
        project5_title: 'Turkish Technic Aviation Ideathon',
        project5_desc: 'Competed in the bird hangar entrance prevention area and achieved a degree in our field. We became one of the final 9 teams out of 158 teams. In the project, I implemented bird detection using the YOLOv8 model.',
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
        typing_texts: ['AI Developer', 'Computer Vision Expert', 'Deep Learning Developer'],
        skills_list_ai: [
            'Face Recognition Systems',
            '3D Face Modeling',
            'Diffusion Models',
            'Texture Completion',
            'Real-time Image Processing'
        ]
    },
    tr: {
        home: 'Anasayfa',
        about: 'Hakkımda',
        projects: 'Projeler',
        skills: 'Yetenekler',
        contact: 'İletişim',
        hero_title: 'Yapay Zeka ile<br>Geleceği Şekillendir',
        about_title: 'Hakkımda',
        about_text1: 'Ben Onuralp Gayret, şu anda Koçfinans\'ta uzun dönem Data Scientist stajyeri olarak çalışmaktayım. Anadolu Ajansı Bilişim Vadisi Medya Teknolojileri Hackathonu\'nda geliştirdiğimiz yüz tanıma modeliyle 133 takım arasından 3. olduk, TÜBİTAK BİGG programında finalist olarak yarıştım ve yüz rotasyonuna bağlı yüz rekonstrüksiyonlarında veri kaybını açıklayan ve bunu kompanse edebilecek yöntem üzerine yazdığım makale uluslararası GİTMA konferansında yayımlandı.',
        about_text2: 'Hackathon sonrası Anadolu Ajansı\'na bağlı olarak proje geliştirmeleri gerçekleştirdik. Ayrıca Turkish Technic Aviation Ideathon\'da 158 takım arasından finalist olarak son 9 takım arasına kaldık ve burada kuşun hangara girişini engellemeye yönelik bird detection çalışmaları yürüttüm. Şu anda da Koçfinans\'ta veri bilimi projeleri geliştirerek kariyerime devam etmekteyim.',
        projects_title: 'Projeler',
        project1_title: 'Cezeri İHA Takımı Web Sitesi',
        project1_desc: 'İTÜ Cezeri İHA Takımı için geliştirilen resmi web sitesi, yenilikçi İHA projelerimizi ve başarılarımızı sergiliyor. React.js ve Next.js ile oluşturulan site, takım aktiviteleri, teknik makaleler ve yarışma deneyimlerini içeren modern bir blog bölümüne sahip. Tailwind CSS ile responsive tasarım ve kolay güncellemeler için dinamik içerik yönetim sistemi entegre edildi.',
        project2_title: 'Yüz Tanıma Sistemi',
        project2_desc: 'Anadolu Ajansı (AA) için geliştirilen ve ulusal hackathon\'da 3.lük elde eden yüksek performanslı yüz tanıma sistemi. Sistem, büyük ölçekli medya analizi için optimize edilmiş gerçek zamanlı yüz tespiti ve tanıma özelliklerine sahip. Derin öğrenme teknolojileri ile geliştirilen sistem, kimlik doğrulamada %99.5 doğruluk oranı ve çoklu video akışlarının gerçek zamanlı işlenmesini sağlıyor.',
        project3_title: 'GITMA Konferans Makalesi',
        project3_desc: 'GITMA Konferansı\'na gönderilen ve değerlendirme aşamasında olan, Difüzyon Olasılıksal Modelleri kullanarak tek görüntüden doku tamamlamayı geliştirmeye odaklanan araştırma makalesi. Çalışma, baş dönüşlerinden kaynaklanan 3D yüz modellemedeki veri kaybı zorluklarını ele alıyor ve DDPM\'ler kullanarak yenilikçi çözümler öneriyor.',
        project4_title: 'Car Damage Classification',
        project4_desc: 'Bu uygulama, derin öğrenme tabanlı bir model ile araç görsellerindeki hasarları otomatik olarak tespit eder ve sınıflandırır. Flask tabanlı web arayüzü sayesinde kullanıcılar görsel yükleyip, hasarlı bölgeleri ve hasar seviyesini ("minor", "moderate", "severe") anında görebilir. Sistem, transfer learning ve veri artırma teknikleriyle optimize edilmiştir ve sigorta, ikinci el araç alım-satım gibi alanlarda pratik çözümler sunar.',
        project5_title: 'Turkish Technic Aviation Ideathon',
        project5_desc: 'Kuşların hangar girişini engelleme alanında yarıştık ve kendi alanımızda derece yaptık. 158 takım arasından finale kalan son 9 takımdan birisi olduk. Projede YOLOv8 modelini kullanarak bird detection yapılmasını sağladım.',
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
        typing_texts: ['Yapay Zeka Geliştirici', 'Bilgisayarlı Görü Uzmanı', 'Derin Öğrenme Geliştirici'],
        skills_list_ai: [
            'Yüz Tanıma Sistemleri',
            '3D Yüz Modellemesi',
            'Difüzyon Modelleri',
            'Doku Tamamlama',
            'Gerçek Zamanlı Görüntü İşleme'
        ]
    },
    de: {
        home: 'Startseite',
        about: 'Über Mich',
        projects: 'Projekte',
        skills: 'Fähigkeiten',
        contact: 'Kontakt',
        hero_title: 'Gestalte die Zukunft<br>mit KI',
        about_title: 'Über Mich',
        about_text1: 'Ich bin Onuralp Gayret und arbeite derzeit als langfristiger Data Scientist-Praktikant bei Koçfinans. Mit unserem Gesichtserkennungsmodell beim Anadolu Agency IT Valley Media Technologies Hackathon erreichten wir den 3. Platz unter 133 Teams, ich nahm als Finalist am TÜBİTAK BİGG-Programm teil und mein Artikel über Datenverlust bei Gesichtsrekonstruktionen aufgrund von Gesichtsrotationen und Kompensationsmethoden wurde auf der internationalen GITMA-Konferenz veröffentlicht.',
        about_text2: 'Nach dem Hackathon führten wir Projektentwicklungen in Verbindung mit der Anadolu Agency durch. Außerdem wurden wir bei der Turkish Technic Aviation Ideathon als Finalisten unter die letzten 9 Teams von 158 Teams gewählt, wo ich Bird-Detection-Studien durchführte, um Vögel daran zu hindern, Hangars zu betreten. Derzeit setze ich meine Karriere fort, indem ich Data-Science-Projekte bei Koçfinans entwickle.',
        projects_title: 'Projekte',
        project1_title: 'Cezeri UAV Team Webseite',
        project1_desc: 'Entwicklung der offiziellen Webseite für das ITU Cezeri UAV Team, die unsere innovativen UAV-Projekte und Erfolge präsentiert. Mit React.js und Next.js erstellt, mit einem modernen Blog-Bereich für Teamaktivitäten, technische Artikel und Wettbewerbserfahrungen. Implementierung eines responsiven Designs mit Tailwind CSS und Integration eines dynamischen Content-Management-Systems.',
        project2_title: 'Gesichtserkennungssystem',
        project2_desc: 'Entwicklung eines leistungsstarken Gesichtserkennungssystems für die Anadolu Agency (AA), das den 3. Platz beim nationalen Hackathon erreichte. Das System bietet Echtzeit-Gesichtserkennung und -analyse, optimiert für große Medienanalysen. Mit Deep-Learning-Technologien implementiert, erreicht es 99,5% Genauigkeit bei der Identitätsverifizierung und Echtzeit-Verarbeitung mehrerer Videostreams.',
        project3_title: 'GITMA Konferenz Paper',
        project3_desc: 'Forschungsarbeit, die bei der GITMA-Konferenz eingereicht wurde und sich derzeit in der Begutachtung befindet. Die Studie konzentriert sich auf die Verbesserung der Einzelbild-Texturvervollständigung mittels Diffusions-Wahrscheinlichkeitsmodellen und behandelt Datenverlust-Herausforderungen bei der 3D-Gesichtsmodellierung durch Kopfdrehungen.',
        project4_title: 'Car Damage Classification',
        project4_desc: 'Diese Anwendung erkennt und klassifiziert Schäden an Fahrzeugsbildern automatisch mithilfe eines Deep-Learning-Modells. Über die Flask-basierte Weboberfläche können Nutzer Bilder hochladen und sofort die beschädigten Bereiche sowie den Schweregrad ("minor", "moderate", "severe") sehen. Das System ist mit Transfer Learning und Datenaugmentation optimiert und bietet praktische Lösungen für Versicherung, Gebrauchtwagenhandel und Flottenmanagement.',
        project5_title: 'Turkish Technic Aviation Ideathon',
        project5_desc: 'Wir haben im Bereich der Vogel-Hangar-Eingangsverhinderung konkurriert und in unserem Bereich einen Abschluss erreicht. Wir wurden eines der letzten 9 Teams im Finale von 158 Teams. Im Projekt implementierte ich Bird Detection mit dem YOLOv8-Modell.',
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
        typing_texts: ['KI-Entwickler', 'Computer Vision Experte', 'Deep Learning Entwickler'],
        skills_list_ai: [
            'Gesichtserkennungssysteme',
            '3D-Gesichtsmodellierung',
            'Diffusionsmodelle',
            'Texturvervollständigung',
            'Echtzeit-Bildverarbeitung'
        ]
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
    projectTitles[3].textContent = translations[lang].project4_title;
    projectTitles[4].textContent = translations[lang].project5_title;
    projectDescs[0].textContent = translations[lang].project1_desc;
    projectDescs[1].textContent = translations[lang].project2_desc;
    projectDescs[2].textContent = translations[lang].project3_desc;
    projectDescs[3].textContent = translations[lang].project4_desc;
    projectDescs[4].textContent = translations[lang].project5_desc;

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
// Contact Form Handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    
    // Disable submit button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Gönderiliyor...';
    
    // Submit form data
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => response.json())
    .then(data => {
        // Web3Forms başarılı yanıt verdiğinde
        alert('Mesajınız başarıyla gönderildi!');
            form.reset();
        window.location.href = form.querySelector('input[name="redirect"]').value;
    })
    .catch(error => {
        console.error('Error:', error);
        // Hata durumunda bile mesaj gönderilmiş olabilir
        alert('Mesajınız gönderildi! Ana sayfaya yönlendiriliyorsunuz...');
        form.reset();
        window.location.href = form.querySelector('input[name="redirect"]').value;
    })
    .finally(() => {
        // Re-enable submit button and restore original text
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    });
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

// Hamburger menü fonksiyonu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    navLinks.classList.toggle('active');
    
    // Hamburger menü animasyonu
    const spans = hamburgerMenu.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Mobil menüde bir linke tıklandığında menüyü kapat
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Sayfa yüklendiğinde Türkçe dilini ayarla
document.addEventListener('DOMContentLoaded', function() {
    changeLanguage('tr');
}); 