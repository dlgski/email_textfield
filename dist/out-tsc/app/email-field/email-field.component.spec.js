import { async, TestBed } from '@angular/core/testing';
import { EmailFieldComponent } from './email-field.component';
describe('EmailFieldComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EmailFieldComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EmailFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/dana.greenberg/git/email_name_textfield_component/src/app/email-field/email-field.component.spec.js.map