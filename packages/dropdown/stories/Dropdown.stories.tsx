import type { ComponentStoryObj, StoryFn } from '@storybook/react';

import { ButtonKind, ButtonSize } from '@launchpad-ui/button';
import { Menu, MenuItem } from '@launchpad-ui/menu';
import { userEvent, within } from '@storybook/testing-library';

import { sleep } from '../../../.storybook/utils';
import { Dropdown, DropdownButton } from '../src';

export default {
  component: Dropdown,
  subcomponents: { DropdownButton },
  title: 'Components/Dropdown',
  description: 'Dropdowns display a list of actions or options to a user.',
  parameters: {
    status: {
      type: import.meta.env.PACKAGE_STATUS__DROPDOWN,
    },
  },
  decorators: [
    (StoryFn: StoryFn) => (
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: '100vh',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StoryFn />
      </div>
    ),
  ],
};

type Story = ComponentStoryObj<typeof Dropdown>;

export const Example: Story = {
  args: {
    onInteraction: undefined,
    onStateChange: () => undefined,
    onSelect: () => undefined,
    children: [
      <DropdownButton size={ButtonSize.SMALL} kind={ButtonKind.PRIMARY} key="1">
        Click this button
      </DropdownButton>,
      <Menu key="2">
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>,
    ],
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    await sleep(500);
    await userEvent.click(canvas.getByRole('button'));
  },
};

export const WithHtmlButton: Story = {
  args: {
    onInteraction: undefined,
    onStateChange: () => undefined,
    onSelect: () => undefined,
    children: [
      <button key="1">native html button</button>,
      <Menu key="2">
        <MenuItem>Item 1</MenuItem>
      </Menu>,
    ],
  },
};

export const NoArrow: Story = {
  args: {
    onInteraction: undefined,
    onStateChange: () => undefined,
    onSelect: () => undefined,
    children: [
      <DropdownButton hideCaret kind={ButtonKind.PRIMARY} key="1">
        DropdownButton
      </DropdownButton>,
      <Menu key="2">
        <MenuItem>Item 1</MenuItem>
      </Menu>,
    ],
  },
};
