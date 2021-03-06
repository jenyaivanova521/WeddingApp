"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageActionTypes;
(function (MessageActionTypes) {
    MessageActionTypes["APPEND_CONVERSATIONS"] = "[MESSAGE] Append conversations";
    MessageActionTypes["UPDATE_CONVERSATION_LAST_MESSAGE"] = "[MESSAGE] Update conversation last message";
    MessageActionTypes["SET_UNREAD_MESSAGES_COUNT"] = "[MESSAGE] Set unread messages count";
    MessageActionTypes["SET_ACTIVE_CONVERSATION_ID"] = "[MESSAGE] Set active conversation id";
    MessageActionTypes["HANDLE_NEW_MESSAGE"] = "[MESSAGE] Handle new message";
    MessageActionTypes["APPEND_NEW_CONVERSATION"] = "[MESSAGE] Append new conversation";
})(MessageActionTypes = exports.MessageActionTypes || (exports.MessageActionTypes = {}));
var AppendConversations = /** @class */ (function () {
    function AppendConversations(payload) {
        this.payload = payload;
        this.type = MessageActionTypes.APPEND_CONVERSATIONS;
    }
    return AppendConversations;
}());
exports.AppendConversations = AppendConversations;
var SetUnreadMessagesCount = /** @class */ (function () {
    function SetUnreadMessagesCount(payload) {
        this.payload = payload;
        this.type = MessageActionTypes.SET_UNREAD_MESSAGES_COUNT;
    }
    return SetUnreadMessagesCount;
}());
exports.SetUnreadMessagesCount = SetUnreadMessagesCount;
var SetActiveConversationId = /** @class */ (function () {
    function SetActiveConversationId(payload) {
        this.payload = payload;
        this.type = MessageActionTypes.SET_ACTIVE_CONVERSATION_ID;
    }
    return SetActiveConversationId;
}());
exports.SetActiveConversationId = SetActiveConversationId;
var HandleNewMessage = /** @class */ (function () {
    function HandleNewMessage(payload) {
        this.payload = payload;
        this.type = MessageActionTypes.HANDLE_NEW_MESSAGE;
    }
    return HandleNewMessage;
}());
exports.HandleNewMessage = HandleNewMessage;
var AppendNewConversation = /** @class */ (function () {
    function AppendNewConversation(payload) {
        this.payload = payload;
        this.type = MessageActionTypes.APPEND_NEW_CONVERSATION;
    }
    return AppendNewConversation;
}());
exports.AppendNewConversation = AppendNewConversation;
var UpdateConversationLastMessage = /** @class */ (function () {
    function UpdateConversationLastMessage(payload) {
        this.payload = payload;
        this.type = MessageActionTypes.UPDATE_CONVERSATION_LAST_MESSAGE;
    }
    return UpdateConversationLastMessage;
}());
exports.UpdateConversationLastMessage = UpdateConversationLastMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxJQUFZLGtCQU9YO0FBUEQsV0FBWSxrQkFBa0I7SUFDMUIsNkVBQXVELENBQUE7SUFDdkQscUdBQStFLENBQUE7SUFDL0UsdUZBQWlFLENBQUE7SUFDakUseUZBQW1FLENBQUE7SUFDbkUseUVBQW1ELENBQUE7SUFDbkQsbUZBQTZELENBQUE7QUFDakUsQ0FBQyxFQVBXLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBTzdCO0FBRUQ7SUFHSSw2QkFBbUIsT0FNbEI7UUFOa0IsWUFBTyxHQUFQLE9BQU8sQ0FNekI7UUFSUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsb0JBQW9CLENBQUM7SUFRbkQsQ0FBQztJQUNWLDBCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxrREFBbUI7QUFZaEM7SUFHSSxnQ0FBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFKUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMseUJBQXlCLENBQUM7SUFJeEQsQ0FBQztJQUNWLDZCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSx3REFBc0I7QUFRbkM7SUFHSSxpQ0FBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFKUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsMEJBQTBCLENBQUM7SUFJekQsQ0FBQztJQUNWLDhCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSwwREFBdUI7QUFRcEM7SUFHSSwwQkFBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFKUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7SUFJakQsQ0FBQztJQUNWLHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSw0Q0FBZ0I7QUFRN0I7SUFHSSwrQkFBbUIsT0FHbEI7UUFIa0IsWUFBTyxHQUFQLE9BQU8sQ0FHekI7UUFMUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsdUJBQXVCLENBQUM7SUFLdEQsQ0FBQztJQUNWLDRCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxzREFBcUI7QUFTbEM7SUFHSSx1Q0FBbUIsT0FHbEI7UUFIa0IsWUFBTyxHQUFQLE9BQU8sQ0FHekI7UUFMUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsZ0NBQWdDLENBQUM7SUFLL0QsQ0FBQztJQUNWLG9DQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxzRUFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuXHJcbmV4cG9ydCBlbnVtIE1lc3NhZ2VBY3Rpb25UeXBlcyB7XHJcbiAgICBBUFBFTkRfQ09OVkVSU0FUSU9OUyA9ICdbTUVTU0FHRV0gQXBwZW5kIGNvbnZlcnNhdGlvbnMnLFxyXG4gICAgVVBEQVRFX0NPTlZFUlNBVElPTl9MQVNUX01FU1NBR0UgPSAnW01FU1NBR0VdIFVwZGF0ZSBjb252ZXJzYXRpb24gbGFzdCBtZXNzYWdlJyxcclxuICAgIFNFVF9VTlJFQURfTUVTU0FHRVNfQ09VTlQgPSAnW01FU1NBR0VdIFNldCB1bnJlYWQgbWVzc2FnZXMgY291bnQnLFxyXG4gICAgU0VUX0FDVElWRV9DT05WRVJTQVRJT05fSUQgPSAnW01FU1NBR0VdIFNldCBhY3RpdmUgY29udmVyc2F0aW9uIGlkJyxcclxuICAgIEhBTkRMRV9ORVdfTUVTU0FHRSA9ICdbTUVTU0FHRV0gSGFuZGxlIG5ldyBtZXNzYWdlJyxcclxuICAgIEFQUEVORF9ORVdfQ09OVkVSU0FUSU9OID0gJ1tNRVNTQUdFXSBBcHBlbmQgbmV3IGNvbnZlcnNhdGlvbidcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcGVuZENvbnZlcnNhdGlvbnMgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IE1lc3NhZ2VBY3Rpb25UeXBlcy5BUFBFTkRfQ09OVkVSU0FUSU9OUztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG4gICAgICAgIGNvbnZlcnNhdGlvbnM6IGFueSxcclxuICAgICAgICBpbmZpbml0ZVNjcm9sbDoge1xyXG4gICAgICAgICAgICBwYWdlOiBudW1iZXIsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBib29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgfSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXRVbnJlYWRNZXNzYWdlc0NvdW50IGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBNZXNzYWdlQWN0aW9uVHlwZXMuU0VUX1VOUkVBRF9NRVNTQUdFU19DT1VOVDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG4gICAgICAgIHVucmVhZE1lc3NhZ2VzQ291bnQ6IG51bWJlclxyXG4gICAgfSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXRBY3RpdmVDb252ZXJzYXRpb25JZCBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gTWVzc2FnZUFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfQ09OVkVSU0FUSU9OX0lEO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcbiAgICAgICAgYWN0aXZlQ29udmVyc2F0aW9uSWQ6IHN0cmluZ1xyXG4gICAgfSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIYW5kbGVOZXdNZXNzYWdlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBNZXNzYWdlQWN0aW9uVHlwZXMuSEFORExFX05FV19NRVNTQUdFO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcbiAgICAgICAgbWVzc2FnZTogYW55XHJcbiAgICB9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcGVuZE5ld0NvbnZlcnNhdGlvbiBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gTWVzc2FnZUFjdGlvblR5cGVzLkFQUEVORF9ORVdfQ09OVkVSU0FUSU9OO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcbiAgICAgICAgY29udmVyc2F0aW9uOiBhbnksXHJcbiAgICAgICAgc2VsZjogYm9vbGVhblxyXG4gICAgfSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVDb252ZXJzYXRpb25MYXN0TWVzc2FnZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gTWVzc2FnZUFjdGlvblR5cGVzLlVQREFURV9DT05WRVJTQVRJT05fTEFTVF9NRVNTQUdFO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcbiAgICAgICAgY29udmVyc2F0aW9uSWQ6IHN0cmluZyxcclxuICAgICAgICBsYXN0TWVzc2FnZTogYW55XHJcbiAgICB9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVzc2FnZUFjdGlvbnMgPSBBcHBlbmRDb252ZXJzYXRpb25zXHJcbnwgU2V0VW5yZWFkTWVzc2FnZXNDb3VudFxyXG58IFNldEFjdGl2ZUNvbnZlcnNhdGlvbklkXHJcbnwgSGFuZGxlTmV3TWVzc2FnZVxyXG58IEFwcGVuZE5ld0NvbnZlcnNhdGlvblxyXG58IFVwZGF0ZUNvbnZlcnNhdGlvbkxhc3RNZXNzYWdlO1xyXG4iXX0=