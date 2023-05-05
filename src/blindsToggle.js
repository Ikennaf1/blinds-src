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
 * Toggles the icons
 */
export function blindsToggle()
{
    if (checkStorage()) {
        deactivateDarkMode();
    } else {
        activateDarkMode();
    }
    onToggle();
}
