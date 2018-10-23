"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MemberActionTypes;
(function (MemberActionTypes) {
    MemberActionTypes["SET_MEMBERS"] = "[MEMBER] Set members";
    MemberActionTypes["CHANGE_MEMBER_ROLE"] = "[MEMBER] Change member role";
    MemberActionTypes["DELETE_MEMBER"] = "[MEMBER] Delete member";
})(MemberActionTypes = exports.MemberActionTypes || (exports.MemberActionTypes = {}));
var SetMembers = /** @class */ (function () {
    function SetMembers(payload) {
        this.payload = payload;
        this.type = MemberActionTypes.SET_MEMBERS;
    }
    return SetMembers;
}());
exports.SetMembers = SetMembers;
var ChangeMemberRole = /** @class */ (function () {
    function ChangeMemberRole(payload) {
        this.payload = payload;
        this.type = MemberActionTypes.CHANGE_MEMBER_ROLE;
    }
    return ChangeMemberRole;
}());
exports.ChangeMemberRole = ChangeMemberRole;
var DeleteMember = /** @class */ (function () {
    function DeleteMember(payload) {
        this.payload = payload;
        this.type = MemberActionTypes.DELETE_MEMBER;
    }
    return DeleteMember;
}());
exports.DeleteMember = DeleteMember;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDekIseURBQW9DLENBQUE7SUFDcEMsdUVBQWtELENBQUE7SUFDbEQsNkRBQXdDLENBQUE7QUFDNUMsQ0FBQyxFQUpXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBSTVCO0FBRUQ7SUFHSSxvQkFBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFKUSxTQUFJLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxDQUFDO0lBSXpDLENBQUM7SUFDVixpQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlksZ0NBQVU7QUFRdkI7SUFFSSwwQkFBbUIsT0FHbEI7UUFIa0IsWUFBTyxHQUFQLE9BQU8sQ0FHekI7UUFKUSxTQUFJLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7SUFJaEQsQ0FBQztJQUNWLHVCQUFDO0FBQUQsQ0FBQyxBQU5ELElBTUM7QUFOWSw0Q0FBZ0I7QUFRN0I7SUFFSSxzQkFBbUIsT0FFbEI7UUFGa0IsWUFBTyxHQUFQLE9BQU8sQ0FFekI7UUFIUSxTQUFJLEdBQUcsaUJBQWlCLENBQUMsYUFBYSxDQUFDO0lBRzNDLENBQUM7SUFDVixtQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBTFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcclxuaW1wb3J0IHsgTWVtYmVyIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGVudW0gTWVtYmVyQWN0aW9uVHlwZXMge1xyXG4gICAgU0VUX01FTUJFUlMgPSAnW01FTUJFUl0gU2V0IG1lbWJlcnMnLFxyXG4gICAgQ0hBTkdFX01FTUJFUl9ST0xFID0gJ1tNRU1CRVJdIENoYW5nZSBtZW1iZXIgcm9sZScsXHJcbiAgICBERUxFVEVfTUVNQkVSID0gJ1tNRU1CRVJdIERlbGV0ZSBtZW1iZXInXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXRNZW1iZXJzIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBNZW1iZXJBY3Rpb25UeXBlcy5TRVRfTUVNQkVSUztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDoge1xyXG4gICAgICAgIG1lbWJlcnM6IE1lbWJlcltdXHJcbiAgICB9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENoYW5nZU1lbWJlclJvbGUgaW1wbGVtZW50cyBBY3Rpb24ge1xyXG4gICAgcmVhZG9ubHkgdHlwZSA9IE1lbWJlckFjdGlvblR5cGVzLkNIQU5HRV9NRU1CRVJfUk9MRTtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7XHJcbiAgICAgICAgbWVtYmVySWQ6IHN0cmluZyxcclxuICAgICAgICByb2xlOiBzdHJpbmdcclxuICAgIH0pIHsgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVsZXRlTWVtYmVyIGltcGxlbWVudHMgQWN0aW9uIHtcclxuICAgIHJlYWRvbmx5IHR5cGUgPSBNZW1iZXJBY3Rpb25UeXBlcy5ERUxFVEVfTUVNQkVSO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHtcclxuICAgICAgICBtZW1iZXJJZDogc3RyaW5nXHJcbiAgICB9KSB7IH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVtYmVyQWN0aW9ucyA9XHJcbiAgICB8IFNldE1lbWJlcnNcclxuICAgIHwgQ2hhbmdlTWVtYmVyUm9sZVxyXG4gICAgfCBEZWxldGVNZW1iZXJcclxuIl19