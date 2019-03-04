import { Directive , ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrice]'
})
export class PriceDirective implements OnInit {

  @Input() price: number;
  str: string;
  @HostListener('mouseenter')
  MouseEvent() {
    // alert('ok');
  }
  constructor(public _el: ElementRef) {

   }

   ngOnInit() {
    if ( this.price > 100 ) {
      this.str = 'red';
    } else if ( this.price > 40 ) {
      this.str = 'yellow';
    } else {
      this.str = 'green';
    }
    this._el.nativeElement.style.backgroundColor = this.str;
   }

}
