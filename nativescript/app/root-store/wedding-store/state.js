"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = {
    weddings: null,
    activeWedding: null,
    activeWeddingMembers: null,
    ui: {
        weddingForm: {
            submitted: false
        },
        memberForm: {
            submitted: false,
            modalOpen: false,
            error: null
        },
        memberRoleForm: {
            submitted: false,
            modalOpen: false,
            error: null
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQXVCYSxRQUFBLFlBQVksR0FBVTtJQUNsQyxRQUFRLEVBQUUsSUFBSTtJQUNkLGFBQWEsRUFBRSxJQUFJO0lBQ25CLG9CQUFvQixFQUFFLElBQUk7SUFDMUIsRUFBRSxFQUFFO1FBQ0gsV0FBVyxFQUFFO1lBQ1osU0FBUyxFQUFFLEtBQUs7U0FDaEI7UUFDRCxVQUFVLEVBQUU7WUFDWCxTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixLQUFLLEVBQUUsSUFBSTtTQUNYO1FBQ0QsY0FBYyxFQUFFO1lBQ2YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLElBQUk7U0FDWDtLQUNEO0NBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlZGRpbmcsIE1lbWJlciB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xyXG5cdHdlZGRpbmdzOiBXZWRkaW5nW10gfCBudWxsO1xyXG5cdGFjdGl2ZVdlZGRpbmc6IFdlZGRpbmcgfCBudWxsO1xyXG5cdGFjdGl2ZVdlZGRpbmdNZW1iZXJzOiBNZW1iZXJbXSB8IG51bGw7XHJcblx0dWk6IHtcclxuXHRcdHdlZGRpbmdGb3JtOiB7XHJcblx0XHRcdHN1Ym1pdHRlZDogYm9vbGVhblxyXG5cdFx0fSxcclxuXHRcdG1lbWJlckZvcm06IHtcclxuXHRcdFx0c3VibWl0dGVkOiBib29sZWFuLFxyXG5cdFx0XHRtb2RhbE9wZW46IGJvb2xlYW4sXHJcblx0XHRcdGVycm9yOiBhbnkgfCBudWxsXHJcblx0XHR9LFxyXG5cdFx0bWVtYmVyUm9sZUZvcm06IHtcclxuXHRcdFx0c3VibWl0dGVkOiBib29sZWFuLFxyXG5cdFx0XHRtb2RhbE9wZW46IGJvb2xlYW4sXHJcblx0XHRcdGVycm9yOiBhbnkgfCBudWxsXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBTdGF0ZSA9IHtcclxuXHR3ZWRkaW5nczogbnVsbCxcclxuXHRhY3RpdmVXZWRkaW5nOiBudWxsLFxyXG5cdGFjdGl2ZVdlZGRpbmdNZW1iZXJzOiBudWxsLFxyXG5cdHVpOiB7XHJcblx0XHR3ZWRkaW5nRm9ybToge1xyXG5cdFx0XHRzdWJtaXR0ZWQ6IGZhbHNlXHJcblx0XHR9LFxyXG5cdFx0bWVtYmVyRm9ybToge1xyXG5cdFx0XHRzdWJtaXR0ZWQ6IGZhbHNlLFxyXG5cdFx0XHRtb2RhbE9wZW46IGZhbHNlLFxyXG5cdFx0XHRlcnJvcjogbnVsbFxyXG5cdFx0fSxcclxuXHRcdG1lbWJlclJvbGVGb3JtOiB7XHJcblx0XHRcdHN1Ym1pdHRlZDogZmFsc2UsXHJcblx0XHRcdG1vZGFsT3BlbjogZmFsc2UsXHJcblx0XHRcdGVycm9yOiBudWxsXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG4iXX0=