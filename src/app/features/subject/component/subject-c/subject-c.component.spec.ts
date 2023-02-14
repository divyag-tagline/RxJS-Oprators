import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCComponent } from './subject-c.component';

describe('SubjectCComponent', () => {
  let component: SubjectCComponent;
  let fixture: ComponentFixture<SubjectCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
