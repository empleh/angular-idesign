import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserManager } from '../4-managers/user-manager.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    userLoaded: Observable<boolean>;

    constructor(private userManager: UserManager) {
        this.userLoaded = this.userManager.userLoadedObs;
    }

    ngOnInit() {
        this.userManager.login()
    }
}
