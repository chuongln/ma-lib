export interface Filter {
    label: string;
    formControlName: string;
    type: string;
    placeholder?: string;
    options?: any[];
    optionValue?: string;
    optionLabel?: string;
}
