import { SolicitaoService } from './../../../services/solicitao.service';
import { Solicitacao } from './../../../models/Solicitacao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-detalhes-atendimento',
  templateUrl: './detalhes-atendimento.component.html',
  styleUrls: ['./detalhes-atendimento.component.scss']
})
export class DetalhesAtendimentoComponent implements OnInit{

  formulario!: FormGroup;
  
  usuario!: User;
  
  solicitacao!: Solicitacao;
  
  nome = '';
  

  constructor(
    private solicitaoService: SolicitaoService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private tokenService: TokenService,
    private formBuilder: FormBuilder
    ){

  }

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.formulario = this.formBuilder.group({
      id: [0],
      categoria: [{value: '', disabled: true}],
      assunto: [{value: '', disabled: true}],
      descricao: [{value: '', disabled: true}],
      resposta: ['', Validators.required],
      responsavelAtendimento: [null],
      solicitanteAtendimento: [{value: '', disabled: true}],
      dataCriacao: [{value: '', disabled: true}],
      dataResposta: [new Date()],
      dataFinalizacao: [new Date()],
      prioridade: [null],
      statusAndamentoOuFinalizado: [{value: '', disabled: true}],
      responsavelFinalizador: [''],
    });

    this.solicitaoService.GetSolicitacaoById(id).subscribe((data=>{
      this.solicitacao = data.dados;
      this.formulario.patchValue(this.solicitacao);
      console.log(this.solicitacao)

    }))

    this.usuario = this.tokenService.obterCadastro();
    this.nome = this.usuario?.nomeCompleto;
    console.log(this.nome)

  }

  onSubmit() {
    if (this.formulario.valid) {
      
      const dataAtual = new Date();
      const dataAtualFormatada = dataAtual.toISOString();

      const userName = this.usuario?.userName;

      this.formulario.patchValue({
        assunto: this.solicitacao.assunto,
        categoria: this.solicitacao.categoria,
        descricao: this.solicitacao.descricao,
        userName: this.usuario?.userName,
        responsavelAtendimento: userName,
        responsavelFinalizador: userName,
        dataFinalizacao: dataAtualFormatada,
        dataResposta: dataAtualFormatada
      });

      // Desabilita todos os controles no formulário
      this.formulario.disable();

      console.log('Formulário válido, valores:', this.formulario.value);

      this.editarSolicitacaos(this.formulario.value, userName);
      
     //this.router.navigate(['/atendimento'])

    } else {
      console.log('Formulário inválido');
    }
  }



  editarSolicitacaos(solicitacao: Solicitacao, funcional: String) {
    console.log(solicitacao);
    this.solicitaoService.EditarSolicitacao(solicitacao, funcional).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/atendimento'])
        this.snackBar.open('Solicitação Finalizada com sucesso', 'Fechar', {
             duration: 3000, 
           });
      },
      (error) => {
        console.error(error);
        this.snackBar.open(error.errors ? JSON.stringify(error.errors) : 'Erro desconhecido', 'Fechar', { duration: 3000 });
      }
    );
  }

}
