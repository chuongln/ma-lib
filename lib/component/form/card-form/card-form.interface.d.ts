export interface CardForm {
    hidden?: boolean;
    type?: string;
    format?: string;
    label: string;
    formControlName: string;
    placeholder?: string;
    options?: any[];
    optionValue?: string;
    optionLabel?: string;
    isRequired?: boolean;
    maxlength?: number;
}
