"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var effects_2 = require("./effects");
var reducers_1 = require("./reducers");
var store_1 = require("@ngrx/store");
var member_service_1 = require("~/shared/services/member.service");
var MemberStoreModule = /** @class */ (function () {
    function MemberStoreModule() {
    }
    MemberStoreModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                store_1.StoreModule.forFeature('member', reducers_1.reducer),
                effects_1.EffectsModule.forFeature([effects_2.MemberEffects]),
            ],
            declarations: [],
            providers: [
                member_service_1.MemberService,
                effects_2.MemberEffects
            ]
        })
    ], MemberStoreModule);
    return MemberStoreModule;
}());
exports.MemberStoreModule = MemberStoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUN6Qyx5Q0FBOEM7QUFDOUMscUNBQTBDO0FBRTFDLHVDQUFxQztBQUVyQyxxQ0FBMEM7QUFDMUMsbUVBQWlFO0FBZWpFO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFaN0IsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLG1CQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxrQkFBTyxDQUFDO2dCQUN6Qyx1QkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLHVCQUFhLENBQUMsQ0FBQzthQUM1QztZQUNELFlBQVksRUFBRSxFQUNiO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDhCQUFhO2dCQUNiLHVCQUFhO2FBQ2hCO1NBQ0osQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQSxBQUFsQyxJQUFrQztBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XHJcbmltcG9ydCB7IE1lbWJlckVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4vcmVkdWNlcnMnO1xyXG5cclxuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IE1lbWJlclNlcnZpY2UgfSBmcm9tICd+L3NoYXJlZC9zZXJ2aWNlcy9tZW1iZXIuc2VydmljZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKCdtZW1iZXInLCByZWR1Y2VyKSxcclxuICAgICAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoW01lbWJlckVmZmVjdHNdKSxcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBNZW1iZXJTZXJ2aWNlLFxyXG4gICAgICAgIE1lbWJlckVmZmVjdHNcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbWJlclN0b3JlTW9kdWxlIHsgfVxyXG4iXX0=