import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Input, Pipe, Inject, NgModule, TemplateRef, ContentChild, EventEmitter, Output, ViewChild, forwardRef, Optional } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, debounceTime, takeUntil } from 'rxjs';
import * as i1 from 'primeng/api';
import * as i2$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i1$1 from '@angular/common/http';
import * as i2 from '@angular/platform-browser';
import * as i1$3 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import * as i3 from 'primeng/tooltip';
import { TooltipModule } from 'primeng/tooltip';
import * as i1$2 from 'primeng/card';
import { CardModule } from 'primeng/card';
import * as i2$2 from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import * as i4 from 'primeng/dialog';
import { DialogModule } from 'primeng/dialog';
import * as i9 from '@angular/cdk/drag-drop';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import * as i6 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i1$4 from '@angular/forms';
import { FormsModule, FormControlDirective, NG_VALUE_ACCESSOR, ReactiveFormsModule, FormControl } from '@angular/forms';
import * as i5 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import * as i2$3 from 'primeng/table';
import { TableModule } from 'primeng/table';
import * as i7 from 'primeng/paginator';
import { PaginatorModule } from 'primeng/paginator';
import * as i6$1 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import { SkeletonModule } from 'primeng/skeleton';
import * as i6$2 from 'primeng/overlaypanel';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import * as i4$1 from 'primeng/calendar';
import { CalendarModule } from 'primeng/calendar';
import * as i10 from 'primeng/multiselect';
import { MultiSelectModule } from 'primeng/multiselect';

class MaService {
    constructor(messageService) {
        this.messageService = messageService;
        this.loadingSubject = new BehaviorSubject(false);
        this.downloadSubject = new BehaviorSubject(null);
        this.permissions = [];
        this.merchants = [];
        this.userInfo = null;
        this.partnerId = null;
        this.partnerIdSubject = new BehaviorSubject(null);
    }
    handleError(err) {
        let error;
        if (err.message) {
            error = err.message;
        }
        if (err.statusText) {
            error = err.statusText;
        }
        if (err.error && err.error.message) {
            error = err.error.message;
        }
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error || 'An unexpected error occurred.'
        });
    }
    showNotification(message) {
        this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: message
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
    setDownload(fileName) {
        this.downloadSubject.next(fileName);
    }
    getStatusDownload() {
        return this.downloadSubject.asObservable();
    }
    filterMerchantsByType(type) {
        return this.merchants.filter((merchant) => merchant.type === type);
    }
    setMerchant(perms) {
        this.merchants = perms;
    }
    setUserInfo(perms) {
        this.userInfo = perms;
    }
    setPartnerId(perms) {
        this.partnerId = perms;
        this.partnerIdSubject.next(perms);
    }
    getPartnerId() {
        return this.partnerId;
    }
    getPartnerIdS() {
        return this.partnerIdSubject.asObservable();
    }
    getUserInfo() {
        return this.userInfo;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaService, deps: [{ token: i1.MessageService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MessageService }]; } });
function convertDateToCustomFormat(dateString, haveHours = true) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    if (haveHours) {
        return `${day}-${month}-${year} ${hours}:${minutes} ${ampm}`;
    }
    else
        return `${day}-${month}-${year}`;
}

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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaPermissionDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: MaService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: MaPermissionDirective, selector: "[maPermission]", inputs: { requiredPermissions: ["maPermission", "requiredPermissions"], mode: "mode" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaPermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[maPermission]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: MaService }]; }, propDecorators: { requiredPermissions: [{
                type: Input,
                args: ['maPermission']
            }], mode: [{
                type: Input
            }] } });

class CurrencyPipe {
    transform(value, currency = 'VND', locale = 'en-US') {
        if (value == null) {
            return '';
        }
        let formattedValue;
        if (currency === 'VND') {
            formattedValue = new Intl.NumberFormat(locale, {
                style: 'decimal',
                maximumFractionDigits: 0
            }).format(value);
        }
        else {
            formattedValue = new Intl.NumberFormat(locale, {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
            }).format(value);
        }
        return ` ${formattedValue} ${currency}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CurrencyPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CurrencyPipe, name: "customCurrency" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CurrencyPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'customCurrency'
                }]
        }] });

class SvgService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.cache = new Map();
    }
    getSvg(iconName) {
        if (this.cache.has(iconName)) {
            return this.cache.get(iconName).asObservable();
        }
        else {
            const subject = new ReplaySubject(1);
            this.cache.set(iconName, subject);
            const path = `${this.environment.assets}/svg/${iconName}.svg`;
            this.http.get(path, { responseType: 'text' }).subscribe((data) => {
                subject.next(data);
                subject.complete();
            }, (err) => {
                subject.error(err);
            });
            return subject.asObservable();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SvgService, deps: [{ token: i1$1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SvgService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SvgService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });

class ViewSvgComponent {
    constructor(svgService, sanitizer) {
        this.svgService = svgService;
        this.sanitizer = sanitizer;
    }
    getSafeContent() {
        return this.svgContent;
    }
    ngOnChanges(changes) {
        if (changes['name'] && this.name) {
            const iconName = changes['name'].currentValue;
            this.svgService.getSvg(iconName).subscribe(svgData => {
                this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgData);
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViewSvgComponent, deps: [{ token: SvgService }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ViewSvgComponent, selector: "view-svg", inputs: { name: "name" }, usesOnChanges: true, ngImport: i0, template: "<span style=\"line-height: 0 \" [innerHTML]=\"getSafeContent()\"></span>" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViewSvgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'view-svg', template: "<span style=\"line-height: 0 \" [innerHTML]=\"getSafeContent()\"></span>" }]
        }], ctorParameters: function () { return [{ type: SvgService }, { type: i2.DomSanitizer }]; }, propDecorators: { name: [{
                type: Input
            }] } });

class MaLibModule {
    static forRoot(environment) {
        return {
            ngModule: MaLibModule,
            providers: [
                {
                    provide: 'environment',
                    useValue: environment,
                },
                SvgService
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, declarations: [MaLibComponent,
            MaPermissionDirective,
            CurrencyPipe,
            ViewSvgComponent], imports: [CommonModule,
            TooltipModule,
            TranslateModule], exports: [MaLibComponent,
            MaPermissionDirective,
            TranslateModule,
            CommonModule,
            ViewSvgComponent,
            CurrencyPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, providers: [CurrencyPipe], imports: [CommonModule,
            TooltipModule,
            TranslateModule, TranslateModule,
            CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MaLibComponent,
                        MaPermissionDirective,
                        CurrencyPipe,
                        ViewSvgComponent
                    ],
                    imports: [
                        CommonModule,
                        TooltipModule,
                        TranslateModule,
                    ],
                    exports: [
                        MaLibComponent,
                        MaPermissionDirective,
                        TranslateModule,
                        CommonModule,
                        ViewSvgComponent,
                        CurrencyPipe
                    ],
                    providers: [CurrencyPipe],
                }]
        }] });

class CardComponent {
    constructor() { }
    ngOnInit() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardComponent, isStandalone: true, selector: "app-card", inputs: { header: "header", data: "data", cols: "cols" }, queries: [{ propertyName: "templateCell", first: true, predicate: TemplateRef, descendants: true }], ngImport: i0, template: "<p-card class='dynamic-card' [header]=\"header | translate\"\n  [style]=\"{width: '100%', maxWidth: '100%', overflow: 'hidden'}\">\n  <div class=\"grid pt-4\">\n    <ng-container *ngFor=\"let col of cols\">\n      <ng-container *ngIf=\"!col.hidden\">\n        <div class=\"col-6 xl:col-6 label\"> {{ col.header | translate }}\n        </div>\n        <div class=\"col-6 xl:col-6\">\n          <ng-container *ngIf=\"data\">\n            <ng-container *ngIf=\"!col.type || col.type == 'text'\">\n              <span tooltipStyleClass=\"customtooltip\" [pTooltip]=\" data[col.field]  \" tooltipPosition=\"bottom\"\n                class=\"value\"> {{ data[col.field] | translate }}</span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'date'\">\n              <span class=\"value\"> {{ data[col.field] | date: (col.format || 'dd/MM/YYYY hh:mm a')}}</span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'number'\">\n              <span class=\"value\"> {{ data[col.field] | number: (col.format || '1.0-0')}}</span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'currency'\">\n              <span class=\"value\"> {{ data[col.field] | customCurrency: (data[col.format]) }}</span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'template'\">\n              <ng-container *ngTemplateOutlet=\"templateCell; context: { $implicit: data, col: col }\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</p-card>", styles: [".flex-card{justify-content:space-between}::ng-deep .dynamic-card{width:100%;max-width:100%;box-sizing:border-box}::ng-deep .dynamic-card .p-card .p-card-title{font-size:16px;font-weight:600}::ng-deep .dynamic-card .p-card .p-card-body{padding:20px 24px}::ng-deep .dynamic-card .col-6{padding:8px 16px}::ng-deep .dynamic-card .p-card .p-card-content{padding:0}.value{overflow:hidden;color:#404040;font-size:14px;font-weight:500;line-height:20px;width:-moz-fit-content;width:fit-content;max-width:100%;white-space:nowrap;text-overflow:ellipsis;display:block}.label{color:#6c6c6c;font-size:14px;font-style:normal;font-weight:400;line-height:20px}::ng-deep .customtooltip .p-tooltip-text{background-color:#fff;color:#404040;width:max-content}::ng-deep .customtooltip .p-tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;border-width:0 6px 6px 6px;border-color:transparent transparent #fff transparent;top:-2px;left:30%;transform:translate(-50%);z-index:1}\n"], dependencies: [{ kind: "ngmodule", type: CardModule }, { kind: "component", type: i1$2.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i2$1.DecimalPipe, name: "number" }, { kind: "pipe", type: i2$1.DatePipe, name: "date" }, { kind: "ngmodule", type: TooltipModule }, { kind: "directive", type: i3.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "ngmodule", type: MaLibModule }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "pipe", type: CurrencyPipe, name: "customCurrency" }, { kind: "ngmodule", type: TranslateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-card', standalone: true, imports: [CardModule, CommonModule, TooltipModule, MaLibModule, TranslateModule], template: "<p-card class='dynamic-card' [header]=\"header | translate\"\n  [style]=\"{width: '100%', maxWidth: '100%', overflow: 'hidden'}\">\n  <div class=\"grid pt-4\">\n    <ng-container *ngFor=\"let col of cols\">\n      <ng-container *ngIf=\"!col.hidden\">\n        <div class=\"col-6 xl:col-6 label\"> {{ col.header | translate }}\n        </div>\n        <div class=\"col-6 xl:col-6\">\n          <ng-container *ngIf=\"data\">\n            <ng-container *ngIf=\"!col.type || col.type == 'text'\">\n              <span tooltipStyleClass=\"customtooltip\" [pTooltip]=\" data[col.field]  \" tooltipPosition=\"bottom\"\n                class=\"value\"> {{ data[col.field] | translate }}</span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'date'\">\n              <span class=\"value\"> {{ data[col.field] | date: (col.format || 'dd/MM/YYYY hh:mm a')}}</span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'number'\">\n              <span class=\"value\"> {{ data[col.field] | number: (col.format || '1.0-0')}}</span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'currency'\">\n              <span class=\"value\"> {{ data[col.field] | customCurrency: (data[col.format]) }}</span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'template'\">\n              <ng-container *ngTemplateOutlet=\"templateCell; context: { $implicit: data, col: col }\"></ng-container>\n            </ng-container>\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</p-card>", styles: [".flex-card{justify-content:space-between}::ng-deep .dynamic-card{width:100%;max-width:100%;box-sizing:border-box}::ng-deep .dynamic-card .p-card .p-card-title{font-size:16px;font-weight:600}::ng-deep .dynamic-card .p-card .p-card-body{padding:20px 24px}::ng-deep .dynamic-card .col-6{padding:8px 16px}::ng-deep .dynamic-card .p-card .p-card-content{padding:0}.value{overflow:hidden;color:#404040;font-size:14px;font-weight:500;line-height:20px;width:-moz-fit-content;width:fit-content;max-width:100%;white-space:nowrap;text-overflow:ellipsis;display:block}.label{color:#6c6c6c;font-size:14px;font-style:normal;font-weight:400;line-height:20px}::ng-deep .customtooltip .p-tooltip-text{background-color:#fff;color:#404040;width:max-content}::ng-deep .customtooltip .p-tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;border-width:0 6px 6px 6px;border-color:transparent transparent #fff transparent;top:-2px;left:30%;transform:translate(-50%);z-index:1}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { header: [{
                type: Input
            }], data: [{
                type: Input
            }], cols: [{
                type: Input
            }], templateCell: [{
                type: ContentChild,
                args: [TemplateRef, { static: false }]
            }] } });

class ConfigDisplayComponent {
    constructor(translate) {
        this.translate = translate;
        this.visible = false;
        this.colsConfig = [];
        this.selectAll = false;
        this.filterText = '';
        this.onChangeConfig = new EventEmitter();
    }
    ngOnInit() {
        let haveNoChecked = false;
        this.colsConfig = this.cols.map((col) => {
            if (col.hidden) {
                haveNoChecked = true;
            }
            return {
                ...col,
                checked: !col.hidden,
            };
        });
        if (haveNoChecked) {
            this.selectAll = false;
        }
        else {
            this.selectAll = true;
        }
    }
    get filteredColsConfig() {
        return this.colsConfig.filter((col) => col.header.toLowerCase().includes(this.filterText.toLowerCase()));
    }
    showDialog() {
        this.visible = true;
    }
    changeAll() {
        this.colsConfig.forEach((col) => {
            if (!col.fixed) {
                col.checked = this.selectAll;
            }
        });
        this.checkChangeAll();
    }
    checkChangeAll() {
        setTimeout(() => {
            const s1 = this.colsConfig.filter(col => col.checked).length;
            if (s1 === this.colsConfig.length) {
                this.selectAll = true;
            }
            else {
                this.selectAll = false;
            }
        }, 100);
    }
    drop(event) {
        this.checkChangeAll();
        if (this.colsConfig[event.currentIndex].fixed) {
            return;
        }
        moveItemInArray(this.colsConfig, event.previousIndex, event.currentIndex);
    }
    cancel() {
        this.visible = false;
    }
    apply() {
        this.visible = false;
        this.cols = this.colsConfig.map((col) => {
            return {
                ...col,
                hidden: !col.checked,
            };
        });
        this.onChangeConfig.emit(this.cols);
    }
    formatFilter() {
        const s1 = this.colsConfig.filter(col => col.checked).length;
        return s1.toString().padStart(2, '0') + '/' + this.colsConfig.length.toString().padStart(2, '0') + ' ' + this.translate.instant('selected');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigDisplayComponent, deps: [{ token: i1$3.TranslateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ConfigDisplayComponent, isStandalone: true, selector: "app-config-display", inputs: { cols: "cols" }, outputs: { onChangeConfig: "onChangeConfig" }, ngImport: i0, template: "<button pButton (click)=\"showDialog()\" type=\"button\" class=\"p-button-rounded p-button-secondary\">\n  <view-svg name=\"rowHorizontal\"></view-svg>\n</button>\n<p-dialog header=\"Config\" appendTo=\"body\" [modal]=\"true\" [draggable]=\"false\" [resizable]=\"false\" [(visible)]=\"visible\"\n  [style]=\"{ width: '35rem', height: 'auto' }\">\n  <div class=\"filter-input-container\">\n    <div class=\"input-with-icon\">\n      <i class=\"pi pi-search\"></i>\n      <input type=\"text\" pInputText [(ngModel)]=\"filterText\" placeholder=\"Filter columns...\" />\n    </div>\n  </div>\n  <div class=\"config-box\">\n    <span>\n      <p-checkbox [(ngModel)]=\"selectAll\" (ngModelChange)=\"changeAll()\" [binary]=\"true\" />\n      {{'selectAll' | translate}}\n    </span>\n    <span> {{formatFilter()}}</span>\n  </div>\n  <div cdkDropList class=\"config-list\" (cdkDropListDropped)=\"drop($event)\">\n\n    <ng-container *ngFor=\"let col of filteredColsConfig\">\n      <div class=\"config-box\" [cdkDragDisabled]=\"col.fixed\" cdkDrag>\n        <span>\n          <p-checkbox (ngModelChange)=\"checkChangeAll()\" [(ngModel)]=\"col.checked\" [disabled]=\"col.fixed\"\n            [binary]=\"true\" />\n          {{col.header | translate}}\n        </span>\n        <view-svg name=\"move\"></view-svg>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"config-actions\">\n    <button pButton type=\"button\" label=\"Cancel\" class=\"p-button-secondary\" (click)=\"cancel()\"></button>\n    <button pButton type=\"button\" label=\"Apply\" class=\"p-button-primary\" (click)=\"apply()\"></button>\n  </div>\n</p-dialog>", styles: [".config-list{width:500px;max-width:100%;min-height:60px;max-height:550px;display:block;background:#fff;overflow:hidden;overflow-y:auto}.config-box{padding:10px 16px;border:solid 1px #DCDCDC;border-radius:4px;margin:4px 0;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.config-box span{display:flex;flex-direction:row;align-items:center;gap:10px}.cdk-drag-preview{border:none;display:none;box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:1}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.config-list.cdk-drop-list-dragging .config-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.config-actions{display:flex;justify-content:flex-end;gap:1rem;padding-top:16px;align-items:center}.config-actions button{min-width:80px}::ng-deep .p-dialog:has(.config-list){top:50px;position:absolute}.filter-input-container{padding-top:8px;padding-bottom:16px}.filter-input-container .input-with-icon{position:relative;display:flex;align-items:center}.filter-input-container .input-with-icon i{position:absolute;left:20px;font-size:16px;color:#6c6c6c}.filter-input-container .input-with-icon input{width:100%;padding-left:3.4rem;font-size:14px}\n"], dependencies: [{ kind: "ngmodule", type: ButtonModule }, { kind: "directive", type: i2$2.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DialogModule }, { kind: "component", type: i4.Dialog, selector: "p-dialog", inputs: ["header", "draggable", "resizable", "positionLeft", "positionTop", "contentStyle", "contentStyleClass", "modal", "closeOnEscape", "dismissableMask", "rtl", "closable", "responsive", "appendTo", "breakpoints", "styleClass", "maskStyleClass", "showHeader", "breakpoint", "blockScroll", "autoZIndex", "baseZIndex", "minX", "minY", "focusOnShow", "maximizable", "keepInViewport", "focusTrap", "transitionOptions", "closeIcon", "closeAriaLabel", "closeTabindex", "minimizeIcon", "maximizeIcon", "visible", "style", "position"], outputs: ["onShow", "onHide", "visibleChange", "onResizeInit", "onResizeEnd", "onDragEnd", "onMaximize"] }, { kind: "ngmodule", type: InputTextModule }, { kind: "directive", type: i5.InputText, selector: "[pInputText]" }, { kind: "ngmodule", type: CheckboxModule }, { kind: "component", type: i6.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { kind: "ngmodule", type: MaLibModule }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: ViewSvgComponent, selector: "view-svg", inputs: ["name"] }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: DragDropModule }, { kind: "directive", type: i9.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i9.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ConfigDisplayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-config-display', standalone: true, imports: [ButtonModule, FormsModule, DialogModule, InputTextModule, CheckboxModule, MaLibModule, DragDropModule], template: "<button pButton (click)=\"showDialog()\" type=\"button\" class=\"p-button-rounded p-button-secondary\">\n  <view-svg name=\"rowHorizontal\"></view-svg>\n</button>\n<p-dialog header=\"Config\" appendTo=\"body\" [modal]=\"true\" [draggable]=\"false\" [resizable]=\"false\" [(visible)]=\"visible\"\n  [style]=\"{ width: '35rem', height: 'auto' }\">\n  <div class=\"filter-input-container\">\n    <div class=\"input-with-icon\">\n      <i class=\"pi pi-search\"></i>\n      <input type=\"text\" pInputText [(ngModel)]=\"filterText\" placeholder=\"Filter columns...\" />\n    </div>\n  </div>\n  <div class=\"config-box\">\n    <span>\n      <p-checkbox [(ngModel)]=\"selectAll\" (ngModelChange)=\"changeAll()\" [binary]=\"true\" />\n      {{'selectAll' | translate}}\n    </span>\n    <span> {{formatFilter()}}</span>\n  </div>\n  <div cdkDropList class=\"config-list\" (cdkDropListDropped)=\"drop($event)\">\n\n    <ng-container *ngFor=\"let col of filteredColsConfig\">\n      <div class=\"config-box\" [cdkDragDisabled]=\"col.fixed\" cdkDrag>\n        <span>\n          <p-checkbox (ngModelChange)=\"checkChangeAll()\" [(ngModel)]=\"col.checked\" [disabled]=\"col.fixed\"\n            [binary]=\"true\" />\n          {{col.header | translate}}\n        </span>\n        <view-svg name=\"move\"></view-svg>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"config-actions\">\n    <button pButton type=\"button\" label=\"Cancel\" class=\"p-button-secondary\" (click)=\"cancel()\"></button>\n    <button pButton type=\"button\" label=\"Apply\" class=\"p-button-primary\" (click)=\"apply()\"></button>\n  </div>\n</p-dialog>", styles: [".config-list{width:500px;max-width:100%;min-height:60px;max-height:550px;display:block;background:#fff;overflow:hidden;overflow-y:auto}.config-box{padding:10px 16px;border:solid 1px #DCDCDC;border-radius:4px;margin:4px 0;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.config-box span{display:flex;flex-direction:row;align-items:center;gap:10px}.cdk-drag-preview{border:none;display:none;box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:1}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.config-list.cdk-drop-list-dragging .config-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.config-actions{display:flex;justify-content:flex-end;gap:1rem;padding-top:16px;align-items:center}.config-actions button{min-width:80px}::ng-deep .p-dialog:has(.config-list){top:50px;position:absolute}.filter-input-container{padding-top:8px;padding-bottom:16px}.filter-input-container .input-with-icon{position:relative;display:flex;align-items:center}.filter-input-container .input-with-icon i{position:absolute;left:20px;font-size:16px;color:#6c6c6c}.filter-input-container .input-with-icon input{width:100%;padding-left:3.4rem;font-size:14px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$3.TranslateService }]; }, propDecorators: { cols: [{
                type: Input
            }], onChangeConfig: [{
                type: Output
            }] } });

class TableComponent {
    constructor(maService, cdr) {
        this.maService = maService;
        this.cdr = cdr;
        this.havePaginator = true;
        this.autoSearchAfterViewInit = true;
        this.selectionMode = 'single'; // null if checkbox
        this.scrollHeight = 'calc(100vh - 382px)';
        this.placeFooter = 'bottom';
        this.onRowSelected = new EventEmitter();
        this.offset = 0;
        this.limit = 20;
        this.currentPage = 0;
        this.totalRecords = 0;
        this.optionPaginators = [
            { label: '20', value: 20 },
            { label: '50', value: 50 },
            { label: '100', value: 100 },
            { label: '200', value: 200 }
        ];
        this.searchTrigger$ = new Subject();
        this.destroy$ = new Subject();
        this.isTriggeringSearch = false;
        this.isLoading = false;
        this.totalWidth = 0;
    }
    ngOnInit() {
        this.calculateColumnWidths();
        this.searchTrigger$.pipe(debounceTime(300), takeUntil(this.destroy$)).subscribe(() => {
            this.executeSearch();
        });
        if (this.autoSearchAfterViewInit) {
            this.triggerSearch();
        }
    }
    ngOnChanges(changes) {
        if (changes['cols']) {
            this.calculateColumnWidths();
        }
        if (changes['inputSearch'] && !changes['inputSearch'].firstChange) {
            this.offset = 0;
            this.triggerSearch();
        }
    }
    onPageChange(event) {
        if (event.rows !== this.limit) {
            this.limit = event.rows;
            this.currentPage = 0;
            this.offset = 0;
        }
        else {
            this.currentPage = event.page;
            this.offset = event.first;
        }
        this.triggerSearch();
    }
    onRowsChange() {
        this.offset = 0;
        this.triggerSearch();
    }
    triggerSearch() {
        if (this.isTriggeringSearch) {
            return;
        }
        this.isTriggeringSearch = true;
        this.searchTrigger$.next();
        setTimeout(() => {
            this.isTriggeringSearch = false;
        }, 200);
    }
    executeSearch() {
        if (this.isLoading) {
            return;
        }
        if (!this.autoSearchAfterViewInit && (!this.inputSearch || Object.keys(this.inputSearch).length === 0)) {
            return;
        }
        let inputSearch;
        if (this.inputSearch) {
            inputSearch = JSON.parse(JSON.stringify(this.inputSearch));
        }
        else {
            inputSearch = {};
        }
        const searchParams = { ...inputSearch, offset: this.offset, page: this.currentPage, size: this.limit };
        if (this.getList$) {
            this.datas = [];
            this.totalRecords = 0;
            const tableWrapper = document.querySelector('.p-datatable-wrapper');
            if (tableWrapper) {
                tableWrapper.scrollTo({ top: 0 });
            }
            this.isLoading = true;
            this.getList$(searchParams).subscribe({
                next: (result) => {
                    this.isLoading = false;
                    this.datas = result.items;
                    this.totalRecords = result.total;
                },
                error: (err) => {
                    this.isLoading = false;
                }
            });
        }
    }
    onRowSelect(event) {
        this.onRowSelected.emit(this.selectedRow);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    calculateColumnWidths() {
        let totalWidth = 0;
        this.cols.forEach(col => {
            if (!col.hidden) {
                if (!col.width) {
                    col.width = '100px';
                }
                if (col.type === 'index' || col.type === 'checkbox') {
                    col.width = '60px';
                }
                const widthValue = parseInt(col.width.replace('px', ''), 10);
                totalWidth += widthValue;
            }
        });
        this.totalWidth = totalWidth;
        this.cols.forEach(col => {
            if (!col.hidden) {
                const widthValue = parseInt(col.width.replace('px', ''), 10);
                col.percentWidth = ((widthValue / totalWidth) * 100).toFixed(2) + '%';
            }
        });
    }
    checkWithSelectAll(event) {
        if (event.checked) {
            this.cdr.detectChanges();
            let col = this.cols.find(col => col.type === 'checkbox');
            this.selectedRow = this.selectedRow.filter((data) => {
                return ((!col?.format || (col.format in data && data[col.format] === true)));
            });
            this.onRowSelected.emit(this.selectedRow);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableComponent, deps: [{ token: MaService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableComponent, isStandalone: true, selector: "app-table", inputs: { datas: "datas", havePaginator: "havePaginator", cols: "cols", autoSearchAfterViewInit: "autoSearchAfterViewInit", selectionMode: "selectionMode", inputSearch: "inputSearch", scrollHeight: "scrollHeight", getList$: "getList$", placeFooter: "placeFooter" }, outputs: { onRowSelected: "onRowSelected" }, queries: [{ propertyName: "templateCellTemplate", first: true, predicate: ["templateCell"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"flex flex align-items-center justify-content-between\" *ngIf=\"havePaginator\">\n  <div class=\"flex gap-2 align-items-center\">\n    <span style=\"font-size: 12px; line-height: 16px;\"> {{'showingRecords' | translate: { first: totalRecords? (offset+1\n      | number):\n      0, last: (((offset + limit) < totalRecords ? (offset + limit) : totalRecords )| number), total : (totalRecords |\n        number) } }} </span>\n        <p-dropdown [options]=\"optionPaginators\" class=\"custom-select-paginator\" optionLabel=\"label\" optionValue=\"value\"\n          [(ngModel)]=\"limit\" (ngModelChange)=\"onRowsChange()\" />\n  </div>\n  <p-paginator [first]=\"offset\" class=\"custom-paginator\" [rows]=\"limit\" [totalRecords]=\"totalRecords\"\n    (onPageChange)=\"onPageChange($event)\" [showCurrentPageReport]=\"false\" currentPageReportTemplate=\"\"></p-paginator>\n</div>\n<p-table (onHeaderCheckboxToggle)=\"checkWithSelectAll($event)\" [selectionMode]=\"selectionMode\" class=\"dynamic-table\" [(selection)]=\"selectedRow\" [scrollable]=\"true\"\n  [scrollHeight]=\"scrollHeight\" [autoLayout]=\"false\" (selectionChange)=\"onRowSelect($event)\" [columns]=\"cols\"\n  [value]=\"datas\" [loading]=\"isLoading\">\n  <ng-template pTemplate=\"colgroup\" let-columns>\n    <colgroup>\n      <ng-container *ngFor=\"let col of columns\">\n        <col *ngIf=\"!col.hidden && !(col.type=='index' || col.type == 'checkbox')\"\n          [style.width]=\"col.percentWidth\" />\n        <col *ngIf=\" col.type=='index' || col.type == 'checkbox'\" [style.width]=\"'60px'\" />\n      </ng-container>\n    </colgroup>\n  </ng-template>\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr class=\"table-header\">\n      <ng-container *ngFor=\"let col of columns\">\n        <th [style]=\"{'width': col.percentWidth,'min-width': col.width??'100px'}\"\n          *ngIf=\"!col.hidden && col.type !=='checkbox'\">\n          <span class=\"one-line\" tooltipStyleClass=\"customtooltip\" [pTooltip]=\" (col.header | translate) || ''\"\n            [class.float-right]=\"col.type === 'number' || col.type==='currency'\" tooltipPosition=\"bottom\">\n            {{ col.header | translate}}</span>\n        </th>\n        <th *ngIf=\"!col.hidden && col.type === 'checkbox'\">\n          <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n        </th>\n      </ng-container>\n    </tr>\n    <ng-content *ngIf=\"placeFooter =='top'\" select=\"[footer]\"></ng-content>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-data let-i='rowIndex' let-columns=\"columns\">\n    <tr class=\"table-body\" [pSelectableRow]=\"data\">\n      <ng-container *ngFor=\"let col of columns\">\n        <td [style]=\"{'width': col.percentWidth,'min-width': col.width??'100px'}\" *ngIf=\"!col.hidden\">\n          <ng-container *ngIf=\"col.type == 'template'&& templateCellTemplate; else defaultCell\">\n            <ng-container\n              *ngTemplateOutlet=\"templateCellTemplate; context: { $implicit: data, column: col }\"></ng-container>\n          </ng-container>\n          <ng-template #defaultCell>\n            <ng-container *ngIf=\"col.type  == 'checkbox'  && (!col.format || data[col.format]=== true)\">\n              <p-tableCheckbox [value]=\"data\"></p-tableCheckbox>\n            </ng-container>\n\n            <ng-container *ngIf=\"col.type == 'index'\">\n              <span class=\"one-line\">\n                {{ offset + i + 1 }}\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!col.type \">\n              <span class=\"one-line\" tooltipStyleClass=\"customtooltip\" [pTooltip]=\"data[col.field] || ''\"\n                tooltipPosition=\"bottom\">\n                {{ data[col.field] | translate }}\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'date'\">\n              <span class=\"one-line\" tooltipStyleClass=\"customtooltip\"\n                [pTooltip]=\"(data[col.field] | date: (col.format || 'dd/MM/YYYY') ) || ''\" tooltipPosition=\"bottom\">\n                {{ data[col.field] | date: (col.format || 'dd/MM/YYYY') }}\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'currency'\">\n              <span class=\"one-line float-right\" tooltipStyleClass=\"customtooltip\"\n                [pTooltip]=\"(data[col.field] | customCurrency: (data[col.format]) ) || ''\" tooltipPosition=\"bottom\">\n                {{ data[col.field] | customCurrency: (data[col.format]) }}\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'number'\">\n              <span class=\"one-line float-right\" tooltipStyleClass=\"customtooltip\"\n                [pTooltip]=\"(data[col.field] | number: (col.format || '1.0-0')) || ''\" tooltipPosition=\"bottom\">\n                {{ data[col.field] | number: (col.format || '1.0-0') }}\n              </span>\n            </ng-container>\n          </ng-template>\n        </td>\n      </ng-container>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"loadingbody\" let-columns=\"columns\">\n    <div class=\"v-table-overlay\" *ngIf=\"isLoading\">\n      <div class=\"v-table-spinner v-table-loader\"></div>\n      <div class=\"v-table-text\">Please wait...</div>\n    </div>\n    <div *ngIf=\"isLoading\" [style]=\"{height: 'calc(-65px + '+scrollHeight +')'}\"></div>\n  </ng-template>\n  <ng-template *ngIf=\"placeFooter =='bottom'\" pTemplate=\"footer\">\n    <ng-content select=\"[footer]\"></ng-content>\n  </ng-template>\n  <ng-template pTemplate='emptymessage' let-columns>\n    <tr>\n      <td [style]=\"{height: 'calc(-65px + '+scrollHeight +')'}\" [attr.colspan]='1000'>\n        <ng-container [ngTemplateOutlet]=\"notDataTpl\"></ng-container>\n      </td>\n    </tr>\n  </ng-template>\n</p-table>\n<ng-template #notDataTpl>\n  <div class=\"no-data-container\">\n    <img src=\"assets/images/no-data.png\" alt=\"No Data\" class=\"no-data-image\" />\n    <p class=\"no-data-message\">No results found</p>\n    <p class=\"no-data-submessage\">Sorry, we couldn't find any results for your search</p>\n  </div>\n</ng-template>\n<!-- <app-config-display [cols]=\"cols\"></app-config-display> -->", styles: [".custom-select-paginator ::ng-deep .p-dropdown-label{padding:3px 0 3px 6px;font-size:12px;line-height:16px}.custom-select-paginator ::ng-deep .p-dropdown-trigger{width:1.5rem;padding:0 14px}::ng-deep .custom-paginator button{width:24px!important;min-width:24px!important;height:24px;border-radius:4px;font-size:12px;line-height:16px}::ng-deep .custom-paginator .p-paginator-element{margin:0 4px;border:1px solid #E6E6E6}::ng-deep .custom-paginator .p-paginator-page{margin:0 2px;border:unset}::ng-deep .custom-paginator .p-paginator-page:hover{background:#f5f5f5}::ng-deep .custom-paginator .p-highlight{background:#2e6be5!important;color:#fff!important}::ng-deep .dynamic-table .p-datatable-wrapper{border:1px solid #E6E6E6}::ng-deep .dynamic-table .p-datatable-wrapper tr:has(.no-data-container){background:unset!important;color:unset!important}.no-data-container{text-align:center;padding:20px;color:#6c757d;max-width:78vw}.no-data-image{max-width:150px;margin-bottom:10px}.no-data-message{font-size:18px;font-weight:700}.no-data-submessage{font-size:14px}.float-right{float:right;text-align:right}.one-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;max-width:100%;width:-moz-fit-content;width:fit-content}::ng-deep .p-datatable-scrollable table{table-layout:fixed!important;width:100%!important}::ng-deep .dynamic-table .customtooltip .p-tooltip-text{background-color:#fff;color:#404040;width:max-content}::ng-deep .dynamic-table .customtooltip .p-tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;border-width:0 6px 6px 6px;border-color:transparent transparent #fff transparent;top:-2px;left:30%;transform:translate(-50%);z-index:1}::ng-deep .dynamic-table .p-datatable-loading-overlay{background-color:#f0f0f080!important}::ng-deep .dynamic-table .p-datatable-loading-overlay .p-icon-wrapper{display:none!important}.table-header{height:28px;background:#f5f5f5}.table-header th{padding:6px 16px;font-size:12px;font-weight:500;color:#404040}.table-body td{padding:12px 16px;font-size:12px;font-weight:400;line-height:16px;color:#404040}.v-table-overlay{z-index:100;display:flex;gap:1rem;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:absolute;left:45%;top:40%}.v-table-loader{animation:rotate 1.5s infinite;height:50px;width:50px}.v-table-loader:before,.v-table-loader:after{border-radius:50%;content:\"\";display:block;height:20px;width:20px}.v-table-loader:before{animation:ball1 1s infinite;background-color:#1d559f;box-shadow:30px 0 #00b6eb;margin-bottom:10px}.v-table-loader:after{animation:ball2 1s infinite;background-color:#00b6eb;box-shadow:30px 0 #1d559f}@keyframes rotate{0%{transform:rotate(0) scale(.8)}50%{transform:rotate(360deg) scale(1.2)}to{transform:rotate(720deg) scale(.8)}}@keyframes ball1{0%{box-shadow:30px 0 #00b6eb}50%{box-shadow:0 0 #00b6eb;margin-bottom:0;transform:translate(15px,15px)}to{box-shadow:30px 0 #00b6eb;margin-bottom:10px}}@keyframes ball2{0%{box-shadow:30px 0 #1d559f}50%{box-shadow:0 0 #1d559f;margin-top:-20px;transform:translate(15px,15px)}to{box-shadow:30px 0 #1d559f;margin-top:0}}\n"], dependencies: [{ kind: "ngmodule", type: TableModule }, { kind: "component", type: i2$3.Table, selector: "p-table", inputs: ["frozenColumns", "frozenValue", "style", "styleClass", "tableStyle", "tableStyleClass", "paginator", "pageLinks", "rowsPerPageOptions", "alwaysShowPaginator", "paginatorPosition", "paginatorDropdownAppendTo", "paginatorDropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showFirstLastIcon", "showPageLinks", "defaultSortOrder", "sortMode", "resetPageOnSort", "selectionMode", "selectionPageOnly", "contextMenuSelection", "contextMenuSelectionMode", "dataKey", "metaKeySelection", "rowSelectable", "rowTrackBy", "lazy", "lazyLoadOnInit", "compareSelectionBy", "csvSeparator", "exportFilename", "filters", "globalFilterFields", "filterDelay", "filterLocale", "expandedRowKeys", "editingRowKeys", "rowExpandMode", "scrollable", "scrollDirection", "rowGroupMode", "scrollHeight", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "virtualScrollDelay", "frozenWidth", "responsive", "contextMenu", "resizableColumns", "columnResizeMode", "reorderableColumns", "loading", "loadingIcon", "showLoader", "rowHover", "customSort", "showInitialSortBadge", "autoLayout", "exportFunction", "exportHeader", "stateKey", "stateStorage", "editMode", "groupRowsBy", "groupRowsByOrder", "responsiveLayout", "breakpoint", "value", "columns", "first", "rows", "totalRecords", "sortField", "sortOrder", "multiSortMeta", "selection", "selectAll", "virtualRowHeight"], outputs: ["contextMenuSelectionChange", "selectAllChange", "selectionChange", "onRowSelect", "onRowUnselect", "onPage", "onSort", "onFilter", "onLazyLoad", "onRowExpand", "onRowCollapse", "onContextMenuSelect", "onColResize", "onColReorder", "onRowReorder", "onEditInit", "onEditComplete", "onEditCancel", "onHeaderCheckboxToggle", "sortFunction", "firstChange", "rowsChange", "onStateSave", "onStateRestore"] }, { kind: "directive", type: i1.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "directive", type: i2$3.SelectableRow, selector: "[pSelectableRow]", inputs: ["pSelectableRow", "pSelectableRowIndex", "pSelectableRowDisabled"] }, { kind: "component", type: i2$3.TableCheckbox, selector: "p-tableCheckbox", inputs: ["disabled", "value", "index", "inputId", "name", "required", "ariaLabel"] }, { kind: "component", type: i2$3.TableHeaderCheckbox, selector: "p-tableHeaderCheckbox", inputs: ["disabled", "inputId", "name", "ariaLabel"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: TooltipModule }, { kind: "directive", type: i3.Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "appendTo", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions"] }, { kind: "ngmodule", type: SkeletonModule }, { kind: "ngmodule", type: DropdownModule }, { kind: "component", type: i6$1.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "overlayDirection", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "ngmodule", type: ButtonModule }, { kind: "ngmodule", type: PaginatorModule }, { kind: "component", type: i7.Paginator, selector: "p-paginator", inputs: ["pageLinkSize", "style", "styleClass", "alwaysShow", "dropdownAppendTo", "templateLeft", "templateRight", "appendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showCurrentPageReport", "showFirstLastIcon", "totalRecords", "rows", "rowsPerPageOptions", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "dropdownItemTemplate", "first"], outputs: ["onPageChange"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i2$1.DecimalPipe, name: "number" }, { kind: "pipe", type: i2$1.DatePipe, name: "date" }, { kind: "ngmodule", type: MaLibModule }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "pipe", type: CurrencyPipe, name: "customCurrency" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-table', standalone: true, imports: [TableModule, FormsModule, TooltipModule, SkeletonModule, DropdownModule, ButtonModule, PaginatorModule, CommonModule, MaLibModule], template: "<div class=\"flex flex align-items-center justify-content-between\" *ngIf=\"havePaginator\">\n  <div class=\"flex gap-2 align-items-center\">\n    <span style=\"font-size: 12px; line-height: 16px;\"> {{'showingRecords' | translate: { first: totalRecords? (offset+1\n      | number):\n      0, last: (((offset + limit) < totalRecords ? (offset + limit) : totalRecords )| number), total : (totalRecords |\n        number) } }} </span>\n        <p-dropdown [options]=\"optionPaginators\" class=\"custom-select-paginator\" optionLabel=\"label\" optionValue=\"value\"\n          [(ngModel)]=\"limit\" (ngModelChange)=\"onRowsChange()\" />\n  </div>\n  <p-paginator [first]=\"offset\" class=\"custom-paginator\" [rows]=\"limit\" [totalRecords]=\"totalRecords\"\n    (onPageChange)=\"onPageChange($event)\" [showCurrentPageReport]=\"false\" currentPageReportTemplate=\"\"></p-paginator>\n</div>\n<p-table (onHeaderCheckboxToggle)=\"checkWithSelectAll($event)\" [selectionMode]=\"selectionMode\" class=\"dynamic-table\" [(selection)]=\"selectedRow\" [scrollable]=\"true\"\n  [scrollHeight]=\"scrollHeight\" [autoLayout]=\"false\" (selectionChange)=\"onRowSelect($event)\" [columns]=\"cols\"\n  [value]=\"datas\" [loading]=\"isLoading\">\n  <ng-template pTemplate=\"colgroup\" let-columns>\n    <colgroup>\n      <ng-container *ngFor=\"let col of columns\">\n        <col *ngIf=\"!col.hidden && !(col.type=='index' || col.type == 'checkbox')\"\n          [style.width]=\"col.percentWidth\" />\n        <col *ngIf=\" col.type=='index' || col.type == 'checkbox'\" [style.width]=\"'60px'\" />\n      </ng-container>\n    </colgroup>\n  </ng-template>\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr class=\"table-header\">\n      <ng-container *ngFor=\"let col of columns\">\n        <th [style]=\"{'width': col.percentWidth,'min-width': col.width??'100px'}\"\n          *ngIf=\"!col.hidden && col.type !=='checkbox'\">\n          <span class=\"one-line\" tooltipStyleClass=\"customtooltip\" [pTooltip]=\" (col.header | translate) || ''\"\n            [class.float-right]=\"col.type === 'number' || col.type==='currency'\" tooltipPosition=\"bottom\">\n            {{ col.header | translate}}</span>\n        </th>\n        <th *ngIf=\"!col.hidden && col.type === 'checkbox'\">\n          <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n        </th>\n      </ng-container>\n    </tr>\n    <ng-content *ngIf=\"placeFooter =='top'\" select=\"[footer]\"></ng-content>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-data let-i='rowIndex' let-columns=\"columns\">\n    <tr class=\"table-body\" [pSelectableRow]=\"data\">\n      <ng-container *ngFor=\"let col of columns\">\n        <td [style]=\"{'width': col.percentWidth,'min-width': col.width??'100px'}\" *ngIf=\"!col.hidden\">\n          <ng-container *ngIf=\"col.type == 'template'&& templateCellTemplate; else defaultCell\">\n            <ng-container\n              *ngTemplateOutlet=\"templateCellTemplate; context: { $implicit: data, column: col }\"></ng-container>\n          </ng-container>\n          <ng-template #defaultCell>\n            <ng-container *ngIf=\"col.type  == 'checkbox'  && (!col.format || data[col.format]=== true)\">\n              <p-tableCheckbox [value]=\"data\"></p-tableCheckbox>\n            </ng-container>\n\n            <ng-container *ngIf=\"col.type == 'index'\">\n              <span class=\"one-line\">\n                {{ offset + i + 1 }}\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"!col.type \">\n              <span class=\"one-line\" tooltipStyleClass=\"customtooltip\" [pTooltip]=\"data[col.field] || ''\"\n                tooltipPosition=\"bottom\">\n                {{ data[col.field] | translate }}\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'date'\">\n              <span class=\"one-line\" tooltipStyleClass=\"customtooltip\"\n                [pTooltip]=\"(data[col.field] | date: (col.format || 'dd/MM/YYYY') ) || ''\" tooltipPosition=\"bottom\">\n                {{ data[col.field] | date: (col.format || 'dd/MM/YYYY') }}\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'currency'\">\n              <span class=\"one-line float-right\" tooltipStyleClass=\"customtooltip\"\n                [pTooltip]=\"(data[col.field] | customCurrency: (data[col.format]) ) || ''\" tooltipPosition=\"bottom\">\n                {{ data[col.field] | customCurrency: (data[col.format]) }}\n              </span>\n            </ng-container>\n            <ng-container *ngIf=\"col.type == 'number'\">\n              <span class=\"one-line float-right\" tooltipStyleClass=\"customtooltip\"\n                [pTooltip]=\"(data[col.field] | number: (col.format || '1.0-0')) || ''\" tooltipPosition=\"bottom\">\n                {{ data[col.field] | number: (col.format || '1.0-0') }}\n              </span>\n            </ng-container>\n          </ng-template>\n        </td>\n      </ng-container>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"loadingbody\" let-columns=\"columns\">\n    <div class=\"v-table-overlay\" *ngIf=\"isLoading\">\n      <div class=\"v-table-spinner v-table-loader\"></div>\n      <div class=\"v-table-text\">Please wait...</div>\n    </div>\n    <div *ngIf=\"isLoading\" [style]=\"{height: 'calc(-65px + '+scrollHeight +')'}\"></div>\n  </ng-template>\n  <ng-template *ngIf=\"placeFooter =='bottom'\" pTemplate=\"footer\">\n    <ng-content select=\"[footer]\"></ng-content>\n  </ng-template>\n  <ng-template pTemplate='emptymessage' let-columns>\n    <tr>\n      <td [style]=\"{height: 'calc(-65px + '+scrollHeight +')'}\" [attr.colspan]='1000'>\n        <ng-container [ngTemplateOutlet]=\"notDataTpl\"></ng-container>\n      </td>\n    </tr>\n  </ng-template>\n</p-table>\n<ng-template #notDataTpl>\n  <div class=\"no-data-container\">\n    <img src=\"assets/images/no-data.png\" alt=\"No Data\" class=\"no-data-image\" />\n    <p class=\"no-data-message\">No results found</p>\n    <p class=\"no-data-submessage\">Sorry, we couldn't find any results for your search</p>\n  </div>\n</ng-template>\n<!-- <app-config-display [cols]=\"cols\"></app-config-display> -->", styles: [".custom-select-paginator ::ng-deep .p-dropdown-label{padding:3px 0 3px 6px;font-size:12px;line-height:16px}.custom-select-paginator ::ng-deep .p-dropdown-trigger{width:1.5rem;padding:0 14px}::ng-deep .custom-paginator button{width:24px!important;min-width:24px!important;height:24px;border-radius:4px;font-size:12px;line-height:16px}::ng-deep .custom-paginator .p-paginator-element{margin:0 4px;border:1px solid #E6E6E6}::ng-deep .custom-paginator .p-paginator-page{margin:0 2px;border:unset}::ng-deep .custom-paginator .p-paginator-page:hover{background:#f5f5f5}::ng-deep .custom-paginator .p-highlight{background:#2e6be5!important;color:#fff!important}::ng-deep .dynamic-table .p-datatable-wrapper{border:1px solid #E6E6E6}::ng-deep .dynamic-table .p-datatable-wrapper tr:has(.no-data-container){background:unset!important;color:unset!important}.no-data-container{text-align:center;padding:20px;color:#6c757d;max-width:78vw}.no-data-image{max-width:150px;margin-bottom:10px}.no-data-message{font-size:18px;font-weight:700}.no-data-submessage{font-size:14px}.float-right{float:right;text-align:right}.one-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;max-width:100%;width:-moz-fit-content;width:fit-content}::ng-deep .p-datatable-scrollable table{table-layout:fixed!important;width:100%!important}::ng-deep .dynamic-table .customtooltip .p-tooltip-text{background-color:#fff;color:#404040;width:max-content}::ng-deep .dynamic-table .customtooltip .p-tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;border-width:0 6px 6px 6px;border-color:transparent transparent #fff transparent;top:-2px;left:30%;transform:translate(-50%);z-index:1}::ng-deep .dynamic-table .p-datatable-loading-overlay{background-color:#f0f0f080!important}::ng-deep .dynamic-table .p-datatable-loading-overlay .p-icon-wrapper{display:none!important}.table-header{height:28px;background:#f5f5f5}.table-header th{padding:6px 16px;font-size:12px;font-weight:500;color:#404040}.table-body td{padding:12px 16px;font-size:12px;font-weight:400;line-height:16px;color:#404040}.v-table-overlay{z-index:100;display:flex;gap:1rem;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:absolute;left:45%;top:40%}.v-table-loader{animation:rotate 1.5s infinite;height:50px;width:50px}.v-table-loader:before,.v-table-loader:after{border-radius:50%;content:\"\";display:block;height:20px;width:20px}.v-table-loader:before{animation:ball1 1s infinite;background-color:#1d559f;box-shadow:30px 0 #00b6eb;margin-bottom:10px}.v-table-loader:after{animation:ball2 1s infinite;background-color:#00b6eb;box-shadow:30px 0 #1d559f}@keyframes rotate{0%{transform:rotate(0) scale(.8)}50%{transform:rotate(360deg) scale(1.2)}to{transform:rotate(720deg) scale(.8)}}@keyframes ball1{0%{box-shadow:30px 0 #00b6eb}50%{box-shadow:0 0 #00b6eb;margin-bottom:0;transform:translate(15px,15px)}to{box-shadow:30px 0 #00b6eb;margin-bottom:10px}}@keyframes ball2{0%{box-shadow:30px 0 #1d559f}50%{box-shadow:0 0 #1d559f;margin-top:-20px;transform:translate(15px,15px)}to{box-shadow:30px 0 #1d559f;margin-top:0}}\n"] }]
        }], ctorParameters: function () { return [{ type: MaService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { datas: [{
                type: Input
            }], havePaginator: [{
                type: Input
            }], cols: [{
                type: Input
            }], autoSearchAfterViewInit: [{
                type: Input
            }], selectionMode: [{
                type: Input
            }], inputSearch: [{
                type: Input
            }], scrollHeight: [{
                type: Input
            }], getList$: [{
                type: Input
            }], placeFooter: [{
                type: Input
            }], onRowSelected: [{
                type: Output
            }], templateCellTemplate: [{
                type: ContentChild,
                args: ['templateCell', { static: false }]
            }] } });

class BaseControlValueAccessor {
    constructor(controlContainer) {
        this.controlContainer = controlContainer;
    }
    get control() {
        return (this.formControl ||
            this.controlContainer?.control?.get(this.formControlName));
    }
    registerOnChange(fn) {
        if (this.formControlDirective?.valueAccessor) {
            this.formControlDirective.valueAccessor.registerOnChange(fn);
        }
    }
    registerOnTouched(fn) {
        if (this.formControlDirective?.valueAccessor) {
            this.formControlDirective.valueAccessor.registerOnTouched(fn);
        }
    }
    writeValue(obj) {
        if (this.formControlDirective?.valueAccessor) {
            this.formControlDirective.valueAccessor.writeValue(obj);
        }
    }
    setDisabledState(isDisabled) {
        if (this.formControlDirective?.valueAccessor?.setDisabledState) {
            this.formControlDirective.valueAccessor.setDisabledState(isDisabled);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseControlValueAccessor, deps: [{ token: i1$4.ControlContainer }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BaseControlValueAccessor, inputs: { formControl: "formControl", formControlName: "formControlName" }, viewQueries: [{ propertyName: "formControlDirective", first: true, predicate: FormControlDirective, descendants: true, static: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BaseControlValueAccessor, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i1$4.ControlContainer }]; }, propDecorators: { formControlDirective: [{
                type: ViewChild,
                args: [FormControlDirective, { static: true }]
            }], formControl: [{
                type: Input
            }], formControlName: [{
                type: Input
            }] } });

class DatePickerComponent extends BaseControlValueAccessor {
    constructor(controlContainer, cdr) {
        super(controlContainer);
        this.controlContainer = controlContainer;
        this.cdr = cdr;
        this.label = '';
        this.showTime = true;
        this.dateOption = 'daily';
        this.dateOptions = [
            { label: 'daily', value: 'daily' },
            { label: 'weekly', value: 'weekly' },
            { label: 'monthly', value: 'monthly' },
        ];
        this.onChangeInterval = new EventEmitter();
    }
    get formGroup() {
        return this.controlContainer?.control;
    }
    ngOnInit() {
        this.control.valueChanges.subscribe(() => {
            this.highlightWeek();
            if (this.control.value && this.control.value.length === 2) {
                const [fromDate, toDate] = this.control.value;
                const oneYearInMillis = 365 * 24 * 60 * 60 * 1000;
                if (toDate && (toDate.getTime() - fromDate.getTime() > oneYearInMillis)) {
                    const adjustedToDate = new Date(fromDate.getTime() + oneYearInMillis);
                    this.control.setValue([fromDate, adjustedToDate], { emitEvent: false });
                }
            }
        });
    }
    onTimeChange() {
        this.control.setValue(this.control.value);
    }
    onCalendarOpen() {
        if (this.control.value) {
            this.highlightWeek();
        }
    }
    highlightWeek() {
        if (this.dateOption !== 'weekly') {
            return;
        }
        setTimeout(() => {
            const cells = document.querySelectorAll('.date-picker tr');
            cells.forEach(cell => {
                const span = cell.querySelector('span.p-highlight');
                if (span) {
                    cell.classList.add('week-highlight');
                }
            });
        }, 50);
    }
    onChangeDateOption(event) {
        let date = this.control.value;
        if (date && date.length == 2) {
            this.onSelectDate(date[0], true);
        }
        else {
            this.onSelectDate(this.control.value, true);
        }
        const currentValue = this.control.value;
        this.control.setValue(null, { emitEvent: false });
        this.control.setValue(currentValue);
        this.onChangeInterval.emit(event);
    }
    onSelectDate(selectedDate, byOption = false) {
        if (!selectedDate) {
            return;
        }
        if (this.dateOption === 'weekly') {
            const startOfWeek = this.getStartOfWeek(selectedDate);
            const endOfWeek = this.getEndOfWeek(selectedDate);
            this.control.setValue([startOfWeek, endOfWeek]);
            this.calendar.overlayVisible = false;
        }
        else if (this.dateOption === 'monthly' && byOption) {
            const startOfMonth = this.getStartOfMonth(selectedDate);
            this.control.setValue(startOfMonth, { emitEvent: false });
        }
        else if (this.dateOption === 'daily' && byOption) {
            this.control.setValue(selectedDate, { emitEvent: false });
        }
        this.cdr.detectChanges();
    }
    getStartOfMonth(date) {
        date = new Date(date);
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }
    getEndOfMonth(date) {
        date = new Date(date);
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    getStartOfWeek(date) {
        const day = date.getDay();
        const diff = date.getDate() - day + 1;
        return new Date(date.setDate(diff));
    }
    getEndOfWeek(date) {
        const startOfWeek = this.getStartOfWeek(date);
        return new Date(startOfWeek.setDate(startOfWeek.getDate() + 6));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DatePickerComponent, deps: [{ token: i1$4.ControlContainer, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DatePickerComponent, isStandalone: true, selector: "date-picker", inputs: { label: "label", maxDate: "maxDate", minDate: "minDate", showTime: "showTime" }, outputs: { onChangeInterval: "onChangeInterval" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DatePickerComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "calendar", first: true, predicate: ["calendar"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"combo-datepicker\">\n  <div class=\"p-inputgroup\">\n    <span class=\"p-inputgroup-addon\">\n      <p-dropdown [options]=\"dateOptions\" [(ngModel)]=\"dateOption\" [ngModelOptions]=\" \n             {standalone: true}\" (ngModelChange)=\"onChangeDateOption($event)\" [optionLabel]=\"'label'\"\n        [optionValue]=\"'value'\">\n        <ng-template let-selectedItem pTemplate=\"selectedItem\">\n          <span *ngIf=\"selectedItem\">\n            {{ selectedItem.label | translate}}\n          </span>\n          <span *ngIf=\"!selectedItem \">\n            {{ 'all' | translate }}\n          </span>\n        </ng-template>\n        <ng-template pTemplate=\"option\" let-option>{{option.label | translate}} </ng-template>\n      </p-dropdown>\n    </span>\n    <div class=\"date-picker date-picker-container \">\n      <div class=\"calendar-container\">\n        <p-calendar  [firstDayOfWeek]=\"1\"  [formControl]=\"control\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onFocus)=\"onCalendarOpen()\"\n          #calendar (onSelect)=\"onSelectDate($event)\" [styleClass]=\"dateOption =='weekly'?'date-picker-week' : ''\"\n          [view]=\"dateOption =='monthly'?'month': 'date'\" [selectionMode]=\"dateOption =='weekly'?'range':'single'\"\n          [dateFormat]=\"dateOption =='monthly'?'mm/yy': 'dd/mm/yy'\" [showWeek]=\"dateOption =='weekly'\"\n          [placeholder]=\"'Select Date'\"></p-calendar>\n      </div>\n    </div>\n  </div>\n</div>", styles: [".date-picker-container{display:flex}.date-picker-container ::ng-deep .p-calendar .p-datepicker{width:unset!important}.date-picker-container ::ng-deep .p-datepicker.p-datepicker-multiple-month .p-datepicker-group{border-left:unset!important}.date-picker-container ::ng-deep .p-datepicker{border:unset}.date-picker-container ::ng-deep .p-datepicker td>span{margin:0}.date-picker-container ::ng-deep .p-datepicker table th{padding:2px}.date-picker-container ::ng-deep .p-datepicker table td>span{width:34px;height:32px;border-radius:4px}.date-picker-container ::ng-deep .p-datepicker table td{padding:2px 0}.date-picker-container ::ng-deep .p-datepicker table td span.p-highlight{border-radius:4px;background:#2e6be5!important;color:#fff!important}.date-picker-container ::ng-deep .p-datepicker table td.p-datepicker-today span{border-radius:4px;color:#2e6be5;background:#edf3ff}.date-picker-container ::ng-deep .p-datepicker table td span.p-highlight{color:#404040;background:#edf3ff}.date-picker-container ::ng-deep .p-datepicker .p-datepicker-header{border-bottom:unset}.date-picker-container ::ng-deep .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month{margin-right:.5rem!important}.date-picker-container ::ng-deep .p-datepicker .p-datepicker-prev,.date-picker-container ::ng-deep .p-datepicker .p-datepicker-next{border:1px solid #E6E6E6;border-radius:4px;height:32px;width:32px}.date-picker-container .time-intervals{flex:0 0 136px;border-right:1px solid #e6e6e6;padding-right:8px}.date-picker-container .time-intervals ul{list-style:none;padding:0;margin:0}.date-picker-container .time-intervals ul li{cursor:pointer;padding:14px 0;font-size:14px;color:#333;font-weight:400}.date-picker-container .time-intervals ul li:hover,.date-picker-container .time-intervals ul li.active{font-weight:600}.date-picker-container .calendar-container{flex:1}.date-range-actions{display:flex;justify-content:flex-end;gap:1rem;margin-top:1rem;border-top:1px solid #E6E6E6;padding-top:16px;align-items:center}.date-range-actions button{min-width:80px}.date-range-actions .date-range-value{color:#6c6c6c;padding-right:16px}.button-custom-date-range{padding:0;border:unset!important;box-shadow:unset!important;background:#fff!important;max-width:20vw;text-align:left;display:block}.value-range{color:#404040;font-weight:400;line-height:20px;padding-top:5px;font-size:14px;display:block}.p-inputgroup-addon{padding:unset;background-color:unset}::ng-deep .combo-datepicker{padding-right:16px}::ng-deep .combo-datepicker .p-datepicker-weekheader{padding-right:24px!important}::ng-deep .combo-datepicker .p-datepicker-weeknumber{padding-right:24px!important}::ng-deep .combo-datepicker .p-inputgroup .p-inputwrapper>.p-component{width:unset}::ng-deep .combo-datepicker .p-dropdown{border:unset;border-radius:unset;border-top-left-radius:6px;border-bottom-left-radius:6px}::ng-deep .combo-datepicker .p-dropdown-label{max-width:10vw}::ng-deep .combo-datepicker .p-inputgroup .p-inputtext{border-radius:0 6px 6px 0}::ng-deep .combo-datepicker .p-inputgroup .p-inputtext:has(+.p-inputgroup-addon .circle-x){border-right:unset}::ng-deep .combo-datepicker .p-inputgroup-addon{padding:unset;background-color:unset}::ng-deep .combo-datepicker .p-inputgroup-addon:has(.pi-search){padding-left:12px;min-width:unset}::ng-deep .combo-datepicker .p-inputgroup-addon:has(.circle-x){border-left:unset}::ng-deep .combo-datepicker .p-inputtext:enabled:focus{box-shadow:unset;border-color:#d1d5db;transition:0ms}::ng-deep .combo-datepicker .p-inputtext:enabled:hover{box-shadow:unset;border-color:#d1d5db;transition:0ms}::ng-deep .combo-datepicker .p-dropdown:not(.p-disabled).p-focus{box-shadow:unset;border-color:#d1d5db}::ng-deep .combo-datepicker .p-monthpicker .p-monthpicker-month{padding:10px}::ng-deep .combo-datepicker .p-monthpicker .p-monthpicker-month.p-highlight{background:#2e6be5!important;color:#fff!important}::ng-deep .date-picker-week .week-highlight td{background-color:#2e6be5!important;color:#fff!important;border-radius:0!important;transition:0s!important}::ng-deep .date-picker-week .week-highlight td:first-child{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important}::ng-deep .date-picker-week .week-highlight td:last-child{border-top-right-radius:4px!important;border-bottom-right-radius:4px!important}::ng-deep .date-picker-week tr:not(.week-highlight):hover td{background-color:#f5f5f5!important;border-radius:0!important;transition:0s!important}::ng-deep .date-picker-week tr:not(.week-highlight):hover td:first-child{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important}::ng-deep .date-picker-week tr:not(.week-highlight):hover td:last-child{border-top-right-radius:4px!important;border-bottom-right-radius:4px!important}::ng-deep .date-picker-week .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover{background-color:unset!important}::ng-deep .date-picker-week .p-datepicker table td span.p-highlight{background-color:unset!important}\n"], dependencies: [{ kind: "ngmodule", type: MaLibModule }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: CalendarModule }, { kind: "component", type: i4$1.Calendar, selector: "p-calendar", inputs: ["style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale", "view", "defaultDate"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }, { kind: "directive", type: i1.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: OverlayPanelModule }, { kind: "ngmodule", type: DropdownModule }, { kind: "component", type: i6$1.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "overlayDirection", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DatePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'date-picker', standalone: true, imports: [
                        MaLibModule,
                        ReactiveFormsModule,
                        CalendarModule,
                        FormsModule,
                        OverlayPanelModule,
                        DropdownModule
                    ], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DatePickerComponent),
                            multi: true,
                        },
                    ], template: "<div class=\"combo-datepicker\">\n  <div class=\"p-inputgroup\">\n    <span class=\"p-inputgroup-addon\">\n      <p-dropdown [options]=\"dateOptions\" [(ngModel)]=\"dateOption\" [ngModelOptions]=\" \n             {standalone: true}\" (ngModelChange)=\"onChangeDateOption($event)\" [optionLabel]=\"'label'\"\n        [optionValue]=\"'value'\">\n        <ng-template let-selectedItem pTemplate=\"selectedItem\">\n          <span *ngIf=\"selectedItem\">\n            {{ selectedItem.label | translate}}\n          </span>\n          <span *ngIf=\"!selectedItem \">\n            {{ 'all' | translate }}\n          </span>\n        </ng-template>\n        <ng-template pTemplate=\"option\" let-option>{{option.label | translate}} </ng-template>\n      </p-dropdown>\n    </span>\n    <div class=\"date-picker date-picker-container \">\n      <div class=\"calendar-container\">\n        <p-calendar  [firstDayOfWeek]=\"1\"  [formControl]=\"control\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" (onFocus)=\"onCalendarOpen()\"\n          #calendar (onSelect)=\"onSelectDate($event)\" [styleClass]=\"dateOption =='weekly'?'date-picker-week' : ''\"\n          [view]=\"dateOption =='monthly'?'month': 'date'\" [selectionMode]=\"dateOption =='weekly'?'range':'single'\"\n          [dateFormat]=\"dateOption =='monthly'?'mm/yy': 'dd/mm/yy'\" [showWeek]=\"dateOption =='weekly'\"\n          [placeholder]=\"'Select Date'\"></p-calendar>\n      </div>\n    </div>\n  </div>\n</div>", styles: [".date-picker-container{display:flex}.date-picker-container ::ng-deep .p-calendar .p-datepicker{width:unset!important}.date-picker-container ::ng-deep .p-datepicker.p-datepicker-multiple-month .p-datepicker-group{border-left:unset!important}.date-picker-container ::ng-deep .p-datepicker{border:unset}.date-picker-container ::ng-deep .p-datepicker td>span{margin:0}.date-picker-container ::ng-deep .p-datepicker table th{padding:2px}.date-picker-container ::ng-deep .p-datepicker table td>span{width:34px;height:32px;border-radius:4px}.date-picker-container ::ng-deep .p-datepicker table td{padding:2px 0}.date-picker-container ::ng-deep .p-datepicker table td span.p-highlight{border-radius:4px;background:#2e6be5!important;color:#fff!important}.date-picker-container ::ng-deep .p-datepicker table td.p-datepicker-today span{border-radius:4px;color:#2e6be5;background:#edf3ff}.date-picker-container ::ng-deep .p-datepicker table td span.p-highlight{color:#404040;background:#edf3ff}.date-picker-container ::ng-deep .p-datepicker .p-datepicker-header{border-bottom:unset}.date-picker-container ::ng-deep .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month{margin-right:.5rem!important}.date-picker-container ::ng-deep .p-datepicker .p-datepicker-prev,.date-picker-container ::ng-deep .p-datepicker .p-datepicker-next{border:1px solid #E6E6E6;border-radius:4px;height:32px;width:32px}.date-picker-container .time-intervals{flex:0 0 136px;border-right:1px solid #e6e6e6;padding-right:8px}.date-picker-container .time-intervals ul{list-style:none;padding:0;margin:0}.date-picker-container .time-intervals ul li{cursor:pointer;padding:14px 0;font-size:14px;color:#333;font-weight:400}.date-picker-container .time-intervals ul li:hover,.date-picker-container .time-intervals ul li.active{font-weight:600}.date-picker-container .calendar-container{flex:1}.date-range-actions{display:flex;justify-content:flex-end;gap:1rem;margin-top:1rem;border-top:1px solid #E6E6E6;padding-top:16px;align-items:center}.date-range-actions button{min-width:80px}.date-range-actions .date-range-value{color:#6c6c6c;padding-right:16px}.button-custom-date-range{padding:0;border:unset!important;box-shadow:unset!important;background:#fff!important;max-width:20vw;text-align:left;display:block}.value-range{color:#404040;font-weight:400;line-height:20px;padding-top:5px;font-size:14px;display:block}.p-inputgroup-addon{padding:unset;background-color:unset}::ng-deep .combo-datepicker{padding-right:16px}::ng-deep .combo-datepicker .p-datepicker-weekheader{padding-right:24px!important}::ng-deep .combo-datepicker .p-datepicker-weeknumber{padding-right:24px!important}::ng-deep .combo-datepicker .p-inputgroup .p-inputwrapper>.p-component{width:unset}::ng-deep .combo-datepicker .p-dropdown{border:unset;border-radius:unset;border-top-left-radius:6px;border-bottom-left-radius:6px}::ng-deep .combo-datepicker .p-dropdown-label{max-width:10vw}::ng-deep .combo-datepicker .p-inputgroup .p-inputtext{border-radius:0 6px 6px 0}::ng-deep .combo-datepicker .p-inputgroup .p-inputtext:has(+.p-inputgroup-addon .circle-x){border-right:unset}::ng-deep .combo-datepicker .p-inputgroup-addon{padding:unset;background-color:unset}::ng-deep .combo-datepicker .p-inputgroup-addon:has(.pi-search){padding-left:12px;min-width:unset}::ng-deep .combo-datepicker .p-inputgroup-addon:has(.circle-x){border-left:unset}::ng-deep .combo-datepicker .p-inputtext:enabled:focus{box-shadow:unset;border-color:#d1d5db;transition:0ms}::ng-deep .combo-datepicker .p-inputtext:enabled:hover{box-shadow:unset;border-color:#d1d5db;transition:0ms}::ng-deep .combo-datepicker .p-dropdown:not(.p-disabled).p-focus{box-shadow:unset;border-color:#d1d5db}::ng-deep .combo-datepicker .p-monthpicker .p-monthpicker-month{padding:10px}::ng-deep .combo-datepicker .p-monthpicker .p-monthpicker-month.p-highlight{background:#2e6be5!important;color:#fff!important}::ng-deep .date-picker-week .week-highlight td{background-color:#2e6be5!important;color:#fff!important;border-radius:0!important;transition:0s!important}::ng-deep .date-picker-week .week-highlight td:first-child{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important}::ng-deep .date-picker-week .week-highlight td:last-child{border-top-right-radius:4px!important;border-bottom-right-radius:4px!important}::ng-deep .date-picker-week tr:not(.week-highlight):hover td{background-color:#f5f5f5!important;border-radius:0!important;transition:0s!important}::ng-deep .date-picker-week tr:not(.week-highlight):hover td:first-child{border-top-left-radius:4px!important;border-bottom-left-radius:4px!important}::ng-deep .date-picker-week tr:not(.week-highlight):hover td:last-child{border-top-right-radius:4px!important;border-bottom-right-radius:4px!important}::ng-deep .date-picker-week .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover{background-color:unset!important}::ng-deep .date-picker-week .p-datepicker table td span.p-highlight{background-color:unset!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$4.ControlContainer, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { label: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], minDate: [{
                type: Input
            }], showTime: [{
                type: Input
            }], calendar: [{
                type: ViewChild,
                args: ['calendar']
            }], onChangeInterval: [{
                type: Output
            }] } });

class DateRangePickerComponent extends BaseControlValueAccessor {
    constructor(controlContainer) {
        super(controlContainer);
        this.controlContainer = controlContainer;
        this.selectedDateRange = null;
        this.selectedDateRangePanel = null;
        this.fromTime = '00:00';
        this.toTime = '23:59';
        this.selectedInterval = null;
        this.label = '';
        this.type = 'date';
        this.showTime = true;
        this.intervals = [
            { key: 'today', label: 'today' },
            { key: 'yesterday', label: 'yesterday' },
            { key: 'currentWeek', label: 'currentWeek' },
            { key: 'lastWeek', label: 'lastWeek' },
            { key: 'currentMonth', label: 'currentMonth' },
            { key: 'lastMonth', label: 'lastMonth' },
            { key: 'custom', label: 'custom' },
        ];
    }
    get formGroup() {
        return this.controlContainer?.control;
    }
    ngOnInit() {
        this.dateRangeInput = new FormControl(null);
        this.dateRangeInput.valueChanges.subscribe(() => {
            if (this.dateRangeInput.value && this.dateRangeInput.value.length === 2) {
                const [fromDate, toDate] = this.dateRangeInput.value;
                const oneYearInMillis = 365 * 24 * 60 * 60 * 1000;
                if (toDate && (toDate.getTime() - fromDate.getTime() > oneYearInMillis)) {
                    const adjustedToDate = new Date(fromDate.getTime() + oneYearInMillis);
                    this.dateRangeInput.setValue([fromDate, adjustedToDate], { emitEvent: false });
                }
            }
            if (this.dateRangeInput.value && this.dateRangeInput.value.length == 2 && this.dateRangeInput.value[0] && !this.dateRangeInput.value[1]) {
                this.selectedInterval = 'custom';
            }
            if (this.dateRangeInput.value && this.dateRangeInput.value.length == 2 && this.dateRangeInput.value[0] && this.dateRangeInput.value[1]) {
                let startDate = new Date(this.dateRangeInput.value[0]);
                startDate = new Date(startDate.setHours(Number(this.fromTime?.split(':')[0]), Number(this.fromTime?.split(':')[1])));
                let endDate = new Date(this.dateRangeInput.value[1]);
                endDate = new Date(endDate.setHours(Number(this.toTime?.split(':')[0]), Number(this.toTime?.split(':')[1])));
                this.dateRangeInput.setValue([startDate, endDate], { emitEvent: false });
            }
            this.checkDate();
            if (this.dateRangeInput.value && (this.dateRangeInput.value.length > 0)) {
                this.viewDate();
            }
        });
        if (this.selectedInterval) {
            this.selectTimeInterval(this.selectedInterval);
            this.control.setValue(this.dateRangeInput.value);
            this.selectedDateRange = this.selectedDateRangePanel;
        }
    }
    openPanel() {
        this.dateRangeInput.setValue(this.control.value);
    }
    checkDate() {
        setTimeout(() => {
            let container = document.querySelector('.p-datepicker-group-container');
            if (this.type === 'month') {
                container = document.querySelector('.p-monthpicker');
            }
            if (!container)
                return;
            const childDivs = container.querySelectorAll('.range-date-picker');
            const childDiv2s = container.querySelectorAll('.range-date-picker');
            childDivs.forEach(div => {
                div.classList.remove('range-date-picker', 'range-date-picker');
            });
            childDiv2s.forEach(div => {
                div.classList.remove('range-date-picker', 'range-date-picker');
            });
            if (this.dateRangeInput.value && (this.dateRangeInput.value.length > 0)) {
                const labels = container.querySelectorAll('span.p-highlight:not(.p-disabled)');
                if (labels.length > 0) {
                    if (this.type === 'month') {
                        labels[0].classList.add('range-date-picker');
                        labels[labels.length - 1].classList.add('range-date-picker');
                    }
                    else {
                        labels[0].parentElement.classList.add('range-date-picker');
                        labels[labels.length - 1].parentElement.classList.add('range-date-picker');
                    }
                }
            }
        }, 50);
    }
    viewDate() {
        const dateRange = this.dateRangeInput.value;
        if (dateRange && dateRange.length === 2 && dateRange[1] && dateRange[0]) {
            const [startDate, endDate] = dateRange;
            this.selectedDateRangePanel = `${this.formatDate(startDate)} - ${this.formatDate(endDate)}`;
        }
    }
    applyDateRange() {
        if (this.dateRangeInput.value && this.dateRangeInput.value.length === 2) {
            const [startDate, endDate] = this.dateRangeInput.value;
            if (!endDate) {
                this.dateRangeInput.setValue([startDate, startDate]);
            }
            this.control.setValue(this.dateRangeInput.value);
            this.selectedDateRange = this.selectedDateRangePanel;
        }
    }
    onTimeChange() {
        this.dateRangeInput.setValue(this.dateRangeInput.value);
    }
    formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours() % 12 || 12).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
        if (this.type === 'month') {
            return `${month}/${year}`;
        }
        if (this.showTime) {
            return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
        }
        else
            return `${day}/${month}/${year}  `;
    }
    selectTimeInterval(interval) {
        this.selectedInterval = interval;
        const now = new Date();
        const nowe = new Date();
        now.setHours(0, 0, 0, 0);
        nowe.setHours(23, 59, 59, 999);
        let startDate;
        let endDate = nowe;
        switch (interval) {
            case 'today':
                startDate = new Date(now.setHours(0, 0, 0, 0));
                endDate = new Date(now.setHours(23, 59, 59, 999));
                break;
            case 'yesterday':
                startDate = new Date(now.setDate(now.getDate() - 1));
                startDate.setHours(0, 0, 0, 0);
                endDate = new Date(now.setHours(23, 59, 59, 999));
                break;
            case 'currentWeek':
                const currentDay = now.getDay();
                const diffToMonday = currentDay === 0 ? 6 : currentDay - 1;
                startDate = new Date(now.setDate(now.getDate() - diffToMonday));
                startDate.setHours(0, 0, 0, 0);
                endDate = new Date();
                endDate.setHours(23, 59, 59, 999);
                break;
            case 'lastWeek':
                const lastWeekStart = new Date(now.setDate(now.getDate() - now.getDay() - 6));
                startDate = new Date(lastWeekStart.setHours(0, 0, 0, 0));
                const lastWeekEnd = new Date(now.setDate(lastWeekStart.getDate() + 6));
                endDate = new Date(lastWeekEnd.setHours(23, 59, 59, 999));
                break;
            case 'currentMonth':
                startDate = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
                endDate = new Date();
                endDate.setHours(23, 59, 59, 999);
                break;
            case 'lastMonth':
                startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1, 0, 0, 0, 0);
                endDate = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
                break;
            case 'custom':
            default:
                return;
        }
        this.dateRangeInput.setValue([startDate, endDate]);
        this.selectedDateRangePanel = `${this.formatDate(startDate)} - ${this.formatDate(endDate)}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DateRangePickerComponent, deps: [{ token: i1$4.ControlContainer, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DateRangePickerComponent, isStandalone: true, selector: "date-range-picker", inputs: { selectedInterval: "selectedInterval", label: "label", maxDate: "maxDate", minDate: "minDate", type: "type", showTime: "showTime" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DateRangePickerComponent),
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0, template: "<p-overlayPanel #dateRangePanel [showCloseIcon]=\"false\" (onShow)=\"openPanel()\"\n  [style]=\"{width: type==='date'?'688px':''}\">\n  <div class=\"date-range-picker  date-range-picker-container \">\n    <ng-container *ngIf=\"type==='date'\">\n      <div class=\"time-intervals\">\n        <ul>\n          <li *ngFor=\"let interval of intervals\" (click)=\"selectTimeInterval(interval.key)\"\n            [class.active]=\"selectedInterval === interval.key\">\n            {{ interval.label | translate }}\n          </li>\n        </ul>\n\n      </div>\n      <div class=\"calendar-container\">\n        <p-calendar [firstDayOfWeek]=\"1\" [formControl]=\"dateRangeInput\" [inline]=\"true\" class=\"max-w-full\"\n          [numberOfMonths]=\"2\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [selectionMode]=\"'range'\"\n          [rangeSeparator]=\"' - '\" [dateFormat]=\"'dd/mm/yy'\" [placeholder]=\"'Select Date Range'\"\n          appendTo=\"body\"></p-calendar>\n        <div class=\"time-input-container\">\n          <input type=\"time\" class=\"time-input\" (change)=\"onTimeChange()\" [(ngModel)]=\"fromTime\" />\n          <input type=\"time\" class=\"time-input\" (change)=\"onTimeChange()\" [(ngModel)]=\"toTime\" />\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"type==='month'\">\n      <div class=\"calendar-container calendar-container-month\">\n        <p-calendar [formControl]=\"dateRangeInput\" [inline]=\"true\" class=\"max-w-full\" [monthNavigator]=\"true\"\n          [yearNavigator]=\"true\" [view]=\"'month'\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [selectionMode]=\"'range'\"\n          [rangeSeparator]=\"' - '\" [dateFormat]=\"'dd/mm/yy'\" [placeholder]=\"'Select Date Range'\"\n          appendTo=\"body\"></p-calendar>\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"date-range-actions\">\n    <span class=\"date-range-value\">{{ selectedDateRangePanel }}</span>\n    <button pButton type=\"button\" [label]=\"'cancel'| translate\" class=\"p-button-secondary\"\n      (click)=\"dateRangePanel.hide()\"></button>\n    <button pButton type=\"button\" [label]=\"'apply'| translate\" class=\"p-button-primary\"\n      (click)=\"applyDateRange(); dateRangePanel.hide()\"></button>\n  </div>\n</p-overlayPanel>\n\n<button type=\"button\" pButton (click)=\"dateRangePanel.toggle($event)\" class=\"p-button-text button-custom-date-range\">\n  <div class=\"float-label-container\">\n    <label class=\"float-label\">{{label || 'Date'}}</label>\n    <i class=\"pi pi-chevron-down arrow-icon\" [class.open]=\"dateRangePanel.overlayVisible\"></i>\n  </div>\n  <div class=\"value-range\">{{ selectedDateRange || 'Select Date Range' }}</div>\n</button>", styles: ["::ng-deep .p-overlaypanel .p-overlaypanel-content:has(.date-range-picker-container){padding:24px 24px 16px}.date-range-picker-container{display:flex}.date-range-picker-container ::ng-deep .p-calendar .p-datepicker{width:unset!important}.date-range-picker-container ::ng-deep .p-datepicker.p-datepicker-multiple-month .p-datepicker-group{border-left:unset!important}.date-range-picker-container ::ng-deep .p-datepicker{border:unset}.date-range-picker-container ::ng-deep .p-datepicker td>span{margin:0}.date-range-picker-container ::ng-deep .p-datepicker table th{padding:2px}.date-range-picker-container ::ng-deep .p-datepicker table td>span{width:34px;height:32px;border-radius:0}.date-range-picker-container ::ng-deep .p-datepicker table td{padding:2px 0}.date-range-picker-container ::ng-deep .p-datepicker table td.range-date-picker span.p-highlight{border-radius:4px;background:#2e6be5!important;color:#fff!important}.date-range-picker-container ::ng-deep .p-datepicker table td.p-datepicker-today span{border-radius:4px;color:#2e6be5;background:#edf3ff}.date-range-picker-container ::ng-deep .p-datepicker table td span.p-highlight{color:#404040;background:#edf3ff}.date-range-picker-container ::ng-deep .p-datepicker .p-datepicker-header{border-bottom:unset}.date-range-picker-container ::ng-deep .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month{margin-right:.5rem!important}.date-range-picker-container ::ng-deep .p-datepicker .p-datepicker-prev,.date-range-picker-container ::ng-deep .p-datepicker .p-datepicker-next{border:1px solid #E6E6E6;border-radius:4px;height:32px;width:32px}.date-range-picker-container ::ng-deep .p-monthpicker .range-date-picker.p-highlight{border-radius:4px!important;background:#2e6be5!important;color:#fff!important}.date-range-picker-container ::ng-deep .p-monthpicker span.p-highlight{color:#404040;border-radius:0;background:#edf3ff}.date-range-picker-container ::ng-deep .p-monthpicker span{margin-top:2px;margin-bottom:2px}.date-range-picker-container .time-intervals{flex:0 0 136px;border-right:1px solid #e6e6e6;padding-right:8px}.date-range-picker-container .time-intervals ul{list-style:none;padding:0;margin:0}.date-range-picker-container .time-intervals ul li{cursor:pointer;padding:14px 0;font-size:14px;color:#333;font-weight:400}.date-range-picker-container .time-intervals ul li:hover,.date-range-picker-container .time-intervals ul li.active{font-weight:600}.date-range-picker-container .calendar-container{flex:1}.date-range-actions{display:flex;justify-content:flex-end;gap:1rem;margin-top:1rem;border-top:1px solid #E6E6E6;padding-top:16px;align-items:center}.date-range-actions button{min-width:80px}.date-range-actions .date-range-value{color:#6c6c6c;padding-right:16px}.time-input-container{display:flex;align-items:center;justify-content:space-around;gap:.5rem}.time-input-container .time-input{height:36px;width:222px;text-align:center;border:1px solid #dcdcdc;border-radius:4px;font-size:14px;padding:0 8px}.float-label-container{top:-3px;display:block;font-size:12px;left:2px;color:#6c6c6c}.float-label-container:has(.open){color:#2e6be5}.float-label-container .arrow-icon{font-size:12px;height:12px;margin-left:8px;align-items:center;transition:transform .3s ease}.float-label-container .arrow-icon.open{transform:rotate(180deg)}.button-custom-date-range{padding:0;border:unset!important;box-shadow:unset!important;background:#fff!important;max-width:20vw;text-align:left;display:block}.value-range{color:#404040;font-weight:400;line-height:20px;padding-top:5px;font-size:14px;display:block}\n"], dependencies: [{ kind: "ngmodule", type: MaLibModule }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: InputTextModule }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: CalendarModule }, { kind: "component", type: i4$1.Calendar, selector: "p-calendar", inputs: ["style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale", "view", "defaultDate"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }, { kind: "directive", type: i2$2.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: OverlayPanelModule }, { kind: "component", type: i6$2.OverlayPanel, selector: "p-overlayPanel", inputs: ["dismissable", "showCloseIcon", "style", "styleClass", "appendTo", "autoZIndex", "ariaCloseLabel", "baseZIndex", "focusOnShow", "showTransitionOptions", "hideTransitionOptions"], outputs: ["onShow", "onHide"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DateRangePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker', standalone: true, imports: [
                        MaLibModule,
                        InputTextModule,
                        ReactiveFormsModule,
                        CalendarModule,
                        FormsModule,
                        OverlayPanelModule
                    ], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DateRangePickerComponent),
                            multi: true,
                        },
                    ], template: "<p-overlayPanel #dateRangePanel [showCloseIcon]=\"false\" (onShow)=\"openPanel()\"\n  [style]=\"{width: type==='date'?'688px':''}\">\n  <div class=\"date-range-picker  date-range-picker-container \">\n    <ng-container *ngIf=\"type==='date'\">\n      <div class=\"time-intervals\">\n        <ul>\n          <li *ngFor=\"let interval of intervals\" (click)=\"selectTimeInterval(interval.key)\"\n            [class.active]=\"selectedInterval === interval.key\">\n            {{ interval.label | translate }}\n          </li>\n        </ul>\n\n      </div>\n      <div class=\"calendar-container\">\n        <p-calendar [firstDayOfWeek]=\"1\" [formControl]=\"dateRangeInput\" [inline]=\"true\" class=\"max-w-full\"\n          [numberOfMonths]=\"2\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [selectionMode]=\"'range'\"\n          [rangeSeparator]=\"' - '\" [dateFormat]=\"'dd/mm/yy'\" [placeholder]=\"'Select Date Range'\"\n          appendTo=\"body\"></p-calendar>\n        <div class=\"time-input-container\">\n          <input type=\"time\" class=\"time-input\" (change)=\"onTimeChange()\" [(ngModel)]=\"fromTime\" />\n          <input type=\"time\" class=\"time-input\" (change)=\"onTimeChange()\" [(ngModel)]=\"toTime\" />\n        </div>\n      </div>\n    </ng-container>\n    <ng-container *ngIf=\"type==='month'\">\n      <div class=\"calendar-container calendar-container-month\">\n        <p-calendar [formControl]=\"dateRangeInput\" [inline]=\"true\" class=\"max-w-full\" [monthNavigator]=\"true\"\n          [yearNavigator]=\"true\" [view]=\"'month'\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [selectionMode]=\"'range'\"\n          [rangeSeparator]=\"' - '\" [dateFormat]=\"'dd/mm/yy'\" [placeholder]=\"'Select Date Range'\"\n          appendTo=\"body\"></p-calendar>\n      </div>\n    </ng-container>\n  </div>\n\n  <div class=\"date-range-actions\">\n    <span class=\"date-range-value\">{{ selectedDateRangePanel }}</span>\n    <button pButton type=\"button\" [label]=\"'cancel'| translate\" class=\"p-button-secondary\"\n      (click)=\"dateRangePanel.hide()\"></button>\n    <button pButton type=\"button\" [label]=\"'apply'| translate\" class=\"p-button-primary\"\n      (click)=\"applyDateRange(); dateRangePanel.hide()\"></button>\n  </div>\n</p-overlayPanel>\n\n<button type=\"button\" pButton (click)=\"dateRangePanel.toggle($event)\" class=\"p-button-text button-custom-date-range\">\n  <div class=\"float-label-container\">\n    <label class=\"float-label\">{{label || 'Date'}}</label>\n    <i class=\"pi pi-chevron-down arrow-icon\" [class.open]=\"dateRangePanel.overlayVisible\"></i>\n  </div>\n  <div class=\"value-range\">{{ selectedDateRange || 'Select Date Range' }}</div>\n</button>", styles: ["::ng-deep .p-overlaypanel .p-overlaypanel-content:has(.date-range-picker-container){padding:24px 24px 16px}.date-range-picker-container{display:flex}.date-range-picker-container ::ng-deep .p-calendar .p-datepicker{width:unset!important}.date-range-picker-container ::ng-deep .p-datepicker.p-datepicker-multiple-month .p-datepicker-group{border-left:unset!important}.date-range-picker-container ::ng-deep .p-datepicker{border:unset}.date-range-picker-container ::ng-deep .p-datepicker td>span{margin:0}.date-range-picker-container ::ng-deep .p-datepicker table th{padding:2px}.date-range-picker-container ::ng-deep .p-datepicker table td>span{width:34px;height:32px;border-radius:0}.date-range-picker-container ::ng-deep .p-datepicker table td{padding:2px 0}.date-range-picker-container ::ng-deep .p-datepicker table td.range-date-picker span.p-highlight{border-radius:4px;background:#2e6be5!important;color:#fff!important}.date-range-picker-container ::ng-deep .p-datepicker table td.p-datepicker-today span{border-radius:4px;color:#2e6be5;background:#edf3ff}.date-range-picker-container ::ng-deep .p-datepicker table td span.p-highlight{color:#404040;background:#edf3ff}.date-range-picker-container ::ng-deep .p-datepicker .p-datepicker-header{border-bottom:unset}.date-range-picker-container ::ng-deep .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month{margin-right:.5rem!important}.date-range-picker-container ::ng-deep .p-datepicker .p-datepicker-prev,.date-range-picker-container ::ng-deep .p-datepicker .p-datepicker-next{border:1px solid #E6E6E6;border-radius:4px;height:32px;width:32px}.date-range-picker-container ::ng-deep .p-monthpicker .range-date-picker.p-highlight{border-radius:4px!important;background:#2e6be5!important;color:#fff!important}.date-range-picker-container ::ng-deep .p-monthpicker span.p-highlight{color:#404040;border-radius:0;background:#edf3ff}.date-range-picker-container ::ng-deep .p-monthpicker span{margin-top:2px;margin-bottom:2px}.date-range-picker-container .time-intervals{flex:0 0 136px;border-right:1px solid #e6e6e6;padding-right:8px}.date-range-picker-container .time-intervals ul{list-style:none;padding:0;margin:0}.date-range-picker-container .time-intervals ul li{cursor:pointer;padding:14px 0;font-size:14px;color:#333;font-weight:400}.date-range-picker-container .time-intervals ul li:hover,.date-range-picker-container .time-intervals ul li.active{font-weight:600}.date-range-picker-container .calendar-container{flex:1}.date-range-actions{display:flex;justify-content:flex-end;gap:1rem;margin-top:1rem;border-top:1px solid #E6E6E6;padding-top:16px;align-items:center}.date-range-actions button{min-width:80px}.date-range-actions .date-range-value{color:#6c6c6c;padding-right:16px}.time-input-container{display:flex;align-items:center;justify-content:space-around;gap:.5rem}.time-input-container .time-input{height:36px;width:222px;text-align:center;border:1px solid #dcdcdc;border-radius:4px;font-size:14px;padding:0 8px}.float-label-container{top:-3px;display:block;font-size:12px;left:2px;color:#6c6c6c}.float-label-container:has(.open){color:#2e6be5}.float-label-container .arrow-icon{font-size:12px;height:12px;margin-left:8px;align-items:center;transition:transform .3s ease}.float-label-container .arrow-icon.open{transform:rotate(180deg)}.button-custom-date-range{padding:0;border:unset!important;box-shadow:unset!important;background:#fff!important;max-width:20vw;text-align:left;display:block}.value-range{color:#404040;font-weight:400;line-height:20px;padding-top:5px;font-size:14px;display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$4.ControlContainer, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { selectedInterval: [{
                type: Input
            }], label: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], minDate: [{
                type: Input
            }], type: [{
                type: Input
            }], showTime: [{
                type: Input
            }] } });

