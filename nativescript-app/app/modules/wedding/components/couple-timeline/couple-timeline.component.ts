import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '~/root-store';
import { ModalService, PostService } from '~/shared/services';
import { Config } from '~/shared/configs';
import { Post } from '~/shared/types/models/social-feed';
import { Wedding } from '~/root-store/wedding-store/models';

@Component({
	moduleId: module.id,
	selector: 'couple-timeline',
	templateUrl: 'couple-timeline.component.html',
	styleUrls: ['./couple-timeline.component.scss']
})
export class CoupleTimelineComponent {

	public posts: Post[];
	page: number;
	weddingId:string;
	public showForm: boolean;
	private activeWedding: Wedding;
	constructor(
		private modalService: ModalService,
		private store: Store<State>,
		private postService: PostService,
	) {

	}
	ngOnInit(): void {
		console.log("couple profile timeline ngOnit");
		console.log(Config.activeWedding);
		this.activeWedding = Config.activeWedding;
		this.showForm = true;
		if( Config.activeWedding ) {
			this.weddingId = Config.activeWedding.id;
		}

		this.getPosts({
            init: true
        });
	}
	getPosts({ init }) {
        if (init) {
            this.posts = [];
            this.page = 1;            
        }
        this.postService.getPosts({
            weddingId: this.weddingId,
            page: this.page
        }).subscribe(response => {
			// console.log(response);
            let posts = [];
            response.result.forEach(post => {
				// posts[post.id] = post;
				console.log(post);
				posts.push(post);
            });
            if (response.result.length == 0) {
                console.log("no posts");
            }
            this.posts = Object.assign(this.posts, posts);
        },error => {
			console.log(error);
		});
    }
	ngOnDestroy() {
        
	}
	public appendPost(post) {
		console.log("append Post");
		this.posts.unshift(post);
	}
}
