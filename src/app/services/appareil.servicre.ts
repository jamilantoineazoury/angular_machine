import { AppareilComponent } from './../appareil/appareil.component';
import { Subject } from "rxjs/internal/Subject";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {
    appareilSubject = new Subject<any[]>();

    private appareils = [
        {
            id: 1,
            name: 'machine a laver',
            status: 'allumé'

        }
    ];

    constructor(private httpClient: HttpClient) {

    }

    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice()); //slice pour emettre une copie
    }

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = "allumé";
        }
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = "eteint";
        }
        this.emitAppareilSubject();

    }


    switchOn(index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();

    }

    switchOff(index: number) {
        this.appareils[index].status = 'eteint';
        this.emitAppareilSubject();

    }

    getAppareilById(id: number) {
        const appreil = this.appareils.find((appareilObject) => {
            return appareilObject.id === id;
        }
        );
        return appreil;

    }

    addappareil(name: string, status: string) {
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }

    saveAppareilTopServer() {
        //  this.httpClient.post('https://http-client-demo-8688c-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils).subscribe(
        this.httpClient.put('https://http-client-demo-8688c-default-rtdb.europe-west1.firebasedatabase.app/appareils.json', this.appareils).subscribe(

            () => {
                console.log('Enregistrement terminé');
            },
            (error) => {
                console.log('Erreur de sauvgard!' + error);
            }
        )
    }

    getAppareilFromServer() {

        this.httpClient.get<any[]>('https://http-client-demo-8688c-default-rtdb.europe-west1.firebasedatabase.app/appareils.json').subscribe(
            (reponse) => {
                this.appareils = reponse;
                this.emitAppareilSubject();
            },
            (error) => {
                console.log('erreur de chargement' + error);
            }
        );

    }

}