import { NgModule } from '@angular/core';
import { MaLibComponent } from './ma-lib.component';
import { MaPermissionDirective } from './ma-directives/ma-permission.directive';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './pipe/currency.pipe';
import { ViewSvgComponent } from './component/view-svg/view-svg.component';
import { TranslateModule } from '@ngx-translate/core';
import { SvgService } from './component/view-svg/view-svg.service';
import { TooltipModule } from 'primeng/tooltip';
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
            ViewSvgComponent], imports: [CommonModule,
            TooltipModule,
            TranslateModule], exports: [MaLibComponent,
            MaPermissionDirective,
            TranslateModule,
            CommonModule,
            ViewSvgComponent,
            CurrencyPipe] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaLibModule, providers: [CurrencyPipe], imports: [CommonModule,
            TooltipModule,
            TranslateModule, TranslateModule,
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
                        CommonModule,
                        TooltipModule,
                        TranslateModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWxpYi9zcmMvbGliL21hLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBd0JoRCxNQUFNLE9BQU8sV0FBVztJQUN0QixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQWdCO1FBQzdCLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2lCQUN0QjtnQkFDRCxVQUFVO2FBQ1g7U0FDRixDQUFDO0lBQ0osQ0FBQzsrR0FaVSxXQUFXO2dIQUFYLFdBQVcsaUJBcEJwQixjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLFlBQVk7WUFDWixnQkFBZ0IsYUFHaEIsWUFBWTtZQUNaLGFBQWE7WUFDYixlQUFlLGFBR2YsY0FBYztZQUNkLHFCQUFxQjtZQUNyQixlQUFlO1lBQ2YsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixZQUFZO2dIQUlILFdBQVcsYUFGWCxDQUFDLFlBQVksQ0FBQyxZQVp2QixZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWUsRUFLZixlQUFlO1lBQ2YsWUFBWTs7NEZBTUgsV0FBVztrQkF0QnZCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixZQUFZO3dCQUNaLGdCQUFnQjtxQkFDakI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixlQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFlBQVk7cUJBQ2I7b0JBQ0QsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYUxpYkNvbXBvbmVudCB9IGZyb20gJy4vbWEtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYVBlcm1pc3Npb25EaXJlY3RpdmUgfSBmcm9tICcuL21hLWRpcmVjdGl2ZXMvbWEtcGVybWlzc2lvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEN1cnJlbmN5UGlwZSB9IGZyb20gJy4vcGlwZS9jdXJyZW5jeS5waXBlJztcbmltcG9ydCB7IFZpZXdTdmdDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC92aWV3LXN2Zy92aWV3LXN2Zy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBTdmdTZXJ2aWNlIH0gZnJvbSAnLi9jb21wb25lbnQvdmlldy1zdmcvdmlldy1zdmcuc2VydmljZSc7XG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAncHJpbWVuZy90b29sdGlwJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWFMaWJDb21wb25lbnQsXG4gICAgTWFQZXJtaXNzaW9uRGlyZWN0aXZlLFxuICAgIEN1cnJlbmN5UGlwZSxcbiAgICBWaWV3U3ZnQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVG9vbHRpcE1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYUxpYkNvbXBvbmVudCxcbiAgICBNYVBlcm1pc3Npb25EaXJlY3RpdmUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBWaWV3U3ZnQ29tcG9uZW50LFxuICAgIEN1cnJlbmN5UGlwZVxuICBdLFxuICBwcm92aWRlcnM6IFtDdXJyZW5jeVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBNYUxpYk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGVudmlyb25tZW50OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1hTGliTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNYUxpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogJ2Vudmlyb25tZW50JyxcbiAgICAgICAgICB1c2VWYWx1ZTogZW52aXJvbm1lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIFN2Z1NlcnZpY2VcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufSAiXX0=