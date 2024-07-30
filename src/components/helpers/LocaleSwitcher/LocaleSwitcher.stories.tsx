import { type Meta, type StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'

import { LocaleSwitcher } from '.'

export default {
  title: 'System/LocaleSwitcher',
  component: LocaleSwitcher,
  args: {
    text: 'Hello world!',
  },
  // TODO figure out how to apply this Context globally
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en">
        <Story />
      </NextIntlClientProvider>
    ),
  ],
} satisfies Meta<typeof LocaleSwitcher>

type Story = StoryObj<typeof LocaleSwitcher>

export const Default: Story = {}
