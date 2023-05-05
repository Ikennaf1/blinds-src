/**
 * Holds the dark mode final style
 */
export var blindsStylesFinal;

/**
 * Defines the dark mode final style
 * @param {string} style
 */
export function setBlindsStylesFinal(style)
{
    blindsStylesFinal = style;
}

/**
 * Holds the dark mode style
 */
export var blindsStyles = {
    "*": {
        "color": "hsl(228, 5%, 70%)",
        "background-color": "hsl(228, 20%, 10%)",
        "border-color": "hsl(228, 20%, 30%)"
    }
};

/**
 * Defines the dark mode style
 * @param {string} style
 */
export function setBlindsStyles(style)
{
    blindsStyles = style;
}

/**
 * Holds the dark mode icons
 */
export var blindsIcons = {
    "normal": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path d=\"M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z\" /></svg>",
    "dark": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"w-6 h-6\"><path fill-rule=\"evenodd\" d=\"M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z\" clip-rule=\"evenodd\" /></svg>"
};

/**
 * Sets the dark mode icons
 * @param {string} style
 */
export function setBlindsIcons(icons)
{
    blindsIcons = icons;
}

/**
 * Holds the name of the storage type
 */
export var blindsStorageType = 'localstorage';

/**
 * Sets the storage type to use
 * 
 * Options are `localstorage` and `cookie`
 * @param {string} storageType
 */
export function setBlindsStorageType(storageType)
{
    blindsStorageType = storageType;
}

/**
 * Defines the name for the main cookie or local storage
 */
export var blindsStorageKey = 'blinds_cookie';

/**
 * Sets the storage name, or key for value reference
 * @param {string} storageType
 */
export function setBlindsStorageKey(storageKey)
{
    blindsStorageKey = storageKey;
}

/**
 * Holds the `id` string for the style tag
 */
export var blindsStyleId = 'blinds_style_id';

/**
 * Sets the `id` string to use for the style tag
 * @param {string} storageType
 */
export function setBlindsStyleId(styleId)
{
    blindsStyleId = styleId;
}

/**
 * Holds the `id` string for the clickable icons
 */
export var blindsIconsId = 'blinds_id';

/**
 * Sets the `id` string to use for the icons
 * @param {string} storageType
 */
export function setBlindsIconsId(iconsId)
{
    blindsIconsId = iconsId;
}

/**
 * Holds `true` if user wants to show icons, otherwise `false`
 */
export var blindsShowIcons = true;

/**
 * Sets the boolean value for the blindsShowIcons variable
 * @param {string} storageType
 */
export function setBlindsShowIcons(value)
{
    blindsShowIcons = value;
}

/**
 * Holds the name of functions to run on toggle
 */
export var toggleFuncs = [];

/**
 * Sets the names of functions to run om toggle
 */
export function setOnToggle(...func)
{
    toggleFuncs = func;
}
