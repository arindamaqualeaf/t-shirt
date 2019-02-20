import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLatesBlogComponent } from './our-lates-blog.component';

describe('OurLatesBlogComponent', () => {
  let component: OurLatesBlogComponent;
  let fixture: ComponentFixture<OurLatesBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurLatesBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurLatesBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
