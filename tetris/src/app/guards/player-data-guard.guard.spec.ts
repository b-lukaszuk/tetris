import { TestBed } from '@angular/core/testing';

import { PlayerDataGuardGuard } from './player-data-guard.guard';

describe('PlayerDataGuardGuard', () => {
  let guard: PlayerDataGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlayerDataGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
