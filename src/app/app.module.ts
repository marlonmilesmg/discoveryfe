import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ResultsTableComponent } from './results-table/results-table.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ResultsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
