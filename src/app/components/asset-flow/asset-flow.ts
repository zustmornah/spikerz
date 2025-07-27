import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetNode } from '../asset-node/asset-node';
import { Connector } from '../connector/connector';

export type RiskLevel = "Critical" | "High" | "Medium" | "Low";

const riskColors: Record<RiskLevel, string> = {
  Critical: "bg-red-500-20 text-red-700 border-red-500-30", // Custom classes for styling
  High: "bg-orange-500-20 text-orange-700 border-orange-500-30", // Custom classes for styling
  Medium: "bg-yellow-500-20 text-yellow-700 border-yellow-500-30", // Added for completeness if needed
  Low: "bg-green-500-20 text-green-700 border-green-500-30",   // Added for completeness if needed
};

@Component({
  selector: 'app-asset-flow',
  standalone: true,
  imports: [CommonModule, AssetNode, Connector],
  templateUrl: './asset-flow.html',
  styleUrl: './asset-flow.scss'
})
export class AssetFlow {

}
