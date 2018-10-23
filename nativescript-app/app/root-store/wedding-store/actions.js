"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeddingActionTypes;
(function (WeddingActionTypes) {
    WeddingActionTypes["GET_WEDDINGS"] = "[WEDDING] Get weddings";
    WeddingActionTypes["GET_WEDDINGS_SUCCESS"] = "[WEDDING] Get weddings success";
    WeddingActionTypes["GET_WEDDINGS_ERROR"] = "[WEDDING] Get weddings error";
    WeddingActionTypes["SET_ACTIVE_WEDDING"] = "[WEDDING] Set active wedding";
    WeddingActionTypes["SET_ACTIVE_WEDDING_SUCCESS"] = "[WEDDING] Set active wedding success";
    WeddingActionTypes["SET_ACTIVE_WEDDING_FAILURE"] = "[WEDDING] Set active wedding failure";
    WeddingActionTypes["CREATE_WEDDING"] = "[WEDDING] Create wedding";
    WeddingActionTypes["CREATE_WEDDING_SUCCESS"] = "[WEDDING] Create wedding success";
    WeddingActionTypes["CREATE_WEDDING_FAILURE"] = "[WEDDING] Create wedding failure";
    WeddingActionTypes["GET_WEDDING_MEMBERS"] = "[WEDDING] Get wedding members";
    WeddingActionTypes["GET_WEDDING_MEMBERS_SUCCESS"] = "[WEDDING] Get wedding members success";
    WeddingActionTypes["UPDATE_WEDDING"] = "[WEDDING] Update wedding";
    WeddingActionTypes["UPDATE_WEDDING_SUCCESS"] = "[WEDDING] Update wedding success";
    WeddingActionTypes["UPDATE_WEDDING_FAILURE"] = "[WEDDING] Update wedding failure";
})(WeddingActionTypes = exports.WeddingActionTypes || (exports.WeddingActionTypes = {}));
var GetWeddings = /** @class */ (function () {
    function GetWeddings() {
        this.type = WeddingActionTypes.GET_WEDDINGS;
    }
    return GetWeddings;
}());
exports.GetWeddings = GetWeddings;
var GetWeddingsSuccess = /** @class */ (function () {
    function GetWeddingsSuccess(payload) {
        this.payload = payload;
        this.type = WeddingActionTypes.GET_WEDDINGS_SUCCESS;
    }
    return GetWeddingsSuccess;
}());
exports.GetWeddingsSuccess = GetWeddingsSuccess;
var GetWeddingsError = /** @class */ (function () {
    function GetWeddingsError() {
        this.type = WeddingActionTypes.GET_WEDDINGS_ERROR;
    }
    return GetWeddingsError;
}());
exports.GetWeddingsError = GetWeddingsError;
var GetWeddingMembers = /** @class */ (function () {
    function GetWeddingMembers() {
        this.type = WeddingActionTypes.GET_WEDDING_MEMBERS;
    }
    return GetWeddingMembers;
}());
exports.GetWeddingMembers = GetWeddingMembers;
var GetWeddingMembersSuccess = /** @class */ (function () {
    function GetWeddingMembersSuccess(payload) {
        this.payload = payload;
        this.type = WeddingActionTypes.GET_WEDDING_MEMBERS_SUCCESS;
    }
    return GetWeddingMembersSuccess;
}());
exports.GetWeddingMembersSuccess = GetWeddingMembersSuccess;
var SetActiveWedding = /** @class */ (function () {
    function SetActiveWedding(payload) {
        this.payload = payload;
        this.type = WeddingActionTypes.SET_ACTIVE_WEDDING;
    }
    return SetActiveWedding;
}());
exports.SetActiveWedding = SetActiveWedding;
var SetActiveWeddingSuccess = /** @class */ (function () {
    function SetActiveWeddingSuccess(payload) {
        this.payload = payload;
        this.type = WeddingActionTypes.SET_ACTIVE_WEDDING_SUCCESS;
    }
    return SetActiveWeddingSuccess;
}());
exports.SetActiveWeddingSuccess = SetActiveWeddingSuccess;
var SetActiveWeddingFailure = /** @class */ (function () {
    function SetActiveWeddingFailure() {
        this.type = WeddingActionTypes.SET_ACTIVE_WEDDING_FAILURE;
    }
    return SetActiveWeddingFailure;
}());
exports.SetActiveWeddingFailure = SetActiveWeddingFailure;
var CreateWedding = /** @class */ (function () {
    function CreateWedding(payload) {
        this.payload = payload;
        this.type = WeddingActionTypes.CREATE_WEDDING;
    }
    return CreateWedding;
}());
exports.CreateWedding = CreateWedding;
var CreateWeddingSuccess = /** @class */ (function () {
    function CreateWeddingSuccess() {
        this.type = WeddingActionTypes.CREATE_WEDDING_SUCCESS;
    }
    return CreateWeddingSuccess;
}());
exports.CreateWeddingSuccess = CreateWeddingSuccess;
var CreateWeddingFailure = /** @class */ (function () {
    function CreateWeddingFailure(payload) {
        this.payload = payload;
        this.type = WeddingActionTypes.CREATE_WEDDING_FAILURE;
    }
    return CreateWeddingFailure;
}());
exports.CreateWeddingFailure = CreateWeddingFailure;
var UpdateWedding = /** @class */ (function () {
    function UpdateWedding(payload) {
        this.payload = payload;
        this.type = WeddingActionTypes.UPDATE_WEDDING;
    }
    return UpdateWedding;
}());
exports.UpdateWedding = UpdateWedding;
var UpdateWeddingSuccess = /** @class */ (function () {
    function UpdateWeddingSuccess(payload) {
        this.payload = payload;
        this.type = WeddingActionTypes.UPDATE_WEDDING_SUCCESS;
    }
    return UpdateWeddingSuccess;
}());
exports.UpdateWeddingSuccess = UpdateWeddingSuccess;
var UpdateWeddingFailure = /** @class */ (function () {
    function UpdateWeddingFailure(payload) {
        this.payload = payload;
        this.type = WeddingActionTypes.UPDATE_WEDDING_FAILURE;
    }
    return UpdateWeddingFailure;
}());
exports.UpdateWeddingFailure = UpdateWeddingFailure;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxJQUFZLGtCQWVYO0FBZkQsV0FBWSxrQkFBa0I7SUFDN0IsNkRBQXVDLENBQUE7SUFDdkMsNkVBQXVELENBQUE7SUFDdkQseUVBQW1ELENBQUE7SUFDbkQseUVBQW1ELENBQUE7SUFDbkQseUZBQW1FLENBQUE7SUFDbkUseUZBQW1FLENBQUE7SUFDbkUsaUVBQTJDLENBQUE7SUFDM0MsaUZBQTJELENBQUE7SUFDM0QsaUZBQTJELENBQUE7SUFDM0QsMkVBQXFELENBQUE7SUFDckQsMkZBQXFFLENBQUE7SUFDckUsaUVBQTJDLENBQUE7SUFDM0MsaUZBQTJELENBQUE7SUFDM0QsaUZBQTJELENBQUE7QUFDNUQsQ0FBQyxFQWZXLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBZTdCO0FBRUQ7SUFBQTtRQUNVLFNBQUksR0FBRyxrQkFBa0IsQ0FBQyxZQUFZLENBQUM7SUFDakQsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxrQ0FBVztBQUl4QjtJQUdDLDRCQUFtQixPQUVsQjtRQUZrQixZQUFPLEdBQVAsT0FBTyxDQUV6QjtRQUpRLFNBQUksR0FBRyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQztJQUluRCxDQUFDO0lBQ1AseUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLGdEQUFrQjtBQVEvQjtJQUFBO1FBQ1UsU0FBSSxHQUFHLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDO0lBQ3ZELENBQUM7SUFBRCx1QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksNENBQWdCO0FBSTdCO0lBQUE7UUFDVSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7SUFDeEQsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSw4Q0FBaUI7QUFJOUI7SUFHQyxrQ0FBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFKUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsMkJBQTJCLENBQUM7SUFJMUQsQ0FBQztJQUNQLCtCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSw0REFBd0I7QUFRckM7SUFHQywwQkFBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFKUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsa0JBQWtCLENBQUM7SUFJakQsQ0FBQztJQUNQLHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSw0Q0FBZ0I7QUFRN0I7SUFHQyxpQ0FBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFKUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsMEJBQTBCLENBQUM7SUFJekQsQ0FBQztJQUNQLDhCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSwwREFBdUI7QUFRcEM7SUFBQTtRQUNVLFNBQUksR0FBRyxrQkFBa0IsQ0FBQywwQkFBMEIsQ0FBQztJQUMvRCxDQUFDO0lBQUQsOEJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLDBEQUF1QjtBQUlwQztJQUdDLHVCQUFtQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBRjFCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQyxjQUFjLENBQUM7SUFFWCxDQUFDO0lBQ3pDLG9CQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxzQ0FBYTtBQU0xQjtJQUFBO1FBQ1UsU0FBSSxHQUFHLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDO0lBQzNELENBQUM7SUFBRCwyQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksb0RBQW9CO0FBSWpDO0lBR0MsOEJBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRnRCLFNBQUksR0FBRyxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQztJQUV2QixDQUFDO0lBQ3JDLDJCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxvREFBb0I7QUFNakM7SUFHQyx1QkFBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFKUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsY0FBYyxDQUFDO0lBSTdDLENBQUM7SUFDUCxvQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksc0NBQWE7QUFRMUI7SUFFQyw4QkFBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFIUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsc0JBQXNCLENBQUM7SUFHckQsQ0FBQztJQUNQLDJCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxvREFBb0I7QUFPakM7SUFFQyw4QkFBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFIUSxTQUFJLEdBQUcsa0JBQWtCLENBQUMsc0JBQXNCLENBQUM7SUFHckQsQ0FBQztJQUNQLDJCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFdlZGRpbmcsIE1lbWJlciB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBlbnVtIFdlZGRpbmdBY3Rpb25UeXBlcyB7XHJcblx0R0VUX1dFRERJTkdTID0gJ1tXRURESU5HXSBHZXQgd2VkZGluZ3MnLFxyXG5cdEdFVF9XRURESU5HU19TVUNDRVNTID0gJ1tXRURESU5HXSBHZXQgd2VkZGluZ3Mgc3VjY2VzcycsXHJcblx0R0VUX1dFRERJTkdTX0VSUk9SID0gJ1tXRURESU5HXSBHZXQgd2VkZGluZ3MgZXJyb3InLFxyXG5cdFNFVF9BQ1RJVkVfV0VERElORyA9ICdbV0VERElOR10gU2V0IGFjdGl2ZSB3ZWRkaW5nJyxcclxuXHRTRVRfQUNUSVZFX1dFRERJTkdfU1VDQ0VTUyA9ICdbV0VERElOR10gU2V0IGFjdGl2ZSB3ZWRkaW5nIHN1Y2Nlc3MnLFxyXG5cdFNFVF9BQ1RJVkVfV0VERElOR19GQUlMVVJFID0gJ1tXRURESU5HXSBTZXQgYWN0aXZlIHdlZGRpbmcgZmFpbHVyZScsXHJcblx0Q1JFQVRFX1dFRERJTkcgPSAnW1dFRERJTkddIENyZWF0ZSB3ZWRkaW5nJyxcclxuXHRDUkVBVEVfV0VERElOR19TVUNDRVNTID0gJ1tXRURESU5HXSBDcmVhdGUgd2VkZGluZyBzdWNjZXNzJyxcclxuXHRDUkVBVEVfV0VERElOR19GQUlMVVJFID0gJ1tXRURESU5HXSBDcmVhdGUgd2VkZGluZyBmYWlsdXJlJyxcclxuXHRHRVRfV0VERElOR19NRU1CRVJTID0gJ1tXRURESU5HXSBHZXQgd2VkZGluZyBtZW1iZXJzJyxcclxuXHRHRVRfV0VERElOR19NRU1CRVJTX1NVQ0NFU1MgPSAnW1dFRERJTkddIEdldCB3ZWRkaW5nIG1lbWJlcnMgc3VjY2VzcycsXHJcblx0VVBEQVRFX1dFRERJTkcgPSAnW1dFRERJTkddIFVwZGF0ZSB3ZWRkaW5nJyxcclxuXHRVUERBVEVfV0VERElOR19TVUNDRVNTID0gJ1tXRURESU5HXSBVcGRhdGUgd2VkZGluZyBzdWNjZXNzJyxcclxuXHRVUERBVEVfV0VERElOR19GQUlMVVJFID0gJ1tXRURESU5HXSBVcGRhdGUgd2VkZGluZyBmYWlsdXJlJ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2VkZGluZ3MgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXZWRkaW5nQWN0aW9uVHlwZXMuR0VUX1dFRERJTkdTO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2VkZGluZ3NTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2VkZGluZ0FjdGlvblR5cGVzLkdFVF9XRURESU5HU19TVUNDRVNTO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0d2VkZGluZ3M6IFdlZGRpbmdbXVxyXG5cdH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2VkZGluZ3NFcnJvciBpbXBsZW1lbnRzICBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXZWRkaW5nQWN0aW9uVHlwZXMuR0VUX1dFRERJTkdTX0VSUk9SO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0V2VkZGluZ01lbWJlcnMgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXZWRkaW5nQWN0aW9uVHlwZXMuR0VUX1dFRERJTkdfTUVNQkVSUztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFdlZGRpbmdNZW1iZXJzU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFdlZGRpbmdBY3Rpb25UeXBlcy5HRVRfV0VERElOR19NRU1CRVJTX1NVQ0NFU1M7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcblx0XHR3ZWRkaW5nTWVtYmVyczogTWVtYmVyW11cclxuXHR9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldEFjdGl2ZVdlZGRpbmcgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXZWRkaW5nQWN0aW9uVHlwZXMuU0VUX0FDVElWRV9XRURESU5HO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZD86IHtcclxuXHRcdGlkOiBzdHJpbmdcclxuXHR9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNldEFjdGl2ZVdlZGRpbmdTdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2VkZGluZ0FjdGlvblR5cGVzLlNFVF9BQ1RJVkVfV0VERElOR19TVUNDRVNTO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0d2VkZGluZzogV2VkZGluZ1xyXG5cdH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2V0QWN0aXZlV2VkZGluZ0ZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXZWRkaW5nQWN0aW9uVHlwZXMuU0VUX0FDVElWRV9XRURESU5HX0ZBSUxVUkU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVXZWRkaW5nIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2VkZGluZ0FjdGlvblR5cGVzLkNSRUFURV9XRURESU5HO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogV2VkZGluZykgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVXZWRkaW5nU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFdlZGRpbmdBY3Rpb25UeXBlcy5DUkVBVEVfV0VERElOR19TVUNDRVNTO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlV2VkZGluZ0ZhaWx1cmUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG5cdHJlYWRvbmx5IHR5cGUgPSBXZWRkaW5nQWN0aW9uVHlwZXMuQ1JFQVRFX1dFRERJTkdfRkFJTFVSRTtcclxuXHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVXZWRkaW5nIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2VkZGluZ0FjdGlvblR5cGVzLlVQREFURV9XRURESU5HO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG5cdFx0d2VkZGluZzogYW55XHJcblx0fSkgeyB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcGRhdGVXZWRkaW5nU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XHJcblx0cmVhZG9ubHkgdHlwZSA9IFdlZGRpbmdBY3Rpb25UeXBlcy5VUERBVEVfV0VERElOR19TVUNDRVNTO1xyXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcblx0XHR3ZWRkaW5nOiBhbnlcclxuXHR9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVwZGF0ZVdlZGRpbmdGYWlsdXJlIGltcGxlbWVudHMgQWN0aW9uIHtcclxuXHRyZWFkb25seSB0eXBlID0gV2VkZGluZ0FjdGlvblR5cGVzLlVQREFURV9XRURESU5HX0ZBSUxVUkU7XHJcblx0Y29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuXHRcdGVycm9yOiBhbnlcclxuXHR9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgV2VkZGluZ0FjdGlvbnMgPSBHZXRXZWRkaW5nc1xyXG5cdHwgR2V0V2VkZGluZ3NTdWNjZXNzXHJcblx0fCBTZXRBY3RpdmVXZWRkaW5nXHJcblx0fCBTZXRBY3RpdmVXZWRkaW5nU3VjY2Vzc1xyXG5cdHwgU2V0QWN0aXZlV2VkZGluZ0ZhaWx1cmVcclxuXHR8IENyZWF0ZVdlZGRpbmdcclxuXHR8IENyZWF0ZVdlZGRpbmdTdWNjZXNzXHJcblx0fCBDcmVhdGVXZWRkaW5nRmFpbHVyZVxyXG5cdHwgR2V0V2VkZGluZ01lbWJlcnNcclxuXHR8IEdldFdlZGRpbmdNZW1iZXJzU3VjY2Vzc1xyXG5cdHwgVXBkYXRlV2VkZGluZ1xyXG5cdHwgVXBkYXRlV2VkZGluZ1N1Y2Nlc3NcclxuXHR8IFVwZGF0ZVdlZGRpbmdGYWlsdXJlO1xyXG4iXX0=