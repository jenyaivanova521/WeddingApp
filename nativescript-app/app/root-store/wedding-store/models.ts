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

export interface Partner {
	firstName: string,
	lastName: string,
	description?: string,
	birthDate?: any;
	role: WeddingRoleEnum
	avatar?: any;
}

export interface Wedding {
	id?: string,
	name?: string,
	description: string,
	avatar?: any,
	partners: Array<Partner>,
	privacySetting: PrivacySettingEnum
	events?: Array<any> // TODO type for wedidngEvent
}

export interface WeddingDetails {
	id: string,
	name: any,
	createdAt: string,
	member: {
		id: string,
		role: string
	}
}

export interface Member {
	id: string,
	email: string,
	role: string,
	isActive: boolean,
	account: {
		id: string,
		email: string,
		firstName: string,
		lastName: string
	},
	invitation: {
		id: string,
		isAccepted: boolean,
		createdAt: string | null,
		deletedAd: string | null
	}
}
