import { t } from '../language.js';

export const Contact = () => `
<section
    id="contact"
    class="section"
>
    <div class="container">
        <div class="card glass fade-up">
            <h2 class="section-title">
                ${t('contact.title')}
            </h2>

            <p class="section-subtitle">
                ${t('contact.description')}
            </p>

            <div
                class="hero-actions"
                style="margin-top: 2rem;"
            >
                <a
                    href="mailto:migueajm@outlook.com"
                    class="button button-primary"
                >
                    ${t('contact.primaryButton')}
                </a>

                <a
                    href="https://github.com/migueajm"
                    target="_blank"
                    class="button button-secondary"
                >
                    ${t('contact.secondaryButton')}
                </a>
            </div>
        </div>
    </div>
</section>
`;