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
    if (blindsShowIcons === true) {
        let node = document.querySelector(`#${blindsIconsId}`);
        if (checkStorage()) {
            node.innerHTML = blindsIcons.normal;
        } else {
            node.innerHTML = blindsIcons.dark;
        }
    }
}
