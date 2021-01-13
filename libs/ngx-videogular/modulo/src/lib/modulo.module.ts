import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VgModuloComponent } from "./components/vg-modulo.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VgModuloComponent],
  exports: [VgModuloComponent],
})
export class VgModuloModule {}
