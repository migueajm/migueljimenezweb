export const initNavbarEvents = () => {
    const menuButton =
        document.getElementById(
            'mobile-menu-button'
        );

    const sidebar =
        document.getElementById(
            'mobile-sidebar'
        );

    const overlay =
        document.getElementById(
            'mobile-overlay'
        );

    const links =
        document.querySelectorAll(
            '.nav-link'
        );

    const toggleMenu = () => {
        sidebar.classList.toggle('open');

        overlay.classList.toggle('open');
    };

    menuButton?.addEventListener(
        'click',
        toggleMenu
    );

    overlay?.addEventListener(
        'click',
        toggleMenu
    );

    links.forEach((link) => {
        link.addEventListener(
            'click',
            () => {
                sidebar.classList.remove(
                    'open'
                );

                overlay.classList.remove(
                    'open'
                );
            }
        );
    });
};

export const updateActiveSection = () => {
    const sections =
        document.querySelectorAll('section');

    const links =
        document.querySelectorAll('.nav-link');

    const currentScroll =
        window.scrollY + 200;

    sections.forEach((section) => {
        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            currentScroll >= sectionTop &&
            currentScroll <
                sectionTop + sectionHeight
        ) {
            const id = section.id;

            links.forEach((link) => {
                link.classList.remove(
                    'active'
                );

                if (
                    link.getAttribute('href') ===
                    `#${id}`
                ) {
                    link.classList.add(
                        'active'
                    );
                }
            });
        }
    });
};