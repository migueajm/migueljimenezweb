import { projects } from '../data/projects.js';
import { currentLanguage, t } from '../language.js';

const renderProjects = () =>
    projects.map((project) => `
        <a
            href="#/project/${project.slug}"
            class="card glass project-card scale-in"
        >
            ${ project.cover
                ? `
                    <img
                        src="${project.cover}"
                        alt="${project.title}"
                        class="project-image"
                    />
                `
                : `
                    <div class="project-image"></div>
                `
            }
            <h3>
                ${project.title}
            </h3>

            <p class="section-subtitle">
                ${
                    project.description[
                        currentLanguage
                    ]
                }
            </p>
        </a>
    `).join('');

export const Projects = () => `
<section
    id="projects"
    class="section"
>
    <div class="container">
        <div class="fade-up">
            <h2 class="section-title">
                ${t('projects.title')}
            </h2>
        </div>

        <div class="grid-3">
            ${renderProjects()}
        </div>
    </div>
</section>
`;