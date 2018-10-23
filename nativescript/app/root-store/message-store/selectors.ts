import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { State } from './state';

export const selectMessageState: MemoizedSelector<object, State> = createFeatureSelector<State>('message');
const getConversations = (state: State): any => state.conversations;
const getUnreadMessagesCount = (state: State): any => state.unreadMessagesCount;
const getActiveConversationId = (state: State): any => state.activeConversationId;
const getInfiniteScroll = (state: State): any => state.infiniteScroll;

export const selectConversations: MemoizedSelector<object, any[] | null> = createSelector(selectMessageState, getConversations);
export const selectUnreadMessagesCount: MemoizedSelector<object, number> = createSelector(selectMessageState, getUnreadMessagesCount);
export const selectActiveConversationId: MemoizedSelector<object, string> = createSelector(selectMessageState, getActiveConversationId);
export const selectInfiniteScroll: MemoizedSelector<object, object> = createSelector(selectMessageState, getInfiniteScroll);
export const selectConversation = (vendorId: string) => {
  return createSelector(
      selectMessageState,
      (state: State) => {
          return state.conversations.filter(conversation => {
              if(conversation.vendor.id == vendorId) {
                  return conversation;
              }
          });
      }
  );
}
