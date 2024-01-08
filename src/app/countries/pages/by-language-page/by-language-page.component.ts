import { Component } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-language-page',
  templateUrl: './by-language-page.component.html',
  styleUrl: './by-language-page.component.css'
})
export class ByLanguagePageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor ( private countryService: CountryService ) { }


  public initialValue?: string;

  ngOnInit(): void {
      this.countries = this.countryService.CacheStore.byLanguage.countries;
      this.initialValue = this.countryService.CacheStore.byLanguage.term;
  }

  searchByLanguage ( term: string ): void {
    this.isLoading = true;
    this.countryService.searchByLanguage( term )
      .subscribe( (countries) => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
