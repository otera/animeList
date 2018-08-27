import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Anime } from "../class/anime";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiurl = "http://api.moemoe.tokyo/anime/v1/";

  constructor(private httpClient: HttpClient) { }

  // リクエスト
  request(params: string):Observable<Anime[]>{
    // URLBaseの部分とparamsを結合させて実行
    return this.httpClient.get<Anime[]>(this.apiurl + params);
  }
}
