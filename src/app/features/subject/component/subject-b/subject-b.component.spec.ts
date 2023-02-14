import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBComponent } from './subject-b.component';

describe('SubjectBComponent', () => {
  let component: SubjectBComponent;
  let fixture: ComponentFixture<SubjectBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
