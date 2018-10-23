import { WeddingRoleEnum } from "~/root-store/wedding-store/models";

export interface Member {
    id: string,
    email: string,
    role: string,
    isActive: boolean,
    weddingId: string,
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

export interface Invitation {
    id: string;
    invitedAt: string;
    wedding: {
        id: string
        name: string
    };
    member: {
        id: string,
        role: WeddingRoleEnum
    };
}
