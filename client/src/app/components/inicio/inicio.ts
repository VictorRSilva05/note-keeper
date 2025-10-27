import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule, MatButtonModule ,MatDivider, MatIcon],
  templateUrl: './inicio.html'
})
export class Inicio {

}
