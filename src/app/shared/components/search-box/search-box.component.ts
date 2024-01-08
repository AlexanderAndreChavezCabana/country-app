import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})

export class SearchBoxComponent implements OnInit, OnDestroy {

  @ViewChild('TxtInputSearch')
  public txtInputSearch!: ElementRef;

  @Output()
  public emitInput: EventEmitter<string> = new EventEmitter();

  @Input()
  public placeholder: string = '';


  @Input()
  public debouncer: Subject<string> = new Subject<string>; // tubo de agua

  @Output()
  public onDebouncer: EventEmitter<string> = new EventEmitter<string>;

  private debouncerSuscription?: Subscription;

  @Input()
  public initialValue?: string;

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(
        debounceTime(200)
      ).subscribe( value => {
        // console.log(`Realizando búsqueda con: ${countries}`)
        this.onDebouncer.emit( value );
      });
  }

  ngOnDestroy(): void {
      this.debouncerSuscription?.unsubscribe();
  }

  onKeyPress( searchTerm: string ): void {
    this.debouncer.next( searchTerm );
    console.log( searchTerm );
  }


  searchCountry ( term: string ): void {
    console.log("Desde el hijo");
    console.log(term);
    this.emitInput.emit( term );
    // this.txtInputSearch.nativeElement.value = '';
  }
}
