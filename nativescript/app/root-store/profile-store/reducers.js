"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var actions_1 = require("./actions");
var state_1 = require("./state");
function reducer(state, action) {
    if (state === void 0) { state = state_1.initialState; }
    var index;
    switch (action.type) {
        case actions_1.ProfileActionTypes.SET_ACTIVE_PROFILE:
            return tslib_1.__assign({}, state, { activeProfile: action.payload.profile });
        case actions_1.ProfileActionTypes.SET_PROFILES:
            return tslib_1.__assign({}, state, { profiles: action.payload.profiles });
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxQ0FBK0Q7QUFDL0QsaUNBQThDO0FBRTlDLGlCQUF3QixLQUFvQixFQUFFLE1BQXNCO0lBQTVDLHNCQUFBLEVBQUEsUUFBUSxvQkFBWTtJQUV4QyxJQUFJLEtBQUssQ0FBQztJQUNWLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssNEJBQWtCLENBQUMsa0JBQWtCO1lBQ3RDLE1BQU0sc0JBQ0MsS0FBSyxJQUNSLGFBQWEsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFDdkM7UUFDTixLQUFLLDRCQUFrQixDQUFDLFlBQVk7WUFDaEMsTUFBTSxzQkFDQyxLQUFLLElBQ1IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUNuQztRQUNOO1lBQ0ksTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0FBRUwsQ0FBQztBQWxCRCwwQkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVBY3Rpb25zLCBQcm9maWxlQWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBpbml0aWFsU3RhdGUsIFN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBQcm9maWxlQWN0aW9ucykge1xyXG5cclxuICAgIGxldCBpbmRleDtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFByb2ZpbGVBY3Rpb25UeXBlcy5TRVRfQUNUSVZFX1BST0ZJTEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVByb2ZpbGU6IGFjdGlvbi5wYXlsb2FkLnByb2ZpbGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFByb2ZpbGVBY3Rpb25UeXBlcy5TRVRfUFJPRklMRVM6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVzOiBhY3Rpb24ucGF5bG9hZC5wcm9maWxlc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19