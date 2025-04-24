import { NgModule } from '@angular/core';
import { MaLibComponent } from './ma-lib.component';
import { MaPermissionDirective } from './ma-directives/ma-permission.directive';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class MaLibModule {
    constructor() {
        console.log('MaLibModule loaded');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, declarations: [MaLibComponent,
            MaPermissionDirective], imports: [CommonModule], exports: [MaLibComponent,
            MaPermissionDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MaLibComponent,
                        MaPermissionDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        MaLibComponent,
                        MaPermissionDirective
                    ]
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWxpYi9zcmMvbGliL21hLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQWlCL0MsTUFBTSxPQUFPLFdBQVc7SUFDdEI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDcEMsQ0FBQzsrR0FIVSxXQUFXO2dIQUFYLFdBQVcsaUJBWHBCLGNBQWM7WUFDZCxxQkFBcUIsYUFHckIsWUFBWSxhQUdaLGNBQWM7WUFDZCxxQkFBcUI7Z0hBR1osV0FBVyxZQVBwQixZQUFZOzs0RkFPSCxXQUFXO2tCQWJ2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLHFCQUFxQjtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QscUJBQXFCO3FCQUN0QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYUxpYkNvbXBvbmVudCB9IGZyb20gJy4vbWEtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYVBlcm1pc3Npb25EaXJlY3RpdmUgfSBmcm9tICcuL21hLWRpcmVjdGl2ZXMvbWEtcGVybWlzc2lvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hTGliQ29tcG9uZW50LFxuICAgIE1hUGVybWlzc2lvbkRpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYUxpYkNvbXBvbmVudCxcbiAgICBNYVBlcm1pc3Npb25EaXJlY3RpdmVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYUxpYk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdNYUxpYk1vZHVsZSBsb2FkZWQnKTtcbiAgfVxuIH1cbiJdfQ==