class DropdownComponent extends BaseControlValueAccessor {
    constructor(controlContainer, cdr) {
        super(controlContainer);
        this.controlContainer = controlContainer;
        this.cdr = cdr;
        this.label = '';
        this.options = [];
        this.placeholder = '';
        this.optionLabel = 'label';
        this.isOpen = false;
    }
    get formGroup() {
        return this.controlContainer?.control;
    }
    ngOnInit() {
        this.cdr.detectChanges();
    }
    handleDropdownOpen() {
        this.isOpen = true;
    }
    handleDropdownClose() {
        this.isOpen = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DropdownComponent, deps: [{ token: i1$4.ControlContainer, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DropdownComponent, isStandalone: true, selector: "dropdown", inputs: { label: "label", options: "options", placeholder: "placeholder", optionLabel: "optionLabel" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DropdownComponent),
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0, template: "<div class=\"flex flex-column \">\n  <div class=\"float-label-container\">\n    <label class=\"float-label\">{{label || 'Date'}}</label>\n    <i class=\"pi pi-chevron-down arrow-icon\" [class.open]=\"isOpen\"></i>\n  </div>\n  <p-dropdown class=\"custom-dropdown\" [formControl]=\"control\" [options]=\"options\"\n    [optionLabel]=\"optionLabel | translate\" [placeholder]=\"placeholder | translate\" (onShow)=\"handleDropdownOpen()\"\n    (onHide)=\"handleDropdownClose()\">\n    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n      <span *ngIf=\"selectedItem\">\n        {{ selectedItem.label | translate}}\n      </span>\n      <span *ngIf=\"!selectedItem \">\n        {{ placeholder | translate }}\n      </span>\n    </ng-template>\n    <ng-template pTemplate=\"option\" let-option>{{option.label | translate}} </ng-template>\n  </p-dropdown>\n</div>", styles: [".float-label-container{top:-3px;display:flex;font-size:12px;left:2px;color:#6c6c6c}.float-label-container:has(.open){color:#2e6be5}.float-label-container .arrow-icon{font-size:12px;height:12px;margin-left:8px;align-items:center;transition:transform .3s ease}.float-label-container .arrow-icon.open{transform:rotate(180deg)}::ng-deep .custom-dropdown .p-dropdown-label{font-weight:400;line-height:20px;color:#404040;font-size:14px;padding:4px 0}::ng-deep .custom-dropdown .p-dropdown{border:unset!important;box-shadow:unset!important;width:100%}::ng-deep .custom-dropdown .p-dropdown-trigger{display:none}\n"], dependencies: [{ kind: "ngmodule", type: MaLibModule }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: OverlayPanelModule }, { kind: "directive", type: i1.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "ngmodule", type: DropdownModule }, { kind: "component", type: i6$1.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "overlayDirection", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dropdown', standalone: true, imports: [
                        MaLibModule,
                        ReactiveFormsModule,
                        FormsModule,
                        OverlayPanelModule,
                        DropdownModule
                    ], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DropdownComponent),
                            multi: true,
                        },
                    ], template: "<div class=\"flex flex-column \">\n  <div class=\"float-label-container\">\n    <label class=\"float-label\">{{label || 'Date'}}</label>\n    <i class=\"pi pi-chevron-down arrow-icon\" [class.open]=\"isOpen\"></i>\n  </div>\n  <p-dropdown class=\"custom-dropdown\" [formControl]=\"control\" [options]=\"options\"\n    [optionLabel]=\"optionLabel | translate\" [placeholder]=\"placeholder | translate\" (onShow)=\"handleDropdownOpen()\"\n    (onHide)=\"handleDropdownClose()\">\n    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n      <span *ngIf=\"selectedItem\">\n        {{ selectedItem.label | translate}}\n      </span>\n      <span *ngIf=\"!selectedItem \">\n        {{ placeholder | translate }}\n      </span>\n    </ng-template>\n    <ng-template pTemplate=\"option\" let-option>{{option.label | translate}} </ng-template>\n  </p-dropdown>\n</div>", styles: [".float-label-container{top:-3px;display:flex;font-size:12px;left:2px;color:#6c6c6c}.float-label-container:has(.open){color:#2e6be5}.float-label-container .arrow-icon{font-size:12px;height:12px;margin-left:8px;align-items:center;transition:transform .3s ease}.float-label-container .arrow-icon.open{transform:rotate(180deg)}::ng-deep .custom-dropdown .p-dropdown-label{font-weight:400;line-height:20px;color:#404040;font-size:14px;padding:4px 0}::ng-deep .custom-dropdown .p-dropdown{border:unset!important;box-shadow:unset!important;width:100%}::ng-deep .custom-dropdown .p-dropdown-trigger{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$4.ControlContainer, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { label: [{
                type: Input
            }], options: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], optionLabel: [{
                type: Input
            }] } });

