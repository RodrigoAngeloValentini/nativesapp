"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var MessagesAreaComponent = (function () {
    function MessagesAreaComponent(platform) {
        this.platform = platform;
    }
    MessagesAreaComponent.prototype.ngOnInit = function () {
        this.messages = this.messages.slice(0, 50);
    };
    MessagesAreaComponent.prototype.isContinuation = function (idx) {
        return (!this.messages[idx].sender && this.messages[idx - 1] &&
            !this.messages[idx - 1].sender) ||
            (this.messages[idx].sender && this.messages[idx - 1] &&
                this.messages[idx - 1].sender);
    };
    MessagesAreaComponent.prototype.getIcon = function (message) {
        switch (message.sent) {
            case core_2.SentStatus.NOT_SENT:
                return 'mdi-access-time';
            case core_2.SentStatus.SENT:
                return 'mdi-done';
            default:
                return 'mdi-done-all';
        }
    };
    MessagesAreaComponent.prototype.isViewed = function (message) {
        return message.sent === core_2.SentStatus.VIEWED;
    };
    return MessagesAreaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MessagesAreaComponent.prototype, "messages", void 0);
MessagesAreaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-messages-area',
        templateUrl: './messages-area.component.html',
        styleUrls: ['./messages-area.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
    }),
    __param(0, core_1.Inject('platform')),
    __metadata("design:paramtypes", [Object])
], MessagesAreaComponent);
exports.MessagesAreaComponent = MessagesAreaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUNzRDtBQUN0RCxtQ0FBaUQ7QUFTakQsSUFBYSxxQkFBcUI7SUFHaEMsK0JBQXVDLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO0lBQUcsQ0FBQztJQUVuRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDhDQUFjLEdBQWQsVUFBZSxHQUFXO1FBQ3hCLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsdUNBQU8sR0FBUCxVQUFRLE9BQWdCO1FBQ3RCLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssaUJBQVUsQ0FBQyxRQUFRO2dCQUN0QixNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDM0IsS0FBSyxpQkFBVSxDQUFDLElBQUk7Z0JBQ2xCLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDcEI7Z0JBQ0UsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELHdDQUFRLEdBQVIsVUFBUyxPQUFnQjtRQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxpQkFBVSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxDQUFDO0lBQ0gsNEJBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBN0JVO0lBQVIsWUFBSyxFQUFFOzt1REFBcUI7QUFEbEIscUJBQXFCO0lBUGpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1FBQzVDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7SUFJYSxXQUFBLGFBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTs7R0FIcEIscUJBQXFCLENBOEJqQztBQTlCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LFxuICAgICAgICAgSW5qZWN0LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlLCBTZW50U3RhdHVzIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ25zLW1lc3NhZ2VzLWFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVzc2FnZXMtYXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21lc3NhZ2VzLWFyZWEuY29tcG9uZW50LmNzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZXNBcmVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdwbGF0Zm9ybScpIHB1YmxpYyBwbGF0Zm9ybSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlcy5zbGljZSgwLCA1MCk7XG4gIH1cblxuICBpc0NvbnRpbnVhdGlvbihpZHg6IG51bWJlcikge1xuICAgIHJldHVybiAoIXRoaXMubWVzc2FnZXNbaWR4XS5zZW5kZXIgJiYgdGhpcy5tZXNzYWdlc1tpZHggLSAxXSAmJlxuICAgICAgICAgICAgIXRoaXMubWVzc2FnZXNbaWR4IC0gMV0uc2VuZGVyKSB8fFxuICAgICAgICAgICAodGhpcy5tZXNzYWdlc1tpZHhdLnNlbmRlciAmJiB0aGlzLm1lc3NhZ2VzW2lkeCAtIDFdICYmXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2lkeCAtIDFdLnNlbmRlcik7XG4gIH1cblxuICBnZXRJY29uKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2Uuc2VudCkge1xuICAgICAgY2FzZSBTZW50U3RhdHVzLk5PVF9TRU5UOlxuICAgICAgICByZXR1cm4gJ21kaS1hY2Nlc3MtdGltZSc7XG4gICAgICBjYXNlIFNlbnRTdGF0dXMuU0VOVDpcbiAgICAgICAgcmV0dXJuICdtZGktZG9uZSc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ21kaS1kb25lLWFsbCc7XG4gICAgfVxuICB9XG5cbiAgaXNWaWV3ZWQobWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHJldHVybiBtZXNzYWdlLnNlbnQgPT09IFNlbnRTdGF0dXMuVklFV0VEO1xuICB9XG59XG4iXX0=