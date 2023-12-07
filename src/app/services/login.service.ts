import { UserService } from './user.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/User';

interface AuthResponse{
    token: "string", 
    expiration: "data"
  }


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = `${environment.ApiUrl}Authenticate`

  constructor(
    private http: HttpClient,
    private userService:UserService
    ) { }

  autenticar(username: string, password: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, {username , password}, {observe : 'response'}).pipe(
      tap((response) => {
        const authToken = response.body?.token || '';
        this.userService.salvarToken(authToken);
        this.armazenarDadosCadastro(authToken);
      })
    )
  }

  buscarCadastro(token:string): Observable<User>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` 
    })
    return this.http.get<User>(`${this.apiUrl}/profile`,{headers})
  }

  private armazenarDadosCadastro(token: string): void {
    this.buscarCadastro(token).subscribe(
      (cadastro) => {
        localStorage.setItem('cadastro', JSON.stringify(cadastro));
      },
      (error) => {
        console.error('Erro ao buscar cadastro:', error);
      }
    );

  }
  
}
