import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchthorwComponent } from './catchthorw.component';

describe('CatchthorwComponent', () => {
  let component: CatchthorwComponent;
  let fixture: ComponentFixture<CatchthorwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatchthorwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchthorwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
