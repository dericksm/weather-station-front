import { WeatherStation } from './../../models/WeatherStation';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherStationService } from '../../services/weather-station.service';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';


declare var $: any;

@Component({
  selector: 'wh-list',
  templateUrl: './wh-list.component.html',
  styleUrls: ['./wh-list.component.scss']
})
export class WhListComponent implements OnInit, OnDestroy {

  public weatherStations: WeatherStation[]
  public weatherStationSubscription: Subscription
  public whModal: WeatherStation

  constructor(private weatherStationService: WeatherStationService) {
  }

  ngOnInit(): void {
    this.weatherStationSubscription = this.weatherStationService.getAll().subscribe(res => {
      console.log(res)
      this.weatherStations = res
    })
  }

  ngOnDestroy(): void{
    if(this.weatherStationSubscription) this.weatherStationSubscription.unsubscribe()
  }

  openModal(wh: WeatherStation){
    this.whModal = wh
    $("#modalWSDetails").modal('show')
  }

  formatDate(wh: WeatherStation){
    return `${wh.date_day}/${wh.date_month}/${wh.date_year} - ${wh.date_hours}:${wh.date_minutes}`
  }

  isNullOrUndefined(data) {
    return isNullOrUndefined(data)
  }



}
