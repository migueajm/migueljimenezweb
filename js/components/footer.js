import { t } from '../language.js';

export const Footer = () => `
<footer
    class="section"
    style="
        padding-top: 0;
        text-align: center;
    "
>
    <div class="container">
        <p class="section-subtitle">
            ${t('footer.text')}
        </p>
    </div>
</footer>
`;