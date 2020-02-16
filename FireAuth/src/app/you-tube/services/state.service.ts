import { Injectable, OnDestroy, OnChanges } from '@angular/core';
import { SearchResponse } from '../models/search-response.model.ts';
import { youTubeResponse } from '../models/mock-response';

@Injectable({
  providedIn: 'root',
})
export class StateService implements OnChanges {
  public searchResponse: SearchResponse;
  public bySort: string = '';
  public searchInTitles: string = '';

  constructor() {}

  public getResponseAll(): SearchResponse {
    return youTubeResponse;
  }

  public ngOnChanges(): void {
    console.log('i am c');
    localStorage.setItem(
      'state',
      JSON.stringify({
        'searchInTitles': this.searchInTitles,
        'bySort': this.bySort,
      }),
    );
  }
}
