import {
	Component,
	OnInit,
	OnDestroy,
	ChangeDetectorRef, ViewChild
} from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as applicationSettings from 'tns-core-modules/application-settings';
import { screen } from 'tns-core-modules/platform';
import * as _ from 'lodash';

import { Wedding } from '~/root-store/wedding-store/models';
import { selectActiveWedding } from '~/root-store/wedding-store/selectors';
import { TOP_BAR_HEIGHT } from '~/shared/configs';
import { PostService } from '~/shared/services/post.service';
import { State, CommonModels, ProfileSelectors } from '~/root-store';
import { Post } from '~/shared/types/models/social-feed';
import { WeddingService } from '../../shared/services/wedding.service';
import { MyHttpGetService } from '~/shared/services/http-get.services';
import { Config } from '../../shared/configs/app.config';
import { VendorService } from '~/shared/services/vendor.service';
import { LoadingIndicator } from 'nativescript-loading-indicator';
import { RouterExtensions } from 'nativescript-angular';
// import { Page } from 'tns-core-modules/ui/page/page';
// var view = require("ui/core/view");

@Component({
	selector: 'app-social-feed',
	templateUrl: 'social-feed.component.html',
	providers: [MyHttpGetService],
})
export class SocialFeedComponent implements OnInit, OnDestroy {

	@ViewChild('itemsContainer') itemsContainer;

	public screenHeight: number;
	public height: number;
	private indicator: LoadingIndicator;

	activeProfile: CommonModels.Profile;
	subActiveProfile: ISubscription;
	
	private activeWedding: Wedding;
	private subActiveWedding: ISubscription;
	posts: CommonModels.Post[];
	public postForm: any;
	public page: number;
	public infiniteScrollDisabled: boolean;
	public followed: boolean;
	public showForm: boolean;

	private loadingNewPosts: boolean = false;

	// scrollView;
	profilingTest: any;
	recommendedVendors: any;

	constructor(
		private route: ActivatedRoute,
		private routerExtensions: RouterExtensions,
		private store: Store<State>,
		private postService: PostService,
		private myService: MyHttpGetService,
		private changeDetector: ChangeDetectorRef,
		private vendorService: VendorService,
		// private _page: Page
	) {
		console.log("---Soicial Feed---");
		this.screenHeight = screen.mainScreen.heightDIPs - TOP_BAR_HEIGHT - 80; // Topbar height
		this.indicator = new LoadingIndicator();
	}

	ngOnInit() {
		console.log("---Soicial Feed ngOnInit---");
		Config.previousUrl = "social-feed";
		this.showForm = true;
        this.posts = [];
        this.page = 1;
        this.subActiveProfile = this.store.select(
            ProfileSelectors.selectActiveProfile
        ).subscribe(activeProfile => {
            if (activeProfile) {
				this.activeProfile = activeProfile;
				Config.activeProfile = activeProfile;
				this.followed = (localStorage.getItem(this.activeProfile + '-socialFeedShowFollowed') == 'true' ? true : false) || false;
				
			}
			
			if (this.activeProfile && this.activeProfile.type == 'wedding' && (['public', 'registered'].indexOf(this.activeProfile.privacySetting) > -1
                || (['followers', 'private'].indexOf(this.activeProfile.privacySetting) > -1 && this.followed))) {
                this.showForm = true;
            } else {
                this.showForm = false;
            }	          
		});
		this.getPosts({
			init: true
		});		

		// this.scrollView = view.getViewById(this.page,"scrollView");
		
	}

	ngOnDestroy() {
		// this.subActiveWedding.unsubscribe();
	}

	public appendPost(post) {
		console.log("append Post");
		this.posts.unshift(post);
	}

	public showFollowed(value) {
		this.followed = value;
		applicationSettings.setBoolean(this.activeWedding + '-socialFeedShowFollowed', value);
		this.getPosts({
			init: true
		});
	}
	// autoScroll(postID){
	// 	console.log("Auto Scroll");
	// 	Config.notificationData = null;
	// 	for( var i = 0; i < this.posts.length; i++) {
	// 		if ( this.posts[i].id == postID ) {
	// 			this.posts.splice(i+1,this.posts.length-i-1);				
	// 		}
	// 	}
	// 	var offset = this.scrollView.scrollableHeight; // get the current scroll height
	// 	this.scrollView.scrollToVerticalOffset(offset, false);
	// }

	private getPosts({ init }) {
		console.log("get posts");
        if (init) {
            this.posts = [];
            this.page = 1;
			this.infiniteScrollDisabled = false;
			/*
            if (this.activeProfile && this.activeProfile.type == 'wedding' && (['public', 'registered'].indexOf(this.activeProfile.privacySetting) > -1
                || (['followers', 'private'].indexOf(this.activeProfile.privacySetting) > -1 && this.followed))) {
                this.showForm = true;
            } else {
                this.showForm = false;
            }*/
		}
		this.indicator.show({
			message: 'Loading...'
		  });
        this.postService.getAllPosts({
            page: this.page,
            followed: this.followed
        }).toPromise().then(response => {
			console.log(response.result.length);			
			for( var i = 0; i < response.result.length; i++ ) {
				this.posts.push(response.result[i]);
			}
			if (init) {
				setTimeout(() => {
					this.indicator.hide();
				}, 1000);
			}
			else {
				this.indicator.hide();
			}
			// if( Config.notificationData != null ) {
			// 	this.autoScroll(Config.notificationData.postId);
			// }
            // return this.posts;
        });
        // this.posts = Object.assign(this.posts, request);
    }

	public onScroll(event) {
		// console.log("scroll event", event);
		if (!this.loadingNewPosts && !this.infiniteScrollDisabled) {
			let currentPage = this.page;

			if (event.scrollY > event.object.height - 150) {
				this.page++;
			}
			if (currentPage != this.page) {
				this.loadingNewPosts = true;
				this.getPosts({
					init: false
				});
			}
		}
	}

	public removePost(deletePost: Post): void {
		for( var i = 0; i < this.posts.length; i++) {
			if(this.posts[i].id==deletePost.id) {
				this.posts.splice(i, 1);
			}
		}
        // this.posts = Object.keys(this.posts)
        //     .filter((key) => {
        //         const val = this.posts[key];
        //         return val.id !== deletePost.id;
        //     })
        //     .reduce((obj, key) => {
        //         obj[key] = this.posts[key];
        //         return obj;
        //     }, {});

        this.changeDetector.markForCheck();
    }

}
