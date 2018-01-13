export class WeatherDisplay {
    date: Date;
    iconName: string;
    weather: WeatherResult;
    wind: WindResult;
    main: MainResult;
    dt_txt: string;
    includes: string;
}

export class WindResult {
    speed: number;
    deg: number;
}

export class WeatherResult {
    description: string;
    icon: string;
    main: string;
}

export class MainResult {
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    tamp_kf: number;
    temp_max:  number;
    temp_min: number;
}

export class RestResult {
    city: object;
    cnt: number;
    list: Array<any>;
    message: number;
}

export class ListElement {
    clouds: any;
    dt: number;
    dt_txt: string;
    main: any;
    snow: any;
    sys: any;
    weather: Array<any>;
    wind: any;
}
