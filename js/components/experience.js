import { experience } from '../data/experience.js';
import { currentLanguage } from '../language.js';

const renderExperience = () =>
    experience.map((job) => `
        <div class="timeline-item fade-up">
            <h3>
                ${job.company}
            </h3>

            <span class="gradient-text">
                ${job.role}
            </span>

            <p>
                ${job.period}
            </p>

            <p class="section-subtitle">
                ${job.description[currentLanguage]}
            </p>
        </div>
    `).join('');

export const Experience = () => `
<section
    id="experience"
    class="section"
>
    <div class="container">
        <div class="fade-up">
            <h2 class="section-title">
                Experience
            </h2>
        </div>

        <div class="timeline">
            ${renderExperience()}
        </div>
    </div>
</section>
`;