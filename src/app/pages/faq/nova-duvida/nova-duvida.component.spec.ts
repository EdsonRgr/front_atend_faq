import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaDuvidaComponent } from './nova-duvida.component';

describe('NovaDuvidaComponent', () => {
  let component: NovaDuvidaComponent;
  let fixture: ComponentFixture<NovaDuvidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovaDuvidaComponent]
    });
    fixture = TestBed.createComponent(NovaDuvidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
