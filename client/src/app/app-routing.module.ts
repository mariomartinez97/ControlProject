import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './components/app.component';
import { AuthComponent } from './components/auth.component';
import { PedidoComponent} from './components/pedido.component';
import { CallbackComponent} from './components/callback.component';

const routes: Routes = [
    { path: '', component: AppComponent},
    { path: 'callback', component: CallbackComponent },    
    { path: 'pedido', component: PedidoComponent },
    { path: '**', redirectTo: '' }
    
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}