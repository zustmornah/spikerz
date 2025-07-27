import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShieldCheckIcon } from '../shield-check-icon/shield-check-icon';
import { ServerIcon } from '../server-icon/server-icon';
import { Databaseicon } from '../databaseicon/databaseicon';

export type IconComponentType = 'ShieldCheck' | 'Server' | 'Database';

@Component({
  selector: 'app-asset-card',
  standalone: true,
  imports: [CommonModule, ShieldCheckIcon, ServerIcon, Databaseicon],
  templateUrl: './asset-card.html',
  styleUrl: './asset-card.scss'
})
export class AssetCard {

  @Input() icon!: IconComponentType;
  @Input() title!: string;
  @Input() description!: string;

}
