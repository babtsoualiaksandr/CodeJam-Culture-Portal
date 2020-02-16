import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.scss'],
})
export class SortFormComponent implements OnInit {
  constructor(public stateService: StateService) {}

  public ngOnInit(): void {}

  public onSortBy(order: string): void {
    if (this.stateService.bySort !== order) {
      this.stateService.bySort = order;
    } else {
      this.stateService.bySort = null;
    }
  }
}
