import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MaService {
    private messageService;
    private http;
    private environment;
    private loadingSubject;
    private permissions;
    private cache;
    constructor(messageService: MessageService, http: HttpClient, environment: any);
    handleError(error: any): void;
    showLoading(): void;
    hideLoading(): void;
    getLoading(): Observable<boolean>;
    setPermissions(perms: string[]): void;
    getPermissions(): string[];
    hasPermission(p: string | string[]): boolean;
    modifyDateByUTC(date: Date, isGetMethod?: boolean): Date;
    getSvg(iconName: string): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaService>;
}
