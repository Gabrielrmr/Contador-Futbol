import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { ContadorTiempoComponent } from '../contador-tiempo/contador-tiempo.component';

@Component({
  selector: 'app-contador-puntos',
  standalone: true,
  imports: [CommonModule,FormsModule,ContadorTiempoComponent],
  templateUrl: './contador-puntos.component.html',
  styleUrl: './contador-puntos.component.css'
})
export class ContadorPuntosComponent {

  showComponent = false;

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
  Time=0;
  timeOptions = [1, 2, 5];
  selectedTime: number = 1;
  Timepersonalizado=0;
  timeLeft: number = 60;
  interval: any;

  EnviarTiempo(){
    if(this.selectedTime==1){
      this.Time=1
    }
    else if(this.selectedTime==2){
      this.Time=2
    }
    else if(this.selectedTime==5){
      this.Time=5
    }
    else{
      this.Time=this.Timepersonalizado
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
    }

    IniciarTemporizador(){

      if (this.Time > 0) {
        this.timeLeft = this.Time;
        this.startTimer();

    }
    }

}
