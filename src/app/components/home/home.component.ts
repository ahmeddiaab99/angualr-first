import { Component, Input, OnInit ,Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
   }

   x: number[] = [1,2,3,4,5];
   private _value: number = 0;
  
   @Input()
   set value(value: number) {
     if (this._value == value) return;
 
     console.log(value);
     this.valueChange.emit(value)
     this._value = value;
   }
   get value(): number { return this._value; }
   @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
 
   @ContentChild('full') fullTmpl: TemplateRef<any> | undefined; 
   @ContentChild('empty') emptyTmpl: TemplateRef<any> | undefined; 

  ngOnInit(): void {
    
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  changeColor(){

  }

}
