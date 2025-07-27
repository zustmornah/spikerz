import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-panel.html',
  styleUrl: './main-panel.scss'
})
export class MainPanel {

  metadata = [
    { key: 'Date', value: '2024-07-28' },
    { key: 'Status', value: 'Active' },
    { key: 'Owner', value: 'Security Team' },
    { key: 'Region', value: 'us-east-1' },
    { key: 'Last Scanned', value: '2 hours ago' },
  ];

}
