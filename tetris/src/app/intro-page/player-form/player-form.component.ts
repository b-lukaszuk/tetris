import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { PlayerDataService } from '../../services/player-data.service';

@Component({
    selector: 'player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.css'],
})
export class PlayerFormComponent implements OnInit {
    constructor(
        private _playerDataService: PlayerDataService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) { }


    public playerForm: FormGroup;

    public colorPalettes = ['normal', 'high-contrast'];
    public colorOnSelect() {
        this._router.navigate(['/introPage',
            this.playerForm.value["colorPalette"]]);
    }

    public login() {
        this._playerDataService.setPlayerData(
            this.playerForm.value["playerName"],
            this.playerForm.value["playerId"],
            0
        );
        this._playerDataService.authentication().then((res) => {
            if (res) {
                // rekomendacja Chrystiana
                this._router.navigate(
                    [`/gamePage/${this.playerForm.value["colorPalette"]}`]);
                console.log('login successful');
            } else {
                alert("login failed");
            }
        });
    }

    ngOnInit() {
        this.playerForm = new FormGroup(
            {
                playerName: new FormControl(
                    this._playerDataService.getPlayerName(),
                    [Validators.required,
                    Validators.minLength(5)]),
                playerId: new FormControl("", [Validators.required,
                Validators.minLength(4)]),
                colorPalette: new FormControl(""),
            }
        );

        this._activatedRoute.params.subscribe(params => {
            this.playerForm.patchValue({ "colorPalette": params["color"] });
        }); // rekomendacja Chrystiana


        this._playerDataService.setPlayerData(
            this.playerForm.value["playerName"],
            this.playerForm.value["playerId"]
        );
    }

    ngOnDestroy() {
        this._playerDataService.setPlayerData(
            this.playerForm.value["playerName"],
            this.playerForm.value["playerId"]
        );
    }
}
