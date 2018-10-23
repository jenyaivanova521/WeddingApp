"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProfileActionTypes;
(function (ProfileActionTypes) {
    ProfileActionTypes["SET_PROFILES"] = "[PROFILE] Set profiles";
    ProfileActionTypes["SET_ACTIVE_PROFILE"] = "[PROFILE] Set active profile";
    ProfileActionTypes["SET_ACTIVE_PROFILE_SUCCESS"] = "[PROFILE] Set active profile success";
    ProfileActionTypes["SET_ACTIVE_PROFILE_FAILURE"] = "[PROFILE] Set active profile failure";
})(ProfileActionTypes = exports.ProfileActionTypes || (exports.ProfileActionTypes = {}));
var SetProfiles = /** @class */ (function () {
    function SetProfiles(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.SET_PROFILES;
    }
    return SetProfiles;
}());
exports.SetProfiles = SetProfiles;
var SetActiveProfile = /** @class */ (function () {
    function SetActiveProfile(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.SET_ACTIVE_PROFILE;
    }
    return SetActiveProfile;
}());
exports.SetActiveProfile = SetActiveProfile;
var SetActiveProfileSuccess = /** @class */ (function () {
    function SetActiveProfileSuccess(payload) {
        this.payload = payload;
        this.type = ProfileActionTypes.SET_ACTIVE_PROFILE_SUCCESS;
    }
    return SetActiveProfileSuccess;
}());
exports.SetActiveProfileSuccess = SetActiveProfileSuccess;
var SetActiveProfileFailure = /** @class */ (function () {
    function SetActiveProfileFailure() {
        this.type = ProfileActionTypes.SET_ACTIVE_PROFILE_FAILURE;
    }
    return SetActiveProfileFailure;
}());
exports.SetActiveProfileFailure = SetActiveProfileFailure;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxJQUFZLGtCQUtYO0FBTEQsV0FBWSxrQkFBa0I7SUFDMUIsNkRBQXVDLENBQUE7SUFDdkMseUVBQW1ELENBQUE7SUFDbkQseUZBQW1FLENBQUE7SUFDbkUseUZBQW1FLENBQUE7QUFDdkUsQ0FBQyxFQUxXLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBSzdCO0FBRUQ7SUFHSSxxQkFBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFKUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDO0lBSTNDLENBQUM7SUFDVixrQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksa0NBQVc7QUFReEI7SUFHSSwwQkFBbUIsT0FHbEI7UUFIa0IsWUFBTyxHQUFQLE9BQU8sQ0FHekI7UUFMUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7SUFLakQsQ0FBQztJQUNWLHVCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSw0Q0FBZ0I7QUFTN0I7SUFHSSxpQ0FBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFKUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsMEJBQTBCLENBQUM7SUFJekQsQ0FBQztJQUNWLDhCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSwwREFBdUI7QUFRcEM7SUFBQTtRQUNhLFNBQUksR0FBRyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQztJQUNsRSxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xyXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi4vY29tbW9uLW1vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBQcm9maWxlQWN0aW9uVHlwZXMge1xyXG4gICAgU0VUX1BST0ZJTEVTID0gJ1tQUk9GSUxFXSBTZXQgcHJvZmlsZXMnLFxyXG4gICAgU0VUX0FDVElWRV9QUk9GSUxFID0gJ1tQUk9GSUxFXSBTZXQgYWN0aXZlIHByb2ZpbGUnLFxyXG4gICAgU0VUX0FDVElWRV9QUk9GSUxFX1NVQ0NFU1MgPSAnW1BST0ZJTEVdIFNldCBhY3RpdmUgcHJvZmlsZSBzdWNjZXNzJyxcclxuICAgIFNFVF9BQ1RJVkVfUFJPRklMRV9GQUlMVVJFID0gJ1tQUk9GSUxFXSBTZXQgYWN0aXZlIHByb2ZpbGUgZmFpbHVyZSdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldFByb2ZpbGVzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlQWN0aW9uVHlwZXMuU0VUX1BST0ZJTEVTO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkPzoge1xyXG4gICAgICAgIHByb2ZpbGVzOiBhbnlcclxuICAgIH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0QWN0aXZlUHJvZmlsZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcbiAgICByZWFkb25seSB0eXBlID0gUHJvZmlsZUFjdGlvblR5cGVzLlNFVF9BQ1RJVkVfUFJPRklMRTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZD86IHtcclxuICAgICAgICBwcm9maWxlOiBQcm9maWxlIHwgYW55LFxyXG4gICAgICAgIGFjY291bnRJZDogc3RyaW5nXHJcbiAgICB9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldEFjdGl2ZVByb2ZpbGVTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlQWN0aW9uVHlwZXMuU0VUX0FDVElWRV9QUk9GSUxFX1NVQ0NFU1M7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuICAgICAgICBwcm9maWxlOiBQcm9maWxlXHJcbiAgICB9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldEFjdGl2ZVByb2ZpbGVGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBQcm9maWxlQWN0aW9uVHlwZXMuU0VUX0FDVElWRV9QUk9GSUxFX0ZBSUxVUkU7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFByb2ZpbGVBY3Rpb25zID0gU2V0UHJvZmlsZXNcclxufCBTZXRBY3RpdmVQcm9maWxlXHJcbnwgU2V0QWN0aXZlUHJvZmlsZVN1Y2Nlc3NcclxufCBTZXRBY3RpdmVQcm9maWxlRmFpbHVyZTtcclxuIl19