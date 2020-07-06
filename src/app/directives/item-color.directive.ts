import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[teItemColor]',
  host: {
    '[class]': 'color.toLowerCase()',
  },
})
export class ItemColorDirective {
  @Input('teItemColor') public color:
    | 'Rare'
    | 'Mythical'
    | 'Legendary'
    | 'Ancient'
    | 'ExceedinglyRare';
}
