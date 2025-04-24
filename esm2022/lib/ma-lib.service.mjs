import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "primeng/api";
import * as i2 from "@angular/common/http";
export class MaService {
    constructor(messageService, http, environment) {
        this.messageService = messageService;
        this.http = http;
        this.environment = environment;
        this.loadingSubject = new BehaviorSubject(false);
        this.permissions = [];
        this.cache = new Map();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaService, deps: [{ token: i1.MessageService }, { token: i2.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.MessageService }, { type: i2.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1saWIvc3JjL2xpYi9tYS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUtsRSxNQUFNLE9BQU8sU0FBUztJQVVwQixZQUNVLGNBQThCLEVBQzlCLElBQWdCLEVBQ08sV0FBZ0I7UUFGdkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDTyxnQkFBVyxHQUFYLFdBQVcsQ0FBSztRQVZ6QyxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBR3JELGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLFVBQUssR0FBdUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQU8xRCxDQUFDO0lBR0wsV0FBVyxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDdEIsUUFBUSxFQUFFLE9BQU87WUFDakIsT0FBTyxFQUFFLE9BQU87WUFDaEIsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLElBQUksK0JBQStCO1NBQzFELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQWU7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVNLGNBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhLENBQUMsQ0FBb0I7UUFDaEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUdELGVBQWUsQ0FBQyxJQUFVLEVBQUUsV0FBVyxHQUFHLEtBQUs7UUFDN0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdkUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQWdCO1FBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNqRDthQUFNO1lBQ0wsTUFBTSxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLFFBQVEsUUFBUSxNQUFNLENBQUM7WUFFOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNyRCxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FDRixDQUFDO1lBQ0YsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDOytHQTFFVSxTQUFTLDBFQWFWLGFBQWE7bUhBYlosU0FBUyxjQUZSLE1BQU07OzRGQUVQLFNBQVM7a0JBSHJCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFjSSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNYVNlcnZpY2Uge1xuXG5cbiAgcHJpdmF0ZSBsb2FkaW5nU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG5cbiAgcHJpdmF0ZSBwZXJtaXNzaW9uczogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSBjYWNoZTogTWFwPHN0cmluZywgUmVwbGF5U3ViamVjdDxzdHJpbmc+PiA9IG5ldyBNYXAoKTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueVxuICApIHsgfVxuXG5cbiAgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxuICAgICAgc3VtbWFyeTogJ0Vycm9yJyxcbiAgICAgIGRldGFpbDogZXJyb3I/Lm1lc3NhZ2UgfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuJ1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgdGhpcy5sb2FkaW5nU3ViamVjdC5uZXh0KHRydWUpO1xuICB9XG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIHRoaXMubG9hZGluZ1N1YmplY3QubmV4dChmYWxzZSk7XG4gIH1cbiAgZ2V0TG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQZXJtaXNzaW9ucyhwZXJtczogc3RyaW5nW10pIHtcbiAgICB0aGlzLnBlcm1pc3Npb25zID0gcGVybXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnM7XG4gIH1cblxuICBoYXNQZXJtaXNzaW9uKHA6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkocCkgPyBwIDogW3BdO1xuICAgIHJldHVybiBsaXN0LnNvbWUoeCA9PiB0aGlzLnBlcm1pc3Npb25zLmluY2x1ZGVzKHgpKTtcbiAgfVxuXG5cbiAgbW9kaWZ5RGF0ZUJ5VVRDKGRhdGU6IERhdGUsIGlzR2V0TWV0aG9kID0gZmFsc2UpIHtcbiAgICBjb25zdCBsb2NhbFVUQyA9IChuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MCk7XG4gICAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgKyAoIWlzR2V0TWV0aG9kID8gLWxvY2FsVVRDIDogbG9jYWxVVEMpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIGdldFN2ZyhpY29uTmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBpZiAodGhpcy5jYWNoZS5oYXMoaWNvbk5hbWUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQoaWNvbk5hbWUpIS5hc09ic2VydmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0PHN0cmluZz4oMSk7XG4gICAgICB0aGlzLmNhY2hlLnNldChpY29uTmFtZSwgc3ViamVjdCk7XG4gICAgICBjb25zdCBwYXRoID0gYCR7dGhpcy5lbnZpcm9ubWVudC5hc3NldHN9L3N2Zy8ke2ljb25OYW1lfS5zdmdgO1xuXG4gICAgICB0aGlzLmh0dHAuZ2V0KHBhdGgsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSkuc3Vic2NyaWJlKFxuICAgICAgICAoZGF0YSkgPT4ge1xuICAgICAgICAgIHN1YmplY3QubmV4dChkYXRhKTtcbiAgICAgICAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICBzdWJqZWN0LmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICByZXR1cm4gc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG4gIH1cblxufVxuIl19