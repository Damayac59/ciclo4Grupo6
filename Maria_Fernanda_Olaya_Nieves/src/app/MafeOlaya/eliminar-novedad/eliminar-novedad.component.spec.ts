import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarNovedadComponent } from './eliminar-novedad.component';

describe('EliminarNovedadComponent', () => {
  let component: EliminarNovedadComponent;
  let fixture: ComponentFixture<EliminarNovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarNovedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
