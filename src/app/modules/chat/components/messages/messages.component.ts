import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ScrollToBottomDirective } from 'src/app/modules/shared/directives/scroll-to-bottom.directive';
import { Message, ContentType, Type } from 'src/app/modules/shared/models/chat';
import { MessageService } from 'src/app/modules/shared/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  private _searchString:string;
  private timeout:any = null;
  public messages:Message[] = [];
  public throttle = 50;
  public scrollDistance = 2;
  public scrollUpDistance = 2;

  @ViewChild("scrollMe") scroll: ScrollToBottomDirective;

  constructor(
    private _messageService: MessageService,
    private route: ActivatedRoute,
    private _cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(d=>{
      this.messages = d.messages.reverse() as Message[];
    })
  }

  set searchString(str: string) {
    this._searchString = str.trim();
  }

  get searchString() : string {
    return this._searchString;
  }

  public getAllMessages() : void {
    this._messageService.getAllMessages().subscribe(res=>{
      this.messages = this.messages.reverse();
      this.messages = this.messages.concat(res);
      this.messages = this.messages.reverse();
    })
  }

  public search() : void {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
        $this._messageService.setSeaarchString($this._searchString);
        $this.messages = [];
        $this.getAllMessages();
    }, 500);
  }

  public onScrollDown() : void {
  
  }

  public onUp() : void {
    this.getAllMessages();
  }

  get type(): typeof Type {
    return Type; 
  }

  get contentType() : typeof ContentType {
    return ContentType;
  }

  // For file upload
  myFiles: any[] = [];
  urlArray: any[] = [];
  imageName:string;

  onSelectFile(event) {
    this.myFiles = [];
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i].size <= 2048000) {
        this.myFiles.push(event.target.files[i]);
      }
    }

    this.myFiles.forEach(element => {
      var reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = (event) => {
        this.urlArray.push(reader.result);
        console.log('urlarray', this.urlArray)
      }
    });
  }
}
