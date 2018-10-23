"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
exports.selectMessageState = store_1.createFeatureSelector('message');
var getConversations = function (state) { return state.conversations; };
var getUnreadMessagesCount = function (state) { return state.unreadMessagesCount; };
var getActiveConversationId = function (state) { return state.activeConversationId; };
var getInfiniteScroll = function (state) { return state.infiniteScroll; };
exports.selectConversations = store_1.createSelector(exports.selectMessageState, getConversations);
exports.selectUnreadMessagesCount = store_1.createSelector(exports.selectMessageState, getUnreadMessagesCount);
exports.selectActiveConversationId = store_1.createSelector(exports.selectMessageState, getActiveConversationId);
exports.selectInfiniteScroll = store_1.createSelector(exports.selectMessageState, getInfiniteScroll);
exports.selectConversation = function (vendorId) {
    return store_1.createSelector(exports.selectMessageState, function (state) {
        return state.conversations.filter(function (conversation) {
            if (conversation.vendor.id == vendorId) {
                return conversation;
            }
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBSXFCO0FBSVIsUUFBQSxrQkFBa0IsR0FBb0MsNkJBQXFCLENBQVEsU0FBUyxDQUFDLENBQUM7QUFDM0csSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQVksSUFBVSxPQUFBLEtBQUssQ0FBQyxhQUFhLEVBQW5CLENBQW1CLENBQUM7QUFDcEUsSUFBTSxzQkFBc0IsR0FBRyxVQUFDLEtBQVksSUFBVSxPQUFBLEtBQUssQ0FBQyxtQkFBbUIsRUFBekIsQ0FBeUIsQ0FBQztBQUNoRixJQUFNLHVCQUF1QixHQUFHLFVBQUMsS0FBWSxJQUFVLE9BQUEsS0FBSyxDQUFDLG9CQUFvQixFQUExQixDQUEwQixDQUFDO0FBQ2xGLElBQU0saUJBQWlCLEdBQUcsVUFBQyxLQUFZLElBQVUsT0FBQSxLQUFLLENBQUMsY0FBYyxFQUFwQixDQUFvQixDQUFDO0FBRXpELFFBQUEsbUJBQW1CLEdBQTJDLHNCQUFjLENBQUMsMEJBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUNuSCxRQUFBLHlCQUF5QixHQUFxQyxzQkFBYyxDQUFDLDBCQUFrQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFDekgsUUFBQSwwQkFBMEIsR0FBcUMsc0JBQWMsQ0FBQywwQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0FBQzNILFFBQUEsb0JBQW9CLEdBQXFDLHNCQUFjLENBQUMsMEJBQWtCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUMvRyxRQUFBLGtCQUFrQixHQUFHLFVBQUMsUUFBZ0I7SUFDakQsTUFBTSxDQUFDLHNCQUFjLENBQ2pCLDBCQUFrQixFQUNsQixVQUFDLEtBQVk7UUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsVUFBQSxZQUFZO1lBQzFDLEVBQUUsQ0FBQSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUNKLENBQUM7QUFDSixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgY3JlYXRlRmVhdHVyZVNlbGVjdG9yLFxyXG4gICAgY3JlYXRlU2VsZWN0b3IsXHJcbiAgICBNZW1vaXplZFNlbGVjdG9yXHJcbn0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RNZXNzYWdlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBTdGF0ZT4gPSBjcmVhdGVGZWF0dXJlU2VsZWN0b3I8U3RhdGU+KCdtZXNzYWdlJyk7XHJcbmNvbnN0IGdldENvbnZlcnNhdGlvbnMgPSAoc3RhdGU6IFN0YXRlKTogYW55ID0+IHN0YXRlLmNvbnZlcnNhdGlvbnM7XHJcbmNvbnN0IGdldFVucmVhZE1lc3NhZ2VzQ291bnQgPSAoc3RhdGU6IFN0YXRlKTogYW55ID0+IHN0YXRlLnVucmVhZE1lc3NhZ2VzQ291bnQ7XHJcbmNvbnN0IGdldEFjdGl2ZUNvbnZlcnNhdGlvbklkID0gKHN0YXRlOiBTdGF0ZSk6IGFueSA9PiBzdGF0ZS5hY3RpdmVDb252ZXJzYXRpb25JZDtcclxuY29uc3QgZ2V0SW5maW5pdGVTY3JvbGwgPSAoc3RhdGU6IFN0YXRlKTogYW55ID0+IHN0YXRlLmluZmluaXRlU2Nyb2xsO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdENvbnZlcnNhdGlvbnM6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBhbnlbXSB8IG51bGw+ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TWVzc2FnZVN0YXRlLCBnZXRDb252ZXJzYXRpb25zKTtcclxuZXhwb3J0IGNvbnN0IHNlbGVjdFVucmVhZE1lc3NhZ2VzQ291bnQ6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBudW1iZXI+ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TWVzc2FnZVN0YXRlLCBnZXRVbnJlYWRNZXNzYWdlc0NvdW50KTtcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEFjdGl2ZUNvbnZlcnNhdGlvbklkOiBNZW1vaXplZFNlbGVjdG9yPG9iamVjdCwgc3RyaW5nPiA9IGNyZWF0ZVNlbGVjdG9yKHNlbGVjdE1lc3NhZ2VTdGF0ZSwgZ2V0QWN0aXZlQ29udmVyc2F0aW9uSWQpO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0SW5maW5pdGVTY3JvbGw6IE1lbW9pemVkU2VsZWN0b3I8b2JqZWN0LCBvYmplY3Q+ID0gY3JlYXRlU2VsZWN0b3Ioc2VsZWN0TWVzc2FnZVN0YXRlLCBnZXRJbmZpbml0ZVNjcm9sbCk7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDb252ZXJzYXRpb24gPSAodmVuZG9ySWQ6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcclxuICAgICAgc2VsZWN0TWVzc2FnZVN0YXRlLFxyXG4gICAgICAoc3RhdGU6IFN0YXRlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGUuY29udmVyc2F0aW9ucy5maWx0ZXIoY29udmVyc2F0aW9uID0+IHtcclxuICAgICAgICAgICAgICBpZihjb252ZXJzYXRpb24udmVuZG9yLmlkID09IHZlbmRvcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb252ZXJzYXRpb247XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICApO1xyXG59XHJcbiJdfQ==