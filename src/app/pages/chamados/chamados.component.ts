import { TokenService } from 'src/app/services/token.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Solicitacao } from 'src/app/models/Solicitacao';
import { SolicitaoService } from 'src/app/services/solicitao.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent {

  usuario!: User;

  solicitacos: Solicitacao[] = []
  solicitacaoGeral : Solicitacao[] = []

  constructor(
    private SolicitacaoService: SolicitaoService,
    private tokenService: TokenService
    ){
      this.usuario = this.tokenService.obterCadastro()
  }

  ngOnInit(): void {
      this.SolicitacaoService.GetSolicitacao().subscribe(data =>{
        const dados = data.dados;

        // dados.map((item)=>{
        //   item.dataCriacao = new Date(item.dataCriacao!);
        //   item.dataFinalizacao = new Date(item.dataFinalizacao!);
        //   item.dataResposta = new Date(item.dataResposta!);
        // })

        this.solicitacos = dados.filter(solicitacao => solicitacao.solicitanteAtendimento === this.usuario.userName);
        this.solicitacaoGeral = data.dados

      });
  }


  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.solicitacos = this.solicitacaoGeral.filter(solicitacao => {
      return solicitacao.solicitanteAtendimento.toLowerCase().includes(value);
    })
  }

}
