import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ISubscription } from 'rxjs/Subscription';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import * as objectToFormData from 'object-to-formdata';
import { Store } from '@ngrx/store';

import { distinctUntilChanged, debounceTime, switchMap, tap, catchError, map } from 'rxjs/operators'
import { Subject, Observable, of, concat } from 'rxjs';

import { InspirationService } from '../../../../root-store/services/inspiration.service';
import { environment } from '../../../../../environments/environment';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'app-add-inspiration-modal',
    templateUrl: './add-inspiration-modal.component.html',
    styleUrls: ['./add-inspiration-modal.component.sass']
})
export class AddInspirationModalComponent implements OnInit, OnDestroy {
    onSubmitEvent: EventEmitter<any> = new EventEmitter();
    activeProfile: CommonModels.Profile;
    subscriptionActiveProfile: ISubscription;
    routeSubscription: ISubscription;
    formData: FormData;
    imageUrl: string;
    dropzoneClass: string;
    defaultTags: object[];
    tags: Observable<any>;
    tagsLoading = false;
    tagsInput = new Subject<string>();
    selectedTags: any[] = [];
    imageFile: any;
    inspiration: {
        description: string;
        tags: string;
        authorWeddingId: string;
    }
    submitted: boolean;
    error: any;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<RootStoreState.State>,
        private route: ActivatedRoute,
        private inspirationService: InspirationService,
        public sanitizer: DomSanitizer,
    ) { }

    async ngOnInit() {
        this.submitted = false;
        this.inspiration = {
            description: '',
            tags: '',
            authorWeddingId: ''
        }
        this.subscriptionActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            this.activeProfile = activeProfile;
            this.inspiration.authorWeddingId = activeProfile.id;
        });
        this.formData = new FormData();

        this.loadTags();
    }

    ngOnDestroy() {
        this.subscriptionActiveProfile.unsubscribe();
    }

    cancel() {
        this.activeModal.close();
    }

    async onSubmit() {
        this.submitted = true;
        this.inspiration.tags = this.selectedTags.join(',');
        let formData = objectToFormData(
            this.inspiration,
            this.formData
        );
        await this.inspirationService.addInspiration(formData)
            .toPromise().then(async response => {
                await this.inspirationService.getInspiration({
                    inspirationId: response.result,
                    pinnedToWeddingId: this.activeProfile.id
                }).toPromise().then(response => {
                    this.activeModal.close();
                    this.submitted = false;
                    this.onSubmitEvent.emit(response.result);
                });
            }).catch(error => {
                this.error = error;
                this.submitted = false;
            });
    }

    imageInputChange(event) {
        let fileList: FileList = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        if (fileList.length > 0) {
            let file = fileList[0];
            this.imageUrl = (window.URL) ? window.URL.createObjectURL(file) : (window as any).webkitURL.createObjectURL(file);
            this.formData.append('image', file, file.name);
        }
    }

    deleteImage() {
        this.imageUrl = '';
        this.formData.delete('image');
    }

    async loadTags() {
        this.tags = concat(
            of([]),
            this.tagsInput.pipe(
                debounceTime(200),
                distinctUntilChanged(),
                tap(() => this.tagsLoading = true),
                switchMap(term => this.inspirationService.getTags(term).pipe(
                    map(response => {
                        return response.result
                    }),
                    catchError(() => of([])),
                    tap(() => this.tagsLoading = false)
                ))
            )
        );
    }

}
