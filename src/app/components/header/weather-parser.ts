import { WeatherDisplay, WeatherResult, ListElement } from './weather-display';
import { WindResult } from './weather-display';

export class WeatherParser {

    constructor() { }

    parseResults(list: Array<ListElement>): Array<WeatherDisplay> {
        const returnObj: Array<WeatherDisplay> = [];

        list.forEach(element => {
            const obj: WeatherDisplay = new WeatherDisplay();
                // console.log(element);
                // console.log(obj);
                const dateObj: Date = new Date(element.dt_txt);
               // console.log(obj.date);
                    obj.date = dateObj;


                const hours = dateObj.getHours() + 2;
                const isPM = hours >= 12;

                const  weatherObj: WeatherResult = new WeatherResult();
                    weatherObj.description =  element.weather[0].description;
                    weatherObj.main =  element.weather[0].main;
                    weatherObj.icon = element.weather[0].icon;

                 obj.weather = weatherObj;
                 obj.main = element.main;
                 obj.wind = element.wind;

                 switch (obj.weather.description) {
                   case 'thunderstorm with light rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-thunderstorm';
                   }else {
                    obj.iconName = 'wi wi-day-thunderstorm';
                   }
                   break;

                   case 'thunderstorm with rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-thunderstorm';
                   }else {
                    obj.iconName = 'wi wi-day-thunderstorm';
                   }
                   break;

                   case 'thunderstorm with heavy rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-thunderstorm';
                   }else {
                    obj.iconName = 'wi wi-day-thunderstorm';
                   }
                   break;

                   case 'light thunderstorm' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-thunderstorm';
                   }else {
                    obj.iconName = 'wi wi-day-thunderstorm';
                   }
                   break;

