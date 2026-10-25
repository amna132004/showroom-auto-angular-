// import { Component, EventEmitter, Input, Output, OnInit  } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { Auto } from '../../interfaces/auto';
// @Component({
//   imports: [FontAwesomeModule],
//   selector: 'app-search-bar',
//   styleUrl: './search-bar.css',
//   templateUrl: './search-bar.html',
// })
// export class SearchBar {
//   faMagnifyingGlass = faMagnifyingGlass;

//   @Input() autos:Auto[]=[]

//   @Output() onSelectCar=new EventEmitter<Auto>()
//   ngOnInit() {
//     this.selectedAutos = this.autos
//   }
  
//   selectedAutos:Auto[]=[]

//   selectAutos(selectedBrand:string){
//     if(selectedBrand){
//       this.selectedAutos=this.autos.filter(x=>x.brand.toLowerCase().startsWith(selectedBrand.toLowerCase()))
//     }
//     else{
//       this.selectedAutos=this.autos
//     }

//   }

//   selectCar(auto:Auto){
//     this.onSelectCar.emit(auto)
//   }

//   filterByPrice(maxPrice: string) {
//   const max = Number(maxPrice);
//   if (max > 0) {
//     this.selectedAutos = this.autos.filter(x => x.price <= max);
//   } else {
//     this.selectedAutos = this.autos;
//   }
// }
// }

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';

@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() autos: Auto[] = [];                       // parent → child
  @Output() onSelectCar = new EventEmitter<Auto>();  // child → parent

  selectedAutos: Auto[] = [];

  // the 3 values we remember, so they add up
  searchText = '';
  maxPrice = 0;
  sortOrder = 'none';

  ngOnInit() {
    this.applyFilters();   // show all cars at the start
  }

  onSearch(text: string) {
    this.searchText = text;
    this.applyFilters();
  }

  onPrice(value: string) {
    this.maxPrice = Number(value);
    this.applyFilters();
  }

  onSort(value: string) {
    this.sortOrder = value;
    this.applyFilters();
  }

  reset() {
    this.searchText = '';
    this.maxPrice = 0;
    this.sortOrder = 'none';
    this.applyFilters();
  }

  // ONE method that uses all the values together
  applyFilters() {
    let result = this.autos.filter(x => {
      const name = (x.brand + ' ' + x.model).toLowerCase();
      const okText = name.includes(this.searchText.toLowerCase());
      const okPrice = this.maxPrice === 0 || x.price <= this.maxPrice;
      return okText && okPrice;     // both conditions must be true
    });

    if (this.sortOrder === 'asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'desc') {
      result.sort((a, b) => b.price - a.price);
    }

    this.selectedAutos = result;
  }

  selectCar(auto: Auto) {
    this.onSelectCar.emit(auto);
  }
}