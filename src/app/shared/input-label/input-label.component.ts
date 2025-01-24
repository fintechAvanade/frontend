import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-input-label',
  imports: [],
  templateUrl: './input-label.component.html',
  styleUrl: './input-label.component.css'
})
export class CustomInputComponent {
  @Input() placeholderText: string = '';  // Valor padrão caso não seja passado
  @Input() width: string = '';       // Largura padrão
  @Input() height: string = '';       // Altura padrão

}

