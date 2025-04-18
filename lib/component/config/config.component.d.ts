import { EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Column } from '../table/table.interface';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class ConfigDisplayComponent {
    private translate;
    cols: Column[];
    header: string;
    visible: boolean;
    colsConfig: any[];
    selectAll: boolean;
    filterText: string;
    onChangeConfig: EventEmitter<any>;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    get filteredColsConfig(): any[];
    showDialog(): void;
    changeAll(): void;
    checkChangeAll(): void;
    drop(event: CdkDragDrop<string[]>): void;
    cancel(): void;
    apply(): void;
    formatFilter(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigDisplayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ConfigDisplayComponent, "app-config-display", never, { "cols": { "alias": "cols"; "required": false; }; "header": { "alias": "header"; "required": false; }; }, { "onChangeConfig": "onChangeConfig"; }, never, never, true, never>;
}
