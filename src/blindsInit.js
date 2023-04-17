/**
 * First function that runs on load
 */
export function blindsInit()
{
    if (isDarkMode() && !checkCookie("blindsInitialized")) {
        activateDarkMode();
    }
    
    if (!checkCookie("blindsInitialized")) {
        setCookie("blindsInitialized", "yes");
    }

    if (checkCookie()) {
        activateDarkMode();
    } else {
        deactivateDarkMode();
    }
    switchIcon();
}
