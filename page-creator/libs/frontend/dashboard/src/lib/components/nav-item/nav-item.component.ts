import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NavModel } from '../../models/nav.model';

@Component({
  selector: 'page-creator-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @HostBinding('class.c-nav__item') setNavItem = true;

  @Input() item: NavModel = null;
  constructor() {}

  ngOnInit(): void {}
}
