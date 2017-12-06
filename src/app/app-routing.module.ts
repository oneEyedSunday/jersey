import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'; 
import { JerseyHomeComponent } from './jersey/home/home.component';
import { CompleteComponent } from './jersey/complete/complete.component';
import { CreateComponent } from './jersey/create/create.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},

	// jersey paths
	{
		path: 'jersey',
		children: [
			{
				path: '',
				component: JerseyHomeComponent
			},
			{
				path: 'create',
				component: CreateComponent
			},
			{
				path: 'complete',
				component: CompleteComponent
			}
		]
	},

	// catch all
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
