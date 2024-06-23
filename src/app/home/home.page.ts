import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { NearByStops } from '../models/stop.models';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { GeolocationService } from '../services/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
  private _stopsList: NearByStops[] = [];
  busIcon = faBus;
  constructor(
    private backend: BackendService,
    private geoLocation: GeolocationService
  ) {

  }

  ngOnInit(): void {
    
  }

  ionViewDidEnter() {
    // this.geoLocation.getLocation();
    // if(this.geoLocation.myCoords) {
    //   this.backend.getClosestStops(this.geoLocation.myCoords.lat , this.geoLocation.myCoords.long).subscribe(
    //     (results) => {
    //       this._stopsList = results.stops;
    //     },
    //     (err) => {
    //       console.log(err);
  
    //     }
    //   );
    // }
  }

  getdestinationsString(data: string[]): string {
    var result = "";
    if(data && data.length > 0) {
      result = data.join(", ");
    }
    return result
  }

  get stopsList(): NearByStops[] {
    return this._stopsList;
  }

  set stopsList(value: NearByStops[]) {
    this._stopsList = value;
  }



}
