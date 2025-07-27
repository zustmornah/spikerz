import { Routes } from '@angular/router';
import { MainContentArea } from './components/main-content-area/main-content-area';
import { AssetFlow } from './components/asset-flow/asset-flow';
import { RiskTable } from './components/risk-table/risk-table';
import { Mediation } from './components/mediation/mediation';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MainContentArea },
  { path: 'assets', component: AssetFlow }, // Use a generic component for now
  { path: 'risks', component: RiskTable },
  { path: 'remediation', component: Mediation },
  { path: 'reports', component: MainContentArea },
  { path: 'settings', component: MainContentArea },
  // Add other routes as you build out more specific components
  { path: '**', redirectTo: '/dashboard' } // Wildcard route for any other path
];
