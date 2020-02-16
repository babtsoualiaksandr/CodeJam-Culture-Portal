import { Snippet } from './snippet';

import { Statistics } from './statistics';

export interface SearchItem  {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}
