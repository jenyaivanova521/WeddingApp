import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import * as objectToFormData from 'object-to-formdata';

import { RootStoreState, CommonModels } from '../../../../../root-store';

import { WeddingService } from '../../../../../root-store/services/wedding.service';
import { ProfileService } from '../../../../../root-store/services/profile.service';
import { WeddingEditBase } from '../wedding-edit.base';

@Component({
    selector: 'app-settings-wedding-partners',
    templateUrl: './wedding-partners.component.html',
})
export class SettingsWeddingPartnersComponent extends WeddingEditBase implements OnInit {

    public loading = true;
    public WeddingRoleEnum = CommonModels.WeddingRoleEnum;

    public avatarUrlPrepend: string;
    public formData: FormData = new FormData();
    public avatarUrls: Array<string> = [];
    public isImageValid: Array<boolean> = [false, false];
    public partners: Array<any>;

    public form: Array<any> = [
        {
            role: null
        },
        {
            role: null
        }
    ];

    constructor(
        private weddingService: WeddingService,
        private changeDetector: ChangeDetectorRef,
        public sanitizer: DomSanitizer,
        private store: Store<RootStoreState.State>,
        private profileService: ProfileService
    ) {
        super();
    }

    ngOnInit(): void {
        this.avatarUrlPrepend = `wedding/${this.wedding.id}/avatars/`;

        this.getWeddingPartners();
    }

    private getWeddingPartners(): void {
        this.weddingService.getWeddingPartners({weddingId: this.wedding.id}).subscribe(
            (res: any) => {
                this.loading = false;
                this.partners = res.result;

                this.form = res.result.map((partner: any, i: number) => {
                    return {
                        firstName: partner.firstName,
                        lastName: partner.lastName,
                        role: partner.role,
                    };
                });
                this.changeDetector.markForCheck();
            }
        );
    }

    public handleInput(value: any, input: string, index: number): void {
        this.form[index][input] = value;
    }

    public submit(i: number): void {
        const partner = this.partners[i];
        const editedPartner = this.form[i];

        const filesFormData = new FormData();
        filesFormData.set('avatar', this.formData.get(`partners[${i}][avatar]`)); // Hack

        const formData = objectToFormData(
            editedPartner,
            {indices: true},
            filesFormData
        );

        this.weddingService.editPartner({weddingId: this.wedding.id, partnerId: partner.id, partnerEdited: formData}).subscribe(
            () => {
                this.editActive[i] = false;
                this.getWeddingPartners();
                this.profileService.initProfiles();

                this.changeDetector.markForCheck();
            }, (e) => {
                // TODO handle err
            }
        );
    }


}
