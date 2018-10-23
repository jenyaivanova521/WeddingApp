export interface State {
    conversations: any[];
    unreadMessagesCount: number;
    activeConversationId: string | null;
    infiniteScroll: {
        page: number,
        disabled: boolean
    };
}

export const initialState: State = {
    conversations: [],
    unreadMessagesCount: 0,
    activeConversationId: null,
    infiniteScroll: {
        page: 1,
        disabled: false
    }
};
