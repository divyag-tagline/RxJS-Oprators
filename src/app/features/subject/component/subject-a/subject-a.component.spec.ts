import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAComponent } from './subject-a.component';

describe('SubjectAComponent', () => {
  let component: SubjectAComponent;
  let fixture: ComponentFixture<SubjectAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
