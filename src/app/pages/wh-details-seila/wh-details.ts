import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DxDataGridComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { Reading } from '../../models/Reading';
import { ReadingService } from '../../services/reading.service';

@Component({
  selector: 'wh-details',
  templateUrl: './wh-details.component.html',
  styleUrls: ['./wh-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WhDetailsNovoComponent implements OnInit, OnDestroy {


  @ViewChild('dataGrid') dataGrid: DxDataGridComponent;


  public pages = []
  public id
  public wsName

  public readings: Reading[] = []
  public readingsSubscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private readingService: ReadingService) { }

  ngOnDestroy(): void {
    if (this.readingsSubscription) this.readingsSubscription.unsubscribe()
  }


  ngOnInit(): void {
    let id = this.id = this.route.snapshot.queryParamMap.get("id")
    this.wsName = !isNullOrUndefined(this.route.snapshot.queryParamMap.get("name")) ? this.route.snapshot.queryParamMap.get("name") : 'Estação Metereológica ' + id
    this.readingsSubscription = this.readingService.getById(id).subscribe((readings: any) => {
      this.readings = readings.readings
    })

  }

  formatDate(reading: Reading) {
    return new Date(`${reading.date_month}-${reading.date_day}-${reading.date_year}`)
  }

  formatTime(reading: Reading) {
    return `${reading.date_hours}:${reading.date_minutes}`
  }

  handleOnOptionChanged(event) {
    if (!isNullOrUndefined(this.dataGrid) && !isNullOrUndefined(event) && event.fullName === "paging.pageIndex") {
      let page = event.value
      if(!this.pages.includes(page)){
        this.readingService.getById(this.id, page).subscribe((readings: any) => {
          this.readings.push(...readings.readings)
          console.log(readings)
          this.dataGrid.instance.beginUpdate()
          this.dataGrid.instance.refresh()
          this.dataGrid.instance.endUpdate()
          this.pages.push(page)
        })
      }
    }

  }

}
