import { OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import * as i0 from "@angular/core";
export declare class DatePickerComponent extends BaseControlValueAccessor implements OnInit {
    controlContainer: ControlContainer;
    label: string;
    maxDate: Date;
    minDate: Date;
    showTime: boolean;
    dateOption: string;
    dateOptions: any;
    constructor(controlContainer: ControlContainer);
    get formGroup(): FormGroup;
    ngOnInit(): void;
    onTimeChange(): void;
    onCalendarOpen(): void;
    highlightWeek(): void;
    onChangeDateOption(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DatePickerComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DatePickerComponent, "date-picker", never, { "label": { "alias": "label"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; "showTime": { "alias": "showTime"; "required": false; }; }, {}, never, never, true, never>;
}
