import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class SvgService {
    constructor(http, environment) {
        this.http = http;
        this.environment = environment;
        this.cache = new Map();
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SvgService, deps: [{ token: i1.HttpClient }, { token: 'environment' }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SvgService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: SvgService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Inject,
                    args: ['environment']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1zdmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWxpYi9zcmMvbGliL2NvbXBvbmVudC92aWV3LXN2Zy92aWV3LXN2Zy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQUtqRCxNQUFNLE9BQU8sVUFBVTtJQUdyQixZQUNVLElBQWdCLEVBQ08sV0FBZ0I7UUFEdkMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNPLGdCQUFXLEdBQVgsV0FBVyxDQUFLO1FBSnpDLFVBQUssR0FBdUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUlULENBQUM7SUFFdEQsTUFBTSxDQUFDLFFBQWdCO1FBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNqRDthQUFNO1lBQ0wsTUFBTSxPQUFPLEdBQUcsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLFFBQVEsUUFBUSxNQUFNLENBQUM7WUFFOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUNyRCxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQ0QsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsQ0FDRixDQUFDO1lBQ0YsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDOytHQTFCVSxVQUFVLDRDQUtYLGFBQWE7bUhBTFosVUFBVSxjQUZULE1BQU07OzRGQUVQLFVBQVU7a0JBSHRCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFNSSxNQUFNOzJCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN2Z1NlcnZpY2Uge1xuICBwcml2YXRlIGNhY2hlOiBNYXA8c3RyaW5nLCBSZXBsYXlTdWJqZWN0PHN0cmluZz4+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnQ6IGFueSkgeyB9XG5cbiAgZ2V0U3ZnKGljb25OYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGlmICh0aGlzLmNhY2hlLmhhcyhpY29uTmFtZSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlLmdldChpY29uTmFtZSkhLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IFJlcGxheVN1YmplY3Q8c3RyaW5nPigxKTtcbiAgICAgIHRoaXMuY2FjaGUuc2V0KGljb25OYW1lLCBzdWJqZWN0KTtcbiAgICAgIGNvbnN0IHBhdGggPSBgJHt0aGlzLmVudmlyb25tZW50LmFzc2V0c30vc3ZnLyR7aWNvbk5hbWV9LnN2Z2A7XG5cbiAgICAgIHRoaXMuaHR0cC5nZXQocGF0aCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KS5zdWJzY3JpYmUoXG4gICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgc3ViamVjdC5uZXh0KGRhdGEpO1xuICAgICAgICAgIHN1YmplY3QuY29tcGxldGUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBzdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgfVxufSJdfQ==