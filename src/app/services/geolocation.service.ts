import { Injectable } from "@angular/core";

export interface MyCoords {
    lat: number;
    long: number;
}

@Injectable({
    providedIn: "root"
})
export class GeolocationService {
    constructor(
    ) {

    }
}