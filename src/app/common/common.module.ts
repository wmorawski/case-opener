import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseBoxComponent } from '../components/case-box/case-box.component';
import { CaseItemComponent } from '../components/case-item/case-item.component';
import { ItemColorDirective } from '../directives/item-color.directive';
import { CdkScrollableModule, ScrollingModule } from '@angular/cdk/scrolling';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
export const trackByValue = <T>(index: number, value: T): T => value;

@NgModule({
  declarations: [CaseBoxComponent, CaseItemComponent, ItemColorDirective],
  imports: [CommonModule, CdkScrollableModule, ScrollingModule, NgxPageScrollCoreModule],
  exports: [CaseBoxComponent, CaseItemComponent, ItemColorDirective],
})
export class TeCommonModule {}
