import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ListMultiSelectComponent implements OnInit {
    private translate;
    formGroup: FormGroup;
    filters: any;
    tempFormValues: any;
    get f(): {
        [key: string]: import("@angular/forms").AbstractControl<any, any>;
    };
    constructor(translate: TranslateService);
    ngOnInit(): void;
    openFilterPanel(): void;
    applyFilters(): void;
    getTooltipText(filter: any): string;
    getNumFiltersWithValues(): number;
    clearFilter(): void;
    formatFilter(s1: any, s2: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListMultiSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListMultiSelectComponent, "list-multi-select", never, { "formGroup": { "alias": "formGroup"; "required": false; }; "filters": { "alias": "filters"; "required": false; }; }, {}, never, never, true, never>;
}
