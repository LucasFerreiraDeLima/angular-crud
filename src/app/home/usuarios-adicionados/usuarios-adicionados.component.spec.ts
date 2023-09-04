import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAdicionadosComponent } from './usuarios-adicionados.component';

describe('UsuariosAdicionadosComponent', () => {
  let component: UsuariosAdicionadosComponent;
  let fixture: ComponentFixture<UsuariosAdicionadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosAdicionadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosAdicionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
