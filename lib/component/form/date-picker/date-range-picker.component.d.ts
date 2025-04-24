import { OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import * as i0 from "@angular/core";
export declare class DateRangePickerComponent extends BaseControlValueAccessor implements OnInit {
    controlContainer: ControlContainer;
    selectedDateRange: string | null;
    selectedDateRangePanel: string | null;
    fromTime: string | null;
    toTime: string | null;
    dateRangeInput: FormControl;
    selectedInterval: string | null;
    label: string;
    maxDate: Date;
    minDate: Date;
    type: 'date' | 'month';
    showTime: boolean;
    constructor(controlContainer: ControlContainer);
    get formGroup(): FormGroup;
    ngOnInit(): void;
    openPanel(): void;
    checkDate(): void;
    viewDate(): void;
    applyDateRange(): void;
    onTimeChange(): void;
    formatDate(date: Date): string;
    selectTimeInterval(interval: string): void;
    intervals: {
        key: string;
        label: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangePickerComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangePickerComponent, "date-range-picker", never, { "selectedInterval": { "alias": "selectedInterval"; "required": false; }; "label": { "alias": "label"; "required": false; }; "maxDate": { "alias": "maxDate"; "required": false; }; "minDate": { "alias": "minDate"; "required": false; }; "type": { "alias": "type"; "required": false; }; "showTime": { "alias": "showTime"; "required": false; }; }, {}, never, never, true, never>;
}
