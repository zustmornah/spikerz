import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainContentArea } from './components/main-content-area/main-content-area';
import { VulnerabilitiesDrawer } from './components/vulnerabilities-drawer/vulnerabilities-drawer';
import { SidebarNavigation } from "./components/sidebar-navigation/sidebar-navigation";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarNavigation, VulnerabilitiesDrawer, MainContentArea, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('spikerz-dashboard');
}
