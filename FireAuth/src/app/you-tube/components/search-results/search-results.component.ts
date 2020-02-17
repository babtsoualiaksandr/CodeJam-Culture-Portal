import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../../models/search-response.model.ts';
import { StateService } from '../../services/state.service';
import { YouTubeService } from '../../services/you-tube.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';
import { SearchItem } from '../../models/search-item.model.ts';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public response: SearchResponse;
  public videos: SearchItem[] = [];
  constructor(
    public stateService: StateService,
    public youTubeService: YouTubeService,
    private spinner: NgxSpinnerService,
  ) {}

  public ngOnInit(): void {
    this.response = this.stateService.getResponseAll();
    /** spinner starts on init */
    this.spinner.show();

    this.youTubeService.getVideosForChanel('UC578nebW2Mn-mNgjEArGZug', 50).subscribe(
      (value:  SearchResponse) => {
        console.log(value.items);
        this.videos = value.items;
      }
    );

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    },         5000);
  }
}
