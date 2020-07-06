import { Component, Input, OnInit } from '@angular/core';
import { trackByValue } from '../../common/common.module';

export enum CaseItemRarityColor {
  Rare = 'rgb(17, 85, 221)',
  Mythical = 'rgb(136, 71, 255)',
  Legendary = 'rgb(211, 44, 230)',
  Ancient = 'rgb(235, 75, 75)',
  ExceedinglyRare = 'rgb(202, 171, 5)',
}

export enum CaseItemRarityDropRate {
  Rare = 0.7992,
  Mythical = 0.1598,
  Legendary = 0.032,
  Ancient = 0.0064,
  ExceedinglyRare = 0.0026,
}

export interface CaseItemRarity {
  kind: 'Rare' | 'Mythical' | 'Legendary' | 'Ancient' | 'ExceedinglyRare';
  rate: CaseItemRarityDropRate;
}

export interface CaseItem {
  weapon: string;
  model: string;
  value: number;
  rarity: CaseItemRarity;
  image: string;
}

@Component({
  selector: 'te-case-item',
  templateUrl: './case-item.component.html',
  styleUrls: ['./case-item.component.less'],
})
export class CaseItemComponent {
  @Input() public item: CaseItem;
}
