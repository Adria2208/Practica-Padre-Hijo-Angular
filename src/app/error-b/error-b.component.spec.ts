import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorBComponent } from './error-b.component';

describe('ErrorBComponent', () => {
  let component: ErrorBComponent;
  let fixture: ComponentFixture<ErrorBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
