import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { EmailFieldComponent } from './email-field/email-field.component';
import { EmailNodeComponent } from './email-node/email-node.component';

@NgModule({
  declarations: [
    EmailFieldComponent,
    EmailNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [EmailFieldComponent]
})
export class AppModule { }
