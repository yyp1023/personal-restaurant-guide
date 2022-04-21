import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'header', loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule) },
  // { path: 'navbar', loadChildren: () => import('./navbar/navbar.module').then( m => m.NavbarPageModule) },
  { path: 'list', loadChildren: () => import('./list/list.module').then( m => m.ListPageModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule) },
  { path: 'add', loadChildren: () => import('./add/add.module').then( m => m.AddPageModule) },
  { path: 'detail', loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule) },
  { path: 'delete-confirmation', loadChildren: () => import('./delete-confirmation/delete-confirmation.module').then( m => m.DeleteConfirmationPageModule) },
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule) },
  { path: 'maps', loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
