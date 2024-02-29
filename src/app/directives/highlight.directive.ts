import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector:'[highlight]'
})
export class HighlightDirective{

    @Input() value:string;
    constructor(private elemRef: ElementRef){
       
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(this.value);
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('red');
    }
    private highlight(value:string){
        this.elemRef.nativeElement.style.backgroundColor = value;
    }
}