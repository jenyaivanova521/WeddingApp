"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
var state_1 = require("./state");
function reducer(state, action) {
    if (state === void 0) { state = state_1.initialState; }
    switch (action.type) {
        case actions_1.WeddingActionTypes.GET_WEDDINGS_SUCCESS:
            return Object.assign({}, state, {
                weddings: action.payload.weddings
            });
        case actions_1.WeddingActionTypes.SET_ACTIVE_WEDDING_SUCCESS:
            return Object.assign({}, state, {
                activeWedding: action.payload.wedding
            });
        case actions_1.WeddingActionTypes.GET_WEDDING_MEMBERS_SUCCESS:
            return Object.assign({}, state, {
                activeWeddingMembers: action.payload.weddingMembers
            });
        case actions_1.WeddingActionTypes.UPDATE_WEDDING:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    weddingForm: Object.assign({}, state.ui.weddingForm, {
                        submitted: true
                    })
                })
            });
        case actions_1.WeddingActionTypes.UPDATE_WEDDING_SUCCESS:
            return Object.assign({}, state, {
                activeWedding: Object.assign({}, state.activeWedding, {
                    name: action.payload.wedding.name
                }),
                ui: Object.assign({}, state.ui, {
                    weddingForm: Object.assign({}, state.ui.weddingForm, {
                        submitted: false
                    })
                })
            });
        case actions_1.WeddingActionTypes.UPDATE_WEDDING_FAILURE:
            return Object.assign({}, state, {
                ui: Object.assign({}, state.ui, {
                    weddingForm: Object.assign({}, state.ui.weddingForm, {
                        submitted: false
                    })
                })
            });
        default:
            return state;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkdWNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZWR1Y2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUErRDtBQUMvRCxpQ0FBdUM7QUFFdkMsaUJBQXdCLEtBQW9CLEVBQUUsTUFBc0I7SUFBNUMsc0JBQUEsRUFBQSxRQUFRLG9CQUFZO0lBRTNDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEtBQUssNEJBQWtCLENBQUMsb0JBQW9CO1lBQzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQy9CLFFBQVEsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVE7YUFDakMsQ0FBQyxDQUFDO1FBRUosS0FBSyw0QkFBa0IsQ0FBQywwQkFBMEI7WUFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDL0IsYUFBYSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTzthQUNyQyxDQUFDLENBQUM7UUFFSixLQUFLLDRCQUFrQixDQUFDLDJCQUEyQjtZQUNsRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUMvQixvQkFBb0IsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWM7YUFDbkQsQ0FBQyxDQUFDO1FBRUosS0FBSyw0QkFBa0IsQ0FBQyxjQUFjO1lBQ3JDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQy9CLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFO29CQUMvQixXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUU7d0JBQ3BELFNBQVMsRUFBRSxJQUFJO3FCQUNmLENBQUM7aUJBQ0YsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUVKLEtBQUssNEJBQWtCLENBQUMsc0JBQXNCO1lBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQy9CLGFBQWEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFO29CQUNyRCxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSTtpQkFDakMsQ0FBQztnQkFDRixFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtvQkFDL0IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO3dCQUNwRCxTQUFTLEVBQUUsS0FBSztxQkFDaEIsQ0FBQztpQkFDRixDQUFDO2FBQ0YsQ0FBQyxDQUFDO1FBRUosS0FBSyw0QkFBa0IsQ0FBQyxzQkFBc0I7WUFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDL0IsRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7b0JBQy9CLFdBQVcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRTt3QkFDcEQsU0FBUyxFQUFFLEtBQUs7cUJBQ2hCLENBQUM7aUJBQ0YsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUVKO1lBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7QUFFRixDQUFDO0FBcERELDBCQW9EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlZGRpbmdBY3Rpb25zLCBXZWRkaW5nQWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQgeyBpbml0aWFsU3RhdGUgfSBmcm9tICcuL3N0YXRlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IFdlZGRpbmdBY3Rpb25zKSB7XHJcblxyXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuXHRcdGNhc2UgV2VkZGluZ0FjdGlvblR5cGVzLkdFVF9XRURESU5HU19TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuXHRcdFx0XHR3ZWRkaW5nczogYWN0aW9uLnBheWxvYWQud2VkZGluZ3NcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Y2FzZSBXZWRkaW5nQWN0aW9uVHlwZXMuU0VUX0FDVElWRV9XRURESU5HX1NVQ0NFU1M6XHJcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG5cdFx0XHRcdGFjdGl2ZVdlZGRpbmc6IGFjdGlvbi5wYXlsb2FkLndlZGRpbmdcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Y2FzZSBXZWRkaW5nQWN0aW9uVHlwZXMuR0VUX1dFRERJTkdfTUVNQkVSU19TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuXHRcdFx0XHRhY3RpdmVXZWRkaW5nTWVtYmVyczogYWN0aW9uLnBheWxvYWQud2VkZGluZ01lbWJlcnNcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0Y2FzZSBXZWRkaW5nQWN0aW9uVHlwZXMuVVBEQVRFX1dFRERJTkc6XHJcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG5cdFx0XHRcdHVpOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS51aSwge1xyXG5cdFx0XHRcdFx0d2VkZGluZ0Zvcm06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnVpLndlZGRpbmdGb3JtLCB7XHJcblx0XHRcdFx0XHRcdHN1Ym1pdHRlZDogdHJ1ZVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRjYXNlIFdlZGRpbmdBY3Rpb25UeXBlcy5VUERBVEVfV0VERElOR19TVUNDRVNTOlxyXG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuXHRcdFx0XHRhY3RpdmVXZWRkaW5nOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hY3RpdmVXZWRkaW5nLCB7XHJcblx0XHRcdFx0XHRuYW1lOiBhY3Rpb24ucGF5bG9hZC53ZWRkaW5nLm5hbWVcclxuXHRcdFx0XHR9KSxcclxuXHRcdFx0XHR1aTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUudWksIHtcclxuXHRcdFx0XHRcdHdlZGRpbmdGb3JtOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS51aS53ZWRkaW5nRm9ybSwge1xyXG5cdFx0XHRcdFx0XHRzdWJtaXR0ZWQ6IGZhbHNlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdGNhc2UgV2VkZGluZ0FjdGlvblR5cGVzLlVQREFURV9XRURESU5HX0ZBSUxVUkU6XHJcblx0XHRcdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG5cdFx0XHRcdHVpOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS51aSwge1xyXG5cdFx0XHRcdFx0d2VkZGluZ0Zvcm06IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnVpLndlZGRpbmdGb3JtLCB7XHJcblx0XHRcdFx0XHRcdHN1Ym1pdHRlZDogZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxuXHJcbn1cclxuIl19