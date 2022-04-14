import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// routing check #7, import app routing module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent],
  /* routing check #8, add app routing module to imports array */
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
