import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TokenService } from './services/token.service';
import { User } from './models/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  usuario!: User;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    
    ) {
    this.usuario = this.tokenService.obterCadastro()
    
    }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }


  sair(){
    this.tokenService.limparLocalStorage();
    this.router.navigate(['/login'])
  }

}
