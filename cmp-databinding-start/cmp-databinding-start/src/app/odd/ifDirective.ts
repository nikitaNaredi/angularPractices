import { Directive, OnInit, ViewRef, ViewContainerRef, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: '[app-if-directive]'
})

export class AppIfDirective implements OnInit{
    @Input('app-if-directive') set ifdir(condition: boolean){
        if(condition)
            this.container.createEmbeddedView(this.template);
    };
    constructor(private template: TemplateRef<any>,private container: ViewContainerRef){

    }
    ngOnInit(){

    }

}