/**
 * Deactivates the dark mode if active by removing the style generated by
 * ConstructDarkModeStyle function in the document tree,
 * and removing blinds storage
 * @param: `NULL`
 * @returns `void`
 */
export function deactivateDarkMode()
{
    let style = "";

    if (style = document.querySelector(`style#${blindsStyleId}`)) {
        document.head.removeChild(style);
        deleteStorage();
        switchIcon();
    }
}
