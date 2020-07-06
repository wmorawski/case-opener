import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { CaseItem } from '../case-item/case-item.component';
import { CaseService } from '../../services/case.service';
import { PageScrollService } from 'ngx-page-scroll-core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'te-case-box',
  templateUrl: './case-box.component.html',
  styleUrls: ['./case-box.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseBoxComponent implements OnInit {
  @Input() public items: CaseItem[];
  public preparedCase: CaseItem[];
  @ViewChild('itemsElement') public itemElement: ElementRef;
  public isOpening = false;

  constructor(
    private caseService: CaseService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
    private cdRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.preparedCase = this.caseService.prepareCase(this.items);
    this.cdRef.detectChanges();
  }
  public trackByValue = i => i;

  public openCase() {
    if (this.isOpening) return;
    this.isOpening = true;
    this.preparedCase = this.caseService.prepareCase(this.items);
    this.itemElement.nativeElement.scrollTo({ left: 64 });
    const index = Math.floor(Math.random() * this.preparedCase.length);
    const offset = this.getRandomInt(20, 100) - 3 * 128;
    console.log(index, this.preparedCase[index], offset);
    const emitter = new EventEmitter();
    const nativeEl = this.itemElement.nativeElement;

    // const instance = this.pageScrollService.create({
    //   document: this.document,
    //   scrollTarget: '#item-' + index,
    //   scrollOffset: offset,
    //   verticalScrolling: false,
    //   duration: 5000,
    //   speed: 1000,
    //   scrollFinishListener: emitter,
    //   scrollViews: [nativeEl],
    //   advancedInlineOffsetCalculation: true,
    //   easingLogic: (t, b, c, d) => {
    //     if (t === 0) {
    //       return b;
    //     }
    //     if (t === d) {
    //       return b + c;
    //     }
    //     if ((t /= d / 2) < 1) {
    //       return (c / 4) * Math.pow(2, 10 * (t - 1)) + b;
    //     }
    //
    //     return (c / 4) * (-Math.pow(2, -10 * --t) + 2) + b;
    //   },
    // });
    // this.pageScrollService.start(instance);
    // emitter.subscribe(() => {
    //   this.isOpening = false;
    //   this.cdRef.detectChanges();
    // });
    nativeEl.scrollTo({ left: 128 * index + offset, behavior: 'smooth' });
    this.isOpening = false;
    this.cdRef.detectChanges();
  }

  private getRandomInt(min, max) {
    const minC = Math.ceil(min);
    const maxF = Math.floor(max);
    return Math.floor(Math.random() * (maxF - minC + 1)) + minC;
  }
}
