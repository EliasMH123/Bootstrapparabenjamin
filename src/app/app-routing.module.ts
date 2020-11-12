import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCursoComponent } from './components/curso/add-curso/add-curso.component';
import { ListarCursoComponent } from './components/curso/listar-curso/listar-curso.component';
import { UpdateCursoComponent } from './components/curso/update-curso/update-curso.component';

const routes: Routes = [
  { path: 'listar', component: ListarCursoComponent},
  { path: "curso/add", component: AddCursoComponent },
  { path: "editar/:id", component: UpdateCursoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
