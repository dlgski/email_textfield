import {Component} from '@angular/core';
import {EmailFieldService} from '../email-field.service';

@Component({
  selector: 'email-field',
  templateUrl: './email-field.component.html',
  styleUrls: ['./email-field.component.css'],
  providers: [EmailFieldService],
})
export class EmailFieldComponent {
  inEditMode: boolean = false;
  emails = [];
  _subscription;

  constructor(private emailFieldService: EmailFieldService) {
    this._subscription = this.emailFieldService.new_email.subscribe((emailObj) => {
      this.emails.push(emailObj);
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  click_wrapper(event, inputEl) {
    this.inEditMode = true;
    inputEl.focus();
  }

  keydown_input(event) {
    var email_input = event.target;

    if (email_input.value != "" && (event.keyCode === 13 || event.keyCode === 9)) {
      event.preventDefault();
      this.emailFieldService.check_email_input(email_input.value);
      email_input.value = "";
    }

    if (email_input.value == "" && (event.keyCode === 8 || event.keyCode === 127)) {
      email_input.parent().prev().remove();
    }
  }
}
