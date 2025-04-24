import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MaService } from '../ma-lib.service';
import * as i0 from "@angular/core";
export declare class MaPermissionDirective implements OnInit {
    private el;
    private renderer;
    private permissionService;
    requiredPermissions: string | string[];
    mode: 'disable' | 'hide';
    constructor(el: ElementRef, renderer: Renderer2, permissionService: MaService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaPermissionDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MaPermissionDirective, "[maPermission]", never, { "requiredPermissions": { "alias": "maPermission"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; }, {}, never, never, false, never>;
}
