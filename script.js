// Current language state and original content storage
let currentLanguage = 'pt';
let originalContent = {};

// Dark mode detection (optimized)
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
function handleDarkMode(e) {
    document.documentElement.classList.toggle('dark', e.matches);
}
darkModeQuery.addEventListener('change', handleDarkMode);
handleDarkMode(darkModeQuery);

// Store original content before any translation
function storeOriginalContent() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        originalContent[key] = element.textContent;
    });
    
    // Store project title
    const projectTitleBussola = document.querySelector('[data-project-title="bussola-talentos"]');
    if (projectTitleBussola) {
        originalContent['bussolaTitle'] = projectTitleBussola.textContent;
    }
}

// Translation function
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    
    if (language === 'pt') {
        // Restore original Portuguese content
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (originalContent[key]) {
                element.textContent = originalContent[key];
            }
        });
        
        // Restore project title
        const projectTitleBussola = document.querySelector('[data-project-title="bussola-talentos"]');
        if (projectTitleBussola && originalContent['bussolaTitle']) {
            projectTitleBussola.textContent = originalContent['bussolaTitle'];
        }
    } else if (language === 'en' && translations[language]) {
        // Apply English translations
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
        
        // Update project title
        const projectTitleBussola = document.querySelector('[data-project-title="bussola-talentos"]');
        if (projectTitleBussola && translations[language].projects['bussola-talentos']) {
            projectTitleBussola.textContent = translations[language].projects['bussola-talentos'].title;
        }
    }
    
    // Update document language
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    currentLanguage = language;
}

// Optimized smooth scrolling
function initSmoothScrolling() {
    document.addEventListener('click', function(e) {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
}

// Optimized navbar background on scroll
let ticking = false;
function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.style.backgroundColor = window.scrollY > 50 ? 
        'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)';
    ticking = false;
}

function onScroll() {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
}

// Optimized intersection observer
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

// Initialize scroll animations
function initScrollAnimations() {
    document.querySelectorAll('.card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Optimized active navigation links
let navTicking = false;
function updateActiveNavLink() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
    navTicking = false;
}

function onNavScroll() {
    if (!navTicking) {
        requestAnimationFrame(updateActiveNavLink);
        navTicking = true;
    }
}

// Project modal functions
function openModal(projectKey) {
    const isEnglish = currentLanguage === 'en';
    const project = isEnglish ? 
        translations.en.projects[projectKey] : 
        getPortugueseProjectData(projectKey);
    
    if (!project) return;

    const images = {
        'school-task': 'projeto1.png',
        'bussola-talentos': 'projeto2.png',
        'e-planner': 'projeto3.png'
    };

    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalImage').style.backgroundImage = `url(${images[projectKey]})`;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalTechnologies').textContent = project.technologies;
    document.getElementById('modalDuration').textContent = project.duration;
    document.getElementById('modalTeam').textContent = project.team;
    document.getElementById('modalResults').textContent = project.results;

    // Update process section texts
    if (isEnglish) {
        document.getElementById('modalProblemText').textContent = project.problemText;
        document.getElementById('modalJourneyText').textContent = project.journeyText;
        document.getElementById('modalHypothesesText').textContent = project.hypothesesText;
        document.getElementById('modalIdeationText').textContent = project.ideationText;
        document.getElementById('modalWireframeText').textContent = project.wireframeText;
        document.getElementById('modalPrototypeText').textContent = project.prototypeText;
    } else {
        // Keep original Portuguese texts
        document.getElementById('modalProblemText').textContent = 'Escolas enfrentavam dificuldades com sistemas de comunicação fragmentados, resultando em informações perdidas e coordenação deficiente entre pais e professores.';
        document.getElementById('modalJourneyText').textContent = 'Mapeamos todo o ecossistema educacional desde a matrícula até a formatura, identificando pontos-chave de contato e pontos problemáticos.';
        document.getElementById('modalHypothesesText').textContent = 'Nossa hipótese era que uma plataforma unificada reduziria as lacunas de comunicação em 50% e aumentaria o engajamento dos pais.';
        document.getElementById('modalIdeationText').textContent = 'Desenvolvemos soluções incluindo mensagens em tempo real, acompanhamento de progresso e notificações automatizadas.';
        document.getElementById('modalWireframeText').textContent = 'Criamos wireframes de baixa fidelidade focando em navegação intuitiva e hierarquia clara de informações.';
        document.getElementById('modalPrototypeText').textContent = 'Desenvolvemos protótipos de alta fidelidade com elementos interativos e testes abrangentes de usuário.';
    }

    // Update process images based on project
    if (projectImages[projectKey]) {
        document.getElementById('modalIdeationImage').innerHTML = `<img src="${projectImages[projectKey].ideation}" alt="Ideação" />`;
        document.getElementById('modalWireframeImage').innerHTML = `<img src="${projectImages[projectKey].wireframe}" alt="Wireframe" />`;
        document.getElementById('modalPrototypeImage').innerHTML = `<img src="${projectImages[projectKey].prototype}" alt="Protótipo" />`;
    }

    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Always scroll to top when opening modal - FIXED SCROLL ISSUE
    setTimeout(() => {
        const modalContent = document.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
    }, 50);
}

function getPortugueseProjectData(projectKey) {
    const ptProjects = {
        'school-task': {
            title: 'School Task',
            description: 'Plataforma digital desenvolvida para gestão educacional, facilitando a comunicação entre professores, alunos e pais com interface intuitiva e recursos colaborativos.',
            technologies: 'React, Node.js, MongoDB, Firebase, Socket.io',
            duration: '8 meses',
            team: '5 pessoas (3 devs, 1 designer, 1 PM)',
            results: 'Adoção por 50+ escolas, melhoria de 60% na comunicação escola-família'
        },
        'bussola-talentos': {
            title: 'Bússola dos Talentos',
            description: 'Sistema de orientação vocacional que conecta estudantes às suas aptidões profissionais através de testes personalizados e análises comportamentais avançadas.',
            technologies: 'Vue.js, Python, Django, PostgreSQL, TensorFlow',
            duration: '10 meses',
            team: '6 pessoas (3 devs, 2 designers, 1 data scientist)',
            results: 'Orientação de 10k+ estudantes, 85% de satisfação nas escolhas vocacionais'
        },
        'e-planner': {
            title: 'E-planner',
            description: 'Aplicativo de planejamento pessoal e profissional com recursos de agenda inteligente, definição de metas e acompanhamento de progresso em tempo real.',
            technologies: 'Flutter, Firebase, Node.js, MongoDB, Google Calendar API',
            duration: '6 meses',
            team: '4 pessoas (2 devs, 1 designer, 1 PM)',
            results: 'Aumento de 70% na produtividade dos usuários, 4.7★ rating nas app stores'
        }
    };
    return ptProjects[projectKey];
}

const projectImages = {
    'school-task': {
        ideation: 'projeto1.png?w=800&h=400&fit=crop',
        wireframe: 'projeto1.png?w=800&h=400&fit=crop',
        prototype: 'projeto1.png?w=800&h=400&fit=crop'
    },
    'bussola-talentos': {
        ideation: 'projeto1.png?w=800&h=400&fit=crop',
        wireframe: 'projeto1.png?w=800&h=400&fit=crop',
        prototype: 'projeto1.png?w=800&h=400&fit=crop'
    },
    'e-planner': {
        ideation: 'projeto1.png?w=800&h=400&fit=crop',
        wireframe: 'projeto1.png?w=800&h=400&fit=crop',
        prototype: 'projeto1.png?w=800&h=400&fit=crop'
    }
};

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Language switch functions
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
    
    const newLang = language.includes('BR') ? 'pt' : 'en';
    translatePage(newLang);
    updateMobileLanguageSwitch(newLang);
}

