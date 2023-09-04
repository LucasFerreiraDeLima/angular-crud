import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-adicionados',
  templateUrl: './usuarios-adicionados.component.html',
  styleUrls: ['./usuarios-adicionados.component.scss']
})
export class UsuariosAdicionadosComponent {

  usuarios:Usuario[] = [];

  usuario = new Usuario();

  btnCadastro:boolean = true;
  tabela:boolean = true;

  constructor(private service:UsuariosService) {}

  selecionar():void {
    this.service.selecionar()
    .subscribe(retorno => this.usuarios = retorno);
  }

  cadastrar():void {
    this.service.cadastrar(this.usuario)
    .subscribe(retorno =>
      {
        this.usuarios.push(retorno)
        this.usuario = new Usuario()
        alert('Usuário cadastrado com sucesso')
      })
  }

  selecionarUsuario(posicao:number):void {
    this.usuario = this.usuarios[posicao];

    this.btnCadastro = false;

    this.tabela = false;
  }

  editar():void {
    this.service.editar(this.usuario)
    .subscribe(retorno => {
      let posicao = this.usuarios.findIndex(obj => {
        return obj.id == retorno.id;
      });

      this.usuarios[posicao] = retorno;

      this.usuario = new Usuario();
      this.btnCadastro = true;
      this.tabela = true;
      alert('Usuário editado com sucesso!');
    })
  }

  remover():void {
    this.service.remover(this.usuario.id)
    .subscribe(retorno => {
      let posicao = this.usuarios.findIndex(obj => {
        return obj.id == this.usuario.id;
      });

      this.usuarios.splice(posicao, 1);

      this.usuario = new Usuario();
      this.btnCadastro = true;
      this.tabela = true;
      alert('Usuário removido com sucesso!');
    })
  }

  cancelar():void {
    this.usuario = new Usuario();
    this.btnCadastro = true;
    this.tabela = true;
  }

  ngOnInit(){
    this.selecionar();
  }
}
