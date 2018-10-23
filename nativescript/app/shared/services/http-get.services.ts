import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { API_URL } from '~/shared/configs';

@Injectable()
export class MyHttpGetService {
  constructor(private http: Http) {}
  private apiUrl: string = API_URL + '/weddings';
  getWeddingID() {
    // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
    let params = new URLSearchParams();
    // params.append("sort", "{\"_kmd.lmt\": 1}");

    return this.http.get(`${this.apiUrl}`, {
      headers: this.getCommonHeaders(),
      params: params
    })
    .map(res => res.json())
    .map(data => {      
      return data;
    })
    .catch(this.handleErrors);    
  }

  getCommonHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    // headers.append("Authorization", "Kinvey " + Config.token);
    return headers;
  }

  handleErrors(error: Response) {
    console.log("http-get.services handle errors: ");
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}