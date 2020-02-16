import { Component, OnInit } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showSort: boolean = false;

  constructor(public stateService: StateService) { }

  public ngOnInit(): void {

  }

  public onShowSort(): void {
    this.showSort = !this.showSort;
  }

  public onSearchInTitles(word: string): void {
    this.stateService.searchInTitles  = word;
  }

}
