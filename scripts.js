const translations = {
  en: {
    title: 'Abdullah Almutairi - AI & Machine Learning Engineer',
    description: 'Personal portfolio of Abdullah Almutairi showcasing projects, skills, and contact information. Specializing in AI and Machine Learning.',
    logo: 'Abdullah',
    nav: ['About', 'Projects', 'Frameworks', 'Contact'],
    about: {
      name: 'Abdullah Almutairi',
      subtitle: 'AI & Machine Learning Engineer',
      text: "I'm Abdullah Almutairi, specializing in AI and Machine Learning, focused on innovative tech solutions to solve real-world problems."
    },
    projectsTitle: 'Projects I’ve Worked On',
    projects: [
      {
        title: 'Coming Soon',
        role: '',
        description: ''
      },
      {
      title: '',
        role: '',
        description: 'A graduation project aimed at improving urban quality of life by combating noise pollution. SADA uses AI-powered real-time sound classification and monitoring, integrating deep learning, microcontrollers, and cloud services to provide actionable insights for urban planning, aligned with Saudi Vision 2030.'
      },
      {
        title: 'Digital Image Processing and Analysis',
        role: '',
        description: 'Developed advanced image processing algorithms to enhance the contrast of digital images using techniques such as histogram equalization, linear intensity transformation, and logarithmic transformations. These enhancements significantly improved image clarity and quality for subsequent analysis tasks.'
      },
      {
        title: 'Machine Learning Experimentation with Medical Datasets',
        role: '',
        description: 'Conducted comprehensive machine learning analyses on medical datasets related to heart disease, diabetes, and breast cancer. Leveraged tools such as scikit-learn and pandas for model development, resulting in predictive models that aid in early diagnosis and treatment planning.'
      },
    
        
    ],
    frameworksTitle: 'Frameworks I Work With',
    frameworks: ['TensorFlow', 'Pandas', 'Google Colab', 'MATLAB', 'OpenCV'],
    contactTitle: 'Contact Me',
    contact: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      placeholderName: 'Your Name',
      placeholderEmail: 'Your Email',
      placeholderMessage: 'Your Message',
      send: 'Send'
    },
    footer: {
      stayConnected: 'Stay Connected:',
      email: 'Email:',
      rights: '© 2024, Abdullah Almutairi'
    },
    languageToggle: 'العربية'
  },
  ar: {
    title: 'عبدالله المطيري - مهندس ذكاء اصطناعي وتعلم الآلة',
    description: 'محفظة عبدالله المطيري الشخصية التي تعرض المشاريع والمهارات ومعلومات الاتصال. متخصص في الذكاء الاصطناعي وتعلم الآلة.',
    logo: 'عبدالله',
    nav: ['عنّي', 'مشاريعي', 'أطر العمل', 'تواصل معي'],
    about: {
      name: 'عبدالله المطيري',
      subtitle: 'مهندس ذكاء اصطناعي وتعلم الآلة',
      text: 'أنا عبدالله المطيري، طالب علوم حاسب في جامعة الملك سعود متخصص في الذكاء الاصطناعي وتعلم الآلة، أهدف لصناعة حلول تقنية مبتكرة بأستخدام الذكاء الأصطناعي.'
    },
    projectsTitle: 'مشاريع عملت عليها',
    projects: [
      {
        title: 'قريبًا',
        role: '',
        description: ''
      },
      {
        
    title: '',
    role: '',
    description: "طورت نظام صدى لمراقبة وتحليل التلوث الضوضائي في المدن باستخدام تقنيات الذكاء الاصطناعي. يعتمد النظام على التصنيف اللحظي للأصوات باستخدام التعلم العميق، مع تكامل الميكروكنترولر والخدمات السحابية لتوفير رؤى تساعد في تحسين جودة الحياة والتخطيط الحضري، بما يتماشى مع رؤية السعودية 2030."
},
      {
        title: 'معالجة وتحليل الصور الرقمية',
        role: '',
        description: 'قمت بتطوير خوارزميات متقدمة لتعزيز التباين البصري للصور الرقمية باستخدام تقنيات مثل histogram equalization، وlinear intensity transformation، وlogarithmic transformations. هذه التحسينات لم تقتصر على تحسين وضوح وجودة الصور فحسب، بل مهدت الطريق لاستخلاص رؤى أكثر دقة في التحليلات اللاحقة، مما يزيد من موثوقية النتائج ويدعم اتخاذ قرارات أكثر دقة.'      },
      {
        title: 'تجارب تعلم آلي مع مجموعات البيانات الطبية',
        role: '',
        description: 'حللت مجموعات بيانات طبية لأمراض القلب والسكري وسرطان الثدي باستخدام scikit-learn وpandas لبناء نماذج تنبؤية، مما يساعد في التشخيص المبكر وتخطيط العلاج.'
      },
  
    ],
    frameworksTitle: 'أدوات أعمل بها',
    frameworks: ['TensorFlow', 'Pandas', 'Google Colab', 'MATLAB', 'OpenCV'],
    contactTitle: 'تواصل معي',
    contact: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      placeholderName: 'اسمك',
      placeholderEmail: 'بريدك الإلكتروني',
      placeholderMessage: 'رسالتك',
      send: 'إرسال'
    },
    footer: {
      stayConnected: 'ابقى على تواصل:',
      email: 'البريد الإلكتروني:',
      rights: '© 2024، عبدالله المطيري'
    },
    languageToggle: 'English'
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // Set default language to English
  applyTranslations('en');
});

document.getElementById('language-toggle').addEventListener('click', function() {
  const html = document.documentElement;
  const currentLang = html.getAttribute('lang');
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  html.setAttribute('lang', newLang);
  html.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  this.textContent = translations[newLang].languageToggle;
  applyTranslations(newLang);

  // Scroll to the top of the page after language change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100); // Adding a slight delay of 100ms
});

function applyTranslations(lang) {
  const t = translations[lang];
  document.title = t.title;
  document.querySelector('meta[name="description"]').setAttribute('content', t.description);
  document.querySelector('.logo').textContent = t.logo;
  document.querySelectorAll('.nav-link').forEach((el, i) => {
    el.textContent = t.nav[i];
  });

  // About Section
  document.querySelector('#about .section-title').textContent = t.about.name;
  document.querySelector('#about .section-subtitle').textContent = t.about.subtitle;
  document.querySelector('#about .section-text').textContent = t.about.text;

  // Projects Section
  document.querySelector('#projects .section-title').textContent = t.projectsTitle;
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach((card, i) => {
    const title = card.querySelector('.project-title');
    const description = card.querySelector('.project-description');
    if (title && t.projects[i]) {
      title.textContent = t.projects[i].title;
    }
    if (description && t.projects[i].description) {
      description.textContent = t.projects[i].description;
    }
  });

  // Frameworks Section
  document.querySelector('#frameworks .section-title').textContent = t.frameworksTitle;
  document.querySelectorAll('.framework-item p').forEach((el, i) => {
    el.textContent = t.frameworks[i];
  });

  // Contact Section
  document.querySelector('#contact .section-title').textContent = t.contactTitle;
  document.querySelector('.contact-form label[for="name"]').textContent = t.contact.name;
  document.querySelector('.contact-form input#name').setAttribute('placeholder', t.contact.placeholderName);
  document.querySelector('.contact-form label[for="email"]').textContent = t.contact.email;
  document.querySelector('.contact-form input#email').setAttribute('placeholder', t.contact.placeholderEmail);
  document.querySelector('.contact-form label[for="message"]').textContent = t.contact.message;
  document.querySelector('.contact-form textarea#message').setAttribute('placeholder', t.contact.placeholderMessage);
  document.querySelector('.contact-form button').textContent = t.contact.send;

  // Footer
  document.getElementById('footer-name').textContent = t.about.name;
  document.getElementById('footer-rights').textContent = t.footer.rights;
  document.getElementById('footer-stay-connected').textContent = t.footer.stayConnected;
  document.getElementById('footer-email-label').textContent = t.footer.email;

  // Update Text Alignment
  if (lang === 'ar') {
    document.querySelector('footer').style.textAlign = 'right';
  } else {
    document.querySelector('footer').style.textAlign = 'left';
  }
}

// scripts.js
// Updated scripts.js

// Ensure AOS animations are properly initialized when the page loads
let aosInitialized = false;
document.addEventListener('scroll', () => {
  if (!aosInitialized) {
    AOS.init({
      once: true,  // Animation should happen only once
      duration: 600,  // Reduced animation duration to 600ms for a faster feel
      easing: 'ease-out',  // Faster easing function for more snappy animations
      offset: 0,  // Reduced offset to trigger animations earlier
    });
    aosInitialized = true;
  }
});


// Function to handle smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  });
});

// Functionality to add shadows to header when scrolling
document.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
      header.classList.add('shadow-lg');
  } else {
      header.classList.remove('shadow-lg');
  }
});

// Contact form submission handling (example alert for demonstration)
document.querySelector('.contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you shortly.');
});

// Function to highlight active navigation links on scroll
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`a[href="#${sectionId}"]`);

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLink?.classList.add('text-blue-500');
      } else {
          navLink?.classList.remove('text-blue-500');
      }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const closeButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  // Toggle the mobile menu visibility
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
  });

  // Close the mobile menu
  closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });

  // Close the mobile menu if clicking outside of it (optional)
  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
      mobileMenu.classList.remove("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  // Apply saved theme on load
  if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
    }
  } else {
    // Optional: Apply system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark');
      toggleSwitch.checked = true;
    }
  }

  // Listen for toggle changes
  toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
});


  document.addEventListener("DOMContentLoaded", function() {
    // Scroll to the top of the page on refresh
    window.scrollTo(0, 0);
  });


  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual"; // Forces manual scroll restoration to start at the top
  }

  document.addEventListener("DOMContentLoaded", function() {
    window.location.hash = "#home";
  });


  
