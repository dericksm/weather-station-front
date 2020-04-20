import { WeatherStation } from './../../models/WeatherStation';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherStationService } from '../../services/weather-station.service';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


declare var $: any;

@Component({
  selector: 'wh-list',
  templateUrl: './wh-list.component.html',
  styleUrls: ['./wh-list.component.scss']
})
export class WhListComponent implements OnInit, OnDestroy {

  public weatherStations: WeatherStation[]
  public weatherStationSubscription: Subscription
  public submitSubscription: Subscription

  public formGroup: FormGroup

  constructor(
    private weatherStationService: WeatherStationService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.createForm()
    this.weatherStationSubscription = this.weatherStationService.getAll().subscribe(
      res => {
        this.weatherStations = res
      })
  }

  ngOnDestroy(): void {
    if (this.weatherStationSubscription) this.weatherStationSubscription.unsubscribe()
    if (this.submitSubscription) this.submitSubscription.unsubscribe()
  }

  openModal(wh: WeatherStation) {
    this.formGroup.patchValue(wh)
    $("#modalWSDetails").modal('show')
  }

  formatDate(wh: WeatherStation) {
    if(isNullOrUndefined(wh.date_day) && isNullOrUndefined(wh.date_month) && isNullOrUndefined(wh.date_year) && isNullOrUndefined(wh.date_minutes) && isNullOrUndefined(wh.date_hours)) {
      return `${wh.date_day}/${wh.date_month}/${wh.date_year} - ${wh.date_hours}:${wh.date_minutes}`
    } else {
      return 'Data inválida'
    }
  }

  isNullOrUndefined(data) {
    return isNullOrUndefined(data)
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  submit() {
    this.submitSubscription = this.weatherStationService.update(this.formGroup.value)
      .subscribe((response: WeatherStation) => {
        alert("Dados atualizados com sucesso")

        let foundIndex = this.weatherStations.findIndex(x => x.id == response.id);
        this.weatherStations[foundIndex].name = response.name;
        this.weatherStations[foundIndex].address = response.address;
        this.weatherStations[foundIndex].description = response.description;

      },
        err => {
          alert("Não foi possível atualizar os dados, por favor tente novamente")
        })
  }




}
