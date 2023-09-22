import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {

  public nameLower: string = 'daniel'
  public nameUpper: string = 'DANIEL'
  public fullName: string = 'DaNiEl MuÑoZ'

  public now: Date = new Date()
}
