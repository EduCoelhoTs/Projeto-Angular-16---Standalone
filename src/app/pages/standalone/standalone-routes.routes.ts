import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: 'criacao',
        loadComponent: () => import('./screens/criacao/criacao.component').then(m => m.CriacaoComponent)
    }
]