import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

export type RiskLevel = "Critical" | "High" | "Medium" | "Low";

const riskColors: Record<RiskLevel, string> = {
  Critical: "bg-red-500-20 text-red-700 border-red-500-30", // Custom classes for styling
  High: "bg-orange-500-20 text-orange-700 border-orange-500-30", // Custom classes for styling
  Medium: "bg-yellow-500-20 text-yellow-700 border-yellow-500-30", // Added for completeness if needed
  Low: "bg-green-500-20 text-green-700 border-green-500-30",   // Added for completeness if needed
};

@Component({
  selector: 'app-asset-node',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './asset-node.html',
  styleUrl: './asset-node.scss'
})
export class AssetNode {

  @Input() name!: string;
  @Input() ip!: string;
  @Input() risk?: RiskLevel;

  riskColors = riskColors;

}
