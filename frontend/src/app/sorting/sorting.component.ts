import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Employee } from '../employee';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent {

  public employee: Employee[];

  sortedData: Employee[];

  constructor() {
    this.sortedData = this.employee.slice();
  }

  sortData(sort: Sort) {
    const data = this.employee.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'tile':
          return compare(a.title, b.title, isAsc);
        case 'firstName':
          return compare(a.firstName, b.firstName, isAsc);
        case 'lastName':
          return compare(a.lastName, b.lastName, isAsc);
        case 'presentAddress':
          return compare(a.presentAddress, b.presentAddress, isAsc);
        case 'homeAddress':
          return compare(a.homeAddress, b.homeAddress, isAsc);
        case 'idCardAddress':
          return compare(a.workAddress, b.workAddress, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);

}
