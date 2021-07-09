class HistoryItem {
    private seconds: number = 0;
    private timestamp: string = '';
    private actionName: string = '';
    constructor(seconds: number, timestamp: string, actionName: string) {
        this.seconds = seconds;
        this.timestamp = timestamp;
        this.actionName = actionName;
    }
    public getSecs() {
        return this.seconds;
    }

    public getTimestamp() {
        return this.timestamp;
    }

    public getActionName() {
        return this.actionName;
    }
}

export { HistoryItem };
