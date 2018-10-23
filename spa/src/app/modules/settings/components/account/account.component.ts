import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
    OnDestroy,
    ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DomSanitizer } from '@angular/platform-browser';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ISubscription } from 'rxjs/Subscription';

import { environment } from '../../../../../environments/environment';
import {
    RootStoreState,
    AuthSelectors,
    AuthActions,
} from '../../../../root-store';
import { AuthInfo } from '../../../../root-store/auth-store/models';
import { AuthService } from '../../../../root-store/services/auth.service';
import { WeddingEditBase } from '../wedding/wedding-edit.base';

@Component({
    selector: 'app-settings-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.sass']
})
export class SettingsAccountComponent extends WeddingEditBase implements OnInit, OnDestroy {

    @ViewChild('fileInput') fileInput: ElementRef;

    avatar: any;
    account: any;
    url: string;
    cdnUrl: string;
    webUrl: string;
    formData: FormData;
    subAccount: ISubscription;
    subAccountForm: ISubscription;
    submitted: any;
    errors: any;

    public prependAvatarUrl: string;

    public changePasswordForm: any = {
        password: '',
        password_new: '',
        password_new_repeat: ''
    };
    public deleteAccountPassword = '';

    constructor(
        private store: Store<RootStoreState.State>,
        public sanitizer: DomSanitizer,
        private authService: AuthService,
        private _flashMessagesService: FlashMessagesService,
        private changeDetector: ChangeDetectorRef,
        private router: Router
    ) {
        super();
    }

    ngOnInit() {
        this.submitted = {
            avatar: false,
            account: false,
            changePass: null
        };
        this.errors = {
            avatar: null,
            account: null,
            changePass: null
        };
        this.cdnUrl = environment.cdnUrl;
        this.webUrl = environment.webUrl;

        this.subAccount = this.store.select(
            AuthSelectors.selectAuthInfo
        ).subscribe((state: AuthInfo) => {
            this.account = state.account;
            this.prependAvatarUrl = `account/${this.account.id}/avatars/`;
        });

        this.formData = new FormData();
    }

    ngOnDestroy() {
        if (this.subAccount) {
            this.subAccount.unsubscribe();
        }
        if (this.subAccountForm) {
            this.subAccountForm.unsubscribe();
        }
    }

    public fileChange(event): void {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            const file: File = fileList[0];
            this.url = (window.URL) ? window.URL.createObjectURL(file) : (window as any).webkitURL.createObjectURL(file);
            this.formData.delete('avatar');
            this.formData.append('avatar', file, file.name);
        }
    }

    public submitAvatar(): void {
        if (this.formData.get('avatar')) {
            this.submitted.avatar = true;
            this.authService.setAccountAvatar(this.formData).subscribe(
                () => {
                    this.store.dispatch(new AuthActions.GetAuthInfo());
                    this.submitted.avatar = false;
                    this._flashMessagesService.show('Account photo updated', { cssClass: 'alert-success', timeout: 3000 });
                    this.changeDetector.markForCheck();
                }, (err) => {
                    this.errors.avatar = err.error;
                    this.submitted.avatar = false;
                    this.changeDetector.markForCheck();
                }
            );

            if (this.submitted.avatar && !this.errors.avatar) {
                this.fileInput.nativeElement.value = '';
            }
        }
    }

    public submitAccountInfo(): void {
        this.submitted.account = true;
        this.authService.updateAccount(this.account).subscribe(
            () => {
                this.store.dispatch(new AuthActions.GetAuthInfo());
                this.submitted.account = false;
                this._flashMessagesService.show('Account updated', { cssClass: 'alert-success', timeout: 3000 });
                this.changeDetector.markForCheck();
            }, (err) => {
                this.errors.account = err.error;
                this.submitted.account = false;
                this.changeDetector.markForCheck();
            }
        );
    }

    public submitChangePassword(): void {
        this.submitted.changePass = true;
        this.authService.changePassword(this.changePasswordForm).subscribe(
            () => {
                this.submitted.changePass = false;
                this.changePasswordForm.password = '';
                this.changePasswordForm.password_new = '';
                this.changePasswordForm.password_new_repeat = '';
                this._flashMessagesService.show('Password changed', {cssClass: 'alert-success', timeout: 3000});
            },
            (err) => {
                this.errors.changePass = err.error;
                this.submitted.changePass = false;
            }
        );
    }

    public submitDeleteAccount(): void {
        this.authService.deleteAccount({password: this.deleteAccountPassword}).subscribe(
            () => {
                this._flashMessagesService.show('Account deleted', {cssClass: 'alert-success', timeout: 3000});
                this.authService.clearToken();
                this.router.navigate(['settings', 'account']);
            }
        );
    }

}
