import type { ComponentStoryObj } from '@storybook/react';

import { Snackbar } from '../src';

export default {
  component: Snackbar,
  title: 'Components/Snackbar',
  description: 'An element that provides brief messages about app processes with a CTA.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__SNACKBAR,
    },
  },
};

type Story = ComponentStoryObj<typeof Snackbar>;

export const Error: Story = {
  args: {
    kind: 'error',
    title: 'Snackbar title',
    description: 'This is a message about an app process.',
    cta: <a href="/">Please try again</a>,
  },
};

export const Info: Story = {
  args: { kind: 'info', description: 'This is a message about an app process.' },
};

export const Warning: Story = {
  args: {
    kind: 'warning',
    description: 'This is a message about an app process.',
    cta: <a href="/">Please try again</a>,
  },
};