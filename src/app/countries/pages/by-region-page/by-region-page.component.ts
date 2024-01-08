import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';
import { Region } from '../../models/region.type';



@Component({
  selector: 'app-countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ["Africa", "America", "Asia", "Europe", "Oceania"];
  public selectedRegion?: Region;

  public isLoading: boolean = false;
  constructor ( private countryService: CountryService ) { }

  ngOnInit(): void {
      this.countries = this.countryService.CacheStore.byRegion.countries;
      this.selectedRegion = this.countryService.CacheStore.byRegion.region;
  }

  // searchByRegion ( term: string ): void {
  //   this.countryService.searchByRegion( term )
  //     .subscribe( ( countries ) => {
  //       this.countries = countries;
  //     })
  // }

  // searchByRegion ( term: string ): void {
  //   this.isLoading = true;
  //   this.countryService.searchByRegion( term )
  //     .subscribe( (countries) => {
  //       this.countries = countries;
  //       console.log(this.selectedRegion);
  //       this.isLoading = false;
  //     });
  // }


  searchByRegion ( region: Region ): void {
    this.selectedRegion = region;
    this.isLoading = true;
    this.countryService.searchByRegion( region )
      .subscribe( (countries) => {
        this.countries = countries;
        console.log(this.selectedRegion);
        this.isLoading = false;
      });
  }
}
