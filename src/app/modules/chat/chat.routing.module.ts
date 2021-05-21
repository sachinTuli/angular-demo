import { ChatService } from './../shared/services/chat.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MessageService } from '../shared/services/message.service';
import { LayoutComponent } from './layout/layout.component';
import { MessagesComponent } from './components/messages/messages.component';

export const route:Routes = [
    {
        path: "",
        component: LayoutComponent,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: { "chats" : ChatService },
        children: [
            {
                path: "message/:sessionId",
                component: MessagesComponent,
                runGuardsAndResolvers: 'paramsOrQueryParamsChange',
                resolve: { "messages" : MessageService }
            }
        ]
    },
]
@NgModule({
    imports: [
        RouterModule.forChild(route),
    ],
})

export class ChatRoutingModule { }
