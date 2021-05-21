import { Component, Input, OnInit } from '@angular/core';
import { Message, ContentType, Type } from 'src/app/modules/shared/models/chat';

@Component({
  selector: 'chat-button-message',
  templateUrl: './button-message.component.html',
  styleUrls: ['./button-message.component.css']
})
export class ButtonMessageComponent implements OnInit {
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
