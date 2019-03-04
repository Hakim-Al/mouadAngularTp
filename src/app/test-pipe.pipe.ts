import { Pipe, PipeTransform } from '@angular/core';
import { promise } from 'protractor';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(str: string): any {
  /*  const f2 = () => {alert('echec'); };
    const f1 = () => {alert('reussite'); };

    const lastUpdate = new Promise((resolve, reject) => {
    setTimeout(
      () => {
        resolve();
      }, 2000	// !!! le compte a rebours est declanché immediatement a l'instanciation de promise & non quand je use then!!!
    );
  });
   lastUpdate.then(f1, f2);
  */
  const f1 = (d) => console.log(alert(d));
  return new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  }).then(f1);
}
}
