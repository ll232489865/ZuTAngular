import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';
export var UnlessDirective = (function () {
    function UnlessDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(UnlessDirective.prototype, "myUnless", {
        set: function (condition) {
            if (!condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    UnlessDirective.decorators = [
        { type: Directive, args: [{ selector: '[myUnless]' },] },
    ];
    /** @nocollapse */
    UnlessDirective.ctorParameters = [
        { type: TemplateRef, },
        { type: ViewContainerRef, },
    ];
    UnlessDirective.propDecorators = {
        'myUnless': [{ type: Input },],
    };
    return UnlessDirective;
}());
//# sourceMappingURL=unless.directive.js.map