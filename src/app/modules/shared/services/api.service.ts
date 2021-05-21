import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class ApiService {

    headers = new HttpHeaders().set("Content-Type", "application/json");
    constructor(private http: HttpClient) { }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(environment.base_api_uri + `${path}`, { params });
    }

    put(path: string, body: object = {}): Observable<any> {
        return this.http.put(
            environment.base_api_uri + `${path}`,
            JSON.stringify(body),
            { headers: this.headers }
        );
    }

    post(path: string, body: object = {}, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.post(
            environment.base_api_uri + `${path}`,
            JSON.stringify(body),
            { headers: this.headers, params }
        );
    }

    delete(path): Observable<any> {
        return this.http.delete(environment.base_api_uri + `${path}`);
    }
}
