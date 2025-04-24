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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtcGVybWlzc2lvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1saWIvc3JjL2xpYi9tYS1kaXJlY3RpdmVzL21hLXBlcm1pc3Npb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7O0FBTWhGLE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsaUJBQTRCO1FBRjVCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBVztRQU5mLHdCQUFtQixHQUFzQixFQUFFLENBQUM7UUFDMUQsU0FBSSxHQUF1QixTQUFTLENBQUM7SUFPOUMsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztZQUN6RCxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQjtZQUMxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUUvQixNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQ3hDLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDM0Q7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7SUFDSCxDQUFDOytHQTVCVSxxQkFBcUI7bUdBQXJCLHFCQUFxQjs7NEZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjtpSkFFd0IsbUJBQW1CO3NCQUF6QyxLQUFLO3VCQUFDLGNBQWM7Z0JBQ1osSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hU2VydmljZSB9IGZyb20gJy4uL21hLWxpYi5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21hUGVybWlzc2lvbl0nXG59KVxuZXhwb3J0IGNsYXNzIE1hUGVybWlzc2lvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnbWFQZXJtaXNzaW9uJykgcmVxdWlyZWRQZXJtaXNzaW9uczogc3RyaW5nIHwgc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbW9kZTogJ2Rpc2FibGUnIHwgJ2hpZGUnID0gJ2Rpc2FibGUnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGVybWlzc2lvblNlcnZpY2U6IE1hU2VydmljZVxuICApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gQXJyYXkuaXNBcnJheSh0aGlzLnJlcXVpcmVkUGVybWlzc2lvbnMpXG4gICAgICA/IHRoaXMucmVxdWlyZWRQZXJtaXNzaW9uc1xuICAgICAgOiBbdGhpcy5yZXF1aXJlZFBlcm1pc3Npb25zXTtcblxuICAgIGNvbnN0IGhhc1Blcm1pc3Npb24gPSBwZXJtaXNzaW9ucy5zb21lKHAgPT5cbiAgICAgIHRoaXMucGVybWlzc2lvblNlcnZpY2UuaGFzUGVybWlzc2lvbihwKVxuICAgICk7XG5cbiAgICBpZiAoIWhhc1Blcm1pc3Npb24pIHtcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdkaXNhYmxlJykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnaGlkZScpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=