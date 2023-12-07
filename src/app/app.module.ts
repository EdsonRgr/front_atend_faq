import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AtendimentoComponent } from './pages/atendimento/atendimento.component';
import { ChamadosComponent } from './pages/chamados/chamados.component';

import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';
import { NovoAtendimentoComponent } from './pages/atendimento/novo-atendimento/novo-atendimento.component';
import { NovaDuvidaComponent } from './pages/faq/nova-duvida/nova-duvida.component';
import { DetalhesAtendimentoComponent } from './pages/atendimento/detalhes-atendimento/detalhes-atendimento.component';

import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    AtendimentoComponent,
    ChamadosComponent,
    NovoAtendimentoComponent,
    NovaDuvidaComponent,
    DetalhesAtendimentoComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
