import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  constructor ( private countryService: CountryService ) { }

  public isLoading: boolean = false;

  public initialValue?: string;

  ngOnInit(): void {
      this.countries = this.countryService.CacheStore.byCapital.countries;
      this.initialValue = this.countryService.CacheStore.byCapital.term;
  }

  searchByCapital ( term: string ): void {
    // console.log("Desde el padre");
    // console.log( term );
    this.isLoading = true;
    this.countryService.searchByCapital( term )
      .subscribe( (countries) => {
        this.countries = countries;
        this.isLoading = false;
      }) ;
  }
}
