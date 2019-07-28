import {Component, OnInit} from '@angular/core';
import {interval, of} from 'rxjs';
import {concatAll, takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.scss']
})
export class ConcatAllComponent implements OnInit {

  runStream1 = true;
  runStream2 = true;
  runStream3 = true;
  stream1;
  stream2;
  stream3;

  stream1$ = interval(2000).pipe(tap(v => this.stream1 = v), takeWhile(() => this.runStream1));
  stream2$ = interval(4000).pipe(tap(v => this.stream2 = v), takeWhile(() => this.runStream2));
  stream3$ = interval(6000).pipe(tap(v => this.stream3 = v), takeWhile(() => this.runStream3));

  concatAll$ = of(this.stream1$, this.stream2$, this.stream3$).pipe(concatAll());

  constructor() {
  }

  ngOnInit() {
  }

}
