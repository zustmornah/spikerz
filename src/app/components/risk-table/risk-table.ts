import { Component, inject } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { DrawerService } from '../../services/drawer';
import { Router } from '@angular/router';
import { RiskSummary } from '../risk-summary/risk-summary';

type RiskLevel = "Critical" | "High" | "Medium" | "Low";

interface RiskItem {
  asset: string;
  ip: string;
  risk: RiskLevel;
}

const risks: RiskItem[] = [
  { asset: "Auth Service", ip: "10.0.2.10", risk: "Critical" },
  { asset: "Database", ip: "10.0.3.11", risk: "High" },
  { asset: "Web Server", ip: "10.0.1.5", risk: "Medium" },
  { asset: "Load Balancer", ip: "10.0.0.1", risk: "Low" },
  { asset: "DB Replica", ip: "10.0.3.12", risk: "Low" },
  { asset: "Cache Server", ip: "10.0.4.8", risk: "Medium" },
];

const riskColorMap: Record<RiskLevel, string> = {
  Critical: "border-transparent bg-red-500-20 text-red-700 dark:text-red-400 hover:bg-red-500-30",
  High: "border-transparent bg-orange-500-20 text-orange-700 dark:text-orange-400 hover:bg-orange-500-30",
  Medium: "border-transparent bg-yellow-500-20 text-yellow-700 dark:text-yellow-400 hover:bg-yellow-500-30",
  Low: "border-transparent bg-green-500-20 text-green-700 dark:text-green-400 hover:bg-green-500-30",
};

@Component({
  selector: 'app-risk-table',
  standalone: true,
  imports: [CommonModule, NgClass, RiskSummary],
  templateUrl: './risk-table.html',
  styleUrl: './risk-table.scss'
})

export class RiskTable {

  risks = risks;
  riskColorMap = riskColorMap;

  router = inject(Router);
  private drawerService = inject(DrawerService);

  openDrawer(): void {
    this.drawerService.openDrawer();
  }

}
