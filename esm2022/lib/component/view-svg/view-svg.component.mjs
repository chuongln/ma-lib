import { Component, Input, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./view-svg.service";
import * as i2 from "@angular/platform-browser";
export class ViewSvgComponent {
    constructor(svgService, sanitizer) {
        this.svgService = svgService;
        this.sanitizer = sanitizer;
    }
    getSafeContent() {
        return this.svgContent;
    }
    ngOnChanges(changes) {
        if (changes['name'] && this.name) {
            const iconName = changes['name'].currentValue;
            this.svgService.getSvg(iconName).subscribe(svgData => {
                this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgData);
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViewSvgComponent, deps: [{ token: i1.SvgService }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ViewSvgComponent, selector: "view-svg", inputs: { name: "name" }, usesOnChanges: true, ngImport: i0, template: "<span style=\"line-height: 0 \" [innerHTML]=\"getSafeContent()\"></span>" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ViewSvgComponent, decorators: [{
            type: Component,
            args: [{ selector: 'view-svg', template: "<span style=\"line-height: 0 \" [innerHTML]=\"getSafeContent()\"></span>" }]
        }], ctorParameters: function () { return [{ type: i1.SvgService }, { type: i2.DomSanitizer }]; }, propDecorators: { name: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1zdmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbWEtbGliL3NyYy9saWIvY29tcG9uZW50L3ZpZXctc3ZnL3ZpZXctc3ZnLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWxpYi9zcmMvbGliL2NvbXBvbmVudC92aWV3LXN2Zy92aWV3LXN2Zy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssR0FLTixNQUFNLGVBQWUsQ0FBQzs7OztBQVN2QixNQUFNLE9BQU8sZ0JBQWdCO0lBSzNCLFlBQ1UsVUFBc0IsRUFDdEIsU0FBdUI7UUFEdkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQzdCLENBQUM7SUFFTCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNoQyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDO1lBRzlDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOytHQXZCVSxnQkFBZ0I7bUdBQWhCLGdCQUFnQiwrRkNsQjdCLDBFQUFvRTs7NEZEa0J2RCxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0UsVUFBVTs0SEFLWCxJQUFJO3NCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IFN2Z1NlcnZpY2UgfSBmcm9tICcuL3ZpZXctc3ZnLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aWV3LXN2ZycsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LXN2Zy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdTdmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG5cbiAgc3ZnQ29udGVudDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3ZnU2VydmljZTogU3ZnU2VydmljZSxcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkgeyB9XG5cbiAgZ2V0U2FmZUNvbnRlbnQoKTogU2FmZUh0bWwge1xuICAgIHJldHVybiB0aGlzLnN2Z0NvbnRlbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXNbJ25hbWUnXSAmJiB0aGlzLm5hbWUpIHtcbiAgICAgIGNvbnN0IGljb25OYW1lID0gY2hhbmdlc1snbmFtZSddLmN1cnJlbnRWYWx1ZTtcblxuXG4gICAgICB0aGlzLnN2Z1NlcnZpY2UuZ2V0U3ZnKGljb25OYW1lKS5zdWJzY3JpYmUoc3ZnRGF0YSA9PiB7XG4gICAgICAgIHRoaXMuc3ZnQ29udGVudCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHN2Z0RhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59IiwiPHNwYW4gc3R5bGU9XCJsaW5lLWhlaWdodDogMCBcIiBbaW5uZXJIVE1MXT1cImdldFNhZmVDb250ZW50KClcIj48L3NwYW4+Il19