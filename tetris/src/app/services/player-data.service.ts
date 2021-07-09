import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IAuthToken } from '../interfaces/authToken';
import {
    pushDictToLocalStorage,
    getFromLocalStorage,
} from '../utils/localStorage';

@Injectable({
    providedIn: 'root',
})
export class PlayerDataService {
    constructor(private _http: HttpClient) { }

    private _checkTokenUrl: string = 'https://tetris.chrum.it/check-token';
    private _headersForTokenAuth: HttpHeaders = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    });

    public getPlayerName(): string {
        return getFromLocalStorage('playerName', '');
    }

    public getPlayerScore(): number {
        return getFromLocalStorage('playerScore', 0);
    }

    public getPlayerId(): string {
        return getFromLocalStorage('playerId', '');
    }

    public getPlayerData() {
        return {
            playerName: this.getPlayerName(),
            playerId: this.getPlayerId(),
            playerScore: this.getPlayerScore(),
        };
    }

    public setPlayerData(name: string = '', id: string = '', score: number = 0) {
        pushDictToLocalStorage({
            playerName: name,
            playerId: id,
            playerScore: score,
        });
    }

    public authentication(): Promise<void | boolean> {
        return this.isTokenCorrect(this.getPlayerId());
    }

    // prawidlowy token to 4 dowolne cyfry, np. "1234"
    // do skonczenia, cos nie dziala tak jak trzeba
    public isTokenCorrect(token): Promise<void | boolean> {
        const request: Object = { 'auth-token': token };
        return this._http
            .post<IAuthToken>(this._checkTokenUrl, request, {
                headers: this._headersForTokenAuth,
            })
            .toPromise()
            .then((data) => {
                return data['success'];
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
