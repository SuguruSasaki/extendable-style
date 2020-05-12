"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
/**
 * This function extends the style of the component, or StyledComponent, as the case may be.
 * @param {FC<T> | AnyStyledComponent} comp
 * @param {() => {}} extendStyle
 */
const extendable = (comp, extendStyle) => {
    return styled_components_1.default(comp)(extendStyle());
};
exports.default = extendable;
