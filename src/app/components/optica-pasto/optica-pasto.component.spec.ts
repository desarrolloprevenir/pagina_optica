import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticaPastoComponent } from './optica-pasto.component';

describe('OpticaPastoComponent', () => {
  let component: OpticaPastoComponent;
  let fixture: ComponentFixture<OpticaPastoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpticaPastoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpticaPastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
