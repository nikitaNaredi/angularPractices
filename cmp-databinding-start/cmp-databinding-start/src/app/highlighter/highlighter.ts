import { Directive, OnInit, ElementRef, Renderer2, HostListener, Input } from "@angular/core";

@Directive({

    selector: '[app-highlighter]'

})

export class Highlighter implements OnInit{

    constructor(private ele: ElementRef,private renderer: Renderer2){}

    ngOnInit(){
        /*Ways to change DOM*/
        this.ele.nativeElement.style.backgroundColor = 'blue'; 
        this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
    }
    @HostListener('mouseleave') mouseover(evant: Event) {
        this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'transparent');
    }
    @HostListener('mouseenter') mouseenter(evant: Event) {
        this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'brown');
    }

}