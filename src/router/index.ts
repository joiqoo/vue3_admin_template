import { createRouter, createWebHashHistory } from 'vue-router';
import { contantRoute } from './routes';

let router = createRouter({
    history: createWebHashHistory(),
    routes: contantRoute,
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
});

export default router;