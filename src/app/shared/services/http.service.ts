import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Props } from 'src/app/constants/props';

@Injectable()
export class HttpService {
  headers: HttpHeaders = new HttpHeaders;
  CONTENT_TYPE: string = "application/json; charset=utf-8";
  // CONTENT_TYPE: string = "multipart/form-data;";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  private host = Props.API_END_POINT;

  constructor(private http: HttpClient) { }

  get(url: string, loader?: boolean) {
    url = this.host + url;
    return this.http.get(url);
  }

  post(url: string, data: any, loader?: boolean) {
    url = this.host + url;
    return this.http.post(url, data, this.httpOptions);
  }

  put(url: string, data: any, loader?: boolean) {
    url = this.host + url;
    return this.http.put(url, data);
  }

  delete(url: string, data: any, loader?: boolean) {
    url = this.host + url;
    return this.http.delete(url + data);
  }
}
