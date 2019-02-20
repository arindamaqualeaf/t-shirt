import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomandedForYouComponent } from './recomanded-for-you.component';

describe('RecomandedForYouComponent', () => {
  let component: RecomandedForYouComponent;
  let fixture: ComponentFixture<RecomandedForYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomandedForYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomandedForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
