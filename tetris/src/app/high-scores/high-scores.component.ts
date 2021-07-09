import { Component, OnInit } from '@angular/core';

import { FilterByPlayerNamePipe } from './filter-by-player-name.pipe';
import { HighScoresService } from '../services/high-scores.service';
import { HighScoresSortPipe } from './high-scores-sort.pipe';
import { IHighScore } from '../interfaces/highScore';
import { PlayerDataService } from '../services/player-data.service';

@Component({
    selector: 'high-scores',
    templateUrl: './high-scores.component.html',
    styleUrls: ['./high-scores.component.css'],
})
export class HighScoresComponent implements OnInit {
    constructor(
        private _highScoresService: HighScoresService,
        private _playerDataService: PlayerDataService
    ) { }

    public highScores: IHighScore[] = [];
    public playerName: string = '';
    public playerScore: number = 0;
    // public intervalId: any = 0;
    public timeoutId: any = 0;

    public sortAsc: boolean = false;
    public applyFilterName = false;

    public toggleSortAsc() {
        this.sortAsc = !this.sortAsc;
    }

    public toggleFilterByName() {
        this.applyFilterName = !this.applyFilterName;
    }

    public getHighScoresFromServer() {
        this._highScoresService.getHighScores().subscribe((data) => {
            this.highScores = data;
        });
    }

    ngOnInit(): void {
        this.playerName = this._playerDataService.getPlayerName();
        this.playerScore = this._playerDataService.getPlayerScore();

        if (this.playerName.trim() !== '' && this.playerScore !== 0) {
            this._highScoresService.pushToHighScores({
                name: this.playerName,
                score: this.playerScore,
            });
        }

        this.getHighScoresFromServer();

        this.timeoutId = setTimeout(() => {
            this.getHighScoresFromServer();
        }, 5000);

        // this.intervalId = setInterval(() => {
        //     console.log('refreshing high scores list');
        //     this.getHighScoresFromServer();
        // }, 30000);
    }

    ngOnDestroy() {
        if (this.timeoutId !== 0) {
            clearInterval(this.timeoutId);
        }
        // if (this.intervalId !== 0) {
        //     clearInterval(this.intervalId);
        // }
    }
}
