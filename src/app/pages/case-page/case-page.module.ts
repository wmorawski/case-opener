import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasePageComponent } from './case-page.component';
import { RouterModule } from '@angular/router';
import { AppModule } from '../../app.module';
import { MainModule } from '../main/main.module';
import { TeCommonModule } from '../../common/common.module';

@NgModule({
  declarations: [CasePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CasePageComponent }]),
    TeCommonModule,
  ],
})
export class CasePageModule {}
