import { FC } from "react";
/**
 * This function extends the style of the component, or StyledComponent, as the case may be.
 * @param {FC<T> | AnyStyledComponent} comp
 * @param {() => {}} extendStyle
 */
declare const extendable: <T extends unknown>(comp: FC<T> | import("styled-components").StyledComponent<any, any, any, any> | import("styled-components").StyledComponent<any, any, any, never>, extendStyle: () => {}) => import("styled-components").StyledComponent<FC<T> | import("styled-components").StyledComponent<any, any, any, any> | import("styled-components").StyledComponent<any, any, any, never>, any, {}, never>;
export default extendable;
