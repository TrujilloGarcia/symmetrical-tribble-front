import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { JuegoService } from '../Services/juego-service/juego.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes  } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { FormComponent as JuegosFormComponent } from './components/juegos/form/form.component';
import { FormsModule } from '@angular/forms';
import { CompanyService } from 'src/Services/company-service/company.service';
import { FormComponent as CompaniesFormComponent} from './Components/companies/form/form.component';

const ROUTES: Routes = [
  {path: '', redirectTo: '/juegos', pathMatch: 'full'},
  {path: 'juegos', component: JuegosComponent},
  {path: 'juegos/form', component: JuegosFormComponent},
  {path: 'juegos/form/:id', component: JuegosFormComponent},
  {path: 'companies', component: CompaniesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    JuegosComponent,
    CompaniesComponent,
    JuegosFormComponent,
    CompaniesFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [JuegoService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
