export const projects = [
    {
        slug: 'expense-manager',
        title: 'Expense Manager',
        description: {
            en: 'Personal expense management application focused on financial tracking, expense categorization, analytics and budget control across web and mobile platforms.',
            es: 'Aplicación de gestión de gastos personales enfocada en el seguimiento financiero, categorización de gastos, analíticas y control de presupuestos en plataformas web y móviles.'
        },
        cover:'./assets/images/projects/expense-manager/cover.webp',
        images: [
            './assets/images/projects/expense-manager/1.webp',
            './assets/images/projects/expense-manager/2.webp'
        ],
        technologies: [
            {
                name: 'Flutter',
                icon: './assets/images/code/flutter.webp'
            },
            {
                name: 'Vanilla JS',
                icon: './assets/images/code/js.webp'
            },
            {
                name: 'Git',
                icon: './assets/images/code/git.webp'
            },
            {
                name: 'Github',
                icon: './assets/images/code/github.webp'
            },
            {
                name: 'Clean Architecture',
                icon: './assets/images/code/clean-architecture.webp'
            }
        ],
        demo: 'https://migueajm.github.io/my-flow/',
        source: 'https://github.com/migueajm/my-flow',
        year: '2026',
        role: 'Full Stack Developer',
        status: 'Production',
        apk: 'https://github.com/migueajm/my-flow-app/releases/download/v1.0.0/my-flow-migueajmv1.0.0.beta.apk'
    },
    {
        slug: 'infoaccess',
        title: 'Infoaccess',
        description: {
            en: 'Enterprise access control platform for events and visitor management using QR validation, credentials and real-time attendance tracking.',
            es: 'Plataforma empresarial de control de accesos para eventos y gestión de visitantes utilizando validación QR, credenciales y monitoreo de asistencia en tiempo real.'
        },
        cover: './assets/images/projects/infoaccess/cover.webp',
        images: null,
        technologies: [],
        demo: null,
        source: null,
        year: '2025',
        role: 'Full Stack Developer',
        status: 'Private',
        apk: null
    },
    {
        slug: 'infolead',
        title: 'Infolead',
        description: {
            en: 'Lead capture and business networking platform designed for events, allowing exhibitors to scan attendees, manage contacts and generate business opportunities.',
            es: 'Plataforma de captura de leads y networking empresarial diseñada para eventos, permitiendo a los expositores escanear asistentes, administrar contactos y generar oportunidades de negocio.'
        },
        cover: './assets/images/projects/infolead/cover.webp',
        images: null,
        technologies: [],
        demo: 'https://apps.apple.com/us/app/info-lead/id6502916007',
        source: null,
        year: '2023',
        role: 'Full Stack Developer',
        status: 'Private',
        apk: null
    }
];