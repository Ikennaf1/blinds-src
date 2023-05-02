/**
 * Saves info to cookie or local storage, based on admin preference
 */
export function setStorage(name = blindsStorageKey, value = "active")
{
    switch (blindsStorageType) {
        case "cookie":
            setCookie(name, value);
            break;
        case "localstorage":
            setLocalStorage(name, value);
            break;
        default:
            break;
    }
}

/**
 * Retrieves info from cookie or local storage, based on admin preference
 */
export function getStorage(name = blindsStorageKey)
{
    switch (blindsStorageType) {
        case "cookie":
            return getCookie(name);
        case "localstorage":
            return getLocalStorage(name);
        default:
            return;
    }
}

/**
 * Checks for info in cookie or local storage, based on admin preference
 */
export function checkStorage(name = blindsStorageKey)
{
    switch (blindsStorageType) {
        case "cookie":
            return checkCookie(name);
        case "localstorage":
            return checkLocalStorage(name);
        default:
            return;
    }
}

/**
 * Deletes info from cookie or local storage, based on admin preference
 */
export function deleteStorage(name = blindsStorageKey)
{
    switch (blindsStorageType) {
        case "cookie":
            deleteCookie(name);
            break;
        case "localstorage":
            deleteLocalStorage(name);
            break;
        default:
            break;
    }
}
