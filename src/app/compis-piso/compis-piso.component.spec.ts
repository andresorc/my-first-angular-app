import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompisPisoComponent } from './compis-piso.component';

describe('CompisPisoComponent', () => {
  let component: CompisPisoComponent;
  let fixture: ComponentFixture<CompisPisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompisPisoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompisPisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
