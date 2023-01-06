import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { MipipePipe } from './mipipe.pipe';
import { PipeEJ1Component } from './pipe-ej1/pipe-ej1.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    ContactoComponent,
    ContactReactiveComponent,
    MipipePipe,
    PipeEJ1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
