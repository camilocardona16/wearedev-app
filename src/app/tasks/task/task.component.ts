import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: ``,
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class TaskComponent implements OnInit {

  id = this._actRoutre.snapshot.params['id'];

  form: FormGroup = this._fb.group({
    title: [''],
    description: [''],
    user: [''],
  })

  constructor(
    private _fb: FormBuilder,
    private _taskSvc: TasksService,
    private _router: Router,
    private _actRoutre: ActivatedRoute
  ) {
  }

  ngOnInit() {
    if (this.id) {
      this.form.addControl('completed', new FormControl(''));
      this._taskSvc.get(this.id).subscribe({
        next: (res: any) => {
          this.form.patchValue(res)
        },
        error: (err: any) => {
          console.log(err)
        }
      })
    }
  }


  onSubmit() {
    const id = JSON.parse(localStorage.getItem('user')!).id

    if (this.id) {
      this._taskSvc.edit({ ...this.form.value, user: id }, this.id).subscribe({
        next: (res: any) => {
          this._router.navigate(['/tasks/my-tasks'])
        },
        error: (err: any) => {
          console.log(err)
        }
      })
      return
    }

    this._taskSvc.create({ ...this.form.value, user: id }).subscribe({
      next: (res: any) => {
        this._router.navigate(['/tasks/my-tasks'])
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
