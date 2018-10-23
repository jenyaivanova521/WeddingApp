"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var member_service_1 = require("~/shared/services/member.service");
var MemberEffects = /** @class */ (function () {
    function MemberEffects(actions$, memberService) {
        this.actions$ = actions$;
        this.memberService = memberService;
    }
    MemberEffects = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [effects_1.Actions,
            member_service_1.MemberService])
    ], MemberEffects);
    return MemberEffects;
}());
exports.MemberEffects = MemberEffects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBQzNDLHlDQUF3RDtBQU14RCxtRUFBaUU7QUFHakU7SUFFSSx1QkFDWSxRQUFpQixFQUNqQixhQUE0QjtRQUQ1QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQ3BDLENBQUM7SUFMSSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7aURBSWEsaUJBQU87WUFDRiw4QkFBYTtPQUovQixhQUFhLENBT3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcclxuXHJcblxyXG5pbXBvcnQge1xyXG4gICAgTWVtYmVyQWN0aW9uVHlwZXMsXHJcbn0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgTWVtYmVyU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL21lbWJlci5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lbWJlckVmZmVjdHMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBtZW1iZXJTZXJ2aWNlOiBNZW1iZXJTZXJ2aWNlLFxyXG4gICAgKSB7IH1cclxuXHJcbn1cclxuIl19