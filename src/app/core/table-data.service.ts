import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEmployee } from '../shared/interfaces/employees';

@Injectable()
export class TableDataService {
   private readonly tableData: BehaviorSubject<IEmployee[]>;

  constructor() {
    this.tableData = new BehaviorSubject<IEmployee[]>([]);
  }

  get tableData$(): Observable<IEmployee[]> {
    return this.tableData.asObservable();
  }

  get tableDataSubj(): BehaviorSubject<IEmployee[]> {
    return this.tableData;
  }
}
