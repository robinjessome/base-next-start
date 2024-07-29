import type { Meta, StoryObj } from '@storybook/react'

import { Template } from '.'

export default {
  title: 'System/Template',
  component: Template,
  args: {
    text: 'Hello world!',
  },
} satisfies Meta<typeof Template>

type Story = StoryObj<typeof Template>

export const Default: Story = {}
