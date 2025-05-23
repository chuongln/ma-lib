import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ma-lib.component";
import * as i2 from "./ma-directives/ma-permission.directive";
import * as i3 from "./pipe/currency.pipe";
import * as i4 from "./component/view-svg/view-svg.component";
import * as i5 from "@angular/common";
import * as i6 from "primeng/tooltip";
import * as i7 from "@ngx-translate/core";
export declare class MaLibModule {
    static forRoot(environment: any): ModuleWithProviders<MaLibModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaLibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MaLibModule, [typeof i1.MaLibComponent, typeof i2.MaPermissionDirective, typeof i3.CurrencyPipe, typeof i4.ViewSvgComponent], [typeof i5.CommonModule, typeof i6.TooltipModule, typeof i7.TranslateModule], [typeof i1.MaLibComponent, typeof i2.MaPermissionDirective, typeof i7.TranslateModule, typeof i5.CommonModule, typeof i4.ViewSvgComponent, typeof i3.CurrencyPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MaLibModule>;
}
