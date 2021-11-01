import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[BorderChange]',
  host:{
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class BorderChangeDirective implements OnInit{

  constructor(private el: ElementRef, private ren: Renderer2) { }

  ngOnInit(){
    
  }

  onFocus(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.ren.setStyle(this.el.nativeElement, 'border-color', 'red')
  }

  onBlur(){
    this.el.nativeElement.style.backgroundColor = 'white';
    this.ren.setStyle(this.el.nativeElement, 'border', '1px solid #ccc')
  }
}
