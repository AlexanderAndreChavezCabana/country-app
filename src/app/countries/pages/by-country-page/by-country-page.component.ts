import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  constructor ( private countryService: CountryService ) {}

  public initialValue?: string;

  ngOnInit(): void {
      this.countries = this.countryService.CacheStore.byCountries.countries;
      this.initialValue = this.countryService.CacheStore.byCountries.term;
  }


  searchByCountry ( term: string ): void {
    this.isLoading = true;
    this.countryService.searchByCountry( term )
      .subscribe( (countries ) => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
