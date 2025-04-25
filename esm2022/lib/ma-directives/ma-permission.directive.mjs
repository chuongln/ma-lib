import { Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../ma-lib.service";
export class MaPermissionDirective {
    constructor(el, renderer, permissionService) {
        this.el = el;
        this.renderer = renderer;
        this.permissionService = permissionService;
        this.requiredPermissions = [];
        this.mode = 'disable';
    }
    ngOnInit() {
        const permissions = Array.isArray(this.requiredPermissions)
            ? this.requiredPermissions
            : [this.requiredPermissions];
        const hasPermission = permissions.some(p => this.permissionService.hasPermission(p));
        if (!hasPermission) {
            if (this.mode === 'disable') {
                this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
                this.renderer.addClass(this.el.nativeElement, 'disabled');
                this.renderer.setAttribute(this.el.nativeElement, 'pTooltip', "You don't have permission");
                this.renderer.setAttribute(this.el.nativeElement, 'tooltipPosition', 'bottom');
            }
            else if (this.mode === 'hide') {
                this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaPermissionDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.MaService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: MaPermissionDirective, selector: "[maPermission]", inputs: { requiredPermissions: ["maPermission", "requiredPermissions"], mode: "mode" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaPermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[maPermission]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.MaService }]; }, propDecorators: { requiredPermissions: [{
                type: Input,
                args: ['maPermission']
            }], mode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtcGVybWlzc2lvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1saWIvc3JjL2xpYi9tYS1kaXJlY3RpdmVzL21hLXBlcm1pc3Npb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7O0FBTWhGLE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsaUJBQTRCO1FBRjVCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBVztRQU5mLHdCQUFtQixHQUFzQixFQUFFLENBQUM7UUFDMUQsU0FBSSxHQUF1QixTQUFTLENBQUM7SUFPOUMsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUN6RCxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQjtZQUMxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUUvQixNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQ3hDLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUVoRjtpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUMvQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDbEU7U0FDRjtJQUNILENBQUM7K0dBL0JVLHFCQUFxQjttR0FBckIscUJBQXFCOzs0RkFBckIscUJBQXFCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCO2lKQUV3QixtQkFBbUI7c0JBQXpDLEtBQUs7dUJBQUMsY0FBYztnQkFDWixJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFTZXJ2aWNlIH0gZnJvbSAnLi4vbWEtbGliLnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWFQZXJtaXNzaW9uXSdcbn0pXG5leHBvcnQgY2xhc3MgTWFQZXJtaXNzaW9uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdtYVBlcm1pc3Npb24nKSByZXF1aXJlZFBlcm1pc3Npb25zOiBzdHJpbmcgfCBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBtb2RlOiAnZGlzYWJsZScgfCAnaGlkZScgPSAnZGlzYWJsZSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uU2VydmljZTogTWFTZXJ2aWNlXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSBBcnJheS5pc0FycmF5KHRoaXMucmVxdWlyZWRQZXJtaXNzaW9ucylcbiAgICAgID8gdGhpcy5yZXF1aXJlZFBlcm1pc3Npb25zXG4gICAgICA6IFt0aGlzLnJlcXVpcmVkUGVybWlzc2lvbnNdO1xuXG4gICAgY29uc3QgaGFzUGVybWlzc2lvbiA9IHBlcm1pc3Npb25zLnNvbWUocCA9PlxuICAgICAgdGhpcy5wZXJtaXNzaW9uU2VydmljZS5oYXNQZXJtaXNzaW9uKHApXG4gICAgKTtcblxuICAgIGlmICghaGFzUGVybWlzc2lvbikge1xuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2Rpc2FibGUnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdwVG9vbHRpcCcsIFwiWW91IGRvbid0IGhhdmUgcGVybWlzc2lvblwiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndG9vbHRpcFBvc2l0aW9uJywgJ2JvdHRvbScpO1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2hpZGUnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19