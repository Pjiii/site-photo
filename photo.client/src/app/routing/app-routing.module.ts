import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoFormComponent } from '../views/formulaire-photo/photoForm.component';
import { PhotosComponent } from '../views/listing-photo/photos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  { path: 'list', component: PhotosComponent },
  { path: 'add', component: PhotoFormComponent },
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule {
  static components = [
    PhotoFormComponent,
    PhotosComponent
  ];
}
