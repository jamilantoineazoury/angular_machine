import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.servicre';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  title = 'my awsome app';
  isAuth = false;

  temp = 0;
  lastUpdate = new Promise(

    (resolve, reject) => {

      let date = new Date();

      // reject("waiiiiittttt .....");
      setTimeout(() => {
        resolve(date);

      }, 4000);

    })


  appareils!: any[];
  appareilSubscrption!: Subscription;


  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true

    }, 4000);


    //setTimeout(callback: { this.isAuth = true; }, ms: 4000);
  }
  ngOnInit(): void {
    this.appareilSubscrption = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer(element: any) {
    this.appareilService.switchOnAll();
  }
  onEteindre(element: any) {
    this.appareilService.switchOffAll();
  }
  // onAllumer(element: any) {
  //   if (this.temp == 0) {
  //     this.temp = 1;
  //   }
  //   if (this.temp == 1) {

  //     element.textContent = "Eteindre tout";

  //     this.temp = 2;

  //     this.appareils = [
  //       {
  //         name: 'machine a laver',
  //         status: 'allumé'
  //       },
  //       {
  //         name: 'television',
  //         status: 'allumé'
  //       },
  //       {
  //         name: 'ordianteur',
  //         status: 'allumé'
  //       }
  //     ];


  //   } else if (this.temp == 2) {
  //     element.textContent = "Allumé tout";
  //     this.temp = 1;

  //     this.appareils = [
  //       {
  //         name: 'machine a laver',
  //         status: 'eteint'
  //       },
  //       {
  //         name: 'television',
  //         status: 'eteint'
  //       },
  //       {
  //         name: 'ordianteur',
  //         status: 'eteint'
  //       }
  //     ];

  //   }


  // }



}


