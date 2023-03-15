import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './chat/message/message.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },

  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatModule)
  },

  {
    path: '**',
    redirectTo: 'chat',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
