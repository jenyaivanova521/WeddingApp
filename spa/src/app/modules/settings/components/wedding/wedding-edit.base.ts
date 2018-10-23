import { Input } from '@angular/core';

import { CommonModels } from '../../../../root-store';

export abstract class WeddingEditBase {

    @Input() public wedding: CommonModels.Wedding;

    public editActive: Array<boolean> = [false, false];

    public editRow(i: number): void {
        this.editActive[i] = true;
    }

    public cancelEdit(i: number): void {
        this.editActive[i] = false;
    }

}
