import { MessageService } from 'primeng/api';
import * as i0 from "@angular/core";
export declare class MaService {
    private messageService;
    private loadingSubject;
    constructor(messageService: MessageService);
    handleError(error: any): void;
    showLoading(): void;
    hideLoading(): void;
    getLoading(): import("rxjs").Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MaService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MaService>;
}
