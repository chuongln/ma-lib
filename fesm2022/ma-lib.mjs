import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i1 from 'primeng/api';

class MaLibService {
    constructor(messageService) {
        this.messageService = messageService;
        this.loadingSubject = new BehaviorSubject(false);
        this.permissions = [];
    }
    handleError(error) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error?.message || 'An unexpected error occurred.'
        });
    }
    showLoading() {
        this.loadingSubject.next(true);
    }
    hideLoading() {
        this.loadingSubject.next(false);
    }
    getLoading() {
        return this.loadingSubject.asObservable();
    }
    setPermissions(perms) {
        this.permissions = perms;
    }
    getPermissions() {
        return this.permissions;
    }
    hasPermission(p) {
        const list = Array.isArray(p) ? p : [p];
        return list.some(x => this.permissions.includes(x));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibService, deps: [{ token: i1.MessageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MessageService }]; } });

class MaLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: MaLibComponent, selector: "lib-ma-lib", ngImport: i0, template: `
    <p>
      ma-lib works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ma-lib', template: `
    <p>
      ma-lib works!
    </p>
  ` }]
        }] });

class MaPermissionDirective {
    constructor(el, renderer, permissionService) {
        this.el = el;
        this.renderer = renderer;
        this.permissionService = permissionService;
        this.requiredPermissions = [];
        this.mode = 'disable';
    }
    ngOnInit() {
        const permissions = Array.isArray(this.requiredPermissions)
            ? this.requiredPermissions
            : [this.requiredPermissions];
        const hasPermission = permissions.some(p => this.permissionService.hasPermission(p));
        if (!hasPermission) {
            if (this.mode === 'disable') {
                this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
                this.renderer.addClass(this.el.nativeElement, 'disabled');
            }
            else if (this.mode === 'hide') {
                this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaPermissionDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: MaLibService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: MaPermissionDirective, selector: "[maPermission]", inputs: { requiredPermissions: ["maPermission", "requiredPermissions"], mode: "mode" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaPermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[maPermission]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: MaLibService }]; }, propDecorators: { requiredPermissions: [{
                type: Input,
                args: ['maPermission']
            }], mode: [{
                type: Input
            }] } });

class MaLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, declarations: [MaLibComponent,
            MaPermissionDirective], exports: [MaLibComponent,
            MaPermissionDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MaLibComponent,
                        MaPermissionDirective
                    ],
                    imports: [],
                    exports: [
                        MaLibComponent,
                        MaPermissionDirective
                    ]
                }]
        }] });

/*
 * Public API Surface of ma-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MaLibComponent, MaLibModule, MaLibService, MaPermissionDirective };
//# sourceMappingURL=ma-lib.mjs.map
