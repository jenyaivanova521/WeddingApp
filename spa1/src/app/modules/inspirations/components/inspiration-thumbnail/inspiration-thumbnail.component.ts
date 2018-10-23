import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';

import { InspirationService } from '../../../../root-store/services/inspiration.service';
import { environment } from '../../../../../environments/environment';

@Component({
    selector: 'app-inspiration-thumbnail',
    templateUrl: './inspiration-thumbnail.component.html'
})
export class InspirationThumbnailComponent implements OnInit {
    @Input() inspiration: any;

    constructor(
        private route: ActivatedRoute,
        private inspirationService: InspirationService
    ) { }

    async ngOnInit() {
    }

    getUrl(inspiration) {
        return environment.cdnUrl + '/inspirations/' + inspiration.id + '/' + inspiration.filename.replace(/(\.[\w\d_-]+)$/i, '_mdw$1');
    }

}
