import { Component, HostBinding, Renderer2, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DrawerService } from '../../services/drawer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vulnerabilities-drawer',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './vulnerabilities-drawer.html',
  styleUrl: './vulnerabilities-drawer.scss'
})
export class VulnerabilitiesDrawer {

  // Using HostBinding to apply a class to the host element
  @HostBinding('class.open') isOpen: boolean = false; // Still used for CSS class binding

  private renderer = inject(Renderer2);
  private drawerService = inject(DrawerService); // <-- Inject the service
  private drawerSubscription!: Subscription; // To unsubscribe on destroy

  affectedAssetIp: string = '192.168.1.100';
  assetContext: string = 'Production Web Server Cluster';
  vulnerabilities: string[] = ['Critical', 'High', 'Medium', 'Low'];
  signatures: string[] = [
    'Signature ID: WEB-001 - SQLi Attempt Pattern',
    'Signature ID: XSS-005 - Script Tag Injection',
    'Signature ID: LIB-012 - Apache Struts CVE-2023-XXXX',
    'Signature ID: PE-003 - sudoers file modification'
  ];
  previewCards: any[] = [
    { title: 'Frame 1261165941', snippet: '[2025-07-26 14:05:12] ERROR: SQL Injection attempt detected from IP: 1.2.3.4, User-Agent: Mozilla/5.0' },
    { title: 'Log Entry Context', snippet: 'POST /api/v1/login HTTP/1.1 Host: spikerz-app.com User-Agent: curl/7.64.1 Content-Type: application/x-www-form-urlencoded Content-Length: 42 username=admin&password=\' OR \'1\'=\'1' },
    { title: 'Network Packet Trace', snippet: 'SRC: 1.2.3.4 DST: 192.168.1.100 PROTO: TCP Port: 80 Flags: [PSH, ACK] Seq: 12345 Ack: 67890 Data: "SELECT * FROM users WHERE username=\'admin\' AND password=\'\' OR \'1\'=\'1\' -- \'"' }
  ];

  ngOnInit(): void {
    // Subscribe to the drawer service's isOpen$ observable
    this.drawerSubscription = this.drawerService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
      if (isOpen) {
        this.renderer.addClass(document.body, 'drawer-open');
      } else {
        this.renderer.removeClass(document.body, 'drawer-open');
      }
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe to prevent memory leaks
    if (this.drawerSubscription) {
      this.drawerSubscription.unsubscribe();
    }
  }

  // Method to close the drawer, now uses the service
  closeDrawer(): void {
    this.drawerService.closeDrawer();
  }

  // Public methods to open/toggle if needed for external calls
  public openDrawer(): void {
    this.drawerService.openDrawer();
  }

  public toggleDrawer(): void {
    this.drawerService.toggleDrawer();
  }

}
