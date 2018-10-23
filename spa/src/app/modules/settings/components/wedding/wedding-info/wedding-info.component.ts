import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as objectToFormData from 'object-to-formdata';

import { RootStoreState, CommonModels } from '../../../../../root-store';
import { WeddingService } from '../../../../../root-store/services/wedding.service';
import { ProfileService } from '../../../../../root-store/services/profile.service';
import { WeddingEditBase } from '../wedding-edit.base';

@Component({
    selector: 'app-settings-wedding-info',
    templateUrl: './wedding-info.component.html',
})
export class SettingsWeddingInfoComponent extends WeddingEditBase implements OnInit {

    public PrivacySettingEnum = CommonModels.PrivacySettingEnum;

    public prependAvatarUrl: string;
    public formData: FormData = new FormData();
    public avatarUrl: string;
    public isImageValid = false;

    public form: any = {
        privacySetting: null
    };

    constructor(
        private weddingService: WeddingService,
        private changeDetector: ChangeDetectorRef,
        private store: Store<RootStoreState.State>,
        public sanitizer: DomSanitizer,
        private profileService: ProfileService
    ) {
        super();
    }

    ngOnInit(): void {
        this.prependAvatarUrl = `wedding/${this.wedding.id}/avatars/`;
        this.form.privacySetting = this.wedding.privacySetting;
    }

    public handleInput(value: any, input: string): void {
        this.form[input] = value;
    }

    public submit(): void {
        const filesFormData = new FormData();
        filesFormData.set('avatar', this.formData.get('avatar')); // Hack

        const formData = objectToFormData(
            this.form,
            {indices: true},
            filesFormData
        );

        this.weddingService.editWedding({weddingId: this.wedding.id, weddingEdited: formData}).subscribe(
            () => {
                this.profileService.initProfiles();
                this.editActive[0] = false;
                this.changeDetector.markForCheck();
            }, (e) => {
                // TODO handle err
            }
        );
    }


}
