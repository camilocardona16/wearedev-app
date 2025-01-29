import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  template: `<ion-router-outlet></ion-router-outlet>`,
  styles: ``,
  standalone: true,
  imports: [
    IonicModule
  ],
})
export class TasksComponent {


}
