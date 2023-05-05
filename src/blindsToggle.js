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
 * This function runs whenever the icon is toggled to normal mode
 */
export function onToggleNormal()
{
    toggleNormalFuncs.map((func) => {
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
        onToggleNormal();
    } else {
        activateDarkMode();
        onToggleDark();
    }
    onToggle();
}
