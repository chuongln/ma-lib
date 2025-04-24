import { Directive, Input, ViewChild } from '@angular/core';
import { FormControlDirective, } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class BaseControlValueAccessor {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
    }
    get control() {
        return (this.formControl ||
            this.controlContainer?.control?.get(this.formControlName));
    }
    registerOnChange(fn) {
        if (this.formControlDirective?.valueAccessor) {
            this.formControlDirective.valueAccessor.registerOnChange(fn);
        }
    }
    registerOnTouched(fn) {
        if (this.formControlDirective?.valueAccessor) {
            this.formControlDirective.valueAccessor.registerOnTouched(fn);
        }
    }
    writeValue(obj) {
        if (this.formControlDirective?.valueAccessor) {
            this.formControlDirective.valueAccessor.writeValue(obj);
        }
    }
    setDisabledState(isDisabled) {
        if (this.formControlDirective?.valueAccessor?.setDisabledState) {
            this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseControlValueAccessor, deps: [{ token: i1.ControlContainer }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BaseControlValueAccessor, inputs: { formControl: "formControl", formControlName: "formControlName" }, viewQueries: [{ propertyName: "formControlDirective", first: true, predicate: FormControlDirective, descendants: true, static: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseControlValueAccessor, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1.ControlContainer }]; }, propDecorators: { formControlDirective: [{
                type: ViewChild,
                args: [FormControlDirective, { static: true }]
            }], formControl: [{
                type: Input
            }], formControlName: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb250cm9sLXZhbHVlLWFjY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtbGliL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vYmFzZS1jb250cm9sLXZhbHVlLWFjY2Vzc29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBSUwsb0JBQW9CLEdBRXJCLE1BQU0sZ0JBQWdCLENBQUM7OztBQUd4QixNQUFNLE9BQWdCLHdCQUF3QjtJQU01QyxZQUFzQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFNUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxDQUNMLElBQUksQ0FBQyxXQUFXO1lBQ2YsSUFBSSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxHQUFHLENBQ2xDLElBQUksQ0FBQyxlQUFlLENBQ0UsQ0FDekIsQ0FBQztJQUNKLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsRUFBRTtZQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlEO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxFQUFFO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQVE7UUFDakIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsYUFBYSxFQUFFO1lBQzVDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRTtZQUM5RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzsrR0F2Q21CLHdCQUF3QjttR0FBeEIsd0JBQXdCLDRKQUNqQyxvQkFBb0I7OzRGQURYLHdCQUF3QjtrQkFEN0MsU0FBUzt1R0FHUixvQkFBb0I7c0JBRG5CLFNBQVM7dUJBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUV4QyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbnRyb2xDb250YWluZXIsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUNvbnRyb2xEaXJlY3RpdmUsXG4gIFVudHlwZWRGb3JtQ29udHJvbCxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBWaWV3Q2hpbGQoRm9ybUNvbnRyb2xEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGZvcm1Db250cm9sRGlyZWN0aXZlOiBGb3JtQ29udHJvbERpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgZm9ybUNvbnRyb2whOiBGb3JtQ29udHJvbDtcbiAgQElucHV0KCkgZm9ybUNvbnRyb2xOYW1lITogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb250cm9sQ29udGFpbmVyOiBDb250cm9sQ29udGFpbmVyKSB7fVxuXG4gIGdldCBjb250cm9sKCk6IFVudHlwZWRGb3JtQ29udHJvbCB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2wgfHxcbiAgICAgICh0aGlzLmNvbnRyb2xDb250YWluZXI/LmNvbnRyb2w/LmdldChcbiAgICAgICAgdGhpcy5mb3JtQ29udHJvbE5hbWVcbiAgICAgICkgYXMgVW50eXBlZEZvcm1Db250cm9sKVxuICAgICk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZT8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25DaGFuZ2UoZm4pO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZT8udmFsdWVBY2Nlc3Nvcikge1xuICAgICAgdGhpcy5mb3JtQ29udHJvbERpcmVjdGl2ZS52YWx1ZUFjY2Vzc29yLnJlZ2lzdGVyT25Ub3VjaGVkKGZuKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmU/LnZhbHVlQWNjZXNzb3IpIHtcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKG9iaik7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmU/LnZhbHVlQWNjZXNzb3I/LnNldERpc2FibGVkU3RhdGUpIHtcbiAgICAgIHRoaXMuZm9ybUNvbnRyb2xEaXJlY3RpdmUudmFsdWVBY2Nlc3Nvci5zZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQpO1xuICAgIH1cbiAgfVxufVxuIl19