import {Component, OnInit} from '@angular/core';
import {concat, interval} from 'rxjs';
import {takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  runStream1 = true;
  runStream2 = true;
  runStream3 = true;
  stream1;
  stream2;
  stream3;

  stream1$ = interval(2000).pipe(tap(v => this.stream1 = v), takeWhile(() => this.runStream1));
  stream2$ = interval(4000).pipe(tap(v => this.stream2 = v), takeWhile(() => this.runStream2));
  stream3$ = interval(6000).pipe(tap(v => this.stream3 = v), takeWhile(() => this.runStream3));

  concat$ = concat(this.stream1$, this.stream2$, this.stream3$);

  constructor() {
  }

  ngOnInit() {
  }

}
