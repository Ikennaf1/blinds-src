/**
 * Toggles the icons
 */
export function blindsToggle()
{
    if (checkCookie()) {
        deactivateDarkMode();
    } else {
        activateDarkMode();
    }
}
