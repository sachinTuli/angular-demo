import { Observable } from 'rxjs/internal/Observable';
import { Message } from './../models/chat';
import { Page } from './../models/pagable';
import { HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { empty, of } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

type MessageRequest = {
    sessionId: string;
    page:number;
    size:number;
    searchString?: string;
}

@Injectable()
export class MessageService implements Resolve<any> {

    private page:Page<any>;
    private requestObject:MessageRequest;

    constructor(
        private _apiService: ApiService
    ) {
       
     }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.page = undefined;
        this.requestObject = {
            sessionId: "",
            page: 0,
            size:10,
            searchString: "",
        }
        this.requestObject.sessionId = route.params.sessionId;
        return this.getAllMessages();
    }
    
    getAllMessages() : Observable<Message[]> {
        if(!this.page) {
            return this.getDataFromServer();
        }
        if(!this.page.last) {
            return this.getDataFromServer();
        }
        return of([] as Message[]);
       
    }

    private getDataFromServer() {
        let httpParams = new HttpParams();
        let obj = this.prepareRequest();
        Object.keys(obj).forEach(function (key) {
            httpParams = httpParams.append(key, obj[key]);
        });
        return this._apiService.get("Message/sessionId", httpParams).pipe(map((page: Page<any>) => {
            this.page = page;
            return page.content;
        }),catchError(err => {
            return empty();
        }))
    }

    private prepareRequest(): Object {
        if(this.page && !this.page.last) {
            this.requestObject.page++;
        }
        return this.requestObject;
    }

    public setSeaarchString(str:string) : void {
        this.requestObject.page = 0;
        this.page = undefined;
        this.requestObject.searchString = str;
    }
}