class FiltersComponent {
    get f() {
        return this.formGroup?.controls;
    }
    constructor(translate) {
        this.translate = translate;
        this.filters = [];
        this.tempFormValues = {};
    }
    ngOnInit() {
    }
    openFilterPanel() {
        this.tempFormValues = { ...this.formGroup.value };
    }
    applyFilters() {
        this.filters.forEach(filter => {
            this.formGroup?.get(filter.formControlName)?.setValue(this.tempFormValues[filter.formControlName]);
        });
    }
    getTooltipText(filter) {
        const control = this.tempFormValues[`${filter.formControlName}`];
        if (control) {
            const selectedOptions = filter.options.filter(option => control.includes(option[filter.optionValue || 'value']));
            return selectedOptions.length > 0
                ? selectedOptions.map(option => this.translate.instant(option[filter.optionLabel || 'label'])).join(', ')
                : '';
        }
        return '';
    }
    getNumFiltersWithValues() {
        return this.filters.reduce((count, filter) => {
            const value = this.f[filter.formControlName]?.value;
            return value && value.length ? count + 1 : count;
        }, 0);
    }
    clearFilter() {
        this.filters.forEach(filter => {
            this.formGroup?.get(filter.formControlName)?.setValue(null);
        });
    }
    formatFilter(s1, s2) {
        if (!s1)
            return '';
        return s1.toString().padStart(2, '0') + '/' + s2.toString().padStart(2, '0') + ' ' + this.translate.instant('selected');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FiltersComponent, deps: [{ token: i1$3.TranslateService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: FiltersComponent, isStandalone: true, selector: "filters", inputs: { formGroup: "formGroup", filters: "filters" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => FiltersComponent),
                multi: true,
            }
        ], ngImport: i0, template: "<div class=\"flex\">\n  <div class=\"list-multi-select \">\n    <div>\n      <button type=\"button\" pButton (click)=\"filterPanel.toggle($event)\" class=\"p-button-text button-custom-filter\">\n        <view-svg name=\"controlsAt\"></view-svg>\n\n        <span class=\"p-button-label\" [class.open]=\"filterPanel.overlayVisible\"\n          *ngIf=\"!getNumFiltersWithValues()\">{{'moreFilter' | translate}}</span>\n        <span class=\"p-button-label open\" *ngIf=\"getNumFiltersWithValues()\">{{'filtered' |\n          translate}} ({{getNumFiltersWithValues()}}/{{filters.length}})</span>\n      </button>\n      <p-overlayPanel #filterPanel (onShow)=\"openFilterPanel()\" [showCloseIcon]=\"false\" [style]=\"{width: '450px'}\">\n\n        <div class=\"filter-panel\">\n          <div class=\"filter-item\" *ngFor=\"let filter of filters\">\n            <div class=\"flex align-items-center justify-content-between\">\n              <label>{{ filter.label | translate }}</label>\n              <label *ngIf=\"filter.type =='multi-select' && tempFormValues[filter.formControlName] && filter.options\">\n                {{formatFilter(tempFormValues[filter.formControlName].length,filter.options.length)}}\n              </label>\n            </div>\n            <ng-container *ngIf=\"filter.type == 'multi-select'\">\n              <p-multiSelect [pTooltip]=\"getTooltipText(filter)\" appendTo=\"body\" tooltipPosition=\"bottom\"\n                [optionValue]=\"filter.optionValue || 'value'\" [options]=\"filter.options\" ngDefaultControl\n                [placeholder]=\"(filter.placeholder ||'all') | translate\"\n                [(ngModel)]=\"tempFormValues[filter.formControlName]\">\n\n                <ng-template let-selectedItems pTemplate=\"selectedItems\">\n                  <span *ngIf=\"selectedItems?.length > 0\">\n                    {{ getTooltipText(filter)}}\n                  </span>\n                  <span *ngIf=\"!selectedItems || selectedItems.length === 0\">\n                    {{ (filter.placeholder ||'all') | translate }}\n                  </span>\n                </ng-template>\n                <ng-template pTemplate=\"option\" let-option>{{ (option[filter.optionLabel || 'label' ]) | translate}}\n                </ng-template>\n              </p-multiSelect>\n            </ng-container>\n\n            <ng-container *ngIf=\"filter.type == 'select'\">\n              <p-dropdown [(ngModel)]=\"tempFormValues[filter.formControlName]\" [options]=\"filter.options\"\n                [optionValue]=\"filter.optionValue || 'value'\" (onShow)=\"handleDropdownOpen()\"\n                [placeholder]=\"(filter.placeholder ||'') | translate\" (onHide)=\"handleDropdownClose()\">\n                <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                  <span *ngIf=\"selectedItem\">\n                    {{ selectedItem[filter.optionLabel || 'label' ] | translate}}\n                  </span>\n                  <span *ngIf=\"!selectedItem \">\n                    {{ (filter.placeholder || '') | translate }}\n                  </span>\n                </ng-template>\n                <ng-template pTemplate=\"option\" let-option>{{option[filter.optionLabel || 'label' ] | translate}}\n                </ng-template>\n              </p-dropdown>\n            </ng-container>\n            <ng-container *ngIf=\"filter.type == 'text'\">\n              <input type=\"text\" pInputText [placeholder]=\"(filter.placeholder || '')| translate\"\n                [(ngModel)]=\"tempFormValues[filter.formControlName]\" />\n            </ng-container>\n          </div>\n          <div class=\"filter-actions\">\n            <button pButton type=\"button\" [label]=\"'cancel'| translate\" class=\"p-button-outlined\"\n              (click)=\"filterPanel.hide()\"></button>\n            <button pButton type=\"button\" [label]=\"'apply'| translate\" class=\"p-button-primary\"\n              (click)=\"applyFilters(); filterPanel.hide()\"></button>\n          </div>\n        </div>\n      </p-overlayPanel>\n    </div>\n  </div>\n  <ng-container *ngIf=\"getNumFiltersWithValues()\">\n    <div class=\"col-divider\"></div>\n    <div class=\"combo-multi-select \">\n      <div>\n        <button type=\"button\" pButton (click)=\"clearFilter()\" class=\"p-button-text button-custom-filter\">\n          <view-svg name=\"arrowReload\"></view-svg>\n          <span class=\"p-button-label\">{{'clearFilter' | translate}}</span>\n        </button>\n      </div>\n    </div>\n  </ng-container>\n</div>", styles: ["::ng-deep .list-multi-select{padding:1rem}::ng-deep .list-multi-select .p-button-label{padding-left:8px}::ng-deep .list-multi-select .p-button{padding-left:4px}::ng-deep .list-multi-select .p-overlaypanel:after,::ng-deep .list-multi-select .p-overlaypanel:before{display:none}.filter-panel{display:flex;flex-direction:column;gap:1rem;padding:1rem;max-height:65vh;overflow:auto}.filter-panel *{font-size:12px!important}.filter-panel .filter-item{display:flex;flex-direction:column}.filter-panel .filter-item label{font-size:14px;margin-bottom:.5rem;color:#333}.filter-panel .filter-item ::ng-deep .p-multiselect{width:100%}.filter-panel .filter-actions{display:flex;justify-content:flex-end;gap:1rem}.filter-panel .filter-actions button{min-width:100px}.button-custom-filter{border:unset!important;box-shadow:unset!important;background:#fff!important;color:#404040!important;transition:0s}.button-custom-filter span{font-weight:400}.button-custom-filter:has(.open){transition:0s;color:#2e6be5!important}.button-custom-filter:has(.open) ::ng-deep path{stroke:#2e6be5}.col-divider{height:40px;width:1px;background-color:#e6e6e6;align-self:center}::ng-deep .combo-multi-select{padding:1rem}::ng-deep .combo-multi-select .p-button-label{padding-left:8px}::ng-deep .combo-multi-select .p-button{padding-left:4px}::ng-deep .combo-multi-select .p-overlaypanel:after,::ng-deep .combo-multi-select .p-overlaypanel:before{display:none}::ng-deep .filter-item .p-dropdown{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: MaLibModule }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ViewSvgComponent, selector: "view-svg", inputs: ["name"] }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: OverlayPanelModule }, { kind: "component", type: i6$2.OverlayPanel, selector: "p-overlayPanel", inputs: ["dismissable", "showCloseIcon", "style", "styleClass", "appendTo", "autoZIndex", "ariaCloseLabel", "baseZIndex", "focusOnShow", "showTransitionOptions", "hideTransitionOptions"], outputs: ["onShow", "onHide"] }, { kind: "directive", type: i1.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "ngmodule", type: ButtonModule }, { kind: "directive", type: i2$2.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { kind: "ngmodule", type: InputTextModule }, { kind: "directive", type: i5.InputText, selector: "[pInputText]" }, { kind: "ngmodule", type: DropdownModule }, { kind: "component", type: i6$1.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "overlayDirection", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "ngmodule", type: MultiSelectModule }, { kind: "component", type: i10.MultiSelect, selector: "p-multiSelect", inputs: ["style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "label", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: FiltersComponent, decorators: [{
            type: Component,
            args: [{ selector: 'filters', standalone: true, imports: [
                        MaLibModule,
                        ReactiveFormsModule,
                        FormsModule,
                        OverlayPanelModule,
                        ButtonModule,
                        InputTextModule,
                        DropdownModule,
                        MultiSelectModule
                    ], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => FiltersComponent),
                            multi: true,
                        }
                    ], template: "<div class=\"flex\">\n  <div class=\"list-multi-select \">\n    <div>\n      <button type=\"button\" pButton (click)=\"filterPanel.toggle($event)\" class=\"p-button-text button-custom-filter\">\n        <view-svg name=\"controlsAt\"></view-svg>\n\n        <span class=\"p-button-label\" [class.open]=\"filterPanel.overlayVisible\"\n          *ngIf=\"!getNumFiltersWithValues()\">{{'moreFilter' | translate}}</span>\n        <span class=\"p-button-label open\" *ngIf=\"getNumFiltersWithValues()\">{{'filtered' |\n          translate}} ({{getNumFiltersWithValues()}}/{{filters.length}})</span>\n      </button>\n      <p-overlayPanel #filterPanel (onShow)=\"openFilterPanel()\" [showCloseIcon]=\"false\" [style]=\"{width: '450px'}\">\n\n        <div class=\"filter-panel\">\n          <div class=\"filter-item\" *ngFor=\"let filter of filters\">\n            <div class=\"flex align-items-center justify-content-between\">\n              <label>{{ filter.label | translate }}</label>\n              <label *ngIf=\"filter.type =='multi-select' && tempFormValues[filter.formControlName] && filter.options\">\n                {{formatFilter(tempFormValues[filter.formControlName].length,filter.options.length)}}\n              </label>\n            </div>\n            <ng-container *ngIf=\"filter.type == 'multi-select'\">\n              <p-multiSelect [pTooltip]=\"getTooltipText(filter)\" appendTo=\"body\" tooltipPosition=\"bottom\"\n                [optionValue]=\"filter.optionValue || 'value'\" [options]=\"filter.options\" ngDefaultControl\n                [placeholder]=\"(filter.placeholder ||'all') | translate\"\n                [(ngModel)]=\"tempFormValues[filter.formControlName]\">\n\n                <ng-template let-selectedItems pTemplate=\"selectedItems\">\n                  <span *ngIf=\"selectedItems?.length > 0\">\n                    {{ getTooltipText(filter)}}\n                  </span>\n                  <span *ngIf=\"!selectedItems || selectedItems.length === 0\">\n                    {{ (filter.placeholder ||'all') | translate }}\n                  </span>\n                </ng-template>\n                <ng-template pTemplate=\"option\" let-option>{{ (option[filter.optionLabel || 'label' ]) | translate}}\n                </ng-template>\n              </p-multiSelect>\n            </ng-container>\n\n            <ng-container *ngIf=\"filter.type == 'select'\">\n              <p-dropdown [(ngModel)]=\"tempFormValues[filter.formControlName]\" [options]=\"filter.options\"\n                [optionValue]=\"filter.optionValue || 'value'\" (onShow)=\"handleDropdownOpen()\"\n                [placeholder]=\"(filter.placeholder ||'') | translate\" (onHide)=\"handleDropdownClose()\">\n                <ng-template let-selectedItem pTemplate=\"selectedItem\">\n                  <span *ngIf=\"selectedItem\">\n                    {{ selectedItem[filter.optionLabel || 'label' ] | translate}}\n                  </span>\n                  <span *ngIf=\"!selectedItem \">\n                    {{ (filter.placeholder || '') | translate }}\n                  </span>\n                </ng-template>\n                <ng-template pTemplate=\"option\" let-option>{{option[filter.optionLabel || 'label' ] | translate}}\n                </ng-template>\n              </p-dropdown>\n            </ng-container>\n            <ng-container *ngIf=\"filter.type == 'text'\">\n              <input type=\"text\" pInputText [placeholder]=\"(filter.placeholder || '')| translate\"\n                [(ngModel)]=\"tempFormValues[filter.formControlName]\" />\n            </ng-container>\n          </div>\n          <div class=\"filter-actions\">\n            <button pButton type=\"button\" [label]=\"'cancel'| translate\" class=\"p-button-outlined\"\n              (click)=\"filterPanel.hide()\"></button>\n            <button pButton type=\"button\" [label]=\"'apply'| translate\" class=\"p-button-primary\"\n              (click)=\"applyFilters(); filterPanel.hide()\"></button>\n          </div>\n        </div>\n      </p-overlayPanel>\n    </div>\n  </div>\n  <ng-container *ngIf=\"getNumFiltersWithValues()\">\n    <div class=\"col-divider\"></div>\n    <div class=\"combo-multi-select \">\n      <div>\n        <button type=\"button\" pButton (click)=\"clearFilter()\" class=\"p-button-text button-custom-filter\">\n          <view-svg name=\"arrowReload\"></view-svg>\n          <span class=\"p-button-label\">{{'clearFilter' | translate}}</span>\n        </button>\n      </div>\n    </div>\n  </ng-container>\n</div>", styles: ["::ng-deep .list-multi-select{padding:1rem}::ng-deep .list-multi-select .p-button-label{padding-left:8px}::ng-deep .list-multi-select .p-button{padding-left:4px}::ng-deep .list-multi-select .p-overlaypanel:after,::ng-deep .list-multi-select .p-overlaypanel:before{display:none}.filter-panel{display:flex;flex-direction:column;gap:1rem;padding:1rem;max-height:65vh;overflow:auto}.filter-panel *{font-size:12px!important}.filter-panel .filter-item{display:flex;flex-direction:column}.filter-panel .filter-item label{font-size:14px;margin-bottom:.5rem;color:#333}.filter-panel .filter-item ::ng-deep .p-multiselect{width:100%}.filter-panel .filter-actions{display:flex;justify-content:flex-end;gap:1rem}.filter-panel .filter-actions button{min-width:100px}.button-custom-filter{border:unset!important;box-shadow:unset!important;background:#fff!important;color:#404040!important;transition:0s}.button-custom-filter span{font-weight:400}.button-custom-filter:has(.open){transition:0s;color:#2e6be5!important}.button-custom-filter:has(.open) ::ng-deep path{stroke:#2e6be5}.col-divider{height:40px;width:1px;background-color:#e6e6e6;align-self:center}::ng-deep .combo-multi-select{padding:1rem}::ng-deep .combo-multi-select .p-button-label{padding-left:8px}::ng-deep .combo-multi-select .p-button{padding-left:4px}::ng-deep .combo-multi-select .p-overlaypanel:after,::ng-deep .combo-multi-select .p-overlaypanel:before{display:none}::ng-deep .filter-item .p-dropdown{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$3.TranslateService }]; }, propDecorators: { formGroup: [{
                type: Input
            }], filters: [{
                type: Input
            }] } });

