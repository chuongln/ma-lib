import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class SvgService {
    private http;
    private environment;
    private cache;
    constructor(http: HttpClient, environment: any);
    getSvg(iconName: string): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SvgService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SvgService>;
}
