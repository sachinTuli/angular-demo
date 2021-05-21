import { Component, Input, OnInit } from '@angular/core';
import { Message, Type, ContentType } from 'src/app/modules/shared/models/chat';

@Component({
  selector: 'app-file-messages',
  templateUrl: './file-messages.component.html',
  styleUrls: ['./file-messages.component.css']
})
export class FileMessagesComponent implements OnInit {

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
