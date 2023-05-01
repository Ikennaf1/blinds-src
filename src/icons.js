/**
 * Retrieves the normal icon
 */
export function getIconNormal()
{
    return blindsIcons.normal;
}

/**
 * Retrieves the dark icon
 */
export function getIconDark()
{
    return blindsIcons.dark;
}

/**
 * Shows icon
 */
export function showIcon()
{
    switchIcon();
}

/**
 * Switches icon
 */
export function switchIcon()
{
    let node = document.querySelector(`#${blindsDomIconsId}`);
    if (checkStorage()) {
        node.innerHTML = blindsIcons.normal;
    } else {
        node.innerHTML = blindsIcons.dark;
    }
}
