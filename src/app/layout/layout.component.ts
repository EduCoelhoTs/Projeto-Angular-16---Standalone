import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';

import { layoutData } from './model/layout-data';
import { data } from './data';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatSidenavModule,
    RouterModule,
    MatExpansionModule
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  public data: layoutData[] = data;
  @ViewChild('drawer', { static: true }) private sideNav!: MatDrawer;
  public panelOpenState = false;

  public handleToggle(): boolean {
    return this.sideNav.opened ? true : false;
  }

  public handleHoverClass(item: layoutData): string {
    return item.expansion ? 'hover:none' : 'hover:bg-cyan-900';
  }
}
