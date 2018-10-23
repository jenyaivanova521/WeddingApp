"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var actions_1 = require("./actions");
var state_1 = require("./state");
function reducer(state, action) {
    if (state === void 0) { state = state_1.initialState; }
    var index;
    switch (action.type) {
        case actions_1.MemberActionTypes.SET_MEMBERS:
            return tslib_1.__assign({}, state, { members: action.payload.members });
        case actions_1.MemberActionTypes.CHANGE_MEMBER_ROLE:
            var updatedMembers = state.members.map(function (item, index) {
                if (item.id !== action.payload.memberId) {
                    return item;
                }
                return tslib_1.__assign({}, item, { role: action.payload.role });
            });
            return tslib_1.__assign({}, state, { members: updatedMembers });
        case actions_1.MemberActionTypes.DELETE_MEMBER:
            updatedMembers = state.members.filter(function (member) {
                return member.id !== action.payload.memberId;
            });
            return tslib_1.__assign({}, state, { members: updatedMembers });
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxQ0FBNkQ7QUFDN0QsaUNBQThDO0FBRTlDLGlCQUF3QixLQUFvQixFQUFFLE1BQXFCO0lBQTNDLHNCQUFBLEVBQUEsUUFBUSxvQkFBWTtJQUV4QyxJQUFJLEtBQUssQ0FBQztJQUNWLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssMkJBQWlCLENBQUMsV0FBVztZQUM5QixNQUFNLHNCQUNDLEtBQUssSUFDUixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQ2pDO1FBQ04sS0FBSywyQkFBaUIsQ0FBQyxrQkFBa0I7WUFDckMsSUFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztnQkFDL0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBQ0QsTUFBTSxzQkFDQyxJQUFJLElBQ1AsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUMzQjtZQUNOLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxzQkFDQyxLQUFLLElBQ1IsT0FBTyxFQUFFLGNBQWMsSUFDekI7UUFDTixLQUFLLDJCQUFpQixDQUFDLGFBQWE7WUFDaEMsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTTtnQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUE7WUFDRixNQUFNLHNCQUNDLEtBQUssSUFDUixPQUFPLEVBQUUsY0FBYyxJQUN6QjtRQUNOO1lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0FBRUwsQ0FBQztBQW5DRCwwQkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IE1lbWJlckFjdGlvbnMsIE1lbWJlckFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgaW5pdGlhbFN0YXRlLCBTdGF0ZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogTWVtYmVyQWN0aW9ucykge1xyXG5cclxuICAgIGxldCBpbmRleDtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIE1lbWJlckFjdGlvblR5cGVzLlNFVF9NRU1CRVJTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiBhY3Rpb24ucGF5bG9hZC5tZW1iZXJzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBNZW1iZXJBY3Rpb25UeXBlcy5DSEFOR0VfTUVNQkVSX1JPTEU6XHJcbiAgICAgICAgICAgIGxldCB1cGRhdGVkTWVtYmVycyA9IHN0YXRlLm1lbWJlcnMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IGFjdGlvbi5wYXlsb2FkLm1lbWJlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogYWN0aW9uLnBheWxvYWQucm9sZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lbWJlcnM6IHVwZGF0ZWRNZW1iZXJzXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBNZW1iZXJBY3Rpb25UeXBlcy5ERUxFVEVfTUVNQkVSOlxyXG4gICAgICAgICAgICB1cGRhdGVkTWVtYmVycyA9IHN0YXRlLm1lbWJlcnMuZmlsdGVyKChtZW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZW1iZXIuaWQgIT09IGFjdGlvbi5wYXlsb2FkLm1lbWJlcklkO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZW1iZXJzOiB1cGRhdGVkTWVtYmVyc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19