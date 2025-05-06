import { ValidationErrors } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class ErrorMessageComponent {
    errors?: ValidationErrors | null;
    label?: string;
    customErrorText?: string;
    get formatLabel(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ErrorMessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ErrorMessageComponent, "ord-error-message", never, { "errors": { "alias": "errors"; "required": false; }; "label": { "alias": "label"; "required": false; }; "customErrorText": { "alias": "customErrorText"; "required": false; }; }, {}, never, never, true, never>;
}
