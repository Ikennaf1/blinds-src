/**
 * Constructs the data given in the blinds.style.json to CSS
 * @returns `string`: The constructed CSS
 */
export function constructDarkModeStyle()
{
    let style = "";
    let temp = "";
    let value = "";

    let styles = blindsStyles;

    Object.keys(blindsStyles).map((selector) => {
        temp = `\n${selector} {\n`;
        style += temp;
        Object.keys(styles[selector]).map((property) => {
            value = styles[selector][property];
            temp = `\t${property}: ${value} !important; \n`;
            style += temp;
        });
        style += "}\n";
    });

    return style;
}
