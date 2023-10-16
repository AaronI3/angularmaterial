import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './component/autocomplete/autocomplete.component';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './component/home/home.component';
import { ExpansionPanelComponent } from './component/expansion-panel/expansion-panel.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'autocomplete',component:AutocompleteComponent},
  {path:'input',component:InputComponent},
  {path:'expansion-panel',component:ExpansionPanelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
