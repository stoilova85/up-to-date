import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    ContentComponent,
    FooterComponent
  ],
  declarations: []
})
export class MainContainerModule { }
