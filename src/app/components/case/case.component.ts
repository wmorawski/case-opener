import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../../services/case.service';

@Component({
  selector: 'te-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.less'],
})
export class CaseComponent {
  @Input() public case: Case;
}
