import {Component, OnInit} from '@angular/core';
import {OPERATORS} from './rxjs.constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  sidenavContent = OPERATORS;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigate(parent: string, child: string) {
    const url = 'rxjs/operators/' + parent + '/' + child;
    this.router.navigateByUrl(url).then();
  }
}
