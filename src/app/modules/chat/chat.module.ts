import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ChatService } from './../shared/services/chat.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat.routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MessageService } from './../shared/services/message.service';
import { LayoutComponent } from './layout/layout.component';
import { ButtonMessageComponent } from './components/button-message/button-message.component';
import { CarouselMessageComponent } from './components/carousel-message/carousel-message.component';
import { DateMessageComponent } from './components/date-message/date-message.component';
import { DropDownMessageComponent } from './components/drop-down-message/drop-down-message.component';
import { ImageMessageComponent } from './components/image-message/image-message.component';
import { TextMessageComponent } from './components/text-message/text-message.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatSidebarComponent } from './components/chat-sidebar/chat-sidebar.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NgbDropdownModule, NgbAccordionModule, NgbModalModule, NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material-module';
import { FileMessagesComponent } from './components/file-messages/file-messages.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    ChatComponent,
    MessagesComponent,
    TextMessageComponent,
    ButtonMessageComponent,
    DropDownMessageComponent,
    ImageMessageComponent,
    CarouselMessageComponent,
    DateMessageComponent,
    LayoutComponent,
    ChatSidebarComponent,
    ContactsComponent,
    GroupsComponent,
    ProfileComponent,
    SettingsComponent,
    FileMessagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ChatRoutingModule,
    InfiniteScrollModule,
    SharedModule,
    NgbDropdownModule,
    NgbAccordionModule,
    PerfectScrollbarModule,
    NgbTooltipModule,
    NgbModalModule,
    NgbCollapseModule,
    TranslateModule,
    MaterialModule
  ],
  providers: [
    ChatService,
    MessageService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ChatModule { }
