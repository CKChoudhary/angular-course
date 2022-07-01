import { Directive, HostBinding, HostListener, Input,EventEmitter, Output } from "@angular/core";


@Directive({
  selector: "[highlighted]",
  exportAs: 'hl'
})
export class HighlightedDirective {
  @Input("highlighted")
  isHighlighted = false;

  constructor() {
    console.log("directive created");
  }

  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostListener("mouseover",['$event'])
  mouseover($event) {
    //console.log($event);
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener("mouseleave")
  mouseleave() {
    this.isHighlighted = false;
     this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @Output()
  toggleHighlight = new EventEmitter();
}
