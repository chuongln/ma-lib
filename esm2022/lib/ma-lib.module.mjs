import { NgModule } from '@angular/core';
import { MaLibComponent } from './ma-lib.component';
import { MaPermissionDirective } from './ma-directives/ma-permission.directive';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './pipe/currency.pipe';
import { ViewSvgComponent } from './component/view-svg/view-svg.component';
import { TranslateModule } from '@ngx-translate/core';
import { MaService } from './ma-lib.service';
import * as i0 from "@angular/core";
export class MaLibModule {
    static forRoot(environment) {
        return {
            ngModule: MaService,
            providers: [
                {
                    provide: 'environment',
                    useValue: environment,
                },
                MaService
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
            ViewSvgComponent] }); }
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
                        ViewSvgComponent
                    ],
                    providers: [CurrencyPipe],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWxpYi9zcmMvbGliL21hLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFxQjdDLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBZ0I7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7aUJBQ3RCO2dCQUNELFNBQVM7YUFDVjtTQUNGLENBQUM7SUFDSixDQUFDOytHQVpVLFdBQVc7Z0hBQVgsV0FBVyxpQkFqQnBCLGNBQWM7WUFDZCxxQkFBcUI7WUFDckIsWUFBWTtZQUNaLGdCQUFnQixhQUdoQixZQUFZLGFBR1osY0FBYztZQUNkLHFCQUFxQjtZQUNyQixlQUFlO1lBQ2YsWUFBWTtZQUNaLGdCQUFnQjtnSEFJUCxXQUFXLGFBRlgsQ0FBQyxZQUFZLENBQUMsWUFUdkIsWUFBWSxFQUtaLGVBQWU7WUFDZixZQUFZOzs0RkFLSCxXQUFXO2tCQW5CdkIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLFlBQVk7d0JBQ1osZ0JBQWdCO3FCQUNqQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFMaWJDb21wb25lbnQgfSBmcm9tICcuL21hLWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFQZXJtaXNzaW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9tYS1kaXJlY3RpdmVzL21hLXBlcm1pc3Npb24uZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDdXJyZW5jeVBpcGUgfSBmcm9tICcuL3BpcGUvY3VycmVuY3kucGlwZSc7XG5pbXBvcnQgeyBWaWV3U3ZnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvdmlldy1zdmcvdmlldy1zdmcuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgTWFTZXJ2aWNlIH0gZnJvbSAnLi9tYS1saWIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hTGliQ29tcG9uZW50LFxuICAgIE1hUGVybWlzc2lvbkRpcmVjdGl2ZSxcbiAgICBDdXJyZW5jeVBpcGUsXG4gICAgVmlld1N2Z0NvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYUxpYkNvbXBvbmVudCxcbiAgICBNYVBlcm1pc3Npb25EaXJlY3RpdmUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBWaWV3U3ZnQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW0N1cnJlbmN5UGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hTGliTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWFTZXJ2aWNlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNYVNlcnZpY2UsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6ICdlbnZpcm9ubWVudCcsXG4gICAgICAgICAgdXNlVmFsdWU6IGVudmlyb25tZW50LFxuICAgICAgICB9LFxuICAgICAgICBNYVNlcnZpY2VcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufSAiXX0=