function switchToEnglish(element) {
    document.querySelector('.language-option.active').classList.remove('active');
    element.classList.add('active');
    translatePage('en');
    document.getElementById('currentLanguage').innerHTML = '<span class="flag-icon flag-us"></span>US';
}

function switchToPortuguese(element) {
    document.querySelector('.language-option.active').classList.remove('active');
    element.classList.add('active');
    translatePage('pt');
    document.getElementById('currentLanguage').innerHTML = '<span class="flag-icon flag-br"></span>BR';
}

function updateMobileLanguageSwitch(language) {
    const mobileOptions = document.querySelectorAll('.language-option');
    mobileOptions.forEach(option => option.classList.remove('active'));
    
    if (language === 'pt') {
        mobileOptions[0].classList.add('active');
    } else {
        mobileOptions[1].classList.add('active');
    }
}

// Event listeners
function initEventListeners() {
    // Scroll events
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scroll', onNavScroll, { passive: true });
    
    // Project cards
    document.addEventListener('click', function(e) {
        const projectCard = e.target.closest('.project-card, .project-card-new');
        if (projectCard) {
            const projectKey = projectCard.getAttribute('data-project');
            openModal(projectKey);
        }
    });
    
    // Modal events
    document.getElementById('projectModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeModal();
    });
    
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
            
            const bsCollapse = new bootstrap.Collapse(navbar, { hide: true });
        }
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    // Store original content
    storeOriginalContent();
    
    // Initialize features
    initSmoothScrolling();
    initScrollAnimations();
    initEventListeners();
    
    // Set current year
    document.getElementById('currentYear').textContent = '2025';
    
    // Initial page setup (already in Portuguese)
    updateActiveNavLink();
});