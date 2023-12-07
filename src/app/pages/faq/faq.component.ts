import { User } from 'src/app/models/User';
import { TokenService } from 'src/app/services/token.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Duvida } from 'src/app/models/Duvida';
import { DuvidaService } from 'src/app/services/duvida.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  
  usuario!:User

  pesquisaControl = new FormControl();

  duvidas: Duvida[] = []
  duvidasGeral : Duvida[] = []

  constructor(
    private DuvidaService: DuvidaService,
    private tokenService: TokenService
    ){
      this.usuario = tokenService.obterCadastro();
  }


  
  ngOnInit(): void {
      this.DuvidaService.GetDuvida().subscribe(data =>{
        const dados = data.dados;

        // dados.map((item)=>{
        //   item.dataAlteracao = new Date(item.dataAlteracao!).toLocaleDateString('pt-BR');
        //   item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR');
          
        // })

        this.duvidas = data.dados
        this.duvidasGeral = data.dados

      });
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.duvidas = this.duvidasGeral.filter(duvidas => {
      return duvidas.categoria.toLowerCase().includes(value);
    })
  }

}
