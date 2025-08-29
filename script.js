// Dark mode detection
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Smooth scrolling for navigation links
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

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and timeline items
document.querySelectorAll('.card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active navigation links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function updateActiveNavLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
updateActiveNavLink();

// Detect current language
const isEnglish = document.documentElement.lang === 'en';

// Project modal data - Portuguese
const projectDataPT = {
    'school-task': {
        title: 'School Task',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=300&fit=crop&crop=center',
        description: 'Plataforma digital desenvolvida para gestão educacional, facilitando a comunicação entre professores, alunos e pais com interface intuitiva e recursos colaborativos.',
        technologies: 'React, Node.js, MongoDB, Firebase, Socket.io',
        duration: '8 meses',
        team: '5 pessoas (3 devs, 1 designer, 1 PM)',
        results: 'Adoção por 50+ escolas, melhoria de 60% na comunicação escola-família',
        liveLink: 'https://school-task.com',
        codeLink: 'https://github.com/matthfaria96/school-task'
    },
    'bussola-talentos': {
        title: 'Bússola dos Talentos',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&h=300&fit=crop&crop=center',
        description: 'Sistema de orientação vocacional que conecta estudantes às suas aptidões profissionais através de testes personalizados e análises comportamentais avançadas.',
        technologies: 'Vue.js, Python, Django, PostgreSQL, TensorFlow',
        duration: '10 meses',
        team: '6 pessoas (3 devs, 2 designers, 1 data scientist)',
        results: 'Orientação de 10k+ estudantes, 85% de satisfação nas escolhas vocacionais',
        liveLink: 'https://bussolatalentos.com.br',
        codeLink: 'https://github.com/matthfaria96/bussola-talentos'
    },
    'e-planner': {
        title: 'E-planner',
        image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=900&h=300&fit=crop&center',
        description: 'Aplicativo de planejamento pessoal e profissional com recursos de agenda inteligente, definição de metas e acompanhamento de progresso em tempo real.',
        technologies: 'Flutter, Firebase, Node.js, MongoDB, Google Calendar API',
        duration: '6 meses',
        team: '4 pessoas (2 devs, 1 designer, 1 PM)',
        results: 'Aumento de 70% na produtividade dos usuários, 4.7★ rating nas app stores',
        liveLink: 'https://e-planner.app',
        codeLink: 'https://github.com/matthfaria96/e-planner'
    }
};

// Project modal data - English
const projectDataEN = {
    'school-task': {
        title: 'School Task',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=300&fit=crop&crop=center',
        description: 'Digital platform developed for educational management, facilitating communication between teachers, students, and parents with an intuitive interface and collaborative features.',
        technologies: 'React, Node.js, MongoDB, Firebase, Socket.io',
        duration: '8 months',
        team: '5 people (3 devs, 1 designer, 1 PM)',
        results: 'Adoption by 50+ schools, 60% improvement in school-family communication',
        liveLink: 'https://school-task.com',
        codeLink: 'https://github.com/matthfaria96/school-task'
    },
    'bussola-talentos': {
        title: 'Talents Compass',
        image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&h=300&fit=crop&crop=center',
        description: 'Vocational guidance system that connects students to their professional aptitudes through personalized tests and advanced behavioral analysis.',
        technologies: 'Vue.js, Python, Django, PostgreSQL, TensorFlow',
        duration: '10 months',
        team: '6 people (3 devs, 2 designers, 1 data scientist)',
        results: 'Guided 10k+ students, 85% satisfaction in vocational choices',
        liveLink: 'https://bussolatalentos.com.br',
        codeLink: 'https://github.com/matthfaria96/bussola-talentos'
    },
    'e-planner': {
        title: 'E-planner',
        image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=900&h=300&fit=crop&center',
        description: 'Personal and professional planning app with smart calendar features, goal setting, and real-time progress tracking.',
        technologies: 'Flutter, Firebase, Node.js, MongoDB, Google Calendar API',
        duration: '6 months',
        team: '4 people (2 devs, 1 designer, 1 PM)',
        results: '70% increase in user productivity, 4.7★ rating on app stores',
        liveLink: 'https://e-planner.app',
        codeLink: 'https://github.com/matthfaria96/e-planner'
    }
};

// Select project data based on language
const projectData = isEnglish ? projectDataEN : projectDataPT;

// Project modal functions
function openModal(projectKey) {
    const project = projectData[projectKey];
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalImage').style.backgroundImage = `url(${project.image})`;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalTechnologies').textContent = project.technologies;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalTeam').textContent = project.team;
    document.getElementById('modalResults').textContent = project.results;

    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add click events to project cards
document.querySelectorAll('.project-card, .project-card-new').forEach(card => {
    card.addEventListener('click', function() {
        const projectKey = this.getAttribute('data-project');
        openModal(projectKey);
    });
});

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with ESC key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Update current year to 2025
document.getElementById('currentYear').textContent = '2025';

// Language switch functions

// Desktop dropdown functions
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    const btn = document.querySelector('.language-dropdown-btn');
    
    dropdown.classList.toggle('show');
    btn.classList.toggle('active');
}

function selectLanguage(language, element) {
    document.getElementById('currentLanguage').innerHTML = language;
    document.getElementById('languageDropdown').classList.remove('show');
    document.querySelector('.language-dropdown-btn').classList.remove('active');
    
    // Language switch logic
    if (language.includes('BR')) {
        window.location.href = 'index.html';
    } else if (language.includes('US')) {
        window.location.href = 'index-en.html';
    }
}

// Mobile switch functions
function switchToEnglish(element) {
    document.querySelector('.language-option.active').classList.remove('active');
    element.classList.add('active');
    window.location.href = 'index-en.html';
}

function switchToPortuguese(element) {
    document.querySelector('.language-option.active').classList.remove('active');
    element.classList.add('active');
    window.location.href = 'index.html';
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown && !dropdown.contains(event.target)) {
        document.getElementById('languageDropdown').classList.remove('show');
        document.querySelector('.language-dropdown-btn').classList.remove('active');
    }
});

// Close hamburger menu when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');
    
    if (navbar && navbar.classList.contains('show') && 
        !navbar.contains(event.target) && 
        !toggler.contains(event.target)) {
        
        const bsCollapse = new bootstrap.Collapse(navbar, {
            hide: true
        });
    }
});