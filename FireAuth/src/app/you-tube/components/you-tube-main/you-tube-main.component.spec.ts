import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeMainComponent } from './you-tube-main.component';

describe('YouTubeMainComponent', () => {
  let component: YouTubeMainComponent;
  let fixture: ComponentFixture<YouTubeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouTubeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouTubeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
