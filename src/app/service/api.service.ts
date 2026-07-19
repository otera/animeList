import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Anime } from '../interface/anime';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiurl = 'https://api.jikan.moe/v4/';

  constructor(private httpClient: HttpClient) {}

  getSeasonalAnime(year: number, season: string): Observable<Anime[]> {
    return this.httpClient
      .get<{ data: Anime[] }>(`${this.apiurl}seasons/${year}/${season}`)
      .pipe(map((response) => response.data));
  }
}
