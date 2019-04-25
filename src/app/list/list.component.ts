import { Component, OnInit } from '@angular/core';
import { SpiritData } from "../spirit-data";
import { MockSpirits } from "../mock-spirits";
import { SpiritComponent } from '../spirit/spirit.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material'
import { Overlay } from '@angular/cdk/overlay'
import { HttpClient } from '@angular/common/http'
import { attack_svg, grab_svg, slot_svg, slot_svg2, slot_svg3 } from '../vars'

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
  attack_svg = attack_svg;
  grab_svg = grab_svg;
  slot_svg = slot_svg;
  slot_svg2 = slot_svg2;
  slot_svg3 = slot_svg3;

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
    } else if (this.windowWidth >= 1000 && this.windowWidth < 1200) {
      this.listCols = 7;
    } else if (this.windowWidth >= 1200 && this.windowWidth < 1400) {
      this.listCols = 8;
    } else if (this.windowWidth >= 1400 && this.windowWidth < 1600) {
      this.listCols = 9;
    } else if (this.windowWidth >= 1600 && this.windowWidth < 1800) {
      this.listCols = 10;
    } else {
      this.listCols = 12;
    }
  }

  getJSON() {
    return this.http.get('./assets/json/spirits.json');
  }
  openSpirit(spirit: any) {
    const dialogRef = this.dialog.open(SpiritComponent, {
      data: spirit,
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });
    console.log(spirit)
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
    } else if (this.windowWidth >= 1000 && this.windowWidth < 1200) {
      this.listCols = 7;
    } else if (this.windowWidth >= 1200 && this.windowWidth < 1400) {
      this.listCols = 8;
    } else if (this.windowWidth >= 1400 && this.windowWidth < 1600) {
      this.listCols = 9;
    } else if (this.windowWidth >= 1600 && this.windowWidth < 1800) {
      this.listCols = 10;
    } else {
      this.listCols = 12;
    }
  }

}
