import { Component, Input, OnInit } from '@angular/core';
import { Message, ContentType, Type } from 'src/app/modules/shared/models/chat';

@Component({
  selector: 'chat-date-message',
  templateUrl: './date-message.component.html',
  styleUrls: ['./date-message.component.css']
})
export class DateMessageComponent implements OnInit {
  @Input() message:Message;
  constructor() { }

  ngOnInit(): void {
  }

  get type(): typeof Type {
    return Type; 
  }

  get contentType() : typeof ContentType {
    return ContentType;
  }

}
