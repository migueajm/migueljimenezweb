import { skills } from '../data/skills.js';

const renderSkills = (items) =>
    items.map((skill) => `
        <div class="skill-chip">
            ${skill}
        </div>
    `).join('');

export const Skills = () => `
<section
    id="skills"
    class="section"
>
    <div class="container">
        <div class="fade-up">
            <h2 class="section-title">
                Skills
            </h2>
        </div>
        <div class="grid-2 grid-s-1">
            <div class="card glass">
                <h3>Frontend</h3>
                <div class="skills-list">
                    ${renderSkills(
                        skills.frontend
                    )}
                </div>
            </div>
            <div class="card glass">
                <h3>Backend</h3>
                <div class="skills-list">
                    ${renderSkills(
                        skills.backend
                    )}
                </div>
            </div>
            <div class="card glass">
                <h3>Mobile</h3>
                <div class="skills-list">
                    ${renderSkills(
                        skills.mobile
                    )}
                </div>
            </div>
            <div class="card glass">
                <h3>Database</h3>
                <div class="skills-list">
                    ${renderSkills(
                        skills.database
                    )}
                </div>
            </div>
        </div>
    </div>
</section>
`;