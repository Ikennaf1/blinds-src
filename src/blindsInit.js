/**
 * Main function which calls the other functions, like an entry point
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
