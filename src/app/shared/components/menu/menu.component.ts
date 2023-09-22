import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes from Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and dates',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
          },
          {
            label: 'Non common',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
          },
        ]
      },
      {
        label: 'Personalized pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom pipes',
            icon: 'pi pi-pencil',
            routerLink: 'custom'
          },
        ]
      }
    ];
  }
}
