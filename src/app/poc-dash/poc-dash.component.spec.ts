import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocDashComponent } from './poc-dash.component';

describe('PocDashComponent', () => {
  let component: PocDashComponent;
  let fixture: ComponentFixture<PocDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
