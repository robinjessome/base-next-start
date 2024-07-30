import '../src/app/global.css'

import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        'xs': {
          name: 'Tailwind - xs',
          type: 'mobile',
          styles: {
            width: '375px',
            height: '100%',
          },
        },
        'sm': {
          name: 'Tailwind - sm',
          type: 'mobile',
          styles: {
            width: '640px',
            height: '100%',
          },
        },
        'md': {
          name: 'Tailwind - md',
          type: 'tablet',
          styles: {
            width: '768px',
            height: '100%',
          },
        },
        'lg': {
          name: 'Tailwind - lg',
          type: 'desktop',
          styles: {
            width: '1024px',
            height: '100%',
          },
        },
        'xl': {
          name: 'Tailwind - xl',
          type: 'desktop',
          styles: {
            width: '1280px',
            height: '100%',
          },
        },
        '2xl': {
          name: 'Tailwind - 2xl',
          type: 'desktop',
          styles: {
            width: '1536px',
            height: '100%',
          },
        },
      },
    },
  },
  tags: ['autodocs'],
}

export default preview
