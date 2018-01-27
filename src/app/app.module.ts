import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

/*
b1. Dinh nghia vung nho dung reducer function
b2. Tao ra vung nho tu reducer function
b3. Lay du lieu tu store
b4. Thay doi du lieu cua store
*/
