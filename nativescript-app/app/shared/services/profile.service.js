"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var store_1 = require("@ngrx/store");
var wedding_service_1 = require("./wedding.service");
var vendor_service_1 = require("./vendor.service");
var auth_service_1 = require("./auth.service");
var member_service_1 = require("./member.service");
var app_config_1 = require("../configs/app.config");
var root_store_1 = require("~/root-store");
var localStorage = require("nativescript-localstorage");
var ProfileService = /** @class */ (function () {
    function ProfileService(http, weddingService, vendorService, authService, memberService, store) {
        this.http = http;
        this.weddingService = weddingService;
        this.vendorService = vendorService;
        this.authService = authService;
        this.memberService = memberService;
        this.store = store;
        this.apiUrl = app_config_1.API_URL + '/weddings';
    }
    ProfileService.prototype.initProfiles = function (activeProfileId) {
        if (activeProfileId === void 0) { activeProfileId = null; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var activeProfile, profiles, authInfo, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        activeProfile = false;
                        return [4 /*yield*/, this.getProfiles()];
                    case 1:
                        profiles = _b.sent();
                        return [4 /*yield*/, this.authService.getAccountInfo().toPromise().then(function (response) {
                                return response.result;
                            })];
                    case 2:
                        authInfo = _b.sent();
                        if (!(profiles && profiles.length)) return [3 /*break*/, 6];
                        this.store.dispatch(new root_store_1.ProfileActions.SetProfiles({ profiles: profiles }));
                        if (!activeProfileId) return [3 /*break*/, 3];
                        _a = this.getProfile({ profiles: profiles, profileId: activeProfileId });
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.getActiveProfile({ profiles: profiles, authInfo: authInfo })];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        activeProfile = _a;
                        if (activeProfile && activeProfile['type'] == 'wedding') {
                            this.initActiveProfileMembers(activeProfile);
                        }
                        _b.label = 6;
                    case 6:
                        this.store.dispatch(new root_store_1.ProfileActions.SetActiveProfile({ profile: activeProfile, accountId: authInfo.account.id }));
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileService.prototype.initActiveProfileMembers = function (activeProfile) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var members;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(activeProfile && activeProfile.type == 'wedding')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.memberService.getMembers({
                                weddingId: activeProfile.id
                            }).toPromise().then(function (response) {
                                return response.result;
                            })];
                    case 1:
                        members = _a.sent();
                        this.store.dispatch(new root_store_1.MemberActions.SetMembers({
                            members: members
                        }));
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ProfileService.prototype.getProfiles = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var profiles, weddings, vendors;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("profile.service->get profiles");
                        profiles = [];
                        return [4 /*yield*/, this.weddingService.getWeddings().toPromise().then(function (response) {
                                return response.result;
                            })];
                    case 1:
                        weddings = _a.sent();
                        return [4 /*yield*/, this.vendorService.getOwnedVendors().toPromise().then(function (response) {
                                return response.result;
                            })];
                    case 2:
                        vendors = _a.sent();
                        weddings.concat(vendors).forEach(function (profile) {
                            profiles.push({
                                id: profile.id,
                                name: profile.name,
                                avatar: profile.avatar ? profile.avatar : null,
                                type: profile.member ? 'wedding' : 'vendor',
                                isOwner: profile.member ? (profile.member.role == 'owner' ? true : false) : true,
                                privacySetting: profile.privacySetting ? profile.privacySetting : null,
                                memberId: profile.member ? profile.member.id : null,
                                isActive: profile.isActive !== undefined ? profile.isActive : undefined
                            });
                        });
                        return [2 /*return*/, profiles];
                }
            });
        });
    };
    ProfileService.prototype.getProfile = function (_a) {
        var profiles = _a.profiles, profileId = _a.profileId;
        if (profiles) {
            for (var i = 0; i < profiles.length; i++) {
                var profile = profiles[i];
                if (profile.id == profileId) {
                    return profile;
                }
            }
        }
        return null;
    };
    ProfileService.prototype.getActiveProfile = function (_a) {
        var profiles = _a.profiles, authInfo = _a.authInfo;
        console.log("profile.service->getActiveProfile");
        var activeProfile;
        if (profiles) {
            var localActiveProfileId = localStorage.getItem(authInfo.account.id + '-activeProfileId');
            activeProfile = localActiveProfileId ? this.getProfile({ profiles: profiles, profileId: localActiveProfileId }) : profiles[0];
        }
        return activeProfile;
    };
    ProfileService = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [http_1.HttpClient,
            wedding_service_1.WeddingService,
            vendor_service_1.VendorService,
            auth_service_1.AuthService,
            member_service_1.MemberService,
            store_1.Store])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFFL0QscUNBQW9DO0FBRXBDLHFEQUFtRDtBQUNuRCxtREFBaUQ7QUFDakQsK0NBQTZDO0FBQzdDLG1EQUFpRDtBQUNqRCxvREFBZ0Q7QUFDaEQsMkNBQTZFO0FBQzdFLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBRzFEO0lBR0ksd0JBQ1ksSUFBZ0IsRUFDaEIsY0FBOEIsRUFDOUIsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsYUFBNEIsRUFDNUIsS0FBa0M7UUFMbEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFSdEMsV0FBTSxHQUFXLG9CQUFPLEdBQUcsV0FBVyxDQUFDO0lBUzNDLENBQUM7SUFFQyxxQ0FBWSxHQUFsQixVQUFtQixlQUFzQjtRQUF0QixnQ0FBQSxFQUFBLHNCQUFzQjs7Ozs7O3dCQUNqQyxhQUFhLEdBQUcsS0FBSyxDQUFDO3dCQUNYLHFCQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQW5DLFFBQVEsR0FBRyxTQUF3Qjt3QkFDeEIscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO2dDQUM1RSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs0QkFDM0IsQ0FBQyxDQUFDLEVBQUE7O3dCQUZFLFFBQVEsR0FBRyxTQUViOzZCQUNFLENBQUEsUUFBUSxJ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aUIsRUFBc0I7WUFBcEIsc0JBQVEsRUFBRSxzQkFBUTtRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDakQsSUFBSSxhQUFhLENBQUM7UUFDbEIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksb0JBQW9CLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFGLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4SCxDQUFDO1FBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBckZRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtpREFLUyxpQkFBVTtZQUNBLGdDQUFjO1lBQ2YsOEJBQWE7WUFDZiwwQkFBVztZQUNULDhCQUFhO1lBQ3JCLGFBQUs7T0FUZixjQUFjLENBdUYxQjtJQUFELHFCQUFDO0NBQUEsQUF2RkQsSUF1RkM7QUF2Rlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBXZWRkaW5nU2VydmljZSB9IGZyb20gJy4vd2VkZGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4vdmVuZG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWVtYmVyU2VydmljZSB9IGZyb20gJy4vbWVtYmVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi4vY29uZmlncy9hcHAuY29uZmlnJztcclxuaW1wb3J0IHsgUm9vdFN0b3JlU3RhdGUsIFByb2ZpbGVBY3Rpb25zLCBNZW1iZXJBY3Rpb25zIH0gZnJvbSAnfi9yb290LXN0b3JlJztcclxubGV0IGxvY2FsU3RvcmFnZSA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGFwaVVybDogc3RyaW5nID0gQVBJX1VSTCArICcvd2VkZGluZ3MnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIHdlZGRpbmdTZXJ2aWNlOiBXZWRkaW5nU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHZlbmRvclNlcnZpY2U6IFZlbmRvclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBtZW1iZXJTZXJ2aWNlOiBNZW1iZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFJvb3RTdG9yZVN0YXRlLlN0YXRlPlxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBhc3luYyBpbml0UHJvZmlsZXMoYWN0aXZlUHJvZmlsZUlkID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBhY3RpdmVQcm9maWxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHByb2ZpbGVzID0gYXdhaXQgdGhpcy5nZXRQcm9maWxlcygpO1xyXG4gICAgICAgIGxldCBhdXRoSW5mbyA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZ2V0QWNjb3VudEluZm8oKS50b1Byb21pc2UoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocHJvZmlsZXMgJiYgcHJvZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFByb2ZpbGVBY3Rpb25zLlNldFByb2ZpbGVzKHsgcHJvZmlsZXMgfSkpO1xyXG4gICAgICAgICAgICBhY3RpdmVQcm9maWxlID0gYWN0aXZlUHJvZmlsZUlkID8gdGhpcy5nZXRQcm9maWxlKHsgcHJvZmlsZXMsIHByb2ZpbGVJZDogYWN0aXZlUHJvZmlsZUlkIH0pIDogYXdhaXQgdGhpcy5nZXRBY3RpdmVQcm9maWxlKHsgcHJvZmlsZXMsIGF1dGhJbmZvIH0pO1xyXG4gICAgICAgICAgICBpZihhY3RpdmVQcm9maWxlICYmIGFjdGl2ZVByb2ZpbGVbJ3R5cGUnXSA9PSAnd2VkZGluZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdEFjdGl2ZVByb2ZpbGVNZW1iZXJzKGFjdGl2ZVByb2ZpbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFByb2ZpbGVBY3Rpb25zLlNldEFjdGl2ZVByb2ZpbGUoeyBwcm9maWxlOiBhY3RpdmVQcm9maWxlLCBhY2NvdW50SWQ6IGF1dGhJbmZvLmFjY291bnQuaWQgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXRBY3RpdmVQcm9maWxlTWVtYmVycyhhY3RpdmVQcm9maWxlKSB7XHJcbiAgICAgICAgaWYgKGFjdGl2ZVByb2ZpbGUgJiYgYWN0aXZlUHJvZmlsZS50eXBlID09ICd3ZWRkaW5nJykge1xyXG4gICAgICAgICAgICBsZXQgbWVtYmVycyA9IGF3YWl0IHRoaXMubWVtYmVyU2VydmljZS5nZXRNZW1iZXJzKHtcclxuICAgICAgICAgICAgICAgIHdlZGRpbmdJZDogYWN0aXZlUHJvZmlsZS5pZFxyXG4gICAgICAgICAgICB9KS50b1Byb21pc2UoKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHQ7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IE1lbWJlckFjdGlvbnMuU2V0TWVtYmVycyh7XHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBtZW1iZXJzXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0UHJvZmlsZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9maWxlLnNlcnZpY2UtPmdldCBwcm9maWxlc1wiKTtcclxuICAgICAgICBsZXQgcHJvZmlsZXMgPSBbXTtcclxuICAgICAgICBsZXQgd2VkZGluZ3MgPSBhd2FpdCB0aGlzLndlZGRpbmdTZXJ2aWNlLmdldFdlZGRpbmdzKCkudG9Qcm9taXNlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHZlbmRvcnMgPSBhd2FpdCB0aGlzLnZlbmRvclNlcnZpY2UuZ2V0T3duZWRWZW5kb3JzKCkudG9Qcm9taXNlKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5yZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2VkZGluZ3MuY29uY2F0KHZlbmRvcnMpLmZvckVhY2gocHJvZmlsZSA9PiB7XHJcbiAgICAgICAgICAgIHByb2ZpbGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHByb2ZpbGUuaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6IHByb2ZpbGUuYXZhdGFyID8gcHJvZmlsZS5hdmF0YXIgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogcHJvZmlsZS5tZW1iZXIgPyAnd2VkZGluZycgOiAndmVuZG9yJyxcclxuICAgICAgICAgICAgICAgIGlzT3duZXI6IHByb2ZpbGUubWVtYmVyID8gKHByb2ZpbGUubWVtYmVyLnJvbGUgPT0gJ293bmVyJyA/IHRydWUgOiBmYWxzZSkgOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmFjeVNldHRpbmc6IHByb2ZpbGUucHJpdmFjeVNldHRpbmcgPyBwcm9maWxlLnByaXZhY3lTZXR0aW5nIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIG1lbWJlcklkOiBwcm9maWxlLm1lbWJlciA/IHByb2ZpbGUubWVtYmVyLmlkIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlOiBwcm9maWxlLmlzQWN0aXZlICE9PSB1bmRlZmluZWQgPyBwcm9maWxlLmlzQWN0aXZlIDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9maWxlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9maWxlKHsgcHJvZmlsZXMsIHByb2ZpbGVJZCB9KSB7XHJcbiAgICAgICAgaWYgKHByb2ZpbGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9maWxlID0gcHJvZmlsZXNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZmlsZS5pZCA9PSBwcm9maWxlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZmlsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVQcm9maWxlKHsgcHJvZmlsZXMsIGF1dGhJbmZvIH0pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2ZpbGUuc2VydmljZS0+Z2V0QWN0aXZlUHJvZmlsZVwiKTtcclxuICAgICAgICBsZXQgYWN0aXZlUHJvZmlsZTtcclxuICAgICAgICBpZiAocHJvZmlsZXMpIHtcclxuICAgICAgICAgICAgbGV0IGxvY2FsQWN0aXZlUHJvZmlsZUlkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYXV0aEluZm8uYWNjb3VudC5pZCArICctYWN0aXZlUHJvZmlsZUlkJyk7XHJcbiAgICAgICAgICAgIGFjdGl2ZVByb2ZpbGUgPSBsb2NhbEFjdGl2ZVByb2ZpbGVJZCA/IHRoaXMuZ2V0UHJvZmlsZSh7IHByb2ZpbGVzLCBwcm9maWxlSWQ6IGxvY2FsQWN0aXZlUHJvZmlsZUlkIH0pIDogcHJvZmlsZXNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhY3RpdmVQcm9maWxlO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=