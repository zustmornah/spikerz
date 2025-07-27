import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-trending-up-icon',
  standalone: true,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
      <polyline points="16 7 22 7 22 13"></polyline>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-block;
      width: 1rem; /* h-4 */
      height: 1rem; /* w-4 */
    }
  `]
})

export class TrendingUpIconComponent { }

interface ChartDataItem {
  name: string; // ngx-charts uses 'name' for categories
  value: number; // ngx-charts uses 'value' for numerical data
}

@Component({
  selector: 'app-risk-summary',
  standalone: true,
  imports: [CommonModule, NgxChartsModule, TrendingUpIconComponent],
  templateUrl: './risk-summary.html',
  styleUrl: './risk-summary.scss'
})
export class RiskSummary {

  chartData: ChartDataItem[] = [
    { name: "Critical", value: 2 },
    { name: "High", value: 5 },
    { name: "Medium", value: 12 },
    { name: "Low", value: 35 },
  ];

  criticalRiskCount = this.chartData.find(d => d.name === 'Critical')?.value || 0;

  // Custom colors for ngx-charts
  // These should map to your SCSS variables for consistency
  chartColors = [
    { name: "Critical", value: 'var(--color-critical)' },
    { name: "High", value: 'var(--color-high)' },
    { name: "Medium", value: 'var(--color-medium)' },
    { name: "Low", value: 'var(--color-low)' },
  ];

  // Dummy method for (select) event if needed
  onSelect(event: any): void {
    console.log('Item selected', event);
  }

}
