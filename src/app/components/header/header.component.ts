import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherResults } from './weather-results';
import { WeatherService } from '../../services/weather.service';
import { WeatherDisplay } from './weather-display';
import { WeatherParser } from './weather-parser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private weatherService: WeatherService) {   }

  weaherResults: WeatherResults;
  location: String;
  list: Array<Object>;
  weather: Array<Object>;
  country: String;
  population: String;
  showHide: Boolean = false;
  weatherArray: Array<WeatherDisplay> = [];
  lat: Number = 40.2617154;
  lng: Number = -74.05652169999999;
  highTemp: string;
  lowTemp: string;

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( currentPosition => {
        this.lat = currentPosition.coords.latitude;
        this.lng = currentPosition.coords.longitude;
        this.weatherService.searchByCoords(currentPosition).subscribe( data => {
          this.weatherService.setWeather(data);
        });
      });
    }

    this.weatherService.weatherSubject.subscribe( data => {
      console.log(data);
      this.location = data.city.name;
      this.list = data.list;
      this.country = data.city.country;
      this.population = data.city.population;
      this.showHide = true;
      this.highTemp = data.list[0].main.temp_max;
      this.lowTemp = data.list[0].main.temp_min;
      const parser: WeatherParser = new WeatherParser();
      this.weatherArray = parser.parseResults(data.list);
      console.log(this.weatherArray);
    });
  }

  onKeyup(event: string) {
     this.weatherService.searchCity(event).subscribe( (data: WeatherResults) => {
     this.weatherService.setCoords(data.city.coord);
     this.weatherService.setWeather(data);
    });
  }

}
