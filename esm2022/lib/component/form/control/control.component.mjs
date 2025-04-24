import { Component, forwardRef, Input, Optional, } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import { InputTextModule } from 'primeng/inputtext';
import { MaLibModule } from '../../../ma-lib.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@ngx-translate/core";
import * as i4 from "primeng/inputtext";
export class ControlComponent extends BaseControlValueAccessor {
    constructor(controlContainer) {
        super(controlContainer);
        this.controlContainer = controlContainer;
        this.type = 'text';
        this.label = '';
        this.labelClass = '';
        this.placeholder = '';
        this.isRequired = false;
        this.allowClear = true;
        this.labelSpan = 4;
        this.selectLabel = 'label';
        this.selectValue = 'value';
        this.options = [];
        this.isShowTime = false;
        this.nzFormatDate = 'dd/mm/yy';
        this.minDate = new Date('1900/01/01');
        this.maxlength = 0;
        this.numNight = 1;
    }
    get formGroup() {
        return this.controlContainer?.control;
    }
    ngOnInit() {
        if (this.maxlength == 0) {
            if (this.type === 'text') {
                this.maxlength = 255;
                // this.control.setValue(this.control.value);
                console.log(this.control.value);
                this.control.valueChanges.subscribe((res) => {
                    console.log(res);
                });
            }
            else if (this.type === 'number') {
                this.maxlength = 14;
            }
            else if (this.type === 'textarea') {
                this.maxlength = 500;
            }
        }
    }
    onInputNumberSliceMaxLength(event) {
        if (this.maxlength < 1) {
            return;
        }
        const input = event.target;
        const value = input.value;
        if (value.length > this.maxlength) {
            input.value = value.slice(0, this.maxlength);
            this.control.setValue(input.value === '' || input.value === null || input.value === undefined || Number.isNaN(input.value) ? null : Number(input.value));
        }
    }
    checkDate() {
        setTimeout(() => {
            const container = document.querySelector('.p-datepicker-group-container');
            if (!container)
                return;
            const childDivs = container.querySelectorAll('.range-date-first');
            const childDiv2s = container.querySelectorAll('.range-date-last');
            childDivs.forEach(div => {
                div.classList.remove('range-date-first', 'range-date-last');
            });
            childDiv2s.forEach(div => {
                div.classList.remove('range-date-first', 'range-date-last');
            });
            if (this.control.value && (this.control.value.length > 0 || this.type === 'date')) {
                const labels = container.querySelectorAll('span.p-highlight:not(.p-disabled)');
                if (labels.length > 0) {
                    labels[0].parentElement.classList.add('range-date-first');
                    labels[labels.length - 1].parentElement.classList.add('range-date-last');
                }
            }
        }, 50);
    }
    updateNight(data) {
        this.numNight = data;
        this.calculateDates();
    }
    setTime(time, type) {
        if (!time || time.length < 5) {
            return time;
        }
        const [hours, minutes] = time.split(':');
        let date = new Date();
        if (type === 'from' && this.control.value[0]) {
            date = new Date(this.control.value[0]);
            date.setHours(Number(hours));
            date.setMinutes(Number(minutes));
            date.setSeconds(0);
            this.control.setValue([date, this.control.value[1] ?? null]);
        }
        else if (this.control.value[1]) {
            date = new Date(this.control.value[1]);
            date.setHours(Number(hours));
            date.setMinutes(Number(minutes));
            date.setSeconds(0);
            this.control.setValue([this.control.value[0] ?? null, date]);
        }
        return time;
    }
    calculateDates() {
        if (!this.control.value) {
            return;
        }
        let departDate;
        if (this.control.value[0] && this.numNight && this.numNight >= 1) {
            const arrival = new Date(this.control.value[0]);
            const numNight = this.numNight;
            if (numNight > 999) {
                return;
            }
            arrival.setHours(0, 0, 0, 0);
            arrival.setDate(arrival.getDate() + numNight);
            departDate = new Date(arrival.getFullYear(), arrival.getMonth(), arrival.getDate(), this.control.value[1].getHours(), this.control.value[1].getMinutes(), 0, 0);
        }
        else if (this.numNight < 1) {
            this.numNight = 1;
            const arrival = new Date(this.control.value[0]);
            const newDepartDate = new Date(arrival.getFullYear(), arrival.getMonth(), arrival.getDate() + 1, this.control.value[1].getHours(), this.control.value[1].getMinutes(), 0, 0);
            if (this.control.value[1] !== newDepartDate) {
                departDate = newDepartDate;
            }
        }
        this.control.setValue([this.control.value[0], departDate]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ControlComponent, deps: [{ token: i1.ControlContainer, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ControlComponent, isStandalone: true, selector: "ord-control", inputs: { type: "type", label: "label", labelClass: "labelClass", placeholder: "placeholder", isRequired: "isRequired", allowClear: "allowClear", labelSpan: "labelSpan", selectLabel: "selectLabel", selectValue: "selectValue", options: "options", isShowTime: "isShowTime", nzFormatDate: "nzFormatDate", minDate: "minDate", maxDate: "maxDate", maxlength: "maxlength", maxNumber: "maxNumber", minNumber: "minNumber" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ControlComponent),
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"type === 'text'\">\n  <div class=\"flex flex-column gap-2\">\n    <label *ngIf=\"label\" [class]=\"labelClass\">{{ label }}</label>\n    <ng-container [ngTemplateOutlet]=\"required\" *ngIf=\"isRequired\"></ng-container>\n\n    <input pInputText [formControl]=\"control\" [maxlength]=\"maxlength\" [(ngModel)]=\"value\"\n      [placeholder]=\"placeholder || ('enter'| translate)\" />\n  </div>\n</ng-container>\n<ng-container *ngIf=\"type === 'number'\">\n\n</ng-container>\n<ng-container *ngIf=\"type === 'textarea'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'select'\">\n  <p-dropdown [options]=\"options\" [formControl]=\"control\" [optionLabel]=\"selectLabel\" [optionValue]=\"selectValue\"\n    [placeholder]=\"placeholder || ('enter'| translate)\" />\n\n</ng-container>\n<ng-container *ngIf=\"type === 'date'\">\n</ng-container>\n<ng-container *ngIf=\"type === 'date-range'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'date-range-time'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'time'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'checkbox'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'radio-group'\">\n</ng-container>\n\n\n<ng-container *ngIf=\"type === 'multi-select'\">\n</ng-container>\n\n<ng-template #error let-control>\n  <div class=\"mt-2\">\n    <ord-error-message [errors]=\"control.errors\" [customErrorText]=\"customErrorText\"\n      [label]=\"label\"></ord-error-message>\n  </div>\n</ng-template>\n\n<ng-template #required>\n  <span *ngIf=\"isRequired\" style=\"display: inline-block;\n      margin-left: 4px;\n      color: #ff4d4f;\n      font-size: 14px;\n      font-family: SimSun, sans-serif;\n      line-height: 1;\">*</span>\n</ng-template>", styles: [""], dependencies: [{ kind: "ngmodule", type: MaLibModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: InputTextModule }, { kind: "directive", type: i4.InputText, selector: "[pInputText]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ord-control', standalone: true, imports: [
                        MaLibModule,
                        InputTextModule,
                        ReactiveFormsModule
                    ], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ControlComponent),
                            multi: true,
                        },
                    ], template: "<ng-container *ngIf=\"type === 'text'\">\n  <div class=\"flex flex-column gap-2\">\n    <label *ngIf=\"label\" [class]=\"labelClass\">{{ label }}</label>\n    <ng-container [ngTemplateOutlet]=\"required\" *ngIf=\"isRequired\"></ng-container>\n\n    <input pInputText [formControl]=\"control\" [maxlength]=\"maxlength\" [(ngModel)]=\"value\"\n      [placeholder]=\"placeholder || ('enter'| translate)\" />\n  </div>\n</ng-container>\n<ng-container *ngIf=\"type === 'number'\">\n\n</ng-container>\n<ng-container *ngIf=\"type === 'textarea'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'select'\">\n  <p-dropdown [options]=\"options\" [formControl]=\"control\" [optionLabel]=\"selectLabel\" [optionValue]=\"selectValue\"\n    [placeholder]=\"placeholder || ('enter'| translate)\" />\n\n</ng-container>\n<ng-container *ngIf=\"type === 'date'\">\n</ng-container>\n<ng-container *ngIf=\"type === 'date-range'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'date-range-time'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'time'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'checkbox'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'radio-group'\">\n</ng-container>\n\n\n<ng-container *ngIf=\"type === 'multi-select'\">\n</ng-container>\n\n<ng-template #error let-control>\n  <div class=\"mt-2\">\n    <ord-error-message [errors]=\"control.errors\" [customErrorText]=\"customErrorText\"\n      [label]=\"label\"></ord-error-message>\n  </div>\n</ng-template>\n\n<ng-template #required>\n  <span *ngIf=\"isRequired\" style=\"display: inline-block;\n      margin-left: 4px;\n      color: #ff4d4f;\n      font-size: 14px;\n      font-family: SimSun, sans-serif;\n      line-height: 1;\">*</span>\n</ng-template>" }]
        }], ctorParameters: function () { return [{ type: i1.ControlContainer, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { type: [{
                type: Input
            }], label: [{
                type: Input
            }], labelClass: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], isRequired: [{
                type: Input
            }], allowClear: [{
                type: Input
            }], labelSpan: [{
                type: Input
            }], selectLabel: [{
                type: Input
            }], selectValue: [{
                type: Input
            }], options: [{
                type: Input
            }], isShowTime: [{
                type: Input
            }], nzFormatDate: [{
                type: Input
            }], minDate: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], maxNumber: [{
                type: Input
            }], minNumber: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1saWIvc3JjL2xpYi9jb21wb25lbnQvZm9ybS9jb250cm9sL2NvbnRyb2wuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtbGliL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vY29udHJvbC9jb250cm9sLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsVUFBVSxFQUNWLEtBQUssRUFFTCxRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUErQixpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztBQXFDckQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLHdCQUF3QjtJQWdDNUQsWUFBd0MsZ0JBQWtDO1FBQ3hFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRGMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQS9CakUsU0FBSSxHQUFjLE1BQU0sQ0FBQztRQUV6QixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUVkLGdCQUFXLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsT0FBTyxDQUFDO1FB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VztzQkFBbkIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFFRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUdHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUdHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciwgRm9ybUdyb3VwLCBOR19WQUxVRV9BQ0NFU1NPUiwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJhc2VDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uL2Jhc2UtY29udHJvbC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBJbnB1dFRleHRNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0dGV4dCc7XG5pbXBvcnQgeyBNYUxpYk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uL21hLWxpYi5tb2R1bGUnO1xuXG5cbnR5cGUgaW5wdXRUeXBlID1cbiAgfCAndGV4dCdcbiAgfCAnbnVtYmVyJ1xuICB8ICdwYXNzd29yZCdcbiAgfCAnc2VsZWN0J1xuICB8ICdtdWx0aS1zZWxlY3QnXG4gIHwgJ2NoZWNrYm94J1xuICB8ICdyYWRpbydcbiAgfCAncmFkaW8tZ3JvdXAnXG4gIHwgJ3RleHRhcmVhJ1xuICB8ICdkYXRlJ1xuICB8ICdkYXRlLXJhbmdlJ1xuICB8ICdkYXRlLXJhbmdlLXRpbWUnXG4gIHwgJ3RpbWUnXG4gIHwgJ3RyZWUtc2VsZWN0J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvcmQtY29udHJvbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE1hTGliTW9kdWxlLFxuICAgIElucHV0VGV4dE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIHN0eWxlVXJsczogWydjb250cm9sLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29udHJvbENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdHlwZTogaW5wdXRUeXBlID0gJ3RleHQnO1xuXG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIGxhYmVsQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcbiAgQElucHV0KCkgaXNSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhbGxvd0NsZWFyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbGFiZWxTcGFuID0gNDtcblxuICBASW5wdXQoKSBzZWxlY3RMYWJlbCA9ICdsYWJlbCc7XG4gIEBJbnB1dCgpIHNlbGVjdFZhbHVlID0gJ3ZhbHVlJztcbiAgQElucHV0KCkgb3B0aW9uczogYW55W10gPSBbXTtcblxuXG4gIEBJbnB1dCgpIGlzU2hvd1RpbWUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpGb3JtYXREYXRlID0gJ2RkL21tL3l5JztcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCcxOTAwLzAxLzAxJyk7XG4gIEBJbnB1dCgpIG1heERhdGUhOiBEYXRlO1xuXG5cbiAgQElucHV0KCkgbWF4bGVuZ3RoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBtYXhOdW1iZXI6IG51bWJlcjtcbiAgQElucHV0KCkgbWluTnVtYmVyOiBudW1iZXI7XG5cblxuXG5cbiAgbm93OiBEYXRlO1xuICBudW1OaWdodCA9IDE7XG4gIHNlbGVjdGVkT3B0aW9uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIG92ZXJyaWRlIGNvbnRyb2xDb250YWluZXI6IENvbnRyb2xDb250YWluZXIpIHtcbiAgICBzdXBlcihjb250cm9sQ29udGFpbmVyKTtcbiAgfVxuXG4gIGdldCBmb3JtR3JvdXAoKTogRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sQ29udGFpbmVyPy5jb250cm9sIGFzIEZvcm1Hcm91cDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1heGxlbmd0aCA9PSAwKSB7XG4gICAgICBpZiAodGhpcy50eXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgdGhpcy5tYXhsZW5ndGggPSAyNTU7XG5cbiAgICAgICAgLy8gdGhpcy5jb250cm9sLnNldFZhbHVlKHRoaXMuY29udHJvbC52YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbC52YWx1ZSk7XG4gICAgICAgIHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRoaXMubWF4bGVuZ3RoID0gMTQ7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICB0aGlzLm1heGxlbmd0aCA9IDUwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG5cbiAgb25JbnB1dE51bWJlclNsaWNlTWF4TGVuZ3RoKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tYXhsZW5ndGggPCAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IHRoaXMubWF4bGVuZ3RoKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHRoaXMubWF4bGVuZ3RoKTtcbiAgICAgIHRoaXMuY29udHJvbC5zZXRWYWx1ZShpbnB1dC52YWx1ZSA9PT0gJycgfHwgaW5wdXQudmFsdWUgPT09IG51bGwgfHwgaW5wdXQudmFsdWUgPT09IHVuZGVmaW5lZCB8fCBOdW1iZXIuaXNOYU4oaW5wdXQudmFsdWUpID8gbnVsbCA6IE51bWJlcihpbnB1dC52YWx1ZSkpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrRGF0ZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wLWRhdGVwaWNrZXItZ3JvdXAtY29udGFpbmVyJyk7XG4gICAgICBpZiAoIWNvbnRhaW5lcikgcmV0dXJuO1xuICAgICAgY29uc3QgY2hpbGREaXZzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYW5nZS1kYXRlLWZpcnN0JylcbiAgICAgIGNvbnN0IGNoaWxkRGl2MnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnJhbmdlLWRhdGUtbGFzdCcpXG4gICAgICBjaGlsZERpdnMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgncmFuZ2UtZGF0ZS1maXJzdCcsICdyYW5nZS1kYXRlLWxhc3QnKTtcbiAgICAgIH0pO1xuICAgICAgY2hpbGREaXYycy5mb3JFYWNoKGRpdiA9PiB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdyYW5nZS1kYXRlLWZpcnN0JywgJ3JhbmdlLWRhdGUtbGFzdCcpO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5jb250cm9sLnZhbHVlICYmICh0aGlzLmNvbnRyb2wudmFsdWUubGVuZ3RoID4gMCB8fCB0aGlzLnR5cGUgPT09ICdkYXRlJykpIHtcbiAgICAgICAgY29uc3QgbGFiZWxzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4ucC1oaWdobGlnaHQ6bm90KC5wLWRpc2FibGVkKScpO1xuICAgICAgICBpZiAobGFiZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsYWJlbHNbMF0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdyYW5nZS1kYXRlLWZpcnN0Jyk7XG4gICAgICAgICAgbGFiZWxzW2xhYmVscy5sZW5ndGggLSAxXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3JhbmdlLWRhdGUtbGFzdCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgNTApO1xuXG4gIH1cblxuICB1cGRhdGVOaWdodChkYXRhKSB7XG4gICAgdGhpcy5udW1OaWdodCA9IGRhdGE7XG4gICAgdGhpcy5jYWxjdWxhdGVEYXRlcygpO1xuICB9XG4gIHNldFRpbWUodGltZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghdGltZSB8fCB0aW1lLmxlbmd0aCA8IDUpIHtcbiAgICAgIHJldHVybiB0aW1lO1xuICAgIH1cbiAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gdGltZS5zcGxpdCgnOicpO1xuICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBpZiAodHlwZSA9PT0gJ2Zyb20nICYmIHRoaXMuY29udHJvbC52YWx1ZVswXSkge1xuICAgICAgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuY29udHJvbC52YWx1ZVswXSk7XG4gICAgICBkYXRlLnNldEhvdXJzKE51bWJlcihob3VycykpO1xuICAgICAgZGF0ZS5zZXRNaW51dGVzKE51bWJlcihtaW51dGVzKSk7XG4gICAgICBkYXRlLnNldFNlY29uZHMoMCk7XG4gICAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUoW2RhdGUsIHRoaXMuY29udHJvbC52YWx1ZVsxXSA/PyBudWxsXSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRyb2wudmFsdWVbMV0pIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmNvbnRyb2wudmFsdWVbMV0pO1xuICAgICAgZGF0ZS5zZXRIb3VycyhOdW1iZXIoaG91cnMpKTtcbiAgICAgIGRhdGUuc2V0TWludXRlcyhOdW1iZXIobWludXRlcykpO1xuICAgICAgZGF0ZS5zZXRTZWNvbmRzKDApO1xuICAgICAgdGhpcy5jb250cm9sLnNldFZhbHVlKFt0aGlzLmNvbnRyb2wudmFsdWVbMF0gPz8gbnVsbCwgZGF0ZV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGltZTtcbiAgfVxuXG4gIGNhbGN1bGF0ZURhdGVzKCkge1xuICAgIGlmICghdGhpcy5jb250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBkZXBhcnREYXRlO1xuICAgIGlmICh0aGlzLmNvbnRyb2wudmFsdWVbMF0gJiYgdGhpcy5udW1OaWdodCAmJiB0aGlzLm51bU5pZ2h0ID49IDEpIHtcbiAgICAgIGNvbnN0IGFycml2YWwgPSBuZXcgRGF0ZSh0aGlzLmNvbnRyb2wudmFsdWVbMF0pO1xuICAgICAgY29uc3QgbnVtTmlnaHQgPSB0aGlzLm51bU5pZ2h0O1xuICAgICAgaWYgKG51bU5pZ2h0ID4gOTk5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFycml2YWwuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICBhcnJpdmFsLnNldERhdGUoYXJyaXZhbC5nZXREYXRlKCkgKyBudW1OaWdodCk7XG4gICAgICBkZXBhcnREYXRlID0gbmV3IERhdGUoYXJyaXZhbC5nZXRGdWxsWWVhcigpLCBhcnJpdmFsLmdldE1vbnRoKCksIGFycml2YWwuZ2V0RGF0ZSgpLCB0aGlzLmNvbnRyb2wudmFsdWVbMV0uZ2V0SG91cnMoKSwgdGhpcy5jb250cm9sLnZhbHVlWzFdLmdldE1pbnV0ZXMoKSwgMCwgMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bU5pZ2h0IDwgMSkge1xuICAgICAgdGhpcy5udW1OaWdodCA9IDE7XG4gICAgICBjb25zdCBhcnJpdmFsID0gbmV3IERhdGUodGhpcy5jb250cm9sLnZhbHVlWzBdKTtcbiAgICAgIGNvbnN0IG5ld0RlcGFydERhdGUgPSBuZXcgRGF0ZShhcnJpdmFsLmdldEZ1bGxZZWFyKCksIGFycml2YWwuZ2V0TW9udGgoKSwgYXJyaXZhbC5nZXREYXRlKCkgKyAxLCB0aGlzLmNvbnRyb2wudmFsdWVbMV0uZ2V0SG91cnMoKSwgdGhpcy5jb250cm9sLnZhbHVlWzFdLmdldE1pbnV0ZXMoKSwgMCwgMCk7XG4gICAgICBpZiAodGhpcy5jb250cm9sLnZhbHVlWzFdICE9PSBuZXdEZXBhcnREYXRlKSB7XG4gICAgICAgIGRlcGFydERhdGUgPSBuZXdEZXBhcnREYXRlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnRyb2wuc2V0VmFsdWUoW3RoaXMuY29udHJvbC52YWx1ZVswXSwgZGVwYXJ0RGF0ZV0pXG4gIH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICd0ZXh0J1wiPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbHVtbiBnYXAtMlwiPlxuICAgIDxsYWJlbCAqbmdJZj1cImxhYmVsXCIgW2NsYXNzXT1cImxhYmVsQ2xhc3NcIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJyZXF1aXJlZFwiICpuZ0lmPVwiaXNSZXF1aXJlZFwiPjwvbmctY29udGFpbmVyPlxuXG4gICAgPGlucHV0IHBJbnB1dFRleHQgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBbbWF4bGVuZ3RoXT1cIm1heGxlbmd0aFwiIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyIHx8ICgnZW50ZXInfCB0cmFuc2xhdGUpXCIgLz5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09PSAnbnVtYmVyJ1wiPlxuXG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09PSAndGV4dGFyZWEnXCI+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICdzZWxlY3QnXCI+XG4gIDxwLWRyb3Bkb3duIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBbZm9ybUNvbnRyb2xdPVwiY29udHJvbFwiIFtvcHRpb25MYWJlbF09XCJzZWxlY3RMYWJlbFwiIFtvcHRpb25WYWx1ZV09XCJzZWxlY3RWYWx1ZVwiXG4gICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyIHx8ICgnZW50ZXInfCB0cmFuc2xhdGUpXCIgLz5cblxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ2RhdGUnXCI+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09PSAnZGF0ZS1yYW5nZSdcIj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ2RhdGUtcmFuZ2UtdGltZSdcIj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ3RpbWUnXCI+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICdjaGVja2JveCdcIj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ3JhZGlvLWdyb3VwJ1wiPlxuPC9uZy1jb250YWluZXI+XG5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICdtdWx0aS1zZWxlY3QnXCI+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLXRlbXBsYXRlICNlcnJvciBsZXQtY29udHJvbD5cbiAgPGRpdiBjbGFzcz1cIm10LTJcIj5cbiAgICA8b3JkLWVycm9yLW1lc3NhZ2UgW2Vycm9yc109XCJjb250cm9sLmVycm9yc1wiIFtjdXN0b21FcnJvclRleHRdPVwiY3VzdG9tRXJyb3JUZXh0XCJcbiAgICAgIFtsYWJlbF09XCJsYWJlbFwiPjwvb3JkLWVycm9yLW1lc3NhZ2U+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNyZXF1aXJlZD5cbiAgPHNwYW4gKm5nSWY9XCJpc1JlcXVpcmVkXCIgc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgY29sb3I6ICNmZjRkNGY7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LWZhbWlseTogU2ltU3VuLCBzYW5zLXNlcmlmO1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XCI+Kjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+Il19