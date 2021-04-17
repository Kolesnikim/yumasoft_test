import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IEmployee} from '../shared/interfaces/employees';

@Injectable()
export class TableDataService {
  private tableData: BehaviorSubject<IEmployee[]>;
  tableData$: Observable<IEmployee[]>;

  constructor() {
    this.tableData = new BehaviorSubject<IEmployee[]>(
      [
        {
          name: 'Mark Humpreys',
          age: 45,
        },
        {
          name: 'Katrina Campbell',
          age: 35,
        },
        {
          name: 'John Doe',
          age: 30,
        },
        {
          name: 'Steve Smith',
          age: 31,
        },
        {
          name: 'David Warner',
          age: 33,
        },
        {
          name: 'Marnus Labuschagne',
          age: 26,
        }
      ]
    );

    this.tableData$ = this.tableData.asObservable();
  }
}
