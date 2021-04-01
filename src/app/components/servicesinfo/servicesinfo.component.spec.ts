import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesinfoComponent } from './servicesinfo.component';

describe('ServicesinfoComponent', () => {
  let component: ServicesinfoComponent;
  let fixture: ComponentFixture<ServicesinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
