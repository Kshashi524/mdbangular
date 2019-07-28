import {Component, OnInit} from '@angular/core';
import {interval, of} from 'rxjs';
import {combineAll, map, switchMap, takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.scss']
})
export class CombineAllComponent implements OnInit {

  runStream1 = true;
  runStream2 = true;
  runStream3 = true;
  stream1;
  stream2;
  stream3;

  stream1$ = interval(2000).pipe(tap(v => this.stream1 = v), takeWhile(() => this.runStream1));
  stream2$ = interval(4000).pipe(tap(v => this.stream2 = v), takeWhile(() => this.runStream2));
  stream3$ = interval(6000).pipe(tap(v => this.stream3 = v), takeWhile(() => this.runStream3));

  randomNumber = Math.ceil(Math.random() * Math.ceil(10));

  combineAll$ = of(this.randomNumber).pipe(
    switchMap(x => [
      this.stream1$.pipe(map(y => x + y)),
      this.stream2$.pipe(map(y => x + y)),
      this.stream3$.pipe(map(y => x + y)),
    ])
  ).pipe(combineAll());

  constructor() {
  }

  ngOnInit() {
  }

}
