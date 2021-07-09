import { Component, OnInit, Input } from '@angular/core';
import { PlayerDataService } from '../../services/player-data.service';

@Component({
    selector: 'player-info',
    templateUrl: './player-info.component.html',
    styleUrls: ['./player-info.component.css'],
})
export class PlayerInfoComponent implements OnInit {
    public playerName: string;
    public playerId: string;

    constructor(private _playerDataService: PlayerDataService) { }

    ngOnInit() {
        let playerData = this._playerDataService.getPlayerData();
        this.playerName = playerData.playerName;
        this.playerId = playerData.playerId;
    }

    ngOnDestroy() { }
}
