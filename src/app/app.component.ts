import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smash-spiritus';

  buttonElement = document.getElementById('menu-button');

  menuClass = '';

  menuSwitch() {
    if (this.menuClass !== 'active') {
      document.getElementById('menu-button').style.background = 'blue';
      this.menuClass = 'active';
    } else {
      this.menuClass = '';
      document.getElementById('menu-button').style.background = 'green';
    }

  }
}
