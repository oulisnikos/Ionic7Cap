export interface NearByStops {
    stop_code: number;
    stop_descr: string;
    stop_street: string;
    distance: number;
    time: number;
    latitude: number;
    longtitude: number;
    destinations: string[];
    lines: string[];

}

export interface NearByStopBack {
    stops: NearByStops[]
}

export interface Line {
    id: number;
    line_id: string;
    line_descr: string;
}

export interface Stop {
    stop_code: number;
    stop_id: string;
    stop_descr: string;
    destinations: string[];
    lines: string[];
}