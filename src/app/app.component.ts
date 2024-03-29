import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorPuntosComponent } from './contador-puntos/contador-puntos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContadorPuntosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ActividadContador';
}
