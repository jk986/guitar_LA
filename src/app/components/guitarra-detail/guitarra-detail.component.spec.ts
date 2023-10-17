import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarraDetailComponent } from './guitarra-detail.component';

describe('GuitarraDetailComponent', () => {
  let component: GuitarraDetailComponent;
  let fixture: ComponentFixture<GuitarraDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarraDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarraDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
