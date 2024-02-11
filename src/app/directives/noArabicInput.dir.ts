import {Directive, ElementRef, HostListener} from '@angular/core';
import { NgControl } from '@angular/forms';
@Directive({
    selector: '[inputFilter]'
})
export class inputFilterDirective {
    constructor(private el: ElementRef, private control: NgControl) { }
     regex = /^[\u0621-\u064A\u0660-\u0669 ]+$/
    @HostListener('keydown', ['$event'])
     onKeyDown(event: KeyboardEvent) {
        let e = event
        if (this.regex.test(this.control.value)) {
            e.preventDefault();
         } else {
            return ;
         }
    }
}