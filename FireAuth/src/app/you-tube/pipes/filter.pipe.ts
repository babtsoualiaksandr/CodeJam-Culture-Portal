import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model.ts';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(items: SearchItem[], word: string= 'a'): SearchItem[] {
    return items.filter(value => {
      return value.snippet.title.toLowerCase().includes(word.toLowerCase());
    });
  }

}
