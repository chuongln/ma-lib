import { OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import { CardForm } from './card-form.interface';
import * as i0 from "@angular/core";
export declare class CardFormComponent extends BaseControlValueAccessor implements OnInit {
    controlContainer: ControlContainer;
    header: string;
    data: any;
    cols: CardForm[];
    formGroup: FormGroup;
    get f(): {
        [key: string]: import("@angular/forms").AbstractControl<any, any>;
    };
    constructor(controlContainer: ControlContainer);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardFormComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardFormComponent, "app-card-form", never, { "header": { "alias": "header"; "required": false; }; "data": { "alias": "data"; "required": false; }; "cols": { "alias": "cols"; "required": false; }; "formGroup": { "alias": "formGroup"; "required": false; }; }, {}, never, never, true, never>;
}
