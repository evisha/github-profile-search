import {Component, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, map} from "rxjs";

@Component({
  selector: 'app-search-bar',
  template: `
    <div class="search-box">
      <input autocomplete="off" type="text"
             class="search-txt"
             placeholder="Enter github username"
             [formControl]="searchTerm"/>
    </div>
  `,
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  searchTerm = new FormControl();
  @Output() search = this.searchTerm.valueChanges.pipe(
    debounceTime(500),
    filter((value) => value === null || value.length > 1 || value === ''),
    distinctUntilChanged(),
    map((value) => {
      if (value === null) {
        return null;
      }
      return value.toLowerCase();
    })
  );

}
