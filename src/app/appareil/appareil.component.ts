import { AppareilService } from './../services/appareil.servicre';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input()
  appareilName!: string;
  @Input()
  appareilStatus!: string;
  @Input()
  indexOfAppareil!: number;
  @Input()
  id!: number;
  //appareilstatus = "eteint";
  constructor(private appareilservice: AppareilService) { }

  ngOnInit(): void {
  }
  getStatus() {
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'blue';

    } else if (this.appareilStatus === 'eteint') {
      return 'red';

    }
    else {
      return 'yellow';
    }
  }


  onSwitchOn() {
    this.appareilservice.switchOn(this.indexOfAppareil);
  }

  onSwitchOff() {
    this.appareilservice.switchOff(this.indexOfAppareil);
  }
}
