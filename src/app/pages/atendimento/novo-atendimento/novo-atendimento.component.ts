import { LoginService } from 'src/app/services/login.service';
import { TokenService } from './../../../services/token.service';
import { SolicitaoService } from './../../../services/solicitao.service';
import { Solicitacao } from './../../../models/Solicitacao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-novo-atendimento',
  templateUrl: './novo-atendimento.component.html',
  styleUrls: ['./novo-atendimento.component.scss']
})
export class NovoAtendimentoComponent implements OnInit{

  formulario!: FormGroup;

  usuario!: User;
  token = '';
  nome = '';

  constructor(
    private solicitaoService: SolicitaoService,
    private snackBar: MatSnackBar,
    private router: Router,
    private tokenService: TokenService,
    private loginService: LoginService,
    private formBuilder: FormBuilder
    ){

  }

  ngOnInit() {
    this.usuario = this.tokenService.obterCadastro();
    console.log(this.usuario?.userName)
    this.nome = this.usuario?.nomeCompleto
    this.inicializarFormulario()
    
}

inicializarFormulario() {
  this.formulario = this.formBuilder.group({
    id: [0],
    categoria: ['', Validators.required],
    assunto: ['', Validators.required],
    descricao: ['', Validators.required],
    resposta: [null],
    responsavelAtendimento: [null],
    solicitanteAtendimento: [this.usuario?.nomeCompleto || ''],
    dataCriacao: [new Date()],
    dataResposta: [null],
    dataFinalizacao: [null],
    prioridade: [null],
    statusAndamentoOuFinalizado: [false],
    responsavelFinalizador: [null],
  });
}

  onSubmit() {
    if (this.formulario.valid) {
      console.log('Formulário válido, valores:', this.formulario.value);

      const userName = this.usuario?.userName;

      this.formulario.patchValue({
        solicitanteAtendimento: userName
      });

      this.createSolicitacao(this.formulario.value)
      this.snackBar.open('Solicitação criada com sucesso', 'Fechar', {
        duration: 3000, // Tempo que o Snackbar será exibido (em milissegundos)
      });
      this.router.navigate(['/'])

    } else {
      console.log('Formulário inválido');
    }
  }

  createSolicitacao(solicitacao: Solicitacao){
    this.solicitaoService.CreateSolicitacao(solicitacao).subscribe((data => {
      console.log(data)
    }))
  }

}
