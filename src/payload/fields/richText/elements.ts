import type { RichTextElement } from '@payloadcms/richtext-slate/dist/types'

import label from './label'
import largeBody from './largeBody'

const elements: RichTextElement[] = [
  'blockquote',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'link',
  'ol',
  'ul',
  'textAlign',
  'relationship',
  'indent',
  'upload',
  largeBody,
  label,
]

export default elements
