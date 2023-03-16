import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, MaterialModule],
    declarations: [],
    exports: [CommonModule, FormsModule, MaterialModule],
})
export class SharedModule { }
