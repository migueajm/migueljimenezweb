import { Navbar } from '../components/navbar.js';
import { Hero } from '../components/hero.js';
import { About } from '../components/about.js';
import { Skills } from '../components/skills.js';
import { Projects } from '../components/projects.js';
import { Experience } from '../components/experience.js';
import { Contact } from '../components/contact.js';
import { Footer } from '../components/footer.js';

export const App = module => `
    ${Navbar(module)}
    <main class="main-layout">
        ${Hero()}
        ${About()}
        ${Skills()}
        ${Projects()}
        ${Experience()}
        ${Contact()}
    </main>
    ${Footer()}
`;