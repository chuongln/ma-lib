import { ControlContainer, ControlValueAccessor, FormControl, FormControlDirective, UntypedFormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare abstract class BaseControlValueAccessor implements ControlValueAccessor {
    protected controlContainer: ControlContainer;
    formControlDirective: FormControlDirective | undefined;
    formControl: FormControl;
    formControlName: string;
    constructor(controlContainer: ControlContainer);
    get control(): UntypedFormControl;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(obj: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseControlValueAccessor, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseControlValueAccessor, never, never, { "formControl": { "alias": "formControl"; "required": false; }; "formControlName": { "alias": "formControlName"; "required": false; }; }, {}, never, never, false, never>;
}
