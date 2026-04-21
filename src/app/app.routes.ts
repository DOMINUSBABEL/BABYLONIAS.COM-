import {Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent) },
  { path: 'thesis', loadComponent: () => import('./pages/thesis.component').then(m => m.ThesisComponent) },
  { path: 'tech', loadComponent: () => import('./pages/tech.component').then(m => m.TechComponent) },
  { path: 'hub', loadComponent: () => import('./pages/hub.component').then(m => m.HubComponent) },
  { path: 'services', loadComponent: () => import('./pages/services.component').then(m => m.ServicesComponent) },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio.component').then(m => m.PortfolioComponent) },
  { path: 'consulting', loadComponent: () => import('./pages/consulting.component').then(m => m.ConsultingComponent) },
  { path: '**', redirectTo: '' }
];
