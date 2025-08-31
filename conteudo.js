const translations = {
    en: {
        // Navbar
        navHome: "Home",
        navProjects: "Projects",
        navSkills: "Skills", 
        navEducation: "Education",
        navExperience: "Experience",
        navContact: "Contact",
        
        // Hero Section
        heroSubtitle: "UI/UX Designer",
        heroDescription: "I'm a UI/UX and Product Design professional, bringing expertise that combines design, technology, and project management. My experience merges visual creation, frontend development, and multimedia editing, enabling complete digital solution delivery.",
        heroButton: "Contact Me",
        
        // Projects Section
        projectsTitle: "Projects",
        projectsSubtitle: "My Featured Projects",
        projectSchoolTask: "App to manage time and organize tasks",
        projectTalentsCompass: "Tests to discover your talents and profile",
        projectEPlanner: "Minimalist app for task mapping",
        
        // My Work Section
        myWorkTitle: "My Work Approach",
        conceptToDesignTitle: "From Concept to Design",
        conceptToDesignSubtitle: "Creativity in Action",
        conceptToDesignText: "I transform abstract ideas into concrete visual solutions. From the first sketch on paper to interactive prototypes in Figma, I lead the entire creative process. I conduct user research, define personas, create wireframes, and develop design systems that ensure consistency and excellence in every pixel.",
        
        developmentPromotionTitle: "Development & Promotion",
        developmentPromotionSubtitle: "Complete Delivery",
        developmentPromotionText: "I complement design work by developing landing pages to showcase created products. I produce visual materials for social media and promotional campaigns, ensuring brand visual consistency. I monitor performance metrics and implement improvements based on user behavior, ensuring the design achieves its conversion objectives.",
        
        // Skills Section
        skillsTitle: "Skills & Education",
        specializationsTitle: "Specializations",
        designMediaTitle: "Design & Media",
        designMediaText: "Proficiency in Figma, Photoshop, and Affinity Designer for interfaces, visual identities, and graphic materials. Also experienced in video editing with DaVinci Resolve, Sony Vegas, and CapCut.",
        technologyTitle: "Technology",
        technologyText: "Practical knowledge in Frontend (HTML, CSS, JavaScript, and Bootstrap) for website and landing page creation. Additionally, extensive knowledge in hardware and software technical support.",
        projectManagementTitle: "Project Management",
        projectManagementText: "Organization and team collaboration using GitHub, Jira, and Trello",
        
        coreCompetenciesTitle: "Core Competencies",
        hardSkillsTitle: "Hard Skills",
        softSkillsTitle: "Soft Skills",
        languagesTitle: "Languages",
        languagePortuguese: "Portuguese (Native)",
        languageEnglish: "English (Advanced)",
        languageHebrew: "Hebrew (Basic)",
        
        // Education Section
        educationTitle: "Education",
        academicBackgroundTitle: "Academic Background",
        computerScienceDegree: "Bachelor's Degree, Computer Science",
        technicalCourse: "Technical Course, IT Technician",
        coursesTitle: "Courses & Certifications",
        figma: "Hi-Fi Designs and Prototypes in Figma",
        uxdesign: "Foundations of UX Design",
        mysqlCourse: "MySQL Course",
        networkArchitecture: "Network Architecture",
        databaseSQL: "Database and SQL",
        gitGithub: "Git and GitHub for Beginners",
        marketingManagement: "Marketing Management",
        programmingLogic: "Programming Logic",
        
        // Experience Section
        experienceTitle: "Professional Experience",
        uiDesigner: "UI Designer",
        itTechnician: "IT Technician",
        frontendDeveloper: "Frontend Developer",
        socialMediaManager: "Social Media Manager",
        graphicDesigner: "Graphic Designer",
        cardTagDesigner: "Card and Tag Designer",
        
        uiDesignerText: "Development of modern and responsive user interfaces for corporate systems. Creation of reusable components and design systems maintenance. Direct collaboration with development teams to ensure implementation fidelity.",
        itTechnicianText: "Responsible for IT infrastructure maintenance, technical user support, and corporate systems management. Implementation of technological solutions for industrial process optimization and local network administration.",
        frontendDeveloperText: "Development of responsive web applications using modern technologies like React, JavaScript, and CSS. Interface implementation based on Figma designs, performance optimization, and REST API integration.",
        socialMediaManagerText: "Complete management of digital strategies for diverse clients. Visual content creation, advertising campaign planning, metrics analysis, and organic social media growth. Creative team coordination and client relationship management.",
        graphicDesignerText: "Creation of graphic materials for printing including business cards, folders, banners, and corporate stationery. Visual identity development and file preparation for industrial graphic production.",
        cardTagDesignerText: "Specialization in developing promotional cards and commercial tags for diverse products. Creation of attractive layouts respecting technical printing and finishing limitations. High-demand work with optimized deadlines.",
        
        // Contact Section
        contactTitle: "Let's Talk?",
        contactSubtitle: "Get in touch to discuss projects or opportunities",
        resumeTitle: "Professional Resume",
        resumeText: "I provide my resume in standard PDF format, containing detailed information about my academic background, professional experience, and technical competencies.",
        viewResumeBtn: "View Resume",
        connectTitle: "Connect With Me",
        
        // Footer
        footerText: "All rights reserved.",
        
        // Modal
        modalTechnologies: "Technologies",
        modalDuration: "Duration",
        modalTeam: "Team",
        modalResults: "Results",
        modalProblem: "The Problem",
        modalJourneyMapping: "Journey Mapping",
        modalHypotheses: "Hypotheses and Uncertainties",
        modalIdeation: "Ideation",
        modalWireframe: "Wireframe",
        modalPrototype: "Final Prototype",
        modalClose: "Close",
        
        // Project Data
        projects: {
            'school-task': {
                title: 'School Task',
                description: 'Digital platform developed for educational management, facilitating communication between teachers, students, and parents with an intuitive interface and collaborative features.',
                technologies: 'React, Node.js, MongoDB, Firebase, Socket.io',
                duration: '8 months',
                team: '5 people (3 devs, 1 designer, 1 PM)',
                results: 'Adoption by 50+ schools, 60% improvement in school-family communication',
                problemText: 'Schools struggled with fragmented communication systems, leading to missed information and poor parent-teacher coordination.',
                journeyText: 'Mapped the entire educational ecosystem from enrollment to graduation, identifying key touchpoints and pain points.',
                hypothesesText: 'We hypothesized that a unified platform would reduce communication gaps by 50% and increase parent engagement.',
                ideationText: 'Brainstormed solutions including real-time messaging, progress tracking, and automated notifications.',
                wireframeText: 'Created low-fidelity wireframes focusing on intuitive navigation and clear information hierarchy.',
                prototypeText: 'Developed high-fidelity prototypes with interactive elements and comprehensive user testing.'
            },
            'bussola-talentos': {
                title: 'Talents Compass',
                description: 'Vocational guidance system that connects students to their professional aptitudes through personalized tests and advanced behavioral analysis.',
                technologies: 'Vue.js, Python, Django, PostgreSQL, TensorFlow',
                duration: '10 months',
                team: '6 people (3 devs, 2 designers, 1 data scientist)',
                results: 'Guided 10k+ students, 85% satisfaction in vocational choices',
                problemText: 'Students lacked access to comprehensive career guidance, leading to poor career choices and high dropout rates.',
                journeyText: 'Analyzed the student decision-making process from career awareness to final choice.',
                hypothesesText: 'Data-driven assessments combined with AI analysis would provide more accurate career recommendations.',
                ideationText: 'Developed concepts for gamified assessments, AI matching algorithms, and personalized career roadmaps.',
                wireframeText: 'Designed user flows for assessment taking, result visualization, and career exploration.',
                prototypeText: 'Built interactive prototypes with real-time assessment feedback and dynamic career matching.'
            },
            'e-planner': {
                title: 'E-planner',
                description: 'Personal and professional planning app with smart calendar features, goal setting, and real-time progress tracking.',
                technologies: 'Flutter, Firebase, Node.js, MongoDB, Google Calendar API',
                duration: '6 months',
                team: '4 people (2 devs, 1 designer, 1 PM)',
                results: '70% increase in user productivity, 4.7★ rating on app stores',
                problemText: 'Users struggled with scattered planning tools and lack of progress visibility in their personal and professional goals.',
                journeyText: 'Mapped user planning behaviors from initial goal setting to achievement tracking.',
                hypothesesText: 'An integrated planning system with visual progress indicators would improve goal completion rates.',
                ideationText: 'Conceptualized smart scheduling, automated reminders, and achievement visualization features.',
                wireframeText: 'Created minimalist layouts prioritizing clarity and reducing cognitive load.',
                prototypeText: 'Developed responsive prototypes with smooth animations and intuitive gesture controls.'
            }
        }
    }
};
