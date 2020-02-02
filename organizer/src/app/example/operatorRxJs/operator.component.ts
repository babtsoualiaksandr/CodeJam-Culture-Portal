import { Component, OnInit } from '@angular/core';
import { fromEvent, Subject, Observable, Subscription } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { MessageService, IMessage } from 'src/app/share/message.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {
  private clicks = new Subject<Event>();
  public message: IMessage;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    }

  ngOnInit() {
    console.log(this.messageService);
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log('message = ', message);
      this.message = message;
    });

  }


onBtnClick(event: Event) {
  const greetings = this.clicks.pipe(mapTo(event.target));
  greetings.subscribe(x => console.log(x));
}

}
