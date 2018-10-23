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

export interface Vendor {
    id: string;
    name: string;
    avatar: string;
    description: string;
    category: {
        id: number;
        name: string;
    };
    rate: number;
    rating: number;
    vendoReviewsCount: number;
    isActive: boolean;
    address: string;
    lat: number;
    lng: number;
    createdAt: string;
}

export interface VendorDetails {
    id: string;
    name: string;
    avatar: string;
    description: string;
    category: {
        id: number;
        name: string;
    };
    rate: number;
    rating: number;
    vendoReviewsCount: number;
    isActive: boolean;
    address: string;
    lat: number;
    lng: number;
    createdAt: string;
    contacts: {
        type: string;
        value: string;
        isPublic: true;
    }[];
    isOwner: boolean;
    isReviewed: boolean;
}

export interface Profile {
    id: string;
    name: string;
    avatar: string;
    type: string;
    isOwner: boolean;
    privacySetting: string | null;
    memberId: string | null;
    isActive: boolean;
}

export interface Wedding {
    id: string;
    avatar: string;
    name: string;
    description: string;
    member: {
        id: string,
        role: string
    };
    privacySetting: any;
}

export interface WeddingDetails {
    id: string;
    name: any;
    avatar: string | null;
    member: {
        id: string;
        role: string;
    } | null;
    follower: {
        id: string;
    } | null;
    description: string;
    createdAt: string;
}

export interface VendorProduct {
    id: string;
    name: string;
    description: string;
    avatar: string | null;
    price: number;
    currency: string;
    unit: string | null;
    createdAt: string;
}

export interface VendorPhoto {
    id: string;
    vendorId: string;
    filename: string;
    createdAt: string;
}

export enum WeddingRoleEnum {
    Groom = 'groom',
    Bride = 'bride'
}

export enum PrivacySettingEnum {
    Private = 'private',
    Followers = 'followers',
    Registered = 'registered',
    Public = 'public'
}
