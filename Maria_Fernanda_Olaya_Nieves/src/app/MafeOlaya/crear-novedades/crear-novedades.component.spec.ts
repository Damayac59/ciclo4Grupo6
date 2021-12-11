import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearNovedadesComponent } from './crear-novedades.component';

describe('CrearNovedadesComponent', () => {
  let component: CrearNovedadesComponent;
  let fixture: ComponentFixture<CrearNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearNovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
