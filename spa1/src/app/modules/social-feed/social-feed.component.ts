import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { Post } from '../../root-store/common-models';
import { PostService } from '../../root-store/services/post.service';
import { VendorService } from '../../root-store/services/vendor.service';

import {
    RootStoreState,
    ProfileSelectors,
    CommonModels
} from '../../root-store';

@Component({
    selector: 'app-social-feed',
    templateUrl: './social-feed.component.html',
    styleUrls: ['./social-feed.component.sass']
})
export class SocialFeedComponent implements OnInit, OnDestroy {
    objectValues: any;
    activeProfile: CommonModels.Profile;
    subActiveProfile: ISubscription;
    posts: CommonModels.Post[] | {};
    postForm: any;
    page: number;
    infiniteScrollDisabled: boolean;
    followed: boolean;
    showForm: boolean;
    profilingTest: any;
    recommendedVendors: any;

    constructor(
        private route: ActivatedRoute,
        private store: Store<RootStoreState.State>,
        private postService: PostService,
        private changeDetector: ChangeDetectorRef,
        private vendorService: VendorService
    ) {
    }

    async ngOnInit() {
        this.showForm = true;
        this.posts = {};
        this.objectValues = Object.values;
        this.page = 1;
        this.subActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            if (activeProfile) {
                this.activeProfile = activeProfile;
                this.followed = (localStorage.getItem(this.activeProfile + '-socialFeedShowFollowed') == 'true' ? true : false) || false;
            }
            this.getPosts({
                init: true
            });
        });
        this.profilingTest = localStorage.getItem('profilingTest') ? JSON.parse(localStorage.getItem('profilingTest')) : false;
        this.vendorService.getVendors({
            categoryId: this.profilingTest.categoryId,
            lat: this.profilingTest.lat,
            lng: this.profilingTest.lng,
            page: 1,
            limit: 3,
            random: true
        }).toPromise().then(response => {
            this.recommendedVendors = response.result;
        });
    }

    ngOnDestroy() {
        this.subActiveProfile.unsubscribe();
    }

    appendPost(post) {
        this.posts = Object.assign(post, this.posts);
    }


    showFollowed(value) {
        this.followed = value;
        localStorage.setItem(this.activeProfile + '-socialFeedShowFollowed', value);
        this.getPosts({
            init: true
        });
    }

    async getPosts({ init }) {
        if (init) {
            this.posts = {};
            this.page = 1;
            this.infiniteScrollDisabled = false;
            if (this.activeProfile && this.activeProfile.type == 'wedding' && (['public', 'registered'].indexOf(this.activeProfile.privacySetting) > -1
                || (['followers', 'private'].indexOf(this.activeProfile.privacySetting) > -1 && this.followed))) {
                this.showForm = true;
            } else {
                this.showForm = false;
            }
        }
        let request = await this.postService.getAllPosts({
            page: this.page,
            followed: this.followed
        }).toPromise().then(response => {
            let posts = [];
            response.result.forEach(post => {
                posts[post.id] = post;
            });
            if (response.result.length == 0) {
                this.infiniteScrollDisabled = true;
            }
            return posts;
        });
        this.posts = Object.assign(this.posts, request);
    }

    onScroll(direction) {
        let currentPage = this.page;
        if (direction == 'down') {
            this.page++;
        } else if (this.page > 1) {
            this.page--;
        }
        if (currentPage != this.page) {
            this.getPosts({
                init: false
            });
        }
    }

    public removePost(deletePost: Post): void {
        this.posts = Object.keys(this.posts)
            .filter((key) => {
                const val = this.posts[key];
                return val.id !== deletePost.id;
            })
            .reduce((obj, key) => {
                obj[key] = this.posts[key];
                return obj;
            }, {});

        this.changeDetector.markForCheck();
    }

}
