import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/modules/shared/models/chat';
import { ChatService } from 'src/app/modules/shared/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private _searchString: string = "";
  public chats:Chat[];
  public throttle = 50;
  public scrollDistance = 2;
  public scrollUpDistance = 2;
  private timeout: any = null;

  constructor(
    private _chatService: ChatService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.chats = this.route.snapshot.data['chats'];
  }

  set searchString(str: string) {
    this._searchString = str.trim();
  }

  get searchString() : string {
    return this._searchString;
  }

  public getAllChat() : void {
    this._chatService.getAllChats().subscribe(res=>{
      this.chats = this.chats.concat(res);
    })
  }

  public search() : void {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
        $this._chatService.setSeaarchString($this._searchString);
        $this.chats = [];
        $this.getAllChat();
    }, 500);
  }

  public openMessages(chat: Chat) : void {
    this.router.navigate(["/chat/message", chat.sessionId])
  }

  public onScrollDown() : void {
    this.getAllChat();
  }

  public onUp() : void {

  }

}
