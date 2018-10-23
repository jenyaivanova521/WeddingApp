import { ChangeDetectorRef, Component } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { requestPermissions, takePicture } from 'nativescript-camera';
import * as imagepickerModule from 'nativescript-imagepicker';
import * as permissions from "nativescript-permissions";
import { ImageAsset } from 'tns-core-modules/image-asset';
import * as platformModule from 'tns-core-modules/platform';
import { DialogsService } from '~/shared/services';
import { DialogType } from '~/shared/types/enum';
import { ImageSource } from 'tns-core-modules/image-source/image-source';
import { knownFolders, path } from 'tns-core-modules/file-system/file-system';

declare const android: any;

@Component({
	selector: 'upload-modal',
	templateUrl: 'upload.modal.html',
})
export class UploadModal {

	private imagePicker;

	constructor(
		private params: ModalDialogParams,
		private changeDetector: ChangeDetectorRef,
		private dialogService: DialogsService,
	) {
	}

	public selectPicture(): any {
		
		if (platformModule.device.os === 'Android' && parseInt(platformModule.device.sdkVersion) >= 23) {
			const hasPermission = permissions.hasPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE);
			if( hasPermission) {
				this.startSelection();
			} else {
				permissions.requestPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE).then(
					() => {
						this.startSelection();
					}, (e) => {
						this.dialogService.showDialog({
							type: DialogType.Alert,
							message: e.message
						})
					}
				)
			}
		} else {
			
			this.startSelection();
		}
	}

	public close(param?: any): void {
		this.params.closeCallback(param);
	}

	public takePicture(): any {
	
		this.requestPermission().then(() => {
			takePicture().then(
				(image: ImageAsset) => {
					const imageUrl = platformModule.isAndroid ? image.android : image.ios;					
					const source = new ImageSource();
					source.fromAsset(image)
						.then((imageSource: ImageSource) => {							
							const folderPath: string = knownFolders.documents().path;
							var originPathSplited = imageUrl.split("/");
                			var origFilename = originPathSplited[originPathSplited.length-1];
							const fileName = origFilename;
							const filePath = path.join(folderPath, fileName);
							const saved: boolean = imageSource.saveToFile(filePath, "jpeg");
							if (saved) {
								console.log("Image saved locally!");
								this.close(filePath);
							}
						}, error => {
							console.log("image assets to image source error");
							console.log(error);
						});
		
					
                // var filePath = fs.path.join(fs.knownFolders.documents().path, origFilename);
                // var imageSource = fromFile(image);
                // var saved = imageSource.saveToFile(filePath, "jpeg");
                // console.log("new path: " + filePath);
				// console.log(`item saved:${saved}`);
				
					
					
				}
			).catch(err => {
				this.dialogService.showDialog({
					type: DialogType.Alert,
					message: err.message
				})
			})
		}, (err) => {
			this.dialogService.showDialog({
				type: DialogType.Alert,
				message: err.message
			})
		});
	}

	private startSelection() {
		// TODO fix for multiple if multiple is needed
		this.imagePicker = imagepickerModule.create({
			mode: 'single'
		});
		
		this.imagePicker
			.authorize()
			.then(() => {
				return this.imagePicker.present();
			})
			.then( (selection) => {
				// TODO fix for multiple if multiple is needed (close with array of imageUrls)
				selection.forEach((selected_item) => {
					const imageUrl = platformModule.isAndroid ? selected_item.android : selected_item.ios;

					this.close(imageUrl);
				});
			}).catch((e) => {
				this.dialogService.showDialog({
					type: DialogType.Alert,
					message: e,
				})
			}
		);
	}

	private requestPermission(): Promise<any> {
		return requestPermissions();
	}

}