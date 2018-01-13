import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDisplay } from '../../components/header/weather-display';
import { WeatherParser } from '../../components/header/weather-parser';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  weatherArray: Array<WeatherDisplay> = [];

  constructor(private weatherService: WeatherService) {   }

  ngOnInit() {
    this.weatherService.weatherSubject.subscribe( data => {
      const parser: WeatherParser = new WeatherParser();
      this.weatherArray = parser.parseResults(data.list);
      console.log(this.weatherArray);
    });
  }

}
