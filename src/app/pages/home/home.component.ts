import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  faCompactDisc,
  IconDefinition,
  faShippingFast,
  faSignal,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faCoffe: IconDefinition = faCoffee;
  faCompactDisc: IconDefinition = faCompactDisc;
  faShippingFast: IconDefinition = faShippingFast;
  faSignal: IconDefinition = faSignal;
  faVideo: IconDefinition = faVideo;

  constructor() { }

  ngOnInit(): void {
  }

}
