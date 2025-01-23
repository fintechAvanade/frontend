import { Component } from '@angular/core';

@Component({
  selector: 'app-button-filled', // O seletor deve ser "app-button-filled"
  template: `
    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 transform hover:scale-105">
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonFilled {}

