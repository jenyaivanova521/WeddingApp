import { Action } from '@ngrx/store';
import { MessageActions, MessageActionTypes } from './actions';
import { initialState, State } from './state';

import { environment } from '../../../environments/environment';

export function reducer(state = initialState, action: MessageActions) {

    let index;
    let updatedConversations = [];
    let unreadMessagesCount;
    switch (action.type) {
        case MessageActionTypes.APPEND_CONVERSATIONS:
            let conversationsToAppend = {};
            action.payload.conversations.map((item, index) => {
                if (item.id !== state.activeConversationId) {
                    item.unreadMessagesCount = 0
                }
                conversationsToAppend[item.id] = item;
            });
            for(let i = 0; i < state.conversations.length; i++) {
                let conversation = state.conversations[i];
                if(conversationsToAppend[conversation.id]) {
                    delete conversationsToAppend[conversation.id];
                }
            }
            return {
                ...state,
                conversations: [
                    ...state.conversations,
                    ...Object.values(conversationsToAppend)
                ],
                infiniteScroll: {
                    ...state.infiniteScroll,
                    page: action.payload.infiniteScroll.page,
                    disabled: action.payload.infiniteScroll.disabled
                }
            };
        case MessageActionTypes.UPDATE_CONVERSATION_LAST_MESSAGE:
            let conversationToUpdate;
            unreadMessagesCount = state.unreadMessagesCount;
            for (let i = 0; i < state.conversations.length; i++) {
                let conversation = Object.assign({}, state.conversations[i]);
                if (conversation.id == action.payload.conversationId) {
                    conversationToUpdate = conversation;
                } else {
                    updatedConversations.push(conversation);
                }
            }
            if (conversationToUpdate) {
                conversationToUpdate.lastMessage = action.payload.lastMessage;
                updatedConversations.unshift(conversationToUpdate);
            }
            if (state.activeConversationId !== conversationToUpdate.id) {
                let sound = new Audio(environment.cdnUrl + '/sounds/message.mp3');
                sound.play();
                conversationToUpdate.unreadMessagesCount++;
                unreadMessagesCount++;
            }
            return {
                ...state,
                conversations: updatedConversations,
                unreadMessagesCount: unreadMessagesCount
            };
        case MessageActionTypes.SET_UNREAD_MESSAGES_COUNT:
            return {
                ...state,
                unreadMessagesCount: action.payload.unreadMessagesCount
            };
        case MessageActionTypes.SET_ACTIVE_CONVERSATION_ID:
            if (!action.payload.activeConversationId) {
                return {
                    ...state,
                    activeConversationId: null
                }
            }
            updatedConversations = state.conversations.map((item, index) => {
                if (item.id !== action.payload.activeConversationId) {
                    return item;
                }
                unreadMessagesCount = state.unreadMessagesCount - parseInt(item.unreadMessagesCount);
                return {
                    ...item,
                    unreadMessagesCount: 0
                };
            });
            return {
                ...state,
                activeConversationId: action.payload.activeConversationId,
                conversations: updatedConversations,
                unreadMessagesCount: unreadMessagesCount
            }
        case MessageActionTypes.APPEND_NEW_CONVERSATION:
            unreadMessagesCount = state.unreadMessagesCount;
            if(!action.payload.self) {
                let sound = new Audio(environment.cdnUrl + '/sounds/message.mp3');
                sound.play();
                unreadMessagesCount++;
            }
            return {
                ...state,
                conversations: [
                    action.payload.conversation,
                    ...state.conversations
                ],
                unreadMessagesCount: unreadMessagesCount
            };
        default:
            return state;
    }

}
