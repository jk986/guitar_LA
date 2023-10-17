import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { GuitarraComponent } from './components/guitarra/guitarra.component';
import { GuitarraDetailComponent } from './components/guitarra-detail/guitarra-detail.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostsComponent } from './components/posts/posts.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CursoComponent } from './components/curso/curso.component';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavegacionComponent,
    NosotrosComponent,
    TiendaComponent,
    GuitarraComponent,
    GuitarraDetailComponent,
    ErrorPageComponent,
    BlogComponent,
    PostsComponent,
    FechaPipe,
    PostsDetailComponent,
    InicioComponent,
    CursoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
