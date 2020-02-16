import { SearchItem } from './search-item.model.ts';
import { PageInfo } from './page-info';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}
