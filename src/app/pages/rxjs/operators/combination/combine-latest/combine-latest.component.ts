import {Component, OnInit} from '@angular/core';
import {combineLatest, interval} from 'rxjs';
import {map, takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  runStream1 = true;
  runStream2 = true;
  runStream3 = true;
  stream1;
  stream2;
  stream3;

  stream1$ = interval(2000).pipe(tap(v => this.stream1 = v), takeWhile(() => this.runStream1));
  stream2$ = interval(4000).pipe(tap(v => this.stream2 = v), takeWhile(() => this.runStream2));
  stream3$ = interval(6000).pipe(tap(v => this.stream3 = v), takeWhile(() => this.runStream3));

  combineLatest$ = combineLatest(this.stream1$, this.stream2$, this.stream3$).pipe(map(([x, y, z]) => x + y + z));

  constructor() {
  }

  ngOnInit() {
  }

}
