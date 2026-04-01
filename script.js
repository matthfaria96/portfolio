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

    // Store project titles dynamically
    const titleElements = document.querySelectorAll('[data-project-title]');
    titleElements.forEach(element => {
        const key = element.getAttribute('data-project-title') + 'Title';
        originalContent[key] = element.textContent;
    });
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

        // Restore project titles
        const titleElements = document.querySelectorAll('[data-project-title]');
        titleElements.forEach(element => {
            const projKey = element.getAttribute('data-project-title');
            if (originalContent[projKey + 'Title']) {
                element.textContent = originalContent[projKey + 'Title'];
            }
        });
    } else if (language === 'en' && translations[language]) {
        // Apply English translations
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });

        // Update project titles
        const titleElements = document.querySelectorAll('[data-project-title]');
        titleElements.forEach(element => {
            const projKey = element.getAttribute('data-project-title');
            if (translations[language].projects && translations[language].projects[projKey]) {
                element.textContent = translations[language].projects[projKey].title;
            }
        });
    }

    // Update document language
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    currentLanguage = language;
}

// Optimized smooth scrolling
function initSmoothScrolling() {
    document.addEventListener('click', function (e) {
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

const observer = new IntersectionObserver(function (entries) {
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
        'sua-marca': 'projeto2.png',
        'beleza-rara': 'projeto3.png',
        'be-hard': 'projeto4.png',
        'e-planner': 'projeto5.png',
        'vtech': 'projeto6.png',
        'popclick': 'projeto7.png'
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
        document.getElementById('modalProblemText').textContent = project.problemText || 'Informação não disponível.';
        document.getElementById('modalJourneyText').textContent = project.journeyText || 'Informação não disponível.';
        document.getElementById('modalHypothesesText').textContent = project.hypothesesText || 'Informação não disponível.';
        document.getElementById('modalIdeationText').textContent = project.ideationText || 'Informação não disponível.';
        document.getElementById('modalWireframeText').textContent = project.wireframeText || 'Informação não disponível.';
        document.getElementById('modalPrototypeText').textContent = project.prototypeText || 'Informação não disponível.';
    }

    // Update process images based on project
    if (projectImages[projectKey]) {
        const renderImages = (imgData, alt) => {
            if (!imgData) return '';
            const images = Array.isArray(imgData) ? imgData : [imgData];
            return images.map(src => `<img src="${src}" alt="${alt}" />`).join('');
        };

        document.getElementById('modalIdeationImage').innerHTML = renderImages(projectImages[projectKey].ideation, 'Ideação');
        document.getElementById('modalWireframeImage').innerHTML = renderImages(projectImages[projectKey].wireframe, 'Wireframe');
        document.getElementById('modalPrototypeImage').innerHTML = renderImages(projectImages[projectKey].prototype, 'Protótipo');
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
            description: 'Aplicativo para gerenciar tarefas e atividades usando o método do Rafael Medeiros com interface intuitiva.',
            technologies: 'Figma, Ionic, Firebase, AWS e Google Cloud',
            duration: 'Em andamento desde março de 2025',
            team: 'Equipe de 1 UX e 2 programadores',
            results: 'Aumento na produtividade dos usuários',
            problemText: 'O principal desafio inicial consistia em transpor uma metodologia de ensino já validada (método Rafael Medeiros) para um aplicativo. Focamos em um público-alvo muito bem definido: alunos engajados que já possuíam alta familiaridade com os conceitos. O objetivo era criar uma ferramenta que não apenas complementasse a educação, mas organizasse a vida do usuário sem parecer distante da comunidade.',
            journeyText: 'Para compreender profundamente o desafio, realizamos uma imersão completa no conteúdo educativo. Através da análise de vídeos, palestras e reuniões de alinhamento com o cliente, mapeamos cada etapa do método original. Esse processo permitiu identificar dores e pontos focais de interação.',
            hypothesesText: 'Nossa hipótese principal baseou-se na ideia de que uma experiência guiada, passo a passo, seria fundamental para a adesão contínua. Acreditávamos que se o aplicativo mimetizasse em tela a didática ensinada nas aulas — servindo como um "tutor no bolso" focado em prática e atividades da vida real — a taxa de retenção seria massiva. Traduzir palestras densas em interações modulares resultaria em menor carga cognitiva e maior índice de progresso.',
            ideationText: 'Durante a ideação, adotamos uma abordagem ágil. Aproveitamos a arquitetura de base sólida de um projeto interno prévio focado em jornadas (projeto Equilibre), assegurando a viabilidade técnica rápida. Realizamos um forte trabalho de rebranding estrutural: readaptamos esquemas visuais para respirarem a autenticidade da marca Rafael Medeiros. Módulos fundamentais foram reutilizados de forma inteligente — jornadas viraram trilhas de acompanhamento e sistemas antigos de engajamento foram convertidos no núcleo prático da nova plataforma.',
            wireframeText: 'A herança de estruturas pré-validadas eliminou a necessidade inicial de wireframes básicos (rabiscos no papel ou telas simples). Contudo, durante as rodadas de refinamento junto ao cliente, realizamos um grande pivotamento de produto. Descobriu-se que o foco original no consumo passivo de "cursos e mídias" ofuscaria a real dor dos alunos: a aplicação rigorosa do método no dia a dia. Assim, descartamos essa versão mais acadêmica e refizemos com foco em gestão de tarefas, potencializando o calendário e a produtividade.',
            prototypeText: 'O resultado entregue em desenvolvimento reflete perfeitamente o desejo do cliente: uma plataforma robusta focada quase integralmente na prática da metodologia. O fluxo enxuto da Versão 1 está operante e gerando valor no mundo real. Paralelamente a isso, numa visão visionária, foi projetado a versão 2.0 no Figma (ilustrada na própria capa deste portfólio) contendo modernizações estéticas e avanços em usabilidade, aguardando maturação financeira para ser programada em código.'
        },
        'sua-marca': {
            title: 'Sua Marca Ponto Com',
            description: 'Aplicativo para venda de produtos para barbearias (B2B/CNPJs) com ecossistema completo de cursos e suporte.',
            technologies: 'Somente em Figma',
            duration: 'Em andamento desde fevereiro de 2026',
            team: 'Equipe multidisciplinar',
            results: 'Ecossistema unificado para barbearias',
            problemText: 'Falta de plataforma centralizada para compra de produtos B2B e capacitação em barbearias.',
            journeyText: 'Análise da jornada do profissional na busca por produtos e especializações.',
            hypothesesText: 'Unir loja B2B e cursos fideliza o cliente e aumenta a receita.',
            ideationText: 'Desenho de um ecossistema fechado com clube de vantagens.',
            wireframeText: 'Wireframes funcionais de e-commerce e ambiente de vídeos.',
            prototypeText: 'Protótipo de alta fidelidade validado com diferentes barbeiros.'
        },
        'beleza-rara': {
            title: 'Beleza Rara',
            description: 'App para venda de produtos cosméticos, assinatura de fidelidade e acesso a cursos e dicas de beleza.',
            technologies: 'Figma, Flutter',
            duration: '5 meses',
            team: 'Equipe de produto',
            results: 'Aumento expressivo na retenção do clube de assinatura',
            problemText: 'Clientes compravam produtos mas não sabiam extrair o melhor uso deles.',
            journeyText: 'Compreensão da jornada de compra focada em cosméticos e skincare.',
            hypothesesText: 'Clube de assinatura ancorado a cursos aumenta retenção diária.',
            ideationText: 'Concepção do loop de compras e recompensas de conhecimento.',
            wireframeText: 'Layouts guiados pela estética visual do ramo e experiência premium.',
            prototypeText: 'Protótipos navegáveis validados em painéis com o foco target.'
        },
        'be-hard': {
            title: 'Be Hard',
            description: 'App de acompanhamento de exercícios, permitindo uso autônomo da própria evolução ou auxílio de personal trainer.',
            technologies: 'Figma, Swift, Kotlin',
            duration: 'Em andamento desde dezembro de 2025',
            team: 'Equipe de desenvolvimento e especialistas em saúde',
            results: 'Lançamento com match rápido entre alunos e instrutores',
            problemText: 'A falta de motivação e acompanhamento estruturado para quem treina de forma independente.',
            journeyText: 'Mapeamento das frustrações e ganhos durante planos de treinamento físicos.',
            hypothesesText: 'Plataforma com modelo freemium converte usuários ativos em clientes de personal trainers.',
            ideationText: 'Fluxo focado em treinos diários gamificados e visibilidade profissional.',
            wireframeText: 'Wireframes evidenciando a fácil leitura do progresso numérico.',
            prototypeText: 'Protótipo dinâmico aprovado por especialistas fitness.'
        },
        'e-planner': {
            title: 'E-planner para Mulheres',
            description: 'Aplicativo feito especialmente para agendar e gerenciar tarefas de forma minimalista, simples e direta.',
            technologies: 'Flutter, Firebase',
            duration: '3 meses',
            team: 'Designers e Front-End',
            results: 'Experiência simplificada para aumento da retenção',
            problemText: 'Excesso de informações nos aplicativos atuais atrapalha a organização visual rápida.',
            journeyText: 'Acompanhamento do hábito diário de planejamento e anotação focado na carga mental feminina.',
            hypothesesText: 'Uma interface limpa e focada no agora traz mais aderência a longo prazo.',
            ideationText: 'Conceitualização da eliminação de etapas para criação rápida de lembretes e planners.',
            wireframeText: 'Visual minimalista priorizando áreas de respiro e categorização rápida.',
            prototypeText: 'Protótipo testado por usuárias focado na agilidade cognitiva diária.'
        },
        'vtech': {
            title: 'VTech',
            description: 'Sistema interno de gerenciamento para empresa especialista em válvulas e processos industriais.',
            technologies: 'Figma, Vue.js, Node.js',
            duration: '8 meses',
            team: 'Time de tecnologia B2B',
            results: 'Digitalização completa dos fluxos de ERP da VTech',
            problemText: 'Muitos processos de gestão de projetos de válvulas ainda controlados de forma segmentada.',
            journeyText: 'Exploração nos bastidores do chão de fábrica para entender o gargalo administrativo.',
            hypothesesText: 'Solução sob medida integrando os setores acelera o tempo de entrega em 30%.',
            ideationText: 'Definição das lógicas de permissão, tabelas densas e dashboards industriais.',
            wireframeText: 'Wireframes para desktop com hierarquias de informação muito detalhadas e objetivas.',
            prototypeText: 'Homologação assistida nas máquinas e telas internas da empresa.'
        },
        'popclick': {
            title: 'PopClick',
            description: 'Rede similar a um feed para conectar usuários comuns a grandes empresas, ganhando remuneração por compartilhamento.',
            technologies: 'Figma, React',
            duration: '9 meses',
            team: 'Equipe completa de engenharia e negócios',
            results: 'Idealizado para campanhas com micro-influenciadores',
            problemText: 'As grandes empresas não tinham engajamento genuíno que micro-influenciadores comuns oferecem.',
            journeyText: 'Jornada simultânea entre a corporação (que injeta campanhas) e o usuário final (que divulga).',
            hypothesesText: 'O modelo de remuneração direta e facilitada incentiva os usuários a compartilharem mídias.',
            ideationText: 'Processo de feed em scroll e painel simples de lucros do usuário.',
            wireframeText: 'Simulação completa de um app focado no discovery e feed in-app.',
            prototypeText: 'Protótipo realista para apresentar funcionamento do modelo de bônus.'
        }
    };
    return ptProjects[projectKey];
}

const projectImages = {
    'school-task': {
        ideation: [
            'prints/schooltask1-1.png?w=800&h=400&fit=crop',
            'prints/schooltask1.png?w=800&h=400&fit=crop'
        ],
        wireframe: [
            'prints/schooltask2-1.png?w=800&h=400&fit=crop',
            'prints/schooltask2.png?w=800&h=400&fit=crop',
            'prints/schooltask2-2.png?w=800&h=400&fit=crop'
        ],
        prototype: 'prints/schooltask3.png?w=800&h=400&fit=crop'
    },
    'sua-marca': {
        ideation: 'prints/suamarca1.png?w=800&h=400&fit=crop',
        wireframe: 'prints/suamarca2.png?w=800&h=400&fit=crop',
        prototype: 'prints/suamarca3.png?w=800&h=400&fit=crop'
    },
    'beleza-rara': {
        ideation: 'prints/belezarara1.png?w=800&h=400&fit=crop',
        wireframe: 'prints/belezarara2.png?w=800&h=400&fit=crop',
        prototype: 'prints/belezarara3.png?w=800&h=400&fit=crop'
    },
    'be-hard': {
        ideation: 'prints/behard1.png?w=800&h=400&fit=crop',
        wireframe: 'prints/behard2.png?w=800&h=400&fit=crop',
        prototype: 'prints/behard3.png?w=800&h=400&fit=crop'
    },
    'e-planner': {
        ideation: 'prints/eplanner1.png?w=800&h=400&fit=crop',
        wireframe: [
            'prints/eplanner2.png?w=800&h=400&fit=crop',
            'prints/eplanner2-1.png?w=800&h=400&fit=crop'
        ],
        prototype: 'prints/eplanner3.png?w=800&h=400&fit=crop'
    },
    'vtech': {
        ideation: 'prints/vtech1.jpg?w=800&h=400&fit=crop',
        wireframe: 'prints/vtech2.png?w=800&h=400&fit=crop',
        prototype: 'prints/vtech3.png?w=800&h=400&fit=crop'
    },
    'popclick': {
        ideation: 'prints/popclick1.webp?w=800&h=400&fit=crop',
        wireframe: 'prints/popclick2.png?w=800&h=400&fit=crop',
        prototype: 'prints/popclick3.png?w=800&h=400&fit=crop'
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
    document.addEventListener('click', function (e) {
        const projectCard = e.target.closest('.project-card, .project-card-new');
        if (projectCard) {
            const projectKey = projectCard.getAttribute('data-project');
            openModal(projectKey);
        }
    });

    // Modal events
    document.getElementById('projectModal').addEventListener('click', function (e) {
        if (e.target === this) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        const dropdown = document.querySelector('.language-dropdown');
        if (dropdown && !dropdown.contains(event.target)) {
            document.getElementById('languageDropdown').classList.remove('show');
            document.querySelector('.language-dropdown-btn').classList.remove('active');
        }
    });

    // Close hamburger menu when clicking outside
    document.addEventListener('click', function (event) {
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
document.addEventListener('DOMContentLoaded', function () {
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