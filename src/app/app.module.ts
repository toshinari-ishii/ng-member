import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ragDropModule} from '@angular/cdk/drag-drop';
import { DragAndDropComponent } from "./drag-and-drop/drag-and-drop.component";

@NgModule({
  declarations: [
    AppComponent,
    DragAndDropComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragAndDropComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
