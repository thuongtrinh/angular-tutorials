import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRelationComponent } from './comp-relation.component';

describe('CompRelationComponent', () => {
  let component: CompRelationComponent;
  let fixture: ComponentFixture<CompRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
