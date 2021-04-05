
import { Observable, Subscription } from 'rxjs';
import { AppareilService } from './services/appareil.servicre';
import { Component, resolveForwardRef, OnInit, OnDestroy } from '@angular/core';

import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  secondes!: number;
  counterSubscription!: Subscription;

  constructor() {

  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }



  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      }
    );
    // counter.subscribe(
    //   (value: number) => {
    //     this.secondes = value;
    //   },
    //   (error: any) => {
    //     console.log('une erreur a été rencontrée');
    //   },
    //   () => {
    //     console.log('Observable completée');
    //   }
    // );
  }

}

