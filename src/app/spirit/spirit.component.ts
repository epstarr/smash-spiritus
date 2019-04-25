import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SpiritData } from '../spirit-data';
import { ATTACK, GRAB, SHIELD, NEUTRAL } from '../vars';

@Component({
  selector: 'app-spirit',
  templateUrl: './spirit.component.html',
  styleUrls: ['./spirit.component.scss']
})
export class SpiritComponent {

  constructor(public dialogRef: MatDialogRef<SpiritComponent>,
    @Inject(MAT_DIALOG_DATA) public spirit: SpiritData) {

  }
  attack_svg = ATTACK;
  grab_svg = GRAB;
  shield_svg = SHIELD;
  neutral_svg = NEUTRAL;

}
