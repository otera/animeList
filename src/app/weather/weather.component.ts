import { Component, OnInit } from '@angular/core';

import { ApiService } from "../service/api.service";
import { Anime } from "../class/anime";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  years = [
    { year: "2014" },
    { year: "2015" },
    { year: "2016" },
    { year: "2017" },
    { year: "2018" }
  ];
  selYear = { year: "2018" };

  animedata: Anime[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  requestSend(year: string){
    this.apiService.request("master/" + year).subscribe(
      data => {
        this.animedata = data;
      }
    );
  }

  onChangeYear(event) {
    this.requestSend(event);
  }

}
