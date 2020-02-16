import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-photographer',
  templateUrl: './add-photographer.component.html',
  styleUrls: ['./add-photographer.component.scss'],
})
export class AddPhotographerComponent implements OnInit {
  photographerForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.photographerForm = new FormGroup({
      name: new FormControl('name', [myValidator(3)]),
      urlPhoto: new FormControl('url')
    });

    this.photographerForm.valueChanges.subscribe(value => console.log(value));
    this.photographerForm.statusChanges.subscribe(value => console.log(value));

    function myValidator(numb) {
      return (formControl: FormControl) => {
        if (formControl.value.length === numb ) {
          return { myValidator: {message: 'errors'} };
        }
        return null;
      };
    }


}
}
