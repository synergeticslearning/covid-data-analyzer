import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { AboutComponent } from './components/about/about.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DetailsComponent } from './components/details/details.component';


const routes: Routes = [
    { path:"", component:HomeComponent},
    { path:"chart/:country", component: BarChartComponent},
    { path:"details/:country", component: DetailsComponent},
    { path:"about", component:AboutComponent},
    { path:"feedback", component:FeedbackComponent},
    { path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
