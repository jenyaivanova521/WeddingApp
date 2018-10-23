import { Directive, Input, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Directive({
    selector: '[appScrollSpy]',
})
export class NgxScrollSpyDirective {
    @Input() appScrollSpy: string;
    @Input() spyOffset?: string;

    constructor(
        @Inject(DOCUMENT) private _document: any,
        private _router: Router,
        private _elem: ElementRef,
        private _renderer: Renderer2
    ) { }

    private _getTarget(spTargetName: string[]): any {
        const type = spTargetName.shift();

        switch (type) {
            case '#':
                return this._document.getElementById(spTargetName.join(''));
            case '.':
                return this._document.getElementsByClassName(spTargetName.join(''))[0];
            default:
                return this._document.getElementsByTagName(this.appScrollSpy)[0];
        }
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event): void {
        const offset = this.spyOffset ? this.spyOffset : 0;
        const scrollTarget = this._getTarget(this.appScrollSpy.split(''));
        const elemDim = scrollTarget ? scrollTarget.getBoundingClientRect() : null;

        if (!elemDim) {
            console.warn(`There is no element ${this.appScrollSpy}`);
        } else if (elemDim && elemDim.top < offset && elemDim.bottom > offset) {
            this._renderer.addClass(this._elem.nativeElement, 'active');
        } else {
            this._renderer.removeClass(this._elem.nativeElement, 'active');
        }
    }
}
