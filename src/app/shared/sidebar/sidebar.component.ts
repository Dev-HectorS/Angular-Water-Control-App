import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  optionSelected: string = 'home';

  constructor() { }

  ngOnInit(): void {
  }

  getActiveClass(option: string) {
    return (option === this.optionSelected) ? 'current' : '';
  }

  selectOption(option: string) {
    if (option === this.optionSelected) {
      return
    } else {
      this.optionSelected = '';
    }
    this.optionSelected = option;
  }
}
