import { Component, OnInit } from '@angular/core';
import { PhotographerService } from '../../photographer.service';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Photographer } from 'src/app/shared/models/photographer';

@Component({
  selector: 'app-list-photographer',
  templateUrl: './list-photographer.component.html',
  styleUrls: ['./list-photographer.component.scss'],
})
export class ListPhotographerComponent implements OnInit {
  listPhotographers: FormGroup;
  list: Array<Photographer>;

  constructor(public photographerService: PhotographerService, private formBuilder: FormBuilder) {
    console.log(photographerService.getItem());
  }

  ngOnInit() {
    this.listPhotographers = new FormGroup({
      photographers: new FormArray([]),
    });

    this.listPhotographers = this.formBuilder.group({
      photographersName: this.formBuilder.array([]),
      photographersUrlPhoto: this.formBuilder.array([]),
    });

    this.photographerService.getItem().subscribe(value => {
      value.forEach(val => {
        (this.listPhotographers.controls.photographersName as FormArray).push(
          new FormControl(val.name),
        );
        (this.listPhotographers.controls.photographersUrlPhoto as FormArray).push(
          new FormControl(val.id),
        );
      });
      console.log('value', value);
    });

    this.listPhotographers.valueChanges.subscribe(value => {
      console.log('name ', value);
    });
  }

  removeItem(i) {}

  addItem(i) {}

  getControls() {
    return (this.listPhotographers.get('photographersName') as FormArray).controls;
  }
}
