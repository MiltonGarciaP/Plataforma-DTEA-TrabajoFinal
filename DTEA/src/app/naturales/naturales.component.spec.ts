import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalesComponent } from './naturales.component';

describe('NaturalesComponent', () => {
  let component: NaturalesComponent;
  let fixture: ComponentFixture<NaturalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaturalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
