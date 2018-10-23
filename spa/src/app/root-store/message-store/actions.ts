import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export enum MessageActionTypes {
    APPEND_CONVERSATIONS = '[MESSAGE] Append conversations',
    UPDATE_CONVERSATION_LAST_MESSAGE = '[MESSAGE] Update conversation last message',
    SET_UNREAD_MESSAGES_COUNT = '[MESSAGE] Set unread messages count',
    SET_ACTIVE_CONVERSATION_ID = '[MESSAGE] Set active conversation id',
    HANDLE_NEW_MESSAGE = '[MESSAGE] Handle new message',
    APPEND_NEW_CONVERSATION = '[MESSAGE] Append new conversation'
}

export class AppendConversations implements Action {
    readonly type = MessageActionTypes.APPEND_CONVERSATIONS;

    constructor(public payload: {
        conversations: any,
        infiniteScroll: {
            page: number,
            disabled: boolean
        }
    }) { }
}

export class SetUnreadMessagesCount implements Action {
    readonly type = MessageActionTypes.SET_UNREAD_MESSAGES_COUNT;

    constructor(public payload: {
        unreadMessagesCount: number
    }) { }
}

export class SetActiveConversationId implements Action {
    readonly type = MessageActionTypes.SET_ACTIVE_CONVERSATION_ID;

    constructor(public payload: {
        activeConversationId: string
    }) { }
}

export class HandleNewMessage implements Action {
    readonly type = MessageActionTypes.HANDLE_NEW_MESSAGE;

    constructor(public payload: {
        message: any
    }) { }
}

export class AppendNewConversation implements Action {
    readonly type = MessageActionTypes.APPEND_NEW_CONVERSATION;

    constructor(public payload: {
        conversation: any,
        self: boolean
    }) { }
}

export class UpdateConversationLastMessage implements Action {
    readonly type = MessageActionTypes.UPDATE_CONVERSATION_LAST_MESSAGE;

    constructor(public payload: {
        conversationId: string,
        lastMessage: any
    }) { }
}

export type MessageActions = AppendConversations
| SetUnreadMessagesCount
| SetActiveConversationId
| HandleNewMessage
| AppendNewConversation
| UpdateConversationLastMessage;
