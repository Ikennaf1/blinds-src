/**
 * Saves info to cookie or local storage, based on admin preference
 */
function setStorage(name = blindsStorageKey, value = "active")
{
    switch (blindsStorageType) {
        case "cookie":
            setCookie(name, value);
            break;
        case "localstorage":
            break;
        default:
            break;
    }
}

/**
 * Retrieves info from cookie or local storage, based on admin preference
 */
function getStorage(name = blindsStorageKey)
{
    switch (blindsStorageType) {
        case "cookie":
            return getCookie(name);
        case "localstorage":
            return;
        default:
            return;
    }
}

/**
 * Checks for info in cookie or local storage, based on admin preference
 */
function checkStorage(name = blindsStorageKey)
{
    switch (blindsStorageType) {
        case "cookie":
            return checkCookie(name);
        case "localstorage":
            return;
        default:
            return;
    }
}

/**
 * Deletes info from cookie or local storage, based on admin preference
 */
function deleteStorage(name = blindsStorageKey)
{
    switch (blindsStorageType) {
        case "cookie":
            deleteCookie(name);
            break;
        case "localstorage":
            break;
        default:
            break;
    }
}
