import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { AddCursoComponent } from './components/curso/add-curso/add-curso.component';
import { ListarCursoComponent } from './components/curso/listar-curso/listar-curso.component';
import { UpdateCursoComponent } from './components/curso/update-curso/update-curso.component';
import { HttpClientModule } from '@angular/common/http';
import { CursoService } from './services/curso.service';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AddCursoComponent,
    ListarCursoComponent,
    UpdateCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
