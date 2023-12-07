import { Solicitacao } from './../../models/Solicitacao';
import { SolicitaoService } from './../../services/solicitao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


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

}
