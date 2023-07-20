import { Component } from '@angular/core';
import {Result} from "./result";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submittedResults: Result[] = [];

  handleFormSubmit(result: Result) {
    this.submittedResults.push(result);
  }
  }

