import { TestBed } from '@angular/core/testing';

import { PlayerDataService } from '../services/player-data.service';

describe('PlayerDataService', () => {
    let service: PlayerDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PlayerDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
