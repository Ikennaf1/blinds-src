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
        // node.setAttribute("alt", "Dark mode powered by Blinds");
        node.innerHTML = '<span style="display:none">Dark mode powered by Blinds</span>';
        if (checkStorage()) {
            node.innerHTML += getIconNormal();
        } else {
            node.innerHTML += getIconDark();
        }
    }
}
