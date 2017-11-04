import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {ProjectFormComponent} from "./project-form/project-form.component";




const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  {path: 'projects',  component: PortfolioComponent },
  {path: 'projects/:id',  component: ProjectFormComponent },
  {path: 'new-project',  component: ProjectFormComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
