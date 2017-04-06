var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EmailFieldService } from '../email-field.service';
export var EmailFieldComponent = (function () {
    function EmailFieldComponent(emailFieldService) {
        var _this = this;
        this.emailFieldService = emailFieldService;
        this.inEditMode = false;
        this.emails = [];
        this._subscription = this.emailFieldService.new_email.subscribe(function (emailObj) {
            _this.emails.push(emailObj);
        });
    }
    EmailFieldComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    EmailFieldComponent.prototype.click_wrapper = function (event, inputEl) {
        this.inEditMode = true;
        inputEl.focus();
    };
    EmailFieldComponent.prototype.keydown_input = function (event) {
        var email_input = event.target;
        if (email_input.value != "" && (event.keyCode === 13 || event.keyCode === 9)) {
            event.preventDefault();
            this.emailFieldService.check_email_input(email_input.value);
            email_input.value = "";
        }
        if (email_input.value == "" && (event.keyCode === 8 || event.keyCode === 127)) {
            email_input.parent().prev().remove();
        }
    };
    EmailFieldComponent = __decorate([
        Component({
            selector: 'email-field',
            templateUrl: './email-field.component.html',
            styleUrls: ['./email-field.component.css'],
            providers: [EmailFieldService],
        }), 
        __metadata('design:paramtypes', [EmailFieldService])
    ], EmailFieldComponent);
    return EmailFieldComponent;
}());
//# sourceMappingURL=/Users/dana.greenberg/git/email_name_textfield_component/src/app/email-field/email-field.component.js.map