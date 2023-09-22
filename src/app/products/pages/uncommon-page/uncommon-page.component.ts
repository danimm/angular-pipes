import { Component } from '@angular/core';
import { interval, Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Daniel'
  public gender: 'male'|'female' = 'male'
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient(): void {
    this.name = 'Patricia'
    this.gender = 'female'
  }

  // i18nPural
  public clients: string[] = ['María', 'Pedro', 'Fernando', 'Eduardo', 'Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # personas esperando',
  }

  deleteClient(): void {
    this.clients.shift()
  }

  // KeyValue Pipe
  public person = {
    name: 'Daniel',
    age: 34,
    address: 'Schweiz'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log('tap: ', value))
    )

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log('Tenemos data en la promesa')
    },3500 )
  })
}
