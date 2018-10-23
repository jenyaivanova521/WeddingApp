export interface Post {
	id: string;
	text: string;
	allowComments: boolean;
	commentsCount: number;
	likesCount: number;
	wedding: {
		id: string;
		name: string;
		avatar: string;
	};
	photos: object[];
	comments?: object[];
	createdAt: string;
	updatedAt: string;
}

export interface Comment {
	id: string;
	postId: string;
	text: string;
	asWedding: boolean;
	author: {
		id: string;
		account: {
			id: string;
			firstName: string;
			lastName: string;
			avatar: string;
		},
		wedding: {
			id: string;
			name: string;
			avatar: string;
		};
	}
	createdAt: string;
	updatedAt: string
}

export interface Photo {
	id: string;
	weddingId: string;
	filename: string;
	createdAt: string;
}