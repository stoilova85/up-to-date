import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { MainContainerModule } from './main-container/main-container.module';



@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
  ],
  imports: [
    BrowserModule,
    MainContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
