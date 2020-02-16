import { Directive, ElementRef, Input, Renderer2, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[setBorder]'
})
export class SetBorderDirective implements OnChanges {
  private colorBoxShadow: string;
  @Input() public publicationDate: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    // this.elementRef.nativeElement.style.fontWeight = 'bold';
    // this.elementRef.nativeElement.style.boxShadow = '0px 5px 0px 0px rgba(0,0,0,0.75)';
    this.setBoxShadow();
   }

   public ngOnChanges(): void {
    this.colorBoxShadow = 'rgba(0,0,0,0.75)';

    const date: Date = new Date(this.publicationDate);
    const  daysLag: number = Math.ceil(Math.abs(Date.now() - date.getTime()) / (1000 * 3600 * 24));
    if (daysLag < 31) {
      this.colorBoxShadow = 'rgba(3, 255, 116, 1)';
     }
    if (daysLag < 7) {
      this.colorBoxShadow = 'rgba(14, 93, 240, 1)';
    }
    if (daysLag > 180) {
      this.colorBoxShadow = 'rgba(240, 14, 14, 1)';
   }
    this.setBoxShadow(`${this.colorBoxShadow}`);
   }

   @HostListener('mouseenter', ['$event'])
   public onMouseEnter(event: MouseEvent): void {
    this.setBoxShadow(`${this.colorBoxShadow}`, '15');
   }

   @HostListener('mouseleave', ['$event'])
   public onMouseLeave(event: MouseEvent): void {
    this.setBoxShadow(`${this.colorBoxShadow}`);
   }

   public setBoxShadow(color: string = 'rgba(0,0,0,0.75)', size: string = '5'): void {
    this.renderer2.setStyle(this.elementRef.nativeElement,
                            'box-shadow', `0px ${size}px 0px 0px ${color}`);
   }
}
