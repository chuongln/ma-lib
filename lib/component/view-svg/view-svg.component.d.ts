import { OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MaService } from '../../ma-lib.service';
import * as i0 from "@angular/core";
export declare class ViewSvgComponent implements OnChanges {
    private svgService;
    private sanitizer;
    name: string;
    svgContent: any;
    constructor(svgService: MaService, sanitizer: DomSanitizer);
    getSafeContent(): SafeHtml;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ViewSvgComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ViewSvgComponent, "view-svg", never, { "name": { "alias": "name"; "required": false; }; }, {}, never, never, false, never>;
}
