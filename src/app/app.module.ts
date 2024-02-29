import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import this line
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { todoReducer } from './store/reducers';
import { TodoEffects } from './store/effects';
import { AppComponent } from './app.component';
import { AddCheckboxPipe } from './services/pipes/addcheckbox.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignatureComponent } from './signature/signature.component';
import { ColorPickerModule, ColorPickerComponent } from 'ngx-color-picker';
import { ColorPickerComponents } from './color-picker/color-picker.component';
import { AppModalComponent } from './app-modal/app-modal.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCheckboxPipe,
    HighlightDirective,
    SignatureComponent,
    ColorPickerComponents,
    AppModalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    SignaturePadModule,
    ColorPickerModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ todos: todoReducer }),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
