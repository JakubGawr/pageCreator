import { Component, HostBinding, OnInit } from '@angular/core';
import { NavModel } from '../../models/nav.model';

const NAV_CONFIG: NavModel[] = [
  {
    name: 'Editor',
    icon: 'test',
  },
  {
    name: 'Client',
    icon: 'test',
  },
  {
    name: 'LogOut',
    icon: 'test',
  },
];

@Component({
  selector: 'page-creator-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @HostBinding('class.c-nav') setNav = true;
  navConfig = NAV_CONFIG;
  constructor() {}

  ngOnInit(): void {}
}
