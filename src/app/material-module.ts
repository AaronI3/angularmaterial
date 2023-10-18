import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input"
import { MatAutocompleteModule } from "@angular/material/autocomplete"
import { MatMenuModule } from "@angular/material/menu"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatBadgeModule } from "@angular/material/badge"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from "@angular/material/list"
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@NgModule({
exports:[
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule
]
}) 

export class MaterialModule{}