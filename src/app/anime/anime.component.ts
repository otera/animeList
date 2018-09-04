import { Component, OnInit } from '@angular/core';

import { ApiService } from "../service/api.service";
import { Anime } from "../interface/anime";
import { Years } from "../interface/years";

import * as moment from 'moment';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  // セレクトボックスの中身を生成するためのデータ
  private seasons = [
    { season: "(冬)", phase: "1" },
    { season: "(春)", phase: "2" },
    { season: "(夏)", phase: "3" },
    { season: "(秋)", phase: "4" },
  ];

  // セレクトボックスの中身
  years: Years[] = [];

  // APIから取得
  animedata: Anime[];

  // 選択項目
  selYear: number;

  // テーブル項目
  displayedColumns: string[] = ['title', 'title_short1', 'target', 'public_url', 'twitter'];

  constructor(private apiService: ApiService) { }

  // セレクトボックスの中身を生成
  createSelOption() {
    const MAX_YYYY = Number(moment().format('YYYY')); // 今年
    let yyyy = 2014; // API対応開始年

    for (; yyyy <= MAX_YYYY; yyyy++) {
      this.seasons.forEach(season => {
        this.years.push({
          year: yyyy, display: yyyy + "年" + season.season, phase: season.phase
        });
      });
    }

    // 新しい順にする
    this.years.sort((a, b) => {
      if(a.year > b.year){
        return -1;
      }
      if (a.year < b.year) {
        return 1;
      }
      if (a.phase > b.phase) {
        return -1;
      }
      // a.phase < b.phase
      return 1;
    });
  };

  ngOnInit() {
    this.createSelOption();
  }

  // serviceにリクエスト要求
  requestSend(params: { [key: string]: string; }) {
    this.apiService.request("master/" + params.year + "/" + params.phase).subscribe(
      data => {
        this.animedata = data;
      }
    );
  }

  // セレクトボックス変更イベント
  onChangeYear(event) {
    this.requestSend(event.value);
  }

}
