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
    }
    handleError(error) {
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: error?.message || 'An unexpected error occurred.'
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
    modifyDateByUTC(date, isGetMethod = true) {
        const localUTC = (new Date().getTimezoneOffset() / 60);
        date.setHours(date.getHours() + (!isGetMethod ? -localUTC : localUTC));
        return date;
    }
    setDownload(fileName) {
        this.downloadSubject.next(fileName);
    }
    getStatusDownload() {
        return this.downloadSubject.asObservable();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1saWIvc3JjL2xpYi9tYS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQTZCLE1BQU0sTUFBTSxDQUFDOzs7QUFLbEUsTUFBTSxPQUFPLFNBQVM7SUFVcEIsWUFDVSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSaEMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVyRCxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBR3BELGdCQUFXLEdBQWEsRUFBRSxDQUFDO0lBSS9CLENBQUM7SUFHTCxXQUFXLENBQUMsS0FBVTtRQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUN0QixRQUFRLEVBQUUsT0FBTztZQUNqQixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSwrQkFBK0I7U0FDMUQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixDQUFDLE9BQVk7UUFDM0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsUUFBUSxFQUFFLFNBQVM7WUFDbkIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFTSxjQUFjLENBQUMsS0FBZTtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBRU0sY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELGFBQWEsQ0FBQyxDQUFvQjtRQUNoQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBR0QsZUFBZSxDQUFDLElBQVUsRUFBRSxXQUFXLEdBQUcsSUFBSTtRQUM1QyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFHRCxXQUFXLENBQUMsUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM3QyxDQUFDOytHQWxFVSxTQUFTO21IQUFULFNBQVMsY0FGUixNQUFNOzs0RkFFUCxTQUFTO2tCQUhyQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hU2VydmljZSB7XG5cblxuICBwcml2YXRlIGxvYWRpbmdTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJpdmF0ZSBkb3dubG9hZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cblxuICBwcml2YXRlIHBlcm1pc3Npb25zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlXG4gICkgeyB9XG5cblxuICBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXG4gICAgICBzdW1tYXJ5OiAnRXJyb3InLFxuICAgICAgZGV0YWlsOiBlcnJvcj8ubWVzc2FnZSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC4nXG4gICAgfSk7XG4gIH1cblxuICBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2U6IGFueSkge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgIHNldmVyaXR5OiAnc3VjY2VzcycsXG4gICAgICBzdW1tYXJ5OiAnU3VjY2VzcycsXG4gICAgICBkZXRhaWw6IG1lc3NhZ2VcbiAgICB9KTtcbiAgfVxuICBzaG93TG9hZGluZygpIHtcbiAgICB0aGlzLmxvYWRpbmdTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gIH1cbiAgaGlkZUxvYWRpbmcoKSB7XG4gICAgdGhpcy5sb2FkaW5nU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgfVxuICBnZXRMb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmdTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIHNldFBlcm1pc3Npb25zKHBlcm1zOiBzdHJpbmdbXSkge1xuICAgIHRoaXMucGVybWlzc2lvbnMgPSBwZXJtcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRQZXJtaXNzaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9ucztcbiAgfVxuXG4gIGhhc1Blcm1pc3Npb24ocDogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShwKSA/IHAgOiBbcF07XG4gICAgcmV0dXJuIGxpc3Quc29tZSh4ID0+IHRoaXMucGVybWlzc2lvbnMuaW5jbHVkZXMoeCkpO1xuICB9XG5cblxuICBtb2RpZnlEYXRlQnlVVEMoZGF0ZTogRGF0ZSwgaXNHZXRNZXRob2QgPSB0cnVlKSB7XG4gICAgY29uc3QgbG9jYWxVVEMgPSAobmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjApO1xuICAgIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRIb3VycygpICsgKCFpc0dldE1ldGhvZCA/IC1sb2NhbFVUQyA6IGxvY2FsVVRDKSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuXG4gIHNldERvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRvd25sb2FkU3ViamVjdC5uZXh0KGZpbGVOYW1lKTtcbiAgfVxuICBnZXRTdGF0dXNEb3dubG9hZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb3dubG9hZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxufVxuIl19