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
        projectSchoolTask: "App to manage tasks and activities",
        projectSuaMarca: "App to sell products for barbershops with ecosystem of courses and support",
        projectBelezaRara: "App to sell beauty products with club subscription and courses",
        projectBeHard: "Personal trainer app with autonomous or assisted workout tracking",
        projectEPlanner: "Minimalist task scheduling app designed for women",
        projectVtech: "Internal management system for a valves company",
        projectPopclick: "Network for users to share content from companies to earn rewards",
        
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
                description: 'Digital platform developed for educational management, facilitating communication between teachers, students, and parents with an intuitive interface and collaborative features using Rafael Medeiros method.',
                technologies: 'Figma, React, Node.js',
                duration: '4 months',
                team: 'Dedicated team',
                results: 'Increased user productivity',
                problemText: 'Difficulty in managing daily tasks efficiently.',
                journeyText: 'Complete mapping of the Rafael Medeiros method for digital application.',
                hypothesesText: 'An interface that guides the user through the method increases engagement.',
                ideationText: 'Creation of flows adapted to the proposed methodology.',
                wireframeText: 'Structure focused on simplicity and usability.',
                prototypeText: 'Prototype iterated with users for final validation.'
            },
            'sua-marca': {
                title: 'Sua Marca Ponto Com',
                description: 'B2B mobile application to sell products for barbershops with a complete ecosystem of courses and professional support.',
                technologies: 'Figma, React Native',
                duration: '6 months',
                team: 'Multidisciplinary team',
                results: 'Unified ecosystem for barbershops',
                problemText: 'Lack of centralized platform for B2B purchases and professional training in barbershops.',
                journeyText: 'Analysis of the professional barber journey in search of products and specializations.',
                hypothesesText: 'Uniting a B2B store and courses breeds loyalty and increases revenue.',
                ideationText: 'Design of a closed ecosystem with an advantage club.',
                wireframeText: 'Functional wireframes for e-commerce and a video environment.',
                prototypeText: 'High fidelity prototype validated with different barbers.'
            },
            'beleza-rara': {
                title: 'Beleza Rara',
                description: 'App for selling cosmetics, loyalty subscriptions, and access to beauty courses and tips.',
                technologies: 'Figma, Flutter',
                duration: '5 months',
                team: 'Product team',
                results: 'Significant increase in subscription club retention',
                problemText: 'Customers bought products but didn\'t know how to extract their best use.',
                journeyText: 'Understanding the purchase journey focused on cosmetics and skincare.',
                hypothesesText: 'Subscription club anchored to courses increases daily retention.',
                ideationText: 'Conception of the loop of purchases and knowledge rewards.',
                wireframeText: 'Layouts guided by the visual aesthetics of the branch and a premium experience.',
                prototypeText: 'Navigable prototypes validated in target-focused panels.'
            },
            'be-hard': {
                title: 'Be Hard',
                description: 'Workout tracking app that allows autonomous tracking or remote/in-person guidance from a personal trainer.',
                technologies: 'Figma, Swift, Kotlin',
                duration: '7 months',
                team: 'Development team and health specialists',
                results: 'Launch with quick matching between students and instructors',
                problemText: 'Lack of motivation and structured guidance for those who train independently.',
                journeyText: 'Mapping frustrations and gains during physical training plans.',
                hypothesesText: 'A platform with a freemium model turns active users into personal trainer clients.',
                ideationText: 'Flow focused on daily gamified workouts and professional visibility.',
                wireframeText: 'Wireframes showing easy readability of numerical progress.',
                prototypeText: 'Dynamic prototype approved by fitness experts.'
            },
            'e-planner': {
                title: 'E-Planner for Women',
                description: 'Application tailored for a female audience, designed to schedule tasks simply and directly with a minimal interface.',
                technologies: 'Flutter, Firebase',
                duration: '3 months',
                team: 'Designers and Front-End',
                results: 'Simplified experience leading to higher retention',
                problemText: 'Excessive information in current apps hinders quick visual organization.',
                journeyText: 'Monitoring the daily habit of planning and noting focused on female mental load.',
                hypothesesText: 'A clean and direct interface brings more long-term adherence.',
                ideationText: 'Conceptualization of eliminating steps to quickly create reminders.',
                wireframeText: 'Minimalist visuals prioritizing breathing areas and quick categorization.',
                prototypeText: 'Prototype tested by users focused on daily cognitive agility.'
            },
            'vtech': {
                title: 'VTech',
                description: 'Internal management system for optimizing business processes of VTech, a valve specialist company.',
                technologies: 'Figma, Vue.js, Node.js',
                duration: '8 months',
                team: 'B2B technology team',
                results: 'Complete digitization of VTech ERP workflows',
                problemText: 'Many valve project management processes were still controlled segmentally.',
                journeyText: 'Exploration behind the scenes of the factory floor to understand the administrative bottleneck.',
                hypothesesText: 'A tailor-made solution integrating sectors speeds up delivery time by 30%.',
                ideationText: 'Definition of permission logic, dense tables, and industrial dashboards.',
                wireframeText: 'Desktop wireframes with very detailed and objective information hierarchies.',
                prototypeText: 'Assisted validation on internal machines and screens of the company.'
            },
            'popclick': {
                title: 'PopClick',
                description: 'A network modeled as a feed to connect ordinary users directly with large companies to earn money for content sharing.',
                technologies: 'Figma, React',
                duration: '9 months',
                team: 'Complete engineering and business team',
                results: 'Conceived for micro-influencer campaigns',
                problemText: 'Large companies did not have the genuine engagement that ordinary micro-influencers offer.',
                journeyText: 'Simultaneous journey between the corporation (injecting campaigns) and the end user (marketing).',
                hypothesesText: 'The direct and easy remuneration model encourages users to share media.',
                ideationText: 'Scrolling feed process and simple user profit dashboard.',
                wireframeText: 'Full simulation of an app focused on discovery and in-app feed.',
                prototypeText: 'Realistic prototype to present the bonus model operation.'
            }
        }
    }
};
