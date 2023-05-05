/**
 * This function runs whenever the toggle icon is clicked
 */
export function onToggle()
{
    toggleFuncs.map((func) => {
        func();
    });
}

/**
 * This function runs whenever the icon is toggled to dark mode
 */
export function onToggleDark()
{
    toggleDarkFuncs.map((func) => {
        func();
    });
}

/**
 * Toggles the icons
 */
export function blindsToggle()
{
    if (checkStorage()) {
        deactivateDarkMode();
    } else {
        activateDarkMode();
        onToggleDark();
    }
    onToggle();
}
