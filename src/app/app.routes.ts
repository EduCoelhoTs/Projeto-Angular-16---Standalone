import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () => import('./pages/home/home-routes.routes').then(m => m.routes),
    },
    {
        path: 'standalone',
        component: LayoutComponent,
        loadChildren: () => import('./pages/standalone/standalone-routes.routes').then(m => m.routes),
    }
];
