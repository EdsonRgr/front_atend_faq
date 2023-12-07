import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User | null>(null) 

  constructor(private tokenService:TokenService) { 
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
  }


  decodificaJWT(){
      const token = this.tokenService.retornarToken();
      const user = jwtDecode(token) as User;
      this.userSubject.next(user)
  }
  

  retornaUser(){
    return this.userSubject.asObservable(); 
  }

  salvarToken(token: string){
    this.tokenService.salvarToken(token)
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado(){
    return this.tokenService.possuiToken
  }

}