/**
 * Toggles the icons
 */
export function blindsToggle()
{
    if (checkStorage()) {
        deactivateDarkMode();
    } else {
        activateDarkMode();
    }
}
