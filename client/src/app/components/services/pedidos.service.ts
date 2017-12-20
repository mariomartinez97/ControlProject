import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
//import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Cotizaciones } from '../models/cotizaciones';

@Injectable()
export class PedidosService {
  private ApiUrl: string = 'http://localhost:8080/';
  private headers = new Headers({'Content-Type': 'application/json'});;
  

  constructor(private http: Http) { }

  getCotizaciones() {
    return this.http.get(`${this.ApiUrl}${'cotizaciones'}`)
    .toPromise()
    .then(      
      response => response.json() as Cotizaciones[]) 
    .catch(); 
  }
  // update(portfolio: Cotizaciones): Promise<Cotizaciones> {
  //   return this.http.put(`${this.ApiUrl}/cotizaciones`, JSON.stringify(portfolio), { headers: this.headers })
  //     .toPromise()
  //     .then(() => portfolio)
  //     .catch();
  // }
  updatePedidos(cotizacion: Cotizaciones):Promise<Cotizaciones>{
    return this.http.put(`${this.ApiUrl}${'cotizaciones'}`, JSON.stringify(cotizacion), {headers: this.headers})
      .toPromise()
      .then(()=>cotizacion)
      .catch();
  }
}