import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input"
import { MatAutocompleteModule } from "@angular/material/autocomplete"

import { MatMenuModule } from "@angular/material/menu"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatBadgeModule } from "@angular/material/badge"

@NgModule({
exports:[
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule

]
}) 

export class MaterialModule{}