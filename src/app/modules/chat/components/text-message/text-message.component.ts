import { Component, Input, OnInit } from '@angular/core';
import { Message, ContentType, Type } from 'src/app/modules/shared/models/chat';

@Component({
  selector: 'chat-text-message',
  templateUrl: './text-message.component.html',
  styleUrls: ['./text-message.component.css']
})
export class TextMessageComponent implements OnInit {
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
