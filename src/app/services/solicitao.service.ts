import { Solicitacao } from './../models/Solicitacao';
import { Response } from './../models/Response';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SolicitaoService {


  private apiUrl = `${environment.ApiUrl}Solicitacao`

  constructor(private http: HttpClient) { }

  GetSolicitacao() : Observable<Response<Solicitacao[]>> {
    return this.http.get<Response<Solicitacao[]>>(this.apiUrl);
  }

  GetSolicitacaoById(id: number) : Observable<Response<Solicitacao>> {
    return this.http.get<Response<Solicitacao>>(`${this.apiUrl}/${id}`);
  }

  CreateSolicitacao(solicitacao: Solicitacao) : Observable<Response<Solicitacao[]>> {
    return this.http.post<Response<Solicitacao[]>>(`${this.apiUrl}`, solicitacao);
  }

  EditarSolicitacao(Solicitacao: Solicitacao, userName: String) : Observable<Response<Solicitacao[]>> {
   const body  = {Solicitacao: Solicitacao,userName :userName }
    return this.http.put<Response<Solicitacao[]>>(`${this.apiUrl}/respostaSolicitacao`, body);
  }

}
