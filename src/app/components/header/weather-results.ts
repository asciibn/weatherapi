export class WeatherResults {
    city: City;
    cod: string;
    message: number;
    cnt: number;
    list: Array<object>;
}

export class City {
    coord: object;
    country: string;
    id: number;
    name: string;
    population: number;
}