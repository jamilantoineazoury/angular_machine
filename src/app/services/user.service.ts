import { Subject } from 'rxjs/internal/Subject';
import { User } from './../models/Users.model';
export class UserService {
    private users: User[] = [
        {
            firstName: 'james',
            lastName: 'smith',
            email: 'jamessmith.gmail.com',
            drinkPreference: 'coka',
            hobbies: [
                'coder',
                'la degustation du café'
            ]

        },
        {
            firstName: 'jamil',
            lastName: 'azoury',
            email: 'jamilazoury.gmail.com',
            drinkPreference: 'pepsi',
            hobbies: [
                'dormir',
                'jouer au cartes'
            ]

        }
    ];

    userSubject = new Subject<User[]>();
    emitUsers() {
        this.userSubject.next(this.users.slice());
    }
    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }

}