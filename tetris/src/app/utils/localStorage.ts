/**
 * returns content of a key from localStorage or defaultValue if no key is there
 */
function getFromLocalStorage(key: string, defaultValue: any): any {
    let result: any = JSON.parse(window.localStorage.getItem(key));
    // if locStor does not contain result we get null, so
    return result !== null ? result : defaultValue;
}

/**
 * pushes {key1: value1, key2?: value2?, ...} from dict to localStorage
 */
function pushDictToLocalStorage(dictionary: Object): void {
    for (const [key, value] of Object.entries(dictionary)) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}

function isKeyInLocalStorage(key: string): boolean {
    let result = JSON.parse(window.localStorage.getItem(key));
    let isIn = result !== null;
    return isIn;
}

export { getFromLocalStorage, pushDictToLocalStorage, isKeyInLocalStorage };
