import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';

import { MemberService } from '../../../../root-store/services/member.service';

import {
    RootStoreState,
    MemberModels,
    MemberSelectors
} from '../../../../root-store';

@Component({
    selector: 'wedding-members',
    templateUrl: './wedding-members.component.html',
    styleUrls: ['./wedding-members.component.sass']
})
export class WeddingMembersComponent implements OnInit {
    @Input() weddingId: string;
    members: Observable<MemberModels.Member[]>

    constructor(
        private memberService: MemberService,
        private store: Store<RootStoreState.State>
    ) { }

    async ngOnInit() {
        this.members = this.store.select(
            MemberSelectors.selectMembers
        );
    }

}
