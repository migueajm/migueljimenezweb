import { projects } from '../data/projects.js';

import {
    currentLanguage
} from '../language.js';

const renderGallery = (images = []) => {
    if (!images ||!images.length) {
        return '';
    }

    return `
        <div class="project-gallery">
            ${images.map((image) => `
                <img
                    src="${image}"
                    class="project-gallery-image"
                    loading="lazy"
                    alt="Project image"
                />
            `).join('')}
        </div>
    `;
};

const renderProjectLinks = (project) => {
    if (
        !project.demo &&
        !project.source
    ) {
        return '';
    }
    return `
        <div class="project-links">
            ${
                project.demo
                    ? `
                        <a
                            href="${project.demo}"
                            target="_blank"
                            class="
                                button
                                button-primary
                            "
                        >
                            Live Demo
                        </a>
                    `
                    : ''
            }
            ${
                project.apk
                    ? `
                        <a
                            href="${project.apk}"
                            target="_blank"
                            class="
                                button
                                button-primary
                            "
                        >
                            Download APK
                        </a>
                    `
                    : ''
            }
            ${
                project.source
                    ? `
                        <a
                            href="${project.source}"
                            target="_blank"
                            class="
                                button
                                button-secondary
                            "
                        >
                            Source Code
                        </a>
                    `
                    : ''
            }
        </div>
    `;
};

const renderProjectMeta = (project) => {
    return `
        <div class="project-meta">
            ${
                project.year
                    ? `
                        <div class="project-meta-item">
                            <span>
                                Year
                            </span>
                            <strong>
                                ${project.year}
                            </strong>
                        </div>
                    `
                    : ''
            }
            ${
                project.role
                    ? `
                        <div class="project-meta-item">
                            <span>
                                Role
                            </span>
                            <strong>
                                ${project.role}
                            </strong>
                        </div>
                    `
                    : ''
            }

            ${
                project.status
                    ? `
                        <div class="project-meta-item">
                            <span>
                                Status
                            </span>
                            <strong>
                                ${project.status}
                            </strong>
                        </div>
                    `
                    : ''
            }
        </div>
    `;
};

export const ProjectDetail = (slug) => {
    const project =
        projects.find(
            (item) => item.slug === slug
        );

    if (!project) {
        return `
            <div class="container section">
                <h1>
                    Project not found
                </h1>
            </div>
        `;
    }

    return `
        <section class="section">
            <div class="container">
                <a
                    href="#projects"
                    class="button button-secondary"
                >
                    ← Back
                </a>
                <div
                    class="
                        project-detail-content
                    "
                >
                    ${
                        project.cover
                            ? `
                                <img
                                    src="${project.cover}"
                                    alt="${project.title}"
                                    class="project-cover"
                                />
                            `
                            : ''
                    }

                    <div
                        class="
                            fade-up
                        "
                    >
                        <span
                            class="
                                gradient-text
                            "
                        >
                            Featured Project
                        </span>
                        <h1
                            class="
                                hero-title
                            "
                        >
                            ${project.title}
                        </h1>
                        <p
                            class="
                                hero-description
                            "
                        >
                            ${
                                project.description[
                                    currentLanguage
                                ]
                            }
                        </p>
                        ${renderProjectMeta(
                            project
                        )}
                    <div
                        class="project-technologies"
                    >
                        ${project.technologies
                            .map((technology) => `
                                <div
                                    class="
                                        technology-card
                                    "
                                >
                                    <img
                                        src="${technology.icon}"
                                        alt="${technology.name}"
                                        class="
                                            technology-icon
                                        "
                                        loading="lazy"
                                    />
                                    <span>
                                        ${technology.name}
                                    </span>
                                </div>
                            `)
                            .join('')}
                    </div>
                        ${renderProjectLinks(
                            project
                        )}
                    </div>
                    ${renderGallery(
                        project.images
                    )}
                </div>
            </div>
        </section>
    `;
};