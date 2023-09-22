import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'canFly' })
export class CanFlyPipe implements PipeTransform {

  transform(canFly: boolean): 'yes' | 'no' {
    return canFly ? 'yes' : 'no';
  }

}
