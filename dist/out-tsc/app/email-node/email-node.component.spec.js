import { async, TestBed } from '@angular/core/testing';
import { EmailNodeComponent } from './email-node.component';
describe('EmailNodeComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EmailNodeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EmailNodeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/dana.greenberg/git/email_name_textfield_component/src/app/email-node/email-node.component.spec.js.map