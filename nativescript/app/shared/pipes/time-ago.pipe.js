"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var moment = require("moment");
var momentConstructor = moment;
var TimeAgoPipe = /** @class */ (function () {
    function TimeAgoPipe(cdRef, ngZone) {
        this.cdRef = cdRef;
        this.ngZone = ngZone;
    }
    TimeAgoPipe.prototype.transform = function (value, omitSuffix) {
        if (this.hasChanged(value, omitSuffix)) {
            this.lastTime = this.getTime(value);
            this.lastValue = value;
            this.lastOmitSuffix = omitSuffix;
            this.lastLocale = this.getLocale(value);
            this.removeTimer();
            this.createTimer();
            this.lastText = momentConstructor(value).from(momentConstructor(), omitSuffix);
        }
        else {
            this.createTimer();
        }
        return this.lastText;
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.createTimer = function () {
        var _this = this;
        if (this.currentTimer) {
            return;
        }
        var momentInstance = momentConstructor(this.lastValue);
        var timeToUpdate = this.getSecondsUntilUpdate(momentInstance) * 1000;
        this.currentTimer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.lastText = momentConstructor(_this.lastValue).from(momentConstructor(), _this.lastOmitSuffix);
                    _this.currentTimer = null;
                    _this.ngZone.run(function () { return _this.cdRef.markForCheck(); });
                }, timeToUpdate);
            }
        });
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.currentTimer) {
            window.clearTimeout(this.currentTimer);
            this.currentTimer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (momentInstance) {
        var howOld = Math.abs(momentConstructor().diff(momentInstance, 'minute'));
        if (howOld < 1) {
            return 1;
        }
        else if (howOld < 60) {
            return 30;
        }
        else if (howOld < 180) {
            return 300;
        }
        else {
            return 3600;
        }
    };
    TimeAgoPipe.prototype.hasChanged = function (value, omitSuffix) {
        return this.getTime(value) !== this.lastTime
            || this.getLocale(value) !== this.lastLocale
            || omitSuffix !== this.lastOmitSuffix;
    };
    TimeAgoPipe.prototype.getTime = function (value) {
        if (moment.isDate(value)) {
            return value.getTime();
        }
        else if (moment.isMoment(value)) {
            return value.valueOf();
        }
        else {
            return momentConstructor(value).valueOf();
        }
    };
    TimeAgoPipe.prototype.getLocale = function (value) {
        return moment.isMoment(value) ? value.locale() : null;
    };
    TimeAgoPipe = tslib_1.__decorate([
        core_1.Pipe({ name: 'amTimeAgo', pure: false }),
        tslib_1.__metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.NgZone])
    ], TimeAgoPipe);
    return TimeAgoPipe;
}());
exports.TimeAgoPipe = TimeAgoPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1hZ28ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUtYWdvLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBTXVCO0FBQ3ZCLCtCQUFpQztBQUVqQyxJQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztBQUdqQztJQVNDLHFCQUFvQixLQUF3QixFQUFVLE1BQWM7UUFBaEQsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3BFLENBQUM7SUFFRCwrQkFBUyxHQUFULFVBQVUsS0FBMkIsRUFBRSxVQUFvQjtRQUMxRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFaEYsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNw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TSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0MsQ0FBQztJQUNGLENBQUM7SUFFTywrQkFBUyxHQUFqQixVQUFrQixLQUEyQjtRQUM1QyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdkQsQ0FBQztJQTVGVyxXQUFXO1FBRHZCLFdBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO2lEQVVYLHdCQUFpQixFQUFrQixhQUFNO09BVHhELFdBQVcsQ0E2RnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTdGRCxJQTZGQztBQTdGWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcblx0UGlwZSxcclxuXHRDaGFuZ2VEZXRlY3RvclJlZixcclxuXHRQaXBlVHJhbnNmb3JtLFxyXG5cdE9uRGVzdHJveSxcclxuXHROZ1pvbmVcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBtb21lbnRDb25zdHJ1Y3RvciA9IG1vbWVudDtcclxuXHJcbkBQaXBlKHtuYW1lOiAnYW1UaW1lQWdvJywgcHVyZTogZmFsc2V9KVxyXG5leHBvcnQgY2xhc3MgVGltZUFnb1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtLCBPbkRlc3Ryb3kge1xyXG5cdHByaXZhdGUgY3VycmVudFRpbWVyOiBudW1iZXI7XHJcblxyXG5cdHByaXZhdGUgbGFzdFRpbWU6IE51bWJlcjtcclxuXHRwcml2YXRlIGxhc3RWYWx1ZTogRGF0ZSB8IG1vbWVudC5Nb21lbnQ7XHJcblx0cHJpdmF0ZSBsYXN0T21pdFN1ZmZpeDogYm9vbGVhbjtcclxuXHRwcml2YXRlIGxhc3RMb2NhbGU/OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBsYXN0VGV4dDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG5cdH1cclxuXHJcblx0dHJhbnNmb3JtKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCwgb21pdFN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG5cdFx0aWYgKHRoaXMuaGFzQ2hhbmdlZCh2YWx1ZSwgb21pdFN1ZmZpeCkpIHtcclxuXHRcdFx0dGhpcy5sYXN0VGltZSA9IHRoaXMuZ2V0VGltZSh2YWx1ZSk7XHJcblx0XHRcdHRoaXMubGFzdFZhbHVlID0gdmFsdWU7XHJcblx0XHRcdHRoaXMubGFzdE9taXRTdWZmaXggPSBvbWl0U3VmZml4O1xyXG5cdFx0XHR0aGlzLmxhc3RMb2NhbGUgPSB0aGlzLmdldExvY2FsZSh2YWx1ZSk7XHJcblx0XHRcdHRoaXMucmVtb3ZlVGltZXIoKTtcclxuXHRcdFx0dGhpcy5jcmVhdGVUaW1lcigpO1xyXG5cdFx0XHR0aGlzLmxhc3RUZXh0ID0gbW9tZW50Q29uc3RydWN0b3IodmFsdWUpLmZyb20obW9tZW50Q29uc3RydWN0b3IoKSwgb21pdFN1ZmZpeCk7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5jcmVhdGVUaW1lcigpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmxhc3RUZXh0O1xyXG5cdH1cclxuXHJcblx0bmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcblx0XHR0aGlzLnJlbW92ZVRpbWVyKCk7XHJcblx0fVxyXG5cclxuXHJcblx0cHJpdmF0ZSBjcmVhdGVUaW1lcigpIHtcclxuXHRcdGlmICh0aGlzLmN1cnJlbnRUaW1lcikge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBtb21lbnRJbnN0YW5jZSA9IG1vbWVudENvbnN0cnVjdG9yKHRoaXMubGFzdFZhbHVlKTtcclxuXHJcblx0XHRjb25zdCB0aW1lVG9VcGRhdGUgPSB0aGlzLmdldFNlY29uZHNVbnRpbFVwZGF0ZShtb21lbnRJbnN0YW5jZSkgKiAxMDAwO1xyXG5cdFx0dGhpcy5jdXJyZW50VGltZXIgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcblx0XHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG5cdFx0XHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmxhc3RUZXh0ID0gbW9tZW50Q29uc3RydWN0b3IodGhpcy5sYXN0VmFsdWUpLmZyb20obW9tZW50Q29uc3RydWN0b3IoKSwgdGhpcy5sYXN0T21pdFN1ZmZpeCk7XHJcblxyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50VGltZXIgPSBudWxsO1xyXG5cdFx0XHRcdFx0dGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCkpO1xyXG5cdFx0XHRcdH0sIHRpbWVUb1VwZGF0ZSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblxyXG5cdHByaXZhdGUgcmVtb3ZlVGltZXIoKSB7XHJcblx0XHRpZiAodGhpcy5jdXJyZW50VGltZXIpIHtcclxuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLmN1cnJlbnRUaW1lcik7XHJcblx0XHRcdHRoaXMuY3VycmVudFRpbWVyID0gbnVsbDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0U2Vjb25kc1VudGlsVXBkYXRlKG1vbWVudEluc3RhbmNlOiBtb21lbnQuTW9tZW50KSB7XHJcblx0XHRjb25zdCBob3dPbGQgPSBNYXRoLmFicyhtb21lbnRDb25zdHJ1Y3RvcigpLmRpZmYobW9tZW50SW5zdGFuY2UsICdtaW51dGUnKSk7XHJcblx0XHRpZiAoaG93T2xkIDwgMSkge1xyXG5cdFx0XHRyZXR1cm4gMTtcclxuXHRcdH0gZWxzZSBpZiAoaG93T2xkIDwgNjApIHtcclxuXHRcdFx0cmV0dXJuIDMwO1xyXG5cdFx0fSBlbHNlIGlmIChob3dPbGQgPCAxODApIHtcclxuXHRcdFx0cmV0dXJuIDMwMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiAzNjAwO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBoYXNDaGFuZ2VkKHZhbHVlOiBEYXRlIHwgbW9tZW50Lk1vbWVudCwgb21pdFN1ZmZpeD86IGJvb2xlYW4pIHtcclxuXHRcdHJldHVybiB0aGlzLmdldFRpbWUodmFsdWUpICE9PSB0aGlzLmxhc3RUaW1lXHJcblx0XHRcdHx8IHRoaXMuZ2V0TG9jYWxlKHZhbHVlKSAhPT0gdGhpcy5sYXN0TG9jYWxlXHJcblx0XHRcdHx8IG9taXRTdWZmaXggIT09IHRoaXMubGFzdE9taXRTdWZmaXg7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldFRpbWUodmFsdWU6IERhdGUgfCBtb21lbnQuTW9tZW50KSB7XHJcblx0XHRpZiAobW9tZW50LmlzRGF0ZSh2YWx1ZSkpIHtcclxuXHRcdFx0cmV0dXJuIHZhbHVlLmdldFRpbWUoKTtcclxuXHRcdH0gZWxzZSBpZiAobW9tZW50LmlzTW9tZW50KHZhbHVlKSkge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWUudmFsdWVPZigpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG1vbWVudENvbnN0cnVjdG9yKHZhbHVlKS52YWx1ZU9mKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldExvY2FsZSh2YWx1ZTogRGF0ZSB8IG1vbWVudC5Nb21lbnQpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIG1vbWVudC5pc01vbWVudCh2YWx1ZSkgPyB2YWx1ZS5sb2NhbGUoKSA6IG51bGw7XHJcblx0fVxyXG59Il19