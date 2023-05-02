/**
 * Sets value in local storage
 * @param {string} name key of value to store
 * @param {string} value Value to store
 * @returns `void`
 */
export function setLocalStorage(name, value) {
    window.localStorage.setItem(name, value);
}

/**
 * Gets the value if stored
 * @param {string} name Name of the cookie
 * @returns `string` value of cookie parameter or null if not found
 */
export function getLocalStorage(name) {
    return window.localStorage.getItem(name);
}

/**
 * Checks if storage is set
 * @param {string} name Name or key of the stored value
 * @returns `boolean`
 */
export function checkLocalStorage(name) {
    if (getLocalStorage(name) !== null) {
        return true;
    }
    return false;
}

/**
 * Deletes the stored info if it exists
 * @param {string} name Name or key of the stored value
 * @returns `void`
 */
export function deleteLocalStorage(name) {
    if (checkLocalStorage(name)) {
        window.localStorage.removeItem(name);
    }
}
