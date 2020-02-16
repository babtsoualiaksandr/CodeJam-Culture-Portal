import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model.ts';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() public item: SearchItem;
  public publicationDate: string;
  constructor() {}

  public ngOnInit(): void {
    this.publicationDate = this.item.snippet.publishedAt;
  }
}
