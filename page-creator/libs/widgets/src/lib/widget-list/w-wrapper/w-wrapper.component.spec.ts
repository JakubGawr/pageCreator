import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WWrapperComponent } from './w-wrapper.component';

describe('WWrapperComponent', () => {
  let component: WWrapperComponent;
  let fixture: ComponentFixture<WWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
