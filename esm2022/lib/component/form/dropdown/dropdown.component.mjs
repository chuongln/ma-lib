import { Component, forwardRef, Input, Optional, } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@ngx-translate/core";
import * as i3 from "@angular/common";
import * as i4 from "primeng/api";
import * as i5 from "primeng/dropdown";
export class DropdownComponent extends BaseControlValueAccessor {
    constructor(controlContainer, cdr) {
        super(controlContainer);
        this.controlContainer = controlContainer;
        this.cdr = cdr;
        this.label = '';
        this.options = [];
        this.placeholder = '';
        this.optionLabel = 'label';
        this.isOpen = false;
    }
    get formGroup() {
        return this.controlContainer?.control;
    }
    ngOnInit() {
        this.cdr.detectChanges();
    }
    handleDropdownOpen() {
        this.isOpen = true;
    }
    handleDropdownClose() {
        this.isOpen = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DropdownComponent, deps: [{ token: i1.ControlContainer, optional: true }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: DropdownComponent, isStandalone: true, selector: "dropdown", inputs: { label: "label", options: "options", placeholder: "placeholder", optionLabel: "optionLabel" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DropdownComponent),
                multi: true,
            },
        ], usesInheritance: true, ngImport: i0, template: "<div class=\"flex px-4 flex-column \">\n  <div class=\"float-label-container\">\n    <label class=\"float-label\">{{label || 'Date'}}</label>\n    <i class=\"pi pi-chevron-down arrow-icon\" [class.open]=\"isOpen\"></i>\n  </div>\n  <p-dropdown class=\"custom-dropdown\" [formControl]=\"control\" [options]=\"options\"\n    [optionLabel]=\"optionLabel | translate\" [placeholder]=\"placeholder | translate\" (onShow)=\"handleDropdownOpen()\"\n    (onHide)=\"handleDropdownClose()\">\n    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n      <span *ngIf=\"selectedItem\">\n        {{ selectedItem.label | translate}}\n      </span>\n      <span *ngIf=\"!selectedItem \">\n        {{ placeholder | translate }}\n      </span>\n    </ng-template>\n    <ng-template pTemplate=\"option\" let-option>{{option.label | translate}} </ng-template>\n  </p-dropdown>\n</div>", styles: [".float-label-container{top:-3px;display:flex;font-size:12px;left:2px;color:#6c6c6c}.float-label-container:has(.open){color:#2e6be5}.float-label-container .arrow-icon{font-size:12px;height:12px;margin-left:8px;align-items:center;transition:transform .3s ease}.float-label-container .arrow-icon.open{transform:rotate(180deg)}::ng-deep .custom-dropdown .p-dropdown-label{font-weight:400;line-height:20px;color:#404040;font-size:14px;padding:4px 0}::ng-deep .custom-dropdown .p-dropdown{border:unset!important;box-shadow:unset!important;width:100%}::ng-deep .custom-dropdown .p-dropdown-trigger{display:none}\n"], dependencies: [{ kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i2.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: OverlayPanelModule }, { kind: "directive", type: i4.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "ngmodule", type: DropdownModule }, { kind: "component", type: i5.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "overlayDirection", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dropdown', standalone: true, imports: [
                        TranslateModule,
                        CommonModule,
                        ReactiveFormsModule,
                        ReactiveFormsModule,
                        FormsModule,
                        OverlayPanelModule,
                        DropdownModule
                    ], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DropdownComponent),
                            multi: true,
                        },
                    ], template: "<div class=\"flex px-4 flex-column \">\n  <div class=\"float-label-container\">\n    <label class=\"float-label\">{{label || 'Date'}}</label>\n    <i class=\"pi pi-chevron-down arrow-icon\" [class.open]=\"isOpen\"></i>\n  </div>\n  <p-dropdown class=\"custom-dropdown\" [formControl]=\"control\" [options]=\"options\"\n    [optionLabel]=\"optionLabel | translate\" [placeholder]=\"placeholder | translate\" (onShow)=\"handleDropdownOpen()\"\n    (onHide)=\"handleDropdownClose()\">\n    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n      <span *ngIf=\"selectedItem\">\n        {{ selectedItem.label | translate}}\n      </span>\n      <span *ngIf=\"!selectedItem \">\n        {{ placeholder | translate }}\n      </span>\n    </ng-template>\n    <ng-template pTemplate=\"option\" let-option>{{option.label | translate}} </ng-template>\n  </p-dropdown>\n</div>", styles: [".float-label-container{top:-3px;display:flex;font-size:12px;left:2px;color:#6c6c6c}.float-label-container:has(.open){color:#2e6be5}.float-label-container .arrow-icon{font-size:12px;height:12px;margin-left:8px;align-items:center;transition:transform .3s ease}.float-label-container .arrow-icon.open{transform:rotate(180deg)}::ng-deep .custom-dropdown .p-dropdown-label{font-weight:400;line-height:20px;color:#404040;font-size:14px;padding:4px 0}::ng-deep .custom-dropdown .p-dropdown{border:unset!important;box-shadow:unset!important;width:100%}::ng-deep .custom-dropdown .p-dropdown-trigger{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ControlContainer, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { label: [{
                type: Input
            }], options: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], optionLabel: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtbGliL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtbGliL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQTRDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7O0FBd0IvQyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsd0JBQXdCO0lBTzdELFlBQzhCLGdCQUFrQyxFQUN0RCxHQUFzQjtRQUU5QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUhJLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDdEQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFQdkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixZQUFPLEdBQVUsRUFBRSxDQUFDO1FBQ3BCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGdCQUFXLEdBQVcsT0FBTyxDQUFDO1FBQ3ZDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFNeEIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLE9BQW9CLENBQUM7SUFDckQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUNELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOytHQTNCVSxpQkFBaUI7bUdBQWpCLGlCQUFpQiwrSkFSakI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNoRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsaURDckNILDIyQkFrQk0sdXBCRElGLGVBQWUsMkZBQ2YsWUFBWSxrSUFDWixtQkFBbUIseVRBRW5CLFdBQVcsOEJBQ1gsa0JBQWtCLHFJQUNsQixjQUFjOzs0RkFXTCxpQkFBaUI7a0JBdEI3QixTQUFTOytCQUNFLFVBQVUsY0FFUixJQUFJLFdBQ1A7d0JBQ1AsZUFBZTt3QkFDZixZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixXQUFXO3dCQUNYLGtCQUFrQjt3QkFDbEIsY0FBYztxQkFDZixhQUVVO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGtCQUFrQixDQUFDOzRCQUNoRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7MEJBVUUsUUFBUTs0RUFORixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBGb3Jtc01vZHVsZSwgTkdfVkFMVUVfQUNDRVNTT1IsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCYXNlQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi9iYXNlLWNvbnRyb2wtdmFsdWUtYWNjZXNzb3InO1xuaW1wb3J0IHsgT3ZlcmxheVBhbmVsTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9vdmVybGF5cGFuZWwnO1xuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL2Ryb3Bkb3duJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgT3ZlcmxheVBhbmVsTW9kdWxlLFxuICAgIERyb3Bkb3duTW9kdWxlXG4gIF0sXG4gIHN0eWxlVXJsczogWydkcm9wZG93bi5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IERyb3Bkb3duQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgQmFzZUNvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgb3B0aW9uTGFiZWw6IHN0cmluZyA9ICdsYWJlbCc7XG4gIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgb3ZlcnJpZGUgY29udHJvbENvbnRhaW5lcjogQ29udHJvbENvbnRhaW5lcixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoY29udHJvbENvbnRhaW5lcik7XG4gIH1cblxuICBnZXQgZm9ybUdyb3VwKCk6IEZvcm1Hcm91cCB7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbENvbnRhaW5lcj8uY29udHJvbCBhcyBGb3JtR3JvdXA7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBoYW5kbGVEcm9wZG93bk9wZW4oKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICB9XG4gIGhhbmRsZURyb3Bkb3duQ2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXggcHgtNCBmbGV4LWNvbHVtbiBcIj5cbiAgPGRpdiBjbGFzcz1cImZsb2F0LWxhYmVsLWNvbnRhaW5lclwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImZsb2F0LWxhYmVsXCI+e3tsYWJlbCB8fCAnRGF0ZSd9fTwvbGFiZWw+XG4gICAgPGkgY2xhc3M9XCJwaSBwaS1jaGV2cm9uLWRvd24gYXJyb3ctaWNvblwiIFtjbGFzcy5vcGVuXT1cImlzT3BlblwiPjwvaT5cbiAgPC9kaXY+XG4gIDxwLWRyb3Bkb3duIGNsYXNzPVwiY3VzdG9tLWRyb3Bkb3duXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICBbb3B0aW9uTGFiZWxdPVwib3B0aW9uTGFiZWwgfCB0cmFuc2xhdGVcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgfCB0cmFuc2xhdGVcIiAob25TaG93KT1cImhhbmRsZURyb3Bkb3duT3BlbigpXCJcbiAgICAob25IaWRlKT1cImhhbmRsZURyb3Bkb3duQ2xvc2UoKVwiPlxuICAgIDxuZy10ZW1wbGF0ZSBsZXQtc2VsZWN0ZWRJdGVtIHBUZW1wbGF0ZT1cInNlbGVjdGVkSXRlbVwiPlxuICAgICAgPHNwYW4gKm5nSWY9XCJzZWxlY3RlZEl0ZW1cIj5cbiAgICAgICAge3sgc2VsZWN0ZWRJdGVtLmxhYmVsIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiIXNlbGVjdGVkSXRlbSBcIj5cbiAgICAgICAge3sgcGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJvcHRpb25cIiBsZXQtb3B0aW9uPnt7b3B0aW9uLmxhYmVsIHwgdHJhbnNsYXRlfX0gPC9uZy10ZW1wbGF0ZT5cbiAgPC9wLWRyb3Bkb3duPlxuPC9kaXY+Il19