import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Case, CaseService } from '../../services/case.service';

@Component({
  selector: 'te-case-page',
  templateUrl: './case-page.component.html',
  styleUrls: ['./case-page.component.less'],
  host: {
    style: 'width: 60%',
  },
})
export class CasePageComponent implements OnInit {
  public case: Case;

  constructor(private route: ActivatedRoute, private caseService: CaseService) {}

  public ngOnInit(): void {
    const caseName = this.route.snapshot.paramMap.get('name');
    this.case = this.caseService.getCase(caseName);
  }
}
