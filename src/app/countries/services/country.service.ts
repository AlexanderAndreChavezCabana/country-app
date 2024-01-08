import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { CacheStore } from '../models/cache-store.interface';
import { Region } from '../models/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = "https://restcountries.com/v3.1"

  constructor( private httpClient: HttpClient ) {
    this.loadFromLocalStorage();
  }

  public CacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
    byLanguage: { term: '', countries: [] }
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify( this.CacheStore ));
  }

  private loadFromLocalStorage() {
    if ( !localStorage.getItem('cacheStore')) return ;
    this.CacheStore = JSON.parse( localStorage.getItem ('cacheStore')! );
  }

  // searchByCapital ( term: string ): Observable<Country[]>{ // Observable para errores, que si no se encuentra mandar un error que no hay paises para mostrar
  //   // console.log("Desde Service");
  //   return this.httpClient.get<Country[]>(`${ this.apiUrl }/capital/${ term }`)
  //       .pipe( // Pipe sirve para especificar muchas cosas, y en este caso el pip ex RxJS, extensiones reactivas
  //         catchError( error => of([])) // Si, hay un error yo lo recibo alli, y luego Un nuevo observable, of sirve para construir un nuevo observable con arreglo vacio
  //       );
  // }

  // searchByCountry ( term: string ): Observable<Country[]> {
  //   return this.httpClient.get<Country[]>(`${ this.apiUrl }/name/${ term }`)
  //     .pipe(
  //       catchError( error => of([]))
  //     )
  // }


  // searchByRegion ( term: string ): Observable<Country[]> {
  //   return this.httpClient.get<Country[]>(`${ this.apiUrl }/region/${ term }`)
  //     .pipe(
  //       catchError( error => of([]))
  //     );
  // }

  // searchByLanguage ( term: string ): Observable<Country[]> {
  //   return this.httpClient.get<Country[]>(`${ this.apiUrl }/lang/${ term }`)
  //     .pipe(
  //       catchError( error => of([]))
  //     );
  // }

  // SECOND FORM WITH REFACTARIZACIÓN

  private getCountryRequest ( url: string ): Observable<Country[]> {
    return this.httpClient.get<Country[]>( url )
            .pipe(
              catchError( () => of([])),
              // delay(2000)
            );
  }

  searchByCapital ( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.getCountryRequest( url )
      .pipe(
        tap( (countries) => this.CacheStore.byCapital = { term: term, countries: countries}),
        tap( () => this.saveToLocalStorage() )
      );
  }

  searchByCountry ( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.getCountryRequest( url )
      .pipe(
        tap( (countries) => this.CacheStore.byCountries = { term: term, countries: countries }),
        tap( () => this.saveToLocalStorage() )
      );
  }

  // searchByRegion ( term: string ): Observable<Country[]> {
  //   const url = `${ this.apiUrl }/region/${ term }`;
  //   return this.getCountryRequest( url );
  // }

  searchByRegion ( region: Region ): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.getCountryRequest( url )
      .pipe(
        tap( (countries) => this.CacheStore.byRegion = { region: region, countries: countries }),
        tap( () => this.saveToLocalStorage() )
      );
  }

  searchByLanguage ( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/lang/${ term }`;
    return this.getCountryRequest( url )
      .pipe(
        tap( (countries) => this.CacheStore.byLanguage = { term: term, countries: countries }),
        tap( () => this.saveToLocalStorage() )
      );
  }

  searchByCode ( code: string ): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${ this.apiUrl }/alpha/${ code }`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null),
        catchError( error => of(null))
      );
  }

}
