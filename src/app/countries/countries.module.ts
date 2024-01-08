import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { ByLanguagePageComponent } from './pages/by-language-page/by-language-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';


@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByRegionPageComponent,
    ByCountryPageComponent,
    CountryTableComponent,
    ByLanguagePageComponent,
    CountryPageComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ],
  exports: [
    ByCapitalPageComponent,
    ByRegionPageComponent,
    ByCountryPageComponent,
    CountryPageComponent
  ]
})
export class CountriesModule { }
