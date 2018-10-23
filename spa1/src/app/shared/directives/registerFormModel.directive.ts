import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Directive({
    selector: '[registerForm]'
})
export class RegisterFormModelDirective implements OnInit {
    private el: HTMLInputElement;

    @Input('registerForm') public form: NgForm;
    @Input('registerModel') public model: NgModel;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    ngOnInit() {
        if (this.form && this.model) {
            this.form.form.registerControl(this.model.name, this.model.control);
            this.form.addControl(this.model);
        }
    }
}
