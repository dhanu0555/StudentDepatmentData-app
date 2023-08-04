import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEEComponent } from './eee.component';

describe('EEEComponent', () => {
  let component: EEEComponent;
  let fixture: ComponentFixture<EEEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EEEComponent]
    });
    fixture = TestBed.createComponent(EEEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
