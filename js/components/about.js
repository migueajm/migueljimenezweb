import { t } from '../language.js';

export const About = () => `
<section
    id="about"
    class="section"
>
    <div class="container grid-2 grid-s-1">
        <div class="fade-up">
            <h2 class="section-title">
                ${t('about.title')}
            </h2>

            <p class="section-subtitle">
                ${t('about.description')}
            </p>
        </div>

        <div class="grid-2">
            <div class="card glass scale-in">
                <h3>${t('about.cards.years')}</h3>
                <p>
                    ${t('about.cards.experience')}
                </p>
            </div>

            <div class="card glass scale-in">
                <h3>Frontend</h3>
                <p>
                    ${t('about.cards.frontend')}
                </p>
            </div>

            <div class="card glass scale-in">
                <h3>Backend</h3>
                <p>
                    ${t('about.cards.backend')}
                </p>
            </div>

            <div class="card glass scale-in">
                <h3>Mobile/Desktop</h3>
                <p>
                    ${t('about.cards.mobile')}
                </p>
            </div>
        </div>
    </div>
</section>
`;