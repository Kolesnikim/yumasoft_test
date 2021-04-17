import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../../core/table-data.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../../shared/interfaces/employees';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tableData: Observable<IEmployee[]>;

  constructor(private tableDataSrv: TableDataService) {
    this.tableData = this.tableDataSrv.tableData$;
  }

  ngOnInit(): void {
  }
}