                   case 'thunderstorm' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-thunderstorm';
                   }else {
                    obj.iconName = 'wi wi-day-thunderstorm';
                   }
                   break;

                   case 'heavy thunderstorm' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-thunderstorm';
                   }else {
                    obj.iconName = 'wi wi-day-thunderstorm';
                   }
                   break;

                   case 'ragged thunderstorm' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-thunderstorm';
                   }else {
                    obj.iconName = 'wi wi-day-thunderstorm';
                   }
                   break;

                   case 'thunderstorm with light drizzle' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-thunderstorm';
                   }else {
                    obj.iconName = 'wi wi-day-thunderstorm';
                   }
                   break;

                   case 'thunderstorm with drizzle' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-thunderstorm';
                   }else {
                    obj.iconName = 'wi wi-day-thunderstorm';
                   }
                   break;

                   case 'thunderstorm with heavy drizzle' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-thunderstorm';
                   }else {
                    obj.iconName = 'wi wi-day-thunderstorm';
                   }
                   break;


                   case 'light intensity drizzle' :
                   if ( isPM ) {
                    obj.iconName = 'wi-night-alt-rain-mix';
                   }else {
                    obj.iconName = 'wi wi-day-sprinkle';
                   }
                   break;

                   case 'drizzle' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sprinkle';
                   }else {
                    obj.iconName = 'wi wi-day-sprinkle';
                   }
                   break;

                   case 'heavy intensity drizzle' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sprinkle';
                   }else {
                    obj.iconName = 'wi wi-day-sprinkle';
                   }
                   break;

                   case 'light intensity drizzle rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sprinkle';
                   }else {
                    obj.iconName = 'wi wi-day-sprinkle';
                   }
                   break;

                   case 'drizzle rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sprinkle';
                   }else {
                    obj.iconName = 'wi wi-day-sprinkle';
                   }
                   break;

                   case 'heavy intensity drizzle rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sprinkle';
                   }else {
                    obj.iconName = 'wi wi-day-sprinkle';
                   }
                   break;

                   case 'shower rain and drizzle' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sprinkle';
                   }else {
                    obj.iconName = 'wi wi-day-sprinkle';
                   }
                   break;

                   case 'heavy shower rain and drizzle' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sprinkle';
                   }else {
                    obj.iconName = 'wi wi-day-sprinkle';
                   }
                   break;

                   case 'shower drizzle' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sprinkle';
                   }else {
                    obj.iconName = 'wi wi-day-sprinkle';
                   }
                   break;



                   case 'light rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-rain-mix';
                   }else {
                    obj.iconName = 'wi wi-day-rain-mix';
                   }
                   break;

                   case 'moderate rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-day-showers';
                   }else {
                    obj.iconName = 'wi wi-day-rain-mix';
                   }
                   break;

                   case 'heavy intensity rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-rain';
                   }else {
                    obj.iconName = 'wi wi-day-rain';
                   }
                   break;

                   case 'very heavy rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-rain';
                   }else {
                    obj.iconName = 'wi wi-day-rain';
                   }
                   break;

                   case 'extreme rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-rain';
                   }else {
                    obj.iconName = 'wi wi-day-rain';
                   }
                   break;

                   case 'freezing rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-rain';
                   }else {
                    obj.iconName = 'wi wi-day-rain';
                   }
                   break;

                   case 'light intensity shower rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-rain';
                   }else {
                    obj.iconName = 'wi wi-day-rain';
                   }
                   break;

                   case 'shower rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-rain';
                   }else {
                    obj.iconName = 'wi wi-day-rain';
                   }
                   break;

                   case 'heavy intensity shower rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-rain';
                   }else {
                    obj.iconName = 'wi wi-day-rain';
                   }
                   break;

                   case 'ragged shower rain' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-alt-rain';
                   }else {
                    obj.iconName = 'wi wi-day-rain';
                   }
                   break;




                   case 'light snow' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-snow-wind';
                   }else {
                    obj.iconName = 'wi wi-day-snow-wind';
                   }
                   break;

                   case 'snow' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-snow-wind';
                   }else {
                    obj.iconName = 'wi wi-day-snow-wind';
                   }
                   break;

                   case 'heavy snow' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-snow-wind';
                   }else {
                    obj.iconName = 'wi wi-day-snow-wind';
                   }
                   break;

                   case 'sleet' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sleet';
                   }else {
                    obj.iconName = 'wi wi-day-sleet';
                   }
                   break;

                   case 'shower sleet' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sleet';
                   }else {
                    obj.iconName = 'wi wi-day-sleet';
                   }
                   break;

                   case 'light rain and snow' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-snow-wind';
                   }else {
                    obj.iconName = 'wi wi-day-snow-wind';
                   }
                   break;

                   case 'rain and snow' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-snow-wind';
                   }else {
                    obj.iconName = 'wi wi-day-snow-wind';
                   }
                   break;

                   case 'light shower snow' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-snow-wind';
                   }else {
                    obj.iconName = 'wi wi-day-snow-wind';
                   }
                   break;

                   case 'shower snow' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-snow-wind';
                   }else {
                    obj.iconName = 'wi wi-day-snow-wind';
                   }
                   break;

                   case 'heavy shower snow' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-snow-wind';
                   }else {
                    obj.iconName = 'wi wi-day-snow-wind';
                   }
                   break;



                   case 'mist' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-sprinkle';
                   }else {
                    obj.iconName = 'wi wi-day-sprinkle';
                   }
                   break;

                   case 'smoke' : obj.iconName = 'wi wi-smoke';
                   break;
                   case 'haze' : obj.iconName = 'wi wi-fog';
                   break;
                   case 'sand, dust whirls' : obj.iconName = 'wi wi-snow';
                   break;
                   case 'fog' : obj.iconName = 'wi wi-fog';
                   break;
                   case 'sand' : obj.iconName = 'wi wi-sandstorm';
                   break;
                   case 'dust' : obj.iconName = 'wi wi-dust';
                   break;
                   case 'volcanic ash' : obj.iconName = 'wi wi-volcano';
                   break;
                   case 'squalls' : obj.iconName = 'wi wi-snow';
                   break;
                   case 'tornado' : obj.iconName = 'wi wi-tornado';
                   break;


                   case 'clear sky' : obj.iconName = 'wi wi-cloud';
                   break;


                   case 'few clouds' : obj.iconName = 'wi wi-cloudy';
                   break;
                   case 'scattered clouds' : obj.iconName = 'wi wi-cloudy';
                   break;
                   case 'broken clouds' : obj.iconName = 'wi wi-cloudy';
                   break;
                   case 'overcast clouds' : obj.iconName = 'wi wi-cloudy';
                   break;


                   case 'tornado' : obj.iconName = 'wi wi-tornado';
                   break;
                   case 'tropical storm' : obj.iconName = 'wi wi-storm-showers';
                   break;
                   case 'hurricane' : obj.iconName = 'wi wi-tornado';
                   break;
                   case 'cold' : obj.iconName = 'wi wi-snowflake-cold';
                   break;
                   case 'hot' : obj.iconName = 'wi wi-hot';
                   break;
                   case 'windy' : obj.iconName = 'wi wi-windy';
                   break;

                   case 'hail' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-hail';
                   }else {
                    obj.iconName = 'wi wi-day-hail';
                   }
                   break;


                   case 'calm' :
                   if ( isPM ) {
                    obj.iconName = 'wi wi-night-clear';
                   }else {
                    obj.iconName = 'wi wi-day-sunny';
                   }
                   break;

                   case 'light breeze' : obj.iconName = 'wi wi-windy';
                   break;

                   case 'gentle breeze' : obj.iconName = 'wi wi-windy';
                   break;

                   case 'moderate breeze' : obj.iconName = 'wi wi-windy';
                   break;

                   case 'fresh breeze' : obj.iconName = 'wi wi-windy';
                   break;

                   case 'strong breeze' : obj.iconName = 'wi wi-strong-wind';
                   break;

                   case 'high wind, near gale' : obj.iconName = 'wi wi-strong-wind';
                   break;

                   case 'gale' : obj.iconName = 'wi wi-strong-wind';
                   break;

                   case 'severe gale' : obj.iconName = 'wi wi-strong-wind';
                   break;

                   case 'storm' : obj.iconName = 'wi wi-storm-showers';
                   break;

                   case 'violent storm' : obj.iconName = 'wi wi-storm-showers';
                   break;

                   case 'hurricane' : obj.iconName = 'wi wi-tornado';
                   break;

         }
         returnObj.push(obj);

    });
     return returnObj;
    }
}
