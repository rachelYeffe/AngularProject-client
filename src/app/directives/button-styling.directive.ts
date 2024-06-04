import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appButtonStyling]'
})
export class ButtonStylingDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '5px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

}