import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IHighScore } from '../interfaces/highScore';

@Injectable({
    providedIn: 'root',
})
export class HighScoresService {
    private _scoresUrl: string = 'http://tetris.chrum.it/scores';
    private _headersForScores: HttpHeaders = new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',

    });

    constructor(private _http: HttpClient) { }

    public getHighScores(): Observable<IHighScore[]> {
        return this._http.get<IHighScore[]>(this._scoresUrl, {
            headers: this._headersForScores,
        });
    }

    public pushToHighScores(newScore: IHighScore
    ): Promise<Object | IHighScore[]> {
        return this._http
            .post(this._scoresUrl, newScore,
                { headers: this._headersForScores })
            .toPromise()
            .then((data) => {
                return data;
            });
    }
}
