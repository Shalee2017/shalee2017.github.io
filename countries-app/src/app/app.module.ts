import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CountryService } from './country.service';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AllCountriesComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }