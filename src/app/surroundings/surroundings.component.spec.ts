import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurroundingsComponent } from './surroundings.component';

describe('SurroundingsComponent', () => {
  let component: SurroundingsComponent;
  let fixture: ComponentFixture<SurroundingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurroundingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurroundingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
