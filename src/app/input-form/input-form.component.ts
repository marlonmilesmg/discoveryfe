import {Result} from "../result";
import {Component, EventEmitter, Output} from "@angular/core";


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  source: string = '';
  destination: string = '';

  @Output() formSubmit: EventEmitter<Result> = new EventEmitter<Result>();
  submitForm() {
    if (this.source.trim() === '' || this.destination.trim() === '') {
      alert('Please enter both source and destination.');
      return;
    }

    const result: Result = {
      source: this.source,
      destination: this.destination
    };

    this.formSubmit.emit(result);

    this.source = '';
    this.destination = '';
  }
}
