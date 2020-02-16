import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../../models/search-response.model.ts';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public response: SearchResponse;
  constructor(public stateService: StateService) {}

  public ngOnInit(): void {
    this.response = this.stateService.getResponseAll();
    }
}
