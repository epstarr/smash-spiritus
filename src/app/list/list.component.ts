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
    new Spirit(1, "Mario", "https://www.ssbwiki.com/images/e/e1/Metal_Mario_Spirit.png"),
    new Spirit(2, "Bowser", "https://www.ssbwiki.com/images/f/f8/SPI-Bowser_%28Wedding%29.png")
  ]
  windowWidth;
  list_cols;
  ngOnInit() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 400) {
      this.list_cols = 3;
    } else if (this.windowWidth < 600 && this.windowWidth >= 400) {
      this.list_cols = 4;
    } else if (this.windowWidth <= 600 && this.windowWidth >= 1000) {
      this.list_cols = 8;
    }
      
  }
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth < 400) {
      this.list_cols = 3;
    } else if (this.windowWidth < 600 && this.windowWidth >= 400) {
      this.list_cols = 4;
    } else if (this.windowWidth >= 600 && this.windowWidth < 1000) {
      this.list_cols = 8;
    }
  }

}
