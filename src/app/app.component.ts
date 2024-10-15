import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CompisPisoComponent } from './compis-piso/compis-piso.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent, MatSlideToggleModule, CompisPisoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello Angular!';

  // Función que cambiará el título
  changeTitle() {
    this.title = 'Title Changed!';
  }
}