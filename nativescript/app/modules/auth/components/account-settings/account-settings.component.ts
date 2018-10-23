import { Component, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { screen } from 'tns-core-modules/platform';

import { State, AuthSelectors, AuthActions } from '~/root-store';
import { CDN_URL, WEB_URL } from '../../../../shared/configs/app.config';
import { AuthInfo } from '~/root-store/auth-store/models';
import { ISubscription } from 'rxjs/Subscription';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from '~/shared/services';
import * as Toast from 'nativescript-toast';
import { Router } from '@angular/router';
import { LoadingIndicator } from 'nativescript-loading-indicator';
var FileSystem = require("file-system");
import * as bghttp from 'nativescript-background-http';
import { API_URL, Config } from '~/shared/configs';

@Component({
	moduleId: module.id,
	selector: 'account-settings', //9.4 
    templateUrl: 'account-settings.component.html',
    styleUrls: ['./account-settings.component.scss']
})
export class AccountsettingsComponent {

	public activeTab: string = 'account';
	public scrollHeight: number;
    private indicator: LoadingIndicator;
    
	selectedPicture:string;

	avatar: any;
    account: any;
    url: string;
    cdnUrl: string;
    webUrl: string;
    formData: FormData;
    formDataAvatar: string;
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
		private store: Store<State>,
		public sanitizer: DomSanitizer,
        private authService: AuthService,
        private changeDetector: ChangeDetectorRef,
        private router: Router
	) {
		console.log("---account-setting---")
		
		const screenHeight = screen.mainScreen.heightDIPs;
        this.scrollHeight = screenHeight - 140;
        this.indicator = new LoadingIndicator();
	}

	public setActiveTab(tab: string): void {
		this.activeTab = tab;
	}
	photoSelected(event){
		console.log(event);
        this.selectedPicture = event;
        this.formDataAvatar = event;
        this.submitAvatar();
	}

	ngOnInit() {
        Config.previousUrl = "account-settings";
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
        this.cdnUrl = CDN_URL;
        this.webUrl = WEB_URL;
        // this.authService.getAccountInfo().toPromise().then(response => {
        //     console.log("get Authinfo: ", response.result);
        //     return response.result;
        // });

        this.subAccount = this.store.select(
            AuthSelectors.selectAuthInfo
        ).subscribe((state: AuthInfo) => {
            console.log("auth info");
            console.log(state.account);
			this.account = state.account;
            this.prependAvatarUrl = `account/${this.account.id}/avatars/`;

            if(this.account.avatar) {
                this.selectedPicture = CDN_URL + '/' + (this.prependAvatarUrl ? this.prependAvatarUrl : '') + this.account.avatar.replace(/(\.[\w\d_-]+)$/i, '_sq$1');
                console.log(this.selectedPicture);
            }
        });

        this.formData = new FormData();
        this.formDataAvatar = "";
	}
	public fileChange(filepath): void {
        console.log("file change: ",filepath);
        this.formDataAvatar = filepath;
        if(filepath && filepath.length > 0) {
            this.submitAvatar();
        }
        // let file = FileSystem.File.fromPath(filepath);
        // if (file != null) {
        //     // const file: File = fileList[0];            
        //     this.url = (window.URL) ? window.URL.createObjectURL(file) : (window as any).webkitURL.createObjectURL(file);
        //     // this.formData.delete('avatar');
        //     // this.formData.append('avatar', file, file.name);
            
            
        //     this.submitAvatar();
        // }
    }

    public submitAvatar(): void {
        if (this.formDataAvatar && this.formDataAvatar.length > 0) {
            this.submitted.avatar = true;
            this.indicator.show({
                message: 'Loading...'
              });
            let session = bghttp.session('post');
		    let params = []; 

            const param = {
                name: "avatar",
                fileName: `${this.formDataAvatar}`,
                mimeType: 'image/jpeg',
                
            };
            params.push(param);
            const url = API_URL + '/account';

            let request = {
                url: url,
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/form-data',
                    'Authorization': 'Bearer ' + this.authService.getToken(),
                },
                description:"Account Avatar Upload"
            };
            let task: bghttp.Task;
            console.log(params);
            task = session.multipartUpload(params, request);
            task.on('responded', (response) => this.onCompleteUpload(response));
            task.on('error', this.onUploadError)
        }        
    }
        // this.authService.setAccountAvatar(this.formData).subscribe(
        //         () => {
        //             this.store.dispatch(new AuthActions.GetAuthInfo());
        //             this.submitted.avatar = false;
        //             this.indicator.hide();
        //             // this._flashMessagesService.show('Account photo updated', { cssClass: 'alert-success', timeout: 3000 });
        //             Toast.makeText("Account photo updated", "long").show();
        //             this.changeDetector.markForCheck();
        //         }, (err) => {
        //             this.errors.avatar = err.error;
        //             this.submitted.avatar = false;
        //             this.indicator.hide();
        //             this.changeDetector.markForCheck();
        //         }
        //     );

        //     if (this.submitted.avatar && !this.errors.avatar) {
        //         // this.fileInput.nativeElement.value = '';
        //     }
        // }
    
    public onCompleteUpload(response): void {
        // TODO redirect to app and get weddings
        console.log("avatar updated")
        Toast.makeText("Your profile picture updated", "long").show();
        this.formDataAvatar = "";
        this.indicator.hide();
        // this.changeDetector.markForCheck();
	}

	public onUploadError(error): void {
        console.log(error);
        Toast.makeText("Your profile picture upload failed", "long").show();
        this.indicator.hide();
        // this.changeDetector.markForCheck();
    }
    
    public submitAccountInfo(): void {
        this.submitted.account = true;
        this.indicator.show({
            message: 'Loading...'
          });
        this.authService.updateAccount(this.account).subscribe(
            () => {
                this.store.dispatch(new AuthActions.GetAuthInfo());
                this.submitted.account = false;
                this.indicator.hide();
                Toast.makeText("Account updated", "long").show();
                // this.changeDetector.markForCheck();
            }, (err) => {
                this.errors.account = err.error;
                this.submitted.account = false;
                this.indicator.hide();
                // this.changeDetector.markForCheck();
            }
        );
    }

    public submitChangePassword(): void {
        this.indicator.show({
            message: 'Loading...'
          });
        this.submitted.changePass = true;
        this.authService.changePassword(this.changePasswordForm).subscribe(
            () => {
                this.submitted.changePass = false;
                this.indicator.hide();
                this.changePasswordForm.password = '';
                this.changePasswordForm.password_new = '';
                this.changePasswordForm.password_new_repeat = '';
                // this._flashMessagesService.show('', {cssClass: 'alert-success', timeout: 3000});
                Toast.makeText("Password changed", "long").show();
            },
            (err) => {
                this.errors.changePass = err.error;
                this.submitted.changePass = false;
                this.indicator.hide();
            }
        );
    }

    public submitDeleteAccount(): void {
        this.authService.deleteAccount({password: this.deleteAccountPassword}).subscribe(
            () => {
                // this._flashMessagesService.show('Account deleted', {cssClass: 'alert-success', timeout: 3000});
                this.authService.clearToken();
                this.router.navigate(['settings', 'account']);
            }
        );
    }
}
