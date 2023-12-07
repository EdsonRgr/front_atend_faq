import { Injectable } from '@angular/core';
import { User } from '../models/User';

const TOKEN_KEY = 'token';
const CADASTRO_KEY = 'cadastro';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  salvarToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  excluirToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }

  retornarToken(): string {
    return localStorage.getItem(TOKEN_KEY) || '';
  }

  possuiToken(): boolean {
    return !!this.retornarToken();
  }

  salvarCadastro(cadastro: any): void {
    localStorage.setItem(CADASTRO_KEY, JSON.stringify(cadastro));
  }

  obterCadastro(): any {
    const cadastroString = localStorage.getItem(CADASTRO_KEY);
    return cadastroString ? JSON.parse(cadastroString) : null;
  }

  limparLocalStorage(): void {
    console.log('Limpando Local Storage');
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(CADASTRO_KEY);
  }

}
