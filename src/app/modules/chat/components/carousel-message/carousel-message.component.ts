import { Component, Input, OnInit } from '@angular/core';
import { Message, ContentType, Type } from 'src/app/modules/shared/models/chat';

@Component({
  selector: 'chat-carousel-message',
  templateUrl: './carousel-message.component.html',
  styleUrls: ['./carousel-message.component.css']
})
export class CarouselMessageComponent implements OnInit {

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
