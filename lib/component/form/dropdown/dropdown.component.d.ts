import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import * as i0 from "@angular/core";
export declare class DropdownComponent extends BaseControlValueAccessor implements OnInit {
    controlContainer: ControlContainer;
    private cdr;
    label: string;
    options: any[];
    placeholder: string;
    optionLabel: string;
    isOpen: boolean;
    constructor(controlContainer: ControlContainer, cdr: ChangeDetectorRef);
    get formGroup(): FormGroup;
    ngOnInit(): void;
    handleDropdownOpen(): void;
    handleDropdownClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, [{ optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "dropdown", never, { "label": { "alias": "label"; "required": false; }; "options": { "alias": "options"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "optionLabel": { "alias": "optionLabel"; "required": false; }; }, {}, never, never, true, never>;
}
