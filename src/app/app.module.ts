import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCommerceModule } from './my-commerce/my-commerce.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyCommerceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
