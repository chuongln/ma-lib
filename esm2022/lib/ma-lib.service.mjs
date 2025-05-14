import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
export class MaService {
    constructor(messageService) {
        this.messageService = messageService;
        this.loadingSubject = new BehaviorSubject(false);
        this.downloadSubject = new BehaviorSubject(null);
        this.permissions = [];
        this.merchants = [];
        this.userInfo = null;
    }
    handleError(err) {
        let error = err?.error?.message || err;
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
export function convertDateToCustomFormat(dateString, haveHours = true) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1saWIvc3JjL2xpYi9tYS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQTZCLE1BQU0sTUFBTSxDQUFDOzs7QUFLbEUsTUFBTSxPQUFPLFNBQVM7SUFZcEIsWUFDVSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFWaEMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVyRCxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBR3BELGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFRLElBQUksQ0FBQztJQUl6QixDQUFDO0lBR0wsV0FBVyxDQUFDLEdBQVE7UUFDbEIsSUFBSSxLQUFLLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksR0FBRyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRSxLQUFLLElBQUksK0JBQStCO1NBQ2pELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxPQUFZO1FBQzNCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBQ3RCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxPQUFPO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFD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QUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7S0FDOUQ7O1FBQU0sT0FBTyxHQUFHLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUM7QUFDMUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hU2VydmljZSB7XG5cblxuICBwcml2YXRlIGxvYWRpbmdTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJpdmF0ZSBkb3dubG9hZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cblxuICBwcml2YXRlIHBlcm1pc3Npb25zOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIG1lcmNoYW50czogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSB1c2VySW5mbzogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZVxuICApIHsgfVxuXG5cbiAgaGFuZGxlRXJyb3IoZXJyOiBhbnkpIHtcbiAgICBsZXQgZXJyb3IgPSBlcnI/LmVycm9yPy5tZXNzYWdlIHx8IGVycjtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICBzZXZlcml0eTogJ2Vycm9yJyxcbiAgICAgIHN1bW1hcnk6ICdFcnJvcicsXG4gICAgICBkZXRhaWw6IGVycm9yIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLidcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dOb3RpZmljYXRpb24obWVzc2FnZTogYW55KSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgIHN1bW1hcnk6ICdTdWNjZXNzJyxcbiAgICAgIGRldGFpbDogbWVzc2FnZVxuICAgIH0pO1xuICB9XG4gIHNob3dMb2FkaW5nKCkge1xuICAgIHRoaXMubG9hZGluZ1N1YmplY3QubmV4dCh0cnVlKTtcbiAgfVxuICBoaWRlTG9hZGluZygpIHtcbiAgICB0aGlzLmxvYWRpbmdTdWJqZWN0Lm5leHQoZmFsc2UpO1xuICB9XG4gIGdldExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZ1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0UGVybWlzc2lvbnMocGVybXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5wZXJtaXNzaW9ucyA9IHBlcm1zO1xuICB9XG5cbiAgcHVibGljIGdldFBlcm1pc3Npb25zKCkge1xuICAgIHJldHVybiB0aGlzLnBlcm1pc3Npb25zO1xuICB9XG5cbiAgaGFzUGVybWlzc2lvbihwOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KHApID8gcCA6IFtwXTtcbiAgICByZXR1cm4gbGlzdC5zb21lKHggPT4gdGhpcy5wZXJtaXNzaW9ucy5pbmNsdWRlcyh4KSk7XG4gIH1cblxuXG4gIHNldERvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRvd25sb2FkU3ViamVjdC5uZXh0KGZpbGVOYW1lKTtcbiAgfVxuICBnZXRTdGF0dXNEb3dubG9hZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb3dubG9hZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBmaWx0ZXJNZXJjaGFudHNCeVR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMubWVyY2hhbnRzLmZpbHRlcigobWVyY2hhbnQpID0+IG1lcmNoYW50LnR5cGUgPT09IHR5cGUpO1xuICB9XG5cbiAgcHVibGljIHNldE1lcmNoYW50KHBlcm1zOiBhbnlbXSkge1xuICAgIHRoaXMubWVyY2hhbnRzID0gcGVybXM7XG4gIH1cbiAgcHVibGljIHNldFVzZXJJbmZvKHBlcm1zOiBhbnlbXSkge1xuICAgIHRoaXMudXNlckluZm8gPSBwZXJtcztcbiAgfVxuICBwdWJsaWMgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHRoaXMudXNlckluZm87XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZVRvQ3VzdG9tRm9ybWF0KGRhdGVTdHJpbmc6IHN0cmluZywgaGF2ZUhvdXJzID0gdHJ1ZSk6IHN0cmluZyB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKTtcblxuICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGVzID0gU3RyaW5nKGRhdGUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcblxuICBob3VycyA9IGhvdXJzICUgMTI7XG4gIGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyO1xuICBpZiAoaGF2ZUhvdXJzKSB7XG4gICAgcmV0dXJuIGAke2RheX0tJHttb250aH0tJHt5ZWFyfSAke2hvdXJzfToke21pbnV0ZXN9ICR7YW1wbX1gO1xuICB9IGVsc2UgcmV0dXJuIGAke2RheX0tJHttb250aH0tJHt5ZWFyfWA7XG59XG4iXX0=