class ErrorMessageComponent {
    get formatLabel() {
        return this.label;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ErrorMessageComponent, isStandalone: true, selector: "ord-error-message", inputs: { errors: "errors", label: "label", customErrorText: "customErrorText" }, ngImport: i0, template: "<ng-container *ngIf=\"errors && customErrorText\">\n  {{customErrorText | translate}}\n</ng-container>\n<ng-container *ngIf=\"errors && !customErrorText\">\n  <ng-container *ngIf=\"errors && errors['required']\">\n    {{'error.isRequired'|translate: {field: formatLabel || \"This field\"} }}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['minlength']\">\n    {{'error.minLength'|translate: {field: formatLabel || \"This field\", value: errors[\"minlength\"].requiredLength } }}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['maxlength']\">\n    {{'error.maxLength'|translate: {field: formatLabel || \"This field\", value: errors[\"maxlength\"].requiredLength } }}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['min']\">\n    {{'error.min'|translate: {field: formatLabel || \"This field\", value: errors[\"min\"].min } }}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['max']\">\n    {{'error.max'|translate: {field: formatLabel || \"This field\", value: errors[\"max\"].max } }}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['email']\">\n    {{'error.email'|translate}}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['pattern']\">\n    {{'error.pattern'|translate: {field: formatLabel || \"This field\"} }}\n  </ng-container>\n</ng-container>", dependencies: [{ kind: "ngmodule", type: MaLibModule }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ErrorMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ord-error-message', standalone: true, imports: [
                        MaLibModule,
                    ], template: "<ng-container *ngIf=\"errors && customErrorText\">\n  {{customErrorText | translate}}\n</ng-container>\n<ng-container *ngIf=\"errors && !customErrorText\">\n  <ng-container *ngIf=\"errors && errors['required']\">\n    {{'error.isRequired'|translate: {field: formatLabel || \"This field\"} }}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['minlength']\">\n    {{'error.minLength'|translate: {field: formatLabel || \"This field\", value: errors[\"minlength\"].requiredLength } }}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['maxlength']\">\n    {{'error.maxLength'|translate: {field: formatLabel || \"This field\", value: errors[\"maxlength\"].requiredLength } }}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['min']\">\n    {{'error.min'|translate: {field: formatLabel || \"This field\", value: errors[\"min\"].min } }}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['max']\">\n    {{'error.max'|translate: {field: formatLabel || \"This field\", value: errors[\"max\"].max } }}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['email']\">\n    {{'error.email'|translate}}\n  </ng-container>\n\n  <ng-container *ngIf=\"errors && errors['pattern']\">\n    {{'error.pattern'|translate: {field: formatLabel || \"This field\"} }}\n  </ng-container>\n</ng-container>" }]
        }], propDecorators: { errors: [{
                type: Input
            }], label: [{
                type: Input
            }], customErrorText: [{
                type: Input
            }] } });

