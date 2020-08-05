import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "inicio/:id",
    loadChildren: () =>
      import("./inicio/inicio.module").then((m) => m.InicioPageModule),
  },
  {
    path: "formulario",
    loadChildren: () =>
      import("./formulario/formulario.module").then(
        (m) => m.FormularioPageModule
      ),
  },
  {
    path: 'error',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorPageModule)
  },
  {
    path: 'ventanaemergent',
    loadChildren: () => import('./ventanaemergent/ventanaemergent.module').then(m => m.VentanaemergentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
