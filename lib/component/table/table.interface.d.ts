export interface ISearchListInput {
    maxResultCount: number;
    skipCount: number;
    sorting?: string | undefined;
    filter?: string | undefined;
    isActive?: boolean | undefined;
    pageNumber?: number;
    pageSize?: number;
}
export interface ISearchListOutput {
    items: any[];
    totalCount: number;
}
export interface Column {
    field: string;
    header: string;
    width?: string;
    fixed?: boolean;
    hidden?: boolean;
    type?: string;
    format?: string;
    percentWidth?: string;
}
