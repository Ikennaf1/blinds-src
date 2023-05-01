/**
 * First function that runs on load
 */
export function blindsInit()
{
    if (isDarkMode() && !checkStorage("blindsInitialized")) {
        activateDarkMode();
    }
    
    if (!checkStorage("blindsInitialized")) {
        setStorage("blindsInitialized", "yes");
    }

    if (checkStorage()) {
        activateDarkMode();
    } else {
        deactivateDarkMode();
    }
    switchIcon();
}
