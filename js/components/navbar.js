import { toggleTheme } from '../theme.js';

import { t } from '../language.js';

import {
    initNavbarEvents
} from '../navbar-events.js';

export const Navbar = (module) => {
    setTimeout(() => {
        const themeButton = document.getElementById('theme-toggle');
        themeButton?.addEventListener('click', toggleTheme);
        initNavbarEvents();
        document.querySelector('[href="#' + module + '"]')?.click();
    });

    return `
        <header class="navbar">
            <div class="navbar-content">
                <a
                    href="#home"
                    class="gradient-text"
                >
                    @migueajm/
                </a>
                <nav class="navbar-links">
                    <a
                        href="#about"
                        class="nav-link"
                    >
                        ${t('navigation.about')}
                    </a>

                    <a
                        href="#skills"
                        class="nav-link"
                    >
                        ${t('navigation.skills')}
                    </a>

                    <a
                        href="#projects"
                        class="nav-link"
                    >
                        ${t('navigation.projects')}
                    </a>

                    <a
                        href="#experience"
                        class="nav-link"
                    >
                        ${t('navigation.experience')}
                    </a>

                    <a
                        href="#contact"
                        class="nav-link"
                    >
                        ${t('navigation.contact')}
                    </a>
                </nav>

                <div
                    style="
                        display:flex;
                        gap:1rem;
                        align-items:center;
                    "
                >
                    <button
                        id="theme-toggle"
                        class="
                            button
                            button-primary
                            theme-button
                        "
                    >
                        ☀
                    </button>

                    <button
                        id="mobile-menu-button"
                        class="
                            mobile-menu-button
                            glass
                        "
                    >
                        <span
                            class="
                                mobile-menu-icon
                            "
                        ></span>
                    </button>
                </div>
            </div>
        </header>

        <div
            id="mobile-overlay"
            class="mobile-overlay"
        ></div>

        <aside
            id="mobile-sidebar"
            class="mobile-sidebar"
        >
            <nav>
                <a
                    href="#about"
                    class="nav-link"
                >
                    ${t('navigation.about')}
                </a>

                <a
                    href="#skills"
                    class="nav-link"
                >
                    ${t('navigation.skills')}
                </a>

                <a
                    href="#projects"
                    class="nav-link"
                >
                    ${t('navigation.projects')}
                </a>

                <a
                    href="#experience"
                    class="nav-link"
                >
                    ${t('navigation.experience')}
                </a>

                <a
                    href="#contact"
                    class="nav-link"
                >
                    ${t('navigation.contact')}
                </a>
            </nav>
        </aside>
    `;
};