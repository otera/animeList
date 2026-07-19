import { Component, OnInit } from "@angular/core";

import { ApiService } from "../service/api.service";
import { Anime } from "../interface/anime";
import { Years } from "../interface/years";

import { DateTime } from "luxon";
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: "app-anime",
  templateUrl: "./anime.component.html",
  styleUrls: ["./anime.component.scss"],
})
export class AnimeComponent implements OnInit {
  // セレクトボックスの中身を生成するためのデータ
  private seasons = [
    { season: "(冬)", phase: "winter" },
    { season: "(春)", phase: "spring" },
    { season: "(夏)", phase: "summer" },
    { season: "(秋)", phase: "fall" },
  ];

  // セレクトボックスの中身
  years: Years[] = [];

  // APIから取得
  animedata: Anime[] = [];

  // テーブル項目
  displayedColumns: string[] = ["title", "type", "score", "genres"];

  constructor(private apiService: ApiService) {}

  // セレクトボックスの中身を生成
  createSelOption() {
    const MAX_YYYY = DateTime.now().year; // 今年
    let yyyy = 2014; // Jikan対応開始年

    for (; yyyy <= MAX_YYYY; yyyy++) {
      this.seasons.forEach((season) => {
        this.years.push({
          year: yyyy,
          display: yyyy + "年" + season.season,
          phase: season.phase,
        });
      });
    }

    // 新しい順にする
    const order = ["fall", "summer", "spring", "winter"];
    this.years.sort((a, b) => {
      if (a.year !== b.year) {
        return b.year - a.year;
      }
      return order.indexOf(a.phase) - order.indexOf(b.phase);
    });
  }

  ngOnInit() {
    this.createSelOption();
  }

  // セレクトボックス変更イベント
  onChangeYear(event: MatSelectChange) {
    const { year, phase } = event.value;
    this.apiService.getSeasonalAnime(year, phase).subscribe((data) => {
      this.animedata = data;
    });
  }
}
