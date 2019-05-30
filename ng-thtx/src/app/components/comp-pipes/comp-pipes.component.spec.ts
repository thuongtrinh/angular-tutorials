import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPipesComponent } from './comp-pipes.component';

describe('CompPipesComponent', () => {
  let component: CompPipesComponent;
  let fixture: ComponentFixture<CompPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
