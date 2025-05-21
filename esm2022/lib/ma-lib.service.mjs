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
        this.partnerIdSubject = new BehaviorSubject(null);
    }
    handleError(err) {
        let error;
        if (err.message) {
            error = err.message;
        }
        if (err.statusText) {
            error = err.statusText;
        }
        if (err.error && err.error.message) {
            error = err.error.message;
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
        this.partnerIdSubject.next(perms);
    }
    getPartnerId() {
        return this.partnerId;
    }
    getPartnerIdS() {
        return this.partnerIdSubject.asObservable();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtbGliLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1saWIvc3JjL2xpYi9tYS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQTZCLE1BQU0sTUFBTSxDQUFDOzs7QUFLbEUsTUFBTSxPQUFPLFNBQVM7SUFlcEIsWUFDVSxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFiaEMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVyRCxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBR3BELGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFRLElBQUksQ0FBQztRQUVyQixjQUFTLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLHFCQUFnQixHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO0lBSXpELENBQUM7SUFHTCxXQUFXLENBQUMsR0FBUTtRQUNsQixJQUFJLEtBQUssQ0FBQztRQUNWLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUNmLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQ2xCLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2xDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUMzQjtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBQ3RCLFFBQVEsRUFB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QUM7SUFDcEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVoQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0QsTUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFFdkMsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0IsSUFBSSxTQUFTLEVBQUU7UUFDYixPQUFPLEdBQUcsR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztLQUM5RDs7UUFBTSxPQUFPLEdBQUcsR0FBRyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTWFTZXJ2aWNlIHtcblxuXG4gIHByaXZhdGUgbG9hZGluZ1N1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBwcml2YXRlIGRvd25sb2FkU3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuXG4gIHByaXZhdGUgcGVybWlzc2lvbnM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgbWVyY2hhbnRzOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIHVzZXJJbmZvOiBhbnkgPSBudWxsO1xuXG4gIHByaXZhdGUgcGFydG5lcklkOiBzdHJpbmcgPSBudWxsO1xuICBwcml2YXRlIHBhcnRuZXJJZFN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2VcbiAgKSB7IH1cblxuXG4gIGhhbmRsZUVycm9yKGVycjogYW55KSB7XG4gICAgbGV0IGVycm9yO1xuICAgIGlmIChlcnIubWVzc2FnZSkge1xuICAgICAgZXJyb3IgPSBlcnIubWVzc2FnZTtcbiAgICB9XG4gICAgaWYgKGVyci5zdGF0dXNUZXh0KSB7XG4gICAgICBlcnJvciA9IGVyci5zdGF0dXNUZXh0O1xuICAgIH1cbiAgICBpZiAoZXJyLmVycm9yICYmIGVyci5lcnJvci5tZXNzYWdlKSB7XG4gICAgICBlcnJvciA9IGVyci5lcnJvci5tZXNzYWdlO1xuICAgIH1cbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7XG4gICAgICBzZXZlcml0eTogJ2Vycm9yJyxcbiAgICAgIHN1bW1hcnk6ICdFcnJvcicsXG4gICAgICBkZXRhaWw6IGVycm9yIHx8ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkLidcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dOb3RpZmljYXRpb24obWVzc2FnZTogYW55KSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoe1xuICAgICAgc2V2ZXJpdHk6ICdzdWNjZXNzJyxcbiAgICAgIHN1bW1hcnk6ICdTdWNjZXNzJyxcbiAgICAgIGRldGFpbDogbWVzc2FnZVxuICAgIH0pO1xuICB9XG4gIHNob3dMb2FkaW5nKCkge1xuICAgIHRoaXMubG9hZGluZ1N1YmplY3QubmV4dCh0cnVlKTtcbiAgfVxuICBoaWRlTG9hZGluZygpIHtcbiAgICB0aGlzLmxvYWRpbmdTdWJqZWN0Lm5leHQoZmFsc2UpO1xuICB9XG4gIGdldExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZGluZ1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0UGVybWlzc2lvbnMocGVybXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5wZXJtaXNzaW9ucyA9IHBlcm1zO1xuICB9XG5cbiAgcHVibGljIGdldFBlcm1pc3Npb25zKCkge1xuICAgIHJldHVybiB0aGlzLnBlcm1pc3Npb25zO1xuICB9XG5cbiAgaGFzUGVybWlzc2lvbihwOiBzdHJpbmcgfCBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGxpc3QgPSBBcnJheS5pc0FycmF5KHApID8gcCA6IFtwXTtcbiAgICByZXR1cm4gbGlzdC5zb21lKHggPT4gdGhpcy5wZXJtaXNzaW9ucy5pbmNsdWRlcyh4KSk7XG4gIH1cblxuXG4gIHNldERvd25sb2FkKGZpbGVOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRvd25sb2FkU3ViamVjdC5uZXh0KGZpbGVOYW1lKTtcbiAgfVxuICBnZXRTdGF0dXNEb3dubG9hZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb3dubG9hZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBmaWx0ZXJNZXJjaGFudHNCeVR5cGUodHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMubWVyY2hhbnRzLmZpbHRlcigobWVyY2hhbnQpID0+IG1lcmNoYW50LnR5cGUgPT09IHR5cGUpO1xuICB9XG5cbiAgc2V0TWVyY2hhbnQocGVybXM6IGFueSkge1xuICAgIHRoaXMubWVyY2hhbnRzID0gcGVybXM7XG4gIH1cbiAgc2V0VXNlckluZm8ocGVybXM6IGFueSkge1xuICAgIHRoaXMudXNlckluZm8gPSBwZXJtcztcbiAgfVxuICBzZXRQYXJ0bmVySWQocGVybXM6IHN0cmluZykge1xuICAgIHRoaXMucGFydG5lcklkID0gcGVybXM7XG4gICAgdGhpcy5wYXJ0bmVySWRTdWJqZWN0Lm5leHQocGVybXMpO1xuICB9XG4gIGdldFBhcnRuZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0bmVySWQ7XG4gIH1cblxuICBnZXRQYXJ0bmVySWRTKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnRuZXJJZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuXG4gIHB1YmxpYyBnZXRVc2VySW5mbygpIHtcbiAgICByZXR1cm4gdGhpcy51c2VySW5mbztcbiAgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnREYXRlVG9DdXN0b21Gb3JtYXQoZGF0ZVN0cmluZzogc3RyaW5nLCBoYXZlSG91cnMgPSB0cnVlKTogc3RyaW5nIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuXG4gIGNvbnN0IGRheSA9IFN0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcoZGF0ZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdQTScgOiAnQU0nO1xuXG4gIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7XG4gIGlmIChoYXZlSG91cnMpIHtcbiAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9ICR7aG91cnN9OiR7bWludXRlc30gJHthbXBtfWA7XG4gIH0gZWxzZSByZXR1cm4gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9YDtcbn1cbiJdfQ==