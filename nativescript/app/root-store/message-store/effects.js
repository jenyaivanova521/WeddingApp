"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var store_1 = require("@ngrx/store");
var actions_1 = require("./actions");
var message_service_1 = require("~/shared/services/message.service");
var MessageEffects = /** @class */ (function () {
    function MessageEffects(actions$, store, router, messageService) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.messageService = messageService;
        this.handleNewMessage$ = this.actions$.pipe(effects_1.ofType(actions_1.MessageActionTypes.HANDLE_NEW_MESSAGE), operators_1.withLatestFrom(this.store), operators_1.exhaustMap(function (_a) {
            var action = _a[0], store = _a[1];
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var message, conversation, newConversation;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            message = action.payload.message;
                            conversation = store.message.conversations.filter(function (value) {
                                if (value.id == message.conversationId) {
                                    return value;
                                }
                            });
                            if (!(conversation.length == 0)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.messageService
                                    .getConversation(message.conversationId)
                                    .toPromise()
                                    .then(function (response) {
                                    return response.result;
                                })];
                        case 1:
                            newConversation = _b.sent();
                            return [2 /*return*/, new actions_1.AppendNewConversation({
                                    conversation: newConversation,
                                    self: message.self == 'false' ? false : true
                                })];
                        case 2: return [2 /*return*/, new actions_1.UpdateConversationLastMessage({
                                conversationId: message.conversationId,
                                lastMessage: {
                                    text: message.shortText,
                                    author: message.authorAccount.firstName + ' ' + message.authorAccount.lastName,
                                    asVendor: message.asVendor == 'false' ? false : true,
                                    createdAt: message.createdAt
                                }
                            })];
                    }
                });
            });
        }));
    }
    tslib_1.__decorate([
        effects_1.Effect(),
        tslib_1.__metadata("design:type", Object)
    ], MessageEffects.prototype, "handleNewMessage$", void 0);
    MessageEffects = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [effects_1.Actions,
            store_1.Store,
            router_1.Router,
            message_service_1.MessageService])
    ], MessageEffects);
    return MessageEffects;
}());
exports.MessageEffects = MessageEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLDBDQUF5QztBQUN6Qyx5Q0FBd0Q7QUFDeEQsNENBQXNHO0FBQ3RHLHFDQUFvQztBQUVwQyxxQ0FLbUI7QUFFbkIscUVBQW1FO0FBR25FO0lBRUksd0JBQ1ksUUFBaUIsRUFDakIsS0FBa0MsRUFDbEMsTUFBYyxFQUNkLGNBQThCO1FBSjFDLGlCQUtLO1FBSk8sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixVQUFLLEdBQUwsS0FBSyxDQUE2QjtRQUNsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSTFDLHNCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsQyxnQkFBTSxDQUFtQiw0QkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxFQUMvRCwwQkFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDMUIsc0JBQVUsQ0FBQyxVQUFPLEVBQWU7Z0JBQWQsY0FBTSxFQUFFLGFBQUs7Ozs7Ozs0QkFDeEIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDOzRCQUNqQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSztnQ0FDdkQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQ0FDckMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQ0FDakIsQ0FBQzs0QkFDTCxDQUFDLENBQUMsQ0FBQztpQ0FDQyxDQUFBLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFBLEVBQXhCLHdCQUF3Qjs0QkFDRixxQkFBTSxJQUFJLENBQUMsY0FBYztxQ0FDMUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7cUNBQ3ZDLFNBQVMsRUFBRTtxQ0FDWCxJQUFJLENBQUMsVUFBQSxRQUFRO29DQUNWLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2dDQUMzQixDQUFDLENBQUMsRUFBQTs7NEJBTEYsZUFBZSxHQUFHLFNBS2hCOzRCQUNOLHNCQUFPLElBQUksK0JBQXFCLENBQUM7b0NBQzdCLFlBQVksRUFBRSxlQUFlO29DQUM3QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTtpQ0FDL0MsQ0FBQyxFQUFBO2dDQUVGLHNCQUFPLElBQUksdUNBQTZCLENBQUM7Z0NBQ3JDLGNBQWMsRUFBRSxPQUFPLENBQUMsY0FBYztnQ0FDdEMsV0FBVyxFQUFFO29DQUNULElBQUksRUFBRSxPQUFPLENBQUMsU0FBUztvQ0FDdkIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVE7b0NBQzlFLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJO29DQUNwRCxTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7aUNBQy9COzZCQUNKLENBQUMsRUFBQzs7OztTQUVWLENBQUMsQ0FDTCxDQUFDO0lBcENFLENBQUM7SUFHTDtRQURDLGdCQUFNLEVBQUU7OzZEQWtDUDtJQTNDTyxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7aURBSWEsaUJBQU87WUFDVixhQUFLO1lBQ0osZUFBTTtZQUNFLGdDQUFjO09BTmpDLGNBQWMsQ0E2QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCBtYXBUbywgd2l0aExhdGVzdEZyb20sIGNvbmNhdE1hcFRvLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIE1lc3NhZ2VBY3Rpb25UeXBlcyxcclxuICAgIFVwZGF0ZUNvbnZlcnNhdGlvbkxhc3RNZXNzYWdlLFxyXG4gICAgSGFuZGxlTmV3TWVzc2FnZSxcclxuICAgIEFwcGVuZE5ld0NvbnZlcnNhdGlvbixcclxufSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBSb290U3RvcmVTdGF0ZSB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VFZmZlY3RzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxyXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFJvb3RTdG9yZVN0YXRlLlN0YXRlPixcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIEBFZmZlY3QoKVxyXG4gICAgaGFuZGxlTmV3TWVzc2FnZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXHJcbiAgICAgICAgb2ZUeXBlPEhhbmRsZU5ld01lc3NhZ2U+KE1lc3NhZ2VBY3Rpb25UeXBlcy5IQU5ETEVfTkVXX01FU1NBR0UpLFxyXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuc3RvcmUpLFxyXG4gICAgICAgIGV4aGF1c3RNYXAoYXN5bmMgKFthY3Rpb24sIHN0b3JlXSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IGFjdGlvbi5wYXlsb2FkLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIGxldCBjb252ZXJzYXRpb24gPSBzdG9yZS5tZXNzYWdlLmNvbnZlcnNhdGlvbnMuZmlsdGVyKHZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pZCA9PSBtZXNzYWdlLmNvbnZlcnNhdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGNvbnZlcnNhdGlvbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0NvbnZlcnNhdGlvbiA9IGF3YWl0IHRoaXMubWVzc2FnZVNlcnZpY2VcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0Q29udmVyc2F0aW9uKG1lc3NhZ2UuY29udmVyc2F0aW9uSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBcHBlbmROZXdDb252ZXJzYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnNhdGlvbjogbmV3Q29udmVyc2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGY6IG1lc3NhZ2Uuc2VsZiA9PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVcGRhdGVDb252ZXJzYXRpb25MYXN0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udmVyc2F0aW9uSWQ6IG1lc3NhZ2UuY29udmVyc2F0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1lc3NhZ2U6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWVzc2FnZS5zaG9ydFRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcjogbWVzc2FnZS5hdXRob3JBY2NvdW50LmZpcnN0TmFtZSArICcgJyArIG1lc3NhZ2UuYXV0aG9yQWNjb3VudC5sYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNWZW5kb3I6IG1lc3NhZ2UuYXNWZW5kb3IgPT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBtZXNzYWdlLmNyZWF0ZWRBdFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG59XHJcbiJdfQ==