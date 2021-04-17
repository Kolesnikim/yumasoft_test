import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import { AddDataComponent } from './pages/add-data/add-data.component';
import { TableComponent } from './pages/table/table.component';
import { EditDataComponent } from './pages/edit-data/edit-data.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DownloadComponent } from './pages/download/download.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    TableComponent,
    EditDataComponent,
    DownloadComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      SharedModule,
      CoreModule,
      ReactiveFormsModule,
      FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
