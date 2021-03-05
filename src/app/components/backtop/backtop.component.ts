import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-backtop',
  templateUrl: './backtop.component.html',
  styleUrls: ['./backtop.component.scss'],
})
export class BacktopComponent implements OnInit {
  constructor() {}
  isShow: boolean = false;
  @HostListener('window:scroll')
  checkScroll() {
    this.isShow = window.pageYOffset >= 50;
  }
  rollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  ngOnInit(): void {}
}
