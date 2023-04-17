/**
 * Deactivates the dark mode if active by removing the style generated by
 * ConstructDarkModeStyle function in the document tree, and unsetting the blinds
 * cookie
 * @param: `NULL`
 * @returns `void`
 */
export function deactivateDarkMode()
{
    let style = "";

    if (style = document.querySelector(`style#${blindsDomStyleId}`)) {
        document.head.removeChild(style);
        deleteCookie();
        switchIcon();
    }
}
