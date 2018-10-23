import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Post } from '../../../../root-store/common-models';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';

import { PostService } from '../../../../root-store/services/post.service';

import {
    CommonModels
} from '../../../../root-store';

@Component({
    selector: 'app-wedding-timeline',
    templateUrl: './timeline.component.html'
})
export class WeddingTimelineComponent implements OnInit, OnDestroy { // TODO: DRY
    objectValues: any;
    posts: CommonModels.Post[] | {};
    postDetails: CommonModels.Post | null;
    page: number;
    parentRouteSubscription: ISubscription;
    routeSubscription: ISubscription;
    resolverSubscription: ISubscription;
    routeEventsSubscription: ISubscription;
    weddingId: string;
    postId: string;
    activeProfile: CommonModels.Profile;
    infiniteScrollDisabled: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private postService: PostService,
        private pageScrollService: PageScrollService,
        @Inject(DOCUMENT) private document: any
    ) { }

    async ngOnInit() {
        this.objectValues = Object.values;
        this.parentRouteSubscription = await this.route.parent.params.subscribe(async (params) => {
            this.weddingId = params.weddingId;
        });
        this.routeSubscription = await this.route.params.subscribe(async (params) => {
            if (params.postId) {
                this.postId = params.postId || null;
                this.getPostDetails();
            }
        });
        this.resolverSubscription = this.route.data.subscribe(
            data => {
                this.activeProfile = data.activeProfile;
            }
        );
        this.routeEventsSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.getPosts({
                    init: true
                });
            }
        });
        this.getPosts({
            init: true
        });

    }

    async ngOnDestroy() {
        this.parentRouteSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
        this.resolverSubscription.unsubscribe();
        this.routeEventsSubscription.unsubscribe();
    }

    appendPost(post) {
        this.posts = Object.assign(post, this.posts);
    }

    async getPosts({ init }) {
        if (init) {
            this.posts = {};
            this.page = 1;
            this.infiniteScrollDisabled = false;
        }
        await this.postService.getPosts({
            weddingId: this.weddingId,
            page: this.page
        }).toPromise().then(response => {
            let posts = [];
            response.result.forEach(post => {
                posts[post.id] = post;
            });
            if (response.result.length == 0) {
                this.infiniteScrollDisabled = true;
            }
            this.posts = Object.assign(this.posts, posts);
        });
    }

    async getPostDetails() {
        await this.postService.getPost({
            weddingId: this.weddingId,
            postId: this.postId
        }).toPromise().then(response => {
            this.postDetails = response.result;
            setTimeout(() => {
                let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
                    document: this.document,
                    scrollTarget: '#post-details',
                    pageScrollOffset: 100,
                    pageScrollSpeed: 1200
                });
                this.pageScrollService.start(pageScrollInstance);
            }, 500);
        });
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
    }

}
