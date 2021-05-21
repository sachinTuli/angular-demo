import { Component, Input, OnInit } from '@angular/core';
import { Message, ContentType, Type } from 'src/app/modules/shared/models/chat';

@Component({
  selector: 'chat-drop-down-message',
  templateUrl: './drop-down-message.component.html',
  styleUrls: ['./drop-down-message.component.css']
})
export class DropDownMessageComponent implements OnInit {
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
