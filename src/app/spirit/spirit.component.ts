import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.scss']
})
export class SpiritComponent {

  constructor(public dialogRef: MatDialogRef<SpiritComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

    }

}
