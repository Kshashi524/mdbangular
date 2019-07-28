const COMBINATIONS = [
  'combineAll', 'combineLatest', 'concat', 'concatAll', 'endWith', 'forkJoin',
  'merge', 'mergeAll', 'pairwise', 'race', 'startWith', 'withLatestFrom', 'zip'
];

export const OPERATORS = [
  {name: 'Combination', children: COMBINATIONS}
];

export const SIDENAV = [
  {name: 'Observables', children: []},
  {name: 'Operators', children: OPERATORS},
];
