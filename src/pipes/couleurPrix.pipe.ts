import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'couleurPrix'})
export class CouleurPrix implements PipeTransform {
  transform(value: number): string {
    if ( value >= 100) {
      return 'red';
    } else if ( value >= 40) {
      return 'yellow';
    }
    return 'green';
  }
}
