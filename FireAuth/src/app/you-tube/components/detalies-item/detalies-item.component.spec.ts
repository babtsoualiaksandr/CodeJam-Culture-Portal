import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliesItemComponent } from './detalies-item.component';

describe('DetaliesItemComponent', () => {
  let component: DetaliesItemComponent;
  let fixture: ComponentFixture<DetaliesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaliesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
