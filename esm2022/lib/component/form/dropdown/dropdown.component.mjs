import { Component, forwardRef, Input, Optional, } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { MaLibModule } from '../../../ma-lib.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@ngx-translate/core";
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
        ], usesInheritance: true, ngImport: i0, template: "<div class=\"flex flex-column \">\n  <div class=\"float-label-container\">\n    <label class=\"float-label\">{{label || 'Date'}}</label>\n    <i class=\"pi pi-chevron-down arrow-icon\" [class.open]=\"isOpen\"></i>\n  </div>\n  <p-dropdown class=\"custom-dropdown\" [formControl]=\"control\" [options]=\"options\"\n    [optionLabel]=\"optionLabel | translate\" [placeholder]=\"placeholder | translate\" (onShow)=\"handleDropdownOpen()\"\n    (onHide)=\"handleDropdownClose()\">\n    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n      <span *ngIf=\"selectedItem\">\n        {{ selectedItem.label | translate}}\n      </span>\n      <span *ngIf=\"!selectedItem \">\n        {{ placeholder | translate }}\n      </span>\n    </ng-template>\n    <ng-template pTemplate=\"option\" let-option>{{option.label | translate}} </ng-template>\n  </p-dropdown>\n</div>", styles: [".float-label-container{top:-3px;display:flex;font-size:12px;left:2px;color:#6c6c6c}.float-label-container:has(.open){color:#2e6be5}.float-label-container .arrow-icon{font-size:12px;height:12px;margin-left:8px;align-items:center;transition:transform .3s ease}.float-label-container .arrow-icon.open{transform:rotate(180deg)}::ng-deep .custom-dropdown .p-dropdown-label{font-weight:400;line-height:20px;color:#404040;font-size:14px;padding:4px 0}::ng-deep .custom-dropdown .p-dropdown{border:unset!important;box-shadow:unset!important;width:100%}::ng-deep .custom-dropdown .p-dropdown-trigger{display:none}\n"], dependencies: [{ kind: "ngmodule", type: MaLibModule }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i3.TranslatePipe, name: "translate" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: FormsModule }, { kind: "ngmodule", type: OverlayPanelModule }, { kind: "directive", type: i4.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "ngmodule", type: DropdownModule }, { kind: "component", type: i5.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "overlayDirection", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dropdown', standalone: true, imports: [
                        MaLibModule,
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
                    ], template: "<div class=\"flex flex-column \">\n  <div class=\"float-label-container\">\n    <label class=\"float-label\">{{label || 'Date'}}</label>\n    <i class=\"pi pi-chevron-down arrow-icon\" [class.open]=\"isOpen\"></i>\n  </div>\n  <p-dropdown class=\"custom-dropdown\" [formControl]=\"control\" [options]=\"options\"\n    [optionLabel]=\"optionLabel | translate\" [placeholder]=\"placeholder | translate\" (onShow)=\"handleDropdownOpen()\"\n    (onHide)=\"handleDropdownClose()\">\n    <ng-template let-selectedItem pTemplate=\"selectedItem\">\n      <span *ngIf=\"selectedItem\">\n        {{ selectedItem.label | translate}}\n      </span>\n      <span *ngIf=\"!selectedItem \">\n        {{ placeholder | translate }}\n      </span>\n    </ng-template>\n    <ng-template pTemplate=\"option\" let-option>{{option.label | translate}} </ng-template>\n  </p-dropdown>\n</div>", styles: [".float-label-container{top:-3px;display:flex;font-size:12px;left:2px;color:#6c6c6c}.float-label-container:has(.open){color:#2e6be5}.float-label-container .arrow-icon{font-size:12px;height:12px;margin-left:8px;align-items:center;transition:transform .3s ease}.float-label-container .arrow-icon.open{transform:rotate(180deg)}::ng-deep .custom-dropdown .p-dropdown-label{font-weight:400;line-height:20px;color:#404040;font-size:14px;padding:4px 0}::ng-deep .custom-dropdown .p-dropdown{border:unset!important;box-shadow:unset!important;width:100%}::ng-deep .custom-dropdown .p-dropdown-trigger{display:none}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtbGliL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtbGliL3NyYy9saWIvY29tcG9uZW50L2Zvcm0vZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQTRDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFzQnJELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSx3QkFBd0I7SUFPN0QsWUFDOEIsZ0JBQWtDLEVBQ3RELEdBQXNCO1FBRTlCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBSEkscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUN0RCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVB2QixVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBVyxPQUFPLENBQUM7UUFDdkMsV0FBTSxHQUFZLEtBQUssQ0FBQztJQU14QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBb0IsQ0FBQztJQUNyRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0QsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7K0dBM0JVLGlCQUFpQjttR0FBakIsaUJBQWlCLCtKQVJqQjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2hELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRixpRENsQ0gsczJCQWtCTSx1cEJER0YsV0FBVywrTEFDWCxtQkFBbUIseVRBQ25CLFdBQVcsOEJBQ1gsa0JBQWtCLHFJQUNsQixjQUFjOzs0RkFXTCxpQkFBaUI7a0JBcEI3QixTQUFTOytCQUNFLFVBQVUsY0FFUixJQUFJLFdBQ1A7d0JBQ1AsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFdBQVc7d0JBQ1gsa0JBQWtCO3dCQUNsQixjQUFjO3FCQUNmLGFBRVU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUM7NEJBQ2hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzswQkFVRSxRQUFROzRFQU5GLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xDb250YWluZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIEZvcm1zTW9kdWxlLCBOR19WQUxVRV9BQ0NFU1NPUiwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJhc2VDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uL2Jhc2UtY29udHJvbC12YWx1ZS1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBPdmVybGF5UGFuZWxNb2R1bGUgfSBmcm9tICdwcmltZW5nL292ZXJsYXlwYW5lbCc7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZHJvcGRvd24nO1xuaW1wb3J0IHsgTWFMaWJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9tYS1saWIubW9kdWxlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWFMaWJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBPdmVybGF5UGFuZWxNb2R1bGUsXG4gICAgRHJvcGRvd25Nb2R1bGVcbiAgXSxcbiAgc3R5bGVVcmxzOiBbJ2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRHJvcGRvd25Db21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgZXh0ZW5kcyBCYXNlQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgb3B0aW9uczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBvcHRpb25MYWJlbDogc3RyaW5nID0gJ2xhYmVsJztcbiAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBvdmVycmlkZSBjb250cm9sQ29udGFpbmVyOiBDb250cm9sQ29udGFpbmVyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcihjb250cm9sQ29udGFpbmVyKTtcbiAgfVxuXG4gIGdldCBmb3JtR3JvdXAoKTogRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sQ29udGFpbmVyPy5jb250cm9sIGFzIEZvcm1Hcm91cDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGhhbmRsZURyb3Bkb3duT3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gIH1cbiAgaGFuZGxlRHJvcGRvd25DbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbHVtbiBcIj5cbiAgPGRpdiBjbGFzcz1cImZsb2F0LWxhYmVsLWNvbnRhaW5lclwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImZsb2F0LWxhYmVsXCI+e3tsYWJlbCB8fCAnRGF0ZSd9fTwvbGFiZWw+XG4gICAgPGkgY2xhc3M9XCJwaSBwaS1jaGV2cm9uLWRvd24gYXJyb3ctaWNvblwiIFtjbGFzcy5vcGVuXT1cImlzT3BlblwiPjwvaT5cbiAgPC9kaXY+XG4gIDxwLWRyb3Bkb3duIGNsYXNzPVwiY3VzdG9tLWRyb3Bkb3duXCIgW2Zvcm1Db250cm9sXT1cImNvbnRyb2xcIiBbb3B0aW9uc109XCJvcHRpb25zXCJcbiAgICBbb3B0aW9uTGFiZWxdPVwib3B0aW9uTGFiZWwgfCB0cmFuc2xhdGVcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXIgfCB0cmFuc2xhdGVcIiAob25TaG93KT1cImhhbmRsZURyb3Bkb3duT3BlbigpXCJcbiAgICAob25IaWRlKT1cImhhbmRsZURyb3Bkb3duQ2xvc2UoKVwiPlxuICAgIDxuZy10ZW1wbGF0ZSBsZXQtc2VsZWN0ZWRJdGVtIHBUZW1wbGF0ZT1cInNlbGVjdGVkSXRlbVwiPlxuICAgICAgPHNwYW4gKm5nSWY9XCJzZWxlY3RlZEl0ZW1cIj5cbiAgICAgICAge3sgc2VsZWN0ZWRJdGVtLmxhYmVsIHwgdHJhbnNsYXRlfX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiIXNlbGVjdGVkSXRlbSBcIj5cbiAgICAgICAge3sgcGxhY2Vob2xkZXIgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBwVGVtcGxhdGU9XCJvcHRpb25cIiBsZXQtb3B0aW9uPnt7b3B0aW9uLmxhYmVsIHwgdHJhbnNsYXRlfX0gPC9uZy10ZW1wbGF0ZT5cbiAgPC9wLWRyb3Bkb3duPlxuPC9kaXY+Il19