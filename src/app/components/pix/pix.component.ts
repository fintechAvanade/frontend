import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TransferirPixComponent } from './transferir-pix/transferir-pix.component';

@Component({
  selector: 'app-pix',
  imports: [RouterLink, MatDialogModule],
  templateUrl: './pix.component.html',
  styleUrl: './pix.component.css'
})
export class PixComponent {

  constructor(
    private dialog: MatDialog
  ) {}

  realizarPix(){
    this.dialog.open(TransferirPixComponent)
  }
}
