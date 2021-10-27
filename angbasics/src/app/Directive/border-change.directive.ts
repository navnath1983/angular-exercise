import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[BorderChange]',
  host:{
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()'
  }
})

export class BorderChangeDirective implements OnInit{

  constructor(private el:ElementRef, private ren:Renderer2) { }

  ngOnInit(){
    
  }

  onFocus(){
    // this.el.nativeElement.style = "border-color:red",
    this.ren.setStyle(this.el, 'border-color', 'red')
  }

  onBlur(){
    // this.el.nativeElement.style = "border-color:red",
    // this.el.nativeElement.style = "border-color:red"
  }
}
