import { FilterByPlayerNamePipe } from './filter-by-player-name.pipe';

describe('FilterByPlayerNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByPlayerNamePipe();
    expect(pipe).toBeTruthy();
  });
});
