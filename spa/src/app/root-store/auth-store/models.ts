export interface AuthInfo {
    account: {
        id: string;
        email: string;
        isActive: boolean;
        firstName: string;
        lastName: string;
        avatar: string;
        activatedAt: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: string | null;
    };
}
