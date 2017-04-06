/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmailFieldService } from './email-field.service';

describe('EmailFieldService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailFieldService]
    });
  });

  it('should ...', inject([EmailFieldService], (service: EmailFieldService) => {
    expect(service).toBeTruthy();
  }));
});
