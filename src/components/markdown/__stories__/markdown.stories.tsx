import type { Meta, StoryObj } from '@storybook/react';
import Markdown from '../markdown';

const meta: Meta<typeof Markdown> = {
  component: Markdown,
  title: 'Components/Markdown',
};
export default meta;

type Story = StoryObj<typeof Markdown>;

export const Overview: Story = {
  args: {
    href: '/?path=/docs/welcome--docs',
    size: Markdown.sizes.MEDIUM,
    children: 'This is a Markdown to welcome page',
  },
};
