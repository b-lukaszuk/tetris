import { Pipe, PipeTransform } from '@angular/core';
import { IHighScore } from '../interfaces/highScore';

@Pipe({
    name: 'highScoresSort',
})
export class HighScoresSortPipe implements PipeTransform {
    transform(
        highScoreItems: IHighScore[],
        ascending: boolean = true
    ): IHighScore[] {
        let sortedList: IHighScore[] = [];
        if (ascending) {
            sortedList = highScoreItems.sort((item1, item2) => {
                return item1.score - item2.score;
            });
        } else {
            sortedList = highScoreItems.sort((item1, item2) => {
                return item2.score - item1.score;
            });
        }
        return sortedList;
    }
}
