import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss'],
  animations:[]
})
export class NavbarTopComponent implements OnInit {
  constructor() {}
  isSticky: boolean = false;
  @HostListener('window:scroll')
  checkScroll() {
    this.isSticky = window.pageYOffset >= 20;
  }
  ngOnInit(): void {}
}
