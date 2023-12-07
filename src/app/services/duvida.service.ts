import { Response } from './../models/Response';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Duvida } from '../models/Duvida';


@Injectable({
  providedIn: 'root'
})
export class DuvidaService {

  private apiUrl = `${environment.ApiUrl}Duvidas`

  constructor(private http: HttpClient) { }

  GetDuvida() : Observable<Response<Duvida[]>> {
    return this.http.get<Response<Duvida[]>>(this.apiUrl);
  }

}
