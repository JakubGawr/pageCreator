import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'page-creator-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @HostBinding('class.l-wrapper') setWrapper = true;
  constructor() {}

  ngOnInit(): void {}
}
