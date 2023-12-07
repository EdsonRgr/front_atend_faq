import { Component } from '@angular/core';
import { Solicitacao } from './../../models/Solicitacao';
import { SolicitaoService } from './../../services/solicitao.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent {

  pesquisaControl = new FormControl();

  solicitacos: Solicitacao[] = []
  solicitacaoGeral : Solicitacao[] = []

  constructor(private SolicitacaoService: SolicitaoService){

  }

  ngOnInit(): void {
      this.SolicitacaoService.GetSolicitacao().subscribe(data =>{
        const dados = data.dados;

        dados.map((item)=>{
          item.dataCriacao = new Date(item.dataCriacao!);
          item.dataFinalizacao = new Date(item.dataFinalizacao!);
          item.dataResposta = new Date(item.dataResposta!);
        })

        this.solicitacos = data.dados
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
