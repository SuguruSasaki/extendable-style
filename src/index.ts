import { FC } from 'react'
import styled, { AnyStyledComponent } from 'styled-components'

/**
 * This function extends the style of the component, or StyledComponent, as the case may be.
 * @param {FC<T> | AnyStyledComponent} comp
 * @param {() => {}} extendStyle
 */
const extendable = <T extends unknown>(
  comp: FC<T> | AnyStyledComponent,
  extendStyle: () => {}
) => {
  return styled(comp)(extendStyle())
}

export default extendable
