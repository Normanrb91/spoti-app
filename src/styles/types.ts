import type * as Stitches from '@stitches/react'

import { config } from './stitches'

export type CSS = Stitches.CSS<typeof config>
export type PropertyValue<T extends keyof Stitches.CSSProperties> = Stitches.PropertyValue<T>
export type VariantProps<T extends { [key: string]: any }> = Stitches.VariantProps<T>
