import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'customPipe'})
export class CustomPipe implements PipeTransform {
  transform(value: number): string {
      if ( value > 100 ) {
          return 'red';
      } else if ( value > 40) {
          return 'yellow';
      } else {
          return 'green';
      }
  }
}
