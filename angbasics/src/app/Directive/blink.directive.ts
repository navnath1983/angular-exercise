import { Directive } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Blink]',
  host:{
    '(focus)' : 'onFocus()',
    '(blur)' : 'onBlur()'
  }
})

export class BlinkDirective {

  constructor(private el : ElementRef, private ren : Renderer2) { }

  onFocus(){
    
  }

  onBlur(){

  }

}
