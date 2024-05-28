// import { Component, Output, EventEmitter } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { FilterService } from '../../Services/filter.service';

// @Component({
//   selector: 'app-filter',
//   templateUrl: './filter.component.html',
//   styleUrls: ['./filter.component.scss']
// })
// export class FilterComponent {
//   form: FormGroup;

//   constructor(private filterService: FilterService) {
//     this.form = new FormGroup({
//       area: new FormControl(''),
//       field: new FormControl('')
//     });
//   }

//   @Output() filterChanged: EventEmitter<{ city: string, type: string }> = new EventEmitter<{ city: string, type: string }>();

//   filter() {
//     const cityValue = this.form.get('area').value;
//     const typeValue = this.form.get('field').value;
    
//     // Call your filter function with the selected values
//     this.filterChanged.emit({ city: cityValue, type: typeValue });
//   }
// }

import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterService } from '../../Services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  form: FormGroup;

  constructor(private filterService: FilterService) {
    this.form = new FormGroup({
      area: new FormControl(''),
      field: new FormControl('')
    });
  }

  @Output() filterChanged: EventEmitter< { area: string, field: string }> = new EventEmitter<{ area: string, field: string }>();

  filter() {
    const cityControl = this.form.get('area');
    const typeControl = this.form.get('field');

    if (cityControl && typeControl) {
      const cityValue = cityControl.value;
      const typeValue = typeControl.value;
      
      // Call your filter function with the selected values
      this.filterChanged.emit({ area: cityValue, field: typeValue });
    }
  }
}
