import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model.ts';
import { Route, ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { YouTubeService } from '../../services/you-tube.service';

@Component({
  selector: 'app-detalies-item',
  templateUrl: './detalies-item.component.html',
  styleUrls: ['./detalies-item.component.scss'],
})
export class DetaliesItemComponent implements OnInit {
  public item$: Observable<SearchItem>;
  @Input() public item: SearchItem = {
    kind: 'youtube#video',
    etag: '"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI"',
    id: 'YN8zNnV0sK8',
    snippet: {
      publishedAt: '2020-02-14T12:42:19.000Z',
      channelId: 'UCg8ss4xW9jASrqWGP30jXiw',
      title: 'Angular 8 - Быстрый курс за 60 минут',
      description:
        // tslint:disable-next-line: max-line-length
        'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/default.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/hqdefault.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/sddefault.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/YN8zNnV0sK8/maxresdefault.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Владилен Минин',
      tags: [
        'angular',
        'angular 8',
        'angularjs',
        'js',
        'javascript',
        'rxjs',
        'angular 60 минут',
        'angular 1 час',
        'angular 8 1 час',
        'владилен минин',
        'уроки javascript',
        'angular 2',
        'angular 4',
        'angular уроки',
        'курс angular',
        'основы angular',
        'angular фреймворк',
        'angular уроки для начинающих',
        'уроки angular',
        'angular практика',
        'ангуляр',
        'angular изучение',
        'angular курс',
        'ангуляр 4 уроки',
        'angular уроки на русском',
      ],
      categoryId: '27',
      liveBroadcastContent: 'none',
      localized: {
        title: 'Angular 8 - Быстрый курс за 60 минут',
        description:
          // tslint:disable-next-line: max-line-length
          'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: https://teleg.one/js_by_vladilen \nInstagram: https://www.instagram.com/vladilen.minin \nVK: https://vk.com/vladilen.minin \nГруппа VK: https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы релиз Angular 8 и я решил записать  по нему быстрый курс. В видео вы узнаете, как Angular работает, как его установить.\nВ результате урока я покажу создание Todo приложения с разными подходами. Разберем работу с сервером, сервисами, пайпами, коммуникацией между компонентами и немного RxJS\n\nИсходный код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular 8 - Быстрый курс за 60 минут',
      },
      defaultAudioLanguage: 'en-US',
    },
    statistics: {
      viewCount: '33265',
      likeCount: '1173',
      dislikeCount: '26',
      favoriteCount: '0',
      commentCount: '170',
    },
  };
  public publicationDate: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private youTubeService: YouTubeService) {}

  public ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get('id');
    console.log(id);
    console.log(this.youTubeService.getVideoById(id));
    this.item = this.youTubeService.getVideoById(id);
    this.publicationDate = this.item.snippet.publishedAt;

    /* this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(params.get('id'));
      })
    ); */
  }
}
