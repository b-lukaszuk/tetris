import { Pipe, PipeTransform } from '@angular/core';

import { IHighScore } from '../interfaces/highScore';

@Pipe({
    name: 'filterByPlayerName',
})
export class FilterByPlayerNamePipe implements PipeTransform {
    transform(
        highScores: IHighScore[],
        playerName: string,
        active: boolean
    ): IHighScore[] {
        if (!active) {
            return highScores;
        } else {
            let result = highScores.filter((score) => {
                return score.name === playerName;
            });
            return result;
        }
    }
}
