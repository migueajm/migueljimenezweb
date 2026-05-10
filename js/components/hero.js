import { t } from '../language.js';

export const Hero = () => `
<section
    id="home"
    class="hero section"
>
    <div class="container">
        <div class="hero-content fade-up">
            <span class="gradient-text">
                ${t('hero.badge')}
            </span>

            <h1 class="hero-title">
                ${t('hero.title')}
            </h1>

            <p class="hero-description">
                ${t('hero.description')}
            </p>

            <div class="hero-actions">
                <a
                    href="#projects"
                    class="button button-primary"
                >
                    ${t('hero.primaryButton')}
                </a>

                <a
                    href="#contact"
                    class="button button-secondary"
                >
                    ${t('hero.secondaryButton')}
                </a>
            </div>
        </div>
    </div>
</section>
`;