import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input"
import { MatAutocompleteModule } from "@angular/material/autocomplete"

@NgModule({
exports:[
    MatInputModule,
    MatAutocompleteModule
]
}) 

export class MaterialModule{}