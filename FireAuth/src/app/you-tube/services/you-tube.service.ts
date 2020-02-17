import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as youtubeSearch from 'youtube-search';
import { youTubeResponse } from '../models/mock-response';
import { SearchItem } from '../models/search-item.model.ts';

@Injectable({
  providedIn: 'root',
})
export class YouTubeService {
  private apiKey: string = 'AIzaSyC4UNprXHpsj0b0l3YjsLY66aDVJ-FtbNM';
  private opts: youtubeSearch.YouTubeSearchOptions = {
    maxResults: 50,
    part: 'snippet',
    key: 'AIzaSyC4UNprXHpsj0b0l3YjsLY66aDVJ-FtbNM'
  };

  constructor(public http: HttpClient) {}

  public getVideosForChanel(channel: string, maxResults: number): Observable<Object> {
    this.getVideos();
    let url: string =
      'https://www.googleapis.com/youtube/v3/search?key=' +
      this.apiKey +
      '&channelId=' +
      channel +
      '&order=date&part=snippet&type=video,id&maxResults=' +
      maxResults;
    return this.http.get(url).pipe(
      map(res => {
        return res;
      }),
    );

  }

  /**
   * getVideos
   */
  public getVideos(): void {
    youtubeSearch('Angular', this.opts, (err, results) => {
      if (err) { return console.log(err); }
      console.dir(results);
    });
  }

  public getVideoById(id: string): SearchItem {
    return youTubeResponse.items.find((item: SearchItem) => (item.id === id));
  }

}
