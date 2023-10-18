import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
    
    {path:'principal', component:PrincipalComponent},
    {path:'', component: AppComponent},
    {path:'formulario', component: FormularioComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
