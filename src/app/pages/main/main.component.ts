import { Component, OnInit } from '@angular/core';

import { Case, CaseService } from '../../services/case.service';

@Component({
  selector: 'te-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
  public cases: Case[];

  constructor(private caseService: CaseService) {}

  public ngOnInit(): void {
    this.cases = this.caseService.getCases();
  }
}
