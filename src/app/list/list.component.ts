import { Component, OnInit } from '@angular/core';
import { SpiritData } from '../spirit-data';
import { SpiritComponent } from '../spirit/spirit.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { ATTACK, GRAB, SHIELD, NEUTRAL, SLOT1, SLOT2, SLOT3 } from '../vars';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('cardHover', [
      state('notHover', style({
        transform: 'scale(1, 1)'
      })),
      state('Hover', style({
        transform: 'scale(1.1, 1.1)'
      })),
      transition('notHover => Hover, Hover => notHover', [
        animate('1s')
      ])
    ])]
})
export class ListComponent implements OnInit {

  constructor(public dialog: MatDialog, public overlay: Overlay, public http: HttpClient) {
    this.getJSON().toPromise().then(res =>
      this.spirits = res);
  }

  spirits;
  windowWidth;
  listCols;
  attack_svg = ATTACK;
  grab_svg = GRAB;
  shield_svg = SHIELD;
  neutral_svg = NEUTRAL;
  slot_svg = SLOT1;
  slot_svg2 = SLOT2;
  slot_svg3 = SLOT3;

  ngOnInit() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 400) {
      this.listCols = 3;
    } else if (this.windowWidth >= 400 && this.windowWidth < 600) {
      this.listCols = 4;
    } else if (this.windowWidth >= 600 && this.windowWidth < 800) {
      this.listCols = 5;
    } else if (this.windowWidth >= 800 && this.windowWidth < 1000) {
      this.listCols = 6;
    } else if (this.windowWidth >= 1000) {
      this.listCols = 7;
    }
  }

  getJSON() {
    return this.http.get<SpiritData>('./assets/json/spirits.json');
  }
  openSpirit(spirit: any) {
    const dialogRef = this.dialog.open(SpiritComponent, {
      data: spirit,
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });
    console.log(spirit);
  }
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth < 400) {
      this.listCols = 3;
    } else if (this.windowWidth >= 400 && this.windowWidth < 600) {
      this.listCols = 4;
    } else if (this.windowWidth >= 600 && this.windowWidth < 800) {
      this.listCols = 5;
    } else if (this.windowWidth >= 800 && this.windowWidth < 1000) {
      this.listCols = 6;
    } else if (this.windowWidth >= 1000) {
      this.listCols = 7;
    }
  }

}
