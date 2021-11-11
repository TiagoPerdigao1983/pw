import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  password = '';
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log(`About to generate a password with the following: Includes letters: ${this.includeLetters}
    Includes numbers: ${this.includeNumbers}
    Includes symbols: ${this.includeSymbols}`);
    this.password = 'MY PASSWORD!!!';
  }
}
