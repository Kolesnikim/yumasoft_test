import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../shared/interfaces/employees';
import { TableDataService } from '../../core/table-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
  tableData: Observable<IEmployee[]>;
  tableDataValues: IEmployee[];

  constructor(private tableDataSrv: TableDataService) {}

  ngOnInit(): void {
    this.tableData = this.tableDataSrv.tableData$;
    this.tableDataValues = this.tableDataSrv.tableDataSubj.getValue();
  }

  deleteRow(data: IEmployee): void {
    this.tableDataValues = this.tableDataValues.filter(el => el !== data);
    this.tableDataSrv.tableDataSubj.next(this.tableDataValues);
  }
}
