import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from "../interfaces/hero.interface";

@Pipe({ name: 'sortBy' })
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | undefined): Hero[] {
    if (!sortBy) return heroes

    return heroes
      .sort((heroeA, heroeZ) => {
        return heroeA[sortBy] > heroeZ[sortBy] ? 1 : -1
      });
  }

}
