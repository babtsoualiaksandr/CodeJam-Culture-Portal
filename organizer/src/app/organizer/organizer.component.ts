import { Component, OnInit } from '@angular/core';
import { DateService } from '../share/date.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TaskService, Task } from '../share/task.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {
form: FormGroup;
tasks: Task[] = [];
  constructor(private dateService: DateService,
              private taskService: TaskService) { }

  ngOnInit() {

    this.dateService.date.pipe(
      switchMap(value => this.taskService.load(value))
    ).subscribe(tasks => {
      this.tasks = tasks;
    });

    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }

  submit() {
    const {title} = this.form.value;
    const task: Task = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    };
    this.taskService.create(task).subscribe(task => {
      this.form.reset();
      this.tasks.push(task);
      console.log('New Task = ', task);
    }, err => console.log(err));
    console.log(title);
  }
  remove(task: Task) {
      this.taskService.remove(task).subscribe(() => {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      }, err => {
        console.log(err);
      });
  }

}
