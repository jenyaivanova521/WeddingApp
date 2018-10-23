"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var selectors_1 = require("~/root-store/auth-store/selectors");
var add_member_1 = require("~/shared/modals/add-member");
var services_1 = require("~/shared/services");
var member_service_1 = require("~/shared/services/member.service");
var profile_service_1 = require("~/shared/services/profile.service");
var profile_store_1 = require("~/root-store/profile-store");
var MenuComponent = /** @class */ (function () {
    // private activeWedding: Wedding;
    // private subActiveWedding: ISubscription;
    function MenuComponent(modalService, store, memberService, profileService) {
        this.modalService = modalService;
        this.store = store;
        this.memberService = memberService;
        this.profileService = profileService;
        this.toggleMenuEvent = new core_1.EventEmitter();
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("menu ngOnit");
        this.accountSubscription = this.store.select(selectors_1.selectAuthInfo).subscribe(function (authInfo) {
            if (authInfo) {
                // console.log(authInfo);
                _this.accountInfo = authInfo.account;
                console.log("account info: ");
                _this.accountName = _this.accountInfo.firstName + ' ' + _this.accountInfo.lastName;
                _this.getProfileData();
            }
        });
        this.accountInfo = true; //must be deleted after test		
    };
    MenuComponent.prototype.getProfileData = function () {
        var _this = this;
        this.activeProfileSubscription = this.store.select(profile_store_1.ProfileSelectors.selectActiveProfile).subscribe(function (activeProfile) {
            console.log("activieProfile: ", activeProfile);
            _this.activeProfile = activeProfile;
            if (activeProfile && activeProfile.type == 'wedding') {
                _this.members = [];
                _this.memberService.getMembers({
                    weddingId: activeProfile.id
                }).toPromise().then(function (response) {
                    // console.log(response);
                    // this.members = response.result;
                    for (var i = 0; i < response.result.length; i++) {
                        if (response.result[i].isActive) {
                            _this.members.push(response.result[i].account);
                        }
                        // console.log(this.members[i]);
                    }
                    return response.result;
                });
                _this.imageDir = 'wedding/' + activeProfile.id + '/avatars';
            }
            if (activeProfile && activeProfile.type == 'vendor') {
                _this.imageDir = 'vendor/' + activeProfile.id + '/avatars';
            }
            else {
                _this.imageDir = 'account/' + _this.accountInfo.id + '/avatars';
            }
        });
    };
    MenuComponent.prototype.ngOnDestroy = function () {
        this.accountSubscription.unsubscribe();
        // this.subActiveWedding.unsubscribe();
        this.activeProfileSubscription.unsubscribe();
    };
    MenuComponent.prototype.openAddMemberModal = function () {
        this.modalService.showModal(add_member_1.AddMemberModal, {})
            .then(function (response) {
            // TODO add guest
            console.log(response);
        });
    };
    MenuComponent.prototype.toggleMenu = function () {
        this.toggleMenuEvent.next();
    };
    tslib_1.__decorate([
        core_1.Output(),
        tslib_1.__metadata("design:type", core_1.EventEmitter)
    ], MenuComponent.prototype, "toggleMenuEvent", void 0);
    MenuComponent = tslib_1.__decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'menu',
            templateUrl: 'menu.component.html',
            styleUrls: ['./menu.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [services_1.ModalService,
            store_1.Store,
            member_service_1.MemberService,
            profile_service_1.ProfileService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBbUY7QUFDbkYscUNBQW9DO0FBS3BDLCtEQUFtRTtBQUVuRSx5REFBNEQ7QUFDNUQsOENBQWlEO0FBS2pELG1FQUFpRTtBQUNqRSxxRUFBbUU7QUFDbkUsNERBQThEO0FBUzlEO0lBWUMsa0NBQWtDO0lBQ2xDLDJDQUEyQztJQUUzQyx1QkFBcUIsWUFBMEIsRUFDbkMsS0FBa0MsRUFDbEMsYUFBNEIsRUFDNUIsY0FBOEI7UUFIckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbkMsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBakJoQyxvQkFBZSxHQUFzQixJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQW9CbEUsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRBLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDBCQUFjLENBQUMsQ0FBQyxTQUFTLENBQ3JFLFVBQUMsUUFBa0I7WUFDbEIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDZCx5QkFBeUI7Z0JBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUM5QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztnQkFDaEYsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFD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QUNoQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLENBQUM7aURBZ0JrQyx1QkFBWTtZQUM1QixhQUFLO1lBQ0csOEJBQWE7WUFDWixnQ0FBYztPQWxCOUIsYUFBYSxDQXlGekI7SUFBRCxvQkFBQztDQUFBLEFBekZELElBeUZDO0FBekZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgSVN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcclxuXHJcbmltcG9ydCB7IFN0YXRlLCBSb290U3RvcmVTdGF0ZSB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcbmltcG9ydCB7IEF1dGhJbmZvIH0gZnJvbSAnfi9yb290LXN0b3JlL2F1dGgtc3RvcmUvbW9kZWxzJztcclxuaW1wb3J0IHsgc2VsZWN0QXV0aEluZm8gfSBmcm9tICd+L3Jvb3Qtc3RvcmUvYXV0aC1zdG9yZS9zZWxlY3RvcnMnO1xyXG5cclxuaW1wb3J0IHsgQWRkTWVtYmVyTW9kYWwgfSBmcm9tICd+L3NoYXJlZC9tb2RhbHMvYWRkLW1lbWJlcic7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgV2VkZGluZyB9IGZyb20gJ34vcm9vdC1zdG9yZS93ZWRkaW5nLXN0b3JlL21vZGVscyc7XHJcbmltcG9ydCB7IHNlbGVjdEFjdGl2ZVdlZGRpbmcgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvd2VkZGluZy1zdG9yZS9zZWxlY3RvcnMnO1xyXG5pbXBvcnQgeyBNZW1iZXJTZWxlY3RvcnMsIE1lbWJlck1vZGVscyB9IGZyb20gJ34vcm9vdC1zdG9yZS9tZW1iZXItc3RvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBNZW1iZXJTZXJ2aWNlIH0gZnJvbSAnfi9zaGFyZWQvc2VydmljZXMvbWVtYmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQcm9maWxlU2VydmljZSB9IGZyb20gJ34vc2hhcmVkL3NlcnZpY2VzL3Byb2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVTZWxlY3RvcnMgfSBmcm9tICd+L3Jvb3Qtc3RvcmUvcHJvZmlsZS1zdG9yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZGVscyB9IGZyb20gJ34vcm9vdC1zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAnbWVudScsXHJcblx0dGVtcGxhdGVVcmw6ICdtZW51LmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9tZW51LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblx0QE91dHB1dCgpIHRvZ2dsZU1lbnVFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdHB1YmxpYyBtZW1iZXJzO1xyXG5cdGFjY291bnRJbmZvO1xyXG5cdHByb2ZpbGVzOiBhbnk7XHJcbiAgICBhY3RpdmVQcm9maWxlOiBDb21tb25Nb2RlbHMuUHJvZmlsZTtcclxuICAgIGFjdGl2ZVByb2ZpbGVTdWJzY3JpcHRpb246IElTdWJzY3JpcHRpb247XHJcblx0YXV0aEluZm86IGFueTtcclxuXHRpbWFnZURpcjpzdHJpbmc7XHJcblx0YWNjb3VudE5hbWU6IHN0cmluZztcclxuXHRwcml2YXRlIGFjY291bnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHQvLyBwcml2YXRlIGFjdGl2ZVdlZGRpbmc6IFdlZGRpbmc7XHJcblx0Ly8gcHJpdmF0ZSBzdWJBY3RpdmVXZWRkaW5nOiBJU3Vic2NyaXB0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvciggcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuXHRcdFx0XHQgcHJpdmF0ZSBzdG9yZTogU3RvcmU8Um9vdFN0b3JlU3RhdGUuU3RhdGU+LFxyXG5cdFx0XHRcdCBwcml2YXRlIG1lbWJlclNlcnZpY2U6IE1lbWJlclNlcnZpY2UsXHJcblx0XHRcdFx0IHByaXZhdGUgcHJvZmlsZVNlcnZpY2U6IFByb2ZpbGVTZXJ2aWNlXHJcblx0KSB7XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0XHRjb25zb2xlLmxvZyhcIm1lbnUgbmdPbml0XCIpO1x0XHRcclxuXHRcdFxyXG5cdFx0dGhpcy5hY2NvdW50U3Vic2NyaXB0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3Qoc2VsZWN0QXV0aEluZm8pLnN1YnNjcmliZShcclxuXHRcdFx0KGF1dGhJbmZvOiBBdXRoSW5mbykgPT4ge1xyXG5cdFx0XHRcdGlmIChhdXRoSW5mbykge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYXV0aEluZm8pO1xyXG5cdFx0XHRcdFx0dGhpcy5hY2NvdW50SW5mbyA9IGF1dGhJbmZvLmFjY291bnQ7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImFjY291bnQgaW5mbzogXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5hY2NvdW50TmFtZSA9IHRoaXMuYWNjb3VudEluZm8uZmlyc3ROYW1lICsgJyAnICsgdGhpcy5hY2NvdW50SW5mby5sYXN0TmFtZTtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0UHJvZmlsZURhdGEoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdClcclxuXHRcdHRoaXMuYWNjb3VudEluZm8gPSB0cnVlIC8vbXVzdCBiZSBkZWxldGVkIGFmdGVyIHRlc3RcdFx0XHJcblx0fVxyXG5cdGdldFByb2ZpbGVEYXRhKCl7XHJcblx0XHR0aGlzLmFjdGl2ZVByb2ZpbGVTdWJzY3JpcHRpb24gPSB0aGlzLnN0b3JlLnNlbGVjdChcclxuICAgICAgICAgICAgUHJvZmlsZVNlbGVjdG9ycy5zZWxlY3RBY3RpdmVQcm9maWxlXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoYWN0aXZlUHJvZmlsZSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiYWN0aXZpZVByb2ZpbGU6IFwiLGFjdGl2ZVByb2ZpbGUpO1xyXG5cdFx0XHR0aGlzLmFjdGl2ZVByb2ZpbGUgPSBhY3RpdmVQcm9maWxlXHJcblx0XHRcdGlmKGFjdGl2ZVByb2ZpbGUgJiYgYWN0aXZlUHJvZmlsZS50eXBlID09ICd3ZWRkaW5nJykge1xyXG5cdFx0XHRcdHRoaXMubWVtYmVycyA9IFtdO1xyXG5cdFx0XHRcdHRoaXMubWVtYmVyU2VydmljZS5nZXRNZW1iZXJzKHtcclxuXHRcdFx0XHRcdHdlZGRpbmdJZDogYWN0aXZlUHJvZmlsZS5pZFxyXG5cdFx0XHRcdH0pLnRvUHJvbWlzZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cdFx0XHRcdFx0Ly8gdGhpcy5tZW1iZXJzID0gcmVzcG9uc2UucmVzdWx0O1xyXG5cdFx0XHRcdFx0Zm9yKCB2YXIgaSA9IDA7IGkgPCByZXNwb25zZS5yZXN1bHQubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0XHRcdGlmKHJlc3BvbnNlLnJlc3VsdFtpXS5pc0FjdGl2ZSl7XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1lbWJlcnMucHVzaChyZXNwb25zZS5yZXN1bHRbaV0uYWNjb3VudCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5tZW1iZXJzW2ldKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS5yZXN1bHQ7XHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0dGhpcy5pbWFnZURpciA9ICd3ZWRkaW5nLycrIGFjdGl2ZVByb2ZpbGUuaWQgKyAnL2F2YXRhcnMnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKCBhY3RpdmVQcm9maWxlICYmIGFjdGl2ZVByb2ZpbGUudHlwZSA9PSAndmVuZG9yJykge1xyXG5cdFx0XHRcdHRoaXMuaW1hZ2VEaXIgPSAndmVuZG9yLycrIGFjdGl2ZVByb2ZpbGUuaWQgKyAnL2F2YXRhcnMnO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuaW1hZ2VEaXIgPSAnYWNjb3VudC8nICsgdGhpcy5hY2NvdW50SW5mby5pZCArICcvYXZhdGFycydcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYWNjb3VudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cdFx0Ly8gdGhpcy5zdWJBY3RpdmVXZWRkaW5nLnVuc3Vic2NyaWJlKCk7XHJcblx0XHR0aGlzLmFjdGl2ZVByb2ZpbGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvcGVuQWRkTWVtYmVyTW9kYWwoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoQWRkTWVtYmVyTW9kYWwsIHt9KVxyXG5cdFx0XHQudGhlbigocmVzcG9uc2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdC8vIFRPRE8gYWRkIGd1ZXN0XHJcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB0b2dnbGVNZW51KCk6IHZvaWQge1xyXG5cdFx0dGhpcy50b2dnbGVNZW51RXZlbnQubmV4dCgpO1xyXG5cdH1cclxufVxyXG4iXX0=