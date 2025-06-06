import { PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CurrencyPipe implements PipeTransform {
    transform(value: number, currency?: string, locale?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CurrencyPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<CurrencyPipe, "customCurrency", false>;
}
