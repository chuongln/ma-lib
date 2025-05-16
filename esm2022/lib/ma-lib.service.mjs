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
        this.partnerId = null;
    }
    handleError(err) {
        let error = err?.error?.message || err;
        if (error.error && !error.error.message) {
            error = error.error;
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
    }
    getPartnerId() {
        return this.partnerId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1saWIvc3JjL2xpYi9tYS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQTZCLE1BQU0sTUFBTSxDQUFDOzs7QUFLbEUsTUFBTSxPQUFPLFNBQVM7SUFjcEIsWUFDVSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFaaEMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVyRCxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBR3BELGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFRLElBQUksQ0FBQztRQUVyQixjQUFTLEdBQVcsSUFBSSxDQUFDO0lBSTdCLENBQUM7SUFHTCxXQUFXLENBQUMsR0FBUTtRQUNsQixJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFDdkMsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDdkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUN0QixRQUFRLEVBQUUsT0FBTztZQUNqQixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUUsS0FBSyxJQUFJLCtCQUErQjtTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBWTtRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUN0QixRQUFR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QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNELE1BQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRXZDLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ25CLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzNCLElBQUksU0FBUyxFQUFFO1FBQ2IsT0FBTyxHQUFHLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7S0FDOUQ7O1FBQU0sT0FBTyxHQUFHLEdBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFLENBQUM7QUFDMUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1hU2VydmljZSB7XG5cblxuICBwcml2YXRlIGxvYWRpbmdTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJpdmF0ZSBkb3dubG9hZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cblxuICBwcml2YXRlIHBlcm1pc3Npb25zOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIG1lcmNoYW50czogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSB1c2VySW5mbzogYW55ID0gbnVsbDtcblxuICBwcml2YXRlIHBhcnRuZXJJZDogc3RyaW5nID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZVxuICApIHsgfVxuXG5cbiAgaGFuZGxlRXJyb3IoZXJyOiBhbnkpIHtcbiAgICBsZXQgZXJyb3IgPSBlcnI/LmVycm9yPy5tZXNzYWdlIHx8IGVycjtcbiAgICBpZiAoZXJyb3IuZXJyb3IgJiYgIWVycm9yLmVycm9yLm1lc3NhZ2UpIHtcbiAgICAgIGVycm9yID0gZXJyb3IuZXJyb3I7XG4gICAgfVxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHtcbiAgICAgIHNldmVyaXR5OiAnZXJyb3InLFxuICAgICAgc3VtbWFyeTogJ0Vycm9yJyxcbiAgICAgIGRldGFpbDogZXJyb3IgfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQuJ1xuICAgIH0pO1xuICB9XG5cbiAgc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlOiBhbnkpIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICBzZXZlcml0eTogJ3N1Y2Nlc3MnLFxuICAgICAgc3VtbWFyeTogJ1N1Y2Nlc3MnLFxuICAgICAgZGV0YWlsOiBtZXNzYWdlXG4gICAgfSk7XG4gIH1cbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgdGhpcy5sb2FkaW5nU3ViamVjdC5uZXh0KHRydWUpO1xuICB9XG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIHRoaXMubG9hZGluZ1N1YmplY3QubmV4dChmYWxzZSk7XG4gIH1cbiAgZ2V0TG9hZGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkaW5nU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQZXJtaXNzaW9ucyhwZXJtczogc3RyaW5nW10pIHtcbiAgICB0aGlzLnBlcm1pc3Npb25zID0gcGVybXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0UGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnM7XG4gIH1cblxuICBoYXNQZXJtaXNzaW9uKHA6IHN0cmluZyB8IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbGlzdCA9IEFycmF5LmlzQXJyYXkocCkgPyBwIDogW3BdO1xuICAgIHJldHVybiBsaXN0LnNvbWUoeCA9PiB0aGlzLnBlcm1pc3Npb25zLmluY2x1ZGVzKHgpKTtcbiAgfVxuXG5cbiAgc2V0RG93bmxvYWQoZmlsZU5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuZG93bmxvYWRTdWJqZWN0Lm5leHQoZmlsZU5hbWUpO1xuICB9XG4gIGdldFN0YXR1c0Rvd25sb2FkKCkge1xuICAgIHJldHVybiB0aGlzLmRvd25sb2FkU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGZpbHRlck1lcmNoYW50c0J5VHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5tZXJjaGFudHMuZmlsdGVyKChtZXJjaGFudCkgPT4gbWVyY2hhbnQudHlwZSA9PT0gdHlwZSk7XG4gIH1cblxuICBwdWJsaWMgc2V0TWVyY2hhbnQocGVybXM6IGFueVtdKSB7XG4gICAgdGhpcy5tZXJjaGFudHMgPSBwZXJtcztcbiAgfVxuICBwdWJsaWMgc2V0VXNlckluZm8ocGVybXM6IGFueVtdKSB7XG4gICAgdGhpcy51c2VySW5mbyA9IHBlcm1zO1xuICB9XG4gIHB1YmxpYyBzZXRQYXJ0bmVySWQocGVybXM6IHN0cmluZykge1xuICAgIHRoaXMucGFydG5lcklkID0gcGVybXM7XG4gIH1cbiAgcHVibGljIGdldFBhcnRuZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0bmVySWQ7XG4gIH1cbiAgcHVibGljIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB0aGlzLnVzZXJJbmZvO1xuICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydERhdGVUb0N1c3RvbUZvcm1hdChkYXRlU3RyaW5nOiBzdHJpbmcsIGhhdmVIb3VycyA9IHRydWUpOiBzdHJpbmcge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG5cbiAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCBtb250aCA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XG5cbiAgaG91cnMgPSBob3VycyAlIDEyO1xuICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjtcbiAgaWYgKGhhdmVIb3Vycykge1xuICAgIHJldHVybiBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn0gJHtob3Vyc306JHttaW51dGVzfSAke2FtcG19YDtcbiAgfSBlbHNlIHJldHVybiBgJHtkYXl9LSR7bW9udGh9LSR7eWVhcn1gO1xufVxuIl19