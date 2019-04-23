import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from "@angular/material/grid-list";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpiritComponent } from './spirit/spirit.component';
import { ListComponent } from './list/list.component';
import { SanitizeHtmlPipe } from "./sanitize-html.pipe";
import { MatDialogModule } from "@angular/material/";

@NgModule({
   declarations: [
      AppComponent,
      SpiritComponent,
      ListComponent,
      SanitizeHtmlPipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatGridListModule,
      MatDialogModule
   ],
   providers: [],
   entryComponents: [
     SpiritComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }