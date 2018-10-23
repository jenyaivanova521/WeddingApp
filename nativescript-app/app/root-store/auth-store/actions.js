"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["GET_AUTH_INFO"] = "[AUTH] Get auth info";
    AuthActionTypes["LOGOUT"] = "[AUTH] Logout";
    AuthActionTypes["LOGOUT_SUCCESS"] = "[AUTH] Logout success";
    AuthActionTypes["LOGOUT_FAILURE"] = "[AUTH] Logout failure";
    AuthActionTypes["GET_AUTH_INFO_SUCCESS"] = "[AUTH] Get auth info success";
    AuthActionTypes["GET_AUTH_INFO_FAILURE"] = "[AUTH] Get auth info failure";
    AuthActionTypes["LOGIN"] = "[AUTH] Login";
})(AuthActionTypes = exports.AuthActionTypes || (exports.AuthActionTypes = {}));
var Login = /** @class */ (function () {
    function Login() {
        this.type = AuthActionTypes.LOGIN;
    }
    return Login;
}());
exports.Login = Login;
var GetAuthInfo = /** @class */ (function () {
    function GetAuthInfo() {
        this.type = AuthActionTypes.GET_AUTH_INFO;
    }
    return GetAuthInfo;
}());
exports.GetAuthInfo = GetAuthInfo;
var Logout = /** @class */ (function () {
    function Logout() {
        this.type = AuthActionTypes.LOGOUT;
    }
    return Logout;
}());
exports.Logout = Logout;
var LogoutSuccess = /** @class */ (function () {
    function LogoutSuccess() {
        this.type = AuthActionTypes.LOGOUT_SUCCESS;
    }
    return LogoutSuccess;
}());
exports.LogoutSuccess = LogoutSuccess;
var LogoutFailure = /** @class */ (function () {
    function LogoutFailure() {
        this.type = AuthActionTypes.LOGOUT_FAILURE;
    }
    return LogoutFailure;
}());
exports.LogoutFailure = LogoutFailure;
var GetAuthInfoSuccess = /** @class */ (function () {
    function GetAuthInfoSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.GET_AUTH_INFO_SUCCESS;
    }
    return GetAuthInfoSuccess;
}());
exports.GetAuthInfoSuccess = GetAuthInfoSuccess;
var GetAuthInfoFailure = /** @class */ (function () {
    function GetAuthInfoFailure(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.GET_AUTH_INFO_FAILURE;
    }
    return GetAuthInfoFailure;
}());
exports.GetAuthInfoFailure = GetAuthInfoFailure;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxJQUFZLGVBUVg7QUFSRCxXQUFZLGVBQWU7SUFDMUIseURBQXNDLENBQUE7SUFDdEMsMkNBQXdCLENBQUE7SUFDeEIsMkRBQXdDLENBQUE7SUFDeEMsMkRBQXdDLENBQUE7SUFDeEMseUVBQXNELENBQUE7SUFDdEQseUVBQXNELENBQUE7SUFDdEQseUNBQXNCLENBQUE7QUFDdkIsQ0FBQyxFQVJXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBUTFCO0FBRUQ7SUFBQTtRQUNVLFNBQUksR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxzQkFBSztBQUlsQjtJQUFBO1FBQ1UsU0FBSSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7SUFDL0MsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxrQ0FBVztBQUl4QjtJQUFBO1FBQ1UsU0FBSSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7SUFDeEMsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLHdCQUFNO0FBSW5CO0lBQUE7UUFDVSxTQUFJLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQztJQUNoRCxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLHNDQUFhO0FBSTFCO0lBQUE7UUFDVSxTQUFJLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQztJQUNoRCxDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLHNDQUFhO0FBSTFCO0lBR0MsNEJBQW1CLE9BQWlCO1FBQWpCLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFGM0IsU0FBSSxHQUFHLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQztJQUVkLENBQUM7SUFDMUMseUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLGdEQUFrQjtBQU0vQjtJQUdDLDRCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUZ0QixTQUFJLEdBQUcsZUFBZSxDQUFDLHFCQUFxQixDQUFDO0lBRW5CLENBQUM7SUFDckMseUJBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgQXV0aEluZm8gfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBBdXRoQWN0aW9uVHlwZXMge1xyXG5cdEdFVF9BVVRIX0lORk8gPSAnW0FVVEhdIEdldCBhdXRoIGluZm8nLFxyXG5cdExPR09VVCA9ICdbQVVUSF0gTG9nb3V0JyxcclxuXHRMT0dPVVRfU1VDQ0VTUyA9ICdbQVVUSF0gTG9nb3V0IHN1Y2Nlc3MnLFxyXG5cdExPR09VVF9GQUlMVVJFID0gJ1tBVVRIXSBMb2dvdXQgZmFpbHVyZScsXHJcblx0R0VUX0FVVEhfSU5GT19TVUNDRVNTID0gJ1tBVVRIXSBHZXQgYXV0aCBpbmZvIHN1Y2Nlc3MnLFxyXG5cdEdFVF9BVVRIX0lORk9fRkFJTFVSRSA9ICdbQVVUSF0gR2V0IGF1dGggaW5mbyBmYWlsdXJlJyxcclxuXHRMT0dJTiA9ICdbQVVUSF0gTG9naW4nLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW4gaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBdXRoQWN0aW9uVHlwZXMuTE9HSU47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHZXRBdXRoSW5mbyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhBY3Rpb25UeXBlcy5HRVRfQVVUSF9JTkZPO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9nb3V0IGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aEFjdGlvblR5cGVzLkxPR09VVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ291dFN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBBdXRoQWN0aW9uVHlwZXMuTE9HT1VUX1NVQ0NFU1M7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dvdXRGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aEFjdGlvblR5cGVzLkxPR09VVF9GQUlMVVJFO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0QXV0aEluZm9TdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gQXV0aEFjdGlvblR5cGVzLkdFVF9BVVRIX0lORk9fU1VDQ0VTUztcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IEF1dGhJbmZvKSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldEF1dGhJbmZvRmFpbHVyZSBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IEF1dGhBY3Rpb25UeXBlcy5HRVRfQVVUSF9JTkZPX0ZBSUxVUkU7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHsgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBBdXRoQWN0aW9ucyA9IEdldEF1dGhJbmZvXHJcblx0fCBMb2dpblxyXG5cdHwgTG9nb3V0XHJcblx0fCBMb2dvdXRTdWNjZXNzXHJcblx0fCBMb2dvdXRGYWlsdXJlXHJcblx0fCBHZXRBdXRoSW5mb1N1Y2Nlc3NcclxuXHR8IEdldEF1dGhJbmZvRmFpbHVyZTtcclxuIl19