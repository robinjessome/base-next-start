import { type Meta, type StoryObj } from '@storybook/react'

import { LocaleSwitcher } from '.'

export default {
  title: 'System/LocaleSwitcher',
  component: LocaleSwitcher,
  args: {
    text: 'Hello world!',
  },
} satisfies Meta<typeof LocaleSwitcher>

type Story = StoryObj<typeof LocaleSwitcher>

export const Default: Story = {}
