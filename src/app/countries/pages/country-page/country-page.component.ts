import { Country } from './../../models/country.model';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit {


  public country?: Country;

  constructor (
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ code }) => this.countryService.searchByCode ( code ))
      )
      .subscribe( country => {
        // console.log(country);
        console.log(country);
        if ( !country ) {
          return this.router.navigateByUrl('');
        }
        console.log("Se encontró un país");
        return this.country = country;
      });
  }

}
