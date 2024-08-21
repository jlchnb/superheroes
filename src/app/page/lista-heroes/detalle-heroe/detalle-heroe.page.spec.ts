import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleHeroePage } from './detalle-heroe.page';

describe('DetalleHeroePage', () => {
  let component: DetalleHeroePage;
  let fixture: ComponentFixture<DetalleHeroePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleHeroePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
