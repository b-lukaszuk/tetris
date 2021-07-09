import { HistoryItem } from './historyItem/historyItem';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortHistoryItems',
})
export class SortHistoryItemsPipe implements PipeTransform {
    transform(
        historyItems: Array<HistoryItem>,
        ascending: boolean = true
    ): Array<HistoryItem> {
        if (ascending) {
            historyItems = historyItems.sort(
                (item1: HistoryItem, item2: HistoryItem) => {
                    return item1.getSecs() - item2.getSecs();
                }
            );
        } else {
            historyItems = historyItems.sort(
                (item1: HistoryItem, item2: HistoryItem) => {
                    return item2.getSecs() - item1.getSecs();
                }
            );
        }
        return historyItems;
    }
}
