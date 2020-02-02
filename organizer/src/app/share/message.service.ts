import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

export interface IMessage {
  text: string;
  dateTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new BehaviorSubject<IMessage>({text: 'Waite message....', dateTime: moment().format('hh:mm:ss')});

  constructor() { }

  sendMessage(message: IMessage): void {
    console.log('sendMessage = ', message);
    this.subject.next(message);
    console.log(this.subject);
}

clearMessage(): void {
    // this.subject.next();
}

getMessage(): Observable<IMessage> {
    return this.subject.asObservable();
}
}
