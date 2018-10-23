"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var state_1 = require("./state");
function reducer(state, action) {
    if (state === void 0) { state = state_1.initialState; }
    switch (action.type) {
        case actions_1.AuthActionTypes.GET_AUTH_INFO_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true,
                authInfo: Object.assign({}, state.authInfo, {
                    account: action.payload.account
                })
            });
        case actions_1.AuthActionTypes.LOGOUT: {
            return state_1.initialState;
        }
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF5RDtBQUN6RCxpQ0FBdUM7QUFFdkMsaUJBQXdCLEtBQW9CLEVBQUUsTUFBbUI7SUFBekMsc0JBQUEsRUFBQSxRQUFRLG9CQUFZO0lBRTNDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEtBQUsseUJBQWUsQ0FBQyxxQkFBcUI7WUFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDL0IsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO29CQUMzQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPO2lCQUMvQixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBQ0osS0FBSyx5QkFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxvQkFBWSxDQUFDO1FBQ3JCLENBQUM7UUFDRDtZQUNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0FBRUYsQ0FBQztBQWpCRCwwQkFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoQWN0aW9ucywgQXV0aEFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb25zJztcclxuaW1wb3J0IHsgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBdXRoQWN0aW9ucykge1xyXG5cclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblx0XHRjYXNlIEF1dGhBY3Rpb25UeXBlcy5HRVRfQVVUSF9JTkZPX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG5cdFx0XHRcdGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcclxuXHRcdFx0XHRhdXRoSW5mbzogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuYXV0aEluZm8sIHtcclxuXHRcdFx0XHRcdGFjY291bnQ6IGFjdGlvbi5wYXlsb2FkLmFjY291bnRcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdGNhc2UgQXV0aEFjdGlvblR5cGVzLkxPR09VVDoge1xyXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFN0YXRlO1xyXG5cdFx0fVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxuXHJcbn1cclxuIl19