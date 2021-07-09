import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayerDataService } from '../services/player-data.service';

@Injectable({
    providedIn: 'root',
})
export class PlayerDataGuardGuard implements CanActivate {
    constructor(
        private _playerDataService: PlayerDataService,
        private _router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        // https://juristr.com/blog/2018/11/better-route-guard-redirects/#blocking-is-not-enough
        let result = this._playerDataService.authentication().then((res) => {
            if (res) {
                return true;
            } else {
                this._router.navigateByUrl('/introPage');
                alert('Authentication failed.');
                return false;
            }
        });
        return result;
    }
}
