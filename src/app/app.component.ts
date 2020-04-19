import { Component, OnInit } from '@angular/core';

import "devextreme/localization/globalize/number";
import "devextreme/localization/globalize/date";
import "devextreme/localization/globalize/currency";
import "devextreme/localization/globalize/message";

import ptMessages from "devextreme/localization/messages/pt.json";

import supplemental from "devextreme-cldr-data/supplemental.json";
import ptCldrData from "devextreme-cldr-data/pt.json";
import Globalize from 'globalize'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  locale: string;
  title = 'weather-station';
  constructor() {
  Globalize.load(supplemental, ptCldrData);
  Globalize.loadMessages(ptMessages);
  Globalize.locale(navigator.language);
  }
}