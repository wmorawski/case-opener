import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CaseComponent } from '../../components/case/case.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent, CaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
      },
    ]),
  ],
})
export class MainModule {}
