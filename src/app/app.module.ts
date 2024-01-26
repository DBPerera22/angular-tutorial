import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeInsightComponent } from './code-insight/code-insight.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, CodeInsightComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
