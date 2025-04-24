import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
export class MaService {
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
    modifyDateByUTC(date, isGetMethod = false) {
        const localUTC = (new Date().getTimezoneOffset() / 60);
        date.setHours(date.getHours() + (!isGetMethod ? -localUTC : localUTC));
        return date;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1saWIvc3JjL2xpYi9tYS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQTZCLE1BQU0sTUFBTSxDQUFDOzs7QUFLbEUsTUFBTSxPQUFPLFNBQVM7SUFRcEIsWUFDVSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFOaEMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUdyRCxnQkFBVyxHQUFhLEVBQUUsQ0FBQztJQUkvQixDQUFDO0lBR0wsV0FBVyxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsUUFBUSxFQUFFLE9BQU87WUFDakIsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksK0JBQStCO1NBQzFELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQWU7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVNLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhLENBQUMsQ0FBb0I7UUFDaEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUdELGVBQWUsQ0FBQyxJQUFVLEVBQUUsV0FBVyxHQUFHLEtBQUs7UUFDN0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOytHQWpEVSxTQUFTO21IQUFULFNBQVMsY0FGUixNQUFNOzs0RkFFUCxTQUFTO2tCQUhyQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hU2VydmljZSB7XG5cblxuICBwcml2YXRlIGxvYWRpbmdTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cblxuICBwcml2YXRlIHBlcm1pc3Npb25zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlXG4gICkgeyB9XG5cblxuICBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgc2V2ZXJpdHk6ICdlcnJvcicsXG4gICAgICBzdW1tYXJ5OiAnRXJyb3InLFxuICAgICAgZGV0YWlsOiBlcnJvcj8ubWVzc2FnZSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZC4nXG4gICAgfSk7XG4gIH1cblxuICBzaG93TG9hZGluZygpIHtcbiAgICB0aGlzLmxvYWRpbmdTdWJqZWN0Lm5leHQodHJ1ZSk7XG4gIH1cbiAgaGlkZUxvYWRpbmcoKSB7XG4gICAgdGhpcy5sb2FkaW5nU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgfVxuICBnZXRMb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRpbmdTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgcHVibGljIHNldFBlcm1pc3Npb25zKHBlcm1zOiBzdHJpbmdbXSkge1xuICAgIHRoaXMucGVybWlzc2lvbnMgPSBwZXJtcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRQZXJtaXNzaW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJtaXNzaW9ucztcbiAgfVxuXG4gIGhhc1Blcm1pc3Npb24ocDogc3RyaW5nIHwgc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBjb25zdCBsaXN0ID0gQXJyYXkuaXNBcnJheShwKSA/IHAgOiBbcF07XG4gICAgcmV0dXJuIGxpc3Quc29tZSh4ID0+IHRoaXMucGVybWlzc2lvbnMuaW5jbHVkZXMoeCkpO1xuICB9XG5cblxuICBtb2RpZnlEYXRlQnlVVEMoZGF0ZTogRGF0ZSwgaXNHZXRNZXRob2QgPSBmYWxzZSkge1xuICAgIGNvbnN0IGxvY2FsVVRDID0gKG5ldyBEYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDYwKTtcbiAgICBkYXRlLnNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSArICghaXNHZXRNZXRob2QgPyAtbG9jYWxVVEMgOiBsb2NhbFVUQykpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiBcblxufVxuIl19