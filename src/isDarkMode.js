/**
 * Checks if the browser is set to dark mode
 * @param: `NULL`
 * @returns `boolean`: `true` if browser is in dark mode, else `false`
 */
export function isDarkMode()
{
    let mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
    let isDarkMode = mediaQueryObj.matches;

    return isDarkMode;
}
