import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headerDict = {
  'Access-Control-Allow-Origin': '*',

}
const requestOptions = {
  headers: new HttpHeaders(headerDict),
};
@Injectable({
  providedIn: 'root'
})
export class DataFactoryService {
  constructor(
    private http: HttpClient,
  ) { }

    //this api call for  get analytics data
    GetAnalytics() {    
      return this.http.get(`${environment.base_api_uri}Analytics`,requestOptions);
    }
  
}