class ControlComponent extends BaseControlValueAccessor {
    constructor(controlContainer) {
        super(controlContainer);
        this.controlContainer = controlContainer;
        this.type = 'text';
        this.label = '';
        this.labelClass = '';
        this.placeholder = '';
        this.isRequired = false;
        this.allowClear = true;
        this.labelSpan = 4;
        this.selectLabel = 'label';
        this.selectValue = 'value';
        this.options = [];
        this.isShowTime = false;
        this.formatDate = 'dd/mm/yy';
        this.minDate = new Date('1900/01/01');
        this.maxlength = 0;
        this.numNight = 1;
    }
    get formGroup() {
        return this.controlContainer?.control;
    }
    ngOnInit() {
        if (this.maxlength == 0) {
            if (this.type === 'text') {
                this.maxlength = 200;
            }
            else if (this.type === 'number') {
                this.maxlength = 14;
            }
            else if (this.type === 'textarea') {
                this.maxlength = 500;
            }
        }
    }
    onInputNumberSliceMaxLength(event) {
        if (this.maxlength < 1) {
            return;
        }
        const input = event.target;
        const value = input.value;
        if (value.length > this.maxlength) {
            input.value = value.slice(0, this.maxlength);
            this.control.setValue(input.value === '' || input.value === null || input.value === undefined || Number.isNaN(input.value) ? null : Number(input.value));
        }
    }
    checkDate() {
        setTimeout(() => {
            const container = document.querySelector('.p-datepicker-group-container');
            if (!container)
                return;
            const childDivs = container.querySelectorAll('.range-date-first');
            const childDiv2s = container.querySelectorAll('.range-date-last');
            childDivs.forEach(div => {
                div.classList.remove('range-date-first', 'range-date-last');
            });
            childDiv2s.forEach(div => {
                div.classList.remove('range-date-first', 'range-date-last');
            });
            if (this.control.value && (this.control.value.length > 0 || this.type === 'date')) {
                const labels = container.querySelectorAll('span.p-highlight:not(.p-disabled)');
                if (labels.length > 0) {
                    labels[0].parentElement.classList.add('range-date-first');
                    labels[labels.length - 1].parentElement.classList.add('range-date-last');
                }
            }
        }, 50);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ControlComponent, deps: [{ token: i1$4.ControlContainer, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ControlComponent, isStandalone: true, selector: "app-control", inputs: { type: "type", label: "label", labelClass: "labelClass", placeholder: "placeholder", isRequired: "isRequired", allowClear: "allowClear", labelSpan: "labelSpan", selectLabel: "selectLabel", selectValue: "selectValue", options: "options", isShowTime: "isShowTime", formatDate: "formatDate", minDate: "minDate", maxDate: "maxDate", maxlength: "maxlength", maxNumber: "maxNumber", minNumber: "minNumber" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ControlComponent),
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *ngIf=\"type === 'text'\">\n  <div class=\"flex flex-column gap-2\">\n    <label *ngIf=\"label\" [class]=\"labelClass\">{{ label }}\n      <ng-container [ngTemplateOutlet]=\"required\" *ngIf=\"isRequired\"></ng-container>\n    </label>\n\n    <input pInputText [formControl]=\"control\" [maxlength]=\"maxlength\" [placeholder]=\"(placeholder || '&nbsp;') | translate\" />\n  </div>\n</ng-container>\n<ng-container *ngIf=\"type === 'number'\">\n\n</ng-container>\n<ng-container *ngIf=\"type === 'textarea'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'select'\">\n  <div class=\"flex flex-column gap-2 dropdown-control\">\n\n    <label *ngIf=\"label\" [class]=\"labelClass\">{{ label }}\n      <ng-container [ngTemplateOutlet]=\"required\" *ngIf=\"isRequired\"></ng-container>\n    </label>\n    <p-dropdown [options]=\"options\" [formControl]=\"control\" [optionLabel]=\"selectLabel\" [optionValue]=\"selectValue\"\n      appendTo=\"body\" [placeholder]=\"(placeholder || '&nbsp; ') | translate\">\n      <ng-template let-selectedItem pTemplate=\"selectedItem\">\n        <span *ngIf=\"selectedItem && control.value\">\n          {{ selectedItem.label | translate}}\n        </span>\n        <span *ngIf=\"!(selectedItem  && control.value) \">\n          {{ (placeholder || '&nbsp;') | translate }}\n        </span>\n      </ng-template>\n      <ng-template pTemplate=\"option\" let-option>{{option.label | translate}} </ng-template>\n    </p-dropdown>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"type === 'date'\">\n  <div class=\"date-picker-control\">\n    <p-calendar  [firstDayOfWeek]=\"1\"  [formControl]=\"control\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" #calendar [dateFormat]=\"formatDate\"\n      appendTo=\"body\" [placeholder]=\"placeholder || ('dd/mm/yyyy'| translate)\"></p-calendar>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"type === 'date-range'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'date-range-time'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'time'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'checkbox'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'radio-group'\">\n</ng-container>\n\n\n<ng-container *ngIf=\"type === 'multi-select'\">\n</ng-container>\n\n<!-- <ng-template #error let-control> -->\n<div class=\"mt-2 error\" *ngIf=\"control && control.errors && (control.dirty || control.touched)\">\n  <ord-error-message [errors]=\"control.errors\" [customErrorText]=\"customErrorText\"\n    [label]=\"label | translate\"></ord-error-message>\n</div>\n<!-- </ng-template> -->\n\n<ng-template #required>\n  <span *ngIf=\"isRequired\" style=\"display: inline-block;\n      margin-left: 4px;\n      color: #ff4d4f;\n      font-size: 14px;\n      font-family: SimSun, sans-serif;\n      line-height: 1;\">*</span>\n</ng-template>", styles: [".error{color:#ff4d4f}::ng-deep .dropdown-control .p-dropdown{width:100%}::ng-deep .date-picker-control{display:flex;width:100%}::ng-deep .date-picker-control .p-inputwrapper{width:100%}::ng-deep .date-picker-control .p-inputwrapper-filled{width:100%}::ng-deep .date-picker-control .p-calendar{width:100%}\n"], dependencies: [{ kind: "ngmodule", type: MaLibModule }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$4.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i1$4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: InputTextModule }, { kind: "directive", type: i5.InputText, selector: "[pInputText]" }, { kind: "ngmodule", type: CalendarModule }, { kind: "component", type: i4$1.Calendar, selector: "p-calendar", inputs: ["style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale", "view", "defaultDate"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }, { kind: "directive", type: i1.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "ngmodule", type: DropdownModule }, { kind: "component", type: i6$1.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "overlayDirection", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: ErrorMessageComponent, selector: "ord-error-message", inputs: ["errors", "label", "customErrorText"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-control', standalone: true, imports: [
                        MaLibModule,
                        ReactiveFormsModule,
                        InputTextModule,
                        CalendarModule,
                        DropdownModule,
                        ErrorMessageComponent
                    ], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ControlComponent),
                            multi: true,
                        },
                    ], template: "<ng-container *ngIf=\"type === 'text'\">\n  <div class=\"flex flex-column gap-2\">\n    <label *ngIf=\"label\" [class]=\"labelClass\">{{ label }}\n      <ng-container [ngTemplateOutlet]=\"required\" *ngIf=\"isRequired\"></ng-container>\n    </label>\n\n    <input pInputText [formControl]=\"control\" [maxlength]=\"maxlength\" [placeholder]=\"(placeholder || '&nbsp;') | translate\" />\n  </div>\n</ng-container>\n<ng-container *ngIf=\"type === 'number'\">\n\n</ng-container>\n<ng-container *ngIf=\"type === 'textarea'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'select'\">\n  <div class=\"flex flex-column gap-2 dropdown-control\">\n\n    <label *ngIf=\"label\" [class]=\"labelClass\">{{ label }}\n      <ng-container [ngTemplateOutlet]=\"required\" *ngIf=\"isRequired\"></ng-container>\n    </label>\n    <p-dropdown [options]=\"options\" [formControl]=\"control\" [optionLabel]=\"selectLabel\" [optionValue]=\"selectValue\"\n      appendTo=\"body\" [placeholder]=\"(placeholder || '&nbsp; ') | translate\">\n      <ng-template let-selectedItem pTemplate=\"selectedItem\">\n        <span *ngIf=\"selectedItem && control.value\">\n          {{ selectedItem.label | translate}}\n        </span>\n        <span *ngIf=\"!(selectedItem  && control.value) \">\n          {{ (placeholder || '&nbsp;') | translate }}\n        </span>\n      </ng-template>\n      <ng-template pTemplate=\"option\" let-option>{{option.label | translate}} </ng-template>\n    </p-dropdown>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"type === 'date'\">\n  <div class=\"date-picker-control\">\n    <p-calendar  [firstDayOfWeek]=\"1\"  [formControl]=\"control\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" #calendar [dateFormat]=\"formatDate\"\n      appendTo=\"body\" [placeholder]=\"placeholder || ('dd/mm/yyyy'| translate)\"></p-calendar>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"type === 'date-range'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'date-range-time'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'time'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'checkbox'\">\n</ng-container>\n\n<ng-container *ngIf=\"type === 'radio-group'\">\n</ng-container>\n\n\n<ng-container *ngIf=\"type === 'multi-select'\">\n</ng-container>\n\n<!-- <ng-template #error let-control> -->\n<div class=\"mt-2 error\" *ngIf=\"control && control.errors && (control.dirty || control.touched)\">\n  <ord-error-message [errors]=\"control.errors\" [customErrorText]=\"customErrorText\"\n    [label]=\"label | translate\"></ord-error-message>\n</div>\n<!-- </ng-template> -->\n\n<ng-template #required>\n  <span *ngIf=\"isRequired\" style=\"display: inline-block;\n      margin-left: 4px;\n      color: #ff4d4f;\n      font-size: 14px;\n      font-family: SimSun, sans-serif;\n      line-height: 1;\">*</span>\n</ng-template>", styles: [".error{color:#ff4d4f}::ng-deep .dropdown-control .p-dropdown{width:100%}::ng-deep .date-picker-control{display:flex;width:100%}::ng-deep .date-picker-control .p-inputwrapper{width:100%}::ng-deep .date-picker-control .p-inputwrapper-filled{width:100%}::ng-deep .date-picker-control .p-calendar{width:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$4.ControlContainer, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { type: [{
                type: Input
            }], label: [{
                type: Input
            }], labelClass: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], isRequired: [{
                type: Input
            }], allowClear: [{
                type: Input
            }], labelSpan: [{
                type: Input
            }], selectLabel: [{
                type: Input
            }], selectValue: [{
                type: Input
            }], options: [{
                type: Input
            }], isShowTime: [{
                type: Input
            }], formatDate: [{
                type: Input
            }], minDate: [{
                type: Input
            }], maxDate: [{
                type: Input
            }], maxlength: [{
                type: Input
            }], maxNumber: [{
                type: Input
            }], minNumber: [{
                type: Input
            }] } });

