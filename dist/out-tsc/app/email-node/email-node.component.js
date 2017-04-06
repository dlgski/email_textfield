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
export var EmailNodeComponent = (function () {
    function EmailNodeComponent() {
    }
    EmailNodeComponent.prototype.ngOnInit = function () {
    };
    EmailNodeComponent.prototype.remove_element = function () {
    };
    EmailNodeComponent.prototype.edit_element = function () {
    };
    EmailNodeComponent = __decorate([
        Component({
            selector: 'email-node',
            inputs: ['pillclass', 'emailstr'],
            templateUrl: './email-node.component.html',
            styleUrls: ['./email-node.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], EmailNodeComponent);
    return EmailNodeComponent;
}());
//# sourceMappingURL=/Users/dana.greenberg/git/email_name_textfield_component/src/app/email-node/email-node.component.js.map