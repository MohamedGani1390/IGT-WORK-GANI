import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ActivityComponent } from './activity/activity.component';
import { MaterialHelperModule } from './material-helper/material-helper.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ActivityComponent

  ],
  imports: [
    BrowserModule,
    MaterialHelperModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  exports:[
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