class CardFormComponent extends BaseControlValueAccessor {
    get f() {
        return this.formGroup?.controls;
    }
    constructor(controlContainer) {
        super(controlContainer);
        this.controlContainer = controlContainer;
    }
    ngOnInit() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardFormComponent, deps: [{ token: i1$4.ControlContainer, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CardFormComponent, isStandalone: true, selector: "app-card-form", inputs: { header: "header", data: "data", cols: "cols", formGroup: "formGroup" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CardFormComponent),
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0, template: "<p-card class='dynamic-card' [header]=\"header | translate\"\n  [style]=\"{width: '100%', maxWidth: '100%', overflow: 'hidden'}\">\n  <div class=\"grid pt-4\">\n    <ng-container *ngFor=\"let col of cols\">\n      <ng-container *ngIf=\"!col.hidden\">\n        <div class=\"col-6 xl:col-6 label\"> {{ col.label | translate }}\n          <ng-container [ngTemplateOutlet]=\"required\" *ngIf=\"col.isRequired\"></ng-container>\n\n        </div>\n        <div class=\"col-6 xl:col-6\">\n          <ng-container>\n            <app-control [type]=\"col.type\" [formControl]=\"f[col.formControlName]\"\n              [optionValue]=\"col.optionValue || 'value'\" [options]=\"col.options\" [isRequired]=\"col.isRequired\"\n              [optionLabel]=\"col.optionLabel || 'label'\" [placeholder]=\"(col.placeholder || '&nbsp;') | translate\"\n              [label]=\"col.label\" labelClass=\"hidden\" />\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</p-card>\n\n<ng-template #required>\n  <span style=\"display: inline-block;\n      margin-left: 4px;\n      color: #ff4d4f;\n      font-size: 14px;\n      font-family: SimSun, sans-serif;\n      line-height: 1;\">*</span>\n</ng-template>", styles: [".flex-card{justify-content:space-between}::ng-deep .dynamic-card{width:100%;max-width:100%;box-sizing:border-box}::ng-deep .dynamic-card .p-card .p-card-title{font-size:16px;font-weight:600}::ng-deep .dynamic-card .p-card .p-card-body{padding:20px 24px}::ng-deep .dynamic-card .col-6{padding:8px 16px}::ng-deep .dynamic-card .p-card .p-card-content{padding:0}.value{overflow:hidden;color:#404040;font-size:14px;font-weight:500;line-height:20px;width:-moz-fit-content;width:fit-content;max-width:100%;white-space:nowrap;text-overflow:ellipsis;display:block}.label{color:#6c6c6c;font-size:14px;font-style:normal;font-weight:400;line-height:20px}::ng-deep .customtooltip .p-tooltip-text{background-color:#fff;color:#404040;width:max-content}::ng-deep .customtooltip .p-tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;border-width:0 6px 6px 6px;border-color:transparent transparent #fff transparent;top:-2px;left:30%;transform:translate(-50%);z-index:1}\n"], dependencies: [{ kind: "ngmodule", type: CardModule }, { kind: "component", type: i1$2.Card, selector: "p-card", inputs: ["header", "subheader", "style", "styleClass"] }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: TooltipModule }, { kind: "ngmodule", type: MaLibModule }, { kind: "pipe", type: i1$3.TranslatePipe, name: "translate" }, { kind: "component", type: ControlComponent, selector: "app-control", inputs: ["type", "label", "labelClass", "placeholder", "isRequired", "allowClear", "labelSpan", "selectLabel", "selectValue", "options", "isShowTime", "formatDate", "minDate", "maxDate", "maxlength", "maxNumber", "minNumber"] }, { kind: "ngmodule", type: TranslateModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CardFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-card-form', standalone: true, imports: [CardModule, CommonModule, TooltipModule, MaLibModule, ControlComponent, TranslateModule], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CardFormComponent),
                            multi: true,
                        },
                    ], template: "<p-card class='dynamic-card' [header]=\"header | translate\"\n  [style]=\"{width: '100%', maxWidth: '100%', overflow: 'hidden'}\">\n  <div class=\"grid pt-4\">\n    <ng-container *ngFor=\"let col of cols\">\n      <ng-container *ngIf=\"!col.hidden\">\n        <div class=\"col-6 xl:col-6 label\"> {{ col.label | translate }}\n          <ng-container [ngTemplateOutlet]=\"required\" *ngIf=\"col.isRequired\"></ng-container>\n\n        </div>\n        <div class=\"col-6 xl:col-6\">\n          <ng-container>\n            <app-control [type]=\"col.type\" [formControl]=\"f[col.formControlName]\"\n              [optionValue]=\"col.optionValue || 'value'\" [options]=\"col.options\" [isRequired]=\"col.isRequired\"\n              [optionLabel]=\"col.optionLabel || 'label'\" [placeholder]=\"(col.placeholder || '&nbsp;') | translate\"\n              [label]=\"col.label\" labelClass=\"hidden\" />\n          </ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </div>\n</p-card>\n\n<ng-template #required>\n  <span style=\"display: inline-block;\n      margin-left: 4px;\n      color: #ff4d4f;\n      font-size: 14px;\n      font-family: SimSun, sans-serif;\n      line-height: 1;\">*</span>\n</ng-template>", styles: [".flex-card{justify-content:space-between}::ng-deep .dynamic-card{width:100%;max-width:100%;box-sizing:border-box}::ng-deep .dynamic-card .p-card .p-card-title{font-size:16px;font-weight:600}::ng-deep .dynamic-card .p-card .p-card-body{padding:20px 24px}::ng-deep .dynamic-card .col-6{padding:8px 16px}::ng-deep .dynamic-card .p-card .p-card-content{padding:0}.value{overflow:hidden;color:#404040;font-size:14px;font-weight:500;line-height:20px;width:-moz-fit-content;width:fit-content;max-width:100%;white-space:nowrap;text-overflow:ellipsis;display:block}.label{color:#6c6c6c;font-size:14px;font-style:normal;font-weight:400;line-height:20px}::ng-deep .customtooltip .p-tooltip-text{background-color:#fff;color:#404040;width:max-content}::ng-deep .customtooltip .p-tooltip-arrow{width:0;height:0;border-style:solid;position:absolute;border-width:0 6px 6px 6px;border-color:transparent transparent #fff transparent;top:-2px;left:30%;transform:translate(-50%);z-index:1}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$4.ControlContainer, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { header: [{
                type: Input
            }], data: [{
                type: Input
            }], cols: [{
                type: Input
            }], formGroup: [{
                type: Input
            }] } });

/*
 * Public API Surface of ma-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CardComponent, CardFormComponent, ConfigDisplayComponent, ControlComponent, CurrencyPipe, DatePickerComponent, DateRangePickerComponent, DropdownComponent, FiltersComponent, MaLibComponent, MaLibModule, MaPermissionDirective, MaService, TableComponent, ViewSvgComponent, convertDateToCustomFormat };
//# sourceMappingURL=ma-lib.mjs.map
