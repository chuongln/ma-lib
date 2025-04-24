import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CurrencyPipe {
    transform(value, currency = 'VND', locale = 'en-US') {
        if (value == null) {
            return '';
        }
        let formattedValue;
        if (currency === 'VND') {
            formattedValue = new Intl.NumberFormat(locale, {
                style: 'decimal',
                maximumFractionDigits: 0
            }).format(value);
        }
        else {
            formattedValue = new Intl.NumberFormat(locale, {
                style: 'decimal',
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
            }).format(value);
        }
        return ` ${formattedValue} ${currency}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CurrencyPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CurrencyPipe, name: "customCurrency" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CurrencyPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'customCurrency'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21hLWxpYi9zcmMvbGliL3BpcGUvY3VycmVuY3kucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLFlBQVk7SUFFdkIsU0FBUyxDQUFDLEtBQWEsRUFBRSxXQUFtQixLQUFLLEVBQUUsU0FBaUIsT0FBTztRQUN6RSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUNELElBQUksY0FBYyxDQUFBO1FBQ2xCLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtZQUN0QixjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDN0MsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLHFCQUFxQixFQUFFLENBQUM7YUFDekIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQjthQUFNO1lBQ0wsY0FBYyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQzdDLEtBQUssRUFBRSxTQUFTO2dCQUNoQixxQkFBcUIsRUFBRSxDQUFDO2dCQUN4QixxQkFBcUIsRUFBRSxDQUFDO2FBQ3pCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEI7UUFFRCxPQUFPLElBQUksY0FBYyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQzFDLENBQUM7K0dBckJVLFlBQVk7NkdBQVosWUFBWTs7NEZBQVosWUFBWTtrQkFIeEIsSUFBSTttQkFBQztvQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY3VzdG9tQ3VycmVuY3knXG59KVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nID0gJ1ZORCcsIGxvY2FsZTogc3RyaW5nID0gJ2VuLVVTJyk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IGZvcm1hdHRlZFZhbHVlXG4gICAgaWYgKGN1cnJlbmN5ID09PSAnVk5EJykge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlLCB7XG4gICAgICAgIHN0eWxlOiAnZGVjaW1hbCcsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMFxuICAgICAgfSkuZm9ybWF0KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlLCB7XG4gICAgICAgIHN0eWxlOiAnZGVjaW1hbCcsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgfSkuZm9ybWF0KHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCAke2Zvcm1hdHRlZFZhbHVlfSAke2N1cnJlbmN5fWA7XG4gIH1cblxufVxuIl19