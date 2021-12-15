import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-sorting',
  templateUrl: './test-sorting.component.html',
  styleUrls: ['./test-sorting.component.css']
})
export class TestSortingComponent {

  columnDefs: ColDef[] = [
    { field: 'title', sortable: true },
    { field: 'firstName', sortable: true },
    { field: 'lastName', sortable: true },
    { field: 'presentAddress', sortable: true },
  ];

  rowData: Observable<any[]>;
  constructor(private http: HttpClient) {
    this.rowData = this.http.get<any[]>('http://localhost:8080/employee/all');
  }

}
