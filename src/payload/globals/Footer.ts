import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'theme',
    //   type: 'radio',
    //   options: [
    //     {
    //       label: 'Hide',
    //       value: 'false',
    //     },
    //     {
    //       label: 'Show',
    //       value: 'true',
    //     },
    //   ],
    //   defaultValue: 'false',
    // },
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
