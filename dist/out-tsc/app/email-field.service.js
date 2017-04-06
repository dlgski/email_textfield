var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
export var EmailFieldService = (function () {
    function EmailFieldService() {
        this.new_email = new Subject();
        this.EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    }
    EmailFieldService.prototype.check_email_input = function (email_input) {
        var _this = this;
        var extra_chars, input, quote, first, comma, last, email, ip_match, idx;
        email_input = email_input.replace(/\(/g, " (").replace(/,([^\s])/g, ", $1");
        if (email_input === "")
            return;
        var splitit = email_input.split(/[\n;]/);
        splitit.forEach(function (inputemail) {
            while (inputemail.length > 0) {
                var email_match = inputemail.match(_this.EMAIL_PATTERN);
                if (email_match) {
                    extra_chars = "";
                    email = email_match[0];
                    if (email.length > 80) {
                        _this.create_element(email, 'pill-invalid');
                    }
                    else {
                        _this.create_element(email, 'pill-email');
                    }
                    inputemail = inputemail.replace(email, "");
                }
                else {
                    _this.create_element(inputemail.replace(/[,;'"]/g, ""), "pill-invalid");
                    inputemail = "";
                }
            }
        });
    };
    EmailFieldService.prototype.create_element = function (input, pillclass) {
        input = input.trim();
        if (input.match(/[,;]$/)) {
            input = input.slice(0, -1);
        }
        if (input.length === 0)
            return;
        this.new_email.next({
            emailstr: input,
            pillclass: pillclass
        });
    };
    EmailFieldService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], EmailFieldService);
    return EmailFieldService;
}());
//# sourceMappingURL=/Users/dana.greenberg/git/email_name_textfield_component/src/app/email-field.service.js.map