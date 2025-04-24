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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaPermissionDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.MaLibService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: MaPermissionDirective, selector: "[maPermission]", inputs: { requiredPermissions: ["maPermission", "requiredPermissions"], mode: "mode" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MaPermissionDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[maPermission]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.MaLibService }]; }, propDecorators: { requiredPermissions: [{
                type: Input,
                args: ['maPermission']
            }], mode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtcGVybWlzc2lvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tYS1saWIvc3JjL2xpYi9tYS1kaXJlY3RpdmVzL21hLXBlcm1pc3Npb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7O0FBTWhGLE1BQU0sT0FBTyxxQkFBcUI7SUFJaEMsWUFDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsaUJBQStCO1FBRi9CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBYztRQU5sQix3QkFBbUIsR0FBc0IsRUFBRSxDQUFDO1FBQzFELFNBQUksR0FBdUIsU0FBUyxDQUFDO0lBTzlDLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDekQsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUI7WUFDMUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFL0IsTUFBTSxhQUFhLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUN4QyxDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ25FLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQzNEO2lCQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNsRTtTQUNGO0lBQ0gsQ0FBQzsrR0E1QlUscUJBQXFCO21HQUFyQixxQkFBcUI7OzRGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7b0pBRXdCLG1CQUFtQjtzQkFBekMsS0FBSzt1QkFBQyxjQUFjO2dCQUNaLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYUxpYlNlcnZpY2UgfSBmcm9tICcuLi9tYS1saWIuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttYVBlcm1pc3Npb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBNYVBlcm1pc3Npb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ21hUGVybWlzc2lvbicpIHJlcXVpcmVkUGVybWlzc2lvbnM6IHN0cmluZyB8IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIG1vZGU6ICdkaXNhYmxlJyB8ICdoaWRlJyA9ICdkaXNhYmxlJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBlcm1pc3Npb25TZXJ2aWNlOiBNYUxpYlNlcnZpY2VcbiAgKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IEFycmF5LmlzQXJyYXkodGhpcy5yZXF1aXJlZFBlcm1pc3Npb25zKVxuICAgICAgPyB0aGlzLnJlcXVpcmVkUGVybWlzc2lvbnNcbiAgICAgIDogW3RoaXMucmVxdWlyZWRQZXJtaXNzaW9uc107XG5cbiAgICBjb25zdCBoYXNQZXJtaXNzaW9uID0gcGVybWlzc2lvbnMuc29tZShwID0+XG4gICAgICB0aGlzLnBlcm1pc3Npb25TZXJ2aWNlLmhhc1Blcm1pc3Npb24ocClcbiAgICApO1xuXG4gICAgaWYgKCFoYXNQZXJtaXNzaW9uKSB7XG4gICAgICBpZiAodGhpcy5tb2RlID09PSAnZGlzYWJsZScpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ2hpZGUnKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19