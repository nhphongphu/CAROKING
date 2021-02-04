import { Component, OnInit } from '@angular/core';






export interface PeriodicElement {
  name: string;
  position: number;
  result: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', result: '' },
  { position: 2, name: 'Helium', result: '' },
  { position: 3, name: 'Lithium', result: '' },
  { position: 4, name: 'Beryllium', result: '' },
  { position: 5, name: 'Boron', result: '' },
  { position: 6, name: 'Carbon', result: '' },
  { position: 7, name: 'Nitrogen', result: '' },
  { position: 8, name: 'Oxygen', result: '' },
  { position: 9, name: 'Fluorine', result: '' },
  { position: 10, name: 'Neon', result: '' },
];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'result',];
  dataSource = ELEMENT_DATA;
  constructor() {
  }

  ngOnInit(): void {

  }


}
