import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Line, NearByStopBack, Stop } from "../models/stop.models";

@Injectable({
    providedIn: "root"
})
export class BackendService {
    constructor(
        private httpClient: HttpClient
    ) {    }

    getClosestStops(lat: number, lng: number)  {
        return this.httpClient.get(`${environment.URL_BACKEND}/api/v1/getcloseststops?lat=${lat}&lng=${lng}`) as Observable<NearByStopBack>;
    }

    getAllLines() {
        return this.httpClient.get(`${environment.URL_BACKEND}/api/v1/webGetLines`) as Observable<{lines: Line[]}>
    }

    searchLineStop(text: string) {
       return this.httpClient.get(`${environment.URL_BACKEND}/api/v1/search?text=${text}`) as Observable<{lines: Line[], stops: Stop[]}>
    }
}