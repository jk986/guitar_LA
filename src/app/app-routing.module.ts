import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { GuitarraDetailComponent } from './components/guitarra-detail/guitarra-detail.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent, title: 'Inicio'},
  {path:'nosotros', component:NosotrosComponent, title:'GuitarLA - Sobre Nosotros'},
  {path:'tienda', component:TiendaComponent, title:'GuitarLA - Tienda'},
  {path:'guitarras/:url', component:GuitarraDetailComponent, title:`GuitarLA - Detalle`},
  {path:'blog', component: BlogComponent, title:'GuitarLA - Blog'},
  {path:'blog/:url', component: PostsDetailComponent, title:'GuitarLA - Leer'},
  {path:'car', component:CarritoComponent, title:'Carrito de Compras'},
  {path:'' , redirectTo:'inicio',pathMatch:'full'},
  {path:'**', component: ErrorPageComponent , title: 'GuitarLA - No Encontrado'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
