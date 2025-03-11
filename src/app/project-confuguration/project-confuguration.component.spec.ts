import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectConfugurationComponent } from './project-confuguration.component';

describe('ProjectConfugurationComponent', () => {
  let component: ProjectConfugurationComponent;
  let fixture: ComponentFixture<ProjectConfugurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectConfugurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectConfugurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
