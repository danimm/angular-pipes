import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes from Angular',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Text and dates', icon: 'pi pi-align-left' },
          { label: 'Numbers', icon: 'pi pi-dollar' },
          { label: 'Non common', icon: 'pi pi-globe' },
        ]
      },
      {
        label: 'Personalized pipes',
        icon: 'pi pi-cog',
        items: [
          { label: 'Another element', icon: 'pi pi-cog' },
        ]
      }
    ];
  }
}
