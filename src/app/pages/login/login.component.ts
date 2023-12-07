import { TokenService } from 'src/app/services/token.service';

  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
  import { MatSnackBar } from '@angular/material/snack-bar';
  import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  

    formulario!: FormGroup;
  
    constructor( 
      private router: Router,
      private loginService: LoginService,
      private snackBar: MatSnackBar,
      private tokenService:TokenService
      ){

        this.tokenService.limparLocalStorage();
      }
  
    ngOnInit(){
      this.formulario = new FormGroup({
        funcional: new FormControl('', Validators.required),
        senha: new FormControl('', Validators.required)
      })
    }
  
    onSubmit() {
      const email = this.formulario.value.funcional;
      const senha = this.formulario.value.senha;

      if (this.formulario.valid) {
        
        this.loginService.autenticar(email, senha).subscribe({
          next:(value)=>{
            
            this.router.navigate(['/'])
      
          },
          error: (err) => {
            
            console.log("Erro no login " + err)

            this.snackBar.open('Falha na autenticação. Verifique suas credenciais.', 'Fechar', {
              duration: 5000, // Duração em milissegundos
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          }
        })
        
        
  
      } else {
        console.log('Formulário inválido');
      }
    }
  
  }
  



