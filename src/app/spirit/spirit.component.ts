import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SpiritData } from '../spirit-data';
import { attack_svg, grab_svg, neutral_svg, shield_svg } from '../vars';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.scss']
})
export class SpiritComponent {

  constructor(public dialogRef: MatDialogRef<SpiritComponent>,
    @Inject(MAT_DIALOG_DATA) public spirit: SpiritData) {

  }
  attack_svg = attack_svg;
  grab_svg = grab_svg;
  shield_svg = shield_svg;
  neutral_svg = neutral_svg;

}
