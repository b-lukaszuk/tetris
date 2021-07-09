import { HistoryItem } from './historyItem/historyItem';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'historyFilter',
})
export class HistoryFilterPipe implements PipeTransform {
    transform(
        historyItems: Array<HistoryItem>,
        searchTerm: string
    ): Array<HistoryItem> {
        if (searchTerm === 'all') {
            return historyItems;
        } else {
            return historyItems.filter((hItem) => {
                return hItem.getActionName() === searchTerm;
            });
        }
    }
}
