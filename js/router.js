import { App } from './views/app.js';
import { ProjectDetail } from './components/project-detail.js';

export const renderApp = () => {
    const app = document.getElementById('app');
    const hash = window.location.hash || '#home';
    if (hash.includes('/project/')) {
        const slug = hash.replace('#/project/', '');
        app.innerHTML = ProjectDetail(slug);
        return;
    }
    app.innerHTML = App(hash);
};