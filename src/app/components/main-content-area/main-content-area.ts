import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DrawerService } from '../../services/drawer';
import { MainPanel } from "../main-panel/main-panel";

@Component({
  selector: 'app-main-content-area',
  standalone: true,
  imports: [CommonModule, MainPanel],
  templateUrl: './main-content-area.html',
  styleUrl: './main-content-area.scss'
})
export class MainContentArea {

  router = inject(Router);
  private drawerService = inject(DrawerService);

  openDrawer(): void {
    this.drawerService.openDrawer();
  }

}
