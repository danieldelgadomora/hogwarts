import { HowartsModule } from './views/hogwarts/hogwarts.module';
import { SidebarnavComponent } from './containers/sidebarnav/sidebarnav.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: '',
    component: SidebarnavComponent,
    data: {
      title: 'HOGWARTS'
    },

  },

  {
    path: 'hogwarts',
    component: SidebarnavComponent,
    data: {
      title: 'HOGWARTS'
    },
    children: [
      {
        path: '',
        loadChildren: './views/hogwarts/hogwarts.module#HowartsModule'

      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
