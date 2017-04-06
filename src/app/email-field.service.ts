import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class EmailFieldService {
  new_email: Subject<any> = new Subject<any>();
  EMAIL_PATTERN: RegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  constructor() {}

  check_email_input(email_input): void {
    var extra_chars, input, quote, first, comma, last, email, ip_match, idx;
    email_input = email_input.replace(/\(/g, " (").replace(/,([^\s])/g, ", $1");
    if (email_input === "") return;

    let splitit = email_input.split(/[\n;]/);

    splitit.forEach((inputemail) => {
      while(inputemail.length > 0) {
        let email_match = inputemail.match(this.EMAIL_PATTERN);
        if (email_match) {
          extra_chars = "";
          email = email_match[0];
          if (email.length > 80) {
            this.create_element(email, 'pill-invalid');
          } else {
            this.create_element(email, 'pill-email');
          }
          inputemail = inputemail.replace(email, "");
        } else {
          this.create_element(inputemail.replace(/[,;'"]/g, ""), "pill-invalid");
          inputemail = "";
        }
      }
    });
  }

  create_element(input, pillclass): void {
    input = input.trim();
    if (input.match(/[,;]$/)) {
      input = input.slice(0,-1);
    }

    if (input.length === 0) return;

    this.new_email.next({
      emailstr: input,
      pillclass: pillclass
    });
  }
}
