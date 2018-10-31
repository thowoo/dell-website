import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-nav-bar',
  templateUrl: './horizontal-nav-bar.component.html',
  styleUrls: ['./horizontal-nav-bar.component.scss']
})
export class HorizontalNavBarComponent implements OnInit {
  showFirstSubMenu = false;
  showSecondSubMenu = false;
  showThirdSubMenu = false;
  showForthSubMenu = false;
  showFifthSubMenu = false;

  constructor() { }

  ngOnInit() {
  }

  openMenu(subMenu) {
    switch (subMenu) {
      case 'firstMenu':
        this.showFirstSubMenu = true;
        break;
    }
  }

  closeMenu(subMenu) {
    switch (subMenu) {
      case 'firstMenu':
        this.showFirstSubMenu = false;
        break;
    }
  }
}
