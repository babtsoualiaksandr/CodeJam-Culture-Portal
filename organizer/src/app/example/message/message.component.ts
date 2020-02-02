import { Component, OnInit } from '@angular/core';
import { MessageService, IMessage } from 'src/app/share/message.service';
import * as moment from 'moment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message: IMessage = { text: '', dateTime: moment().format()};

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.message.dateTime = moment().format();
    this.message.text = 'Message from message Component to Operator Component!';
    this.messageService.sendMessage(this.message);
  }

}
