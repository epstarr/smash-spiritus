import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  constructor() { }
  windowWidth;
  list_cols;
  ngOnInit() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 400) {
      this.list_cols = 1;
    } else if (this.windowWidth < 600 && this.windowWidth >= 400) {
      this.list_cols = 3;
    } else if (this.windowWidth <= 600 && this.windowWidth >= 1000) {
      this.list_cols = 5;
    }
      
  }
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth < 400) {
      this.list_cols = 1;
    } else if (this.windowWidth < 600 && this.windowWidth >= 400) {
      this.list_cols = 3;
    } else if (this.windowWidth >= 600 && this.windowWidth < 1000) {
      this.list_cols = 5;
    }
  }

}
