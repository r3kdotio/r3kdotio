import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffenieComponent } from './caffenie.component';

describe('CaffenieComponent', () => {
  let component: CaffenieComponent;
  let fixture: ComponentFixture<CaffenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaffenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaffenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
