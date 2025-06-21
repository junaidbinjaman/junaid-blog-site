import '../css/template/style.css';
import '../css/template/venobox.min.css';
import '../css/template/swiper-bundle.min.css';
import '../css/app.css';

// import './template/main.js';
// import './template/clipboard.min.js';
// import './template/preline';
// import './template/venobox.min.js';
// import './template/swiper-bundle.min.js';
import './template/custom.js';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Junaid\'s Personal Blogging';

createInertiaApp({
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
