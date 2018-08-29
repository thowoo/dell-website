import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showSearchDropdown = false;

  @ViewChild('navbar_right_search') navbar_right_search: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  searchDropdownToggle() {
    console.log('show search dropdown clicked');
    this.showSearchDropdown = !this.showSearchDropdown;
  }

}
