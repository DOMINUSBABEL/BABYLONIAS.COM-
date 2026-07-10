import {Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent) },
  { path: 'thesis', loadComponent: () => import('./pages/thesis.component').then(m => m.ThesisComponent) },
  { path: 'intelligence', loadComponent: () => import('./pages/intelligence.component').then(m => m.IntelligenceComponent) },
  { path: 'sovereignty', loadComponent: () => import('./pages/sovereignty.component').then(m => m.SovereigntyComponent) },
  { path: 'trust', loadComponent: () => import('./pages/trust.component').then(m => m.TrustComponent) },
  { path: 'analytics', loadComponent: () => import('./pages/analytics.component').then(m => m.AnalyticsComponent) },
  { path: 'clients', loadComponent: () => import('./pages/clients.component').then(m => m.ClientsComponent) },
  { path: 'maintenance', loadComponent: () => import('./pages/maintenance.component').then(m => m.MaintenanceComponent) },
  { path: 'tech', loadComponent: () => import('./pages/tech.component').then(m => m.TechComponent) },
  { path: 'hub', loadComponent: () => import('./pages/hub.component').then(m => m.HubComponent) },
  { path: 'services', loadComponent: () => import('./pages/services.component').then(m => m.ServicesComponent) },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio.component').then(m => m.PortfolioComponent) },
  
  // Portfolio Detail Routes
  { path: 'portfolio/la-avispa', loadComponent: () => import('./pages/portfolio-details/la-avispa.component').then(m => m.LaAvispaComponent) },
  { path: 'portfolio/chronovisor', loadComponent: () => import('./pages/portfolio-details/chronovisor.component').then(m => m.ChronoVisorComponent) },
  { path: 'portfolio/iot-sentinel', loadComponent: () => import('./pages/portfolio-details/iot-sentinel.component').then(m => m.IotSentinelComponent) },
  { path: 'portfolio/actagen', loadComponent: () => import('./pages/portfolio-details/actagen.component').then(m => m.ActagenComponent) },
  { path: 'portfolio/geist-engine', loadComponent: () => import('./pages/portfolio-details/geist-engine.component').then(m => m.GeistEngineComponent) },
  { path: 'portfolio/oauth-bridge', loadComponent: () => import('./pages/portfolio-details/oauth-bridge.component').then(m => m.OauthBridgeComponent) },
  { path: 'portfolio/tei-parser', loadComponent: () => import('./pages/portfolio-details/tei-parser.component').then(m => m.TeiParserComponent) },
  { path: 'portfolio/termux-deployer', loadComponent: () => import('./pages/portfolio-details/termux-deployer.component').then(m => m.TermuxDeployerComponent) },

  { path: 'taskbar-4x', loadComponent: () => import('./pages/taskbar-4x.component').then(m => m.Taskbar4xComponent) },

  { path: 'consulting', loadComponent: () => import('./pages/consulting.component').then(m => m.ConsultingComponent) },
  { path: '**', redirectTo: '' }
];
