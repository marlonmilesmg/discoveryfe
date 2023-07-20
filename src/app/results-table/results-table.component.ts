import {Component, Input} from '@angular/core';
import {Result} from "../result";

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})

  export class ResultsTableComponent {
  @Input() results: Result[] = [];

}
