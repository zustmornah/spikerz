import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetCard, IconComponentType } from '../asset-card/asset-card';

interface AssetDetail {
  icon: IconComponentType; // Use the specific type for our icon components
  title: string;
  description: string;
}

interface Technique {
  name: string;
  description: string;
  assets: AssetDetail[];
}

const techniques: Technique[] = [
  {
    name: "Technique A",
    description: "Patch Management",
    assets: [
      { icon: 'Server', title: "Web Server", description: "Apply latest security patches for Apache." },
      { icon: 'Database', title: "Database", description: "Update PostgreSQL to version 14.8." },
    ]
  },
  {
    name: "Technique B",
    description: "Access Control",
    assets: [
      { icon: 'ShieldCheck', title: "Auth Service", description: "Enforce stricter MFA policies." },
      { icon: 'Server', title: "Load Balancer", description: "Restrict admin access to internal IPs." },
    ]
  },
  {
    name: "Technique C",
    description: "Configuration Hardening",
    assets: [
      { icon: 'Database', title: "Database", description: "Disable public-facing endpoints." },
      { icon: 'ShieldCheck', title: "Auth Service", description: "Increase token entropy and rotation." },
    ]
  }
];

@Component({
  selector: 'app-mediation',
  standalone: true,
  imports: [CommonModule, AssetCard],
  templateUrl: './mediation.html',
  styleUrl: './mediation.scss'
})
export class Mediation {

  techniques = techniques;

}
