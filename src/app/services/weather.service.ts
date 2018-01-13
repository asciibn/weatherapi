import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WeatherService {

  public coordsSubject = new Subject<any>();
  public weatherSubject = new Subject<any>();
  private mapURL: String  =  'https://api.openweathermap.org/data/2.5/forecast';
  private appID:  String  = '&appid=3baa39f07548462d2835f5a6dd435bde';

  constructor(private http: HttpClient) { }

  public searchCity(location: string) {
    return  this.http.get(this.mapURL + '?q=' + location + this.appID + '&units=imperial' );
   }
 
   
 
   public setCoords(data) {
     this.coordsSubject.next(data);
   }
 
   public setWeather(data) {
     this.weatherSubject.next(data);
   }
   
  public searchByCoords(currentPosition) {
    return this.http.get(this.mapURL + '?lat=' + currentPosition.coords.latitude + '&lon=' + currentPosition.coords.longitude + this.appID + '&units=imperial&cnt=3');

  }

}
