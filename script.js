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
            team: 'Equipe de 1 UX e 2 devs',
            results: 'Criar um App de gestão de tarefas do zero',
            problemText: 'O principal desafio foi traduzir uma metodologia de ensino já validada (método Rafael Medeiros) para um aplicativo. O foco estava em um público bem definido: alunos engajados e familiarizados com os conceitos. O objetivo era criar uma ferramenta que complementasse o ensino e ajudasse na organização da rotina, sem se distanciar da comunidade. O desenvolvimento ocorreu sem envolvimento do Rafael Medeiros, já que o produto foi financiado pela empresa contratante de forma confidencial, com a intenção de apresentar uma solução pronta para validação futura.',
            journeyText: 'Para compreender profundamente o desafio, realizamos uma imersão completa no conteúdo educativo. Através da análise de vídeos, palestras e reuniões de alinhamento com o cliente, mapeamos cada etapa do método original. Esse processo permitiu identificar dores e pontos focais de interação.',
            hypothesesText: 'A hipótese inicial partiu da criação de um aplicativo desenvolvido de forma estratégica, com uma primeira versão gratuita já funcional. O foco foi estruturar a experiência em jornadas de aprendizado por trilhas digitais, com vídeos, questionários, palestras e materiais complementares. Acreditávamos que posicionar a jornada como elemento central aumentaria o engajamento e a percepção de valor, enquanto funcionalidades como calendário e tarefas atuariam apenas como suporte. O objetivo era validar um modelo escalável com potencial de evolução para um produto pago baseado em conteúdo.',
            ideationText: 'Durante a ideação, adotamos uma abordagem ágil. Aproveitamos a arquitetura de base sólida de um projeto interno prévio focado em jornadas (projeto Equilibre), assegurando rápida viabilidade técnica. Realizamos um rebranding estrutural, adaptando o visual para refletir a identidade da marca Rafael Medeiros. Módulos foram reutilizados de forma estratégica — jornadas se tornaram trilhas de acompanhamento e sistemas de engajamento passaram a sustentar o núcleo prático da plataforma. Como referência para organização, utilizamos o calendário e o agendador de tarefas do app Fantastical (iPhone), o que permitiu estruturar um fluxo claro entre trilhas e um gestor de tarefas simples no modelo PG/PD.',
            wireframeText: 'Na fase inicial, não utilizamos wireframes, pois partimos da base de um projeto anterior já estruturado (Projeto Equilibre). O produto, inicialmente chamado Impulse, foi desenvolvido de forma confidencial, sem o envolvimento do Rafael Medeiros. A proposta inicial foi apresentada já em estágio avançado, o que o surpreendeu positivamente, porém foi considerada excessiva em escopo. A partir desse feedback, houve uma mudança significativa de direcionamento. Somente na segunda fase do projeto passamos a utilizar wireframes, com foco em validar e ajustar a nova abordagem definida e com o novo nome School Task.',
            prototypeText: 'O resultado entregue reflete perfeitamente o desejo do cliente: uma plataforma robusta focada quase integralmente na prática da metodologia. O novo fluxo da versão 2 está operante e gerando valor no mundo real. Paralelamente a isso, numa visão visionária, foi projetado a versão 3 no Figma (ilustrada na própria capa deste portfólio) contendo modernizações estéticas e avanços em usabilidade, aguardando maturação financeira para ser programada em código.'
        },
        'sua-marca': {
            title: 'Sua Marca Ponto Com',
            description: 'Aplicativo para venda de produtos para barbearias (B2B/CNPJs) com ecossistema completo de cursos e suporte.',
            technologies: 'Somente Figma',
            duration: 'Em andamento desde fevereiro de 2026',
            team: '1 UI/UX Designer',
            results: 'Desenvolvimento de um ecossistema digital unificado para barbearias.',
            problemText: 'O cliente já trouxe o problema bem definido: a ausência de uma plataforma centralizada para compra de produtos B2B e capacitação profissional no segmento de barbearias.',
            journeyText: 'Foram realizadas duas reuniões presenciais para aprofundar o entendimento do problema e, a partir disso, mapear de forma objetiva a jornada de uso do aplicativo.',
            hypothesesText: 'O projeto foi desenvolvido sem custos iniciais, devido a uma sociedade entre as partes. Por isso, optamos por validar a ideia original do cliente por meio de um MVP focado na venda de produtos, evitando investir em funcionalidades secundárias como chat financeiro com IA e área de cursos neste primeiro momento.',
            ideationText: 'A ideação foi baseada na análise de fluxos e padrões de aplicativos de e-commerce, considerando que o foco inicial do MVP seria exclusivamente a venda de produtos.',
            wireframeText: 'Durante as reuniões, foram esboçadas as principais telas desejadas pelo cliente, como chat financeiro com IA, home (shopping), área de cursos e login. Não foram aprofundados fluxos internos neste momento, apenas a definição das telas principais.',
            prototypeText: 'O protótipo inicial foi parcialmente desenvolvido, incluindo tela de login, fluxo de cadastro, home (shopping) e carrinho de compras. Para compor a experiência, foram criados produtos fictícios a partir do PDF de apresentação do cliente, com tratamento das imagens (remoção de fundo), aplicação da identidade visual e exportação individual dos itens. O projeto foi pausado posteriormente por questões financeiras e societárias, sem previsão de retomada.',
        },
        'beleza-rara': {
            title: 'Beleza Rara',
            description: 'App para venda de produtos cosméticos, assinatura de fidelidade e acesso a cursos e dicas de beleza.',
            technologies: 'Somente Figma',
            duration: 'Concluído - 1 mês',
            team: '1 UX Designer',
            results: 'Desenvolvimento de um aplicativo exclusivo para o público da Beleza Rara.',
            problemText: 'Os clientes já realizavam compras online, porém não tinham acesso a conteúdos complementares como cursos ou programas de fidelidade. A cliente também não possuía experiência prévia com desenvolvimento de aplicativos, o que abriu oportunidade para propor uma solução mais completa, ampliando o portfólio digital da marca.',
            journeyText: 'A jornada do usuário já existia de forma básica na plataforma online. O aplicativo foi pensado para enriquecer essa experiência, integrando consumo de produtos com conteúdo e relacionamento.',
            hypothesesText: 'A hipótese central foi que um modelo de clube de assinatura aliado a cursos aumentaria a retenção e o engajamento recorrente. Por isso, destacamos essas funcionalidades como elementos principais da experiência, inexistentes até então no site.',
            ideationText: 'O design foi desenvolvido com base na identidade visual já consolidada da Beleza Rara, utilizando cores, tipografia e linguagem alinhadas à marca. Também consideramos o perfil do público da Sthefane Matos, com forte presença digital e alto potencial de conversão.',
            wireframeText: 'O foco esteve na construção da melhor experiência para a página inicial. Foram exploradas diversas ideias em rascunhos e validações rápidas, com parte desse processo evoluindo para versões iniciais no Figma.',
            prototypeText: 'Os layouts foram guiados pela estética já utilizada no Instagram da marca, garantindo consistência visual. O protótipo entregue contemplava uma experiência completa, incluindo tela inicial, pop-ups informativos, listagem de produtos, carrinho, favoritos, área de cursos, login e perfil. O material foi enviado para validação, porém não houve retorno sobre a continuidade do projeto até o momento.'
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