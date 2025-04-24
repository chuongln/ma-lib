import { NgModule } from '@angular/core';
import { MaLibComponent } from './ma-lib.component';
import { MaPermissionDirective } from './ma-directives/ma-permission.directive';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './pipe/currency.pipe';
import { ViewSvgComponent } from './component/view-svg/view-svg.component';
import { TranslateModule } from '@ngx-translate/core';
import { SvgService } from './component/view-svg/view-svg.service';
import * as i0 from "@angular/core";
export class MaLibModule {
    static forRoot(environment) {
        return {
            ngModule: MaLibModule,
            providers: [
                {
                    provide: 'environment',
                    useValue: environment,
                },
                SvgService
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, declarations: [MaLibComponent,
            MaPermissionDirective,
            CurrencyPipe,
            ViewSvgComponent], imports: [CommonModule], exports: [MaLibComponent,
            MaPermissionDirective,
            TranslateModule,
            CommonModule,
            ViewSvgComponent,
            CurrencyPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, providers: [CurrencyPipe], imports: [CommonModule, TranslateModule,
            CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MaLibComponent,
                        MaPermissionDirective,
                        CurrencyPipe,
                        ViewSvgComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        MaLibComponent,
                        MaPermissionDirective,
                        TranslateModule,
                        CommonModule,
                        ViewSvgComponent,
                        CurrencyPipe
                    ],
                    providers: [CurrencyPipe],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWxpYi9zcmMvbGliL21hLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFzQm5FLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZ0I7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCO2dCQUNELFVBQVU7YUFDWDtTQUNGLENBQUM7SUFDSixDQUFDOytHQVpVLFdBQVc7Z0hBQVgsV0FBVyxpQkFsQnBCLGNBQWM7WUFDZCxxQkFBcUI7WUFDckIsWUFBWTtZQUNaLGdCQUFnQixhQUdoQixZQUFZLGFBR1osY0FBYztZQUNkLHFCQUFxQjtZQUNyQixlQUFlO1lBQ2YsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixZQUFZO2dIQUlILFdBQVcsYUFGWCxDQUFDLFlBQVksQ0FBQyxZQVZ2QixZQUFZLEVBS1osZUFBZTtZQUNmLFlBQVk7OzRGQU1ILFdBQVc7a0JBcEJ2QixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsZUFBZTt3QkFDZixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsWUFBWTtxQkFDYjtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hTGliQ29tcG9uZW50IH0gZnJvbSAnLi9tYS1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hUGVybWlzc2lvbkRpcmVjdGl2ZSB9IGZyb20gJy4vbWEtZGlyZWN0aXZlcy9tYS1wZXJtaXNzaW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ3VycmVuY3lQaXBlIH0gZnJvbSAnLi9waXBlL2N1cnJlbmN5LnBpcGUnO1xuaW1wb3J0IHsgVmlld1N2Z0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L3ZpZXctc3ZnL3ZpZXctc3ZnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IFN2Z1NlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudC92aWV3LXN2Zy92aWV3LXN2Zy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWFMaWJDb21wb25lbnQsXG4gICAgTWFQZXJtaXNzaW9uRGlyZWN0aXZlLFxuICAgIEN1cnJlbmN5UGlwZSxcbiAgICBWaWV3U3ZnQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1hTGliQ29tcG9uZW50LFxuICAgIE1hUGVybWlzc2lvbkRpcmVjdGl2ZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFZpZXdTdmdDb21wb25lbnQsXG4gICAgQ3VycmVuY3lQaXBlXG4gIF0sXG4gIHByb3ZpZGVyczogW0N1cnJlbmN5UGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWFMaWJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiAnZW52aXJvbm1lbnQnLFxuICAgICAgICAgIHVzZVZhbHVlOiBlbnZpcm9ubWVudCxcbiAgICAgICAgfSxcbiAgICAgICAgU3ZnU2VydmljZVxuICAgICAgXSxcbiAgICB9O1xuICB9XG59ICJdfQ==