import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import * as objectToFormData from 'object-to-formdata';
import { ActivatedRoute } from '@angular/router';
import { VendorService } from '../../../../root-store/services/vendor.service';
import { PaymentService } from '../../../../root-store/services/payment.service';
import { ProfileService } from '../../../../root-store/services/profile.service';
import { environment } from '../../../../../environments/environment';
import { Observable } from "rxjs/Observable"

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'vendor-form-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.sass']
})
export class VendorFormPaymentComponent implements OnInit, OnDestroy {
    @Input() mode: string;
    @Output() setStep = new EventEmitter<number>();
    subActiveProfile: ISubscription;
    vendorProfilePrice: number;
    vendorInvoiceInfo: any;
    paymentUrl: string;
    countries: object[] = [];
    activeProfile: any;

    constructor(
        private store: Store<RootStoreState.State>,
        private vendorService: VendorService,
        private route: ActivatedRoute,
        private paymentService: PaymentService,
        private profileService: ProfileService
    ) { }

    async ngOnInit() {
        this.vendorProfilePrice = environment.vendorProfilePrice;
        this.activeProfile = this.route.snapshot.data.activeProfile;
        this.subActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(async activeProfile => {
            this.activeProfile = activeProfile;
        });
        this.paymentUrl = environment.apiUrl + '/vendors/' + this.activeProfile.id + '/checkout';
        this.vendorInvoiceInfo = {
            vendorId: this.activeProfile.id,
            companyName: null,
            companyAddress: null,
            country: {
                id: null,
                name: null,
                code: null
            },
            vatNumber: null
        }
        this.countries = await this.vendorService.getCountries().toPromise().then(response => {
            return response.result;
        });
        await this.vendorService.getVendorInvoiceInfo(this.activeProfile.id).toPromise().then(response => {
            if(response.result) {
                this.vendorInvoiceInfo = response.result;
            }
        })
    }

    ngOnDestroy() {
        this.subActiveProfile.unsubscribe();
    }

    createPurchase() {
        return (nonce,
            chargeAmount,
            vendorInvoiceInfo = { ...this.vendorInvoiceInfo },
            vendorService = this.vendorService,
            paymentService = this.paymentService,
            vendorId = this.activeProfile.id
        ) => {
            return new Observable((observer) => {
                vendorService.setVendorInvoiceInfo({
                    vendorId: vendorInvoiceInfo.vendorId,
                    vendorInvoiceInfo
                }).toPromise().then(() => {
                    return paymentService.checkout({
                        nonce, chargeAmount, invoiceInfo: vendorInvoiceInfo, vendorId
                    }).toPromise().then(response => {
                        observer.next(response)
                    }).catch(error => {
                        observer.error(error);
                    })
                }).catch(error => {
                    observer.error(error);
                })
            })
        }

    }

    async paymentStatus(status) {
        if(status.success && ['authorized', 'submitted_for_settlement', 'settling', 'settled'].indexOf(status.transaction.status) > -1) {
            this.setStep.emit(5);
            this.profileService.initProfiles();
        }
    }

}
