import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TableDataService } from '../../core/table-data.service';
import { Parser } from 'json2csv';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  exportedString: string;

  fields = ['name', 'year'];
  opts = { fields: this.fields };
  parser: Parser;

  constructor(private tableDataSrv: TableDataService){
    this.parser = new Parser(this.opts);
  }

  ngOnInit(): void {
    this.exportedString = JSON.stringify(this.tableDataSrv.tableDataSubj.getValue())
  }

  showInFormat(format: string): void {
    switch (format) {
      case 'json':
        this.exportedString = JSON.stringify(this.tableDataSrv.tableDataSubj.getValue())
        break;
      case 'csv':
        this.exportedString = this.parser.parse(this.tableDataSrv.tableDataSubj.getValue())
        break;
    }
  }

  download(): void {
    let type: string;

    try {
      const expString = JSON.parse(this.exportedString);
      if (expString) {
        type = 'text/json';
      }
    } catch (e) {
      type = 'text/csv';
    }

    const blob = new Blob([this.exportedString], { type });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}

