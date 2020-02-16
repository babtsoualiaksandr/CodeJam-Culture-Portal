import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model.ts';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  public transform(items: SearchItem[], order: string): SearchItem[] {
    console.log(order);

    switch (order) {
      case 'viewCount': {
        return items.sort((prev, next) => {
          if (+prev.statistics.viewCount > +next.statistics.viewCount) {
            return 1;
          }
          if (+prev.statistics.viewCount < +next.statistics.viewCount) {
            return -1;
          }
        });
      }

      case 'date': {
        return items.sort((prev, next) => {
          const prevDate: Date = new Date(prev.snippet.publishedAt);
          const nextDate: Date = new Date(next.snippet.publishedAt);
          if (prevDate > nextDate) {
            return 1;
          }
          if (prevDate < nextDate) {
            return -1;
          }
        });
      }
      default: {
        return items.sort((prev, next) => {
          if (prev.id > next.id) {
            return 1;
          }
          if (prev.id < next.id) {
            return -1;
          }
        });
      }
    }
  }
}
