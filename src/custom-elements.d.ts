import {
  FASTDesignSystemProvider,
  FASTMenu,
  FASTMenuItem,
  FASTTextField,
} from '@microsoft/fast-components'
import React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'fast-design-system-provider': React.DetailedHTMLProps<
        any,
        HTMLElement
      >
      'fast-text-field': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >
      'fast-menu': React.DetailedHTMLProps<
        React.HTMLAttributes<FASTMenu>,
        FASTMenu
      >
      'fast-menu-item': React.DetailedHTMLProps<
        React.HTMLAttributes<FASTMenuItem>,
        FASTMenuItem
      >
    }
  }
}
