import { AppareilComponent } from './../appareil/appareil.component';
import { Subject } from "rxjs/internal/Subject";

export class AppareilService {
    appareilSubject = new Subject<any[]>();

    private appareils = [
        {
            id: 1,
            name: 'machine a laver',
            status: 'allumé'

        },
        {
            id: 2,
            name: 'television',
            status: 'allumé'

        },
        {
            id: 3,
            name: 'ordianteur',
            status: 'eteint'

        }
    ];

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

}