import { Component } from '@angular/core';
import { Line, Stop } from '../models/stop.models';
import { BackendService } from '../services/backend.service';
import { faBus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  private _lines: Line[] = []
  private _stops: Stop[] = [];
  private _searching: boolean = false;
  busIcon = faBus;
  constructor(
    private backend: BackendService
  ) {}

  handleInput(ev: any) {
    console.log("InputEvent", ev);
    var text = ev.detail.value;
    if(text === "") {
      this._searching = false;
      this.getLineList();
    } else {
      this._searching = true;
      this.searchLinesStops(text);
    }
    
  }

  getLineList() {
    this.backend.getAllLines().subscribe(
      (result) => {
        this._lines = result.lines;
        this._stops = []; 
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchLinesStops(text: string) {

    this.backend.searchLineStop(text).subscribe(
      (result) => {
        this._lines = result.lines;
        this._stops = result.stops;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ionViewDidEnter() {
    this.getLineList();
  }

  getdestinationsString(data: string[]): string {
    var result = "";
    if(data && data.length > 0) {
      result = data.join(", ");
    }
    return result
  }

  get lines() {
    return this._lines;
  }

  get stops() {
    return this._stops;
  }

  get searching() {
    return this._searching;
  }

}
