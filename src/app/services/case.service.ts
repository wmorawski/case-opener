import { Injectable } from '@angular/core';

import {
  CaseItem,
  CaseItemRarity,
  CaseItemRarityDropRate,
} from '../components/case-item/case-item.component';

export interface Case {
  name: string;
  items: CaseItem[];
  price: number;
  image: string;
}

const Rarities: { [key: string]: CaseItemRarity } = {
  ['Mythical']: {
    kind: 'Mythical',
    rate: CaseItemRarityDropRate.Mythical,
  },
  ['Legendary']: {
    kind: 'Legendary',
    rate: CaseItemRarityDropRate.Legendary,
  },
  ['Ancient']: {
    kind: 'Ancient',
    rate: CaseItemRarityDropRate.Ancient,
  },
};

const cases: Case[] = [
  {
    name: 'Dragon',
    price: 135,
    image: 'assets/images/cases/dragon.png',
    items: [
      {
        weapon: 'UMP-45',
        model: 'Grand Prix',
        image: 'assets/images/items/ump45-grandprix.png',
        value: 39,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'PP-Bizon',
        model: 'Osiris',
        image: 'assets/images/items/ppbizon-osiris.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'FAMAS',
        model: 'Neural Net',
        image: 'assets/images/items/famas-neuralnet.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'Five-SeveN',
        model: 'Triumvirate',
        image: 'assets/images/items/fiveseven-triumvirate.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'MAG-7',
        model: 'Petroglyph',
        image: 'assets/images/items/mag7-petroglyph.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'Glock-18',
        model: 'Royal Legion',
        image: 'assets/images/items/glock-royallegion.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'SSG 08',
        model: 'Ghost Crusader',
        image: 'assets/images/items/ssg-ghostcrusader.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'P90',
        model: 'Chopper',
        image: 'assets/images/items/p90-chopper.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'Glock-18',
        model: 'Grinder',
        image: 'assets/images/items/glock-grinder.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'P2000',
        model: 'Handgun',
        image: 'assets/images/items/p2000-handgun.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'Glock-18',
        model: 'Steel Disruption',
        image: 'assets/images/items/glock-steel.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'USP-S',
        model: 'Guardian',
        image: 'assets/images/items/usp-guardian.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'AUG',
        model: 'Aristocrat',
        image: 'assets/images/items/aug-aristocrat.png',
        value: 47,
        rarity: Rarities.Mythical,
      },
      {
        weapon: 'P250',
        model: 'Franklin',
        image: 'assets/images/items/p250-franklin.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'Galil AR',
        model: 'Eco',
        image: 'assets/images/items/galil-eco.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'Five-SeveN',
        model: 'Fowl Play',
        image: 'assets/images/items/fiveseven-fowlplay.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'Famas',
        model: 'Djinn',
        image: 'assets/images/items/famas-djinn.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'Five-SeveN',
        model: 'Monkey Businnes',
        image: 'assets/images/items/fiveseven-monkey.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'SCAR-20',
        model: 'Bloodsport',
        image: 'assets/images/items/scar-bloodspot.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'Deseart Eagle',
        model: 'Conspiracy',
        image: 'assets/images/items/deagle-conspiracy.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'Nova',
        model: 'Hyper Beast',
        image: 'assets/images/items/nova-hyperbeast.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'MP9',
        model: 'Airlock',
        image: 'assets/images/items/mp9-airlock.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'UMP-45',
        model: 'Primal Saber',
        image: 'assets/images/items/ump45-primalsaber.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'Desert Eagle',
        model: 'Kumicho Dragon',
        image: 'assets/images/items/deagle-kumicho.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'Tec-9',
        model: 'Fuel Injector',
        image: 'assets/images/items/tec-fuel.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'Glock-18',
        model: 'Water Elemental',
        image: 'assets/images/items/glock-water.png',
        value: 85,
        rarity: Rarities.Legendary,
      },
      {
        weapon: 'Galil AR',
        model: 'Chatterbox',
        image: 'assets/images/items/galil-chatterbox.png',
        value: 230,
        rarity: Rarities.Ancient,
      },
      {
        weapon: 'AUG',
        model: 'Chameleon',
        image: 'assets/images/items/aug-chameleon.png',
        value: 230,
        rarity: Rarities.Ancient,
      },
      {
        weapon: 'M4A4',
        model: 'Desert-Strike',
        image: 'assets/images/items/m4a4-desertstrike.png',
        value: 230,
        rarity: Rarities.Ancient,
      },
      {
        weapon: 'M4A$',
        model: 'The BattleStar',
        image: 'assets/images/items/m4a4-battlestar.png',
        value: 230,
        rarity: Rarities.Ancient,
      },
      {
        weapon: 'P2000',
        model: 'Fire Elemental',
        image: 'assets/images/items/p2000-fireelemental.png',
        value: 230,
        rarity: Rarities.Ancient,
      },
      {
        weapon: 'M4A4',
        model: 'Bullet Rain',
        image: 'assets/images/items/m4a4-bulletrain.png',
        value: 230,
        rarity: Rarities.Ancient,
      },
      {
        weapon: 'M4A1-S',
        model: 'Cyrex',
        image: 'assets/images/items/m4a1-cyrex.png',
        value: 230,
        rarity: Rarities.Ancient,
      },
    ],
  },
  {
    name: 'Classified',
    price: 420,
    image: 'assets/images/cases/classified.png',
    items: [],
  },
];

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  public getCases() {
    return cases;
  }

  public getCase(name: string): Case | null {
    return cases.find(c => c.name === name);
  }

  public prepareCase(items: CaseItem[]): CaseItem[] {
    const length = 1000;
    const arr: CaseItem[] = [];
    const factor = [...new Set(items.map(i => i.rarity))].reduce((acc, curr) => acc + curr.rate, 0);
    console.log('Factor', factor);
    items.forEach(item => {
      const arrOfItem = Array<CaseItem>(
        this.normalize(item.rarity.rate, length, this.findOfKind(item, items), factor)
      ).fill(item);
      arr.push(...arrOfItem);
    });
    console.log(arr.length);
    return this.shuffleArray(arr);
  }

  private normalize(val, len, ofSameKind, factor) {
    console.log(len, val, ofSameKind);
    return Math.floor((len * val) / ofSameKind / factor);
  }
  private shuffleArray = (arr: CaseItem[]) =>
    arr
      .map(a => [Math.random() * a.rarity.rate + Math.random(), a])
      .sort((a: [number, CaseItem], b: [number, CaseItem]) => a[0] - b[0])
      .map((a: [number, CaseItem]) => a[1]);

  private findOfKind(item: CaseItem, items: CaseItem[]): number {
    return items.filter(i => i.rarity.kind === item.rarity.kind).length;
  }
}
