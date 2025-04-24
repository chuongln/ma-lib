import { Column } from '../table/table.interface';
import * as i0 from "@angular/core";
export declare class CardComponent {
    header: string;
    data: any;
    cols: Column[];
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "app-card", never, { "header": { "alias": "header"; "required": false; }; "data": { "alias": "data"; "required": false; }; "cols": { "alias": "cols"; "required": false; }; }, {}, never, never, true, never>;
}
