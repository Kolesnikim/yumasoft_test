import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableDataService } from '../../core/table-data.service';
import { csvToJSON } from '../../shared/utils/csvToJson';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
  stringFormGroup: FormGroup;
  dataFromFile: string;

  fields = ['name', 'year'];
  opts = { fields: this.fields };

  constructor(private tableDataSrv: TableDataService) {}

  ngOnInit(): void {
    this.stringFormGroup = new FormGroup({
      importedString: new FormControl('', [
        Validators.required,
      ]),
      importedFile: new FormControl('')
    });
  }

  sendString(event): void {
    event.preventDefault();

    let valueFromFile;

    let { value } = this.stringFormGroup.controls.importedString;

    this.stringFormGroup.controls.importedString.reset('');
    this.stringFormGroup.controls.importedFile.reset('');

    if (this.dataFromFile) {
      try {
        valueFromFile = JSON.parse(this.dataFromFile);
      } catch (e) {
        valueFromFile = csvToJSON(this.dataFromFile);
      }
    } else {
      valueFromFile = [];
    }

    try {
      value = JSON.parse(value);
    } catch (e) {
      value = csvToJSON(value);
    }

    this.tableDataSrv
      .tableDataSubj
      .next([...this.tableDataSrv.tableDataSubj.getValue(), ...value, ...valueFromFile]);
  }

  fileChanged(e): void {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      this.dataFromFile = reader.result.toString();
    };

    reader.readAsText(file);
  }
}
