import { Component, OnInit } from '@angular/core';
import { Spirit } from "../spirit";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }
    spirits = [
    new Spirit(1, "Mario", "https://www.ssbwiki.com/images/e/e1/Metal_Mario_Spirit.png", "attack"),
    new Spirit(2, "Bowser", "https://www.ssbwiki.com/images/f/f8/SPI-Bowser_%28Wedding%29.png", "grab")
  ]
  windowWidth;
  list_cols;
  attack_SVG = "<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 110.000000 109.000000' preserveAspectRatio='xMidYMid meet'><g transform='translate(0.000000,109.000000) scale(0.100000,-0.100000)'fill='white' stroke='none'><path d='M777 809 c-10 -6 -64 -12 -120 -15 -99 -4 -102 -5 -109 -30 -4 -14 -11 -31 -16 -37 -11 13 -32 -77 -31 -91 0 -5 -4 -12 -9 -15 -5 -3 -19 -24 -30 -46 -11 -22 -34 -55 -50 -73 -26 -31 -30 -32 -45 -18 -8 9 -21 16 -27 16 -6 0 -9 4 -6 9 5 7 -14 21 -28 21 -8 0 -46 -39 -46 -47 0 -5 13 -22 29 -37 38 -36 44 -60 19 -77 -11 -8 -28 -26 -39 -41 l-19 -26 40 -42 c22 -23 40 -37 40 -31 0 6 6 11 13 11 6 0 23 14 36 30 29 38 44 38 84 0 37 -35 40 -36 67 -13 27 24 25 38 -11 72 l-30 29 31 31 c18 17 45 36 60 43 16 7 26 16 24 20 -3 4 4 8 15 8 12 0 21 5 21 10 0 6 9 10 20 10 11 0 28 4 38 9 34 17 67 30 87 33 18 3 21 14 27 91 3 48 11 110 17 137 6 28 11 55 11 60 0 13 -40 12 -63 -1z'/> </g> </svg>";
  ngOnInit() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 400) {
      this.list_cols = 3;
    } else if (this.windowWidth < 600 && this.windowWidth >= 400) {
      this.list_cols = 4;
    } else if (this.windowWidth >= 600) {
      this.list_cols = 8;
    }
      
  }
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth < 400) {
      this.list_cols = 3;
    } else if (this.windowWidth < 600 && this.windowWidth >= 400) {
      this.list_cols = 4;
    } else if (this.windowWidth >= 600) {
      this.list_cols = 8;
    }
  }

}
