import { Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
  selector: "[pkmnBorderCard]",
})
export class BorderCardDirective {
  //  ElementRef permet d'acceder a un element du dom
  constructor(private elmt: ElementRef) {
    this.setHeight(210);
    this.setBorder("#f5f5f5");
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || "#FF0000");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder("#f5f5f5");
  }

  setHeight(height: number) {
    //  nativeElmement permet d'acceder l'element native HTML
    this.elmt.nativeElement.style.height = height +  "px";
  }

  setBorder(color: string) {
    let border = '4px solid ' + color  ;
    this.elmt.nativeElement.style.border = border;
  }
}
