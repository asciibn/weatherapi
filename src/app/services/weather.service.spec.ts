import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { WeatherResults } from '../components/header/weather-results';

describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherService],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([WeatherService], (service: WeatherService) => {
    expect(service).toBeTruthy();
  }));



   it('searchByCoords exist',  inject([HttpClient, HttpTestingController, WeatherService],
    (http: HttpClient, backend: HttpTestingController, service: WeatherService) => {
      const currentPosition = {
        coords: {
         lat: 40.2617154,
         lng:  -74.05652169999999
        }
       };

       expect(service.searchByCoords(currentPosition)).toBeTruthy();
    }));

    it('searchByCoords should make a request',  inject([HttpClient, HttpTestingController, WeatherService],
      (http: HttpClient, backend: HttpTestingController, service: WeatherService) => {
        const currentPosition = {
          coords: {
           lat: 40.2617154,
           lng:  -74.05652169999999
          }
         };

         const list = [
          {"dt":1515531600,"main":{"temp":43.65,"temp_min":39.68,"temp_max":43.65,"pressure":1036.33,"sea_level":1036.92,"grnd_level":1036.33,"humidity":100,"temp_kf":2.2},
          "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":17.02,"deg":302.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2018-01-09 21:00:00"},
          
          {"dt":1515542400,"main":{"temp":41.07,"temp_min":38.1,"temp_max":41.07,"pressure":1039.3,"sea_level":1039.84,"grnd_level":1039.3,"humidity":100,"temp_kf":1.65},
          "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":17.18,"deg":323.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-01-10 00:00:00"},
          
          {"dt":1515553200,"main":{"temp":37.74,"temp_min":35.76,"temp_max":37.74,"pressure":1041.66,"sea_level":1042.18,"grnd_level":1041.66,"humidity":100,"temp_kf":1.1},
          "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":15.73,"deg":338.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2018-01-10 03:00:00"}]
          
  
         expect(service.searchByCoords(currentPosition).subscribe( (event: HttpEvent<any>) => {
            switch ( event.type ) {
              case HttpEventType.Response:
              expect(event.body).toEqual(list);
            }
         }));
      }));


      it('searchCituy should exist',  inject([HttpClient, HttpTestingController, WeatherService],
        (http: HttpClient, backend: HttpTestingController, service: WeatherService) => {
          const city = 'New York';
           expect(service.searchCity(city)).toBeTruthy();
        }));




});
