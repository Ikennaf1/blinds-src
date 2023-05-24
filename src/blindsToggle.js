/**
 * This function runs whenever the toggle icon is clicked
 */
export function setOnToggle()
{
    toggleFuncs.map((func) => {
        func();
    });
}

/**
 * This function runs whenever the icon is toggled to dark mode
 */
export function setOnToggleDark()
{
    toggleDarkFuncs.map((func) => {
        func();
    });
}

/**
 * This function runs whenever the icon is toggled to normal mode
 */
export function setOnToggleNormal()
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
        setOnToggleNormal();
    } else {
        activateDarkMode();
        setOnToggleDark();
    }
    setOnToggle();
}
