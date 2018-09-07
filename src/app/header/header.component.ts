import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSearchDropdown = false;

  // @ViewChild('firstSubMenu') firstSubMenu: ElementRef;

  showFirstSubMenu = false;
  showSecondSubMenu = false;
  showThirdSubMenu = false;
  showForthSubMenu = false;
  showFifthSubMenu = false;

  constructor() { }

  ngOnInit() {
  }

  searchDropdownToggle() {
    console.log('show search dropdown clicked');
    this.showSearchDropdown = !this.showSearchDropdown;
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
