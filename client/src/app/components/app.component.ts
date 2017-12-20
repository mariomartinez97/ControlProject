import { Component } from '@angular/core';
//import {AuthComponent} from './auth.component';

import { AuthService} from './services/auth.service';
import { PedidosService } from './services/pedidos.service';
import { Cotizaciones } from './models/cotizaciones';

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./styles/app.component.css']
})
export class AppComponent {
  title = 'app';

  //Test

  info: Cotizaciones[];

  constructor(
    private pedidosService: PedidosService,
    private authConfig: AuthService
  ){
    authConfig.handleAuthentication();    
  }

  //
  ngOnInit(){
    this.loadInfo();

  }
  loadInfo(){
    this.pedidosService.getCotizaciones()
    .then (x =>{
      console.log(x);      
      this.info = x;
      console.log(this.info[0]);
      //console.log(this.info[0].nombre);    
    });
  }
  addPedido(){
    if(this.authConfig.isAuthenticated()){
      console.log("loged IN!");
      //console.log(this.authConfig.getProfile);
    }
    if(!this.authConfig.isAuthenticated()){
      console.log("Not working");
    }
    // let temp: Cotizaciones;
    
    // temp = this.info[0];
    // temp.nombre = 'Test2';
    // temp.email = 'test@test.com';
    // temp.fecha = '12/07/12';
    // temp.telefono = '23457985';
    // console.log(temp);
    // this.pedidosService.updatePedidos(temp);
    
  }
  // Authtest(){
  //   if(!this.test.isAuthenticated()){
  //     this.test.login();
  //     console.log("YOURE LOGED IN");
  //   }
  //   else{
  //     this.test.logout();
  //     console.log("YOURE LOGED IN");      
  //   }

  // }

}
